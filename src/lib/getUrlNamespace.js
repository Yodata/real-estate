// @flow

import debrac from './debrac';

export default function getUrlNamespace(url: string) {
  let target = debrac(url);
  if (target.startsWith('_')) {
    return url;
  }
  if (target.startsWith('http')) {
    let index = target.lastIndexOf('#');
    if (index === -1) {
      index = target.lastIndexOf('/');
    }
    if (index > 0) {
      return target.substr(0, index + 1);
    }
  }

  throw new Error('invalid url provided to getUrlNamespace ' + url);
}
