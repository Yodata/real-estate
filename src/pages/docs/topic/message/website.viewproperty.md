---
title: website#viewproperty
---

## Message

website user (data.agent) has viewed a listing (data.object) on a webiste or mobile app (data.instrument)

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#viewproperty",
  "time": "2020-06-18T18:30:49Z",
  "agent": "https://bhhs.example.com/profile/card#me",
  "instrument": "https://smarter-agent.example.com/profile/card#me",
  "source": "https://{agentid}.example.com/profile/card#me",
  "data": {
    "type": "ViewAction",
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
    }
  }
}
```

### Payload

| Name                            | Type               | Description                                                                       |
| ------------------------------- | ------------------ | --------------------------------------------------------------------------------- |
| (root)                          | object             | -                                                                                 |
| realestate/website#viewproperty | string<date-time>! | date & time the event was produced                                                |
| agent                           | string<uri>!       | event publisher                                                                   |
| instrument                      | string<uri>!       | the application that produced the event                                           |
| source                          | string<uri>        | associated RealEstate{Agent,Office,Organization}                                  |
| data                            | object             | the message payload. RANGE: AddAction                                             |
| data.type                       | string!            | The item type (Linked-Data @type)                                                 |
| data.agent                      | object!            | the website user. RANGE: Contact, Person                                          |
| data.instrument                 | object             | website or mobile application. RANGE: RealEstateWebsite, MobileApplication, Thing |
| data.object                     | object!            | the viewed property. RANGE: PropertyListing                                       |
| data.event.type                 | object             | type of the event e.g Campaign                                                    |
| data.event.name                 | string             | any string name                                                                   |
| data.event.id                   | string             | format (`uri`)                                                                    |
| data.event.url                  | string             | url of the event                                                                  |
| data.event.subEvents            | array              | array of subEvents                                                                |

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
