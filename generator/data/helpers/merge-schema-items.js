/** @format */

// import Schema from '@asyncapi/parser/lib/models/schema'
import { merge } from 'merge-anything'
import { Schema } from '@asyncapi/parser/lib/models/schema'

const observeOverwrites = (currentValue, newValue, key) => {
  console.log('OVERWRITING', {
    key, currentValue, newValue
  })
  return newValue
}

/**
 * @description merges json schema "allOf" into a single schema
 * @param {} source
 * @returns {object<JSONSchema>}
 */
export function mergeAllOf(source /*: Schema */) /*: Schema */ {
  let result = source?._json ? { ...source._json } : { ...source }
  if (Array.isArray(result.allOf)) {
    console.log('ORIGINAL_ALL_OF', result.allOf)
    result = merge(observeOverwrites, ...result.allOf, result)
    console.log('NEW_ALL_OF', result.allOf)
    delete result.allOf
  }
  return result
}

export function mergeSchemaItems(source) {
  let result = schema
  if (
    schema &&
    typeof schema?.allOf === 'function' &&
    Array.isArray(schema.allOf())
  ) {
    result = merge([schema, ...schema.allOf()])
  }
  return result
}
