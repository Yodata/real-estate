

---
title: DigitalDocument
---

{
  "type": {
    "_json": {
      "type": "string",
      "enum": [
        "DigitalDocument"
      ],
      "x-parser-schema-id": "<anonymous-schema-264>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "DigitalDocument",
          "x-range": "DigitalDocument",
          "description": "an electronic file.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "DigitalDocument"
              ],
              "x-parser-schema-id": "<anonymous-schema-264>"
            },
            "id": {
              "type": "string",
              "example": "http://user.example.com/public/logo/archive.zip",
              "x-parser-schema-id": "<anonymous-schema-265>"
            },
            "name": {
              "type": "string",
              "description": "document name or title",
              "example": "archive.zip",
              "x-parser-schema-id": "<anonymous-schema-266>"
            },
            "encodingFormat": {
              "type": "string",
              "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
              "example": "application/zip",
              "x-parser-schema-id": "<anonymous-schema-267>"
            },
            "about": {
              "type": "object",
              "description": "subject of the Document",
              "x-range": "Thing",
              "example": {
                "type": "RealEstateTransaction",
                "identifier": {
                  "bmsTransactionId": "xxxx"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-268>"
            },
            "url": {
              "type": "string",
              "description": "public URL of the object",
              "example": "https://example.com",
              "x-parser-schema-id": "<anonymous-schema-269>"
            }
          },
          "x-parser-schema-id": "DigitalDocument"
        },
        "options": {}
      }
    }
  },
  "id": {
    "_json": {
      "type": "string",
      "example": "http://user.example.com/public/logo/archive.zip",
      "x-parser-schema-id": "<anonymous-schema-265>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "DigitalDocument",
          "x-range": "DigitalDocument",
          "description": "an electronic file.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "DigitalDocument"
              ],
              "x-parser-schema-id": "<anonymous-schema-264>"
            },
            "id": {
              "type": "string",
              "example": "http://user.example.com/public/logo/archive.zip",
              "x-parser-schema-id": "<anonymous-schema-265>"
            },
            "name": {
              "type": "string",
              "description": "document name or title",
              "example": "archive.zip",
              "x-parser-schema-id": "<anonymous-schema-266>"
            },
            "encodingFormat": {
              "type": "string",
              "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
              "example": "application/zip",
              "x-parser-schema-id": "<anonymous-schema-267>"
            },
            "about": {
              "type": "object",
              "description": "subject of the Document",
              "x-range": "Thing",
              "example": {
                "type": "RealEstateTransaction",
                "identifier": {
                  "bmsTransactionId": "xxxx"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-268>"
            },
            "url": {
              "type": "string",
              "description": "public URL of the object",
              "example": "https://example.com",
              "x-parser-schema-id": "<anonymous-schema-269>"
            }
          },
          "x-parser-schema-id": "DigitalDocument"
        },
        "options": {}
      }
    }
  },
  "name": {
    "_json": {
      "type": "string",
      "description": "document name or title",
      "example": "archive.zip",
      "x-parser-schema-id": "<anonymous-schema-266>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "DigitalDocument",
          "x-range": "DigitalDocument",
          "description": "an electronic file.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "DigitalDocument"
              ],
              "x-parser-schema-id": "<anonymous-schema-264>"
            },
            "id": {
              "type": "string",
              "example": "http://user.example.com/public/logo/archive.zip",
              "x-parser-schema-id": "<anonymous-schema-265>"
            },
            "name": {
              "type": "string",
              "description": "document name or title",
              "example": "archive.zip",
              "x-parser-schema-id": "<anonymous-schema-266>"
            },
            "encodingFormat": {
              "type": "string",
              "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
              "example": "application/zip",
              "x-parser-schema-id": "<anonymous-schema-267>"
            },
            "about": {
              "type": "object",
              "description": "subject of the Document",
              "x-range": "Thing",
              "example": {
                "type": "RealEstateTransaction",
                "identifier": {
                  "bmsTransactionId": "xxxx"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-268>"
            },
            "url": {
              "type": "string",
              "description": "public URL of the object",
              "example": "https://example.com",
              "x-parser-schema-id": "<anonymous-schema-269>"
            }
          },
          "x-parser-schema-id": "DigitalDocument"
        },
        "options": {}
      }
    }
  },
  "encodingFormat": {
    "_json": {
      "type": "string",
      "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
      "example": "application/zip",
      "x-parser-schema-id": "<anonymous-schema-267>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "DigitalDocument",
          "x-range": "DigitalDocument",
          "description": "an electronic file.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "DigitalDocument"
              ],
              "x-parser-schema-id": "<anonymous-schema-264>"
            },
            "id": {
              "type": "string",
              "example": "http://user.example.com/public/logo/archive.zip",
              "x-parser-schema-id": "<anonymous-schema-265>"
            },
            "name": {
              "type": "string",
              "description": "document name or title",
              "example": "archive.zip",
              "x-parser-schema-id": "<anonymous-schema-266>"
            },
            "encodingFormat": {
              "type": "string",
              "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
              "example": "application/zip",
              "x-parser-schema-id": "<anonymous-schema-267>"
            },
            "about": {
              "type": "object",
              "description": "subject of the Document",
              "x-range": "Thing",
              "example": {
                "type": "RealEstateTransaction",
                "identifier": {
                  "bmsTransactionId": "xxxx"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-268>"
            },
            "url": {
              "type": "string",
              "description": "public URL of the object",
              "example": "https://example.com",
              "x-parser-schema-id": "<anonymous-schema-269>"
            }
          },
          "x-parser-schema-id": "DigitalDocument"
        },
        "options": {}
      }
    }
  },
  "about": {
    "_json": {
      "type": "object",
      "description": "subject of the Document",
      "x-range": "Thing",
      "example": {
        "type": "RealEstateTransaction",
        "identifier": {
          "bmsTransactionId": "xxxx"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-268>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "DigitalDocument",
          "x-range": "DigitalDocument",
          "description": "an electronic file.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "DigitalDocument"
              ],
              "x-parser-schema-id": "<anonymous-schema-264>"
            },
            "id": {
              "type": "string",
              "example": "http://user.example.com/public/logo/archive.zip",
              "x-parser-schema-id": "<anonymous-schema-265>"
            },
            "name": {
              "type": "string",
              "description": "document name or title",
              "example": "archive.zip",
              "x-parser-schema-id": "<anonymous-schema-266>"
            },
            "encodingFormat": {
              "type": "string",
              "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
              "example": "application/zip",
              "x-parser-schema-id": "<anonymous-schema-267>"
            },
            "about": {
              "type": "object",
              "description": "subject of the Document",
              "x-range": "Thing",
              "example": {
                "type": "RealEstateTransaction",
                "identifier": {
                  "bmsTransactionId": "xxxx"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-268>"
            },
            "url": {
              "type": "string",
              "description": "public URL of the object",
              "example": "https://example.com",
              "x-parser-schema-id": "<anonymous-schema-269>"
            }
          },
          "x-parser-schema-id": "DigitalDocument"
        },
        "options": {}
      }
    }
  },
  "url": {
    "_json": {
      "type": "string",
      "description": "public URL of the object",
      "example": "https://example.com",
      "x-parser-schema-id": "<anonymous-schema-269>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "DigitalDocument",
          "x-range": "DigitalDocument",
          "description": "an electronic file.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "DigitalDocument"
              ],
              "x-parser-schema-id": "<anonymous-schema-264>"
            },
            "id": {
              "type": "string",
              "example": "http://user.example.com/public/logo/archive.zip",
              "x-parser-schema-id": "<anonymous-schema-265>"
            },
            "name": {
              "type": "string",
              "description": "document name or title",
              "example": "archive.zip",
              "x-parser-schema-id": "<anonymous-schema-266>"
            },
            "encodingFormat": {
              "type": "string",
              "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
              "example": "application/zip",
              "x-parser-schema-id": "<anonymous-schema-267>"
            },
            "about": {
              "type": "object",
              "description": "subject of the Document",
              "x-range": "Thing",
              "example": {
                "type": "RealEstateTransaction",
                "identifier": {
                  "bmsTransactionId": "xxxx"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-268>"
            },
            "url": {
              "type": "string",
              "description": "public URL of the object",
              "example": "https://example.com",
              "x-parser-schema-id": "<anonymous-schema-269>"
            }
          },
          "x-parser-schema-id": "DigitalDocument"
        },
        "options": {}
      }
    }
  }
}


# DigitalDocument

an electronic file.



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "enum": [
      "DigitalDocument"
    ],
    "x-parser-schema-id": "<anonymous-schema-264>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "DigitalDocument",
        "x-range": "DigitalDocument",
        "description": "an electronic file.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "DigitalDocument"
            ],
            "x-parser-schema-id": "<anonymous-schema-264>"
          },
          "id": {
            "type": "string",
            "example": "http://user.example.com/public/logo/archive.zip",
            "x-parser-schema-id": "<anonymous-schema-265>"
          },
          "name": {
            "type": "string",
            "description": "document name or title",
            "example": "archive.zip",
            "x-parser-schema-id": "<anonymous-schema-266>"
          },
          "encodingFormat": {
            "type": "string",
            "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
            "example": "application/zip",
            "x-parser-schema-id": "<anonymous-schema-267>"
          },
          "about": {
            "type": "object",
            "description": "subject of the Document",
            "x-range": "Thing",
            "example": {
              "type": "RealEstateTransaction",
              "identifier": {
                "bmsTransactionId": "xxxx"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-268>"
          },
          "url": {
            "type": "string",
            "description": "public URL of the object",
            "example": "https://example.com",
            "x-parser-schema-id": "<anonymous-schema-269>"
          }
        },
        "x-parser-schema-id": "DigitalDocument"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "example": "http://user.example.com/public/logo/archive.zip",
    "x-parser-schema-id": "<anonymous-schema-265>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "DigitalDocument",
        "x-range": "DigitalDocument",
        "description": "an electronic file.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "DigitalDocument"
            ],
            "x-parser-schema-id": "<anonymous-schema-264>"
          },
          "id": {
            "type": "string",
            "example": "http://user.example.com/public/logo/archive.zip",
            "x-parser-schema-id": "<anonymous-schema-265>"
          },
          "name": {
            "type": "string",
            "description": "document name or title",
            "example": "archive.zip",
            "x-parser-schema-id": "<anonymous-schema-266>"
          },
          "encodingFormat": {
            "type": "string",
            "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
            "example": "application/zip",
            "x-parser-schema-id": "<anonymous-schema-267>"
          },
          "about": {
            "type": "object",
            "description": "subject of the Document",
            "x-range": "Thing",
            "example": {
              "type": "RealEstateTransaction",
              "identifier": {
                "bmsTransactionId": "xxxx"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-268>"
          },
          "url": {
            "type": "string",
            "description": "public URL of the object",
            "example": "https://example.com",
            "x-parser-schema-id": "<anonymous-schema-269>"
          }
        },
        "x-parser-schema-id": "DigitalDocument"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "document name or title",
    "example": "archive.zip",
    "x-parser-schema-id": "<anonymous-schema-266>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "DigitalDocument",
        "x-range": "DigitalDocument",
        "description": "an electronic file.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "DigitalDocument"
            ],
            "x-parser-schema-id": "<anonymous-schema-264>"
          },
          "id": {
            "type": "string",
            "example": "http://user.example.com/public/logo/archive.zip",
            "x-parser-schema-id": "<anonymous-schema-265>"
          },
          "name": {
            "type": "string",
            "description": "document name or title",
            "example": "archive.zip",
            "x-parser-schema-id": "<anonymous-schema-266>"
          },
          "encodingFormat": {
            "type": "string",
            "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
            "example": "application/zip",
            "x-parser-schema-id": "<anonymous-schema-267>"
          },
          "about": {
            "type": "object",
            "description": "subject of the Document",
            "x-range": "Thing",
            "example": {
              "type": "RealEstateTransaction",
              "identifier": {
                "bmsTransactionId": "xxxx"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-268>"
          },
          "url": {
            "type": "string",
            "description": "public URL of the object",
            "example": "https://example.com",
            "x-parser-schema-id": "<anonymous-schema-269>"
          }
        },
        "x-parser-schema-id": "DigitalDocument"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
    "example": "application/zip",
    "x-parser-schema-id": "<anonymous-schema-267>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "DigitalDocument",
        "x-range": "DigitalDocument",
        "description": "an electronic file.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "DigitalDocument"
            ],
            "x-parser-schema-id": "<anonymous-schema-264>"
          },
          "id": {
            "type": "string",
            "example": "http://user.example.com/public/logo/archive.zip",
            "x-parser-schema-id": "<anonymous-schema-265>"
          },
          "name": {
            "type": "string",
            "description": "document name or title",
            "example": "archive.zip",
            "x-parser-schema-id": "<anonymous-schema-266>"
          },
          "encodingFormat": {
            "type": "string",
            "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
            "example": "application/zip",
            "x-parser-schema-id": "<anonymous-schema-267>"
          },
          "about": {
            "type": "object",
            "description": "subject of the Document",
            "x-range": "Thing",
            "example": {
              "type": "RealEstateTransaction",
              "identifier": {
                "bmsTransactionId": "xxxx"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-268>"
          },
          "url": {
            "type": "string",
            "description": "public URL of the object",
            "example": "https://example.com",
            "x-parser-schema-id": "<anonymous-schema-269>"
          }
        },
        "x-parser-schema-id": "DigitalDocument"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "subject of the Document",
    "x-range": "Thing",
    "example": {
      "type": "RealEstateTransaction",
      "identifier": {
        "bmsTransactionId": "xxxx"
      }
    },
    "x-parser-schema-id": "<anonymous-schema-268>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "DigitalDocument",
        "x-range": "DigitalDocument",
        "description": "an electronic file.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "DigitalDocument"
            ],
            "x-parser-schema-id": "<anonymous-schema-264>"
          },
          "id": {
            "type": "string",
            "example": "http://user.example.com/public/logo/archive.zip",
            "x-parser-schema-id": "<anonymous-schema-265>"
          },
          "name": {
            "type": "string",
            "description": "document name or title",
            "example": "archive.zip",
            "x-parser-schema-id": "<anonymous-schema-266>"
          },
          "encodingFormat": {
            "type": "string",
            "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
            "example": "application/zip",
            "x-parser-schema-id": "<anonymous-schema-267>"
          },
          "about": {
            "type": "object",
            "description": "subject of the Document",
            "x-range": "Thing",
            "example": {
              "type": "RealEstateTransaction",
              "identifier": {
                "bmsTransactionId": "xxxx"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-268>"
          },
          "url": {
            "type": "string",
            "description": "public URL of the object",
            "example": "https://example.com",
            "x-parser-schema-id": "<anonymous-schema-269>"
          }
        },
        "x-parser-schema-id": "DigitalDocument"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "public URL of the object",
    "example": "https://example.com",
    "x-parser-schema-id": "<anonymous-schema-269>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "DigitalDocument",
        "x-range": "DigitalDocument",
        "description": "an electronic file.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "DigitalDocument"
            ],
            "x-parser-schema-id": "<anonymous-schema-264>"
          },
          "id": {
            "type": "string",
            "example": "http://user.example.com/public/logo/archive.zip",
            "x-parser-schema-id": "<anonymous-schema-265>"
          },
          "name": {
            "type": "string",
            "description": "document name or title",
            "example": "archive.zip",
            "x-parser-schema-id": "<anonymous-schema-266>"
          },
          "encodingFormat": {
            "type": "string",
            "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
            "example": "application/zip",
            "x-parser-schema-id": "<anonymous-schema-267>"
          },
          "about": {
            "type": "object",
            "description": "subject of the Document",
            "x-range": "Thing",
            "example": {
              "type": "RealEstateTransaction",
              "identifier": {
                "bmsTransactionId": "xxxx"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-268>"
          },
          "url": {
            "type": "string",
            "description": "public URL of the object",
            "example": "https://example.com",
            "x-parser-schema-id": "<anonymous-schema-269>"
          }
        },
        "x-parser-schema-id": "DigitalDocument"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "DigitalDocument",
  "id": "http://user.example.com/public/logo/archive.zip",
  "name": "archive.zip",
  "encodingFormat": "application/zip",
  "about": {
    "type": "RealEstateTransaction",
    "identifier": {
      "bmsTransactionId": "xxxx"
    }
  },
  "url": "https://example.com"
}
```

