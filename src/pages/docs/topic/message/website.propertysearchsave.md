---
title: website#propertysearchsave
---

## Message

website user (agent) saves a property search (object), on a website or mobile app (instrument)

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#propertysearchsave",
  "time": "2020-06-18T18:30:49Z",
  "agent": "https://bhhs.example.com/profile/card#me",
  "instrument": "https://smarter-agent.example.com/profile/card#me",
  "source": "https://{agentid}.example.com/profile/card#me",
  "identifier": "d84a059d-3191-4133-b5b4-d1550c6ee216",
  "data": {
    "type": "SaveAction",
    "identifier": "nwurogb34tnoi3t",
    "agent": {
      "type": "Contact",
      "name": "Bill Bailey",
      "givenName": "Matthew",
      "familyName": "Bullington",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "dateCreated": "2026-05-28T12:58:13.590Z",
      "dateModified": "2026-05-28T13:07:13.220Z",
      "additionalProperty": {
        "userPath": "xxx",
        "redPreferredContactMethod": "No Preference",
        "redPreferredTime": "",
        "preferredLanguage": "en-US",
        "preferredCurrency": "USD",
        "preferredUnits": "Imperial",
        "marketingViaEmailOptIn": false,
        "marketingViaSmsOptIn": false
      },
      "identifier": {
        "sausID": "216bf670-0777-43db-9d73-c3377d280fe4",
        "redContact_Guid": "201ff92c-e3ad-43b1-8a01-5555168cb0ae",
        "hsfconsumerid": "71e0a2e2-9364-4fae-9bcf-bca92dbe6953"
      },
      "sameAs": {
        "cregcontactkey": "14451293",
        "redContact_Guid": "77e8356e-836c-45a3-a0b6-d7b7e62af87f"
      },
      "contactPoint": [
        {
          "type": "ContactPoint",
          "kind": "EmailAddress",
          "name": "primary",
          "email": "mdbull200@gmail.com"
        }
      ]
    },
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com",
      "name": "Company Website"
    },
    "object": {
      "type": "PropertySearch",
      "name": "3+ beds in Gotham City",
      "description": "((city=Gotham),(Bedrooms=3+))",
      "propertyType": "RESI",
      "propertySubType": {
        "propertySubType": "ApartmentPropertyType"
      },
      "listingStatus": "ActiveListingStatus,ContingentListingStatus",
      "location": {
        "type": "Place",
        "address": {
          "type": "PostalAddress",
          "streetAddress": "1007 Mountain Gate Rd",
          "addressRegion": "New Jersey",
          "addressLocality": "Gotham City",
          "postalCode": "10010",
          "addressCountry": "USA",
          "addressCounty": "Gotham County",
          "addressSubdivision": "Gotham Heights"
        },
        "box": "(37.99099,-77.15156) (38.57954,-75.94718)",
        "geo": {
          "type": "GeoShape",
          "geoMidpoint": {
            "type": "GeoCoordinates",
            "longitude": "73.98",
            "latitude": "40.75"
          },
          "geoRadius": {
            "type": "QuantitativeValue",
            "value": "10",
            "unitCode": "mi",
            "unitText": "miles"
          },
          "box": "(33.5697,-117.775),(33.6018,-117.707)"
        }
      },
      "price": {
        "type": "PriceSpecification",
        "minPrice": 75000,
        "maxPrice": 100000,
        "price": 75000,
        "priceCurrency": "USD"
      },
      "bedrooms": {
        "type": "QuantitativeValue",
        "minValue": 0,
        "maxValue": 4,
        "unitCode": "BD",
        "unitText": "Bedrooms"
      },
      "bathrooms": {
        "type": "QuantitativeValue",
        "minValue": 2,
        "unitCode": "BA",
        "unitText": "Bathrooms"
      },
      "livingArea": {
        "type": "QuantitativeValue",
        "minValue": 1500,
        "unitCode": "SqFt",
        "unitText": "Square Feet"
      },
      "lotSize": {
        "type": "QuantitativeValue",
        "minValue": 0.5,
        "unitCode": "AC",
        "unitText": "Acres"
      }
    },
    "leadOwner": {
      "type": "RealEstateWebsite",
      "name": "Company Website",
      "id": "https://VA305.bhhs.hsfaffiliates.com/profile/card#me"
    },
    "originatingSystem": {
      "type": "SoftwareApplication",
      "name": "RDesk",
      "description": "User Created.",
      "url": "http://www.rdeskwebsite.com/"
    },
    "event": {
      "type": "Event",
      "name": "Property Showing 64 Buttercup Lane, South Grafton, MA, USA",
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
    }
  },
  "@id": "https://bhhs.hsfaffiliates.com/outbox/afd70b9b68e74afa813df28de433335a",
  "id": "https://creg.bhhs.hsfaffiliates.com/publish/d2695f08f538479daff7127efb4a29a1",
  "timestamp": 1779973635053,
  "originalRecipient": "https://bhhs.hsfaffiliates.com/profile/card#me",
  "@to": "https://graph-collector-svc.bhhs.hsfaffiliates.com/profile/card#me"
}
```

### Payload

| Name                                                               | Type                | Description                                                                      |
| ------------------------------------------------------------------ | ------------------- | -------------------------------------------------------------------------------- |
| (root)                                                            | object              | -                                                                                |
| topic                                                             | string!             | realestate/website#propertysearchsave                                            |
| time                                                              | string<date-time> ! | date & time the event was produced                                               |
| agent                                                             | string<uri> !       | event publisher                                                                  |
| instrument                                                        | string<uri> !       | the application that produced the event                                          |
| source                                                            | string<uri>         | associated RealEstate{Agent,Office,Organization}                                 |
| identifier                                                        | string              | unique identifier                                                                |
| data                                                              | object              | the message payload                                                              |
| data.type                                                         | string!             | const (`"SaveAction"`)                                                          |
| data.identifier                                                   | string              | unique identifier                                                                |
| data.agent                                                        | object!             | the website user RANGE: Contact, Person                                          |
| data.agent.type                                                   | string              | allowed (`"Person"`, `"Contact"`)                                               |
| data.agent.identifier                                             | object              | agent identifier                                                                 |
| data.agent.identifier.hsfconsumerid                               | string              | HSF consumer identifier                                                          |
| data.agent.sameAs                                                 | object              | vendor specific identifiers                                                      |
| data.agent.sameAs.cregcontactkey                                  | string              | CREG contact key                                                                 |
| data.agent.sameAs.redContact_Guid                                 | string              | RED contact GUID                                                                 |
| data.agent.name                                                   | string              | full name                                                                        |
| data.agent.givenName                                              | string              | first name                                                                       |
| data.agent.familyName                                             | string              | last name                                                                        |
| data.agent.email                                                  | string              | format (`email`)                                                                 |
| data.agent.dateCreated                                            | string              | date and time the contact was created                                            |
| data.agent.dateModified                                           | string              | date and time the contact was modified                                           |
| data.agent.contactPoint                                           | array               | contact points for the user                                                      |
| data.agent.contactPoint.0.type                                    | string              | const (`"ContactPoint"`)                                                        |
| data.agent.contactPoint.0.kind                                    | string              | contact point kind                                                               |
| data.agent.contactPoint.0.name                                    | string              | contact point label                                                              |
| data.agent.contactPoint.0.email                                   | string              | format (`email`)                                                                 |
| data.agent.additionalProperty                                     | object              | additional property for the website user                                         |
| data.agent.additionalProperty.redPreferredContactMethod           | string              | preferred contact method                                                         |
| data.agent.additionalProperty.redPreferredTime                    | string              | preferred contact time                                                           |
| data.agent.additionalProperty.preferredLanguage                   | string              | preferred language                                                               |
| data.agent.additionalProperty.preferredCurrency                   | string              | preferred currency                                                               |
| data.agent.additionalProperty.preferredUnits                      | string              | preferred units                                                                  |
| data.agent.additionalProperty.marketingViaEmailOptIn              | boolean             | true or false                                                                    |
| data.agent.additionalProperty.marketingViaSmsOptIn                | boolean             | true or false                                                                    |
| data.agent.additionalProperty.userPath                            | string              | user path                                                                        |
| data.instrument                                                   | object              | website or mobile application RANGE: RealEstateWebsite, MobileApplication, Thing |
| data.instrument.type                                              | string              | const (`"RealEstateWebsite"`)                                                   |
| data.instrument.name                                              | string              | instrument name                                                                  |
| data.object                                                       | object!             | property search parameters RANGE: PropertySearch                                 |
| data.object.type                                                  | string              | const (`"PropertySearch"`)                                                      |
| data.object.name                                                  | string              | property search name                                                             |
| data.object.location                                              | object              | search location details                                                          |
| data.object.location.type                                         | string              | const (`"Place"`)                                                               |
| data.object.location.address                                      | object              | search address details                                                           |
| data.object.location.address.type                                 | string              | const (`"PostalAddress"`)                                                       |
| data.object.location.address.addressLocality                      | string              | city or locality                                                                 |
| data.object.location.box                                          | string              | search map bounding box                                                          |
| data.object.price                                                 | object              | price search criteria                                                            |
| data.object.price.type                                            | string              | const (`"PriceSpecification"`)                                                  |
| data.object.price.priceCurrency                                   | string              | use ISO4217                                                                      |
| data.object.price.minPrice                                        | number              | minimum search price                                                             |
| data.object.price.maxPrice                                        | number              | maximum search price                                                             |
| data.object.livingArea                                            | object              | living area search criteria                                                       |
| data.object.livingArea.type                                       | string              | const (`"QuantitativeValue"`)                                                   |
| data.object.livingArea.minValue                                   | number              | minimum living area value                                                        |
| data.leadOwner                                                    | object              | lead owner details                                                               |
| data.leadOwner.type                                               | string              | lead owner type                                                                  |
| data.leadOwner.name                                               | string              | lead owner name                                                                  |
| data.leadOwner.id                                                 | string              | format (`uri`)                                                                   |
| data.event.type                                                   | object              | type of the event e.g Campaign                                                   |
| data.event.name                                                   | string              | any string name                                                                  |
| data.event.id                                                     | string              | format (`uri`)                                                                   |
| data.event.url                                                    | string              | url of the event                                                                 |
| data.event.subEvents                                              | array               | array of subEvents                                                               |
| data.originatingSystem                                            | object              | the original system where this item was created. Can be of type Thing or any sub-type |
| @id                                                               | string              | format (`uri`)                                                                   |
| id                                                                | string              | format (`uri`)                                                                   |
| timestamp                                                         | number              | event timestamp                                                                  |
| originalRecipient                                                 | string              | format (`uri`)                                                                   |
| @to                                                               | string              | format (`uri`)                                                                   |

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
