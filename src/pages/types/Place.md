---
title: Place
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | a physical location |
| type | string | allowed (`"Place"`) The item type (Linked-Data @type) |
| address | object | A physical address. |
| geo | object | a geo shape (circle or box) |

## Example



```json
{
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
}
```
