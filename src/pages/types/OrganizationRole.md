---
title: OrganizationRole
route: /types/OrganizationRole
menu: Types
---# OrganizationRole
describes a role played by a member and a group or organization.


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | a role played by the member in the memberOf group  |
| roleName | string | the role name  |
| memberOf | object | the org or group where the role is performed  |
| member | string&lt;uri&gt;  | member object or id  |
| startDate | string&lt;date-time&gt;  | date the member began performing this role  |
| endDate | string&lt;date-time&gt;  | date the member stopped performing the role  |

### Example
```json
{
  "type": "OrganizationRole",
  "roleName": "Owner",
  "memberOf": {
    "type": "RealEstateOrganization",
    "id": "http://orgid.example.com/profile/card#me"
  },
  "member": "https://memberid.example.com/profile/card#me",
  "startDate": "2022-10-12T01:13:43Z",
  "endDate": "2022-10-12T01:13:43Z"
}
```
