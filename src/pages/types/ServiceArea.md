---
title: ServiceArea
---
| Name | Type | Description |
|---|---|---|
| (root) | object | an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area) |
| ServiceArea.type | string | "ServiceArea" |
| ServiceArea.kind | string | ServiceArea sub-type.  City or PostalCode |
| ServiceArea.identifier | object | vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item. |
| ServiceArea.identifier.bhhsESAId | string | BHHS internal ESA ID |
| ServiceArea.addressLocality | string | City, Township. |
| ServiceArea.postalCode | string | Zip/Post Code |
| ServiceArea.addressRegion | string | State or Province. |
| ServiceArea.addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| ServiceArea.addressCounty | string | the county (us real estate extension) |
| ServiceArea.provider | object | a broker or company who provides service in the ServiceArea |
| ServiceArea.provider.type | string | "RealEstateOrganization" |
| ServiceArea.provider.id | string | profile URI |
| ServiceArea.additionalProperty | object | BHHS specific ServiceArea properties |
| ServiceArea.additionalProperty.relocationOffice | object | relocation office |
| ServiceArea.additionalProperty.relocationOffice.type | string | The item type (Linked-Data @type) |
| ServiceArea.additionalProperty.relocationOffice.id | string | - |
| ServiceArea.additionalProperty.weight | integer | weight |
| ServiceArea.additionalProperty.officeInPostalCode | boolean | true if the service area provider is physically located in the ServiceArea. |
| ServiceArea.additionalProperty.sortOrder | integer | sort order |
| ServiceArea.additionalProperty.sentToConsumerSite | boolean | sent to consumer site |
| ServiceArea.additionalProperty.sentToCompanyLocator | boolean | sent to company locator |
| ServiceArea.additionalProperty.sentToReferralSolutions | boolean | sent to referral solutions |
| ServiceArea.additionalProperty.luxuryPriceMinimum | object | minimum price for a property listing in the area to be considered a luxury property |

> Examples of ServiceArea

```json
{
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
```


