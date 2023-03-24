---
title: website#subscribemarketactivityreport
---

## Message

website user (data.agent) has viewed a listing (data.object) on a webiste or mobile app (data.instrument)

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#subscribemarketactivityreport",
  "recipient": "https://bhhs.hsfaffiliates.com/profile/card#me",
  "time": "2023-02-08T23:34:08.331Z",
  "agent": "https://3023834.bhhs.hsfaffiliates.com/profile/card#me",
  "instrument": "https://3023834.bhhs.hsfaffiliates.com/profile/card#me",
  "source": "https://3023834.bhhs.hsfaffiliates.com/profile/card#me",
  "originalRecipient": "https://3023834.bhhs.hsfaffiliates.com/profile/card#me",
  "data": {
    "type": "SubscribeAction",
    "agent": {
      "type": "Contact",
      "name": "Anonymous Visitor",
      "givenName": "Anonymous",
      "familyName": "Visitor",
      "email": "D9952B6A-FCC5-4F5F-BC46-277FD9A365D2@unknownemailaddy.com",
      "identifier": {
        "hsfconsumerid": "D9952B6A-FCC5-4F5F-BC46-277FD9A365D2"
      },
      "additionalProperty": {
        "userPath": "%3B404%3BHome%20Value%20|%20Leo%20Shut%20|%20Berkshire%20Hathaway%20HomeServices%3B1",
        "workingWithAgent": false
      }
    },
    "participant": {
      "type": "RealEstateAgent",
      "id": "https://3023834.bhhs.hsfaffiliates.com/profile/card#me"
    },
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "https://3023834.bhhs.hsfaffiliates.com/profile/card#me"
    },
    "object": {
      "type": "RealEstateProperty",
      "propertyType": "Single Family",
      "addressCountry": "US",
      "addressLocality": "WEST SPRINGFIELD",
      "addressRegion": "MA",
      "image": [],
      "latitude": 42.111904,
      "livingArea": {
        "type": "QuantitativeValue",
        "unitCode": "SqFt",
        "unitText": "Square Feet",
        "value": 1104
      },
      "longitude": -72.68681,
      "lotSize": {
        "type": "QuantitativeValue",
        "unitCode": "SqFt",
        "unitText": "Square Feet",
        "value": 15264
      },
      "numberOfBathrooms": 2,
      "numberOfBedrooms": 3,
      "postalCode": "01089",
      "streetAddress": "113 SIKES AVE",
      "yearBuilt": 1988
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
  },
  "@id": "https://aem.bhhs.hsfaffiliates.com/publish/1d2995307f2c48ae9543caf586f43f9b",
  "id": "https://aem.bhhs.hsfaffiliates.com/publish/1d2995307f2c48ae9543caf586f43f9b",
  "timestamp": 1675899248331
}
```

### Payload

| Name                 | Type              | Description                                                                   |
| -------------------- | ----------------- | ----------------------------------------------------------------------------- |
| (root)               | object            | -                                                                             |
| topic                | string            | const (`"realestate/website#subscribemarketactivityreport"`)                  |
| recipient            | string<uri>!      | The URL of the recipient's profile.                                           |
| time                 | string<date-time> | date & time the event was produced                                            |
| agent                | string<uri>!      | event publisher                                                               |
| instrument           | string<uri>!      | the application that produced the event                                       |
| source               | string<uri>       | associated RealEstate{Agent,Office,Organization}                              |
| orignalRecipient     | string<uri>       | The URL of orignal recipient's profile.                                       |
| data                 | object            | the message payload. RANGE: AddAction                                         |
| data.type            | string!           | The item type (Linked-Data @type)                                             |
| data.agent           | object!           | the website user. RANGE: type, name, givenName, familyName, email, identifier |
| data.participant     | object!           | the website user. RANGE: type, id                                             |
| data.instrument      | object            | website or mobile application. RANGE:type, url                                |
| data.object          | object!           | the viewed property. RANGE: PropertyListing                                   |
| data.event.type      | object            | type of the event e.g Campaign                                                |
| data.event.name      | string            | any string name                                                               |
| data.event.id        | string            | format (`uri`)                                                                |
| data.event.url       | string<uri>       | url of the event                                                              |
| data.event.subEvents | array             | array of subEvents                                                            |

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
