---
title: QuantitativeValue
---
| Name | Type | Description |
|---|---|---|
| (root) | object | A point value or interval. |
| QuantitativeValue.type | string | QuantitativeValue |
| QuantitativeValue.value | number | the value (if a static value) |
| QuantitativeValue.minValue | number | the lower value of a range |
| QuantitativeValue.maxValue | number | the upper value of a range |
| QuantitativeValue.unitCode | string | unit code (RESO or UN/CEFACT) |
| QuantitativeValue.unitText | string | unit code in common text |

> Examples of QuantitativeValue

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


