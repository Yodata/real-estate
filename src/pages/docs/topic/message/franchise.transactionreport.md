---
title: franchise#transactionreport
---
## franchise#transactionreport

*Franchise transaction report of transaction for sales production reporting.*

* MessageId: franchise#transactionreport
* Content type: application/json

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


### Headers

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| time | string | date & time the event was produced |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient |
| instrument | string | the app or service that produced the event on behalf of the agent/user |
| source | string | a copy of the event was sent to the source(s). |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. |
| @id | string | - |

### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.instrument | object | the application or service used that generated the report |
| data.instrument.type | string | - |
| data.instrument.name | string | - |
| data.object | object | describes a sale, purchase and transfer of a real estate property. |
| data.object.type | string | - |
| data.object.identifier | object | the data producer's id for the transaction. |
| data.object.identifier.bmsTransactionId | string | - |
| data.object.additionalProperty | object | vendor/context specific custom properties |
| data.object.additionalProperty.batchId | integer | identifies the batch for the current transaction |
| data.object.additionalProperty.transactionSequence | integer | the sequentail order of this transaction report relative to previous reports of the the same RealEstateTransaction |
| data.object.additionalProperty.unimprovedLandFlag | boolean | true if the transaction subject property is an unimproved lot. |
| data.object.transactionStatus | string | transaction status |
| data.object.transactionType | string | transaction type |
| data.object.reportingOffice | string | the reporting office |
| data.object.listingOffice | string | the office representing the seller |
| data.object.buyerOffice | string | the office representing the buyer |
| data.object.commissionDate | string | date the purchase offer was presented |
| data.object.closeDate | string | With purchase the date the purchase agreement was fulfilled. With lease, the date the requirements were fulfilled, such as contract and/or deposit. |
| data.object.purchaseContractDate | string | date of purchase agreement execution (aka sale date) |
| data.object.closePrice | object | the final sale price of the subject |
| data.object.closePrice.type | string | MonetaryAmount |
| data.object.closePrice.minValue | number | the lower limit of the range |
| data.object.closePrice.maxValue | number | the upper limit of the range |
| data.object.closePrice.value | number | the actual or expected value |
| data.object.closePrice.currency | string | use ISO4217 country codes |
| data.object.totalSalesProductionGCI | object | the total gci of the transaction |
| data.object.totalSalesProductionGCI.type | string | MonetaryAmount |
| data.object.totalSalesProductionGCI.minValue | number | the lower limit of the range |
| data.object.totalSalesProductionGCI.maxValue | number | the upper limit of the range |
| data.object.totalSalesProductionGCI.value | number | the actual or expected value |
| data.object.totalSalesProductionGCI.currency | string | use ISO4217 country codes |
| data.object.totalSalesProductionGCIDeduction | object | total gci deductions for the transaction |
| data.object.totalSalesProductionGCIDeduction.type | string | MonetaryAmount |
| data.object.totalSalesProductionGCIDeduction.minValue | number | the lower limit of the range |
| data.object.totalSalesProductionGCIDeduction.maxValue | number | the upper limit of the range |
| data.object.totalSalesProductionGCIDeduction.value | number | the actual or expected value |
| data.object.totalSalesProductionGCIDeduction.currency | string | use ISO4217 country codes |
| data.object.object | object | a property in the real estate transaction context |
| data.object.object.type | string | "RealEstateProperty" |
| data.object.object.propertyType | string | RESO property type (see range for allowed values) |
| data.object.object.addressCountry | string | two-letter ISO 3166-1 alpha-2 country code |
| data.object.object.addressLocality | string | City, Township. |
| data.object.object.addressRegion | string | State or Province. |
| data.object.object.apn | string | Assessors Parcel Number |
| data.object.object.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.object.image.0 (index) | object allOf | - |
| data.object.object.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.object.image.0.0.0 (allOf item) | object | - |
| data.object.object.image.0.0.0.type | string | The item type (Linked-Data @type) |
| data.object.object.image.0.0.0.@id | string | the liked data uri for the Thing |
| data.object.object.image.0.0.0 (property names) | - | - |
| data.object.object.image.0.0.1 (allOf item) | - | - |
| data.object.object.image.0.0.1.type | string | - |
| data.object.object.image.0.0.1.id | string | the URL to access the item. |
| data.object.object.image.0.0.1.name | string | the file name of the object. |
| data.object.object.image.0.0.1.encodingFormat | string | MIME type |
| data.object.object.image.0.0.1.about | string | URI to the subject of the image or logo |
| data.object.object.image.0.0.1.url | string | URL of the image content |
| data.object.object.image.0.1 (allOf item) | - | - |
| data.object.object.image.0.1.type | string | - |
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
| data.object.object.postalCode | string | Zip/Post Code |
| data.object.object.propertySubType | string | RESO property sub-type (see range for allowed values) |
| data.object.object.stories | number | he number of floors in the property |
| data.object.object.streetAddress | string | the street address |
| data.object.object.yearBuilt | number | the year the structure was created |
| data.object.referral | object | referring agent details |
| data.object.referral.type | string | The item type (Linked-Data @type) |
| data.object.referral.additionalProperty | object | context specific custom properties |
| data.object.referral.additionalProperty.isReferralYN | string | Y if transaction was a referral |
| data.object.referral.additionalProperty.inNetworkReferralYN | string | Y if transaction was referred by an in network agent |
| data.object.referral.referredBy | object | the referring entity |
| data.object.referral.referredBy.type | string | the referring entity type i.e RealEstateOrganization, RealEstateAgent |
| data.object.referral.referredBy.id | string | Linked-Data URI (@id) |
| data.object.participant | array<object> | parties with a direct or indirect interest or role in the transaction |
| data.object.participant.type | string | - |
| data.object.participant.roleName | string | the role of the participant in the transaction |
| data.object.participant.position | number | numeric position for the participant/roleName. |
| data.object.participant.givenName | string | First Name of a person |
| data.object.participant.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) |
| data.object.participant.additionalName | string | middleName or alternate name of the Person |
| data.object.participant.email | string | - |
| data.object.participant.telephone | string | Primary phone number. |
| data.object.participant.affiliation | array<string> | person or organization associated with the participant |
| data.object.participant.affiliation (single item) | string | - |
| data.object.transactionEntry | array<object> | commissions and unit entries |
| data.object.transactionEntry.type | string | TransactionEntry |
| data.object.transactionEntry.salesProductionUnit | number | the sales production units credited to the recipient |
| data.object.transactionEntry.salesProductionGCI | object | gross commission income credited to the recipient |
| data.object.transactionEntry.salesProductionGCI.type | string | MonetaryAmount |
| data.object.transactionEntry.salesProductionGCI.minValue | number | the lower limit of the range |
| data.object.transactionEntry.salesProductionGCI.maxValue | number | the upper limit of the range |
| data.object.transactionEntry.salesProductionGCI.value | number | the actual or expected value |
| data.object.transactionEntry.salesProductionGCI.currency | string | use ISO4217 country codes |
| data.object.transactionEntry.recipient | object | the agent credited with the sales production and who receives the value |
| data.object.transactionEntry.recipient.type | string | typically a RealEstateAgent |
| data.object.transactionEntry.recipient.roleName | string | enum: ListingAgent,BuyerAgent |
| data.object.transactionEntry.recipient.id | string | Linked-Data URI (@id) |
| data.object.transactionEntry.recipient.identifier | object | unique identifier of the recipient from the data producer |
| data.object.transactionEntry.recipient.identifier.bmsAgentId | string | - |
| data.object.document | array<object> | any documents, images, etc... related to the transaction. |
| data.object.document (single item) | object | - |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/franchise#transactionreport",
  "data": {
    "type": "UpdateAction",
    "instrument": {
      "type": "SoftwareApplication",
      "name": "Guru"
    },
    "object": {
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
  }
}
```


