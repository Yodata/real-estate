---
title: MonetaryAmount
---
| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| MonetaryAmount.type | string | MonetaryAmount |
| MonetaryAmount.minValue | number | the lower limit of the range |
| MonetaryAmount.maxValue | number | the upper limit of the range |
| MonetaryAmount.value | number | the actual or expected value |
| MonetaryAmount.currency | string | use ISO4217 country codes |

> Examples of MonetaryAmount

```json
{
  "type": "MonetaryAmount",
  "minValue": 2400000,
  "maxValue": 3200000,
  "value": 2700000,
  "currency": "USD"
}
```


