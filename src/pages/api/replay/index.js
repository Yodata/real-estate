
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
  const target = process.env.REPLAY_TARGET || staging || test
  return got(target, request.body)
    .then(res => {
      return response.status(res.statusCode).json(res.body)
    })
}
