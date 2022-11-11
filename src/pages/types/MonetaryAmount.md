---
title: MonetaryAmount
---
## Schema

| Name | Type | Description |
|---|---|---|
| (MonetaryAmount) | object | - |
| type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| minValue | number | the lower limit of the range |
| maxValue | number | the upper limit of the range |
| value | number | the actual or expected value |
| currency | string | <= 3 characters use ISO4217 country codes |
| type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| minValue | number | the lower limit of the range |
| maxValue | number | the upper limit of the range |
| value | number | the actual or expected value |
| currency | string | <= 3 characters use ISO4217 country codes |

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
