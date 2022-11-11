---
title: website#askquestion
---
## website#askquestion

*website user asks a question*

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
| topic | string | const (`"realestate/website#askquestion"`)  |
| data | object | - |
| data.type | string | const (`"AskAction"`)  |
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
| data.object | object | A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document. |
| data.object.type | string | const (`"Question"`)  |
| data.object.text | string | examples (`"Populus debet control notitia sua"`, `"Aspicio pinguem in his vestimentis?"`, `"Et id ipsum vitae."`, `"Amici, Romani et cives, aures vestras mihi praebe"`, `"Heus, ego iustus occurrit tibi et hoc est insanus, sed hic numerus meus est, ut me vocas fortasse."`)  |
| data.recipient | object | examples (`{"type":"RealEstateAgent","name":"Randy Real Estate","id":"https://8675309.example.com/profile/card#me"}`, `{"type":"Contact","name":"Gretchen Olson","telephone":"1+888-867-5309","email":"Gretchen_Olson@example.org","contactPoint":[{"type":"ContactPoint","name":"Home","contactType":"customer service","telephone":"(846) 239-2439 x529","email":"Justice.Parker2@example.com"},{"type":"ContactPoint","name":"Work","telephone":"1+888-867-5309"}],"identifier":{"hsfconsumerid":1234568}}`, `{"type":"Person","identifier":{"hsfconsumerid":1234568}}`) the agent being asked |
| data.about | object | a real estate property listed for sale |
| data.about.type | string | allowed (`"PropertyListing"`)  |
| data.about.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| data.about.addressLocality | string | <= 50 characters City, Township. |
| data.about.addressRegion | string | <= 3 characters State or Province. |
| data.about.buyerAgent | object | the buyer's RealEstateAgent |
| data.about.buyerOffice | object | the buyer's RealEstateOffice |
| data.about.closeDate | string | format (`date-time`) With for-sale listings, the date the purchase agreement was fulfilled. With lease listings, the date the requirements were fulfilled, such as contract and/or deposit. |
| data.about.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.about.image.0 (index) | object allOf | - |
| data.about.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.about.image.0.0.0 (allOf item) | object | - |
| data.about.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.about.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.about.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.about.image.0.0.1 (allOf item) | - | - |
| data.about.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.about.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| data.about.image.0.0.1.name | string | the file name of the object. |
| data.about.image.0.0.1.encodingFormat | string | MIME type |
| data.about.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| data.about.image.0.0.1.url | string | format (`uri`) URL of the image content |
| data.about.image.0.1 (allOf item) | - | - |
| data.about.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.about.image.0.1.id | any | - |
| data.about.image.0.1.name | any | - |
| data.about.image.0.1.encodingFormat | any | - |
| data.about.internetAddressDisplayYN | string | allowed (`"Y"`, `"N"`)  |
| data.about.latitude | number | The latitude of a location. |
| data.about.listingAgent | object | the agent/broker representing the seller in a real estate transaction |
| data.about.listingContractDate | string | format (`date-time`) The effective date of the agreement between the seller and the seller's broker. |
| data.about.listingId | string | the local identifier for the listing |
| data.about.listingOffice | object | the listing office |
| data.about.listingOriginatingSystem | object | The place where the item is originally input by the user. |
| data.about.listingPrice | object | - |
| data.about.listingStatus | string | allowed (`"Active"`, `"Pending"`, `"Sold"`, `"Canceled"`, `"Prelisted"`, `"OffMarket"`, `"Private"`)  |
| data.about.livingArea | object | property indoor space |
| data.about.longitude | number | The longitude of a location. |
| data.about.lotSize | object | outdoor space minValue, maxValue |
| data.about.numberOfBathrooms | string | the number of bathrooms |
| data.about.numberOfBedrooms | string | the number of bedrooms |
| data.about.numberOfRooms | string | the total number of rooms in the building |
| data.about.originatingSystemKey | string | the listing identifier from the original MLS, aka MLSID. |
| data.about.originatingSystemName | string | the name of the MLS where the listing was originally input |
| data.about.postalCode | string | <= 12 characters Zip/Post Code |
| data.about.propertySubType | string | allowed (`"ApartmentPropertyType"`, `"BoatSlipPropertyType"`, `"CabinPropertyType"`, `"CondominiumPropertyType"`, `"DeededParkingPropertyType"`, `"DuplexPropertyType"`, `"FarmPropertyType"`, `"ManufacturedHomePropertyType"`, `"ManufacturedOnLandPropertyType"`, `"MobileHomePropertyType"`, `"OwnYourOwnPropertyType"`, `"QuadruplexPropertyType"`, `"RanchPropertyType"`, `"SingleFamilyPropertyType"`, `"StockCooperativePropertyType"`, `"TimesharePropertyType"`, `"TownhousePropertyType"`, `"TriplexPropertyType"`, `"AgriculturePropertyType"`, `"BusinessPropertyType"`, `"HotelMotelPropertyType"`, `"IndustrialPropertyType"`, `"MixedUsePropertyType"`, `"MultiFamilyPropertyType"`, `"OfficePropertyType"`, `"RetailPropertyType"`, `"UnimprovedLandPropertyType"`, `"WarehousePropertyType"`) RESO property sub-type (see range for allowed values) |
| data.about.propertyType | string | allowed (`"RESI"`, `"RLSE"`, `"RINC"`, `"LAND"`, `"MOBI"`, `"FARM"`, `"COMS"`, `"COML"`, `"BUSO"`) 4 characters RESO property type (see range for allowed values) |
| data.about.purchaseContractDate | string | format (`date-time`) With for-sale listings, the date an offer was accepted and the listing was no longer on market. With lease listings this may represent a meeting of the minds to lease, but some contractual requirements are yet to be fulfilled, such as contract signing or receipt of the deposit. |
| data.about.stories | number | he number of floors in the property |
| data.about.streetAddress | string | <= 75 characters the street address |
| data.about.universalPropertyId | string | The Universal Property Identifier is a unique identifier for all real property in the US and Canada.  It is based on country and local identification methods and is limited to real property.  For cases such as shares of real property, units, and other more granular cases, please utilize the UniversalPropertySubId. |
| data.about.url | string | format (`uri`) URL of the item. |
| data.about.yearBuilt | number | the year the structure was created |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


