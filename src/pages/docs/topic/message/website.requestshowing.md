---
title: website#requestshowing
---

## Message

_a website visitor has requested a property showing_

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#requestshowing",
  "data": {
    "type": "RequestShowingAction",
    "identifier":"nwurogb34tnoi3t",
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
    "about": {
      "type": "PropertyListing",
      "originatingSystemName": "GOTHAM-MLS",
      "originatingSystemKey": "12345",
      "url": "https://{company-website-url}/{path-to-listing}",
      "streetAddress": "1007 Mountain Gate Rd",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      }
    },
    "originatingSystem": {
        "type": "SoftwareApplication",
        "name": "RDesk",
        "description": "User Created.",
        "url": "http://www.rdeskwebsite.com/"
    },
    "event": {
      "type": "Event",
      "name": "Property Showing  64 Buttercup Lane, South Grafton, MA, USA",
      "description": "",
      "subEvents": [
        {
          "type": "Campaign",
          "name": "A good campaign name",
          "id": "ire:1d2995307f2c48ae9543caf586f43f9b",
          "url": "https://www.bhhspro.com/mentor/steve-baird/cid-356481/oh/889-hartford-drive-44035/pid-338005633",
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
        }
      ]
    },
    "object": {
      "type": "Question",
      "text": "Populus debet control notitia sua"
    },
    "recipient": {
      "type": "RealEstateAgent",
      "name": "John Smith",
      "id": "https://agentsmith.example.com/profile/card#me",
      "identifier": {
        "hsfid": "1234567890"
      }
    }
  }
}
```

### Payload

| Name                                             | Type    | Description                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (root)                                           | object  | -                                                                                                                                                                                                                                                                                           |
| topic                                            | string  | const (`"realestate/website#requestshowing"`)                                                                                                                                                                                                                                               |
| data                                             | object  | -                                                                                                                                                                                                                                                                                           |
| data.type                                        | string  | const (`"RequestShowingAction"`)                                                                                                                                                                                                                                                            |
| data.identifier                | string                           | unique identifier |
| data.agent                                       | object  | a website user/visitor                                                                                                                                                                                                                                                                      |
| data.agent.type                                  | string  | allowed (`"Person"`, `"Contact"`)                                                                                                                                                                                                                                                           |
| data.agent.name                                  | string  | -                                                                                                                                                                                                                                                                                           |
| data.agent.givenName                             | string  | -                                                                                                                                                                                                                                                                                           |
| data.agent.familyName                            | string  | -                                                                                                                                                                                                                                                                                           |
| data.agent.email                                 | string  | format (`email`)                                                                                                                                                                                                                                                                            |
| data.agent.telephone                             | string  | -                                                                                                                                                                                                                                                                                           |
| data.agent.identifier                            | object  | 1 properties                                                                                                                                                                                                                                                                                |
| data.agent.sameAs                                | string  | vendor specific identifier for the user can be shared with other vendors to identify the user format (`uri`)                                                                                                                                                                                |
| data.agent.contactPoint                          | object  | A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. >= 3 properties |
| data.agent.contactPoint.type                     | string  | const (`"ContactPoint"`)                                                                                                                                                                                                                                                                    |
| data.agent.contactPoint.name                     | string  | a label for the contactPoint, i.e. 'Work', or 'Home'                                                                                                                                                                                                                                        |
| data.agent.contactPoint.telephone                | string  | -                                                                                                                                                                                                                                                                                           |
| data.agent.contactPoint.faxNumber                | string  | -                                                                                                                                                                                                                                                                                           |
| data.agent.contactPoint.email                    | string  | an email address for the item. format (`email`)                                                                                                                                                                                                                                             |
| data.agent.contactPoint.url                      | string  | primary URL for the item. format (`uri`)                                                                                                                                                                                                                                                    |
| data.agent.additionalProperties                  | object  | additional properties for the website user                                                                                                                                                                                                                                                  |
| data.agent.additionalProperties.workingWithAgent | boolean | -                                                                                                                                                                                                                                                                                           |
| data.about                                       | object  | the PropertyListing                                                                                                                                                                                                                                                                         |
| data.event.type                                  | object  | type of the event e.g Campaign                                                                                                                                                                                                                                                              |
| data.event.name                                  | string  | any string name                                                                                                                                                                                                                                                                             |
| data.event.id                                    | string  | format (`uri`)                                                                                                                                                                                                                                                                              |
| data.event.url                                   | string  | url of the event                                                                                                                                                                                                                                                                            |
| data.event.subEvents                             | array   | array of subEvents                                                                                                                                                                                                                                                                          |
| data.object                                      | object  | A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.                                                                                                                                                                 |
| data.object.type                                 | string  | const (`"Question"`)                                                                                                                                                                                                                                                                        |
| data.object.text                                 | string  | -                                                                                                                                                                                                                                                                                           |
| data.recipient                                   | object  | -                                                                                                                                                                                                                                                                                           |
| data.recipient.type                              | string  | allowed (`"RealEstateAgent"`, `"RealEstateTeam"`, `"RealEstateOrganization"`)                                                                                                                                                                                                               |
| data.recipient.name                              | string  | -                                                                                                                                                                                                                                                                                           |
| data.recipient.id                                | string  | format (`uri`)                                                                                                                                                                                                                                                                              |
| data.originatingSystem | object | the original system where this item was created.  Can be of type Thing or any sub-type. |
| data.recipient.identifier                        | any     | 
-                                                                                                                                                                                                                                                                                           |

### Headers

| Name              | Type   | Description                                                                                                                                                                                                                                                                                               |
| ----------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (root)            | object | -                                                                                                                                                                                                                                                                                                         |
| time              | string | date & time the event was produced format (`date-time`)                                                                                                                                                                                                                                                   |
| agent             | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient format (`uri`)                                                                                                               |
| instrument        | string | the app or service that produced the event on behalf of the agent/user format (`uri`)                                                                                                                                                                                                                     |
| source            | string | a copy of the event was sent to the source(s). format (`uri`)                                                                                                                                                                                                                                             |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source format (`uri`) |
| id                | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. format (`uri`)                                                                             |
| @id               | string | format (`uri`)                                                                                                                                                                                                                                                                                            |

### Tools

- [Mock Data Generator](/tools/mock-data-generator)
- [Schema Validator](/tools/validate)
