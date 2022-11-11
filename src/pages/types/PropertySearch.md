---
title: PropertySearch
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | property search parameters |
| type | string | allowed (`"PropertySearch"`)  |
| name | string | name of the search, input by the user or generated automatically |
| description | string | optional search description input by the user or generated automatically |
| propertyType | string | allowed (`"RESI"`, `"RLSE"`, `"RINC"`, `"LAND"`, `"MOBI"`, `"FARM"`, `"COMS"`, `"COML"`, `"BUSO"`) RESO property type (see range for allowed values) 4 characters |
| propertySubType | object | Property sub-type enumeration values derived from RESO data dictionary. |
| propertySubType.ApartmentPropertyType | string | Apartment |
| propertySubType.BoatSlipPropertyType | string | Boat Slip |
| propertySubType.CabinPropertyType | string | Cabin |
| propertySubType.CondominiumPropertyType | string | Condominium |
| propertySubType.DeededParkingPropertyType | string | Deeded Parking |
| propertySubType.DuplexPropertyType | string | Residential Duplex |
| propertySubType.FarmPropertyType | string | Farm Property Type |
| propertySubType.ManufacturedHomePropertyType | string | Manufactured Home |
| propertySubType.ManufacturedOnLandPropertyType | string | Manufactured Home + Land |
| propertySubType.MobileHomePropertyType | string | Mobile Home |
| propertySubType.OwnYourOwnPropertyType | string | RESO Own Your Own Property |
| propertySubType.QuadruplexPropertyType | string | A residential property with four units |
| propertySubType.RanchPropertyType | string | A Ranch |
| propertySubType.SingleFamilyPropertyType | string | Single Family Residence |
| propertySubType.StockCooperativePropertyType | string | Stock Co-op. |
| propertySubType.TimesharePropertyType | string | Timeshare |
| propertySubType.TownhousePropertyType | string | Townhouse |
| propertySubType.TriplexPropertyType | string | A residential property with 3 separate units |
| propertySubType.AgriculturePropertyType | string | An agriculture property. |
| propertySubType.BusinessPropertyType | string | a residential property zoned for business operation |
| propertySubType.HotelMotelPropertyType | string | Hotel property for sale. |
| propertySubType.IndustrialPropertyType | string | Industrial property |
| propertySubType.MixedUsePropertyType | string | Residential/Commercial property |
| propertySubType.MultiFamilyPropertyType | string | A single building with multiple units |
| propertySubType.OfficePropertyType | string | An office. |
| propertySubType.RetailPropertyType | string | Retail property |
| propertySubType.UnimprovedLandPropertyType | string | Land for sale |
| propertySubType.WarehousePropertyType | string | A Warehouse property type. |
| listingStatus | string | RESO Listing Status Code |
| location | object | a physical location |
| location.type | string | allowed (`"Place"`) The item type (Linked-Data @type) |
| location.address | object | A physical address. |
| location.geo | object | a geo shape (circle or box) |
| price | object | a price offered for transfer of ownership of an item |
| price.type | string | allowed (`"PriceSpecification"`) PriceSpecification |
| price.minPrice | number | the low price offered if price is a range. |
| price.maxPrice | number | the high price offered if price is a range. |
| price.price | number | the offer price. |
| price.priceCurrency | string | use ISO4217 |
| bedrooms | object | number of bedrooms (range) |
| bathrooms | object | number of bathrooms (range) |
| livingArea | object | property indoor space |
| lotSize | object | outdoor space minValue, maxValue |

## Example



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
