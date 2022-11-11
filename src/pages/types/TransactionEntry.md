---
title: TransactionEntry
---
| Name | Type | Description |
|---|---|---|
| (root) | object | describes a unit of sales credit in unit or commission value relative to a parent transaction |
| type | string | TransactionEntry |
| salesProductionUnit | number | the sales production units credited to the recipient |
| salesProductionGCI | object | gross commission income credited to the recipient |
| salesProductionGCI.type | string | MonetaryAmount |
| salesProductionGCI.minValue | number | the lower limit of the range |
| salesProductionGCI.maxValue | number | the upper limit of the range |
| salesProductionGCI.value | number | the actual or expected value |
| salesProductionGCI.currency | string | use ISO4217 country codes |
| recipient | object | the agent credited with the sales production and who receives the value |
| recipient.type | string | typically a RealEstateAgent |
| recipient.roleName | string | enum: ListingAgent,BuyerAgent |
| recipient.id | string | Linked-Data URI (@id) |
| recipient.identifier | object | unique identifier of the recipient from the data producer |
| recipient.identifier.bmsAgentId | string | - |

> Examples of TransactionEntry

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


