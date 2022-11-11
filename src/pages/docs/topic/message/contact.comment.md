---
title: contact#comment
---
## contact#comment

*a comment (data.object) is added by a user (data.agent) to a contact (data.target)*

* MessageId: contact#comment
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
| data.agent | object |  <span class='constraints'>>= 2 properties</span> |
| data.agent.type | string | - |
| data.agent.name | string | the name of the item |
| data.agent.email | string |  <span class='constraints'>format (`email`)</span> |
| data.agent.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object | object | A comment on an item. |
| data.object.type | string | - |
| data.object.dateCreated | string | The date on which the item was created. <span class='constraints'>format (`date-time`)</span> |
| data.object.dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. <span class='constraints'>format (`date-time`)</span> |
| data.object.dateDeleted | string | The date on which the item was deleted. <span class='constraints'>format (`date-time`)</span> |
| data.object.text | string | - |
| data.object.author | object | the author of something |
| data.object.about | object | The subject of the content |
| data.object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.target | object | - |
| data.target.type | string | - |
| data.target.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.agent | object |  <span class='constraints'>>= 2 properties</span> |
| data.agent.type | string | - |
| data.agent.name | string | the name of the item |
| data.agent.email | string |  <span class='constraints'>format (`email`)</span> |
| data.agent.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object | object | A comment on an item. |
| data.object.type | string | - |
| data.object.dateCreated | string | The date on which the item was created. <span class='constraints'>format (`date-time`)</span> |
| data.object.dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. <span class='constraints'>format (`date-time`)</span> |
| data.object.dateDeleted | string | The date on which the item was deleted. <span class='constraints'>format (`date-time`)</span> |
| data.object.text | string | - |
| data.object.author | object | the author of something |
| data.object.about | object | The subject of the content |
| data.object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.target | object | - |
| data.target.type | string | - |
| data.target.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


