---
title: product#unsubscribe
---
## Message

*a product was unsubscribed*

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/product#unsubscribe",
  "recipient": "https://bhhs.hsfaffiliates.com/profile/card#me",
  "data": {
    "type": "UnSubscribeAction",
    "agent": "https://agentid.example.com/profile/card#me",
    "subscription": {
      "product": "BuildOutShowCase",//"BuildOutRethink"
      "expiryDate": "07/14/2025",
      "changeReason": "Cancel subscription"
    }
  }
}
```

### Payload

| Name | Type | Description |
|---|---|---|
|  topic | string | const (`"realestate/product#unsubscribe"`)  |
|  recipient |  string&lt;uri&gt;  |  the recipient of the event with this id|
|  data.type | string | UnSubscribeAction  |
|  data.agnet| url    | the event publisher |
|  data.subcription.product  | string | product |
|  data.subcription.expiryDate | date | product expiry date  |
|  data.subcription.changeReason | string | subscription cancellation |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)
