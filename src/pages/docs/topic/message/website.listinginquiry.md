---
title: website#listinginquiry
---
listinginquiry
## Message

_website user asks a question_

### Payload Example(s) (generated)

```json
{   
    "topic": "realestate/website#listinginquiry",
    "data": {
        "agent": {
            "name": "String",
            "email": "someone@yahoo.com",
            "telephone": "0011223344",
            "identifier": {
                "hsfconsumerid": "jkevqh598p3h-gkjent-j5n3i"
            },
            "additionalProperty": {
                "userPath": "||https%xyx%123%",
                "coListingAgentType": "Primary"
            },
            "mortgage": false,
            "type": "Person"
        },
        "object": {
            "text": "Hello, is this listing still available? I would like more information about 7158 Golden. Thank you! ",
            "type": "Question"
        },
        "recipient": {
            "id": "https://8675309.domain.com/profile/card#me",
            "name": "String",
            "type": "Organization"
        },
        "about": {
            "url": "https://www.bhhspro.com/mentor/steve-baird/cid-356481/oh/889-hartford-drive-44035/pid-338005633",
            "postalCode": "00000",
            "addressRegion": "MNO",
            "streetAddress": "1234 Lake Valley, DF 12345",
            "addressLocality": "USA",
            "listingId": "9876543",
            "listingPrice": {
                "price": 1234567,
                "priceCurrency": "USD",
                "type": "PriceSpecs"
            },
            "listingOriginatingSystem": {
                "type": "MultipleListingService",
                "name": "XYZ Region MLS (CR)",
                "identifier": {
                    "orgId": "abcde-f"
                },
                "originatingSystemName": "XYZ Region MLS (CR)",
                "originatingSystemKey": "VIM12345"
            },
            "type": "PropertyListing"
        },
        "instrument": {},
        "type": "AskAction"
    },
    "recipient": "https://8675309.domain.com/profile/card#me",
    "instrument": "https://pod.domain/profile/card#me",
    "@id":"https:/pod.doamin.com/publish/id",
    "id": "https:/pod.doamin.com/publish/id",
    "time": "2024-01-25T18:46:42.056Z",
    "timestamp": 1706208402056
}
```

### Payload

| Name                                             | Type                           |Description  |                                                                                                                                                                                                                                                                                                                                                                                   
| ------------------------------------------------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

| topic                          |  string                            |  string const (`"realestate/website#askquestion"`)  |   
| recipient                      |  url                               |  the agent being asked | 
| instrument                     |  url                               |  the app or service that produced the event on behalf of the agent/user format (uri) | 
| @id                            |  url                               |  format (uri) | 
| id                             |  url                               |  format (uri) | 
| time                           |  timestamp                         |  date & time the event was produced format | 
| timestamp                      |  timestamp                         |  date & time the event was produced format | 
| data.agent.name                |   string                           |  agent name | 
| data.agent.email               |  email                             |  agent email | 
| data.agent.telephone           |  telephone number                  |  agent telephone number | 
| data.agent.identifier.hsfconsumerid|   alpha numeric                |  hsf consumer Id | 
| data.agent.additionalProperty.userPath|  url                        |  uri | 
| data.agent.additionalProperty.coListingAgentType |  string          |  colisting agent type | 
| data.agent.mortgage            |  bool                              |  true/false | 
| data.agent.type                |  string                            |  agent type | 
| data.object.text               |  string                            |  question text | 
| data.object.type               |  ?                                 |  question | 
| data.recipient.id              |  url                               |  recipient uri |  
| data.recipient.name            |  string                            |  recipient name | 
| data.recipient.type            |  string                            |  recipient type  |                   
| data.about.url                 |  url                               |  about uri  | 
| data.about.postalCode          |  number                            |  postal code |       
| data.about.addressRegion       |  string                            |  region address | 
| data.about.streetAddress       |  string                            |  street address | 
| data.about.addressLocality     |  string                            |  address | 
| data.about.listingId           |  int                               |  listingId | 
| data.about.listingPrice.price  |  int                               |  price of listing price | 
| data.about.listingPrice.priceCurrency |  string                     |  Currency of price | 
| data.about.listingPrice.type   |  string                            |  listing price type |      
| data.about.listingOriginatingSystem.type |  string                  |  type of listingOriginatingSystem |  
| data.about.listingOriginatingSystem.name |  string                  |  name of listingOriginatingSystem | 
| data.about.listingOriginatingSystem.identifier.orgId |  string      |  orgId | 
| data.about.listingOriginatingSystem.originatingSystemName |  string |  originating system name | 
| data.about.listingOriginatingSystem.originatingSystemKey  |  string |  the listing identifier from the original MLS, aka MLSID. | 
| data.about.type                |  string                            |  PropertyListing | 
| data.instrument                |  object                            |  instrument object | 
| data.type                      |  string                            |  const (`"listingInquiryAction"`) |  
                                                

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
