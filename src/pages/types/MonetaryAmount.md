---
title: MonetaryAmount
route: /types/MonetaryAmount
menu: Types
---# MonetaryAmount

## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string! | MonetaryAmount  |
| minValue | number | the lower limit of the range  |
| maxValue | number | the upper limit of the range  |
| value | number! | the actual or expected value  |
| currency | string! | use ISO4217 country codes  |

### Example
```json
{
  "type": "MonetaryAmount",
  "minValue": 2400000,
  "maxValue": 3200000,
  "value": 2700000,
  "currency": "USD"
}
```