---
title: website#register
---

## Message

_website user has registered on the website_

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#register",
  "source": "https://PA305.bhhs.hsfaffiliates.com/profile/card#me", 
  "identifier": "7d9a7796-3671-4ac4-8e11-321172ae30a3", 
  "data": {
    "type": "RegisterAction", 
    "agent": {
      "type": "Person",
      "name": "string",
      "givenName": "string",
      "familyName": "string",
      "email": "user@example.com",
      "dateCreated": "2026-05-28T19:32:45.593Z", 
      "dateModified": "2026-05-28T19:32:45.593Z", 
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
      "additionalProperty": {
        "workingWithAgent": true,
        "redPreferredContactMethod": "No Preference", 
        "redPreferredTime": "", 
        "preferredLanguage": "en-US", 
        "preferredCurrency": "USD", 
        "preferredUnits": "Imperial", 
        "marketingViaEmailOptIn": true, 
        "marketingViaSmsOptIn": false, 
        "userPath": "https://www.bhhshomesale.com/search?SearchInput=Oley%2BTwp%2BPA&SearchType=City&PropertyType=1%2C2&ApplicationType=FOR_SALE&ListingStatus=1&NewListing=false&Sort=DATE_DESCENDING&PageSize=32&Page=1&SearchParameter=Oley%2BTwp%2C%2BPA&Country=US&isAgentPage=false&isFranchisePage=true&franchiseeCode=PA305;Property Search Results Homesale Realty | Berkshire Hathaway HomeServices;0" 
      }
    },
    "description": "ClientRegistration: Darlene Moyer\n\n", 
    "instrument": {
      "type": "Website",
      "name": "Agent Website",
      "url": "https://www.example.com"
    },
    "recipient": "https://PA305.bhhs.hsfaffiliates.com/profile/card#me", 
    "identifier": "3SMTCvj2VVfNyXzFlGeDO0w8AV3rVjWhrbrZN6Jdu5gjQKxaYKf3SDR/sWpHH8Gtgbyy9Fb0zRDU6hRUn5Sf0w==", 
    "leadOwner": { 
            "type": "RealEstateWebsite",
            "name": "Office Website",
            "id": "https://PA305.bhhs.hsfaffiliates.com/profile/card#me"
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
          "url": " https://www.bhhspro.com/mentor/steve-baird/cid-356481/oh/889-hartford-drive-44035/pid-338005633",
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
    }
  }
}
```

### Payload

| Name                                             | Type    | Description                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (root)                                           | object  | -                                                                                                                                                                                                                                                                                           |
| topic                                            | string  | const (`"realestate/website#register"`)                                                                                                                                                                                                                                                     |
| source                                            | string  | data source                                                                                                                                                                                                                                                   |
| identifier                                           | string  | unique identifier                                                                                                                                                                                                                                                     |
| data                                             | object  | -                                                                                                                                                                                                                                                                                           |
| data.type                                  | string  | const (`"RegisterAction"`)                                                                                                                                                                                                                                                                          |
| data.identifier                                  | string  | unique identifier                                                                                                                                                                                                                                                                           |
| data.agent                                       | object  | a website user/visitor                                                                                                                                                                                                                                                                      |
| data.agent.type                                  | string  | allowed (`"Person"`, `"Contact"`)                                                                                                                                                                                                                                                           |
| data.agent.name                                  | string  | -                                                                                                                                                                                                                                                                                           |
| data.agent.givenName                             | string  | -                                                                                                                                                                                                                                                                                           |
| data.agent.familyName                            | string  | -                                                                                                                                                                                                                                                                                           |
| data.agent.email                                 | string  | format (`email`)                                                                                                                                                                                                                                                                            |
| data.agent.dateCreated                             | date-time  | date & time the event was created                                                                                                                                                                                                                                                                                     |
| data.agent.dateModified                             | string  | date & time the event was modified                                                                                                                                                                                                                                                                                          |
| data.agent.telephone                             | string  | -                                                                                                                                                                                                                                                                                           |
| data.agent.identifier                            | object  | 1 properties                                                                                                                                                                                                                                                                                |
| data.agent.sameAs                                | string  | vendor specific identifier for the user can be shared with other vendors to identify the user format (`uri`)                                                                                                                                                                                |
| data.agent.contactPoint                          | array  | A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. >= 3 properties |
| data.agent.contactPoint.0.type                     | string  | const (`"ContactPoint"`)                                                                                                                                                                                                                                                                    |
| data.agent.contactPoint.0.name                     | string  | a label for the contactPoint, i.e. 'Work', or 'Home'                                                                                                                                                                                                                                        |
| data.agent.contactPoint.0.telephone                | string  | -                                                                                                                                                                                                                                                                                           |
| data.agent.contactPoint.0.faxNumber                | string  | -                                                                                                                                                                                                                                                                                           |
| data.agent.contactPoint.0.email                    | string  | an email address for the item. format (`email`)                                                                                                                                                                                                                                             |
| data.agent.contactPoint.0.url                      | string  | primary URL for the item. format (`uri`)                                                                                                                                                                                                                                                    |
| data.agent.contactPoint.0.kind                      | string  | const("`EmailAdress`")                                                                                                                                                                                                                                                    |
| data.agent.additionalProperty                  | object  | additional properties for the website user                                                                                                                                                                                                                                                  |
| data.agent.additionalProperty.workingWithAgent | boolean | -                                                                                                                                                                                                                                                                                           |
| data.agent.additionalProperty.redPreferredContactMethod | string | redPreferredContactMethod                                                                                                                                                                                                                                                                                          |
| data.agent.additionalProperty.redPreferredTime | string | redPreferredTime                                                                                                                                                                                                                                                                                           |
| data.agent.additionalProperty.preferredLanguage | string | preferredLanguage                                                                                                                                                                                                                                                                                           |
| data.agent.additionalProperty.preferredCurrency | string | preferredCurrency                                                                                                                                                                                                                                                                                           |
| data.agent.additionalProperty.preferredUnits | string | preferredUnits                                                                                                                                                                                                                                                                                           |
| data.agent.additionalProperty.marketingViaEmailOptIn | boolean | true or false                                                                                                                                                                                                                                                                                           |
| data.agent.additionalProperty.marketingViaSmsOptIn | boolean | true or false                                                                                                                                                                                                                                                                                           |
| data.agent.additionalProperty.userPath | string | userPath                                                                                                                                                                                                                                                                                           |
| data.description | string | data description                                                                                                                                                                                                                                                                                           |
| data.instrument                                  | object  | the site, app or service being on which the user action was observed.                                                                                                                                                                                                                       |
| data.instrument.type                             | string  | const("`RealEstateWebsite`")                                                                                                                                                                                                                                                                                           |
| data.instrument.name                             | string  | instrument name                                                                                                                                                                                                                                                                                           |
| data.instrument.url                              | string  | format (`uri`)                                                                                                                                                                                                                                                                              |
| data.recipient                              | string  | format (`uri`)  |
| data.identifier                              | string  | unique identifier |
| data.leadowner.type                              | string  | const("`RealEstateWebsite`") |
| data.leadowner.name                              | string  | lead owner name |
| data.leadowner.id                              | string  | format (`uri`)  |
| data.event.type                                  | object  | type of the event e.g Campaign                                                                                                                                                                                                                                                              |
| data.event.name                                  | string  | any string name                                                                                                                                                                                                                                                                             |
| data.event.id                                    | string  | format (`uri`)                                                                                                                                                                                                                                                                              |
| data.event.url                                   | string  | url of the event                                                                                                                                                                                                                                                                            |
| data.event.subEvents                             | array   | array of subEvents                                                                                                                                                                                                                                                                          |
| data.originatingSystem                           | object  | the original system where this item was created. Can be of type Thing or any sub-type.                                                                                                                                                                                                      |

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
