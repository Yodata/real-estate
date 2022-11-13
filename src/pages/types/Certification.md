---
title: Certification
---
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

## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | A certification issued by an organization to an individual or business. |
| type | string | allowed (`"Certification"`) Certification |
| name | string | the name of the Certification |
| issuedBy | object | the issuing authority |
| issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| issuedBy.id | string | Linked-Data URI (@id) format (`uri`) |
| issuedBy.name | string | name of the issuing organization |
| issuedTo | object | the subject |
| issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| issuedTo.id | string | Linked-Data URI (@id) format (`uri`) |
| issuedTo.name | string | - |

