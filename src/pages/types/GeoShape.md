---
title: GeoShape
---
## Schema

| Name | Type | Description |
|---|---|---|
| (GeoShape) | object | a geo shape |
| type | string | - |
| geoMidpoint | object | a lat/long point. |
| geoMidpoint.type | string | GeoCordinates |
| geoMidpoint.longitude | number | The longitude of a location. |
| geoMidpoint.latitude | number | The latitude of a location. |
| geoRadius | object | the radius of a geo-shape in meters if unitCode is not indicated |
| box | string | A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character. |
| type | string | - |
| geoMidpoint | object | a lat/long point. |
| geoMidpoint.type | string | GeoCordinates |
| geoMidpoint.longitude | number | The longitude of a location. |
| geoMidpoint.latitude | number | The latitude of a location. |
| geoRadius | object | the radius of a geo-shape in meters if unitCode is not indicated |
| box | string | A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character. |

## Example



```json
{
  "type": "GeoShape",
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
  },
  "box": "(33.5697,-117.775),(33.6018,-117.707)"
}
```
