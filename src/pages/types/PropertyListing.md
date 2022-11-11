---
title: PropertyListing
---
| Name | Type | Description |
|---|---|---|
| (root) | object | a real estate property listed for sale |
| PropertyListing.type | string | - |
| PropertyListing.addressCountry | string | two-letter ISO 3166-1 alpha-2 country code |
| PropertyListing.addressLocality | string | City, Township. |
| PropertyListing.addressRegion | string | State or Province. |
| PropertyListing.buyerAgent | object | the buyer's RealEstateAgent |
| PropertyListing.buyerOffice | object | the buyer's RealEstateOffice |
| PropertyListing.closeDate | string | With for-sale listings, the date the purchase agreement was fulfilled. With lease listings, the date the requirements were fulfilled, such as contract and/or deposit. |
| PropertyListing.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| PropertyListing.image.0 (index) | object allOf | - |
| PropertyListing.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| PropertyListing.image.0.0.0 (allOf item) | object | - |
| PropertyListing.image.0.0.0.type | string | The item type (Linked-Data @type) |
| PropertyListing.image.0.0.0.@id | string | the liked data uri for the Thing |
| PropertyListing.image.0.0.0 (property names) | - | - |
| PropertyListing.image.0.0.1 (allOf item) | - | - |
| PropertyListing.image.0.0.1.type | string | - |
| PropertyListing.image.0.0.1.id | string | the URL to access the item. |
| PropertyListing.image.0.0.1.name | string | the file name of the object. |
| PropertyListing.image.0.0.1.encodingFormat | string | MIME type |
| PropertyListing.image.0.0.1.about | string | URI to the subject of the image or logo |
| PropertyListing.image.0.0.1.url | string | URL of the image content |
| PropertyListing.image.0.1 (allOf item) | - | - |
| PropertyListing.image.0.1.type | string | - |
| PropertyListing.image.0.1.id | any | - |
| PropertyListing.image.0.1.name | any | - |
| PropertyListing.image.0.1.encodingFormat | any | - |
| PropertyListing.internetAddressDisplayYN | string | - |
| PropertyListing.latitude | number | The latitude of a location. |
| PropertyListing.listingAgent | object | the agent/broker representing the seller in a real estate transaction |
| PropertyListing.listingContractDate | string | The effective date of the agreement between the seller and the seller's broker. |
| PropertyListing.listingId | string | the local identifier for the listing |
| PropertyListing.listingOffice | object | the listing office |
| PropertyListing.listingOriginatingSystem | object | The place where the item is originally input by the user. |
| PropertyListing.listingPrice | object | - |
| PropertyListing.listingStatus | string | - |
| PropertyListing.livingArea | object | property indoor space |
| PropertyListing.longitude | number | The longitude of a location. |
| PropertyListing.lotSize | object | outdoor space minValue, maxValue |
| PropertyListing.numberOfBathrooms | string | the number of bathrooms |
| PropertyListing.numberOfBedrooms | string | the number of bedrooms |
| PropertyListing.numberOfRooms | string | the total number of rooms in the building |
| PropertyListing.originatingSystemKey | string | the listing identifier from the original MLS, aka MLSID. |
| PropertyListing.originatingSystemName | string | the name of the MLS where the listing was originally input |
| PropertyListing.postalCode | string | Zip/Post Code |
| PropertyListing.propertySubType | string | RESO property sub-type (see range for allowed values) |
| PropertyListing.propertyType | string | RESO property type (see range for allowed values) |
| PropertyListing.purchaseContractDate | string | With for-sale listings, the date an offer was accepted and the listing was no longer on market. With lease listings this may represent a meeting of the minds to lease, but some contractual requirements are yet to be fulfilled, such as contract signing or receipt of the deposit. |
| PropertyListing.stories | number | he number of floors in the property |
| PropertyListing.streetAddress | string | the street address |
| PropertyListing.universalPropertyId | string | The Universal Property Identifier is a unique identifier for all real property in the US and Canada.  It is based on country and local identification methods and is limited to real property.  For cases such as shares of real property, units, and other more granular cases, please utilize the UniversalPropertySubId. |
| PropertyListing.url | string | URL of the item. |
| PropertyListing.yearBuilt | number | the year the structure was created |

> Examples of PropertyListing

```json
{
  "type": "PropertyListing",
  "addressCountry": "US",
  "addressLocality": "string",
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
  "closeDate": "2019-08-24T14:15:22Z",
  "image": [
    {
      "type": "ImageObject",
      "@id": "http://example.com",
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
  "listingContractDate": "2019-08-24T14:15:22Z",
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
  "purchaseContractDate": "2019-08-24T14:15:22Z",
  "stories": 2,
  "streetAddress": "1007 Mountain Gate Rd",
  "universalPropertyId": "US-04015-N-R-11022331-N",
  "url": "https://www.example.com/homedetails/1007-Mountain-Gate-Rd-Gotham-City-Gotham/10007",
  "yearBuilt": 1988
}
```


