---
title: OrganizationRole
---
| Name | Type | Description |
|---|---|---|
| (root) | object | describes a role played by a member and a group or organization. |
| OrganizationRole.type | string | a role played by the member in the memberOf group |
| OrganizationRole.roleName | string | the role name |
| OrganizationRole.memberOf | object | the org or group where the role is performed |
| OrganizationRole.member | string | member object or id |
| OrganizationRole.startDate | string | date the member began performing this role |
| OrganizationRole.endDate | string | date the member stopped performing the role |

> Examples of OrganizationRole

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


