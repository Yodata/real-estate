---
title: website#searchproperties
---

## Message

_a website user shares a property listing_

a website user has performed a property search

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#searchproperties",
  "recipient": null,
  "time": "2025-07-29T11:56:56.5008617-05:00",
  "agent": "Constellation 1",
  "instrument": "Trio",
  "source": "https://CA322.dev.bhhs.hsfaffilaites.com/profile/card#me",
  "data": {
    "type": "SearchAction",
    "identifier": "nwurogb34tnoi3t",
    "object": {
      "type": "PropertySearch",
      "name": null,
      "description": null,
      "propertyType": "RINC",
      "propertySubType": {
        "propertySubType": ""
      },
      "listingStatus": "ActiveListingStatuss",
      "location": {
        "type": "City",
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
        },
        "name": null,
        "addressRegion": "CA",
        "addressLocality": "Long Beach",
        "postalCode": null,
        "addressCountry": "United States",
        "addressCounty": null,
        "box": null,
        "kind": null
      },
      "price": {
        "type": "PriceSpecification",
        "minPrice": null,
        "maxPrice": 610000,
        "price": null,
        "priceCurrency": "USD"
      },
      "bedrooms": {
        "type": "QuantitativeValue",
        "minValue": 2,
        "maxValue": null,
        "unitCode": "BD",
        "unitText": "Bedrooms"
      },
      "bathrooms": {
        "type": "QuantitativeValue",
        "minValue": 2,
        "maxValue": null,
        "unitCode": "BA",
        "unitText": "Bathrooms"
      },
      "livingArea": {
        "type": "QuantitativeValue",
        "minValue": 1000,
        "maxValue": null,
        "unitCode": "SqFt",
        "unitText": "Square Feet"
      },
      "lotSize": {
        "type": "QuantitativeValue",
        "minValue": 0.5,
        "maxValue": null,
        "unitCode": "AC",
        "unitText": "Acres"
      }
    },
    "result": {
      "type": "FindAction",
      "object": [
        {
          "type": "PropertyListing",
          "url": "https://www.dev.bhhs.com/california-properties-ca322/ca/1879-atlantic-avenue-15-long-beach-90806/pid-407822355"
        },
        {
          "type": "PropertyListing",
          "url": "http://example.com/listing/234"
        }
      ]
    },
    "agent": {
      "type": "Contact",
      "name": "Angie P",
      "telephone": "",
      "email": "adilla+bhhs@gmail.com",
      "additionalProperty": {
        "userPath": "xxx"
      },
      "identifier": {
        "sausID": "216bf670-0777-43db-9d73-c3377d280fe4",
        "redContact_Guid": "201ff92c-e3ad-43b1-8a01-5555168cb0ae",
        "hsfConsumerId": "{\"hsfconsumerid\":\"f5f5769c-58fc-4070-840f-b3f06952c5a7\"}"
      },
      "sameAs": {
        "hsfSessionId": "7c0ce637-fd86-48b5-8203-88bvreverv6a266",
        "cregContactKey": "14vrerv64"
      }
    },
    "participant": null,
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "https://dev.bhhs.com/profile/card#me"
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
    }
  }
}
```

### Payload
| Name                                                       | Type        | Description |
| ---------------------------------------------------------- | ----------- | ----------- |
| (root)                                                     | object      | - |
| topic                                                      | string      | const (`"realestate/website#searchproperties"`) |
| recipient                                                  | string/null | recipient |
| time                                                       | string      | date and time the event was produced |
| agent                                                      | string      | event publisher |
| instrument                                                 | string      | event instrument |
| source                                                     | string      | event source |
| data                                                       | object      | the message payload. RANGE: SearchAction |
| data.type                                                  | string      | const (`"SearchAction"`) |
| data.identifier                                            | string      | unique identifier |
| data.object                                                | object      | property search parameters. RANGE: PropertySearch |
| data.object.type                                           | string      | const (`"PropertySearch"`) |
| data.object.name                                           | string/null | search name |
| data.object.description                                    | string/null | search description |
| data.object.propertyType                                   | string/null | property type |
| data.object.propertySubType                                | object/null | property subtype details |
| data.object.propertySubType.propertySubType                | string      | property subtype |
| data.object.listingStatus                                  | string/null | listing status |
| data.object.location                                       | object/null | search location details |
| data.object.location.type                                  | string      | location type |
| data.object.location.address                               | object/null | address details |
| data.object.location.address.type                          | string      | const (`"PostalAddress"`) |
| data.object.location.address.streetAddress                 | string      | street address |
| data.object.location.address.addressRegion                 | string      | state or region |
| data.object.location.address.addressLocality               | string      | city or locality |
| data.object.location.address.postalCode                    | string      | postal code |
| data.object.location.address.addressCountry                | string      | country |
| data.object.location.address.addressCounty                 | string      | county |
| data.object.location.address.addressSubdivision            | string      | subdivision or neighborhood |
| data.object.location.geo                                   | object/null | geo details |
| data.object.location.geo.type                              | string      | const (`"GeoShape"`) |
| data.object.location.geo.geoMidpoint                       | object      | geo midpoint details |
| data.object.location.geo.geoMidpoint.type                  | string      | const (`"GeoCoordinates"`) |
| data.object.location.geo.geoMidpoint.longitude             | string      | longitude |
| data.object.location.geo.geoMidpoint.latitude              | string      | latitude |
| data.object.location.geo.geoRadius                         | object      | geo radius details |
| data.object.location.geo.geoRadius.type                    | string      | const (`"QuantitativeValue"`) |
| data.object.location.geo.geoRadius.value                   | string      | radius value |
| data.object.location.geo.geoRadius.unitCode                | string      | unit code |
| data.object.location.geo.geoRadius.unitText                | string      | unit text |
| data.object.location.geo.box                               | string      | geo bounding box |
| data.object.location.name                                  | string/null | location name |
| data.object.location.addressRegion                         | string      | state or region |
| data.object.location.addressLocality                       | string      | city or locality |
| data.object.location.postalCode                            | string/null | postal code |
| data.object.location.addressCountry                        | string      | country |
| data.object.location.addressCounty                         | string/null | county |
| data.object.location.box                                   | string/null | bounding box |
| data.object.location.kind                                  | string/null | location kind |
| data.object.price                                          | object      | price criteria |
| data.object.price.type                                     | string      | const (`"PriceSpecification"`) |
| data.object.price.minPrice                                 | number/null | minimum price |
| data.object.price.maxPrice                                 | number/null | maximum price |
| data.object.price.price                                    | number/null | price |
| data.object.price.priceCurrency                            | string      | use ISO4217 |
| data.object.bedrooms                                       | object/null | bedroom criteria |
| data.object.bedrooms.type                                  | string      | const (`"QuantitativeValue"`) |
| data.object.bedrooms.minValue                              | number/null | minimum bedrooms |
| data.object.bedrooms.maxValue                              | number/null | maximum bedrooms |
| data.object.bedrooms.unitCode                              | string      | unit code |
| data.object.bedrooms.unitText                              | string      | unit text |
| data.object.bathrooms                                      | object/null | bathroom criteria |
| data.object.bathrooms.type                                 | string      | const (`"QuantitativeValue"`) |
| data.object.bathrooms.minValue                             | number/null | minimum bathrooms |
| data.object.bathrooms.maxValue                             | number/null | maximum bathrooms |
| data.object.bathrooms.unitCode                             | string      | unit code |
| data.object.bathrooms.unitText                             | string      | unit text |
| data.object.livingArea                                     | object/null | living area criteria |
| data.object.livingArea.type                                | string      | const (`"QuantitativeValue"`) |
| data.object.livingArea.minValue                            | number/null | minimum living area |
| data.object.livingArea.maxValue                            | number/null | maximum living area |
| data.object.livingArea.unitCode                            | string      | unit code |
| data.object.livingArea.unitText                            | string      | unit text |
| data.object.lotSize                                        | object/null | lot size criteria |
| data.object.lotSize.type                                   | string      | const (`"QuantitativeValue"`) |
| data.object.lotSize.minValue                               | number/null | minimum lot size |
| data.object.lotSize.maxValue                               | number/null | maximum lot size |
| data.object.lotSize.unitCode                               | string      | unit code |
| data.object.lotSize.unitText                               | string      | unit text |
| data.result                                                | object/null | the result of a search action. RANGE: FindAction |
| data.result.type                                           | string      | const (`"FindAction"`) |
| data.result.object                                         | array       | result property listings |
| data.result.object.0.type                                  | string      | const (`"PropertyListing"`) |
| data.result.object.0.url                                   | string      | property listing URL |
| data.agent                                                 | object      | the user who performed the search. RANGE: Contact, Person |
| data.agent.type                                            | string      | allowed (`"Person"`, `"Contact"`) |
| data.agent.name                                            | string/null | agent name |
| data.agent.telephone                                       | string/null | telephone |
| data.agent.email                                           | string/null | format (`email`) |
| data.agent.additionalProperty                              | object/null | additional property |
| data.agent.additionalProperty.userPath                     | string      | user path |
| data.agent.identifier                                      | object/null | agent identifier |
| data.agent.identifier.sausID                               | string      | SAUS identifier |
| data.agent.identifier.redContact_Guid                      | string      | RED contact GUID |
| data.agent.identifier.hsfConsumerId                        | string      | HSF consumer ID |
| data.agent.sameAs                                          | object      | sameAs identifiers |
| data.agent.sameAs.hsfSessionId                             | string      | HSF session ID |
| data.agent.sameAs.cregContactKey                           | string/null | CREG contact key |
| data.participant                                           | object/null | participant details |
| data.instrument                                            | object      | website or mobile application. RANGE: RealEstateWebsite, MobileApplication, Thing |
| data.instrument.type                                       | string      | const (`"RealEstateWebsite"`) |
| data.instrument.url                                        | string      | format (`uri`) |
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
