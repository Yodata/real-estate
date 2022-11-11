---
title: Plan
---
| Name | Type | Description |
|---|---|---|
| (root) | object | a collection of related tasks |
| Plan.type | string | - |
| Plan.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| Plan.name | string | name of the plan |
| Plan.description | string | description of the item |
| Plan.member | array<object> | tasks which make up the plan |
| Plan.member.type | string | The item type (Linked-Data @type) |
| Plan.member.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| Plan.member.actionStatus | string | disposition of the Action at the time of this action message. |
| Plan.member.memberOf | object | a plan the task is associated with |
| Plan.member.agent | object | the party who completed, or will complete the task |
| Plan.member.participant | array<object> | Other co-agents with a direct or indirect interest in the action. |
| Plan.member.participant (single item) | object | - |
| Plan.member.name | string | name or title |
| Plan.member.description | string | task detailed description |
| Plan.member.keywords | array<string> | - |
| Plan.member.keywords (single item) | string | - |
| Plan.member.dateDue | string | the due date-time (ISO 8601 formated) |
| Plan.member.dateCompleted | string | date the task was completed |
| Plan.member.location | object | the physical location where an event takes place |
| Plan.creator | any | the item creator |
| Plan.dateCreated | string | The date on which the item was created. |
| Plan.dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. |
| Plan.dateCompleted | string | The date on which the item was created. |

> Examples of Plan

```json
{
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
```


