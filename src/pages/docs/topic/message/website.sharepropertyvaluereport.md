---
title: website#sharepropertyvaluereport
---

## Message

website user (data.agent) has viewed a listing (data.object) on a webiste or mobile app (data.instrument)

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#sharepropertyvaluereport",
  "recipient": "https://bhhs.hsfaffiliates.com/profile/card#me",
  "time": "2026-05-28T19:35:18.538Z",
  "agent": "https://ny302.bhhs.hsfaffiliates.com/profile/card#me",
  "instrument": "https://aem.bhhs.hsfaffiliates.com/profile/card#me",
  "source": "https://ny302.bhhs.hsfaffiliates.com/profile/card#me",
  "originalRecipient": "https://ny302.bhhs.hsfaffiliates.com/profile/card#me",
  "data": {
    "type": "ShareAction",
    "identifier": "nwurogb34tnoi3t",
    "agent": {
      "type": "Contact",
      "name": "Tony Sadlik",
      "givenName": "Tony",
      "familyName": "Sadlik",
      "email": "tsadlik@bhhscnyrealty.com",
      "identifier": {
        "hsfconsumerid": "f9bcfff6-e9bf-49b5-b982-96346bfbd843"
      },
      "additionalProperty": {
        "userPath": "https://www.bhhscnyrealty.com/home-value?address=484%2520Main%2520St%2C%2520New%2520York%2520Mills%2C%2520New%2520York%2C%252013417%3BHome%20Value%20CNY%20Realty%20|%20Berkshire%20Hathaway%20HomeServices%3B0",
        "workingWithAgent": false
      }
    },
    "participant": {
      "type": "RealEstateAgent",
      "id": "https://ny302.bhhs.hsfaffiliates.com/profile/card#me",
      "name": "Tony Sadlik"
    },
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "https://ny302.bhhs.hsfaffiliates.com/profile/card#me"
    },
    "object": {
      "type": "PropertyValueReport",
      "name": "Single Family Residential",
      "dateCreated": "2026-05-28T07:35:18",
      "result": {
        "type": "MonetaryAmount",
        "minValue": 163880,
        "maxValue": 318120,
        "value": 241000,
        "currency": "USD"
      },
      "about": {
        "type": "RealEstateProperty",
        "propertyType": "Single Family Residential",
        "propertySubType": "Residential",
        "addressCounty": "ONEIDA",
        "addressCountry": "USA",
        "addressLocality": "NEW YORK MILLS",
        "addressRegion": "NY",
        "apn": "307007 317.010-1-40",
        "image": [],
        "latitude": 43.10099,
        "livingArea": {
          "type": "QuantitativeValue",
          "unitCode": "SqFt",
          "unitText": "Square Feet",
          "value": 2245
        },
        "longitude": -75.29613,
        "lotSize": {
          "type": "QuantitativeValue",
          "unitCode": "SqFt",
          "unitText": "Square Feet",
          "value": 15196.5
        },
        "numberOfBathrooms": 1,
        "numberOfBedrooms": 2,
        "numberOfRooms": 6,
        "postalCode": "13417",
        "streetAddress": "484 MAIN ST",
        "yearBuilt": 1885,
        "heating": "Hot Water",
        "soldPrice": {
          "type": "PriceSpecification",
          "price": 0,
          "priceCurrency": "USD"
        },
        "additionalProperty": {
          "score": 68,
          "parcelId": "307007 317.010-1-40",
          "averageSalePrice": {
            "type": "PriceSpecification",
            "price": 273140,
            "priceCurrency": "USD"
          },
          "nonDisclosureProperty": false,
          "taxAssessedValue": {
            "type": "MonetaryAmount",
            "amount": 70100,
            "currency": "USD"
          },
          "taxAssessedYear": 2025,
          "neighborhoodName": "WINDING CREEK THE SPRINGS",
          "useNeighborhoodDataForCharts": false,
          "ownerName": "GEORGE & DOLORES NOMA (LIFE USE); LAWRENCE NOMA;DON NOMA;GEORGE & DOLORES NOMA",
          "ownerOccupied": "N",
          "ownersEstimatedEquity": {
            "@type": "MonetaryAmount",
            "amount": 241000,
            "currency": "USD"
          },
          "firstLoanPrice": {
            "@type": "MonetaryAmount",
            "amount": 366718,
            "currency": "USD"
          },
          "firstLoanLenderName": "NATIONAL BANK OF KANSAS CITY",
          "secondLoanPrice": {
            "@type": "MonetaryAmount",
            "amount": 0,
            "currency": "USD"
          },
          "lastRefinanceLoanVal1": {
            "@type": "MonetaryAmount",
            "amount": 362399,
            "currency": "USD"
          },
          "lastRefinanceLenderName1": "R M K FINANCIAL CORP",
          "lastRefinanceLoanVal2": {
            "@type": "MonetaryAmount",
            "amount": 0,
            "currency": "USD"
          },
          "Title_Company": "NONE AVAILABLE"
        }
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
      "name": "Property Showing 484 Main St, New York Mills, New York, 13417",
      "description": "FYI",
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
    "recipient": {
      "type": "Person",
      "email": "tsadlik@bhhscnyrealty.com",
      "givenName": "Tony",
      "familyName": "Sadlik"
    }
  },
  "@id": "https://bhhs.hsfaffiliates.com/outbox/c49dac6566f44b2d85e4efdd8e77c293",
  "id": "https://aem.bhhs.hsfaffiliates.com/publish/0313d95cf3ea43f8ab33a6eaa2b34431",
  "timestamp": 1779996918538,
  "@to": "https://listtracwebsite.bhhs.hsfaffiliates.com/profile/card#me"
}
```

### Payload

| Name                                                                  | Type         | Description                                                                       |
| --------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------- |
| (root)                                                                | object       | -                                                                                 |
| topic                                                                 | string       | const (`"realestate/website#sharepropertyvaluereport"`)                         |
| recipient                                                             | string       | format (`uri`)                                                                    |
| time                                                                  | string       | date & time the event was produced format (`date-time`)                           |
| agent                                                                 | string       | format (`uri`)                                                                    |
| instrument                                                            | string       | format (`uri`)                                                                    |
| source                                                                | string       | associated RealEstate{Agent,Office,Organization}                                  |
| originalRecipient                                                     | string       | format (`uri`)                                                                    |
| @id                                                                   | string       | format (`uri`)                                                                    |
| id                                                                    | string       | format (`uri`)                                                                    |
| timestamp                                                             | number       | event timestamp                                                                   |
| @to                                                                   | string       | format (`uri`)                                                                    |
| data                                                                  | object       | the message payload. RANGE: ShareAction                                           |
| data.type                                                             | string!      | const (`"ShareAction"`)                                                          |
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
| data.participant.name                                                 | string       | participant name                                                                  |
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
| data.object.about.numberOfRooms                                       | number       | number of rooms                                                                   |
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
| data.object.about.additionalProperty.Title_Company                    | string       | title company                                                                     |
| data.event                                                            | object       | event details                                                                     |
| data.event.type                                                       | object       | type of the event e.g Campaign                                                    |
| data.event.name                                                       | string       | any string name                                                                   |
| data.event.description                                                | string       | event description                                                                 |
| data.event.id                                                         | string       | format (`uri`)                                                                    |
| data.event.url                                                        | string       | url of the event                                                                  |
| data.event.subEvents                                                  | array        | array of subEvents                                                                |
| data.recipient                                                        | object       | recipient details                                                                 |
| data.recipient.type                                                   | string       | const (`"Person"`)                                                               |
| data.recipient.email                                                  | string       | format (`email`)                                                                  |
| data.recipient.givenName                                              | string       | first name                                                                        |
| data.recipient.familyName                                             | string       | last name                                                                         |
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
