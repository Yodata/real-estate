---
title: Action
route: /types/Action
menu: Types
---# Action
the consumer (agent) has unsubscribed to content from the participant with roleName SubscriptionProvider.


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string! | the action type  |
| object | * | item on which the action is carried out  |
| agent | object | the subscriber <br/>RANGE: [Contact](/types/Contact) |
| participant | [object] | the subscription provider, an Agent, Team, Office or Organization <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateTeam](/types/RealEstateTeam), [RealEstateOffice](/types/RealEstateOffice), [RealEstateOrganization](/types/RealEstateOrganization) |
| participant.roleName | string |   |
| participant.id | string&lt;uri&gt;  |   |
| participant.additionalProperty | object |   |

### Example
```json
{
  "type": "UnsubscribeAction",
  "object": null,
  "agent": {
    "type": "Contact",
    "email": "bob@example.com",
    "identifier": {
      "hsfconsumerid": "xxxxxxxxxxxxx"
    }
  },
  "participant": [
    {
      "roleName": "SubscriptionProvider",
      "id": "https://12345.example.com/profile/card#me",
      "additionalProperty": {
        "isCompanyQueue": true
      }
    }
  ]
}
```