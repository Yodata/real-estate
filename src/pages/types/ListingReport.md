---
title: ListingReport
---
| Name | Type | Description |
|---|---|---|
| (root) | object | summary report of listing inventory count |
| type | string | RECORD-TYPE |
| batchId | string | BATCH-ID |
| reportingOfficeId | string | OFFICE-ID |
| dateCreated | string | YEAR-MONTH |
| listingsAddedCount | number | LISTINGS-TAKEN |
| totalListingsCount | number | LISTINGS-INVENTORY |

> Examples of ListingReport

```json
{
  "type": "ListingReport",
  "batchId": "string",
  "reportingOfficeId": "https://{officeid}.example.com/profile/card#me",
  "dateCreated": "2019-08-24T14:15:22Z",
  "listingsAddedCount": 0,
  "totalListingsCount": 0
}
```


