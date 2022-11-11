---
title: RealEstateTeamMembership
---
| Name | Type | Description |
|---|---|---|
| (root) | allOf | - |
| RealEstateTeamMembership.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| RealEstateTeamMembership.0.type | string | a role played by the member in the memberOf group |
| RealEstateTeamMembership.0.roleName | string | the role name |
| RealEstateTeamMembership.0.memberOf | object | the org or group where the role is performed |
| RealEstateTeamMembership.0.member | string | member object or id |
| RealEstateTeamMembership.0.startDate | string | date the member began performing this role |
| RealEstateTeamMembership.0.endDate | string | date the member stopped performing the role |
| RealEstateTeamMembership.1 (allOf item) | object | a membership relationship.  Subclass of OrganizationRole |
| RealEstateTeamMembership.1.type | string | a member of a real estate team |
| RealEstateTeamMembership.1.roleName | string | - |
| RealEstateTeamMembership.1.memberOf | string | - |
| RealEstateTeamMembership.1.member | string | - |

> Examples of RealEstateTeamMembership

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


