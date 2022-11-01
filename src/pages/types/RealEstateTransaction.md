---
title: RealEstateTransaction
route: /types/RealEstateTransaction
menu: Types
---# RealEstateTransaction
describes a sale, purchase and transfer of a real estate property.


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string! | "RealEstateTransaction"  |
| identifier | object! | the data producer's id for the transaction.  |
| identifier.bmsTransactionId | string! |   |
| additionalProperty | object! | vendor/context specific custom properties  |
| additionalProperty.batchId | integer! | identifies the batch for the current transaction  |
| additionalProperty.transactionSequence | integer! | the sequentail order of this transaction report relative to previous reports of the the same RealEstateTransaction  |
| additionalProperty.unimprovedLandFlag | boolean! | true if the transaction subject property is an unimproved lot.  |
| transactionStatus | string | transaction status <br/>RANGE: [TransactionStatus](/types/TransactionStatus) |
| transactionType | string! | transaction type <br/>RANGE: [TransactionType](/types/TransactionType) |
| reportingOffice | string&lt;uri&gt; ! | the reporting office  |
| listingOffice | string&lt;uri&gt;  | the office representing the seller  |
| buyerOffice | string&lt;uri&gt;  | the office representing the buyer  |
| commissionDate | string&lt;date-time&gt;  | date the purchase offer was presented <br/>RANGE: [DateTime](/types/DateTime) |
| closeDate | string&lt;date-time&gt;  | With purchase the date the purchase agreement was fulfilled. With lease, the date the requirements were fulfilled, such as contract and/or deposit. <br/>RANGE: [DateTime](/types/DateTime) |
| purchaseContractDate | string&lt;date-time&gt;  | date of purchase agreement execution (aka sale date) <br/>RANGE: [DateTime](/types/DateTime) |
| closePrice | object | the final sale price of the subject <br/>RANGE: [MonetaryAmount](/types/MonetaryAmount) |
| closePrice.type | string! | MonetaryAmount  |
| closePrice.minValue | number | the lower limit of the range  |
| closePrice.maxValue | number | the upper limit of the range  |
| closePrice.value | number! | the actual or expected value  |
| closePrice.currency | string! | use ISO4217 country codes  |
| totalSalesProductionGCI | object! | the total gci of the transaction <br/>RANGE: [MonetaryAmount](/types/MonetaryAmount) |
| totalSalesProductionGCI.type | string! | MonetaryAmount  |
| totalSalesProductionGCI.minValue | number | the lower limit of the range  |
| totalSalesProductionGCI.maxValue | number | the upper limit of the range  |
| totalSalesProductionGCI.value | number! | the actual or expected value  |
| totalSalesProductionGCI.currency | string! | use ISO4217 country codes  |
| totalSalesProductionGCIDeduction | object! | total gci deductions for the transaction <br/>RANGE: [MonetaryAmount](/types/MonetaryAmount) |
| totalSalesProductionGCIDeduction.type | string! | MonetaryAmount  |
| totalSalesProductionGCIDeduction.minValue | number | the lower limit of the range  |
| totalSalesProductionGCIDeduction.maxValue | number | the upper limit of the range  |
| totalSalesProductionGCIDeduction.value | number! | the actual or expected value  |
| totalSalesProductionGCIDeduction.currency | string! | use ISO4217 country codes  |
| object | object! | a property in the real estate transaction context <br/>RANGE: [RealEstateProperty](/types/RealEstateProperty) |
| object.type | string! | "RealEstateProperty"  |
| object.propertyType | string! | RESO property type (see range for allowed values) <br/>RANGE: [PropertyType](/types/PropertyType) |
| object.addressCountry | string | two-letter ISO 3166-1 alpha-2 country code  |
| object.addressLocality | string | City, Township.  |
| object.addressRegion | string | State or Province.  |
| object.apn | string | Assessors Parcel Number  |
| object.image | [*] | an ImageObject or URI reference to an image on the web. <br/>RANGE: [ImageObject](/types/ImageObject) |
| object.latitude | number | The latitude of a location.  |
| object.listingId | string | the local identifier for the listing (MLS #)  |
| object.livingArea | object | property indoor space <br/>RANGE: [QuantitativeValue](/types/QuantitativeValue) |
| object.longitude | number | The longitude of a location.  |
| object.lotSize | object | outdoor space minValue, maxValue <br/>RANGE: [QuantitativeValue](/types/QuantitativeValue) |
| object.numberOfBathrooms | string | the number of bathrooms  |
| object.numberOfBedrooms | string | the number of bedrooms  |
| object.numberOfRooms | string | the total number of rooms in the building  |
| object.postalCode | string | Zip/Post Code  |
| object.propertySubType | string | RESO property sub-type (see range for allowed values) <br/>RANGE: [PropertySubType](/types/PropertySubType) |
| object.stories | number | he number of floors in the property  |
| object.streetAddress | string | the street address  |
| object.yearBuilt | number | the year the structure was created  |
| referral | object | referring agent details <br/>RANGE: [Referral](/types/Referral) |
| referral.type | string | Referral  |
| referral.additionalProperty | object | context specific custom properties  |
| referral.referredBy | object | the referring entity  |
| participant | [object] | parties with a direct or indirect interest or role in the transaction <br/>RANGE: [TransactionParticipant](/types/TransactionParticipant) |
| participant.type | string | "TransactionParticipant"  |
| participant.roleName | string | enum: Buyer,Seller  |
| participant.position | number | numeric position for the participant/roleName.  |
| participant.givenName | string | First Name of a person  |
| participant.familyName | string | Last Name of a person  |
| participant.additionalName | string | middleName or alternate name of the Person  |
| participant.email | string&lt;email&gt;  | Primary email address.  |
| participant.telephone | string | Primary phone number.  |
| participant.affiliation | [string&lt;uri&gt; ] | person or organization associated with the participant  |
| transactionEntry | [object] | commissions and unit entries <br/>RANGE: [TransactionEntry](/types/TransactionEntry) |
| transactionEntry.type | string | TransactionEntry  |
| transactionEntry.salesProductionUnit | number | the sales production units credited to the recipient  |
| transactionEntry.salesProductionGCI | object | gross commission income credited to the recipient <br/>RANGE: [MonetaryAmount](/types/MonetaryAmount) |
| transactionEntry.recipient | object | the agent credited with the sales production and who receives the value  |
| document | [object] | any documents, images, etc... related to the transaction. <br/>RANGE: [DigitalDocument](/types/DigitalDocument) |

### Example
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
  "commissionDate": "2022-10-12T01:13:43Z",
  "closeDate": "2022-10-12T01:13:43Z",
  "purchaseContractDate": "2022-10-12T01:13:43Z",
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
    "addressLocality": "Gotham City",
    "addressRegion": "New Jersey",
    "apn": "ABC-12345-XX-XXXX",
    "image": [
      {
        "type": "ImageObject",
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
      "givenName": "Glenn",
      "familyName": "Miller",
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
