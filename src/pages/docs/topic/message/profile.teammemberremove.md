---
title: profile#teammemberremove
---
## profile#teammemberremove

*a member (user) is removed from the team*

* MessageId: profile#teammemberremove
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
| data.object | allOf | - |
| data.object.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| data.object.0.type | string | a role played by the member in the memberOf group |
| data.object.0.roleName | string | the role name |
| data.object.0.memberOf | object | the org or group where the role is performed |
| data.object.0.member | string | member object or id <span class='constraints'>format (`uri`)</span> |
| data.object.0.startDate | string | date the member began performing this role <span class='constraints'>format (`date-time`)</span> |
| data.object.0.endDate | string | date the member stopped performing the role <span class='constraints'>format (`date-time`)</span> |
| data.object.1 (allOf item) | object | a membership relationship.  Subclass of OrganizationRole |
| data.object.1.type | string | a member of a real estate team |
| data.object.1.roleName | string | - |
| data.object.1.memberOf | string |  <span class='constraints'>format (`uri`)</span> |
| data.object.1.member | string |  <span class='constraints'>format (`uri`)</span> |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.object | allOf | - |
| data.object.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| data.object.0.type | string | a role played by the member in the memberOf group |
| data.object.0.roleName | string | the role name |
| data.object.0.memberOf | object | the org or group where the role is performed |
| data.object.0.member | string | member object or id <span class='constraints'>format (`uri`)</span> |
| data.object.0.startDate | string | date the member began performing this role <span class='constraints'>format (`date-time`)</span> |
| data.object.0.endDate | string | date the member stopped performing the role <span class='constraints'>format (`date-time`)</span> |
| data.object.1 (allOf item) | object | a membership relationship.  Subclass of OrganizationRole |
| data.object.1.type | string | a member of a real estate team |
| data.object.1.roleName | string | - |
| data.object.1.memberOf | string |  <span class='constraints'>format (`uri`)</span> |
| data.object.1.member | string |  <span class='constraints'>format (`uri`)</span> |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


