---
title: RealEstateLicense
route: /types/RealEstateLicense
menu: Types
---# RealEstateLicense
Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | RealEstateLicense  |
| name | string | display value, i.e. 'CA-DRE# 02068375'  |
| issuedTo | object | the license recipient <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateOrganization](/types/RealEstateOrganization) |
| issuedBy | object | the issuing organization or service <br/>RANGE: [State](/types/State), [Organization](/types/Organization), [AdministrativeArea](/types/AdministrativeArea) |
| issuedThrough | object | The service through with the permit was granted. <br/>RANGE: [Organization](/types/Organization) |
| issuedThrough.type | string |   |
| issuedThrough.name | string |   |
| validIn | object | the state where the RealEstateLicense is valid <br/>RANGE: [State](/types/State), [City](/types/City), [GeographicArea](/types/GeographicArea), [PostalCode](/types/PostalCode) |
| validFrom | string&lt;date-time&gt;  | the first date and time on which the license is valid.  |
| validUntil | string&lt;date-time&gt;  | the last date and time on which the license is valid.  |

### Example
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
  "validFrom": "2022-10-12T01:13:43Z",
  "validUntil": "2022-10-12T01:13:43Z"
}
```