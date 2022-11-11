---
title: Permit
---
## Schema

| Name | Type | Description |
|---|---|---|
| (Permit) | object | A permit issued by an organization to an individual or business. |
| type | string | Permit type. |
| name | string | Common or display value of the Permit. |
| issuedBy | object | The issuing authority |
| issuedThrough | object | the service through which the permit was granted |
| validIn | object | - |
| validFrom | string | start date <span class='constraints'>format (`date-time`)</span> |
| validUntil | string | end date <span class='constraints'>format (`date-time`)</span> |
| type | string | Permit type. |
| name | string | Common or display value of the Permit. |
| issuedBy | object | The issuing authority |
| issuedThrough | object | the service through which the permit was granted |
| validIn | object | - |
| validFrom | string | start date <span class='constraints'>format (`date-time`)</span> |
| validUntil | string | end date <span class='constraints'>format (`date-time`)</span> |

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
