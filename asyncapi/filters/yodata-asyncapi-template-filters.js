const _hasValue = require('@yodata/has-value')
const _getValue = require('@yodata/get-value')

exports.hasValue = function (object, key, comparator) {
  return _hasValue(object, key, comparator)
}

exports.hasKey = function (object, key) {
  return _hasValue(object, key)
}

exports.getValue = function (object, key) {
  return _getValue(key, object)
}

exports.coalesce = function () {
  const args = Array.prototype.slice.call(arguments)
  return args.reduce(function (a, b) {
    return a === undefined? b : a
  })
}

exports.jsonBlock = function (object, key) {
  const subject = (typeof key === 'string' && key.length > 0) ? _getValue(key, object) : object
  return [
    "```json ",
    JSON.stringify(subject, null, 2),
    "```"
  ].join('\n')
}