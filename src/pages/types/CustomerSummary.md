---
title: ContactSummary
route: /types/ContactSummary
menu: Types
---# ContactSummary
minimal schema of a customer for report messages


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | "ContactSummary"  |
| batchId | string | BATCH-ID  |
| author | string&lt;uri&gt;  | OFFICE-ID  |
| transactionType | string | TRANS-TYPE <br/>RANGE: [TransactionType](/types/TransactionType) |
| transactionId | string | TRANS-NO  |
| transactionRole | string |  <br/>RANGE: [Buyer](/types/Buyer), [Seller](/types/Seller), [BuyerAgent](/types/BuyerAgent), [ListingAgent](/types/ListingAgent) |
| position | number | ADJUSTMENT-SEQUENCE  |
| assoicatedAgent | string&lt;uri&gt;  | ASSOC-ID  |
| object | object | the Customer <br/>RANGE: [Person](/types/Person), [Organization](/types/Organization) |
| object.type | string | The item type (Linked-Data @type)  |
| object.givenName | string | First Name of a person  |
| object.additionalName | string | CUSTOMER-MIDDLE-INITIAL  |
| object.familyName | string | Last Name of a person  |
| object.gender | string | gender of the Customer (why?)  |

### Example
```json
{
  "type": "ContactSummaryReport",
  "batchId": "0001",
  "author": "https://{officeid}.example.com/profile/card#me",
  "transactionType": "SalesTransactionType",
  "transactionId": "0000097123",
  "transactionRole": "Buyer",
  "position": 1,
  "assoicatedAgent": "https://{userid}.example.com/profile/card#me",
  "object": {
    "type": "string",
    "givenName": "Glenn",
    "additionalName": "M",
    "familyName": "Miller",
    "gender": "M"
  }
}
```
