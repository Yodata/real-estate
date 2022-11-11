---
title: website#askquestion
---
## website#askquestion

*website user asks a question*

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
| data.agent | object | a website user/visitor |
| data.agent.type | string | - |
| data.agent.name | string | - |
| data.agent.givenName | string | - |
| data.agent.familyName | string | - |
| data.agent.email | string |  <span class='constraints'>format (`email`)</span> |
| data.agent.telephone | string | - |
| data.agent.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.agent.sameAs | string | vendor specific identifier for the user can be shared with other vendors to identify the user <span class='constraints'>format (`uri`)</span> |
| data.agent.contactPoint | object | A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. <span class='constraints'>>= 3 properties</span> |
| data.agent.contactPoint.type | string | - |
| data.agent.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.agent.contactPoint.telephone | string | - |
| data.agent.contactPoint.faxNumber | string | - |
| data.agent.contactPoint.email | string | an email address for the item. <span class='constraints'>format (`email`)</span> |
| data.agent.contactPoint.url | string | primary URL for the item. <span class='constraints'>format (`uri`)</span> |
| data.agent.additionalProperties | object | additional properties for the website user |
| data.agent.additionalProperties.workingWithAgent | boolean | - |
| data.object | object | A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document. |
| data.object.type | string | - |
| data.object.text | string | - |
| data.recipient | object | the agent being asked |
| data.about | object | a real estate property listed for sale |
| data.about.type | string | - |
| data.about.addressCountry | string | two-letter ISO 3166-1 alpha-2 country code |
| data.about.addressLocality | string | City, Township. <span class='constraints'><= 50 characters</span> |
| data.about.addressRegion | string | State or Province. <span class='constraints'><= 3 characters</span> |
| data.about.buyerAgent | object | the buyer's RealEstateAgent |
| data.about.buyerOffice | object | the buyer's RealEstateOffice |
| data.about.closeDate | string | With for-sale listings, the date the purchase agreement was fulfilled. With lease listings, the date the requirements were fulfilled, such as contract and/or deposit. <span class='constraints'>format (`date-time`)</span> |
| data.about.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.about.image.0 (index) | object allOf | - |
| data.about.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.about.image.0.0.0 (allOf item) | object | - |
| data.about.image.0.0.0.type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| data.about.image.0.0.0.@id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| data.about.image.0.0.0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| data.about.image.0.0.1 (allOf item) | - | - |
| data.about.image.0.0.1.type | string | - |
| data.about.image.0.0.1.id | string | the URL to access the item. <span class='constraints'>format (`uri`)</span> |
| data.about.image.0.0.1.name | string | the file name of the object. |
| data.about.image.0.0.1.encodingFormat | string | MIME type |
| data.about.image.0.0.1.about | string | URI to the subject of the image or logo <span class='constraints'>format (`uri`)</span> |
| data.about.image.0.0.1.url | string | URL of the image content <span class='constraints'>format (`uri`)</span> |
| data.about.image.0.1 (allOf item) | - | - |
| data.about.image.0.1.type | string | - |
| data.about.image.0.1.id | any | - |
| data.about.image.0.1.name | any | - |
| data.about.image.0.1.encodingFormat | any | - |
| data.about.internetAddressDisplayYN | string | - |
| data.about.latitude | number | The latitude of a location. |
| data.about.listingAgent | object | the agent/broker representing the seller in a real estate transaction |
| data.about.listingContractDate | string | The effective date of the agreement between the seller and the seller's broker. <span class='constraints'>format (`date-time`)</span> |
| data.about.listingId | string | the local identifier for the listing |
| data.about.listingOffice | object | the listing office |
| data.about.listingOriginatingSystem | object | The place where the item is originally input by the user. |
| data.about.listingPrice | object | - |
| data.about.listingStatus | string | - |
| data.about.livingArea | object | property indoor space |
| data.about.longitude | number | The longitude of a location. |
| data.about.lotSize | object | outdoor space minValue, maxValue |
| data.about.numberOfBathrooms | string | the number of bathrooms |
| data.about.numberOfBedrooms | string | the number of bedrooms |
| data.about.numberOfRooms | string | the total number of rooms in the building |
| data.about.originatingSystemKey | string | the listing identifier from the original MLS, aka MLSID. |
| data.about.originatingSystemName | string | the name of the MLS where the listing was originally input |
| data.about.postalCode | string | Zip/Post Code <span class='constraints'><= 12 characters</span> |
| data.about.propertySubType | string | RESO property sub-type (see range for allowed values) |
| data.about.propertyType | string | RESO property type (see range for allowed values) <span class='constraints'>4 characters</span> |
| data.about.purchaseContractDate | string | With for-sale listings, the date an offer was accepted and the listing was no longer on market. With lease listings this may represent a meeting of the minds to lease, but some contractual requirements are yet to be fulfilled, such as contract signing or receipt of the deposit. <span class='constraints'>format (`date-time`)</span> |
| data.about.stories | number | he number of floors in the property |
| data.about.streetAddress | string | the street address <span class='constraints'><= 75 characters</span> |
| data.about.universalPropertyId | string | The Universal Property Identifier is a unique identifier for all real property in the US and Canada.  It is based on country and local identification methods and is limited to real property.  For cases such as shares of real property, units, and other more granular cases, please utilize the UniversalPropertySubId. |
| data.about.url | string | URL of the item. <span class='constraints'>format (`uri`)</span> |
| data.about.yearBuilt | number | the year the structure was created |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.agent | object | a website user/visitor |
| data.agent.type | string | - |
| data.agent.name | string | - |
| data.agent.givenName | string | - |
| data.agent.familyName | string | - |
| data.agent.email | string |  <span class='constraints'>format (`email`)</span> |
| data.agent.telephone | string | - |
| data.agent.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.agent.sameAs | string | vendor specific identifier for the user can be shared with other vendors to identify the user <span class='constraints'>format (`uri`)</span> |
| data.agent.contactPoint | object | A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. <span class='constraints'>>= 3 properties</span> |
| data.agent.contactPoint.type | string | - |
| data.agent.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.agent.contactPoint.telephone | string | - |
| data.agent.contactPoint.faxNumber | string | - |
| data.agent.contactPoint.email | string | an email address for the item. <span class='constraints'>format (`email`)</span> |
| data.agent.contactPoint.url | string | primary URL for the item. <span class='constraints'>format (`uri`)</span> |
| data.agent.additionalProperties | object | additional properties for the website user |
| data.agent.additionalProperties.workingWithAgent | boolean | - |
| data.object | object | A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document. |
| data.object.type | string | - |
| data.object.text | string | - |
| data.recipient | object | the agent being asked |
| data.about | object | a real estate property listed for sale |
| data.about.type | string | - |
| data.about.addressCountry | string | two-letter ISO 3166-1 alpha-2 country code |
| data.about.addressLocality | string | City, Township. <span class='constraints'><= 50 characters</span> |
| data.about.addressRegion | string | State or Province. <span class='constraints'><= 3 characters</span> |
| data.about.buyerAgent | object | the buyer's RealEstateAgent |
| data.about.buyerOffice | object | the buyer's RealEstateOffice |
| data.about.closeDate | string | With for-sale listings, the date the purchase agreement was fulfilled. With lease listings, the date the requirements were fulfilled, such as contract and/or deposit. <span class='constraints'>format (`date-time`)</span> |
| data.about.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.about.image.0 (index) | object allOf | - |
| data.about.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.about.image.0.0.0 (allOf item) | object | - |
| data.about.image.0.0.0.type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| data.about.image.0.0.0.@id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| data.about.image.0.0.0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| data.about.image.0.0.1 (allOf item) | - | - |
| data.about.image.0.0.1.type | string | - |
| data.about.image.0.0.1.id | string | the URL to access the item. <span class='constraints'>format (`uri`)</span> |
| data.about.image.0.0.1.name | string | the file name of the object. |
| data.about.image.0.0.1.encodingFormat | string | MIME type |
| data.about.image.0.0.1.about | string | URI to the subject of the image or logo <span class='constraints'>format (`uri`)</span> |
| data.about.image.0.0.1.url | string | URL of the image content <span class='constraints'>format (`uri`)</span> |
| data.about.image.0.1 (allOf item) | - | - |
| data.about.image.0.1.type | string | - |
| data.about.image.0.1.id | any | - |
| data.about.image.0.1.name | any | - |
| data.about.image.0.1.encodingFormat | any | - |
| data.about.internetAddressDisplayYN | string | - |
| data.about.latitude | number | The latitude of a location. |
| data.about.listingAgent | object | the agent/broker representing the seller in a real estate transaction |
| data.about.listingContractDate | string | The effective date of the agreement between the seller and the seller's broker. <span class='constraints'>format (`date-time`)</span> |
| data.about.listingId | string | the local identifier for the listing |
| data.about.listingOffice | object | the listing office |
| data.about.listingOriginatingSystem | object | The place where the item is originally input by the user. |
| data.about.listingPrice | object | - |
| data.about.listingStatus | string | - |
| data.about.livingArea | object | property indoor space |
| data.about.longitude | number | The longitude of a location. |
| data.about.lotSize | object | outdoor space minValue, maxValue |
| data.about.numberOfBathrooms | string | the number of bathrooms |
| data.about.numberOfBedrooms | string | the number of bedrooms |
| data.about.numberOfRooms | string | the total number of rooms in the building |
| data.about.originatingSystemKey | string | the listing identifier from the original MLS, aka MLSID. |
| data.about.originatingSystemName | string | the name of the MLS where the listing was originally input |
| data.about.postalCode | string | Zip/Post Code <span class='constraints'><= 12 characters</span> |
| data.about.propertySubType | string | RESO property sub-type (see range for allowed values) |
| data.about.propertyType | string | RESO property type (see range for allowed values) <span class='constraints'>4 characters</span> |
| data.about.purchaseContractDate | string | With for-sale listings, the date an offer was accepted and the listing was no longer on market. With lease listings this may represent a meeting of the minds to lease, but some contractual requirements are yet to be fulfilled, such as contract signing or receipt of the deposit. <span class='constraints'>format (`date-time`)</span> |
| data.about.stories | number | he number of floors in the property |
| data.about.streetAddress | string | the street address <span class='constraints'><= 75 characters</span> |
| data.about.universalPropertyId | string | The Universal Property Identifier is a unique identifier for all real property in the US and Canada.  It is based on country and local identification methods and is limited to real property.  For cases such as shares of real property, units, and other more granular cases, please utilize the UniversalPropertySubId. |
| data.about.url | string | URL of the item. <span class='constraints'>format (`uri`)</span> |
| data.about.yearBuilt | number | the year the structure was created |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


