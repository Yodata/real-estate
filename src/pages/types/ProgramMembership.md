---
title: ProgramMembership
---
## Schema

| Name | Type | Description |
|---|---|---|
| (ProgramMembership) | object | describes membership relation between a member (Person) and a MarketingProgram |
| type | string | const (`"ProgramMembership"`)  |
| role | string | allowed (`"member"`, `"owner"`)  |
| member | object | - |
| member.type | string | const (`"Contact"`)  |
| member.name | string | - |
| member.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| memberOf | object | - |
| memberOf.type | string | const (`"MarketingProgram"`)  |
| memberOf.name | string | - |
| memberOf.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| type | string | const (`"ProgramMembership"`)  |
| role | string | allowed (`"member"`, `"owner"`)  |
| member | object | - |
| member.type | string | const (`"Contact"`)  |
| member.name | string | - |
| member.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| memberOf | object | - |
| memberOf.type | string | const (`"MarketingProgram"`)  |
| memberOf.name | string | - |
| memberOf.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |

## Example



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
