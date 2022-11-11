---
title: contact#planupdate
---
## contact#planupdate

*a contact plan (data.object) is updated by a user (data.agent)*

* MessageId: contact#planupdate
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
| data.object | object | a collection of related tasks |
| data.object.type | string | - |
| data.object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object.name | string | name of the plan |
| data.object.description | string | description of the item |
| data.object.member | array<object> | tasks which make up the plan |
| data.object.member.type | string | The item type (Linked-Data @type) |
| data.object.member.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object.member.actionStatus | string | disposition of the Action at the time of this action message. |
| data.object.member.memberOf | object | a plan the task is associated with |
| data.object.member.agent | object | the party who completed, or will complete the task |
| data.object.member.participant | array<object> | Other co-agents with a direct or indirect interest in the action. |
| data.object.member.participant (single item) | object | - |
| data.object.member.name | string | name or title |
| data.object.member.description | string | task detailed description |
| data.object.member.keywords | array<string> | - |
| data.object.member.keywords (single item) | string | - |
| data.object.member.dateDue | string | the due date-time (ISO 8601 formated) <span class='constraints'>format (`date-time`)</span> |
| data.object.member.dateCompleted | string | date the task was completed <span class='constraints'>format (`date-time`)</span> |
| data.object.member.location | object | the physical location where an event takes place |
| data.object.creator | any | the item creator |
| data.object.dateCreated | string | The date on which the item was created. <span class='constraints'>format (`date-time`)</span> |
| data.object.dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. <span class='constraints'>format (`date-time`)</span> |
| data.object.dateCompleted | string | The date on which the item was created. <span class='constraints'>format (`date-time`)</span> |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.agent | object |  <span class='constraints'>>= 2 properties</span> |
| data.agent.type | string | - |
| data.agent.name | string | the name of the item |
| data.agent.email | string |  <span class='constraints'>format (`email`)</span> |
| data.agent.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object | object | a collection of related tasks |
| data.object.type | string | - |
| data.object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object.name | string | name of the plan |
| data.object.description | string | description of the item |
| data.object.member | array<object> | tasks which make up the plan |
| data.object.member.type | string | The item type (Linked-Data @type) |
| data.object.member.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object.member.actionStatus | string | disposition of the Action at the time of this action message. |
| data.object.member.memberOf | object | a plan the task is associated with |
| data.object.member.agent | object | the party who completed, or will complete the task |
| data.object.member.participant | array<object> | Other co-agents with a direct or indirect interest in the action. |
| data.object.member.participant (single item) | object | - |
| data.object.member.name | string | name or title |
| data.object.member.description | string | task detailed description |
| data.object.member.keywords | array<string> | - |
| data.object.member.keywords (single item) | string | - |
| data.object.member.dateDue | string | the due date-time (ISO 8601 formated) <span class='constraints'>format (`date-time`)</span> |
| data.object.member.dateCompleted | string | date the task was completed <span class='constraints'>format (`date-time`)</span> |
| data.object.member.location | object | the physical location where an event takes place |
| data.object.creator | any | the item creator |
| data.object.dateCreated | string | The date on which the item was created. <span class='constraints'>format (`date-time`)</span> |
| data.object.dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. <span class='constraints'>format (`date-time`)</span> |
| data.object.dateCompleted | string | The date on which the item was created. <span class='constraints'>format (`date-time`)</span> |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


