---
title: UnsubscribeAction
---
| Name | Type | Description |
|---|---|---|
| (root) | allOf | - |
| 0 (allOf item) | object | An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role. [schema.org/Action](https://schema.org/Action) |
| type | string | the action type |
| object | any | item on which the action is carried out |
| 1 (allOf item) | - | the consumer (agent) has unsubscribed to content from the participant with roleName SubscriptionProvider. |
| 1.type | string | - |
| 1.agent | object | the subscriber |
| 1.participant | array<object> | the subscription provider, an Agent, Team, Office or Organization |
| 1.participant.roleName | string | - |
| 1.participant.id | string | - |
| 1.participant.additionalProperty | object | - |
| 1.participant.additionalProperty.isCompanyQueue | boolean | - |

> Examples of UnsubscribeAction

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


