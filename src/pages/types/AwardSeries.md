---
title: AwardSeries
---
## Schema

| Name | Type | Description |
|---|---|---|
| (AwardSeries) | object | an award bestowed at regular intervals |
| type | string | - |
| name | string | name of the series |
| description | string | description of the item. |
| duration | string | The duration of the item in ISO 8601 date format. <span class='constraints'>format (`duration`)</span> |
| startDate | string | the start date-time (ISO 8601 formated) <span class='constraints'>format (`date-time`)</span> |
| endDate | string | the end date-time (ISO 8601 formated) <span class='constraints'>format (`date-time`)</span> |
| id | string |  <span class='constraints'>format (`uri`)</span> |
| identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| type | string | - |
| name | string | name of the series |
| description | string | description of the item. |
| duration | string | The duration of the item in ISO 8601 date format. <span class='constraints'>format (`duration`)</span> |
| startDate | string | the start date-time (ISO 8601 formated) <span class='constraints'>format (`date-time`)</span> |
| endDate | string | the end date-time (ISO 8601 formated) <span class='constraints'>format (`date-time`)</span> |
| id | string |  <span class='constraints'>format (`uri`)</span> |
| identifier | object | identifier assigned to a contact by the vendor who originally created the contact |

## Example



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
