---
title: Thing
---
## Schema

| Name | Type | Description |
|---|---|---|
| (Thing) | object | - |
| type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| @id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| @id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |

## Example



```json
{
  "type": "string",
  "@id": "http://example.com"
}
```
