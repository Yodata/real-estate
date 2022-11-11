---
title: PostalAddress
---
| Name | Type | Description |
|---|---|---|
| (root) | object | A physical address. |
| PostalAddress.type | string | - |
| PostalAddress.streetAddress | string | the street number and name. |
| PostalAddress.postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| PostalAddress.addressRegion | string | State or Province. |
| PostalAddress.addressLocality | string | City, Township. |
| PostalAddress.postalCode | string | Zip/Post Code |
| PostalAddress.addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| PostalAddress.addressCounty | string | the county (us real estate extension) |
| PostalAddress.addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |

> Examples of PostalAddress

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


