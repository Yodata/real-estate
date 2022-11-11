---
title: PostalAddress
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | A physical address. |
| type | string | const (`"PostalAddress"`)  |
| streetAddress | string | examples (`"5046 Ottis Point"`, `"166 Marion Burg"`, `"93044 Haley Stream"`) the street number and name. |
| postOfficeBoxNumber | string | examples (`"Box 1234"`, `"Apt. 161"`, `"Apt. 623"`) The post office box number for PO box addresses. |
| addressRegion | string | examples (`"New Jersey"`, `"California"`, `"MI"`, `null`) State or Province. |
| addressLocality | string | examples (`"Gotham City"`, `"Kulasmouth"`, `"Heidistad"`, `"Altamonte Springs"`, `"West Ahmed"`, `"Blaiseview"`) City, Township. |
| postalCode | string | examples (`"10010"`, `"38859"`, `"40387"`, `"50239-7698"`, `null`) Zip/Post Code |
| addressCountry | string | examples (`"USA"`, `"TH"`, `"NZ"`, `"EG"`, `"SJ"`, `"VN"`) The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| addressCounty | string | examples (`"Gotham County"`, `"Buckinghamshire"`, `"Borders"`, `null`) the county (us real estate extension) |
| addressSubdivision | string | examples (`"Gotham Heights"`, `"South Kensington"`, `"SOMA (South of Market)"`, `"Nob Hill"`) the subdivision or neighborhood (us real estate extension) |

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
