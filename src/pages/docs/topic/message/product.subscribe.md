---
title: product#subscribe
---
## Message

*a product was subscribed*

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/product#subscribe",
  "recipient": "https://bhhs.hsfaffiliates.com/profile/card#me",
  "data": {
    "type": "SubscribeAction",
    "agent": "https://agentid.example.com/profile/card#me",
    "subscription": {
      "product": "BuildOutShowCase",//"BuildOutRethink"
      "startDate": "07/15/2024",
      "expiryDate": "07/14/2025",
      "changeReason": "Initial subscription"
    }
  }
}
```

### Payload

| Name | Type | Description |
|---|---|---|
| topic | string | const (`"realestate/product#subscribe"`)  |
| recipient |  string&lt;uri&gt;  |  the recipient of the event with this id|
| data.type | string | data type  |
| data.agnet| url    | the event publisher |
|  data.subcription.product  | string | product |
|  data.subcription.startDate | date | product start date |
|  data.subcription.expiryDate | date | product expiry date  |
|  data.subcription.changeReason | string | subscription change reason |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)
