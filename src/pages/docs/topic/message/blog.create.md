---
title: postingcreate
x-scope: realestate/blog#
summary: a blog post was created
---

## Message

_a blog post was created_

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/blog#postingcreate",
  "data": {
    "type": "CreateAction",
    "object": {
      "type": "BlogPosting",
      "identifier": {
        "aempostid": "xxxx"
      },
      "headline": "Top 10 Spring Cleaning Tips",
      "articleBody": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
      "image": {},
      "author": {
        "type": "RealEstateAgent",
        "id": "https://agent123.example.com/profile/card#me"
      },
      "provider": {
        "type": "RealEstateOrganization",
        "id": "https://example.com/profile/card#me"
      },
      "dateCreated": "2023-06-14T10:00:00Z",
      "dateModified": "2023-06-14T10:30:00Z",
      "url": {},
      "urlTemplate": "https://example.com/{author/name}/blog/post?{slug}"
    }
  }
}
**Payload**

| Name | Type | Description |
| --- | --- | --- |
| (root) | object | - |
| topic | string | const (`"realestate/blog#postingcreate"`) |
| data | object | - |
| data.type | string | const (`"CreateAction"`) |
| data.object | object | A blog post. |
| data.object.type | string | const (`"BlogPosting"`) |
| data.object.identifier | object | 1 property |
| data.object.headline | string | headline of the post. |
| data.object.articleBody | string | the actual body of the post in HTML format. |
| data.object.image | object | - |
| data.object.author | object | author of the work |
| data.object.author.type | string | enum (`"RealEstateAgent"`, `"RealEstateOffice"`, `"RealEstateTeam"`, `"RealEstateOrganization"`) |
| data.object.author.id | string | the profile URI of the author |
| data.object.provider | object | if the article is provided as a template or stock content to be shared by multiple authors, the provider should be included. |
| data.object.provider.type | string | enum (`"RealEstateOrganization"`, `"RealEstateTeam"`, `"RealEstateOffice"`, `"RealEstateAgent"`) |
| data.object.provider.id | string | the profile URI of the provider |
| data.object.dateCreated | string | The date on which the BlogPosting was created or the item was added to a DataFeed. |
| data.object.dateModified | string | The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed. |
| data.object.url | object | - |
| data.object.urlTemplate | string | urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570) |


**Headers**

| Name | Type | Description |
| --- | --- | --- |
| (root) | object | - |
| time | string | date & time the event was produced format (`date-time`) |
| agent | string | the user, team, or organization who sent the event format (`uri`) |
| instrument | string | the service which created the event format (`uri`) |
| source | string | an agent, team, or organization who received a copy of the event format (`uri`) |
| originalRecipient | string | the original recipient of the event with this id format (`uri`) |
| id | string | the shared identifier of the event, also known as the event id format (`uri`) |
| @id | string | the URL of your instance of the event in your inbox format (`uri`) |


**Tools**

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)
```
