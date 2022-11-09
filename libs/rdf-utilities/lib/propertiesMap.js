// @flow

import superTypesOf from './getSuperTypes'
import propertiesOf from './propertiesOf'
import getSchemaObject from './getSchemaObject'

export default function propertiesMap (id) {
  const subject = getSchemaObject(id)
  if (subject) {
    const superTypes = superTypesOf(subject)
    return superTypes.reduce((properties, superType) => {
      return { ...properties, [superType]: propertiesOf(superType) }
    }, {})
  }
  throw new Error(`Subject ${id} not found.`)
}
