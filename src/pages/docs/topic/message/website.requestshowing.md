---
title: website#requestshowing
---
## website#requestshowing

*a website visitor has requested a property showing*

* MessageId: website#requestshowing
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
| data.agent | object | a website user/visitor |
| data.agent.type | string | - |
| data.agent.name | string | - |
| data.agent.givenName | string | - |
| data.agent.familyName | string | - |
| data.agent.email | string |  <span class='constraints'>format (`email`)</span> |
| data.agent.telephone | string | - |
| data.agent.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.agent.sameAs | string | vendor specific identifier for the user can be shared with other vendors to identify the user <span class='constraints'>format (`uri`)</span> |
| data.agent.contactPoint | object | A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. <span class='constraints'>>= 3 properties</span> |
| data.agent.contactPoint.type | string | - |
| data.agent.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.agent.contactPoint.telephone | string | - |
| data.agent.contactPoint.faxNumber | string | - |
| data.agent.contactPoint.email | string | an email address for the item. <span class='constraints'>format (`email`)</span> |
| data.agent.contactPoint.url | string | primary URL for the item. <span class='constraints'>format (`uri`)</span> |
| data.agent.additionalProperties | object | additional properties for the website user |
| data.agent.additionalProperties.workingWithAgent | boolean | - |
| data.about | object | the PropertyListing |
| data.event | object | An event happening at a certain time and location |
| data.event.type | string | The item type (Linked-Data @type) |
| data.event.name | string | name of the event |
| data.event.description | string | event message content |
| data.event.about | object | a subject of the meeting or event |
| data.event.startDate | string | the start date-time (ISO 8601 formated) <span class='constraints'>format (`date-time`)</span> |
| data.event.endDate | string | the end date-time (ISO 8601 formated) <span class='constraints'>format (`date-time`)</span> |
| data.event.organizer | object | the event organizer |
| data.object | object | A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document. |
| data.object.type | string | - |
| data.object.text | string | - |
| data.recipient | object | - |
| data.recipient.type | string | - |
| data.recipient.name | string | - |
| data.recipient.id | string |  <span class='constraints'>format (`uri`)</span> |
| data.recipient.identifier | any | - |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.agent | object | a website user/visitor |
| data.agent.type | string | - |
| data.agent.name | string | - |
| data.agent.givenName | string | - |
| data.agent.familyName | string | - |
| data.agent.email | string |  <span class='constraints'>format (`email`)</span> |
| data.agent.telephone | string | - |
| data.agent.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.agent.sameAs | string | vendor specific identifier for the user can be shared with other vendors to identify the user <span class='constraints'>format (`uri`)</span> |
| data.agent.contactPoint | object | A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. <span class='constraints'>>= 3 properties</span> |
| data.agent.contactPoint.type | string | - |
| data.agent.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.agent.contactPoint.telephone | string | - |
| data.agent.contactPoint.faxNumber | string | - |
| data.agent.contactPoint.email | string | an email address for the item. <span class='constraints'>format (`email`)</span> |
| data.agent.contactPoint.url | string | primary URL for the item. <span class='constraints'>format (`uri`)</span> |
| data.agent.additionalProperties | object | additional properties for the website user |
| data.agent.additionalProperties.workingWithAgent | boolean | - |
| data.about | object | the PropertyListing |
| data.event | object | An event happening at a certain time and location |
| data.event.type | string | The item type (Linked-Data @type) |
| data.event.name | string | name of the event |
| data.event.description | string | event message content |
| data.event.about | object | a subject of the meeting or event |
| data.event.startDate | string | the start date-time (ISO 8601 formated) <span class='constraints'>format (`date-time`)</span> |
| data.event.endDate | string | the end date-time (ISO 8601 formated) <span class='constraints'>format (`date-time`)</span> |
| data.event.organizer | object | the event organizer |
| data.object | object | A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document. |
| data.object.type | string | - |
| data.object.text | string | - |
| data.recipient | object | - |
| data.recipient.type | string | - |
| data.recipient.name | string | - |
| data.recipient.id | string |  <span class='constraints'>format (`uri`)</span> |
| data.recipient.identifier | any | - |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


