---
title: ProgramMembership
---
| Name | Type | Description |
|---|---|---|
| (root) | object | describes membership relation between a member (Person) and a MarketingProgram |
| type | string | - |
| role | string | - |
| member | object | - |
| member.type | string | - |
| member.name | string | - |
| member.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| memberOf | object | - |
| memberOf.type | string | - |
| memberOf.name | string | - |
| memberOf.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |

> Examples of ProgramMembership

```json
{
  "type": "ProgramMembership",
  "role": "member",
  "member": {
    "type": "Contact",
    "name": "string",
    "identifier": {
      "salesforceid": "0031U00002XW1QWQA1"
    }
  },
  "memberOf": {
    "type": "MarketingProgram",
    "name": "Market Activity Report 508 Homewood Ave",
    "identifier": {
      "salesforceid": "0031U00002XW1QWQA1"
    }
  }
}
```


