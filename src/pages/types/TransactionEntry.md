---
title: TransactionEntry
---
## Example



```json
{
  "type": "TransactionEntry",
  "salesProductionUnit": 0.5,
  "salesProductionGCI": {
    "type": "MonetaryAmount",
    "value": 1234.56,
    "currency": "USD"
  },
  "recipient": {
    "type": "RealEstateAgent",
    "roleName": "ListingAgent",
    "id": "https://{entityid}.example.com/profile/card#me",
    "identifier": {
      "bmsAgentId": "1657897"
    }
  }
}
```

## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | describes a unit of sales credit in unit or commission value relative to a parent transaction |
| type | string | allowed (`"TransactionEntry"`) TransactionEntry |
| salesProductionUnit | number | the sales production units credited to the recipient [ 0.0001 .. 1 ] |
| salesProductionGCI | object | gross commission income credited to the recipient |
| salesProductionGCI.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| salesProductionGCI.minValue | number | the lower limit of the range |
| salesProductionGCI.maxValue | number | the upper limit of the range |
| salesProductionGCI.value | number | the actual or expected value |
| salesProductionGCI.currency | string | use ISO4217 country codes <= 3 characters |
| recipient | object | the agent credited with the sales production and who receives the value |
| recipient.type | string | typically a RealEstateAgent |
| recipient.roleName | string | allowed (`"ListingAgent"`, `"BuyerAgent"`) enum: ListingAgent,BuyerAgent |
| recipient.id | string | Linked-Data URI (@id) format (`uri`) |
| recipient.identifier | object | unique identifier of the recipient from the data producer |
| recipient.identifier.bmsAgentId | string |  <= 12 characters |

