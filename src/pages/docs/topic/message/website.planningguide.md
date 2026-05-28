---
title: website#planningguide
---
planningguide
## Message

_website user planning guide_

### Payload Example(s) (generated)

```json
{
  "data": {
    "agent": {
      "name": "Lauren Connaughton",
      "email": "lauren@homesineasternidaho.com",
      "telephone": "208-589-0634",
      "identifier": {
        "hsfconsumerid": "918f02f1-30ec-4b2b-8af4-ce24ae42d360"
      },
      "additionalProperty": {
        "userPath": "https%3A%2F%2Fwww.bhhssilverhawkrealtyeastidaho.com%2Fsell-your-home%2Finspections-disclosures|Home+Inspections+%7C+Berkshire+Hathaway+HomeServices+Silverhawk+Realty+East+Idaho+%7C+Berkshire+Hathaway+HomeServices|0",
        "workingWithAgent": true
      },
      "mortgage": false,
      "type": "Contact"
    },
    "object": {
      "text": "How soon are you planning on buying your next home?: Next year\nDo you currently have a Berkshire Hathaway HomeServices real estate agent?: Yes\n Who Is Your Real Estate Agent?: Julie Anglesey\n",
      "requestUrl": "https://www.bhhssilverhawkrealtyeastidaho.com/real-estate-lifestyle-planning",
      "type": "PlanningGuide"
    },
    "recipient": {
      "id": "https://id305.dev.bhhs.hsfaffiliates.com/profile/card#me",
      "name": "Silverhawk Realty East Idaho",
      "type": "RealEstateOrganization"
    },
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "https://id305.dev.bhhs.hsfaffiliates.com/profile/card#me"
    },
    "identifier": "bZK0dDXmCsKm5JM/QO4LSo2igXzhsMI5azEhth1kveZCpAmsaYBa4uYLkXp0jxn5HtXF2JNWzh/CjN4PP7m8CkbI",
    "leadOwner": {
      "type": "organization",
      "name": "Silverhawk Realty East Idaho",
      "id": "https://id305.dev.bhhs.hsfaffiliates.com/profile/card#me"
    },
    "type": "PlanningGuide"
  },
  "topic": "realestate/website#planningguide",
  "source": "https://id305.dev.bhhs.hsfaffiliates.com/profile/card#me",
  "recipient": "https://dev.bhhs.hsfaffiliates.com/profile/card#me",
  "instrument": "https://aem.dev.bhhs.hsfaffiliates.com/profile/card#me",
  "@id": "https://dev.bhhs.hsfaffiliates.com/outbox/c1eb5be8cfb1412aa8ddfec27e611f79",
  "id": "https://aem.dev.bhhs.hsfaffiliates.com/publish/dd9d53ad13e0472fa8033333df9dbcd7",
  "time": "2025-09-10T22:37:50.656Z",
  "timestamp": 1757543870656,
  "originalRecipient": "https://dev.bhhs.hsfaffiliates.com/profile/card#me",
  "@to": "https://chalkdigital.dev.bhhs.hsfaffiliates.com/profile/card#me"
}
```

### Payload
| Name                                             | Type    | Description |
| ------------------------------------------------ | ------- | ----------- |
| topic                                            | string  | const (`"realestate/website#planningguide"`) |
| source                                           | string  | format (`uri`) |
| recipient                                        | string  | format (`uri`) |
| instrument                                       | string  | format (`uri`) |
| @id                                              | string  | format (`uri`) |
| id                                               | string  | format (`uri`) |
| time                                             | string  | date and time the event was produced |
| timestamp                                        | number  | event timestamp |
| originalRecipient                                | string  | format (`uri`) |
| @to                                              | string  | format (`uri`) |
| data                                             | object  | message payload |
| data.identifier                                  | string  | unique identifier |
| data.type                                        | string  | const (`"PlanningGuide"`) |
| data.agent                                       | object  | website user |
| data.agent.name                                  | string  | agent name |
| data.agent.email                                 | string  | format (`email`) |
| data.agent.telephone                             | string  | agent telephone number |
| data.agent.identifier                            | object  | agent identifier |
| data.agent.identifier.hsfconsumerid              | string  | HSF consumer ID |
| data.agent.additionalProperty                    | object  | additional property details |
| data.agent.additionalProperty.userPath           | string  | user path |
| data.agent.additionalProperty.workingWithAgent   | boolean | working with agent or not |
| data.agent.mortgage                              | boolean | true or false |
| data.agent.type                                  | string  | allowed (`"Person"`, `"Contact"`) |
| data.object                                      | object  | planning guide details |
| data.object.text                                 | string  | planning guide text |
| data.object.requestUrl                           | string  | request URL |
| data.object.type                                 | string  | const (`"PlanningGuide"`) |
| data.recipient                                   | object  | recipient details |
| data.recipient.id                                | string  | format (`uri`) |
| data.recipient.name                              | string  | recipient name |
| data.recipient.type                              | string  | recipient type |
| data.instrument                                  | object  | instrument object |
| data.instrument.type                             | string  | const (`"RealEstateWebsite"`) |
| data.instrument.url                              | string  | format (`uri`) |
| data.leadOwner                                   | object  | lead owner details |
| data.leadOwner.type                              | string  | lead owner type |
| data.leadOwner.name                              | string  | lead owner name |
| data.leadOwner.id                                | string  | format (`uri`) |
| data.originatingSystem                           | object  | the original system where this item was created. Can be of type Thing or any sub-type. |

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