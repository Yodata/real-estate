---
title: contact#add
---
## contact#add

*a contact (data.object) is added by a user (data.agent), optionally to a specific targetCollection*

* MessageId: contact#add
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
| topic | string | const (`"realestate/contact#add"`)  |
| data | object | - |
| data.type | string | const (`"AddAction"`)  |
| data.agent | object | >= 2 properties  |
| data.agent.type | string | const (`"Person"`)  |
| data.agent.name | string | the name of the item |
| data.agent.email | string | format (`email`)  |
| data.agent.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.object | allOf | - |
| data.object.0 (allOf item) | object | - |
| data.object.0.type | string | - |
| data.object.0.affiliation | array<string> | An organization that this person is affiliated with |
| data.object.0.affiliation (single item) | string | format (`uri`)  |
| data.object.0.address | array<object> | - |
| data.object.0.address.type | string | const (`"PostalAddress"`)  |
| data.object.0.address.streetAddress | string | examples (`"5046 Ottis Point"`, `"166 Marion Burg"`, `"93044 Haley Stream"`) the street number and name. |
| data.object.0.address.postOfficeBoxNumber | string | examples (`"Box 1234"`, `"Apt. 161"`, `"Apt. 623"`) The post office box number for PO box addresses. |
| data.object.0.address.addressRegion | string | examples (`"New Jersey"`, `"California"`, `"MI"`, `null`) State or Province. |
| data.object.0.address.addressLocality | string | examples (`"Gotham City"`, `"Kulasmouth"`, `"Heidistad"`, `"Altamonte Springs"`, `"West Ahmed"`, `"Blaiseview"`) City, Township. |
| data.object.0.address.postalCode | string | examples (`"10010"`, `"38859"`, `"40387"`, `"50239-7698"`, `null`) Zip/Post Code |
| data.object.0.address.addressCountry | string | examples (`"USA"`, `"TH"`, `"NZ"`, `"EG"`, `"SJ"`, `"VN"`) The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| data.object.0.address.addressCounty | string | examples (`"Gotham County"`, `"Buckinghamshire"`, `"Borders"`, `null`) the county (us real estate extension) |
| data.object.0.address.addressSubdivision | string | examples (`"Gotham Heights"`, `"South Kensington"`, `"SOMA (South of Market)"`, `"Nob Hill"`) the subdivision or neighborhood (us real estate extension) |
| data.object.0.birthDate | string | format (`date`) date of birth. |
| data.object.0.contactPoint | array<object> | contact points for the person |
| data.object.0.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.object.0.contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.object.0.contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.0.contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.0.contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| data.object.0.contactPoint.url | string | format (`uri`) primary URL for the item. |
| data.object.0.email | string | format (`email`)  |
| data.object.0.additionalName | string | examples (`"Johnny,John"`, `"Prince,The Artist Formerly Known as Prince,The Artist"`, `"Babs,Barbara"`, `"Katheryn Elizabeth Hudson,Katy Perry"`, `"Destiny Hope Cyrus,Miley Cyrus"`) any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| data.object.0.familyName | string | examples (`"Smith"`, `"Jones"`, `"Parker"`, `"Monk"`, `"Brown"`, `"Miller"`, `"Davis"`, `"Wilson"`, `"Fitzgerald"`, `"Johnson"`, `"Williams"`) <= 50 characters Last Name of a person. [Family Name](https://schema.org/familyName) |
| data.object.0.faxNumber | string | Do people still use fax machines? |
| data.object.0.givenName | string | examples (`"John"`, `"Jane"`, `"Mary"`, `"Joseph"`, `"William"`, `"David"`, `"Richard"`, `"Charles"`, `"Thomas"`, `"Christopher"`, `"Daniel"`, `"Matthew"`, `"Anthony"`, `"Donald"`, `"Mark"`, `"Paul"`, `"Steven"`, `"Andrew"`, `"Kenneth"`, `"George"`, `"Joshua"`, `"Kevin"`, `"Brian"`, `"Edward"`, `"Ronald"`, `"Timothy"`, `"Jason"`, `"Jeffrey"`, `"Ryan"`, `"Jacob"`) First Name of a person |
| data.object.0.honorificPrefix | string | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. |
| data.object.0.honorificSuffix | string | An honorific title following a person's name like M.D. |
| data.object.0.jobTitle | array<string> | job tiles associated with the item |
| data.object.0.jobTitle (single item) | string | - |
| data.object.0.knowsLanguage | array<object> | languages spoken by the person |
| data.object.0.knowsLanguage.type | string | const (`"Language"`)  |
| data.object.0.knowsLanguage.name | string | the display name of the language |
| data.object.0.knowsLanguage.additionalName | string | BCP 47 language code |
| data.object.0.name | string | Full name of the person. |
| data.object.0.telephone | string | Primary phone number. |
| data.object.0.worksFor | string | Organizations the person works for. |
| data.object.1 (allOf item) | - | a CRM contact. |
| data.object.1.type | string | const (`"Contact"`)  |
| data.object.1.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.object.1.additionalProperty | object | additionalProperty are |
| data.object.1.comment | array<object> | comments by, for or about the item |
| data.object.1.comment (single item) | object | - |
| data.object.1.jobTitle | string | examples (`"CEO"`, `"Sales Manager"`, `"Escrow Officer"`, `"Transaction Coordinator"`, `"Director of Marketing"`, `"Senior Loan Officer"`, `"Loan Officer"`, `"Sanitation Engineer"`, `"Owner"`, `"Cofounder"`, `"Founder"`, `"President"`, `"Vice President of Sales"`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`) The job title of the person (for example, Financial Manager). |
| data.object.1.contactGroup | array<object> | - |
| data.object.1.contactGroup.type | string | allowed (`"ContactGroup"`, `"Collection"`)  |
| data.object.1.contactGroup.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.object.1.contactGroup.name | string | examples (`"Past Clients"`, `"Prospects"`, `"Leads"`, `"Referrals"`, `"Friends"`, `"Family"`, `"Neighbors"`, `"Business Associates"`, `"Personal"`)  |
| data.object.1.keywords | array<string> | - |
| data.object.1.keywords (single item) | string | - |
| data.object.1.leadOwner | object | lead owner |
| data.object.1.leadSource | object | origin of the lead |
| data.object.1.originatingSystem | object | examples (`{"type":"SoftwareApplication","name":"RDesk","description":"User Created.","url":"http://www.rdeskwebsite.com/"}`) the original system where this item was created.  Can be of type Thing or any sub-type. |
| data.object.1.dateCreated | string | format (`date-time`) The date on which the item was created. |
| data.object.1.dateModified | string | format (`date-time`) The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


