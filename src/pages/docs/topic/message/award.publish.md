---
title: award#publish
---
## Message

*an award was published*

* MessageId: award#publish
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
| topic | string | allowed (`"realestate/award#seriescreate"`, `"realestate/award#seriesupdate"`, `"realestate/award#seriesdelete"`, `"realestate/award#create"`, `"realestate/award#delete"`, `"realestate/award#teamcreate"`, `"realestate/award#teamupdate"`, `"realestate/award#teamdelete"`, `"realestate/award#teammemberadd"`, `"realestate/award#teammemberremove"`)  |
| data | object | - |
| data.type | string | allowed (`"CreateAction"`, `"UpdateAction"`, `"DeleteAction"`, `"AddAction"`, `"RemoveAction"`)  |
| data.object | oneOf | - |
| data.object.0 (oneOf item) | object | an award bestowed at regular intervals |
| data.object.0.type | string | const (`"AwardSeries"`)  |
| data.object.0.name | string | name of the series |
| data.object.0.description | string | description of the item. |
| data.object.0.duration | string | The duration of the item in ISO 8601 date format. format (`duration`) |
| data.object.0.startDate | string | the start date-time (ISO 8601 formated) format (`date-time`) |
| data.object.0.endDate | string | the end date-time (ISO 8601 formated) format (`date-time`) |
| data.object.0.id | string |  format (`uri`) |
| data.object.0.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object.1 (oneOf item) | object | An honor bestowed on one or mote _recipients_ by the message _agent_ |
| data.object.1.type | string | allowed (`"Award"`) "AwardAction" |
| data.object.1.name | string | name of the award |
| data.object.1.dateAwarded | string | date the award was presented or announced. format (`date-time`) |
| data.object.1.agent | string | the agent that presented the award format (`uri`) |
| data.object.1.recipient | array<object> | recipients of the award |
| data.object.1.recipient.type | string | allowed (`"RealEstateAgent"`, `"RealEstateOffice"`, `"RealEstateOrganization"`)  |
| data.object.1.recipient.id | string |  format (`uri`) |
| data.object.1.recipient.name | string | the name of the award recipient |
| data.object.1.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object.2 (oneOf item) | object | a Collection |
| data.object.2.type | string | const (`"AwardTeam"`)  |
| data.object.2.name | string | the name of the item |
| data.object.2.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object.2.member | array<string> | members of the AwardTeam |
| data.object.2.member (single item) | string |  format (`uri`) |
| data.object.3 (oneOf item) | string |  format (`uri`) |

### Payload Example(s) (generated)

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


### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


