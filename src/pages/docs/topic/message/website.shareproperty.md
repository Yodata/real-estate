---
title: website#shareproperty
---
## website#shareproperty

*a website user shares a property listing*

* MessageId: website#shareproperty
* Content type: application/json

A website user (agent) shared a (PropertyListing)[/types/PropertyListing]
with the recipient (a Person or Audience).


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
| topic | string | const (`"realestate/website#shareproperty"`)  |
| data | object | - |
| data.type | string | const (`"ShareAction"`)  |
| data.agent | object | - |
| data.agent.type | string | - |
| data.agent.affiliation | array<string> | An organization that this person is affiliated with |
| data.agent.affiliation (single item) | string | format (`uri`)  |
| data.agent.address | array<object> | - |
| data.agent.address.type | string | const (`"PostalAddress"`)  |
| data.agent.address.streetAddress | string | examples (`"5046 Ottis Point"`, `"166 Marion Burg"`, `"93044 Haley Stream"`) the street number and name. |
| data.agent.address.postOfficeBoxNumber | string | examples (`"Box 1234"`, `"Apt. 161"`, `"Apt. 623"`) The post office box number for PO box addresses. |
| data.agent.address.addressRegion | string | examples (`"New Jersey"`, `"California"`, `"MI"`, `null`) State or Province. |
| data.agent.address.addressLocality | string | examples (`"Gotham City"`, `"Kulasmouth"`, `"Heidistad"`, `"Altamonte Springs"`, `"West Ahmed"`, `"Blaiseview"`) City, Township. |
| data.agent.address.postalCode | string | examples (`"10010"`, `"38859"`, `"40387"`, `"50239-7698"`, `null`) Zip/Post Code |
| data.agent.address.addressCountry | string | examples (`"USA"`, `"TH"`, `"NZ"`, `"EG"`, `"SJ"`, `"VN"`) The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| data.agent.address.addressCounty | string | examples (`"Gotham County"`, `"Buckinghamshire"`, `"Borders"`, `null`) the county (us real estate extension) |
| data.agent.address.addressSubdivision | string | examples (`"Gotham Heights"`, `"South Kensington"`, `"SOMA (South of Market)"`, `"Nob Hill"`) the subdivision or neighborhood (us real estate extension) |
| data.agent.birthDate | string | format (`date`) date of birth. |
| data.agent.contactPoint | array<object> | contact points for the person |
| data.agent.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.agent.contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.agent.contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.agent.contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.agent.contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| data.agent.contactPoint.url | string | format (`uri`) primary URL for the item. |
| data.agent.email | string | format (`email`)  |
| data.agent.additionalName | string | examples (`"Johnny,John"`, `"Prince,The Artist Formerly Known as Prince,The Artist"`, `"Babs,Barbara"`, `"Katheryn Elizabeth Hudson,Katy Perry"`, `"Destiny Hope Cyrus,Miley Cyrus"`) any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| data.agent.familyName | string | examples (`"Smith"`, `"Jones"`, `"Parker"`, `"Monk"`, `"Brown"`, `"Miller"`, `"Davis"`, `"Wilson"`, `"Fitzgerald"`, `"Johnson"`, `"Williams"`) <= 50 characters Last Name of a person. [Family Name](https://schema.org/familyName) |
| data.agent.faxNumber | string | Do people still use fax machines? |
| data.agent.givenName | string | examples (`"John"`, `"Jane"`, `"Mary"`, `"Joseph"`, `"William"`, `"David"`, `"Richard"`, `"Charles"`, `"Thomas"`, `"Christopher"`, `"Daniel"`, `"Matthew"`, `"Anthony"`, `"Donald"`, `"Mark"`, `"Paul"`, `"Steven"`, `"Andrew"`, `"Kenneth"`, `"George"`, `"Joshua"`, `"Kevin"`, `"Brian"`, `"Edward"`, `"Ronald"`, `"Timothy"`, `"Jason"`, `"Jeffrey"`, `"Ryan"`, `"Jacob"`) First Name of a person |
| data.agent.honorificPrefix | string | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. |
| data.agent.honorificSuffix | string | An honorific title following a person's name like M.D. |
| data.agent.jobTitle | array<string> | job tiles associated with the item |
| data.agent.jobTitle (single item) | string | - |
| data.agent.knowsLanguage | array<object> | languages spoken by the person |
| data.agent.knowsLanguage.type | string | const (`"Language"`)  |
| data.agent.knowsLanguage.name | string | the display name of the language |
| data.agent.knowsLanguage.additionalName | string | BCP 47 language code |
| data.agent.name | string | Full name of the person. |
| data.agent.telephone | string | Primary phone number. |
| data.agent.worksFor | string | Organizations the person works for. |
| data.object | object | a real estate property listed for sale |
| data.object.type | string | allowed (`"PropertyListing"`)  |
| data.object.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| data.object.addressLocality | string | <= 50 characters City, Township. |
| data.object.addressRegion | string | <= 3 characters State or Province. |
| data.object.buyerAgent | object | the buyer's RealEstateAgent |
| data.object.buyerOffice | object | the buyer's RealEstateOffice |
| data.object.closeDate | string | format (`date-time`) With for-sale listings, the date the purchase agreement was fulfilled. With lease listings, the date the requirements were fulfilled, such as contract and/or deposit. |
| data.object.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.image.0 (index) | object allOf | - |
| data.object.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.image.0.0.0 (allOf item) | object | - |
| data.object.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.image.0.0.1 (allOf item) | - | - |
| data.object.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| data.object.image.0.0.1.name | string | the file name of the object. |
| data.object.image.0.0.1.encodingFormat | string | MIME type |
| data.object.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| data.object.image.0.0.1.url | string | format (`uri`) URL of the image content |
| data.object.image.0.1 (allOf item) | - | - |
| data.object.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.object.image.0.1.id | any | - |
| data.object.image.0.1.name | any | - |
| data.object.image.0.1.encodingFormat | any | - |
| data.object.internetAddressDisplayYN | string | allowed (`"Y"`, `"N"`)  |
| data.object.latitude | number | The latitude of a location. |
| data.object.listingAgent | object | the agent/broker representing the seller in a real estate transaction |
| data.object.listingContractDate | string | format (`date-time`) The effective date of the agreement between the seller and the seller's broker. |
| data.object.listingId | string | the local identifier for the listing |
| data.object.listingOffice | object | the listing office |
| data.object.listingOriginatingSystem | object | The place where the item is originally input by the user. |
| data.object.listingPrice | object | - |
| data.object.listingStatus | string | allowed (`"Active"`, `"Pending"`, `"Sold"`, `"Canceled"`, `"Prelisted"`, `"OffMarket"`, `"Private"`)  |
| data.object.livingArea | object | property indoor space |
| data.object.longitude | number | The longitude of a location. |
| data.object.lotSize | object | outdoor space minValue, maxValue |
| data.object.numberOfBathrooms | string | the number of bathrooms |
| data.object.numberOfBedrooms | string | the number of bedrooms |
| data.object.numberOfRooms | string | the total number of rooms in the building |
| data.object.originatingSystemKey | string | the listing identifier from the original MLS, aka MLSID. |
| data.object.originatingSystemName | string | the name of the MLS where the listing was originally input |
| data.object.postalCode | string | <= 12 characters Zip/Post Code |
| data.object.propertySubType | string | allowed (`"ApartmentPropertyType"`, `"BoatSlipPropertyType"`, `"CabinPropertyType"`, `"CondominiumPropertyType"`, `"DeededParkingPropertyType"`, `"DuplexPropertyType"`, `"FarmPropertyType"`, `"ManufacturedHomePropertyType"`, `"ManufacturedOnLandPropertyType"`, `"MobileHomePropertyType"`, `"OwnYourOwnPropertyType"`, `"QuadruplexPropertyType"`, `"RanchPropertyType"`, `"SingleFamilyPropertyType"`, `"StockCooperativePropertyType"`, `"TimesharePropertyType"`, `"TownhousePropertyType"`, `"TriplexPropertyType"`, `"AgriculturePropertyType"`, `"BusinessPropertyType"`, `"HotelMotelPropertyType"`, `"IndustrialPropertyType"`, `"MixedUsePropertyType"`, `"MultiFamilyPropertyType"`, `"OfficePropertyType"`, `"RetailPropertyType"`, `"UnimprovedLandPropertyType"`, `"WarehousePropertyType"`) RESO property sub-type (see range for allowed values) |
| data.object.propertyType | string | allowed (`"RESI"`, `"RLSE"`, `"RINC"`, `"LAND"`, `"MOBI"`, `"FARM"`, `"COMS"`, `"COML"`, `"BUSO"`) 4 characters RESO property type (see range for allowed values) |
| data.object.purchaseContractDate | string | format (`date-time`) With for-sale listings, the date an offer was accepted and the listing was no longer on market. With lease listings this may represent a meeting of the minds to lease, but some contractual requirements are yet to be fulfilled, such as contract signing or receipt of the deposit. |
| data.object.stories | number | he number of floors in the property |
| data.object.streetAddress | string | <= 75 characters the street address |
| data.object.universalPropertyId | string | The Universal Property Identifier is a unique identifier for all real property in the US and Canada.  It is based on country and local identification methods and is limited to real property.  For cases such as shares of real property, units, and other more granular cases, please utilize the UniversalPropertySubId. |
| data.object.url | string | format (`uri`) URL of the item. |
| data.object.yearBuilt | number | the year the structure was created |
| data.recipient | object | - |
| data.recipient.type | string | allowed (`"Person"`, `"Audience"`)  |
| data.recipient.name | string | examples (`"John Doe"`, `"Family"`, `"Friends"`) The name of the person or audience to whom the property listing was shared. |
| data.recipient.email | string | format (`email`) The email address of the person or audience to whom the property listing was shared. |
| data.recipient.url | string | examples (`"http://facebook.com/1234567890"`, `"http://twitter.com/userx/status/1234567890"`) format (`uri`) A URL to the shared item if available. |
| data.recipient.instrument | object | The instrument used to share the property listing. |
| data.recipient.instrument.type | string | const (`"Organization"`)  |
| data.recipient.instrument.name | string | examples (`"Facebook"`, `"Twitter"`, `"LinkedIn"`, `"Instagram"`, `"WhatsApp"`, `"Email"`, `"SMS"`, `"Messenger"`, `"Snapchat"`, `"WeChat"`, `"Truth Social"`, `"Other"`) The name of the instrument used to share the property listing. |
| topic | string | const (`"realestate/website#shareproperty"`)  |
| data | object | - |
| data.type | string | const (`"ShareAction"`)  |
| data.agent | object | - |
| data.agent.type | string | - |
| data.agent.affiliation | array<string> | An organization that this person is affiliated with |
| data.agent.affiliation (single item) | string | format (`uri`)  |
| data.agent.address | array<object> | - |
| data.agent.address.type | string | const (`"PostalAddress"`)  |
| data.agent.address.streetAddress | string | examples (`"5046 Ottis Point"`, `"166 Marion Burg"`, `"93044 Haley Stream"`) the street number and name. |
| data.agent.address.postOfficeBoxNumber | string | examples (`"Box 1234"`, `"Apt. 161"`, `"Apt. 623"`) The post office box number for PO box addresses. |
| data.agent.address.addressRegion | string | examples (`"New Jersey"`, `"California"`, `"MI"`, `null`) State or Province. |
| data.agent.address.addressLocality | string | examples (`"Gotham City"`, `"Kulasmouth"`, `"Heidistad"`, `"Altamonte Springs"`, `"West Ahmed"`, `"Blaiseview"`) City, Township. |
| data.agent.address.postalCode | string | examples (`"10010"`, `"38859"`, `"40387"`, `"50239-7698"`, `null`) Zip/Post Code |
| data.agent.address.addressCountry | string | examples (`"USA"`, `"TH"`, `"NZ"`, `"EG"`, `"SJ"`, `"VN"`) The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| data.agent.address.addressCounty | string | examples (`"Gotham County"`, `"Buckinghamshire"`, `"Borders"`, `null`) the county (us real estate extension) |
| data.agent.address.addressSubdivision | string | examples (`"Gotham Heights"`, `"South Kensington"`, `"SOMA (South of Market)"`, `"Nob Hill"`) the subdivision or neighborhood (us real estate extension) |
| data.agent.birthDate | string | format (`date`) date of birth. |
| data.agent.contactPoint | array<object> | contact points for the person |
| data.agent.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.agent.contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.agent.contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.agent.contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| data.agent.contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| data.agent.contactPoint.url | string | format (`uri`) primary URL for the item. |
| data.agent.email | string | format (`email`)  |
| data.agent.additionalName | string | examples (`"Johnny,John"`, `"Prince,The Artist Formerly Known as Prince,The Artist"`, `"Babs,Barbara"`, `"Katheryn Elizabeth Hudson,Katy Perry"`, `"Destiny Hope Cyrus,Miley Cyrus"`) any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| data.agent.familyName | string | examples (`"Smith"`, `"Jones"`, `"Parker"`, `"Monk"`, `"Brown"`, `"Miller"`, `"Davis"`, `"Wilson"`, `"Fitzgerald"`, `"Johnson"`, `"Williams"`) <= 50 characters Last Name of a person. [Family Name](https://schema.org/familyName) |
| data.agent.faxNumber | string | Do people still use fax machines? |
| data.agent.givenName | string | examples (`"John"`, `"Jane"`, `"Mary"`, `"Joseph"`, `"William"`, `"David"`, `"Richard"`, `"Charles"`, `"Thomas"`, `"Christopher"`, `"Daniel"`, `"Matthew"`, `"Anthony"`, `"Donald"`, `"Mark"`, `"Paul"`, `"Steven"`, `"Andrew"`, `"Kenneth"`, `"George"`, `"Joshua"`, `"Kevin"`, `"Brian"`, `"Edward"`, `"Ronald"`, `"Timothy"`, `"Jason"`, `"Jeffrey"`, `"Ryan"`, `"Jacob"`) First Name of a person |
| data.agent.honorificPrefix | string | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. |
| data.agent.honorificSuffix | string | An honorific title following a person's name like M.D. |
| data.agent.jobTitle | array<string> | job tiles associated with the item |
| data.agent.jobTitle (single item) | string | - |
| data.agent.knowsLanguage | array<object> | languages spoken by the person |
| data.agent.knowsLanguage.type | string | const (`"Language"`)  |
| data.agent.knowsLanguage.name | string | the display name of the language |
| data.agent.knowsLanguage.additionalName | string | BCP 47 language code |
| data.agent.name | string | Full name of the person. |
| data.agent.telephone | string | Primary phone number. |
| data.agent.worksFor | string | Organizations the person works for. |
| data.object | object | a real estate property listed for sale |
| data.object.type | string | allowed (`"PropertyListing"`)  |
| data.object.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| data.object.addressLocality | string | <= 50 characters City, Township. |
| data.object.addressRegion | string | <= 3 characters State or Province. |
| data.object.buyerAgent | object | the buyer's RealEstateAgent |
| data.object.buyerOffice | object | the buyer's RealEstateOffice |
| data.object.closeDate | string | format (`date-time`) With for-sale listings, the date the purchase agreement was fulfilled. With lease listings, the date the requirements were fulfilled, such as contract and/or deposit. |
| data.object.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.image.0 (index) | object allOf | - |
| data.object.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.image.0.0.0 (allOf item) | object | - |
| data.object.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.image.0.0.1 (allOf item) | - | - |
| data.object.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| data.object.image.0.0.1.name | string | the file name of the object. |
| data.object.image.0.0.1.encodingFormat | string | MIME type |
| data.object.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| data.object.image.0.0.1.url | string | format (`uri`) URL of the image content |
| data.object.image.0.1 (allOf item) | - | - |
| data.object.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.object.image.0.1.id | any | - |
| data.object.image.0.1.name | any | - |
| data.object.image.0.1.encodingFormat | any | - |
| data.object.internetAddressDisplayYN | string | allowed (`"Y"`, `"N"`)  |
| data.object.latitude | number | The latitude of a location. |
| data.object.listingAgent | object | the agent/broker representing the seller in a real estate transaction |
| data.object.listingContractDate | string | format (`date-time`) The effective date of the agreement between the seller and the seller's broker. |
| data.object.listingId | string | the local identifier for the listing |
| data.object.listingOffice | object | the listing office |
| data.object.listingOriginatingSystem | object | The place where the item is originally input by the user. |
| data.object.listingPrice | object | - |
| data.object.listingStatus | string | allowed (`"Active"`, `"Pending"`, `"Sold"`, `"Canceled"`, `"Prelisted"`, `"OffMarket"`, `"Private"`)  |
| data.object.livingArea | object | property indoor space |
| data.object.longitude | number | The longitude of a location. |
| data.object.lotSize | object | outdoor space minValue, maxValue |
| data.object.numberOfBathrooms | string | the number of bathrooms |
| data.object.numberOfBedrooms | string | the number of bedrooms |
| data.object.numberOfRooms | string | the total number of rooms in the building |
| data.object.originatingSystemKey | string | the listing identifier from the original MLS, aka MLSID. |
| data.object.originatingSystemName | string | the name of the MLS where the listing was originally input |
| data.object.postalCode | string | <= 12 characters Zip/Post Code |
| data.object.propertySubType | string | allowed (`"ApartmentPropertyType"`, `"BoatSlipPropertyType"`, `"CabinPropertyType"`, `"CondominiumPropertyType"`, `"DeededParkingPropertyType"`, `"DuplexPropertyType"`, `"FarmPropertyType"`, `"ManufacturedHomePropertyType"`, `"ManufacturedOnLandPropertyType"`, `"MobileHomePropertyType"`, `"OwnYourOwnPropertyType"`, `"QuadruplexPropertyType"`, `"RanchPropertyType"`, `"SingleFamilyPropertyType"`, `"StockCooperativePropertyType"`, `"TimesharePropertyType"`, `"TownhousePropertyType"`, `"TriplexPropertyType"`, `"AgriculturePropertyType"`, `"BusinessPropertyType"`, `"HotelMotelPropertyType"`, `"IndustrialPropertyType"`, `"MixedUsePropertyType"`, `"MultiFamilyPropertyType"`, `"OfficePropertyType"`, `"RetailPropertyType"`, `"UnimprovedLandPropertyType"`, `"WarehousePropertyType"`) RESO property sub-type (see range for allowed values) |
| data.object.propertyType | string | allowed (`"RESI"`, `"RLSE"`, `"RINC"`, `"LAND"`, `"MOBI"`, `"FARM"`, `"COMS"`, `"COML"`, `"BUSO"`) 4 characters RESO property type (see range for allowed values) |
| data.object.purchaseContractDate | string | format (`date-time`) With for-sale listings, the date an offer was accepted and the listing was no longer on market. With lease listings this may represent a meeting of the minds to lease, but some contractual requirements are yet to be fulfilled, such as contract signing or receipt of the deposit. |
| data.object.stories | number | he number of floors in the property |
| data.object.streetAddress | string | <= 75 characters the street address |
| data.object.universalPropertyId | string | The Universal Property Identifier is a unique identifier for all real property in the US and Canada.  It is based on country and local identification methods and is limited to real property.  For cases such as shares of real property, units, and other more granular cases, please utilize the UniversalPropertySubId. |
| data.object.url | string | format (`uri`) URL of the item. |
| data.object.yearBuilt | number | the year the structure was created |
| data.recipient | object | - |
| data.recipient.type | string | allowed (`"Person"`, `"Audience"`)  |
| data.recipient.name | string | examples (`"John Doe"`, `"Family"`, `"Friends"`) The name of the person or audience to whom the property listing was shared. |
| data.recipient.email | string | format (`email`) The email address of the person or audience to whom the property listing was shared. |
| data.recipient.url | string | examples (`"http://facebook.com/1234567890"`, `"http://twitter.com/userx/status/1234567890"`) format (`uri`) A URL to the shared item if available. |
| data.recipient.instrument | object | The instrument used to share the property listing. |
| data.recipient.instrument.type | string | const (`"Organization"`)  |
| data.recipient.instrument.name | string | examples (`"Facebook"`, `"Twitter"`, `"LinkedIn"`, `"Instagram"`, `"WhatsApp"`, `"Email"`, `"SMS"`, `"Messenger"`, `"Snapchat"`, `"WeChat"`, `"Truth Social"`, `"Other"`) The name of the instrument used to share the property listing. |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


