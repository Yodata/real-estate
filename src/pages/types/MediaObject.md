---
title: MediaObject
---
| Name | Type | Description |
|---|---|---|
| (root) | allOf | an image, video or document availble for download |
| MediaObject.0 (allOf item) | object | - |
| MediaObject.0.type | string | The item type (Linked-Data @type) |
| MediaObject.0.@id | string | the liked data uri for the Thing |
| MediaObject.0 (property names) | - | - |
| MediaObject.1 (allOf item) | - | - |
| MediaObject.1.type | string | - |
| MediaObject.1.id | string | the URL to access the item. |
| MediaObject.1.name | string | the file name of the object. |
| MediaObject.1.encodingFormat | string | MIME type |
| MediaObject.1.about | string | URI to the subject of the image or logo |
| MediaObject.1.url | string | URL of the image content |

> Examples of MediaObject

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


