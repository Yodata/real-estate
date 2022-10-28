---
title: BlogPosting
route: /types/BlogPosting
menu: Types
---# BlogPosting
A blog post.


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | * |   |
| identifier | object | key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.  |
| headline | string | headline of the post.  |
| articleBody | string | the actual body of the post in HTML format.  |
| image | [*] | by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody. <br/>RANGE: [ImageObject](/types/ImageObject) |
| author | object | author of the work  |
| author.type | string |   |
| author.id | string&lt;uri&gt;  | the profile URI of the author  |
| provider | object | if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.  |
| provider.type | string |   |
| provider.id | string&lt;uri&gt;  | the profile URI of the provider  |
| dateCreated | string&lt;date-time&gt;  | The date on which the BlogPosting was created or the item was added to a DataFeed.  |
| dateModified | string&lt;date-time&gt;  | The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.  |
| url | string&lt;uri&gt;  | URL of the item.  |
| urlTemplate | string | urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)  |

### Example
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
  "dateCreated": "2022-10-12T01:13:43Z",
  "dateModified": "2022-10-12T01:13:43Z",
  "url": "http://example.com",
  "urlTemplate": "https://example.com/{author/name}/blog/post?{slug}"
}
```