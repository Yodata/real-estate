---
title: contact#planupdate
---
## Message

*a contact plan (data.object) is updated by a user (data.agent)*

### Payload

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/contact#planupdate",
  "data": {
    "type": "UpdateAction",
    "agent": {
      "type": "Person",
      "name": "string",
      "email": "user@example.com",
      "identifier": {
        "bhhsconsumerid": "12345"
      }
    },
    "object": {
      "type": "Plan",
      "identifier": {
        "bhhsconsumerid": "12345"
      },
      "name": "my awesome plan",
      "description": "this is the description of my awesome plan",
      "member": [
        {
          "type": "Task",
          "identifier": {
            "redEvent_ID": "23445"
          },
          "actionStatus": "PotentialActionStatus",
          "memberOf": {
            "type": "Plan",
            "identifier": {
              "redPlan_ID": "xxxx"
            }
          },
          "agent": {
            "type": "RealEstateAgent",
            "id": "http://user.example.com/profile/card#me"
          },
          "participant": [
            {
              "type": "Contact",
              "name": "Bruce Wayne",
              "email": "bruce@example.com",
              "identifier": {
                "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
              }
            }
          ],
          "name": "Call Ricky",
          "description": "Agenda 1. Something 2. Something Else ...",
          "keywords": [
            "string"
          ],
          "dateDue": "2019-08-24T14:15:22Z",
          "dateCompleted": "2019-08-24T14:15:22Z",
          "location": {
            "type": "Place",
            "address": {
              "streetAddress": "1007 Mountain Gate Rd",
              "addressLocality": "Gotham City",
              "addressRegion": "NJ",
              "postalCode": "10007",
              "addressCounty": "Gotham addressCounty",
              "addressSubdivision": "Gotham Heights"
            }
          }
        }
      ],
      "creator": "http://agent.example.com/profile/card#me",
      "dateCreated": "2019-08-24T14:15:22Z",
      "dateModified": "2019-08-24T14:15:22Z",
      "dateCompleted": "2019-08-24T14:15:22Z"
    }
  }
}
```


| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/contact#planupdate"`)  |
| data | object | - |
| data.type | string | const (`"UpdateAction"`)  |
| data.agent | object |  >= 2 properties |
| data.agent.type | string | const (`"Person"`)  |
| data.agent.name | string | - |
| data.agent.email | string | a valid email address format (`email`) |
| data.agent.identifier | object |  1 properties |
| data.object | object | a collection of related tasks |
| data.object.type | string | const (`"Plan"`)  |
| data.object.identifier | object |  1 properties |
| data.object.name | string | name of the plan |
| data.object.description | string | description of the item |
| data.object.member | array<object> | tasks which make up the plan |
| data.object.member.type | string | allowed (`"Task"`) The item type (Linked-Data @type) |
| data.object.member.identifier | object |  1 properties |
| data.object.member.actionStatus | string | allowed (`"CompletedActionStatus"`, `"FailedActionStatus"`, `"ActiveActionStatus"`, `"PotentialActionStatus"`) disposition of the Action at the time of this action message. |
| data.object.member.memberOf | object | a plan the task is associated with |
| data.object.member.agent | object | the party who completed, or will complete the task |
| data.object.member.participant | array<object> | Other co-agents with a direct or indirect interest in the action. |
| data.object.member.participant (single item) | object | - |
| data.object.member.name | string | name or title |
| data.object.member.description | string | task detailed description |
| data.object.member.keywords | array<string> | - |
| data.object.member.keywords (single item) | string | - |
| data.object.member.dateDue | string | the due date-time (ISO 8601 formated) format (`date-time`) |
| data.object.member.dateCompleted | string | date the task was completed format (`date-time`) |
| data.object.member.location | object | the physical location where an event takes place |
| data.object.creator | any | the item creator |
| data.object.dateCreated | string | The date on which the item was created. format (`date-time`) |
| data.object.dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. format (`date-time`) |
| data.object.dateCompleted | string | The date on which the item was created. format (`date-time`) |

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


