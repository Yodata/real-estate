---
title: lead#accept
---
## lead#accept

*a lead (data.object) was accepted by the recipient (data.recipient).*

* MessageId: lead#accept
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
| type | string | - |
| object | object | a sales opportunity (object) offered by a sender to a recipient. |
| object.type | string | Lead |
| object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| object.object | object | the lead (Contact) |
| object.recipient | string | the lead recipient |
| object.sender | string | the lead provider |
| object.owner | string | the original owner of the lead |
| object.dateAccepted | string | The date/time the item was accepted by the recipient |
| object.dateRejected | string | The date/time the item was rejected by the recipient |
| object.dateSent | string | the date the lead was sent |
| object.dateReceived | string | The date/time the item was received by it's recipient |
| object.leadSource | array<object> | lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton. |
| object.leadSource (single item) | object | - |

> Examples of payload _(generated)_

```json
{
  "type": "lead#accept",
  "object": {
    "type": "Lead",
    "identifier": {
      "salesforceid": "0031U00002XW1QWQA1"
    },
    "object": {
      "type": "Contact",
      "name": "Joe Smith",
      "telephone": "731-620-9877 x6155",
      "email": "Giuseppe.Lang62@hotmail.com"
    },
    "recipient": "http://{lead-recipient}.example.com/profile/card#me",
    "sender": "http://{lead-sender}.example.com/profile/card#me",
    "owner": "http://{lead-owner}.example.com/profile/card#me",
    "dateAccepted": "2019-11-25T04:23:32.000Z",
    "dateRejected": "2019-08-24T14:15:22Z",
    "dateSent": "2019-08-24T14:15:22Z",
    "dateReceived": "2019-11-25T04:23:32.000Z",
    "leadSource": [
      {
        "type": "AskAction",
        "object": {
          "type": "Question",
          "text": "Help me I'm trapped inside documentation."
        }
      }
    ]
  }
}
```


