---
title: marketing#programmemberremove
---
## Message

*the agent removed a program member (deleted the membership)*

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/marketing#programmemberremove",
  "data": {
    "type": "DeleteAction",
    "agent": "http://example.com",
    "object": {
      "type": "ProgramMembership",
      "role": "member",
      "member": {
        "type": "Person",
        "name": "string",
        "identifier": {
          "bhhsconsumerid": "12345"
        }
      },
      "memberOf": {
        "type": "MarketingProgram",
        "name": "Market Activity Report 508 Homewood Ave",
        "identifier": {
          "bhhsconsumerid": "12345"
        }
      }
    },
    "targetCollection": null
  }
}
```



### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/marketing#programmemberremove"`)  |
| data | object | - |
| data.type | string | const (`"DeleteAction"`)  |
| data.agent | string |  format (`uri`) |
| data.object | object | describes membership relation between a member (Person) and a MarketingProgram |
| data.object.type | string | const (`"ProgramMembership"`)  |
| data.object.role | string | allowed (`"member"`, `"owner"`)  |
| data.object.member | object | - |
| data.object.member.type | string | allowed (`"Person"`, `"Contact"`)  |
| data.object.member.name | string | - |
| data.object.member.identifier | object |  1 properties |
| data.object.memberOf | object | - |
| data.object.memberOf.type | string | const (`"MarketingProgram"`)  |
| data.object.memberOf.name | string | - |
| data.object.memberOf.identifier | object |  1 properties |
| data.targetCollection | any | - |

### Headers

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| time | string | date & time the event was produced format (`date-time`) |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient format (`uri`) |
| instrument | string | the app or service that produced the event on behalf of the agent/user format (`uri`) |
| source | string | a copy of the event was sent to the source(s). format (`uri`) |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source format (`uri`) |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. format (`uri`) |
| @id | string |  format (`uri`) |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


