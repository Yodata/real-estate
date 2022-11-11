---
title: franchise#transactionreport
---
## franchise#transactionreport

*Franchise transaction report of transaction for sales production reporting.*

* MessageId: franchise#transactionreport
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
| topic | string | const (`"realestate/franchise#transactionreport"`)  |
| data | object | - |
| data.type | string | const (`"UpdateAction"`)  |
| data.instrument | object | the application or service used that generated the report |
| data.instrument.type | string | const (`"SoftwareApplication"`)  |
| data.instrument.name | string | examples (`"Guru"`, `"Lone Wolf"`) <= 10 characters  |
| data.object | object | describes a sale, purchase and transfer of a real estate property. |
| data.object.type | string | const (`"RealEstateTransaction"`)  |
| data.object.identifier | object | the data producer's id for the transaction. |
| data.object.identifier.bmsTransactionId | string | <= 12 characters  |
| data.object.additionalProperty | object | vendor/context specific custom properties |
| data.object.additionalProperty.batchId | integer | identifies the batch for the current transaction |
| data.object.additionalProperty.transactionSequence | integer | >= 0 the sequentail order of this transaction report relative to previous reports of the the same RealEstateTransaction |
| data.object.additionalProperty.unimprovedLandFlag | boolean | true if the transaction subject property is an unimproved lot. |
| data.object.transactionStatus | string | allowed (`"PendingTransactionStatus"`, `"ClosedTransactionStatus"`, `"CanceledTransactionStatus"`) transaction status |
| data.object.transactionType | string | allowed (`"ST"`, `"LS"`, `"OI"`, `"PM"`, `"RF"`) transaction type |
| data.object.reportingOffice | string | format (`uri`) the reporting office |
| data.object.listingOffice | string | format (`uri`) the office representing the seller |
| data.object.buyerOffice | string | format (`uri`) the office representing the buyer |
| data.object.commissionDate | string | format (`date-time`) date the purchase offer was presented |
| data.object.closeDate | string | format (`date-time`) With purchase the date the purchase agreement was fulfilled. With lease, the date the requirements were fulfilled, such as contract and/or deposit. |
| data.object.purchaseContractDate | string | format (`date-time`) date of purchase agreement execution (aka sale date) |
| data.object.closePrice | object | the final sale price of the subject |
| data.object.closePrice.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| data.object.closePrice.minValue | number | the lower limit of the range |
| data.object.closePrice.maxValue | number | the upper limit of the range |
| data.object.closePrice.value | number | the actual or expected value |
| data.object.closePrice.currency | string | <= 3 characters use ISO4217 country codes |
| data.object.totalSalesProductionGCI | object | the total gci of the transaction |
| data.object.totalSalesProductionGCI.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| data.object.totalSalesProductionGCI.minValue | number | the lower limit of the range |
| data.object.totalSalesProductionGCI.maxValue | number | the upper limit of the range |
| data.object.totalSalesProductionGCI.value | number | the actual or expected value |
| data.object.totalSalesProductionGCI.currency | string | <= 3 characters use ISO4217 country codes |
| data.object.totalSalesProductionGCIDeduction | object | total gci deductions for the transaction |
| data.object.totalSalesProductionGCIDeduction.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| data.object.totalSalesProductionGCIDeduction.minValue | number | the lower limit of the range |
| data.object.totalSalesProductionGCIDeduction.maxValue | number | the upper limit of the range |
| data.object.totalSalesProductionGCIDeduction.value | number | the actual or expected value |
| data.object.totalSalesProductionGCIDeduction.currency | string | <= 3 characters use ISO4217 country codes |
| data.object.object | object | a property in the real estate transaction context |
| data.object.object.type | string | allowed (`"RealEstateProperty"`) "RealEstateProperty" |
| data.object.object.propertyType | string | allowed (`"RESI"`, `"RLSE"`, `"RINC"`, `"LAND"`, `"MOBI"`, `"FARM"`, `"COMS"`, `"COML"`, `"BUSO"`) 4 characters RESO property type (see range for allowed values) |
| data.object.object.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| data.object.object.addressLocality | string | <= 50 characters City, Township. |
| data.object.object.addressRegion | string | <= 3 characters State or Province. |
| data.object.object.apn | string | Assessors Parcel Number |
| data.object.object.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.object.image.0 (index) | object allOf | - |
| data.object.object.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.object.image.0.0.0 (allOf item) | object | - |
| data.object.object.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.object.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.object.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.object.image.0.0.1 (allOf item) | - | - |
| data.object.object.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.object.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| data.object.object.image.0.0.1.name | string | the file name of the object. |
| data.object.object.image.0.0.1.encodingFormat | string | MIME type |
| data.object.object.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| data.object.object.image.0.0.1.url | string | format (`uri`) URL of the image content |
| data.object.object.image.0.1 (allOf item) | - | - |
| data.object.object.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.object.object.image.0.1.id | any | - |
| data.object.object.image.0.1.name | any | - |
| data.object.object.image.0.1.encodingFormat | any | - |
| data.object.object.latitude | number | The latitude of a location. |
| data.object.object.listingId | string | the local identifier for the listing (MLS #) |
| data.object.object.livingArea | object | property indoor space |
| data.object.object.longitude | number | The longitude of a location. |
| data.object.object.lotSize | object | outdoor space minValue, maxValue |
| data.object.object.numberOfBathrooms | string | the number of bathrooms |
| data.object.object.numberOfBedrooms | string | the number of bedrooms |
| data.object.object.numberOfRooms | string | the total number of rooms in the building |
| data.object.object.postalCode | string | <= 12 characters Zip/Post Code |
| data.object.object.propertySubType | string | allowed (`"ApartmentPropertyType"`, `"BoatSlipPropertyType"`, `"CabinPropertyType"`, `"CondominiumPropertyType"`, `"DeededParkingPropertyType"`, `"DuplexPropertyType"`, `"FarmPropertyType"`, `"ManufacturedHomePropertyType"`, `"ManufacturedOnLandPropertyType"`, `"MobileHomePropertyType"`, `"OwnYourOwnPropertyType"`, `"QuadruplexPropertyType"`, `"RanchPropertyType"`, `"SingleFamilyPropertyType"`, `"StockCooperativePropertyType"`, `"TimesharePropertyType"`, `"TownhousePropertyType"`, `"TriplexPropertyType"`, `"AgriculturePropertyType"`, `"BusinessPropertyType"`, `"HotelMotelPropertyType"`, `"IndustrialPropertyType"`, `"MixedUsePropertyType"`, `"MultiFamilyPropertyType"`, `"OfficePropertyType"`, `"RetailPropertyType"`, `"UnimprovedLandPropertyType"`, `"WarehousePropertyType"`) RESO property sub-type (see range for allowed values) |
| data.object.object.stories | number | he number of floors in the property |
| data.object.object.streetAddress | string | <= 75 characters the street address |
| data.object.object.yearBuilt | number | the year the structure was created |
| data.object.referral | object | referring agent details |
| data.object.referral.type | string | allowed (`"Referral"`) The item type (Linked-Data @type) |
| data.object.referral.additionalProperty | object | context specific custom properties |
| data.object.referral.additionalProperty.isReferralYN | string | allowed (`"Y"`, `"N"`) Y if transaction was a referral |
| data.object.referral.additionalProperty.inNetworkReferralYN | string | allowed (`"Y"`, `"N"`) Y if transaction was referred by an in network agent |
| data.object.referral.referredBy | object | the referring entity |
| data.object.referral.referredBy.type | string | allowed (`"RealEstateOrganization"`, `"RealEstateAgent"`, `"RealEstateOffice"`, `"Organization"`, `"Person"`) the referring entity type i.e RealEstateOrganization, RealEstateAgent |
| data.object.referral.referredBy.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.participant | array<object> | parties with a direct or indirect interest or role in the transaction |
| data.object.participant.type | string | const (`"TransactionParticipant"`)  |
| data.object.participant.roleName | string | examples (`"Buyer"`, `"Seller"`) the role of the participant in the transaction |
| data.object.participant.position | number | numeric position for the participant/roleName. |
| data.object.participant.givenName | string | examples (`"John"`, `"Jane"`, `"Mary"`, `"Joseph"`, `"William"`, `"David"`, `"Richard"`, `"Charles"`, `"Thomas"`, `"Christopher"`, `"Daniel"`, `"Matthew"`, `"Anthony"`, `"Donald"`, `"Mark"`, `"Paul"`, `"Steven"`, `"Andrew"`, `"Kenneth"`, `"George"`, `"Joshua"`, `"Kevin"`, `"Brian"`, `"Edward"`, `"Ronald"`, `"Timothy"`, `"Jason"`, `"Jeffrey"`, `"Ryan"`, `"Jacob"`) First Name of a person |
| data.object.participant.familyName | string | examples (`"Smith"`, `"Jones"`, `"Parker"`, `"Monk"`, `"Brown"`, `"Miller"`, `"Davis"`, `"Wilson"`, `"Fitzgerald"`, `"Johnson"`, `"Williams"`) <= 50 characters Last Name of a person. [Family Name](https://schema.org/familyName) |
| data.object.participant.additionalName | string | middleName or alternate name of the Person |
| data.object.participant.email | string | format (`email`)  |
| data.object.participant.telephone | string | Primary phone number. |
| data.object.participant.affiliation | array<string> | person or organization associated with the participant |
| data.object.participant.affiliation (single item) | string | format (`uri`)  |
| data.object.transactionEntry | array<object> | commissions and unit entries |
| data.object.transactionEntry.type | string | allowed (`"TransactionEntry"`) TransactionEntry |
| data.object.transactionEntry.salesProductionUnit | number | [ 0.0001 .. 1 ] the sales production units credited to the recipient |
| data.object.transactionEntry.salesProductionGCI | object | gross commission income credited to the recipient |
| data.object.transactionEntry.salesProductionGCI.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| data.object.transactionEntry.salesProductionGCI.minValue | number | the lower limit of the range |
| data.object.transactionEntry.salesProductionGCI.maxValue | number | the upper limit of the range |
| data.object.transactionEntry.salesProductionGCI.value | number | the actual or expected value |
| data.object.transactionEntry.salesProductionGCI.currency | string | <= 3 characters use ISO4217 country codes |
| data.object.transactionEntry.recipient | object | the agent credited with the sales production and who receives the value |
| data.object.transactionEntry.recipient.type | string | typically a RealEstateAgent |
| data.object.transactionEntry.recipient.roleName | string | allowed (`"ListingAgent"`, `"BuyerAgent"`) enum: ListingAgent,BuyerAgent |
| data.object.transactionEntry.recipient.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.transactionEntry.recipient.identifier | object | unique identifier of the recipient from the data producer |
| data.object.transactionEntry.recipient.identifier.bmsAgentId | string | <= 12 characters  |
| data.object.document | array<object> | any documents, images, etc... related to the transaction. |
| data.object.document (single item) | object | - |
| topic | string | const (`"realestate/franchise#transactionreport"`)  |
| data | object | - |
| data.type | string | const (`"UpdateAction"`)  |
| data.instrument | object | the application or service used that generated the report |
| data.instrument.type | string | const (`"SoftwareApplication"`)  |
| data.instrument.name | string | examples (`"Guru"`, `"Lone Wolf"`) <= 10 characters  |
| data.object | object | describes a sale, purchase and transfer of a real estate property. |
| data.object.type | string | const (`"RealEstateTransaction"`)  |
| data.object.identifier | object | the data producer's id for the transaction. |
| data.object.identifier.bmsTransactionId | string | <= 12 characters  |
| data.object.additionalProperty | object | vendor/context specific custom properties |
| data.object.additionalProperty.batchId | integer | identifies the batch for the current transaction |
| data.object.additionalProperty.transactionSequence | integer | >= 0 the sequentail order of this transaction report relative to previous reports of the the same RealEstateTransaction |
| data.object.additionalProperty.unimprovedLandFlag | boolean | true if the transaction subject property is an unimproved lot. |
| data.object.transactionStatus | string | allowed (`"PendingTransactionStatus"`, `"ClosedTransactionStatus"`, `"CanceledTransactionStatus"`) transaction status |
| data.object.transactionType | string | allowed (`"ST"`, `"LS"`, `"OI"`, `"PM"`, `"RF"`) transaction type |
| data.object.reportingOffice | string | format (`uri`) the reporting office |
| data.object.listingOffice | string | format (`uri`) the office representing the seller |
| data.object.buyerOffice | string | format (`uri`) the office representing the buyer |
| data.object.commissionDate | string | format (`date-time`) date the purchase offer was presented |
| data.object.closeDate | string | format (`date-time`) With purchase the date the purchase agreement was fulfilled. With lease, the date the requirements were fulfilled, such as contract and/or deposit. |
| data.object.purchaseContractDate | string | format (`date-time`) date of purchase agreement execution (aka sale date) |
| data.object.closePrice | object | the final sale price of the subject |
| data.object.closePrice.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| data.object.closePrice.minValue | number | the lower limit of the range |
| data.object.closePrice.maxValue | number | the upper limit of the range |
| data.object.closePrice.value | number | the actual or expected value |
| data.object.closePrice.currency | string | <= 3 characters use ISO4217 country codes |
| data.object.totalSalesProductionGCI | object | the total gci of the transaction |
| data.object.totalSalesProductionGCI.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| data.object.totalSalesProductionGCI.minValue | number | the lower limit of the range |
| data.object.totalSalesProductionGCI.maxValue | number | the upper limit of the range |
| data.object.totalSalesProductionGCI.value | number | the actual or expected value |
| data.object.totalSalesProductionGCI.currency | string | <= 3 characters use ISO4217 country codes |
| data.object.totalSalesProductionGCIDeduction | object | total gci deductions for the transaction |
| data.object.totalSalesProductionGCIDeduction.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| data.object.totalSalesProductionGCIDeduction.minValue | number | the lower limit of the range |
| data.object.totalSalesProductionGCIDeduction.maxValue | number | the upper limit of the range |
| data.object.totalSalesProductionGCIDeduction.value | number | the actual or expected value |
| data.object.totalSalesProductionGCIDeduction.currency | string | <= 3 characters use ISO4217 country codes |
| data.object.object | object | a property in the real estate transaction context |
| data.object.object.type | string | allowed (`"RealEstateProperty"`) "RealEstateProperty" |
| data.object.object.propertyType | string | allowed (`"RESI"`, `"RLSE"`, `"RINC"`, `"LAND"`, `"MOBI"`, `"FARM"`, `"COMS"`, `"COML"`, `"BUSO"`) 4 characters RESO property type (see range for allowed values) |
| data.object.object.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| data.object.object.addressLocality | string | <= 50 characters City, Township. |
| data.object.object.addressRegion | string | <= 3 characters State or Province. |
| data.object.object.apn | string | Assessors Parcel Number |
| data.object.object.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.object.image.0 (index) | object allOf | - |
| data.object.object.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.object.image.0.0.0 (allOf item) | object | - |
| data.object.object.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| data.object.object.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| data.object.object.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| data.object.object.image.0.0.1 (allOf item) | - | - |
| data.object.object.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.object.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| data.object.object.image.0.0.1.name | string | the file name of the object. |
| data.object.object.image.0.0.1.encodingFormat | string | MIME type |
| data.object.object.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| data.object.object.image.0.0.1.url | string | format (`uri`) URL of the image content |
| data.object.object.image.0.1 (allOf item) | - | - |
| data.object.object.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.object.object.image.0.1.id | any | - |
| data.object.object.image.0.1.name | any | - |
| data.object.object.image.0.1.encodingFormat | any | - |
| data.object.object.latitude | number | The latitude of a location. |
| data.object.object.listingId | string | the local identifier for the listing (MLS #) |
| data.object.object.livingArea | object | property indoor space |
| data.object.object.longitude | number | The longitude of a location. |
| data.object.object.lotSize | object | outdoor space minValue, maxValue |
| data.object.object.numberOfBathrooms | string | the number of bathrooms |
| data.object.object.numberOfBedrooms | string | the number of bedrooms |
| data.object.object.numberOfRooms | string | the total number of rooms in the building |
| data.object.object.postalCode | string | <= 12 characters Zip/Post Code |
| data.object.object.propertySubType | string | allowed (`"ApartmentPropertyType"`, `"BoatSlipPropertyType"`, `"CabinPropertyType"`, `"CondominiumPropertyType"`, `"DeededParkingPropertyType"`, `"DuplexPropertyType"`, `"FarmPropertyType"`, `"ManufacturedHomePropertyType"`, `"ManufacturedOnLandPropertyType"`, `"MobileHomePropertyType"`, `"OwnYourOwnPropertyType"`, `"QuadruplexPropertyType"`, `"RanchPropertyType"`, `"SingleFamilyPropertyType"`, `"StockCooperativePropertyType"`, `"TimesharePropertyType"`, `"TownhousePropertyType"`, `"TriplexPropertyType"`, `"AgriculturePropertyType"`, `"BusinessPropertyType"`, `"HotelMotelPropertyType"`, `"IndustrialPropertyType"`, `"MixedUsePropertyType"`, `"MultiFamilyPropertyType"`, `"OfficePropertyType"`, `"RetailPropertyType"`, `"UnimprovedLandPropertyType"`, `"WarehousePropertyType"`) RESO property sub-type (see range for allowed values) |
| data.object.object.stories | number | he number of floors in the property |
| data.object.object.streetAddress | string | <= 75 characters the street address |
| data.object.object.yearBuilt | number | the year the structure was created |
| data.object.referral | object | referring agent details |
| data.object.referral.type | string | allowed (`"Referral"`) The item type (Linked-Data @type) |
| data.object.referral.additionalProperty | object | context specific custom properties |
| data.object.referral.additionalProperty.isReferralYN | string | allowed (`"Y"`, `"N"`) Y if transaction was a referral |
| data.object.referral.additionalProperty.inNetworkReferralYN | string | allowed (`"Y"`, `"N"`) Y if transaction was referred by an in network agent |
| data.object.referral.referredBy | object | the referring entity |
| data.object.referral.referredBy.type | string | allowed (`"RealEstateOrganization"`, `"RealEstateAgent"`, `"RealEstateOffice"`, `"Organization"`, `"Person"`) the referring entity type i.e RealEstateOrganization, RealEstateAgent |
| data.object.referral.referredBy.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.participant | array<object> | parties with a direct or indirect interest or role in the transaction |
| data.object.participant.type | string | const (`"TransactionParticipant"`)  |
| data.object.participant.roleName | string | examples (`"Buyer"`, `"Seller"`) the role of the participant in the transaction |
| data.object.participant.position | number | numeric position for the participant/roleName. |
| data.object.participant.givenName | string | examples (`"John"`, `"Jane"`, `"Mary"`, `"Joseph"`, `"William"`, `"David"`, `"Richard"`, `"Charles"`, `"Thomas"`, `"Christopher"`, `"Daniel"`, `"Matthew"`, `"Anthony"`, `"Donald"`, `"Mark"`, `"Paul"`, `"Steven"`, `"Andrew"`, `"Kenneth"`, `"George"`, `"Joshua"`, `"Kevin"`, `"Brian"`, `"Edward"`, `"Ronald"`, `"Timothy"`, `"Jason"`, `"Jeffrey"`, `"Ryan"`, `"Jacob"`) First Name of a person |
| data.object.participant.familyName | string | examples (`"Smith"`, `"Jones"`, `"Parker"`, `"Monk"`, `"Brown"`, `"Miller"`, `"Davis"`, `"Wilson"`, `"Fitzgerald"`, `"Johnson"`, `"Williams"`) <= 50 characters Last Name of a person. [Family Name](https://schema.org/familyName) |
| data.object.participant.additionalName | string | middleName or alternate name of the Person |
| data.object.participant.email | string | format (`email`)  |
| data.object.participant.telephone | string | Primary phone number. |
| data.object.participant.affiliation | array<string> | person or organization associated with the participant |
| data.object.participant.affiliation (single item) | string | format (`uri`)  |
| data.object.transactionEntry | array<object> | commissions and unit entries |
| data.object.transactionEntry.type | string | allowed (`"TransactionEntry"`) TransactionEntry |
| data.object.transactionEntry.salesProductionUnit | number | [ 0.0001 .. 1 ] the sales production units credited to the recipient |
| data.object.transactionEntry.salesProductionGCI | object | gross commission income credited to the recipient |
| data.object.transactionEntry.salesProductionGCI.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| data.object.transactionEntry.salesProductionGCI.minValue | number | the lower limit of the range |
| data.object.transactionEntry.salesProductionGCI.maxValue | number | the upper limit of the range |
| data.object.transactionEntry.salesProductionGCI.value | number | the actual or expected value |
| data.object.transactionEntry.salesProductionGCI.currency | string | <= 3 characters use ISO4217 country codes |
| data.object.transactionEntry.recipient | object | the agent credited with the sales production and who receives the value |
| data.object.transactionEntry.recipient.type | string | typically a RealEstateAgent |
| data.object.transactionEntry.recipient.roleName | string | allowed (`"ListingAgent"`, `"BuyerAgent"`) enum: ListingAgent,BuyerAgent |
| data.object.transactionEntry.recipient.id | string | format (`uri`) Linked-Data URI (@id) |
| data.object.transactionEntry.recipient.identifier | object | unique identifier of the recipient from the data producer |
| data.object.transactionEntry.recipient.identifier.bmsAgentId | string | <= 12 characters  |
| data.object.document | array<object> | any documents, images, etc... related to the transaction. |
| data.object.document (single item) | object | - |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


