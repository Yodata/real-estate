---
title: Permit
---
| Name | Type | Description |
|---|---|---|
| (root) | object | A permit issued by an organization to an individual or business. |
| Permit.type | string | Permit type. |
| Permit.name | string | Common or display value of the Permit. |
| Permit.issuedBy | object | The issuing authority |
| Permit.issuedThrough | object | the service through which the permit was granted |
| Permit.validIn | object | - |
| Permit.validFrom | string | start date |
| Permit.validUntil | string | end date |

> Examples of Permit

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


