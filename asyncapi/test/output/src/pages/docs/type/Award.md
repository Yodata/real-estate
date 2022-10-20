

---
title: Award
---

{
  "type": {
    "_json": {
      "type": "string",
      "enum": [
        "Award"
      ],
      "description": "\"AwardAction\"",
      "x-parser-schema-id": "<anonymous-schema-123>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Award",
          "type": "object",
          "description": "An honor bestowed on one or mote _recipients_ by the message _agent_",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Award"
              ],
              "description": "\"AwardAction\"",
              "x-parser-schema-id": "<anonymous-schema-123>"
            },
            "name": {
              "example": "Top 1%",
              "description": "name of the award",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-124>"
            },
            "dateAwarded": {
              "type": "string",
              "description": "date the award was presented or announced.",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-125>"
            },
            "agent": {
              "title": "creator",
              "description": "the item creator",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": "http://agent.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-126>"
            },
            "recipient": {
              "type": "array",
              "items": {
                "title": "recipient",
                "description": "the recipient",
                "type": "object",
                "x-range": [
                  "Person",
                  "Organization"
                ],
                "example": {
                  "type": "RealEstateAgent",
                  "name": "Randy RealEstateAgent",
                  "id": "https://{userid}.example.com/profile/card#me"
                },
                "x-parser-schema-id": "<anonymous-schema-128>"
              },
              "x-parser-schema-id": "<anonymous-schema-127>"
            },
            "identifier": {
              "example": {
                "hsfAwardId": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-129>"
            }
          },
          "x-parser-schema-id": "Award"
        },
        "options": {}
      }
    }
  },
  "name": {
    "_json": {
      "example": "Top 1%",
      "description": "name of the award",
      "type": "string",
      "x-parser-schema-id": "<anonymous-schema-124>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Award",
          "type": "object",
          "description": "An honor bestowed on one or mote _recipients_ by the message _agent_",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Award"
              ],
              "description": "\"AwardAction\"",
              "x-parser-schema-id": "<anonymous-schema-123>"
            },
            "name": {
              "example": "Top 1%",
              "description": "name of the award",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-124>"
            },
            "dateAwarded": {
              "type": "string",
              "description": "date the award was presented or announced.",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-125>"
            },
            "agent": {
              "title": "creator",
              "description": "the item creator",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": "http://agent.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-126>"
            },
            "recipient": {
              "type": "array",
              "items": {
                "title": "recipient",
                "description": "the recipient",
                "type": "object",
                "x-range": [
                  "Person",
                  "Organization"
                ],
                "example": {
                  "type": "RealEstateAgent",
                  "name": "Randy RealEstateAgent",
                  "id": "https://{userid}.example.com/profile/card#me"
                },
                "x-parser-schema-id": "<anonymous-schema-128>"
              },
              "x-parser-schema-id": "<anonymous-schema-127>"
            },
            "identifier": {
              "example": {
                "hsfAwardId": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-129>"
            }
          },
          "x-parser-schema-id": "Award"
        },
        "options": {}
      }
    }
  },
  "dateAwarded": {
    "_json": {
      "type": "string",
      "description": "date the award was presented or announced.",
      "x-range": "DateTime",
      "example": "2019-11-25T04:23:32.000Z",
      "x-parser-schema-id": "<anonymous-schema-125>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Award",
          "type": "object",
          "description": "An honor bestowed on one or mote _recipients_ by the message _agent_",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Award"
              ],
              "description": "\"AwardAction\"",
              "x-parser-schema-id": "<anonymous-schema-123>"
            },
            "name": {
              "example": "Top 1%",
              "description": "name of the award",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-124>"
            },
            "dateAwarded": {
              "type": "string",
              "description": "date the award was presented or announced.",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-125>"
            },
            "agent": {
              "title": "creator",
              "description": "the item creator",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": "http://agent.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-126>"
            },
            "recipient": {
              "type": "array",
              "items": {
                "title": "recipient",
                "description": "the recipient",
                "type": "object",
                "x-range": [
                  "Person",
                  "Organization"
                ],
                "example": {
                  "type": "RealEstateAgent",
                  "name": "Randy RealEstateAgent",
                  "id": "https://{userid}.example.com/profile/card#me"
                },
                "x-parser-schema-id": "<anonymous-schema-128>"
              },
              "x-parser-schema-id": "<anonymous-schema-127>"
            },
            "identifier": {
              "example": {
                "hsfAwardId": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-129>"
            }
          },
          "x-parser-schema-id": "Award"
        },
        "options": {}
      }
    }
  },
  "agent": {
    "_json": {
      "title": "creator",
      "description": "the item creator",
      "x-range": [
        "Person",
        "Organization"
      ],
      "example": "http://agent.example.com/profile/card#me",
      "x-parser-schema-id": "<anonymous-schema-126>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Award",
          "type": "object",
          "description": "An honor bestowed on one or mote _recipients_ by the message _agent_",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Award"
              ],
              "description": "\"AwardAction\"",
              "x-parser-schema-id": "<anonymous-schema-123>"
            },
            "name": {
              "example": "Top 1%",
              "description": "name of the award",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-124>"
            },
            "dateAwarded": {
              "type": "string",
              "description": "date the award was presented or announced.",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-125>"
            },
            "agent": {
              "title": "creator",
              "description": "the item creator",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": "http://agent.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-126>"
            },
            "recipient": {
              "type": "array",
              "items": {
                "title": "recipient",
                "description": "the recipient",
                "type": "object",
                "x-range": [
                  "Person",
                  "Organization"
                ],
                "example": {
                  "type": "RealEstateAgent",
                  "name": "Randy RealEstateAgent",
                  "id": "https://{userid}.example.com/profile/card#me"
                },
                "x-parser-schema-id": "<anonymous-schema-128>"
              },
              "x-parser-schema-id": "<anonymous-schema-127>"
            },
            "identifier": {
              "example": {
                "hsfAwardId": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-129>"
            }
          },
          "x-parser-schema-id": "Award"
        },
        "options": {}
      }
    }
  },
  "recipient": {
    "_json": {
      "type": "array",
      "items": {
        "title": "recipient",
        "description": "the recipient",
        "type": "object",
        "x-range": [
          "Person",
          "Organization"
        ],
        "example": {
          "type": "RealEstateAgent",
          "name": "Randy RealEstateAgent",
          "id": "https://{userid}.example.com/profile/card#me"
        },
        "x-parser-schema-id": "<anonymous-schema-128>"
      },
      "x-parser-schema-id": "<anonymous-schema-127>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Award",
          "type": "object",
          "description": "An honor bestowed on one or mote _recipients_ by the message _agent_",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Award"
              ],
              "description": "\"AwardAction\"",
              "x-parser-schema-id": "<anonymous-schema-123>"
            },
            "name": {
              "example": "Top 1%",
              "description": "name of the award",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-124>"
            },
            "dateAwarded": {
              "type": "string",
              "description": "date the award was presented or announced.",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-125>"
            },
            "agent": {
              "title": "creator",
              "description": "the item creator",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": "http://agent.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-126>"
            },
            "recipient": {
              "type": "array",
              "items": {
                "title": "recipient",
                "description": "the recipient",
                "type": "object",
                "x-range": [
                  "Person",
                  "Organization"
                ],
                "example": {
                  "type": "RealEstateAgent",
                  "name": "Randy RealEstateAgent",
                  "id": "https://{userid}.example.com/profile/card#me"
                },
                "x-parser-schema-id": "<anonymous-schema-128>"
              },
              "x-parser-schema-id": "<anonymous-schema-127>"
            },
            "identifier": {
              "example": {
                "hsfAwardId": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-129>"
            }
          },
          "x-parser-schema-id": "Award"
        },
        "options": {}
      }
    }
  },
  "identifier": {
    "_json": {
      "example": {
        "hsfAwardId": "xxxx"
      },
      "type": "object",
      "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
      "x-parser-schema-id": "<anonymous-schema-129>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Award",
          "type": "object",
          "description": "An honor bestowed on one or mote _recipients_ by the message _agent_",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Award"
              ],
              "description": "\"AwardAction\"",
              "x-parser-schema-id": "<anonymous-schema-123>"
            },
            "name": {
              "example": "Top 1%",
              "description": "name of the award",
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-124>"
            },
            "dateAwarded": {
              "type": "string",
              "description": "date the award was presented or announced.",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-125>"
            },
            "agent": {
              "title": "creator",
              "description": "the item creator",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": "http://agent.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-126>"
            },
            "recipient": {
              "type": "array",
              "items": {
                "title": "recipient",
                "description": "the recipient",
                "type": "object",
                "x-range": [
                  "Person",
                  "Organization"
                ],
                "example": {
                  "type": "RealEstateAgent",
                  "name": "Randy RealEstateAgent",
                  "id": "https://{userid}.example.com/profile/card#me"
                },
                "x-parser-schema-id": "<anonymous-schema-128>"
              },
              "x-parser-schema-id": "<anonymous-schema-127>"
            },
            "identifier": {
              "example": {
                "hsfAwardId": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-129>"
            }
          },
          "x-parser-schema-id": "Award"
        },
        "options": {}
      }
    }
  }
}


# Award

An honor bestowed on one or mote _recipients_ by the message _agent_



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "enum": [
      "Award"
    ],
    "description": "\"AwardAction\"",
    "x-parser-schema-id": "<anonymous-schema-123>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Award",
        "type": "object",
        "description": "An honor bestowed on one or mote _recipients_ by the message _agent_",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Award"
            ],
            "description": "\"AwardAction\"",
            "x-parser-schema-id": "<anonymous-schema-123>"
          },
          "name": {
            "example": "Top 1%",
            "description": "name of the award",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-124>"
          },
          "dateAwarded": {
            "type": "string",
            "description": "date the award was presented or announced.",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-125>"
          },
          "agent": {
            "title": "creator",
            "description": "the item creator",
            "x-range": [
              "Person",
              "Organization"
            ],
            "example": "http://agent.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-126>"
          },
          "recipient": {
            "type": "array",
            "items": {
              "title": "recipient",
              "description": "the recipient",
              "type": "object",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": {
                "type": "RealEstateAgent",
                "name": "Randy RealEstateAgent",
                "id": "https://{userid}.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-128>"
            },
            "x-parser-schema-id": "<anonymous-schema-127>"
          },
          "identifier": {
            "example": {
              "hsfAwardId": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-129>"
          }
        },
        "x-parser-schema-id": "Award"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "example": "Top 1%",
    "description": "name of the award",
    "type": "string",
    "x-parser-schema-id": "<anonymous-schema-124>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Award",
        "type": "object",
        "description": "An honor bestowed on one or mote _recipients_ by the message _agent_",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Award"
            ],
            "description": "\"AwardAction\"",
            "x-parser-schema-id": "<anonymous-schema-123>"
          },
          "name": {
            "example": "Top 1%",
            "description": "name of the award",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-124>"
          },
          "dateAwarded": {
            "type": "string",
            "description": "date the award was presented or announced.",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-125>"
          },
          "agent": {
            "title": "creator",
            "description": "the item creator",
            "x-range": [
              "Person",
              "Organization"
            ],
            "example": "http://agent.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-126>"
          },
          "recipient": {
            "type": "array",
            "items": {
              "title": "recipient",
              "description": "the recipient",
              "type": "object",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": {
                "type": "RealEstateAgent",
                "name": "Randy RealEstateAgent",
                "id": "https://{userid}.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-128>"
            },
            "x-parser-schema-id": "<anonymous-schema-127>"
          },
          "identifier": {
            "example": {
              "hsfAwardId": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-129>"
          }
        },
        "x-parser-schema-id": "Award"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "date the award was presented or announced.",
    "x-range": "DateTime",
    "example": "2019-11-25T04:23:32.000Z",
    "x-parser-schema-id": "<anonymous-schema-125>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Award",
        "type": "object",
        "description": "An honor bestowed on one or mote _recipients_ by the message _agent_",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Award"
            ],
            "description": "\"AwardAction\"",
            "x-parser-schema-id": "<anonymous-schema-123>"
          },
          "name": {
            "example": "Top 1%",
            "description": "name of the award",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-124>"
          },
          "dateAwarded": {
            "type": "string",
            "description": "date the award was presented or announced.",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-125>"
          },
          "agent": {
            "title": "creator",
            "description": "the item creator",
            "x-range": [
              "Person",
              "Organization"
            ],
            "example": "http://agent.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-126>"
          },
          "recipient": {
            "type": "array",
            "items": {
              "title": "recipient",
              "description": "the recipient",
              "type": "object",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": {
                "type": "RealEstateAgent",
                "name": "Randy RealEstateAgent",
                "id": "https://{userid}.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-128>"
            },
            "x-parser-schema-id": "<anonymous-schema-127>"
          },
          "identifier": {
            "example": {
              "hsfAwardId": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-129>"
          }
        },
        "x-parser-schema-id": "Award"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "title": "creator",
    "description": "the item creator",
    "x-range": [
      "Person",
      "Organization"
    ],
    "example": "http://agent.example.com/profile/card#me",
    "x-parser-schema-id": "<anonymous-schema-126>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Award",
        "type": "object",
        "description": "An honor bestowed on one or mote _recipients_ by the message _agent_",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Award"
            ],
            "description": "\"AwardAction\"",
            "x-parser-schema-id": "<anonymous-schema-123>"
          },
          "name": {
            "example": "Top 1%",
            "description": "name of the award",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-124>"
          },
          "dateAwarded": {
            "type": "string",
            "description": "date the award was presented or announced.",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-125>"
          },
          "agent": {
            "title": "creator",
            "description": "the item creator",
            "x-range": [
              "Person",
              "Organization"
            ],
            "example": "http://agent.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-126>"
          },
          "recipient": {
            "type": "array",
            "items": {
              "title": "recipient",
              "description": "the recipient",
              "type": "object",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": {
                "type": "RealEstateAgent",
                "name": "Randy RealEstateAgent",
                "id": "https://{userid}.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-128>"
            },
            "x-parser-schema-id": "<anonymous-schema-127>"
          },
          "identifier": {
            "example": {
              "hsfAwardId": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-129>"
          }
        },
        "x-parser-schema-id": "Award"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "array",
    "items": {
      "title": "recipient",
      "description": "the recipient",
      "type": "object",
      "x-range": [
        "Person",
        "Organization"
      ],
      "example": {
        "type": "RealEstateAgent",
        "name": "Randy RealEstateAgent",
        "id": "https://{userid}.example.com/profile/card#me"
      },
      "x-parser-schema-id": "<anonymous-schema-128>"
    },
    "x-parser-schema-id": "<anonymous-schema-127>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Award",
        "type": "object",
        "description": "An honor bestowed on one or mote _recipients_ by the message _agent_",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Award"
            ],
            "description": "\"AwardAction\"",
            "x-parser-schema-id": "<anonymous-schema-123>"
          },
          "name": {
            "example": "Top 1%",
            "description": "name of the award",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-124>"
          },
          "dateAwarded": {
            "type": "string",
            "description": "date the award was presented or announced.",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-125>"
          },
          "agent": {
            "title": "creator",
            "description": "the item creator",
            "x-range": [
              "Person",
              "Organization"
            ],
            "example": "http://agent.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-126>"
          },
          "recipient": {
            "type": "array",
            "items": {
              "title": "recipient",
              "description": "the recipient",
              "type": "object",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": {
                "type": "RealEstateAgent",
                "name": "Randy RealEstateAgent",
                "id": "https://{userid}.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-128>"
            },
            "x-parser-schema-id": "<anonymous-schema-127>"
          },
          "identifier": {
            "example": {
              "hsfAwardId": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-129>"
          }
        },
        "x-parser-schema-id": "Award"
      },
      "options": {}
    }
  }
}








{
  "_json": {
    "example": {
      "hsfAwardId": "xxxx"
    },
    "type": "object",
    "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
    "x-parser-schema-id": "<anonymous-schema-129>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Award",
        "type": "object",
        "description": "An honor bestowed on one or mote _recipients_ by the message _agent_",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Award"
            ],
            "description": "\"AwardAction\"",
            "x-parser-schema-id": "<anonymous-schema-123>"
          },
          "name": {
            "example": "Top 1%",
            "description": "name of the award",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-124>"
          },
          "dateAwarded": {
            "type": "string",
            "description": "date the award was presented or announced.",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-125>"
          },
          "agent": {
            "title": "creator",
            "description": "the item creator",
            "x-range": [
              "Person",
              "Organization"
            ],
            "example": "http://agent.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-126>"
          },
          "recipient": {
            "type": "array",
            "items": {
              "title": "recipient",
              "description": "the recipient",
              "type": "object",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": {
                "type": "RealEstateAgent",
                "name": "Randy RealEstateAgent",
                "id": "https://{userid}.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-128>"
            },
            "x-parser-schema-id": "<anonymous-schema-127>"
          },
          "identifier": {
            "example": {
              "hsfAwardId": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-129>"
          }
        },
        "x-parser-schema-id": "Award"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "Award",
  "name": "Top 1%",
  "dateAwarded": "2019-11-25T04:23:32.000Z",
  "agent": "http://agent.example.com/profile/card#me",
  "recipient": [
    {
      "type": "RealEstateAgent",
      "name": "Randy RealEstateAgent",
      "id": "https://{userid}.example.com/profile/card#me"
    }
  ],
  "identifier": {
    "hsfAwardId": "xxxx"
  }
}
```

