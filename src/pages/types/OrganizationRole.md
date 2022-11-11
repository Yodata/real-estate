---
title: OrganizationRole
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | describes a role played by a member and a group or organization. |
| type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| roleName | string | the role name |
| memberOf | object | the org or group where the role is performed |
| member | string | member object or id format (`uri`) |
| startDate | string | date the member began performing this role format (`date-time`) |
| endDate | string | date the member stopped performing the role format (`date-time`) |

## Example



```json
{
  "type": "OrganizationRole",
  "roleName": "Owner",
  "memberOf": {
    "type": "RealEstateOrganization",
    "id": "http://orgid.example.com/profile/card#me"
  },
  "member": "https://memberid.example.com/profile/card#me",
  "startDate": "2019-08-24T14:15:22Z",
  "endDate": "2019-08-24T14:15:22Z"
}
```
