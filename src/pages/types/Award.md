---
title: Award
---
| Name | Type | Description |
|---|---|---|
| (root) | object | An honor bestowed on one or mote _recipients_ by the message _agent_ |
| Award.type | string | "AwardAction" |
| Award.name | string | name of the award |
| Award.dateAwarded | string | date the award was presented or announced. |
| Award.agent | string | the agent that presented the award |
| Award.recipient | array<object> | recipients of the award |
| Award.recipient.type | string | - |
| Award.recipient.id | string | - |
| Award.recipient.name | string | the name of the award recipient |
| Award.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |

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


