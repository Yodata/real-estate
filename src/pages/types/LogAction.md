---
title: LogAction
---
## Example



```json
{
  "type": "string",
  "actionStatus": "CompletedActionStatus",
  "object": {
    "topic": "realestate/contact#add",
    "data": {
      "type": "AddAction",
      "object": {
        "name": "Bob Smith",
        "email": "bob@example.com"
      }
    }
  },
  "result": {},
  "error": {
    "message": "sorry dave",
    "stack": "string"
  }
}
```
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | a LogAction should be produced at the end of service execution |
| type | string | the action type (LogAction) |
| actionStatus | string | allowed (`"CompletedActionStatus"`, `"FailedActionStatus"`) CompletedActionStatus \| FailedActionStatus |
| object | object | the data input |
| result | object | the output of a sucessful execution |
| error | object | details the error of an unsucessful execution |
| error.message | string | the error message |
| error.stack | string | the error stack |

