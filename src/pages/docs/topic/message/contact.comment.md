---
title: contact#comment
---
## contact#comment

*a comment (data.object) is added by a user (data.agent) to a contact (data.target)*

* MessageId: contact#comment
* Content type: application/json

### Headers

| Name | Type | Description |
|---|---|---|
| - | object | - |
| time | string | format (`date-time`) date & time the event was produced |
| agent | string | examples (`"https://teamsupermario.example.com/profile/card#me"`, `"https://bigbrandrealestate.example.com/profile/card#me"`) format (`uri`) if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient |
| instrument | string | examples (`"http://supercrm.example.com/profile/card#me"`, `"http://reliance.example.com/profile/card#me"`, `"http://moxiworks.example.com/profile/card#me"`, `"http://listing-manager.example.com/profile/card#me"`, `"http://ace.example.com/profile/card#me"`, `"http://roqlogic.example.com/profile/card#me"`) format (`uri`) the app or service that produced the event on behalf of the agent/user |
| source | string | examples (`"https://bigbrandrealestate.example.com/profile/card#me"`) format (`uri`) a copy of the event was sent to the source(s). |
| originalRecipient | string | examples (`"http://bigbrandrealestate.example.com/profile/card#me"`, `"http://teamsupermario.example.com/profile/card#me"`, `"http://bob.example.com/profile/card#me"`, `"http://jane.example.com/profile/card#me"`, `"http://joe.example.com/profile/card#me"`, `"http://jill.example.com/profile/card#me"`, `"http://jim.example.com/profile/card#me"`, `"http://jennifer.example.com/profile/card#me"`) format (`uri`) the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source |
| id | string | examples (`"http://supercrm.example.com/publish/12345"`, `"http://reliance.example.com/publish/23456"`, `"http://moxiworks.example.com/publish/34567"`, `"http://listing-manager.example.com/publish/45678"`, `"http://ace.example.com/publish/56789"`, `"http://roqlogic.example.com/publish/67890"`) format (`uri`) the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. |
| @id | string | examples (`"http://reliance.example.com/inbox/23456"`, `"http://moxiworks.example.com/inbox/34567"`, `"http://listing-manager.example.com/inbox/45678"`, `"http://ace.example.com/inbox/56789"`, `"http://roqlogic.example.com/inbox/67890"`) format (`uri`)  |
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
| - | object | - |
| topic | string | const (`"realestate/contact#comment"`)  |
| data | object | - |
| data.type | string | const (`"CommentAction"`)  |
| data.agent | object | >= 2 properties  |
| data.agent.type | string | const (`"Person"`)  |
| data.agent.name | string | the name of the item |
| data.agent.email | string | format (`email`)  |
| data.agent.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.object | object | A comment on an item. |
| data.object.type | string | const (`"Comment"`)  |
| data.object.dateCreated | string | format (`date-time`) The date on which the item was created. |
| data.object.dateModified | string | format (`date-time`) The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. |
| data.object.dateDeleted | string | format (`date-time`) The date on which the item was deleted. |
| data.object.text | string | examples (`"Populus debet control notitia sua"`, `"Aspicio pinguem in his vestimentis?"`, `"Et id ipsum vitae."`, `"Amici, Romani et cives, aures vestras mihi praebe"`, `"Heus, ego iustus occurrit tibi et hoc est insanus, sed hic numerus meus est, ut me vocas fortasse."`)  |
| data.object.author | object | examples (`{"type":"Contact","name":"Mark Twain","identifier":{"originatingSystemName":"originating-system-id"}}`, `{"type":"RealEstateAgent","name":"Andy Warhol","identifier":{"originatingSystemName":"originating-system-id"}}`, `{"name":"Stan Lee"}`, `{"email":"bob@example.com"}`, `{"telephone":"1-800-555-1212"}`) the author of something |
| data.object.about | object | examples (`{"type":"PropertyListing","streetAddress":"123 Main Street","addressLocality":"Anytown","addressRegion":"NY","postalCode":12345,"addressCountry":"US","identifier":{"originatingSystemName":"originatingsystemid"}}`) The subject of the content |
| data.object.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.target | object | - |
| data.target.type | string | const (`"Contact"`)  |
| data.target.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| topic | string | const (`"realestate/contact#comment"`)  |
| data | object | - |
| data.type | string | const (`"CommentAction"`)  |
| data.agent | object | >= 2 properties  |
| data.agent.type | string | const (`"Person"`)  |
| data.agent.name | string | the name of the item |
| data.agent.email | string | format (`email`)  |
| data.agent.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.object | object | A comment on an item. |
| data.object.type | string | const (`"Comment"`)  |
| data.object.dateCreated | string | format (`date-time`) The date on which the item was created. |
| data.object.dateModified | string | format (`date-time`) The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. |
| data.object.dateDeleted | string | format (`date-time`) The date on which the item was deleted. |
| data.object.text | string | examples (`"Populus debet control notitia sua"`, `"Aspicio pinguem in his vestimentis?"`, `"Et id ipsum vitae."`, `"Amici, Romani et cives, aures vestras mihi praebe"`, `"Heus, ego iustus occurrit tibi et hoc est insanus, sed hic numerus meus est, ut me vocas fortasse."`)  |
| data.object.author | object | examples (`{"type":"Contact","name":"Mark Twain","identifier":{"originatingSystemName":"originating-system-id"}}`, `{"type":"RealEstateAgent","name":"Andy Warhol","identifier":{"originatingSystemName":"originating-system-id"}}`, `{"name":"Stan Lee"}`, `{"email":"bob@example.com"}`, `{"telephone":"1-800-555-1212"}`) the author of something |
| data.object.about | object | examples (`{"type":"PropertyListing","streetAddress":"123 Main Street","addressLocality":"Anytown","addressRegion":"NY","postalCode":12345,"addressCountry":"US","identifier":{"originatingSystemName":"originatingsystemid"}}`) The subject of the content |
| data.object.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.target | object | - |
| data.target.type | string | const (`"Contact"`)  |
| data.target.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


