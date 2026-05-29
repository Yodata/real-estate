---
title: website#askquestion
---

## Message

_website user asks a question_

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#askquestion",
  "agent": "https://dev.bhhs.hsfaffiliates.com/profile/card#me",
  "originalRecipient": "https://dev.bhhs.hsfaffiliates.com/profile/card#me",
  "instrument": "https://aem.dev.bhhs.hsfaffiliates.com/profile/card#me",
  "@id": "https://ace.dev.bhhs.hsfaffiliates.com/inbox/f9902321794741b9bda1f09b12a0759f",
  "id": "https://aem.dev.bhhs.hsfaffiliates.com/publish/4fe7fad1c2a841159bede3dd9d5df7f9",
  "time": "2025-02-18T01:09:40.529Z",
  "timestamp": 1739840980529,
  "data": {
    "type": "AskAction",
    "leadOwner": {
            "type": "agent",
            "name": "Megha Vyas",
            "id": "https://1109887.bhhs.hsfaffiliates.com/profile/card#me"
     },
      "originatingSystem": {
        "type": "SoftwareApplication",
        "name": "RDesk",
        "description": "User Created.",
        "url": "http://www.rdeskwebsite.com/"
      },
    "agent": {
      "name": "Dan Collin",
      "email": "collin.dan@gmail.com",
      "telephone": "9175685905",
      "identifier": {
        "hsfconsumerid": "694482a9-5ede-430f-a94e-a7944a79cd0c"
      },
      "additionalProperty": {
        "userPath": "https%3A%2F%2Fwww.dev.bhhs.com%2Futah-properties-ut301%2Fsearch%3FSearchInput%3DPark%2520City%2520UT%26SearchType%3DCity%26PropertyType%3D1%252C2%26ApplicationType%3DFOR_SALE%26ListingStatus%3D1%26NewListing%3Dfalse%26Sort%3DPRICE_DESCENDING%26PageSize%3D32%26Page%3D1%26SearchParameter%3DPark%2520City%252C%2520UT%26Country%3DUS|Property+Search+Results+Utah+Properties+%7C+Berkshire+Hathaway+HomeServices|https%3A%2F%2Fwww.dev.bhhs.com%2Futah-properties-ut301%2Fsearch%3FSearchInput%3DPark%2520City%2520UT%26SearchType%3DCity%26PropertyType%3D1%252C2%26ApplicationType%3DFOR_SALE%26ListingStatus%3D1%26NewListing%3Dfalse%26Sort%3DPRICE_DESCENDING%26PageSize%3D32%26Page%3D1%26SearchParameter%3DPark%2520City%252C%2520UT%26Country%3DUS|Property+Search+Results+Utah+Properties+%7C+Berkshire+Hathaway+HomeServices|0",
        "coListingAgentType": "Primary"
      },
      "mortgage": false,
      "type": "Contact"
    },
    "object": {
      "text": "Hi, I would like more information about 1851 W Galena Ridge Way, Park City, UT 84060.",
      "type": "Question"
    },
    "recipient": {
      "id": "https://65327.dev.bhhs.hsfaffiliates.com/profile/card#me",
      "name": "Nancy Erni",
      "type": "RealEstateAgent"
    },
    "about": {
      "url": "https://www.dev.bhhs.com/utah-properties-ut301/search?SearchInput=Park%20City%20UT&SearchType=City&PropertyType=1%2C2&ApplicationType=FOR_SALE&ListingStatus=1&NewListing=false&Sort=PRICE_DESCENDING&PageSize=32&Page=1&SearchParameter=Park%20City%2C%20UT&Country=US|%20Berkshire%20Hathaway%20HomeServices%3Bhttps://www.dev.bhhs.com/utah-properties-ut301/search?SearchInput=Park%2520City%2520UT&SearchType=City&PropertyType=1%252C2&ApplicationType=FOR_SALE&ListingStatus=1&NewListing=false&Sort=PRICE_DESCENDING&PageSize=32&Page=1&SearchParameter=Park%2520City%252C%2520UT&Country=US%3BProperty%20Search%20Results%20Utah%20Properties%20|%20Berkshire%20Hathaway%20HomeServices%3B0",
      "postalCode": "84060",
      "addressRegion": "UT",
      "streetAddress": "1851 W Galena Ridge Way, Park City, UT 84060",
      "addressLocality": "Park City",
      "listingId": "389508403",
      "listingPrice": {
        "price": 21000000,
        "priceCurrency": "USD",
        "type": "PriceSpecification"
      },
      "listingOriginatingSystem": {
        "type": "MultipleListingService",
        "name": "",
        "identifier": {
          "orgId": ""
        },
        "originatingSystemName": "",
        "originatingSystemKey": ""
      },
      "type": "PropertyListing"
    },
    "instrument": {},
    "identifier": "nwurogb34tnoi3t"
  }
}
```
### Payload

| Name                                             | Type                           |Description  |                                                                                                               
| ------------------------------------------------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| topic                          | string                            |  string const (`"realestate/website#askquestion"`)  |
| recipient                      | url                               | the agent being asked |
| instrument                     | url                               | the app or service that produced the event on behalf of the agent/user format (uri) |
| @id                            | url                               | format (uri) |
| id                             | url                               | format (uri) |
| time                           | timestamp                         | date & time the event was produced format |
| timestamp                      | timestamp                         | date & time the event was produced format |
| data.identifier                | string                           | unique identifier |
| data.leadOwner.type                 | string                           |   “RealEstateOffice”,“RealEstateAgent”, “RealEstateTeam” | 
| data.leadOwner.name            | string                           | lead Owner name |
| data.leadOwner.id              |  url                             | format (uri)  |
| data.agent.name                | string                           | agent name |
| data.agent.email               | email                             | agent email |
| data.agent.telephone           | telephone number                  | agent telephone number |
| data.agent.identifier.hsfconsumerid | alpha numeric                | hsf consumer Id |
| data.agent.additionalProperty.userPath | url                        | uri |
| data.agent.additionalProperty.coListingAgentType | string          | colisting agent type |
| data.agent.mortgage            | bool                              | true/false |
| data.agent.type                | string                            | agent type |
| data.object.text               | string                            | question text |
| data.object.type               | ?                                 | question |
| data.recipient.id              | url                               | recipient uri | 
| data.recipient.name            | string                            | recipient name |
| data.recipient.type            | string                            | recipient type  |
| data.about.url                 | url                               | about uri  |
| data.about.postalCode          | number                            | postal code |    
| data.about.addressRegion       | string                            | region address |
| data.about.streetAddress       | string                            | street address |
| data.about.addressLocality     | string                            | address |
| data.about.listingId           | int                               | listingId |
| data.about.listingPrice.price  | int                               | price of listing price |
| data.about.listingPrice.priceCurrency | string                     | Currency of price |
| data.about.listingPrice.type   | string                            | listing price type |
| data.about.listingOriginatingSystem.type | string                  | type of listingOriginatingSystem |
| data.about.listingOriginatingSystem.name | string                  | name of listingOriginatingSystem |
| data.about.listingOriginatingSystem.identifier.orgId | string      | orgId |
| data.about.listingOriginatingSystem.originatingSystemName | string | originating system name |
| data.about.listingOriginatingSystem.originatingSystemKey  | string | the listing identifier from the original MLS, aka MLSID. |
| data.about.type                | string                            | PropertyListing |
| data.instrument                | object                            | instrument object |
| data.instrument.type                             | string  | const("`RealEstateWebsite`")                                                                                                                                                                                                                                                                                           |
| data.instrument.name                             | string  | instrument name                                                                                                                                                                                                                                                                                           |
| data.type                      | string                            | const (`"AskAction"`) |
| data.originatingSystem | object | the original system where this item was created.  Can be of type Thing or any sub-type. |
| agent                                                   | url    | format (`uri`) |
| originalRecipient                                       | url    | format (`uri`) |
| data                                                    | object | message payload |
| data.agent                                             | object | website user details |
| data.agent.identifier                                  | object | agent identifier |
| data.agent.additionalProperty                          | object | additional property details |
| data.object                                            | object | question details |
| data.recipient                                         | object | recipient details |
| data.about                                             | object | property listing details |
| data.about.listingPrice                                | object | listing price details |
| data.about.listingOriginatingSystem                    | object | listing originating system details |
| data.about.listingOriginatingSystem.identifier         | object | listing originating system identifier |
                                                

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
