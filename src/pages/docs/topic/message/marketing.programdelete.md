---
title: marketing#programdelete
---
## Message

*a marketing program was deleted*

* MessageId: marketing#programdelete
* Content type: application/json

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

### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/marketing#programdelete"`)  |
| data | object | - |
| data.type | string | const (`"DeleteAction"`)  |
| data.agent | oneOf | the direct performer or driver of the action. |
| data.agent.0 (oneOf item) | string |  format (`uri`) |
| data.agent.1 (oneOf item) | object | - |
| data.object | object | describes membership relation between a member (Person) and a MarketingProgram |
| data.object.type | string | const (`"ProgramMembership"`)  |
| data.object.role | string | allowed (`"member"`, `"owner"`)  |
| data.object.member | object | - |
| data.object.member.type | string | const (`"Contact"`)  |
| data.object.member.name | string | - |
| data.object.member.identifier | object |  1 properties |
| data.object.memberOf | object | - |
| data.object.memberOf.type | string | const (`"MarketingProgram"`)  |
| data.object.memberOf.name | string | - |
| data.object.memberOf.identifier | object |  1 properties |

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/marketing#programdelete",
  "data": {
    "type": "DeleteAction",
    "agent": "http://{user}.example.com/profile/card#me",
    "object": {
      "type": "ProgramMembership",
      "role": "member",
      "member": {
        "type": "Contact",
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
    }
  }
}
```


### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


