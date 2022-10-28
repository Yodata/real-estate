---
title: GeoCircle
route: /types/GeoCircle
menu: Types
---# GeoCircle
a circle with a mid point and radius


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string |   |
| geoMidpoint | object | a lat/long point. <br/>RANGE: [GeoCoordinates](/types/GeoCoordinates) |
| geoMidpoint.type | string | GeoCordinates  |
| geoMidpoint.longitude | number | The longitude of a location.  |
| geoMidpoint.latitude | number | The latitude of a location.  |
| geoRadius | object | the radius of a geo-shape in meters if unitCode is not indicated <br/>RANGE: [QuantitativeValue](/types/QuantitativeValue) |

### Example
```json
{
  "type": "GeoCircle",
  "geoMidpoint": {
    "type": "GeoCoordinates",
    "longitude": 73.98,
    "latitude": 40.75
  },
  "geoRadius": {
    "type": "QuantitativeValue",
    "value": "10",
    "unitCode": "mi",
    "unitText": "miles"
  }
}
```
