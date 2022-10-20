

---
title: State
---

{
  "type": {
    "_json": {
      "type": "string",
      "description": "The item type (Linked-Data @type)",
      "enum": [
        "State"
      ],
      "x-parser-schema-id": "<anonymous-schema-610>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "State",
          "x-range": "State",
          "description": "a State or Region",
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "State"
              ],
              "x-parser-schema-id": "<anonymous-schema-610>"
            },
            "name": {
              "type": "string",
              "description": "the name of the item",
              "x-parser-schema-id": "<anonymous-schema-199>"
            }
          },
          "example": {
            "type": "State",
            "name": "New Jersey"
          },
          "x-parser-schema-id": "State"
        },
        "options": {}
      }
    }
  },
  "name": {
    "_json": {
      "type": "string",
      "description": "the name of the item",
      "x-parser-schema-id": "<anonymous-schema-199>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "State",
          "x-range": "State",
          "description": "a State or Region",
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "State"
              ],
              "x-parser-schema-id": "<anonymous-schema-610>"
            },
            "name": {
              "type": "string",
              "description": "the name of the item",
              "x-parser-schema-id": "<anonymous-schema-199>"
            }
          },
          "example": {
            "type": "State",
            "name": "New Jersey"
          },
          "x-parser-schema-id": "State"
        },
        "options": {}
      }
    }
  }
}


# State

a State or Region



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "description": "The item type (Linked-Data @type)",
    "enum": [
      "State"
    ],
    "x-parser-schema-id": "<anonymous-schema-610>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "State",
        "x-range": "State",
        "description": "a State or Region",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "State"
            ],
            "x-parser-schema-id": "<anonymous-schema-610>"
          },
          "name": {
            "type": "string",
            "description": "the name of the item",
            "x-parser-schema-id": "<anonymous-schema-199>"
          }
        },
        "example": {
          "type": "State",
          "name": "New Jersey"
        },
        "x-parser-schema-id": "State"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "the name of the item",
    "x-parser-schema-id": "<anonymous-schema-199>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "State",
        "x-range": "State",
        "description": "a State or Region",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "State"
            ],
            "x-parser-schema-id": "<anonymous-schema-610>"
          },
          "name": {
            "type": "string",
            "description": "the name of the item",
            "x-parser-schema-id": "<anonymous-schema-199>"
          }
        },
        "example": {
          "type": "State",
          "name": "New Jersey"
        },
        "x-parser-schema-id": "State"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "State",
  "name": "New Jersey"
}
```

