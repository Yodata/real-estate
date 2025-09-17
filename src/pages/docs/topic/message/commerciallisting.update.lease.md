---
title: commerciallisting#update--lease
---

## Message

_lease listing schema_

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/commerciallisting#update",
  "data": {
    "type": "UpdateAction",
    "object": {
      "type": "LeaseListing",
      "addressCountry": "United States",
      "addressLocality": "Milford",
      "addressRegion": "NH",
      "description": "Fully air-conditioned Warehouse and Office for Lease, available August 1, 2025.\r\n\r\nFreestanding +/-31,625 SF warehouse/industrial and office building available for lease.",
      "hasElevators": "",
      "image": [
        {
          "type": "Property Photo",
          "encodingFormat": "Image/jpg",
          "id": "https://s3.amazonaws.com/buildout-production/datas/31420540/6d0656c46e6588a78875b8a79b6d54c26dcf73a0/full.jpg?1733167134"
        },
        {
          "type": "Floor Plan",
          "encodingFormat": "Image/jpg",
          "id": "https://s3.amazonaws.com/buildout-production/datas/31420901/6a5647354a086a18a6515d734508d22b4ec40992/full.jpg?1733168233"
        }
      ],
      "latitude": 42.8275626,
      "listingAgent": {
        "type": "RealEstateAgent",
        "name": "Lee",
        "email": "jay@verani.com",
        "telephone": "608098900",
        "identifier": {},
        "additionalProperty": { "agentId": "234567" }
      },
      "listingContractDate": "2024-12-02T11:38:31.000-06:00",
      "listingId": "bo-148767",
      "listingOffice": {
        "type": "RealEstateCompany",
        "name": "Verani Realty",
        "email": "margherita@verani.com",
        "identifier": {},
        "additionalProperty": { "officeId": "NH887-001" }
      },
      "listingOriginatingSystem": {
        "type": "MultipleListingService",
        "name": "Buildout-BHHS",
        "identifier": { "orgId": "bo-bhhs" }
      },
      "listingPrice": {
        "type": "PriceSpecification",
        "priceCurrency": "USD",
        "price": 316250
      },
      "listingStatus": "Active",
      "livingArea": {
        "type": "QuantitativeValue",
        "value": 31625,
        "unitCode": "FTK",
        "unitText": "SquareFeet"
      },
      "longitude": -71.6369663,
      "lotSize": {
        "type": "QuantitativeValue",
        "value": 3,
        "unitCode": "ACR",
        "unitText": "Acre"
      },
      "modificationTimestamp": "2025-04-17T09:41:44.000-05:00",
      "name": "Fully air-conditioned Warehouse and Office for Lease, Available August 1, 2025",
      "numberOfBathrooms": "",
      "originatingSystemKey": "bo-145229",
      "originatingSystemName": "buildout",
      "postalCode": "08755",
      "propertySubType": ["Warehouse/Distribution"],
      "propertyType": "Industrial",
      "stories": 2,
      "streetAddress": "48 Powers St",
      "suites": [
        {
          "name":"Suite 01",
          "leaseId": 1978971,
          "availableOn": "2025-08-01",
          "tenantName": "",
          "floorPlans": [{ "floorPlanUrl": "" }],
          "image": [],
          "leaseTerm": "",
          "leaseType": "NNN",
          "leaseDescription": "Fully air-conditioned Warehouse and Office for Lease, available August 1, 2025.\r\n\r\nFreestanding +/-31,625 SF warehouse/industrial and office building available for lease.",
          "RentableSqFt": 31625,
          "status": "Active",
          "leaseRate": 10,
          "leaseRateUnit": "dollars_per_sf_per_year"
        }
      ],
      "tenancy": "Single",
      "url": "https://www.bhhsverani.com/commercial/commercial-search?propertyId=48-powers-st-milford-lease",
      "yearBuilt": 1970,
      "class": "",
      "highlights": [
        "- 31,625 SF industrial building",
        "- Zoned I (Industrial)",
        "- Suitable for warehouse/distribution use with Office",
        "- Ample parking space",
        "- Spacious loading docks",
        "- High ceilings for storage",
        "- Convenient location in Milford, NH",
        "- Versatile layout for customization",
        "- Excellent visibility"
      ],
      "documents": [
        {
          "id": 3528207,
          "url": "https://buildout.com/docs/documents/3528207?mtime=1744901205&token=7b655f3f32f2ec1fa4cce7d3e2ea46264a4f9f09",
          "name": "Offering Memorandum (L)",
          "original_file_name": ""
        }
      ]
    }
  },
  "@id": "https://crexi.bhhs.hsfaffiliates.com/inbox/2435b39e8dbfuoyn98y89hnu",
  "id": "https://crexi.bhhs.hsfaffiliates.com/inbox/2435b39e8dbfuoyn98y89hnu",
  "agent": "https://agent.bhhs.hsfaffiliates.com/profile/card#me"
}


```
### Payload

| Name                                     | Type                                          | Description                 |
| -----------------------------------------| --------------------------------------------- | -------------------------   |
| topic                                    | string                     | const (`"realestate/commerciallisting#update"`)|
| data                                     | object                                | -                                   |
| data.type                                | string                                | const (`"UpdateAction"`)            |
| data.object                              | object                             | a real estate property listed for sale |
| data.object.type                         | string                                | allowed (`"LeaseListing"`)           |
| data.object.addressCountry               | string                                | allowed (`"Other"` , `"United States"` , `"Bahamas"` , `"Canada"` , `"Mexico"` , `"Turkey"` , `"Australia"` , `"Switzerland"` ,`"France"` , `"Monaco"` , `"Spain"` , `"United Kingdom"` , `"Germany"` , `"Italy"` , `"Poland"` ,`"Romania"` , `"Netherlands"` , `"Hungary"`)                                      |
| data.object.addressLocality              | string                                | City, Township.                     |
| data.object.addressRegion                | string                                | abbreviated state or province       |
| data.object.hasElevators                 | string                                |   elevators exist or not              |
| data.object.buyerAgent                   | object                                | the buyer's RealEstateAgent         |
| data.object.buyerOffice                  | object                                | the buyer's RealEstateOffice        |
| data.object.closeDate                    | string                          | listing close date format (`date-time`)   |
| data.object.image                        | obj  | an ImageObject or URI reference to an image on the web.              |
| data.object.image[0].type                | string                                 | const (`"Property Photo"`)         |
| data.object.image[0].encodingFormat      | string                                 | image type (`"Image/jpg"`)         |
| data.object.image[0].id                  | format (`uri`)                         | image url                          |
| data.object.internetAddressDisplayYN     | string                                 | allowed (`"Y"`, `"N"`)             |
| data.object.latitude                     | number                                 | The latitude of a location.        |
| data.object.longitude                    | number                                 | The longitude of a location.       |
| data.object.listingAgent.type            | string                                 | const (`"RealEstateAgent"`)        |
| data.object.listingAgent.name            | string                                 | listings agent name                |
| data.object.listingAgent.email           | string                                 | listings agent email               |
| data.object.listingAgent.telephone       | string                                 | listings agent telephone           |
| data.object.listingAgent.identifier      | obj                                    | listings agent identifier          |
| data.object.listingAgent.additionalProperty.agentId       | string                | listings agent  id                 |
| data.object.listingContractDate          | string                                 | The effective date of the agreement between the seller and the seller's broker. format (`date-time`)                                                         |
| data.object.listingId                     | string                              | the local identifier for the listing |
| data.object.listingOffice.type            | string                                 | const (`"RealEstateAgent"`)       |
| data.object.listingOffice.name            | string                                 | listings office name              |
| data.object.listingOffice.email           | string                                 | listings office email             |
| data.object.listingOffice.telephone       | string                                 | listings office telephone         |
| data.object.listingOffice.identifier      | obj                                    | listings office identifier        |
| data.object.listingOffice.additionalProperty.officeId          | string            | listings office Id                |
| data.object.listingOriginatingSystem.type  | string                                | OriginatingSystem type            |
| data.object.listingOriginatingSystem.name  | string                                | OriginatingSystem name            |
| data.object.listingOriginatingSystem.identifier.orgId    | string       | OriginatingSystem identifier orgId           |
| data.object.listingPrice.type              | string                     | const (`"PriceSpecification"`)               |
| data.object.listingPrice.priceCurrency     | string                     | const (`"USD"`)                              |
| data.object.listingPrice.value             | number                     | listing price  value                         |
| data.object.soldPrice.type                 | string                     | const (`"PriceSpecification"`)               |
| data.object.soldPrice.priceCurrency        | string                     | const (`"USD"`)                              |
| data.object.soldPrice.value                | number                     | sold price  value                            |
| data.object.listingStatus                  | string                     | allowed (`"Active"`, `"Closed"`)             |
| data.object.livingArea.type                | string                     | const (`""QuantitativeValue""`)              |
| data.object.livingArea.value               | number                     | livingArea  value                            |
| data.object.livingArea.unitCode            | string                     | const(`"FTK"`)                               |
| data.object.livingArea.unitText            | string                     | const(`"SquareFeet"`)                        |
| data.object.lotSize.type                   | string                     | const (`"QuantitativeValue"`)                |
| data.object.lotSize.value                  | number                     | lostSize value                               |
| data.object.lotSize.unitCode               | string                     | const(`"ACR"`)                               |
| data.object.lotSize.unitText               | string                     | const(`"Acre"`)                              |
| data.object.modificationTimestamp          | string               | last modified date of listing format(`date-time`)  |
| data.object.name                           | string                     | name                                         |
| data.object.numberOfBathrooms              | string               | total number of bathrooms                          | 
| data.object.originatingSystemKey           | string                                | the listing identifier fro        |
| data.object.originatingSystemName          | string                                | const (`"buildout"`)              |
| data.object.postalCode                     | string                                | Zip/Post Code <= 12 characters    | 
| data.object.propertyType                | string                                   | allowed ( `"Office"` , `"Retail"` , `"Industrial"` , `"Land"` , `"Multifamily"` , `"Special Purpose"` ,`"Hospitality"`) |
| data.object.propertySubType                | string                                | allowed ( `"Office Building"` , `"Creative/Loft"` , `"Executive Suites"` , `"Medical"` , `"Institutional/Governmental"` ,`"Office Warehouse"` , `"Office Condo"` , `"Coworking"` , `"Lab"` , `"Street Retail"` , `"Strip Center"` , `"Free Standing Building"` , `"Regional Mall"` , `"Retail Pad"` , `"Vehicle Related"` , `"Outlet Center"` ,`"Power Center"` , `"Neighborhood Center"` , `"Community Center"` , `"Specialty Center"` , `"Theme/Festival Center"` , `"Restaurant"` , `"Post Office"` ,    `"Retail Condo"` , `"Lifestyle Center"` ,`"Manufacturing"` , `"Warehouse"` , `"Distribution"` , `"Flex Space"` , `"Research & Development"` ,`"Refrigerated/Cold Storage"` , `"Office Showroom"` , `"Truck Terminal/Hub/Transit"` , `"Self Storage"` ,   `"Industrial Condo"` , `"Data Center"` , `"Office"` , `"Retail"` , `"Retail-Pad"` ,`"Industrial"` , `"Residential"` , `"Multifamily"` , `"Other"` , `"High-Rise"` , `"Mid-Rise"` , `"Low-Rise/Garden"` , `"Government Subsidized"` , `"Mobile Home Park"` , `"Senior Living"` , `"Skilled Nursing"` ,`"Single Family Rental Portfolio"` , `"School"` , `"Marina"` , `"Other"` , `"Golf Course"` , `"Church"` , `"Full Service"` , `"Limited Service"` , `"Select Service"` , `"Resort"` , `"Economy"` , `"Extended Stay"` , `"Casino"` ) |
| data.object.stories                         | number                             | the number of floors in the property |
| data.object.streetAddress                   | string                             | the street address                   |
| data.object.suites[0].name                | string                             |suite name |
| data.object.suites[0].leaseId                | number                             |lease id |
| data.object.suites[0].suiteNumber            | string                             | suite number |
| data.object.suites[0].availableOn            | string                             | available date format(`"YYYY-MM-DD"`)|
| data.object.suites[0].tenantName             | string                             | tenant name                          |
| data.object.suites[0].contiguousSqFtMax      | string                             | Max continguous Square Foot          |
| data.object.suites[0].floorPlans[0].floorPlanUrl  | format (`uri`)                | floor Plan  Url                      |
| data.object.suites[0].image[0].type               | string                        | const (`"Property Photo"`)           |
| data.object.suites[0].image[0].encodingFormat     | string                        | image type (`"Image/jpg"`)           |
| data.object.suites[0].image[0].id                 | format (`uri`)                | image url                            |
| data.object.suites[0].leaseTerm              | string                             | lease term                           |
| data.object.suites[0].leaseType              | string                             | allowed (`Gross` , `Modified Gross` , `NNN` , `Modified Net` , `Full Service` , `Ground Lease` )                                                                       |
| data.object.suites[0].leaseDescription       | string                             | lease description                    |
| data.object.suites[0].RentableSqFt           | string                             | RentableSqFt                         |
| data.object.suites[0].RentableSqFtMax        | number/string                      | Max RentableSqFt                     |
| data.object.suites[0].RentableSqFtMin        | number/string                      | Min RentableSqFt                     |
| data.object.suites[0].status                 | string                             | allowed(`Inactive`,`Active` ,`Under Contract `,  `Closed`) |
| data.object.suites[0].subtypes               | string                             | allowed (  `"Office Building"` ,  `"Creative/Loft"` , `"Executive Suites"` , `"Medical"` , `"Institutional/Governmental"` , `"Office Warehouse"` ,`"Office Condo"` , `"Coworking"` , `"Lab"` , `"Street Retail"` , `"Strip Center"` , `"Free Standing Building"` , `"Regional Mall"` , `"Retail Pad"` , `"Vehicle Related"` , `"Outlet Center"` , `"Power Center"` , `"Neighborhood Center"` , `"Community Center"` , `"Specialty Center"` , `"Theme/Festival Center"` , `"Restaurant"` , `"Post Office"` , `"Retail Condo"` ,  `"Lifestyle Center"` , `"Manufacturing"` , `"Warehouse"` , `"Distribution"` , `"Flex Space"` , `"Research & Development"` , `"Refrigerated/Cold Storage"` , `"Office Showroom"` , `"Truck Terminal/Hub/Transit"` , `"Self Storage"` , `"Industrial Condo"` , `"Data Center"` , `"Office"` ,  `"Retail"` , `"Retail-Pad"` , `"Industrial"` , `"Residential"` , `"Multifamily"` , `"Other"` , `"High-Rise"` , `"Mid-Rise"` , `"Low-Rise/Garden"` , `"Government Subsidized"` , `"Mobile Home Park"` , `"Senior Living"` , `"Skilled Nursing"` , `"Single Family Rental Portfolio"` , `"School"` , `"Marina"` , `"Other"` , `"Golf Course"` , `"Church"` , `"Full Service"` , `"Limited Service"` , `"Select Service"` , `"Resort"` , `"Economy"` , `"Extended Stay"` , `"Casino"` )                                                          |
| data.object.suites[0].leaseRate              | number                             | lease rate                           |
| data.object.suites[0].leaseRateMax           | number                             | max lease rate                       |
| data.object.suites[0].leaseRateUnit          | string                             | allowed ( `dollars_per_sf_per_year` , `dollars_per_sm_per_year` , `dollars_per_acre_per_year` ,`dollars_per_hectare_per_year` , `dollars_per_year` , `dollars_per_sf_per_month` ,`dollars_per_sm_per_month` , `dollars_per_acre_per_month` , `dollars_per_hectare_per_month` ,`dollars_per_month` )                                                                                                      |
| data.object.url                             | string                             | URL of the item. format (`uri`)      |
| data.object.yearBuilt                       | number                             | the year the structure was           |
| data.object.class                           | string                             | property class                       |
| data.object.highlights                      | array                              | highlights                           |
| data.object.documents[0].id                 | number                             | document id                          |
| data.object.documents[0].url                | string                             | document url format(`uri`)           |
| data.object.documents[0].name               | string                             | document name                        |
| data.object.documents[0].original_file_name | string                             | document file name                   |
| id                                          | format (`uri`)  | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. format (`uri`)                                                                                |
| @id                                        | format (`uri`)                               | format(`uri`)                        |
| agent             | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient format (`uri`)                                                                                                                                                                        |

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
