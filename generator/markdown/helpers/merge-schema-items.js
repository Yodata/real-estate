// import Schema from '@asyncapi/parser/lib/models/schema'
import { merge } from 'merge-anything'

export function mergeSchemaItems (schema = {}) {
  let result = schema
  if (schema && typeof schema?.allOf === 'function' && Array.isArray(schema.allOf())) {
    result = merge([schema, ...schema.allOf()])
  }
  return result
}
