---
title: PropertyListing
route: /types/PropertyListing
menu: Types
---# PropertyListing
a real estate property listed for sale


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string |   |
| addressCountry | string | two-letter ISO 3166-1 alpha-2 country code  |
| addressLocality | string | City, Township.  |
| addressRegion | string | State or Province.  |
| buyerAgent | object | the buyer's RealEstateAgent <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent) |
| buyerOffice | object | the buyer's RealEstateOffice <br/>RANGE: [RealEstateOffice](/types/RealEstateOffice) |
| closeDate | string&lt;date-time&gt;  | With for-sale listings, the date the purchase agreement was fulfilled. With lease listings, the date the requirements were fulfilled, such as contract and/or deposit. <br/>RANGE: [DateTime](/types/DateTime) |
| image | [*] | an ImageObject or URI reference to an image on the web. <br/>RANGE: [ImageObject](/types/ImageObject) |
| internetAddressDisplayYN | string |   |
| latitude | number | The latitude of a location.  |
| listingAgent | object | the agent/broker representing the seller in a real estate transaction <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateOrganization](/types/RealEstateOrganization) |
| listingContractDate | string&lt;date-time&gt;  | The effective date of the agreement between the seller and the seller's broker.  |
| listingId | string | the local identifier for the listing  |
| listingOffice | object | the listing office <br/>RANGE: [RealEstateOrganization](/types/RealEstateOrganization) |
| listingOriginatingSystem | object | The place where the item is originally input by the user. <br/>RANGE: [MultipleListingService](/types/MultipleListingService) |
| listingPrice | object |  <br/>RANGE: [PriceSpecification](/types/PriceSpecification) |
| listingStatus | string |   |
| livingArea | object | property indoor space <br/>RANGE: [QuantitativeValue](/types/QuantitativeValue) |
| longitude | number | The longitude of a location.  |
| lotSize | object | outdoor space minValue, maxValue <br/>RANGE: [QuantitativeValue](/types/QuantitativeValue) |
| numberOfBathrooms | string | the number of bathrooms  |
| numberOfBedrooms | string | the number of bedrooms  |
| numberOfRooms | string | the total number of rooms in the building  |
| originatingSystemKey | string | the listing identifier from the original MLS, aka MLSID.  |
| originatingSystemName | string | the name of the MLS where the listing was originally input  |
| postalCode | string | Zip/Post Code  |
| propertySubType | string | RESO property sub-type (see range for allowed values) <br/>RANGE: [PropertySubType](/types/PropertySubType) |
| propertyType | string | RESO property type (see range for allowed values) <br/>RANGE: [PropertyType](/types/PropertyType) |
| purchaseContractDate | string&lt;date-time&gt;  | With for-sale listings, the date an offer was accepted and the listing was no longer on market. With lease listings this may represent a meeting of the minds to lease, but some contractual requirements are yet to be fulfilled, such as contract signing or receipt of the deposit.  |
| stories | number | he number of floors in the property  |
| streetAddress | string | the street address  |
| universalPropertyId | string | The Universal Property Identifier is a unique identifier for all real property in the US and Canada.  It is based on country and local identification methods and is limited to real property.  For cases such as shares of real property, units, and other more granular cases, please utilize the UniversalPropertySubId.  |
| url | string&lt;uri&gt;  | URL of the item.  |
| yearBuilt | number | the year the structure was created  |

### Example
```json
{
  "type": "PropertyListing",
  "addressCountry": "US",
  "addressLocality": "Gotham City",
  "addressRegion": "New Jersey",
  "buyerAgent": {
    "email": "butch.byers@example.com",
    "identifier": {
      "agentKey": "xxxx"
    },
    "name": "Butch Byers",
    "type": "RealEstateAgent"
  },
  "buyerOffice": {
    "email": "gcr@example.com",
    "identifier": {
      "officeKey": "grc1"
    },
    "name": "Gotham City Real Estate",
    "type": "RealEstateOffice"
  },
  "closeDate": "2022-10-12T01:13:43Z",
  "image": [
    {
      "type": "ImageObject",
      "id": "http://user.example.com/public/logo/image.jpg",
      "name": "image.jpg",
      "encodingFormat": "image/jpeg",
      "about": "http://user.example.com/profile/card#me",
      "url": "http://user.example.com/public/profile/image.jpg"
    }
  ],
  "internetAddressDisplayYN": "Y",
  "latitude": 40.75,
  "listingAgent": {
    "type": "RealEstateAgent",
    "name": "Lori Listagent",
    "telephone": "1-252-574-0160",
    "email": "lorilistagent@example.com"
  },
  "listingContractDate": "2022-10-12T01:13:43Z",
  "listingId": "GOTHAM-MLS+12345",
  "listingOffice": {
    "name": "Gotham City Real Estate",
    "type": "RealEstateOffice"
  },
  "listingOriginatingSystem": {
    "identifier": {
      "bhhsmlsid": "xxxx",
      "resoouid": "not-yet-available"
    },
    "name": "MLSListings",
    "type": "MultipleListingService"
  },
  "listingPrice": {
    "type": "PriceSpecification",
    "price": 75000,
    "priceCurrency": "USD"
  },
  "listingStatus": "Active",
  "livingArea": {
    "type": "QuantitativeValue",
    "unitCode": "SqFt",
    "unitText": "Square Feet",
    "value": 1500
  },
  "longitude": 73.98,
  "lotSize": {
    "type": "QuantitativeValue",
    "unitCode": "AC",
    "unitText": "Acres",
    "value": 0.5
  },
  "numberOfBathrooms": "2",
  "numberOfBedrooms": "3",
  "numberOfRooms": "7",
  "originatingSystemKey": 12345,
  "originatingSystemName": "GOTHAM-MLS",
  "postalCode": "10010",
  "propertySubType": "ApartmentPropertyType",
  "propertyType": "RESI",
  "purchaseContractDate": "2022-10-12T01:13:43Z",
  "stories": 2,
  "streetAddress": "1007 Mountain Gate Rd",
  "universalPropertyId": "US-04015-N-R-11022331-N",
  "url": "https://www.example.com/homedetails/1007-Mountain-Gate-Rd-Gotham-City-Gotham/10007",
  "yearBuilt": 1988
}
```
