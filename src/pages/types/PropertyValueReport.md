---
title: PropertyValueReport
route: /types/PropertyValueReport
menu: Types
---# PropertyValueReport
an automated property value esmation


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | PropertyValueReport  |
| name | string | document name or title  |
| dateCreated | string&lt;date-time&gt;  | The date on which the item was created.  |
| result | object | the estimated value of the property <br/>RANGE: [MonetaryAmount](/types/MonetaryAmount) |
| result.type | string! | MonetaryAmount  |
| result.minValue | number | the lower limit of the range  |
| result.maxValue | number | the upper limit of the range  |
| result.value | number! | the actual or expected value  |
| result.currency | string! | use ISO4217 country codes  |
| about | object | the subject property <br/>RANGE: [RealEstateProperty](/types/RealEstateProperty) |
| about.type | string! | "RealEstateProperty"  |
| about.propertyType | string! | RESO property type (see range for allowed values) <br/>RANGE: [PropertyType](/types/PropertyType) |
| about.addressCountry | string | two-letter ISO 3166-1 alpha-2 country code  |
| about.addressLocality | string | City, Township.  |
| about.addressRegion | string | State or Province.  |
| about.apn | string | Assessors Parcel Number  |
| about.image | [*] | an ImageObject or URI reference to an image on the web. <br/>RANGE: [ImageObject](/types/ImageObject) |
| about.latitude | number | The latitude of a location.  |
| about.listingId | string | the local identifier for the listing (MLS #)  |
| about.livingArea | object | property indoor space <br/>RANGE: [QuantitativeValue](/types/QuantitativeValue) |
| about.longitude | number | The longitude of a location.  |
| about.lotSize | object | outdoor space minValue, maxValue <br/>RANGE: [QuantitativeValue](/types/QuantitativeValue) |
| about.numberOfBathrooms | string | the number of bathrooms  |
| about.numberOfBedrooms | string | the number of bedrooms  |
| about.numberOfRooms | string | the total number of rooms in the building  |
| about.postalCode | string | Zip/Post Code  |
| about.propertySubType | string | RESO property sub-type (see range for allowed values) <br/>RANGE: [PropertySubType](/types/PropertySubType) |
| about.stories | number | he number of floors in the property  |
| about.streetAddress | string | the street address  |
| about.yearBuilt | number | the year the structure was created  |
| about.additionalProperty | * |   |

### Example
```json
{
  "type": "PropertyValueReport",
  "name": "LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...",
  "dateCreated": "2022-10-12T01:13:43Z",
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
