---
title: Plan
---
## Example



```json
{
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
```
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | a collection of related tasks |
| type | string | const (`"Plan"`)  |
| identifier | object |  1 properties |
| name | string | name of the plan |
| description | string | description of the item |
| member | array<object> | tasks which make up the plan |
| member.type | string | allowed (`"Task"`) The item type (Linked-Data @type) |
| member.identifier | object |  1 properties |
| member.actionStatus | string | allowed (`"CompletedActionStatus"`, `"FailedActionStatus"`, `"ActiveActionStatus"`, `"PotentialActionStatus"`) disposition of the Action at the time of this action message. |
| member.memberOf | object | a plan the task is associated with |
| member.agent | object | the party who completed, or will complete the task |
| member.participant | array<object> | Other co-agents with a direct or indirect interest in the action. |
| member.participant (single item) | object | - |
| member.name | string | name or title |
| member.description | string | task detailed description |
| member.keywords | array<string> | - |
| member.keywords (single item) | string | - |
| member.dateDue | string | the due date-time (ISO 8601 formated) format (`date-time`) |
| member.dateCompleted | string | date the task was completed format (`date-time`) |
| member.location | object | the physical location where an event takes place |
| creator | any | the item creator |
| dateCreated | string | The date on which the item was created. format (`date-time`) |
| dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. format (`date-time`) |
| dateCompleted | string | The date on which the item was created. format (`date-time`) |

