---
title: ListingReport
---
| Name | Type | Description |
|---|---|---|
| (root) | object | summary report of listing inventory count |
| ListingReport.type | string | RECORD-TYPE |
| ListingReport.batchId | string | BATCH-ID |
| ListingReport.reportingOfficeId | string | OFFICE-ID |
| ListingReport.dateCreated | string | YEAR-MONTH |
| ListingReport.listingsAddedCount | number | LISTINGS-TAKEN |
| ListingReport.totalListingsCount | number | LISTINGS-INVENTORY |

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


