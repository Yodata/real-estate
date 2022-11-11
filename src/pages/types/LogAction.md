---
title: LogAction
---
| Name | Type | Description |
|---|---|---|
| (root) | object | a LogAction should be produced at the end of service execution |
| LogAction.type | string | the action type (LogAction) |
| LogAction.actionStatus | string | CompletedActionStatus \| FailedActionStatus |
| LogAction.object | object | the data input |
| LogAction.result | object | the output of a sucessful execution |
| LogAction.error | object | details the error of an unsucessful execution |
| LogAction.error.message | string | the error message |
| LogAction.error.stack | string | the error stack |

> Examples of LogAction

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


