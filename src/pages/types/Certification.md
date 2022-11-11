---
title: Certification
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | A certification issued by an organization to an individual or business. |
| type | string | allowed (`"Certification"`) Certification |
| name | string | the name of the Certification |
| issuedBy | object | the issuing authority |
| issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| issuedBy.id | string | format (`uri`) Linked-Data URI (@id) |
| issuedBy.name | string | name of the issuing organization |
| issuedTo | object | the subject |
| issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| issuedTo.id | string | format (`uri`) Linked-Data URI (@id) |
| issuedTo.name | string | the name of the item |

## Example



```json
{
  "type": "Certification",
  "name": "e-Agent Certified",
  "issuedBy": {
    "type": "RealEstateOrganization",
    "id": "https://example.com/profile/card#me",
    "name": "Gotham City Real Estate"
  },
  "issuedTo": {
    "type": "RealEstateAgent",
    "id": "http://example.com",
    "name": "string"
  }
}
```
