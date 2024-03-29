---
title: ListingReport
route: /types/ListingReport
menu: Types
---# ListingReport
summary report of listing inventory count


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | RECORD-TYPE  |
| batchId | string | BATCH-ID  |
| reportingOfficeId | string&lt;uri&gt;  | OFFICE-ID  |
| dateCreated | string&lt;date-time&gt;  | YEAR-MONTH  |
| listingsAddedCount | number | LISTINGS-TAKEN  |
| totalListingsCount | number | LISTINGS-INVENTORY  |

### Example
```json
{
  "type": "ListingReport",
  "batchId": "string",
  "reportingOfficeId": "https://{officeid}.example.com/profile/card#me",
  "dateCreated": "2022-10-12T01:13:43Z",
  "listingsAddedCount": 0,
  "totalListingsCount": 0
}
```
