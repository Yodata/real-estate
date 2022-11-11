---
title: RealEstateTeamMembership
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | allOf | - |
| 0 (allOf item) | object | describes a role played by a member and a group or organization. |
| type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| roleName | string | the role name |
| memberOf | object | the org or group where the role is performed |
| member | string | member object or id format (`uri`) |
| startDate | string | date the member began performing this role format (`date-time`) |
| endDate | string | date the member stopped performing the role format (`date-time`) |
| 1 (allOf item) | object | a membership relationship.  Subclass of OrganizationRole |
| 1.type | string | allowed (`"RealEstateTeamMembership"`) a member of a real estate team |
| 1.roleName | string | allowed (`"TeamMember"`, `"TeamAdmin"`, `"TeamOwner"`)  |
| 1.memberOf | string |  format (`uri`) |
| 1.member | string |  format (`uri`) |

## Example



```json
{
  "type": "RealEstateTeamMembership",
  "roleName": "TeamMember",
  "memberOf": "https://{team-id}.example.com/profile/card#me",
  "member": "https://{agent}.example.com/profile/card#me",
  "startDate": "2019-08-24T14:15:22Z",
  "endDate": "2019-08-24T14:15:22Z"
}
```
