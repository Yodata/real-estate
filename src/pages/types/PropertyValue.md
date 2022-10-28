---
title: PropertyValue
route: /types/PropertyValue
menu: Types
---# PropertyValue
a key/value pair, used for maintaining state outside of the current context


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string! |   |
| propertyID | string! |   |
| value | string! |   |

### Example
```json
{
  "type": "PropertyValue",
  "propertyID": "UserID",
  "value": "@bobjones"
}
```
