---
title: website#requestappointment
---
## Message

*website user has requested an appointment*

### Payload Example(s) (generated)

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
        "bhhsconsumerid": "12345"
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
  "event": {
    "type": "EventName",
    "name": "Any event name",
    "id": "1d2995307f2c48ae9543caf586f43f9b",
    "url": "https://user.example.com/mentor/example-name/cid-example123/oh/123-example-street/pid-example112233",
    "contactGroup": [
      {
        "type": "Collection",
        "name": "Topic 1"
      },
      {
        "type": "Collection",
        "name": "Topic 2"
      }
    ]
  },
    "recipient": {
      "type": "RealEstateAgent",
      "name": "Randy Real Estate",
      "id": "https://8675309.example.com/profile/card#me"
    }
  }
}
```



### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/website#requestappointment"`)  |
| data | object | - |
| data.type | string | const (`"RequestAppointmentAction"`)  |
| data.agent | object | a website user/visitor |
| data.agent.type | string | allowed (`"Person"`, `"Contact"`)  |
| data.agent.name | string | - |
| data.agent.givenName | string | - |
| data.agent.familyName | string | - |
| data.agent.email | string |  format (`email`) |
| data.agent.telephone | string | - |
| data.agent.identifier | object |  1 properties |
| data.agent.sameAs | string | vendor specific identifier for the user can be shared with other vendors to identify the user format (`uri`) |
| data.agent.contactPoint | object | A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. >= 3 properties |
| data.agent.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.agent.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.agent.contactPoint.telephone | string | - |
| data.agent.contactPoint.faxNumber | string | - |
| data.agent.contactPoint.email | string | an email address for the item. format (`email`) |
| data.agent.contactPoint.url | string | primary URL for the item. format (`uri`) |
| data.agent.additionalProperties | object | additional properties for the website user |
| data.agent.additionalProperties.workingWithAgent | boolean | - |
| data.object | object | A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document. |
| data.object.type | string | const (`"Question"`)  |
| data.object.text | string | - |
| data.event.type         | object | type of the event e.g Campaign                                                  |
| data.event.name         | string | any string name                                                                 |
| data.event.id           | string | format (`uri`)                                                                  |
| data.event.url          | string | url of the event                                                                |
| data.event.contactGroup | array  | array of contacts                                                               |
| data.recipient | object | the recipient of an object or action referred to in the message |

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

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


