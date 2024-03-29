---
title: lead#asssign
---
## Message

*a lead was assigned*

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/lead#assign",
  "data": {
    "type": "lead#assign",
    "object": {
      "type": "Lead",
      "identifier": {
        "bhhsconsumerid": "12345"
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
    "originatingSystem": {
        "type": "SoftwareApplication",
        "name": "RDesk",
        "description": "User Created.",
        "url": "http://www.rdeskwebsite.com/"
    },
    "agent": "http://example.com",
    "recipient": "http://andyagent.example.com/profile/card#me"
  }
}
```



### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/lead#assign"`)  |
| data | object | - |
| data.type | string | const (`"lead#assign"`)  |
| data.object | object | a sales opportunity (object) offered by a sender to a recipient. |
| data.object.type | string | allowed (`"Lead"`) Lead |
| data.object.identifier | object |  1 properties |
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
| data.agent | string | the assignor, typically the lead owner format (`uri`) |
| data.recipient | string | the assignee of the lead. format (`uri`) |
| data.originatingSystem | object | the original system where this item was created.  Can be of type Thing or any sub-type. |

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


