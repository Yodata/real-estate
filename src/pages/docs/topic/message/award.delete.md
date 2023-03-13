---
title: award#delete
---

## Message

_award deleted_

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/award#delete",
  "data": {
    "type": "DeleteAction",
    "agent": {
      "type": "RealEstateAgent",
      "id": "https://user.example.com/profile/card#me",
      "name": "string"
    },
    "identifier": {
      "bhhsAwardId": "xxxx"
    }
  },
  "event": {
    "type": "EventName",
    "name": "Any event name",
    "id": "1d2995307f2c48ae9543caf586f43f9b",
    "url": "https://user.example.com/mentor/example-name/cid-example123/oh/123-example-street/pid-example112233",
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
}
```

### Payload

| Name               | Type   | Description                                                                     |
| ------------------ | ------ | ------------------------------------------------------------------------------- |
| (root)             | object | -                                                                               |
| topic              | string | const (`"realestate/award#delete"`)                                             |
| data               | object | -                                                                               |
| data.type          | string | const (`"DeleteAction"`)                                                        |
| data.agent         | object | the award presenter                                                             |
| data.agent.type    | string | allowed (`"RealEstateAgent"`, `"RealEstateOffice"`, `"RealEstateOrganization"`) |
| data.agent.id      | string | format (`uri`)                                                                  |
| data.agent.name    | string | the name of the award presenter                                                 |
| data.identifier    | object | 1 properties                                                                    |
| event.type         | object | type of the event e.g Campaign                                                  |
| event.name         | string | any string name                                                                 |
| event.id           | string | format (`uri`)                                                                  |
| event.url          | string | url of the event                                                                |
| event.contactGroup | array  | array of contacts                                                               |

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

##### Message tags

| Name               | Description | Documentation |
| ------------------ | ----------- | ------------- |
| action\|delete     | -           | -             |
| topic\|award       | -           | -             |
| domain\|realestate | -           | -             |
