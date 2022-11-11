---
title: PriceSpecification
---
| Name | Type | Description |
|---|---|---|
| (root) | object | a price offered for transfer of ownership of an item |
| PriceSpecification.type | string | PriceSpecification |
| PriceSpecification.minPrice | number | the low price offered if price is a range. |
| PriceSpecification.maxPrice | number | the high price offered if price is a range. |
| PriceSpecification.price | number | the offer price. |
| PriceSpecification.priceCurrency | string | use ISO4217 |

> Examples of PriceSpecification

```json
{
  "type": "PriceSpecification",
  "minPrice": 75000,
  "maxPrice": 100000,
  "price": 75000,
  "priceCurrency": "USD"
}
```


