---
title: MediaObject
---
## Schema

| Name | Type | Description |
|---|---|---|
| (MediaObject) | allOf | an image, video or document availble for download |
| 0 (allOf item) | object | - |
| type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| @id | string | format (`uri`) the liked data uri for the Thing |
| 0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| 1 (allOf item) | - | - |
| 1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| 1.id | string | format (`uri`) the URL to access the item. |
| 1.name | string | the file name of the object. |
| 1.encodingFormat | string | MIME type |
| 1.about | string | format (`uri`) URI to the subject of the image or logo |
| 1.url | string | format (`uri`) URL of the image content |
| 0 (allOf item) | object | - |
| type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| @id | string | format (`uri`) the liked data uri for the Thing |
| 0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| 1 (allOf item) | - | - |
| 1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| 1.id | string | format (`uri`) the URL to access the item. |
| 1.name | string | the file name of the object. |
| 1.encodingFormat | string | MIME type |
| 1.about | string | format (`uri`) URI to the subject of the image or logo |
| 1.url | string | format (`uri`) URL of the image content |

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
