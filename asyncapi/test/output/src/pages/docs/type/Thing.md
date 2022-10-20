

---
title: Thing
---

{
  "type": {
    "_json": {
      "type": "string",
      "description": "The item type (Linked-Data @type)",
      "x-parser-schema-id": "<anonymous-schema-144>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "x-parser-schema-id": "<anonymous-schema-144>"
            }
          },
          "x-parser-schema-id": "Thing"
        },
        "options": {}
      }
    }
  }
}


# Thing





### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "description": "The item type (Linked-Data @type)",
    "x-parser-schema-id": "<anonymous-schema-144>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "x-parser-schema-id": "<anonymous-schema-144>"
          }
        },
        "x-parser-schema-id": "Thing"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "string"
}
```

