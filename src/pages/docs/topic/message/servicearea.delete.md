---
title: servicearea#delete
---
## servicearea#delete

*ServiceArea (data.object) has been deleted.  Identifier is required.*

* MessageId: servicearea#delete
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
| topic | string | const (`"realestate/servicearea#delete"`)  |
| data | object | - |
| data.type | string | const (`"DeleteAction"`)  |
| data.object | object | an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area) |
| data.object.type | string | allowed (`"ServiceArea"`) "ServiceArea" |
| data.object.kind | string | allowed (`"City"`, `"PostalCode"`) ServiceArea sub-type.  City or PostalCode |
| data.object.identifier | object | vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item. |
| data.object.identifier.bhhsESAId | string | BHHS internal ESA ID |
| data.object.addressLocality | string | City, Township. |
| data.object.postalCode | string | Zip/Post Code |
| data.object.addressRegion | string | State or Province. |
| data.object.addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| data.object.addressCounty | string | the county (us real estate extension) |
| data.object.provider | object | a broker or company who provides service in the ServiceArea |
| data.object.provider.type | string | allowed (`"RealEstateOrganization"`) "RealEstateOrganization" |
| data.object.provider.id | string | profile URI |
| data.object.additionalProperty | object | BHHS specific ServiceArea properties |
| data.object.additionalProperty.relocationOffice | object | relocation office |
| data.object.additionalProperty.relocationOffice.type | string | allowed (`"RealEstateOffice"`) The item type (Linked-Data @type) |
| data.object.additionalProperty.relocationOffice.id | string | - |
| data.object.additionalProperty.weight | integer | weight |
| data.object.additionalProperty.officeInPostalCode | boolean | true if the service area provider is physically located in the ServiceArea. |
| data.object.additionalProperty.sortOrder | integer | sort order |
| data.object.additionalProperty.sentToConsumerSite | boolean | sent to consumer site |
| data.object.additionalProperty.sentToCompanyLocator | boolean | sent to company locator |
| data.object.additionalProperty.sentToReferralSolutions | boolean | sent to referral solutions |
| data.object.additionalProperty.luxuryPriceMinimum | object | minimum price for a property listing in the area to be considered a luxury property |
| data.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| topic | string | const (`"realestate/servicearea#delete"`)  |
| data | object | - |
| data.type | string | const (`"DeleteAction"`)  |
| data.object | object | an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area) |
| data.object.type | string | allowed (`"ServiceArea"`) "ServiceArea" |
| data.object.kind | string | allowed (`"City"`, `"PostalCode"`) ServiceArea sub-type.  City or PostalCode |
| data.object.identifier | object | vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item. |
| data.object.identifier.bhhsESAId | string | BHHS internal ESA ID |
| data.object.addressLocality | string | City, Township. |
| data.object.postalCode | string | Zip/Post Code |
| data.object.addressRegion | string | State or Province. |
| data.object.addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| data.object.addressCounty | string | the county (us real estate extension) |
| data.object.provider | object | a broker or company who provides service in the ServiceArea |
| data.object.provider.type | string | allowed (`"RealEstateOrganization"`) "RealEstateOrganization" |
| data.object.provider.id | string | profile URI |
| data.object.additionalProperty | object | BHHS specific ServiceArea properties |
| data.object.additionalProperty.relocationOffice | object | relocation office |
| data.object.additionalProperty.relocationOffice.type | string | allowed (`"RealEstateOffice"`) The item type (Linked-Data @type) |
| data.object.additionalProperty.relocationOffice.id | string | - |
| data.object.additionalProperty.weight | integer | weight |
| data.object.additionalProperty.officeInPostalCode | boolean | true if the service area provider is physically located in the ServiceArea. |
| data.object.additionalProperty.sortOrder | integer | sort order |
| data.object.additionalProperty.sentToConsumerSite | boolean | sent to consumer site |
| data.object.additionalProperty.sentToCompanyLocator | boolean | sent to company locator |
| data.object.additionalProperty.sentToReferralSolutions | boolean | sent to referral solutions |
| data.object.additionalProperty.luxuryPriceMinimum | object | minimum price for a property listing in the area to be considered a luxury property |
| data.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


