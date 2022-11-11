---
title: TransactionEntry
---
| Name | Type | Description |
|---|---|---|
| (root) | object | describes a unit of sales credit in unit or commission value relative to a parent transaction |
| TransactionEntry.type | string | TransactionEntry |
| TransactionEntry.salesProductionUnit | number | the sales production units credited to the recipient |
| TransactionEntry.salesProductionGCI | object | gross commission income credited to the recipient |
| TransactionEntry.salesProductionGCI.type | string | MonetaryAmount |
| TransactionEntry.salesProductionGCI.minValue | number | the lower limit of the range |
| TransactionEntry.salesProductionGCI.maxValue | number | the upper limit of the range |
| TransactionEntry.salesProductionGCI.value | number | the actual or expected value |
| TransactionEntry.salesProductionGCI.currency | string | use ISO4217 country codes |
| TransactionEntry.recipient | object | the agent credited with the sales production and who receives the value |
| TransactionEntry.recipient.type | string | typically a RealEstateAgent |
| TransactionEntry.recipient.roleName | string | enum: ListingAgent,BuyerAgent |
| TransactionEntry.recipient.id | string | Linked-Data URI (@id) |
| TransactionEntry.recipient.identifier | object | unique identifier of the recipient from the data producer |
| TransactionEntry.recipient.identifier.bmsAgentId | string | - |

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


