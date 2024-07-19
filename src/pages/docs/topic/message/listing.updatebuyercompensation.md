---
title: listing#updatebuyercompensation
---

## Message

_update buyer compensation of property listing_

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/listing#updatebuyercompensation",
  "recipient": "https://websiteactivity.bhhs.hsfaffiliates.com/profile/card#me",
  "data": {
    "type": "UpdateAction",
    "object": {
      "type": "PropertyListing",
      "listingId": "370137684",
      "buyerCompensation":{
          "buyerCompensationOfferedYN": "Y",
          "compensationType": "percentage", //"flat", "text"
          "compensationValue": "2"
      }
    }
  }
}
```

### Payload

| Name | Type | Description |
|---|---|---|
|  topic | string | const (`"realestate/listing#updatebuyercompensation"`)  |
|  recipient |  string&lt;uri&gt;  |  the recipient of the event with this id|
|  data.type | string | const (`"UpdateAction"`)   |
|  data.object.type | string   | const (`"PropertyListing"`) |
|  data.object.listingId  | string | the local identifier for the listing |
|  data.object.buyerCompensation.buyerCompensationOfferedYN | bool | buyer compensation status(Y/N)  |
|  data.object.buyerCompensation.compensationType | string | type of compensation |
|  data.object.buyerCompensation.compensationValue | string | value of compensation |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)