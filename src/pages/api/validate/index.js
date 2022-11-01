const logger = require('@yodata/logger')
import Ajv from 'ajv'
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
export default async function handler(request, response) {
  await getSchema(request)
    .then(validateJsonSchema)
    .then((validationResponse) => {
      response.status(200).json(validationResponse)
    })
    .catch((err) => {
      logger.error(err)
      response.status(500).json({
        actionStatus: 'FailedActionStatus',
        isValid: false,
        object: request.body,
        error: {
          message: err.message,
          stack: err.stack
        }
      })
    })
  return
}

/**
 *
 * @param {JSONSchema} schema the schema to validate against
 * @param {JsonObject} object the object to validate
 */
async function validateJsonSchema({schema, object}) {
  console.log('validateJsonSchema', {schema, object})
  const ajv = new Ajv({ allErrors: true, strict: false })
  const validate = ajv.compile(schema)
  const isValid = validate(object)
  const validationResponse = {
    isValid: isValid,
    object: object
  }
  if (!isValid) {
    validationResponse.error = {
      message: ajv.errorsText(validate.errors),
      items: validate.errors
    }
  }
  return validationResponse
}
