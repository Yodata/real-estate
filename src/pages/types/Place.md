---
title: Place
route: /types/Place
menu: Types
---# Place
a physical location


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | The item type (Linked-Data @type)  |
| address | object | A physical address. <br/>RANGE: [PostalAddress](/types/PostalAddress) |
| geo | object | a geo shape (circle or box) <br/>RANGE: [GeoCircle](/types/GeoCircle), [GeoShape](/types/GeoShape) |

### Example
```json
{
  "type": "Place",
  "address": {
    "type": "PostalAddress",
    "streetAddress": "1007 Mountain Gate Rd",
    "addressRegion": "New Jersey",
    "addressLocality": "Gotham City",
    "postalCode": "10010",
    "addressCountry": "USA",
    "addressCounty": "Gotham County",
    "addressSubdivision": "Gotham Heights"
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
}
```