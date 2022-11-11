---
title: Award
---
## Schema

| Name | Type | Description |
|---|---|---|
| (Award) | object | An honor bestowed on one or mote _recipients_ by the message _agent_ |
| type | string | allowed (`"Award"`) "AwardAction" |
| name | string | name of the award |
| dateAwarded | string | format (`date-time`) date the award was presented or announced. |
| agent | string | format (`uri`) the agent that presented the award |
| recipient | array<object> | recipients of the award |
| recipient.type | string | allowed (`"RealEstateAgent"`, `"RealEstateOffice"`, `"RealEstateOrganization"`)  |
| recipient.id | string | format (`uri`)  |
| recipient.name | string | the name of the award recipient |
| identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| type | string | allowed (`"Award"`) "AwardAction" |
| name | string | name of the award |
| dateAwarded | string | format (`date-time`) date the award was presented or announced. |
| agent | string | format (`uri`) the agent that presented the award |
| recipient | array<object> | recipients of the award |
| recipient.type | string | allowed (`"RealEstateAgent"`, `"RealEstateOffice"`, `"RealEstateOrganization"`)  |
| recipient.id | string | format (`uri`)  |
| recipient.name | string | the name of the award recipient |
| identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |

## Example



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
