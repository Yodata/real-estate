---
title: AwardSeries
route: /types/AwardSeries
menu: Types
---# AwardSeries
an award bestowed at regular intervals


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | "AwardSeries"  |
| name | string | name of the series  |
| description | string | description of the item.  |
| duration | string | The duration of the item in ISO 8601 date format.  |
| startDate | string&lt;date-time&gt;  | the start date-time (ISO 8601 formated)  |
| endDate | string&lt;date-time&gt;  | the end date-time (ISO 8601 formated)  |
| id | string&lt;uri&gt;  | Linked-Data URI (@id)  |
| identifier | object | key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.  |

### Example
```json
{
  "type": "AwardSeries",
  "name": "Top 1% Club",
  "description": "Annual",
  "duration": "R/P1Y",
  "startDate": "2022-10-12T01:13:43Z",
  "endDate": "2022-10-12T01:13:43Z",
  "id": "https://example/com",
  "identifier": {
    "hsfAwardSeriesID": "xxxx"
  }
}
```