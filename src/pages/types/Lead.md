---
title: Lead
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | a sales opportunity (object) offered by a sender to a recipient. |
| type | string | allowed (`"Lead"`) Lead |
| identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| object | object | the lead (Contact) |
| recipient | string | the lead recipient format (`uri`) |
| sender | string | the lead provider format (`uri`) |
| owner | string | the original owner of the lead format (`uri`) |
| dateAccepted | string | The date/time the item was accepted by the recipient |
| dateRejected | string | The date/time the item was rejected by the recipient format (`date-time`) |
| dateSent | string | the date the lead was sent format (`date-time`) |
| dateReceived | string | The date/time the item was received by it's recipient |
| leadSource | array<object> | lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton. |
| leadSource (single item) | object | - |

## Example



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
