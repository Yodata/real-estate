require('dotenv').config()
const context = require('..')

test('output matches expectations', async () => {
  const input = {
    "type": "RealEstateOffice",
    "id": "https://ca322-001.bhhs.dev.yodata.io/profile/card#me",
    "parentOrganization": [
      "https://ca322.bhhs.dev.yodata.io/profile/card#me"
    ]
  }
  const expectedOutput = {
    "type": "RealEstateOffice",
    "source": "California Properties"
  }

  const result = await context.map(input)
  return expect(result).toMatchObject(expectedOutput)

})
