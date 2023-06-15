---
title: postingdelete
x-scope: realestate/blog#
summary: a blog post was deleted
---

## Message

_a blog post was deleted_

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/blog#postingdelete",
  "source": "http://{event-subject}.gotham-city-real-estate.example.com/profile/card#me",
  "agent": "http://{event-publisher}.example.com/profile/card#me",
  "instrument": "http://{event-producer}.example.com/profile/card#me",
  "time": "2022-02-03T11:36:45Z",
  "data": {
    "type": "DeleteAction",
    "object": {
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
      "dateCreated": "2022-02-03T11:36:45Z",
      "dateModified": "2022-02-03T11:36:45Z",
      "url": "http://example.com",
      "urlTemplate": "https://example.com/{author/name}/blog/post?{slug}"
    }
  }
}
```

**Payload**
| Name | Type | Description |
| --------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| topic | string! | event identifier, same as cloudevents type. |
| source | string\<uri\> | the user pod associated with the event, when events are published through an aggregator, publishers should add the source to identify the specific user associated with the event. |
| agent | string\<uri\> | the event publisher, may be an event aggregator in the case of a company pod distributing events on behalf of many users. |
| instrument | string\<uri\> | the message producer, the application or service that created the event |
| time | string\<date-time\> | the time the message was produced |
| data | object! | message payload, typically an Action |
| | | **RANGE: DeleteAction** |
| data.type | string | |
| data.object | object | A blog post. |
| | | **RANGE: BlogPosting** |

**Tools**

- [Mock Data Generator](/tools/mock-data-generator)
- [Schema Validator](/tools/validate)
