---
title: contact#planupdate
---
## contact#planupdate

*a contact plan (data.object) is updated by a user (data.agent)*

* MessageId: contact#planupdate
* Content type: application/json

### Headers

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| time | string | format (`date-time`) date & time the event was produced |
| agent | string | examples (`"https://teamsupermario.example.com/profile/card#me"`, `"https://bigbrandrealestate.example.com/profile/card#me"`) format (`uri`) if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient |
| instrument | string | examples (`"http://supercrm.example.com/profile/card#me"`, `"http://reliance.example.com/profile/card#me"`, `"http://moxiworks.example.com/profile/card#me"`, `"http://listing-manager.example.com/profile/card#me"`, `"http://ace.example.com/profile/card#me"`, `"http://roqlogic.example.com/profile/card#me"`) format (`uri`) the app or service that produced the event on behalf of the agent/user |
| source | string | examples (`"https://bigbrandrealestate.example.com/profile/card#me"`) format (`uri`) a copy of the event was sent to the source(s). |
| originalRecipient | string | examples (`"http://bigbrandrealestate.example.com/profile/card#me"`, `"http://teamsupermario.example.com/profile/card#me"`, `"http://bob.example.com/profile/card#me"`, `"http://jane.example.com/profile/card#me"`, `"http://joe.example.com/profile/card#me"`, `"http://jill.example.com/profile/card#me"`, `"http://jim.example.com/profile/card#me"`, `"http://jennifer.example.com/profile/card#me"`) format (`uri`) the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source |
| id | string | examples (`"http://supercrm.example.com/publish/12345"`, `"http://reliance.example.com/publish/23456"`, `"http://moxiworks.example.com/publish/34567"`, `"http://listing-manager.example.com/publish/45678"`, `"http://ace.example.com/publish/56789"`, `"http://roqlogic.example.com/publish/67890"`) format (`uri`) the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. |
| @id | string | examples (`"http://reliance.example.com/inbox/23456"`, `"http://moxiworks.example.com/inbox/34567"`, `"http://listing-manager.example.com/inbox/45678"`, `"http://ace.example.com/inbox/56789"`, `"http://roqlogic.example.com/inbox/67890"`) format (`uri`)  |

### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/contact#planupdate"`)  |
| data | object | - |
| data.type | string | const (`"UpdateAction"`)  |
| data.agent | object | >= 2 properties  |
| data.agent.type | string | const (`"Person"`)  |
| data.agent.name | string | the name of the item |
| data.agent.email | string | format (`email`)  |
| data.agent.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.object | object | a collection of related tasks |
| data.object.type | string | const (`"Plan"`)  |
| data.object.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.object.name | string | examples (`"my awesome plan"`, `"annoying but effective plan"`, `"plan to take over the world"`, `"birthdays and anniversaries plan"`) name of the plan |
| data.object.description | string | description of the item |
| data.object.member | array<object> | tasks which make up the plan |
| data.object.member.type | string | allowed (`"Task"`) The item type (Linked-Data @type) |
| data.object.member.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.object.member.actionStatus | string | allowed (`"CompletedActionStatus"`, `"FailedActionStatus"`, `"ActiveActionStatus"`, `"PotentialActionStatus"`) disposition of the Action at the time of this action message. |
| data.object.member.memberOf | object | a plan the task is associated with |
| data.object.member.agent | object | the party who completed, or will complete the task |
| data.object.member.participant | array<object> | Other co-agents with a direct or indirect interest in the action. |
| data.object.member.participant (single item) | object | - |
| data.object.member.name | string | name or title |
| data.object.member.description | string | task detailed description |
| data.object.member.keywords | array<string> | - |
| data.object.member.keywords (single item) | string | - |
| data.object.member.dateDue | string | format (`date-time`) the due date-time (ISO 8601 formated) |
| data.object.member.dateCompleted | string | format (`date-time`) date the task was completed |
| data.object.member.location | object | the physical location where an event takes place |
| data.object.creator | any | the item creator |
| data.object.dateCreated | string | format (`date-time`) The date on which the item was created. |
| data.object.dateModified | string | format (`date-time`) The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. |
| data.object.dateCompleted | string | format (`date-time`) The date on which the item was created. |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


