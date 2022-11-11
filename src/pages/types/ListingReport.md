---
title: ListingReport
---
## Schema

| Name | Type | Description |
|---|---|---|
| (ListingReport) | object | summary report of listing inventory count |
| type | string | RECORD-TYPE |
| batchId | string | BATCH-ID |
| reportingOfficeId | string | OFFICE-ID <span class='constraints'>format (`uri`)</span> |
| dateCreated | string | YEAR-MONTH <span class='constraints'>format (`date-time`)</span> |
| listingsAddedCount | number | LISTINGS-TAKEN |
| totalListingsCount | number | LISTINGS-INVENTORY |
| type | string | RECORD-TYPE |
| batchId | string | BATCH-ID |
| reportingOfficeId | string | OFFICE-ID <span class='constraints'>format (`uri`)</span> |
| dateCreated | string | YEAR-MONTH <span class='constraints'>format (`date-time`)</span> |
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
