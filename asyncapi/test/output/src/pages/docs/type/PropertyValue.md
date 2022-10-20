

---
title: PropertyValue
---

{
  "type": {
    "_json": {
      "type": "string",
      "enum": [
        "PropertyValue"
      ],
      "x-parser-schema-id": "<anonymous-schema-471>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "PropertyValue",
          "description": "a key/value pair, used for maintaining state outside of the current context",
          "required": [
            "type",
            "propertyID",
            "value"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "PropertyValue"
              ],
              "x-parser-schema-id": "<anonymous-schema-471>"
            },
            "propertyID": {
              "type": "string",
              "example": "UserID",
              "x-parser-schema-id": "<anonymous-schema-472>"
            },
            "value": {
              "type": "string",
              "example": "@bobjones",
              "x-parser-schema-id": "<anonymous-schema-473>"
            }
          },
          "x-parser-schema-id": "PropertyValue"
        },
        "options": {}
      }
    }
  },
  "propertyID": {
    "_json": {
      "type": "string",
      "example": "UserID",
      "x-parser-schema-id": "<anonymous-schema-472>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "PropertyValue",
          "description": "a key/value pair, used for maintaining state outside of the current context",
          "required": [
            "type",
            "propertyID",
            "value"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "PropertyValue"
              ],
              "x-parser-schema-id": "<anonymous-schema-471>"
            },
            "propertyID": {
              "type": "string",
              "example": "UserID",
              "x-parser-schema-id": "<anonymous-schema-472>"
            },
            "value": {
              "type": "string",
              "example": "@bobjones",
              "x-parser-schema-id": "<anonymous-schema-473>"
            }
          },
          "x-parser-schema-id": "PropertyValue"
        },
        "options": {}
      }
    }
  },
  "value": {
    "_json": {
      "type": "string",
      "example": "@bobjones",
      "x-parser-schema-id": "<anonymous-schema-473>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "PropertyValue",
          "description": "a key/value pair, used for maintaining state outside of the current context",
          "required": [
            "type",
            "propertyID",
            "value"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "PropertyValue"
              ],
              "x-parser-schema-id": "<anonymous-schema-471>"
            },
            "propertyID": {
              "type": "string",
              "example": "UserID",
              "x-parser-schema-id": "<anonymous-schema-472>"
            },
            "value": {
              "type": "string",
              "example": "@bobjones",
              "x-parser-schema-id": "<anonymous-schema-473>"
            }
          },
          "x-parser-schema-id": "PropertyValue"
        },
        "options": {}
      }
    }
  }
}


# PropertyValue

a key/value pair, used for maintaining state outside of the current context



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "enum": [
      "PropertyValue"
    ],
    "x-parser-schema-id": "<anonymous-schema-471>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "PropertyValue",
        "description": "a key/value pair, used for maintaining state outside of the current context",
        "required": [
          "type",
          "propertyID",
          "value"
        ],
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "PropertyValue"
            ],
            "x-parser-schema-id": "<anonymous-schema-471>"
          },
          "propertyID": {
            "type": "string",
            "example": "UserID",
            "x-parser-schema-id": "<anonymous-schema-472>"
          },
          "value": {
            "type": "string",
            "example": "@bobjones",
            "x-parser-schema-id": "<anonymous-schema-473>"
          }
        },
        "x-parser-schema-id": "PropertyValue"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "example": "UserID",
    "x-parser-schema-id": "<anonymous-schema-472>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "PropertyValue",
        "description": "a key/value pair, used for maintaining state outside of the current context",
        "required": [
          "type",
          "propertyID",
          "value"
        ],
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "PropertyValue"
            ],
            "x-parser-schema-id": "<anonymous-schema-471>"
          },
          "propertyID": {
            "type": "string",
            "example": "UserID",
            "x-parser-schema-id": "<anonymous-schema-472>"
          },
          "value": {
            "type": "string",
            "example": "@bobjones",
            "x-parser-schema-id": "<anonymous-schema-473>"
          }
        },
        "x-parser-schema-id": "PropertyValue"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "example": "@bobjones",
    "x-parser-schema-id": "<anonymous-schema-473>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "PropertyValue",
        "description": "a key/value pair, used for maintaining state outside of the current context",
        "required": [
          "type",
          "propertyID",
          "value"
        ],
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "PropertyValue"
            ],
            "x-parser-schema-id": "<anonymous-schema-471>"
          },
          "propertyID": {
            "type": "string",
            "example": "UserID",
            "x-parser-schema-id": "<anonymous-schema-472>"
          },
          "value": {
            "type": "string",
            "example": "@bobjones",
            "x-parser-schema-id": "<anonymous-schema-473>"
          }
        },
        "x-parser-schema-id": "PropertyValue"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "PropertyValue",
  "propertyID": "UserID",
  "value": "@bobjones"
}
```

