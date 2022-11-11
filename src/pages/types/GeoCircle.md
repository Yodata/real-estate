---
title: GeoCircle
---
| Name | Type | Description |
|---|---|---|
| (root) | object | a circle with a mid point and radius |
| type | string | - |
| geoMidpoint | object | a lat/long point. |
| geoMidpoint.type | string | GeoCordinates |
| geoMidpoint.longitude | number | The longitude of a location. |
| geoMidpoint.latitude | number | The latitude of a location. |
| geoRadius | object | the radius of a geo-shape in meters if unitCode is not indicated |

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


