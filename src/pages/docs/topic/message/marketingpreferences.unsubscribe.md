---
title: marketingpreferences#unsubscribe
---
## Message

*a consumer (agent) unsubscribes to email or sms for a specific agent (object)*

### Payload

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/marketingpreferences#unsubscribe",
  "data": {
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
}
```


| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/marketingpreferences#unsubscribe"`)  |
| data | allOf | - |
| data.0 (allOf item) | object | An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role. [schema.org/Action](https://schema.org/Action) |
| data.0.type | string | the action type |
| data.0.object | any | item on which the action is carried out |
| data.1 (allOf item) | - | the consumer (agent) has unsubscribed to content from the participant with roleName SubscriptionProvider. |
| data.1.type | string | allowed (`"UnsubscribeAction"`)  |
| data.1.agent | object | the subscriber |
| data.1.participant | array<object> | the subscription provider, an Agent, Team, Office or Organization |
| data.1.participant.roleName | string | allowed (`"SubscriptionProvider"`)  |
| data.1.participant.id | string |  format (`uri`) |
| data.1.participant.additionalProperty | object | - |
| data.1.participant.additionalProperty.isCompanyQueue | boolean | - |

### Headers

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| time | string | date & time the event was produced format (`date-time`) |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient format (`uri`) |
| instrument | string | the app or service that produced the event on behalf of the agent/user format (`uri`) |
| source | string | a copy of the event was sent to the source(s). format (`uri`) |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source format (`uri`) |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. format (`uri`) |
| @id | string |  format (`uri`) |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


