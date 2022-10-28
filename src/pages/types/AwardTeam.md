---
title: AwardTeam
route: /types/AwardTeam
menu: Types
---# AwardTeam
a Collection


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string! | AwardTeam  |
| name | string | name of the AwardTeam  |
| identifier | object | key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.  |
| member | [string] | members of the AwardTeam <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateOffice](/types/RealEstateOffice), [RealEstateOrganization](/types/RealEstateOrganization) |

### Example
```json
{
  "type": "AwardTeam",
  "name": "Clients",
  "identifier": {
    "hsfTeamId": "xxxxx"
  },
  "member": [
    "https://user.example.com/profile/card#me",
    "https://office.example.com/profile/card#me",
    "https://company.example.com/profile/card#me"
  ]
}
```
