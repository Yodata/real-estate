---
title: award#publish
---
## award#publish

*an award was published*

* MessageId: award#publish
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
| topic | string | allowed (`"realestate/award#seriescreate"`, `"realestate/award#seriesupdate"`, `"realestate/award#seriesdelete"`, `"realestate/award#create"`, `"realestate/award#delete"`, `"realestate/award#teamcreate"`, `"realestate/award#teamupdate"`, `"realestate/award#teamdelete"`, `"realestate/award#teammemberadd"`, `"realestate/award#teammemberremove"`)  |
| data | object | - |
| data.type | string | allowed (`"CreateAction"`, `"UpdateAction"`, `"DeleteAction"`, `"AddAction"`, `"RemoveAction"`)  |
| data.object | oneOf | - |
| data.object.0 (oneOf item) | object | an award bestowed at regular intervals |
| data.object.0.type | string | const (`"AwardSeries"`)  |
| data.object.0.name | string | name of the series |
| data.object.0.description | string | description of the item. |
| data.object.0.duration | string | format (`duration`) The duration of the item in ISO 8601 date format. |
| data.object.0.startDate | string | format (`date-time`) the start date-time (ISO 8601 formated) |
| data.object.0.endDate | string | format (`date-time`) the end date-time (ISO 8601 formated) |
| data.object.0.id | string | format (`uri`)  |
| data.object.0.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.object.1 (oneOf item) | object | An honor bestowed on one or mote _recipients_ by the message _agent_ |
| data.object.1.type | string | allowed (`"Award"`) "AwardAction" |
| data.object.1.name | string | name of the award |
| data.object.1.dateAwarded | string | format (`date-time`) date the award was presented or announced. |
| data.object.1.agent | string | format (`uri`) the agent that presented the award |
| data.object.1.recipient | array<object> | recipients of the award |
| data.object.1.recipient.type | string | allowed (`"RealEstateAgent"`, `"RealEstateOffice"`, `"RealEstateOrganization"`)  |
| data.object.1.recipient.id | string | format (`uri`)  |
| data.object.1.recipient.name | string | the name of the award recipient |
| data.object.1.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.object.2 (oneOf item) | object | a Collection |
| data.object.2.type | string | const (`"AwardTeam"`)  |
| data.object.2.name | string | the name of the item |
| data.object.2.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.object.2.member | array<string> | members of the AwardTeam |
| data.object.2.member (single item) | string | examples (`"http://12345.example.com/profile/card#me"`, `"http://ma302-001.example.com/profile/card#me"`, `"http://ma302.example.com/profile/card#me"`) format (`uri`)  |
| data.object.3 (oneOf item) | string | format (`uri`)  |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


