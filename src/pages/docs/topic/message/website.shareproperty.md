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
| time | string | date & time the event was produced <span class='constraints'>format (`date-time`)</span> |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient <span class='constraints'>format (`uri`)</span> |
| instrument | string | the app or service that produced the event on behalf of the agent/user <span class='constraints'>format (`uri`)</span> |
| source | string | a copy of the event was sent to the source(s). <span class='constraints'>format (`uri`)</span> |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source <span class='constraints'>format (`uri`)</span> |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. <span class='constraints'>format (`uri`)</span> |
| @id | string |  <span class='constraints'>format (`uri`)</span> |
| time | string | date & time the event was produced <span class='constraints'>format (`date-time`)</span> |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient <span class='constraints'>format (`uri`)</span> |
| instrument | string | the app or service that produced the event on behalf of the agent/user <span class='constraints'>format (`uri`)</span> |
| source | string | a copy of the event was sent to the source(s). <span class='constraints'>format (`uri`)</span> |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source <span class='constraints'>format (`uri`)</span> |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. <span class='constraints'>format (`uri`)</span> |
| @id | string |  <span class='constraints'>format (`uri`)</span> |

### Payload

| Name | Type | Description |
|---|---|---|
| - | object | - |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.agent | object | - |
| data.agent.type | string | - |
| data.agent.affiliation | array<string> | An organization that this person is affiliated with |
| data.agent.affiliation (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| data.agent.address | array<object> | - |
| data.agent.address.type | string | - |
| data.agent.address.streetAddress | string | the street number and name. |
| data.agent.address.postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| data.agent.address.addressRegion | string | State or Province. |
| data.agent.address.addressLocality | string | City, Township. |
| data.agent.address.postalCode | string | Zip/Post Code |
| data.agent.address.addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| data.agent.address.addressCounty | string | the county (us real estate extension) |
| data.agent.address.addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |
| data.agent.birthDate | string | date of birth. <span class='constraints'>format (`date`)</span> |
| data.agent.contactPoint | array<object> | contact points for the person |
| data.agent.contactPoint.type | string | - |
| data.agent.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.agent.contactPoint.telephone | string | - |
| data.agent.contactPoint.faxNumber | string | - |
| data.agent.contactPoint.email | string | an email address for the item. <span class='constraints'>format (`email`)</span> |
| data.agent.contactPoint.url | string | primary URL for the item. <span class='constraints'>format (`uri`)</span> |
| data.agent.email | string |  <span class='constraints'>format (`email`)</span> |
| data.agent.additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| data.agent.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) <span class='constraints'><= 50 characters</span> |
| data.agent.faxNumber | string | Do people still use fax machines? |
| data.agent.givenName | string | First Name of a person |
| data.agent.honorificPrefix | string | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. |
| data.agent.honorificSuffix | string | An honorific title following a person's name like M.D. |
| data.agent.jobTitle | array<string> | job tiles associated with the item |
| data.agent.jobTitle (single item) | string | - |
| data.agent.knowsLanguage | array<object> | languages spoken by the person |
| data.agent.knowsLanguage.type | string | - |
| data.agent.knowsLanguage.name | string | the display name of the language |
| data.agent.knowsLanguage.additionalName | string | BCP 47 language code |
| data.agent.name | string | Full name of the person. |
| data.agent.telephone | string | Primary phone number. |
| data.agent.worksFor | string | Organizations the person works for. |
| data.object | object | a real estate property listed for sale |
| data.object.type | string | - |
| data.object.addressCountry | string | two-letter ISO 3166-1 alpha-2 country code |
| data.object.addressLocality | string | City, Township. <span class='constraints'><= 50 characters</span> |
| data.object.addressRegion | string | State or Province. <span class='constraints'><= 3 characters</span> |
| data.object.buyerAgent | object | the buyer's RealEstateAgent |
| data.object.buyerOffice | object | the buyer's RealEstateOffice |
| data.object.closeDate | string | With for-sale listings, the date the purchase agreement was fulfilled. With lease listings, the date the requirements were fulfilled, such as contract and/or deposit. <span class='constraints'>format (`date-time`)</span> |
| data.object.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.image.0 (index) | object allOf | - |
| data.object.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.image.0.0.0 (allOf item) | object | - |
| data.object.image.0.0.0.type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| data.object.image.0.0.0.@id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| data.object.image.0.0.0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| data.object.image.0.0.1 (allOf item) | - | - |
| data.object.image.0.0.1.type | string | - |
| data.object.image.0.0.1.id | string | the URL to access the item. <span class='constraints'>format (`uri`)</span> |
| data.object.image.0.0.1.name | string | the file name of the object. |
| data.object.image.0.0.1.encodingFormat | string | MIME type |
| data.object.image.0.0.1.about | string | URI to the subject of the image or logo <span class='constraints'>format (`uri`)</span> |
| data.object.image.0.0.1.url | string | URL of the image content <span class='constraints'>format (`uri`)</span> |
| data.object.image.0.1 (allOf item) | - | - |
| data.object.image.0.1.type | string | - |
| data.object.image.0.1.id | any | - |
| data.object.image.0.1.name | any | - |
| data.object.image.0.1.encodingFormat | any | - |
| data.object.internetAddressDisplayYN | string | - |
| data.object.latitude | number | The latitude of a location. |
| data.object.listingAgent | object | the agent/broker representing the seller in a real estate transaction |
| data.object.listingContractDate | string | The effective date of the agreement between the seller and the seller's broker. <span class='constraints'>format (`date-time`)</span> |
| data.object.listingId | string | the local identifier for the listing |
| data.object.listingOffice | object | the listing office |
| data.object.listingOriginatingSystem | object | The place where the item is originally input by the user. |
| data.object.listingPrice | object | - |
| data.object.listingStatus | string | - |
| data.object.livingArea | object | property indoor space |
| data.object.longitude | number | The longitude of a location. |
| data.object.lotSize | object | outdoor space minValue, maxValue |
| data.object.numberOfBathrooms | string | the number of bathrooms |
| data.object.numberOfBedrooms | string | the number of bedrooms |
| data.object.numberOfRooms | string | the total number of rooms in the building |
| data.object.originatingSystemKey | string | the listing identifier from the original MLS, aka MLSID. |
| data.object.originatingSystemName | string | the name of the MLS where the listing was originally input |
| data.object.postalCode | string | Zip/Post Code <span class='constraints'><= 12 characters</span> |
| data.object.propertySubType | string | RESO property sub-type (see range for allowed values) |
| data.object.propertyType | string | RESO property type (see range for allowed values) <span class='constraints'>4 characters</span> |
| data.object.purchaseContractDate | string | With for-sale listings, the date an offer was accepted and the listing was no longer on market. With lease listings this may represent a meeting of the minds to lease, but some contractual requirements are yet to be fulfilled, such as contract signing or receipt of the deposit. <span class='constraints'>format (`date-time`)</span> |
| data.object.stories | number | he number of floors in the property |
| data.object.streetAddress | string | the street address <span class='constraints'><= 75 characters</span> |
| data.object.universalPropertyId | string | The Universal Property Identifier is a unique identifier for all real property in the US and Canada.  It is based on country and local identification methods and is limited to real property.  For cases such as shares of real property, units, and other more granular cases, please utilize the UniversalPropertySubId. |
| data.object.url | string | URL of the item. <span class='constraints'>format (`uri`)</span> |
| data.object.yearBuilt | number | the year the structure was created |
| data.recipient | object | - |
| data.recipient.type | string | - |
| data.recipient.name | string | The name of the person or audience to whom the property listing was shared. |
| data.recipient.email | string | The email address of the person or audience to whom the property listing was shared. <span class='constraints'>format (`email`)</span> |
| data.recipient.url | string | A URL to the shared item if available. <span class='constraints'>format (`uri`)</span> |
| data.recipient.instrument | object | The instrument used to share the property listing. |
| data.recipient.instrument.type | string | - |
| data.recipient.instrument.name | string | The name of the instrument used to share the property listing. |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.agent | object | - |
| data.agent.type | string | - |
| data.agent.affiliation | array<string> | An organization that this person is affiliated with |
| data.agent.affiliation (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| data.agent.address | array<object> | - |
| data.agent.address.type | string | - |
| data.agent.address.streetAddress | string | the street number and name. |
| data.agent.address.postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| data.agent.address.addressRegion | string | State or Province. |
| data.agent.address.addressLocality | string | City, Township. |
| data.agent.address.postalCode | string | Zip/Post Code |
| data.agent.address.addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| data.agent.address.addressCounty | string | the county (us real estate extension) |
| data.agent.address.addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |
| data.agent.birthDate | string | date of birth. <span class='constraints'>format (`date`)</span> |
| data.agent.contactPoint | array<object> | contact points for the person |
| data.agent.contactPoint.type | string | - |
| data.agent.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.agent.contactPoint.telephone | string | - |
| data.agent.contactPoint.faxNumber | string | - |
| data.agent.contactPoint.email | string | an email address for the item. <span class='constraints'>format (`email`)</span> |
| data.agent.contactPoint.url | string | primary URL for the item. <span class='constraints'>format (`uri`)</span> |
| data.agent.email | string |  <span class='constraints'>format (`email`)</span> |
| data.agent.additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| data.agent.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) <span class='constraints'><= 50 characters</span> |
| data.agent.faxNumber | string | Do people still use fax machines? |
| data.agent.givenName | string | First Name of a person |
| data.agent.honorificPrefix | string | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. |
| data.agent.honorificSuffix | string | An honorific title following a person's name like M.D. |
| data.agent.jobTitle | array<string> | job tiles associated with the item |
| data.agent.jobTitle (single item) | string | - |
| data.agent.knowsLanguage | array<object> | languages spoken by the person |
| data.agent.knowsLanguage.type | string | - |
| data.agent.knowsLanguage.name | string | the display name of the language |
| data.agent.knowsLanguage.additionalName | string | BCP 47 language code |
| data.agent.name | string | Full name of the person. |
| data.agent.telephone | string | Primary phone number. |
| data.agent.worksFor | string | Organizations the person works for. |
| data.object | object | a real estate property listed for sale |
| data.object.type | string | - |
| data.object.addressCountry | string | two-letter ISO 3166-1 alpha-2 country code |
| data.object.addressLocality | string | City, Township. <span class='constraints'><= 50 characters</span> |
| data.object.addressRegion | string | State or Province. <span class='constraints'><= 3 characters</span> |
| data.object.buyerAgent | object | the buyer's RealEstateAgent |
| data.object.buyerOffice | object | the buyer's RealEstateOffice |
| data.object.closeDate | string | With for-sale listings, the date the purchase agreement was fulfilled. With lease listings, the date the requirements were fulfilled, such as contract and/or deposit. <span class='constraints'>format (`date-time`)</span> |
| data.object.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.image.0 (index) | object allOf | - |
| data.object.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.image.0.0.0 (allOf item) | object | - |
| data.object.image.0.0.0.type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| data.object.image.0.0.0.@id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| data.object.image.0.0.0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| data.object.image.0.0.1 (allOf item) | - | - |
| data.object.image.0.0.1.type | string | - |
| data.object.image.0.0.1.id | string | the URL to access the item. <span class='constraints'>format (`uri`)</span> |
| data.object.image.0.0.1.name | string | the file name of the object. |
| data.object.image.0.0.1.encodingFormat | string | MIME type |
| data.object.image.0.0.1.about | string | URI to the subject of the image or logo <span class='constraints'>format (`uri`)</span> |
| data.object.image.0.0.1.url | string | URL of the image content <span class='constraints'>format (`uri`)</span> |
| data.object.image.0.1 (allOf item) | - | - |
| data.object.image.0.1.type | string | - |
| data.object.image.0.1.id | any | - |
| data.object.image.0.1.name | any | - |
| data.object.image.0.1.encodingFormat | any | - |
| data.object.internetAddressDisplayYN | string | - |
| data.object.latitude | number | The latitude of a location. |
| data.object.listingAgent | object | the agent/broker representing the seller in a real estate transaction |
| data.object.listingContractDate | string | The effective date of the agreement between the seller and the seller's broker. <span class='constraints'>format (`date-time`)</span> |
| data.object.listingId | string | the local identifier for the listing |
| data.object.listingOffice | object | the listing office |
| data.object.listingOriginatingSystem | object | The place where the item is originally input by the user. |
| data.object.listingPrice | object | - |
| data.object.listingStatus | string | - |
| data.object.livingArea | object | property indoor space |
| data.object.longitude | number | The longitude of a location. |
| data.object.lotSize | object | outdoor space minValue, maxValue |
| data.object.numberOfBathrooms | string | the number of bathrooms |
| data.object.numberOfBedrooms | string | the number of bedrooms |
| data.object.numberOfRooms | string | the total number of rooms in the building |
| data.object.originatingSystemKey | string | the listing identifier from the original MLS, aka MLSID. |
| data.object.originatingSystemName | string | the name of the MLS where the listing was originally input |
| data.object.postalCode | string | Zip/Post Code <span class='constraints'><= 12 characters</span> |
| data.object.propertySubType | string | RESO property sub-type (see range for allowed values) |
| data.object.propertyType | string | RESO property type (see range for allowed values) <span class='constraints'>4 characters</span> |
| data.object.purchaseContractDate | string | With for-sale listings, the date an offer was accepted and the listing was no longer on market. With lease listings this may represent a meeting of the minds to lease, but some contractual requirements are yet to be fulfilled, such as contract signing or receipt of the deposit. <span class='constraints'>format (`date-time`)</span> |
| data.object.stories | number | he number of floors in the property |
| data.object.streetAddress | string | the street address <span class='constraints'><= 75 characters</span> |
| data.object.universalPropertyId | string | The Universal Property Identifier is a unique identifier for all real property in the US and Canada.  It is based on country and local identification methods and is limited to real property.  For cases such as shares of real property, units, and other more granular cases, please utilize the UniversalPropertySubId. |
| data.object.url | string | URL of the item. <span class='constraints'>format (`uri`)</span> |
| data.object.yearBuilt | number | the year the structure was created |
| data.recipient | object | - |
| data.recipient.type | string | - |
| data.recipient.name | string | The name of the person or audience to whom the property listing was shared. |
| data.recipient.email | string | The email address of the person or audience to whom the property listing was shared. <span class='constraints'>format (`email`)</span> |
| data.recipient.url | string | A URL to the shared item if available. <span class='constraints'>format (`uri`)</span> |
| data.recipient.instrument | object | The instrument used to share the property listing. |
| data.recipient.instrument.type | string | - |
| data.recipient.instrument.name | string | The name of the instrument used to share the property listing. |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


