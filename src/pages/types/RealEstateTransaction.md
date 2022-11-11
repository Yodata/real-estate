---
title: RealEstateTransaction
---
## Schema

| Name | Type | Description |
|---|---|---|
| (RealEstateTransaction) | object | describes a sale, purchase and transfer of a real estate property. |
| type | string | - |
| identifier | object | the data producer's id for the transaction. |
| identifier.bmsTransactionId | string |  <span class='constraints'><= 12 characters</span> |
| additionalProperty | object | vendor/context specific custom properties |
| additionalProperty.batchId | integer | identifies the batch for the current transaction |
| additionalProperty.transactionSequence | integer | the sequentail order of this transaction report relative to previous reports of the the same RealEstateTransaction <span class='constraints'>>= 0</span> |
| additionalProperty.unimprovedLandFlag | boolean | true if the transaction subject property is an unimproved lot. |
| transactionStatus | string | transaction status |
| transactionType | string | transaction type |
| reportingOffice | string | the reporting office <span class='constraints'>format (`uri`)</span> |
| listingOffice | string | the office representing the seller <span class='constraints'>format (`uri`)</span> |
| buyerOffice | string | the office representing the buyer <span class='constraints'>format (`uri`)</span> |
| commissionDate | string | date the purchase offer was presented <span class='constraints'>format (`date-time`)</span> |
| closeDate | string | With purchase the date the purchase agreement was fulfilled. With lease, the date the requirements were fulfilled, such as contract and/or deposit. <span class='constraints'>format (`date-time`)</span> |
| purchaseContractDate | string | date of purchase agreement execution (aka sale date) <span class='constraints'>format (`date-time`)</span> |
| closePrice | object | the final sale price of the subject |
| closePrice.type | string | MonetaryAmount |
| closePrice.minValue | number | the lower limit of the range |
| closePrice.maxValue | number | the upper limit of the range |
| closePrice.value | number | the actual or expected value |
| closePrice.currency | string | use ISO4217 country codes <span class='constraints'><= 3 characters</span> |
| totalSalesProductionGCI | object | the total gci of the transaction |
| totalSalesProductionGCI.type | string | MonetaryAmount |
| totalSalesProductionGCI.minValue | number | the lower limit of the range |
| totalSalesProductionGCI.maxValue | number | the upper limit of the range |
| totalSalesProductionGCI.value | number | the actual or expected value |
| totalSalesProductionGCI.currency | string | use ISO4217 country codes <span class='constraints'><= 3 characters</span> |
| totalSalesProductionGCIDeduction | object | total gci deductions for the transaction |
| totalSalesProductionGCIDeduction.type | string | MonetaryAmount |
| totalSalesProductionGCIDeduction.minValue | number | the lower limit of the range |
| totalSalesProductionGCIDeduction.maxValue | number | the upper limit of the range |
| totalSalesProductionGCIDeduction.value | number | the actual or expected value |
| totalSalesProductionGCIDeduction.currency | string | use ISO4217 country codes <span class='constraints'><= 3 characters</span> |
| object | object | a property in the real estate transaction context |
| object.type | string | "RealEstateProperty" |
| object.propertyType | string | RESO property type (see range for allowed values) <span class='constraints'>4 characters</span> |
| object.addressCountry | string | two-letter ISO 3166-1 alpha-2 country code |
| object.addressLocality | string | City, Township. <span class='constraints'><= 50 characters</span> |
| object.addressRegion | string | State or Province. <span class='constraints'><= 3 characters</span> |
| object.apn | string | Assessors Parcel Number |
| object.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| object.image.0 (index) | object allOf | - |
| object.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| object.image.0.0.0 (allOf item) | object | - |
| object.image.0.0.0.type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| object.image.0.0.0.@id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| object.image.0.0.0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| object.image.0.0.1 (allOf item) | - | - |
| object.image.0.0.1.type | string | - |
| object.image.0.0.1.id | string | the URL to access the item. <span class='constraints'>format (`uri`)</span> |
| object.image.0.0.1.name | string | the file name of the object. |
| object.image.0.0.1.encodingFormat | string | MIME type |
| object.image.0.0.1.about | string | URI to the subject of the image or logo <span class='constraints'>format (`uri`)</span> |
| object.image.0.0.1.url | string | URL of the image content <span class='constraints'>format (`uri`)</span> |
| object.image.0.1 (allOf item) | - | - |
| object.image.0.1.type | string | - |
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
| object.postalCode | string | Zip/Post Code <span class='constraints'><= 12 characters</span> |
| object.propertySubType | string | RESO property sub-type (see range for allowed values) |
| object.stories | number | he number of floors in the property |
| object.streetAddress | string | the street address <span class='constraints'><= 75 characters</span> |
| object.yearBuilt | number | the year the structure was created |
| referral | object | referring agent details |
| referral.type | string | The item type (Linked-Data @type) |
| referral.additionalProperty | object | context specific custom properties |
| referral.additionalProperty.isReferralYN | string | Y if transaction was a referral |
| referral.additionalProperty.inNetworkReferralYN | string | Y if transaction was referred by an in network agent |
| referral.referredBy | object | the referring entity |
| referral.referredBy.type | string | the referring entity type i.e RealEstateOrganization, RealEstateAgent |
| referral.referredBy.id | string | Linked-Data URI (@id) <span class='constraints'>format (`uri`)</span> |
| participant | array<object> | parties with a direct or indirect interest or role in the transaction |
| participant.type | string | - |
| participant.roleName | string | the role of the participant in the transaction |
| participant.position | number | numeric position for the participant/roleName. |
| participant.givenName | string | First Name of a person |
| participant.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) <span class='constraints'><= 50 characters</span> |
| participant.additionalName | string | middleName or alternate name of the Person |
| participant.email | string |  <span class='constraints'>format (`email`)</span> |
| participant.telephone | string | Primary phone number. |
| participant.affiliation | array<string> | person or organization associated with the participant |
| participant.affiliation (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| transactionEntry | array<object> | commissions and unit entries |
| transactionEntry.type | string | TransactionEntry |
| transactionEntry.salesProductionUnit | number | the sales production units credited to the recipient <span class='constraints'>[ 0.0001 .. 1 ]</span> |
| transactionEntry.salesProductionGCI | object | gross commission income credited to the recipient |
| transactionEntry.salesProductionGCI.type | string | MonetaryAmount |
| transactionEntry.salesProductionGCI.minValue | number | the lower limit of the range |
| transactionEntry.salesProductionGCI.maxValue | number | the upper limit of the range |
| transactionEntry.salesProductionGCI.value | number | the actual or expected value |
| transactionEntry.salesProductionGCI.currency | string | use ISO4217 country codes <span class='constraints'><= 3 characters</span> |
| transactionEntry.recipient | object | the agent credited with the sales production and who receives the value |
| transactionEntry.recipient.type | string | typically a RealEstateAgent |
| transactionEntry.recipient.roleName | string | enum: ListingAgent,BuyerAgent |
| transactionEntry.recipient.id | string | Linked-Data URI (@id) <span class='constraints'>format (`uri`)</span> |
| transactionEntry.recipient.identifier | object | unique identifier of the recipient from the data producer |
| transactionEntry.recipient.identifier.bmsAgentId | string |  <span class='constraints'><= 12 characters</span> |
| document | array<object> | any documents, images, etc... related to the transaction. |
| document (single item) | object | - |
| type | string | - |
| identifier | object | the data producer's id for the transaction. |
| identifier.bmsTransactionId | string |  <span class='constraints'><= 12 characters</span> |
| additionalProperty | object | vendor/context specific custom properties |
| additionalProperty.batchId | integer | identifies the batch for the current transaction |
| additionalProperty.transactionSequence | integer | the sequentail order of this transaction report relative to previous reports of the the same RealEstateTransaction <span class='constraints'>>= 0</span> |
| additionalProperty.unimprovedLandFlag | boolean | true if the transaction subject property is an unimproved lot. |
| transactionStatus | string | transaction status |
| transactionType | string | transaction type |
| reportingOffice | string | the reporting office <span class='constraints'>format (`uri`)</span> |
| listingOffice | string | the office representing the seller <span class='constraints'>format (`uri`)</span> |
| buyerOffice | string | the office representing the buyer <span class='constraints'>format (`uri`)</span> |
| commissionDate | string | date the purchase offer was presented <span class='constraints'>format (`date-time`)</span> |
| closeDate | string | With purchase the date the purchase agreement was fulfilled. With lease, the date the requirements were fulfilled, such as contract and/or deposit. <span class='constraints'>format (`date-time`)</span> |
| purchaseContractDate | string | date of purchase agreement execution (aka sale date) <span class='constraints'>format (`date-time`)</span> |
| closePrice | object | the final sale price of the subject |
| closePrice.type | string | MonetaryAmount |
| closePrice.minValue | number | the lower limit of the range |
| closePrice.maxValue | number | the upper limit of the range |
| closePrice.value | number | the actual or expected value |
| closePrice.currency | string | use ISO4217 country codes <span class='constraints'><= 3 characters</span> |
| totalSalesProductionGCI | object | the total gci of the transaction |
| totalSalesProductionGCI.type | string | MonetaryAmount |
| totalSalesProductionGCI.minValue | number | the lower limit of the range |
| totalSalesProductionGCI.maxValue | number | the upper limit of the range |
| totalSalesProductionGCI.value | number | the actual or expected value |
| totalSalesProductionGCI.currency | string | use ISO4217 country codes <span class='constraints'><= 3 characters</span> |
| totalSalesProductionGCIDeduction | object | total gci deductions for the transaction |
| totalSalesProductionGCIDeduction.type | string | MonetaryAmount |
| totalSalesProductionGCIDeduction.minValue | number | the lower limit of the range |
| totalSalesProductionGCIDeduction.maxValue | number | the upper limit of the range |
| totalSalesProductionGCIDeduction.value | number | the actual or expected value |
| totalSalesProductionGCIDeduction.currency | string | use ISO4217 country codes <span class='constraints'><= 3 characters</span> |
| object | object | a property in the real estate transaction context |
| object.type | string | "RealEstateProperty" |
| object.propertyType | string | RESO property type (see range for allowed values) <span class='constraints'>4 characters</span> |
| object.addressCountry | string | two-letter ISO 3166-1 alpha-2 country code |
| object.addressLocality | string | City, Township. <span class='constraints'><= 50 characters</span> |
| object.addressRegion | string | State or Province. <span class='constraints'><= 3 characters</span> |
| object.apn | string | Assessors Parcel Number |
| object.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| object.image.0 (index) | object allOf | - |
| object.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| object.image.0.0.0 (allOf item) | object | - |
| object.image.0.0.0.type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| object.image.0.0.0.@id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| object.image.0.0.0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| object.image.0.0.1 (allOf item) | - | - |
| object.image.0.0.1.type | string | - |
| object.image.0.0.1.id | string | the URL to access the item. <span class='constraints'>format (`uri`)</span> |
| object.image.0.0.1.name | string | the file name of the object. |
| object.image.0.0.1.encodingFormat | string | MIME type |
| object.image.0.0.1.about | string | URI to the subject of the image or logo <span class='constraints'>format (`uri`)</span> |
| object.image.0.0.1.url | string | URL of the image content <span class='constraints'>format (`uri`)</span> |
| object.image.0.1 (allOf item) | - | - |
| object.image.0.1.type | string | - |
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
| object.postalCode | string | Zip/Post Code <span class='constraints'><= 12 characters</span> |
| object.propertySubType | string | RESO property sub-type (see range for allowed values) |
| object.stories | number | he number of floors in the property |
| object.streetAddress | string | the street address <span class='constraints'><= 75 characters</span> |
| object.yearBuilt | number | the year the structure was created |
| referral | object | referring agent details |
| referral.type | string | The item type (Linked-Data @type) |
| referral.additionalProperty | object | context specific custom properties |
| referral.additionalProperty.isReferralYN | string | Y if transaction was a referral |
| referral.additionalProperty.inNetworkReferralYN | string | Y if transaction was referred by an in network agent |
| referral.referredBy | object | the referring entity |
| referral.referredBy.type | string | the referring entity type i.e RealEstateOrganization, RealEstateAgent |
| referral.referredBy.id | string | Linked-Data URI (@id) <span class='constraints'>format (`uri`)</span> |
| participant | array<object> | parties with a direct or indirect interest or role in the transaction |
| participant.type | string | - |
| participant.roleName | string | the role of the participant in the transaction |
| participant.position | number | numeric position for the participant/roleName. |
| participant.givenName | string | First Name of a person |
| participant.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) <span class='constraints'><= 50 characters</span> |
| participant.additionalName | string | middleName or alternate name of the Person |
| participant.email | string |  <span class='constraints'>format (`email`)</span> |
| participant.telephone | string | Primary phone number. |
| participant.affiliation | array<string> | person or organization associated with the participant |
| participant.affiliation (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| transactionEntry | array<object> | commissions and unit entries |
| transactionEntry.type | string | TransactionEntry |
| transactionEntry.salesProductionUnit | number | the sales production units credited to the recipient <span class='constraints'>[ 0.0001 .. 1 ]</span> |
| transactionEntry.salesProductionGCI | object | gross commission income credited to the recipient |
| transactionEntry.salesProductionGCI.type | string | MonetaryAmount |
| transactionEntry.salesProductionGCI.minValue | number | the lower limit of the range |
| transactionEntry.salesProductionGCI.maxValue | number | the upper limit of the range |
| transactionEntry.salesProductionGCI.value | number | the actual or expected value |
| transactionEntry.salesProductionGCI.currency | string | use ISO4217 country codes <span class='constraints'><= 3 characters</span> |
| transactionEntry.recipient | object | the agent credited with the sales production and who receives the value |
| transactionEntry.recipient.type | string | typically a RealEstateAgent |
| transactionEntry.recipient.roleName | string | enum: ListingAgent,BuyerAgent |
| transactionEntry.recipient.id | string | Linked-Data URI (@id) <span class='constraints'>format (`uri`)</span> |
| transactionEntry.recipient.identifier | object | unique identifier of the recipient from the data producer |
| transactionEntry.recipient.identifier.bmsAgentId | string |  <span class='constraints'><= 12 characters</span> |
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
