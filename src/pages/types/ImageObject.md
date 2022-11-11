---
title: ImageObject
---
| Name | Type | Description |
|---|---|---|
| (root) | allOf | - |
| 0 (allOf item) | allOf | an image, video or document availble for download |
| 0 (allOf item) | object | - |
| type | string | The item type (Linked-Data @type) |
| @id | string | the liked data uri for the Thing |
| 0 (property names) | - | - |
| 1 (allOf item) | - | - |
| 1.type | string | - |
| 1.id | string | the URL to access the item. |
| 1.name | string | the file name of the object. |
| 1.encodingFormat | string | MIME type |
| 1.about | string | URI to the subject of the image or logo |
| 1.url | string | URL of the image content |
| 1 (allOf item) | - | - |
| 1.type | string | - |
| 1.id | any | - |
| 1.name | any | - |
| 1.encodingFormat | any | - |

> Examples of ImageObject

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


