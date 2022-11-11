---
title: Thing
---
## Schema

| Name | Type | Description |
|---|---|---|
| (Thing) | object | - |
| type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| @id | string | format (`uri`) the liked data uri for the Thing |
| (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| @id | string | format (`uri`) the liked data uri for the Thing |
| (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |

## Example



```json
{
  "type": "string",
  "@id": "http://example.com"
}
```
