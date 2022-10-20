

---
title: Collection
---

{
  "type": {
    "_json": {
      "description": "Collection",
      "type": "string",
      "enum": [
        "Collection"
      ],
      "x-parser-schema-id": "<anonymous-schema-207>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Collection",
          "type": "object",
          "x-range": "Collection",
          "description": "a set of items.",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "description": "Collection",
              "type": "string",
              "enum": [
                "Collection"
              ],
              "x-parser-schema-id": "<anonymous-schema-207>"
            },
            "name": {
              "type": "string",
              "description": "name of the collection",
              "example": "Clients",
              "x-parser-schema-id": "<anonymous-schema-208>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "creator": {
              "description": "creator of the collection",
              "type": "string",
              "example": "https://{agentid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-210>"
            },
            "dateCreated": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-211>"
            },
            "dateModified": {
              "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-212>"
            },
            "member": {
              "description": "members of the collection",
              "type": "array",
              "items": {
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-214>"
              },
              "x-parser-schema-id": "<anonymous-schema-213>"
            }
          },
          "x-parser-schema-id": "Collection"
        },
        "options": {}
      }
    }
  },
  "name": {
    "_json": {
      "type": "string",
      "description": "name of the collection",
      "example": "Clients",
      "x-parser-schema-id": "<anonymous-schema-208>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Collection",
          "type": "object",
          "x-range": "Collection",
          "description": "a set of items.",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "description": "Collection",
              "type": "string",
              "enum": [
                "Collection"
              ],
              "x-parser-schema-id": "<anonymous-schema-207>"
            },
            "name": {
              "type": "string",
              "description": "name of the collection",
              "example": "Clients",
              "x-parser-schema-id": "<anonymous-schema-208>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "creator": {
              "description": "creator of the collection",
              "type": "string",
              "example": "https://{agentid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-210>"
            },
            "dateCreated": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-211>"
            },
            "dateModified": {
              "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-212>"
            },
            "member": {
              "description": "members of the collection",
              "type": "array",
              "items": {
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-214>"
              },
              "x-parser-schema-id": "<anonymous-schema-213>"
            }
          },
          "x-parser-schema-id": "Collection"
        },
        "options": {}
      }
    }
  },
  "identifier": {
    "_json": {
      "type": "object",
      "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
      "example": {
        "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
      },
      "x-parser-schema-id": "<anonymous-schema-209>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Collection",
          "type": "object",
          "x-range": "Collection",
          "description": "a set of items.",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "description": "Collection",
              "type": "string",
              "enum": [
                "Collection"
              ],
              "x-parser-schema-id": "<anonymous-schema-207>"
            },
            "name": {
              "type": "string",
              "description": "name of the collection",
              "example": "Clients",
              "x-parser-schema-id": "<anonymous-schema-208>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "creator": {
              "description": "creator of the collection",
              "type": "string",
              "example": "https://{agentid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-210>"
            },
            "dateCreated": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-211>"
            },
            "dateModified": {
              "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-212>"
            },
            "member": {
              "description": "members of the collection",
              "type": "array",
              "items": {
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-214>"
              },
              "x-parser-schema-id": "<anonymous-schema-213>"
            }
          },
          "x-parser-schema-id": "Collection"
        },
        "options": {}
      }
    }
  },
  "creator": {
    "_json": {
      "description": "creator of the collection",
      "type": "string",
      "example": "https://{agentid}.example.com/profile/card#me",
      "x-parser-schema-id": "<anonymous-schema-210>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Collection",
          "type": "object",
          "x-range": "Collection",
          "description": "a set of items.",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "description": "Collection",
              "type": "string",
              "enum": [
                "Collection"
              ],
              "x-parser-schema-id": "<anonymous-schema-207>"
            },
            "name": {
              "type": "string",
              "description": "name of the collection",
              "example": "Clients",
              "x-parser-schema-id": "<anonymous-schema-208>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "creator": {
              "description": "creator of the collection",
              "type": "string",
              "example": "https://{agentid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-210>"
            },
            "dateCreated": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-211>"
            },
            "dateModified": {
              "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-212>"
            },
            "member": {
              "description": "members of the collection",
              "type": "array",
              "items": {
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-214>"
              },
              "x-parser-schema-id": "<anonymous-schema-213>"
            }
          },
          "x-parser-schema-id": "Collection"
        },
        "options": {}
      }
    }
  },
  "dateCreated": {
    "_json": {
      "description": "The date on which the item was created.",
      "type": "string",
      "format": "date-time",
      "x-parser-schema-id": "<anonymous-schema-211>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Collection",
          "type": "object",
          "x-range": "Collection",
          "description": "a set of items.",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "description": "Collection",
              "type": "string",
              "enum": [
                "Collection"
              ],
              "x-parser-schema-id": "<anonymous-schema-207>"
            },
            "name": {
              "type": "string",
              "description": "name of the collection",
              "example": "Clients",
              "x-parser-schema-id": "<anonymous-schema-208>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "creator": {
              "description": "creator of the collection",
              "type": "string",
              "example": "https://{agentid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-210>"
            },
            "dateCreated": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-211>"
            },
            "dateModified": {
              "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-212>"
            },
            "member": {
              "description": "members of the collection",
              "type": "array",
              "items": {
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-214>"
              },
              "x-parser-schema-id": "<anonymous-schema-213>"
            }
          },
          "x-parser-schema-id": "Collection"
        },
        "options": {}
      }
    }
  },
  "dateModified": {
    "_json": {
      "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
      "type": "string",
      "format": "date-time",
      "x-parser-schema-id": "<anonymous-schema-212>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Collection",
          "type": "object",
          "x-range": "Collection",
          "description": "a set of items.",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "description": "Collection",
              "type": "string",
              "enum": [
                "Collection"
              ],
              "x-parser-schema-id": "<anonymous-schema-207>"
            },
            "name": {
              "type": "string",
              "description": "name of the collection",
              "example": "Clients",
              "x-parser-schema-id": "<anonymous-schema-208>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "creator": {
              "description": "creator of the collection",
              "type": "string",
              "example": "https://{agentid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-210>"
            },
            "dateCreated": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-211>"
            },
            "dateModified": {
              "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-212>"
            },
            "member": {
              "description": "members of the collection",
              "type": "array",
              "items": {
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-214>"
              },
              "x-parser-schema-id": "<anonymous-schema-213>"
            }
          },
          "x-parser-schema-id": "Collection"
        },
        "options": {}
      }
    }
  },
  "member": {
    "_json": {
      "description": "members of the collection",
      "type": "array",
      "items": {
        "type": "object",
        "x-parser-schema-id": "<anonymous-schema-214>"
      },
      "x-parser-schema-id": "<anonymous-schema-213>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Collection",
          "type": "object",
          "x-range": "Collection",
          "description": "a set of items.",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "description": "Collection",
              "type": "string",
              "enum": [
                "Collection"
              ],
              "x-parser-schema-id": "<anonymous-schema-207>"
            },
            "name": {
              "type": "string",
              "description": "name of the collection",
              "example": "Clients",
              "x-parser-schema-id": "<anonymous-schema-208>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "creator": {
              "description": "creator of the collection",
              "type": "string",
              "example": "https://{agentid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-210>"
            },
            "dateCreated": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-211>"
            },
            "dateModified": {
              "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-212>"
            },
            "member": {
              "description": "members of the collection",
              "type": "array",
              "items": {
                "type": "object",
                "x-parser-schema-id": "<anonymous-schema-214>"
              },
              "x-parser-schema-id": "<anonymous-schema-213>"
            }
          },
          "x-parser-schema-id": "Collection"
        },
        "options": {}
      }
    }
  }
}


# Collection

a set of items.



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "description": "Collection",
    "type": "string",
    "enum": [
      "Collection"
    ],
    "x-parser-schema-id": "<anonymous-schema-207>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Collection",
        "type": "object",
        "x-range": "Collection",
        "description": "a set of items.",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "description": "Collection",
            "type": "string",
            "enum": [
              "Collection"
            ],
            "x-parser-schema-id": "<anonymous-schema-207>"
          },
          "name": {
            "type": "string",
            "description": "name of the collection",
            "example": "Clients",
            "x-parser-schema-id": "<anonymous-schema-208>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "creator": {
            "description": "creator of the collection",
            "type": "string",
            "example": "https://{agentid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-210>"
          },
          "dateCreated": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-211>"
          },
          "dateModified": {
            "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-212>"
          },
          "member": {
            "description": "members of the collection",
            "type": "array",
            "items": {
              "type": "object",
              "x-parser-schema-id": "<anonymous-schema-214>"
            },
            "x-parser-schema-id": "<anonymous-schema-213>"
          }
        },
        "x-parser-schema-id": "Collection"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "name of the collection",
    "example": "Clients",
    "x-parser-schema-id": "<anonymous-schema-208>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Collection",
        "type": "object",
        "x-range": "Collection",
        "description": "a set of items.",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "description": "Collection",
            "type": "string",
            "enum": [
              "Collection"
            ],
            "x-parser-schema-id": "<anonymous-schema-207>"
          },
          "name": {
            "type": "string",
            "description": "name of the collection",
            "example": "Clients",
            "x-parser-schema-id": "<anonymous-schema-208>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "creator": {
            "description": "creator of the collection",
            "type": "string",
            "example": "https://{agentid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-210>"
          },
          "dateCreated": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-211>"
          },
          "dateModified": {
            "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-212>"
          },
          "member": {
            "description": "members of the collection",
            "type": "array",
            "items": {
              "type": "object",
              "x-parser-schema-id": "<anonymous-schema-214>"
            },
            "x-parser-schema-id": "<anonymous-schema-213>"
          }
        },
        "x-parser-schema-id": "Collection"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
    "example": {
      "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
    },
    "x-parser-schema-id": "<anonymous-schema-209>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Collection",
        "type": "object",
        "x-range": "Collection",
        "description": "a set of items.",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "description": "Collection",
            "type": "string",
            "enum": [
              "Collection"
            ],
            "x-parser-schema-id": "<anonymous-schema-207>"
          },
          "name": {
            "type": "string",
            "description": "name of the collection",
            "example": "Clients",
            "x-parser-schema-id": "<anonymous-schema-208>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "creator": {
            "description": "creator of the collection",
            "type": "string",
            "example": "https://{agentid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-210>"
          },
          "dateCreated": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-211>"
          },
          "dateModified": {
            "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-212>"
          },
          "member": {
            "description": "members of the collection",
            "type": "array",
            "items": {
              "type": "object",
              "x-parser-schema-id": "<anonymous-schema-214>"
            },
            "x-parser-schema-id": "<anonymous-schema-213>"
          }
        },
        "x-parser-schema-id": "Collection"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "creator of the collection",
    "type": "string",
    "example": "https://{agentid}.example.com/profile/card#me",
    "x-parser-schema-id": "<anonymous-schema-210>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Collection",
        "type": "object",
        "x-range": "Collection",
        "description": "a set of items.",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "description": "Collection",
            "type": "string",
            "enum": [
              "Collection"
            ],
            "x-parser-schema-id": "<anonymous-schema-207>"
          },
          "name": {
            "type": "string",
            "description": "name of the collection",
            "example": "Clients",
            "x-parser-schema-id": "<anonymous-schema-208>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "creator": {
            "description": "creator of the collection",
            "type": "string",
            "example": "https://{agentid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-210>"
          },
          "dateCreated": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-211>"
          },
          "dateModified": {
            "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-212>"
          },
          "member": {
            "description": "members of the collection",
            "type": "array",
            "items": {
              "type": "object",
              "x-parser-schema-id": "<anonymous-schema-214>"
            },
            "x-parser-schema-id": "<anonymous-schema-213>"
          }
        },
        "x-parser-schema-id": "Collection"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "The date on which the item was created.",
    "type": "string",
    "format": "date-time",
    "x-parser-schema-id": "<anonymous-schema-211>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Collection",
        "type": "object",
        "x-range": "Collection",
        "description": "a set of items.",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "description": "Collection",
            "type": "string",
            "enum": [
              "Collection"
            ],
            "x-parser-schema-id": "<anonymous-schema-207>"
          },
          "name": {
            "type": "string",
            "description": "name of the collection",
            "example": "Clients",
            "x-parser-schema-id": "<anonymous-schema-208>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "creator": {
            "description": "creator of the collection",
            "type": "string",
            "example": "https://{agentid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-210>"
          },
          "dateCreated": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-211>"
          },
          "dateModified": {
            "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-212>"
          },
          "member": {
            "description": "members of the collection",
            "type": "array",
            "items": {
              "type": "object",
              "x-parser-schema-id": "<anonymous-schema-214>"
            },
            "x-parser-schema-id": "<anonymous-schema-213>"
          }
        },
        "x-parser-schema-id": "Collection"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
    "type": "string",
    "format": "date-time",
    "x-parser-schema-id": "<anonymous-schema-212>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Collection",
        "type": "object",
        "x-range": "Collection",
        "description": "a set of items.",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "description": "Collection",
            "type": "string",
            "enum": [
              "Collection"
            ],
            "x-parser-schema-id": "<anonymous-schema-207>"
          },
          "name": {
            "type": "string",
            "description": "name of the collection",
            "example": "Clients",
            "x-parser-schema-id": "<anonymous-schema-208>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "creator": {
            "description": "creator of the collection",
            "type": "string",
            "example": "https://{agentid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-210>"
          },
          "dateCreated": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-211>"
          },
          "dateModified": {
            "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-212>"
          },
          "member": {
            "description": "members of the collection",
            "type": "array",
            "items": {
              "type": "object",
              "x-parser-schema-id": "<anonymous-schema-214>"
            },
            "x-parser-schema-id": "<anonymous-schema-213>"
          }
        },
        "x-parser-schema-id": "Collection"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "members of the collection",
    "type": "array",
    "items": {
      "type": "object",
      "x-parser-schema-id": "<anonymous-schema-214>"
    },
    "x-parser-schema-id": "<anonymous-schema-213>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Collection",
        "type": "object",
        "x-range": "Collection",
        "description": "a set of items.",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "description": "Collection",
            "type": "string",
            "enum": [
              "Collection"
            ],
            "x-parser-schema-id": "<anonymous-schema-207>"
          },
          "name": {
            "type": "string",
            "description": "name of the collection",
            "example": "Clients",
            "x-parser-schema-id": "<anonymous-schema-208>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "creator": {
            "description": "creator of the collection",
            "type": "string",
            "example": "https://{agentid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-210>"
          },
          "dateCreated": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-211>"
          },
          "dateModified": {
            "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-212>"
          },
          "member": {
            "description": "members of the collection",
            "type": "array",
            "items": {
              "type": "object",
              "x-parser-schema-id": "<anonymous-schema-214>"
            },
            "x-parser-schema-id": "<anonymous-schema-213>"
          }
        },
        "x-parser-schema-id": "Collection"
      },
      "options": {}
    }
  }
}












### Example

```json
{
  "type": "Collection",
  "name": "Clients",
  "identifier": {
    "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
  },
  "creator": "https://{agentid}.example.com/profile/card#me",
  "dateCreated": "2019-08-24T14:15:22Z",
  "dateModified": "2019-08-24T14:15:22Z",
  "member": [
    {}
  ]
}
```

