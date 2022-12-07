---
title: PropertyListing
---
## Example



```json
{
  "type": "PropertyListing",
  "addressCountry": "CA",
  "addressLocality": "Gotham City",
  "addressRegion": "NJ",
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
  "modificationTimestamp": "2022-11-17T00:00:00",
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

## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | a real estate property listed for sale |
| type | string | allowed (`"PropertyListing"`)  |
| addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| addressLocality | string | City, Township. <= 50 characters |
| addressRegion | string | abbreviated state or province |
| buyerAgent | object | the buyer's RealEstateAgent |
| buyerOffice | object | the buyer's RealEstateOffice |
| closeDate | string | With for-sale listings, the date the purchase agreement was fulfilled. With lease listings, the date the requirements were fulfilled, such as contract and/or deposit. format (`date-time`) |
| image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| image.0 (index) | object allOf | - |
| image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| image.0.0.0 (allOf item) | object | - |
| image.0.0.0.type | string | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`) |
| image.0.0.0.@id | string | the liked data uri for the Thing format (`uri`) |
| image.0.0.0 (property names) | - |  pattern (`^[a-z@$][a-zA-Z0-9-_]+$`) |
| image.0.0.1 (allOf item) | - | - |
| image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| image.0.0.1.id | string | the URL to access the item. format (`uri`) |
| image.0.0.1.name | string | the file name of the object. |
| image.0.0.1.encodingFormat | string | MIME type |
| image.0.0.1.about | string | URI to the subject of the image or logo format (`uri`) |
| image.0.0.1.url | string | URL of the image content format (`uri`) |
| image.0.1 (allOf item) | - | - |
| image.0.1.type | string | allowed (`"ImageObject"`)  |
| image.0.1.id | any | - |
| image.0.1.name | any | - |
| image.0.1.encodingFormat | any | - |
| internetAddressDisplayYN | string | allowed (`"Y"`, `"N"`)  |
| latitude | number | The latitude of a location. |
| listingAgent | object | the agent/broker representing the seller in a real estate transaction |
| listingContractDate | string | The effective date of the agreement between the seller and the seller's broker. format (`date-time`) |
| listingId | string | the local identifier for the listing |
| listingOffice | object | the listing office |
| listingOriginatingSystem | object | The place where the item is originally input by the user. |
| listingPrice | object | - |
| listingStatus | string | allowed (`"Active"`, `"Pending"`, `"Sold"`, `"Canceled"`, `"Prelisted"`, `"OffMarket"`, `"Private"`)  |
| livingArea | object | property indoor space |
| longitude | number | The longitude of a location. |
| lotSize | object | outdoor space minValue, maxValue |
| modificationTimestamp | string | The date when the listing was last modified. format (`date-time`) |
| numberOfBathrooms | string | the number of bathrooms |
| numberOfBedrooms | string | the number of bedrooms |
| numberOfRooms | string | the total number of rooms in the building |
| originatingSystemKey | string | the listing identifier from the original MLS, aka MLSID. |
| originatingSystemName | string | the name of the MLS where the listing was originally input |
| postalCode | string | Zip/Post Code <= 12 characters |
| propertySubType | string | allowed (`"ApartmentPropertyType"`, `"BoatSlipPropertyType"`, `"CabinPropertyType"`, `"CondominiumPropertyType"`, `"DeededParkingPropertyType"`, `"DuplexPropertyType"`, `"FarmPropertyType"`, `"ManufacturedHomePropertyType"`, `"ManufacturedOnLandPropertyType"`, `"MobileHomePropertyType"`, `"OwnYourOwnPropertyType"`, `"QuadruplexPropertyType"`, `"RanchPropertyType"`, `"SingleFamilyPropertyType"`, `"StockCooperativePropertyType"`, `"TimesharePropertyType"`, `"TownhousePropertyType"`, `"TriplexPropertyType"`, `"AgriculturePropertyType"`, `"BusinessPropertyType"`, `"HotelMotelPropertyType"`, `"IndustrialPropertyType"`, `"MixedUsePropertyType"`, `"MultiFamilyPropertyType"`, `"OfficePropertyType"`, `"RetailPropertyType"`, `"UnimprovedLandPropertyType"`, `"WarehousePropertyType"`) RESO property sub-type (see range for allowed values) |
| propertyType | string | allowed (`"RESI"`, `"RLSE"`, `"RINC"`, `"LAND"`, `"MOBI"`, `"FARM"`, `"COMS"`, `"COML"`, `"BUSO"`) RESO property type (see range for allowed values) 4 characters |
| purchaseContractDate | string | With for-sale listings, the date an offer was accepted and the listing was no longer on market. With lease listings this may represent a meeting of the minds to lease, but some contractual requirements are yet to be fulfilled, such as contract signing or receipt of the deposit. format (`date-time`) |
| stories | number | he number of floors in the property |
| streetAddress | string | the street address <= 75 characters |
| universalPropertyId | string | The Universal Property Identifier is a unique identifier for all real property in the US and Canada.  It is based on country and local identification methods and is limited to real property.  For cases such as shares of real property, units, and other more granular cases, please utilize the UniversalPropertySubId. |
| url | string | URL of the item. format (`uri`) |
| yearBuilt | number | the year the structure was created |
