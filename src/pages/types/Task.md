---
title: Task
---
| Name | Type | Description |
|---|---|---|
| (root) | object | an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan |
| type | string | The item type (Linked-Data @type) |
| identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| actionStatus | string | disposition of the Action at the time of this action message. |
| memberOf | object | a plan the task is associated with |
| agent | object | the party who completed, or will complete the task |
| participant | array<object> | Other co-agents with a direct or indirect interest in the action. |
| participant (single item) | object | - |
| name | string | name or title |
| description | string | task detailed description |
| keywords | array<string> | - |
| keywords (single item) | string | - |
| dateDue | string | the due date-time (ISO 8601 formated) |
| dateCompleted | string | date the task was completed |
| location | object | the physical location where an event takes place |

> Examples of Task

```json
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
```


