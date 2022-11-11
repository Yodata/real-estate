---
title: PostalAddress
---
## Schema

| Name | Type | Description |
|---|---|---|
| (PostalAddress) | object | A physical address. |
| type | string | - |
| streetAddress | string | the street number and name. |
| postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| addressRegion | string | State or Province. |
| addressLocality | string | City, Township. |
| postalCode | string | Zip/Post Code |
| addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| addressCounty | string | the county (us real estate extension) |
| addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |
| type | string | - |
| streetAddress | string | the street number and name. |
| postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| addressRegion | string | State or Province. |
| addressLocality | string | City, Township. |
| postalCode | string | Zip/Post Code |
| addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| addressCounty | string | the county (us real estate extension) |
| addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |

## Example



```json
{
  "type": "PostalAddress",
  "streetAddress": "5046 Ottis Point",
  "postOfficeBoxNumber": "Box 1234",
  "addressRegion": "New Jersey",
  "addressLocality": "Gotham City",
  "postalCode": "10010",
  "addressCountry": "USA",
  "addressCounty": "Gotham County",
  "addressSubdivision": "Gotham Heights"
}
```
