---
title: RealEstateProperty
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | a property in the real estate transaction context |
| type | string | allowed (`"RealEstateProperty"`) "RealEstateProperty" |
| propertyType | string | allowed (`"RESI"`, `"RLSE"`, `"RINC"`, `"LAND"`, `"MOBI"`, `"FARM"`, `"COMS"`, `"COML"`, `"BUSO"`) RESO property type (see range for allowed values) 4 characters |
| addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| addressLocality | string | City, Township. <= 50 characters |
| addressRegion | string | abbreviated state or province |
| apn | string | Assessors Parcel Number |
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
| latitude | number | The latitude of a location. |
| listingId | string | the local identifier for the listing (MLS #) |
| livingArea | object | property indoor space |
| longitude | number | The longitude of a location. |
| lotSize | object | outdoor space minValue, maxValue |
| numberOfBathrooms | string | the number of bathrooms |
| numberOfBedrooms | string | the number of bedrooms |
| numberOfRooms | string | the total number of rooms in the building |
| postalCode | string | Zip/Post Code <= 12 characters |
| propertySubType | string | allowed (`"ApartmentPropertyType"`, `"BoatSlipPropertyType"`, `"CabinPropertyType"`, `"CondominiumPropertyType"`, `"DeededParkingPropertyType"`, `"DuplexPropertyType"`, `"FarmPropertyType"`, `"ManufacturedHomePropertyType"`, `"ManufacturedOnLandPropertyType"`, `"MobileHomePropertyType"`, `"OwnYourOwnPropertyType"`, `"QuadruplexPropertyType"`, `"RanchPropertyType"`, `"SingleFamilyPropertyType"`, `"StockCooperativePropertyType"`, `"TimesharePropertyType"`, `"TownhousePropertyType"`, `"TriplexPropertyType"`, `"AgriculturePropertyType"`, `"BusinessPropertyType"`, `"HotelMotelPropertyType"`, `"IndustrialPropertyType"`, `"MixedUsePropertyType"`, `"MultiFamilyPropertyType"`, `"OfficePropertyType"`, `"RetailPropertyType"`, `"UnimprovedLandPropertyType"`, `"WarehousePropertyType"`) RESO property sub-type (see range for allowed values) |
| stories | number | he number of floors in the property |
| streetAddress | string | the street address <= 75 characters |
| yearBuilt | number | the year the structure was created |

## Example



```json
{
  "type": "RealEstateProperty",
  "propertyType": "RESI",
  "addressCountry": "CA",
  "addressLocality": "Gotham City",
  "addressRegion": "NJ",
  "apn": "ABC-12345-XX-XXXX",
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
  "latitude": 40.75,
  "listingId": "string",
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
  "numberOfRooms": 7,
  "postalCode": "10010",
  "propertySubType": "ApartmentPropertyType",
  "stories": 2,
  "streetAddress": "1007 Mountain Gate Rd",
  "yearBuilt": 1988
}
```
