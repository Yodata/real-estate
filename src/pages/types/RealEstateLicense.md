---
title: RealEstateLicense
---
## Schema

| Name | Type | Description |
|---|---|---|
| (RealEstateLicense) | object | Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate. |
| type | string | RealEstateLicense |
| name | string | display value, i.e. 'CA-DRE# 02068375' |
| issuedTo | object | the license recipient |
| issuedBy | object | the issuing organization or service |
| issuedThrough | object | The service through with the permit was granted. |
| issuedThrough.type | string | - |
| issuedThrough.name | string | - |
| validIn | object | the state where the RealEstateLicense is valid |
| validFrom | string | the first date and time on which the license is valid. <span class='constraints'>format (`date-time`)</span> |
| validUntil | string | the last date and time on which the license is valid. <span class='constraints'>format (`date-time`)</span> |
| type | string | RealEstateLicense |
| name | string | display value, i.e. 'CA-DRE# 02068375' |
| issuedTo | object | the license recipient |
| issuedBy | object | the issuing organization or service |
| issuedThrough | object | The service through with the permit was granted. |
| issuedThrough.type | string | - |
| issuedThrough.name | string | - |
| validIn | object | the state where the RealEstateLicense is valid |
| validFrom | string | the first date and time on which the license is valid. <span class='constraints'>format (`date-time`)</span> |
| validUntil | string | the last date and time on which the license is valid. <span class='constraints'>format (`date-time`)</span> |

## Example



```json
{
  "type": "RealEstateLicense",
  "name": "CA-DRE# 02068375",
  "issuedTo": {
    "type": "RealEstateAgent",
    "id": "http://{agentid}.example.com/profile/card#me"
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
  "validFrom": "2019-08-24T14:15:22Z",
  "validUntil": "2019-08-24T14:15:22Z"
}
```
