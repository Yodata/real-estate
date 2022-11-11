---
title: AwardSeries
---
## Schema

| Name | Type | Description |
|---|---|---|
| (AwardSeries) | object | an award bestowed at regular intervals |
| type | string | const (`"AwardSeries"`)  |
| name | string | name of the series |
| description | string | description of the item. |
| duration | string | format (`duration`) The duration of the item in ISO 8601 date format. |
| startDate | string | format (`date-time`) the start date-time (ISO 8601 formated) |
| endDate | string | format (`date-time`) the end date-time (ISO 8601 formated) |
| id | string | format (`uri`)  |
| identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| type | string | const (`"AwardSeries"`)  |
| name | string | name of the series |
| description | string | description of the item. |
| duration | string | format (`duration`) The duration of the item in ISO 8601 date format. |
| startDate | string | format (`date-time`) the start date-time (ISO 8601 formated) |
| endDate | string | format (`date-time`) the end date-time (ISO 8601 formated) |
| id | string | format (`uri`)  |
| identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |

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
