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
    "identifier":"nwurogb34tnoi3t",
    "agent": {
            "name": "String",
            "email": "someone@yahoo.com",
            "telephone": "0011223344",
            "identifier": {
                "hsfconsumerid": "jkevqh598p3h-gkjent-j5n3i"
            },
      "additionalProperty": {
        "userPath": "||https%xyx%123%0",
        "workingWithAgent": true
      },
      "mortgage": false,
      "type": "Contact"
    },
    "object": {
      "text": "How soon are you planning on buying your next home?: In the next month\nDo you currently have a Berkshire Hathaway HomeServices real estate agent?: Yes\n Who Is Your Real Estate Agent?: Sans\n",
      "type": "PlanningGuide"
    },
    "recipient": {
      "id": "https://<pod>.bhhs.dev.yodata.io/profile/card#me",
      "name": "NorCal Real Estate",
      "type": "RealEstateOrganization"
    },
    "instrument": {
      "type": "RealEstateWebsite",
      "url":"https://<pod>.bhhs.dev.yodata.io/profile/card#me"
    },
    "type": "PlanningGuide"
  },
  "topic": "realestate/website#planningguide",
  "source": "https://<pod>.bhhs.dev.yodata.io/profile/card#me",
  "recipient": "https://dev.bhhs.hsfaffiliates.com/profile/card#me",
  "instrument": "https://aem.dev.bhhs.hsfaffiliates.com/profile/card#me"
}
```

### Payload

| Name                                             | Type                           |Description  |                                                                                                               
| ------------------------------------------------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| topic                          | string                            | string const (`"realestate/website#planningguide"`)  |
| recipient                      | url                               | the agent being asked |
| source                         | url                               | a copy of the event was sent to the source(s). format (`uri`) |
| instrument                     | url                               | the app or service that produced the event on behalf of the agent/user format (uri) |
| data.identifier                | string                           | unique identifier |
| data.agent.name                | string                            | agent name |
| data.agent.email               | email                             | agent email |
| data.agent.telephone           | telephone number                  | agent telephone number |
| data.agent.identifier.hsfconsumerid | alpha numeric                | hsf consumer Id |
| data.agent.additionalProperty.userPath | url                       | uri |
| data.agent.additionalProperty.workingWithAgent | bool              | working with agent or not |
| data.agent.mortgage            | bool                              | true/false |
| data.agent.type                | string                            | agent type |
| data.object.text               | string                            | planningGuide text |
| data.object.type               | string                            | planningGuide |
| data.recipient.id              | url                               | recipient uri |
| data.recipient.name            | string                            | recipient name |
| data.recipient.type            | string                            | recipient type  |
| data.instrument                | object                            | instrument object |
| data.type                      | string                            | const (`"planningguide Action"`) |
| data.originatingSystem | object | the original system where this item was created.  Can be of type Thing or any sub-type. |

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