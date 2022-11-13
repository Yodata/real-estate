---
title: AwardTeam
---
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
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | a Collection |
| type | string | const (`"AwardTeam"`)  |
| name | string | - |
| identifier | object |  1 properties |
| member | array<string> | members of the AwardTeam |
| member (single item) | string |  format (`uri`) |

