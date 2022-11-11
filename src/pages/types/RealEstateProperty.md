---
title: RealEstateProperty
---
| Name | Type | Description |
|---|---|---|
| (root) | object | a property in the real estate transaction context |
| RealEstateProperty.type | string | "RealEstateProperty" |
| RealEstateProperty.propertyType | string | RESO property type (see range for allowed values) |
| RealEstateProperty.addressCountry | string | two-letter ISO 3166-1 alpha-2 country code |
| RealEstateProperty.addressLocality | string | City, Township. |
| RealEstateProperty.addressRegion | string | State or Province. |
| RealEstateProperty.apn | string | Assessors Parcel Number |
| RealEstateProperty.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| RealEstateProperty.image.0 (index) | object allOf | - |
| RealEstateProperty.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| RealEstateProperty.image.0.0.0 (allOf item) | object | - |
| RealEstateProperty.image.0.0.0.type | string | The item type (Linked-Data @type) |
| RealEstateProperty.image.0.0.0.@id | string | the liked data uri for the Thing |
| RealEstateProperty.image.0.0.0 (property names) | - | - |
| RealEstateProperty.image.0.0.1 (allOf item) | - | - |
| RealEstateProperty.image.0.0.1.type | string | - |
| RealEstateProperty.image.0.0.1.id | string | the URL to access the item. |
| RealEstateProperty.image.0.0.1.name | string | the file name of the object. |
| RealEstateProperty.image.0.0.1.encodingFormat | string | MIME type |
| RealEstateProperty.image.0.0.1.about | string | URI to the subject of the image or logo |
| RealEstateProperty.image.0.0.1.url | string | URL of the image content |
| RealEstateProperty.image.0.1 (allOf item) | - | - |
| RealEstateProperty.image.0.1.type | string | - |
| RealEstateProperty.image.0.1.id | any | - |
| RealEstateProperty.image.0.1.name | any | - |
| RealEstateProperty.image.0.1.encodingFormat | any | - |
| RealEstateProperty.latitude | number | The latitude of a location. |
| RealEstateProperty.listingId | string | the local identifier for the listing (MLS #) |
| RealEstateProperty.livingArea | object | property indoor space |
| RealEstateProperty.longitude | number | The longitude of a location. |
| RealEstateProperty.lotSize | object | outdoor space minValue, maxValue |
| RealEstateProperty.numberOfBathrooms | string | the number of bathrooms |
| RealEstateProperty.numberOfBedrooms | string | the number of bedrooms |
| RealEstateProperty.numberOfRooms | string | the total number of rooms in the building |
| RealEstateProperty.postalCode | string | Zip/Post Code |
| RealEstateProperty.propertySubType | string | RESO property sub-type (see range for allowed values) |
| RealEstateProperty.stories | number | he number of floors in the property |
| RealEstateProperty.streetAddress | string | the street address |
| RealEstateProperty.yearBuilt | number | the year the structure was created |

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


