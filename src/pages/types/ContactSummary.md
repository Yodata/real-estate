---
title: ContactSummary
---
| Name | Type | Description |
|---|---|---|
| (root) | object | minimal schema of a customer for report messages |
| ContactSummary.type | string | "ContactSummary" |
| ContactSummary.batchId | string | BATCH-ID |
| ContactSummary.author | string | OFFICE-ID |
| ContactSummary.transactionType | string | TRANS-TYPE |
| ContactSummary.transactionId | string | TRANS-NO |
| ContactSummary.transactionRole | string | - |
| ContactSummary.position | number | ADJUSTMENT-SEQUENCE |
| ContactSummary.assoicatedAgent | string | ASSOC-ID |
| ContactSummary.object | object | the Customer |
| ContactSummary.object.type | string | The item type (Linked-Data @type) |
| ContactSummary.object.givenName | string | First Name of a person |
| ContactSummary.object.additionalName | string | CUSTOMER-MIDDLE-INITIAL |
| ContactSummary.object.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) |
| ContactSummary.object.gender | string | gender of the Customer (why?) |

> Examples of ContactSummary

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
    "givenName": "John",
    "additionalName": "M",
    "familyName": "Smith",
    "gender": "M"
  }
}
```


