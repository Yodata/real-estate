---
title: website#requestshowing
---

## Message

_a website visitor has requested a property showing_

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#requestshowing",
  "time": "2020-06-18T18:30:49Z",
  "agent": "https://bhhs.example.com/profile/card#me",
  "instrument": "https://smarter-agent.example.com/profile/card#me",
  "source": "https://{agentid}.example.com/profile/card#me",
  "identifier": "46wuVafgZ6/e9kGuyImp2vGJuNqYOF6YUHZU0WnOH5U/x5KDCc3mbV0r4OzJ619ZmMTAb88r7Tp3CmQFeSc2Lz/O",
  "data": {
    "type": "RequestShowingAction",
    "identifier": "nwurogb34tnoi3t",
    "agent": {
      "type": "Contact",
      "name": "string",
      "givenName": "string",
      "familyName": "string",
      "email": "user@example.com",
      "telephone": "string",
      "identifier": {
        "bhhsconsumerid": "12345",
        "hsfconsumerid": "6e1d852d-55bb-42b0-8be6-699a505b196e"
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
      },
      "additionalProperty": {
        "userPath": "https://www.bhhsheymannwilliams.com/fl/12036-arbor-lake-drive-jacksonville-32225/pid-433020568|12036 Arbor Lake Drive, Jacksonville, FL 32225 - MLS 2146410 - Berkshire Hathaway HomeServices|0"
      },
      "mortgage": false
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
      "listingId": "433020568",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      },
      "listingOriginatingSystem": {
        "type": "MultipleListingService",
        "name": "NEFMLS Northeast Florida (RealMLS)",
        "identifier": {
          "orgId": "flnemls"
        },
        "originatingSystemName": "NEFMLS Northeast Florida (RealMLS)",
        "originatingSystemKey": "2146410"
      }
    },
    "instrument": {},
    "leadOwner": {
      "type": "agent",
      "name": "Tiffany Messer",
      "id": "https://471520.bhhs.hsfaffiliates.com/profile/card#me"
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
  },
  "@id": "https://bhhs.hsfaffiliates.com/outbox/3d9775ff8ecd40bcaeb9f42fbfa15cba",
  "id": "https://aem.bhhs.hsfaffiliates.com/publish/7036ede8196745819a85a9f13a6f12e5",
  "timestamp": 1780002512791,
  "originalRecipient": "https://471520.bhhs.hsfaffiliates.com/profile/card#me",
  "@to": "https://listtracwebsite.bhhs.hsfaffiliates.com/profile/card#me"
}
```

### Payload

| Name                                             | Type    | Description                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (root)                                                                | object  | - |
| topic                                                                 | string  | const (`"realestate/website#requestshowing"`) |
| source                                                                | string  | data source |
| instrument                                                            | string  | format (`uri`) |
| agent                                                                 | string  | format (`uri`) |
| time                                                                  | string  | date and time the event was produced |
| timestamp                                                             | number  | event timestamp |
| originalRecipient                                                     | string  | format (`uri`) |
| @id                                                                   | string  | format (`uri`) |
| id                                                                    | string  | format (`uri`) |
| @to                                                                   | string  | format (`uri`) |
| data                                                                  | object  | - |
| data.type                                                             | string  | const (`"RequestShowingAction"`) |
| data.identifier                                                       | string  | unique identifier |
| data.agent                                                            | object  | a website user/visitor |
| data.agent.type                                                       | string  | allowed (`"Person"`, `"Contact"`) |
| data.agent.name                                                       | string  | full name |
| data.agent.givenName                                                  | string  | first name |
| data.agent.familyName                                                 | string  | last name |
| data.agent.email                                                      | string  | format (`email`) |
| data.agent.telephone                                                  | string  | telephone number |
| data.agent.identifier                                                 | object  | agent identifier |
| data.agent.identifier.hsfconsumerid                                   | string  | HSF consumer identifier |
| data.agent.sameAs                                                     | string  | vendor specific identifier for the user can be shared with other vendors to identify the user format (`uri`) |
| data.agent.contactPoint                                               | object  | A point of contact for the entity |
| data.agent.contactPoint.type                                          | string  | const (`"ContactPoint"`) |
| data.agent.contactPoint.name                                          | string  | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.agent.contactPoint.telephone                                     | string  | telephone number |
| data.agent.contactPoint.faxNumber                                     | string  | fax number |
| data.agent.contactPoint.email                                         | string  | format (`email`) |
| data.agent.contactPoint.url                                           | string  | format (`uri`) |
| data.agent.additionalProperties                                       | object  | additional properties for the website user |
| data.agent.additionalProperties.workingWithAgent                      | boolean | true or false |
| data.agent.additionalProperty                                         | object  | additional property for the website user |
| data.agent.additionalProperty.userPath                                | string  | user path |
| data.agent.mortgage                                                   | boolean | true or false |
| data.about                                                            | object  | the PropertyListing |
| data.about.type                                                       | string  | const (`"PropertyListing"`) |
| data.about.url                                                        | string  | property listing URL |
| data.about.postalCode                                                 | string  | postal code |
| data.about.addressRegion                                              | string  | state or region |
| data.about.streetAddress                                              | string  | street address |
| data.about.addressLocality                                            | string  | city or locality |
| data.about.addressCountry                                             | string  | country |
| data.about.listingId                                                  | string  | unique listing identifier |
| data.about.listingPrice                                               | object  | listing price details |
| data.about.listingPrice.type                                          | string  | const (`"PriceSpecification"`) |
| data.about.listingPrice.price                                         | number  | listing price |
| data.about.listingPrice.priceCurrency                                 | string  | use ISO4217 |
| data.about.originatingSystemName                                      | string  | originating system name |
| data.about.originatingSystemKey                                       | string  | originating system key |
| data.about.listingOriginatingSystem                                   | object  | original listing system details |
| data.about.listingOriginatingSystem.type                              | string  | const (`"MultipleListingService"`) |
| data.about.listingOriginatingSystem.name                              | string  | listing system name |
| data.about.listingOriginatingSystem.identifier                        | object  | listing system identifier |
| data.about.listingOriginatingSystem.identifier.orgId                  | string  | MLS organization identifier |
| data.about.listingOriginatingSystem.originatingSystemName             | string  | originating system name |
| data.about.listingOriginatingSystem.originatingSystemKey              | string  | originating system listing key |
| data.instrument                                                       | object  | the site, app, or service on which the user action was observed |
| data.leadOwner                                                        | object  | lead owner details |
| data.leadOwner.type                                                   | string  | lead owner type |
| data.leadOwner.name                                                   | string  | lead owner name |
| data.leadOwner.id                                                     | string  | format (`uri`) |
| data.event.type                                                       | object  | type of the event e.g Campaign |
| data.event.name                                                       | string  | any string name |
| data.event.id                                                         | string  | format (`uri`) |
| data.event.url                                                        | string  | url of the event |
| data.event.subEvents                                                  | array   | array of subEvents |
| data.object                                                           | object  | A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions document |
| data.object.type                                                      | string  | const (`"Question"`) |
| data.object.text                                                      | string  | question text |
| data.recipient                                                        | object  | recipient details |
| data.recipient.type                                                   | string  | allowed (`"RealEstateAgent"`, `"RealEstateTeam"`, `"RealEstateOrganization"`) |
| data.recipient.name                                                   | string  | recipient name |
| data.recipient.id                                                     | string  | format (`uri`) |
| data.recipient.identifier                                             | any     | recipient identifier |
| data.originatingSystem                                                | object  | the original system where this item was created. Can be of type Thing or any sub-type |


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
