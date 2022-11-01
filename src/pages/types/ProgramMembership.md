---
title: ProgramMembership
route: /types/ProgramMembership
menu: Types
---# ProgramMembership
describes membership relation between a member (Person) and a MarketingProgram


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | a role played by the member in the memberOf group  |
| roleName | string | the role name  |
| memberOf | object | the org or group where the role is performed <br/>RANGE: [MarketingProgram](/types/MarketingProgram) |
| member | object&lt;uri&gt;  | a contact <br/>RANGE: [Contact](/types/Contact) |
| startDate | string&lt;date-time&gt;  | date the member began performing this role  |
| endDate | string&lt;date-time&gt;  | date the member stopped performing the role  |

### Example
```json
{
  "type": "ProgramMembership",
  "roleName": "Owner",
  "memberOf": {
    "type": "RealEstateOrganization",
    "id": "http://orgid.example.com/profile/card#me"
  },
  "member": {
    "type": "Contact",
    "name": "Bruce Wayne",
    "givenName": "Bruce",
    "familyName": "Wayne",
    "jobTitle": "Batman",
    "contactPoint": [
      {
        "type": "ContactPoint",
        "name": "Mobile Phone",
        "telephone": "888.GET-BATMAN"
      },
      {
        "type": "ContactPoint",
        "name": "Email",
        "email": "batman@example.com"
      }
    ],
    "address": [
      {
        "type": "PostalAddress",
        "name": "Home",
        "streetAddress": "1007 Mountain Gate Rd",
        "postOfficeBoxNumber": "Box 1234",
        "addressRegion": "New Jersey",
        "addressLocality": "Gotham City",
        "postalCode": "10010",
        "addressCountry": "USA"
      }
    ],
    "birthDate": "2019-07-09",
    "leadOwner": {
      "type": "RealEstateOrganization",
      "id": "https://{lead-owner}.example.com/profile/card#me"
    },
    "leadSource": {
      "type": "RealEstateWebsite",
      "url": "https://agentwebsite.example.com"
    }
  },
  "startDate": "2022-10-12T01:13:43Z",
  "endDate": "2022-10-12T01:13:43Z"
}
```
