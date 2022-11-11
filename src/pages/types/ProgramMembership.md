---
title: ProgramMembership
---
| Name | Type | Description |
|---|---|---|
| (root) | object | describes membership relation between a member (Person) and a MarketingProgram |
| ProgramMembership.type | string | - |
| ProgramMembership.role | string | - |
| ProgramMembership.member | object | - |
| ProgramMembership.member.type | string | - |
| ProgramMembership.member.name | string | - |
| ProgramMembership.member.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| ProgramMembership.memberOf | object | - |
| ProgramMembership.memberOf.type | string | - |
| ProgramMembership.memberOf.name | string | - |
| ProgramMembership.memberOf.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |

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


