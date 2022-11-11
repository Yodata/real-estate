---
title: marketing#programmemberremove
---
## marketing#programmemberremove

*the agent removed a program member (deleted the membership)*

* MessageId: marketing#programmemberremove
* Content type: application/json

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


### Headers

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| time | string | date & time the event was produced |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient |
| instrument | string | the app or service that produced the event on behalf of the agent/user |
| source | string | a copy of the event was sent to the source(s). |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. |
| @id | string | - |

### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.agent | string | - |
| data.object | object | describes membership relation between a member (Person) and a MarketingProgram |
| data.object.type | string | - |
| data.object.role | string | - |
| data.object.member | object | - |
| data.object.member.type | string | - |
| data.object.member.name | string | - |
| data.object.member.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object.memberOf | object | - |
| data.object.memberOf.type | string | - |
| data.object.memberOf.name | string | - |
| data.object.memberOf.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.targetCollection | any | - |

> Examples of payload _(generated)_

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
          "salesforceid": "0031U00002XW1QWQA1"
        }
      },
      "memberOf": {
        "type": "MarketingProgram",
        "name": "Market Activity Report 508 Homewood Ave",
        "identifier": {
          "salesforceid": "0031U00002XW1QWQA1"
        }
      }
    },
    "targetCollection": null
  }
}
```


