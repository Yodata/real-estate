---
title: PropertyValueReport
---
| Name | Type | Description |
|---|---|---|
| (root) | object | an automated property value esmation |
| PropertyValueReport.type | string | PropertyValueReport |
| PropertyValueReport.name | string | document name or title |
| PropertyValueReport.dateCreated | string | The date on which the item was created. |
| PropertyValueReport.result | object | the estimated value of the property |
| PropertyValueReport.result.type | string | MonetaryAmount |
| PropertyValueReport.result.minValue | number | the lower limit of the range |
| PropertyValueReport.result.maxValue | number | the upper limit of the range |
| PropertyValueReport.result.value | number | the actual or expected value |
| PropertyValueReport.result.currency | string | use ISO4217 country codes |
| PropertyValueReport.about | allOf | - |
| PropertyValueReport.about.0 (allOf item) | object | a property in the real estate transaction context |
| PropertyValueReport.about.0.type | string | "RealEstateProperty" |
| PropertyValueReport.about.0.propertyType | string | RESO property type (see range for allowed values) |
| PropertyValueReport.about.0.addressCountry | string | two-letter ISO 3166-1 alpha-2 country code |
| PropertyValueReport.about.0.addressLocality | string | City, Township. |
| PropertyValueReport.about.0.addressRegion | string | State or Province. |
| PropertyValueReport.about.0.apn | string | Assessors Parcel Number |
| PropertyValueReport.about.0.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| PropertyValueReport.about.0.image.0 (index) | object allOf | - |
| PropertyValueReport.about.0.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| PropertyValueReport.about.0.image.0.0.0 (allOf item) | object | - |
| PropertyValueReport.about.0.image.0.0.0.type | string | The item type (Linked-Data @type) |
| PropertyValueReport.about.0.image.0.0.0.@id | string | the liked data uri for the Thing |
| PropertyValueReport.about.0.image.0.0.0 (property names) | - | - |
| PropertyValueReport.about.0.image.0.0.1 (allOf item) | - | - |
| PropertyValueReport.about.0.image.0.0.1.type | string | - |
| PropertyValueReport.about.0.image.0.0.1.id | string | the URL to access the item. |
| PropertyValueReport.about.0.image.0.0.1.name | string | the file name of the object. |
| PropertyValueReport.about.0.image.0.0.1.encodingFormat | string | MIME type |
| PropertyValueReport.about.0.image.0.0.1.about | string | URI to the subject of the image or logo |
| PropertyValueReport.about.0.image.0.0.1.url | string | URL of the image content |
| PropertyValueReport.about.0.image.0.1 (allOf item) | - | - |
| PropertyValueReport.about.0.image.0.1.type | string | - |
| PropertyValueReport.about.0.image.0.1.id | any | - |
| PropertyValueReport.about.0.image.0.1.name | any | - |
| PropertyValueReport.about.0.image.0.1.encodingFormat | any | - |
| PropertyValueReport.about.0.latitude | number | The latitude of a location. |
| PropertyValueReport.about.0.listingId | string | the local identifier for the listing (MLS #) |
| PropertyValueReport.about.0.livingArea | object | property indoor space |
| PropertyValueReport.about.0.longitude | number | The longitude of a location. |
| PropertyValueReport.about.0.lotSize | object | outdoor space minValue, maxValue |
| PropertyValueReport.about.0.numberOfBathrooms | string | the number of bathrooms |
| PropertyValueReport.about.0.numberOfBedrooms | string | the number of bedrooms |
| PropertyValueReport.about.0.numberOfRooms | string | the total number of rooms in the building |
| PropertyValueReport.about.0.postalCode | string | Zip/Post Code |
| PropertyValueReport.about.0.propertySubType | string | RESO property sub-type (see range for allowed values) |
| PropertyValueReport.about.0.stories | number | he number of floors in the property |
| PropertyValueReport.about.0.streetAddress | string | the street address |
| PropertyValueReport.about.0.yearBuilt | number | the year the structure was created |
| PropertyValueReport.about.1 (allOf item) | any | the subject property |
| PropertyValueReport.about.2 (allOf item) | - | - |
| PropertyValueReport.about.2.additionalProperty | any | - |

> Examples of PropertyValueReport

```json
{
  "type": "PropertyValueReport",
  "name": "LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...",
  "dateCreated": "2019-08-24T14:15:22Z",
  "result": {
    "type": "MonetaryAmount",
    "minValue": 2400000,
    "maxValue": 3200000,
    "value": 2700000,
    "currency": "USD"
  },
  "about": {
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
    "yearBuilt": 1988,
    "additionalProperty": {
      "heating": null,
      "cooling": null,
      "isForeclosure": null,
      "isShortsale": null,
      "score": 7,
      "parcelId": null,
      "averageSalePrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      },
      "nonDisclosureProperty": false,
      "taxAssessedValue": {
        "@type": "MonetaryAmount",
        "amount": "100000",
        "currency": "USD"
      },
      "taxAssessedYear": 2021,
      "inHouseCompanyListingUrl": null,
      "inHouseCompanyListingEvent": null,
      "neighborhoodMetrics": null,
      "neighborhoodName": "DEER CREEK WOODS",
      "neighborhoodKey": null,
      "useNeighborhoodDataForCharts": false,
      "ownerName": "Bob Jones",
      "ownerOccupied": "Y",
      "ownersEstimatedEquity": {
        "@type": "MonetaryAmount",
        "amount": "100000",
        "currency": "USD"
      },
      "firstLoanPrice": {
        "@type": "MonetaryAmount",
        "amount": "100000",
        "currency": "USD"
      },
      "firstLoanLenderName": "",
      "secondLoanPrice": {
        "@type": "MonetaryAmount",
        "amount": null,
        "currency": null
      },
      "secondLoanLenderName": "N/A",
      "lastRefinanceLoanVal1": {
        "@type": "MonetaryAmount",
        "amount": "100000",
        "currency": "USD"
      },
      "lastRefinanceLenderName1": "N/A",
      "lastRefinanceLoanVal2": {
        "@type": "MonetaryAmount",
        "amount": null,
        "currency": null
      },
      "lastRefinanceLenderName2": "N/A",
      "Title_Company": ""
    }
  }
}
```


