---
title: AwardSeries
---
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

## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | an award bestowed at regular intervals |
| type | string | const (`"AwardSeries"`)  |
| name | string | name of the series |
| description | string | description of the item. |
| duration | string | The duration of the item in ISO 8601 date format. format (`duration`) |
| startDate | string | the start date-time (ISO 8601 formated) format (`date-time`) |
| endDate | string | the end date-time (ISO 8601 formated) format (`date-time`) |
| id | string |  format (`uri`) |
| identifier | object |  1 properties |

