---
title: TransactionEntry
route: /types/TransactionEntry
menu: Types
---# TransactionEntry
describes a unit of sales credit in unit or commission value relative to a parent transaction


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | TransactionEntry  |
| salesProductionUnit | number | the sales production units credited to the recipient  |
| salesProductionGCI | object | gross commission income credited to the recipient <br/>RANGE: [MonetaryAmount](/types/MonetaryAmount) |
| salesProductionGCI.type | string! | MonetaryAmount  |
| salesProductionGCI.minValue | number | the lower limit of the range  |
| salesProductionGCI.maxValue | number | the upper limit of the range  |
| salesProductionGCI.value | number! | the actual or expected value  |
| salesProductionGCI.currency | string! | use ISO4217 country codes  |
| recipient | object | the agent credited with the sales production and who receives the value  |
| recipient.type | string | typically a RealEstateAgent  |
| recipient.roleName | string | enum: ListingAgent,BuyerAgent  |
| recipient.id | string&lt;uri&gt;  | bhhs profile id for the referring entity  |
| recipient.identifier | object | unique identifier of the recipient from the data producer  |

### Example
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