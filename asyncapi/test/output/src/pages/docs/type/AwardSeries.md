

---
title: AwardSeries
---

{
  "type": {
    "_json": {
      "enum": [
        "AwardSeries"
      ],
      "description": "\"AwardSeries\"",
      "type": "string",
      "x-parser-schema-id": "<anonymous-schema-130>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "AwardSeries",
          "type": "object",
          "x-range": [
            "AwardSeries"
          ],
          "description": "an award bestowed at regular intervals",
          "properties": {
            "type": {
              "enum": [
                "AwardSeries"
              ],
              "description": "\"AwardSeries\"",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-130>"
            },
            "name": {
              "example": "Top 1% Club",
              "description": "name of the series",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-131>"
            },
            "description": {
              "example": "Annual",
              "type": "string",
              "description": "description of the item.",
              "x-parser-schema-id": "<anonymous-schema-132>"
            },
            "duration": {
              "title": "duration",
              "type": "string",
              "description": "The duration of the item in ISO 8601 date format.",
              "example": "R/P1Y",
              "x-parser-schema-id": "<anonymous-schema-133>"
            },
            "startDate": {
              "description": "the start date-time (ISO 8601 formated)",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-134>"
            },
            "endDate": {
              "type": "string",
              "description": "the end date-time (ISO 8601 formated)",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-135>"
            },
            "id": {
              "example": "https://example/com",
              "type": "string",
              "format": "uri",
              "description": "Linked-Data URI (@id)",
              "x-parser-schema-id": "<anonymous-schema-136>"
            },
            "identifier": {
              "example": {
                "hsfAwardSeriesID": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-137>"
            }
          },
          "x-parser-schema-id": "AwardSeries"
        },
        "options": {}
      }
    }
  },
  "name": {
    "_json": {
      "example": "Top 1% Club",
      "description": "name of the series",
      "type": "string",
      "x-parser-schema-id": "<anonymous-schema-131>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "AwardSeries",
          "type": "object",
          "x-range": [
            "AwardSeries"
          ],
          "description": "an award bestowed at regular intervals",
          "properties": {
            "type": {
              "enum": [
                "AwardSeries"
              ],
              "description": "\"AwardSeries\"",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-130>"
            },
            "name": {
              "example": "Top 1% Club",
              "description": "name of the series",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-131>"
            },
            "description": {
              "example": "Annual",
              "type": "string",
              "description": "description of the item.",
              "x-parser-schema-id": "<anonymous-schema-132>"
            },
            "duration": {
              "title": "duration",
              "type": "string",
              "description": "The duration of the item in ISO 8601 date format.",
              "example": "R/P1Y",
              "x-parser-schema-id": "<anonymous-schema-133>"
            },
            "startDate": {
              "description": "the start date-time (ISO 8601 formated)",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-134>"
            },
            "endDate": {
              "type": "string",
              "description": "the end date-time (ISO 8601 formated)",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-135>"
            },
            "id": {
              "example": "https://example/com",
              "type": "string",
              "format": "uri",
              "description": "Linked-Data URI (@id)",
              "x-parser-schema-id": "<anonymous-schema-136>"
            },
            "identifier": {
              "example": {
                "hsfAwardSeriesID": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-137>"
            }
          },
          "x-parser-schema-id": "AwardSeries"
        },
        "options": {}
      }
    }
  },
  "description": {
    "_json": {
      "example": "Annual",
      "type": "string",
      "description": "description of the item.",
      "x-parser-schema-id": "<anonymous-schema-132>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "AwardSeries",
          "type": "object",
          "x-range": [
            "AwardSeries"
          ],
          "description": "an award bestowed at regular intervals",
          "properties": {
            "type": {
              "enum": [
                "AwardSeries"
              ],
              "description": "\"AwardSeries\"",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-130>"
            },
            "name": {
              "example": "Top 1% Club",
              "description": "name of the series",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-131>"
            },
            "description": {
              "example": "Annual",
              "type": "string",
              "description": "description of the item.",
              "x-parser-schema-id": "<anonymous-schema-132>"
            },
            "duration": {
              "title": "duration",
              "type": "string",
              "description": "The duration of the item in ISO 8601 date format.",
              "example": "R/P1Y",
              "x-parser-schema-id": "<anonymous-schema-133>"
            },
            "startDate": {
              "description": "the start date-time (ISO 8601 formated)",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-134>"
            },
            "endDate": {
              "type": "string",
              "description": "the end date-time (ISO 8601 formated)",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-135>"
            },
            "id": {
              "example": "https://example/com",
              "type": "string",
              "format": "uri",
              "description": "Linked-Data URI (@id)",
              "x-parser-schema-id": "<anonymous-schema-136>"
            },
            "identifier": {
              "example": {
                "hsfAwardSeriesID": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-137>"
            }
          },
          "x-parser-schema-id": "AwardSeries"
        },
        "options": {}
      }
    }
  },
  "duration": {
    "_json": {
      "title": "duration",
      "type": "string",
      "description": "The duration of the item in ISO 8601 date format.",
      "example": "R/P1Y",
      "x-parser-schema-id": "<anonymous-schema-133>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "AwardSeries",
          "type": "object",
          "x-range": [
            "AwardSeries"
          ],
          "description": "an award bestowed at regular intervals",
          "properties": {
            "type": {
              "enum": [
                "AwardSeries"
              ],
              "description": "\"AwardSeries\"",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-130>"
            },
            "name": {
              "example": "Top 1% Club",
              "description": "name of the series",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-131>"
            },
            "description": {
              "example": "Annual",
              "type": "string",
              "description": "description of the item.",
              "x-parser-schema-id": "<anonymous-schema-132>"
            },
            "duration": {
              "title": "duration",
              "type": "string",
              "description": "The duration of the item in ISO 8601 date format.",
              "example": "R/P1Y",
              "x-parser-schema-id": "<anonymous-schema-133>"
            },
            "startDate": {
              "description": "the start date-time (ISO 8601 formated)",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-134>"
            },
            "endDate": {
              "type": "string",
              "description": "the end date-time (ISO 8601 formated)",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-135>"
            },
            "id": {
              "example": "https://example/com",
              "type": "string",
              "format": "uri",
              "description": "Linked-Data URI (@id)",
              "x-parser-schema-id": "<anonymous-schema-136>"
            },
            "identifier": {
              "example": {
                "hsfAwardSeriesID": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-137>"
            }
          },
          "x-parser-schema-id": "AwardSeries"
        },
        "options": {}
      }
    }
  },
  "startDate": {
    "_json": {
      "description": "the start date-time (ISO 8601 formated)",
      "type": "string",
      "format": "date-time",
      "x-parser-schema-id": "<anonymous-schema-134>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "AwardSeries",
          "type": "object",
          "x-range": [
            "AwardSeries"
          ],
          "description": "an award bestowed at regular intervals",
          "properties": {
            "type": {
              "enum": [
                "AwardSeries"
              ],
              "description": "\"AwardSeries\"",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-130>"
            },
            "name": {
              "example": "Top 1% Club",
              "description": "name of the series",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-131>"
            },
            "description": {
              "example": "Annual",
              "type": "string",
              "description": "description of the item.",
              "x-parser-schema-id": "<anonymous-schema-132>"
            },
            "duration": {
              "title": "duration",
              "type": "string",
              "description": "The duration of the item in ISO 8601 date format.",
              "example": "R/P1Y",
              "x-parser-schema-id": "<anonymous-schema-133>"
            },
            "startDate": {
              "description": "the start date-time (ISO 8601 formated)",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-134>"
            },
            "endDate": {
              "type": "string",
              "description": "the end date-time (ISO 8601 formated)",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-135>"
            },
            "id": {
              "example": "https://example/com",
              "type": "string",
              "format": "uri",
              "description": "Linked-Data URI (@id)",
              "x-parser-schema-id": "<anonymous-schema-136>"
            },
            "identifier": {
              "example": {
                "hsfAwardSeriesID": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-137>"
            }
          },
          "x-parser-schema-id": "AwardSeries"
        },
        "options": {}
      }
    }
  },
  "endDate": {
    "_json": {
      "type": "string",
      "description": "the end date-time (ISO 8601 formated)",
      "format": "date-time",
      "x-parser-schema-id": "<anonymous-schema-135>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "AwardSeries",
          "type": "object",
          "x-range": [
            "AwardSeries"
          ],
          "description": "an award bestowed at regular intervals",
          "properties": {
            "type": {
              "enum": [
                "AwardSeries"
              ],
              "description": "\"AwardSeries\"",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-130>"
            },
            "name": {
              "example": "Top 1% Club",
              "description": "name of the series",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-131>"
            },
            "description": {
              "example": "Annual",
              "type": "string",
              "description": "description of the item.",
              "x-parser-schema-id": "<anonymous-schema-132>"
            },
            "duration": {
              "title": "duration",
              "type": "string",
              "description": "The duration of the item in ISO 8601 date format.",
              "example": "R/P1Y",
              "x-parser-schema-id": "<anonymous-schema-133>"
            },
            "startDate": {
              "description": "the start date-time (ISO 8601 formated)",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-134>"
            },
            "endDate": {
              "type": "string",
              "description": "the end date-time (ISO 8601 formated)",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-135>"
            },
            "id": {
              "example": "https://example/com",
              "type": "string",
              "format": "uri",
              "description": "Linked-Data URI (@id)",
              "x-parser-schema-id": "<anonymous-schema-136>"
            },
            "identifier": {
              "example": {
                "hsfAwardSeriesID": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-137>"
            }
          },
          "x-parser-schema-id": "AwardSeries"
        },
        "options": {}
      }
    }
  },
  "id": {
    "_json": {
      "example": "https://example/com",
      "type": "string",
      "format": "uri",
      "description": "Linked-Data URI (@id)",
      "x-parser-schema-id": "<anonymous-schema-136>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "AwardSeries",
          "type": "object",
          "x-range": [
            "AwardSeries"
          ],
          "description": "an award bestowed at regular intervals",
          "properties": {
            "type": {
              "enum": [
                "AwardSeries"
              ],
              "description": "\"AwardSeries\"",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-130>"
            },
            "name": {
              "example": "Top 1% Club",
              "description": "name of the series",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-131>"
            },
            "description": {
              "example": "Annual",
              "type": "string",
              "description": "description of the item.",
              "x-parser-schema-id": "<anonymous-schema-132>"
            },
            "duration": {
              "title": "duration",
              "type": "string",
              "description": "The duration of the item in ISO 8601 date format.",
              "example": "R/P1Y",
              "x-parser-schema-id": "<anonymous-schema-133>"
            },
            "startDate": {
              "description": "the start date-time (ISO 8601 formated)",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-134>"
            },
            "endDate": {
              "type": "string",
              "description": "the end date-time (ISO 8601 formated)",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-135>"
            },
            "id": {
              "example": "https://example/com",
              "type": "string",
              "format": "uri",
              "description": "Linked-Data URI (@id)",
              "x-parser-schema-id": "<anonymous-schema-136>"
            },
            "identifier": {
              "example": {
                "hsfAwardSeriesID": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-137>"
            }
          },
          "x-parser-schema-id": "AwardSeries"
        },
        "options": {}
      }
    }
  },
  "identifier": {
    "_json": {
      "example": {
        "hsfAwardSeriesID": "xxxx"
      },
      "type": "object",
      "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
      "x-parser-schema-id": "<anonymous-schema-137>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "AwardSeries",
          "type": "object",
          "x-range": [
            "AwardSeries"
          ],
          "description": "an award bestowed at regular intervals",
          "properties": {
            "type": {
              "enum": [
                "AwardSeries"
              ],
              "description": "\"AwardSeries\"",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-130>"
            },
            "name": {
              "example": "Top 1% Club",
              "description": "name of the series",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-131>"
            },
            "description": {
              "example": "Annual",
              "type": "string",
              "description": "description of the item.",
              "x-parser-schema-id": "<anonymous-schema-132>"
            },
            "duration": {
              "title": "duration",
              "type": "string",
              "description": "The duration of the item in ISO 8601 date format.",
              "example": "R/P1Y",
              "x-parser-schema-id": "<anonymous-schema-133>"
            },
            "startDate": {
              "description": "the start date-time (ISO 8601 formated)",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-134>"
            },
            "endDate": {
              "type": "string",
              "description": "the end date-time (ISO 8601 formated)",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-135>"
            },
            "id": {
              "example": "https://example/com",
              "type": "string",
              "format": "uri",
              "description": "Linked-Data URI (@id)",
              "x-parser-schema-id": "<anonymous-schema-136>"
            },
            "identifier": {
              "example": {
                "hsfAwardSeriesID": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-137>"
            }
          },
          "x-parser-schema-id": "AwardSeries"
        },
        "options": {}
      }
    }
  }
}


# AwardSeries

an award bestowed at regular intervals



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "enum": [
      "AwardSeries"
    ],
    "description": "\"AwardSeries\"",
    "type": "string",
    "x-parser-schema-id": "<anonymous-schema-130>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "AwardSeries",
        "type": "object",
        "x-range": [
          "AwardSeries"
        ],
        "description": "an award bestowed at regular intervals",
        "properties": {
          "type": {
            "enum": [
              "AwardSeries"
            ],
            "description": "\"AwardSeries\"",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-130>"
          },
          "name": {
            "example": "Top 1% Club",
            "description": "name of the series",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-131>"
          },
          "description": {
            "example": "Annual",
            "type": "string",
            "description": "description of the item.",
            "x-parser-schema-id": "<anonymous-schema-132>"
          },
          "duration": {
            "title": "duration",
            "type": "string",
            "description": "The duration of the item in ISO 8601 date format.",
            "example": "R/P1Y",
            "x-parser-schema-id": "<anonymous-schema-133>"
          },
          "startDate": {
            "description": "the start date-time (ISO 8601 formated)",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-134>"
          },
          "endDate": {
            "type": "string",
            "description": "the end date-time (ISO 8601 formated)",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-135>"
          },
          "id": {
            "example": "https://example/com",
            "type": "string",
            "format": "uri",
            "description": "Linked-Data URI (@id)",
            "x-parser-schema-id": "<anonymous-schema-136>"
          },
          "identifier": {
            "example": {
              "hsfAwardSeriesID": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-137>"
          }
        },
        "x-parser-schema-id": "AwardSeries"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "example": "Top 1% Club",
    "description": "name of the series",
    "type": "string",
    "x-parser-schema-id": "<anonymous-schema-131>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "AwardSeries",
        "type": "object",
        "x-range": [
          "AwardSeries"
        ],
        "description": "an award bestowed at regular intervals",
        "properties": {
          "type": {
            "enum": [
              "AwardSeries"
            ],
            "description": "\"AwardSeries\"",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-130>"
          },
          "name": {
            "example": "Top 1% Club",
            "description": "name of the series",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-131>"
          },
          "description": {
            "example": "Annual",
            "type": "string",
            "description": "description of the item.",
            "x-parser-schema-id": "<anonymous-schema-132>"
          },
          "duration": {
            "title": "duration",
            "type": "string",
            "description": "The duration of the item in ISO 8601 date format.",
            "example": "R/P1Y",
            "x-parser-schema-id": "<anonymous-schema-133>"
          },
          "startDate": {
            "description": "the start date-time (ISO 8601 formated)",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-134>"
          },
          "endDate": {
            "type": "string",
            "description": "the end date-time (ISO 8601 formated)",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-135>"
          },
          "id": {
            "example": "https://example/com",
            "type": "string",
            "format": "uri",
            "description": "Linked-Data URI (@id)",
            "x-parser-schema-id": "<anonymous-schema-136>"
          },
          "identifier": {
            "example": {
              "hsfAwardSeriesID": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-137>"
          }
        },
        "x-parser-schema-id": "AwardSeries"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "example": "Annual",
    "type": "string",
    "description": "description of the item.",
    "x-parser-schema-id": "<anonymous-schema-132>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "AwardSeries",
        "type": "object",
        "x-range": [
          "AwardSeries"
        ],
        "description": "an award bestowed at regular intervals",
        "properties": {
          "type": {
            "enum": [
              "AwardSeries"
            ],
            "description": "\"AwardSeries\"",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-130>"
          },
          "name": {
            "example": "Top 1% Club",
            "description": "name of the series",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-131>"
          },
          "description": {
            "example": "Annual",
            "type": "string",
            "description": "description of the item.",
            "x-parser-schema-id": "<anonymous-schema-132>"
          },
          "duration": {
            "title": "duration",
            "type": "string",
            "description": "The duration of the item in ISO 8601 date format.",
            "example": "R/P1Y",
            "x-parser-schema-id": "<anonymous-schema-133>"
          },
          "startDate": {
            "description": "the start date-time (ISO 8601 formated)",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-134>"
          },
          "endDate": {
            "type": "string",
            "description": "the end date-time (ISO 8601 formated)",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-135>"
          },
          "id": {
            "example": "https://example/com",
            "type": "string",
            "format": "uri",
            "description": "Linked-Data URI (@id)",
            "x-parser-schema-id": "<anonymous-schema-136>"
          },
          "identifier": {
            "example": {
              "hsfAwardSeriesID": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-137>"
          }
        },
        "x-parser-schema-id": "AwardSeries"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "title": "duration",
    "type": "string",
    "description": "The duration of the item in ISO 8601 date format.",
    "example": "R/P1Y",
    "x-parser-schema-id": "<anonymous-schema-133>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "AwardSeries",
        "type": "object",
        "x-range": [
          "AwardSeries"
        ],
        "description": "an award bestowed at regular intervals",
        "properties": {
          "type": {
            "enum": [
              "AwardSeries"
            ],
            "description": "\"AwardSeries\"",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-130>"
          },
          "name": {
            "example": "Top 1% Club",
            "description": "name of the series",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-131>"
          },
          "description": {
            "example": "Annual",
            "type": "string",
            "description": "description of the item.",
            "x-parser-schema-id": "<anonymous-schema-132>"
          },
          "duration": {
            "title": "duration",
            "type": "string",
            "description": "The duration of the item in ISO 8601 date format.",
            "example": "R/P1Y",
            "x-parser-schema-id": "<anonymous-schema-133>"
          },
          "startDate": {
            "description": "the start date-time (ISO 8601 formated)",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-134>"
          },
          "endDate": {
            "type": "string",
            "description": "the end date-time (ISO 8601 formated)",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-135>"
          },
          "id": {
            "example": "https://example/com",
            "type": "string",
            "format": "uri",
            "description": "Linked-Data URI (@id)",
            "x-parser-schema-id": "<anonymous-schema-136>"
          },
          "identifier": {
            "example": {
              "hsfAwardSeriesID": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-137>"
          }
        },
        "x-parser-schema-id": "AwardSeries"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "the start date-time (ISO 8601 formated)",
    "type": "string",
    "format": "date-time",
    "x-parser-schema-id": "<anonymous-schema-134>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "AwardSeries",
        "type": "object",
        "x-range": [
          "AwardSeries"
        ],
        "description": "an award bestowed at regular intervals",
        "properties": {
          "type": {
            "enum": [
              "AwardSeries"
            ],
            "description": "\"AwardSeries\"",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-130>"
          },
          "name": {
            "example": "Top 1% Club",
            "description": "name of the series",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-131>"
          },
          "description": {
            "example": "Annual",
            "type": "string",
            "description": "description of the item.",
            "x-parser-schema-id": "<anonymous-schema-132>"
          },
          "duration": {
            "title": "duration",
            "type": "string",
            "description": "The duration of the item in ISO 8601 date format.",
            "example": "R/P1Y",
            "x-parser-schema-id": "<anonymous-schema-133>"
          },
          "startDate": {
            "description": "the start date-time (ISO 8601 formated)",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-134>"
          },
          "endDate": {
            "type": "string",
            "description": "the end date-time (ISO 8601 formated)",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-135>"
          },
          "id": {
            "example": "https://example/com",
            "type": "string",
            "format": "uri",
            "description": "Linked-Data URI (@id)",
            "x-parser-schema-id": "<anonymous-schema-136>"
          },
          "identifier": {
            "example": {
              "hsfAwardSeriesID": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-137>"
          }
        },
        "x-parser-schema-id": "AwardSeries"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "the end date-time (ISO 8601 formated)",
    "format": "date-time",
    "x-parser-schema-id": "<anonymous-schema-135>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "AwardSeries",
        "type": "object",
        "x-range": [
          "AwardSeries"
        ],
        "description": "an award bestowed at regular intervals",
        "properties": {
          "type": {
            "enum": [
              "AwardSeries"
            ],
            "description": "\"AwardSeries\"",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-130>"
          },
          "name": {
            "example": "Top 1% Club",
            "description": "name of the series",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-131>"
          },
          "description": {
            "example": "Annual",
            "type": "string",
            "description": "description of the item.",
            "x-parser-schema-id": "<anonymous-schema-132>"
          },
          "duration": {
            "title": "duration",
            "type": "string",
            "description": "The duration of the item in ISO 8601 date format.",
            "example": "R/P1Y",
            "x-parser-schema-id": "<anonymous-schema-133>"
          },
          "startDate": {
            "description": "the start date-time (ISO 8601 formated)",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-134>"
          },
          "endDate": {
            "type": "string",
            "description": "the end date-time (ISO 8601 formated)",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-135>"
          },
          "id": {
            "example": "https://example/com",
            "type": "string",
            "format": "uri",
            "description": "Linked-Data URI (@id)",
            "x-parser-schema-id": "<anonymous-schema-136>"
          },
          "identifier": {
            "example": {
              "hsfAwardSeriesID": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-137>"
          }
        },
        "x-parser-schema-id": "AwardSeries"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "example": "https://example/com",
    "type": "string",
    "format": "uri",
    "description": "Linked-Data URI (@id)",
    "x-parser-schema-id": "<anonymous-schema-136>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "AwardSeries",
        "type": "object",
        "x-range": [
          "AwardSeries"
        ],
        "description": "an award bestowed at regular intervals",
        "properties": {
          "type": {
            "enum": [
              "AwardSeries"
            ],
            "description": "\"AwardSeries\"",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-130>"
          },
          "name": {
            "example": "Top 1% Club",
            "description": "name of the series",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-131>"
          },
          "description": {
            "example": "Annual",
            "type": "string",
            "description": "description of the item.",
            "x-parser-schema-id": "<anonymous-schema-132>"
          },
          "duration": {
            "title": "duration",
            "type": "string",
            "description": "The duration of the item in ISO 8601 date format.",
            "example": "R/P1Y",
            "x-parser-schema-id": "<anonymous-schema-133>"
          },
          "startDate": {
            "description": "the start date-time (ISO 8601 formated)",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-134>"
          },
          "endDate": {
            "type": "string",
            "description": "the end date-time (ISO 8601 formated)",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-135>"
          },
          "id": {
            "example": "https://example/com",
            "type": "string",
            "format": "uri",
            "description": "Linked-Data URI (@id)",
            "x-parser-schema-id": "<anonymous-schema-136>"
          },
          "identifier": {
            "example": {
              "hsfAwardSeriesID": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-137>"
          }
        },
        "x-parser-schema-id": "AwardSeries"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "example": {
      "hsfAwardSeriesID": "xxxx"
    },
    "type": "object",
    "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
    "x-parser-schema-id": "<anonymous-schema-137>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "AwardSeries",
        "type": "object",
        "x-range": [
          "AwardSeries"
        ],
        "description": "an award bestowed at regular intervals",
        "properties": {
          "type": {
            "enum": [
              "AwardSeries"
            ],
            "description": "\"AwardSeries\"",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-130>"
          },
          "name": {
            "example": "Top 1% Club",
            "description": "name of the series",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-131>"
          },
          "description": {
            "example": "Annual",
            "type": "string",
            "description": "description of the item.",
            "x-parser-schema-id": "<anonymous-schema-132>"
          },
          "duration": {
            "title": "duration",
            "type": "string",
            "description": "The duration of the item in ISO 8601 date format.",
            "example": "R/P1Y",
            "x-parser-schema-id": "<anonymous-schema-133>"
          },
          "startDate": {
            "description": "the start date-time (ISO 8601 formated)",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-134>"
          },
          "endDate": {
            "type": "string",
            "description": "the end date-time (ISO 8601 formated)",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-135>"
          },
          "id": {
            "example": "https://example/com",
            "type": "string",
            "format": "uri",
            "description": "Linked-Data URI (@id)",
            "x-parser-schema-id": "<anonymous-schema-136>"
          },
          "identifier": {
            "example": {
              "hsfAwardSeriesID": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-137>"
          }
        },
        "x-parser-schema-id": "AwardSeries"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "AwardSeries",
  "name": "Top 1% Club",
  "description": "Annual",
  "duration": "R/P1Y",
  "startDate": "2019-08-24T14:15:22Z",
  "endDate": "2019-08-24T14:15:22Z",
  "id": "https://example/com",
  "identifier": {
    "hsfAwardSeriesID": "xxxx"
  }
}
```

