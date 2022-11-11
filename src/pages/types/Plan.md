---
title: Plan
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | a collection of related tasks |
| type | string | const (`"Plan"`)  |
| identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| name | string | examples (`"my awesome plan"`, `"annoying but effective plan"`, `"plan to take over the world"`, `"birthdays and anniversaries plan"`) name of the plan |
| description | string | description of the item |
| member | array<object> | tasks which make up the plan |
| member.type | string | allowed (`"Task"`) The item type (Linked-Data @type) |
| member.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| member.actionStatus | string | allowed (`"CompletedActionStatus"`, `"FailedActionStatus"`, `"ActiveActionStatus"`, `"PotentialActionStatus"`) disposition of the Action at the time of this action message. |
| member.memberOf | object | a plan the task is associated with |
| member.agent | object | the party who completed, or will complete the task |
| member.participant | array<object> | Other co-agents with a direct or indirect interest in the action. |
| member.participant (single item) | object | - |
| member.name | string | name or title |
| member.description | string | task detailed description |
| member.keywords | array<string> | - |
| member.keywords (single item) | string | - |
| member.dateDue | string | format (`date-time`) the due date-time (ISO 8601 formated) |
| member.dateCompleted | string | format (`date-time`) date the task was completed |
| member.location | object | the physical location where an event takes place |
| creator | any | the item creator |
| dateCreated | string | format (`date-time`) The date on which the item was created. |
| dateModified | string | format (`date-time`) The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. |
| dateCompleted | string | format (`date-time`) The date on which the item was created. |

## Example



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
