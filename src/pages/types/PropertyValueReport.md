---
title: PropertyValueReport
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | an automated property value esmation |
| type | string | allowed (`"PropertyValueReport"`) PropertyValueReport |
| name | string | document name or title |
| dateCreated | string | The date on which the item was created. format (`date-time`) |
| result | object | the estimated value of the property |
| result.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| result.minValue | number | the lower limit of the range |
| result.maxValue | number | the upper limit of the range |
| result.value | number | the actual or expected value |
| result.currency | string | use ISO4217 country codes <= 3 characters |
| about | allOf | - |
| about.0 (allOf item) | object | a property in the real estate transaction context |
| about.0.type | string | allowed (`"RealEstateProperty"`) "RealEstateProperty" |
| about.0.propertyType | string | allowed (`"RESI"`, `"RLSE"`, `"RINC"`, `"LAND"`, `"MOBI"`, `"FARM"`, `"COMS"`, `"COML"`, `"BUSO"`) RESO property type (see range for allowed values) 4 characters |
| about.0.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| about.0.addressLocality | string | City, Township. <= 50 characters |
| about.0.addressRegion | string | abbreviated state or province |
| about.0.apn | string | Assessors Parcel Number |
| about.0.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| about.0.image.0 (index) | object allOf | - |
| about.0.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| about.0.image.0.0.0 (allOf item) | object | - |
| about.0.image.0.0.0.type | string | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`) |
| about.0.image.0.0.0.@id | string | the liked data uri for the Thing format (`uri`) |
| about.0.image.0.0.0 (property names) | - |  pattern (`^[a-z@$][a-zA-Z0-9-_]+$`) |
| about.0.image.0.0.1 (allOf item) | - | - |
| about.0.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| about.0.image.0.0.1.id | string | the URL to access the item. format (`uri`) |
| about.0.image.0.0.1.name | string | the file name of the object. |
| about.0.image.0.0.1.encodingFormat | string | MIME type |
| about.0.image.0.0.1.about | string | URI to the subject of the image or logo format (`uri`) |
| about.0.image.0.0.1.url | string | URL of the image content format (`uri`) |
| about.0.image.0.1 (allOf item) | - | - |
| about.0.image.0.1.type | string | allowed (`"ImageObject"`)  |
| about.0.image.0.1.id | any | - |
| about.0.image.0.1.name | any | - |
| about.0.image.0.1.encodingFormat | any | - |
| about.0.latitude | number | The latitude of a location. |
| about.0.listingId | string | the local identifier for the listing (MLS #) |
| about.0.livingArea | object | property indoor space |
| about.0.longitude | number | The longitude of a location. |
| about.0.lotSize | object | outdoor space minValue, maxValue |
| about.0.numberOfBathrooms | string | the number of bathrooms |
| about.0.numberOfBedrooms | string | the number of bedrooms |
| about.0.numberOfRooms | string | the total number of rooms in the building |
| about.0.postalCode | string | Zip/Post Code <= 12 characters |
| about.0.propertySubType | string | allowed (`"ApartmentPropertyType"`, `"BoatSlipPropertyType"`, `"CabinPropertyType"`, `"CondominiumPropertyType"`, `"DeededParkingPropertyType"`, `"DuplexPropertyType"`, `"FarmPropertyType"`, `"ManufacturedHomePropertyType"`, `"ManufacturedOnLandPropertyType"`, `"MobileHomePropertyType"`, `"OwnYourOwnPropertyType"`, `"QuadruplexPropertyType"`, `"RanchPropertyType"`, `"SingleFamilyPropertyType"`, `"StockCooperativePropertyType"`, `"TimesharePropertyType"`, `"TownhousePropertyType"`, `"TriplexPropertyType"`, `"AgriculturePropertyType"`, `"BusinessPropertyType"`, `"HotelMotelPropertyType"`, `"IndustrialPropertyType"`, `"MixedUsePropertyType"`, `"MultiFamilyPropertyType"`, `"OfficePropertyType"`, `"RetailPropertyType"`, `"UnimprovedLandPropertyType"`, `"WarehousePropertyType"`) RESO property sub-type (see range for allowed values) |
| about.0.stories | number | he number of floors in the property |
| about.0.streetAddress | string | the street address <= 75 characters |
| about.0.yearBuilt | number | the year the structure was created |
| about.1 (allOf item) | any | the subject property |
| about.2 (allOf item) | - | - |
| about.2.additionalProperty | any | - |

## Example



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
