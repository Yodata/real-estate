

---
title: TransactionEntry
---

{
  "type": {
    "_json": {
      "type": "string",
      "description": "TransactionEntry",
      "enum": [
        "TransactionEntry"
      ],
      "x-parser-schema-id": "<anonymous-schema-566>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "TransactionEntry",
          "description": "describes a unit of sales credit in unit or commission value relative to a parent transaction",
          "x-range": "TransactionEntry",
          "properties": {
            "type": {
              "type": "string",
              "description": "TransactionEntry",
              "enum": [
                "TransactionEntry"
              ],
              "x-parser-schema-id": "<anonymous-schema-566>"
            },
            "salesProductionUnit": {
              "type": "number",
              "minimum": 0.0001,
              "maximum": 1,
              "description": "the sales production units credited to the recipient",
              "example": 0.5,
              "x-parser-schema-id": "<anonymous-schema-567>"
            },
            "salesProductionGCI": {
              "type": "object",
              "title": "MonetaryAmount",
              "x-range": "MonetaryAmount",
              "required": [
                "type",
                "value",
                "currency"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "MonetaryAmount",
                  "enum": [
                    "MonetaryAmount"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-328>"
                },
                "minValue": {
                  "type": "number",
                  "description": "the lower limit of the range",
                  "example": 2400000,
                  "x-parser-schema-id": "<anonymous-schema-329>"
                },
                "maxValue": {
                  "type": "number",
                  "description": "the upper limit of the range",
                  "example": 3200000,
                  "x-parser-schema-id": "<anonymous-schema-330>"
                },
                "value": {
                  "type": "number",
                  "description": "the actual or expected value",
                  "example": 2700000,
                  "x-parser-schema-id": "<anonymous-schema-331>"
                },
                "currency": {
                  "type": "string",
                  "description": "use ISO4217 country codes",
                  "maxLength": 3,
                  "example": "USD",
                  "x-parser-schema-id": "<anonymous-schema-332>"
                }
              },
              "description": "gross commission income credited to the recipient",
              "example": {
                "type": "MonetaryAmount",
                "value": 1234.56,
                "currency": "USD"
              },
              "x-parser-schema-id": "<anonymous-schema-568>"
            },
            "recipient": {
              "description": "the agent credited with the sales production and who receives the value",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "typically a RealEstateAgent",
                  "example": "RealEstateAgent",
                  "x-parser-schema-id": "<anonymous-schema-570>"
                },
                "roleName": {
                  "type": "string",
                  "description": "enum: ListingAgent,BuyerAgent",
                  "enum": [
                    "ListingAgent",
                    "BuyerAgent"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-571>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "Linked-Data URI (@id)",
                  "example": "https://{entityid}.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-572>"
                },
                "identifier": {
                  "type": "object",
                  "description": "unique identifier of the recipient from the data producer",
                  "properties": {
                    "bmsAgentId": {
                      "type": "string",
                      "maxLength": 12,
                      "example": "1657897",
                      "x-parser-schema-id": "<anonymous-schema-574>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-573>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-569>"
            }
          },
          "x-parser-schema-id": "TransactionEntry"
        },
        "options": {}
      }
    }
  },
  "salesProductionUnit": {
    "_json": {
      "type": "number",
      "minimum": 0.0001,
      "maximum": 1,
      "description": "the sales production units credited to the recipient",
      "example": 0.5,
      "x-parser-schema-id": "<anonymous-schema-567>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "TransactionEntry",
          "description": "describes a unit of sales credit in unit or commission value relative to a parent transaction",
          "x-range": "TransactionEntry",
          "properties": {
            "type": {
              "type": "string",
              "description": "TransactionEntry",
              "enum": [
                "TransactionEntry"
              ],
              "x-parser-schema-id": "<anonymous-schema-566>"
            },
            "salesProductionUnit": {
              "type": "number",
              "minimum": 0.0001,
              "maximum": 1,
              "description": "the sales production units credited to the recipient",
              "example": 0.5,
              "x-parser-schema-id": "<anonymous-schema-567>"
            },
            "salesProductionGCI": {
              "type": "object",
              "title": "MonetaryAmount",
              "x-range": "MonetaryAmount",
              "required": [
                "type",
                "value",
                "currency"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "MonetaryAmount",
                  "enum": [
                    "MonetaryAmount"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-328>"
                },
                "minValue": {
                  "type": "number",
                  "description": "the lower limit of the range",
                  "example": 2400000,
                  "x-parser-schema-id": "<anonymous-schema-329>"
                },
                "maxValue": {
                  "type": "number",
                  "description": "the upper limit of the range",
                  "example": 3200000,
                  "x-parser-schema-id": "<anonymous-schema-330>"
                },
                "value": {
                  "type": "number",
                  "description": "the actual or expected value",
                  "example": 2700000,
                  "x-parser-schema-id": "<anonymous-schema-331>"
                },
                "currency": {
                  "type": "string",
                  "description": "use ISO4217 country codes",
                  "maxLength": 3,
                  "example": "USD",
                  "x-parser-schema-id": "<anonymous-schema-332>"
                }
              },
              "description": "gross commission income credited to the recipient",
              "example": {
                "type": "MonetaryAmount",
                "value": 1234.56,
                "currency": "USD"
              },
              "x-parser-schema-id": "<anonymous-schema-568>"
            },
            "recipient": {
              "description": "the agent credited with the sales production and who receives the value",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "typically a RealEstateAgent",
                  "example": "RealEstateAgent",
                  "x-parser-schema-id": "<anonymous-schema-570>"
                },
                "roleName": {
                  "type": "string",
                  "description": "enum: ListingAgent,BuyerAgent",
                  "enum": [
                    "ListingAgent",
                    "BuyerAgent"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-571>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "Linked-Data URI (@id)",
                  "example": "https://{entityid}.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-572>"
                },
                "identifier": {
                  "type": "object",
                  "description": "unique identifier of the recipient from the data producer",
                  "properties": {
                    "bmsAgentId": {
                      "type": "string",
                      "maxLength": 12,
                      "example": "1657897",
                      "x-parser-schema-id": "<anonymous-schema-574>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-573>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-569>"
            }
          },
          "x-parser-schema-id": "TransactionEntry"
        },
        "options": {}
      }
    }
  },
  "salesProductionGCI": {
    "_json": {
      "type": "object",
      "title": "MonetaryAmount",
      "x-range": "MonetaryAmount",
      "required": [
        "type",
        "value",
        "currency"
      ],
      "properties": {
        "type": {
          "type": "string",
          "description": "MonetaryAmount",
          "enum": [
            "MonetaryAmount"
          ],
          "x-parser-schema-id": "<anonymous-schema-328>"
        },
        "minValue": {
          "type": "number",
          "description": "the lower limit of the range",
          "example": 2400000,
          "x-parser-schema-id": "<anonymous-schema-329>"
        },
        "maxValue": {
          "type": "number",
          "description": "the upper limit of the range",
          "example": 3200000,
          "x-parser-schema-id": "<anonymous-schema-330>"
        },
        "value": {
          "type": "number",
          "description": "the actual or expected value",
          "example": 2700000,
          "x-parser-schema-id": "<anonymous-schema-331>"
        },
        "currency": {
          "type": "string",
          "description": "use ISO4217 country codes",
          "maxLength": 3,
          "example": "USD",
          "x-parser-schema-id": "<anonymous-schema-332>"
        }
      },
      "description": "gross commission income credited to the recipient",
      "example": {
        "type": "MonetaryAmount",
        "value": 1234.56,
        "currency": "USD"
      },
      "x-parser-schema-id": "<anonymous-schema-568>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "TransactionEntry",
          "description": "describes a unit of sales credit in unit or commission value relative to a parent transaction",
          "x-range": "TransactionEntry",
          "properties": {
            "type": {
              "type": "string",
              "description": "TransactionEntry",
              "enum": [
                "TransactionEntry"
              ],
              "x-parser-schema-id": "<anonymous-schema-566>"
            },
            "salesProductionUnit": {
              "type": "number",
              "minimum": 0.0001,
              "maximum": 1,
              "description": "the sales production units credited to the recipient",
              "example": 0.5,
              "x-parser-schema-id": "<anonymous-schema-567>"
            },
            "salesProductionGCI": {
              "type": "object",
              "title": "MonetaryAmount",
              "x-range": "MonetaryAmount",
              "required": [
                "type",
                "value",
                "currency"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "MonetaryAmount",
                  "enum": [
                    "MonetaryAmount"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-328>"
                },
                "minValue": {
                  "type": "number",
                  "description": "the lower limit of the range",
                  "example": 2400000,
                  "x-parser-schema-id": "<anonymous-schema-329>"
                },
                "maxValue": {
                  "type": "number",
                  "description": "the upper limit of the range",
                  "example": 3200000,
                  "x-parser-schema-id": "<anonymous-schema-330>"
                },
                "value": {
                  "type": "number",
                  "description": "the actual or expected value",
                  "example": 2700000,
                  "x-parser-schema-id": "<anonymous-schema-331>"
                },
                "currency": {
                  "type": "string",
                  "description": "use ISO4217 country codes",
                  "maxLength": 3,
                  "example": "USD",
                  "x-parser-schema-id": "<anonymous-schema-332>"
                }
              },
              "description": "gross commission income credited to the recipient",
              "example": {
                "type": "MonetaryAmount",
                "value": 1234.56,
                "currency": "USD"
              },
              "x-parser-schema-id": "<anonymous-schema-568>"
            },
            "recipient": {
              "description": "the agent credited with the sales production and who receives the value",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "typically a RealEstateAgent",
                  "example": "RealEstateAgent",
                  "x-parser-schema-id": "<anonymous-schema-570>"
                },
                "roleName": {
                  "type": "string",
                  "description": "enum: ListingAgent,BuyerAgent",
                  "enum": [
                    "ListingAgent",
                    "BuyerAgent"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-571>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "Linked-Data URI (@id)",
                  "example": "https://{entityid}.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-572>"
                },
                "identifier": {
                  "type": "object",
                  "description": "unique identifier of the recipient from the data producer",
                  "properties": {
                    "bmsAgentId": {
                      "type": "string",
                      "maxLength": 12,
                      "example": "1657897",
                      "x-parser-schema-id": "<anonymous-schema-574>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-573>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-569>"
            }
          },
          "x-parser-schema-id": "TransactionEntry"
        },
        "options": {}
      }
    }
  },
  "recipient": {
    "_json": {
      "description": "the agent credited with the sales production and who receives the value",
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "description": "typically a RealEstateAgent",
          "example": "RealEstateAgent",
          "x-parser-schema-id": "<anonymous-schema-570>"
        },
        "roleName": {
          "type": "string",
          "description": "enum: ListingAgent,BuyerAgent",
          "enum": [
            "ListingAgent",
            "BuyerAgent"
          ],
          "x-parser-schema-id": "<anonymous-schema-571>"
        },
        "id": {
          "type": "string",
          "format": "uri",
          "description": "Linked-Data URI (@id)",
          "example": "https://{entityid}.example.com/profile/card#me",
          "x-parser-schema-id": "<anonymous-schema-572>"
        },
        "identifier": {
          "type": "object",
          "description": "unique identifier of the recipient from the data producer",
          "properties": {
            "bmsAgentId": {
              "type": "string",
              "maxLength": 12,
              "example": "1657897",
              "x-parser-schema-id": "<anonymous-schema-574>"
            }
          },
          "x-parser-schema-id": "<anonymous-schema-573>"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-569>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "TransactionEntry",
          "description": "describes a unit of sales credit in unit or commission value relative to a parent transaction",
          "x-range": "TransactionEntry",
          "properties": {
            "type": {
              "type": "string",
              "description": "TransactionEntry",
              "enum": [
                "TransactionEntry"
              ],
              "x-parser-schema-id": "<anonymous-schema-566>"
            },
            "salesProductionUnit": {
              "type": "number",
              "minimum": 0.0001,
              "maximum": 1,
              "description": "the sales production units credited to the recipient",
              "example": 0.5,
              "x-parser-schema-id": "<anonymous-schema-567>"
            },
            "salesProductionGCI": {
              "type": "object",
              "title": "MonetaryAmount",
              "x-range": "MonetaryAmount",
              "required": [
                "type",
                "value",
                "currency"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "MonetaryAmount",
                  "enum": [
                    "MonetaryAmount"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-328>"
                },
                "minValue": {
                  "type": "number",
                  "description": "the lower limit of the range",
                  "example": 2400000,
                  "x-parser-schema-id": "<anonymous-schema-329>"
                },
                "maxValue": {
                  "type": "number",
                  "description": "the upper limit of the range",
                  "example": 3200000,
                  "x-parser-schema-id": "<anonymous-schema-330>"
                },
                "value": {
                  "type": "number",
                  "description": "the actual or expected value",
                  "example": 2700000,
                  "x-parser-schema-id": "<anonymous-schema-331>"
                },
                "currency": {
                  "type": "string",
                  "description": "use ISO4217 country codes",
                  "maxLength": 3,
                  "example": "USD",
                  "x-parser-schema-id": "<anonymous-schema-332>"
                }
              },
              "description": "gross commission income credited to the recipient",
              "example": {
                "type": "MonetaryAmount",
                "value": 1234.56,
                "currency": "USD"
              },
              "x-parser-schema-id": "<anonymous-schema-568>"
            },
            "recipient": {
              "description": "the agent credited with the sales production and who receives the value",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "typically a RealEstateAgent",
                  "example": "RealEstateAgent",
                  "x-parser-schema-id": "<anonymous-schema-570>"
                },
                "roleName": {
                  "type": "string",
                  "description": "enum: ListingAgent,BuyerAgent",
                  "enum": [
                    "ListingAgent",
                    "BuyerAgent"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-571>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "Linked-Data URI (@id)",
                  "example": "https://{entityid}.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-572>"
                },
                "identifier": {
                  "type": "object",
                  "description": "unique identifier of the recipient from the data producer",
                  "properties": {
                    "bmsAgentId": {
                      "type": "string",
                      "maxLength": 12,
                      "example": "1657897",
                      "x-parser-schema-id": "<anonymous-schema-574>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-573>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-569>"
            }
          },
          "x-parser-schema-id": "TransactionEntry"
        },
        "options": {}
      }
    }
  }
}


# TransactionEntry

describes a unit of sales credit in unit or commission value relative to a parent transaction



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "description": "TransactionEntry",
    "enum": [
      "TransactionEntry"
    ],
    "x-parser-schema-id": "<anonymous-schema-566>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "TransactionEntry",
        "description": "describes a unit of sales credit in unit or commission value relative to a parent transaction",
        "x-range": "TransactionEntry",
        "properties": {
          "type": {
            "type": "string",
            "description": "TransactionEntry",
            "enum": [
              "TransactionEntry"
            ],
            "x-parser-schema-id": "<anonymous-schema-566>"
          },
          "salesProductionUnit": {
            "type": "number",
            "minimum": 0.0001,
            "maximum": 1,
            "description": "the sales production units credited to the recipient",
            "example": 0.5,
            "x-parser-schema-id": "<anonymous-schema-567>"
          },
          "salesProductionGCI": {
            "type": "object",
            "title": "MonetaryAmount",
            "x-range": "MonetaryAmount",
            "required": [
              "type",
              "value",
              "currency"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "MonetaryAmount",
                "enum": [
                  "MonetaryAmount"
                ],
                "x-parser-schema-id": "<anonymous-schema-328>"
              },
              "minValue": {
                "type": "number",
                "description": "the lower limit of the range",
                "example": 2400000,
                "x-parser-schema-id": "<anonymous-schema-329>"
              },
              "maxValue": {
                "type": "number",
                "description": "the upper limit of the range",
                "example": 3200000,
                "x-parser-schema-id": "<anonymous-schema-330>"
              },
              "value": {
                "type": "number",
                "description": "the actual or expected value",
                "example": 2700000,
                "x-parser-schema-id": "<anonymous-schema-331>"
              },
              "currency": {
                "type": "string",
                "description": "use ISO4217 country codes",
                "maxLength": 3,
                "example": "USD",
                "x-parser-schema-id": "<anonymous-schema-332>"
              }
            },
            "description": "gross commission income credited to the recipient",
            "example": {
              "type": "MonetaryAmount",
              "value": 1234.56,
              "currency": "USD"
            },
            "x-parser-schema-id": "<anonymous-schema-568>"
          },
          "recipient": {
            "description": "the agent credited with the sales production and who receives the value",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "description": "typically a RealEstateAgent",
                "example": "RealEstateAgent",
                "x-parser-schema-id": "<anonymous-schema-570>"
              },
              "roleName": {
                "type": "string",
                "description": "enum: ListingAgent,BuyerAgent",
                "enum": [
                  "ListingAgent",
                  "BuyerAgent"
                ],
                "x-parser-schema-id": "<anonymous-schema-571>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "Linked-Data URI (@id)",
                "example": "https://{entityid}.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-572>"
              },
              "identifier": {
                "type": "object",
                "description": "unique identifier of the recipient from the data producer",
                "properties": {
                  "bmsAgentId": {
                    "type": "string",
                    "maxLength": 12,
                    "example": "1657897",
                    "x-parser-schema-id": "<anonymous-schema-574>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-573>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-569>"
          }
        },
        "x-parser-schema-id": "TransactionEntry"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "number",
    "minimum": 0.0001,
    "maximum": 1,
    "description": "the sales production units credited to the recipient",
    "example": 0.5,
    "x-parser-schema-id": "<anonymous-schema-567>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "TransactionEntry",
        "description": "describes a unit of sales credit in unit or commission value relative to a parent transaction",
        "x-range": "TransactionEntry",
        "properties": {
          "type": {
            "type": "string",
            "description": "TransactionEntry",
            "enum": [
              "TransactionEntry"
            ],
            "x-parser-schema-id": "<anonymous-schema-566>"
          },
          "salesProductionUnit": {
            "type": "number",
            "minimum": 0.0001,
            "maximum": 1,
            "description": "the sales production units credited to the recipient",
            "example": 0.5,
            "x-parser-schema-id": "<anonymous-schema-567>"
          },
          "salesProductionGCI": {
            "type": "object",
            "title": "MonetaryAmount",
            "x-range": "MonetaryAmount",
            "required": [
              "type",
              "value",
              "currency"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "MonetaryAmount",
                "enum": [
                  "MonetaryAmount"
                ],
                "x-parser-schema-id": "<anonymous-schema-328>"
              },
              "minValue": {
                "type": "number",
                "description": "the lower limit of the range",
                "example": 2400000,
                "x-parser-schema-id": "<anonymous-schema-329>"
              },
              "maxValue": {
                "type": "number",
                "description": "the upper limit of the range",
                "example": 3200000,
                "x-parser-schema-id": "<anonymous-schema-330>"
              },
              "value": {
                "type": "number",
                "description": "the actual or expected value",
                "example": 2700000,
                "x-parser-schema-id": "<anonymous-schema-331>"
              },
              "currency": {
                "type": "string",
                "description": "use ISO4217 country codes",
                "maxLength": 3,
                "example": "USD",
                "x-parser-schema-id": "<anonymous-schema-332>"
              }
            },
            "description": "gross commission income credited to the recipient",
            "example": {
              "type": "MonetaryAmount",
              "value": 1234.56,
              "currency": "USD"
            },
            "x-parser-schema-id": "<anonymous-schema-568>"
          },
          "recipient": {
            "description": "the agent credited with the sales production and who receives the value",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "description": "typically a RealEstateAgent",
                "example": "RealEstateAgent",
                "x-parser-schema-id": "<anonymous-schema-570>"
              },
              "roleName": {
                "type": "string",
                "description": "enum: ListingAgent,BuyerAgent",
                "enum": [
                  "ListingAgent",
                  "BuyerAgent"
                ],
                "x-parser-schema-id": "<anonymous-schema-571>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "Linked-Data URI (@id)",
                "example": "https://{entityid}.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-572>"
              },
              "identifier": {
                "type": "object",
                "description": "unique identifier of the recipient from the data producer",
                "properties": {
                  "bmsAgentId": {
                    "type": "string",
                    "maxLength": 12,
                    "example": "1657897",
                    "x-parser-schema-id": "<anonymous-schema-574>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-573>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-569>"
          }
        },
        "x-parser-schema-id": "TransactionEntry"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "title": "MonetaryAmount",
    "x-range": "MonetaryAmount",
    "required": [
      "type",
      "value",
      "currency"
    ],
    "properties": {
      "type": {
        "type": "string",
        "description": "MonetaryAmount",
        "enum": [
          "MonetaryAmount"
        ],
        "x-parser-schema-id": "<anonymous-schema-328>"
      },
      "minValue": {
        "type": "number",
        "description": "the lower limit of the range",
        "example": 2400000,
        "x-parser-schema-id": "<anonymous-schema-329>"
      },
      "maxValue": {
        "type": "number",
        "description": "the upper limit of the range",
        "example": 3200000,
        "x-parser-schema-id": "<anonymous-schema-330>"
      },
      "value": {
        "type": "number",
        "description": "the actual or expected value",
        "example": 2700000,
        "x-parser-schema-id": "<anonymous-schema-331>"
      },
      "currency": {
        "type": "string",
        "description": "use ISO4217 country codes",
        "maxLength": 3,
        "example": "USD",
        "x-parser-schema-id": "<anonymous-schema-332>"
      }
    },
    "description": "gross commission income credited to the recipient",
    "example": {
      "type": "MonetaryAmount",
      "value": 1234.56,
      "currency": "USD"
    },
    "x-parser-schema-id": "<anonymous-schema-568>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "TransactionEntry",
        "description": "describes a unit of sales credit in unit or commission value relative to a parent transaction",
        "x-range": "TransactionEntry",
        "properties": {
          "type": {
            "type": "string",
            "description": "TransactionEntry",
            "enum": [
              "TransactionEntry"
            ],
            "x-parser-schema-id": "<anonymous-schema-566>"
          },
          "salesProductionUnit": {
            "type": "number",
            "minimum": 0.0001,
            "maximum": 1,
            "description": "the sales production units credited to the recipient",
            "example": 0.5,
            "x-parser-schema-id": "<anonymous-schema-567>"
          },
          "salesProductionGCI": {
            "type": "object",
            "title": "MonetaryAmount",
            "x-range": "MonetaryAmount",
            "required": [
              "type",
              "value",
              "currency"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "MonetaryAmount",
                "enum": [
                  "MonetaryAmount"
                ],
                "x-parser-schema-id": "<anonymous-schema-328>"
              },
              "minValue": {
                "type": "number",
                "description": "the lower limit of the range",
                "example": 2400000,
                "x-parser-schema-id": "<anonymous-schema-329>"
              },
              "maxValue": {
                "type": "number",
                "description": "the upper limit of the range",
                "example": 3200000,
                "x-parser-schema-id": "<anonymous-schema-330>"
              },
              "value": {
                "type": "number",
                "description": "the actual or expected value",
                "example": 2700000,
                "x-parser-schema-id": "<anonymous-schema-331>"
              },
              "currency": {
                "type": "string",
                "description": "use ISO4217 country codes",
                "maxLength": 3,
                "example": "USD",
                "x-parser-schema-id": "<anonymous-schema-332>"
              }
            },
            "description": "gross commission income credited to the recipient",
            "example": {
              "type": "MonetaryAmount",
              "value": 1234.56,
              "currency": "USD"
            },
            "x-parser-schema-id": "<anonymous-schema-568>"
          },
          "recipient": {
            "description": "the agent credited with the sales production and who receives the value",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "description": "typically a RealEstateAgent",
                "example": "RealEstateAgent",
                "x-parser-schema-id": "<anonymous-schema-570>"
              },
              "roleName": {
                "type": "string",
                "description": "enum: ListingAgent,BuyerAgent",
                "enum": [
                  "ListingAgent",
                  "BuyerAgent"
                ],
                "x-parser-schema-id": "<anonymous-schema-571>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "Linked-Data URI (@id)",
                "example": "https://{entityid}.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-572>"
              },
              "identifier": {
                "type": "object",
                "description": "unique identifier of the recipient from the data producer",
                "properties": {
                  "bmsAgentId": {
                    "type": "string",
                    "maxLength": 12,
                    "example": "1657897",
                    "x-parser-schema-id": "<anonymous-schema-574>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-573>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-569>"
          }
        },
        "x-parser-schema-id": "TransactionEntry"
      },
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;MonetaryAmount&quot;,
    &quot;enum&quot;: [
      &quot;MonetaryAmount&quot;
    ],
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;title&quot;: &quot;MonetaryAmount&quot;,
        &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
        &quot;required&quot;: [
          &quot;type&quot;,
          &quot;value&quot;,
          &quot;currency&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;MonetaryAmount&quot;,
            &quot;enum&quot;: [
              &quot;MonetaryAmount&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
          },
          &quot;minValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the lower limit of the range&quot;,
            &quot;example&quot;: 2400000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
          },
          &quot;maxValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the upper limit of the range&quot;,
            &quot;example&quot;: 3200000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
          },
          &quot;value&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the actual or expected value&quot;,
            &quot;example&quot;: 2700000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
          },
          &quot;currency&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
            &quot;maxLength&quot;: 3,
            &quot;example&quot;: &quot;USD&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
          }
        },
        &quot;description&quot;: &quot;gross commission income credited to the recipient&quot;,
        &quot;example&quot;: {
          &quot;type&quot;: &quot;MonetaryAmount&quot;,
          &quot;value&quot;: 1234.56,
          &quot;currency&quot;: &quot;USD&quot;
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-568&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;TransactionEntry&quot;,
            &quot;description&quot;: &quot;describes a unit of sales credit in unit or commission value relative to a parent transaction&quot;,
            &quot;x-range&quot;: &quot;TransactionEntry&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TransactionEntry&quot;,
                &quot;enum&quot;: [
                  &quot;TransactionEntry&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-566&gt;&quot;
              },
              &quot;salesProductionUnit&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;minimum&quot;: 0.0001,
                &quot;maximum&quot;: 1,
                &quot;description&quot;: &quot;the sales production units credited to the recipient&quot;,
                &quot;example&quot;: 0.5,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-567&gt;&quot;
              },
              &quot;salesProductionGCI&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;gross commission income credited to the recipient&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;MonetaryAmount&quot;,
                  &quot;value&quot;: 1234.56,
                  &quot;currency&quot;: &quot;USD&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-568&gt;&quot;
              },
              &quot;recipient&quot;: {
                &quot;description&quot;: &quot;the agent credited with the sales production and who receives the value&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;typically a RealEstateAgent&quot;,
                    &quot;example&quot;: &quot;RealEstateAgent&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-570&gt;&quot;
                  },
                  &quot;roleName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;enum: ListingAgent,BuyerAgent&quot;,
                    &quot;enum&quot;: [
                      &quot;ListingAgent&quot;,
                      &quot;BuyerAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-571&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;example&quot;: &quot;https://{entityid}.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-572&gt;&quot;
                  },
                  &quot;identifier&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;unique identifier of the recipient from the data producer&quot;,
                    &quot;properties&quot;: {
                      &quot;bmsAgentId&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;example&quot;: &quot;1657897&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-574&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-573&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-569&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;TransactionEntry&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = type
required = false
path = salesProductionGCI



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;number&quot;,
    &quot;description&quot;: &quot;the lower limit of the range&quot;,
    &quot;example&quot;: 2400000,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;title&quot;: &quot;MonetaryAmount&quot;,
        &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
        &quot;required&quot;: [
          &quot;type&quot;,
          &quot;value&quot;,
          &quot;currency&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;MonetaryAmount&quot;,
            &quot;enum&quot;: [
              &quot;MonetaryAmount&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
          },
          &quot;minValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the lower limit of the range&quot;,
            &quot;example&quot;: 2400000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
          },
          &quot;maxValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the upper limit of the range&quot;,
            &quot;example&quot;: 3200000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
          },
          &quot;value&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the actual or expected value&quot;,
            &quot;example&quot;: 2700000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
          },
          &quot;currency&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
            &quot;maxLength&quot;: 3,
            &quot;example&quot;: &quot;USD&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
          }
        },
        &quot;description&quot;: &quot;gross commission income credited to the recipient&quot;,
        &quot;example&quot;: {
          &quot;type&quot;: &quot;MonetaryAmount&quot;,
          &quot;value&quot;: 1234.56,
          &quot;currency&quot;: &quot;USD&quot;
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-568&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;TransactionEntry&quot;,
            &quot;description&quot;: &quot;describes a unit of sales credit in unit or commission value relative to a parent transaction&quot;,
            &quot;x-range&quot;: &quot;TransactionEntry&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TransactionEntry&quot;,
                &quot;enum&quot;: [
                  &quot;TransactionEntry&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-566&gt;&quot;
              },
              &quot;salesProductionUnit&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;minimum&quot;: 0.0001,
                &quot;maximum&quot;: 1,
                &quot;description&quot;: &quot;the sales production units credited to the recipient&quot;,
                &quot;example&quot;: 0.5,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-567&gt;&quot;
              },
              &quot;salesProductionGCI&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;gross commission income credited to the recipient&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;MonetaryAmount&quot;,
                  &quot;value&quot;: 1234.56,
                  &quot;currency&quot;: &quot;USD&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-568&gt;&quot;
              },
              &quot;recipient&quot;: {
                &quot;description&quot;: &quot;the agent credited with the sales production and who receives the value&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;typically a RealEstateAgent&quot;,
                    &quot;example&quot;: &quot;RealEstateAgent&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-570&gt;&quot;
                  },
                  &quot;roleName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;enum: ListingAgent,BuyerAgent&quot;,
                    &quot;enum&quot;: [
                      &quot;ListingAgent&quot;,
                      &quot;BuyerAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-571&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;example&quot;: &quot;https://{entityid}.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-572&gt;&quot;
                  },
                  &quot;identifier&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;unique identifier of the recipient from the data producer&quot;,
                    &quot;properties&quot;: {
                      &quot;bmsAgentId&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;example&quot;: &quot;1657897&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-574&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-573&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-569&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;TransactionEntry&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = minValue
required = false
path = salesProductionGCI



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;number&quot;,
    &quot;description&quot;: &quot;the upper limit of the range&quot;,
    &quot;example&quot;: 3200000,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;title&quot;: &quot;MonetaryAmount&quot;,
        &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
        &quot;required&quot;: [
          &quot;type&quot;,
          &quot;value&quot;,
          &quot;currency&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;MonetaryAmount&quot;,
            &quot;enum&quot;: [
              &quot;MonetaryAmount&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
          },
          &quot;minValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the lower limit of the range&quot;,
            &quot;example&quot;: 2400000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
          },
          &quot;maxValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the upper limit of the range&quot;,
            &quot;example&quot;: 3200000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
          },
          &quot;value&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the actual or expected value&quot;,
            &quot;example&quot;: 2700000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
          },
          &quot;currency&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
            &quot;maxLength&quot;: 3,
            &quot;example&quot;: &quot;USD&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
          }
        },
        &quot;description&quot;: &quot;gross commission income credited to the recipient&quot;,
        &quot;example&quot;: {
          &quot;type&quot;: &quot;MonetaryAmount&quot;,
          &quot;value&quot;: 1234.56,
          &quot;currency&quot;: &quot;USD&quot;
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-568&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;TransactionEntry&quot;,
            &quot;description&quot;: &quot;describes a unit of sales credit in unit or commission value relative to a parent transaction&quot;,
            &quot;x-range&quot;: &quot;TransactionEntry&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TransactionEntry&quot;,
                &quot;enum&quot;: [
                  &quot;TransactionEntry&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-566&gt;&quot;
              },
              &quot;salesProductionUnit&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;minimum&quot;: 0.0001,
                &quot;maximum&quot;: 1,
                &quot;description&quot;: &quot;the sales production units credited to the recipient&quot;,
                &quot;example&quot;: 0.5,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-567&gt;&quot;
              },
              &quot;salesProductionGCI&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;gross commission income credited to the recipient&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;MonetaryAmount&quot;,
                  &quot;value&quot;: 1234.56,
                  &quot;currency&quot;: &quot;USD&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-568&gt;&quot;
              },
              &quot;recipient&quot;: {
                &quot;description&quot;: &quot;the agent credited with the sales production and who receives the value&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;typically a RealEstateAgent&quot;,
                    &quot;example&quot;: &quot;RealEstateAgent&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-570&gt;&quot;
                  },
                  &quot;roleName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;enum: ListingAgent,BuyerAgent&quot;,
                    &quot;enum&quot;: [
                      &quot;ListingAgent&quot;,
                      &quot;BuyerAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-571&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;example&quot;: &quot;https://{entityid}.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-572&gt;&quot;
                  },
                  &quot;identifier&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;unique identifier of the recipient from the data producer&quot;,
                    &quot;properties&quot;: {
                      &quot;bmsAgentId&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;example&quot;: &quot;1657897&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-574&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-573&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-569&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;TransactionEntry&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = maxValue
required = false
path = salesProductionGCI



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;number&quot;,
    &quot;description&quot;: &quot;the actual or expected value&quot;,
    &quot;example&quot;: 2700000,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;title&quot;: &quot;MonetaryAmount&quot;,
        &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
        &quot;required&quot;: [
          &quot;type&quot;,
          &quot;value&quot;,
          &quot;currency&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;MonetaryAmount&quot;,
            &quot;enum&quot;: [
              &quot;MonetaryAmount&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
          },
          &quot;minValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the lower limit of the range&quot;,
            &quot;example&quot;: 2400000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
          },
          &quot;maxValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the upper limit of the range&quot;,
            &quot;example&quot;: 3200000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
          },
          &quot;value&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the actual or expected value&quot;,
            &quot;example&quot;: 2700000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
          },
          &quot;currency&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
            &quot;maxLength&quot;: 3,
            &quot;example&quot;: &quot;USD&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
          }
        },
        &quot;description&quot;: &quot;gross commission income credited to the recipient&quot;,
        &quot;example&quot;: {
          &quot;type&quot;: &quot;MonetaryAmount&quot;,
          &quot;value&quot;: 1234.56,
          &quot;currency&quot;: &quot;USD&quot;
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-568&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;TransactionEntry&quot;,
            &quot;description&quot;: &quot;describes a unit of sales credit in unit or commission value relative to a parent transaction&quot;,
            &quot;x-range&quot;: &quot;TransactionEntry&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TransactionEntry&quot;,
                &quot;enum&quot;: [
                  &quot;TransactionEntry&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-566&gt;&quot;
              },
              &quot;salesProductionUnit&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;minimum&quot;: 0.0001,
                &quot;maximum&quot;: 1,
                &quot;description&quot;: &quot;the sales production units credited to the recipient&quot;,
                &quot;example&quot;: 0.5,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-567&gt;&quot;
              },
              &quot;salesProductionGCI&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;gross commission income credited to the recipient&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;MonetaryAmount&quot;,
                  &quot;value&quot;: 1234.56,
                  &quot;currency&quot;: &quot;USD&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-568&gt;&quot;
              },
              &quot;recipient&quot;: {
                &quot;description&quot;: &quot;the agent credited with the sales production and who receives the value&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;typically a RealEstateAgent&quot;,
                    &quot;example&quot;: &quot;RealEstateAgent&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-570&gt;&quot;
                  },
                  &quot;roleName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;enum: ListingAgent,BuyerAgent&quot;,
                    &quot;enum&quot;: [
                      &quot;ListingAgent&quot;,
                      &quot;BuyerAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-571&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;example&quot;: &quot;https://{entityid}.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-572&gt;&quot;
                  },
                  &quot;identifier&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;unique identifier of the recipient from the data producer&quot;,
                    &quot;properties&quot;: {
                      &quot;bmsAgentId&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;example&quot;: &quot;1657897&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-574&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-573&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-569&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;TransactionEntry&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = value
required = false
path = salesProductionGCI



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
    &quot;maxLength&quot;: 3,
    &quot;example&quot;: &quot;USD&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;title&quot;: &quot;MonetaryAmount&quot;,
        &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
        &quot;required&quot;: [
          &quot;type&quot;,
          &quot;value&quot;,
          &quot;currency&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;MonetaryAmount&quot;,
            &quot;enum&quot;: [
              &quot;MonetaryAmount&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
          },
          &quot;minValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the lower limit of the range&quot;,
            &quot;example&quot;: 2400000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
          },
          &quot;maxValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the upper limit of the range&quot;,
            &quot;example&quot;: 3200000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
          },
          &quot;value&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the actual or expected value&quot;,
            &quot;example&quot;: 2700000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
          },
          &quot;currency&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
            &quot;maxLength&quot;: 3,
            &quot;example&quot;: &quot;USD&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
          }
        },
        &quot;description&quot;: &quot;gross commission income credited to the recipient&quot;,
        &quot;example&quot;: {
          &quot;type&quot;: &quot;MonetaryAmount&quot;,
          &quot;value&quot;: 1234.56,
          &quot;currency&quot;: &quot;USD&quot;
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-568&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;TransactionEntry&quot;,
            &quot;description&quot;: &quot;describes a unit of sales credit in unit or commission value relative to a parent transaction&quot;,
            &quot;x-range&quot;: &quot;TransactionEntry&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TransactionEntry&quot;,
                &quot;enum&quot;: [
                  &quot;TransactionEntry&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-566&gt;&quot;
              },
              &quot;salesProductionUnit&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;minimum&quot;: 0.0001,
                &quot;maximum&quot;: 1,
                &quot;description&quot;: &quot;the sales production units credited to the recipient&quot;,
                &quot;example&quot;: 0.5,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-567&gt;&quot;
              },
              &quot;salesProductionGCI&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;gross commission income credited to the recipient&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;MonetaryAmount&quot;,
                  &quot;value&quot;: 1234.56,
                  &quot;currency&quot;: &quot;USD&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-568&gt;&quot;
              },
              &quot;recipient&quot;: {
                &quot;description&quot;: &quot;the agent credited with the sales production and who receives the value&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;typically a RealEstateAgent&quot;,
                    &quot;example&quot;: &quot;RealEstateAgent&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-570&gt;&quot;
                  },
                  &quot;roleName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;enum: ListingAgent,BuyerAgent&quot;,
                    &quot;enum&quot;: [
                      &quot;ListingAgent&quot;,
                      &quot;BuyerAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-571&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;example&quot;: &quot;https://{entityid}.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-572&gt;&quot;
                  },
                  &quot;identifier&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;unique identifier of the recipient from the data producer&quot;,
                    &quot;properties&quot;: {
                      &quot;bmsAgentId&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;example&quot;: &quot;1657897&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-574&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-573&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-569&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;TransactionEntry&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = currency
required = false
path = salesProductionGCI





{
  "_json": {
    "description": "the agent credited with the sales production and who receives the value",
    "type": "object",
    "properties": {
      "type": {
        "type": "string",
        "description": "typically a RealEstateAgent",
        "example": "RealEstateAgent",
        "x-parser-schema-id": "<anonymous-schema-570>"
      },
      "roleName": {
        "type": "string",
        "description": "enum: ListingAgent,BuyerAgent",
        "enum": [
          "ListingAgent",
          "BuyerAgent"
        ],
        "x-parser-schema-id": "<anonymous-schema-571>"
      },
      "id": {
        "type": "string",
        "format": "uri",
        "description": "Linked-Data URI (@id)",
        "example": "https://{entityid}.example.com/profile/card#me",
        "x-parser-schema-id": "<anonymous-schema-572>"
      },
      "identifier": {
        "type": "object",
        "description": "unique identifier of the recipient from the data producer",
        "properties": {
          "bmsAgentId": {
            "type": "string",
            "maxLength": 12,
            "example": "1657897",
            "x-parser-schema-id": "<anonymous-schema-574>"
          }
        },
        "x-parser-schema-id": "<anonymous-schema-573>"
      }
    },
    "x-parser-schema-id": "<anonymous-schema-569>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "TransactionEntry",
        "description": "describes a unit of sales credit in unit or commission value relative to a parent transaction",
        "x-range": "TransactionEntry",
        "properties": {
          "type": {
            "type": "string",
            "description": "TransactionEntry",
            "enum": [
              "TransactionEntry"
            ],
            "x-parser-schema-id": "<anonymous-schema-566>"
          },
          "salesProductionUnit": {
            "type": "number",
            "minimum": 0.0001,
            "maximum": 1,
            "description": "the sales production units credited to the recipient",
            "example": 0.5,
            "x-parser-schema-id": "<anonymous-schema-567>"
          },
          "salesProductionGCI": {
            "type": "object",
            "title": "MonetaryAmount",
            "x-range": "MonetaryAmount",
            "required": [
              "type",
              "value",
              "currency"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "MonetaryAmount",
                "enum": [
                  "MonetaryAmount"
                ],
                "x-parser-schema-id": "<anonymous-schema-328>"
              },
              "minValue": {
                "type": "number",
                "description": "the lower limit of the range",
                "example": 2400000,
                "x-parser-schema-id": "<anonymous-schema-329>"
              },
              "maxValue": {
                "type": "number",
                "description": "the upper limit of the range",
                "example": 3200000,
                "x-parser-schema-id": "<anonymous-schema-330>"
              },
              "value": {
                "type": "number",
                "description": "the actual or expected value",
                "example": 2700000,
                "x-parser-schema-id": "<anonymous-schema-331>"
              },
              "currency": {
                "type": "string",
                "description": "use ISO4217 country codes",
                "maxLength": 3,
                "example": "USD",
                "x-parser-schema-id": "<anonymous-schema-332>"
              }
            },
            "description": "gross commission income credited to the recipient",
            "example": {
              "type": "MonetaryAmount",
              "value": 1234.56,
              "currency": "USD"
            },
            "x-parser-schema-id": "<anonymous-schema-568>"
          },
          "recipient": {
            "description": "the agent credited with the sales production and who receives the value",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "description": "typically a RealEstateAgent",
                "example": "RealEstateAgent",
                "x-parser-schema-id": "<anonymous-schema-570>"
              },
              "roleName": {
                "type": "string",
                "description": "enum: ListingAgent,BuyerAgent",
                "enum": [
                  "ListingAgent",
                  "BuyerAgent"
                ],
                "x-parser-schema-id": "<anonymous-schema-571>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "Linked-Data URI (@id)",
                "example": "https://{entityid}.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-572>"
              },
              "identifier": {
                "type": "object",
                "description": "unique identifier of the recipient from the data producer",
                "properties": {
                  "bmsAgentId": {
                    "type": "string",
                    "maxLength": 12,
                    "example": "1657897",
                    "x-parser-schema-id": "<anonymous-schema-574>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-573>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-569>"
          }
        },
        "x-parser-schema-id": "TransactionEntry"
      },
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;typically a RealEstateAgent&quot;,
    &quot;example&quot;: &quot;RealEstateAgent&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-570&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;description&quot;: &quot;the agent credited with the sales production and who receives the value&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;typically a RealEstateAgent&quot;,
            &quot;example&quot;: &quot;RealEstateAgent&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-570&gt;&quot;
          },
          &quot;roleName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;enum: ListingAgent,BuyerAgent&quot;,
            &quot;enum&quot;: [
              &quot;ListingAgent&quot;,
              &quot;BuyerAgent&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-571&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
            &quot;example&quot;: &quot;https://{entityid}.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-572&gt;&quot;
          },
          &quot;identifier&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;unique identifier of the recipient from the data producer&quot;,
            &quot;properties&quot;: {
              &quot;bmsAgentId&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;maxLength&quot;: 12,
                &quot;example&quot;: &quot;1657897&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-574&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-573&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-569&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;TransactionEntry&quot;,
            &quot;description&quot;: &quot;describes a unit of sales credit in unit or commission value relative to a parent transaction&quot;,
            &quot;x-range&quot;: &quot;TransactionEntry&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TransactionEntry&quot;,
                &quot;enum&quot;: [
                  &quot;TransactionEntry&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-566&gt;&quot;
              },
              &quot;salesProductionUnit&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;minimum&quot;: 0.0001,
                &quot;maximum&quot;: 1,
                &quot;description&quot;: &quot;the sales production units credited to the recipient&quot;,
                &quot;example&quot;: 0.5,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-567&gt;&quot;
              },
              &quot;salesProductionGCI&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;gross commission income credited to the recipient&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;MonetaryAmount&quot;,
                  &quot;value&quot;: 1234.56,
                  &quot;currency&quot;: &quot;USD&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-568&gt;&quot;
              },
              &quot;recipient&quot;: {
                &quot;description&quot;: &quot;the agent credited with the sales production and who receives the value&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;typically a RealEstateAgent&quot;,
                    &quot;example&quot;: &quot;RealEstateAgent&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-570&gt;&quot;
                  },
                  &quot;roleName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;enum: ListingAgent,BuyerAgent&quot;,
                    &quot;enum&quot;: [
                      &quot;ListingAgent&quot;,
                      &quot;BuyerAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-571&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;example&quot;: &quot;https://{entityid}.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-572&gt;&quot;
                  },
                  &quot;identifier&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;unique identifier of the recipient from the data producer&quot;,
                    &quot;properties&quot;: {
                      &quot;bmsAgentId&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;example&quot;: &quot;1657897&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-574&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-573&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-569&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;TransactionEntry&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = type
required = false
path = recipient



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;enum: ListingAgent,BuyerAgent&quot;,
    &quot;enum&quot;: [
      &quot;ListingAgent&quot;,
      &quot;BuyerAgent&quot;
    ],
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-571&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;description&quot;: &quot;the agent credited with the sales production and who receives the value&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;typically a RealEstateAgent&quot;,
            &quot;example&quot;: &quot;RealEstateAgent&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-570&gt;&quot;
          },
          &quot;roleName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;enum: ListingAgent,BuyerAgent&quot;,
            &quot;enum&quot;: [
              &quot;ListingAgent&quot;,
              &quot;BuyerAgent&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-571&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
            &quot;example&quot;: &quot;https://{entityid}.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-572&gt;&quot;
          },
          &quot;identifier&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;unique identifier of the recipient from the data producer&quot;,
            &quot;properties&quot;: {
              &quot;bmsAgentId&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;maxLength&quot;: 12,
                &quot;example&quot;: &quot;1657897&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-574&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-573&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-569&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;TransactionEntry&quot;,
            &quot;description&quot;: &quot;describes a unit of sales credit in unit or commission value relative to a parent transaction&quot;,
            &quot;x-range&quot;: &quot;TransactionEntry&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TransactionEntry&quot;,
                &quot;enum&quot;: [
                  &quot;TransactionEntry&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-566&gt;&quot;
              },
              &quot;salesProductionUnit&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;minimum&quot;: 0.0001,
                &quot;maximum&quot;: 1,
                &quot;description&quot;: &quot;the sales production units credited to the recipient&quot;,
                &quot;example&quot;: 0.5,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-567&gt;&quot;
              },
              &quot;salesProductionGCI&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;gross commission income credited to the recipient&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;MonetaryAmount&quot;,
                  &quot;value&quot;: 1234.56,
                  &quot;currency&quot;: &quot;USD&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-568&gt;&quot;
              },
              &quot;recipient&quot;: {
                &quot;description&quot;: &quot;the agent credited with the sales production and who receives the value&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;typically a RealEstateAgent&quot;,
                    &quot;example&quot;: &quot;RealEstateAgent&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-570&gt;&quot;
                  },
                  &quot;roleName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;enum: ListingAgent,BuyerAgent&quot;,
                    &quot;enum&quot;: [
                      &quot;ListingAgent&quot;,
                      &quot;BuyerAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-571&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;example&quot;: &quot;https://{entityid}.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-572&gt;&quot;
                  },
                  &quot;identifier&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;unique identifier of the recipient from the data producer&quot;,
                    &quot;properties&quot;: {
                      &quot;bmsAgentId&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;example&quot;: &quot;1657897&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-574&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-573&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-569&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;TransactionEntry&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = roleName
required = false
path = recipient



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;format&quot;: &quot;uri&quot;,
    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
    &quot;example&quot;: &quot;https://{entityid}.example.com/profile/card#me&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-572&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;description&quot;: &quot;the agent credited with the sales production and who receives the value&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;typically a RealEstateAgent&quot;,
            &quot;example&quot;: &quot;RealEstateAgent&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-570&gt;&quot;
          },
          &quot;roleName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;enum: ListingAgent,BuyerAgent&quot;,
            &quot;enum&quot;: [
              &quot;ListingAgent&quot;,
              &quot;BuyerAgent&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-571&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
            &quot;example&quot;: &quot;https://{entityid}.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-572&gt;&quot;
          },
          &quot;identifier&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;unique identifier of the recipient from the data producer&quot;,
            &quot;properties&quot;: {
              &quot;bmsAgentId&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;maxLength&quot;: 12,
                &quot;example&quot;: &quot;1657897&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-574&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-573&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-569&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;TransactionEntry&quot;,
            &quot;description&quot;: &quot;describes a unit of sales credit in unit or commission value relative to a parent transaction&quot;,
            &quot;x-range&quot;: &quot;TransactionEntry&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TransactionEntry&quot;,
                &quot;enum&quot;: [
                  &quot;TransactionEntry&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-566&gt;&quot;
              },
              &quot;salesProductionUnit&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;minimum&quot;: 0.0001,
                &quot;maximum&quot;: 1,
                &quot;description&quot;: &quot;the sales production units credited to the recipient&quot;,
                &quot;example&quot;: 0.5,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-567&gt;&quot;
              },
              &quot;salesProductionGCI&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;gross commission income credited to the recipient&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;MonetaryAmount&quot;,
                  &quot;value&quot;: 1234.56,
                  &quot;currency&quot;: &quot;USD&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-568&gt;&quot;
              },
              &quot;recipient&quot;: {
                &quot;description&quot;: &quot;the agent credited with the sales production and who receives the value&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;typically a RealEstateAgent&quot;,
                    &quot;example&quot;: &quot;RealEstateAgent&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-570&gt;&quot;
                  },
                  &quot;roleName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;enum: ListingAgent,BuyerAgent&quot;,
                    &quot;enum&quot;: [
                      &quot;ListingAgent&quot;,
                      &quot;BuyerAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-571&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;example&quot;: &quot;https://{entityid}.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-572&gt;&quot;
                  },
                  &quot;identifier&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;unique identifier of the recipient from the data producer&quot;,
                    &quot;properties&quot;: {
                      &quot;bmsAgentId&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;example&quot;: &quot;1657897&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-574&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-573&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-569&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;TransactionEntry&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = id
required = false
path = recipient



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;object&quot;,
    &quot;description&quot;: &quot;unique identifier of the recipient from the data producer&quot;,
    &quot;properties&quot;: {
      &quot;bmsAgentId&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;maxLength&quot;: 12,
        &quot;example&quot;: &quot;1657897&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-574&gt;&quot;
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-573&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;description&quot;: &quot;the agent credited with the sales production and who receives the value&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;typically a RealEstateAgent&quot;,
            &quot;example&quot;: &quot;RealEstateAgent&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-570&gt;&quot;
          },
          &quot;roleName&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;enum: ListingAgent,BuyerAgent&quot;,
            &quot;enum&quot;: [
              &quot;ListingAgent&quot;,
              &quot;BuyerAgent&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-571&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
            &quot;example&quot;: &quot;https://{entityid}.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-572&gt;&quot;
          },
          &quot;identifier&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;unique identifier of the recipient from the data producer&quot;,
            &quot;properties&quot;: {
              &quot;bmsAgentId&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;maxLength&quot;: 12,
                &quot;example&quot;: &quot;1657897&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-574&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-573&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-569&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;TransactionEntry&quot;,
            &quot;description&quot;: &quot;describes a unit of sales credit in unit or commission value relative to a parent transaction&quot;,
            &quot;x-range&quot;: &quot;TransactionEntry&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;TransactionEntry&quot;,
                &quot;enum&quot;: [
                  &quot;TransactionEntry&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-566&gt;&quot;
              },
              &quot;salesProductionUnit&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;minimum&quot;: 0.0001,
                &quot;maximum&quot;: 1,
                &quot;description&quot;: &quot;the sales production units credited to the recipient&quot;,
                &quot;example&quot;: 0.5,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-567&gt;&quot;
              },
              &quot;salesProductionGCI&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;gross commission income credited to the recipient&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;MonetaryAmount&quot;,
                  &quot;value&quot;: 1234.56,
                  &quot;currency&quot;: &quot;USD&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-568&gt;&quot;
              },
              &quot;recipient&quot;: {
                &quot;description&quot;: &quot;the agent credited with the sales production and who receives the value&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;typically a RealEstateAgent&quot;,
                    &quot;example&quot;: &quot;RealEstateAgent&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-570&gt;&quot;
                  },
                  &quot;roleName&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;enum: ListingAgent,BuyerAgent&quot;,
                    &quot;enum&quot;: [
                      &quot;ListingAgent&quot;,
                      &quot;BuyerAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-571&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;example&quot;: &quot;https://{entityid}.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-572&gt;&quot;
                  },
                  &quot;identifier&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;unique identifier of the recipient from the data producer&quot;,
                    &quot;properties&quot;: {
                      &quot;bmsAgentId&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;example&quot;: &quot;1657897&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-574&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-573&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-569&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;TransactionEntry&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = identifier
required = false
path = recipient









### Example

```json
{
  "type": "TransactionEntry",
  "salesProductionUnit": 0.5,
  "salesProductionGCI": {
    "type": "MonetaryAmount",
    "value": 1234.56,
    "currency": "USD"
  },
  "recipient": {
    "type": "RealEstateAgent",
    "roleName": "ListingAgent",
    "id": "https://{entityid}.example.com/profile/card#me",
    "identifier": {
      "bmsAgentId": "1657897"
    }
  }
}
```

