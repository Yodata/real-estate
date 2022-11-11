---
title: lead#accept
---
## lead#accept

*a lead (data.object) was accepted by the recipient (data.recipient).*

* MessageId: lead#accept
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
| type | string | - |
| object | object | a sales opportunity (object) offered by a sender to a recipient. |
| object.type | string | Lead |
| object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| object.object | object | the lead (Contact) |
| object.recipient | string | the lead recipient <span class='constraints'>format (`uri`)</span> |
| object.sender | string | the lead provider <span class='constraints'>format (`uri`)</span> |
| object.owner | string | the original owner of the lead <span class='constraints'>format (`uri`)</span> |
| object.dateAccepted | string | The date/time the item was accepted by the recipient |
| object.dateRejected | string | The date/time the item was rejected by the recipient <span class='constraints'>format (`date-time`)</span> |
| object.dateSent | string | the date the lead was sent <span class='constraints'>format (`date-time`)</span> |
| object.dateReceived | string | The date/time the item was received by it's recipient |
| object.leadSource | array<object> | lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton. |
| object.leadSource (single item) | object | - |
| type | string | - |
| object | object | a sales opportunity (object) offered by a sender to a recipient. |
| object.type | string | Lead |
| object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| object.object | object | the lead (Contact) |
| object.recipient | string | the lead recipient <span class='constraints'>format (`uri`)</span> |
| object.sender | string | the lead provider <span class='constraints'>format (`uri`)</span> |
| object.owner | string | the original owner of the lead <span class='constraints'>format (`uri`)</span> |
| object.dateAccepted | string | The date/time the item was accepted by the recipient |
| object.dateRejected | string | The date/time the item was rejected by the recipient <span class='constraints'>format (`date-time`)</span> |
| object.dateSent | string | the date the lead was sent <span class='constraints'>format (`date-time`)</span> |
| object.dateReceived | string | The date/time the item was received by it's recipient |
| object.leadSource | array<object> | lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton. |
| object.leadSource (single item) | object | - |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


