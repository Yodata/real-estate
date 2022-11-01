---
title: Certification
route: /types/Certification
menu: Types
---# Certification
A certification issued by an organization to an individual or business.


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | Certification  |
| name | string | the name of the Certification  |
| issuedBy | object | the issuing authority <br/>RANGE: [RealEstateOrganization](/types/RealEstateOrganization) |
| issuedBy.type | string | The item type (Linked-Data @type)  |
| issuedBy.id | string&lt;uri&gt;  | Linked-Data URI (@id)  |
| issuedBy.name | string | name of the issuing organization  |
| issuedTo | object | the subject <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent) |
| issuedTo.type | string | The item type (Linked-Data @type)  |
| issuedTo.id | string&lt;uri&gt;  | Linked-Data URI (@id)  |
| issuedTo.name | string | the name of the item  |

### Example
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
