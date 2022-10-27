
import { NextApiRequest, NextApiResponse } from 'next';
import got from 'got'


/**
 * calls the replay api and returnsthe response
 * @param {NextApiRequest} request
 * @param {NextApiResponse} response
 * @return {Promise<NextApiResponse>}}
 */
export default function handler(request, response) {
  const staging = 'https://gxlejs63x9.execute-api.us-west-2.amazonaws.com/replay'
  const test = 'http://example.com/replay'
  const target = process.env.REPLAY_TARGET || test || staging
  return got.json(target, request.body)
    .then(res => {
    })
}
