---
title: ImageObject
---
| Name | Type | Description |
|---|---|---|
| (root) | allOf | - |
| ImageObject.0 (allOf item) | allOf | an image, video or document availble for download |
| ImageObject.0.0 (allOf item) | object | - |
| ImageObject.0.0.type | string | The item type (Linked-Data @type) |
| ImageObject.0.0.@id | string | the liked data uri for the Thing |
| ImageObject.0.0 (property names) | - | - |
| ImageObject.0.1 (allOf item) | - | - |
| ImageObject.0.1.type | string | - |
| ImageObject.0.1.id | string | the URL to access the item. |
| ImageObject.0.1.name | string | the file name of the object. |
| ImageObject.0.1.encodingFormat | string | MIME type |
| ImageObject.0.1.about | string | URI to the subject of the image or logo |
| ImageObject.0.1.url | string | URL of the image content |
| ImageObject.1 (allOf item) | - | - |
| ImageObject.1.type | string | - |
| ImageObject.1.id | any | - |
| ImageObject.1.name | any | - |
| ImageObject.1.encodingFormat | any | - |

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


