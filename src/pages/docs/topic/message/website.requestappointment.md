---
title: website#requestappointment
---
## website#requestappointment

*website user has requested an appointment*

* MessageId: website#requestappointment
* Content type: application/json

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


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

### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.agent | object | a website user/visitor |
| data.agent.type | string | - |
| data.agent.name | string | - |
| data.agent.givenName | string | - |
| data.agent.familyName | string | - |
| data.agent.email | string | - |
| data.agent.telephone | string | - |
| data.agent.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.agent.sameAs | string | vendor specific identifier for the user can be shared with other vendors to identify the user |
| data.agent.contactPoint | object | A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. |
| data.agent.contactPoint.type | string | - |
| data.agent.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.agent.contactPoint.telephone | string | - |
| data.agent.contactPoint.faxNumber | string | - |
| data.agent.contactPoint.email | string | an email address for the item. |
| data.agent.contactPoint.url | string | primary URL for the item. |
| data.agent.additionalProperties | object | additional properties for the website user |
| data.agent.additionalProperties.workingWithAgent | boolean | - |
| data.object | object | A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document. |
| data.object.type | string | - |
| data.object.text | string | - |
| data.recipient | object | the recipient of an object or action referred to in the message |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#requestappointment",
  "data": {
    "type": "RequestAppointmentAction",
    "agent": {
      "type": "Person",
      "name": "string",
      "givenName": "string",
      "familyName": "string",
      "email": "user@example.com",
      "telephone": "string",
      "identifier": {
        "salesforceid": "0031U00002XW1QWQA1"
      },
      "sameAs": {
        "amcecrmid": 1234567,
        "salesForceId": "parsing"
      },
      "contactPoint": {
        "type": "ContactPoint",
        "name": "Work",
        "telephone": "555-555-5555",
        "faxNumber": "555-555-5555",
        "email": "bob@example.com",
        "url": "https://www.facebook.com/hallandoates"
      },
      "additionalProperties": {
        "workingWithAgent": true
      }
    },
    "object": {
      "type": "Question",
      "text": "Populus debet control notitia sua"
    },
    "recipient": {
      "type": "RealEstateAgent",
      "name": "Randy Real Estate",
      "id": "https://8675309.example.com/profile/card#me"
    }
  }
}
```


