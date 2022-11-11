---
title: PropertyValue
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | a key/value pair, used for maintaining state outside of the current context |
| type | string | allowed (`"PropertyValue"`)  |
| propertyID | string | - |
| value | string | - |

## Example



```json
{
  "type": "PropertyValue",
  "propertyID": "UserID",
  "value": "@bobjones"
}
```
