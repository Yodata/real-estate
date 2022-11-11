---
title: award#seriesupdate
---
## Message

*an award series was updated*

* MessageId: award#seriesupdate
* Content type: application/json

### Headers

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| time | string | date & time the event was produced format (`date-time`) |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient format (`uri`) |
| instrument | string | the app or service that produced the event on behalf of the agent/user format (`uri`) |
| source | string | a copy of the event was sent to the source(s). format (`uri`) |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source format (`uri`) |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. format (`uri`) |
| @id | string |  format (`uri`) |

### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/award#seriesupdate"`)  |
| data | object | - |
| data.type | string | const (`"UpdateAction"`)  |
| data.object | object | an award bestowed at regular intervals |
| data.object.type | string | const (`"AwardSeries"`)  |
| data.object.name | string | name of the series |
| data.object.description | string | description of the item. |
| data.object.duration | string | The duration of the item in ISO 8601 date format. format (`duration`) |
| data.object.startDate | string | the start date-time (ISO 8601 formated) format (`date-time`) |
| data.object.endDate | string | the end date-time (ISO 8601 formated) format (`date-time`) |
| data.object.id | string |  format (`uri`) |
| data.object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/award#seriesupdate",
  "data": {
    "type": "UpdateAction",
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


### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


##### Message tags

| Name | Description | Documentation |
|---|---|---|
| action\|update | - | - |
| topic\|award | - | - |
| domain\|realestate | - | - |

