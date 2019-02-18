// @flow

import filter from 'lodash/filter'
const store = {
  getState: () => {
    throw new Error('not implemented')
  }
}

function getSubClassesOf(subject, collection) {
  let _collection = collection || store.getState().schema.types
  return filter(_collection, { 'subClassOf': subject });
}

export default getSubClassesOf
