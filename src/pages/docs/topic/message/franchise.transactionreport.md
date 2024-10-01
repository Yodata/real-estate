---
title: franchise#transactionreport
---
## Message

*Franchise transaction report of transaction for sales production reporting.*

### Payload Example(s) (generated)

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
      # case 1
      "referral": {
        "type": "Referral",
        "additionalProperty": {
          "isReferralYN": "Y",
          "bhhsinNetworkReferralYN": "Y"
        },
        "referredBy": {
          "type": "RealEstateOrganization",
          "id": "http://example.com" # optional
        }
      },
      # case 2
      "referral": {
        "type": "Referral",
        "additionalProperty": {
          "isReferralYN": "Y",
          "referralChannel": " Out-of-Network Brokerage |
                               Listing Aggregator |
                               Corporate Relocation |
                               Affinity Relationship "
        },
        "referredBy": {
          "type": "RealEstateOrganization",
          "id": "http://example.com" # optional
        }
      },
       # case 3
      "referral": {
        "type": "Referral",
        "additionalProperty": {
          "isReferralYN": "Y",
          "referralChannel": "In-Network Brokerage"
        },
        "referredBy": {
          "type": "RealEstateOrganization",
          "id": "http://example.com" # required and should be valid companyId
        }
      },
       # case 4
      "referral": {
        "type": "Referral",
        "additionalProperty": {
          "isReferralYN": "N",
          "referralChannel": "In-Network Brokerage" # optional
                             "bhhsinNetworkReferralYN": "Y" # optional
        },
        "referredBy": { # optional
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



### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/franchise#transactionreport"`)  |
| data | object | - |
| data.type | string | const (`"UpdateAction"`)  |
| data.instrument | object | the application or service used that generated the report |
| data.instrument.type | string | const (`"SoftwareApplication"`)  |
| data.instrument.name | string |  <= 10 characters |
| data.object | object | describes a sale, purchase and transfer of a real estate property. |
| data.object.type | string | const (`"RealEstateTransaction"`)  |
| data.object.identifier | object | the data producer's id for the transaction. |
| data.object.identifier.bmsTransactionId | string |  <= 12 characters |
| data.object.additionalProperty | object | vendor/context specific custom properties |
| data.object.additionalProperty.batchId | integer | identifies the batch for the current transaction |
| data.object.additionalProperty.transactionSequence | integer | the sequentail order of this transaction report relative to previous reports of the the same RealEstateTransaction >= 0 |
| data.object.additionalProperty.unimprovedLandFlag | boolean | true if the transaction subject property is an unimproved lot. |
| data.object.transactionStatus | string | allowed (`"PendingTransactionStatus"`, `"ClosedTransactionStatus"`, `"CanceledTransactionStatus"`) transaction status |
| data.object.transactionType | string | allowed (`"ST"`, `"LS"`, `"OI"`, `"PM"`, `"RF"`) transaction type |
| data.object.reportingOffice | string | the reporting office format (`uri`) |
| data.object.listingOffice | string | the office representing the seller format (`uri`) |
| data.object.buyerOffice | string | the office representing the buyer format (`uri`) |
| data.object.commissionDate | string | date the purchase offer was presented format (`date-time`) |
| data.object.closeDate | string | With purchase the date the purchase agreement was fulfilled. With lease, the date the requirements were fulfilled, such as contract and/or deposit. format (`date-time`) |
| data.object.purchaseContractDate | string | date of purchase agreement execution (aka sale date) format (`date-time`) |
| data.object.closePrice | object | the final sale price of the subject |
| data.object.closePrice.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| data.object.closePrice.minValue | number | the lower limit of the range |
| data.object.closePrice.maxValue | number | the upper limit of the range |
| data.object.closePrice.value | number | the actual or expected value |
| data.object.closePrice.currency | string | use ISO4217 country codes <= 3 characters |
| data.object.totalSalesProductionGCI | object | the total gci of the transaction |
| data.object.totalSalesProductionGCI.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| data.object.totalSalesProductionGCI.minValue | number | the lower limit of the range |
| data.object.totalSalesProductionGCI.maxValue | number | the upper limit of the range |
| data.object.totalSalesProductionGCI.value | number | the actual or expected value |
| data.object.totalSalesProductionGCI.currency | string | use ISO4217 country codes <= 3 characters |
| data.object.totalSalesProductionGCIDeduction | object | total gci deductions for the transaction |
| data.object.totalSalesProductionGCIDeduction.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| data.object.totalSalesProductionGCIDeduction.minValue | number | the lower limit of the range |
| data.object.totalSalesProductionGCIDeduction.maxValue | number | the upper limit of the range |
| data.object.totalSalesProductionGCIDeduction.value | number | the actual or expected value |
| data.object.totalSalesProductionGCIDeduction.currency | string | use ISO4217 country codes <= 3 characters |
| data.object.object | object | a property in the real estate transaction context |
| data.object.object.type | string | allowed (`"RealEstateProperty"`) "RealEstateProperty" |
| data.object.object.propertyType | string | allowed (`"RESI"`, `"RLSE"`, `"RINC"`, `"LAND"`, `"MOBI"`, `"FARM"`, `"COMS"`, `"COML"`, `"BUSO"`) RESO property type (see range for allowed values) 4 characters |
| data.object.object.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| data.object.object.addressLocality | string | City, Township. <= 50 characters |
| data.object.object.addressRegion | string | abbreviated state or province |
| data.object.object.apn | string | Assessors Parcel Number |
| data.object.object.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.object.image.0 (index) | object allOf | - |
| data.object.object.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.object.image.0.0.0 (allOf item) | object | - |
| data.object.object.image.0.0.0.type | string | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`) |
| data.object.object.image.0.0.0.@id | string | the liked data uri for the Thing format (`uri`) |
| data.object.object.image.0.0.0 (property names) | - |  pattern (`^[a-z@$][a-zA-Z0-9-_]+$`) |
| data.object.object.image.0.0.1 (allOf item) | - | - |
| data.object.object.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.object.image.0.0.1.id | string | the URL to access the item. format (`uri`) |
| data.object.object.image.0.0.1.name | string | the file name of the object. |
| data.object.object.image.0.0.1.encodingFormat | string | MIME type |
| data.object.object.image.0.0.1.about | string | URI to the subject of the image or logo format (`uri`) |
| data.object.object.image.0.0.1.url | string | URL of the image content format (`uri`) |
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
| data.object.object.postalCode | string | Zip/Post Code <= 12 characters |
| data.object.object.propertySubType | string | allowed (`"ApartmentPropertyType"`, `"BoatSlipPropertyType"`, `"CabinPropertyType"`, `"CondominiumPropertyType"`, `"DeededParkingPropertyType"`, `"DuplexPropertyType"`, `"FarmPropertyType"`, `"ManufacturedHomePropertyType"`, `"ManufacturedOnLandPropertyType"`, `"MobileHomePropertyType"`, `"OwnYourOwnPropertyType"`, `"QuadruplexPropertyType"`, `"RanchPropertyType"`, `"SingleFamilyPropertyType"`, `"StockCooperativePropertyType"`, `"TimesharePropertyType"`, `"TownhousePropertyType"`, `"TriplexPropertyType"`, `"AgriculturePropertyType"`, `"BusinessPropertyType"`, `"HotelMotelPropertyType"`, `"IndustrialPropertyType"`, `"MixedUsePropertyType"`, `"MultiFamilyPropertyType"`, `"OfficePropertyType"`, `"RetailPropertyType"`, `"UnimprovedLandPropertyType"`, `"WarehousePropertyType"`) RESO property sub-type (see range for allowed values) |
| data.object.object.stories | number | he number of floors in the property |
| data.object.object.streetAddress | string | the street address <= 75 characters |
| data.object.object.yearBuilt | number | the year the structure was created |
| data.object.referral | object | referring agent details |
| data.object.referral.type | string | allowed (`"Referral"`) The item type (Linked-Data @type) |
| data.object.referral.additionalProperty | object | context specific custom properties |
| data.object.referral.additionalProperty.isReferralYN | string | allowed (`"Y"`, `"N"`) Y if transaction was a referral |
| data.object.referral.additionalProperty.inNetworkReferralYN | string | allowed (`"Y"`, `"N"`) Y if transaction was referred by an in network agent |
| data.object.referral.referredBy | object | the referring entity |
| data.object.referral.referredBy.type | string | allowed (`"RealEstateOrganization"`, `"RealEstateAgent"`, `"RealEstateOffice"`, `"Organization"`, `"Person"`) the referring entity type i.e RealEstateOrganization, RealEstateAgent |
| data.object.referral.referredBy.id | string | Linked-Data URI (@id) format (`uri`) |
| data.object.participant | array<object> | parties with a direct or indirect interest or role in the transaction |
| data.object.participant.type | string | const (`"TransactionParticipant"`)  |
| data.object.participant.roleName | string | the role of the participant in the transaction |
| data.object.participant.position | number | numeric position for the participant/roleName. |
| data.object.participant.givenName | string | First Name of a person |
| data.object.participant.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) <= 50 characters |
| data.object.participant.additionalName | string | middleName or alternate name of the Person |
| data.object.participant.email | string | a valid email address format (`email`) |
| data.object.participant.telephone | string | Primary phone number. |
| data.object.participant.affiliation | array<string> | person or organization associated with the participant |
| data.object.participant.affiliation (single item) | string |  format (`uri`) |
| data.object.transactionEntry | array<object> | commissions and unit entries |
| data.object.transactionEntry.type | string | allowed (`"TransactionEntry"`) TransactionEntry |
| data.object.transactionEntry.salesProductionUnit | number | the sales production units credited to the recipient [ 0.0001 .. 1 ] |
| data.object.transactionEntry.salesProductionGCI | object | gross commission income credited to the recipient |
| data.object.transactionEntry.salesProductionGCI.type | string | allowed (`"MonetaryAmount"`) MonetaryAmount |
| data.object.transactionEntry.salesProductionGCI.minValue | number | the lower limit of the range |
| data.object.transactionEntry.salesProductionGCI.maxValue | number | the upper limit of the range |
| data.object.transactionEntry.salesProductionGCI.value | number | the actual or expected value |
| data.object.transactionEntry.salesProductionGCI.currency | string | use ISO4217 country codes <= 3 characters |
| data.object.transactionEntry.recipient | object | the agent credited with the sales production and who receives the value |
| data.object.transactionEntry.recipient.type | string | typically a RealEstateAgent |
| data.object.transactionEntry.recipient.roleName | string | allowed (`"ListingAgent"`, `"BuyerAgent"`) enum: ListingAgent,BuyerAgent |
| data.object.transactionEntry.recipient.id | string | Linked-Data URI (@id) format (`uri`) |
| data.object.transactionEntry.recipient.identifier | object | unique identifier of the recipient from the data producer |
| data.object.transactionEntry.recipient.identifier.bmsAgentId | string |  <= 12 characters |
| data.object.document | array<object> | any documents, images, etc... related to the transaction. |
| data.object.document (single item) | object | - |

### Headers

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| time | string | date & time the event was produced format (`date-time`) |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient format (`uri`) |
| instrument | string | the app or service that produced the event on behalf of the agent/user format (`uri`) |
| source | string | a copy of the event was sent to the source(s). format (`uri`) |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source format (`uri`) |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. format (`uri`) |
| @id | string |  format (`uri`) |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


