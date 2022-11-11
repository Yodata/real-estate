---
title: marketingpreferences#unsubscribe
---
## marketingpreferences#unsubscribe

*a consumer (agent) unsubscribes to email or sms for a specific agent (object)*

* MessageId: marketingpreferences#unsubscribe
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
| data | allOf | - |
| data.0 (allOf item) | object | An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role. [schema.org/Action](https://schema.org/Action) |
| data.0.type | string | the action type |
| data.0.object | any | item on which the action is carried out |
| data.1 (allOf item) | - | the consumer (agent) has unsubscribed to content from the participant with roleName SubscriptionProvider. |
| data.1.type | string | - |
| data.1.agent | object | the subscriber |
| data.1.participant | array<object> | the subscription provider, an Agent, Team, Office or Organization |
| data.1.participant.roleName | string | - |
| data.1.participant.id | string |  <span class='constraints'>format (`uri`)</span> |
| data.1.participant.additionalProperty | object | - |
| data.1.participant.additionalProperty.isCompanyQueue | boolean | - |
| topic | string | - |
| data | allOf | - |
| data.0 (allOf item) | object | An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role. [schema.org/Action](https://schema.org/Action) |
| data.0.type | string | the action type |
| data.0.object | any | item on which the action is carried out |
| data.1 (allOf item) | - | the consumer (agent) has unsubscribed to content from the participant with roleName SubscriptionProvider. |
| data.1.type | string | - |
| data.1.agent | object | the subscriber |
| data.1.participant | array<object> | the subscription provider, an Agent, Team, Office or Organization |
| data.1.participant.roleName | string | - |
| data.1.participant.id | string |  <span class='constraints'>format (`uri`)</span> |
| data.1.participant.additionalProperty | object | - |
| data.1.participant.additionalProperty.isCompanyQueue | boolean | - |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


