// @flow

import {NS_PREFIX} from '../../schema/context.js';
import getUrlNamespace from './getUrlNamespace';

export default function shrinkUrl(url: string): string {
  let namespace: string = getUrlNamespace(url)
  let prefix = NS_PREFIX[namespace]
  let localName = url.substr(namespace.length)
  return `${prefix}:${localName}`
}