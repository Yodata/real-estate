---
title: servicearea#update
---
## Message

*service area update*

### Payload

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/servicearea#update",
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


| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/servicearea#update"`)  |
| data | object | - |
| data.type | string | const (`"UpdateAction"`)  |
| data.object | object | an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area) |
| data.object.type | string | allowed (`"ServiceArea"`) "ServiceArea" |
| data.object.kind | string | allowed (`"City"`, `"PostalCode"`) ServiceArea sub-type.  City or PostalCode |
| data.object.identifier | object | vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item. |
| data.object.identifier.bhhsESAId | string | BHHS internal ESA ID |
| data.object.addressLocality | string | City, Township. |
| data.object.postalCode | string | Zip/Post Code |
| data.object.addressRegion | string | State or Province. |
| data.object.addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| data.object.addressCounty | string | the county (us real estate extension) |
| data.object.provider | object | a broker or company who provides service in the ServiceArea |
| data.object.provider.type | string | allowed (`"RealEstateOrganization"`) "RealEstateOrganization" |
| data.object.provider.id | string | profile URI |
| data.object.additionalProperty | object | BHHS specific ServiceArea properties |
| data.object.additionalProperty.relocationOffice | object | relocation office |
| data.object.additionalProperty.relocationOffice.type | string | allowed (`"RealEstateOffice"`) The item type (Linked-Data @type) |
| data.object.additionalProperty.relocationOffice.id | string | - |
| data.object.additionalProperty.weight | integer | weight |
| data.object.additionalProperty.officeInPostalCode | boolean | true if the service area provider is physically located in the ServiceArea. |
| data.object.additionalProperty.sortOrder | integer | sort order |
| data.object.additionalProperty.sentToConsumerSite | boolean | sent to consumer site |
| data.object.additionalProperty.sentToCompanyLocator | boolean | sent to company locator |
| data.object.additionalProperty.sentToReferralSolutions | boolean | sent to referral solutions |
| data.object.additionalProperty.luxuryPriceMinimum | object | minimum price for a property listing in the area to be considered a luxury property |

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


