---
title: AwardSeries
---
| Name | Type | Description |
|---|---|---|
| (root) | object | an award bestowed at regular intervals |
| AwardSeries.type | string | - |
| AwardSeries.name | string | name of the series |
| AwardSeries.description | string | description of the item. |
| AwardSeries.duration | string | The duration of the item in ISO 8601 date format. |
| AwardSeries.startDate | string | the start date-time (ISO 8601 formated) |
| AwardSeries.endDate | string | the end date-time (ISO 8601 formated) |
| AwardSeries.id | string | - |
| AwardSeries.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |

> Examples of AwardSeries

```json
{
  "type": "AwardSeries",
  "name": "Top 1% Club",
  "description": "Annual",
  "duration": "R/P1Y",
  "startDate": "2019-08-24T14:15:22Z",
  "endDate": "2019-08-24T14:15:22Z",
  "id": "http://example.com",
  "identifier": {
    "hsfAwardSeriesID": "xxxx"
  }
}
```


