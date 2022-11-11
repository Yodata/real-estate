---
title: Lead
---
## Schema

| Name | Type | Description |
|---|---|---|
| (Lead) | object | a sales opportunity (object) offered by a sender to a recipient. |
| type | string | allowed (`"Lead"`) Lead |
| identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| object | object | the lead (Contact) |
| recipient | string | format (`uri`) the lead recipient |
| sender | string | format (`uri`) the lead provider |
| owner | string | format (`uri`) the original owner of the lead |
| dateAccepted | string | The date/time the item was accepted by the recipient |
| dateRejected | string | format (`date-time`) The date/time the item was rejected by the recipient |
| dateSent | string | format (`date-time`) the date the lead was sent |
| dateReceived | string | The date/time the item was received by it's recipient |
| leadSource | array<object> | lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton. |
| leadSource (single item) | object | - |
| type | string | allowed (`"Lead"`) Lead |
| identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| object | object | the lead (Contact) |
| recipient | string | format (`uri`) the lead recipient |
| sender | string | format (`uri`) the lead provider |
| owner | string | format (`uri`) the original owner of the lead |
| dateAccepted | string | The date/time the item was accepted by the recipient |
| dateRejected | string | format (`date-time`) The date/time the item was rejected by the recipient |
| dateSent | string | format (`date-time`) the date the lead was sent |
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
