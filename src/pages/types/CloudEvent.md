---
title: CloudEvent
---
| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | the event topic which determines the event.data schema |
| time | string | date & time the event was produced |
| agent | string | the user, team, or organization who sent the event |
| instrument | string | the service which created the event |
| source | string | an agent, team or organization who received a copy of the event |
| originalRecipient | string | the original recipient of the event with this id |
| id | string | the shared identifier of the event, akd the event id |
| @id | string | the url of your instance of the event in your inbox |
| data | object | event payload, typically an Action |

> Examples of CloudEvent

```json
{
  "topic": "string",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {}
}
```


