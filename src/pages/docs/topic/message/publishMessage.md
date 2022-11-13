---
title: publishMessage
---
## Message

### Payload

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/{topic}#{event}",
  "recipient": "https://staging.example.com/profile/card#me",
  "source": "https://{user}.example.com/profile/card#me",
  "data": {}
}
```


| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | event group |
| recipient | string | event publisher format (`uri`) |
| source | string | agent, office or company assoicated with the event. format (`uri`) |
| data | object | event payload |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


