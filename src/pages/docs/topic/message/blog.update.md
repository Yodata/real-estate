# Event Specification: postingupdate

## Description

A blog post was updated.

## Payload

| Name                   | Type   | Description                             |
| ---------------------- | ------ | --------------------------------------- |
| (root)                 | object | -                                       |
| topic                  | string | const ("realestate/blog#postingupdate") |
| data                   | object | -                                       |
| data.type              | string | const ("UpdateAction")                  |
| data.object            | object | A blog post.                            |
| data.object.type       | string | const ("BlogPosting")                   |
| data.object.identifier | object | 1 property                              |

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/blog#postingupdate",
  "data": {
    "type": "UpdateAction",
    "object": {
      "type": "BlogPosting"
    }
  }
}
```

**Headers**

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

**Headers Example**

```
{
  "time": "2023-06-14T10:30:00Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx"
}


```

## Tools

- [Mock Data Generator](/tools/mock-data-generator)
- [Schema Validator](/tools/validate)
