

---
title: Question
---

{
  "type": {
    "_json": {
      "type": "string",
      "description": "The item type (Linked-Data @type)",
      "enum": [
        "Question"
      ],
      "x-parser-schema-id": "<anonymous-schema-494>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "description": "A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.",
          "title": "Question",
          "x-range": "Question",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "Question"
              ],
              "x-parser-schema-id": "<anonymous-schema-494>"
            },
            "text": {
              "type": "string",
              "description": "the question content",
              "example": "I would like to view 123 Main Street.",
              "x-parser-schema-id": "<anonymous-schema-495>"
            }
          },
          "x-parser-schema-id": "Question"
        },
        "options": {}
      }
    }
  },
  "text": {
    "_json": {
      "type": "string",
      "description": "the question content",
      "example": "I would like to view 123 Main Street.",
      "x-parser-schema-id": "<anonymous-schema-495>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "description": "A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.",
          "title": "Question",
          "x-range": "Question",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "Question"
              ],
              "x-parser-schema-id": "<anonymous-schema-494>"
            },
            "text": {
              "type": "string",
              "description": "the question content",
              "example": "I would like to view 123 Main Street.",
              "x-parser-schema-id": "<anonymous-schema-495>"
            }
          },
          "x-parser-schema-id": "Question"
        },
        "options": {}
      }
    }
  }
}


# Question

A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "description": "The item type (Linked-Data @type)",
    "enum": [
      "Question"
    ],
    "x-parser-schema-id": "<anonymous-schema-494>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "description": "A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.",
        "title": "Question",
        "x-range": "Question",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "Question"
            ],
            "x-parser-schema-id": "<anonymous-schema-494>"
          },
          "text": {
            "type": "string",
            "description": "the question content",
            "example": "I would like to view 123 Main Street.",
            "x-parser-schema-id": "<anonymous-schema-495>"
          }
        },
        "x-parser-schema-id": "Question"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "the question content",
    "example": "I would like to view 123 Main Street.",
    "x-parser-schema-id": "<anonymous-schema-495>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "description": "A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.",
        "title": "Question",
        "x-range": "Question",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "Question"
            ],
            "x-parser-schema-id": "<anonymous-schema-494>"
          },
          "text": {
            "type": "string",
            "description": "the question content",
            "example": "I would like to view 123 Main Street.",
            "x-parser-schema-id": "<anonymous-schema-495>"
          }
        },
        "x-parser-schema-id": "Question"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "Question",
  "text": "I would like to view 123 Main Street."
}
```

