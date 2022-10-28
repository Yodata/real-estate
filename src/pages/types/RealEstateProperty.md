---
title: RealEstateProperty
route: /types/RealEstateProperty
menu: Types
---# RealEstateProperty
a property in the real estate transaction context


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string! | "RealEstateProperty"  |
| propertyType | string! | RESO property type (see range for allowed values) <br/>RANGE: [PropertyType](/types/PropertyType) |
| addressCountry | string | two-letter ISO 3166-1 alpha-2 country code  |
| addressLocality | string | City, Township.  |
| addressRegion | string | State or Province.  |
| apn | string | Assessors Parcel Number  |
| image | [*] | an ImageObject or URI reference to an image on the web. <br/>RANGE: [ImageObject](/types/ImageObject) |
| latitude | number | The latitude of a location.  |
| listingId | string | the local identifier for the listing (MLS #)  |
| livingArea | object | property indoor space <br/>RANGE: [QuantitativeValue](/types/QuantitativeValue) |
| longitude | number | The longitude of a location.  |
| lotSize | object | outdoor space minValue, maxValue <br/>RANGE: [QuantitativeValue](/types/QuantitativeValue) |
| numberOfBathrooms | string | the number of bathrooms  |
| numberOfBedrooms | string | the number of bedrooms  |
| numberOfRooms | string | the total number of rooms in the building  |
| postalCode | string | Zip/Post Code  |
| propertySubType | string | RESO property sub-type (see range for allowed values) <br/>RANGE: [PropertySubType](/types/PropertySubType) |
| stories | number | he number of floors in the property  |
| streetAddress | string | the street address  |
| yearBuilt | number | the year the structure was created  |

### Example
```json
{
  "type": "RealEstateProperty",
  "propertyType": "RESI",
  "addressCountry": "US",
  "addressLocality": "Gotham City",
  "addressRegion": "New Jersey",
  "apn": "ABC-12345-XX-XXXX",
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
