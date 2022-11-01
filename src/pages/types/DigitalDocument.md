---
title: DigitalDocument
route: /types/DigitalDocument
menu: Types
---# DigitalDocument
an electronic file.


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string |   |
| id | string |   |
| name | string | document name or title  |
| encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)  |
| about | object | subject of the Document <br/>RANGE: [Thing](/types/Thing) |
| url | string | public URL of the object  |

### Example
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
