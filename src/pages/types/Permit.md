---
title: Permit
---
## Schema

| Name | Type | Description |
|---|---|---|
| (Permit) | object | A permit issued by an organization to an individual or business. |
| type | string | allowed (`"Permit"`) Permit type. |
| name | string | Common or display value of the Permit. |
| issuedBy | object | The issuing authority |
| issuedThrough | object | the service through which the permit was granted |
| validIn | object | - |
| validFrom | string | format (`date-time`) start date |
| validUntil | string | format (`date-time`) end date |
| type | string | allowed (`"Permit"`) Permit type. |
| name | string | Common or display value of the Permit. |
| issuedBy | object | The issuing authority |
| issuedThrough | object | the service through which the permit was granted |
| validIn | object | - |
| validFrom | string | format (`date-time`) start date |
| validUntil | string | format (`date-time`) end date |

## Example



```json
{
  "type": "Permit",
  "name": "DRE Number",
  "issuedBy": {
    "type": "State",
    "name": "California"
  },
  "issuedThrough": {
    "type": "Service",
    "name": "Department of Real Estate"
  },
  "validIn": {},
  "validFrom": "2019-08-24T14:15:22Z",
  "validUntil": "2019-08-24T14:15:22Z"
}
```
