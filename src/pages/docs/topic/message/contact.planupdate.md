---
title: contact#planupdate
---
## Message contact#planupdate `contact#planupdate`

*a contact plan (data.object) is updated by a user (data.agent)*

* Message ID: `contact#planupdate`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

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

> Examples of headers _(generated)_

```json
{
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://teamsupermario.example.com/profile/card#me",
  "instrument": "http://supercrm.example.com/profile/card#me",
  "source": "https://bigbrandrealestate.example.com/profile/card#me",
  "originalRecipient": "http://bigbrandrealestate.example.com/profile/card#me",
  "id": "http://supercrm.example.com/publish/12345",
  "@id": "http://reliance.example.com/inbox/23456"
}
```


### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.agent | object | - |
| data.agent.type | string | - |
| data.agent.name | string | the name of the item |
| data.agent.email | string | - |
| data.agent.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object | object | a collection of related tasks |
| data.object.type | string | - |
| data.object.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object.name | string | name of the plan |
| data.object.description | string | description of the item |
| data.object.member | array<object> | tasks which make up the plan |
| data.object.member.type | string | The item type (Linked-Data @type) |
| data.object.member.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object.member.actionStatus | string | disposition of the Action at the time of this action message. |
| data.object.member.memberOf | object | a plan the task is associated with |
| data.object.member.agent | object | the party who completed, or will complete the task |
| data.object.member.participant | array<object> | Other co-agents with a direct or indirect interest in the action. |
| data.object.member.participant (single item) | object | - |
| data.object.member.name | string | name or title |
| data.object.member.description | string | task detailed description |
| data.object.member.keywords | array<string> | - |
| data.object.member.keywords (single item) | string | - |
| data.object.member.dateDue | string | the due date-time (ISO 8601 formated) |
| data.object.member.dateCompleted | string | date the task was completed |
| data.object.member.location | object | the physical location where an event takes place |
| data.object.creator | any | the item creator |
| data.object.dateCreated | string | The date on which the item was created. |
| data.object.dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. |
| data.object.dateCompleted | string | The date on which the item was created. |

> Examples of payload _(generated)_

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
        "salesforceid": "0031U00002XW1QWQA1"
      }
    },
    "object": {
      "type": "Plan",
      "identifier": {
        "salesforceid": "0031U00002XW1QWQA1"
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


