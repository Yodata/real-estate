---
title: Schedule
---
## Example



```json
{
  "type": "string",
  "byDay": [
    "Monday",
    "Wednesday",
    "Friday"
  ],
  "byMonth": [
    1
  ],
  "byMonthDay": [
    0
  ]
}
```

## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | A schedule defines a repeating time period used to describe a regularly occurring Event. At a minimum a schedule will specify repeatFrequency which describes the interval between occurences of the event. Additional information can be provided to specify the schedule more precisely. This includes identifying the day(s) of the week or month when the recurring event will take place, in addition to its start and end time. Schedules may also have start and end dates to indicate when they are active, e.g. to define a limited calendar of events. |
| type | string | The item type (Linked-Data @type) |
| byDay | array<string> | Defines the day(s) of the week on which a recurring Event takes place |
| byDay (single item) | string | allowed (`"Sunday"`, `"Monday"`, `"Tuesday"`, `"Wednesday"`, `"Thursday"`, `"Friday"`)  |
| byMonth | array<number> | Defines the month(s) of the year on which a recurring Event takes place. Specified as an Integer between 1-12. January is 1. |
| byMonth (single item) | number | allowed (`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`)  |
| byMonthDay | array<number> | Defines the day(s) of the month on which a recurring Event takes place. Specified as an Integer between 1-31. |
| byMonthDay (single item) | number | - |

