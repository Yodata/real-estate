---
title: website#viewpropertyvaluereport
---

## Message

website user (data.agent) has viewed a listing (data.object) on a webiste or mobile app (data.instrument)

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#viewpropertyvaluereport",
  "recipient": "https://bhhs.hsfaffiliates.com/profile/card#me",
  "time": "2025-10-28T23:44:16.153Z",
  "agent": "https://dev.bhhs.hsfaffiliates.com/profile/card#me",
  "instrument": "https://aem.dev.bhhs.hsfaffiliates.com/profile/card#me",
  "source": "https://3028345.dev.bhhs.hsfaffiliates.com/profile/card#me",
  "originalRecipient": "https://3028345.dev.bhhs.hsfaffiliates.com/profile/card#me",
  "data": {
    "type": "ViewAction",
    "identifier": "nwurogb34tnoi3t",
    "agent": {
      "type": "Contact",
      "name": "Home Value Estimate Lead",
      "givenName": "Home Value",
      "familyName": "Estimate Lead",
      "email": "13e9b747-ac8a-4941-80a9-02c1efc31216@no-email-provided.com",
      "identifier": {
        "hsfconsumerid": "9dbe571d-7e3e-41ef-8070-6cfe78827c7a"
      },
      "additionalProperty": {
        "userPath": "https://www.dev.bhhs.com/northwest-real-estate-or311/netarts/michelle-dienee-carlon/cid-3128345/home-value?address=1924%21Northeast%2171%21Street,%21Lincoln%21City,%21OR,%2197367&agentId=3128345;Home Value | Michelle Dienee Carlon | Berkshire Hathaway HomeServices;1",
        "workingWithAgent": false
      }
    },
    "participant": {
      "type": "RealEstateAgent",
      "id": "https://3028345.dev.bhhs.hsfaffiliates.com/profile/card#me"
    },
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "https://3028345.dev.bhhs.hsfaffiliates.com/profile/card#me"
    },
    "object": {
      "type": "PropertyValueReport",
      "name": "SEC/TWN/RNG/MER:SEC 27 TWN 06S RNG 11W PROPERTY ID R101811 FOOTHILLS ADDN. TO ROADS END, LOT 28, DOC202104420 ",
      "dateCreated": "2025-10-28T11:44:15",
      "result": {
        "type": "MonetaryAmount",
        "minValue": 1119700,
        "maxValue": 1484300,
        "value": 1302000,
        "currency": "USD"
      },
      "about": {
        "type": "RealEstateProperty",
        "propertyType": "Single Family",
        "addressCountry": "US",
        "addressLocality": "LINCOLN CITY",
        "addressRegion": "OR",
        "image": [],
        "latitude": 45.01661,
        "livingArea": {
          "type": "QuantitativeValue",
          "unitCode": "SqFt",
          "unitText": "Square Feet",
          "value": 2516
        },
        "longitude": -124.00688,
        "lotSize": {
          "type": "QuantitativeValue",
          "unitCode": "SqFt",
          "unitText": "Square Feet",
          "value": 6970
        },
        "numberOfBathrooms": 2.2,
        "numberOfBedrooms": 3,
        "postalCode": "97367",
        "streetAddress": "1924 NE 71ST ST",
        "yearBuilt": 2004,
        "additionalProperty": {
          "score": 86,
          "parcelId": "06-11-27-DD-06800-00",
          "averageSalePrice": {
            "type": "PriceSpecification",
            "price": 1097027,
            "priceCurrency": "USD"
          },
          "nonDisclosureProperty": false,
          "taxAssessedValue": {
            "type": "MonetaryAmount",
            "amount": 688830,
            "currency": "USD"
          },
          "taxAssessedYear": 2024,
          "useNeighborhoodDataForCharts": true,
          "ownerName": "BUSHMAN GORDON H (TSTEE)",
          "ownerOccupied": "Y",
          "ownersEstimatedEquity": {
            "@type": "MonetaryAmount",
            "amount": 1302000,
            "currency": "USD"
          },
          "firstLoanPrice": {
            "@type": "MonetaryAmount",
            "amount": 0,
            "currency": "USD"
          },
          "secondLoanPrice": {
            "@type": "MonetaryAmount",
            "amount": 0,
            "currency": "USD"
          },
          "lastRefinanceLoanVal1": {
            "@type": "MonetaryAmount",
            "amount": 0,
            "currency": "USD"
          },
          "lastRefinanceLoanVal2": {
            "@type": "MonetaryAmount",
            "amount": 0,
            "currency": "USD"
          }
        }
      }
    },
    "event": {
      "type": "Event",
      "name": "Property Showing 1924 Northeast 71 Street, Lincoln City, OR, 97367",
      "description": "",
      "subEvents": []
    },
    "recipient": {}
  },
  "@id": "https://listtrac.dev.bhhs.hsfaffiliates.com/inbox/6c5618953d894d73ad5fbeb981a2a771",
  "id": "https://aem.dev.bhhs.hsfaffiliates.com/publish/d86bc2873dd844be904f76243344f48d",
  "timestamp": 1761695056153
}
```

### Payload
| Name                                                                  | Type         | Description                                                                       |
| --------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------- |
| (root)                                                                | object       | -                                                                                 |
| topic                                                                 | string       | const (`"realestate/website#viewpropertyvaluereport"`)                          |
| recipient                                                             | string       | format (`uri`)                                                                    |
| time                                                                  | string       | date & time the event was produced format (`date-time`)                           |
| agent                                                                 | string       | format (`uri`)                                                                    |
| instrument                                                            | string       | format (`uri`)                                                                    |
| source                                                                | string       | associated RealEstate{Agent,Office,Organization}                                  |
| originalRecipient                                                     | string       | format (`uri`)                                                                    |
| @id                                                                   | string       | format (`uri`)                                                                    |
| id                                                                    | string       | format (`uri`)                                                                    |
| timestamp                                                             | number       | event timestamp                                                                   |
| data                                                                  | object       | the message payload. RANGE: ViewAction                                            |
| data.type                                                             | string!      | const (`"ViewAction"`)                                                           |
| data.identifier                                                       | string       | unique identifier                                                                 |
| data.agent                                                            | object!      | the website user. RANGE: Contact, Person                                          |
| data.agent.type                                                       | string       | allowed (`"Person"`, `"Contact"`)                                               |
| data.agent.name                                                       | string       | full name                                                                         |
| data.agent.givenName                                                  | string       | first name                                                                        |
| data.agent.familyName                                                 | string       | last name                                                                         |
| data.agent.email                                                      | string       | format (`email`)                                                                  |
| data.agent.identifier                                                 | object       | agent identifier                                                                  |
| data.agent.identifier.hsfconsumerid                                   | string       | HSF consumer identifier                                                           |
| data.agent.additionalProperty                                         | object       | additional property for the website user                                          |
| data.agent.additionalProperty.userPath                                | string       | user path                                                                         |
| data.agent.additionalProperty.workingWithAgent                        | boolean      | true or false                                                                     |
| data.participant                                                      | object       | participant details                                                               |
| data.participant.type                                                 | string       | const (`"RealEstateAgent"`)                                                      |
| data.participant.id                                                   | string       | format (`uri`)                                                                    |
| data.instrument                                                       | object       | website or mobile application. RANGE: RealEstateWebsite, MobileApplication, Thing |
| data.instrument.type                                                  | string       | const (`"RealEstateWebsite"`)                                                    |
| data.instrument.url                                                   | string       | format (`uri`)                                                                    |
| data.object                                                           | object!      | property value report details. RANGE: PropertyValueReport                         |
| data.object.type                                                      | string       | const (`"PropertyValueReport"`)                                                  |
| data.object.name                                                      | string       | property value report name                                                        |
| data.object.dateCreated                                               | string       | date and time the report was created                                              |
| data.object.result                                                    | object       | property value result                                                             |
| data.object.result.type                                               | string       | const (`"MonetaryAmount"`)                                                       |
| data.object.result.minValue                                           | number       | minimum estimated value                                                           |
| data.object.result.maxValue                                           | number       | maximum estimated value                                                           |
| data.object.result.value                                              | number       | estimated value                                                                   |
| data.object.result.currency                                           | string       | currency                                                                          |
| data.object.about                                                     | object       | property details                                                                  |
| data.object.about.type                                                | string       | const (`"RealEstateProperty"`)                                                   |
| data.object.about.propertyType                                        | string       | property type                                                                     |
| data.object.about.propertySubType                                     | string       | property subtype                                                                  |
| data.object.about.addressCounty                                       | string       | county                                                                            |
| data.object.about.addressCountry                                      | string       | country                                                                           |
| data.object.about.addressLocality                                     | string       | city or locality                                                                  |
| data.object.about.addressRegion                                       | string       | state or region                                                                   |
| data.object.about.apn                                                 | string       | assessor parcel number                                                            |
| data.object.about.image                                               | array        | property images                                                                   |
| data.object.about.latitude                                            | number       | latitude                                                                          |
| data.object.about.longitude                                           | number       | longitude                                                                         |
| data.object.about.livingArea                                          | object       | living area details                                                               |
| data.object.about.livingArea.type                                     | string       | const (`"QuantitativeValue"`)                                                    |
| data.object.about.livingArea.unitCode                                 | string       | unit code                                                                         |
| data.object.about.livingArea.unitText                                 | string       | unit text                                                                         |
| data.object.about.livingArea.value                                    | number       | living area value                                                                 |
| data.object.about.lotSize                                             | object       | lot size details                                                                  |
| data.object.about.lotSize.type                                        | string       | const (`"QuantitativeValue"`)                                                    |
| data.object.about.lotSize.unitCode                                    | string       | unit code                                                                         |
| data.object.about.lotSize.unitText                                    | string       | unit text                                                                         |
| data.object.about.lotSize.value                                       | number       | lot size value                                                                    |
| data.object.about.numberOfBathrooms                                   | number       | number of bathrooms                                                               |
| data.object.about.numberOfBedrooms                                    | number       | number of bedrooms                                                                |
| data.object.about.postalCode                                          | string       | postal code                                                                       |
| data.object.about.streetAddress                                       | string       | street address                                                                    |
| data.object.about.yearBuilt                                           | number       | year built                                                                        |
| data.object.about.heating                                             | string       | heating details                                                                   |
| data.object.about.soldPrice                                           | object       | sold price details                                                                |
| data.object.about.soldPrice.type                                      | string       | const (`"PriceSpecification"`)                                                   |
| data.object.about.soldPrice.price                                     | number       | sold price                                                                        |
| data.object.about.soldPrice.priceCurrency                             | string       | use ISO4217                                                                       |
| data.object.about.additionalProperty                                  | object       | additional property details                                                       |
| data.object.about.additionalProperty.score                            | number       | score                                                                             |
| data.object.about.additionalProperty.parcelId                         | string       | parcel identifier                                                                 |
| data.object.about.additionalProperty.averageSalePrice                 | object       | average sale price details                                                        |
| data.object.about.additionalProperty.averageSalePrice.type            | string       | const (`"PriceSpecification"`)                                                   |
| data.object.about.additionalProperty.averageSalePrice.price           | number       | average sale price                                                                |
| data.object.about.additionalProperty.averageSalePrice.priceCurrency   | string       | use ISO4217                                                                       |
| data.object.about.additionalProperty.nonDisclosureProperty            | boolean      | true or false                                                                     |
| data.object.about.additionalProperty.taxAssessedValue                 | object       | tax assessed value details                                                        |
| data.object.about.additionalProperty.taxAssessedValue.type            | string       | const (`"MonetaryAmount"`)                                                       |
| data.object.about.additionalProperty.taxAssessedValue.amount          | number       | tax assessed amount                                                               |
| data.object.about.additionalProperty.taxAssessedValue.currency        | string       | currency                                                                          |
| data.object.about.additionalProperty.taxAssessedYear                  | number       | tax assessed year                                                                 |
| data.object.about.additionalProperty.neighborhoodName                 | string       | neighborhood name                                                                 |
| data.object.about.additionalProperty.useNeighborhoodDataForCharts     | boolean      | true or false                                                                     |
| data.object.about.additionalProperty.ownerName                        | string       | owner name                                                                        |
| data.object.about.additionalProperty.ownerOccupied                    | string       | owner occupied flag                                                               |
| data.object.about.additionalProperty.ownersEstimatedEquity            | object       | owner estimated equity details                                                   |
| data.object.about.additionalProperty.ownersEstimatedEquity.@type      | string       | const (`"MonetaryAmount"`)                                                       |
| data.object.about.additionalProperty.ownersEstimatedEquity.amount     | number       | estimated equity amount                                                          |
| data.object.about.additionalProperty.ownersEstimatedEquity.currency   | string       | currency                                                                          |
| data.object.about.additionalProperty.firstLoanPrice                   | object       | first loan price details                                                          |
| data.object.about.additionalProperty.firstLoanPrice.@type             | string       | const (`"MonetaryAmount"`)                                                       |
| data.object.about.additionalProperty.firstLoanPrice.amount            | number       | first loan amount                                                                 |
| data.object.about.additionalProperty.firstLoanPrice.currency          | string       | currency                                                                          |
| data.object.about.additionalProperty.firstLoanLenderName              | string       | first loan lender name                                                            |
| data.object.about.additionalProperty.secondLoanPrice                  | object       | second loan price details                                                         |
| data.object.about.additionalProperty.secondLoanPrice.@type            | string       | const (`"MonetaryAmount"`)                                                       |
| data.object.about.additionalProperty.secondLoanPrice.amount           | number       | second loan amount                                                                |
| data.object.about.additionalProperty.secondLoanPrice.currency         | string       | currency                                                                          |
| data.object.about.additionalProperty.lastRefinanceLoanVal1            | object       | last refinance loan value details                                                |
| data.object.about.additionalProperty.lastRefinanceLoanVal1.@type      | string       | const (`"MonetaryAmount"`)                                                       |
| data.object.about.additionalProperty.lastRefinanceLoanVal1.amount     | number       | last refinance loan amount                                                        |
| data.object.about.additionalProperty.lastRefinanceLoanVal1.currency   | string       | currency                                                                          |
| data.object.about.additionalProperty.lastRefinanceLenderName1         | string       | last refinance lender name                                                        |
| data.object.about.additionalProperty.lastRefinanceLoanVal2            | object       | last refinance loan value details                                                |
| data.object.about.additionalProperty.lastRefinanceLoanVal2.@type      | string       | const (`"MonetaryAmount"`)                                                       |
| data.object.about.additionalProperty.lastRefinanceLoanVal2.amount     | number       | last refinance loan amount                                                        |
| data.object.about.additionalProperty.lastRefinanceLoanVal2.currency   | string       | currency                                                                          |
| data.event                                                            | object       | event details                                                                     |
| data.event.type                                                       | object       | type of the event e.g Campaign                                                    |
| data.event.name                                                       | string       | any string name                                                                   |
| data.event.description                                                | string       | event description                                                                 |
| data.event.id                                                         | string       | format (`uri`)                                                                    |
| data.event.url                                                        | string       | url of the event                                                                  |
| data.event.subEvents                                                  | array        | array of subEvents                                                                |
| data.recipient                                                        | object       | recipient details                                                                 |
| data.originatingSystem                                                | object       | the original system where this item was created. Can be of type Thing or any sub-type. |

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
