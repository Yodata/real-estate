---
title: Topics
---
## Operations

### SUB `/award#` Operation

Awards

Accepts **one of** the following messages:

#### Message award#delete `award#delete`

*award deleted*

* Message ID: `award#delete`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#delete",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "DeleteAction",
    "identifier": {
      "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
    },
    "agent": "http://{user}.example.com/profile/card#me",
    "object": {
      "type": "AwardSeries",
      "name": "Agent of The Year",
      "identifier": {
        "hsfAwardSeriesId": "xxxx"
      }
    },
    "recipient": {
      "type": "RealEstateAgent",
      "id": "https://user.example.com/profile/card#me",
      "name": "Joann Agent"
    }
  }
}
```


##### Message tags

| Name | Description | Documentation |
|---|---|---|
| action\|delete | - | - |
| topic\|award | - | - |
| domain\|realestate | - | - |

#### Message `award#seriescreate`

*a new award series was created*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#seriescreate",
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
      "type": "AwardSeries",
      "name": "Top 1% Club",
      "description": "Annual",
      "duration": "R/P1Y",
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z",
      "id": "https://example/com",
      "identifier": {
        "hsfAwardSeriesID": "xxxx"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `award#seriesdelete`

*an award series was deleted*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#seriesdelete",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "DeleteAction",
    "object": {
      "type": "AwardSeries",
      "name": "Top 1% Club",
      "description": "Annual",
      "duration": "R/P1Y",
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z",
      "id": "https://example/com",
      "identifier": {
        "hsfAwardSeriesID": "xxxx"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `award#seriesupdate`

*an award series was updated*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#seriesupdate",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "UpdateAction",
    "object": {
      "type": "AwardSeries",
      "name": "Top 1% Club",
      "description": "Annual",
      "duration": "R/P1Y",
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z",
      "id": "https://example/com",
      "identifier": {
        "hsfAwardSeriesID": "xxxx"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `award#teamcreate`

*an award team was created*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#teamcreate",
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
      "type": "AwardTeam",
      "name": "Clients",
      "identifier": {
        "hsfTeamId": "xxxxx"
      },
      "member": [
        "https://user.example.com/profile/card#me",
        "https://office.example.com/profile/card#me",
        "https://company.example.com/profile/card#me"
      ]
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `award#teammemberadd`

*a member has been added to an award team*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#teammemberadd",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AddAction",
    "object": "https://user.example.com/profile/card#me",
    "targetCollection": {
      "type": "AwardTeam",
      "identifier": {
        "hsfTeamId": "xxxx"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `award#teammemberremove`

*a member has been removed from an award team*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#teammemberremove",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RemoveAction",
    "object": "https://user.example.com/profile/card#me",
    "targetCollection": {
      "type": "AwardTeam",
      "identifier": {
        "hsfTeamId": "xxxx"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `award#teamupdate`

*an award team has been updated*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#teamupdate",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "UpdateAction",
    "object": {
      "type": "AwardTeam",
      "name": "Clients",
      "identifier": {
        "hsfTeamId": "xxxxx"
      },
      "member": [
        "https://user.example.com/profile/card#me",
        "https://office.example.com/profile/card#me",
        "https://company.example.com/profile/card#me"
      ]
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `award#update`

*award action is updated*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#update",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "UpdateAction",
    "identifier": {
      "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
    },
    "agent": "http://{user}.example.com/profile/card#me",
    "object": {
      "type": "AwardSeries",
      "name": "Agent of The Year",
      "identifier": {
        "hsfAwardSeriesId": "xxxx"
      }
    },
    "recipient": {
      "type": "RealEstateAgent",
      "id": "https://user.example.com/profile/card#me",
      "name": "Joann Agent"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|


### SUB `/franchise` Operation

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


### SUB `/lead` Operation

lead management events

Accepts **one of** the following messages:

#### Message `lead#accept`

*a lead (data.object) was accepted by the recipient (data.recipient).*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/lead#accept",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AcceptAction",
    "object": {
      "type": "Lead",
      "identifier": {
        "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
      },
      "object": {
        "type": "Contact",
        "name": "Joe Smith",
        "telephone": "731-620-9877 x6155",
        "email": "Giuseppe.Lang62@hotmail.com"
      },
      "recipient": "http://{lead-recipient}.example.com/profile/card#me",
      "sender": "http://{lead-sender}.example.com/profile/card#me",
      "owner": "http://{lead-owner}.example.com/profile/card#me",
      "dateAccepted": "2019-11-25T04:23:32.000Z",
      "dateRejected": "2019-08-24T14:15:22Z",
      "dateSent": "2019-08-24T14:15:22Z",
      "dateReceived": "2019-11-25T04:23:32.000Z",
      "leadSource": [
        {
          "type": "AskAction",
          "object": {
            "type": "Question",
            "text": "Help me I'm trapped inside documentation."
          }
        }
      ]
    },
    "agent": "https://{the-user-who-accepted-the-item}.com/profile/card#me"
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `lead#add`

*a crm lead was created*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/lead#add",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AddAction",
    "object": {
      "type": "Lead",
      "identifier": {
        "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
      },
      "object": {
        "type": "Contact",
        "name": "Joe Smith",
        "telephone": "731-620-9877 x6155",
        "email": "Giuseppe.Lang62@hotmail.com"
      },
      "recipient": "http://{lead-recipient}.example.com/profile/card#me",
      "sender": "http://{lead-sender}.example.com/profile/card#me",
      "owner": "http://{lead-owner}.example.com/profile/card#me",
      "dateAccepted": "2019-11-25T04:23:32.000Z",
      "dateRejected": "2019-08-24T14:15:22Z",
      "dateSent": "2019-08-24T14:15:22Z",
      "dateReceived": "2019-11-25T04:23:32.000Z",
      "leadSource": [
        {
          "type": "AskAction",
          "object": {
            "type": "Question",
            "text": "Help me I'm trapped inside documentation."
          }
        }
      ]
    },
    "targetCollection": {}
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `lead#asssign`

*a lead was assigned*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/lead#assign",
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
      "type": "Lead",
      "identifier": {
        "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
      },
      "object": {
        "type": "Contact",
        "name": "Joe Smith",
        "telephone": "731-620-9877 x6155",
        "email": "Giuseppe.Lang62@hotmail.com"
      },
      "recipient": "http://{lead-recipient}.example.com/profile/card#me",
      "sender": "http://{lead-sender}.example.com/profile/card#me",
      "owner": "http://{lead-owner}.example.com/profile/card#me",
      "dateAccepted": "2019-11-25T04:23:32.000Z",
      "dateRejected": "2019-08-24T14:15:22Z",
      "dateSent": "2019-08-24T14:15:22Z",
      "dateReceived": "2019-11-25T04:23:32.000Z",
      "leadSource": [
        {
          "type": "AskAction",
          "object": {
            "type": "Question",
            "text": "Help me I'm trapped inside documentation."
          }
        }
      ]
    },
    "agent": "http://example.com"
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `lead#update`

*a crm lead was updated*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/lead#update",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "UpdateAction",
    "object": {
      "type": "Lead",
      "identifier": {
        "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
      },
      "object": {
        "type": "Contact",
        "name": "Joe Smith",
        "telephone": "731-620-9877 x6155",
        "email": "Giuseppe.Lang62@hotmail.com"
      },
      "recipient": "http://{lead-recipient}.example.com/profile/card#me",
      "sender": "http://{lead-sender}.example.com/profile/card#me",
      "owner": "http://{lead-owner}.example.com/profile/card#me",
      "dateAccepted": "2019-11-25T04:23:32.000Z",
      "dateRejected": "2019-08-24T14:15:22Z",
      "dateSent": "2019-08-24T14:15:22Z",
      "dateReceived": "2019-11-25T04:23:32.000Z",
      "leadSource": [
        {
          "type": "AskAction",
          "object": {
            "type": "Question",
            "text": "Help me I'm trapped inside documentation."
          }
        }
      ]
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `lead#reject`

*a crm lead was rejected*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/lead#reject",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RejectAction",
    "object": {
      "type": "Lead",
      "identifier": {
        "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
      },
      "object": {
        "type": "Contact",
        "name": "Joe Smith",
        "telephone": "731-620-9877 x6155",
        "email": "Giuseppe.Lang62@hotmail.com"
      },
      "recipient": "http://{lead-recipient}.example.com/profile/card#me",
      "sender": "http://{lead-sender}.example.com/profile/card#me",
      "owner": "http://{lead-owner}.example.com/profile/card#me",
      "dateAccepted": "2019-11-25T04:23:32.000Z",
      "dateRejected": "2019-08-24T14:15:22Z",
      "dateSent": "2019-08-24T14:15:22Z",
      "dateReceived": "2019-11-25T04:23:32.000Z",
      "leadSource": [
        {
          "type": "AskAction",
          "object": {
            "type": "Question",
            "text": "Help me I'm trapped inside documentation."
          }
        }
      ]
    },
    "participant": {
      "type": "RealEstateOrganization",
      "name": "Gotham City Real Estate"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `lead#retract`

*a lead (data.object) is taken back from the previous assignee (data.participant) by the previous sender/owner (data.recipient)*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/lead#retract",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RetractAction",
    "object": {
      "type": "Lead",
      "object": {
        "type": "Contact",
        "identifier": {
          "redContact_Guid": "bbc1f449-21b3-41d8-a588-2d1c7d43281e"
        },
        "name": "Braxton Zboncak",
        "email": "user@example.com"
      }
    },
    "agent": "https://{lead-admin}.bhhs.hsaffailites.com/profile/card",
    "participant": {
      "type": "RealEstateAgent",
      "id": "https://user.example.com/profile/card#me"
    },
    "recipient": {
      "type": "RealEstateOrganization",
      "id": "https://{lead-owner}.example.com/profile/card#me"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|


### SUB `/listing` Operation

Accepts **one of** the following messages:

#### Message `listing#update`

*a PropertyListing is created or updated*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/listing#update",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "UpdateAction",
    "object": {
      "type": "PropertyListing",
      "addressCountry": "US",
      "addressLocality": "Gotham City",
      "addressRegion": "New Jersey",
      "buyerAgent": {
        "email": "butch.byers@example.com",
        "identifier": {
          "agentKey": "xxxx"
        },
        "name": "Butch Byers",
        "type": "RealEstateAgent"
      },
      "buyerOffice": {
        "email": "gcr@example.com",
        "identifier": {
          "officeKey": "grc1"
        },
        "name": "Gotham City Real Estate",
        "type": "RealEstateOffice"
      },
      "closeDate": "2019-08-24T14:15:22Z",
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
      "internetAddressDisplayYN": "Y",
      "latitude": 40.75,
      "listingAgent": {
        "type": "RealEstateAgent",
        "name": "Lori Listagent",
        "telephone": "1-252-574-0160",
        "email": "lorilistagent@example.com"
      },
      "listingContractDate": "2019-08-24T14:15:22Z",
      "listingId": "GOTHAM-MLS+12345",
      "listingOffice": {
        "name": "Gotham City Real Estate",
        "type": "RealEstateOffice"
      },
      "listingOriginatingSystem": {
        "identifier": {
          "bhhsmlsid": "xxxx",
          "resoouid": "not-yet-available"
        },
        "name": "MLSListings",
        "type": "MultipleListingService"
      },
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 75000,
        "priceCurrency": "USD"
      },
      "listingStatus": "Active",
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
      "numberOfRooms": "7",
      "originatingSystemKey": 12345,
      "originatingSystemName": "GOTHAM-MLS",
      "postalCode": "10010",
      "propertySubType": "ApartmentPropertyType",
      "propertyType": "RESI",
      "purchaseContractDate": "2019-08-24T14:15:22Z",
      "stories": 2,
      "streetAddress": "1007 Mountain Gate Rd",
      "universalPropertyId": "US-04015-N-R-11022331-N",
      "url": "https://www.example.com/homedetails/1007-Mountain-Gate-Rd-Gotham-City-Gotham/10007",
      "yearBuilt": 1988
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `listing#delete`

*a PropertyListing is deleted*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/listing#delete",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "DeleteAction",
    "object": {
      "type": "PropertyListing",
      "url": "https://www.example.com/Gotham-Properties-NJ001/homes-for-sale/1007-Mountain-Gate-Road-Gotham-City-NJ-10007-187440425"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|


### SUB `/marketing` Operation

Accepts **one of** the following messages:

#### Message `marketing#create`

*a marketing program has been created*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/marketingprogram#create",
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
      "type": "MarketingProgram",
      "name": "Market Activity Report 508 Homewood Ave",
      "identifier": {
        "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298",
        "namespaceid": "xxxx"
      },
      "member": [
        {
          "type": "Person",
          "roleName": "Owner",
          "memberOf": null,
          "member": {
            "type": "Contact",
            "name": "Bruce Wayne",
            "givenName": "Bruce",
            "familyName": "Wayne",
            "jobTitle": "Batman",
            "contactPoint": [
              {
                "type": "ContactPoint",
                "name": "Mobile Phone",
                "telephone": "888.GET-BATMAN"
              },
              {
                "type": "ContactPoint",
                "name": "Email",
                "email": "batman@example.com"
              }
            ],
            "address": [
              {
                "type": "PostalAddress",
                "name": "Home",
                "streetAddress": "1007 Mountain Gate Rd",
                "postOfficeBoxNumber": "Box 1234",
                "addressRegion": "New Jersey",
                "addressLocality": "Gotham City",
                "postalCode": "10010",
                "addressCountry": "USA"
              }
            ],
            "birthDate": "2019-07-09",
            "leadOwner": {
              "type": "RealEstateOrganization",
              "id": "https://{lead-owner}.example.com/profile/card#me"
            },
            "leadSource": {
              "type": "RealEstateWebsite",
              "url": "https://agentwebsite.example.com"
            }
          },
          "startDate": "2019-08-24T14:15:22Z",
          "endDate": "2019-08-24T14:15:22Z",
          "name": "John Smith",
          "identifier": {
            "buysideid": "ab123"
          }
        }
      ],
      "creator": "http://{user}.example.com/profile/card#me",
      "dateCreated": "2019-08-24T14:15:22Z",
      "dateModified": "2019-08-24T14:15:22Z",
      "about": {
        "type": "Place",
        "address": {
          "streetAddress": "508 Homewood Ave",
          "addressLocality": "Chula Vista",
          "addressRegion": "California",
          "postalCode": "55555"
        }
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `marketing#delete`

*a marketing program was deleted*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/marketingprogram#delete",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "DeleteAction",
    "object": {
      "type": "MarketingProgram",
      "identifier": {
        "namespaceid": "xxxx"
      }
    },
    "agent": "https://{user}.example.com/profile/card#me"
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `marketing#memberadd`

*a program member was added by the agent*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/marketingprogram#memberadd",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AddAction",
    "object": {
      "type": "ProgramMembership",
      "roleName": "Owner",
      "memberOf": {
        "type": "MarketingProgram",
        "name": "Market Activity Report 508 Homewood Ave",
        "identifier": {
          "aceid": "4ef1469a-1fc4-43af-96b1-0e4402ccc46e",
          "buysideid": "83271c2a-c35e-44e9-b790-5389f2c11b17"
        }
      },
      "member": {
        "type": "Person",
        "name": "Edgardo Fisher",
        "givenName": "Bruce",
        "familyName": "Wayne",
        "jobTitle": "Batman",
        "contactPoint": [
          {
            "type": "ContactPoint",
            "name": "Mobile Phone",
            "telephone": "888.GET-BATMAN"
          },
          {
            "type": "ContactPoint",
            "name": "Email",
            "email": "batman@example.com"
          }
        ],
        "address": [
          {
            "type": "PostalAddress",
            "name": "Home",
            "streetAddress": "1007 Mountain Gate Rd",
            "postOfficeBoxNumber": "Box 1234",
            "addressRegion": "New Jersey",
            "addressLocality": "Gotham City",
            "postalCode": "10010",
            "addressCountry": "USA"
          }
        ],
        "birthDate": "2019-07-09",
        "leadOwner": {
          "type": "RealEstateOrganization",
          "id": "https://{lead-owner}.example.com/profile/card#me"
        },
        "leadSource": {
          "type": "RealEstateWebsite",
          "url": "https://agentwebsite.example.com"
        },
        "identifier": {
          "aceid": "816fd12f-6479-4f45-b26f-0a2ba54972b6"
        }
      },
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z",
      "role": "Owner"
    },
    "targetCollection": {
      "type": "MarketingProgram",
      "name": "Market Activity Report 508 Homewood Ave",
      "identifier": {
        "aceid": "4ef1469a-1fc4-43af-96b1-0e4402ccc46e",
        "buysideid": "83271c2a-c35e-44e9-b790-5389f2c11b17"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `marketing#memberremove`

*a program member was removed by the agent*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/marketingprogram#memberremove",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RemoveAction",
    "object": {
      "type": "ProgramMembership",
      "roleName": "Owner",
      "memberOf": null,
      "member": {
        "type": "Person",
        "name": "Edgardo Fisher",
        "givenName": "Bruce",
        "familyName": "Wayne",
        "jobTitle": "Batman",
        "contactPoint": [
          {
            "type": "ContactPoint",
            "name": "Mobile Phone",
            "telephone": "888.GET-BATMAN"
          },
          {
            "type": "ContactPoint",
            "name": "Email",
            "email": "batman@example.com"
          }
        ],
        "address": [
          {
            "type": "PostalAddress",
            "name": "Home",
            "streetAddress": "1007 Mountain Gate Rd",
            "postOfficeBoxNumber": "Box 1234",
            "addressRegion": "New Jersey",
            "addressLocality": "Gotham City",
            "postalCode": "10010",
            "addressCountry": "USA"
          }
        ],
        "birthDate": "2019-07-09",
        "leadOwner": {
          "type": "RealEstateOrganization",
          "id": "https://{lead-owner}.example.com/profile/card#me"
        },
        "leadSource": {
          "type": "RealEstateWebsite",
          "url": "https://agentwebsite.example.com"
        },
        "identifier": {
          "aceid": "816fd12f-6479-4f45-b26f-0a2ba54972b6"
        }
      },
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z",
      "role": "Owner"
    },
    "agent": "https://{user-who-removed-the-item}.com/profile/card#me",
    "targetCollection": {
      "type": "MarketingProgram",
      "name": "Market Activity Report 508 Homewood Ave",
      "identifier": {
        "aceid": "4ef1469a-1fc4-43af-96b1-0e4402ccc46e",
        "buysideid": "83271c2a-c35e-44e9-b790-5389f2c11b17"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|


### SUB `/marketingpreferences` Operation

Accepts **one of** the following messages:

#### Message `marketingpreferences#subscribe`

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/marketingpreferences#subscribe",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "SubscribeAction",
    "object": null,
    "agent": {
      "type": "Contact",
      "email": "bob@example.com",
      "identifier": {
        "hsfconsumerid": "D9AB8127-7D19-4C67-A514-9209F22F4511"
      }
    },
    "participant": [
      {
        "roleName": "SubscriptionProvider",
        "id": "https://12345.example.com/profile/card#me",
        "additionalProperty": {
          "isCompanyQueue": true
        }
      }
    ]
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `marketingpreferences#unsubscribe`

*a consumer (agent) unsubscribes to email or sms for a specific agent (object)*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/marketingpreferences#unsubscribe",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "UnsubscribeAction",
    "object": null,
    "agent": {
      "type": "Contact",
      "email": "bob@example.com",
      "identifier": {
        "hsfconsumerid": "xxxxxxxxxxxxx"
      }
    },
    "participant": [
      {
        "roleName": "SubscriptionProvider",
        "id": "https://12345.example.com/profile/card#me",
        "additionalProperty": {
          "isCompanyQueue": true
        }
      }
    ]
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|


### SUB `/profile` Operation

real estate agent/office profile updates.

Accepts **one of** the following messages:

#### Message `profile#add`

*an agent, office or organization profile was added*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/profile#add",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "object": {
      "type": "RealEstateAgent",
      "id": "http://example.com",
      "name": "Louis Armstrong",
      "givenName": "Glenn",
      "familyName": "Miller",
      "address": {
        "type": "PostalAddress",
        "name": "Home",
        "streetAddress": "1007 Mountain Gate Rd",
        "postOfficeBoxNumber": "Box 1234",
        "addressRegion": "New Jersey",
        "addressLocality": "Gotham City",
        "postalCode": "10010",
        "addressCountry": "USA",
        "addressCounty": "Gotham County",
        "addressSubdivision": "Gotham Heights"
      },
      "availableLanguage": [
        {
          "type": "Language",
          "name": "English",
          "additionalName": "en-US"
        }
      ],
      "branchCode": "for BHHS profile events see additionalProperty.OfficeId",
      "certification": [
        {
          "type": "Certification",
          "name": "E-Agent Certified",
          "validFrom": "2019-06-13T07:00:00.000Z",
          "additionalProperty": {
            "ceritificationTypeId": "86afafd3-ac25-4a89-9a6e-bebb3753c4b2"
          }
        }
      ],
      "contactPoint": {
        "type": "ContactPoint",
        "name": "Work",
        "telephone": "800-555-5555",
        "faxNumber": "888-4BA-TMAN",
        "email": "bruce@example.com",
        "url": "https://example.com"
      },
      "email": "user@example.com",
      "faxNumber": "(873) 271-4802",
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
      "logo": [
        {
          "type": "DigitalDocument",
          "id": "http://user.example.com/public/logo/archive.zip",
          "name": "archive.zip",
          "encodingFormat": "application/zip",
          "about": {
            "type": "RealEstateTransaction",
            "identifier": {
              "bmsTransactionId": "xxxx"
            }
          },
          "url": "https://example.com"
        }
      ],
      "parentOrganization": [
        "http://office-real-estate.example.com/",
        "http://batmanandrobinteam.example.com/"
      ],
      "subOrganization": [
        "http://example.com"
      ],
      "telephone": "+15558675309",
      "url": "http://example.com",
      "areaServed": {
        "type": "PostalCode",
        "postalCode": "91371",
        "addressLocality": "Woodland Hills",
        "addressCounty": "Los Angeles",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "description": "The leading Gotham City Real Estate Agent.",
      "numberOfSubOrganizations": 0,
      "member": [
        {
          "type": "OrganizationRole",
          "roleName": "Owner",
          "memberOf": {
            "type": "RealEstateOrganization",
            "id": "http://orgid.example.com/profile/card#me"
          },
          "member": "https://memberid.example.com/profile/card#me",
          "startDate": "2019-08-24T14:15:22Z",
          "endDate": "2019-08-24T14:15:22Z"
        }
      ],
      "memberOf": [
        {
          "type": "MLSMembership",
          "roleName": "MLSMember",
          "memberOf": {
            "type": "MultipleListingService",
            "id": "http://orgid.example.com/profile/card#me",
            "name": "GreatScottMLS"
          },
          "member": "https://{agent}.example.com/profile/card#me",
          "startDate": "2019-08-24T14:15:22Z",
          "endDate": "2019-08-24T14:15:22Z",
          "memberId": "memberid123"
        }
      ],
      "permit": [
        {
          "type": "RealEstateLicense",
          "name": "CA-DRE# 02068375",
          "identifier": {
            "type": "PropertyValue",
            "name": "CA-DRE",
            "value": "02068375"
          },
          "issuedBy": {
            "type": "State",
            "name": "California"
          },
          "issuedThrough": {
            "type": "Service",
            "name": "California Department of Real Estate"
          },
          "validIn": {
            "type": "State",
            "name": "California"
          },
          "validFrom": "2019-07-07T10:55:02Z",
          "validUntil": "2019-07-07T10:55:02Z"
        }
      ],
      "identifier": {
        "ContactID": "1234567"
      },
      "jobTitle": [
        [
          "Accounting Department",
          "Awards Coordinator"
        ]
      ],
      "additionalName": "ambassador satch,pops,satchmo",
      "sameAs": {
        "bmsID": "1234"
      }
    },
    "branchCode": "ABC123",
    "type": "AddAction"
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `profile#update`

*an agent, office or organization profile was updated*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/profile#update",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "object": {
      "type": "RealEstateAgent",
      "id": "http://example.com",
      "name": "Louis Armstrong",
      "givenName": "Glenn",
      "familyName": "Miller",
      "address": {
        "type": "PostalAddress",
        "name": "Home",
        "streetAddress": "1007 Mountain Gate Rd",
        "postOfficeBoxNumber": "Box 1234",
        "addressRegion": "New Jersey",
        "addressLocality": "Gotham City",
        "postalCode": "10010",
        "addressCountry": "USA",
        "addressCounty": "Gotham County",
        "addressSubdivision": "Gotham Heights"
      },
      "availableLanguage": [
        {
          "type": "Language",
          "name": "English",
          "additionalName": "en-US"
        }
      ],
      "branchCode": "for BHHS profile events, see additionalProperty.OfficeId",
      "certification": [
        {
          "type": "Certification",
          "name": "E-Agent Certified",
          "validFrom": "2019-06-13T07:00:00.000Z",
          "additionalProperty": {
            "ceritificationTypeId": "86afafd3-ac25-4a89-9a6e-bebb3753c4b2"
          }
        }
      ],
      "contactPoint": {
        "type": "ContactPoint",
        "name": "Work",
        "telephone": "800-555-5555",
        "faxNumber": "888-4BA-TMAN",
        "email": "bruce@example.com",
        "url": "https://example.com"
      },
      "email": "user@example.com",
      "faxNumber": "(873) 271-4802",
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
      "logo": [
        {
          "type": "DigitalDocument",
          "id": "http://user.example.com/public/logo/archive.zip",
          "name": "archive.zip",
          "encodingFormat": "application/zip",
          "about": {
            "type": "RealEstateTransaction",
            "identifier": {
              "bmsTransactionId": "xxxx"
            }
          },
          "url": "https://example.com"
        }
      ],
      "parentOrganization": [
        "http://office-real-estate.example.com/",
        "http://batmanandrobinteam.example.com/"
      ],
      "subOrganization": [
        "http://example.com"
      ],
      "telephone": "+15558675309",
      "url": "http://example.com",
      "areaServed": {
        "type": "PostalCode",
        "postalCode": "91371",
        "addressLocality": "Woodland Hills",
        "addressCounty": "Los Angeles",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "description": "The leading Gotham City Real Estate Agent.",
      "numberOfSubOrganizations": 0,
      "member": [
        {
          "type": "OrganizationRole",
          "roleName": "Owner",
          "memberOf": {
            "type": "RealEstateOrganization",
            "id": "http://orgid.example.com/profile/card#me"
          },
          "member": "https://memberid.example.com/profile/card#me",
          "startDate": "2019-08-24T14:15:22Z",
          "endDate": "2019-08-24T14:15:22Z"
        }
      ],
      "memberOf": [
        {
          "type": "MLSMembership",
          "roleName": "MLSMember",
          "memberOf": {
            "type": "MultipleListingService",
            "id": "http://orgid.example.com/profile/card#me",
            "name": "GreatScottMLS"
          },
          "member": "https://{agent}.example.com/profile/card#me",
          "startDate": "2019-08-24T14:15:22Z",
          "endDate": "2019-08-24T14:15:22Z",
          "memberId": "memberid123"
        }
      ],
      "permit": [
        {
          "type": "RealEstateLicense",
          "name": "CA-DRE# 02068375",
          "identifier": {
            "type": "PropertyValue",
            "name": "CA-DRE",
            "value": "02068375"
          },
          "issuedBy": {
            "type": "State",
            "name": "California"
          },
          "issuedThrough": {
            "type": "Service",
            "name": "California Department of Real Estate"
          },
          "validIn": {
            "type": "State",
            "name": "California"
          },
          "validFrom": "2019-07-07T10:55:02Z",
          "validUntil": "2019-07-07T10:55:02Z"
        }
      ],
      "identifier": {
        "ContactID": "1234567"
      },
      "jobTitle": [
        [
          "Accounting Department",
          "Awards Coordinator"
        ]
      ],
      "additionalName": "ambassador satch,pops,satchmo",
      "sameAs": {
        "bmsID": "1234"
      }
    },
    "branchCode": "ABC123",
    "type": "UpdateAction"
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `profile#teamcreate`

*a team profile was creatd*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/profile#teamcreate",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "object": {
      "type": "RealEstateTeam",
      "id": "http://example.com",
      "name": "string",
      "givenName": "Glenn",
      "familyName": "Miller",
      "address": {
        "type": "PostalAddress",
        "name": "Home",
        "streetAddress": "1007 Mountain Gate Rd",
        "postOfficeBoxNumber": "Box 1234",
        "addressRegion": "New Jersey",
        "addressLocality": "Gotham City",
        "postalCode": "10010",
        "addressCountry": "USA",
        "addressCounty": "Gotham County",
        "addressSubdivision": "Gotham Heights"
      },
      "availableLanguage": [
        {
          "type": "Language",
          "name": "English",
          "additionalName": "en-US"
        }
      ],
      "branchCode": "for BHHS profile events, see additionalProperty.OfficeId",
      "certification": [
        {
          "type": "Certification",
          "name": "E-Agent Certified",
          "validFrom": "2019-06-13T07:00:00.000Z",
          "additionalProperty": {
            "ceritificationTypeId": "86afafd3-ac25-4a89-9a6e-bebb3753c4b2"
          }
        }
      ],
      "contactPoint": {
        "type": "ContactPoint",
        "name": "Work",
        "telephone": "800-555-5555",
        "faxNumber": "888-4BA-TMAN",
        "email": "bruce@example.com",
        "url": "https://example.com"
      },
      "email": "user@example.com",
      "faxNumber": "(873) 271-4802",
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
      "logo": [
        {
          "type": "DigitalDocument",
          "id": "http://user.example.com/public/logo/archive.zip",
          "name": "archive.zip",
          "encodingFormat": "application/zip",
          "about": {
            "type": "RealEstateTransaction",
            "identifier": {
              "bmsTransactionId": "xxxx"
            }
          },
          "url": "https://example.com"
        }
      ],
      "parentOrganization": [
        "http://example.com",
        "http://batmanandrobinteam.example.com/"
      ],
      "subOrganization": [
        "http://org.example.com/profile/card#me"
      ],
      "telephone": "+15558675309",
      "url": "http://example.com",
      "areaServed": {
        "type": "PostalCode",
        "postalCode": "91371",
        "addressLocality": "Woodland Hills",
        "addressCounty": "Los Angeles",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "description": "The number on Gotham City Real Estate Company since 1940",
      "numberOfSubOrganizations": 0,
      "member": [
        {
          "type": "RealEstateTeamMembership",
          "roleName": "TeamMember",
          "memberOf": "https://{team-id}.example.com/profile/card#me",
          "member": "https://{agent}.example.com/profile/card#me",
          "startDate": "2019-08-24T14:15:22Z",
          "endDate": "2019-08-24T14:15:22Z"
        }
      ],
      "memberOf": [
        {
          "type": "MLSMembership",
          "roleName": "MLSMember",
          "memberOf": {
            "type": "MultipleListingService",
            "id": "http://orgid.example.com/profile/card#me",
            "name": "GreatScottMLS"
          },
          "member": "https://{agent}.example.com/profile/card#me",
          "startDate": "2019-08-24T14:15:22Z",
          "endDate": "2019-08-24T14:15:22Z",
          "memberId": "memberid123"
        }
      ],
      "permit": [
        {
          "type": "RealEstateLicense",
          "name": "CA-DRE# 02068375",
          "identifier": {
            "type": "PropertyValue",
            "name": "CA-DRE",
            "value": "02068375"
          },
          "issuedBy": {
            "type": "State",
            "name": "California"
          },
          "issuedThrough": {
            "type": "Service",
            "name": "California Department of Real Estate"
          },
          "validIn": {
            "type": "State",
            "name": "California"
          },
          "validFrom": "2019-07-07T10:55:02Z",
          "validUntil": "2019-07-07T10:55:02Z"
        }
      ],
      "identifier": {
        "ContactID": "1234567"
      },
      "jobTitle": [
        [
          "Accounting Department",
          "Awards Coordinator"
        ]
      ],
      "additionalName": "ambassador satch,pops,satchmo",
      "sameAs": {
        "bmsID": "1234"
      }
    },
    "branchCode": "ABC123",
    "type": "AddAction"
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `profile#teamdelete`

*a team profile was deleted*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/profile#teamdelete",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "object": {
      "type": "RealEstateTeam",
      "id": "http://example.com",
      "name": "string",
      "givenName": "Glenn",
      "familyName": "Miller",
      "address": {
        "type": "PostalAddress",
        "name": "Home",
        "streetAddress": "1007 Mountain Gate Rd",
        "postOfficeBoxNumber": "Box 1234",
        "addressRegion": "New Jersey",
        "addressLocality": "Gotham City",
        "postalCode": "10010",
        "addressCountry": "USA",
        "addressCounty": "Gotham County",
        "addressSubdivision": "Gotham Heights"
      },
      "availableLanguage": [
        {
          "type": "Language",
          "name": "English",
          "additionalName": "en-US"
        }
      ],
      "branchCode": "for BHHS profile events, see additionalProperty.OfficeId",
      "certification": [
        {
          "type": "Certification",
          "name": "E-Agent Certified",
          "validFrom": "2019-06-13T07:00:00.000Z",
          "additionalProperty": {
            "ceritificationTypeId": "86afafd3-ac25-4a89-9a6e-bebb3753c4b2"
          }
        }
      ],
      "contactPoint": {
        "type": "ContactPoint",
        "name": "Work",
        "telephone": "800-555-5555",
        "faxNumber": "888-4BA-TMAN",
        "email": "bruce@example.com",
        "url": "https://example.com"
      },
      "email": "user@example.com",
      "faxNumber": "(873) 271-4802",
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
      "logo": [
        {
          "type": "DigitalDocument",
          "id": "http://user.example.com/public/logo/archive.zip",
          "name": "archive.zip",
          "encodingFormat": "application/zip",
          "about": {
            "type": "RealEstateTransaction",
            "identifier": {
              "bmsTransactionId": "xxxx"
            }
          },
          "url": "https://example.com"
        }
      ],
      "parentOrganization": [
        "http://example.com",
        "http://batmanandrobinteam.example.com/"
      ],
      "subOrganization": [
        "http://org.example.com/profile/card#me"
      ],
      "telephone": "+15558675309",
      "url": "http://example.com",
      "areaServed": {
        "type": "PostalCode",
        "postalCode": "91371",
        "addressLocality": "Woodland Hills",
        "addressCounty": "Los Angeles",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "description": "The number on Gotham City Real Estate Company since 1940",
      "numberOfSubOrganizations": 0,
      "member": [
        {
          "type": "RealEstateTeamMembership",
          "roleName": "TeamMember",
          "memberOf": "https://{team-id}.example.com/profile/card#me",
          "member": "https://{agent}.example.com/profile/card#me",
          "startDate": "2019-08-24T14:15:22Z",
          "endDate": "2019-08-24T14:15:22Z"
        }
      ],
      "memberOf": [
        {
          "type": "MLSMembership",
          "roleName": "MLSMember",
          "memberOf": {
            "type": "MultipleListingService",
            "id": "http://orgid.example.com/profile/card#me",
            "name": "GreatScottMLS"
          },
          "member": "https://{agent}.example.com/profile/card#me",
          "startDate": "2019-08-24T14:15:22Z",
          "endDate": "2019-08-24T14:15:22Z",
          "memberId": "memberid123"
        }
      ],
      "permit": [
        {
          "type": "RealEstateLicense",
          "name": "CA-DRE# 02068375",
          "identifier": {
            "type": "PropertyValue",
            "name": "CA-DRE",
            "value": "02068375"
          },
          "issuedBy": {
            "type": "State",
            "name": "California"
          },
          "issuedThrough": {
            "type": "Service",
            "name": "California Department of Real Estate"
          },
          "validIn": {
            "type": "State",
            "name": "California"
          },
          "validFrom": "2019-07-07T10:55:02Z",
          "validUntil": "2019-07-07T10:55:02Z"
        }
      ],
      "identifier": {
        "ContactID": "1234567"
      },
      "jobTitle": [
        [
          "Accounting Department",
          "Awards Coordinator"
        ]
      ],
      "additionalName": "ambassador satch,pops,satchmo",
      "sameAs": {
        "bmsID": "1234"
      }
    },
    "branchCode": "ABC123",
    "type": "DeleteAction"
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `profile#teammemberadd`

*a team member was added*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/profile#teammemberadd",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AddAction",
    "object": {
      "type": "RealEstateTeamMembership",
      "roleName": "TeamMember",
      "memberOf": "https://{team-id}.example.com/profile/card#me",
      "member": "https://{agent}.example.com/profile/card#me",
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `profile#teammemberremove`

*a member (user) is removed from the team*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/profile#teannenberremove",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RemoveAction",
    "object": {
      "type": "RealEstateTeamMembership",
      "roleName": "TeamMember",
      "memberOf": "https://{team-id}.example.com/profile/card#me",
      "member": "https://{agent}.example.com/profile/card#me",
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|


### SUB `/servicearea` Operation

Accepts **one of** the following messages:

#### Message `servicearea#create`

*service area created*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/servicearea#create",
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
      "type": "ServiceArea",
      "kind": "PostalCode",
      "identifier": {
        "bhhsESAId": "string"
      },
      "addressLocality": "Woodland Hills",
      "postalCode": "91371",
      "addressRegion": "CA",
      "addressCountry": "US",
      "addressCounty": "Los Angeles",
      "provider": {
        "type": "RealEstateOrganization",
        "id": "https://org.example.com/profile/card#me"
      },
      "additionalProperty": {
        "relocationOffice": {
          "type": "RealEstateOffice",
          "id": "https://org.example.com/profile/card#me"
        },
        "weight": 0,
        "officeInPostalCode": true,
        "sortOrder": 0,
        "sentToConsumerSite": true,
        "sentToCompanyLocator": true,
        "sentToReferralSolutions": true,
        "luxuryPriceMinimum": {
          "type": "PriceSpecification",
          "price": 1000000,
          "priceCurrency": "USD"
        }
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `servicearea#update`

*service area update*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/servicearea#update",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "UpdateAction",
    "object": {
      "type": "ServiceArea",
      "kind": "PostalCode",
      "identifier": {
        "bhhsESAId": "string"
      },
      "addressLocality": "Woodland Hills",
      "postalCode": "91371",
      "addressRegion": "CA",
      "addressCountry": "US",
      "addressCounty": "Los Angeles",
      "provider": {
        "type": "RealEstateOrganization",
        "id": "https://org.example.com/profile/card#me"
      },
      "additionalProperty": {
        "relocationOffice": {
          "type": "RealEstateOffice",
          "id": "https://org.example.com/profile/card#me"
        },
        "weight": 0,
        "officeInPostalCode": true,
        "sortOrder": 0,
        "sentToConsumerSite": true,
        "sentToCompanyLocator": true,
        "sentToReferralSolutions": true,
        "luxuryPriceMinimum": {
          "type": "PriceSpecification",
          "price": 1000000,
          "priceCurrency": "USD"
        }
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `servicearea#delete`

*ServiceArea (data.object) has been deleted.  Identifier is required.*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/servicearea#delete",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "DeleteAction",
    "object": {
      "type": "ServiceArea",
      "identifier": {
        "bhhsESAId": "abcde"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|


### SUB `/website` Operation

Accepts **one of** the following messages:

#### Message `website#askquestion`

*website user asks a question*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#askquestion",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AskAction",
    "agent": {
      "type": "Contact",
      "name": "Miles Davis",
      "givenName": "Miles",
      "familyName": "Davis",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "identifier": {
        "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
      },
      "additionalProperty": {
        "userPath": "xxxx",
        "workingWithAgent": true
      }
    },
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "Question",
      "text": "I would like to view 123 Main Street."
    },
    "recipient": {
      "type": "RealEstateAgent",
      "name": "Randy RealEstateAgent",
      "id": "https://{userid}.example.com/profile/card#me"
    },
    "about": {
      "type": "PropertyListing",
      "originatingSystemName": "GOTHAM-MLS",
      "originatingSystemKey": "12345",
      "url": "https://{company-website-url}/{path-to-listing}",
      "streetAddress": "1007 Mountain Gate Rd",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#register`

*website user has registered on the website.*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#register",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RegisterAction",
    "agent": null,
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "RealEstateWebsite",
      "url": "https://gothamcityrealestate.example.com"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#requestappointment`

*website user has requested an appointment*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#requestappointment",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RequestAppointmentAction",
    "agent": null,
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "Question",
      "text": "I would like to view 123 Main Street."
    },
    "recipient": {
      "type": "RealEstateAgent",
      "name": "Randy RealEstateAgent",
      "id": "https://{userid}.example.com/profile/card#me"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#requestshowing`

*a website visitor has requested a property showing*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#requestshowing",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RequestShowingAction",
    "agent": null,
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "Question",
      "text": "I would like to view 123 Main Street."
    },
    "about": {
      "type": "PropertyListing",
      "originatingSystemName": "GOTHAM-MLS",
      "originatingSystemKey": "12345",
      "url": "https://{company-website-url}/{path-to-listing}",
      "streetAddress": "1007 Mountain Gate Rd",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      }
    },
    "event": {
      "type": "Event",
      "name": "Property Showing 1007 Mountain Gate Rd",
      "description": "an example meeting request for 4:00PM to 4:30PM.",
      "startDate": "2019-08-01T16:00Z",
      "endDate": "2019-08-01T16:30Z"
    },
    "recipient": {
      "type": "RealEstateAgent",
      "name": "Randy RealEstateAgent",
      "id": "https://{userid}.example.com/profile/card#me"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#saveproperty`

*website user (agent) saved a property*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#saveproperty",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "SaveAction",
    "agent": {
      "type": "Contact",
      "name": "Miles Davis",
      "givenName": "Miles",
      "familyName": "Davis",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "identifier": {
        "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
      },
      "additionalProperty": {
        "userPath": "xxx",
        "workingWithAgent": true
      }
    },
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertyListing",
      "originatingSystemName": "GOTHAM-MLS",
      "originatingSystemKey": "12345",
      "url": "https://{company-website-url}/{path-to-listing}",
      "streetAddress": "1007 Mountain Gate Rd",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#propertysearchsave`

*website user (agent) saves a property search (object), on a website or mobile app (instrument)*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#propertysearchsave",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "SaveAction",
    "agent": {
      "type": "Contact",
      "name": "Miles Davis",
      "givenName": "Miles",
      "familyName": "Davis",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "identifier": {
        "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
      },
      "additionalProperty": {
        "userPath": "xxx",
        "workingWithAgent": true
      }
    },
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertySearch",
      "name": "3+ beds in Gotham City",
      "description": "((city=Gotham),(Bedrooms=3+))",
      "propertyType": "RESI",
      "propertySubType": {
        "propertySubType": "ApartmentPropertyType"
      },
      "listingStatus": "ActiveListingStatus,ContingentListingStatus",
      "location": {
        "type": "Place",
        "address": {
          "type": "PostalAddress",
          "name": "Home",
          "streetAddress": "1007 Mountain Gate Rd",
          "postOfficeBoxNumber": "Box 1234",
          "addressRegion": "New Jersey",
          "addressLocality": "Gotham City",
          "postalCode": "10010",
          "addressCountry": "USA",
          "addressCounty": "Gotham County",
          "addressSubdivision": "Gotham Heights"
        },
        "geo": {
          "type": "GeoShape",
          "geoMidpoint": {
            "type": "GeoCoordinates,",
            "longitude": "73.98",
            "latitude": "40.75"
          },
          "geoRadius": {
            "type": "QuantitativeValue,",
            "value": "10,",
            "unitCode": "mi,",
            "unitText": "miles"
          },
          "box": "(33.5697,-117.775),(33.6018,-117.707)"
        }
      },
      "price": {
        "type": "PriceSpecification",
        "minPrice": 75000,
        "maxPrice": 100000,
        "price": 75000,
        "priceCurrency": "USD"
      },
      "bedrooms": {
        "type": "QuantitativeValue",
        "minValue": 0,
        "maxValue": 4,
        "unitCode": "BD",
        "unitText": "Bedrooms"
      },
      "bathrooms": {
        "type": "QuantitativeValue",
        "minValue": 2,
        "unitCode": "BA",
        "unitText": "Bathrooms"
      },
      "livingArea": {
        "type": "QuantitativeValue",
        "minValue": 1500,
        "unitCode": "SqFt",
        "unitText": "Square Feet"
      },
      "lotSize": {
        "type": "QuantitativeValue",
        "minValue": 0.5,
        "unitCode": "AC",
        "unitText": "Acres"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#searchproperties`

*a website user has performed a property search*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#searchproperties",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "SearchAction",
    "agent": {
      "type": "Contact",
      "name": "Miles Davis",
      "givenName": "Miles",
      "familyName": "Davis",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "identifier": {
        "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
      },
      "additionalProperty": {
        "userPath": "xxx",
        "workingWithAgent": true
      }
    },
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertySearch",
      "name": "3+ beds in Gotham City",
      "description": "((city=Gotham),(Bedrooms=3+))",
      "propertyType": "RESI",
      "propertySubType": {
        "propertySubType": "ApartmentPropertyType"
      },
      "listingStatus": "ActiveListingStatus,ContingentListingStatus",
      "location": {
        "type": "Place",
        "address": {
          "type": "PostalAddress",
          "name": "Home",
          "streetAddress": "1007 Mountain Gate Rd",
          "postOfficeBoxNumber": "Box 1234",
          "addressRegion": "New Jersey",
          "addressLocality": "Gotham City",
          "postalCode": "10010",
          "addressCountry": "USA",
          "addressCounty": "Gotham County",
          "addressSubdivision": "Gotham Heights"
        },
        "geo": {
          "type": "GeoShape",
          "geoMidpoint": {
            "type": "GeoCoordinates,",
            "longitude": "73.98",
            "latitude": "40.75"
          },
          "geoRadius": {
            "type": "QuantitativeValue,",
            "value": "10,",
            "unitCode": "mi,",
            "unitText": "miles"
          },
          "box": "(33.5697,-117.775),(33.6018,-117.707)"
        }
      },
      "price": {
        "type": "PriceSpecification",
        "minPrice": 75000,
        "maxPrice": 100000,
        "price": 75000,
        "priceCurrency": "USD"
      },
      "bedrooms": {
        "type": "QuantitativeValue",
        "minValue": 0,
        "maxValue": 4,
        "unitCode": "BD",
        "unitText": "Bedrooms"
      },
      "bathrooms": {
        "type": "QuantitativeValue",
        "minValue": 2,
        "unitCode": "BA",
        "unitText": "Bathrooms"
      },
      "livingArea": {
        "type": "QuantitativeValue",
        "minValue": 1500,
        "unitCode": "SqFt",
        "unitText": "Square Feet"
      },
      "lotSize": {
        "type": "QuantitativeValue",
        "minValue": 0.5,
        "unitCode": "AC",
        "unitText": "Acres"
      }
    },
    "result": {
      "type": "FindAction",
      "object": [
        {
          "type": "PropertyListing",
          "url": "http://example.com/listing/123"
        },
        {
          "type": "PropertyListing",
          "url": "http://example.com/listing/234"
        }
      ]
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#shareproperty`

*agent shared object with recipient*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#shareproperty",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://{listing-agent}.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "ShareAction",
    "agent": {
      "type": "Contact",
      "name": "Miles Davis",
      "givenName": "Miles",
      "familyName": "Davis",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "identifier": {
        "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
      },
      "additionalProperty": {
        "userPath": "xxx",
        "workingWithAgent": true
      }
    },
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertyListing",
      "originatingSystemName": "GOTHAM-MLS",
      "originatingSystemKey": "12345",
      "url": "https://{company-website-url}/{path-to-listing}",
      "streetAddress": "1007 Mountain Gate Rd",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      }
    },
    "recipient": {
      "type": "Person",
      "email": "user@example.com"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#sharepropertyvaluereport`

*agent shared object with recipient*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#sharepropertyvaluereport",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "ShareAction",
    "agent": {
      "type": "Contact",
      "name": "Miles Davis",
      "givenName": "Miles",
      "familyName": "Davis",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "identifier": {
        "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
      },
      "additionalProperty": {
        "userPath": "xxx",
        "workingWithAgent": true
      }
    },
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertyValueReport",
      "name": "LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...",
      "dateCreated": "2019-08-24T14:15:22Z",
      "result": {
        "type": "MonetaryAmount",
        "minValue": 2400000,
        "maxValue": 3200000,
        "value": 2700000,
        "currency": "USD"
      },
      "about": {
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
        "yearBuilt": 1988,
        "additionalProperty": {
          "heating": null,
          "cooling": null,
          "isForeclosure": null,
          "isShortsale": null,
          "score": 7,
          "parcelId": null,
          "averageSalePrice": {
            "type": "PriceSpecification",
            "price": 7500000,
            "priceCurrency": "USD"
          },
          "nonDisclosureProperty": false,
          "taxAssessedValue": {
            "@type": "MonetaryAmount",
            "amount": "100000",
            "currency": "USD"
          },
          "taxAssessedYear": 2021,
          "inHouseCompanyListingUrl": null,
          "inHouseCompanyListingEvent": null,
          "neighborhoodMetrics": null,
          "neighborhoodName": "DEER CREEK WOODS",
          "neighborhoodKey": null,
          "useNeighborhoodDataForCharts": false,
          "ownerName": "Bob Jones",
          "ownerOccupied": "Y",
          "ownersEstimatedEquity": {
            "@type": "MonetaryAmount",
            "amount": "100000",
            "currency": "USD"
          },
          "firstLoanPrice": {
            "@type": "MonetaryAmount",
            "amount": "100000",
            "currency": "USD"
          },
          "firstLoanLenderName": "",
          "secondLoanPrice": {
            "@type": "MonetaryAmount",
            "amount": null,
            "currency": null
          },
          "secondLoanLenderName": "N/A",
          "lastRefinanceLoanVal1": {
            "@type": "MonetaryAmount",
            "amount": "100000",
            "currency": "USD"
          },
          "lastRefinanceLenderName1": "N/A",
          "lastRefinanceLoanVal2": {
            "@type": "MonetaryAmount",
            "amount": null,
            "currency": null
          },
          "lastRefinanceLenderName2": "N/A",
          "Title_Company": ""
        }
      }
    },
    "recipient": {
      "type": "Person",
      "email": "user@example.com"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#viewproperty`

*website user (data.agent) has viewed a listing (data.object) on a webiste or mobile app (data.instrument)*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#viewproperty",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "ViewAction",
    "agent": {
      "type": "Contact",
      "name": "Miles Davis",
      "givenName": "Miles",
      "familyName": "Davis",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "identifier": {
        "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
      },
      "additionalProperty": {
        "userPath": "xxx",
        "workingWithAgent": true
      }
    },
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertyListing",
      "originatingSystemName": "GOTHAM-MLS",
      "originatingSystemKey": "12345",
      "url": "https://{company-website-url}/{path-to-listing}",
      "streetAddress": "1007 Mountain Gate Rd",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#viewpropertyvaluereort`

*website user (data.agent) has viewed a propvery value report (data.object) on a webiste or mobile app (data.instrument)*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#viewpropertyvaluereport",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "ViewAction",
    "agent": {
      "type": "Contact",
      "name": "Miles Davis",
      "givenName": "Miles",
      "familyName": "Davis",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "identifier": {
        "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
      },
      "additionalProperty": {
        "userPath": "xxx",
        "workingWithAgent": true
      }
    },
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertyValueReport",
      "name": "LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...",
      "dateCreated": "2019-08-24T14:15:22Z",
      "result": {
        "type": "MonetaryAmount",
        "minValue": 2400000,
        "maxValue": 3200000,
        "value": 2700000,
        "currency": "USD"
      },
      "about": {
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
        "yearBuilt": 1988,
        "additionalProperty": {
          "heating": null,
          "cooling": null,
          "isForeclosure": null,
          "isShortsale": null,
          "score": 7,
          "parcelId": null,
          "averageSalePrice": {
            "type": "PriceSpecification",
            "price": 7500000,
            "priceCurrency": "USD"
          },
          "nonDisclosureProperty": false,
          "taxAssessedValue": {
            "@type": "MonetaryAmount",
            "amount": "100000",
            "currency": "USD"
          },
          "taxAssessedYear": 2021,
          "inHouseCompanyListingUrl": null,
          "inHouseCompanyListingEvent": null,
          "neighborhoodMetrics": null,
          "neighborhoodName": "DEER CREEK WOODS",
          "neighborhoodKey": null,
          "useNeighborhoodDataForCharts": false,
          "ownerName": "Bob Jones",
          "ownerOccupied": "Y",
          "ownersEstimatedEquity": {
            "@type": "MonetaryAmount",
            "amount": "100000",
            "currency": "USD"
          },
          "firstLoanPrice": {
            "@type": "MonetaryAmount",
            "amount": "100000",
            "currency": "USD"
          },
          "firstLoanLenderName": "",
          "secondLoanPrice": {
            "@type": "MonetaryAmount",
            "amount": null,
            "currency": null
          },
          "secondLoanLenderName": "N/A",
          "lastRefinanceLoanVal1": {
            "@type": "MonetaryAmount",
            "amount": "100000",
            "currency": "USD"
          },
          "lastRefinanceLenderName1": "N/A",
          "lastRefinanceLoanVal2": {
            "@type": "MonetaryAmount",
            "amount": null,
            "currency": null
          },
          "lastRefinanceLenderName2": "N/A",
          "Title_Company": ""
        }
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|


