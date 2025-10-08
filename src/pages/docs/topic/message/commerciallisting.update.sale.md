---
title: commerciallisting#update--sale
---

## Message

_sale listing schema_

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/commerciallisting#update",
  "data": {
    "type": "UpdateAction",
    "object": {
      "type": "SaleListing",
      "addressCountry": "United States",
      "addressLocality": "Cleveland",
      "addressRegion": "OH",
      "description": "Ever dreamed of owning your own business? Opportunity awaits in this combination live and workplace in the Heart of\r\nCleveland's Brooklyn Centre neighborhood! ",
      "hasElevators": "",
      "image": [
        {
          "type": "Property Photo",
          "encodingFormat": "Image/jpg",
          "id": "https://s3.amazonaws.com/buildout-production/datas/32077476/5c019225803b6cbc2e23abffdd35979b6eb15fa0/full.jpg?1742312266"
        }
      ],
      "latitude": 41.4514253,
      "listingAgent": {
        "type": "RealEstateAgent",
        "name": "David",
        "email": "david@gmail.com",
        "telephone": "5543534400",
        "identifier": {},
        "additionalProperty": { "agentId": "369824" }
      },
      "coListingAgent": [
                {
                    "type": "RealEstateAgent",
                    "name": "Joanne VanStry",
                    "email": "joanne.vanstry@verani.com",
                    "identifier": {},
                    "additionalProperty": {
                        "agentId": "1060172"
                    }
                }
       ],
      "listingContractDate": "2025-03-18T10:28:57.000-05:00",
      "listingId": "bo-1499456",
      "listingOffice": {
        "type": "RealEstateCompany",
        "name": "Professional Realty",
        "email": "kow@bhhspro.com",
        "identifier": {},
        "additionalProperty": { "officeId": "OH301-333" }
      },
      "listingOriginatingSystem": {
        "type": "MultipleListingService",
        "name": "Buildout-BHHS",
        "identifier": { "orgId": "bo-bhhs" }
      },
      "listingPrice": {
        "type": "PriceSpecification",
        "priceCurrency": "USD",
        "price": 2000
      },
      "listingStatus": "Active",
      "livingArea": {
        "type": "QuantitativeValue",
        "value": 26,
        "unitCode": "FTK",
        "unitText": "SquareFeet"
      },
      "longitude": -81.71131439999999,
      "lotSize": {
        "type": "QuantitativeValue",
        "value": 0.14,
        "unitCode": "ACR",
        "unitText": "Acre"
      },
      "modificationTimestamp": "2025-04-17T20:45:07.000-05:00",
      "name": "The Ugly Broad Tavern",
      "numberOfBathrooms": "2.0",
      "originatingSystemKey": "bo-1488456",
      "originatingSystemName": "buildout",
      "postalCode": "9109",
      "propertySubType": ["Free Standing Building"],
      "propertyType": "Retail",
      "stories": 2,
      "streetAddress": "3902 Denison Ave",
      "url": "https://www.bhhs.com/professional-realty-oh301/commercial/commercial-search?propertyId=3902-denison-ave-cleveland-sale",
      "yearBuilt": 2163,
      "class": "",
      "highlights": [],
      "documents": [
        {
          "id": 3665667,
          "url": "https://buildout.com/docs/documents/3665667?mtime=1742324354&token=d3b4f49cdeba5e086c843e6de9912e06d54afc3d",
          "name": "Brochure (P)",
          "original_file_name": ""
        }
      ]
    }
  },
  "@id": "https://crexi.bhhs.hsfaffiliates.com/inbox/8a3997be306a4b3c843gf35g5q5b",
  "id": "https://crexi.bhhs.hsfaffiliates.com/inbox/8a3997be306a4b3c843gf35g5q5b",
  "agent": "https://agent.bhhs.hsfaffiliates.com/profile/card#me"
}

```
### Payload

| Name| Type | Description |
| ---|--- |---|
| topic | string | const (`"realestate/commerciallisting#update"`) |
| data| object | - |
| data.type | string | const (`"UpdateAction"`) |
| data.object| object | a real estate property listed for sale |
| data.object.type | string | allowed (`"SaleListing"`) |
| data.object.addressCountry | string | allowed (`"Other"` , `"United States"` , `"Bahamas"`, `"Canada"` , `"Mexico"` , `"Turkey"` , `"Australia"` , `"Switzerland"` , `"France"`,`"Monaco"` , `"Spain"` , `"Germany"` , `"Italy"`, `"UnitedKingdom"`, `"Poland"` , `"Romania"` , `"Netherlands"` , `"Hungary"`) |
| data.object.addressLocality | string| City, Township. |
| data.object.addressRegion | string | abbreviated state or province |
| data.object.hasElevators | string |- |
| data.object.buyerAgent | object | the buyer's RealEstateAgent |
| data.object.buyerOffice | object | the buyer's RealEstateOffice|
| data.object.closeDate | string| listing close date format (`date-time`) |
| data.object.image| obj| an ImageObject or URI reference to an image on the web.|
| data.object.image[0].type| string| const (`"Property Photo"`)|
| data.object.image[0].encodingFormat| string| image type (`"Image/jpg"`)|
| data.object.image[0]..id| format (`uri`) | image url|
| data.object.internetAddressDisplayYN| string| allowed (`"Y"`, `"N"`) |
| data.object.latitude| number| The latitude of a location. |
| data.object.longitude | number| The longitude of a location.|
| data.object.listingAgent.type| string| const (`"RealEstateAgent"`) |
| data.object.listingAgent.name| string| listings agent name |
| data.object.listingAgent.email | string| listings agent email|
| data.object.listingAgent.telephone| string| listings agent telephone |
| data.object.listingAgent.identifier | obj| listings agent identifier|
| data.object.listingAgent.additionalProperty.agentId| string | listings agentid|
| data.object.colistingAgent          | array      | list of coListing Agents   |
| data.object.listingContractDate| string| The effective date of the agreement between the seller and the seller's broker. format (`date-time`)|
| data.object.listingId| string | the local identifier for the listing |
| data.object.listingOffice.type| string| const (`"RealEstateAgent"`)|
| data.object.listingOffice.name| string| listings office name|
| data.object.listingOffice.email | string| listings office email |
| data.object.listingOffice.telephone| string| listings office telephone|
| data.object.listingOffice.identifier | obj| listings office identifier |
| data.object.listingOffice.additionalProperty.officeId| string| listings office Id|
| data.object.listingOriginatingSystem.type| string | OriginatingSystem type|
| data.object.listingOriginatingSystem.name| string | OriginatingSystem name|
| data.object.listingOriginatingSystem.identifier.orgId| string| OriginatingSystem identifier orgId |
| data.object.listingPrice.type| string| const (`"PriceSpecification"`)|
| data.object.listingPrice.priceCurrency| string| const (`"USD"`) |
| data.object.listingPrice.value | number| listing pricevalue |
| data.object.soldPrice.type| string| const (`"PriceSpecification"`)|
| data.object.soldPrice.priceCurrency | string| const (`"USD"`) |
| data.object.soldPrice.value | number| sold pricevalue|
| data.object.listingStatus | string| allowed (`"Active"`, `"Closed"`) |
| data.object.livingArea.type | string| const (`""QuantitativeValue""`)|
| data.object.livingArea.value| number| livingAreavalue|
| data.object.livingArea.unitCode| string| const(`"FTK"`)|
| data.object.livingArea.unitText| string| const(`"SquareFeet"`)|
| data.object.lotSize.type| string| const (`"QuantitativeValue"`) |
| data.object.lotSize.value | number| lostSize value|
| data.object.lotSize.unitCode| string| const(`"ACR"`)|
| data.object.lotSize.unitText| string| const(`"Acre"`) |
| data.object.modificationTimestamp| string| last modified date of listing format(`date-time`)|
| data.object.name | string| name |
| data.object.numberOfBathrooms| string| total number of bathrooms| 
| data.object.originatingSystemKey | string | the listing identifier fro |
| data.object.originatingSystemName| string | const (`"buildout"`)|
| data.object.postalCode| string | Zip/Post Code <= 12 characters| 
|data.object.propertyType | string | allowed ( `"Office"`, `"Retail"`,`"Industrial"`,`"Land"`,`"Multifamily"`,`"Special Purpose"`,`"Hospitality"`) |
| data.object.propertySubType | string | allowed ( `"Office Building"` ,  `"Creative/Loft"` , `"Executive Suites"` , `"Medical"` , `"Institutional/Governmental"` , `"Office Warehouse"` ,`"Office Condo"` , `"Coworking"` , `"Lab"` , `"Street Retail"` , `"Strip Center"` , `"Free Standing Building"` , `"Regional Mall"` , `"Retail Pad"` , `"Vehicle Related"` , `"Outlet Center"` , `"Power Center"` , `"Neighborhood Center"` , `"Community Center"` , `"Specialty Center"` , `"Theme/Festival Center"` , `"Restaurant"` , `"Post Office"` , `"Retail Condo"` ,  `"Lifestyle Center"` , `"Manufacturing"` , `"Warehouse"` , `"Distribution"` , `"Flex Space"` , `"Research & Development"` , `"Refrigerated/Cold Storage"` , `"Office Showroom"` , `"Truck Terminal/Hub/Transit"` , `"Self Storage"` , `"Industrial Condo"` , `"Data Center"` , `"Office"` ,  `"Retail"` , `"Retail-Pad"` , `"Industrial"` , `"Residential"` , `"Multifamily"` , `"Other"` , `"High-Rise"` , `"Mid-Rise"` , `"Low-Rise/Garden"` , `"Government Subsidized"` , `"Mobile Home Park"` , `"Senior Living"` , `"Skilled Nursing"` , `"Single Family Rental Portfolio"` , `"School"` , `"Marina"` , `"Other"` , `"Golf Course"` , `"Church"` , `"Full Service"` , `"Limited Service"` , `"Select Service"` , `"Resort"` , `"Economy"` , `"Extended Stay"` , `"Casino"`) |
| data.object.stories | number| the number of floors in the property |
| data.object.streetAddress| string| the street address|
| data.object.url| string| URL of the item. format (`uri`) |
| data.object.yearBuilt| number| the year the structure was |
| data.object.class | string| property class|
| data.object.highlights | array | highlights |
| data.object.documents[0].id| number| document id|
| data.object.documents[0].url | string| document url format(`uri`) |
| data.object.documents[0].name| string| document name|
| data.object.documents[0].original_file_name | string| document file name|
| id| format (`uri`)| the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. format (`uri`)|
| @id| format (`uri`)| format(`uri`) |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient format (`uri`)                |

### Headers

| Name              | Type   | Description                                                                                                                                                                                                                                                                            |
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

