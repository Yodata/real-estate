---
title: EmailMessage
---
| Name | Type | Description |
|---|---|---|
| (root) | allOf | - |
| EmailMessage.0 (allOf item) | allOf | - |
| EmailMessage.0.0 (allOf item) | object | - |
| EmailMessage.0.0.type | string | The item type (Linked-Data @type) |
| EmailMessage.0.0.@id | string | the liked data uri for the Thing |
| EmailMessage.0.0 (property names) | - | - |
| EmailMessage.0.1 (allOf item) | - | A creative work, including books, movies, photographs, software programs, etc. |
| EmailMessage.0.1.type | string | - |
| EmailMessage.0.1.name | string | name of the work. |
| EmailMessage.0.1.description | string | description of the item |
| EmailMessage.0.1.creator | string | creator / author of the work |
| EmailMessage.0.1.dateCreated | string | The date on which the CreativeWork was created or the item was added to a DataFeed. |
| EmailMessage.0.1.dateModified | string | The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed. |
| EmailMessage.1 (allOf item) | - | an email message |
| EmailMessage.1.type | string | EmailMessage |
| EmailMessage.1.sender | string | ref to the sender |
| EmailMessage.1.messageAttachment | array<object> | message attachments |
| EmailMessage.1.messageAttachment.type | string | - |
| EmailMessage.1.messageAttachment.id | string | - |
| EmailMessage.1.messageAttachment.name | string | document name or title |
| EmailMessage.1.messageAttachment.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| EmailMessage.1.messageAttachment.about | object | subject of the Document |
| EmailMessage.1.messageAttachment.url | string | public URL of the object |
| EmailMessage.1.dateSent | string | The date/time at which the message was sent |
| EmailMessage.1.dateReceived | string | The date/time at which the message was received |
| EmailMessage.1.dateRead | string | The date/time at which the message was first viewed |
| EmailMessage.1.toRecipient | array<string> | direct recipient of the message |
| EmailMessage.1.toRecipient (single item) | string | - |
| EmailMessage.1.ccRecipient | array<string> | direct recipient of the message |
| EmailMessage.1.ccRecipient (single item) | string | - |
| EmailMessage.1.bccRecipient | array<string> | direct recipient of the message |
| EmailMessage.1.bccRecipient (single item) | string | - |

> Examples of EmailMessage

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


