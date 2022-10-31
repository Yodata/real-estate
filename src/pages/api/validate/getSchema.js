import axios from 'axios'

/**
 * Fetch JSON-schema from the public/schema directory
 * @param {NextApiRequest} request - the name of the schema to fetch @example PostalAddress
 * @returns {Promise<JSONSchema>}
 */
export async function getSchema(request /** {string} **/) {
  const object = request.body
  const schemaName = object?.topic || object?.type || undefined
  if (typeof schemaName !== 'string') {
    throw new Error('INVALID_REQUEST_NO_TYPE_OR_TOPIC')
  }
  const schemaUrl = `http://${request.headers.host}/schema/${schemaName}.json`
  return axios
    .get(schemaUrl)
    .then((res) => {
      console.log({
        target: schemaUrl,
        statusCode: res.statusCode,
        responseData: res.data,
      })
      if (res.status === 200) {
        return {schema: res.data, object: request.body}
      } else {
        console.error({
          target: schemaUrl,
          statusCode: res.status,
          error: res.data,
        })
        throw new Error(
          `Failed to fetch schema ${schemaName} from public/schema directory`
        )
      }
    })
    .catch((err) => {
      console.error(`FAILED_TO_GET_SCHEMA:${err.message}:${schemaUrl}`)
      err.actionStatus = 'FailedActionStatus'
      err.target = schemaUrl
      err.object = {
        url: schemaUrl,
      }
      err.error = {
        message: 'FAILED_TO_GET_SCHEMA' + ':' + schemaUrl + ':' + err.message,
      }
      throw err
    })
}
