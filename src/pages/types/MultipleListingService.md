---
title: MultipleListingService
---
## Example



```json
{
  "type": "MultipleListingService",
  "name": "MLSListings",
  "identifier": {
    "resoouid": "M00000101"
  },
  "sameAs": {
    "supercrmmlsid": "MLSListings"
  }
}
```

## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | A multiple listing service (MLS, also multiple listing system or multiple listings service) is a suite of services that real estate brokers use to establish contractual offers of compensation (among brokers) and accumulate and disseminate information to enable appraisals. A multiple listing service's database and software is used by real estate brokers in real estate (or aircraft broker[1] in other industries for example), representing sellers under a listing contract to widely share information about properties with other brokers who may represent potential buyers or wish to work with a seller's broker in finding a buyer for the property or asset. The listing data stored in a multiple listing service's database is the proprietary information of the broker who has obtained a listing agreement with a property's seller. |
| type | string | const (`"MultipleListingService"`)  |
| name | string | - |
| identifier | object |  1 properties |
| sameAs | string | vendor specific identifier for the user can be shared with other vendors to identify the user format (`uri`) |

