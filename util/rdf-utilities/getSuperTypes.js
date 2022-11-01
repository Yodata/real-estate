// @ts-check

import flatten from 'lodash/flatten'

const store = {
  getState: () => {
    throw new Error('not implemented')
  }
}

export default function getSuperTypes (subject) {
  if (subject && subject.id) {
    const state = store.getState()
    let typeIndex = {}
    if (state && state.schema && state.schema.index) {
      typeIndex = state.schema.index
    }
    const superTypes = [subject.id]
    let nextParent = subject.subClassOf
    while (nextParent && nextParent !== subject.id) {
      superTypes.push(nextParent)
      nextParent = typeIndex[nextParent] && typeIndex[nextParent].subClassOf
    }
    return flatten(superTypes)
  }
  throw new Error('getSuperTypes called without a subject', subject)
}
