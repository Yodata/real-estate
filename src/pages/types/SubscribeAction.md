---
title: SubscribeAction
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | allOf | - |
| 0 (allOf item) | object | An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role. [schema.org/Action](https://schema.org/Action) |
| type | string | the action type |
| object | any | item on which the action is carried out |
| 1 (allOf item) | - | the consumer (agent) has subscribed to content from the participant with roleName SubscriptionProvider. |
| 1.type | string | allowed (`"SubscribeAction"`)  |
| 1.agent | object | the subscriber |
| 1.participant | array<object> | the subscription provider, an Agent, Team, Office or Organization |
| 1.participant.roleName | string | allowed (`"SubscriptionProvider"`)  |
| 1.participant.id | string | format (`uri`)  |
| 1.participant.additionalProperty | object | - |
| 1.participant.additionalProperty.isCompanyQueue | boolean | - |

## Example



```json
{
  "type": "SubscribeAction",
  "object": null,
  "agent": {
    "type": "Contact",
    "email": "bob@example.com",
    "identifier": {
      "hsfconsumerid": "D9AB8127-7D19-4C67-A514-9209F22F4511"
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
