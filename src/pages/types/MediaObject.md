---
title: MediaObject
---
## Example



```json
{
  "type": "MediaObject",
  "@id": "http://example.com",
  "id": "http://user.example.com/public/logo/fileName.zip",
  "name": "fileName.zip",
  "encodingFormat": "application/zip",
  "about": "http://user.example.com/profile/card#me",
  "url": "http://user.example.com/public/profile/image.jpg"
}
```

## Schema

| Name | Type | Description |
|---|---|---|
| (root) | allOf | an image, video or document availble for download |
| 0 (allOf item) | object | - |
| type | string | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`) |
| @id | string | the liked data uri for the Thing format (`uri`) |
| 0 (property names) | - |  pattern (`^[a-z@$][a-zA-Z0-9-_]+$`) |
| 1 (allOf item) | - | - |
| 1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| 1.id | string | the URL to access the item. format (`uri`) |
| 1.name | string | the file name of the object. |
| 1.encodingFormat | string | MIME type |
| 1.about | string | URI to the subject of the image or logo format (`uri`) |
| 1.url | string | URL of the image content format (`uri`) |

