import api from './index'
import nock from 'nock'


test('can fetch test response', async t => {
  // Set up the mock request.
  const scope = nock('http://localhost')
    .get('/test')
    .reply(200, 'test response')

  // Make the request. Note that the hostname must match exactly what is passed
  // to `nock()`. Alternatively you can set `axios.defaults.host = 'http://localhost'`
  // and run `axios.get('/test')`.
  await axios.get('http://localhost/test')

  // Assert that the expected request was made.
  scope.done()
})

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

const payload =
{
  "target": "https://dave.bhhs.dev.yodata.io/inbox/",
  "items": [
      "notgonnafindshit",
      "23d801ffd6134e628afec22cc60f192c"
  ]
}

test('request', () => {
  expect.assertions(1)
  return api.get('/test')
    .then(res => {
    expect(res.statusCode).toBe(200)
    expect(res.body)
  })
}

  test('response', () => {
    expect.assertions(1)
    const payload = {
  })
