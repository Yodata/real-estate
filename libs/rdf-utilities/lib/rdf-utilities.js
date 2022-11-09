// @ts-check

import check from 'check-types'
import flatten from 'lodash/fp/flatten'
import flow from 'lodash/fp/flow'
import keys from 'lodash/fp/keys'
import map from 'lodash/fp/map'
import reverse from 'lodash/fp/reverse'
import $rdf, {
  IndexedFormula,
  NamedNode,
  Node,
  Statement,
  Literal,
  BlankNode
} from 'rdflib'
import uuid from 'uuid/v1'
import root from 'window-or-global'
import context from './context'
import getUrlNamespace from './getUrlNamespace'
import debrac from './debrac'
import shrinkUrl from './shrinkUrl'
import shrinkRdfNode from './shrinkRdfNode'

const checkType = check.assert

export { getUrlNamespace }
export { debrac }

export function isTermInstance (value) {
  return value instanceof NamedNode ||
    value instanceof BlankNode ||
    value instanceof Literal
}

export function termFromValue (value, context) {
  if (isTermInstance(value)) {
    return value
  }
}

export function sym (v, context = {}) {
  if (typeof v === 'string') {
    if (context.hasOwnProperty(v)) {
      return context[v]
    }
    return v[0] === '<' ? $rdf.sym(v.slice(1, -1)) : $rdf.sym(v)
  }
  if (typeof v === 'object') {
    if (v instanceof $rdf.NamedNode) {
      return v
    }
    if (v.termType === 'NamedNode') {
      return $rdf.sym(v.value)
    }
    if (v.id || v.url || v.uri) {
      return $rdf.sym(v.id || v.url || v.uri)
    }
  }
  if (typeof v === 'undefined') {
    return v
  }
  throw new Error(`unable to make symbol for ${v}`)
}

export function docname (uri) {
  if (uri) {
    const str = typeof uri === 'object' ? uri.value : uri
    const start = str.lastIndexOf('/') + 1
    const end = str.lastIndexOf('#')
    return end === -1 ? str.substring(start) : str.substring(start, end)
  }
  throw new TypeError('docname expected a string')
}

// todo: this should be more robust or broken out across functions
export function lit (value, defaultValue) {
  if (typeof value === 'string') {
    return value
  }
  if (value instanceof Array) {
    return value.toString()
  }
  if (value && value.value) {
    return value.value
  }
  return defaultValue
}

/**
 * create a new id
 */
export function createId () {
  return uuid()
}

export function forceArray (value) {
  if (Array.isArray(value)) {
    return value
  }
  if (typeof value === 'undefined' || value === null) {
    return []
  }
  return new Array(value)
}

export function mergeValues (currentValue, value) {
  if (typeof value === 'undefined') {
    return currentValue
  }

  if (typeof currentValue === 'undefined') {
    return value
  }

  if (currentValue === value) {
    return currentValue
  }

  if (Array.isArray(currentValue)) {
    return currentValue.includes(value)
      ? currentValue
      : currentValue.push(value)
  }

  return [currentValue, value]
}

export const find = (kb) =>
  (subject,
    predicate,
    object,
    graph
  ) => {
    checkType.instance(kb, IndexedFormula)
    if (subject) {
      checkType.instance(subject, NamedNode)
    }
    if (predicate) {
      checkType.instance(
        predicate,
        NamedNode
      )
    }
    if (object) {
      checkType.instance(
        object,
        Node
      )
    }
    if (graph) {
      checkType.instance(graph, Node)
    }
    return kb.match(subject, predicate, object, graph)
  }

export const findSubject = (graph) =>
  (subject) => {
    return graph.match(sym(subject))
  }

export const jsonReducer = (doc = {}, statement) => {
  const { subject, predicate, object } = statement

  if (!doc[subject]) {
    doc[subject] = { id: typeof subject === 'string' ? subject : subject.value }
  }

  if (!doc[subject][predicate]) {
    doc[subject][predicate] = []
  }

  doc[subject][predicate].push(object)
  return doc
}

export function toJson (statements) {
  return statements.reduce(jsonReducer, {})
}

export const createContextTransformer = (
  context = {},
  vocab = '',
  shrinkLiterals = false
) => {
  return function (term) {
    return termToContext(term, context, vocab, shrinkLiterals)
  }
}

export const mapStatementToContext = (
  statement,
  context,
  vocab,
  shrinkLiterals
) => {
  if (!context) return statement
  const transform = createContextTransformer(context, vocab, shrinkLiterals)
  return {
    subject: transform(statement.subject),
    predicate: transform(statement.predicate),
    object: transform(statement.object),
    graph: statement.graph
  }
}

export const statementToContext = (
  context,
  vocab,
  shrinkLiterals
) => {
  const transform = createContextTransformer(context, vocab, shrinkLiterals)
  return (st) => ({
    subject: transform(st.subject),
    predicate: transform(st.predicate),
    object: transform(st.object),
    graph: st.graph
  })
}

export const predicateToContext = (context, vocab) => {
  const transform = createContextTransformer(context, vocab)
  return (st) => ({
    subject: st.subject,
    predicate: transform(st.predicate),
    object: st.object,
    graph: st.graph
  })
}

export const propertiesOf = (kb) =>
  (subject) => {
    check.assert.instance(kb, IndexedFormula)
    check.assert.instance(subject, NamedNode)
    return kb.each(null, kb.namespace.rdfs('domain'), subject).sort()
  }

export const transitiveClosure = (kb) =>
  (
    subject,
    predicate,
    inverse = false
  ) => {
    check.assert.instance(subject, NamedNode)
    check.assert.instance(predicate, NamedNode)
    check.assert.boolean(inverse)
    return kb.transitiveClosure({ [subject]: true }, predicate, inverse)
  }

export const superTypesOf = (kb) =>
  (subject) => {
    check.assert.instance(kb, IndexedFormula)
    check.assert.instance(subject, NamedNode)
    // @ts-ignore
    return flow(
      subject => transitiveClosure(kb)(subject, context.subClassOf, false),
      keys,
      map(id => kb.fromNT(id)),
      reverse
    )(subject)
  }

export const subTypesOf = (kb) =>
  (subject) => {
    check.assert.instance(kb, IndexedFormula)
    check.assert.instance(subject, NamedNode)
    // @ts-ignore
    return flow(
      subject => transitiveClosure(kb)(subject, context.subClassOf, true),
      keys,
      map(id => kb.fromNT(id)),
      reverse
    )(subject)
  }

export const propertiesOfDeep = (kb) =>
  (subject) => {
    // @ts-ignore
    return flow(sym, superTypesOf(kb), map(propertiesOf(kb)), flatten)(subject)
  }

export const toContext = (statements, ctx) => {
  return statements.map(st => mapStatementToContext(st, ctx))
}

export function termToContext (term, context, vocab, shrinkLiterals) {
  switch (term.termType) {
    case 'NamedNode':
      if (vocab && term.value.startsWith(vocab)) {
        return term.value.slice(vocab.length)
      }
      if (context && context[term]) {
        return context[term]
      }
      return term.uri
    case 'BlankNode':
      return term.value
    case 'Literal':
      if (shrinkLiterals) {
        return term.value
      }
      return term
    default:
      return term
  }
}

export const serialize = (sts, config) => {
  // target, kb, base, contentType, callback
}

const rdfu = {
  docname,
  lit,
  sym,
  toJson,
  toContext,
  jsonReducer,
  statementToContext,
  mapStatementToContext,
  findSubject,
  propertiesOf,
  propertiesOfDeep,
  superTypesOf,
  subTypesOf,
  transitiveClosure,
  getUrlNamespace,
  debrac,
  shrinkUrl,
  shrinkRdfNode,
  isTermInstance,
  createContextTransformer
}

export default rdfu

root.$rdf = $rdf
root.rdfu = rdfu
root.sym = sym
