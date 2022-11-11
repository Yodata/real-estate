---
title: QuantitativeValue
---
## Schema

| Name | Type | Description |
|---|---|---|
| (QuantitativeValue) | object | A point value or interval. |
| type | string | QuantitativeValue |
| value | number | the value (if a static value) |
| minValue | number | the lower value of a range |
| maxValue | number | the upper value of a range |
| unitCode | string | unit code (RESO or UN/CEFACT) |
| unitText | string | unit code in common text |
| type | string | QuantitativeValue |
| value | number | the value (if a static value) |
| minValue | number | the lower value of a range |
| maxValue | number | the upper value of a range |
| unitCode | string | unit code (RESO or UN/CEFACT) |
| unitText | string | unit code in common text |

## Example



```json
{
  "type": "QuantitativeValue",
  "value": 0,
  "minValue": 0,
  "maxValue": 0,
  "unitCode": "AC",
  "unitText": "acres"
}
```
