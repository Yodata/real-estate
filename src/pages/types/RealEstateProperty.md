---
title: RealEstateProperty
---
| Name | Type | Description |
|---|---|---|
| (root) | object | a property in the real estate transaction context |
| type | string | "RealEstateProperty" |
| propertyType | string | RESO property type (see range for allowed values) |
| addressCountry | string | two-letter ISO 3166-1 alpha-2 country code |
| addressLocality | string | City, Township. |
| addressRegion | string | State or Province. |
| apn | string | Assessors Parcel Number |
| image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| image.0 (index) | object allOf | - |
| image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| image.0.0.0 (allOf item) | object | - |
| image.0.0.0.type | string | The item type (Linked-Data @type) |
| image.0.0.0.@id | string | the liked data uri for the Thing |
| image.0.0.0 (property names) | - | - |
| image.0.0.1 (allOf item) | - | - |
| image.0.0.1.type | string | - |
| image.0.0.1.id | string | the URL to access the item. |
| image.0.0.1.name | string | the file name of the object. |
| image.0.0.1.encodingFormat | string | MIME type |
| image.0.0.1.about | string | URI to the subject of the image or logo |
| image.0.0.1.url | string | URL of the image content |
| image.0.1 (allOf item) | - | - |
| image.0.1.type | string | - |
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
| postalCode | string | Zip/Post Code |
| propertySubType | string | RESO property sub-type (see range for allowed values) |
| stories | number | he number of floors in the property |
| streetAddress | string | the street address |
| yearBuilt | number | the year the structure was created |

> Examples of RealEstateProperty

```json
{
  "type": "RealEstateProperty",
  "propertyType": "RESI",
  "addressCountry": "US",
  "addressLocality": "string",
  "addressRegion": "New Jersey",
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


