// @flow
import store from '../store'
import isArray from 'lodash/isArray'

export default function getPropertiesOf(id: string) {
  let propSource = [];
  let state = store.getState();
  if (state && state.schema && state.schema.properties) {
    propSource = state.schema.properties;
  }
  return propSource.filter(({ domainIncludes }) => {
    if (isArray(domainIncludes)) {
      return domainIncludes.includes(id);
    }
    if (typeof domainIncludes === 'string') {
      return domainIncludes === id;
    }
    return false;
  });
}
