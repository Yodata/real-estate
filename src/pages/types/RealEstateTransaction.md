---
title: RealEstateTransaction
---
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
    "addressCountry": "CA",
    "addressLocality": "Gotham City",
    "addressRegion": "NJ",
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

## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | describes a sale, purchase and transfer of a real estate property. |
| type | string | const (`"RealEstateTransaction"`)  |
| identifier | object | the data producer's id for the transaction. |
| identifier.bmsTransactionId | string |  <= 12 characters |
| additionalProperty | object | vendor/context specific custom properties |
| additionalProperty.batchId | integer | identifies the batch for the current transaction |
| additionalProperty.transactionSequence | integer | the sequentail order of this transaction report relative to previous reports of the the same RealEstateTransaction >= 0 |
| additionalProperty.unimprovedLandFlag | boolean | true if the transaction subject property is an unimproved lot. |
| transactionStatus | string | allowed (`"PendingTransactionStatus"`, `"ClosedTransactionStatus"`, `"CanceledTransactionStatus"`) transaction status |
| transactionType | string | allowed (`"ST"`, `"LS"`, `"OI"`, `"PM"`, `"RF"`) transaction type |
| reportingOffice | string | the reporting office format (`uri`) |
| listingOffice | string | the office representing the seller format (`uri`) |
| buyerOffice | string | the office representing the buyer format (`uri`) |
| commissionDate | string | date the purchase offer was presented format (`date-time`) |
| closeDate | string | With purchase the date the purchase agreement was fulfilled. With lease, the date the requirements were fulfilled, such as contract and/or deposit. format (`date-time`) |
| purchaseContractDate | string | date of purchase agreement execution (aka sale date) format (`date-time`) |
| closePrice | object | the final sale price of the subject |
| closePrice.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| closePrice.minValue | number | the lower limit of the range |
| closePrice.maxValue | number | the upper limit of the range |
| closePrice.value | number | the actual or expected value |
| closePrice.currency | string | use ISO4217 country codes <= 3 characters |
| totalSalesProductionGCI | object | the total gci of the transaction |
| totalSalesProductionGCI.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| totalSalesProductionGCI.minValue | number | the lower limit of the range |
| totalSalesProductionGCI.maxValue | number | the upper limit of the range |
| totalSalesProductionGCI.value | number | the actual or expected value |
| totalSalesProductionGCI.currency | string | use ISO4217 country codes <= 3 characters |
| totalSalesProductionGCIDeduction | object | total gci deductions for the transaction |
| totalSalesProductionGCIDeduction.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| totalSalesProductionGCIDeduction.minValue | number | the lower limit of the range |
| totalSalesProductionGCIDeduction.maxValue | number | the upper limit of the range |
| totalSalesProductionGCIDeduction.value | number | the actual or expected value |
| totalSalesProductionGCIDeduction.currency | string | use ISO4217 country codes <= 3 characters |
| object | object | a property in the real estate transaction context |
| object.type | string | allowed (`"RealEstateProperty"`) "RealEstateProperty" |
| object.propertyType | string | allowed (`"RESI"`, `"RLSE"`, `"RINC"`, `"LAND"`, `"MOBI"`, `"FARM"`, `"COMS"`, `"COML"`, `"BUSO"`) RESO property type (see range for allowed values) 4 characters |
| object.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| object.addressLocality | string | City, Township. <= 50 characters |
| object.addressRegion | string | abbreviated state or province |
| object.apn | string | Assessors Parcel Number |
| object.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| object.image.0 (index) | object allOf | - |
| object.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| object.image.0.0.0 (allOf item) | object | - |
| object.image.0.0.0.type | string | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`) |
| object.image.0.0.0.@id | string | the liked data uri for the Thing format (`uri`) |
| object.image.0.0.0 (property names) | - |  pattern (`^[a-z@$][a-zA-Z0-9-_]+$`) |
| object.image.0.0.1 (allOf item) | - | - |
| object.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| object.image.0.0.1.id | string | the URL to access the item. format (`uri`) |
| object.image.0.0.1.name | string | the file name of the object. |
| object.image.0.0.1.encodingFormat | string | MIME type |
| object.image.0.0.1.about | string | URI to the subject of the image or logo format (`uri`) |
| object.image.0.0.1.url | string | URL of the image content format (`uri`) |
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
| object.postalCode | string | Zip/Post Code <= 12 characters |
| object.propertySubType | string | allowed (`"ApartmentPropertyType"`, `"BoatSlipPropertyType"`, `"CabinPropertyType"`, `"CondominiumPropertyType"`, `"DeededParkingPropertyType"`, `"DuplexPropertyType"`, `"FarmPropertyType"`, `"ManufacturedHomePropertyType"`, `"ManufacturedOnLandPropertyType"`, `"MobileHomePropertyType"`, `"OwnYourOwnPropertyType"`, `"QuadruplexPropertyType"`, `"RanchPropertyType"`, `"SingleFamilyPropertyType"`, `"StockCooperativePropertyType"`, `"TimesharePropertyType"`, `"TownhousePropertyType"`, `"TriplexPropertyType"`, `"AgriculturePropertyType"`, `"BusinessPropertyType"`, `"HotelMotelPropertyType"`, `"IndustrialPropertyType"`, `"MixedUsePropertyType"`, `"MultiFamilyPropertyType"`, `"OfficePropertyType"`, `"RetailPropertyType"`, `"UnimprovedLandPropertyType"`, `"WarehousePropertyType"`) RESO property sub-type (see range for allowed values) |
| object.stories | number | he number of floors in the property |
| object.streetAddress | string | the street address <= 75 characters |
| object.yearBuilt | number | the year the structure was created |
| referral | object | referring agent details |
| referral.type | string | allowed (`"Referral"`) The item type (Linked-Data @type) |
| referral.additionalProperty | object | context specific custom properties |
| referral.additionalProperty.isReferralYN | string | allowed (`"Y"`, `"N"`) Y if transaction was a referral |
| referral.additionalProperty.inNetworkReferralYN | string | allowed (`"Y"`, `"N"`) Y if transaction was referred by an in network agent |
| referral.referredBy | object | the referring entity |
| referral.referredBy.type | string | allowed (`"RealEstateOrganization"`, `"RealEstateAgent"`, `"RealEstateOffice"`, `"Organization"`, `"Person"`) the referring entity type i.e RealEstateOrganization, RealEstateAgent |
| referral.referredBy.id | string | Linked-Data URI (@id) format (`uri`) |
| participant | array<object> | parties with a direct or indirect interest or role in the transaction |
| participant.type | string | const (`"TransactionParticipant"`)  |
| participant.roleName | string | the role of the participant in the transaction |
| participant.position | number | numeric position for the participant/roleName. |
| participant.givenName | string | First Name of a person |
| participant.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) <= 50 characters |
| participant.additionalName | string | middleName or alternate name of the Person |
| participant.email | string | a valid email address format (`email`) |
| participant.telephone | string | Primary phone number. |
| participant.affiliation | array<string> | person or organization associated with the participant |
| participant.affiliation (single item) | string |  format (`uri`) |
| transactionEntry | array<object> | commissions and unit entries |
| transactionEntry.type | string | allowed (`"TransactionEntry"`) TransactionEntry |
| transactionEntry.salesProductionUnit | number | the sales production units credited to the recipient [ 0.0001 .. 1 ] |
| transactionEntry.salesProductionGCI | object | gross commission income credited to the recipient |
| transactionEntry.salesProductionGCI.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| transactionEntry.salesProductionGCI.minValue | number | the lower limit of the range |
| transactionEntry.salesProductionGCI.maxValue | number | the upper limit of the range |
| transactionEntry.salesProductionGCI.value | number | the actual or expected value |
| transactionEntry.salesProductionGCI.currency | string | use ISO4217 country codes <= 3 characters |
| transactionEntry.recipient | object | the agent credited with the sales production and who receives the value |
| transactionEntry.recipient.type | string | typically a RealEstateAgent |
| transactionEntry.recipient.roleName | string | allowed (`"ListingAgent"`, `"BuyerAgent"`) enum: ListingAgent,BuyerAgent |
| transactionEntry.recipient.id | string | Linked-Data URI (@id) format (`uri`) |
| transactionEntry.recipient.identifier | object | unique identifier of the recipient from the data producer |
| transactionEntry.recipient.identifier.bmsAgentId | string |  <= 12 characters |
| document | array<object> | any documents, images, etc... related to the transaction. |
| document (single item) | object | - |

