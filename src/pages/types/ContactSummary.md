---
title: ContactSummary
---
## Schema

| Name | Type | Description |
|---|---|---|
| (ContactSummary) | object | minimal schema of a customer for report messages |
| type | string | allowed (`"ContactSummaryReport"`) "ContactSummary" |
| batchId | string | BATCH-ID |
| author | string | format (`uri`) OFFICE-ID |
| transactionType | string | TRANS-TYPE |
| transactionId | string | TRANS-NO |
| transactionRole | string | allowed (`"Buyer"`, `"Seller"`)  |
| position | number | ADJUSTMENT-SEQUENCE |
| assoicatedAgent | string | format (`uri`) ASSOC-ID |
| object | object | the Customer |
| object.type | string | The item type (Linked-Data @type) |
| object.givenName | string | examples (`"John"`, `"Jane"`, `"Mary"`, `"Joseph"`, `"William"`, `"David"`, `"Richard"`, `"Charles"`, `"Thomas"`, `"Christopher"`, `"Daniel"`, `"Matthew"`, `"Anthony"`, `"Donald"`, `"Mark"`, `"Paul"`, `"Steven"`, `"Andrew"`, `"Kenneth"`, `"George"`, `"Joshua"`, `"Kevin"`, `"Brian"`, `"Edward"`, `"Ronald"`, `"Timothy"`, `"Jason"`, `"Jeffrey"`, `"Ryan"`, `"Jacob"`) First Name of a person |
| object.additionalName | string | CUSTOMER-MIDDLE-INITIAL |
| object.familyName | string | examples (`"Smith"`, `"Jones"`, `"Parker"`, `"Monk"`, `"Brown"`, `"Miller"`, `"Davis"`, `"Wilson"`, `"Fitzgerald"`, `"Johnson"`, `"Williams"`) <= 50 characters Last Name of a person. [Family Name](https://schema.org/familyName) |
| object.gender | string | gender of the Customer (why?) |
| type | string | allowed (`"ContactSummaryReport"`) "ContactSummary" |
| batchId | string | BATCH-ID |
| author | string | format (`uri`) OFFICE-ID |
| transactionType | string | TRANS-TYPE |
| transactionId | string | TRANS-NO |
| transactionRole | string | allowed (`"Buyer"`, `"Seller"`)  |
| position | number | ADJUSTMENT-SEQUENCE |
| assoicatedAgent | string | format (`uri`) ASSOC-ID |
| object | object | the Customer |
| object.type | string | The item type (Linked-Data @type) |
| object.givenName | string | examples (`"John"`, `"Jane"`, `"Mary"`, `"Joseph"`, `"William"`, `"David"`, `"Richard"`, `"Charles"`, `"Thomas"`, `"Christopher"`, `"Daniel"`, `"Matthew"`, `"Anthony"`, `"Donald"`, `"Mark"`, `"Paul"`, `"Steven"`, `"Andrew"`, `"Kenneth"`, `"George"`, `"Joshua"`, `"Kevin"`, `"Brian"`, `"Edward"`, `"Ronald"`, `"Timothy"`, `"Jason"`, `"Jeffrey"`, `"Ryan"`, `"Jacob"`) First Name of a person |
| object.additionalName | string | CUSTOMER-MIDDLE-INITIAL |
| object.familyName | string | examples (`"Smith"`, `"Jones"`, `"Parker"`, `"Monk"`, `"Brown"`, `"Miller"`, `"Davis"`, `"Wilson"`, `"Fitzgerald"`, `"Johnson"`, `"Williams"`) <= 50 characters Last Name of a person. [Family Name](https://schema.org/familyName) |
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
