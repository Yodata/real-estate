---
title: RealEstateTeamMembership
---
## Schema

| Name | Type | Description |
|---|---|---|
| (RealEstateTeamMembership) | allOf | - |
| 0 (allOf item) | object | describes a role played by a member and a group or organization. |
| type | string | a role played by the member in the memberOf group |
| roleName | string | the role name |
| memberOf | object | the org or group where the role is performed |
| member | string | member object or id <span class='constraints'>format (`uri`)</span> |
| startDate | string | date the member began performing this role <span class='constraints'>format (`date-time`)</span> |
| endDate | string | date the member stopped performing the role <span class='constraints'>format (`date-time`)</span> |
| 1 (allOf item) | object | a membership relationship.  Subclass of OrganizationRole |
| 1.type | string | a member of a real estate team |
| 1.roleName | string | - |
| 1.memberOf | string |  <span class='constraints'>format (`uri`)</span> |
| 1.member | string |  <span class='constraints'>format (`uri`)</span> |
| 0 (allOf item) | object | describes a role played by a member and a group or organization. |
| type | string | a role played by the member in the memberOf group |
| roleName | string | the role name |
| memberOf | object | the org or group where the role is performed |
| member | string | member object or id <span class='constraints'>format (`uri`)</span> |
| startDate | string | date the member began performing this role <span class='constraints'>format (`date-time`)</span> |
| endDate | string | date the member stopped performing the role <span class='constraints'>format (`date-time`)</span> |
| 1 (allOf item) | object | a membership relationship.  Subclass of OrganizationRole |
| 1.type | string | a member of a real estate team |
| 1.roleName | string | - |
| 1.memberOf | string |  <span class='constraints'>format (`uri`)</span> |
| 1.member | string |  <span class='constraints'>format (`uri`)</span> |

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
