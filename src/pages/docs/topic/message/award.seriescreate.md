---
title: award#seriescreate
---
## award#seriescreate

*a new award series was created*

* MessageId: award#seriescreate
* Content type: application.json

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


### Headers

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| time | string | date & time the event was produced |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient |
| instrument | string | the app or service that produced the event on behalf of the agent/user |
| source | string | a copy of the event was sent to the source(s). |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. |
| @id | string | - |

### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.object | object | an award bestowed at regular intervals |
| data.object.type | string | - |
| data.object.name | string | name of the series |
| data.object.description | string | description of the item. |
| data.object.duration | string | The duration of the item in ISO 8601 date format. |
| data.object.startDate | string | the start date-time (ISO 8601 formated) |
| data.object.endDate | string | the end date-time (ISO 8601 formated) |
| data.object.id | string | - |
| data.object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#seriescreate",
  "data": {
    "type": "CreateAction",
    "object": {
      "type": "AwardSeries",
      "name": "Top 1% Club",
      "description": "Annual",
      "duration": "R/P1Y",
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z",
      "id": "http://example.com",
      "identifier": {
        "hsfAwardSeriesID": "xxxx"
      }
    }
  }
}
```


