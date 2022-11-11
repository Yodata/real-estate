---
title: contact#comment
---
## contact#comment

*a comment (data.object) is added by a user (data.agent) to a contact (data.target)*

* MessageId: contact#comment
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
| data.object | object | A comment on an item. |
| data.object.type | string | - |
| data.object.dateCreated | string | The date on which the item was created. |
| data.object.dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. |
| data.object.dateDeleted | string | The date on which the item was deleted. |
| data.object.text | string | - |
| data.object.author | object | the author of something |
| data.object.about | object | The subject of the content |
| data.object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.target | object | - |
| data.target.type | string | - |
| data.target.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/contact#comment",
  "data": {
    "type": "CommentAction",
    "agent": {
      "type": "Person",
      "name": "string",
      "email": "user@example.com",
      "identifier": {
        "salesforceid": "0031U00002XW1QWQA1"
      }
    },
    "object": {
      "type": "Comment",
      "dateCreated": "2019-08-24T14:15:22Z",
      "dateModified": "2019-08-24T14:15:22Z",
      "dateDeleted": "2019-08-24T14:15:22Z",
      "text": "Populus debet control notitia sua",
      "author": {
        "type": "Contact",
        "name": "Mark Twain",
        "identifier": {
          "originatingSystemName": "originating-system-id"
        }
      },
      "about": {
        "type": "Contact",
        "name": "Robin",
        "identifier": {
          "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
        }
      },
      "identifier": {
        "redContact_Note_ID": "62c4a9ae-eba1-4c27-a2dd-afb4068695f8"
      }
    },
    "target": {
      "type": "Contact",
      "identifier": {
        "salesforceid": "0031U00002XW1QWQA1"
      }
    }
  }
}
```


