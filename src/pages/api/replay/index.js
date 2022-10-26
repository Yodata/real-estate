import got from 'got'

const staging = 'https://gxlejs63x9.execute-api.us-west-2.amazonaws.com/replay'
const test = 'http://example.com/replay'
const TARGET = process.env.REPLAY_TARGET || test || staging

export default async function (req) {
  const payload = req.body;
  return got.json(TARGET, {
    method: 'POST',
    body: payload
  })
}
