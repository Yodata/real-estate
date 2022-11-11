---
title: ListingReport
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | summary report of listing inventory count |
| type | string | RECORD-TYPE |
| batchId | string | BATCH-ID |
| reportingOfficeId | string | OFFICE-ID format (`uri`) |
| dateCreated | string | YEAR-MONTH format (`date-time`) |
| listingsAddedCount | number | LISTINGS-TAKEN |
| totalListingsCount | number | LISTINGS-INVENTORY |

## Example



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
