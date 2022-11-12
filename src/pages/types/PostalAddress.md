---
title: PostalAddress
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | A physical address. |
| type | string | const (`"PostalAddress"`)  |
| streetAddress | string | the street address <= 75 characters |
| postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| addressRegion | string | abbreviated state or province |
| addressLocality | string | City, Township. <= 50 characters |
| postalCode | string | Zip/Post Code <= 12 characters |
| addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| addressCounty | string | County |
| addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |

## Example



```json
{
  "type": "PostalAddress",
  "streetAddress": "1007 Mountain Gate Rd",
  "postOfficeBoxNumber": "Box 1234",
  "addressRegion": "NJ",
  "addressLocality": "Gotham City",
  "postalCode": "10010",
  "addressCountry": "CA",
  "addressCounty": "string",
  "addressSubdivision": "Gotham Heights"
}
```
