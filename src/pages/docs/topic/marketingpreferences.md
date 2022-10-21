---
title: marketingpreferences
---

## Operations### SUB `marketingpreferences` Operation

Accepts **one of** the following messages:

#### Message `marketingpreferences#subscribe`

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/marketingpreferences#subscribe",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
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
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `marketingpreferences#unsubscribe`

*a consumer (agent) unsubscribes to email or sms for a specific agent (object)*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/marketingpreferences#unsubscribe",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
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


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|




