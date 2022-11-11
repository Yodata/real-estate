---
title: ImageObject
---
## Schema

| Name | Type | Description |
|---|---|---|
| (ImageObject) | allOf | - |
| 0 (allOf item) | allOf | an image, video or document availble for download |
| 0 (allOf item) | object | - |
| type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| @id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| 0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| 1 (allOf item) | - | - |
| 1.type | string | - |
| 1.id | string | the URL to access the item. <span class='constraints'>format (`uri`)</span> |
| 1.name | string | the file name of the object. |
| 1.encodingFormat | string | MIME type |
| 1.about | string | URI to the subject of the image or logo <span class='constraints'>format (`uri`)</span> |
| 1.url | string | URL of the image content <span class='constraints'>format (`uri`)</span> |
| 1 (allOf item) | - | - |
| 1.type | string | - |
| 1.id | any | - |
| 1.name | any | - |
| 1.encodingFormat | any | - |
| 0 (allOf item) | allOf | an image, video or document availble for download |
| 0 (allOf item) | object | - |
| type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| @id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| 0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| 1 (allOf item) | - | - |
| 1.type | string | - |
| 1.id | string | the URL to access the item. <span class='constraints'>format (`uri`)</span> |
| 1.name | string | the file name of the object. |
| 1.encodingFormat | string | MIME type |
| 1.about | string | URI to the subject of the image or logo <span class='constraints'>format (`uri`)</span> |
| 1.url | string | URL of the image content <span class='constraints'>format (`uri`)</span> |
| 1 (allOf item) | - | - |
| 1.type | string | - |
| 1.id | any | - |
| 1.name | any | - |
| 1.encodingFormat | any | - |

## Example



```json
{
  "type": "ImageObject",
  "@id": "http://example.com",
  "id": "http://user.example.com/public/logo/image.jpg",
  "name": "image.jpg",
  "encodingFormat": "image/jpeg",
  "about": "http://user.example.com/profile/card#me",
  "url": "http://user.example.com/public/profile/image.jpg"
}
```
