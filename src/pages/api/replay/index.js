const logger = require('@yodata/logger')

/**
 * calls the replay api and returnsthe response
 * @param {NextApiRequest} request
 * @param {NextApiResponse} response
 * @return {Promise<NextApiResponse>}}
 */
export default async function handler(request, response) {
  const { default: got } = await import('got')
  const staging = 'https://gxlejs63x9.execute-api.us-west-2.amazonaws.com/replay'
  const test = 'http://example.com/replay'
  const target = process.env.API_REPLAY_TARGET || staging || test
  const json = request.body
  if (json.startDate) {
    json.startDate = new Date(json.startDate).toISOString()
  }
  if (json.endDate) {
    json.endDate = new Date(json.endDate).toISOString()
  }
  return got.post(target, {
    json: request.body
  }).then(res => {

    response.status(res.statusCode).json(JSON.parse(res.body))
  })
    .catch(error => {
      logger.error(error.message, error.stack)
      if (error.res) {
        logger.error(error)
        response.status(500).json({
          actionStatus: 'FailedActionStatus',
          error: error.message
        })
      }

    })

}
