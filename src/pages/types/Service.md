---
title: Service
---
## Schema

| Name | Type | Description |
|---|---|---|
| (Service) | object | A service provided by an organization. |
| type | string | - |
| name | string | name of the service. |
| areaServed | object | a physical location |
| areaServed.type | string | The item type (Linked-Data @type) |
| areaServed.address | object | A physical address. |
| areaServed.geo | object | a geo shape (circle or box) |
| type | string | - |
| name | string | name of the service. |
| areaServed | object | a physical location |
| areaServed.type | string | The item type (Linked-Data @type) |
| areaServed.address | object | A physical address. |
| areaServed.geo | object | a geo shape (circle or box) |

## Example



```json
{
  "type": "Service",
  "name": "string",
  "areaServed": {
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
}
```
