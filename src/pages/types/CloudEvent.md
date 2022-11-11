---
title: CloudEvent
---
## Schema

| Name | Type | Description |
|---|---|---|
| (CloudEvent) | object | - |
| topic | string | the event topic which determines the event.data schema |
| time | string | date & time the event was produced <span class='constraints'>format (`date-time`)</span> |
| agent | string | the user, team, or organization who sent the event <span class='constraints'>format (`uri`)</span> |
| instrument | string | the service which created the event <span class='constraints'>format (`uri`)</span> |
| source | string | an agent, team or organization who received a copy of the event <span class='constraints'>format (`uri`)</span> |
| originalRecipient | string | the original recipient of the event with this id <span class='constraints'>format (`uri`)</span> |
| id | string | the shared identifier of the event, akd the event id <span class='constraints'>format (`uri`)</span> |
| @id | string | the url of your instance of the event in your inbox <span class='constraints'>format (`uri`)</span> |
| data | object | event payload, typically an Action |
| topic | string | the event topic which determines the event.data schema |
| time | string | date & time the event was produced <span class='constraints'>format (`date-time`)</span> |
| agent | string | the user, team, or organization who sent the event <span class='constraints'>format (`uri`)</span> |
| instrument | string | the service which created the event <span class='constraints'>format (`uri`)</span> |
| source | string | an agent, team or organization who received a copy of the event <span class='constraints'>format (`uri`)</span> |
| originalRecipient | string | the original recipient of the event with this id <span class='constraints'>format (`uri`)</span> |
| id | string | the shared identifier of the event, akd the event id <span class='constraints'>format (`uri`)</span> |
| @id | string | the url of your instance of the event in your inbox <span class='constraints'>format (`uri`)</span> |
| data | object | event payload, typically an Action |

## Example



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
