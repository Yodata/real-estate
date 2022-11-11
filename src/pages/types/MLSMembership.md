---
title: MLSMembership
---
| Name | Type | Description |
|---|---|---|
| (root) | allOf | - |
| MLSMembership.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| MLSMembership.0.type | string | a role played by the member in the memberOf group |
| MLSMembership.0.roleName | string | the role name |
| MLSMembership.0.memberOf | object | the org or group where the role is performed |
| MLSMembership.0.member | string | member object or id |
| MLSMembership.0.startDate | string | date the member began performing this role |
| MLSMembership.0.endDate | string | date the member stopped performing the role |
| MLSMembership.1 (allOf item) | object | a membership relationship |
| MLSMembership.1.type | string | an MLS member relationship |
| MLSMembership.1.roleName | string | - |
| MLSMembership.1.memberOf | object | - |
| MLSMembership.1.member | string | - |
| MLSMembership.1.memberId | string | the user's MLSID |

> Examples of MLSMembership

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


