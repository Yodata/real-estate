---
title: award#publish
---
## Message award#publish `award#publish`

*an award was published*

* Message ID: `award#publish`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

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

> Examples of headers _(generated)_

```json
{
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://teamsupermario.example.com/profile/card#me",
  "instrument": "http://supercrm.example.com/profile/card#me",
  "source": "https://bigbrandrealestate.example.com/profile/card#me",
  "originalRecipient": "http://bigbrandrealestate.example.com/profile/card#me",
  "id": "http://supercrm.example.com/publish/12345",
  "@id": "http://reliance.example.com/inbox/23456"
}
```


### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.object | oneOf | - |
| data.object.0 (oneOf item) | object | an award bestowed at regular intervals |
| data.object.0.type | string | - |
| data.object.0.name | string | name of the series |
| data.object.0.description | string | description of the item. |
| data.object.0.duration | string | The duration of the item in ISO 8601 date format. |
| data.object.0.startDate | string | the start date-time (ISO 8601 formated) |
| data.object.0.endDate | string | the end date-time (ISO 8601 formated) |
| data.object.0.id | string | - |
| data.object.0.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object.1 (oneOf item) | object | An honor bestowed on one or mote _recipients_ by the message _agent_ |
| data.object.1.type | string | "AwardAction" |
| data.object.1.name | string | name of the award |
| data.object.1.dateAwarded | string | date the award was presented or announced. |
| data.object.1.agent | string | the agent that presented the award |
| data.object.1.recipient | array<object> | recipients of the award |
| data.object.1.recipient.type | string | - |
| data.object.1.recipient.id | string | - |
| data.object.1.recipient.name | string | the name of the award recipient |
| data.object.1.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object.2 (oneOf item) | object | a Collection |
| data.object.2.type | string | - |
| data.object.2.name | string | the name of the item |
| data.object.2.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object.2.member | array<string> | members of the AwardTeam |
| data.object.2.member (single item) | string | - |
| data.object.3 (oneOf item) | string | - |

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


