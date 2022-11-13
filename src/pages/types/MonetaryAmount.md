---
title: MonetaryAmount
---
## Example



```json
{
  "type": "MonetaryAmount",
  "minValue": 2400000,
  "maxValue": 3200000,
  "value": 2700000,
  "currency": "USD"
}
```
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| minValue | number | the lower limit of the range |
| maxValue | number | the upper limit of the range |
| value | number | the actual or expected value |
| currency | string | use ISO4217 country codes <= 3 characters |

