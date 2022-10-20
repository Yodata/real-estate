

---
title: Comment
---

{
  "type": {
    "_json": {
      "description": "Comment",
      "type": "string",
      "enum": [
        "Comment"
      ],
      "x-parser-schema-id": "<anonymous-schema-215>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Comment",
          "type": "object",
          "x-range": "Comment",
          "description": "A comment on an item.",
          "required": [
            "type",
            "text"
          ],
          "properties": {
            "type": {
              "description": "Comment",
              "type": "string",
              "enum": [
                "Comment"
              ],
              "x-parser-schema-id": "<anonymous-schema-215>"
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
            "text": {
              "description": "the comment body",
              "type": "string",
              "example": "That's a negative attitude, Robin.",
              "x-parser-schema-id": "<anonymous-schema-216>"
            },
            "author": {
              "type": "object",
              "description": "the content author",
              "example": {
                "type": "RealEstateAgent",
                "name": "Batman"
              },
              "x-parser-schema-id": "<anonymous-schema-217>"
            },
            "about": {
              "example": {
                "type": "Contact",
                "name": "Robin",
                "identifier": {
                  "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
                }
              },
              "title": "about",
              "type": "object",
              "description": "the action subject",
              "x-parser-schema-id": "<anonymous-schema-218>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-219>"
            }
          },
          "x-parser-schema-id": "Comment"
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
          "title": "Comment",
          "type": "object",
          "x-range": "Comment",
          "description": "A comment on an item.",
          "required": [
            "type",
            "text"
          ],
          "properties": {
            "type": {
              "description": "Comment",
              "type": "string",
              "enum": [
                "Comment"
              ],
              "x-parser-schema-id": "<anonymous-schema-215>"
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
            "text": {
              "description": "the comment body",
              "type": "string",
              "example": "That's a negative attitude, Robin.",
              "x-parser-schema-id": "<anonymous-schema-216>"
            },
            "author": {
              "type": "object",
              "description": "the content author",
              "example": {
                "type": "RealEstateAgent",
                "name": "Batman"
              },
              "x-parser-schema-id": "<anonymous-schema-217>"
            },
            "about": {
              "example": {
                "type": "Contact",
                "name": "Robin",
                "identifier": {
                  "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
                }
              },
              "title": "about",
              "type": "object",
              "description": "the action subject",
              "x-parser-schema-id": "<anonymous-schema-218>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-219>"
            }
          },
          "x-parser-schema-id": "Comment"
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
          "title": "Comment",
          "type": "object",
          "x-range": "Comment",
          "description": "A comment on an item.",
          "required": [
            "type",
            "text"
          ],
          "properties": {
            "type": {
              "description": "Comment",
              "type": "string",
              "enum": [
                "Comment"
              ],
              "x-parser-schema-id": "<anonymous-schema-215>"
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
            "text": {
              "description": "the comment body",
              "type": "string",
              "example": "That's a negative attitude, Robin.",
              "x-parser-schema-id": "<anonymous-schema-216>"
            },
            "author": {
              "type": "object",
              "description": "the content author",
              "example": {
                "type": "RealEstateAgent",
                "name": "Batman"
              },
              "x-parser-schema-id": "<anonymous-schema-217>"
            },
            "about": {
              "example": {
                "type": "Contact",
                "name": "Robin",
                "identifier": {
                  "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
                }
              },
              "title": "about",
              "type": "object",
              "description": "the action subject",
              "x-parser-schema-id": "<anonymous-schema-218>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-219>"
            }
          },
          "x-parser-schema-id": "Comment"
        },
        "options": {}
      }
    }
  },
  "text": {
    "_json": {
      "description": "the comment body",
      "type": "string",
      "example": "That's a negative attitude, Robin.",
      "x-parser-schema-id": "<anonymous-schema-216>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Comment",
          "type": "object",
          "x-range": "Comment",
          "description": "A comment on an item.",
          "required": [
            "type",
            "text"
          ],
          "properties": {
            "type": {
              "description": "Comment",
              "type": "string",
              "enum": [
                "Comment"
              ],
              "x-parser-schema-id": "<anonymous-schema-215>"
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
            "text": {
              "description": "the comment body",
              "type": "string",
              "example": "That's a negative attitude, Robin.",
              "x-parser-schema-id": "<anonymous-schema-216>"
            },
            "author": {
              "type": "object",
              "description": "the content author",
              "example": {
                "type": "RealEstateAgent",
                "name": "Batman"
              },
              "x-parser-schema-id": "<anonymous-schema-217>"
            },
            "about": {
              "example": {
                "type": "Contact",
                "name": "Robin",
                "identifier": {
                  "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
                }
              },
              "title": "about",
              "type": "object",
              "description": "the action subject",
              "x-parser-schema-id": "<anonymous-schema-218>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-219>"
            }
          },
          "x-parser-schema-id": "Comment"
        },
        "options": {}
      }
    }
  },
  "author": {
    "_json": {
      "type": "object",
      "description": "the content author",
      "example": {
        "type": "RealEstateAgent",
        "name": "Batman"
      },
      "x-parser-schema-id": "<anonymous-schema-217>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Comment",
          "type": "object",
          "x-range": "Comment",
          "description": "A comment on an item.",
          "required": [
            "type",
            "text"
          ],
          "properties": {
            "type": {
              "description": "Comment",
              "type": "string",
              "enum": [
                "Comment"
              ],
              "x-parser-schema-id": "<anonymous-schema-215>"
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
            "text": {
              "description": "the comment body",
              "type": "string",
              "example": "That's a negative attitude, Robin.",
              "x-parser-schema-id": "<anonymous-schema-216>"
            },
            "author": {
              "type": "object",
              "description": "the content author",
              "example": {
                "type": "RealEstateAgent",
                "name": "Batman"
              },
              "x-parser-schema-id": "<anonymous-schema-217>"
            },
            "about": {
              "example": {
                "type": "Contact",
                "name": "Robin",
                "identifier": {
                  "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
                }
              },
              "title": "about",
              "type": "object",
              "description": "the action subject",
              "x-parser-schema-id": "<anonymous-schema-218>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-219>"
            }
          },
          "x-parser-schema-id": "Comment"
        },
        "options": {}
      }
    }
  },
  "about": {
    "_json": {
      "example": {
        "type": "Contact",
        "name": "Robin",
        "identifier": {
          "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
        }
      },
      "title": "about",
      "type": "object",
      "description": "the action subject",
      "x-parser-schema-id": "<anonymous-schema-218>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Comment",
          "type": "object",
          "x-range": "Comment",
          "description": "A comment on an item.",
          "required": [
            "type",
            "text"
          ],
          "properties": {
            "type": {
              "description": "Comment",
              "type": "string",
              "enum": [
                "Comment"
              ],
              "x-parser-schema-id": "<anonymous-schema-215>"
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
            "text": {
              "description": "the comment body",
              "type": "string",
              "example": "That's a negative attitude, Robin.",
              "x-parser-schema-id": "<anonymous-schema-216>"
            },
            "author": {
              "type": "object",
              "description": "the content author",
              "example": {
                "type": "RealEstateAgent",
                "name": "Batman"
              },
              "x-parser-schema-id": "<anonymous-schema-217>"
            },
            "about": {
              "example": {
                "type": "Contact",
                "name": "Robin",
                "identifier": {
                  "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
                }
              },
              "title": "about",
              "type": "object",
              "description": "the action subject",
              "x-parser-schema-id": "<anonymous-schema-218>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-219>"
            }
          },
          "x-parser-schema-id": "Comment"
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
      "x-parser-schema-id": "<anonymous-schema-219>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Comment",
          "type": "object",
          "x-range": "Comment",
          "description": "A comment on an item.",
          "required": [
            "type",
            "text"
          ],
          "properties": {
            "type": {
              "description": "Comment",
              "type": "string",
              "enum": [
                "Comment"
              ],
              "x-parser-schema-id": "<anonymous-schema-215>"
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
            "text": {
              "description": "the comment body",
              "type": "string",
              "example": "That's a negative attitude, Robin.",
              "x-parser-schema-id": "<anonymous-schema-216>"
            },
            "author": {
              "type": "object",
              "description": "the content author",
              "example": {
                "type": "RealEstateAgent",
                "name": "Batman"
              },
              "x-parser-schema-id": "<anonymous-schema-217>"
            },
            "about": {
              "example": {
                "type": "Contact",
                "name": "Robin",
                "identifier": {
                  "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
                }
              },
              "title": "about",
              "type": "object",
              "description": "the action subject",
              "x-parser-schema-id": "<anonymous-schema-218>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-219>"
            }
          },
          "x-parser-schema-id": "Comment"
        },
        "options": {}
      }
    }
  }
}


# Comment

A comment on an item.



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "description": "Comment",
    "type": "string",
    "enum": [
      "Comment"
    ],
    "x-parser-schema-id": "<anonymous-schema-215>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Comment",
        "type": "object",
        "x-range": "Comment",
        "description": "A comment on an item.",
        "required": [
          "type",
          "text"
        ],
        "properties": {
          "type": {
            "description": "Comment",
            "type": "string",
            "enum": [
              "Comment"
            ],
            "x-parser-schema-id": "<anonymous-schema-215>"
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
          "text": {
            "description": "the comment body",
            "type": "string",
            "example": "That's a negative attitude, Robin.",
            "x-parser-schema-id": "<anonymous-schema-216>"
          },
          "author": {
            "type": "object",
            "description": "the content author",
            "example": {
              "type": "RealEstateAgent",
              "name": "Batman"
            },
            "x-parser-schema-id": "<anonymous-schema-217>"
          },
          "about": {
            "example": {
              "type": "Contact",
              "name": "Robin",
              "identifier": {
                "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
              }
            },
            "title": "about",
            "type": "object",
            "description": "the action subject",
            "x-parser-schema-id": "<anonymous-schema-218>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-219>"
          }
        },
        "x-parser-schema-id": "Comment"
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
        "title": "Comment",
        "type": "object",
        "x-range": "Comment",
        "description": "A comment on an item.",
        "required": [
          "type",
          "text"
        ],
        "properties": {
          "type": {
            "description": "Comment",
            "type": "string",
            "enum": [
              "Comment"
            ],
            "x-parser-schema-id": "<anonymous-schema-215>"
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
          "text": {
            "description": "the comment body",
            "type": "string",
            "example": "That's a negative attitude, Robin.",
            "x-parser-schema-id": "<anonymous-schema-216>"
          },
          "author": {
            "type": "object",
            "description": "the content author",
            "example": {
              "type": "RealEstateAgent",
              "name": "Batman"
            },
            "x-parser-schema-id": "<anonymous-schema-217>"
          },
          "about": {
            "example": {
              "type": "Contact",
              "name": "Robin",
              "identifier": {
                "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
              }
            },
            "title": "about",
            "type": "object",
            "description": "the action subject",
            "x-parser-schema-id": "<anonymous-schema-218>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-219>"
          }
        },
        "x-parser-schema-id": "Comment"
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
        "title": "Comment",
        "type": "object",
        "x-range": "Comment",
        "description": "A comment on an item.",
        "required": [
          "type",
          "text"
        ],
        "properties": {
          "type": {
            "description": "Comment",
            "type": "string",
            "enum": [
              "Comment"
            ],
            "x-parser-schema-id": "<anonymous-schema-215>"
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
          "text": {
            "description": "the comment body",
            "type": "string",
            "example": "That's a negative attitude, Robin.",
            "x-parser-schema-id": "<anonymous-schema-216>"
          },
          "author": {
            "type": "object",
            "description": "the content author",
            "example": {
              "type": "RealEstateAgent",
              "name": "Batman"
            },
            "x-parser-schema-id": "<anonymous-schema-217>"
          },
          "about": {
            "example": {
              "type": "Contact",
              "name": "Robin",
              "identifier": {
                "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
              }
            },
            "title": "about",
            "type": "object",
            "description": "the action subject",
            "x-parser-schema-id": "<anonymous-schema-218>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-219>"
          }
        },
        "x-parser-schema-id": "Comment"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "the comment body",
    "type": "string",
    "example": "That's a negative attitude, Robin.",
    "x-parser-schema-id": "<anonymous-schema-216>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Comment",
        "type": "object",
        "x-range": "Comment",
        "description": "A comment on an item.",
        "required": [
          "type",
          "text"
        ],
        "properties": {
          "type": {
            "description": "Comment",
            "type": "string",
            "enum": [
              "Comment"
            ],
            "x-parser-schema-id": "<anonymous-schema-215>"
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
          "text": {
            "description": "the comment body",
            "type": "string",
            "example": "That's a negative attitude, Robin.",
            "x-parser-schema-id": "<anonymous-schema-216>"
          },
          "author": {
            "type": "object",
            "description": "the content author",
            "example": {
              "type": "RealEstateAgent",
              "name": "Batman"
            },
            "x-parser-schema-id": "<anonymous-schema-217>"
          },
          "about": {
            "example": {
              "type": "Contact",
              "name": "Robin",
              "identifier": {
                "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
              }
            },
            "title": "about",
            "type": "object",
            "description": "the action subject",
            "x-parser-schema-id": "<anonymous-schema-218>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-219>"
          }
        },
        "x-parser-schema-id": "Comment"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "the content author",
    "example": {
      "type": "RealEstateAgent",
      "name": "Batman"
    },
    "x-parser-schema-id": "<anonymous-schema-217>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Comment",
        "type": "object",
        "x-range": "Comment",
        "description": "A comment on an item.",
        "required": [
          "type",
          "text"
        ],
        "properties": {
          "type": {
            "description": "Comment",
            "type": "string",
            "enum": [
              "Comment"
            ],
            "x-parser-schema-id": "<anonymous-schema-215>"
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
          "text": {
            "description": "the comment body",
            "type": "string",
            "example": "That's a negative attitude, Robin.",
            "x-parser-schema-id": "<anonymous-schema-216>"
          },
          "author": {
            "type": "object",
            "description": "the content author",
            "example": {
              "type": "RealEstateAgent",
              "name": "Batman"
            },
            "x-parser-schema-id": "<anonymous-schema-217>"
          },
          "about": {
            "example": {
              "type": "Contact",
              "name": "Robin",
              "identifier": {
                "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
              }
            },
            "title": "about",
            "type": "object",
            "description": "the action subject",
            "x-parser-schema-id": "<anonymous-schema-218>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-219>"
          }
        },
        "x-parser-schema-id": "Comment"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "example": {
      "type": "Contact",
      "name": "Robin",
      "identifier": {
        "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
      }
    },
    "title": "about",
    "type": "object",
    "description": "the action subject",
    "x-parser-schema-id": "<anonymous-schema-218>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Comment",
        "type": "object",
        "x-range": "Comment",
        "description": "A comment on an item.",
        "required": [
          "type",
          "text"
        ],
        "properties": {
          "type": {
            "description": "Comment",
            "type": "string",
            "enum": [
              "Comment"
            ],
            "x-parser-schema-id": "<anonymous-schema-215>"
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
          "text": {
            "description": "the comment body",
            "type": "string",
            "example": "That's a negative attitude, Robin.",
            "x-parser-schema-id": "<anonymous-schema-216>"
          },
          "author": {
            "type": "object",
            "description": "the content author",
            "example": {
              "type": "RealEstateAgent",
              "name": "Batman"
            },
            "x-parser-schema-id": "<anonymous-schema-217>"
          },
          "about": {
            "example": {
              "type": "Contact",
              "name": "Robin",
              "identifier": {
                "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
              }
            },
            "title": "about",
            "type": "object",
            "description": "the action subject",
            "x-parser-schema-id": "<anonymous-schema-218>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-219>"
          }
        },
        "x-parser-schema-id": "Comment"
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
    "x-parser-schema-id": "<anonymous-schema-219>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Comment",
        "type": "object",
        "x-range": "Comment",
        "description": "A comment on an item.",
        "required": [
          "type",
          "text"
        ],
        "properties": {
          "type": {
            "description": "Comment",
            "type": "string",
            "enum": [
              "Comment"
            ],
            "x-parser-schema-id": "<anonymous-schema-215>"
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
          "text": {
            "description": "the comment body",
            "type": "string",
            "example": "That's a negative attitude, Robin.",
            "x-parser-schema-id": "<anonymous-schema-216>"
          },
          "author": {
            "type": "object",
            "description": "the content author",
            "example": {
              "type": "RealEstateAgent",
              "name": "Batman"
            },
            "x-parser-schema-id": "<anonymous-schema-217>"
          },
          "about": {
            "example": {
              "type": "Contact",
              "name": "Robin",
              "identifier": {
                "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
              }
            },
            "title": "about",
            "type": "object",
            "description": "the action subject",
            "x-parser-schema-id": "<anonymous-schema-218>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-219>"
          }
        },
        "x-parser-schema-id": "Comment"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "Comment",
  "dateCreated": "2019-08-24T14:15:22Z",
  "dateModified": "2019-08-24T14:15:22Z",
  "text": "That's a negative attitude, Robin.",
  "author": {
    "type": "RealEstateAgent",
    "name": "Batman"
  },
  "about": {
    "type": "Contact",
    "name": "Robin",
    "identifier": {
      "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
    }
  },
  "identifier": {
    "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
  }
}
```

