---
title: City
---
| Name | Type | Description |
|---|---|---|
| (root) | object | A city or town. |
| City.type | string | - |
| City.name | string | city name (same as addressLocality) |
| City.addressRegion | string | State or Province. |
| City.addressLocality | string | City, Township. |
| City.postalCode | string | Zip/Post Code |
| City.addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| City.addressCounty | string | the county (us real estate extension) |

> Examples of City

```json
{
  "type": "City",
  "name": "string",
  "addressRegion": "New Jersey",
  "addressLocality": "Gotham City",
  "postalCode": "10010",
  "addressCountry": "USA",
  "addressCounty": "Gotham County"
}
```


