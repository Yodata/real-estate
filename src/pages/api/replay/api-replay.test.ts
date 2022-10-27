import { handler } from '.'
import nock from 'nock'
import { NextApiRequest, NextApiRespons } from 'next'

const request =
{
  "target": "https://dave.bhhs.dev.yodata.io/inbox/",
  "items": [
    "23d801ffd6134e628afec22cc60f192c"
  ]
}

const response =
{
  "agent": "post-replay",
  "object": {
    "target": "https://dave.bhhs.dev.yodata.io/inbox/",
    "items": [
      "notgonnafindshit",
      "23d801ffd6134e628afec22cc60f192c"
    ]
  },
  "result": "replay request sent successfully",
  "actionStatus": "CompletedActionStatus"
}


test('can fetch test response', async t => {
  const host = 'http://example.com'
  const scope = nock(host)
    .post('/replay', request)
    .reply(200, response)
    .done()

  await got.post()

  const res = await handler({
    method: 'POST',
    body: request
  })

  expect(res.statusCode).toBe(200)
  expect(res.body).toEqual(response)
  return scope.done()
})
