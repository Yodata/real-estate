---
title: DigitalDocument
---
| Name | Type | Description |
|---|---|---|
| (root) | object | an electronic file. |
| DigitalDocument.type | string | - |
| DigitalDocument.id | string | - |
| DigitalDocument.name | string | document name or title |
| DigitalDocument.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| DigitalDocument.about | object | subject of the Document |
| DigitalDocument.url | string | public URL of the object |

> Examples of DigitalDocument

```json
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
```


