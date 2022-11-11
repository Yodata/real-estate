---
title: contact#delete
---
## contact#delete

*a contact (data.object) is deleted by a user (data.agent)*

* MessageId: contact#delete
* Content type: application/json

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


### Headers

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| time | string | date & time the event was produced |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient |
| instrument | string | the app or service that produced the event on behalf of the agent/user |
| source | string | a copy of the event was sent to the source(s). |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. |
| @id | string | - |

### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.agent | object | - |
| data.agent.type | string | - |
| data.agent.name | string | the name of the item |
| data.agent.email | string | - |
| data.agent.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object | object | - |
| data.object.type | string | - |
| data.object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/contact#delete",
  "data": {
    "type": "DeleteAction",
    "agent": {
      "type": "Person",
      "name": "string",
      "email": "user@example.com",
      "identifier": {
        "salesforceid": "0031U00002XW1QWQA1"
      }
    },
    "object": {
      "type": "Contact",
      "identifier": {
        "salesforceid": "0031U00002XW1QWQA1"
      }
    }
  }
}
```


