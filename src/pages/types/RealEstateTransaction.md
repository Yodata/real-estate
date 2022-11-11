---
title: RealEstateTransaction
---
## Schema

| Name | Type | Description |
|---|---|---|
| (RealEstateTransaction) | object | describes a sale, purchase and transfer of a real estate property. |
| type | string | const (`"RealEstateTransaction"`)  |
| identifier | object | the data producer's id for the transaction. |
| identifier.bmsTransactionId | string | <= 12 characters  |
| additionalProperty | object | vendor/context specific custom properties |
| additionalProperty.batchId | integer | identifies the batch for the current transaction |
| additionalProperty.transactionSequence | integer | >= 0 the sequentail order of this transaction report relative to previous reports of the the same RealEstateTransaction |
| additionalProperty.unimprovedLandFlag | boolean | true if the transaction subject property is an unimproved lot. |
| transactionStatus | string | allowed (`"PendingTransactionStatus"`, `"ClosedTransactionStatus"`, `"CanceledTransactionStatus"`) transaction status |
| transactionType | string | allowed (`"ST"`, `"LS"`, `"OI"`, `"PM"`, `"RF"`) transaction type |
| reportingOffice | string | format (`uri`) the reporting office |
| listingOffice | string | format (`uri`) the office representing the seller |
| buyerOffice | string | format (`uri`) the office representing the buyer |
| commissionDate | string | format (`date-time`) date the purchase offer was presented |
| closeDate | string | format (`date-time`) With purchase the date the purchase agreement was fulfilled. With lease, the date the requirements were fulfilled, such as contract and/or deposit. |
| purchaseContractDate | string | format (`date-time`) date of purchase agreement execution (aka sale date) |
| closePrice | object | the final sale price of the subject |
| closePrice.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| closePrice.minValue | number | the lower limit of the range |
| closePrice.maxValue | number | the upper limit of the range |
| closePrice.value | number | the actual or expected value |
| closePrice.currency | string | <= 3 characters use ISO4217 country codes |
| totalSalesProductionGCI | object | the total gci of the transaction |
| totalSalesProductionGCI.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| totalSalesProductionGCI.minValue | number | the lower limit of the range |
| totalSalesProductionGCI.maxValue | number | the upper limit of the range |
| totalSalesProductionGCI.value | number | the actual or expected value |
| totalSalesProductionGCI.currency | string | <= 3 characters use ISO4217 country codes |
| totalSalesProductionGCIDeduction | object | total gci deductions for the transaction |
| totalSalesProductionGCIDeduction.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| totalSalesProductionGCIDeduction.minValue | number | the lower limit of the range |
| totalSalesProductionGCIDeduction.maxValue | number | the upper limit of the range |
| totalSalesProductionGCIDeduction.value | number | the actual or expected value |
| totalSalesProductionGCIDeduction.currency | string | <= 3 characters use ISO4217 country codes |
| object | object | a property in the real estate transaction context |
| object.type | string | allowed (`"RealEstateProperty"`) "RealEstateProperty" |
| object.propertyType | string | allowed (`"RESI"`, `"RLSE"`, `"RINC"`, `"LAND"`, `"MOBI"`, `"FARM"`, `"COMS"`, `"COML"`, `"BUSO"`) 4 characters RESO property type (see range for allowed values) |
| object.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| object.addressLocality | string | <= 50 characters City, Township. |
| object.addressRegion | string | <= 3 characters State or Province. |
| object.apn | string | Assessors Parcel Number |
| object.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| object.image.0 (index) | object allOf | - |
| object.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| object.image.0.0.0 (allOf item) | object | - |
| object.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| object.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| object.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| object.image.0.0.1 (allOf item) | - | - |
| object.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| object.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| object.image.0.0.1.name | string | the file name of the object. |
| object.image.0.0.1.encodingFormat | string | MIME type |
| object.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| object.image.0.0.1.url | string | format (`uri`) URL of the image content |
| object.image.0.1 (allOf item) | - | - |
| object.image.0.1.type | string | allowed (`"ImageObject"`)  |
| object.image.0.1.id | any | - |
| object.image.0.1.name | any | - |
| object.image.0.1.encodingFormat | any | - |
| object.latitude | number | The latitude of a location. |
| object.listingId | string | the local identifier for the listing (MLS #) |
| object.livingArea | object | property indoor space |
| object.longitude | number | The longitude of a location. |
| object.lotSize | object | outdoor space minValue, maxValue |
| object.numberOfBathrooms | string | the number of bathrooms |
| object.numberOfBedrooms | string | the number of bedrooms |
| object.numberOfRooms | string | the total number of rooms in the building |
| object.postalCode | string | <= 12 characters Zip/Post Code |
| object.propertySubType | string | allowed (`"ApartmentPropertyType"`, `"BoatSlipPropertyType"`, `"CabinPropertyType"`, `"CondominiumPropertyType"`, `"DeededParkingPropertyType"`, `"DuplexPropertyType"`, `"FarmPropertyType"`, `"ManufacturedHomePropertyType"`, `"ManufacturedOnLandPropertyType"`, `"MobileHomePropertyType"`, `"OwnYourOwnPropertyType"`, `"QuadruplexPropertyType"`, `"RanchPropertyType"`, `"SingleFamilyPropertyType"`, `"StockCooperativePropertyType"`, `"TimesharePropertyType"`, `"TownhousePropertyType"`, `"TriplexPropertyType"`, `"AgriculturePropertyType"`, `"BusinessPropertyType"`, `"HotelMotelPropertyType"`, `"IndustrialPropertyType"`, `"MixedUsePropertyType"`, `"MultiFamilyPropertyType"`, `"OfficePropertyType"`, `"RetailPropertyType"`, `"UnimprovedLandPropertyType"`, `"WarehousePropertyType"`) RESO property sub-type (see range for allowed values) |
| object.stories | number | he number of floors in the property |
| object.streetAddress | string | <= 75 characters the street address |
| object.yearBuilt | number | the year the structure was created |
| referral | object | referring agent details |
| referral.type | string | allowed (`"Referral"`) The item type (Linked-Data @type) |
| referral.additionalProperty | object | context specific custom properties |
| referral.additionalProperty.isReferralYN | string | allowed (`"Y"`, `"N"`) Y if transaction was a referral |
| referral.additionalProperty.inNetworkReferralYN | string | allowed (`"Y"`, `"N"`) Y if transaction was referred by an in network agent |
| referral.referredBy | object | the referring entity |
| referral.referredBy.type | string | allowed (`"RealEstateOrganization"`, `"RealEstateAgent"`, `"RealEstateOffice"`, `"Organization"`, `"Person"`) the referring entity type i.e RealEstateOrganization, RealEstateAgent |
| referral.referredBy.id | string | format (`uri`) Linked-Data URI (@id) |
| participant | array<object> | parties with a direct or indirect interest or role in the transaction |
| participant.type | string | const (`"TransactionParticipant"`)  |
| participant.roleName | string | examples (`"Buyer"`, `"Seller"`) the role of the participant in the transaction |
| participant.position | number | numeric position for the participant/roleName. |
| participant.givenName | string | examples (`"John"`, `"Jane"`, `"Mary"`, `"Joseph"`, `"William"`, `"David"`, `"Richard"`, `"Charles"`, `"Thomas"`, `"Christopher"`, `"Daniel"`, `"Matthew"`, `"Anthony"`, `"Donald"`, `"Mark"`, `"Paul"`, `"Steven"`, `"Andrew"`, `"Kenneth"`, `"George"`, `"Joshua"`, `"Kevin"`, `"Brian"`, `"Edward"`, `"Ronald"`, `"Timothy"`, `"Jason"`, `"Jeffrey"`, `"Ryan"`, `"Jacob"`) First Name of a person |
| participant.familyName | string | examples (`"Smith"`, `"Jones"`, `"Parker"`, `"Monk"`, `"Brown"`, `"Miller"`, `"Davis"`, `"Wilson"`, `"Fitzgerald"`, `"Johnson"`, `"Williams"`) <= 50 characters Last Name of a person. [Family Name](https://schema.org/familyName) |
| participant.additionalName | string | middleName or alternate name of the Person |
| participant.email | string | format (`email`)  |
| participant.telephone | string | Primary phone number. |
| participant.affiliation | array<string> | person or organization associated with the participant |
| participant.affiliation (single item) | string | format (`uri`)  |
| transactionEntry | array<object> | commissions and unit entries |
| transactionEntry.type | string | allowed (`"TransactionEntry"`) TransactionEntry |
| transactionEntry.salesProductionUnit | number | [ 0.0001 .. 1 ] the sales production units credited to the recipient |
| transactionEntry.salesProductionGCI | object | gross commission income credited to the recipient |
| transactionEntry.salesProductionGCI.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| transactionEntry.salesProductionGCI.minValue | number | the lower limit of the range |
| transactionEntry.salesProductionGCI.maxValue | number | the upper limit of the range |
| transactionEntry.salesProductionGCI.value | number | the actual or expected value |
| transactionEntry.salesProductionGCI.currency | string | <= 3 characters use ISO4217 country codes |
| transactionEntry.recipient | object | the agent credited with the sales production and who receives the value |
| transactionEntry.recipient.type | string | typically a RealEstateAgent |
| transactionEntry.recipient.roleName | string | allowed (`"ListingAgent"`, `"BuyerAgent"`) enum: ListingAgent,BuyerAgent |
| transactionEntry.recipient.id | string | format (`uri`) Linked-Data URI (@id) |
| transactionEntry.recipient.identifier | object | unique identifier of the recipient from the data producer |
| transactionEntry.recipient.identifier.bmsAgentId | string | <= 12 characters  |
| document | array<object> | any documents, images, etc... related to the transaction. |
| document (single item) | object | - |
| type | string | const (`"RealEstateTransaction"`)  |
| identifier | object | the data producer's id for the transaction. |
| identifier.bmsTransactionId | string | <= 12 characters  |
| additionalProperty | object | vendor/context specific custom properties |
| additionalProperty.batchId | integer | identifies the batch for the current transaction |
| additionalProperty.transactionSequence | integer | >= 0 the sequentail order of this transaction report relative to previous reports of the the same RealEstateTransaction |
| additionalProperty.unimprovedLandFlag | boolean | true if the transaction subject property is an unimproved lot. |
| transactionStatus | string | allowed (`"PendingTransactionStatus"`, `"ClosedTransactionStatus"`, `"CanceledTransactionStatus"`) transaction status |
| transactionType | string | allowed (`"ST"`, `"LS"`, `"OI"`, `"PM"`, `"RF"`) transaction type |
| reportingOffice | string | format (`uri`) the reporting office |
| listingOffice | string | format (`uri`) the office representing the seller |
| buyerOffice | string | format (`uri`) the office representing the buyer |
| commissionDate | string | format (`date-time`) date the purchase offer was presented |
| closeDate | string | format (`date-time`) With purchase the date the purchase agreement was fulfilled. With lease, the date the requirements were fulfilled, such as contract and/or deposit. |
| purchaseContractDate | string | format (`date-time`) date of purchase agreement execution (aka sale date) |
| closePrice | object | the final sale price of the subject |
| closePrice.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| closePrice.minValue | number | the lower limit of the range |
| closePrice.maxValue | number | the upper limit of the range |
| closePrice.value | number | the actual or expected value |
| closePrice.currency | string | <= 3 characters use ISO4217 country codes |
| totalSalesProductionGCI | object | the total gci of the transaction |
| totalSalesProductionGCI.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| totalSalesProductionGCI.minValue | number | the lower limit of the range |
| totalSalesProductionGCI.maxValue | number | the upper limit of the range |
| totalSalesProductionGCI.value | number | the actual or expected value |
| totalSalesProductionGCI.currency | string | <= 3 characters use ISO4217 country codes |
| totalSalesProductionGCIDeduction | object | total gci deductions for the transaction |
| totalSalesProductionGCIDeduction.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| totalSalesProductionGCIDeduction.minValue | number | the lower limit of the range |
| totalSalesProductionGCIDeduction.maxValue | number | the upper limit of the range |
| totalSalesProductionGCIDeduction.value | number | the actual or expected value |
| totalSalesProductionGCIDeduction.currency | string | <= 3 characters use ISO4217 country codes |
| object | object | a property in the real estate transaction context |
| object.type | string | allowed (`"RealEstateProperty"`) "RealEstateProperty" |
| object.propertyType | string | allowed (`"RESI"`, `"RLSE"`, `"RINC"`, `"LAND"`, `"MOBI"`, `"FARM"`, `"COMS"`, `"COML"`, `"BUSO"`) 4 characters RESO property type (see range for allowed values) |
| object.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| object.addressLocality | string | <= 50 characters City, Township. |
| object.addressRegion | string | <= 3 characters State or Province. |
| object.apn | string | Assessors Parcel Number |
| object.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| object.image.0 (index) | object allOf | - |
| object.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| object.image.0.0.0 (allOf item) | object | - |
| object.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| object.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| object.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| object.image.0.0.1 (allOf item) | - | - |
| object.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| object.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| object.image.0.0.1.name | string | the file name of the object. |
| object.image.0.0.1.encodingFormat | string | MIME type |
| object.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| object.image.0.0.1.url | string | format (`uri`) URL of the image content |
| object.image.0.1 (allOf item) | - | - |
| object.image.0.1.type | string | allowed (`"ImageObject"`)  |
| object.image.0.1.id | any | - |
| object.image.0.1.name | any | - |
| object.image.0.1.encodingFormat | any | - |
| object.latitude | number | The latitude of a location. |
| object.listingId | string | the local identifier for the listing (MLS #) |
| object.livingArea | object | property indoor space |
| object.longitude | number | The longitude of a location. |
| object.lotSize | object | outdoor space minValue, maxValue |
| object.numberOfBathrooms | string | the number of bathrooms |
| object.numberOfBedrooms | string | the number of bedrooms |
| object.numberOfRooms | string | the total number of rooms in the building |
| object.postalCode | string | <= 12 characters Zip/Post Code |
| object.propertySubType | string | allowed (`"ApartmentPropertyType"`, `"BoatSlipPropertyType"`, `"CabinPropertyType"`, `"CondominiumPropertyType"`, `"DeededParkingPropertyType"`, `"DuplexPropertyType"`, `"FarmPropertyType"`, `"ManufacturedHomePropertyType"`, `"ManufacturedOnLandPropertyType"`, `"MobileHomePropertyType"`, `"OwnYourOwnPropertyType"`, `"QuadruplexPropertyType"`, `"RanchPropertyType"`, `"SingleFamilyPropertyType"`, `"StockCooperativePropertyType"`, `"TimesharePropertyType"`, `"TownhousePropertyType"`, `"TriplexPropertyType"`, `"AgriculturePropertyType"`, `"BusinessPropertyType"`, `"HotelMotelPropertyType"`, `"IndustrialPropertyType"`, `"MixedUsePropertyType"`, `"MultiFamilyPropertyType"`, `"OfficePropertyType"`, `"RetailPropertyType"`, `"UnimprovedLandPropertyType"`, `"WarehousePropertyType"`) RESO property sub-type (see range for allowed values) |
| object.stories | number | he number of floors in the property |
| object.streetAddress | string | <= 75 characters the street address |
| object.yearBuilt | number | the year the structure was created |
| referral | object | referring agent details |
| referral.type | string | allowed (`"Referral"`) The item type (Linked-Data @type) |
| referral.additionalProperty | object | context specific custom properties |
| referral.additionalProperty.isReferralYN | string | allowed (`"Y"`, `"N"`) Y if transaction was a referral |
| referral.additionalProperty.inNetworkReferralYN | string | allowed (`"Y"`, `"N"`) Y if transaction was referred by an in network agent |
| referral.referredBy | object | the referring entity |
| referral.referredBy.type | string | allowed (`"RealEstateOrganization"`, `"RealEstateAgent"`, `"RealEstateOffice"`, `"Organization"`, `"Person"`) the referring entity type i.e RealEstateOrganization, RealEstateAgent |
| referral.referredBy.id | string | format (`uri`) Linked-Data URI (@id) |
| participant | array<object> | parties with a direct or indirect interest or role in the transaction |
| participant.type | string | const (`"TransactionParticipant"`)  |
| participant.roleName | string | examples (`"Buyer"`, `"Seller"`) the role of the participant in the transaction |
| participant.position | number | numeric position for the participant/roleName. |
| participant.givenName | string | examples (`"John"`, `"Jane"`, `"Mary"`, `"Joseph"`, `"William"`, `"David"`, `"Richard"`, `"Charles"`, `"Thomas"`, `"Christopher"`, `"Daniel"`, `"Matthew"`, `"Anthony"`, `"Donald"`, `"Mark"`, `"Paul"`, `"Steven"`, `"Andrew"`, `"Kenneth"`, `"George"`, `"Joshua"`, `"Kevin"`, `"Brian"`, `"Edward"`, `"Ronald"`, `"Timothy"`, `"Jason"`, `"Jeffrey"`, `"Ryan"`, `"Jacob"`) First Name of a person |
| participant.familyName | string | examples (`"Smith"`, `"Jones"`, `"Parker"`, `"Monk"`, `"Brown"`, `"Miller"`, `"Davis"`, `"Wilson"`, `"Fitzgerald"`, `"Johnson"`, `"Williams"`) <= 50 characters Last Name of a person. [Family Name](https://schema.org/familyName) |
| participant.additionalName | string | middleName or alternate name of the Person |
| participant.email | string | format (`email`)  |
| participant.telephone | string | Primary phone number. |
| participant.affiliation | array<string> | person or organization associated with the participant |
| participant.affiliation (single item) | string | format (`uri`)  |
| transactionEntry | array<object> | commissions and unit entries |
| transactionEntry.type | string | allowed (`"TransactionEntry"`) TransactionEntry |
| transactionEntry.salesProductionUnit | number | [ 0.0001 .. 1 ] the sales production units credited to the recipient |
| transactionEntry.salesProductionGCI | object | gross commission income credited to the recipient |
| transactionEntry.salesProductionGCI.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| transactionEntry.salesProductionGCI.minValue | number | the lower limit of the range |
| transactionEntry.salesProductionGCI.maxValue | number | the upper limit of the range |
| transactionEntry.salesProductionGCI.value | number | the actual or expected value |
| transactionEntry.salesProductionGCI.currency | string | <= 3 characters use ISO4217 country codes |
| transactionEntry.recipient | object | the agent credited with the sales production and who receives the value |
| transactionEntry.recipient.type | string | typically a RealEstateAgent |
| transactionEntry.recipient.roleName | string | allowed (`"ListingAgent"`, `"BuyerAgent"`) enum: ListingAgent,BuyerAgent |
| transactionEntry.recipient.id | string | format (`uri`) Linked-Data URI (@id) |
| transactionEntry.recipient.identifier | object | unique identifier of the recipient from the data producer |
| transactionEntry.recipient.identifier.bmsAgentId | string | <= 12 characters  |
| document | array<object> | any documents, images, etc... related to the transaction. |
| document (single item) | object | - |

## Example



```json
{
  "type": "RealEstateTransaction",
  "identifier": {
    "bmsTransactionId": "0000074792"
  },
  "additionalProperty": {
    "batchId": 4136,
    "transactionSequence": 1,
    "unimprovedLandFlag": true
  },
  "transactionStatus": "ClosedTransactionStatus",
  "transactionType": "ST",
  "reportingOffice": "https://{officeid}.example.com/profile/card#me",
  "listingOffice": "https://{officeid}.example.com/profile/card#me",
  "buyerOffice": "https://{officeid}.example.com/profile/card#me",
  "commissionDate": "2019-08-24T14:15:22Z",
  "closeDate": "2019-08-24T14:15:22Z",
  "purchaseContractDate": "2019-08-24T14:15:22Z",
  "closePrice": {
    "type": "MonetaryAmount",
    "value": 123456.78,
    "currency": "USD"
  },
  "totalSalesProductionGCI": {
    "type": "MonetaryAmount",
    "value": 123456.78,
    "currency": "USD"
  },
  "totalSalesProductionGCIDeduction": {
    "type": "MonetaryAmount",
    "value": 1234.56,
    "currency": "USD"
  },
  "object": {
    "type": "RealEstateProperty",
    "propertyType": "RESI",
    "addressCountry": "US",
    "addressLocality": "string",
    "addressRegion": "New Jersey",
    "apn": "ABC-12345-XX-XXXX",
    "image": [
      {
        "type": "ImageObject",
        "@id": "http://example.com",
        "id": "http://user.example.com/public/logo/image.jpg",
        "name": "image.jpg",
        "encodingFormat": "image/jpeg",
        "about": "http://user.example.com/profile/card#me",
        "url": "http://user.example.com/public/profile/image.jpg"
      }
    ],
    "latitude": 40.75,
    "listingId": "string",
    "livingArea": {
      "type": "QuantitativeValue",
      "unitCode": "SqFt",
      "unitText": "Square Feet",
      "value": 1500
    },
    "longitude": 73.98,
    "lotSize": {
      "type": "QuantitativeValue",
      "unitCode": "AC",
      "unitText": "Acres",
      "value": 0.5
    },
    "numberOfBathrooms": "2",
    "numberOfBedrooms": "3",
    "numberOfRooms": 7,
    "postalCode": "10010",
    "propertySubType": "ApartmentPropertyType",
    "stories": 2,
    "streetAddress": "1007 Mountain Gate Rd",
    "yearBuilt": 1988
  },
  "referral": {
    "type": "Referral",
    "additionalProperty": {
      "isReferralYN": "Y",
      "inNetworkReferralYN": "Y"
    },
    "referredBy": {
      "type": "RealEstateOrganization",
      "id": "http://example.com"
    }
  },
  "participant": [
    {
      "type": "TransactionParticipant",
      "roleName": "Buyer",
      "position": 1,
      "givenName": "John",
      "familyName": "Smith",
      "additionalName": "Big",
      "email": "user@example.com",
      "telephone": "+15558675309",
      "affiliation": [
        "https://{agentid}.example.com/profile/card#me"
      ]
    }
  ],
  "transactionEntry": [
    {
      "type": "TransactionEntry",
      "salesProductionUnit": 0.5,
      "salesProductionGCI": {
        "type": "MonetaryAmount",
        "value": 1234.56,
        "currency": "USD"
      },
      "recipient": {
        "type": "RealEstateAgent",
        "roleName": "ListingAgent",
        "id": "https://{entityid}.example.com/profile/card#me",
        "identifier": {
          "bmsAgentId": "1657897"
        }
      }
    }
  ],
  "document": [
    {
      "type": "DigitalDocument",
      "name": "Sales Contract",
      "encodingFormat": "application/zip",
      "about": {
        "type": "Transaction",
        "identifier": {
          "guruTransactionId": "0000074792"
        }
      },
      "url": "https://example.com/path/to/document.pdf"
    }
  ]
}
```
