---
title: AwardTeam
---
## Schema

| Name | Type | Description |
|---|---|---|
| (AwardTeam) | object | a Collection |
| type | string | - |
| name | string | the name of the item |
| identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| member | array<string> | members of the AwardTeam |
| member (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| type | string | - |
| name | string | the name of the item |
| identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| member | array<string> | members of the AwardTeam |
| member (single item) | string |  <span class='constraints'>format (`uri`)</span> |

## Example



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
