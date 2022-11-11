---
title: AwardTeam
---
## Schema

| Name | Type | Description |
|---|---|---|
| (AwardTeam) | object | a Collection |
| type | string | const (`"AwardTeam"`)  |
| name | string | the name of the item |
| identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| member | array<string> | members of the AwardTeam |
| member (single item) | string | examples (`"http://12345.example.com/profile/card#me"`, `"http://ma302-001.example.com/profile/card#me"`, `"http://ma302.example.com/profile/card#me"`) format (`uri`)  |
| type | string | const (`"AwardTeam"`)  |
| name | string | the name of the item |
| identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| member | array<string> | members of the AwardTeam |
| member (single item) | string | examples (`"http://12345.example.com/profile/card#me"`, `"http://ma302-001.example.com/profile/card#me"`, `"http://ma302.example.com/profile/card#me"`) format (`uri`)  |

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
