---
title: BlogPosting
---
## Schema

| Name | Type | Description |
|---|---|---|
| (BlogPosting) | object | A blog post. |
| type | string | - |
| identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| headline | string | headline of the post. |
| articleBody | string | the actual body of the post in HTML format. |
| image | tuple<object allOf, ...optional<any>> | by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody. |
| image.0 (index) | object allOf | - |
| image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| image.0.0.0 (allOf item) | object | - |
| image.0.0.0.type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| image.0.0.0.@id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| image.0.0.0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| image.0.0.1 (allOf item) | - | - |
| image.0.0.1.type | string | - |
| image.0.0.1.id | string | the URL to access the item. <span class='constraints'>format (`uri`)</span> |
| image.0.0.1.name | string | the file name of the object. |
| image.0.0.1.encodingFormat | string | MIME type |
| image.0.0.1.about | string | URI to the subject of the image or logo <span class='constraints'>format (`uri`)</span> |
| image.0.0.1.url | string | URL of the image content <span class='constraints'>format (`uri`)</span> |
| image.0.1 (allOf item) | - | - |
| image.0.1.type | string | - |
| image.0.1.id | any | - |
| image.0.1.name | any | - |
| image.0.1.encodingFormat | any | - |
| author | object | author of the work |
| author.type | string | - |
| author.id | string | the profile URI of the author <span class='constraints'>format (`uri`)</span> |
| provider | object | if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included. |
| provider.type | string | - |
| provider.id | string | the profile URI of the provider <span class='constraints'>format (`uri`)</span> |
| dateCreated | string | The date on which the BlogPosting was created or the item was added to a DataFeed. <span class='constraints'>format (`date-time`)</span> |
| dateModified | string | The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed. <span class='constraints'>format (`date-time`)</span> |
| url | string | URL of the item. <span class='constraints'>format (`uri`)</span> |
| urlTemplate | string | urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570) |
| type | string | - |
| identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| headline | string | headline of the post. |
| articleBody | string | the actual body of the post in HTML format. |
| image | tuple<object allOf, ...optional<any>> | by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody. |
| image.0 (index) | object allOf | - |
| image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| image.0.0.0 (allOf item) | object | - |
| image.0.0.0.type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| image.0.0.0.@id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| image.0.0.0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| image.0.0.1 (allOf item) | - | - |
| image.0.0.1.type | string | - |
| image.0.0.1.id | string | the URL to access the item. <span class='constraints'>format (`uri`)</span> |
| image.0.0.1.name | string | the file name of the object. |
| image.0.0.1.encodingFormat | string | MIME type |
| image.0.0.1.about | string | URI to the subject of the image or logo <span class='constraints'>format (`uri`)</span> |
| image.0.0.1.url | string | URL of the image content <span class='constraints'>format (`uri`)</span> |
| image.0.1 (allOf item) | - | - |
| image.0.1.type | string | - |
| image.0.1.id | any | - |
| image.0.1.name | any | - |
| image.0.1.encodingFormat | any | - |
| author | object | author of the work |
| author.type | string | - |
| author.id | string | the profile URI of the author <span class='constraints'>format (`uri`)</span> |
| provider | object | if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included. |
| provider.type | string | - |
| provider.id | string | the profile URI of the provider <span class='constraints'>format (`uri`)</span> |
| dateCreated | string | The date on which the BlogPosting was created or the item was added to a DataFeed. <span class='constraints'>format (`date-time`)</span> |
| dateModified | string | The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed. <span class='constraints'>format (`date-time`)</span> |
| url | string | URL of the item. <span class='constraints'>format (`uri`)</span> |
| urlTemplate | string | urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570) |

## Example



```json
{
  "type": "BlogPosting",
  "identifier": {
    "aempostid": "xxxx"
  },
  "headline": "Top 10 Spring Cleeaning Tips",
  "articleBody": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
  "image": [
    {
      "type": "ImageObject",
      "@id": "http://example.com",
      "id": "http://user.example.com/public/logo/image.jpg",
      "name": "image.jpg",
      "encodingFormat": "image/jpeg",
      "about": "http://user.example.com/profile/card#me",
      "url": "http://user.example.com/public/profile/image.jpg"
    }
  ],
  "author": {
    "type": "RealEstateAgent",
    "id": "https://agent123.example.com/profile/card#me"
  },
  "provider": {
    "type": "RealEstateOrganization",
    "id": "https://example.com/profile/card#me"
  },
  "dateCreated": "2019-08-24T14:15:22Z",
  "dateModified": "2019-08-24T14:15:22Z",
  "url": "http://example.com",
  "urlTemplate": "https://example.com/{author/name}/blog/post?{slug}"
}
```
