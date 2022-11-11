---
title: ListingReport
---
## Schema

| Name | Type | Description |
|---|---|---|
| (ListingReport) | object | summary report of listing inventory count |
| type | string | RECORD-TYPE |
| batchId | string | BATCH-ID |
| reportingOfficeId | string | format (`uri`) OFFICE-ID |
| dateCreated | string | format (`date-time`) YEAR-MONTH |
| listingsAddedCount | number | LISTINGS-TAKEN |
| totalListingsCount | number | LISTINGS-INVENTORY |
| type | string | RECORD-TYPE |
| batchId | string | BATCH-ID |
| reportingOfficeId | string | format (`uri`) OFFICE-ID |
| dateCreated | string | format (`date-time`) YEAR-MONTH |
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
