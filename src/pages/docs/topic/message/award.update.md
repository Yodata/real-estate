---
title: award#update
---
## Message

*award action is updated*

### Payload

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/award#update",
  "data": {
    "type": "UpdateAction",
    "object": {
      "type": "Award",
      "name": "Top 1%",
      "dateAwarded": "2019-11-25T04:23:32.000Z",
      "agent": "http://example.com",
      "recipient": [
        {
          "type": "RealEstateAgent",
          "id": "https://user.example.com/profile/card#me",
          "name": "string"
        }
      ],
      "identifier": {
        "hsfAwardId": "xxxx"
      }
    }
  }
}
```


| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/award#update"`)  |
| data | object | - |
| data.type | string | const (`"UpdateAction"`)  |
| data.object | object | An honor bestowed on one or mote _recipients_ by the message _agent_ |
| data.object.type | string | allowed (`"Award"`) "AwardAction" |
| data.object.name | string | name of the award |
| data.object.dateAwarded | string | date the award was presented or announced. format (`date-time`) |
| data.object.agent | string | the agent that presented the award format (`uri`) |
| data.object.recipient | array<object> | recipients of the award |
| data.object.recipient.type | string | allowed (`"RealEstateAgent"`, `"RealEstateOffice"`, `"RealEstateOrganization"`)  |
| data.object.recipient.id | string |  format (`uri`) |
| data.object.recipient.name | string | the name of the award recipient |
| data.object.identifier | object |  1 properties |

### Headers

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| time | string | date & time the event was produced format (`date-time`) |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient format (`uri`) |
| instrument | string | the app or service that produced the event on behalf of the agent/user format (`uri`) |
| source | string | a copy of the event was sent to the source(s). format (`uri`) |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source format (`uri`) |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. format (`uri`) |
| @id | string |  format (`uri`) |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


