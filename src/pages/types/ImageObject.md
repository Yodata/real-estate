---
title: ImageObject
route: /types/ImageObject
menu: Types
---# ImageObject

## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string! | The item type (Linked-Data @type)  |
| id | string&lt;uri&gt;  | the URL to access the item.  |
| name | string | the file name of the object.  |
| encodingFormat | string | MIME type  |
| about | string&lt;uri&gt;  | URI to the subject of the image or logo  |
| url | string&lt;uri&gt;  | URL of the image content  |

### Example
```json
{
  "type": "ImageObject",
  "id": "http://user.example.com/public/logo/image.jpg",
  "name": "image.jpg",
  "encodingFormat": "image/jpeg",
  "about": "http://user.example.com/profile/card#me",
  "url": "http://user.example.com/public/profile/image.jpg"
}
```
