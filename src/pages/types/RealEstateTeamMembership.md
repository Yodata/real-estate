---
title: RealEstateTeamMembership
route: /types/RealEstateTeamMembership
menu: Types
---# RealEstateTeamMembership
a membership relationship.  Subclass of OrganizationRole


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | a member of a real estate team  |
| roleName | string | the role name  |
| memberOf | string&lt;uri&gt;  | the org or group where the role is performed  |
| member | string&lt;uri&gt;  | member object or id  |
| startDate | string&lt;date-time&gt;  | date the member began performing this role  |
| endDate | string&lt;date-time&gt;  | date the member stopped performing the role  |

### Example
```json
{
  "type": "RealEstateTeamMembership",
  "roleName": "Owner",
  "memberOf": "https://{team-id}.example.com/profile/card#me",
  "member": "https://{agent}.example.com/profile/card#me",
  "startDate": "2022-10-12T01:13:43Z",
  "endDate": "2022-10-12T01:13:43Z"
}
```
