---
title: servicearea
---

## Operations### SUB `servicearea` Operation

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




