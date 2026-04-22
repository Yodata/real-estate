---
title: Award
---
## Example



```json
{
  "type": "Award",
  "name": "Top 1%",
  "dateAwarded": "2019-11-25T04:23:32Z",
  "agent": "http://example.com",
  "recipient": [
    {
      "type": "RealEstateAgent",
      "id": "https://user.example.com/profile/card#me",
      "name": "John Smith"
    }
  ],
  "identifier": {
    "hsfAwardId": "xxxx"
  }
}
```

## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | An honor bestowed on one or more _recipients_ by the message _agent_ |
| type | string | allowed (`"Award"`) "AwardAction" |
| name | string | name of the award |
| dateAwarded | string | date the award was presented or announced. format (`date-time`) |
| agent | string | the agent that presented the award format (`uri`) |
| recipient | array<object> | recipients of the award |
| recipient.type | string | allowed (`"RealEstateAgent"`, `"RealEstateOffice"`, `"RealEstateOrganization"`)  |
| recipient.id | string |  format (`uri`) |
| recipient.name | string | the name of the award recipient |
| identifier | object |  1 properties |

