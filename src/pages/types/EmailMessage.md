---
title: EmailMessage
route: /types/EmailMessage
menu: Types
---# EmailMessage
an email message


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string! | EmailMessage  |
| name | string | name of the work.  |
| description | string | description of the item  |
| creator | string&lt;uri&gt;  | creator / author of the work  |
| dateCreated | string&lt;date-time&gt;  | The date on which the CreativeWork was created or the item was added to a DataFeed.  |
| dateModified | string&lt;date-time&gt;  | The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.  |
| sender | string&lt;uri&gt;  | ref to the sender  |
| messageAttachment | [object] | message attachments <br/>RANGE: [DigitalDocument](/types/DigitalDocument) |
| messageAttachment.type | string |   |
| messageAttachment.id | string |   |
| messageAttachment.name | string | document name or title  |
| messageAttachment.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)  |
| messageAttachment.about | object | subject of the Document <br/>RANGE: [Thing](/types/Thing) |
| messageAttachment.url | string | public URL of the object  |
| dateSent | string&lt;date-time&gt;  | The date/time at which the message was sent  |
| dateReceived | string&lt;date-time&gt;  | The date/time at which the message was received  |
| dateRead | string&lt;date-time&gt;  | The date/time at which the message was first viewed  |
| toRecipient | [string] | direct recipient of the message  |
| ccRecipient | [string] | direct recipient of the message  |
| bccRecipient | [string] | direct recipient of the message  |

### Example
```json
{
  "type": "EmailMessage",
  "name": "Market Report 1008 Mountain Gate Road",
  "description": "Dolor accusamus rerum nemo non omnis. Nam labore pariatur eius omnis sit.",
  "creator": "http://user.example.com/profile/card",
  "dateCreated": "2022-10-12T01:13:43Z",
  "dateModified": "2022-10-12T01:13:43Z",
  "sender": "http://user.example.com/profile/card",
  "messageAttachment": [
    {
      "type": "DigitalDocument",
      "id": "http://user.example.com/public/logo/archive.zip",
      "name": "archive.zip",
      "encodingFormat": "application/zip",
      "about": {
        "type": "RealEstateTransaction",
        "identifier": {
          "bmsTransactionId": "xxxx"
        }
      },
      "url": "https://example.com"
    }
  ],
  "dateSent": "2022-10-12T01:13:43Z",
  "dateReceived": "2022-10-12T01:13:43Z",
  "dateRead": "2022-10-12T01:13:43Z",
  "toRecipient": [
    "user@example.com"
  ],
  "ccRecipient": [
    "user@example.com"
  ],
  "bccRecipient": [
    "user@example.com"
  ]
}
```
