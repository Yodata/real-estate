---
title: CloudEvent
route: /types/CloudEvent
menu: Types
---# CloudEvent

## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the event.data schema  |
| time | string&lt;date-time&gt; ! | date & time the event was produced  |
| agent | string&lt;uri&gt; ! | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt; ! | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object | event payload, typically an Action  |

### Example
```json
{
  "topic": "string",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {}
}
```
