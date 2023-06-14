---
title: postingdelete
x-scope: realestate/blog#
summary: a blog post was deleted
---

## Message

_a blog post was deleted_

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/blog#postingdelete",
  "data": {
    "type": "DeleteAction",
    "object": {
      "type": "BlogPosting",
      "identifier": {
        "aempostid": "xxxx"
      }
    }
  }
}
```

## Payload

| Name                   | Type   | Description                             |
| ---------------------- | ------ | --------------------------------------- |
| (root)                 | object | -                                       |
| topic                  | string | const ("realestate/blog#postingdelete") |
| data                   | object | -                                       |
| data.type              | string | const ("DeleteAction")                  |
| data.object            | object | A blog post.                            |
| data.object.type       | string | const ("BlogPosting")                   |
| data.object.identifier | object | 1 property                              |

## Headers

| Name              | Type   | Description                                                                    |
| ----------------- | ------ | ------------------------------------------------------------------------------ |
| (root)            | object | -                                                                              |
| time              | string | date & time the event was produced format (`date-time`)                        |
| agent             | string | the user, team or organization who sent the event format (`uri`)               |
| instrument        | string | the service which created the event format (`uri`)                             |
| source            | string | an agent, team or organization who received a copy of the event format (`uri`) |
| originalRecipient | string | the original recipient of the event with this id format (`uri`)                |
| id                | string | the shared identifier of the event, aka the event id format (`uri`)            |
| @id               | string | the URL of your instance of the event in your inbox format (`uri`)             |

## Tools

- [Mock Data Generator](/tools/mock-data-generator)
- [Schema Validator](/tools/validate)

```
Please let me know if there's anything else I can assist you with!
```
