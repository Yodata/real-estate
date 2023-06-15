---
title: postingupdate
x-scope: realestate/blog#
summary: a blog post was updated
---

## Message

_a blog post was updated_

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/blog#postingupdate",
  "source": "http://{event-subject}.gotham-city-real-estate.example.com/profile/card#me",
  "agent": "http://{event-publisher}.example.com/profile/card#me",
  "instrument": "http://{event-producer}.example.com/profile/card#me",
  "time": "2022-02-03T11:36:45Z",
  "data": {
    "type": "UpdateAction",
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
| source | string<uri> | the user pod associated with the event, when events are published through an aggregator, publishers should add the source to identify the specific user associated with the event. |
| agent | string<uri> | the event publisher, may be an event aggregator in the case of a company pod distributing events on behalf of many users. |
| instrument | string<uri> | the message producer, the application or service that created the event |
| time | string<date-time> | the time the message was produced |
| data | object! | message payload, typically an Action **RANGE: CreateAction** |
| data.type | string | |
| data.object | object | A blog post. **RANGE: BlogPosting** |

### Headers

| Name              | Type   | Description                                                                                                                                                                                                                                                                                               |
| ----------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (root)            | object | -                                                                                                                                                                                                                                                                                                         |
| time              | string | date & time the event was produced format (`date-time`)                                                                                                                                                                                                                                                   |
| agent             | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient format (`uri`)                                                                                                               |
| instrument        | string | the app or service that produced the event on behalf of the agent/user format (`uri`)                                                                                                                                                                                                                     |
| source            | string | a copy of the event was sent to the source(s). format (`uri`)                                                                                                                                                                                                                                             |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source format (`uri`) |
| id                | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. format (`uri`)                                                                             |
| @id               | string | format (`uri`)                                                                                                                                                                                                                                                                                            |
