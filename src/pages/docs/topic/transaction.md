---
title: transaction
menu: Topics
route: /topic/transaction
---

## transaction



### publishing transaction events
Publish events by HTTP POST to your own pods `/publish/` endpoint including the topic, recipient and message body.]



### Example
```http
POST /publish/ HTTP/1.1
Host: # { your pod host url }
x-api-key: # { your api key }
Content-Type: application/json

{
  "topic": "https://realestate/{topic}#{event}",
  "recipient": # the publishing pod,
  "@context": # optional transformation context,
  "data": {
    "type": "{Action}
  }

}
```


### receiving transaction events

| Event | Description |
| :---- | :---------- |
| [realestate/transaction#create](#create) | a real estate transaction was created |
| [realestate/transaction#update](#update) | a real estate transaction was updated |
| [realestate/transaction#close](#close) | a real estate transaction was closed |


---
## create
```
realestate/transaction#create
```

a real estate transaction was created



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | the object was created by the agent  |
| data.type | string! | CreateAction  |
| data.object | object | describes a sale, purchase and transfer of a real estate property. <br/>RANGE: [RealEstateTransaction](/types/RealEstateTransaction) |

### Example
```json
{
  "topic": "realestate/transaction#create",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "CreateAction",
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
  }
}
```


[back to top](#)

---
## update
```
realestate/transaction#update
```

a real estate transaction was updated



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | the item (object) has been updated by user (agent) <br/>RANGE: [UpdateAction](/types/UpdateAction) |
| data.type | string! | const UpdateAction  |
| data.object | object | describes a sale, purchase and transfer of a real estate property. <br/>RANGE: [RealEstateTransaction](/types/RealEstateTransaction) |

### Example
```json
{
  "topic": "realestate/transaction#update",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "UpdateAction",
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
  }
}
```


[back to top](#)

---
## close
```
realestate/transaction#close
```

a real estate transaction was closed



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | The act of closing an object. <br/>RANGE: [CloseAction](/types/CloseAction) |
| data.type | string! | the action type  |
| data.object | object | describes a sale, purchase and transfer of a real estate property. <br/>RANGE: [RealEstateTransaction](/types/RealEstateTransaction) |
| data.agent | string&lt;uri&gt;  | the closing user  |

### Example
```json
{
  "topic": "realestate/transaction#close",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "CloseAction",
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
    },
    "agent": "https://{the-user-who-closed-the-item}.com/profile/card#me"
  }
}
```


[back to top](#)
