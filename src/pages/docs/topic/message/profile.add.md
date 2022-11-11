---
title: profile#add
---
## profile#add

*an agent, office or organization profile was added*

* MessageId: profile#add
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
| topic | string | const (`"realestate/profile#add"`)  |
| data | - | - |
| data.type | string | const (`"AddAction"`)  |
| data.object | oneOf | - |
| data.object.0 (oneOf item) | object | A real estate agent who represents buyers and sellers |
| data.object.0.type | string | const (`"RealEstateAgent"`)  |
| data.object.0.additionalName | string | examples (`"Johnny,John"`, `"Prince,The Artist Formerly Known as Prince,The Artist"`, `"Babs,Barbara"`, `"Katheryn Elizabeth Hudson,Katy Perry"`, `"Destiny Hope Cyrus,Miley Cyrus"`) any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| data.object.0.address | object | A physical address. |
| data.object.0.certification | object | A certification issued by an organization to an individual or business. |
| data.object.0.certification.type | string | allowed (`"Certification"`) Certification |
| data.object.0.certification.name | string | the name of the Certification |
| data.object.0.certification.issuedBy | object | the issuing authority |
| data.object.0.certification.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| data.object.0.certification.issuedBy.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.0.certification.issuedBy.name | string | name of the issuing organization |
| data.object.0.certification.issuedTo | object | the subject |
| data.object.0.certification.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| data.object.0.certification.issuedTo.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.0.certification.issuedTo.name | string | the name of the item |
| data.object.0.contactPoint | object | >= 3 properties A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. |
| data.object.0.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.object.0.contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.object.0.contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.0.contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.0.contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| data.object.0.contactPoint.url | string | format (`uri`) primary URL for the item. |
| data.object.0.email | string | format (`email`)  |
| data.object.0.familyName | string | examples (`"Smith"`, `"Jones"`, `"Parker"`, `"Monk"`, `"Brown"`, `"Miller"`, `"Davis"`, `"Wilson"`, `"Fitzgerald"`, `"Johnson"`, `"Williams"`) <= 50 characters Last Name of a person. [Family Name](https://schema.org/familyName) |
| data.object.0.givenName | string | examples (`"John"`, `"Jane"`, `"Mary"`, `"Joseph"`, `"William"`, `"David"`, `"Richard"`, `"Charles"`, `"Thomas"`, `"Christopher"`, `"Daniel"`, `"Matthew"`, `"Anthony"`, `"Donald"`, `"Mark"`, `"Paul"`, `"Steven"`, `"Andrew"`, `"Kenneth"`, `"George"`, `"Joshua"`, `"Kevin"`, `"Brian"`, `"Edward"`, `"Ronald"`, `"Timothy"`, `"Jason"`, `"Jeffrey"`, `"Ryan"`, `"Jacob"`) First Name of a person |
| data.object.0.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.0.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.object.0.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.0.image.0 (index) | object allOf | - |
| data.object.0.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.0.image.0.0.0 (allOf item) | object | - |
| data.object.0.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.0.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.0.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.0.image.0.0.1 (allOf item) | - | - |
| data.object.0.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.0.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| data.object.0.image.0.0.1.name | string | the file name of the object. |
| data.object.0.image.0.0.1.encodingFormat | string | MIME type |
| data.object.0.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| data.object.0.image.0.0.1.url | string | format (`uri`) URL of the image content |
| data.object.0.image.0.1 (allOf item) | - | - |
| data.object.0.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.object.0.image.0.1.id | any | - |
| data.object.0.image.0.1.name | any | - |
| data.object.0.image.0.1.encodingFormat | any | - |
| data.object.0.jobTitle | array<string> | - |
| data.object.0.jobTitle (single item) | string | examples (`"CEO"`, `"Sales Manager"`, `"Escrow Officer"`, `"Transaction Coordinator"`, `"Director of Marketing"`, `"Senior Loan Officer"`, `"Loan Officer"`, `"Sanitation Engineer"`, `"Owner"`, `"Cofounder"`, `"Founder"`, `"President"`, `"Vice President of Sales"`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`) The job title of the person (for example, Financial Manager). |
| data.object.0.memberOf | array<anyOf> | an Organization (or ProgramMembership) to which this Person or Organization belongs. |
| data.object.0.memberOf (single item) | anyOf | - |
| data.object.0.memberOf.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| data.object.0.memberOf.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.0.memberOf.0.roleName | string | the role name |
| data.object.0.memberOf.0.memberOf | object | the org or group where the role is performed |
| data.object.0.memberOf.0.member | string | format (`uri`) member object or id |
| data.object.0.memberOf.0.startDate | string | format (`date-time`) date the member began performing this role |
| data.object.0.memberOf.0.endDate | string | format (`date-time`) date the member stopped performing the role |
| data.object.0.memberOf.1 (anyOf item) | string | format (`uri`)  |
| data.object.0.name | string | the name of the item |
| data.object.0.parentOrganization | array<string> | organizations of which this org is a part. |
| data.object.0.parentOrganization (single item) | string | format (`uri`)  |
| data.object.0.permit | object | A permit issued by an organization to an individual or business. |
| data.object.0.permit.type | string | allowed (`"Permit"`) Permit type. |
| data.object.0.permit.name | string | Common or display value of the Permit. |
| data.object.0.permit.issuedBy | object | The issuing authority |
| data.object.0.permit.issuedThrough | object | the service through which the permit was granted |
| data.object.0.permit.validIn | object | - |
| data.object.0.permit.validFrom | string | format (`date-time`) start date |
| data.object.0.permit.validUntil | string | format (`date-time`) end date |
| data.object.0.subOrganization | array<string> | child organizations of the organization |
| data.object.0.subOrganization (single item) | string | format (`uri`)  |
| data.object.0.url | string | format (`uri`) URL of the item. |
| data.object.1 (oneOf item) | object allOf | A real estate office / place of business. |
| data.object.1.0 (allOf item) | allOf | - |
| data.object.1.0.0 (allOf item) | allOf | - |
| data.object.1.0.0.0 (allOf item) | object | - |
| data.object.1.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.1.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.1.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.1.0.0.1 (allOf item) | any | - |
| data.object.1.0.0.2 (allOf item) | any | - |
| data.object.1.0.0.3 (allOf item) | - | - |
| data.object.1.0.0.3.address | object | A physical address. |
| data.object.1.0.0.3.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| data.object.1.0.0.3.availableLanguage.type | string | const (`"Language"`)  |
| data.object.1.0.0.3.availableLanguage.name | string | the display name of the language |
| data.object.1.0.0.3.availableLanguage.additionalName | string | BCP 47 language code |
| data.object.1.0.0.3.branchCode | string | A short textual code that uniquely identifies a place of business. |
| data.object.1.0.0.3.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| data.object.1.0.0.3.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| data.object.1.0.0.3.certification.0.type | string | allowed (`"Certification"`) Certification |
| data.object.1.0.0.3.certification.0.name | string | the name of the Certification |
| data.object.1.0.0.3.certification.0.issuedBy | object | the issuing authority |
| data.object.1.0.0.3.certification.0.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| data.object.1.0.0.3.certification.0.issuedBy.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.1.0.0.3.certification.0.issuedBy.name | string | name of the issuing organization |
| data.object.1.0.0.3.certification.0.issuedTo | object | the subject |
| data.object.1.0.0.3.certification.0.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| data.object.1.0.0.3.certification.0.issuedTo.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.1.0.0.3.certification.0.issuedTo.name | string | the name of the item |
| data.object.1.0.0.3.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| data.object.1.0.0.3.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.object.1.0.0.3.contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.object.1.0.0.3.contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.1.0.0.3.contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.1.0.0.3.contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| data.object.1.0.0.3.contactPoint.url | string | format (`uri`) primary URL for the item. |
| data.object.1.0.0.3.email | string | format (`email`)  |
| data.object.1.0.0.3.faxNumber | string | Do people still use fax machines? |
| data.object.1.0.0.3.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.1.0.0.3.image.0 (index) | object allOf | - |
| data.object.1.0.0.3.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.1.0.0.3.image.0.0.0 (allOf item) | object | - |
| data.object.1.0.0.3.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.1.0.0.3.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.1.0.0.3.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.1.0.0.3.image.0.0.1 (allOf item) | - | - |
| data.object.1.0.0.3.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.1.0.0.3.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| data.object.1.0.0.3.image.0.0.1.name | string | the file name of the object. |
| data.object.1.0.0.3.image.0.0.1.encodingFormat | string | MIME type |
| data.object.1.0.0.3.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| data.object.1.0.0.3.image.0.0.1.url | string | format (`uri`) URL of the image content |
| data.object.1.0.0.3.image.0.1 (allOf item) | - | - |
| data.object.1.0.0.3.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.object.1.0.0.3.image.0.1.id | any | - |
| data.object.1.0.0.3.image.0.1.name | any | - |
| data.object.1.0.0.3.image.0.1.encodingFormat | any | - |
| data.object.1.0.0.3.logo | array<object allOf> | a logo associated with the organization. |
| data.object.1.0.0.3.logo (single item) | object allOf | - |
| data.object.1.0.0.3.logo.0 (allOf item) | object | an electronic file. |
| data.object.1.0.0.3.logo.0.type | string | allowed (`"DigitalDocument"`)  |
| data.object.1.0.0.3.logo.0.id | string | - |
| data.object.1.0.0.3.logo.0.name | string | document name or title |
| data.object.1.0.0.3.logo.0.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| data.object.1.0.0.3.logo.0.about | object | subject of the Document |
| data.object.1.0.0.3.logo.0.url | string | public URL of the object |
| data.object.1.0.0.3.logo.1 (allOf item) | object | an associated logo |
| data.object.1.0.0.3.name | string | Name or DBA. |
| data.object.1.0.0.3.parentOrganization | array<string> | - |
| data.object.1.0.0.3.parentOrganization (single item) | string | format (`uri`)  |
| data.object.1.0.0.3.subOrganization | array<string> | a child organization |
| data.object.1.0.0.3.subOrganization (single item) | string | format (`uri`)  |
| data.object.1.0.0.3.telephone | string | Primary phone number. |
| data.object.1.0.0.3.type | string | allowed (`"Organization"`)  |
| data.object.1.0.0.3.url | string | format (`uri`) primary website/url for the entity. |
| data.object.1.0.1 (allOf item) | - | A real estate franchisor, broker or business |
| data.object.1.0.1.type | string | allowed (`"RealEstateOrganization"`, `"RealEstateOffice"`, `"RealEstateAgent"`) RealEstateOrganzation |
| data.object.1.0.1.areaServed | object | the physical areas that make up the ServiceArea |
| data.object.1.0.1.description | string | description of the item. |
| data.object.1.0.1.parentOrganization | array<string> | A franchisor or affiliate network of which this organization plays a membership role. |
| data.object.1.0.1.parentOrganization (single item) | string | format (`uri`)  |
| data.object.1.0.1.numberOfSubOrganizations | number | the number of offices for an affiliate. |
| data.object.1.0.1.member | array<anyOf> | A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. |
| data.object.1.0.1.member (single item) | anyOf | - |
| data.object.1.0.1.member.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| data.object.1.0.1.member.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.1.0.1.member.0.roleName | string | the role name |
| data.object.1.0.1.member.0.memberOf | object | the org or group where the role is performed |
| data.object.1.0.1.member.0.member | string | format (`uri`) member object or id |
| data.object.1.0.1.member.0.startDate | string | format (`date-time`) date the member began performing this role |
| data.object.1.0.1.member.0.endDate | string | format (`date-time`) date the member stopped performing the role |
| data.object.1.0.1.member.1 (anyOf item) | string | format (`uri`)  |
| data.object.1.0.1.memberOf | array<allOf> | An Organization (or ProgramMembership) to which this Person or Organization belongs. |
| data.object.1.0.1.memberOf (single item) | allOf | - |
| data.object.1.0.1.memberOf.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| data.object.1.0.1.memberOf.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.1.0.1.memberOf.0.roleName | string | the role name |
| data.object.1.0.1.memberOf.0.memberOf | object | the org or group where the role is performed |
| data.object.1.0.1.memberOf.0.member | string | format (`uri`) member object or id |
| data.object.1.0.1.memberOf.0.startDate | string | format (`date-time`) date the member began performing this role |
| data.object.1.0.1.memberOf.0.endDate | string | format (`date-time`) date the member stopped performing the role |
| data.object.1.0.1.memberOf.1 (allOf item) | object | a membership relationship |
| data.object.1.0.1.memberOf.1.type | string | allowed (`"MLSMembership"`) an MLS member relationship |
| data.object.1.0.1.memberOf.1.roleName | string | - |
| data.object.1.0.1.memberOf.1.memberOf | object | - |
| data.object.1.0.1.memberOf.1.member | string | format (`uri`)  |
| data.object.1.0.1.memberOf.1.memberId | string | the user's MLSID |
| data.object.1.0.1.permit | array<object> | - |
| data.object.1.0.1.permit (single item) | object | - |
| data.object.1.1 (allOf item) | - | - |
| data.object.1.1.type | string | allowed (`"RealEstateOffice"`) RealEstateOffice |
| data.object.1.1.contactPoint | any | department or role specific contact points, i.e. relocation. |
| data.object.1.1.description | any | - |
| data.object.1.1.parentOrganization | any | Office broker or franchisor. |
| data.object.1.1.subOrganization | array<string> | Agents and teams associated with the office. |
| data.object.1.1.subOrganization (single item) | string | format (`uri`)  |
| data.object.1.1.geoCoordinates | object | a lat/long point. |
| data.object.1.1.geoCoordinates.type | string | allowed (`"GeoCoordinates"`) GeoCordinates |
| data.object.1.1.geoCoordinates.longitude | number | The longitude of a location. |
| data.object.1.1.geoCoordinates.latitude | number | The latitude of a location. |
| data.object.2 (oneOf item) | allOf | - |
| data.object.2.0 (allOf item) | allOf | - |
| data.object.2.0.0 (allOf item) | object | - |
| data.object.2.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.2.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.2.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.2.0.1 (allOf item) | any | - |
| data.object.2.0.2 (allOf item) | any | - |
| data.object.2.0.3 (allOf item) | - | - |
| data.object.2.0.3.address | object | A physical address. |
| data.object.2.0.3.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| data.object.2.0.3.availableLanguage.type | string | const (`"Language"`)  |
| data.object.2.0.3.availableLanguage.name | string | the display name of the language |
| data.object.2.0.3.availableLanguage.additionalName | string | BCP 47 language code |
| data.object.2.0.3.branchCode | string | A short textual code that uniquely identifies a place of business. |
| data.object.2.0.3.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| data.object.2.0.3.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| data.object.2.0.3.certification.0.type | string | allowed (`"Certification"`) Certification |
| data.object.2.0.3.certification.0.name | string | the name of the Certification |
| data.object.2.0.3.certification.0.issuedBy | object | the issuing authority |
| data.object.2.0.3.certification.0.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| data.object.2.0.3.certification.0.issuedBy.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.2.0.3.certification.0.issuedBy.name | string | name of the issuing organization |
| data.object.2.0.3.certification.0.issuedTo | object | the subject |
| data.object.2.0.3.certification.0.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| data.object.2.0.3.certification.0.issuedTo.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.2.0.3.certification.0.issuedTo.name | string | the name of the item |
| data.object.2.0.3.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| data.object.2.0.3.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.object.2.0.3.contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.object.2.0.3.contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.2.0.3.contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.2.0.3.contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| data.object.2.0.3.contactPoint.url | string | format (`uri`) primary URL for the item. |
| data.object.2.0.3.email | string | format (`email`)  |
| data.object.2.0.3.faxNumber | string | Do people still use fax machines? |
| data.object.2.0.3.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.2.0.3.image.0 (index) | object allOf | - |
| data.object.2.0.3.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.2.0.3.image.0.0.0 (allOf item) | object | - |
| data.object.2.0.3.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.2.0.3.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.2.0.3.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.2.0.3.image.0.0.1 (allOf item) | - | - |
| data.object.2.0.3.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.2.0.3.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| data.object.2.0.3.image.0.0.1.name | string | the file name of the object. |
| data.object.2.0.3.image.0.0.1.encodingFormat | string | MIME type |
| data.object.2.0.3.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| data.object.2.0.3.image.0.0.1.url | string | format (`uri`) URL of the image content |
| data.object.2.0.3.image.0.1 (allOf item) | - | - |
| data.object.2.0.3.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.object.2.0.3.image.0.1.id | any | - |
| data.object.2.0.3.image.0.1.name | any | - |
| data.object.2.0.3.image.0.1.encodingFormat | any | - |
| data.object.2.0.3.logo | array<object allOf> | a logo associated with the organization. |
| data.object.2.0.3.logo (single item) | object allOf | - |
| data.object.2.0.3.logo.0 (allOf item) | object | an electronic file. |
| data.object.2.0.3.logo.0.type | string | allowed (`"DigitalDocument"`)  |
| data.object.2.0.3.logo.0.id | string | - |
| data.object.2.0.3.logo.0.name | string | document name or title |
| data.object.2.0.3.logo.0.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| data.object.2.0.3.logo.0.about | object | subject of the Document |
| data.object.2.0.3.logo.0.url | string | public URL of the object |
| data.object.2.0.3.logo.1 (allOf item) | object | an associated logo |
| data.object.2.0.3.name | string | Name or DBA. |
| data.object.2.0.3.parentOrganization | array<string> | - |
| data.object.2.0.3.parentOrganization (single item) | string | format (`uri`)  |
| data.object.2.0.3.subOrganization | array<string> | a child organization |
| data.object.2.0.3.subOrganization (single item) | string | format (`uri`)  |
| data.object.2.0.3.telephone | string | Primary phone number. |
| data.object.2.0.3.type | string | allowed (`"Organization"`)  |
| data.object.2.0.3.url | string | format (`uri`) primary website/url for the entity. |
| data.object.2.1 (allOf item) | - | A real estate franchisor, broker or business |
| data.object.2.1.type | string | allowed (`"RealEstateOrganization"`, `"RealEstateOffice"`, `"RealEstateAgent"`) RealEstateOrganzation |
| data.object.2.1.areaServed | object | the physical areas that make up the ServiceArea |
| data.object.2.1.description | string | description of the item. |
| data.object.2.1.parentOrganization | array<string> | A franchisor or affiliate network of which this organization plays a membership role. |
| data.object.2.1.parentOrganization (single item) | string | format (`uri`)  |
| data.object.2.1.numberOfSubOrganizations | number | the number of offices for an affiliate. |
| data.object.2.1.member | array<anyOf> | A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. |
| data.object.2.1.member (single item) | anyOf | - |
| data.object.2.1.member.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| data.object.2.1.member.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.2.1.member.0.roleName | string | the role name |
| data.object.2.1.member.0.memberOf | object | the org or group where the role is performed |
| data.object.2.1.member.0.member | string | format (`uri`) member object or id |
| data.object.2.1.member.0.startDate | string | format (`date-time`) date the member began performing this role |
| data.object.2.1.member.0.endDate | string | format (`date-time`) date the member stopped performing the role |
| data.object.2.1.member.1 (anyOf item) | string | format (`uri`)  |
| data.object.2.1.memberOf | array<allOf> | An Organization (or ProgramMembership) to which this Person or Organization belongs. |
| data.object.2.1.memberOf (single item) | allOf | - |
| data.object.2.1.memberOf.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| data.object.2.1.memberOf.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.2.1.memberOf.0.roleName | string | the role name |
| data.object.2.1.memberOf.0.memberOf | object | the org or group where the role is performed |
| data.object.2.1.memberOf.0.member | string | format (`uri`) member object or id |
| data.object.2.1.memberOf.0.startDate | string | format (`date-time`) date the member began performing this role |
| data.object.2.1.memberOf.0.endDate | string | format (`date-time`) date the member stopped performing the role |
| data.object.2.1.memberOf.1 (allOf item) | object | a membership relationship |
| data.object.2.1.memberOf.1.type | string | allowed (`"MLSMembership"`) an MLS member relationship |
| data.object.2.1.memberOf.1.roleName | string | - |
| data.object.2.1.memberOf.1.memberOf | object | - |
| data.object.2.1.memberOf.1.member | string | format (`uri`)  |
| data.object.2.1.memberOf.1.memberId | string | the user's MLSID |
| data.object.2.1.permit | array<object> | - |
| data.object.2.1.permit (single item) | object | - |
| topic | string | const (`"realestate/profile#add"`)  |
| data | - | - |
| data.type | string | const (`"AddAction"`)  |
| data.object | oneOf | - |
| data.object.0 (oneOf item) | object | A real estate agent who represents buyers and sellers |
| data.object.0.type | string | const (`"RealEstateAgent"`)  |
| data.object.0.additionalName | string | examples (`"Johnny,John"`, `"Prince,The Artist Formerly Known as Prince,The Artist"`, `"Babs,Barbara"`, `"Katheryn Elizabeth Hudson,Katy Perry"`, `"Destiny Hope Cyrus,Miley Cyrus"`) any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| data.object.0.address | object | A physical address. |
| data.object.0.certification | object | A certification issued by an organization to an individual or business. |
| data.object.0.certification.type | string | allowed (`"Certification"`) Certification |
| data.object.0.certification.name | string | the name of the Certification |
| data.object.0.certification.issuedBy | object | the issuing authority |
| data.object.0.certification.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| data.object.0.certification.issuedBy.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.0.certification.issuedBy.name | string | name of the issuing organization |
| data.object.0.certification.issuedTo | object | the subject |
| data.object.0.certification.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| data.object.0.certification.issuedTo.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.0.certification.issuedTo.name | string | the name of the item |
| data.object.0.contactPoint | object | >= 3 properties A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. |
| data.object.0.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.object.0.contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.object.0.contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.0.contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.0.contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| data.object.0.contactPoint.url | string | format (`uri`) primary URL for the item. |
| data.object.0.email | string | format (`email`)  |
| data.object.0.familyName | string | examples (`"Smith"`, `"Jones"`, `"Parker"`, `"Monk"`, `"Brown"`, `"Miller"`, `"Davis"`, `"Wilson"`, `"Fitzgerald"`, `"Johnson"`, `"Williams"`) <= 50 characters Last Name of a person. [Family Name](https://schema.org/familyName) |
| data.object.0.givenName | string | examples (`"John"`, `"Jane"`, `"Mary"`, `"Joseph"`, `"William"`, `"David"`, `"Richard"`, `"Charles"`, `"Thomas"`, `"Christopher"`, `"Daniel"`, `"Matthew"`, `"Anthony"`, `"Donald"`, `"Mark"`, `"Paul"`, `"Steven"`, `"Andrew"`, `"Kenneth"`, `"George"`, `"Joshua"`, `"Kevin"`, `"Brian"`, `"Edward"`, `"Ronald"`, `"Timothy"`, `"Jason"`, `"Jeffrey"`, `"Ryan"`, `"Jacob"`) First Name of a person |
| data.object.0.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.0.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| data.object.0.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.0.image.0 (index) | object allOf | - |
| data.object.0.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.0.image.0.0.0 (allOf item) | object | - |
| data.object.0.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.0.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.0.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.0.image.0.0.1 (allOf item) | - | - |
| data.object.0.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.0.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| data.object.0.image.0.0.1.name | string | the file name of the object. |
| data.object.0.image.0.0.1.encodingFormat | string | MIME type |
| data.object.0.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| data.object.0.image.0.0.1.url | string | format (`uri`) URL of the image content |
| data.object.0.image.0.1 (allOf item) | - | - |
| data.object.0.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.object.0.image.0.1.id | any | - |
| data.object.0.image.0.1.name | any | - |
| data.object.0.image.0.1.encodingFormat | any | - |
| data.object.0.jobTitle | array<string> | - |
| data.object.0.jobTitle (single item) | string | examples (`"CEO"`, `"Sales Manager"`, `"Escrow Officer"`, `"Transaction Coordinator"`, `"Director of Marketing"`, `"Senior Loan Officer"`, `"Loan Officer"`, `"Sanitation Engineer"`, `"Owner"`, `"Cofounder"`, `"Founder"`, `"President"`, `"Vice President of Sales"`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`) The job title of the person (for example, Financial Manager). |
| data.object.0.memberOf | array<anyOf> | an Organization (or ProgramMembership) to which this Person or Organization belongs. |
| data.object.0.memberOf (single item) | anyOf | - |
| data.object.0.memberOf.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| data.object.0.memberOf.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.0.memberOf.0.roleName | string | the role name |
| data.object.0.memberOf.0.memberOf | object | the org or group where the role is performed |
| data.object.0.memberOf.0.member | string | format (`uri`) member object or id |
| data.object.0.memberOf.0.startDate | string | format (`date-time`) date the member began performing this role |
| data.object.0.memberOf.0.endDate | string | format (`date-time`) date the member stopped performing the role |
| data.object.0.memberOf.1 (anyOf item) | string | format (`uri`)  |
| data.object.0.name | string | the name of the item |
| data.object.0.parentOrganization | array<string> | organizations of which this org is a part. |
| data.object.0.parentOrganization (single item) | string | format (`uri`)  |
| data.object.0.permit | object | A permit issued by an organization to an individual or business. |
| data.object.0.permit.type | string | allowed (`"Permit"`) Permit type. |
| data.object.0.permit.name | string | Common or display value of the Permit. |
| data.object.0.permit.issuedBy | object | The issuing authority |
| data.object.0.permit.issuedThrough | object | the service through which the permit was granted |
| data.object.0.permit.validIn | object | - |
| data.object.0.permit.validFrom | string | format (`date-time`) start date |
| data.object.0.permit.validUntil | string | format (`date-time`) end date |
| data.object.0.subOrganization | array<string> | child organizations of the organization |
| data.object.0.subOrganization (single item) | string | format (`uri`)  |
| data.object.0.url | string | format (`uri`) URL of the item. |
| data.object.1 (oneOf item) | object allOf | A real estate office / place of business. |
| data.object.1.0 (allOf item) | allOf | - |
| data.object.1.0.0 (allOf item) | allOf | - |
| data.object.1.0.0.0 (allOf item) | object | - |
| data.object.1.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.1.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.1.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.1.0.0.1 (allOf item) | any | - |
| data.object.1.0.0.2 (allOf item) | any | - |
| data.object.1.0.0.3 (allOf item) | - | - |
| data.object.1.0.0.3.address | object | A physical address. |
| data.object.1.0.0.3.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| data.object.1.0.0.3.availableLanguage.type | string | const (`"Language"`)  |
| data.object.1.0.0.3.availableLanguage.name | string | the display name of the language |
| data.object.1.0.0.3.availableLanguage.additionalName | string | BCP 47 language code |
| data.object.1.0.0.3.branchCode | string | A short textual code that uniquely identifies a place of business. |
| data.object.1.0.0.3.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| data.object.1.0.0.3.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| data.object.1.0.0.3.certification.0.type | string | allowed (`"Certification"`) Certification |
| data.object.1.0.0.3.certification.0.name | string | the name of the Certification |
| data.object.1.0.0.3.certification.0.issuedBy | object | the issuing authority |
| data.object.1.0.0.3.certification.0.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| data.object.1.0.0.3.certification.0.issuedBy.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.1.0.0.3.certification.0.issuedBy.name | string | name of the issuing organization |
| data.object.1.0.0.3.certification.0.issuedTo | object | the subject |
| data.object.1.0.0.3.certification.0.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| data.object.1.0.0.3.certification.0.issuedTo.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.1.0.0.3.certification.0.issuedTo.name | string | the name of the item |
| data.object.1.0.0.3.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| data.object.1.0.0.3.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.object.1.0.0.3.contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.object.1.0.0.3.contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.1.0.0.3.contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.1.0.0.3.contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| data.object.1.0.0.3.contactPoint.url | string | format (`uri`) primary URL for the item. |
| data.object.1.0.0.3.email | string | format (`email`)  |
| data.object.1.0.0.3.faxNumber | string | Do people still use fax machines? |
| data.object.1.0.0.3.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.1.0.0.3.image.0 (index) | object allOf | - |
| data.object.1.0.0.3.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.1.0.0.3.image.0.0.0 (allOf item) | object | - |
| data.object.1.0.0.3.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.1.0.0.3.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.1.0.0.3.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.1.0.0.3.image.0.0.1 (allOf item) | - | - |
| data.object.1.0.0.3.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.1.0.0.3.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| data.object.1.0.0.3.image.0.0.1.name | string | the file name of the object. |
| data.object.1.0.0.3.image.0.0.1.encodingFormat | string | MIME type |
| data.object.1.0.0.3.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| data.object.1.0.0.3.image.0.0.1.url | string | format (`uri`) URL of the image content |
| data.object.1.0.0.3.image.0.1 (allOf item) | - | - |
| data.object.1.0.0.3.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.object.1.0.0.3.image.0.1.id | any | - |
| data.object.1.0.0.3.image.0.1.name | any | - |
| data.object.1.0.0.3.image.0.1.encodingFormat | any | - |
| data.object.1.0.0.3.logo | array<object allOf> | a logo associated with the organization. |
| data.object.1.0.0.3.logo (single item) | object allOf | - |
| data.object.1.0.0.3.logo.0 (allOf item) | object | an electronic file. |
| data.object.1.0.0.3.logo.0.type | string | allowed (`"DigitalDocument"`)  |
| data.object.1.0.0.3.logo.0.id | string | - |
| data.object.1.0.0.3.logo.0.name | string | document name or title |
| data.object.1.0.0.3.logo.0.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| data.object.1.0.0.3.logo.0.about | object | subject of the Document |
| data.object.1.0.0.3.logo.0.url | string | public URL of the object |
| data.object.1.0.0.3.logo.1 (allOf item) | object | an associated logo |
| data.object.1.0.0.3.name | string | Name or DBA. |
| data.object.1.0.0.3.parentOrganization | array<string> | - |
| data.object.1.0.0.3.parentOrganization (single item) | string | format (`uri`)  |
| data.object.1.0.0.3.subOrganization | array<string> | a child organization |
| data.object.1.0.0.3.subOrganization (single item) | string | format (`uri`)  |
| data.object.1.0.0.3.telephone | string | Primary phone number. |
| data.object.1.0.0.3.type | string | allowed (`"Organization"`)  |
| data.object.1.0.0.3.url | string | format (`uri`) primary website/url for the entity. |
| data.object.1.0.1 (allOf item) | - | A real estate franchisor, broker or business |
| data.object.1.0.1.type | string | allowed (`"RealEstateOrganization"`, `"RealEstateOffice"`, `"RealEstateAgent"`) RealEstateOrganzation |
| data.object.1.0.1.areaServed | object | the physical areas that make up the ServiceArea |
| data.object.1.0.1.description | string | description of the item. |
| data.object.1.0.1.parentOrganization | array<string> | A franchisor or affiliate network of which this organization plays a membership role. |
| data.object.1.0.1.parentOrganization (single item) | string | format (`uri`)  |
| data.object.1.0.1.numberOfSubOrganizations | number | the number of offices for an affiliate. |
| data.object.1.0.1.member | array<anyOf> | A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. |
| data.object.1.0.1.member (single item) | anyOf | - |
| data.object.1.0.1.member.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| data.object.1.0.1.member.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.1.0.1.member.0.roleName | string | the role name |
| data.object.1.0.1.member.0.memberOf | object | the org or group where the role is performed |
| data.object.1.0.1.member.0.member | string | format (`uri`) member object or id |
| data.object.1.0.1.member.0.startDate | string | format (`date-time`) date the member began performing this role |
| data.object.1.0.1.member.0.endDate | string | format (`date-time`) date the member stopped performing the role |
| data.object.1.0.1.member.1 (anyOf item) | string | format (`uri`)  |
| data.object.1.0.1.memberOf | array<allOf> | An Organization (or ProgramMembership) to which this Person or Organization belongs. |
| data.object.1.0.1.memberOf (single item) | allOf | - |
| data.object.1.0.1.memberOf.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| data.object.1.0.1.memberOf.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.1.0.1.memberOf.0.roleName | string | the role name |
| data.object.1.0.1.memberOf.0.memberOf | object | the org or group where the role is performed |
| data.object.1.0.1.memberOf.0.member | string | format (`uri`) member object or id |
| data.object.1.0.1.memberOf.0.startDate | string | format (`date-time`) date the member began performing this role |
| data.object.1.0.1.memberOf.0.endDate | string | format (`date-time`) date the member stopped performing the role |
| data.object.1.0.1.memberOf.1 (allOf item) | object | a membership relationship |
| data.object.1.0.1.memberOf.1.type | string | allowed (`"MLSMembership"`) an MLS member relationship |
| data.object.1.0.1.memberOf.1.roleName | string | - |
| data.object.1.0.1.memberOf.1.memberOf | object | - |
| data.object.1.0.1.memberOf.1.member | string | format (`uri`)  |
| data.object.1.0.1.memberOf.1.memberId | string | the user's MLSID |
| data.object.1.0.1.permit | array<object> | - |
| data.object.1.0.1.permit (single item) | object | - |
| data.object.1.1 (allOf item) | - | - |
| data.object.1.1.type | string | allowed (`"RealEstateOffice"`) RealEstateOffice |
| data.object.1.1.contactPoint | any | department or role specific contact points, i.e. relocation. |
| data.object.1.1.description | any | - |
| data.object.1.1.parentOrganization | any | Office broker or franchisor. |
| data.object.1.1.subOrganization | array<string> | Agents and teams associated with the office. |
| data.object.1.1.subOrganization (single item) | string | format (`uri`)  |
| data.object.1.1.geoCoordinates | object | a lat/long point. |
| data.object.1.1.geoCoordinates.type | string | allowed (`"GeoCoordinates"`) GeoCordinates |
| data.object.1.1.geoCoordinates.longitude | number | The longitude of a location. |
| data.object.1.1.geoCoordinates.latitude | number | The latitude of a location. |
| data.object.2 (oneOf item) | allOf | - |
| data.object.2.0 (allOf item) | allOf | - |
| data.object.2.0.0 (allOf item) | object | - |
| data.object.2.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.2.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.2.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.2.0.1 (allOf item) | any | - |
| data.object.2.0.2 (allOf item) | any | - |
| data.object.2.0.3 (allOf item) | - | - |
| data.object.2.0.3.address | object | A physical address. |
| data.object.2.0.3.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| data.object.2.0.3.availableLanguage.type | string | const (`"Language"`)  |
| data.object.2.0.3.availableLanguage.name | string | the display name of the language |
| data.object.2.0.3.availableLanguage.additionalName | string | BCP 47 language code |
| data.object.2.0.3.branchCode | string | A short textual code that uniquely identifies a place of business. |
| data.object.2.0.3.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| data.object.2.0.3.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| data.object.2.0.3.certification.0.type | string | allowed (`"Certification"`) Certification |
| data.object.2.0.3.certification.0.name | string | the name of the Certification |
| data.object.2.0.3.certification.0.issuedBy | object | the issuing authority |
| data.object.2.0.3.certification.0.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| data.object.2.0.3.certification.0.issuedBy.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.2.0.3.certification.0.issuedBy.name | string | name of the issuing organization |
| data.object.2.0.3.certification.0.issuedTo | object | the subject |
| data.object.2.0.3.certification.0.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| data.object.2.0.3.certification.0.issuedTo.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.2.0.3.certification.0.issuedTo.name | string | the name of the item |
| data.object.2.0.3.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| data.object.2.0.3.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.object.2.0.3.contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.object.2.0.3.contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.2.0.3.contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.2.0.3.contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| data.object.2.0.3.contactPoint.url | string | format (`uri`) primary URL for the item. |
| data.object.2.0.3.email | string | format (`email`)  |
| data.object.2.0.3.faxNumber | string | Do people still use fax machines? |
| data.object.2.0.3.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.2.0.3.image.0 (index) | object allOf | - |
| data.object.2.0.3.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.2.0.3.image.0.0.0 (allOf item) | object | - |
| data.object.2.0.3.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.2.0.3.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.2.0.3.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.2.0.3.image.0.0.1 (allOf item) | - | - |
| data.object.2.0.3.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.2.0.3.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| data.object.2.0.3.image.0.0.1.name | string | the file name of the object. |
| data.object.2.0.3.image.0.0.1.encodingFormat | string | MIME type |
| data.object.2.0.3.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| data.object.2.0.3.image.0.0.1.url | string | format (`uri`) URL of the image content |
| data.object.2.0.3.image.0.1 (allOf item) | - | - |
| data.object.2.0.3.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.object.2.0.3.image.0.1.id | any | - |
| data.object.2.0.3.image.0.1.name | any | - |
| data.object.2.0.3.image.0.1.encodingFormat | any | - |
| data.object.2.0.3.logo | array<object allOf> | a logo associated with the organization. |
| data.object.2.0.3.logo (single item) | object allOf | - |
| data.object.2.0.3.logo.0 (allOf item) | object | an electronic file. |
| data.object.2.0.3.logo.0.type | string | allowed (`"DigitalDocument"`)  |
| data.object.2.0.3.logo.0.id | string | - |
| data.object.2.0.3.logo.0.name | string | document name or title |
| data.object.2.0.3.logo.0.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| data.object.2.0.3.logo.0.about | object | subject of the Document |
| data.object.2.0.3.logo.0.url | string | public URL of the object |
| data.object.2.0.3.logo.1 (allOf item) | object | an associated logo |
| data.object.2.0.3.name | string | Name or DBA. |
| data.object.2.0.3.parentOrganization | array<string> | - |
| data.object.2.0.3.parentOrganization (single item) | string | format (`uri`)  |
| data.object.2.0.3.subOrganization | array<string> | a child organization |
| data.object.2.0.3.subOrganization (single item) | string | format (`uri`)  |
| data.object.2.0.3.telephone | string | Primary phone number. |
| data.object.2.0.3.type | string | allowed (`"Organization"`)  |
| data.object.2.0.3.url | string | format (`uri`) primary website/url for the entity. |
| data.object.2.1 (allOf item) | - | A real estate franchisor, broker or business |
| data.object.2.1.type | string | allowed (`"RealEstateOrganization"`, `"RealEstateOffice"`, `"RealEstateAgent"`) RealEstateOrganzation |
| data.object.2.1.areaServed | object | the physical areas that make up the ServiceArea |
| data.object.2.1.description | string | description of the item. |
| data.object.2.1.parentOrganization | array<string> | A franchisor or affiliate network of which this organization plays a membership role. |
| data.object.2.1.parentOrganization (single item) | string | format (`uri`)  |
| data.object.2.1.numberOfSubOrganizations | number | the number of offices for an affiliate. |
| data.object.2.1.member | array<anyOf> | A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. |
| data.object.2.1.member (single item) | anyOf | - |
| data.object.2.1.member.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| data.object.2.1.member.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.2.1.member.0.roleName | string | the role name |
| data.object.2.1.member.0.memberOf | object | the org or group where the role is performed |
| data.object.2.1.member.0.member | string | format (`uri`) member object or id |
| data.object.2.1.member.0.startDate | string | format (`date-time`) date the member began performing this role |
| data.object.2.1.member.0.endDate | string | format (`date-time`) date the member stopped performing the role |
| data.object.2.1.member.1 (anyOf item) | string | format (`uri`)  |
| data.object.2.1.memberOf | array<allOf> | An Organization (or ProgramMembership) to which this Person or Organization belongs. |
| data.object.2.1.memberOf (single item) | allOf | - |
| data.object.2.1.memberOf.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| data.object.2.1.memberOf.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.2.1.memberOf.0.roleName | string | the role name |
| data.object.2.1.memberOf.0.memberOf | object | the org or group where the role is performed |
| data.object.2.1.memberOf.0.member | string | format (`uri`) member object or id |
| data.object.2.1.memberOf.0.startDate | string | format (`date-time`) date the member began performing this role |
| data.object.2.1.memberOf.0.endDate | string | format (`date-time`) date the member stopped performing the role |
| data.object.2.1.memberOf.1 (allOf item) | object | a membership relationship |
| data.object.2.1.memberOf.1.type | string | allowed (`"MLSMembership"`) an MLS member relationship |
| data.object.2.1.memberOf.1.roleName | string | - |
| data.object.2.1.memberOf.1.memberOf | object | - |
| data.object.2.1.memberOf.1.member | string | format (`uri`)  |
| data.object.2.1.memberOf.1.memberId | string | the user's MLSID |
| data.object.2.1.permit | array<object> | - |
| data.object.2.1.permit (single item) | object | - |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


