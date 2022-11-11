---
title: GeoCircle
---
| Name | Type | Description |
|---|---|---|
| (root) | object | a circle with a mid point and radius |
| GeoCircle.type | string | - |
| GeoCircle.geoMidpoint | object | a lat/long point. |
| GeoCircle.geoMidpoint.type | string | GeoCordinates |
| GeoCircle.geoMidpoint.longitude | number | The longitude of a location. |
| GeoCircle.geoMidpoint.latitude | number | The latitude of a location. |
| GeoCircle.geoRadius | object | the radius of a geo-shape in meters if unitCode is not indicated |

> Examples of GeoCircle

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


