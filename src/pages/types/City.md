---
title: City
---
## Example



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
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | A city or town. |
| type | string | allowed (`"City"`, `"PostalCodeArea"`)  |
| name | string | city name (same as addressLocality) |
| addressRegion | string | State or Province. |
| addressLocality | string | City, Township. |
| postalCode | string | Zip/Post Code |
| addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| addressCounty | string | the county (us real estate extension) |

