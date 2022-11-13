---
title: ProgramMembership
---
## Example



```json
{
  "type": "ProgramMembership",
  "role": "member",
  "member": {
    "type": "Contact",
    "name": "string",
    "identifier": {
      "bhhsconsumerid": "12345"
    }
  },
  "memberOf": {
    "type": "MarketingProgram",
    "name": "Market Activity Report 508 Homewood Ave",
    "identifier": {
      "bhhsconsumerid": "12345"
    }
  }
}
```

## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | describes membership relation between a member (Person) and a MarketingProgram |
| type | string | const (`"ProgramMembership"`)  |
| role | string | allowed (`"member"`, `"owner"`)  |
| member | object | - |
| member.type | string | const (`"Contact"`)  |
| member.name | string | - |
| member.identifier | object |  1 properties |
| memberOf | object | - |
| memberOf.type | string | const (`"MarketingProgram"`)  |
| memberOf.name | string | - |
| memberOf.identifier | object |  1 properties |

