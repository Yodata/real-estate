/** @format */
import { merge } from 'merge-anything'

const observeOverwrites = (currentValue, newValue, key) => {
  console.log('OVERWRITING', {
    key,
    currentValue,
    newValue,
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
    result.allOf = result.allOf.map(mergeAllOf)
    result = merge(...result.allOf)
  }
  return result
}

// export function mergeSchemaItems(source) {
//   let result = schema
//   if (
//     schema &&
//     typeof schema?.allOf === 'function' &&
//     Array.isArray(schema.allOf())
//   ) {
//     result = merge([schema, ...schema.allOf()])
//   }
//   return result
// }
