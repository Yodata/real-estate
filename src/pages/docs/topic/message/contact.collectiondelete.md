---
title: contact#collectiondelete
---
## Message

*a contact collection (data.object) is deleted by a user (data.agent)*

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/contact#collectiondelete",
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
      "type": "Collection",
      "name": "Past Clients",
      "identifier": {
        "bhhsconsumerid": "12345"
      },
       "originatingSystem": {
        "type": "SoftwareApplication",
        "name": "RDesk",
        "description": "User Created.",
        "url": "http://www.rdeskwebsite.com/"
      },
    }
  }
}
```



### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/contact#collectiondelete"`)  |
| data | object | - |
| data.type | string | const (`"DeleteAction"`)  |
| data.agent | object |  >= 2 properties |
| data.agent.type | string | const (`"Person"`)  |
| data.agent.name | string | - |
| data.agent.email | string | a valid email address format (`email`) |
| data.agent.identifier | object |  1 properties |
| data.object | object | A reference to a contact group "collection" with minimal properties. |
| data.object.type | string | const (`"Collection"`)  |
| data.object.name | string | The name of the contact group. |
| data.object.identifier | object |  1 properties |
| data.object.1.originatingSystem | object | the original system where this item was created.  Can be of type Thing or any sub-type. |

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


