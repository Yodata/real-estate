---
title: MLSMembership
---
## Schema

| Name | Type | Description |
|---|---|---|
| (MLSMembership) | allOf | - |
| 0 (allOf item) | object | describes a role played by a member and a group or organization. |
| type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| roleName | string | the role name |
| memberOf | object | the org or group where the role is performed |
| member | string | format (`uri`) member object or id |
| startDate | string | format (`date-time`) date the member began performing this role |
| endDate | string | format (`date-time`) date the member stopped performing the role |
| 1 (allOf item) | object | a membership relationship |
| 1.type | string | allowed (`"MLSMembership"`) an MLS member relationship |
| 1.roleName | string | - |
| 1.memberOf | object | - |
| 1.member | string | format (`uri`)  |
| 1.memberId | string | the user's MLSID |
| 0 (allOf item) | object | describes a role played by a member and a group or organization. |
| type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| roleName | string | the role name |
| memberOf | object | the org or group where the role is performed |
| member | string | format (`uri`) member object or id |
| startDate | string | format (`date-time`) date the member began performing this role |
| endDate | string | format (`date-time`) date the member stopped performing the role |
| 1 (allOf item) | object | a membership relationship |
| 1.type | string | allowed (`"MLSMembership"`) an MLS member relationship |
| 1.roleName | string | - |
| 1.memberOf | object | - |
| 1.member | string | format (`uri`)  |
| 1.memberId | string | the user's MLSID |

## Example



```json
{
  "type": "MLSMembership",
  "roleName": "MLSMember",
  "memberOf": {
    "type": "MultipleListingService",
    "id": "http://orgid.example.com/profile/card#me",
    "name": "GreatScottMLS"
  },
  "member": "https://{agent}.example.com/profile/card#me",
  "startDate": "2019-08-24T14:15:22Z",
  "endDate": "2019-08-24T14:15:22Z",
  "memberId": "memberid123"
}
```
