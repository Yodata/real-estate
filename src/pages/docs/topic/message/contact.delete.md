---
title: contact#delete
---
## Message

*a contact (data.object) is deleted by a user (data.agent)*

### Payload

### Payload Example(s) (generated)

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
        "bhhsconsumerid": "12345"
      }
    },
    "object": {
      "type": "Contact",
      "identifier": {
        "bhhsconsumerid": "12345"
      }
    }
  }
}
```


| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/contact#delete"`)  |
| data | object | - |
| data.type | string | const (`"DeleteAction"`)  |
| data.agent | object |  >= 2 properties |
| data.agent.type | string | const (`"Person"`)  |
| data.agent.name | string | - |
| data.agent.email | string | a valid email address format (`email`) |
| data.agent.identifier | object |  1 properties |
| data.object | object | - |
| data.object.type | string | const (`"Contact"`)  |
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


