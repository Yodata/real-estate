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
  "data": {
    "type": "SaveAction",
    "agent": {
      "type": "Contact",
      "name": "Bill Bailey",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "additionalProperty": {
        "userPath": "xxx"
      },
      "identifier": {
        "sausID": "216bf670-0777-43db-9d73-c3377d280fe4",
        "redContact_Guid": "201ff92c-e3ad-43b1-8a01-5555168cb0ae"
      }
    },
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
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
        "geo": {
          "type": "GeoShape",
          "geoMidpoint": {
            "type": "GeoCoordinates,",
            "longitude": "73.98",
            "latitude": "40.75"
          },
          "geoRadius": {
            "type": "QuantitativeValue,",
            "value": "10,",
            "unitCode": "mi,",
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
      },
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

| Name                 | Type                | Description                                                                      |
| -------------------- | ------------------- | -------------------------------------------------------------------------------- |
| (root)               | object              | -                                                                                |
| topic                | string!             | realestate/website#propertysearchsave                                            |
| time                 | string<date-time> ! | date & time the event was produced                                               |
| agent                | string<uri> !       | event publisher                                                                  |
| instrument           | string<uri> !       | the application that produced the event                                          |
| source               | string<uri>         | associated RealEstate{Agent,Office,Organization}                                 |
| data                 | object              | the message payload.                                                             |
| data.type            | string!             | The item type (Linked-Data @type)                                                |
| data.agent           | object!             | the website user RANGE: Contact, Person                                          |
| data.instrument      | object              | website or mobile application RANGE: RealEstateWebsite, MobileApplication, Thing |
| data.object          | object!             | property search parameters RANGE: PropertySearch                                 |
| data.event.type      | object              | type of the event e.g Campaign                                                   |
| data.event.name      | string              | any string name                                                                  |
| data.event.id        | string              | format (`uri`)                                                                   |
| data.event.url       | string              | url of the event                                                                 |
| data.event.subEvents | array               | array of subEvents                                                               |
| data.originatingSystem | object | the original system where this item was created.  Can be of type Thing or any sub-type. |

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
