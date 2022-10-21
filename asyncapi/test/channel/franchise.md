---
title: franchise
---

## Operations### SUB `franchise` Operation

Accepts **one of** the following messages:

#### Message `franchise#transactionreport`

*Franchise transaction report of transaction for sales production reporting.*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/franchise#transactionreport",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "string",
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
    },
    "instrument": {
      "type": "SoftwareApplication",
      "name": "Breaking BMS"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `franchise#listingreport`

*franchise listingreport*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/franchise#listingreport",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "CreateAction",
    "object": {
      "type": "ListingReport",
      "batchId": "string",
      "reportingOfficeId": "https://{officeid}.example.com/profile/card#me",
      "dateCreated": "2019-08-24T14:15:22Z",
      "listingsAddedCount": 0,
      "totalListingsCount": 0
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|




