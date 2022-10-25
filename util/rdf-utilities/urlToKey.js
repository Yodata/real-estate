// @flow

import bt from './base64urlEncode';

export default function urlToKey(target: string, base?: string) {
  let url = new URL(target, base);
  return bt.encode(url.href);
}
