---
title: website#saveproperty
---

## Message

\_website user saves a property

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#saveproperty",
  "time": "2020-06-18T18:30:49Z",
  "agent": "https://bhhs.example.com/profile/card#me",
  "instrument": "https://smarter-agent.example.com/profile/card#me",
  "source": "https://{agentid}.example.com/profile/card#me",
  "data": {
    "type": "SaveAction",
    "agent": {
      "type": "Contact",
      "name": "Bill Bailey",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "additionalProperty": {
        "userPath": "xxx"
      },
      "identifier": {
        "sausID": "216bf670-0777-43db-9d73-c3377d280fe4",
        "redContact_Guid": "201ff92c-e3ad-43b1-8a01-5555168cb0ae"
      }
    },
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertyListing",
      "originatingSystemName": "GOTHAM-MLS",
      "originatingSystemKey": "12345",
      "url": "https://{company-website-url}/{path-to-listing}",
      "streetAddress": "1007 Mountain Gate Rd",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      }
    },
    "event": {
      "type": "Event",
      "name": "Property Showing  64 Buttercup Lane, South Grafton, MA, USA",
      "description": "",
      "subEvents": [
        {
          "type": "Campaign",
          "name": "A good campaign name",
          "id": "ire:1d2995307f2c48ae9543caf586f43f9b",
          "url": "https://www.bhhspro.com/mentor/steve-baird/cid-356481/oh/889-hartford-drive-44035/pid-338005633",
          "contactGroup": [
            {
              "type": "Collection",
              "name": "Topic 1"
            },
            {
              "type": "Collection",
              "name": "Topic 2"
            }
          ]
        }
      ]
    }
  }
}
```

### Payload

| Name                 | Type                | Description                                                                                                                                                                                                                                                                                                                        |
| -------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (root)               | object              | -                                                                                                                                                                                                                                                                                                                                  |
| topic                | string!             | "realestate/website#saveproperty"                                                                                                                                                                                                                                                                                                  |
| time                 | string<date-time> ! | date & time the event was produced                                                                                                                                                                                                                                                                                                 |
| agent                | string<uri> !       | event publisher                                                                                                                                                                                                                                                                                                                    |
| instrument           | string<uri> !       | the application that produced the event                                                                                                                                                                                                                                                                                            |
| source               | string<uri>         | associated RealEstate{Agent,Office,Organization}                                                                                                                                                                                                                                                                                   |
| data                 | object              | An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role. RANGE: SaveAction |
| data.type            | string!             | the action type                                                                                                                                                                                                                                                                                                                    |
| data.agent           | object!             | the website user RANGE: Contact, Person                                                                                                                                                                                                                                                                                            |
| data.instrument      | object              | website or mobile application RANGE: RealEstateWebsite, MobileApplication, Thing                                                                                                                                                                                                                                                   |
| data.object          | object!             | the properting that was saved RANGE: PropertyListing                                                                                                                                                                                                                                                                               |
| data.event.type      | object              | type of the event e.g Campaign                                                                                                                                                                                                                                                                                                     |
| data.event.name      | string              | any string name                                                                                                                                                                                                                                                                                                                    |
| data.event.id        | string              | format (`uri`)                                                                                                                                                                                                                                                                                                                     |
| data.event.url       | string              | url of the event                                                                                                                                                                                                                                                                                                                   |
| data.event.subEvents | array               | array of subEvents                                                                                                                                                                                                                                                                                                                 |

### Headers

| Name              | Type   | Description                                                                                                                                                                                                                                                                                               |
| ----------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (root)            | object | -                                                                                                                                                                                                                                                                                                         |
| time              | string | date & time the event was produced format (`date-time`)                                                                                                                                                                                                                                                   |
| agent             | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient format (`uri`)                                                                                                               |
| instrument        | string | the app or service that produced the event on behalf of the agent/user format (`uri`)                                                                                                                                                                                                                     |
| source            | string | a copy of the event was sent to the source(s). format (`uri`)                                                                                                                                                                                                                                             |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source format (`uri`) |
| id                | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. format (`uri`)                                                                             |
| @id               | string | format (`uri`)                                                                                                                                                                                                                                                                                            |

### Tools

- [Mock Data Generator](/tools/mock-data-generator)
- [Schema Validator](/tools/validate)
