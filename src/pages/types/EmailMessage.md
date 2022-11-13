---
title: EmailMessage
---
## Example



```json
{
  "type": "EmailMessage",
  "@id": "http://example.com",
  "name": "Market Report 1008 Mountain Gate Road",
  "description": "Dolor accusamus rerum nemo non omnis. Nam labore pariatur eius omnis sit.",
  "creator": "http://user.example.com/profile/card",
  "dateCreated": "2019-08-24T14:15:22Z",
  "dateModified": "2019-08-24T14:15:22Z",
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
  "dateSent": "2019-08-24T14:15:22Z",
  "dateReceived": "2019-08-24T14:15:22Z",
  "dateRead": "2019-08-24T14:15:22Z",
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

## Schema

| Name | Type | Description |
|---|---|---|
| (root) | allOf | - |
| 0 (allOf item) | allOf | - |
| 0 (allOf item) | object | - |
| type | string | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`) |
| @id | string | the liked data uri for the Thing format (`uri`) |
| 0 (property names) | - |  pattern (`^[a-z@$][a-zA-Z0-9-_]+$`) |
| 1 (allOf item) | - | A creative work, including books, movies, photographs, software programs, etc. |
| 1.type | string | allowed (`"CreativeWork"`)  |
| 1.name | string | name of the work. |
| 1.description | string | description of the item |
| 1.creator | string | creator / author of the work format (`uri`) |
| 1.dateCreated | string | The date on which the CreativeWork was created or the item was added to a DataFeed. format (`date-time`) |
| 1.dateModified | string | The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed. format (`date-time`) |
| 1 (allOf item) | - | an email message |
| 1.type | string | allowed (`"EmailMessage"`) EmailMessage |
| 1.sender | string | ref to the sender format (`uri`) |
| 1.messageAttachment | array<object> | message attachments |
| 1.messageAttachment.type | string | allowed (`"DigitalDocument"`)  |
| 1.messageAttachment.id | string | - |
| 1.messageAttachment.name | string | document name or title |
| 1.messageAttachment.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| 1.messageAttachment.about | object | subject of the Document |
| 1.messageAttachment.url | string | public URL of the object |
| 1.dateSent | string | The date/time at which the message was sent format (`date-time`) |
| 1.dateReceived | string | The date/time at which the message was received format (`date-time`) |
| 1.dateRead | string | The date/time at which the message was first viewed format (`date-time`) |
| 1.toRecipient | array<string> | direct recipient of the message |
| 1.toRecipient (single item) | string | - |
| 1.ccRecipient | array<string> | direct recipient of the message |
| 1.ccRecipient (single item) | string | - |
| 1.bccRecipient | array<string> | direct recipient of the message |
| 1.bccRecipient (single item) | string | - |

