

---
title: TransactionParticipant
---

{
  "type": {
    "_json": {
      "type": "string",
      "description": "The item type (Linked-Data @type)",
      "enum": [
        "TransactionParticipant"
      ],
      "x-parser-schema-id": "<anonymous-schema-557>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "TransactionParticipant",
          "x-range": "TransactionParticipant",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "TransactionParticipant"
              ],
              "x-parser-schema-id": "<anonymous-schema-557>"
            },
            "roleName": {
              "type": "string",
              "description": "enum: Buyer,Seller",
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-558>"
            },
            "position": {
              "type": "number",
              "description": "numeric position for the participant/roleName.",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-559>"
            },
            "givenName": {
              "type": "string",
              "description": "First Name of a person",
              "example": "Glenn",
              "x-parser-schema-id": "<anonymous-schema-233>"
            },
            "familyName": {
              "type": "string",
              "description": "Last Name of a person",
              "example": "Miller",
              "maxLength": 50,
              "x-parser-schema-id": "<anonymous-schema-262>"
            },
            "additionalName": {
              "type": "string",
              "description": "middleName or alternate name of the Person",
              "example": "Big",
              "x-parser-schema-id": "<anonymous-schema-560>"
            },
            "email": {
              "type": "string",
              "format": "email",
              "description": "Primary email address.",
              "example": "user@example.com",
              "x-parser-schema-id": "<anonymous-schema-561>"
            },
            "telephone": {
              "type": "string",
              "description": "Primary phone number.",
              "example": "+15558675309",
              "x-parser-schema-id": "<anonymous-schema-562>"
            },
            "affiliation": {
              "type": "array",
              "description": "person or organization associated with the participant",
              "items": {
                "type": "string",
                "format": "uri",
                "example": "https://{agentid}.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-564>"
              },
              "x-parser-schema-id": "<anonymous-schema-563>"
            }
          },
          "x-parser-schema-id": "TransactionParticipant"
        },
        "options": {}
      }
    }
  },
  "roleName": {
    "_json": {
      "type": "string",
      "description": "enum: Buyer,Seller",
      "enum": [
        "Buyer",
        "Seller"
      ],
      "x-parser-schema-id": "<anonymous-schema-558>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "TransactionParticipant",
          "x-range": "TransactionParticipant",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "TransactionParticipant"
              ],
              "x-parser-schema-id": "<anonymous-schema-557>"
            },
            "roleName": {
              "type": "string",
              "description": "enum: Buyer,Seller",
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-558>"
            },
            "position": {
              "type": "number",
              "description": "numeric position for the participant/roleName.",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-559>"
            },
            "givenName": {
              "type": "string",
              "description": "First Name of a person",
              "example": "Glenn",
              "x-parser-schema-id": "<anonymous-schema-233>"
            },
            "familyName": {
              "type": "string",
              "description": "Last Name of a person",
              "example": "Miller",
              "maxLength": 50,
              "x-parser-schema-id": "<anonymous-schema-262>"
            },
            "additionalName": {
              "type": "string",
              "description": "middleName or alternate name of the Person",
              "example": "Big",
              "x-parser-schema-id": "<anonymous-schema-560>"
            },
            "email": {
              "type": "string",
              "format": "email",
              "description": "Primary email address.",
              "example": "user@example.com",
              "x-parser-schema-id": "<anonymous-schema-561>"
            },
            "telephone": {
              "type": "string",
              "description": "Primary phone number.",
              "example": "+15558675309",
              "x-parser-schema-id": "<anonymous-schema-562>"
            },
            "affiliation": {
              "type": "array",
              "description": "person or organization associated with the participant",
              "items": {
                "type": "string",
                "format": "uri",
                "example": "https://{agentid}.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-564>"
              },
              "x-parser-schema-id": "<anonymous-schema-563>"
            }
          },
          "x-parser-schema-id": "TransactionParticipant"
        },
        "options": {}
      }
    }
  },
  "position": {
    "_json": {
      "type": "number",
      "description": "numeric position for the participant/roleName.",
      "example": 1,
      "x-parser-schema-id": "<anonymous-schema-559>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "TransactionParticipant",
          "x-range": "TransactionParticipant",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "TransactionParticipant"
              ],
              "x-parser-schema-id": "<anonymous-schema-557>"
            },
            "roleName": {
              "type": "string",
              "description": "enum: Buyer,Seller",
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-558>"
            },
            "position": {
              "type": "number",
              "description": "numeric position for the participant/roleName.",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-559>"
            },
            "givenName": {
              "type": "string",
              "description": "First Name of a person",
              "example": "Glenn",
              "x-parser-schema-id": "<anonymous-schema-233>"
            },
            "familyName": {
              "type": "string",
              "description": "Last Name of a person",
              "example": "Miller",
              "maxLength": 50,
              "x-parser-schema-id": "<anonymous-schema-262>"
            },
            "additionalName": {
              "type": "string",
              "description": "middleName or alternate name of the Person",
              "example": "Big",
              "x-parser-schema-id": "<anonymous-schema-560>"
            },
            "email": {
              "type": "string",
              "format": "email",
              "description": "Primary email address.",
              "example": "user@example.com",
              "x-parser-schema-id": "<anonymous-schema-561>"
            },
            "telephone": {
              "type": "string",
              "description": "Primary phone number.",
              "example": "+15558675309",
              "x-parser-schema-id": "<anonymous-schema-562>"
            },
            "affiliation": {
              "type": "array",
              "description": "person or organization associated with the participant",
              "items": {
                "type": "string",
                "format": "uri",
                "example": "https://{agentid}.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-564>"
              },
              "x-parser-schema-id": "<anonymous-schema-563>"
            }
          },
          "x-parser-schema-id": "TransactionParticipant"
        },
        "options": {}
      }
    }
  },
  "givenName": {
    "_json": {
      "type": "string",
      "description": "First Name of a person",
      "example": "Glenn",
      "x-parser-schema-id": "<anonymous-schema-233>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "TransactionParticipant",
          "x-range": "TransactionParticipant",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "TransactionParticipant"
              ],
              "x-parser-schema-id": "<anonymous-schema-557>"
            },
            "roleName": {
              "type": "string",
              "description": "enum: Buyer,Seller",
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-558>"
            },
            "position": {
              "type": "number",
              "description": "numeric position for the participant/roleName.",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-559>"
            },
            "givenName": {
              "type": "string",
              "description": "First Name of a person",
              "example": "Glenn",
              "x-parser-schema-id": "<anonymous-schema-233>"
            },
            "familyName": {
              "type": "string",
              "description": "Last Name of a person",
              "example": "Miller",
              "maxLength": 50,
              "x-parser-schema-id": "<anonymous-schema-262>"
            },
            "additionalName": {
              "type": "string",
              "description": "middleName or alternate name of the Person",
              "example": "Big",
              "x-parser-schema-id": "<anonymous-schema-560>"
            },
            "email": {
              "type": "string",
              "format": "email",
              "description": "Primary email address.",
              "example": "user@example.com",
              "x-parser-schema-id": "<anonymous-schema-561>"
            },
            "telephone": {
              "type": "string",
              "description": "Primary phone number.",
              "example": "+15558675309",
              "x-parser-schema-id": "<anonymous-schema-562>"
            },
            "affiliation": {
              "type": "array",
              "description": "person or organization associated with the participant",
              "items": {
                "type": "string",
                "format": "uri",
                "example": "https://{agentid}.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-564>"
              },
              "x-parser-schema-id": "<anonymous-schema-563>"
            }
          },
          "x-parser-schema-id": "TransactionParticipant"
        },
        "options": {}
      }
    }
  },
  "familyName": {
    "_json": {
      "type": "string",
      "description": "Last Name of a person",
      "example": "Miller",
      "maxLength": 50,
      "x-parser-schema-id": "<anonymous-schema-262>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "TransactionParticipant",
          "x-range": "TransactionParticipant",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "TransactionParticipant"
              ],
              "x-parser-schema-id": "<anonymous-schema-557>"
            },
            "roleName": {
              "type": "string",
              "description": "enum: Buyer,Seller",
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-558>"
            },
            "position": {
              "type": "number",
              "description": "numeric position for the participant/roleName.",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-559>"
            },
            "givenName": {
              "type": "string",
              "description": "First Name of a person",
              "example": "Glenn",
              "x-parser-schema-id": "<anonymous-schema-233>"
            },
            "familyName": {
              "type": "string",
              "description": "Last Name of a person",
              "example": "Miller",
              "maxLength": 50,
              "x-parser-schema-id": "<anonymous-schema-262>"
            },
            "additionalName": {
              "type": "string",
              "description": "middleName or alternate name of the Person",
              "example": "Big",
              "x-parser-schema-id": "<anonymous-schema-560>"
            },
            "email": {
              "type": "string",
              "format": "email",
              "description": "Primary email address.",
              "example": "user@example.com",
              "x-parser-schema-id": "<anonymous-schema-561>"
            },
            "telephone": {
              "type": "string",
              "description": "Primary phone number.",
              "example": "+15558675309",
              "x-parser-schema-id": "<anonymous-schema-562>"
            },
            "affiliation": {
              "type": "array",
              "description": "person or organization associated with the participant",
              "items": {
                "type": "string",
                "format": "uri",
                "example": "https://{agentid}.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-564>"
              },
              "x-parser-schema-id": "<anonymous-schema-563>"
            }
          },
          "x-parser-schema-id": "TransactionParticipant"
        },
        "options": {}
      }
    }
  },
  "additionalName": {
    "_json": {
      "type": "string",
      "description": "middleName or alternate name of the Person",
      "example": "Big",
      "x-parser-schema-id": "<anonymous-schema-560>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "TransactionParticipant",
          "x-range": "TransactionParticipant",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "TransactionParticipant"
              ],
              "x-parser-schema-id": "<anonymous-schema-557>"
            },
            "roleName": {
              "type": "string",
              "description": "enum: Buyer,Seller",
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-558>"
            },
            "position": {
              "type": "number",
              "description": "numeric position for the participant/roleName.",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-559>"
            },
            "givenName": {
              "type": "string",
              "description": "First Name of a person",
              "example": "Glenn",
              "x-parser-schema-id": "<anonymous-schema-233>"
            },
            "familyName": {
              "type": "string",
              "description": "Last Name of a person",
              "example": "Miller",
              "maxLength": 50,
              "x-parser-schema-id": "<anonymous-schema-262>"
            },
            "additionalName": {
              "type": "string",
              "description": "middleName or alternate name of the Person",
              "example": "Big",
              "x-parser-schema-id": "<anonymous-schema-560>"
            },
            "email": {
              "type": "string",
              "format": "email",
              "description": "Primary email address.",
              "example": "user@example.com",
              "x-parser-schema-id": "<anonymous-schema-561>"
            },
            "telephone": {
              "type": "string",
              "description": "Primary phone number.",
              "example": "+15558675309",
              "x-parser-schema-id": "<anonymous-schema-562>"
            },
            "affiliation": {
              "type": "array",
              "description": "person or organization associated with the participant",
              "items": {
                "type": "string",
                "format": "uri",
                "example": "https://{agentid}.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-564>"
              },
              "x-parser-schema-id": "<anonymous-schema-563>"
            }
          },
          "x-parser-schema-id": "TransactionParticipant"
        },
        "options": {}
      }
    }
  },
  "email": {
    "_json": {
      "type": "string",
      "format": "email",
      "description": "Primary email address.",
      "example": "user@example.com",
      "x-parser-schema-id": "<anonymous-schema-561>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "TransactionParticipant",
          "x-range": "TransactionParticipant",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "TransactionParticipant"
              ],
              "x-parser-schema-id": "<anonymous-schema-557>"
            },
            "roleName": {
              "type": "string",
              "description": "enum: Buyer,Seller",
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-558>"
            },
            "position": {
              "type": "number",
              "description": "numeric position for the participant/roleName.",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-559>"
            },
            "givenName": {
              "type": "string",
              "description": "First Name of a person",
              "example": "Glenn",
              "x-parser-schema-id": "<anonymous-schema-233>"
            },
            "familyName": {
              "type": "string",
              "description": "Last Name of a person",
              "example": "Miller",
              "maxLength": 50,
              "x-parser-schema-id": "<anonymous-schema-262>"
            },
            "additionalName": {
              "type": "string",
              "description": "middleName or alternate name of the Person",
              "example": "Big",
              "x-parser-schema-id": "<anonymous-schema-560>"
            },
            "email": {
              "type": "string",
              "format": "email",
              "description": "Primary email address.",
              "example": "user@example.com",
              "x-parser-schema-id": "<anonymous-schema-561>"
            },
            "telephone": {
              "type": "string",
              "description": "Primary phone number.",
              "example": "+15558675309",
              "x-parser-schema-id": "<anonymous-schema-562>"
            },
            "affiliation": {
              "type": "array",
              "description": "person or organization associated with the participant",
              "items": {
                "type": "string",
                "format": "uri",
                "example": "https://{agentid}.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-564>"
              },
              "x-parser-schema-id": "<anonymous-schema-563>"
            }
          },
          "x-parser-schema-id": "TransactionParticipant"
        },
        "options": {}
      }
    }
  },
  "telephone": {
    "_json": {
      "type": "string",
      "description": "Primary phone number.",
      "example": "+15558675309",
      "x-parser-schema-id": "<anonymous-schema-562>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "TransactionParticipant",
          "x-range": "TransactionParticipant",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "TransactionParticipant"
              ],
              "x-parser-schema-id": "<anonymous-schema-557>"
            },
            "roleName": {
              "type": "string",
              "description": "enum: Buyer,Seller",
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-558>"
            },
            "position": {
              "type": "number",
              "description": "numeric position for the participant/roleName.",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-559>"
            },
            "givenName": {
              "type": "string",
              "description": "First Name of a person",
              "example": "Glenn",
              "x-parser-schema-id": "<anonymous-schema-233>"
            },
            "familyName": {
              "type": "string",
              "description": "Last Name of a person",
              "example": "Miller",
              "maxLength": 50,
              "x-parser-schema-id": "<anonymous-schema-262>"
            },
            "additionalName": {
              "type": "string",
              "description": "middleName or alternate name of the Person",
              "example": "Big",
              "x-parser-schema-id": "<anonymous-schema-560>"
            },
            "email": {
              "type": "string",
              "format": "email",
              "description": "Primary email address.",
              "example": "user@example.com",
              "x-parser-schema-id": "<anonymous-schema-561>"
            },
            "telephone": {
              "type": "string",
              "description": "Primary phone number.",
              "example": "+15558675309",
              "x-parser-schema-id": "<anonymous-schema-562>"
            },
            "affiliation": {
              "type": "array",
              "description": "person or organization associated with the participant",
              "items": {
                "type": "string",
                "format": "uri",
                "example": "https://{agentid}.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-564>"
              },
              "x-parser-schema-id": "<anonymous-schema-563>"
            }
          },
          "x-parser-schema-id": "TransactionParticipant"
        },
        "options": {}
      }
    }
  },
  "affiliation": {
    "_json": {
      "type": "array",
      "description": "person or organization associated with the participant",
      "items": {
        "type": "string",
        "format": "uri",
        "example": "https://{agentid}.example.com/profile/card#me",
        "x-parser-schema-id": "<anonymous-schema-564>"
      },
      "x-parser-schema-id": "<anonymous-schema-563>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "TransactionParticipant",
          "x-range": "TransactionParticipant",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "TransactionParticipant"
              ],
              "x-parser-schema-id": "<anonymous-schema-557>"
            },
            "roleName": {
              "type": "string",
              "description": "enum: Buyer,Seller",
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-558>"
            },
            "position": {
              "type": "number",
              "description": "numeric position for the participant/roleName.",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-559>"
            },
            "givenName": {
              "type": "string",
              "description": "First Name of a person",
              "example": "Glenn",
              "x-parser-schema-id": "<anonymous-schema-233>"
            },
            "familyName": {
              "type": "string",
              "description": "Last Name of a person",
              "example": "Miller",
              "maxLength": 50,
              "x-parser-schema-id": "<anonymous-schema-262>"
            },
            "additionalName": {
              "type": "string",
              "description": "middleName or alternate name of the Person",
              "example": "Big",
              "x-parser-schema-id": "<anonymous-schema-560>"
            },
            "email": {
              "type": "string",
              "format": "email",
              "description": "Primary email address.",
              "example": "user@example.com",
              "x-parser-schema-id": "<anonymous-schema-561>"
            },
            "telephone": {
              "type": "string",
              "description": "Primary phone number.",
              "example": "+15558675309",
              "x-parser-schema-id": "<anonymous-schema-562>"
            },
            "affiliation": {
              "type": "array",
              "description": "person or organization associated with the participant",
              "items": {
                "type": "string",
                "format": "uri",
                "example": "https://{agentid}.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-564>"
              },
              "x-parser-schema-id": "<anonymous-schema-563>"
            }
          },
          "x-parser-schema-id": "TransactionParticipant"
        },
        "options": {}
      }
    }
  }
}


# TransactionParticipant





### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "description": "The item type (Linked-Data @type)",
    "enum": [
      "TransactionParticipant"
    ],
    "x-parser-schema-id": "<anonymous-schema-557>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "TransactionParticipant",
        "x-range": "TransactionParticipant",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "TransactionParticipant"
            ],
            "x-parser-schema-id": "<anonymous-schema-557>"
          },
          "roleName": {
            "type": "string",
            "description": "enum: Buyer,Seller",
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-558>"
          },
          "position": {
            "type": "number",
            "description": "numeric position for the participant/roleName.",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-559>"
          },
          "givenName": {
            "type": "string",
            "description": "First Name of a person",
            "example": "Glenn",
            "x-parser-schema-id": "<anonymous-schema-233>"
          },
          "familyName": {
            "type": "string",
            "description": "Last Name of a person",
            "example": "Miller",
            "maxLength": 50,
            "x-parser-schema-id": "<anonymous-schema-262>"
          },
          "additionalName": {
            "type": "string",
            "description": "middleName or alternate name of the Person",
            "example": "Big",
            "x-parser-schema-id": "<anonymous-schema-560>"
          },
          "email": {
            "type": "string",
            "format": "email",
            "description": "Primary email address.",
            "example": "user@example.com",
            "x-parser-schema-id": "<anonymous-schema-561>"
          },
          "telephone": {
            "type": "string",
            "description": "Primary phone number.",
            "example": "+15558675309",
            "x-parser-schema-id": "<anonymous-schema-562>"
          },
          "affiliation": {
            "type": "array",
            "description": "person or organization associated with the participant",
            "items": {
              "type": "string",
              "format": "uri",
              "example": "https://{agentid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-564>"
            },
            "x-parser-schema-id": "<anonymous-schema-563>"
          }
        },
        "x-parser-schema-id": "TransactionParticipant"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "enum: Buyer,Seller",
    "enum": [
      "Buyer",
      "Seller"
    ],
    "x-parser-schema-id": "<anonymous-schema-558>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "TransactionParticipant",
        "x-range": "TransactionParticipant",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "TransactionParticipant"
            ],
            "x-parser-schema-id": "<anonymous-schema-557>"
          },
          "roleName": {
            "type": "string",
            "description": "enum: Buyer,Seller",
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-558>"
          },
          "position": {
            "type": "number",
            "description": "numeric position for the participant/roleName.",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-559>"
          },
          "givenName": {
            "type": "string",
            "description": "First Name of a person",
            "example": "Glenn",
            "x-parser-schema-id": "<anonymous-schema-233>"
          },
          "familyName": {
            "type": "string",
            "description": "Last Name of a person",
            "example": "Miller",
            "maxLength": 50,
            "x-parser-schema-id": "<anonymous-schema-262>"
          },
          "additionalName": {
            "type": "string",
            "description": "middleName or alternate name of the Person",
            "example": "Big",
            "x-parser-schema-id": "<anonymous-schema-560>"
          },
          "email": {
            "type": "string",
            "format": "email",
            "description": "Primary email address.",
            "example": "user@example.com",
            "x-parser-schema-id": "<anonymous-schema-561>"
          },
          "telephone": {
            "type": "string",
            "description": "Primary phone number.",
            "example": "+15558675309",
            "x-parser-schema-id": "<anonymous-schema-562>"
          },
          "affiliation": {
            "type": "array",
            "description": "person or organization associated with the participant",
            "items": {
              "type": "string",
              "format": "uri",
              "example": "https://{agentid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-564>"
            },
            "x-parser-schema-id": "<anonymous-schema-563>"
          }
        },
        "x-parser-schema-id": "TransactionParticipant"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "number",
    "description": "numeric position for the participant/roleName.",
    "example": 1,
    "x-parser-schema-id": "<anonymous-schema-559>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "TransactionParticipant",
        "x-range": "TransactionParticipant",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "TransactionParticipant"
            ],
            "x-parser-schema-id": "<anonymous-schema-557>"
          },
          "roleName": {
            "type": "string",
            "description": "enum: Buyer,Seller",
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-558>"
          },
          "position": {
            "type": "number",
            "description": "numeric position for the participant/roleName.",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-559>"
          },
          "givenName": {
            "type": "string",
            "description": "First Name of a person",
            "example": "Glenn",
            "x-parser-schema-id": "<anonymous-schema-233>"
          },
          "familyName": {
            "type": "string",
            "description": "Last Name of a person",
            "example": "Miller",
            "maxLength": 50,
            "x-parser-schema-id": "<anonymous-schema-262>"
          },
          "additionalName": {
            "type": "string",
            "description": "middleName or alternate name of the Person",
            "example": "Big",
            "x-parser-schema-id": "<anonymous-schema-560>"
          },
          "email": {
            "type": "string",
            "format": "email",
            "description": "Primary email address.",
            "example": "user@example.com",
            "x-parser-schema-id": "<anonymous-schema-561>"
          },
          "telephone": {
            "type": "string",
            "description": "Primary phone number.",
            "example": "+15558675309",
            "x-parser-schema-id": "<anonymous-schema-562>"
          },
          "affiliation": {
            "type": "array",
            "description": "person or organization associated with the participant",
            "items": {
              "type": "string",
              "format": "uri",
              "example": "https://{agentid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-564>"
            },
            "x-parser-schema-id": "<anonymous-schema-563>"
          }
        },
        "x-parser-schema-id": "TransactionParticipant"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "First Name of a person",
    "example": "Glenn",
    "x-parser-schema-id": "<anonymous-schema-233>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "TransactionParticipant",
        "x-range": "TransactionParticipant",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "TransactionParticipant"
            ],
            "x-parser-schema-id": "<anonymous-schema-557>"
          },
          "roleName": {
            "type": "string",
            "description": "enum: Buyer,Seller",
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-558>"
          },
          "position": {
            "type": "number",
            "description": "numeric position for the participant/roleName.",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-559>"
          },
          "givenName": {
            "type": "string",
            "description": "First Name of a person",
            "example": "Glenn",
            "x-parser-schema-id": "<anonymous-schema-233>"
          },
          "familyName": {
            "type": "string",
            "description": "Last Name of a person",
            "example": "Miller",
            "maxLength": 50,
            "x-parser-schema-id": "<anonymous-schema-262>"
          },
          "additionalName": {
            "type": "string",
            "description": "middleName or alternate name of the Person",
            "example": "Big",
            "x-parser-schema-id": "<anonymous-schema-560>"
          },
          "email": {
            "type": "string",
            "format": "email",
            "description": "Primary email address.",
            "example": "user@example.com",
            "x-parser-schema-id": "<anonymous-schema-561>"
          },
          "telephone": {
            "type": "string",
            "description": "Primary phone number.",
            "example": "+15558675309",
            "x-parser-schema-id": "<anonymous-schema-562>"
          },
          "affiliation": {
            "type": "array",
            "description": "person or organization associated with the participant",
            "items": {
              "type": "string",
              "format": "uri",
              "example": "https://{agentid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-564>"
            },
            "x-parser-schema-id": "<anonymous-schema-563>"
          }
        },
        "x-parser-schema-id": "TransactionParticipant"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "Last Name of a person",
    "example": "Miller",
    "maxLength": 50,
    "x-parser-schema-id": "<anonymous-schema-262>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "TransactionParticipant",
        "x-range": "TransactionParticipant",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "TransactionParticipant"
            ],
            "x-parser-schema-id": "<anonymous-schema-557>"
          },
          "roleName": {
            "type": "string",
            "description": "enum: Buyer,Seller",
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-558>"
          },
          "position": {
            "type": "number",
            "description": "numeric position for the participant/roleName.",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-559>"
          },
          "givenName": {
            "type": "string",
            "description": "First Name of a person",
            "example": "Glenn",
            "x-parser-schema-id": "<anonymous-schema-233>"
          },
          "familyName": {
            "type": "string",
            "description": "Last Name of a person",
            "example": "Miller",
            "maxLength": 50,
            "x-parser-schema-id": "<anonymous-schema-262>"
          },
          "additionalName": {
            "type": "string",
            "description": "middleName or alternate name of the Person",
            "example": "Big",
            "x-parser-schema-id": "<anonymous-schema-560>"
          },
          "email": {
            "type": "string",
            "format": "email",
            "description": "Primary email address.",
            "example": "user@example.com",
            "x-parser-schema-id": "<anonymous-schema-561>"
          },
          "telephone": {
            "type": "string",
            "description": "Primary phone number.",
            "example": "+15558675309",
            "x-parser-schema-id": "<anonymous-schema-562>"
          },
          "affiliation": {
            "type": "array",
            "description": "person or organization associated with the participant",
            "items": {
              "type": "string",
              "format": "uri",
              "example": "https://{agentid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-564>"
            },
            "x-parser-schema-id": "<anonymous-schema-563>"
          }
        },
        "x-parser-schema-id": "TransactionParticipant"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "middleName or alternate name of the Person",
    "example": "Big",
    "x-parser-schema-id": "<anonymous-schema-560>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "TransactionParticipant",
        "x-range": "TransactionParticipant",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "TransactionParticipant"
            ],
            "x-parser-schema-id": "<anonymous-schema-557>"
          },
          "roleName": {
            "type": "string",
            "description": "enum: Buyer,Seller",
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-558>"
          },
          "position": {
            "type": "number",
            "description": "numeric position for the participant/roleName.",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-559>"
          },
          "givenName": {
            "type": "string",
            "description": "First Name of a person",
            "example": "Glenn",
            "x-parser-schema-id": "<anonymous-schema-233>"
          },
          "familyName": {
            "type": "string",
            "description": "Last Name of a person",
            "example": "Miller",
            "maxLength": 50,
            "x-parser-schema-id": "<anonymous-schema-262>"
          },
          "additionalName": {
            "type": "string",
            "description": "middleName or alternate name of the Person",
            "example": "Big",
            "x-parser-schema-id": "<anonymous-schema-560>"
          },
          "email": {
            "type": "string",
            "format": "email",
            "description": "Primary email address.",
            "example": "user@example.com",
            "x-parser-schema-id": "<anonymous-schema-561>"
          },
          "telephone": {
            "type": "string",
            "description": "Primary phone number.",
            "example": "+15558675309",
            "x-parser-schema-id": "<anonymous-schema-562>"
          },
          "affiliation": {
            "type": "array",
            "description": "person or organization associated with the participant",
            "items": {
              "type": "string",
              "format": "uri",
              "example": "https://{agentid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-564>"
            },
            "x-parser-schema-id": "<anonymous-schema-563>"
          }
        },
        "x-parser-schema-id": "TransactionParticipant"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "email",
    "description": "Primary email address.",
    "example": "user@example.com",
    "x-parser-schema-id": "<anonymous-schema-561>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "TransactionParticipant",
        "x-range": "TransactionParticipant",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "TransactionParticipant"
            ],
            "x-parser-schema-id": "<anonymous-schema-557>"
          },
          "roleName": {
            "type": "string",
            "description": "enum: Buyer,Seller",
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-558>"
          },
          "position": {
            "type": "number",
            "description": "numeric position for the participant/roleName.",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-559>"
          },
          "givenName": {
            "type": "string",
            "description": "First Name of a person",
            "example": "Glenn",
            "x-parser-schema-id": "<anonymous-schema-233>"
          },
          "familyName": {
            "type": "string",
            "description": "Last Name of a person",
            "example": "Miller",
            "maxLength": 50,
            "x-parser-schema-id": "<anonymous-schema-262>"
          },
          "additionalName": {
            "type": "string",
            "description": "middleName or alternate name of the Person",
            "example": "Big",
            "x-parser-schema-id": "<anonymous-schema-560>"
          },
          "email": {
            "type": "string",
            "format": "email",
            "description": "Primary email address.",
            "example": "user@example.com",
            "x-parser-schema-id": "<anonymous-schema-561>"
          },
          "telephone": {
            "type": "string",
            "description": "Primary phone number.",
            "example": "+15558675309",
            "x-parser-schema-id": "<anonymous-schema-562>"
          },
          "affiliation": {
            "type": "array",
            "description": "person or organization associated with the participant",
            "items": {
              "type": "string",
              "format": "uri",
              "example": "https://{agentid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-564>"
            },
            "x-parser-schema-id": "<anonymous-schema-563>"
          }
        },
        "x-parser-schema-id": "TransactionParticipant"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "Primary phone number.",
    "example": "+15558675309",
    "x-parser-schema-id": "<anonymous-schema-562>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "TransactionParticipant",
        "x-range": "TransactionParticipant",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "TransactionParticipant"
            ],
            "x-parser-schema-id": "<anonymous-schema-557>"
          },
          "roleName": {
            "type": "string",
            "description": "enum: Buyer,Seller",
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-558>"
          },
          "position": {
            "type": "number",
            "description": "numeric position for the participant/roleName.",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-559>"
          },
          "givenName": {
            "type": "string",
            "description": "First Name of a person",
            "example": "Glenn",
            "x-parser-schema-id": "<anonymous-schema-233>"
          },
          "familyName": {
            "type": "string",
            "description": "Last Name of a person",
            "example": "Miller",
            "maxLength": 50,
            "x-parser-schema-id": "<anonymous-schema-262>"
          },
          "additionalName": {
            "type": "string",
            "description": "middleName or alternate name of the Person",
            "example": "Big",
            "x-parser-schema-id": "<anonymous-schema-560>"
          },
          "email": {
            "type": "string",
            "format": "email",
            "description": "Primary email address.",
            "example": "user@example.com",
            "x-parser-schema-id": "<anonymous-schema-561>"
          },
          "telephone": {
            "type": "string",
            "description": "Primary phone number.",
            "example": "+15558675309",
            "x-parser-schema-id": "<anonymous-schema-562>"
          },
          "affiliation": {
            "type": "array",
            "description": "person or organization associated with the participant",
            "items": {
              "type": "string",
              "format": "uri",
              "example": "https://{agentid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-564>"
            },
            "x-parser-schema-id": "<anonymous-schema-563>"
          }
        },
        "x-parser-schema-id": "TransactionParticipant"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "array",
    "description": "person or organization associated with the participant",
    "items": {
      "type": "string",
      "format": "uri",
      "example": "https://{agentid}.example.com/profile/card#me",
      "x-parser-schema-id": "<anonymous-schema-564>"
    },
    "x-parser-schema-id": "<anonymous-schema-563>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "TransactionParticipant",
        "x-range": "TransactionParticipant",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "TransactionParticipant"
            ],
            "x-parser-schema-id": "<anonymous-schema-557>"
          },
          "roleName": {
            "type": "string",
            "description": "enum: Buyer,Seller",
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-558>"
          },
          "position": {
            "type": "number",
            "description": "numeric position for the participant/roleName.",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-559>"
          },
          "givenName": {
            "type": "string",
            "description": "First Name of a person",
            "example": "Glenn",
            "x-parser-schema-id": "<anonymous-schema-233>"
          },
          "familyName": {
            "type": "string",
            "description": "Last Name of a person",
            "example": "Miller",
            "maxLength": 50,
            "x-parser-schema-id": "<anonymous-schema-262>"
          },
          "additionalName": {
            "type": "string",
            "description": "middleName or alternate name of the Person",
            "example": "Big",
            "x-parser-schema-id": "<anonymous-schema-560>"
          },
          "email": {
            "type": "string",
            "format": "email",
            "description": "Primary email address.",
            "example": "user@example.com",
            "x-parser-schema-id": "<anonymous-schema-561>"
          },
          "telephone": {
            "type": "string",
            "description": "Primary phone number.",
            "example": "+15558675309",
            "x-parser-schema-id": "<anonymous-schema-562>"
          },
          "affiliation": {
            "type": "array",
            "description": "person or organization associated with the participant",
            "items": {
              "type": "string",
              "format": "uri",
              "example": "https://{agentid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-564>"
            },
            "x-parser-schema-id": "<anonymous-schema-563>"
          }
        },
        "x-parser-schema-id": "TransactionParticipant"
      },
      "options": {}
    }
  }
}












### Example

```json
{
  "type": "TransactionParticipant",
  "roleName": "Buyer",
  "position": 1,
  "givenName": "Glenn",
  "familyName": "Miller",
  "additionalName": "Big",
  "email": "user@example.com",
  "telephone": "+15558675309",
  "affiliation": [
    "https://{agentid}.example.com/profile/card#me"
  ]
}
```

