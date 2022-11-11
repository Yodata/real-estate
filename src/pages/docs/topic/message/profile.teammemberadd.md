---
title: profile#teammemberadd
---
## profile#teammemberadd

*a team member was added*

* MessageId: profile#teammemberadd
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
| data.object | allOf | - |
| data.object.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| data.object.0.type | string | a role played by the member in the memberOf group |
| data.object.0.roleName | string | the role name |
| data.object.0.memberOf | object | the org or group where the role is performed |
| data.object.0.member | string | member object or id |
| data.object.0.startDate | string | date the member began performing this role |
| data.object.0.endDate | string | date the member stopped performing the role |
| data.object.1 (allOf item) | object | a membership relationship.  Subclass of OrganizationRole |
| data.object.1.type | string | a member of a real estate team |
| data.object.1.roleName | string | - |
| data.object.1.memberOf | string | - |
| data.object.1.member | string | - |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/profile#teammemberadd",
  "data": {
    "type": "AddAction",
    "object": {
      "type": "RealEstateTeamMembership",
      "roleName": "TeamMember",
      "memberOf": "https://{team-id}.example.com/profile/card#me",
      "member": "https://{agent}.example.com/profile/card#me",
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z"
    }
  }
}
```


