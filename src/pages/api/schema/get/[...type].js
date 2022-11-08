import { merge } from 'merge-anything'

const DEBUG = true
/**
 * returns a json schema from an asyncapi schema or messageItem
 * @param {NextApiRequest} request
 * @param {NextApiResponse} response
 */
export default async function handler(request, response) {
  let type = request.query.type
  if (Array.isArray(type)) {
    if (type[ 0 ] === 'realestate') {
      type = type.slice(1)
    }
    type = type.join('.')
  }
  const schemaUrl = `http://${request.headers.host}/schema/${type}.json`

  return fetchSchema(schemaUrl)
    .then(transformMessageSchema)
    .then((schema) => {
      if (DEBUG) {
        console.log('transform-result', schema)
      }
      const result = toJsonSchemaObject(schema)

      response.status(200).json(result)
    })
    .catch((err) => {
      console.error(err)
      response.status(500).json({ error: err.message })
    })
}

const jsonSchemaKeywordTypes = {
  // string
  maxLength: 'string',
  minLength: 'string',
  pattern: 'string',
  contentMediaType: 'string',
  contentEncoding: 'string',
  // number
  multipleOf: 'number',
  maximum: 'number',
  exclusiveMaximum: 'number',
  minimum: 'number',
  exclusiveMinimum: 'number',
  // array
  items: 'array',
  maxItems: 'array',
  minItems: 'array',
  uniqueItems: 'array',
  contains: 'array',
  additionalItems: 'array',
  required: 'array',
  // object
  maxProperties: 'object',
  minProperties: 'object',
  properties: 'object',
  patternProperties: 'object',
  propertyNames: 'object',
  dependencies: 'object',
  additionalProperties: 'object',
  // meta keywords
  title: 'string',
  description: 'string',
  default: 'any',
  examples: 'any',
  readOnly: 'boolean',
  writeOnly: 'boolean',
  deprecated: 'boolean',
  // format
  format: 'string',
  // validation
  const: 'any',
  enum: 'any',
  // conditional
  if: 'object',
  then: 'object',
  else: 'object',
  allOf: 'object',
  anyOf: 'object',
  oneOf: 'object',
  not: 'object',
  // applicator
  definitions: 'object',
  unevaluatedItems: 'array',
  unevaluatedProperties: 'object',
  // annotations
  type: 'string',
  $id: 'string',
  $ref: 'string',
  $schema: 'string',
  $comment: 'string',
  $defs: 'object',
  $recursiveRef: 'string',
  $recursiveAnchor: 'boolean',
  $dynamicRef: 'string',
  $dynamicAnchor: 'string',
  $vocabulary: 'object',
  $anchor: 'string',
  $dynamicDefault: 'any',
  // extensions I want to support
  'x-range': 'string',
  'x-domain': 'string',
  'x-faker': 'string'
}

const jsonSchemaKeywords = Object.keys(jsonSchemaKeywordTypes)
/**
 *
 * @param {string} schemaUrl
 * @returns
 */
async function fetchSchema(schemaUrl) {
  if (DEBUG) console.log('fetching schema', schemaUrl)
  return fetch(schemaUrl)
    .then(async (response) => {
      if (response.status !== 200) {
        console.error({ status: response.status, statusText: response.statusText })
        throw new Error(`failed to fetch schema for ${schemaUrl}:${response.statusText}`)
      }
      let schema = await response.json()
      if (DEBUG) console.log('fetched schema', schema)
      return schema
    })
    .catch((err) => {
      console.error(err)
      throw new Error(`failed to fetch schema for ${schemaUrl}:${err.message}`)
    })
}

function isMessageSchema(schema) {
  return schema.payload || schema.headers || schema.traits
}


function transformMessageSchema(schema) {
  if (isMessageSchema(schema)) {
    const { payload, headers, traits } = schema
    let result = merge(traits, headers, payload)
    if (DEBUG) console.log('transformed schema', schema, result)
    return result
  } else {
    return schema
  }
}

function isJsonSchemaKeyword(key) {
  return jsonSchemaKeywords.includes(key)
}

function toJsonSchemaObject(schema = {}) {
  const result = {}
  Object.entries(schema).forEach(([ key, value ]) => {
    console.log([ key, value ])
    if (isJsonSchemaKeyword(key)) {
      result[key] = value
    }
  })
  if (result.properties) {
      result.properties = Object.entries(result.properties).reduce((acc, [ key, value ]) => {
      acc[key] = toJsonSchemaObject(value)
      return acc
    }, {})
  }
  return result
}
