---
title: Lead
---
| Name | Type | Description |
|---|---|---|
| (root) | object | a sales opportunity (object) offered by a sender to a recipient. |
| Lead.type | string | Lead |
| Lead.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| Lead.object | object | the lead (Contact) |
| Lead.recipient | string | the lead recipient |
| Lead.sender | string | the lead provider |
| Lead.owner | string | the original owner of the lead |
| Lead.dateAccepted | string | The date/time the item was accepted by the recipient |
| Lead.dateRejected | string | The date/time the item was rejected by the recipient |
| Lead.dateSent | string | the date the lead was sent |
| Lead.dateReceived | string | The date/time the item was received by it's recipient |
| Lead.leadSource | array<object> | lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton. |
| Lead.leadSource (single item) | object | - |

> Examples of Lead

```json
{
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
```


