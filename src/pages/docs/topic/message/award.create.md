---
title: award#create
---
## award#create

*an award was created*

* MessageId: award#create
* Content type: application/json

An award was created. The award is described in the `object` property.
The award presentor is described in the `agent` property.
The award recipient is described in the `recipient` property.


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
| data | - | - |
| data.type | string | - |
| data.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.agent | object | the award presenter |
| data.agent.type | string | - |
| data.agent.id | string |  <span class='constraints'>format (`uri`)</span> |
| data.agent.name | string | the name of the award presenter |
| data.object | object | An honor bestowed on one or mote _recipients_ by the message _agent_ |
| data.object.type | string | "AwardAction" |
| data.object.name | string | name of the award |
| data.object.dateAwarded | string | date the award was presented or announced. <span class='constraints'>format (`date-time`)</span> |
| data.object.agent | string | the agent that presented the award <span class='constraints'>format (`uri`)</span> |
| data.object.recipient | array<object> | recipients of the award |
| data.object.recipient.type | string | - |
| data.object.recipient.id | string |  <span class='constraints'>format (`uri`)</span> |
| data.object.recipient.name | string | the name of the award recipient |
| data.object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.recipient | object | the award recipient |
| data.recipient.type | string | - |
| data.recipient.id | string |  <span class='constraints'>format (`uri`)</span> |
| data.recipient.name | string | the name of the award recipient |
| topic | string | - |
| data | - | - |
| data.type | string | - |
| data.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.agent | object | the award presenter |
| data.agent.type | string | - |
| data.agent.id | string |  <span class='constraints'>format (`uri`)</span> |
| data.agent.name | string | the name of the award presenter |
| data.object | object | An honor bestowed on one or mote _recipients_ by the message _agent_ |
| data.object.type | string | "AwardAction" |
| data.object.name | string | name of the award |
| data.object.dateAwarded | string | date the award was presented or announced. <span class='constraints'>format (`date-time`)</span> |
| data.object.agent | string | the agent that presented the award <span class='constraints'>format (`uri`)</span> |
| data.object.recipient | array<object> | recipients of the award |
| data.object.recipient.type | string | - |
| data.object.recipient.id | string |  <span class='constraints'>format (`uri`)</span> |
| data.object.recipient.name | string | the name of the award recipient |
| data.object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.recipient | object | the award recipient |
| data.recipient.type | string | - |
| data.recipient.id | string |  <span class='constraints'>format (`uri`)</span> |
| data.recipient.name | string | the name of the award recipient |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


##### Message tags

| Name | Description | Documentation |
|---|---|---|
| action\|create | - | - |
| topic\|award | - | - |
| domain\|realestate | - | - |

