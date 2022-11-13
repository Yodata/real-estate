---
title: PriceSpecification
---
## Example



```json
{
  "type": "PriceSpecification",
  "minPrice": 75000,
  "maxPrice": 100000,
  "price": 75000,
  "priceCurrency": "USD"
}
```
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | a price offered for transfer of ownership of an item |
| type | string | allowed (`"PriceSpecification"`) PriceSpecification |
| minPrice | number | the low price offered if price is a range. |
| maxPrice | number | the high price offered if price is a range. |
| price | number | the offer price. |
| priceCurrency | string | use ISO4217 |

