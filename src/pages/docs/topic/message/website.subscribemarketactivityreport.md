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
  "time": "2025-10-22T19:32:25.070Z",
  "agent": "https://dev.bhhs.hsfaffiliates.com/profile/card#me",
  "instrument": "https://aem.dev.bhhs.hsfaffiliates.com/profile/card#me",
  "source": "https://3025032.dev.bhhs.hsfaffiliates.com/profile/card#me",
  "originalRecipient": "https://3025032.dev.bhhs.hsfaffiliates.com/profile/card#me",
  "@id": "https://buyside.dev.bhhs.hsfaffiliates.com/inbox/3434bd642e9a4b2895bbbf249237dee0",
  "id": "https://aem.dev.bhhs.hsfaffiliates.com/publish/9fa612070b404906a8199815bdc7e52c",
  "timestamp": 1761161545070,
  "data": {
    "type": "SubscribeAction",
    "identifier": "fh4ZKKBoPq30xe+PHrAThkoCvk1Gk+2dJMMqaVeVWmf60S/DiM0lqfTQwQdWYQt7NHZdE4dmLE9QHMO+STOKqxAw",
    "agent": {
      "type": "Contact",
      "name": "siva puli",
      "givenName": "siva",
      "familyName": "puli",
      "email": "sivapuli@hsfranchise.com",
      "identifier": {
        "hsfconsumerid": "9d3e622e-93db-4ca3-81ce-e65ded030e26"
      },
      "additionalProperty": {
        "userPath": "https://www.dev.bhhs.com/grayling-properties-ak702/grayling/molly-grayling/cid-3025032/market-activity/campaignId-701Wj00000iWTS9IAO%3BConsumer%20Market%20Activity%20|%20Molly%20Grayling%20|%20Berkshire%20Hathaway%20HomeServices%3B1",
        "workingWithAgent": false
      }
    },
    "participant": {
      "type": "RealEstateAgent",
      "id": "https://3025032.dev.bhhs.hsfaffiliates.com/profile/card#me"
    },
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "https://3025032.dev.bhhs.hsfaffiliates.com/profile/card#me"
    },
    "object": {
      "type": "PropertyValueReport",
      "propertyType": "Single Family",
      "addressCountry": "US",
      "addressLocality": " Santa Ana",
      "addressRegion": "CA",
      "postalCode": "92707",
      "streetAddress": "1234 E Borchard Ave",
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
      "yearBuilt": 1988
    },
    "leadOwner": {
      "type": "RealEstateAgent",
      "name": "Molly Grayling",
      "id": "https://3025032.dev.bhhs.hsfaffiliates.com/profile/card#me"
    },
    "originatingSystem": {
      "type": "SoftwareApplication",
      "name": "RDesk",
      "description": "User Created.",
      "url": "http://www.rdeskwebsite.com/"
    },
    "event": {
      "type": "Event",
      "name": "Property Showing 64 Buttercup Lane, South Grafton, MA, USA",
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
| Name                                             | Type              | Description |
| ------------------------------------------------ | ----------------- | ----------- |
| (root)                                           | object            | - |
| topic                                            | string            | const (`"realestate/website#subscribemarketactivityreport"`) |
| recipient                                        | string            | format (`uri`) |
| time                                             | string            | date and time the event was produced |
| agent                                            | string            | format (`uri`) |
| instrument                                       | string            | format (`uri`) |
| source                                           | string            | format (`uri`) |
| originalRecipient                                | string            | format (`uri`) |
| @id                                              | string            | format (`uri`) |
| id                                               | string            | format (`uri`) |
| timestamp                                        | number            | event timestamp |
| data                                             | object            | the message payload. RANGE: SubscribeAction |
| data.type                                        | string            | const (`"SubscribeAction"`) |
| data.identifier                                  | string            | unique identifier |
| data.agent                                       | object            | website user details |
| data.agent.type                                  | string            | allowed (`"Person"`, `"Contact"`) |
| data.agent.name                                  | string            | full name |
| data.agent.givenName                             | string            | first name |
| data.agent.familyName                            | string            | last name |
| data.agent.email                                 | string            | format (`email`) |
| data.agent.identifier                            | object            | agent identifier |
| data.agent.identifier.hsfconsumerid              | string            | HSF consumer identifier |
| data.agent.additionalProperty                    | object            | additional property details |
| data.agent.additionalProperty.userPath           | string            | user path |
| data.agent.additionalProperty.workingWithAgent   | boolean           | true or false |
| data.participant                                 | object            | participant details |
| data.participant.type                            | string            | const (`"RealEstateAgent"`) |
| data.participant.id                              | string            | format (`uri`) |
| data.instrument                                  | object            | website or mobile application details |
| data.instrument.type                             | string            | const (`"RealEstateWebsite"`) |
| data.instrument.url                              | string            | format (`uri`) |
| data.object                                      | object            | subscribed market activity report property details |
| data.object.type                                 | string            | const (`"PropertyValueReport"`) |
| data.object.propertyType                         | string            | property type |
| data.object.addressCountry                       | string            | country |
| data.object.addressLocality                      | string            | city or locality |
| data.object.addressRegion                        | string            | state or region |
| data.object.postalCode                           | string            | postal code |
| data.object.streetAddress                        | string            | street address |
| data.object.image                                | array             | property images |
| data.object.latitude                             | number            | latitude |
| data.object.longitude                            | number            | longitude |
| data.object.livingArea                           | object            | living area details |
| data.object.livingArea.type                      | string            | const (`"QuantitativeValue"`) |
| data.object.livingArea.unitCode                  | string            | unit code |
| data.object.livingArea.unitText                  | string            | unit text |
| data.object.livingArea.value                     | number            | living area value |
| data.object.lotSize                              | object            | lot size details |
| data.object.lotSize.type                         | string            | const (`"QuantitativeValue"`) |
| data.object.lotSize.unitCode                     | string            | unit code |
| data.object.lotSize.unitText                     | string            | unit text |
| data.object.lotSize.value                        | number            | lot size value |
| data.object.numberOfBathrooms                    | number            | number of bathrooms |
| data.object.numberOfBedrooms                     | number            | number of bedrooms |
| data.object.yearBuilt                            | number            | year built |
| data.leadOwner                                   | object            | lead owner details |
| data.leadOwner.type                              | string            | lead owner type |
| data.leadOwner.name                              | string            | lead owner name |
| data.leadOwner.id                                | string            | format (`uri`) |
| data.event                                       | object            | event details |
| data.event.type                                  | object            | type of the event e.g Campaign |
| data.event.name                                  | string            | any string name |
| data.event.description                           | string            | event description |
| data.event.id                                    | string            | format (`uri`) |
| data.event.url                                   | string            | url of the event |
| data.event.subEvents                             | array             | array of subEvents |
| data.originatingSystem                           | object            | the original system where this item was created. Can be of type Thing or any sub-type. |

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
