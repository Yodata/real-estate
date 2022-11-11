---
title: lead#update
---
## Message

*a crm lead was updated*

* MessageId: lead#update
* Content type: application/json

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

### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/lead#update"`)  |
| data | object | - |
| data.type | string | const (`"UpdateAction"`)  |
| data.object | object | a sales opportunity (object) offered by a sender to a recipient. |
| data.object.type | string | allowed (`"Lead"`) Lead |
| data.object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object.object | object | the lead (Contact) |
| data.object.recipient | string | the lead recipient format (`uri`) |
| data.object.sender | string | the lead provider format (`uri`) |
| data.object.owner | string | the original owner of the lead format (`uri`) |
| data.object.dateAccepted | string | The date/time the item was accepted by the recipient |
| data.object.dateRejected | string | The date/time the item was rejected by the recipient format (`date-time`) |
| data.object.dateSent | string | the date the lead was sent format (`date-time`) |
| data.object.dateReceived | string | The date/time the item was received by it's recipient |
| data.object.leadSource | array<object> | lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton. |
| data.object.leadSource (single item) | object | - |
| data.agent | string | user who effected the change format (`uri`) |

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/lead#update",
  "data": {
    "type": "UpdateAction",
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
    },
    "agent": "https://{lead-admin}.bhhs.hsaffailites.com/profile/card"
  }
}
```


### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


