---
title: ContactSummary
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | minimal schema of a customer for report messages |
| type | string | allowed (`"ContactSummaryReport"`) "ContactSummary" |
| batchId | string | BATCH-ID |
| author | string | OFFICE-ID format (`uri`) |
| transactionType | string | TRANS-TYPE |
| transactionId | string | TRANS-NO |
| transactionRole | string | allowed (`"Buyer"`, `"Seller"`)  |
| position | number | ADJUSTMENT-SEQUENCE |
| assoicatedAgent | string | ASSOC-ID format (`uri`) |
| object | object | the Customer |
| object.type | string | The item type (Linked-Data @type) |
| object.givenName | string | First Name of a person |
| object.additionalName | string | CUSTOMER-MIDDLE-INITIAL |
| object.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) <= 50 characters |
| object.gender | string | gender of the Customer (why?) |

## Example



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
