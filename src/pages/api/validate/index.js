const logger = require('@yodata/logger')
import Ajv from 'ajv'
import $RefParser from 'json-schema-ref-parser'
import { getSchema } from './getSchema'

/**
 * validates the payload.object with payload.schema and returns isValid or errors array.
 * @param {object} payload
 * @param {object} payload.object - the object to validate
 * @param {object|string} [payload.schema] - URL to a JSON schema or a JSON schema object
 ¯* @returns {Promise<API_Response>} response
 *
 * @typedef API_Response
 * @property {object} object - the item to be validated
 * @property {object|string} schema - the schma (object) or URI to the schema
 * @property {boolean} [isValid] - true if the payload schema was successfully validated
 * @property {object[]} [errors] - error message
 * @property {string} [error] - error message
 */
export default async function handler(request, res) {
  const object = request.body
  const response = { object }
  const schemaName = object?.topic || object?.type || undefined
  if (!schemaName) {
    response.actionStatus = 'FailedActionStatus'
    response.error = {
      message: 'unable to determine the object type'
    }
    return res.status(200).json(response)
  }
  response.schemaName = schemaName
  const schema = await getSchema(schemaName).catch(err => undefined)
  if (!schema) {
    response.actionStatus = 'FailedActionStatus'
    response.error = {
      message: `Sorry, we can't validate ${schemaName} at this time`
    }
    return res.status(200).json(response)
  }
  try {
    const ajv = new Ajv({ allErrors: true, strict: false })
    const validate = ajv.compile(schema)
    response.isValid = await validate(object)
    if (!response.isValid) {
      response.error = {
        message: ajv.errorsText(validate.errors),
        items: validate.errors,
      }
    }
    logger.info(response)
  } catch (error) {
    response.isValid = false
    response.object = request.body
    response.error = {
      message: error.message,
      stack: error.stack,
    }
    logger.error(response)
  }
  res.status(200).json(response)
}
