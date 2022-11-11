---
title: RealEstateTransaction
---
| Name | Type | Description |
|---|---|---|
| (root) | object | describes a sale, purchase and transfer of a real estate property. |
| RealEstateTransaction.type | string | - |
| RealEstateTransaction.identifier | object | the data producer's id for the transaction. |
| RealEstateTransaction.identifier.bmsTransactionId | string | - |
| RealEstateTransaction.additionalProperty | object | vendor/context specific custom properties |
| RealEstateTransaction.additionalProperty.batchId | integer | identifies the batch for the current transaction |
| RealEstateTransaction.additionalProperty.transactionSequence | integer | the sequentail order of this transaction report relative to previous reports of the the same RealEstateTransaction |
| RealEstateTransaction.additionalProperty.unimprovedLandFlag | boolean | true if the transaction subject property is an unimproved lot. |
| RealEstateTransaction.transactionStatus | string | transaction status |
| RealEstateTransaction.transactionType | string | transaction type |
| RealEstateTransaction.reportingOffice | string | the reporting office |
| RealEstateTransaction.listingOffice | string | the office representing the seller |
| RealEstateTransaction.buyerOffice | string | the office representing the buyer |
| RealEstateTransaction.commissionDate | string | date the purchase offer was presented |
| RealEstateTransaction.closeDate | string | With purchase the date the purchase agreement was fulfilled. With lease, the date the requirements were fulfilled, such as contract and/or deposit. |
| RealEstateTransaction.purchaseContractDate | string | date of purchase agreement execution (aka sale date) |
| RealEstateTransaction.closePrice | object | the final sale price of the subject |
| RealEstateTransaction.closePrice.type | string | MonetaryAmount |
| RealEstateTransaction.closePrice.minValue | number | the lower limit of the range |
| RealEstateTransaction.closePrice.maxValue | number | the upper limit of the range |
| RealEstateTransaction.closePrice.value | number | the actual or expected value |
| RealEstateTransaction.closePrice.currency | string | use ISO4217 country codes |
| RealEstateTransaction.totalSalesProductionGCI | object | the total gci of the transaction |
| RealEstateTransaction.totalSalesProductionGCI.type | string | MonetaryAmount |
| RealEstateTransaction.totalSalesProductionGCI.minValue | number | the lower limit of the range |
| RealEstateTransaction.totalSalesProductionGCI.maxValue | number | the upper limit of the range |
| RealEstateTransaction.totalSalesProductionGCI.value | number | the actual or expected value |
| RealEstateTransaction.totalSalesProductionGCI.currency | string | use ISO4217 country codes |
| RealEstateTransaction.totalSalesProductionGCIDeduction | object | total gci deductions for the transaction |
| RealEstateTransaction.totalSalesProductionGCIDeduction.type | string | MonetaryAmount |
| RealEstateTransaction.totalSalesProductionGCIDeduction.minValue | number | the lower limit of the range |
| RealEstateTransaction.totalSalesProductionGCIDeduction.maxValue | number | the upper limit of the range |
| RealEstateTransaction.totalSalesProductionGCIDeduction.value | number | the actual or expected value |
| RealEstateTransaction.totalSalesProductionGCIDeduction.currency | string | use ISO4217 country codes |
| RealEstateTransaction.object | object | a property in the real estate transaction context |
| RealEstateTransaction.object.type | string | "RealEstateProperty" |
| RealEstateTransaction.object.propertyType | string | RESO property type (see range for allowed values) |
| RealEstateTransaction.object.addressCountry | string | two-letter ISO 3166-1 alpha-2 country code |
| RealEstateTransaction.object.addressLocality | string | City, Township. |
| RealEstateTransaction.object.addressRegion | string | State or Province. |
| RealEstateTransaction.object.apn | string | Assessors Parcel Number |
| RealEstateTransaction.object.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| RealEstateTransaction.object.image.0 (index) | object allOf | - |
| RealEstateTransaction.object.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| RealEstateTransaction.object.image.0.0.0 (allOf item) | object | - |
| RealEstateTransaction.object.image.0.0.0.type | string | The item type (Linked-Data @type) |
| RealEstateTransaction.object.image.0.0.0.@id | string | the liked data uri for the Thing |
| RealEstateTransaction.object.image.0.0.0 (property names) | - | - |
| RealEstateTransaction.object.image.0.0.1 (allOf item) | - | - |
| RealEstateTransaction.object.image.0.0.1.type | string | - |
| RealEstateTransaction.object.image.0.0.1.id | string | the URL to access the item. |
| RealEstateTransaction.object.image.0.0.1.name | string | the file name of the object. |
| RealEstateTransaction.object.image.0.0.1.encodingFormat | string | MIME type |
| RealEstateTransaction.object.image.0.0.1.about | string | URI to the subject of the image or logo |
| RealEstateTransaction.object.image.0.0.1.url | string | URL of the image content |
| RealEstateTransaction.object.image.0.1 (allOf item) | - | - |
| RealEstateTransaction.object.image.0.1.type | string | - |
| RealEstateTransaction.object.image.0.1.id | any | - |
| RealEstateTransaction.object.image.0.1.name | any | - |
| RealEstateTransaction.object.image.0.1.encodingFormat | any | - |
| RealEstateTransaction.object.latitude | number | The latitude of a location. |
| RealEstateTransaction.object.listingId | string | the local identifier for the listing (MLS #) |
| RealEstateTransaction.object.livingArea | object | property indoor space |
| RealEstateTransaction.object.longitude | number | The longitude of a location. |
| RealEstateTransaction.object.lotSize | object | outdoor space minValue, maxValue |
| RealEstateTransaction.object.numberOfBathrooms | string | the number of bathrooms |
| RealEstateTransaction.object.numberOfBedrooms | string | the number of bedrooms |
| RealEstateTransaction.object.numberOfRooms | string | the total number of rooms in the building |
| RealEstateTransaction.object.postalCode | string | Zip/Post Code |
| RealEstateTransaction.object.propertySubType | string | RESO property sub-type (see range for allowed values) |
| RealEstateTransaction.object.stories | number | he number of floors in the property |
| RealEstateTransaction.object.streetAddress | string | the street address |
| RealEstateTransaction.object.yearBuilt | number | the year the structure was created |
| RealEstateTransaction.referral | object | referring agent details |
| RealEstateTransaction.referral.type | string | The item type (Linked-Data @type) |
| RealEstateTransaction.referral.additionalProperty | object | context specific custom properties |
| RealEstateTransaction.referral.additionalProperty.isReferralYN | string | Y if transaction was a referral |
| RealEstateTransaction.referral.additionalProperty.inNetworkReferralYN | string | Y if transaction was referred by an in network agent |
| RealEstateTransaction.referral.referredBy | object | the referring entity |
| RealEstateTransaction.referral.referredBy.type | string | the referring entity type i.e RealEstateOrganization, RealEstateAgent |
| RealEstateTransaction.referral.referredBy.id | string | Linked-Data URI (@id) |
| RealEstateTransaction.participant | array<object> | parties with a direct or indirect interest or role in the transaction |
| RealEstateTransaction.participant.type | string | - |
| RealEstateTransaction.participant.roleName | string | the role of the participant in the transaction |
| RealEstateTransaction.participant.position | number | numeric position for the participant/roleName. |
| RealEstateTransaction.participant.givenName | string | First Name of a person |
| RealEstateTransaction.participant.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) |
| RealEstateTransaction.participant.additionalName | string | middleName or alternate name of the Person |
| RealEstateTransaction.participant.email | string | - |
| RealEstateTransaction.participant.telephone | string | Primary phone number. |
| RealEstateTransaction.participant.affiliation | array<string> | person or organization associated with the participant |
| RealEstateTransaction.participant.affiliation (single item) | string | - |
| RealEstateTransaction.transactionEntry | array<object> | commissions and unit entries |
| RealEstateTransaction.transactionEntry.type | string | TransactionEntry |
| RealEstateTransaction.transactionEntry.salesProductionUnit | number | the sales production units credited to the recipient |
| RealEstateTransaction.transactionEntry.salesProductionGCI | object | gross commission income credited to the recipient |
| RealEstateTransaction.transactionEntry.salesProductionGCI.type | string | MonetaryAmount |
| RealEstateTransaction.transactionEntry.salesProductionGCI.minValue | number | the lower limit of the range |
| RealEstateTransaction.transactionEntry.salesProductionGCI.maxValue | number | the upper limit of the range |
| RealEstateTransaction.transactionEntry.salesProductionGCI.value | number | the actual or expected value |
| RealEstateTransaction.transactionEntry.salesProductionGCI.currency | string | use ISO4217 country codes |
| RealEstateTransaction.transactionEntry.recipient | object | the agent credited with the sales production and who receives the value |
| RealEstateTransaction.transactionEntry.recipient.type | string | typically a RealEstateAgent |
| RealEstateTransaction.transactionEntry.recipient.roleName | string | enum: ListingAgent,BuyerAgent |
| RealEstateTransaction.transactionEntry.recipient.id | string | Linked-Data URI (@id) |
| RealEstateTransaction.transactionEntry.recipient.identifier | object | unique identifier of the recipient from the data producer |
| RealEstateTransaction.transactionEntry.recipient.identifier.bmsAgentId | string | - |
| RealEstateTransaction.document | array<object> | any documents, images, etc... related to the transaction. |
| RealEstateTransaction.document (single item) | object | - |

> Examples of RealEstateTransaction

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


