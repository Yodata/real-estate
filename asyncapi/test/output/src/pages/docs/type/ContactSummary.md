

---
title: ContactSummary
---

{
  "type": {
    "_json": {
      "type": "string",
      "description": "\"ContactSummary\"",
      "enum": [
        "ContactSummaryReport"
      ],
      "x-parser-schema-id": "<anonymous-schema-251>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ContactSummary",
          "x-range": "ContactSummary",
          "description": "minimal schema of a customer for report messages",
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ContactSummary\"",
              "enum": [
                "ContactSummaryReport"
              ],
              "x-parser-schema-id": "<anonymous-schema-251>"
            },
            "batchId": {
              "type": "string",
              "description": "BATCH-ID",
              "example": "0001",
              "x-parser-schema-id": "<anonymous-schema-252>"
            },
            "author": {
              "type": "string",
              "format": "uri",
              "description": "OFFICE-ID",
              "example": "https://{officeid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-253>"
            },
            "transactionType": {
              "type": "string",
              "description": "TRANS-TYPE",
              "x-range": "TransactionType",
              "example": "SalesTransactionType",
              "x-parser-schema-id": "<anonymous-schema-254>"
            },
            "transactionId": {
              "type": "string",
              "description": "TRANS-NO",
              "example": "0000097123",
              "x-parser-schema-id": "<anonymous-schema-255>"
            },
            "transactionRole": {
              "type": "string",
              "x-range": [
                "Buyer",
                "Seller",
                "BuyerAgent",
                "ListingAgent"
              ],
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-256>"
            },
            "position": {
              "type": "number",
              "description": "ADJUSTMENT-SEQUENCE",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-257>"
            },
            "assoicatedAgent": {
              "type": "string",
              "format": "uri",
              "description": "ASSOC-ID",
              "example": "https://{userid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-258>"
            },
            "object": {
              "type": "object",
              "description": "the Customer",
              "x-range": [
                "Person",
                "Organization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-260>"
                },
                "givenName": {
                  "type": "string",
                  "description": "First Name of a person",
                  "example": "Glenn",
                  "x-parser-schema-id": "<anonymous-schema-233>"
                },
                "additionalName": {
                  "type": "string",
                  "description": "CUSTOMER-MIDDLE-INITIAL",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-261>"
                },
                "familyName": {
                  "type": "string",
                  "description": "Last Name of a person",
                  "example": "Miller",
                  "maxLength": 50,
                  "x-parser-schema-id": "<anonymous-schema-262>"
                },
                "gender": {
                  "type": "string",
                  "description": "gender of the Customer (why?)",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-263>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-259>"
            }
          },
          "x-parser-schema-id": "ContactSummary"
        },
        "options": {}
      }
    }
  },
  "batchId": {
    "_json": {
      "type": "string",
      "description": "BATCH-ID",
      "example": "0001",
      "x-parser-schema-id": "<anonymous-schema-252>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ContactSummary",
          "x-range": "ContactSummary",
          "description": "minimal schema of a customer for report messages",
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ContactSummary\"",
              "enum": [
                "ContactSummaryReport"
              ],
              "x-parser-schema-id": "<anonymous-schema-251>"
            },
            "batchId": {
              "type": "string",
              "description": "BATCH-ID",
              "example": "0001",
              "x-parser-schema-id": "<anonymous-schema-252>"
            },
            "author": {
              "type": "string",
              "format": "uri",
              "description": "OFFICE-ID",
              "example": "https://{officeid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-253>"
            },
            "transactionType": {
              "type": "string",
              "description": "TRANS-TYPE",
              "x-range": "TransactionType",
              "example": "SalesTransactionType",
              "x-parser-schema-id": "<anonymous-schema-254>"
            },
            "transactionId": {
              "type": "string",
              "description": "TRANS-NO",
              "example": "0000097123",
              "x-parser-schema-id": "<anonymous-schema-255>"
            },
            "transactionRole": {
              "type": "string",
              "x-range": [
                "Buyer",
                "Seller",
                "BuyerAgent",
                "ListingAgent"
              ],
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-256>"
            },
            "position": {
              "type": "number",
              "description": "ADJUSTMENT-SEQUENCE",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-257>"
            },
            "assoicatedAgent": {
              "type": "string",
              "format": "uri",
              "description": "ASSOC-ID",
              "example": "https://{userid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-258>"
            },
            "object": {
              "type": "object",
              "description": "the Customer",
              "x-range": [
                "Person",
                "Organization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-260>"
                },
                "givenName": {
                  "type": "string",
                  "description": "First Name of a person",
                  "example": "Glenn",
                  "x-parser-schema-id": "<anonymous-schema-233>"
                },
                "additionalName": {
                  "type": "string",
                  "description": "CUSTOMER-MIDDLE-INITIAL",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-261>"
                },
                "familyName": {
                  "type": "string",
                  "description": "Last Name of a person",
                  "example": "Miller",
                  "maxLength": 50,
                  "x-parser-schema-id": "<anonymous-schema-262>"
                },
                "gender": {
                  "type": "string",
                  "description": "gender of the Customer (why?)",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-263>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-259>"
            }
          },
          "x-parser-schema-id": "ContactSummary"
        },
        "options": {}
      }
    }
  },
  "author": {
    "_json": {
      "type": "string",
      "format": "uri",
      "description": "OFFICE-ID",
      "example": "https://{officeid}.example.com/profile/card#me",
      "x-parser-schema-id": "<anonymous-schema-253>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ContactSummary",
          "x-range": "ContactSummary",
          "description": "minimal schema of a customer for report messages",
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ContactSummary\"",
              "enum": [
                "ContactSummaryReport"
              ],
              "x-parser-schema-id": "<anonymous-schema-251>"
            },
            "batchId": {
              "type": "string",
              "description": "BATCH-ID",
              "example": "0001",
              "x-parser-schema-id": "<anonymous-schema-252>"
            },
            "author": {
              "type": "string",
              "format": "uri",
              "description": "OFFICE-ID",
              "example": "https://{officeid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-253>"
            },
            "transactionType": {
              "type": "string",
              "description": "TRANS-TYPE",
              "x-range": "TransactionType",
              "example": "SalesTransactionType",
              "x-parser-schema-id": "<anonymous-schema-254>"
            },
            "transactionId": {
              "type": "string",
              "description": "TRANS-NO",
              "example": "0000097123",
              "x-parser-schema-id": "<anonymous-schema-255>"
            },
            "transactionRole": {
              "type": "string",
              "x-range": [
                "Buyer",
                "Seller",
                "BuyerAgent",
                "ListingAgent"
              ],
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-256>"
            },
            "position": {
              "type": "number",
              "description": "ADJUSTMENT-SEQUENCE",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-257>"
            },
            "assoicatedAgent": {
              "type": "string",
              "format": "uri",
              "description": "ASSOC-ID",
              "example": "https://{userid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-258>"
            },
            "object": {
              "type": "object",
              "description": "the Customer",
              "x-range": [
                "Person",
                "Organization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-260>"
                },
                "givenName": {
                  "type": "string",
                  "description": "First Name of a person",
                  "example": "Glenn",
                  "x-parser-schema-id": "<anonymous-schema-233>"
                },
                "additionalName": {
                  "type": "string",
                  "description": "CUSTOMER-MIDDLE-INITIAL",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-261>"
                },
                "familyName": {
                  "type": "string",
                  "description": "Last Name of a person",
                  "example": "Miller",
                  "maxLength": 50,
                  "x-parser-schema-id": "<anonymous-schema-262>"
                },
                "gender": {
                  "type": "string",
                  "description": "gender of the Customer (why?)",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-263>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-259>"
            }
          },
          "x-parser-schema-id": "ContactSummary"
        },
        "options": {}
      }
    }
  },
  "transactionType": {
    "_json": {
      "type": "string",
      "description": "TRANS-TYPE",
      "x-range": "TransactionType",
      "example": "SalesTransactionType",
      "x-parser-schema-id": "<anonymous-schema-254>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ContactSummary",
          "x-range": "ContactSummary",
          "description": "minimal schema of a customer for report messages",
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ContactSummary\"",
              "enum": [
                "ContactSummaryReport"
              ],
              "x-parser-schema-id": "<anonymous-schema-251>"
            },
            "batchId": {
              "type": "string",
              "description": "BATCH-ID",
              "example": "0001",
              "x-parser-schema-id": "<anonymous-schema-252>"
            },
            "author": {
              "type": "string",
              "format": "uri",
              "description": "OFFICE-ID",
              "example": "https://{officeid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-253>"
            },
            "transactionType": {
              "type": "string",
              "description": "TRANS-TYPE",
              "x-range": "TransactionType",
              "example": "SalesTransactionType",
              "x-parser-schema-id": "<anonymous-schema-254>"
            },
            "transactionId": {
              "type": "string",
              "description": "TRANS-NO",
              "example": "0000097123",
              "x-parser-schema-id": "<anonymous-schema-255>"
            },
            "transactionRole": {
              "type": "string",
              "x-range": [
                "Buyer",
                "Seller",
                "BuyerAgent",
                "ListingAgent"
              ],
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-256>"
            },
            "position": {
              "type": "number",
              "description": "ADJUSTMENT-SEQUENCE",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-257>"
            },
            "assoicatedAgent": {
              "type": "string",
              "format": "uri",
              "description": "ASSOC-ID",
              "example": "https://{userid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-258>"
            },
            "object": {
              "type": "object",
              "description": "the Customer",
              "x-range": [
                "Person",
                "Organization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-260>"
                },
                "givenName": {
                  "type": "string",
                  "description": "First Name of a person",
                  "example": "Glenn",
                  "x-parser-schema-id": "<anonymous-schema-233>"
                },
                "additionalName": {
                  "type": "string",
                  "description": "CUSTOMER-MIDDLE-INITIAL",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-261>"
                },
                "familyName": {
                  "type": "string",
                  "description": "Last Name of a person",
                  "example": "Miller",
                  "maxLength": 50,
                  "x-parser-schema-id": "<anonymous-schema-262>"
                },
                "gender": {
                  "type": "string",
                  "description": "gender of the Customer (why?)",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-263>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-259>"
            }
          },
          "x-parser-schema-id": "ContactSummary"
        },
        "options": {}
      }
    }
  },
  "transactionId": {
    "_json": {
      "type": "string",
      "description": "TRANS-NO",
      "example": "0000097123",
      "x-parser-schema-id": "<anonymous-schema-255>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ContactSummary",
          "x-range": "ContactSummary",
          "description": "minimal schema of a customer for report messages",
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ContactSummary\"",
              "enum": [
                "ContactSummaryReport"
              ],
              "x-parser-schema-id": "<anonymous-schema-251>"
            },
            "batchId": {
              "type": "string",
              "description": "BATCH-ID",
              "example": "0001",
              "x-parser-schema-id": "<anonymous-schema-252>"
            },
            "author": {
              "type": "string",
              "format": "uri",
              "description": "OFFICE-ID",
              "example": "https://{officeid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-253>"
            },
            "transactionType": {
              "type": "string",
              "description": "TRANS-TYPE",
              "x-range": "TransactionType",
              "example": "SalesTransactionType",
              "x-parser-schema-id": "<anonymous-schema-254>"
            },
            "transactionId": {
              "type": "string",
              "description": "TRANS-NO",
              "example": "0000097123",
              "x-parser-schema-id": "<anonymous-schema-255>"
            },
            "transactionRole": {
              "type": "string",
              "x-range": [
                "Buyer",
                "Seller",
                "BuyerAgent",
                "ListingAgent"
              ],
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-256>"
            },
            "position": {
              "type": "number",
              "description": "ADJUSTMENT-SEQUENCE",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-257>"
            },
            "assoicatedAgent": {
              "type": "string",
              "format": "uri",
              "description": "ASSOC-ID",
              "example": "https://{userid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-258>"
            },
            "object": {
              "type": "object",
              "description": "the Customer",
              "x-range": [
                "Person",
                "Organization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-260>"
                },
                "givenName": {
                  "type": "string",
                  "description": "First Name of a person",
                  "example": "Glenn",
                  "x-parser-schema-id": "<anonymous-schema-233>"
                },
                "additionalName": {
                  "type": "string",
                  "description": "CUSTOMER-MIDDLE-INITIAL",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-261>"
                },
                "familyName": {
                  "type": "string",
                  "description": "Last Name of a person",
                  "example": "Miller",
                  "maxLength": 50,
                  "x-parser-schema-id": "<anonymous-schema-262>"
                },
                "gender": {
                  "type": "string",
                  "description": "gender of the Customer (why?)",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-263>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-259>"
            }
          },
          "x-parser-schema-id": "ContactSummary"
        },
        "options": {}
      }
    }
  },
  "transactionRole": {
    "_json": {
      "type": "string",
      "x-range": [
        "Buyer",
        "Seller",
        "BuyerAgent",
        "ListingAgent"
      ],
      "enum": [
        "Buyer",
        "Seller"
      ],
      "x-parser-schema-id": "<anonymous-schema-256>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ContactSummary",
          "x-range": "ContactSummary",
          "description": "minimal schema of a customer for report messages",
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ContactSummary\"",
              "enum": [
                "ContactSummaryReport"
              ],
              "x-parser-schema-id": "<anonymous-schema-251>"
            },
            "batchId": {
              "type": "string",
              "description": "BATCH-ID",
              "example": "0001",
              "x-parser-schema-id": "<anonymous-schema-252>"
            },
            "author": {
              "type": "string",
              "format": "uri",
              "description": "OFFICE-ID",
              "example": "https://{officeid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-253>"
            },
            "transactionType": {
              "type": "string",
              "description": "TRANS-TYPE",
              "x-range": "TransactionType",
              "example": "SalesTransactionType",
              "x-parser-schema-id": "<anonymous-schema-254>"
            },
            "transactionId": {
              "type": "string",
              "description": "TRANS-NO",
              "example": "0000097123",
              "x-parser-schema-id": "<anonymous-schema-255>"
            },
            "transactionRole": {
              "type": "string",
              "x-range": [
                "Buyer",
                "Seller",
                "BuyerAgent",
                "ListingAgent"
              ],
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-256>"
            },
            "position": {
              "type": "number",
              "description": "ADJUSTMENT-SEQUENCE",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-257>"
            },
            "assoicatedAgent": {
              "type": "string",
              "format": "uri",
              "description": "ASSOC-ID",
              "example": "https://{userid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-258>"
            },
            "object": {
              "type": "object",
              "description": "the Customer",
              "x-range": [
                "Person",
                "Organization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-260>"
                },
                "givenName": {
                  "type": "string",
                  "description": "First Name of a person",
                  "example": "Glenn",
                  "x-parser-schema-id": "<anonymous-schema-233>"
                },
                "additionalName": {
                  "type": "string",
                  "description": "CUSTOMER-MIDDLE-INITIAL",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-261>"
                },
                "familyName": {
                  "type": "string",
                  "description": "Last Name of a person",
                  "example": "Miller",
                  "maxLength": 50,
                  "x-parser-schema-id": "<anonymous-schema-262>"
                },
                "gender": {
                  "type": "string",
                  "description": "gender of the Customer (why?)",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-263>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-259>"
            }
          },
          "x-parser-schema-id": "ContactSummary"
        },
        "options": {}
      }
    }
  },
  "position": {
    "_json": {
      "type": "number",
      "description": "ADJUSTMENT-SEQUENCE",
      "example": 1,
      "x-parser-schema-id": "<anonymous-schema-257>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ContactSummary",
          "x-range": "ContactSummary",
          "description": "minimal schema of a customer for report messages",
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ContactSummary\"",
              "enum": [
                "ContactSummaryReport"
              ],
              "x-parser-schema-id": "<anonymous-schema-251>"
            },
            "batchId": {
              "type": "string",
              "description": "BATCH-ID",
              "example": "0001",
              "x-parser-schema-id": "<anonymous-schema-252>"
            },
            "author": {
              "type": "string",
              "format": "uri",
              "description": "OFFICE-ID",
              "example": "https://{officeid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-253>"
            },
            "transactionType": {
              "type": "string",
              "description": "TRANS-TYPE",
              "x-range": "TransactionType",
              "example": "SalesTransactionType",
              "x-parser-schema-id": "<anonymous-schema-254>"
            },
            "transactionId": {
              "type": "string",
              "description": "TRANS-NO",
              "example": "0000097123",
              "x-parser-schema-id": "<anonymous-schema-255>"
            },
            "transactionRole": {
              "type": "string",
              "x-range": [
                "Buyer",
                "Seller",
                "BuyerAgent",
                "ListingAgent"
              ],
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-256>"
            },
            "position": {
              "type": "number",
              "description": "ADJUSTMENT-SEQUENCE",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-257>"
            },
            "assoicatedAgent": {
              "type": "string",
              "format": "uri",
              "description": "ASSOC-ID",
              "example": "https://{userid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-258>"
            },
            "object": {
              "type": "object",
              "description": "the Customer",
              "x-range": [
                "Person",
                "Organization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-260>"
                },
                "givenName": {
                  "type": "string",
                  "description": "First Name of a person",
                  "example": "Glenn",
                  "x-parser-schema-id": "<anonymous-schema-233>"
                },
                "additionalName": {
                  "type": "string",
                  "description": "CUSTOMER-MIDDLE-INITIAL",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-261>"
                },
                "familyName": {
                  "type": "string",
                  "description": "Last Name of a person",
                  "example": "Miller",
                  "maxLength": 50,
                  "x-parser-schema-id": "<anonymous-schema-262>"
                },
                "gender": {
                  "type": "string",
                  "description": "gender of the Customer (why?)",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-263>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-259>"
            }
          },
          "x-parser-schema-id": "ContactSummary"
        },
        "options": {}
      }
    }
  },
  "assoicatedAgent": {
    "_json": {
      "type": "string",
      "format": "uri",
      "description": "ASSOC-ID",
      "example": "https://{userid}.example.com/profile/card#me",
      "x-parser-schema-id": "<anonymous-schema-258>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ContactSummary",
          "x-range": "ContactSummary",
          "description": "minimal schema of a customer for report messages",
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ContactSummary\"",
              "enum": [
                "ContactSummaryReport"
              ],
              "x-parser-schema-id": "<anonymous-schema-251>"
            },
            "batchId": {
              "type": "string",
              "description": "BATCH-ID",
              "example": "0001",
              "x-parser-schema-id": "<anonymous-schema-252>"
            },
            "author": {
              "type": "string",
              "format": "uri",
              "description": "OFFICE-ID",
              "example": "https://{officeid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-253>"
            },
            "transactionType": {
              "type": "string",
              "description": "TRANS-TYPE",
              "x-range": "TransactionType",
              "example": "SalesTransactionType",
              "x-parser-schema-id": "<anonymous-schema-254>"
            },
            "transactionId": {
              "type": "string",
              "description": "TRANS-NO",
              "example": "0000097123",
              "x-parser-schema-id": "<anonymous-schema-255>"
            },
            "transactionRole": {
              "type": "string",
              "x-range": [
                "Buyer",
                "Seller",
                "BuyerAgent",
                "ListingAgent"
              ],
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-256>"
            },
            "position": {
              "type": "number",
              "description": "ADJUSTMENT-SEQUENCE",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-257>"
            },
            "assoicatedAgent": {
              "type": "string",
              "format": "uri",
              "description": "ASSOC-ID",
              "example": "https://{userid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-258>"
            },
            "object": {
              "type": "object",
              "description": "the Customer",
              "x-range": [
                "Person",
                "Organization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-260>"
                },
                "givenName": {
                  "type": "string",
                  "description": "First Name of a person",
                  "example": "Glenn",
                  "x-parser-schema-id": "<anonymous-schema-233>"
                },
                "additionalName": {
                  "type": "string",
                  "description": "CUSTOMER-MIDDLE-INITIAL",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-261>"
                },
                "familyName": {
                  "type": "string",
                  "description": "Last Name of a person",
                  "example": "Miller",
                  "maxLength": 50,
                  "x-parser-schema-id": "<anonymous-schema-262>"
                },
                "gender": {
                  "type": "string",
                  "description": "gender of the Customer (why?)",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-263>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-259>"
            }
          },
          "x-parser-schema-id": "ContactSummary"
        },
        "options": {}
      }
    }
  },
  "object": {
    "_json": {
      "type": "object",
      "description": "the Customer",
      "x-range": [
        "Person",
        "Organization"
      ],
      "properties": {
        "type": {
          "type": "string",
          "description": "The item type (Linked-Data @type)",
          "x-parser-schema-id": "<anonymous-schema-260>"
        },
        "givenName": {
          "type": "string",
          "description": "First Name of a person",
          "example": "Glenn",
          "x-parser-schema-id": "<anonymous-schema-233>"
        },
        "additionalName": {
          "type": "string",
          "description": "CUSTOMER-MIDDLE-INITIAL",
          "example": "M",
          "x-parser-schema-id": "<anonymous-schema-261>"
        },
        "familyName": {
          "type": "string",
          "description": "Last Name of a person",
          "example": "Miller",
          "maxLength": 50,
          "x-parser-schema-id": "<anonymous-schema-262>"
        },
        "gender": {
          "type": "string",
          "description": "gender of the Customer (why?)",
          "example": "M",
          "x-parser-schema-id": "<anonymous-schema-263>"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-259>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ContactSummary",
          "x-range": "ContactSummary",
          "description": "minimal schema of a customer for report messages",
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ContactSummary\"",
              "enum": [
                "ContactSummaryReport"
              ],
              "x-parser-schema-id": "<anonymous-schema-251>"
            },
            "batchId": {
              "type": "string",
              "description": "BATCH-ID",
              "example": "0001",
              "x-parser-schema-id": "<anonymous-schema-252>"
            },
            "author": {
              "type": "string",
              "format": "uri",
              "description": "OFFICE-ID",
              "example": "https://{officeid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-253>"
            },
            "transactionType": {
              "type": "string",
              "description": "TRANS-TYPE",
              "x-range": "TransactionType",
              "example": "SalesTransactionType",
              "x-parser-schema-id": "<anonymous-schema-254>"
            },
            "transactionId": {
              "type": "string",
              "description": "TRANS-NO",
              "example": "0000097123",
              "x-parser-schema-id": "<anonymous-schema-255>"
            },
            "transactionRole": {
              "type": "string",
              "x-range": [
                "Buyer",
                "Seller",
                "BuyerAgent",
                "ListingAgent"
              ],
              "enum": [
                "Buyer",
                "Seller"
              ],
              "x-parser-schema-id": "<anonymous-schema-256>"
            },
            "position": {
              "type": "number",
              "description": "ADJUSTMENT-SEQUENCE",
              "example": 1,
              "x-parser-schema-id": "<anonymous-schema-257>"
            },
            "assoicatedAgent": {
              "type": "string",
              "format": "uri",
              "description": "ASSOC-ID",
              "example": "https://{userid}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-258>"
            },
            "object": {
              "type": "object",
              "description": "the Customer",
              "x-range": [
                "Person",
                "Organization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-260>"
                },
                "givenName": {
                  "type": "string",
                  "description": "First Name of a person",
                  "example": "Glenn",
                  "x-parser-schema-id": "<anonymous-schema-233>"
                },
                "additionalName": {
                  "type": "string",
                  "description": "CUSTOMER-MIDDLE-INITIAL",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-261>"
                },
                "familyName": {
                  "type": "string",
                  "description": "Last Name of a person",
                  "example": "Miller",
                  "maxLength": 50,
                  "x-parser-schema-id": "<anonymous-schema-262>"
                },
                "gender": {
                  "type": "string",
                  "description": "gender of the Customer (why?)",
                  "example": "M",
                  "x-parser-schema-id": "<anonymous-schema-263>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-259>"
            }
          },
          "x-parser-schema-id": "ContactSummary"
        },
        "options": {}
      }
    }
  }
}


# ContactSummary

minimal schema of a customer for report messages



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "description": "\"ContactSummary\"",
    "enum": [
      "ContactSummaryReport"
    ],
    "x-parser-schema-id": "<anonymous-schema-251>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ContactSummary",
        "x-range": "ContactSummary",
        "description": "minimal schema of a customer for report messages",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ContactSummary\"",
            "enum": [
              "ContactSummaryReport"
            ],
            "x-parser-schema-id": "<anonymous-schema-251>"
          },
          "batchId": {
            "type": "string",
            "description": "BATCH-ID",
            "example": "0001",
            "x-parser-schema-id": "<anonymous-schema-252>"
          },
          "author": {
            "type": "string",
            "format": "uri",
            "description": "OFFICE-ID",
            "example": "https://{officeid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-253>"
          },
          "transactionType": {
            "type": "string",
            "description": "TRANS-TYPE",
            "x-range": "TransactionType",
            "example": "SalesTransactionType",
            "x-parser-schema-id": "<anonymous-schema-254>"
          },
          "transactionId": {
            "type": "string",
            "description": "TRANS-NO",
            "example": "0000097123",
            "x-parser-schema-id": "<anonymous-schema-255>"
          },
          "transactionRole": {
            "type": "string",
            "x-range": [
              "Buyer",
              "Seller",
              "BuyerAgent",
              "ListingAgent"
            ],
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-256>"
          },
          "position": {
            "type": "number",
            "description": "ADJUSTMENT-SEQUENCE",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-257>"
          },
          "assoicatedAgent": {
            "type": "string",
            "format": "uri",
            "description": "ASSOC-ID",
            "example": "https://{userid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-258>"
          },
          "object": {
            "type": "object",
            "description": "the Customer",
            "x-range": [
              "Person",
              "Organization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-260>"
              },
              "givenName": {
                "type": "string",
                "description": "First Name of a person",
                "example": "Glenn",
                "x-parser-schema-id": "<anonymous-schema-233>"
              },
              "additionalName": {
                "type": "string",
                "description": "CUSTOMER-MIDDLE-INITIAL",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-261>"
              },
              "familyName": {
                "type": "string",
                "description": "Last Name of a person",
                "example": "Miller",
                "maxLength": 50,
                "x-parser-schema-id": "<anonymous-schema-262>"
              },
              "gender": {
                "type": "string",
                "description": "gender of the Customer (why?)",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-263>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-259>"
          }
        },
        "x-parser-schema-id": "ContactSummary"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "BATCH-ID",
    "example": "0001",
    "x-parser-schema-id": "<anonymous-schema-252>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ContactSummary",
        "x-range": "ContactSummary",
        "description": "minimal schema of a customer for report messages",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ContactSummary\"",
            "enum": [
              "ContactSummaryReport"
            ],
            "x-parser-schema-id": "<anonymous-schema-251>"
          },
          "batchId": {
            "type": "string",
            "description": "BATCH-ID",
            "example": "0001",
            "x-parser-schema-id": "<anonymous-schema-252>"
          },
          "author": {
            "type": "string",
            "format": "uri",
            "description": "OFFICE-ID",
            "example": "https://{officeid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-253>"
          },
          "transactionType": {
            "type": "string",
            "description": "TRANS-TYPE",
            "x-range": "TransactionType",
            "example": "SalesTransactionType",
            "x-parser-schema-id": "<anonymous-schema-254>"
          },
          "transactionId": {
            "type": "string",
            "description": "TRANS-NO",
            "example": "0000097123",
            "x-parser-schema-id": "<anonymous-schema-255>"
          },
          "transactionRole": {
            "type": "string",
            "x-range": [
              "Buyer",
              "Seller",
              "BuyerAgent",
              "ListingAgent"
            ],
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-256>"
          },
          "position": {
            "type": "number",
            "description": "ADJUSTMENT-SEQUENCE",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-257>"
          },
          "assoicatedAgent": {
            "type": "string",
            "format": "uri",
            "description": "ASSOC-ID",
            "example": "https://{userid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-258>"
          },
          "object": {
            "type": "object",
            "description": "the Customer",
            "x-range": [
              "Person",
              "Organization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-260>"
              },
              "givenName": {
                "type": "string",
                "description": "First Name of a person",
                "example": "Glenn",
                "x-parser-schema-id": "<anonymous-schema-233>"
              },
              "additionalName": {
                "type": "string",
                "description": "CUSTOMER-MIDDLE-INITIAL",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-261>"
              },
              "familyName": {
                "type": "string",
                "description": "Last Name of a person",
                "example": "Miller",
                "maxLength": 50,
                "x-parser-schema-id": "<anonymous-schema-262>"
              },
              "gender": {
                "type": "string",
                "description": "gender of the Customer (why?)",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-263>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-259>"
          }
        },
        "x-parser-schema-id": "ContactSummary"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "uri",
    "description": "OFFICE-ID",
    "example": "https://{officeid}.example.com/profile/card#me",
    "x-parser-schema-id": "<anonymous-schema-253>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ContactSummary",
        "x-range": "ContactSummary",
        "description": "minimal schema of a customer for report messages",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ContactSummary\"",
            "enum": [
              "ContactSummaryReport"
            ],
            "x-parser-schema-id": "<anonymous-schema-251>"
          },
          "batchId": {
            "type": "string",
            "description": "BATCH-ID",
            "example": "0001",
            "x-parser-schema-id": "<anonymous-schema-252>"
          },
          "author": {
            "type": "string",
            "format": "uri",
            "description": "OFFICE-ID",
            "example": "https://{officeid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-253>"
          },
          "transactionType": {
            "type": "string",
            "description": "TRANS-TYPE",
            "x-range": "TransactionType",
            "example": "SalesTransactionType",
            "x-parser-schema-id": "<anonymous-schema-254>"
          },
          "transactionId": {
            "type": "string",
            "description": "TRANS-NO",
            "example": "0000097123",
            "x-parser-schema-id": "<anonymous-schema-255>"
          },
          "transactionRole": {
            "type": "string",
            "x-range": [
              "Buyer",
              "Seller",
              "BuyerAgent",
              "ListingAgent"
            ],
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-256>"
          },
          "position": {
            "type": "number",
            "description": "ADJUSTMENT-SEQUENCE",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-257>"
          },
          "assoicatedAgent": {
            "type": "string",
            "format": "uri",
            "description": "ASSOC-ID",
            "example": "https://{userid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-258>"
          },
          "object": {
            "type": "object",
            "description": "the Customer",
            "x-range": [
              "Person",
              "Organization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-260>"
              },
              "givenName": {
                "type": "string",
                "description": "First Name of a person",
                "example": "Glenn",
                "x-parser-schema-id": "<anonymous-schema-233>"
              },
              "additionalName": {
                "type": "string",
                "description": "CUSTOMER-MIDDLE-INITIAL",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-261>"
              },
              "familyName": {
                "type": "string",
                "description": "Last Name of a person",
                "example": "Miller",
                "maxLength": 50,
                "x-parser-schema-id": "<anonymous-schema-262>"
              },
              "gender": {
                "type": "string",
                "description": "gender of the Customer (why?)",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-263>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-259>"
          }
        },
        "x-parser-schema-id": "ContactSummary"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "TRANS-TYPE",
    "x-range": "TransactionType",
    "example": "SalesTransactionType",
    "x-parser-schema-id": "<anonymous-schema-254>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ContactSummary",
        "x-range": "ContactSummary",
        "description": "minimal schema of a customer for report messages",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ContactSummary\"",
            "enum": [
              "ContactSummaryReport"
            ],
            "x-parser-schema-id": "<anonymous-schema-251>"
          },
          "batchId": {
            "type": "string",
            "description": "BATCH-ID",
            "example": "0001",
            "x-parser-schema-id": "<anonymous-schema-252>"
          },
          "author": {
            "type": "string",
            "format": "uri",
            "description": "OFFICE-ID",
            "example": "https://{officeid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-253>"
          },
          "transactionType": {
            "type": "string",
            "description": "TRANS-TYPE",
            "x-range": "TransactionType",
            "example": "SalesTransactionType",
            "x-parser-schema-id": "<anonymous-schema-254>"
          },
          "transactionId": {
            "type": "string",
            "description": "TRANS-NO",
            "example": "0000097123",
            "x-parser-schema-id": "<anonymous-schema-255>"
          },
          "transactionRole": {
            "type": "string",
            "x-range": [
              "Buyer",
              "Seller",
              "BuyerAgent",
              "ListingAgent"
            ],
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-256>"
          },
          "position": {
            "type": "number",
            "description": "ADJUSTMENT-SEQUENCE",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-257>"
          },
          "assoicatedAgent": {
            "type": "string",
            "format": "uri",
            "description": "ASSOC-ID",
            "example": "https://{userid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-258>"
          },
          "object": {
            "type": "object",
            "description": "the Customer",
            "x-range": [
              "Person",
              "Organization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-260>"
              },
              "givenName": {
                "type": "string",
                "description": "First Name of a person",
                "example": "Glenn",
                "x-parser-schema-id": "<anonymous-schema-233>"
              },
              "additionalName": {
                "type": "string",
                "description": "CUSTOMER-MIDDLE-INITIAL",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-261>"
              },
              "familyName": {
                "type": "string",
                "description": "Last Name of a person",
                "example": "Miller",
                "maxLength": 50,
                "x-parser-schema-id": "<anonymous-schema-262>"
              },
              "gender": {
                "type": "string",
                "description": "gender of the Customer (why?)",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-263>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-259>"
          }
        },
        "x-parser-schema-id": "ContactSummary"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "TRANS-NO",
    "example": "0000097123",
    "x-parser-schema-id": "<anonymous-schema-255>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ContactSummary",
        "x-range": "ContactSummary",
        "description": "minimal schema of a customer for report messages",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ContactSummary\"",
            "enum": [
              "ContactSummaryReport"
            ],
            "x-parser-schema-id": "<anonymous-schema-251>"
          },
          "batchId": {
            "type": "string",
            "description": "BATCH-ID",
            "example": "0001",
            "x-parser-schema-id": "<anonymous-schema-252>"
          },
          "author": {
            "type": "string",
            "format": "uri",
            "description": "OFFICE-ID",
            "example": "https://{officeid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-253>"
          },
          "transactionType": {
            "type": "string",
            "description": "TRANS-TYPE",
            "x-range": "TransactionType",
            "example": "SalesTransactionType",
            "x-parser-schema-id": "<anonymous-schema-254>"
          },
          "transactionId": {
            "type": "string",
            "description": "TRANS-NO",
            "example": "0000097123",
            "x-parser-schema-id": "<anonymous-schema-255>"
          },
          "transactionRole": {
            "type": "string",
            "x-range": [
              "Buyer",
              "Seller",
              "BuyerAgent",
              "ListingAgent"
            ],
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-256>"
          },
          "position": {
            "type": "number",
            "description": "ADJUSTMENT-SEQUENCE",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-257>"
          },
          "assoicatedAgent": {
            "type": "string",
            "format": "uri",
            "description": "ASSOC-ID",
            "example": "https://{userid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-258>"
          },
          "object": {
            "type": "object",
            "description": "the Customer",
            "x-range": [
              "Person",
              "Organization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-260>"
              },
              "givenName": {
                "type": "string",
                "description": "First Name of a person",
                "example": "Glenn",
                "x-parser-schema-id": "<anonymous-schema-233>"
              },
              "additionalName": {
                "type": "string",
                "description": "CUSTOMER-MIDDLE-INITIAL",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-261>"
              },
              "familyName": {
                "type": "string",
                "description": "Last Name of a person",
                "example": "Miller",
                "maxLength": 50,
                "x-parser-schema-id": "<anonymous-schema-262>"
              },
              "gender": {
                "type": "string",
                "description": "gender of the Customer (why?)",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-263>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-259>"
          }
        },
        "x-parser-schema-id": "ContactSummary"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "x-range": [
      "Buyer",
      "Seller",
      "BuyerAgent",
      "ListingAgent"
    ],
    "enum": [
      "Buyer",
      "Seller"
    ],
    "x-parser-schema-id": "<anonymous-schema-256>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ContactSummary",
        "x-range": "ContactSummary",
        "description": "minimal schema of a customer for report messages",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ContactSummary\"",
            "enum": [
              "ContactSummaryReport"
            ],
            "x-parser-schema-id": "<anonymous-schema-251>"
          },
          "batchId": {
            "type": "string",
            "description": "BATCH-ID",
            "example": "0001",
            "x-parser-schema-id": "<anonymous-schema-252>"
          },
          "author": {
            "type": "string",
            "format": "uri",
            "description": "OFFICE-ID",
            "example": "https://{officeid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-253>"
          },
          "transactionType": {
            "type": "string",
            "description": "TRANS-TYPE",
            "x-range": "TransactionType",
            "example": "SalesTransactionType",
            "x-parser-schema-id": "<anonymous-schema-254>"
          },
          "transactionId": {
            "type": "string",
            "description": "TRANS-NO",
            "example": "0000097123",
            "x-parser-schema-id": "<anonymous-schema-255>"
          },
          "transactionRole": {
            "type": "string",
            "x-range": [
              "Buyer",
              "Seller",
              "BuyerAgent",
              "ListingAgent"
            ],
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-256>"
          },
          "position": {
            "type": "number",
            "description": "ADJUSTMENT-SEQUENCE",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-257>"
          },
          "assoicatedAgent": {
            "type": "string",
            "format": "uri",
            "description": "ASSOC-ID",
            "example": "https://{userid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-258>"
          },
          "object": {
            "type": "object",
            "description": "the Customer",
            "x-range": [
              "Person",
              "Organization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-260>"
              },
              "givenName": {
                "type": "string",
                "description": "First Name of a person",
                "example": "Glenn",
                "x-parser-schema-id": "<anonymous-schema-233>"
              },
              "additionalName": {
                "type": "string",
                "description": "CUSTOMER-MIDDLE-INITIAL",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-261>"
              },
              "familyName": {
                "type": "string",
                "description": "Last Name of a person",
                "example": "Miller",
                "maxLength": 50,
                "x-parser-schema-id": "<anonymous-schema-262>"
              },
              "gender": {
                "type": "string",
                "description": "gender of the Customer (why?)",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-263>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-259>"
          }
        },
        "x-parser-schema-id": "ContactSummary"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "number",
    "description": "ADJUSTMENT-SEQUENCE",
    "example": 1,
    "x-parser-schema-id": "<anonymous-schema-257>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ContactSummary",
        "x-range": "ContactSummary",
        "description": "minimal schema of a customer for report messages",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ContactSummary\"",
            "enum": [
              "ContactSummaryReport"
            ],
            "x-parser-schema-id": "<anonymous-schema-251>"
          },
          "batchId": {
            "type": "string",
            "description": "BATCH-ID",
            "example": "0001",
            "x-parser-schema-id": "<anonymous-schema-252>"
          },
          "author": {
            "type": "string",
            "format": "uri",
            "description": "OFFICE-ID",
            "example": "https://{officeid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-253>"
          },
          "transactionType": {
            "type": "string",
            "description": "TRANS-TYPE",
            "x-range": "TransactionType",
            "example": "SalesTransactionType",
            "x-parser-schema-id": "<anonymous-schema-254>"
          },
          "transactionId": {
            "type": "string",
            "description": "TRANS-NO",
            "example": "0000097123",
            "x-parser-schema-id": "<anonymous-schema-255>"
          },
          "transactionRole": {
            "type": "string",
            "x-range": [
              "Buyer",
              "Seller",
              "BuyerAgent",
              "ListingAgent"
            ],
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-256>"
          },
          "position": {
            "type": "number",
            "description": "ADJUSTMENT-SEQUENCE",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-257>"
          },
          "assoicatedAgent": {
            "type": "string",
            "format": "uri",
            "description": "ASSOC-ID",
            "example": "https://{userid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-258>"
          },
          "object": {
            "type": "object",
            "description": "the Customer",
            "x-range": [
              "Person",
              "Organization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-260>"
              },
              "givenName": {
                "type": "string",
                "description": "First Name of a person",
                "example": "Glenn",
                "x-parser-schema-id": "<anonymous-schema-233>"
              },
              "additionalName": {
                "type": "string",
                "description": "CUSTOMER-MIDDLE-INITIAL",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-261>"
              },
              "familyName": {
                "type": "string",
                "description": "Last Name of a person",
                "example": "Miller",
                "maxLength": 50,
                "x-parser-schema-id": "<anonymous-schema-262>"
              },
              "gender": {
                "type": "string",
                "description": "gender of the Customer (why?)",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-263>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-259>"
          }
        },
        "x-parser-schema-id": "ContactSummary"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "uri",
    "description": "ASSOC-ID",
    "example": "https://{userid}.example.com/profile/card#me",
    "x-parser-schema-id": "<anonymous-schema-258>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ContactSummary",
        "x-range": "ContactSummary",
        "description": "minimal schema of a customer for report messages",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ContactSummary\"",
            "enum": [
              "ContactSummaryReport"
            ],
            "x-parser-schema-id": "<anonymous-schema-251>"
          },
          "batchId": {
            "type": "string",
            "description": "BATCH-ID",
            "example": "0001",
            "x-parser-schema-id": "<anonymous-schema-252>"
          },
          "author": {
            "type": "string",
            "format": "uri",
            "description": "OFFICE-ID",
            "example": "https://{officeid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-253>"
          },
          "transactionType": {
            "type": "string",
            "description": "TRANS-TYPE",
            "x-range": "TransactionType",
            "example": "SalesTransactionType",
            "x-parser-schema-id": "<anonymous-schema-254>"
          },
          "transactionId": {
            "type": "string",
            "description": "TRANS-NO",
            "example": "0000097123",
            "x-parser-schema-id": "<anonymous-schema-255>"
          },
          "transactionRole": {
            "type": "string",
            "x-range": [
              "Buyer",
              "Seller",
              "BuyerAgent",
              "ListingAgent"
            ],
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-256>"
          },
          "position": {
            "type": "number",
            "description": "ADJUSTMENT-SEQUENCE",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-257>"
          },
          "assoicatedAgent": {
            "type": "string",
            "format": "uri",
            "description": "ASSOC-ID",
            "example": "https://{userid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-258>"
          },
          "object": {
            "type": "object",
            "description": "the Customer",
            "x-range": [
              "Person",
              "Organization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-260>"
              },
              "givenName": {
                "type": "string",
                "description": "First Name of a person",
                "example": "Glenn",
                "x-parser-schema-id": "<anonymous-schema-233>"
              },
              "additionalName": {
                "type": "string",
                "description": "CUSTOMER-MIDDLE-INITIAL",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-261>"
              },
              "familyName": {
                "type": "string",
                "description": "Last Name of a person",
                "example": "Miller",
                "maxLength": 50,
                "x-parser-schema-id": "<anonymous-schema-262>"
              },
              "gender": {
                "type": "string",
                "description": "gender of the Customer (why?)",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-263>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-259>"
          }
        },
        "x-parser-schema-id": "ContactSummary"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "the Customer",
    "x-range": [
      "Person",
      "Organization"
    ],
    "properties": {
      "type": {
        "type": "string",
        "description": "The item type (Linked-Data @type)",
        "x-parser-schema-id": "<anonymous-schema-260>"
      },
      "givenName": {
        "type": "string",
        "description": "First Name of a person",
        "example": "Glenn",
        "x-parser-schema-id": "<anonymous-schema-233>"
      },
      "additionalName": {
        "type": "string",
        "description": "CUSTOMER-MIDDLE-INITIAL",
        "example": "M",
        "x-parser-schema-id": "<anonymous-schema-261>"
      },
      "familyName": {
        "type": "string",
        "description": "Last Name of a person",
        "example": "Miller",
        "maxLength": 50,
        "x-parser-schema-id": "<anonymous-schema-262>"
      },
      "gender": {
        "type": "string",
        "description": "gender of the Customer (why?)",
        "example": "M",
        "x-parser-schema-id": "<anonymous-schema-263>"
      }
    },
    "x-parser-schema-id": "<anonymous-schema-259>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ContactSummary",
        "x-range": "ContactSummary",
        "description": "minimal schema of a customer for report messages",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ContactSummary\"",
            "enum": [
              "ContactSummaryReport"
            ],
            "x-parser-schema-id": "<anonymous-schema-251>"
          },
          "batchId": {
            "type": "string",
            "description": "BATCH-ID",
            "example": "0001",
            "x-parser-schema-id": "<anonymous-schema-252>"
          },
          "author": {
            "type": "string",
            "format": "uri",
            "description": "OFFICE-ID",
            "example": "https://{officeid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-253>"
          },
          "transactionType": {
            "type": "string",
            "description": "TRANS-TYPE",
            "x-range": "TransactionType",
            "example": "SalesTransactionType",
            "x-parser-schema-id": "<anonymous-schema-254>"
          },
          "transactionId": {
            "type": "string",
            "description": "TRANS-NO",
            "example": "0000097123",
            "x-parser-schema-id": "<anonymous-schema-255>"
          },
          "transactionRole": {
            "type": "string",
            "x-range": [
              "Buyer",
              "Seller",
              "BuyerAgent",
              "ListingAgent"
            ],
            "enum": [
              "Buyer",
              "Seller"
            ],
            "x-parser-schema-id": "<anonymous-schema-256>"
          },
          "position": {
            "type": "number",
            "description": "ADJUSTMENT-SEQUENCE",
            "example": 1,
            "x-parser-schema-id": "<anonymous-schema-257>"
          },
          "assoicatedAgent": {
            "type": "string",
            "format": "uri",
            "description": "ASSOC-ID",
            "example": "https://{userid}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-258>"
          },
          "object": {
            "type": "object",
            "description": "the Customer",
            "x-range": [
              "Person",
              "Organization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-260>"
              },
              "givenName": {
                "type": "string",
                "description": "First Name of a person",
                "example": "Glenn",
                "x-parser-schema-id": "<anonymous-schema-233>"
              },
              "additionalName": {
                "type": "string",
                "description": "CUSTOMER-MIDDLE-INITIAL",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-261>"
              },
              "familyName": {
                "type": "string",
                "description": "Last Name of a person",
                "example": "Miller",
                "maxLength": 50,
                "x-parser-schema-id": "<anonymous-schema-262>"
              },
              "gender": {
                "type": "string",
                "description": "gender of the Customer (why?)",
                "example": "M",
                "x-parser-schema-id": "<anonymous-schema-263>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-259>"
          }
        },
        "x-parser-schema-id": "ContactSummary"
      },
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-260&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;the Customer&quot;,
        &quot;x-range&quot;: [
          &quot;Person&quot;,
          &quot;Organization&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-260&gt;&quot;
          },
          &quot;givenName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;First Name of a person&quot;,
            &quot;example&quot;: &quot;Glenn&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
          },
          &quot;additionalName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;CUSTOMER-MIDDLE-INITIAL&quot;,
            &quot;example&quot;: &quot;M&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-261&gt;&quot;
          },
          &quot;familyName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;Last Name of a person&quot;,
            &quot;example&quot;: &quot;Miller&quot;,
            &quot;maxLength&quot;: 50,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-262&gt;&quot;
          },
          &quot;gender&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;gender of the Customer (why?)&quot;,
            &quot;example&quot;: &quot;M&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-263&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-259&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;ContactSummary&quot;,
            &quot;x-range&quot;: &quot;ContactSummary&quot;,
            &quot;description&quot;: &quot;minimal schema of a customer for report messages&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;\&quot;ContactSummary\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;ContactSummaryReport&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-251&gt;&quot;
              },
              &quot;batchId&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;BATCH-ID&quot;,
                &quot;example&quot;: &quot;0001&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-252&gt;&quot;
              },
              &quot;author&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;OFFICE-ID&quot;,
                &quot;example&quot;: &quot;https://{officeid}.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-253&gt;&quot;
              },
              &quot;transactionType&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TRANS-TYPE&quot;,
                &quot;x-range&quot;: &quot;TransactionType&quot;,
                &quot;example&quot;: &quot;SalesTransactionType&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-254&gt;&quot;
              },
              &quot;transactionId&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TRANS-NO&quot;,
                &quot;example&quot;: &quot;0000097123&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-255&gt;&quot;
              },
              &quot;transactionRole&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-range&quot;: [
                  &quot;Buyer&quot;,
                  &quot;Seller&quot;,
                  &quot;BuyerAgent&quot;,
                  &quot;ListingAgent&quot;
                ],
                &quot;enum&quot;: [
                  &quot;Buyer&quot;,
                  &quot;Seller&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-256&gt;&quot;
              },
              &quot;position&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;ADJUSTMENT-SEQUENCE&quot;,
                &quot;example&quot;: 1,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-257&gt;&quot;
              },
              &quot;assoicatedAgent&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;ASSOC-ID&quot;,
                &quot;example&quot;: &quot;https://{userid}.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-258&gt;&quot;
              },
              &quot;object&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the Customer&quot;,
                &quot;x-range&quot;: [
                  &quot;Person&quot;,
                  &quot;Organization&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-260&gt;&quot;
                  },
                  &quot;givenName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;First Name of a person&quot;,
                    &quot;example&quot;: &quot;Glenn&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
                  },
                  &quot;additionalName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;CUSTOMER-MIDDLE-INITIAL&quot;,
                    &quot;example&quot;: &quot;M&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-261&gt;&quot;
                  },
                  &quot;familyName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;Last Name of a person&quot;,
                    &quot;example&quot;: &quot;Miller&quot;,
                    &quot;maxLength&quot;: 50,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-262&gt;&quot;
                  },
                  &quot;gender&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;gender of the Customer (why?)&quot;,
                    &quot;example&quot;: &quot;M&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-263&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-259&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;ContactSummary&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = type
required = false
path = object



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;First Name of a person&quot;,
    &quot;example&quot;: &quot;Glenn&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;the Customer&quot;,
        &quot;x-range&quot;: [
          &quot;Person&quot;,
          &quot;Organization&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-260&gt;&quot;
          },
          &quot;givenName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;First Name of a person&quot;,
            &quot;example&quot;: &quot;Glenn&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
          },
          &quot;additionalName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;CUSTOMER-MIDDLE-INITIAL&quot;,
            &quot;example&quot;: &quot;M&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-261&gt;&quot;
          },
          &quot;familyName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;Last Name of a person&quot;,
            &quot;example&quot;: &quot;Miller&quot;,
            &quot;maxLength&quot;: 50,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-262&gt;&quot;
          },
          &quot;gender&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;gender of the Customer (why?)&quot;,
            &quot;example&quot;: &quot;M&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-263&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-259&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;ContactSummary&quot;,
            &quot;x-range&quot;: &quot;ContactSummary&quot;,
            &quot;description&quot;: &quot;minimal schema of a customer for report messages&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;\&quot;ContactSummary\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;ContactSummaryReport&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-251&gt;&quot;
              },
              &quot;batchId&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;BATCH-ID&quot;,
                &quot;example&quot;: &quot;0001&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-252&gt;&quot;
              },
              &quot;author&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;OFFICE-ID&quot;,
                &quot;example&quot;: &quot;https://{officeid}.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-253&gt;&quot;
              },
              &quot;transactionType&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TRANS-TYPE&quot;,
                &quot;x-range&quot;: &quot;TransactionType&quot;,
                &quot;example&quot;: &quot;SalesTransactionType&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-254&gt;&quot;
              },
              &quot;transactionId&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TRANS-NO&quot;,
                &quot;example&quot;: &quot;0000097123&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-255&gt;&quot;
              },
              &quot;transactionRole&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-range&quot;: [
                  &quot;Buyer&quot;,
                  &quot;Seller&quot;,
                  &quot;BuyerAgent&quot;,
                  &quot;ListingAgent&quot;
                ],
                &quot;enum&quot;: [
                  &quot;Buyer&quot;,
                  &quot;Seller&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-256&gt;&quot;
              },
              &quot;position&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;ADJUSTMENT-SEQUENCE&quot;,
                &quot;example&quot;: 1,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-257&gt;&quot;
              },
              &quot;assoicatedAgent&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;ASSOC-ID&quot;,
                &quot;example&quot;: &quot;https://{userid}.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-258&gt;&quot;
              },
              &quot;object&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the Customer&quot;,
                &quot;x-range&quot;: [
                  &quot;Person&quot;,
                  &quot;Organization&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-260&gt;&quot;
                  },
                  &quot;givenName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;First Name of a person&quot;,
                    &quot;example&quot;: &quot;Glenn&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
                  },
                  &quot;additionalName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;CUSTOMER-MIDDLE-INITIAL&quot;,
                    &quot;example&quot;: &quot;M&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-261&gt;&quot;
                  },
                  &quot;familyName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;Last Name of a person&quot;,
                    &quot;example&quot;: &quot;Miller&quot;,
                    &quot;maxLength&quot;: 50,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-262&gt;&quot;
                  },
                  &quot;gender&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;gender of the Customer (why?)&quot;,
                    &quot;example&quot;: &quot;M&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-263&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-259&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;ContactSummary&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = givenName
required = false
path = object



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;CUSTOMER-MIDDLE-INITIAL&quot;,
    &quot;example&quot;: &quot;M&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-261&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;the Customer&quot;,
        &quot;x-range&quot;: [
          &quot;Person&quot;,
          &quot;Organization&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-260&gt;&quot;
          },
          &quot;givenName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;First Name of a person&quot;,
            &quot;example&quot;: &quot;Glenn&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
          },
          &quot;additionalName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;CUSTOMER-MIDDLE-INITIAL&quot;,
            &quot;example&quot;: &quot;M&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-261&gt;&quot;
          },
          &quot;familyName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;Last Name of a person&quot;,
            &quot;example&quot;: &quot;Miller&quot;,
            &quot;maxLength&quot;: 50,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-262&gt;&quot;
          },
          &quot;gender&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;gender of the Customer (why?)&quot;,
            &quot;example&quot;: &quot;M&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-263&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-259&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;ContactSummary&quot;,
            &quot;x-range&quot;: &quot;ContactSummary&quot;,
            &quot;description&quot;: &quot;minimal schema of a customer for report messages&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;\&quot;ContactSummary\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;ContactSummaryReport&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-251&gt;&quot;
              },
              &quot;batchId&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;BATCH-ID&quot;,
                &quot;example&quot;: &quot;0001&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-252&gt;&quot;
              },
              &quot;author&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;OFFICE-ID&quot;,
                &quot;example&quot;: &quot;https://{officeid}.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-253&gt;&quot;
              },
              &quot;transactionType&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TRANS-TYPE&quot;,
                &quot;x-range&quot;: &quot;TransactionType&quot;,
                &quot;example&quot;: &quot;SalesTransactionType&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-254&gt;&quot;
              },
              &quot;transactionId&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TRANS-NO&quot;,
                &quot;example&quot;: &quot;0000097123&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-255&gt;&quot;
              },
              &quot;transactionRole&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-range&quot;: [
                  &quot;Buyer&quot;,
                  &quot;Seller&quot;,
                  &quot;BuyerAgent&quot;,
                  &quot;ListingAgent&quot;
                ],
                &quot;enum&quot;: [
                  &quot;Buyer&quot;,
                  &quot;Seller&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-256&gt;&quot;
              },
              &quot;position&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;ADJUSTMENT-SEQUENCE&quot;,
                &quot;example&quot;: 1,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-257&gt;&quot;
              },
              &quot;assoicatedAgent&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;ASSOC-ID&quot;,
                &quot;example&quot;: &quot;https://{userid}.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-258&gt;&quot;
              },
              &quot;object&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the Customer&quot;,
                &quot;x-range&quot;: [
                  &quot;Person&quot;,
                  &quot;Organization&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-260&gt;&quot;
                  },
                  &quot;givenName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;First Name of a person&quot;,
                    &quot;example&quot;: &quot;Glenn&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
                  },
                  &quot;additionalName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;CUSTOMER-MIDDLE-INITIAL&quot;,
                    &quot;example&quot;: &quot;M&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-261&gt;&quot;
                  },
                  &quot;familyName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;Last Name of a person&quot;,
                    &quot;example&quot;: &quot;Miller&quot;,
                    &quot;maxLength&quot;: 50,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-262&gt;&quot;
                  },
                  &quot;gender&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;gender of the Customer (why?)&quot;,
                    &quot;example&quot;: &quot;M&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-263&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-259&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;ContactSummary&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = additionalName
required = false
path = object



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;Last Name of a person&quot;,
    &quot;example&quot;: &quot;Miller&quot;,
    &quot;maxLength&quot;: 50,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-262&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;the Customer&quot;,
        &quot;x-range&quot;: [
          &quot;Person&quot;,
          &quot;Organization&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-260&gt;&quot;
          },
          &quot;givenName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;First Name of a person&quot;,
            &quot;example&quot;: &quot;Glenn&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
          },
          &quot;additionalName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;CUSTOMER-MIDDLE-INITIAL&quot;,
            &quot;example&quot;: &quot;M&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-261&gt;&quot;
          },
          &quot;familyName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;Last Name of a person&quot;,
            &quot;example&quot;: &quot;Miller&quot;,
            &quot;maxLength&quot;: 50,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-262&gt;&quot;
          },
          &quot;gender&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;gender of the Customer (why?)&quot;,
            &quot;example&quot;: &quot;M&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-263&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-259&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;ContactSummary&quot;,
            &quot;x-range&quot;: &quot;ContactSummary&quot;,
            &quot;description&quot;: &quot;minimal schema of a customer for report messages&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;\&quot;ContactSummary\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;ContactSummaryReport&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-251&gt;&quot;
              },
              &quot;batchId&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;BATCH-ID&quot;,
                &quot;example&quot;: &quot;0001&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-252&gt;&quot;
              },
              &quot;author&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;OFFICE-ID&quot;,
                &quot;example&quot;: &quot;https://{officeid}.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-253&gt;&quot;
              },
              &quot;transactionType&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TRANS-TYPE&quot;,
                &quot;x-range&quot;: &quot;TransactionType&quot;,
                &quot;example&quot;: &quot;SalesTransactionType&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-254&gt;&quot;
              },
              &quot;transactionId&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TRANS-NO&quot;,
                &quot;example&quot;: &quot;0000097123&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-255&gt;&quot;
              },
              &quot;transactionRole&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-range&quot;: [
                  &quot;Buyer&quot;,
                  &quot;Seller&quot;,
                  &quot;BuyerAgent&quot;,
                  &quot;ListingAgent&quot;
                ],
                &quot;enum&quot;: [
                  &quot;Buyer&quot;,
                  &quot;Seller&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-256&gt;&quot;
              },
              &quot;position&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;ADJUSTMENT-SEQUENCE&quot;,
                &quot;example&quot;: 1,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-257&gt;&quot;
              },
              &quot;assoicatedAgent&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;ASSOC-ID&quot;,
                &quot;example&quot;: &quot;https://{userid}.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-258&gt;&quot;
              },
              &quot;object&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the Customer&quot;,
                &quot;x-range&quot;: [
                  &quot;Person&quot;,
                  &quot;Organization&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-260&gt;&quot;
                  },
                  &quot;givenName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;First Name of a person&quot;,
                    &quot;example&quot;: &quot;Glenn&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
                  },
                  &quot;additionalName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;CUSTOMER-MIDDLE-INITIAL&quot;,
                    &quot;example&quot;: &quot;M&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-261&gt;&quot;
                  },
                  &quot;familyName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;Last Name of a person&quot;,
                    &quot;example&quot;: &quot;Miller&quot;,
                    &quot;maxLength&quot;: 50,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-262&gt;&quot;
                  },
                  &quot;gender&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;gender of the Customer (why?)&quot;,
                    &quot;example&quot;: &quot;M&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-263&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-259&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;ContactSummary&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = familyName
required = false
path = object



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;gender of the Customer (why?)&quot;,
    &quot;example&quot;: &quot;M&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-263&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;the Customer&quot;,
        &quot;x-range&quot;: [
          &quot;Person&quot;,
          &quot;Organization&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-260&gt;&quot;
          },
          &quot;givenName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;First Name of a person&quot;,
            &quot;example&quot;: &quot;Glenn&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
          },
          &quot;additionalName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;CUSTOMER-MIDDLE-INITIAL&quot;,
            &quot;example&quot;: &quot;M&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-261&gt;&quot;
          },
          &quot;familyName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;Last Name of a person&quot;,
            &quot;example&quot;: &quot;Miller&quot;,
            &quot;maxLength&quot;: 50,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-262&gt;&quot;
          },
          &quot;gender&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;gender of the Customer (why?)&quot;,
            &quot;example&quot;: &quot;M&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-263&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-259&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;ContactSummary&quot;,
            &quot;x-range&quot;: &quot;ContactSummary&quot;,
            &quot;description&quot;: &quot;minimal schema of a customer for report messages&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;\&quot;ContactSummary\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;ContactSummaryReport&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-251&gt;&quot;
              },
              &quot;batchId&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;BATCH-ID&quot;,
                &quot;example&quot;: &quot;0001&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-252&gt;&quot;
              },
              &quot;author&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;OFFICE-ID&quot;,
                &quot;example&quot;: &quot;https://{officeid}.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-253&gt;&quot;
              },
              &quot;transactionType&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TRANS-TYPE&quot;,
                &quot;x-range&quot;: &quot;TransactionType&quot;,
                &quot;example&quot;: &quot;SalesTransactionType&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-254&gt;&quot;
              },
              &quot;transactionId&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TRANS-NO&quot;,
                &quot;example&quot;: &quot;0000097123&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-255&gt;&quot;
              },
              &quot;transactionRole&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-range&quot;: [
                  &quot;Buyer&quot;,
                  &quot;Seller&quot;,
                  &quot;BuyerAgent&quot;,
                  &quot;ListingAgent&quot;
                ],
                &quot;enum&quot;: [
                  &quot;Buyer&quot;,
                  &quot;Seller&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-256&gt;&quot;
              },
              &quot;position&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;ADJUSTMENT-SEQUENCE&quot;,
                &quot;example&quot;: 1,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-257&gt;&quot;
              },
              &quot;assoicatedAgent&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;ASSOC-ID&quot;,
                &quot;example&quot;: &quot;https://{userid}.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-258&gt;&quot;
              },
              &quot;object&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the Customer&quot;,
                &quot;x-range&quot;: [
                  &quot;Person&quot;,
                  &quot;Organization&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-260&gt;&quot;
                  },
                  &quot;givenName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;First Name of a person&quot;,
                    &quot;example&quot;: &quot;Glenn&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
                  },
                  &quot;additionalName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;CUSTOMER-MIDDLE-INITIAL&quot;,
                    &quot;example&quot;: &quot;M&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-261&gt;&quot;
                  },
                  &quot;familyName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;Last Name of a person&quot;,
                    &quot;example&quot;: &quot;Miller&quot;,
                    &quot;maxLength&quot;: 50,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-262&gt;&quot;
                  },
                  &quot;gender&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;gender of the Customer (why?)&quot;,
                    &quot;example&quot;: &quot;M&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-263&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-259&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;ContactSummary&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = gender
required = false
path = object









### Example

```json
{
  "type": "ContactSummaryReport",
  "batchId": "0001",
  "author": "https://{officeid}.example.com/profile/card#me",
  "transactionType": "SalesTransactionType",
  "transactionId": "0000097123",
  "transactionRole": "Buyer",
  "position": 1,
  "assoicatedAgent": "https://{userid}.example.com/profile/card#me",
  "object": {
    "type": "string",
    "givenName": "Glenn",
    "additionalName": "M",
    "familyName": "Miller",
    "gender": "M"
  }
}
```

