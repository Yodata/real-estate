---
title: award#seriesupdate
---
## award#seriesupdate

*an award series was updated*

* MessageId: award#seriesupdate
* Content type: application/json

### Headers

| Name | Type | Description |
|---|---|---|
| - | object | - |
| time | string | date & time the event was produced <span class='constraints'>format (`date-time`)</span> |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient <span class='constraints'>format (`uri`)</span> |
| instrument | string | the app or service that produced the event on behalf of the agent/user <span class='constraints'>format (`uri`)</span> |
| source | string | a copy of the event was sent to the source(s). <span class='constraints'>format (`uri`)</span> |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source <span class='constraints'>format (`uri`)</span> |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. <span class='constraints'>format (`uri`)</span> |
| @id | string |  <span class='constraints'>format (`uri`)</span> |
| time | string | date & time the event was produced <span class='constraints'>format (`date-time`)</span> |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient <span class='constraints'>format (`uri`)</span> |
| instrument | string | the app or service that produced the event on behalf of the agent/user <span class='constraints'>format (`uri`)</span> |
| source | string | a copy of the event was sent to the source(s). <span class='constraints'>format (`uri`)</span> |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source <span class='constraints'>format (`uri`)</span> |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. <span class='constraints'>format (`uri`)</span> |
| @id | string |  <span class='constraints'>format (`uri`)</span> |

### Payload

| Name | Type | Description |
|---|---|---|
| - | object | - |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.object | object | an award bestowed at regular intervals |
| data.object.type | string | - |
| data.object.name | string | name of the series |
| data.object.description | string | description of the item. |
| data.object.duration | string | The duration of the item in ISO 8601 date format. <span class='constraints'>format (`duration`)</span> |
| data.object.startDate | string | the start date-time (ISO 8601 formated) <span class='constraints'>format (`date-time`)</span> |
| data.object.endDate | string | the end date-time (ISO 8601 formated) <span class='constraints'>format (`date-time`)</span> |
| data.object.id | string |  <span class='constraints'>format (`uri`)</span> |
| data.object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.object | object | an award bestowed at regular intervals |
| data.object.type | string | - |
| data.object.name | string | name of the series |
| data.object.description | string | description of the item. |
| data.object.duration | string | The duration of the item in ISO 8601 date format. <span class='constraints'>format (`duration`)</span> |
| data.object.startDate | string | the start date-time (ISO 8601 formated) <span class='constraints'>format (`date-time`)</span> |
| data.object.endDate | string | the end date-time (ISO 8601 formated) <span class='constraints'>format (`date-time`)</span> |
| data.object.id | string |  <span class='constraints'>format (`uri`)</span> |
| data.object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


##### Message tags

| Name | Description | Documentation |
|---|---|---|
| action\|update | - | - |
| topic\|award | - | - |
| domain\|realestate | - | - |

