---
title: website#viewproperty
---

## Message

website user (data.agent) has viewed a listing (data.object) on a webiste or mobile app (data.instrument)

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#viewproperty",
  "recipient": null,
  "time": "2025-04-14T18:51:30.3922594-05:00",
  "agent": "Constellation 1",
  "instrument": "Trio",
  "source": "https://SC301.dev.bhhs.hsfaffilaites.com/profile/card#me",
  "data": {
    "type": "ViewAction",
    "object": {
      "type": "PropertyListing",
      "originatingSystemName": "scgga",
      "originatingSystemKey": "1552529",
      "streetAddress": "15551 Asheville Highway",
      "addressLocality": "Campobello",
      "addressRegion": "SC",
      "postalCode": "29322",
      "addressCountry": "US",
      "propertyType": "RESI",
      "propertySubType": "SingleFamilyPropertyType",
      "listingContractDate": "2025-03-29T00:00:00",
      "closeDate": null,
      "modificationTimestamp": "2025-04-14T23:51:30",
      "listingPrice": {
        "type": "PriceSpecification",
        "priceCurrency": "USD",
        "price": 405000
      },
      "soldPrice": {
        "type": "PriceSpecification",
        "priceCurrency": "USD",
        "price": 0
      },
      "listingStatus": "Contingent",
      "buyerAgent": {
        "type": "RealEstateAgent",
        "name": "",
        "email": null,
        "identifier": {
          "mlsAgentId": null
        },
        "additionalProperty": {
          "agentId": null
        }
      },
      "buyerOffice": {
        "type": "RealEstateOffice",
        "name": null,
        "email": null,
        "identifier": {
          "mlsOfficeId": null
        },
        "additionalProperty": {
          "officeId": null
        }
      },
      "latitude": 35.09154,
      "longitude": -82.14133,
      "listingAgent": {
        "type": "RealEstateAgent",
        "name": "Jill Chapman",
        "email": "jchapman@cdanjoyner.com",
        "identifier": {
          "mlsAgentId": "7084"
        },
        "additionalProperty": {
          "agentId": "228829"
        }
      },
      "listingOffice": {
        "type": "RealEstateOffice",
        "name": "BHHS C Dan Joyner - Midtown",
        "email": "internetmarketing@cdanjoyner.com",
        "identifier": {
          "mlsOfficeId": "JOYN01"
        },
        "additionalProperty": {
          "officeId": "SC301-033"
        }
      },
      "coListingAgent": {
        "type": "RealEstateAgent",
        "name": "",
        "email": null,
        "identifier": {
          "mlsAgentId": null
        },
        "additionalProperty": {
          "agentId": null
        }
      },
      "listingId": 401087897,
      "listingOriginatingSystem": {
        "type": "MultipleListingService",
        "name": "Greater Greenville MLS",
        "identifier": {
          "orgId": "scgga"
        }
      },
      "livingArea": {
        "type": "QuantitativeValue",
        "value": null,
        "unitCode": "FTK",
        "unitText": "SquareFeet"
      },
      "lotSize": {
        "type": "QuantitativeValue",
        "value": 2.78,
        "unitCode": "ACR",
        "unitText": "Acre"
      },
      "numberOfBedrooms": "3",
      "numberOfBathrooms": "2.5",
      "numberOfFullBathrooms": "2",
      "numberOf1/2Bathrooms": "1",
      "numberOf1/4Bathrooms": "",
      "numberOf3/4Bathrooms": "",
      "internetAddressDisplayYN": "Y",
      "image": [
        {
          "type": "ImageObject",
          "encodingFormat": "image/jpeg",
          "id": "https://photos.prod.cirrussystem.net/10142/19ea2d1d8d9c01665cee55e621ea206e/2605219266.jpeg"
        }
      ],
      "events": [],
      "description": "Looking for a Personal Sanctuary in a small town, mountain views, almost three acres just in case you may want to get your own chickens.",
      "url": "https://www.dev.bhhs.com/c-dan-joyner-realtors-sc301/sc/15551-asheville-highway-campobello-29322/pid-401087897",
      "about": {
        "type": "PropertyListing",
        "url": "https://www.dev.bhhs.com/c-dan-joyner-realtors-sc301/sc/15551-asheville-highway-campobello-29322/pid-401087897"
      },
      "brokerAtrribution": null,
      "yearBuilt": null,
      "deleted": false
    },
    "result": null,
    "agent": {
      "type": "Person",
      "name": null,
      "telephone": null,
      "email": null,
      "additionalProperty": null,
      "identifier": null,
      "sameAs": {
        "hsfSessionId": "00000000-0000-0000-0000-000000000000",
        "cregContactKey": null
      }
    },
    "participant": [
      {
        "type": "RealEstateAgent",
        "id": "228829",
        "name": "Jill Chapman",
        "roleName": "ListingAgent"
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "https://dev.bhhs.com/profile/card#me"
    }
  }
}
```

### Payload

| Name                                                       | Type        | Description |
| ---------------------------------------------------------- | ----------- | ----------- |
| (root)                                                     | object      | - |
| topic                                                      | string      | const (`"realestate/website#viewproperty"`) |
| recipient                                                  | string/null | recipient |
| time                                                       | string      | date and time the event was produced |
| agent                                                      | string      | event publisher |
| instrument                                                 | string      | event instrument |
| source                                                     | string      | event source |
| data                                                       | object      | the message payload |
| data.type                                                  | string      | const (`"ViewAction"`) |
| data.identifier                                            | string      | unique identifier |
| data.object                                                | object      | viewed property listing |
| data.object.type                                           | string      | const (`"PropertyListing"`) |
| data.object.originatingSystemName                          | string      | originating system name |
| data.object.originatingSystemKey                           | string      | originating system key |
| data.object.streetAddress                                  | string      | street address |
| data.object.addressLocality                                | string      | city or locality |
| data.object.addressRegion                                  | string      | state or region |
| data.object.postalCode                                     | string      | postal code |
| data.object.addressCountry                                 | string      | country |
| data.object.propertyType                                   | string      | property type |
| data.object.propertySubType                                | string      | property subtype |
| data.object.listingContractDate                            | string      | listing contract date |
| data.object.closeDate                                      | string/null | close date |
| data.object.modificationTimestamp                          | string      | modification timestamp |
| data.object.listingPrice                                   | object      | listing price details |
| data.object.listingPrice.type                              | string      | const (`"PriceSpecification"`) |
| data.object.listingPrice.priceCurrency                     | string      | use ISO4217 |
| data.object.listingPrice.price                             | number      | listing price |
| data.object.soldPrice                                      | object      | sold price details |
| data.object.soldPrice.type                                 | string      | const (`"PriceSpecification"`) |
| data.object.soldPrice.priceCurrency                        | string      | use ISO4217 |
| data.object.soldPrice.price                                | number      | sold price |
| data.object.listingStatus                                  | string      | listing status |
| data.object.buyerAgent                                     | object      | buyer agent details |
| data.object.buyerAgent.type                                | string      | const (`"RealEstateAgent"`) |
| data.object.buyerAgent.name                                | string/null | buyer agent name |
| data.object.buyerAgent.email                               | string/null | buyer agent email |
| data.object.buyerAgent.identifier                          | object      | buyer agent identifier |
| data.object.buyerAgent.identifier.mlsAgentId               | string/null | MLS agent ID |
| data.object.buyerAgent.additionalProperty                  | object      | buyer agent additional properties |
| data.object.buyerAgent.additionalProperty.agentId          | string/null | agent ID |
| data.object.buyerOffice                                    | object      | buyer office details |
| data.object.buyerOffice.type                               | string      | const (`"RealEstateOffice"`) |
| data.object.buyerOffice.name                               | string/null | buyer office name |
| data.object.buyerOffice.email                              | string/null | buyer office email |
| data.object.buyerOffice.identifier                         | object      | buyer office identifier |
| data.object.buyerOffice.identifier.mlsOfficeId             | string/null | MLS office ID |
| data.object.buyerOffice.additionalProperty                 | object      | buyer office additional properties |
| data.object.buyerOffice.additionalProperty.officeId        | string/null | office ID |
| data.object.latitude                                       | number      | latitude |
| data.object.longitude                                      | number      | longitude |
| data.object.listingAgent                                   | object      | listing agent details |
| data.object.listingAgent.type                              | string      | const (`"RealEstateAgent"`) |
| data.object.listingAgent.name                              | string      | listing agent name |
| data.object.listingAgent.email                             | string      | listing agent email |
| data.object.listingAgent.identifier                        | object      | listing agent identifier |
| data.object.listingAgent.identifier.mlsAgentId             | string      | MLS agent ID |
| data.object.listingAgent.additionalProperty                | object      | listing agent additional properties |
| data.object.listingAgent.additionalProperty.agentId        | string      | agent ID |
| data.object.listingOffice                                  | object      | listing office details |
| data.object.listingOffice.type                             | string      | const (`"RealEstateOffice"`) |
| data.object.listingOffice.name                             | string      | listing office name |
| data.object.listingOffice.email                            | string      | listing office email |
| data.object.listingOffice.identifier                       | object      | listing office identifier |
| data.object.listingOffice.identifier.mlsOfficeId           | string      | MLS office ID |
| data.object.listingOffice.additionalProperty               | object      | listing office additional properties |
| data.object.listingOffice.additionalProperty.officeId      | string      | office ID |
| data.object.coListingAgent                                 | object      | co-listing agent details |
| data.object.coListingAgent.type                            | string      | const (`"RealEstateAgent"`) |
| data.object.coListingAgent.name                            | string/null | co-listing agent name |
| data.object.coListingAgent.email                           | string/null | co-listing agent email |
| data.object.coListingAgent.identifier                      | object      | co-listing agent identifier |
| data.object.coListingAgent.identifier.mlsAgentId           | string/null | MLS agent ID |
| data.object.coListingAgent.additionalProperty              | object      | co-listing agent additional properties |
| data.object.coListingAgent.additionalProperty.agentId      | string/null | agent ID |
| data.object.listingId                                      | number      | listing identifier |
| data.object.listingOriginatingSystem                       | object      | listing originating system details |
| data.object.listingOriginatingSystem.type                  | string      | const (`"MultipleListingService"`) |
| data.object.listingOriginatingSystem.name                  | string      | listing originating system name |
| data.object.listingOriginatingSystem.identifier            | object      | listing originating system identifier |
| data.object.listingOriginatingSystem.identifier.orgId      | string      | MLS organization identifier |
| data.object.livingArea                                     | object      | living area details |
| data.object.livingArea.type                                | string      | const (`"QuantitativeValue"`) |
| data.object.livingArea.value                               | number/null | living area value |
| data.object.livingArea.unitCode                            | string      | unit code |
| data.object.livingArea.unitText                            | string      | unit text |
| data.object.lotSize                                        | object      | lot size details |
| data.object.lotSize.type                                   | string      | const (`"QuantitativeValue"`) |
| data.object.lotSize.value                                  | number      | lot size value |
| data.object.lotSize.unitCode                               | string      | unit code |
| data.object.lotSize.unitText                               | string      | unit text |
| data.object.numberOfBedrooms                               | string      | number of bedrooms |
| data.object.numberOfBathrooms                              | string      | number of bathrooms |
| data.object.numberOfFullBathrooms                          | string      | number of full bathrooms |
| data.object.numberOf1/2Bathrooms                           | string      | number of half bathrooms |
| data.object.numberOf1/4Bathrooms                           | string      | number of quarter bathrooms |
| data.object.numberOf3/4Bathrooms                           | string      | number of three-quarter bathrooms |
| data.object.internetAddressDisplayYN                       | string      | internet address display flag |
| data.object.image                                          | array       | listing images |
| data.object.image.0.type                                   | string      | const (`"ImageObject"`) |
| data.object.image.0.encodingFormat                         | string      | image MIME type |
| data.object.image.0.id                                     | string      | image URL |
| data.object.events                                         | array       | listing events |
| data.object.events.0.type                                  | string      | const (`"OpenHouseEvent"`) |
| data.object.events.0.name                                  | string      | event name |
| data.object.events.0.description                           | string      | event description |
| data.object.events.0.startDate                             | string      | event start date |
| data.object.events.0.endDate                               | string      | event end date |
| data.object.events.0.organizer                             | object      | event organizer details |
| data.object.events.0.organizer.type                        | string      | const (`"RealEstateAgent"`) |
| data.object.events.0.organizer.name                        | string      | organizer name |
| data.object.events.0.organizer.id                          | string      | format (`uri`) |
| data.object.description                                    | string      | listing description |
| data.object.url                                            | string      | listing URL |
| data.object.about                                          | object      | about details |
| data.object.about.type                                     | string      | const (`"PropertyListing"`) |
| data.object.about.url                                      | string      | property listing URL |
| data.object.brokerAtrribution                              | string/null | broker attribution |
| data.object.yearBuilt                                      | number/null | year built |
| data.object.deleted                                        | boolean     | deleted flag |
| data.result                                                | object/null | action result |
| data.agent                                                 | object      | website user |
| data.agent.type                                            | string      | allowed (`"Person"`, `"Contact"`) |
| data.agent.name                                            | string/null | agent name |
| data.agent.telephone                                       | string/null | telephone |
| data.agent.email                                           | string/null | email |
| data.agent.additionalProperty                              | object/null | additional property |
| data.agent.additionalProperty.userPath                     | string      | user path |
| data.agent.identifier                                      | object/null | identifier |
| data.agent.identifier.sausID                               | string      | SAUS identifier |
| data.agent.identifier.redContact_Guid                      | string      | RED contact GUID |
| data.agent.sameAs                                          | object      | sameAs identifiers |
| data.agent.sameAs.hsfSessionId                             | string      | HSF session ID |
| data.agent.sameAs.cregContactKey                           | string/null | CREG contact key |
| data.participant                                           | array       | participants |
| data.participant.0.type                                    | string      | const (`"RealEstateAgent"`) |
| data.participant.0.id                                      | string      | participant ID |
| data.participant.0.name                                    | string      | participant name |
| data.participant.0.roleName                                | string      | participant role name |
| data.instrument                                            | object      | instrument details |
| data.instrument.type                                       | string      | const (`"RealEstateWebsite"`) |
| data.instrument.url                                        | string      | website URL |
| data.event.type                                            | object      | type of the event e.g Campaign |
| data.event.name                                            | string      | any string name |
| data.event.id                                              | string      | format (`uri`) |
| data.event.url                                             | string      | url of the event |
| data.event.subEvents                                       | array       | array of subEvents |
| data.originatingSystem                                     | object      | the original system where this item was created. Can be of type Thing or any sub-type. |

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
