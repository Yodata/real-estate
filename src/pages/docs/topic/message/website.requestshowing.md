---
title: website#requestshowing
---
## website#requestshowing

*a website visitor has requested a property showing*

* MessageId: website#requestshowing
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
| topic | string | const (`"realestate/website#requestshowing"`)  |
| data | object | - |
| data.type | string | const (`"RequestShowingAction"`)  |
| data.agent | object | a website user/visitor |
| data.agent.type | string | allowed (`"Person"`, `"Contact"`)  |
| data.agent.name | string | - |
| data.agent.givenName | string | - |
| data.agent.familyName | string | - |
| data.agent.email | string | format (`email`)  |
| data.agent.telephone | string | - |
| data.agent.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.agent.sameAs | string | examples (`{"amcecrmid":1234567,"salesForceId":"parsing"}`, `{"salesForceId":"ad4fa5f4as"}`) format (`uri`) vendor specific identifier for the user can be shared with other vendors to identify the user |
| data.agent.contactPoint | object | >= 3 properties A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. |
| data.agent.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.agent.contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.agent.contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.agent.contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.agent.contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| data.agent.contactPoint.url | string | format (`uri`) primary URL for the item. |
| data.agent.additionalProperties | object | additional properties for the website user |
| data.agent.additionalProperties.workingWithAgent | boolean | - |
| data.about | object | the PropertyListing |
| data.event | object | An event happening at a certain time and location |
| data.event.type | string | The item type (Linked-Data @type) |
| data.event.name | string | name of the event |
| data.event.description | string | event message content |
| data.event.about | object | a subject of the meeting or event |
| data.event.startDate | string | format (`date-time`) the start date-time (ISO 8601 formated) |
| data.event.endDate | string | format (`date-time`) the end date-time (ISO 8601 formated) |
| data.event.organizer | object | the event organizer |
| data.object | object | A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document. |
| data.object.type | string | const (`"Question"`)  |
| data.object.text | string | examples (`"Populus debet control notitia sua"`, `"Aspicio pinguem in his vestimentis?"`, `"Et id ipsum vitae."`, `"Amici, Romani et cives, aures vestras mihi praebe"`, `"Heus, ego iustus occurrit tibi et hoc est insanus, sed hic numerus meus est, ut me vocas fortasse."`)  |
| data.recipient | object | examples (`{"type":"RealEstateAgent","name":"John Smith","id":"https://agentsmith.example.com/profile/card#me","identifier":{"hsfid":"1234567890"}}`, `{"type":"RealEstateTeam","name":"Smith & Smith","id":"https://smithandsmith.example.com/profile/card#me"}`, `{"type":"RealEstateOrganization","name":"Smith & Smith Real Estate","identifier":{"hsfid":"sandsre"}}`, `{"type":"RealEstateOrganization","name":"Smith & Smith Real Estate"}`, `{"type":"RealEstateOrganization","id":"https://smithandsmithrealestate.example.com/profile/card#me"}`)  |
| data.recipient.type | string | allowed (`"RealEstateAgent"`, `"RealEstateTeam"`, `"RealEstateOrganization"`)  |
| data.recipient.name | string | - |
| data.recipient.id | string | format (`uri`)  |
| data.recipient.identifier | any | - |
| topic | string | const (`"realestate/website#requestshowing"`)  |
| data | object | - |
| data.type | string | const (`"RequestShowingAction"`)  |
| data.agent | object | a website user/visitor |
| data.agent.type | string | allowed (`"Person"`, `"Contact"`)  |
| data.agent.name | string | - |
| data.agent.givenName | string | - |
| data.agent.familyName | string | - |
| data.agent.email | string | format (`email`)  |
| data.agent.telephone | string | - |
| data.agent.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.agent.sameAs | string | examples (`{"amcecrmid":1234567,"salesForceId":"parsing"}`, `{"salesForceId":"ad4fa5f4as"}`) format (`uri`) vendor specific identifier for the user can be shared with other vendors to identify the user |
| data.agent.contactPoint | object | >= 3 properties A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. |
| data.agent.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.agent.contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.agent.contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.agent.contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.agent.contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| data.agent.contactPoint.url | string | format (`uri`) primary URL for the item. |
| data.agent.additionalProperties | object | additional properties for the website user |
| data.agent.additionalProperties.workingWithAgent | boolean | - |
| data.about | object | the PropertyListing |
| data.event | object | An event happening at a certain time and location |
| data.event.type | string | The item type (Linked-Data @type) |
| data.event.name | string | name of the event |
| data.event.description | string | event message content |
| data.event.about | object | a subject of the meeting or event |
| data.event.startDate | string | format (`date-time`) the start date-time (ISO 8601 formated) |
| data.event.endDate | string | format (`date-time`) the end date-time (ISO 8601 formated) |
| data.event.organizer | object | the event organizer |
| data.object | object | A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document. |
| data.object.type | string | const (`"Question"`)  |
| data.object.text | string | examples (`"Populus debet control notitia sua"`, `"Aspicio pinguem in his vestimentis?"`, `"Et id ipsum vitae."`, `"Amici, Romani et cives, aures vestras mihi praebe"`, `"Heus, ego iustus occurrit tibi et hoc est insanus, sed hic numerus meus est, ut me vocas fortasse."`)  |
| data.recipient | object | examples (`{"type":"RealEstateAgent","name":"John Smith","id":"https://agentsmith.example.com/profile/card#me","identifier":{"hsfid":"1234567890"}}`, `{"type":"RealEstateTeam","name":"Smith & Smith","id":"https://smithandsmith.example.com/profile/card#me"}`, `{"type":"RealEstateOrganization","name":"Smith & Smith Real Estate","identifier":{"hsfid":"sandsre"}}`, `{"type":"RealEstateOrganization","name":"Smith & Smith Real Estate"}`, `{"type":"RealEstateOrganization","id":"https://smithandsmithrealestate.example.com/profile/card#me"}`)  |
| data.recipient.type | string | allowed (`"RealEstateAgent"`, `"RealEstateTeam"`, `"RealEstateOrganization"`)  |
| data.recipient.name | string | - |
| data.recipient.id | string | format (`uri`)  |
| data.recipient.identifier | any | - |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


