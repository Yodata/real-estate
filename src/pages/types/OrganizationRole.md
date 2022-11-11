---
title: OrganizationRole
---
## Schema

| Name | Type | Description |
|---|---|---|
| (OrganizationRole) | object | describes a role played by a member and a group or organization. |
| type | string | a role played by the member in the memberOf group |
| roleName | string | the role name |
| memberOf | object | the org or group where the role is performed |
| member | string | member object or id <span class='constraints'>format (`uri`)</span> |
| startDate | string | date the member began performing this role <span class='constraints'>format (`date-time`)</span> |
| endDate | string | date the member stopped performing the role <span class='constraints'>format (`date-time`)</span> |
| type | string | a role played by the member in the memberOf group |
| roleName | string | the role name |
| memberOf | object | the org or group where the role is performed |
| member | string | member object or id <span class='constraints'>format (`uri`)</span> |
| startDate | string | date the member began performing this role <span class='constraints'>format (`date-time`)</span> |
| endDate | string | date the member stopped performing the role <span class='constraints'>format (`date-time`)</span> |

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
