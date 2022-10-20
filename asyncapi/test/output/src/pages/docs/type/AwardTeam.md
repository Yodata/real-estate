

---
title: AwardTeam
---

{
  "type": {
    "_json": {
      "description": "AwardTeam",
      "type": "string",
      "enum": [
        "AwardTeam"
      ],
      "x-parser-schema-id": "<anonymous-schema-138>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "AwardTeam",
          "type": "object",
          "x-range": "AwardTeam",
          "description": "a Collection",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "description": "AwardTeam",
              "type": "string",
              "enum": [
                "AwardTeam"
              ],
              "x-parser-schema-id": "<anonymous-schema-138>"
            },
            "name": {
              "type": "string",
              "description": "name of the AwardTeam",
              "example": "Clients",
              "x-parser-schema-id": "<anonymous-schema-139>"
            },
            "identifier": {
              "example": {
                "hsfTeamId": "xxxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-140>"
            },
            "member": {
              "description": "members of the AwardTeam",
              "type": "array",
              "x-range": [
                "RealEstateAgent",
                "RealEstateOffice",
                "RealEstateOrganization"
              ],
              "items": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-142>"
              },
              "example": [
                "https://user.example.com/profile/card#me",
                "https://office.example.com/profile/card#me",
                "https://company.example.com/profile/card#me"
              ],
              "x-parser-schema-id": "<anonymous-schema-141>"
            }
          },
          "x-parser-schema-id": "AwardTeam"
        },
        "options": {}
      }
    }
  },
  "name": {
    "_json": {
      "type": "string",
      "description": "name of the AwardTeam",
      "example": "Clients",
      "x-parser-schema-id": "<anonymous-schema-139>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "AwardTeam",
          "type": "object",
          "x-range": "AwardTeam",
          "description": "a Collection",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "description": "AwardTeam",
              "type": "string",
              "enum": [
                "AwardTeam"
              ],
              "x-parser-schema-id": "<anonymous-schema-138>"
            },
            "name": {
              "type": "string",
              "description": "name of the AwardTeam",
              "example": "Clients",
              "x-parser-schema-id": "<anonymous-schema-139>"
            },
            "identifier": {
              "example": {
                "hsfTeamId": "xxxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-140>"
            },
            "member": {
              "description": "members of the AwardTeam",
              "type": "array",
              "x-range": [
                "RealEstateAgent",
                "RealEstateOffice",
                "RealEstateOrganization"
              ],
              "items": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-142>"
              },
              "example": [
                "https://user.example.com/profile/card#me",
                "https://office.example.com/profile/card#me",
                "https://company.example.com/profile/card#me"
              ],
              "x-parser-schema-id": "<anonymous-schema-141>"
            }
          },
          "x-parser-schema-id": "AwardTeam"
        },
        "options": {}
      }
    }
  },
  "identifier": {
    "_json": {
      "example": {
        "hsfTeamId": "xxxxx"
      },
      "type": "object",
      "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
      "x-parser-schema-id": "<anonymous-schema-140>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "AwardTeam",
          "type": "object",
          "x-range": "AwardTeam",
          "description": "a Collection",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "description": "AwardTeam",
              "type": "string",
              "enum": [
                "AwardTeam"
              ],
              "x-parser-schema-id": "<anonymous-schema-138>"
            },
            "name": {
              "type": "string",
              "description": "name of the AwardTeam",
              "example": "Clients",
              "x-parser-schema-id": "<anonymous-schema-139>"
            },
            "identifier": {
              "example": {
                "hsfTeamId": "xxxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-140>"
            },
            "member": {
              "description": "members of the AwardTeam",
              "type": "array",
              "x-range": [
                "RealEstateAgent",
                "RealEstateOffice",
                "RealEstateOrganization"
              ],
              "items": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-142>"
              },
              "example": [
                "https://user.example.com/profile/card#me",
                "https://office.example.com/profile/card#me",
                "https://company.example.com/profile/card#me"
              ],
              "x-parser-schema-id": "<anonymous-schema-141>"
            }
          },
          "x-parser-schema-id": "AwardTeam"
        },
        "options": {}
      }
    }
  },
  "member": {
    "_json": {
      "description": "members of the AwardTeam",
      "type": "array",
      "x-range": [
        "RealEstateAgent",
        "RealEstateOffice",
        "RealEstateOrganization"
      ],
      "items": {
        "type": "string",
        "x-parser-schema-id": "<anonymous-schema-142>"
      },
      "example": [
        "https://user.example.com/profile/card#me",
        "https://office.example.com/profile/card#me",
        "https://company.example.com/profile/card#me"
      ],
      "x-parser-schema-id": "<anonymous-schema-141>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "AwardTeam",
          "type": "object",
          "x-range": "AwardTeam",
          "description": "a Collection",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "description": "AwardTeam",
              "type": "string",
              "enum": [
                "AwardTeam"
              ],
              "x-parser-schema-id": "<anonymous-schema-138>"
            },
            "name": {
              "type": "string",
              "description": "name of the AwardTeam",
              "example": "Clients",
              "x-parser-schema-id": "<anonymous-schema-139>"
            },
            "identifier": {
              "example": {
                "hsfTeamId": "xxxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-140>"
            },
            "member": {
              "description": "members of the AwardTeam",
              "type": "array",
              "x-range": [
                "RealEstateAgent",
                "RealEstateOffice",
                "RealEstateOrganization"
              ],
              "items": {
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-142>"
              },
              "example": [
                "https://user.example.com/profile/card#me",
                "https://office.example.com/profile/card#me",
                "https://company.example.com/profile/card#me"
              ],
              "x-parser-schema-id": "<anonymous-schema-141>"
            }
          },
          "x-parser-schema-id": "AwardTeam"
        },
        "options": {}
      }
    }
  }
}


# AwardTeam

a Collection



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "description": "AwardTeam",
    "type": "string",
    "enum": [
      "AwardTeam"
    ],
    "x-parser-schema-id": "<anonymous-schema-138>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "AwardTeam",
        "type": "object",
        "x-range": "AwardTeam",
        "description": "a Collection",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "description": "AwardTeam",
            "type": "string",
            "enum": [
              "AwardTeam"
            ],
            "x-parser-schema-id": "<anonymous-schema-138>"
          },
          "name": {
            "type": "string",
            "description": "name of the AwardTeam",
            "example": "Clients",
            "x-parser-schema-id": "<anonymous-schema-139>"
          },
          "identifier": {
            "example": {
              "hsfTeamId": "xxxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-140>"
          },
          "member": {
            "description": "members of the AwardTeam",
            "type": "array",
            "x-range": [
              "RealEstateAgent",
              "RealEstateOffice",
              "RealEstateOrganization"
            ],
            "items": {
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-142>"
            },
            "example": [
              "https://user.example.com/profile/card#me",
              "https://office.example.com/profile/card#me",
              "https://company.example.com/profile/card#me"
            ],
            "x-parser-schema-id": "<anonymous-schema-141>"
          }
        },
        "x-parser-schema-id": "AwardTeam"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "name of the AwardTeam",
    "example": "Clients",
    "x-parser-schema-id": "<anonymous-schema-139>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "AwardTeam",
        "type": "object",
        "x-range": "AwardTeam",
        "description": "a Collection",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "description": "AwardTeam",
            "type": "string",
            "enum": [
              "AwardTeam"
            ],
            "x-parser-schema-id": "<anonymous-schema-138>"
          },
          "name": {
            "type": "string",
            "description": "name of the AwardTeam",
            "example": "Clients",
            "x-parser-schema-id": "<anonymous-schema-139>"
          },
          "identifier": {
            "example": {
              "hsfTeamId": "xxxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-140>"
          },
          "member": {
            "description": "members of the AwardTeam",
            "type": "array",
            "x-range": [
              "RealEstateAgent",
              "RealEstateOffice",
              "RealEstateOrganization"
            ],
            "items": {
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-142>"
            },
            "example": [
              "https://user.example.com/profile/card#me",
              "https://office.example.com/profile/card#me",
              "https://company.example.com/profile/card#me"
            ],
            "x-parser-schema-id": "<anonymous-schema-141>"
          }
        },
        "x-parser-schema-id": "AwardTeam"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "example": {
      "hsfTeamId": "xxxxx"
    },
    "type": "object",
    "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
    "x-parser-schema-id": "<anonymous-schema-140>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "AwardTeam",
        "type": "object",
        "x-range": "AwardTeam",
        "description": "a Collection",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "description": "AwardTeam",
            "type": "string",
            "enum": [
              "AwardTeam"
            ],
            "x-parser-schema-id": "<anonymous-schema-138>"
          },
          "name": {
            "type": "string",
            "description": "name of the AwardTeam",
            "example": "Clients",
            "x-parser-schema-id": "<anonymous-schema-139>"
          },
          "identifier": {
            "example": {
              "hsfTeamId": "xxxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-140>"
          },
          "member": {
            "description": "members of the AwardTeam",
            "type": "array",
            "x-range": [
              "RealEstateAgent",
              "RealEstateOffice",
              "RealEstateOrganization"
            ],
            "items": {
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-142>"
            },
            "example": [
              "https://user.example.com/profile/card#me",
              "https://office.example.com/profile/card#me",
              "https://company.example.com/profile/card#me"
            ],
            "x-parser-schema-id": "<anonymous-schema-141>"
          }
        },
        "x-parser-schema-id": "AwardTeam"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "members of the AwardTeam",
    "type": "array",
    "x-range": [
      "RealEstateAgent",
      "RealEstateOffice",
      "RealEstateOrganization"
    ],
    "items": {
      "type": "string",
      "x-parser-schema-id": "<anonymous-schema-142>"
    },
    "example": [
      "https://user.example.com/profile/card#me",
      "https://office.example.com/profile/card#me",
      "https://company.example.com/profile/card#me"
    ],
    "x-parser-schema-id": "<anonymous-schema-141>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "AwardTeam",
        "type": "object",
        "x-range": "AwardTeam",
        "description": "a Collection",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "description": "AwardTeam",
            "type": "string",
            "enum": [
              "AwardTeam"
            ],
            "x-parser-schema-id": "<anonymous-schema-138>"
          },
          "name": {
            "type": "string",
            "description": "name of the AwardTeam",
            "example": "Clients",
            "x-parser-schema-id": "<anonymous-schema-139>"
          },
          "identifier": {
            "example": {
              "hsfTeamId": "xxxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-140>"
          },
          "member": {
            "description": "members of the AwardTeam",
            "type": "array",
            "x-range": [
              "RealEstateAgent",
              "RealEstateOffice",
              "RealEstateOrganization"
            ],
            "items": {
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-142>"
            },
            "example": [
              "https://user.example.com/profile/card#me",
              "https://office.example.com/profile/card#me",
              "https://company.example.com/profile/card#me"
            ],
            "x-parser-schema-id": "<anonymous-schema-141>"
          }
        },
        "x-parser-schema-id": "AwardTeam"
      },
      "options": {}
    }
  }
}












### Example

```json
{
  "type": "AwardTeam",
  "name": "Clients",
  "identifier": {
    "hsfTeamId": "xxxxx"
  },
  "member": [
    "https://user.example.com/profile/card#me",
    "https://office.example.com/profile/card#me",
    "https://company.example.com/profile/card#me"
  ]
}
```

