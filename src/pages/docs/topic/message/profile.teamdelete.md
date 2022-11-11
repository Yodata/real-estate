---
title: profile#teamdelete
---
## profile#teamdelete

*a team profile was created*

* MessageId: profile#teamdelete
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
| topic | string | const (`"realestate/profile#teamdelete"`)  |
| data | object | - |
| data.type | string | const (`"DeleteAction"`)  |
| data.object | allOf | - |
| data.object.0 (allOf item) | - | - |
| data.object.0.id | string | - |
| data.object.1 (allOf item) | allOf | - |
| data.object.1.0 (allOf item) | object | - |
| data.object.1.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.1.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.1.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.1.1 (allOf item) | any | - |
| data.object.1.2 (allOf item) | any | - |
| data.object.1.3 (allOf item) | - | - |
| data.object.1.3.address | object | A physical address. |
| data.object.1.3.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| data.object.1.3.availableLanguage.type | string | const (`"Language"`)  |
| data.object.1.3.availableLanguage.name | string | the display name of the language |
| data.object.1.3.availableLanguage.additionalName | string | BCP 47 language code |
| data.object.1.3.branchCode | string | A short textual code that uniquely identifies a place of business. |
| data.object.1.3.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| data.object.1.3.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| data.object.1.3.certification.0.type | string | allowed (`"Certification"`) Certification |
| data.object.1.3.certification.0.name | string | the name of the Certification |
| data.object.1.3.certification.0.issuedBy | object | the issuing authority |
| data.object.1.3.certification.0.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| data.object.1.3.certification.0.issuedBy.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.1.3.certification.0.issuedBy.name | string | name of the issuing organization |
| data.object.1.3.certification.0.issuedTo | object | the subject |
| data.object.1.3.certification.0.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| data.object.1.3.certification.0.issuedTo.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.1.3.certification.0.issuedTo.name | string | the name of the item |
| data.object.1.3.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| data.object.1.3.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.object.1.3.contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.object.1.3.contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.1.3.contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.1.3.contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| data.object.1.3.contactPoint.url | string | format (`uri`) primary URL for the item. |
| data.object.1.3.email | string | format (`email`)  |
| data.object.1.3.faxNumber | string | Do people still use fax machines? |
| data.object.1.3.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.1.3.image.0 (index) | object allOf | - |
| data.object.1.3.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.1.3.image.0.0.0 (allOf item) | object | - |
| data.object.1.3.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.1.3.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.1.3.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.1.3.image.0.0.1 (allOf item) | - | - |
| data.object.1.3.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.1.3.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| data.object.1.3.image.0.0.1.name | string | the file name of the object. |
| data.object.1.3.image.0.0.1.encodingFormat | string | MIME type |
| data.object.1.3.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| data.object.1.3.image.0.0.1.url | string | format (`uri`) URL of the image content |
| data.object.1.3.image.0.1 (allOf item) | - | - |
| data.object.1.3.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.object.1.3.image.0.1.id | any | - |
| data.object.1.3.image.0.1.name | any | - |
| data.object.1.3.image.0.1.encodingFormat | any | - |
| data.object.1.3.logo | array<object allOf> | a logo associated with the organization. |
| data.object.1.3.logo (single item) | object allOf | - |
| data.object.1.3.logo.0 (allOf item) | object | an electronic file. |
| data.object.1.3.logo.0.type | string | allowed (`"DigitalDocument"`)  |
| data.object.1.3.logo.0.id | string | - |
| data.object.1.3.logo.0.name | string | document name or title |
| data.object.1.3.logo.0.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| data.object.1.3.logo.0.about | object | subject of the Document |
| data.object.1.3.logo.0.url | string | public URL of the object |
| data.object.1.3.logo.1 (allOf item) | object | an associated logo |
| data.object.1.3.name | string | Name or DBA. |
| data.object.1.3.parentOrganization | array<string> | - |
| data.object.1.3.parentOrganization (single item) | string | format (`uri`)  |
| data.object.1.3.subOrganization | array<string> | a child organization |
| data.object.1.3.subOrganization (single item) | string | format (`uri`)  |
| data.object.1.3.telephone | string | Primary phone number. |
| data.object.1.3.type | string | allowed (`"Organization"`)  |
| data.object.1.3.url | string | format (`uri`) primary website/url for the entity. |
| data.object.2 (allOf item) | - | A real estate team. |
| data.object.2.type | string | allowed (`"RealEstateTeam"`) RealEstateTeam |
| data.object.2.areaServed | object | the physical areas that make up the ServiceArea |
| data.object.2.description | string | description of the item. |
| data.object.2.parentOrganization | array<string> | A franchisor or affiliate network of which this organization plays a membership role. |
| data.object.2.parentOrganization (single item) | string | format (`uri`)  |
| data.object.2.member | array<allOf> | - |
| data.object.2.member (single item) | allOf | - |
| data.object.2.member.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| data.object.2.member.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.2.member.0.roleName | string | the role name |
| data.object.2.member.0.memberOf | object | the org or group where the role is performed |
| data.object.2.member.0.member | string | format (`uri`) member object or id |
| data.object.2.member.0.startDate | string | format (`date-time`) date the member began performing this role |
| data.object.2.member.0.endDate | string | format (`date-time`) date the member stopped performing the role |
| data.object.2.member.1 (allOf item) | object | a membership relationship.  Subclass of OrganizationRole |
| data.object.2.member.1.type | string | allowed (`"RealEstateTeamMembership"`) a member of a real estate team |
| data.object.2.member.1.roleName | string | allowed (`"TeamMember"`, `"TeamAdmin"`, `"TeamOwner"`)  |
| data.object.2.member.1.memberOf | string | format (`uri`)  |
| data.object.2.member.1.member | string | format (`uri`)  |
| topic | string | const (`"realestate/profile#teamdelete"`)  |
| data | object | - |
| data.type | string | const (`"DeleteAction"`)  |
| data.object | allOf | - |
| data.object.0 (allOf item) | - | - |
| data.object.0.id | string | - |
| data.object.1 (allOf item) | allOf | - |
| data.object.1.0 (allOf item) | object | - |
| data.object.1.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.1.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.1.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.1.1 (allOf item) | any | - |
| data.object.1.2 (allOf item) | any | - |
| data.object.1.3 (allOf item) | - | - |
| data.object.1.3.address | object | A physical address. |
| data.object.1.3.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| data.object.1.3.availableLanguage.type | string | const (`"Language"`)  |
| data.object.1.3.availableLanguage.name | string | the display name of the language |
| data.object.1.3.availableLanguage.additionalName | string | BCP 47 language code |
| data.object.1.3.branchCode | string | A short textual code that uniquely identifies a place of business. |
| data.object.1.3.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| data.object.1.3.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| data.object.1.3.certification.0.type | string | allowed (`"Certification"`) Certification |
| data.object.1.3.certification.0.name | string | the name of the Certification |
| data.object.1.3.certification.0.issuedBy | object | the issuing authority |
| data.object.1.3.certification.0.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| data.object.1.3.certification.0.issuedBy.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.1.3.certification.0.issuedBy.name | string | name of the issuing organization |
| data.object.1.3.certification.0.issuedTo | object | the subject |
| data.object.1.3.certification.0.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| data.object.1.3.certification.0.issuedTo.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.1.3.certification.0.issuedTo.name | string | the name of the item |
| data.object.1.3.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| data.object.1.3.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.object.1.3.contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.object.1.3.contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.1.3.contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.object.1.3.contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| data.object.1.3.contactPoint.url | string | format (`uri`) primary URL for the item. |
| data.object.1.3.email | string | format (`email`)  |
| data.object.1.3.faxNumber | string | Do people still use fax machines? |
| data.object.1.3.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.1.3.image.0 (index) | object allOf | - |
| data.object.1.3.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.1.3.image.0.0.0 (allOf item) | object | - |
| data.object.1.3.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.1.3.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.1.3.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.1.3.image.0.0.1 (allOf item) | - | - |
| data.object.1.3.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.1.3.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| data.object.1.3.image.0.0.1.name | string | the file name of the object. |
| data.object.1.3.image.0.0.1.encodingFormat | string | MIME type |
| data.object.1.3.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| data.object.1.3.image.0.0.1.url | string | format (`uri`) URL of the image content |
| data.object.1.3.image.0.1 (allOf item) | - | - |
| data.object.1.3.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.object.1.3.image.0.1.id | any | - |
| data.object.1.3.image.0.1.name | any | - |
| data.object.1.3.image.0.1.encodingFormat | any | - |
| data.object.1.3.logo | array<object allOf> | a logo associated with the organization. |
| data.object.1.3.logo (single item) | object allOf | - |
| data.object.1.3.logo.0 (allOf item) | object | an electronic file. |
| data.object.1.3.logo.0.type | string | allowed (`"DigitalDocument"`)  |
| data.object.1.3.logo.0.id | string | - |
| data.object.1.3.logo.0.name | string | document name or title |
| data.object.1.3.logo.0.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| data.object.1.3.logo.0.about | object | subject of the Document |
| data.object.1.3.logo.0.url | string | public URL of the object |
| data.object.1.3.logo.1 (allOf item) | object | an associated logo |
| data.object.1.3.name | string | Name or DBA. |
| data.object.1.3.parentOrganization | array<string> | - |
| data.object.1.3.parentOrganization (single item) | string | format (`uri`)  |
| data.object.1.3.subOrganization | array<string> | a child organization |
| data.object.1.3.subOrganization (single item) | string | format (`uri`)  |
| data.object.1.3.telephone | string | Primary phone number. |
| data.object.1.3.type | string | allowed (`"Organization"`)  |
| data.object.1.3.url | string | format (`uri`) primary website/url for the entity. |
| data.object.2 (allOf item) | - | A real estate team. |
| data.object.2.type | string | allowed (`"RealEstateTeam"`) RealEstateTeam |
| data.object.2.areaServed | object | the physical areas that make up the ServiceArea |
| data.object.2.description | string | description of the item. |
| data.object.2.parentOrganization | array<string> | A franchisor or affiliate network of which this organization plays a membership role. |
| data.object.2.parentOrganization (single item) | string | format (`uri`)  |
| data.object.2.member | array<allOf> | - |
| data.object.2.member (single item) | allOf | - |
| data.object.2.member.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| data.object.2.member.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.2.member.0.roleName | string | the role name |
| data.object.2.member.0.memberOf | object | the org or group where the role is performed |
| data.object.2.member.0.member | string | format (`uri`) member object or id |
| data.object.2.member.0.startDate | string | format (`date-time`) date the member began performing this role |
| data.object.2.member.0.endDate | string | format (`date-time`) date the member stopped performing the role |
| data.object.2.member.1 (allOf item) | object | a membership relationship.  Subclass of OrganizationRole |
| data.object.2.member.1.type | string | allowed (`"RealEstateTeamMembership"`) a member of a real estate team |
| data.object.2.member.1.roleName | string | allowed (`"TeamMember"`, `"TeamAdmin"`, `"TeamOwner"`)  |
| data.object.2.member.1.memberOf | string | format (`uri`)  |
| data.object.2.member.1.member | string | format (`uri`)  |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


