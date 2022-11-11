---
title: Certification
---
## Schema

| Name | Type | Description |
|---|---|---|
| (Certification) | object | A certification issued by an organization to an individual or business. |
| type | string | Certification |
| name | string | the name of the Certification |
| issuedBy | object | the issuing authority |
| issuedBy.type | string | The item type (Linked-Data @type) |
| issuedBy.id | string | Linked-Data URI (@id) <span class='constraints'>format (`uri`)</span> |
| issuedBy.name | string | name of the issuing organization |
| issuedTo | object | the subject |
| issuedTo.type | string | The item type (Linked-Data @type) |
| issuedTo.id | string | Linked-Data URI (@id) <span class='constraints'>format (`uri`)</span> |
| issuedTo.name | string | the name of the item |
| type | string | Certification |
| name | string | the name of the Certification |
| issuedBy | object | the issuing authority |
| issuedBy.type | string | The item type (Linked-Data @type) |
| issuedBy.id | string | Linked-Data URI (@id) <span class='constraints'>format (`uri`)</span> |
| issuedBy.name | string | name of the issuing organization |
| issuedTo | object | the subject |
| issuedTo.type | string | The item type (Linked-Data @type) |
| issuedTo.id | string | Linked-Data URI (@id) <span class='constraints'>format (`uri`)</span> |
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
