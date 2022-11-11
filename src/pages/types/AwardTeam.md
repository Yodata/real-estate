---
title: AwardTeam
---
| Name | Type | Description |
|---|---|---|
| (root) | object | a Collection |
| AwardTeam.type | string | - |
| AwardTeam.name | string | the name of the item |
| AwardTeam.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| AwardTeam.member | array<string> | members of the AwardTeam |
| AwardTeam.member (single item) | string | - |

> Examples of AwardTeam

```json
{
  "type": "AwardTeam",
  "name": "Top Producer by Volume",
  "identifier": {
    "hsfTeamId": "xxxxx"
  },
  "member": [
    "http://12345.example.com/profile/card#me"
  ]
}
```


