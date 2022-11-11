---
title: Certification
---
| Name | Type | Description |
|---|---|---|
| (root) | object | A certification issued by an organization to an individual or business. |
| Certification.type | string | Certification |
| Certification.name | string | the name of the Certification |
| Certification.issuedBy | object | the issuing authority |
| Certification.issuedBy.type | string | The item type (Linked-Data @type) |
| Certification.issuedBy.id | string | Linked-Data URI (@id) |
| Certification.issuedBy.name | string | name of the issuing organization |
| Certification.issuedTo | object | the subject |
| Certification.issuedTo.type | string | The item type (Linked-Data @type) |
| Certification.issuedTo.id | string | Linked-Data URI (@id) |
| Certification.issuedTo.name | string | the name of the item |

> Examples of Certification

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


