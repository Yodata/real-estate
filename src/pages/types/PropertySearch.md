---
title: PropertySearch
---
| Name | Type | Description |
|---|---|---|
| (root) | object | property search parameters |
| PropertySearch.type | string | - |
| PropertySearch.name | string | name of the search, input by the user or generated automatically |
| PropertySearch.description | string | optional search description input by the user or generated automatically |
| PropertySearch.propertyType | string | RESO property type (see range for allowed values) |
| PropertySearch.propertySubType | object | Property sub-type enumeration values derived from RESO data dictionary. |
| PropertySearch.propertySubType.ApartmentPropertyType | string | Apartment |
| PropertySearch.propertySubType.BoatSlipPropertyType | string | Boat Slip |
| PropertySearch.propertySubType.CabinPropertyType | string | Cabin |
| PropertySearch.propertySubType.CondominiumPropertyType | string | Condominium |
| PropertySearch.propertySubType.DeededParkingPropertyType | string | Deeded Parking |
| PropertySearch.propertySubType.DuplexPropertyType | string | Residential Duplex |
| PropertySearch.propertySubType.FarmPropertyType | string | Farm Property Type |
| PropertySearch.propertySubType.ManufacturedHomePropertyType | string | Manufactured Home |
| PropertySearch.propertySubType.ManufacturedOnLandPropertyType | string | Manufactured Home + Land |
| PropertySearch.propertySubType.MobileHomePropertyType | string | Mobile Home |
| PropertySearch.propertySubType.OwnYourOwnPropertyType | string | RESO Own Your Own Property |
| PropertySearch.propertySubType.QuadruplexPropertyType | string | A residential property with four units |
| PropertySearch.propertySubType.RanchPropertyType | string | A Ranch |
| PropertySearch.propertySubType.SingleFamilyPropertyType | string | Single Family Residence |
| PropertySearch.propertySubType.StockCooperativePropertyType | string | Stock Co-op. |
| PropertySearch.propertySubType.TimesharePropertyType | string | Timeshare |
| PropertySearch.propertySubType.TownhousePropertyType | string | Townhouse |
| PropertySearch.propertySubType.TriplexPropertyType | string | A residential property with 3 separate units |
| PropertySearch.propertySubType.AgriculturePropertyType | string | An agriculture property. |
| PropertySearch.propertySubType.BusinessPropertyType | string | a residential property zoned for business operation |
| PropertySearch.propertySubType.HotelMotelPropertyType | string | Hotel property for sale. |
| PropertySearch.propertySubType.IndustrialPropertyType | string | Industrial property |
| PropertySearch.propertySubType.MixedUsePropertyType | string | Residential/Commercial property |
| PropertySearch.propertySubType.MultiFamilyPropertyType | string | A single building with multiple units |
| PropertySearch.propertySubType.OfficePropertyType | string | An office. |
| PropertySearch.propertySubType.RetailPropertyType | string | Retail property |
| PropertySearch.propertySubType.UnimprovedLandPropertyType | string | Land for sale |
| PropertySearch.propertySubType.WarehousePropertyType | string | A Warehouse property type. |
| PropertySearch.listingStatus | string | RESO Listing Status Code |
| PropertySearch.location | object | a physical location |
| PropertySearch.location.type | string | The item type (Linked-Data @type) |
| PropertySearch.location.address | object | A physical address. |
| PropertySearch.location.geo | object | a geo shape (circle or box) |
| PropertySearch.price | object | a price offered for transfer of ownership of an item |
| PropertySearch.price.type | string | PriceSpecification |
| PropertySearch.price.minPrice | number | the low price offered if price is a range. |
| PropertySearch.price.maxPrice | number | the high price offered if price is a range. |
| PropertySearch.price.price | number | the offer price. |
| PropertySearch.price.priceCurrency | string | use ISO4217 |
| PropertySearch.bedrooms | object | number of bedrooms (range) |
| PropertySearch.bathrooms | object | number of bathrooms (range) |
| PropertySearch.livingArea | object | property indoor space |
| PropertySearch.lotSize | object | outdoor space minValue, maxValue |

> Examples of PropertySearch

```json
{
  "type": "PropertySearch",
  "name": "3+ beds in Gotham City",
  "description": "((city=Gotham),(Bedrooms=3+))",
  "propertyType": "RESI",
  "propertySubType": {
    "propertySubType": "ApartmentPropertyType"
  },
  "listingStatus": "ActiveListingStatus,ContingentListingStatus",
  "location": {
    "type": "Place",
    "address": {
      "type": "PostalAddress",
      "name": "Home",
      "addressCountry": "USA",
      "addressCounty": "Gotham County",
      "addressLocality": "Gotham City",
      "addressRegion": "New Jersey",
      "addressSubdivision": "Gotham Heights",
      "postalCode": "10010",
      "postOfficeBoxNumber": "Box 1234",
      "streetAddress": "1007 Mountain Gate Rd"
    },
    "geo": {
      "type": "GeoShape",
      "geoMidpoint": {
        "type": "GeoCoordinates,",
        "longitude": "73.98",
        "latitude": "40.75"
      },
      "geoRadius": {
        "type": "QuantitativeValue,",
        "value": "10,",
        "unitCode": "mi,",
        "unitText": "miles"
      },
      "box": "(33.5697,-117.775),(33.6018,-117.707)"
    }
  },
  "price": {
    "type": "PriceSpecification",
    "minPrice": 75000,
    "maxPrice": 100000,
    "price": 75000,
    "priceCurrency": "USD"
  },
  "bedrooms": {
    "type": "QuantitativeValue",
    "minValue": 0,
    "maxValue": 4,
    "unitCode": "BD",
    "unitText": "Bedrooms"
  },
  "bathrooms": {
    "type": "QuantitativeValue",
    "minValue": 2,
    "unitCode": "BA",
    "unitText": "Bathrooms"
  },
  "livingArea": {
    "type": "QuantitativeValue",
    "minValue": 1500,
    "unitCode": "SqFt",
    "unitText": "Square Feet"
  },
  "lotSize": {
    "type": "QuantitativeValue",
    "minValue": 0.5,
    "unitCode": "AC",
    "unitText": "Acres"
  }
}
```


