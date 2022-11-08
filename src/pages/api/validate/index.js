import Ajv from 'ajv'
import axios from 'axios'

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
  return getSchema(request)
    .then(schema => validateJsonSchema({schema, object: request.body}))
    .then((validationResponse) => {
      response.status(200).json(validationResponse)

    })
    .catch((err) => {
      let responseBody = {
        actionStatus: 'FailedActionStatus',
        isValid: false,
        error: {
          message: err.message,
          stack: err.stack
        }
      }
      response.status(200).json(responseBody)
    })
}

/**
 *
 * @param {JSONSchema} schema the schema to validate against
 * @param {JsonObject} object the object to validate
 */
async function validateJsonSchema({schema, object}) {
  const ajv = new Ajv({ allErrors: true, strict: false })
  const validate = ajv.compile(schema)
  const isValid = validate(object)
  const schemaName = object.topic || object.type
  const validationResponse = {
    isValid: isValid,
    schemaName,
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

async function getSchema(request /** {string} **/) {
  const object = request.body
  let target = `http://${request.headers.host}/api/schema/get/`
  if (typeof object.topic === 'string') {
     target += object.topic.replace('#', '.')
   } else if (typeof object.type === 'string') {
     target += object.type
  } else {
    throw new Error('400:Missing topic or type')
   }
  return axios
    .get(target)
    .then((res) => {
      if (res.status === 200) {
        return res.data
      } else {
        throw new Error(`${res.status}:${res.statusText}`)
      }
    })
}
