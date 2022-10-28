---
title: Award
route: /types/Award
menu: Types
---# Award
An honor bestowed on one or mote _recipients_ by the message _agent_

## Award

## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | "AwardAction"  |
| name | string | name of the award  |
| dateAwarded | string | date the award was presented or announced. <br/>RANGE: [DateTime](/types/DateTime) |
| agent | * | the item creator <br/>RANGE: [Person](/types/Person), [Organization](/types/Organization) |
| recipient | [object] |   |
| identifier | object | key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.  |

### Example
```json
{
  "type": "Award",
  "name": "Top 1%",
  "dateAwarded": "2019-11-25T04:23:32.000Z",
  "agent": "http://agent.example.com/profile/card#me",
  "recipient": [
    {
      "type": "RealEstateAgent",
      "name": "Randy RealEstateAgent",
      "id": "https://{userid}.example.com/profile/card#me"
    }
  ],
  "identifier": {
    "hsfAwardId": "xxxx"
  }
}
```