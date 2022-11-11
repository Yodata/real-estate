---
title: Award
---
| Name | Type | Description |
|---|---|---|
| (root) | object | An honor bestowed on one or mote _recipients_ by the message _agent_ |
| type | string | "AwardAction" |
| name | string | name of the award |
| dateAwarded | string | date the award was presented or announced. |
| agent | string | the agent that presented the award |
| recipient | array<object> | recipients of the award |
| recipient.type | string | - |
| recipient.id | string | - |
| recipient.name | string | the name of the award recipient |
| identifier | object | identifier assigned to a contact by the vendor who originally created the contact |

> Examples of Award

```json
{
  "type": "Award",
  "name": "Top 1%",
  "dateAwarded": "2019-11-25T04:23:32.000Z",
  "agent": "http://example.com",
  "recipient": [
    {
      "type": "RealEstateAgent",
      "id": "https://user.example.com/profile/card#me",
      "name": "string"
    }
  ],
  "identifier": {
    "hsfAwardId": "xxxx"
  }
}
```


