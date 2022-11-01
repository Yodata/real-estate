// @flow

import superTypesOf from './getSuperTypes';
import propertiesOf from './propertiesOf';
import flatMap from 'lodash/flatMap';
import getSchemaObject from './getSchemaObject';

type S = {
  id: string,
  subClassOf?: string
}

export default function propertiesOfDeep(subject: S) {
  let s = subject;
  if (typeof subject === 'string') {
    s = getSchemaObject(subject);
  }
  let superTypes = superTypesOf(s);
  let propMap = superTypes.reduce((properties, superType) => {
    return { ...properties, [superType]: propertiesOf(superType) };
  }, {});
  return flatMap(propMap);
}