---
title: ServiceArea
route: /types/ServiceArea
menu: Types
---# ServiceArea
an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | "ServiceArea"  |
| kind | string | ServiceArea sub-type.  City or PostalCode  |
| identifier | object | vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.  |
| identifier.bhhsESAId | string | BHHS internal ESA ID  |
| addressLocality | string | City, Township.  |
| postalCode | string | Zip/Post Code  |
| addressRegion | string | State or Province.  |
| addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.  |
| addressCounty | string | the county (us real estate extension)  |
| provider | object | a broker or company who provides service in the ServiceArea <br/>RANGE: [RealEstateOrganization](/types/RealEstateOrganization) |
| provider.type | string | "RealEstateOrganization"  |
| provider.id | string | profile URI  |
| additionalProperty | object | BHHS specific ServiceArea properties  |
| additionalProperty.relocationOffice | object | relocation office  |
| additionalProperty.weight | integer | weight  |
| additionalProperty.officeInPostalCode | boolean | true if the service area provider is physically located in the ServiceArea.  |
| additionalProperty.sortOrder | integer | sort order  |
| additionalProperty.sentToConsumerSite | boolean | sent to consumer site  |
| additionalProperty.sentToCompanyLocator | boolean | sent to company locator  |
| additionalProperty.sentToReferralSolutions | boolean | sent to referral solutions  |
| additionalProperty.luxuryPriceMinimum | object | minimum price for a property listing in the area to be considered a luxury property <br/>RANGE: [PriceSpecification](/types/PriceSpecification) |

### Example
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
