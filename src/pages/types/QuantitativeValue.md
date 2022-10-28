---
title: QuantitativeValue
route: /types/QuantitativeValue
menu: Types
---# QuantitativeValue
A point value or interval.


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | QuantitativeValue  |
| value | number | the value (if a static value)  |
| minValue | number | the lower value of a range  |
| maxValue | number | the upper value of a range  |
| unitCode | string | unit code (RESO or UN/CEFACT)  |
| unitText | string | unit code in common text  |

### Example
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