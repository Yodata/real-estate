---
title: Task
route: /types/Task
menu: Types
---# Task
an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | The item type (Linked-Data @type)  |
| identifier | object | key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.  |
| actionStatus | string | disposition of the Action at the time of this action message. <br/>RANGE: [CompletedActionStatus](/types/CompletedActionStatus), [FailedActionStatus](/types/FailedActionStatus), [ActiveActionStatus](/types/ActiveActionStatus), [PotentialActionStatus](/types/PotentialActionStatus) |
| memberOf | object | a plan the task is associated with <br/>RANGE: [Plan](/types/Plan) |
| agent | object | the party who completed, or will complete the task <br/>RANGE: [Person](/types/Person), [Organization](/types/Organization), [RealEstateAgent](/types/RealEstateAgent), [Contact](/types/Contact) |
| participant | [object] | Other co-agents with a direct or indirect interest in the action. <br/>RANGE: [Person](/types/Person), [RealEstateAgent](/types/RealEstateAgent), [RealEstateTeam](/types/RealEstateTeam), [RealEstateOrganization](/types/RealEstateOrganization) |
| name | string | name or title  |
| description | string | task detailed description  |
| keywords | [string] | keywords/tags for grouping and organizing the item in collections  |
| dateDue | string&lt;date-time&gt;  | the due date-time (ISO 8601 formated)  |
| dateCompleted | string&lt;date-time&gt;  | date the task was completed  |
| location | object | the physical location where an event takes place <br/>RANGE: [Place](/types/Place) |

### Example
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
    "Sphere of Influence",
    "Past Customer"
  ],
  "dateDue": "2022-10-12T01:13:43Z",
  "dateCompleted": "2022-10-12T01:13:43Z",
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