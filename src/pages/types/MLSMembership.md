---
title: MLSMembership
route: /types/MLSMembership
menu: Types
---# MLSMembership
a membership relationship


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | an MLS member relationship  |
| roleName | string | the role name  |
| memberOf | object | the org or group where the role is performed <br/>RANGE: [MultipleListingService](/types/MultipleListingService) |
| member | string&lt;uri&gt;  | member object or id  |
| startDate | string&lt;date-time&gt;  | date the member began performing this role  |
| endDate | string&lt;date-time&gt;  | date the member stopped performing the role  |
| memberId | string | the user's MLSID  |

### Example
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
  "startDate": "2022-10-12T01:13:43Z",
  "endDate": "2022-10-12T01:13:43Z",
  "memberId": "memberid123"
}
```
