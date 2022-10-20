

---
title: ContactPoint
---

{
  "type": {
    "_json": {
      "description": "ContactPoint",
      "type": "string",
      "enum": [
        "ContactPoint"
      ],
      "x-parser-schema-id": "<anonymous-schema-245>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ContactPoint",
          "description": "A point of contact for the entity. By convention in the real estate domain, ContactPoints \nare preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values \nfor example, Work Telephone, Home, as named contactPoint values.\n",
          "type": "object",
          "properties": {
            "type": {
              "description": "ContactPoint",
              "type": "string",
              "enum": [
                "ContactPoint"
              ],
              "x-parser-schema-id": "<anonymous-schema-245>"
            },
            "name": {
              "type": "string",
              "description": "a label for the contactPoint, i.e. 'Work', or 'Home'",
              "example": "Work",
              "x-parser-schema-id": "<anonymous-schema-246>"
            },
            "telephone": {
              "description": "a telephone number",
              "type": "string",
              "example": "1-364-127-9618 x20418",
              "x-parser-schema-id": "<anonymous-schema-247>"
            },
            "faxNumber": {
              "description": "a fax number",
              "type": "string",
              "example": "834.320.1602",
              "x-parser-schema-id": "<anonymous-schema-248>"
            },
            "email": {
              "description": "an email address for the item.",
              "type": "string",
              "format": "email",
              "example": "user@example.com",
              "x-parser-schema-id": "<anonymous-schema-249>"
            },
            "url": {
              "description": "primary URL for the item.",
              "type": "string",
              "format": "uri",
              "example": "https://www.facebook.com/hallandoates",
              "x-parser-schema-id": "<anonymous-schema-250>"
            }
          },
          "x-parser-schema-id": "ContactPoint"
        },
        "options": {}
      }
    }
  },
  "name": {
    "_json": {
      "type": "string",
      "description": "a label for the contactPoint, i.e. 'Work', or 'Home'",
      "example": "Work",
      "x-parser-schema-id": "<anonymous-schema-246>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ContactPoint",
          "description": "A point of contact for the entity. By convention in the real estate domain, ContactPoints \nare preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values \nfor example, Work Telephone, Home, as named contactPoint values.\n",
          "type": "object",
          "properties": {
            "type": {
              "description": "ContactPoint",
              "type": "string",
              "enum": [
                "ContactPoint"
              ],
              "x-parser-schema-id": "<anonymous-schema-245>"
            },
            "name": {
              "type": "string",
              "description": "a label for the contactPoint, i.e. 'Work', or 'Home'",
              "example": "Work",
              "x-parser-schema-id": "<anonymous-schema-246>"
            },
            "telephone": {
              "description": "a telephone number",
              "type": "string",
              "example": "1-364-127-9618 x20418",
              "x-parser-schema-id": "<anonymous-schema-247>"
            },
            "faxNumber": {
              "description": "a fax number",
              "type": "string",
              "example": "834.320.1602",
              "x-parser-schema-id": "<anonymous-schema-248>"
            },
            "email": {
              "description": "an email address for the item.",
              "type": "string",
              "format": "email",
              "example": "user@example.com",
              "x-parser-schema-id": "<anonymous-schema-249>"
            },
            "url": {
              "description": "primary URL for the item.",
              "type": "string",
              "format": "uri",
              "example": "https://www.facebook.com/hallandoates",
              "x-parser-schema-id": "<anonymous-schema-250>"
            }
          },
          "x-parser-schema-id": "ContactPoint"
        },
        "options": {}
      }
    }
  },
  "telephone": {
    "_json": {
      "description": "a telephone number",
      "type": "string",
      "example": "1-364-127-9618 x20418",
      "x-parser-schema-id": "<anonymous-schema-247>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ContactPoint",
          "description": "A point of contact for the entity. By convention in the real estate domain, ContactPoints \nare preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values \nfor example, Work Telephone, Home, as named contactPoint values.\n",
          "type": "object",
          "properties": {
            "type": {
              "description": "ContactPoint",
              "type": "string",
              "enum": [
                "ContactPoint"
              ],
              "x-parser-schema-id": "<anonymous-schema-245>"
            },
            "name": {
              "type": "string",
              "description": "a label for the contactPoint, i.e. 'Work', or 'Home'",
              "example": "Work",
              "x-parser-schema-id": "<anonymous-schema-246>"
            },
            "telephone": {
              "description": "a telephone number",
              "type": "string",
              "example": "1-364-127-9618 x20418",
              "x-parser-schema-id": "<anonymous-schema-247>"
            },
            "faxNumber": {
              "description": "a fax number",
              "type": "string",
              "example": "834.320.1602",
              "x-parser-schema-id": "<anonymous-schema-248>"
            },
            "email": {
              "description": "an email address for the item.",
              "type": "string",
              "format": "email",
              "example": "user@example.com",
              "x-parser-schema-id": "<anonymous-schema-249>"
            },
            "url": {
              "description": "primary URL for the item.",
              "type": "string",
              "format": "uri",
              "example": "https://www.facebook.com/hallandoates",
              "x-parser-schema-id": "<anonymous-schema-250>"
            }
          },
          "x-parser-schema-id": "ContactPoint"
        },
        "options": {}
      }
    }
  },
  "faxNumber": {
    "_json": {
      "description": "a fax number",
      "type": "string",
      "example": "834.320.1602",
      "x-parser-schema-id": "<anonymous-schema-248>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ContactPoint",
          "description": "A point of contact for the entity. By convention in the real estate domain, ContactPoints \nare preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values \nfor example, Work Telephone, Home, as named contactPoint values.\n",
          "type": "object",
          "properties": {
            "type": {
              "description": "ContactPoint",
              "type": "string",
              "enum": [
                "ContactPoint"
              ],
              "x-parser-schema-id": "<anonymous-schema-245>"
            },
            "name": {
              "type": "string",
              "description": "a label for the contactPoint, i.e. 'Work', or 'Home'",
              "example": "Work",
              "x-parser-schema-id": "<anonymous-schema-246>"
            },
            "telephone": {
              "description": "a telephone number",
              "type": "string",
              "example": "1-364-127-9618 x20418",
              "x-parser-schema-id": "<anonymous-schema-247>"
            },
            "faxNumber": {
              "description": "a fax number",
              "type": "string",
              "example": "834.320.1602",
              "x-parser-schema-id": "<anonymous-schema-248>"
            },
            "email": {
              "description": "an email address for the item.",
              "type": "string",
              "format": "email",
              "example": "user@example.com",
              "x-parser-schema-id": "<anonymous-schema-249>"
            },
            "url": {
              "description": "primary URL for the item.",
              "type": "string",
              "format": "uri",
              "example": "https://www.facebook.com/hallandoates",
              "x-parser-schema-id": "<anonymous-schema-250>"
            }
          },
          "x-parser-schema-id": "ContactPoint"
        },
        "options": {}
      }
    }
  },
  "email": {
    "_json": {
      "description": "an email address for the item.",
      "type": "string",
      "format": "email",
      "example": "user@example.com",
      "x-parser-schema-id": "<anonymous-schema-249>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ContactPoint",
          "description": "A point of contact for the entity. By convention in the real estate domain, ContactPoints \nare preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values \nfor example, Work Telephone, Home, as named contactPoint values.\n",
          "type": "object",
          "properties": {
            "type": {
              "description": "ContactPoint",
              "type": "string",
              "enum": [
                "ContactPoint"
              ],
              "x-parser-schema-id": "<anonymous-schema-245>"
            },
            "name": {
              "type": "string",
              "description": "a label for the contactPoint, i.e. 'Work', or 'Home'",
              "example": "Work",
              "x-parser-schema-id": "<anonymous-schema-246>"
            },
            "telephone": {
              "description": "a telephone number",
              "type": "string",
              "example": "1-364-127-9618 x20418",
              "x-parser-schema-id": "<anonymous-schema-247>"
            },
            "faxNumber": {
              "description": "a fax number",
              "type": "string",
              "example": "834.320.1602",
              "x-parser-schema-id": "<anonymous-schema-248>"
            },
            "email": {
              "description": "an email address for the item.",
              "type": "string",
              "format": "email",
              "example": "user@example.com",
              "x-parser-schema-id": "<anonymous-schema-249>"
            },
            "url": {
              "description": "primary URL for the item.",
              "type": "string",
              "format": "uri",
              "example": "https://www.facebook.com/hallandoates",
              "x-parser-schema-id": "<anonymous-schema-250>"
            }
          },
          "x-parser-schema-id": "ContactPoint"
        },
        "options": {}
      }
    }
  },
  "url": {
    "_json": {
      "description": "primary URL for the item.",
      "type": "string",
      "format": "uri",
      "example": "https://www.facebook.com/hallandoates",
      "x-parser-schema-id": "<anonymous-schema-250>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ContactPoint",
          "description": "A point of contact for the entity. By convention in the real estate domain, ContactPoints \nare preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values \nfor example, Work Telephone, Home, as named contactPoint values.\n",
          "type": "object",
          "properties": {
            "type": {
              "description": "ContactPoint",
              "type": "string",
              "enum": [
                "ContactPoint"
              ],
              "x-parser-schema-id": "<anonymous-schema-245>"
            },
            "name": {
              "type": "string",
              "description": "a label for the contactPoint, i.e. 'Work', or 'Home'",
              "example": "Work",
              "x-parser-schema-id": "<anonymous-schema-246>"
            },
            "telephone": {
              "description": "a telephone number",
              "type": "string",
              "example": "1-364-127-9618 x20418",
              "x-parser-schema-id": "<anonymous-schema-247>"
            },
            "faxNumber": {
              "description": "a fax number",
              "type": "string",
              "example": "834.320.1602",
              "x-parser-schema-id": "<anonymous-schema-248>"
            },
            "email": {
              "description": "an email address for the item.",
              "type": "string",
              "format": "email",
              "example": "user@example.com",
              "x-parser-schema-id": "<anonymous-schema-249>"
            },
            "url": {
              "description": "primary URL for the item.",
              "type": "string",
              "format": "uri",
              "example": "https://www.facebook.com/hallandoates",
              "x-parser-schema-id": "<anonymous-schema-250>"
            }
          },
          "x-parser-schema-id": "ContactPoint"
        },
        "options": {}
      }
    }
  }
}


# ContactPoint

A point of contact for the entity. By convention in the real estate domain, ContactPoints 
are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values 
for example, Work Telephone, Home, as named contactPoint values.




### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "description": "ContactPoint",
    "type": "string",
    "enum": [
      "ContactPoint"
    ],
    "x-parser-schema-id": "<anonymous-schema-245>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ContactPoint",
        "description": "A point of contact for the entity. By convention in the real estate domain, ContactPoints \nare preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values \nfor example, Work Telephone, Home, as named contactPoint values.\n",
        "type": "object",
        "properties": {
          "type": {
            "description": "ContactPoint",
            "type": "string",
            "enum": [
              "ContactPoint"
            ],
            "x-parser-schema-id": "<anonymous-schema-245>"
          },
          "name": {
            "type": "string",
            "description": "a label for the contactPoint, i.e. 'Work', or 'Home'",
            "example": "Work",
            "x-parser-schema-id": "<anonymous-schema-246>"
          },
          "telephone": {
            "description": "a telephone number",
            "type": "string",
            "example": "1-364-127-9618 x20418",
            "x-parser-schema-id": "<anonymous-schema-247>"
          },
          "faxNumber": {
            "description": "a fax number",
            "type": "string",
            "example": "834.320.1602",
            "x-parser-schema-id": "<anonymous-schema-248>"
          },
          "email": {
            "description": "an email address for the item.",
            "type": "string",
            "format": "email",
            "example": "user@example.com",
            "x-parser-schema-id": "<anonymous-schema-249>"
          },
          "url": {
            "description": "primary URL for the item.",
            "type": "string",
            "format": "uri",
            "example": "https://www.facebook.com/hallandoates",
            "x-parser-schema-id": "<anonymous-schema-250>"
          }
        },
        "x-parser-schema-id": "ContactPoint"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "a label for the contactPoint, i.e. 'Work', or 'Home'",
    "example": "Work",
    "x-parser-schema-id": "<anonymous-schema-246>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ContactPoint",
        "description": "A point of contact for the entity. By convention in the real estate domain, ContactPoints \nare preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values \nfor example, Work Telephone, Home, as named contactPoint values.\n",
        "type": "object",
        "properties": {
          "type": {
            "description": "ContactPoint",
            "type": "string",
            "enum": [
              "ContactPoint"
            ],
            "x-parser-schema-id": "<anonymous-schema-245>"
          },
          "name": {
            "type": "string",
            "description": "a label for the contactPoint, i.e. 'Work', or 'Home'",
            "example": "Work",
            "x-parser-schema-id": "<anonymous-schema-246>"
          },
          "telephone": {
            "description": "a telephone number",
            "type": "string",
            "example": "1-364-127-9618 x20418",
            "x-parser-schema-id": "<anonymous-schema-247>"
          },
          "faxNumber": {
            "description": "a fax number",
            "type": "string",
            "example": "834.320.1602",
            "x-parser-schema-id": "<anonymous-schema-248>"
          },
          "email": {
            "description": "an email address for the item.",
            "type": "string",
            "format": "email",
            "example": "user@example.com",
            "x-parser-schema-id": "<anonymous-schema-249>"
          },
          "url": {
            "description": "primary URL for the item.",
            "type": "string",
            "format": "uri",
            "example": "https://www.facebook.com/hallandoates",
            "x-parser-schema-id": "<anonymous-schema-250>"
          }
        },
        "x-parser-schema-id": "ContactPoint"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "a telephone number",
    "type": "string",
    "example": "1-364-127-9618 x20418",
    "x-parser-schema-id": "<anonymous-schema-247>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ContactPoint",
        "description": "A point of contact for the entity. By convention in the real estate domain, ContactPoints \nare preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values \nfor example, Work Telephone, Home, as named contactPoint values.\n",
        "type": "object",
        "properties": {
          "type": {
            "description": "ContactPoint",
            "type": "string",
            "enum": [
              "ContactPoint"
            ],
            "x-parser-schema-id": "<anonymous-schema-245>"
          },
          "name": {
            "type": "string",
            "description": "a label for the contactPoint, i.e. 'Work', or 'Home'",
            "example": "Work",
            "x-parser-schema-id": "<anonymous-schema-246>"
          },
          "telephone": {
            "description": "a telephone number",
            "type": "string",
            "example": "1-364-127-9618 x20418",
            "x-parser-schema-id": "<anonymous-schema-247>"
          },
          "faxNumber": {
            "description": "a fax number",
            "type": "string",
            "example": "834.320.1602",
            "x-parser-schema-id": "<anonymous-schema-248>"
          },
          "email": {
            "description": "an email address for the item.",
            "type": "string",
            "format": "email",
            "example": "user@example.com",
            "x-parser-schema-id": "<anonymous-schema-249>"
          },
          "url": {
            "description": "primary URL for the item.",
            "type": "string",
            "format": "uri",
            "example": "https://www.facebook.com/hallandoates",
            "x-parser-schema-id": "<anonymous-schema-250>"
          }
        },
        "x-parser-schema-id": "ContactPoint"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "a fax number",
    "type": "string",
    "example": "834.320.1602",
    "x-parser-schema-id": "<anonymous-schema-248>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ContactPoint",
        "description": "A point of contact for the entity. By convention in the real estate domain, ContactPoints \nare preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values \nfor example, Work Telephone, Home, as named contactPoint values.\n",
        "type": "object",
        "properties": {
          "type": {
            "description": "ContactPoint",
            "type": "string",
            "enum": [
              "ContactPoint"
            ],
            "x-parser-schema-id": "<anonymous-schema-245>"
          },
          "name": {
            "type": "string",
            "description": "a label for the contactPoint, i.e. 'Work', or 'Home'",
            "example": "Work",
            "x-parser-schema-id": "<anonymous-schema-246>"
          },
          "telephone": {
            "description": "a telephone number",
            "type": "string",
            "example": "1-364-127-9618 x20418",
            "x-parser-schema-id": "<anonymous-schema-247>"
          },
          "faxNumber": {
            "description": "a fax number",
            "type": "string",
            "example": "834.320.1602",
            "x-parser-schema-id": "<anonymous-schema-248>"
          },
          "email": {
            "description": "an email address for the item.",
            "type": "string",
            "format": "email",
            "example": "user@example.com",
            "x-parser-schema-id": "<anonymous-schema-249>"
          },
          "url": {
            "description": "primary URL for the item.",
            "type": "string",
            "format": "uri",
            "example": "https://www.facebook.com/hallandoates",
            "x-parser-schema-id": "<anonymous-schema-250>"
          }
        },
        "x-parser-schema-id": "ContactPoint"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "an email address for the item.",
    "type": "string",
    "format": "email",
    "example": "user@example.com",
    "x-parser-schema-id": "<anonymous-schema-249>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ContactPoint",
        "description": "A point of contact for the entity. By convention in the real estate domain, ContactPoints \nare preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values \nfor example, Work Telephone, Home, as named contactPoint values.\n",
        "type": "object",
        "properties": {
          "type": {
            "description": "ContactPoint",
            "type": "string",
            "enum": [
              "ContactPoint"
            ],
            "x-parser-schema-id": "<anonymous-schema-245>"
          },
          "name": {
            "type": "string",
            "description": "a label for the contactPoint, i.e. 'Work', or 'Home'",
            "example": "Work",
            "x-parser-schema-id": "<anonymous-schema-246>"
          },
          "telephone": {
            "description": "a telephone number",
            "type": "string",
            "example": "1-364-127-9618 x20418",
            "x-parser-schema-id": "<anonymous-schema-247>"
          },
          "faxNumber": {
            "description": "a fax number",
            "type": "string",
            "example": "834.320.1602",
            "x-parser-schema-id": "<anonymous-schema-248>"
          },
          "email": {
            "description": "an email address for the item.",
            "type": "string",
            "format": "email",
            "example": "user@example.com",
            "x-parser-schema-id": "<anonymous-schema-249>"
          },
          "url": {
            "description": "primary URL for the item.",
            "type": "string",
            "format": "uri",
            "example": "https://www.facebook.com/hallandoates",
            "x-parser-schema-id": "<anonymous-schema-250>"
          }
        },
        "x-parser-schema-id": "ContactPoint"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "primary URL for the item.",
    "type": "string",
    "format": "uri",
    "example": "https://www.facebook.com/hallandoates",
    "x-parser-schema-id": "<anonymous-schema-250>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ContactPoint",
        "description": "A point of contact for the entity. By convention in the real estate domain, ContactPoints \nare preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values \nfor example, Work Telephone, Home, as named contactPoint values.\n",
        "type": "object",
        "properties": {
          "type": {
            "description": "ContactPoint",
            "type": "string",
            "enum": [
              "ContactPoint"
            ],
            "x-parser-schema-id": "<anonymous-schema-245>"
          },
          "name": {
            "type": "string",
            "description": "a label for the contactPoint, i.e. 'Work', or 'Home'",
            "example": "Work",
            "x-parser-schema-id": "<anonymous-schema-246>"
          },
          "telephone": {
            "description": "a telephone number",
            "type": "string",
            "example": "1-364-127-9618 x20418",
            "x-parser-schema-id": "<anonymous-schema-247>"
          },
          "faxNumber": {
            "description": "a fax number",
            "type": "string",
            "example": "834.320.1602",
            "x-parser-schema-id": "<anonymous-schema-248>"
          },
          "email": {
            "description": "an email address for the item.",
            "type": "string",
            "format": "email",
            "example": "user@example.com",
            "x-parser-schema-id": "<anonymous-schema-249>"
          },
          "url": {
            "description": "primary URL for the item.",
            "type": "string",
            "format": "uri",
            "example": "https://www.facebook.com/hallandoates",
            "x-parser-schema-id": "<anonymous-schema-250>"
          }
        },
        "x-parser-schema-id": "ContactPoint"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "ContactPoint",
  "name": "Work",
  "telephone": "1-364-127-9618 x20418",
  "faxNumber": "834.320.1602",
  "email": "user@example.com",
  "url": "https://www.facebook.com/hallandoates"
}
```

