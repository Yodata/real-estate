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
  "time": "2023-02-08T15:40:39.065Z",
  "agent": "https://1121306.bhhs.hsfaffiliates.com/profile/card#me",
  "instrument": "https://1121306.bhhs.hsfaffiliates.com/profile/card#me",
  "source": "https://1121306.bhhs.hsfaffiliates.com/profile/card#me",
  "originalRecipient": "https://1121306.bhhs.hsfaffiliates.com/profile/card#me",
  "data": {
    "type": "ShareAction",
    "agent": {
      "type": "Contact",
      "name": "Andrea Berenfeld",
      "givenName": "Andrea",
      "familyName": "Berenfeld",
      "email": "aberenfeld@bhhselite.com",
      "identifier": {
        "hsfconsumerid": "6a0d82f4-8f98-4155-b724-96abe74289ed"
      },
      "additionalProperty": {
        "userPath": "%3BHome%20|%20Berkshire%20Hathaway%20HomeServices%20Elite%20Properties%20|%20Berkshire%20Hathaway%20HomeServices%3BHome%20Value%20Elite%20Properties%20|%20Berkshire%20Hathaway%20HomeServices%3B1",
        "workingWithAgent": false
      }
    },
    "participant": {
      "type": "RealEstateAgent",
      "id": "https://1121306.bhhs.hsfaffiliates.com/profile/card#me",
      "name": "Baron VonTesterfeld"
    },
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "https://1121306.bhhs.hsfaffiliates.com/profile/card#me"
    },
    "object": {
      "type": "PropertyValueReport",
      "name": "DIST:6 CITY/MUNI/TWP:SANDY RIDGE TWP #32 WINDING CREEK PH1 OPC ",
      "dateCreated": "2023-02-08T03:40:38",
      "result": {
        "type": "MonetaryAmount",
        "minValue": 658800,
        "maxValue": 789200,
        "value": 724000,
        "currency": "USD"
      },
      "about": {
        "type": "RealEstateProperty",
        "propertyType": "Single Family",
        "addressCountry": "US",
        "addressLocality": "MONROE",
        "addressRegion": "NC",
        "image": [],
        "latitude": 34.982716,
        "livingArea": {
          "type": "QuantitativeValue",
          "unitCode": "SqFt",
          "unitText": "Square Feet",
          "value": 3327
        },
        "longitude": -80.66023,
        "lotSize": {
          "type": "QuantitativeValue",
          "unitCode": "SqFt",
          "unitText": "Square Feet",
          "value": 15943
        },
        "numberOfBathrooms": 3.1,
        "numberOfBedrooms": 4,
        "numberOfRooms": 6,
        "postalCode": "28110",
        "streetAddress": "1601 SCHILLER DR",
        "yearBuilt": 2005,
        "additionalProperty": {
          "score": 91,
          "parcelId": "06-009-043",
          "averageSalePrice": {
            "type": "PriceSpecification",
            "price": 717550,
            "priceCurrency": "USD"
          },
          "nonDisclosureProperty": false,
          "taxAssessedValue": {
            "type": "MonetaryAmount",
            "amount": 433200,
            "currency": "USD"
          },
          "taxAssessedYear": 2022,
          "neighborhoodName": "WINDING CREEK THE SPRINGS",
          "useNeighborhoodDataForCharts": true,
          "ownerName": "BOEKELOO,DAVID P and BOEKELOO,LINDA",
          "ownerOccupied": "Y",
          "ownersEstimatedEquity": {
            "@type": "MonetaryAmount",
            "amount": 362000,
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
    "event":  {
      "type": "Event",
      "name": "Property Showing  64 Buttercup Lane, South Grafton, MA, USA",
      "description": "",
      "subEvents": [
        {
          "type": "Campaign",
          "name": "A good campaign name",
          "id": "ire:1d2995307f2c48ae9543caf586f43f9b",
          "url": https://www.bhhspro.com/mentor/steve-baird/cid-356481/oh/889-hartford-drive-44035/pid-338005633,
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
      "email": "bvontesterfeld@gmail.com",
      "givenName": "Baron",
      "familyName": "VonTesterfeld"
    }
  },
  "@id": "https://aem.bhhs.hsfaffiliates.com/publish/b40dd4a99af34ad291ca022f53cd57e3",
  "id": "https://aem.bhhs.hsfaffiliates.com/publish/b40dd4a99af34ad291ca022f53cd57e3",
  "timestamp": 1675870839065
}
```

### Payload

| Name                 | Type         | Description                                                                       |
| -------------------- | ------------ | --------------------------------------------------------------------------------- |
| (root)               | object       | -                                                                                 |
| topic                | string       | const (`"realestate/website#sharepropertyvaluereport"`)                           |
| agent                | string<uri>! | event publisher                                                                   |
| instrument           | string<uri>! | the application that produced the event                                           |
| source               | string<uri>  | associated RealEstate{Agent,Office,Organization}                                  |
| data                 | object       | the message payload. RANGE: AddAction                                             |
| data.type            | string!      | The item type (Linked-Data @type)                                                 |
| data.agent           | object!      | the website user. RANGE: Contact, Person                                          |
| data.instrument      | object       | website or mobile application. RANGE: RealEstateWebsite, MobileApplication, Thing |
| data.object          | object!      | the viewed property. RANGE: PropertyListing                                       |
| data.event.type      | object       | type of the event e.g Campaign                                                    |
| data.event.name      | string       | any string name                                                                   |
| data.event.id        | string       | format (`uri`)                                                                    |
| data.event.url       | string       | url of the event                                                                  |
| data.event.subEvents | array        | array of subEvents                                                                |

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
