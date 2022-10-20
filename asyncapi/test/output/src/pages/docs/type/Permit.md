

---
title: Permit
---

{
  "type": {
    "_json": {
      "type": "string",
      "description": "Permit type.",
      "enum": [
        "Permit"
      ],
      "x-parser-schema-id": "<anonymous-schema-338>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Permit",
          "description": "A permit issued by an organization to an individual or business.",
          "type": "object",
          "x-hasSubclass": [
            "RealEstateLicense"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "Permit type.",
              "enum": [
                "Permit"
              ],
              "x-parser-schema-id": "<anonymous-schema-338>"
            },
            "name": {
              "type": "string",
              "description": "Common or display value of the Permit.",
              "example": "DRE Number",
              "x-parser-schema-id": "<anonymous-schema-339>"
            },
            "issuedBy": {
              "type": "object",
              "x-range": "Organization",
              "description": "The issuing authority",
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-340>"
            },
            "issuedThrough": {
              "type": "object",
              "description": "the service through which the permit was granted",
              "example": {
                "type": "Service",
                "name": "Department of Real Estate"
              },
              "x-parser-schema-id": "<anonymous-schema-341>"
            },
            "validIn": {
              "type": "object",
              "x-range": "Place",
              "x-parser-schema-id": "<anonymous-schema-342>"
            },
            "validFrom": {
              "type": "string",
              "format": "date-time",
              "description": "start date",
              "x-parser-schema-id": "<anonymous-schema-343>"
            },
            "validUntil": {
              "type": "string",
              "format": "date-time",
              "description": "end date",
              "x-parser-schema-id": "<anonymous-schema-344>"
            }
          },
          "x-parser-schema-id": "Permit"
        },
        "options": {}
      }
    }
  },
  "name": {
    "_json": {
      "type": "string",
      "description": "Common or display value of the Permit.",
      "example": "DRE Number",
      "x-parser-schema-id": "<anonymous-schema-339>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Permit",
          "description": "A permit issued by an organization to an individual or business.",
          "type": "object",
          "x-hasSubclass": [
            "RealEstateLicense"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "Permit type.",
              "enum": [
                "Permit"
              ],
              "x-parser-schema-id": "<anonymous-schema-338>"
            },
            "name": {
              "type": "string",
              "description": "Common or display value of the Permit.",
              "example": "DRE Number",
              "x-parser-schema-id": "<anonymous-schema-339>"
            },
            "issuedBy": {
              "type": "object",
              "x-range": "Organization",
              "description": "The issuing authority",
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-340>"
            },
            "issuedThrough": {
              "type": "object",
              "description": "the service through which the permit was granted",
              "example": {
                "type": "Service",
                "name": "Department of Real Estate"
              },
              "x-parser-schema-id": "<anonymous-schema-341>"
            },
            "validIn": {
              "type": "object",
              "x-range": "Place",
              "x-parser-schema-id": "<anonymous-schema-342>"
            },
            "validFrom": {
              "type": "string",
              "format": "date-time",
              "description": "start date",
              "x-parser-schema-id": "<anonymous-schema-343>"
            },
            "validUntil": {
              "type": "string",
              "format": "date-time",
              "description": "end date",
              "x-parser-schema-id": "<anonymous-schema-344>"
            }
          },
          "x-parser-schema-id": "Permit"
        },
        "options": {}
      }
    }
  },
  "issuedBy": {
    "_json": {
      "type": "object",
      "x-range": "Organization",
      "description": "The issuing authority",
      "example": {
        "type": "State",
        "name": "California"
      },
      "x-parser-schema-id": "<anonymous-schema-340>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Permit",
          "description": "A permit issued by an organization to an individual or business.",
          "type": "object",
          "x-hasSubclass": [
            "RealEstateLicense"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "Permit type.",
              "enum": [
                "Permit"
              ],
              "x-parser-schema-id": "<anonymous-schema-338>"
            },
            "name": {
              "type": "string",
              "description": "Common or display value of the Permit.",
              "example": "DRE Number",
              "x-parser-schema-id": "<anonymous-schema-339>"
            },
            "issuedBy": {
              "type": "object",
              "x-range": "Organization",
              "description": "The issuing authority",
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-340>"
            },
            "issuedThrough": {
              "type": "object",
              "description": "the service through which the permit was granted",
              "example": {
                "type": "Service",
                "name": "Department of Real Estate"
              },
              "x-parser-schema-id": "<anonymous-schema-341>"
            },
            "validIn": {
              "type": "object",
              "x-range": "Place",
              "x-parser-schema-id": "<anonymous-schema-342>"
            },
            "validFrom": {
              "type": "string",
              "format": "date-time",
              "description": "start date",
              "x-parser-schema-id": "<anonymous-schema-343>"
            },
            "validUntil": {
              "type": "string",
              "format": "date-time",
              "description": "end date",
              "x-parser-schema-id": "<anonymous-schema-344>"
            }
          },
          "x-parser-schema-id": "Permit"
        },
        "options": {}
      }
    }
  },
  "issuedThrough": {
    "_json": {
      "type": "object",
      "description": "the service through which the permit was granted",
      "example": {
        "type": "Service",
        "name": "Department of Real Estate"
      },
      "x-parser-schema-id": "<anonymous-schema-341>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Permit",
          "description": "A permit issued by an organization to an individual or business.",
          "type": "object",
          "x-hasSubclass": [
            "RealEstateLicense"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "Permit type.",
              "enum": [
                "Permit"
              ],
              "x-parser-schema-id": "<anonymous-schema-338>"
            },
            "name": {
              "type": "string",
              "description": "Common or display value of the Permit.",
              "example": "DRE Number",
              "x-parser-schema-id": "<anonymous-schema-339>"
            },
            "issuedBy": {
              "type": "object",
              "x-range": "Organization",
              "description": "The issuing authority",
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-340>"
            },
            "issuedThrough": {
              "type": "object",
              "description": "the service through which the permit was granted",
              "example": {
                "type": "Service",
                "name": "Department of Real Estate"
              },
              "x-parser-schema-id": "<anonymous-schema-341>"
            },
            "validIn": {
              "type": "object",
              "x-range": "Place",
              "x-parser-schema-id": "<anonymous-schema-342>"
            },
            "validFrom": {
              "type": "string",
              "format": "date-time",
              "description": "start date",
              "x-parser-schema-id": "<anonymous-schema-343>"
            },
            "validUntil": {
              "type": "string",
              "format": "date-time",
              "description": "end date",
              "x-parser-schema-id": "<anonymous-schema-344>"
            }
          },
          "x-parser-schema-id": "Permit"
        },
        "options": {}
      }
    }
  },
  "validIn": {
    "_json": {
      "type": "object",
      "x-range": "Place",
      "x-parser-schema-id": "<anonymous-schema-342>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Permit",
          "description": "A permit issued by an organization to an individual or business.",
          "type": "object",
          "x-hasSubclass": [
            "RealEstateLicense"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "Permit type.",
              "enum": [
                "Permit"
              ],
              "x-parser-schema-id": "<anonymous-schema-338>"
            },
            "name": {
              "type": "string",
              "description": "Common or display value of the Permit.",
              "example": "DRE Number",
              "x-parser-schema-id": "<anonymous-schema-339>"
            },
            "issuedBy": {
              "type": "object",
              "x-range": "Organization",
              "description": "The issuing authority",
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-340>"
            },
            "issuedThrough": {
              "type": "object",
              "description": "the service through which the permit was granted",
              "example": {
                "type": "Service",
                "name": "Department of Real Estate"
              },
              "x-parser-schema-id": "<anonymous-schema-341>"
            },
            "validIn": {
              "type": "object",
              "x-range": "Place",
              "x-parser-schema-id": "<anonymous-schema-342>"
            },
            "validFrom": {
              "type": "string",
              "format": "date-time",
              "description": "start date",
              "x-parser-schema-id": "<anonymous-schema-343>"
            },
            "validUntil": {
              "type": "string",
              "format": "date-time",
              "description": "end date",
              "x-parser-schema-id": "<anonymous-schema-344>"
            }
          },
          "x-parser-schema-id": "Permit"
        },
        "options": {}
      }
    }
  },
  "validFrom": {
    "_json": {
      "type": "string",
      "format": "date-time",
      "description": "start date",
      "x-parser-schema-id": "<anonymous-schema-343>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Permit",
          "description": "A permit issued by an organization to an individual or business.",
          "type": "object",
          "x-hasSubclass": [
            "RealEstateLicense"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "Permit type.",
              "enum": [
                "Permit"
              ],
              "x-parser-schema-id": "<anonymous-schema-338>"
            },
            "name": {
              "type": "string",
              "description": "Common or display value of the Permit.",
              "example": "DRE Number",
              "x-parser-schema-id": "<anonymous-schema-339>"
            },
            "issuedBy": {
              "type": "object",
              "x-range": "Organization",
              "description": "The issuing authority",
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-340>"
            },
            "issuedThrough": {
              "type": "object",
              "description": "the service through which the permit was granted",
              "example": {
                "type": "Service",
                "name": "Department of Real Estate"
              },
              "x-parser-schema-id": "<anonymous-schema-341>"
            },
            "validIn": {
              "type": "object",
              "x-range": "Place",
              "x-parser-schema-id": "<anonymous-schema-342>"
            },
            "validFrom": {
              "type": "string",
              "format": "date-time",
              "description": "start date",
              "x-parser-schema-id": "<anonymous-schema-343>"
            },
            "validUntil": {
              "type": "string",
              "format": "date-time",
              "description": "end date",
              "x-parser-schema-id": "<anonymous-schema-344>"
            }
          },
          "x-parser-schema-id": "Permit"
        },
        "options": {}
      }
    }
  },
  "validUntil": {
    "_json": {
      "type": "string",
      "format": "date-time",
      "description": "end date",
      "x-parser-schema-id": "<anonymous-schema-344>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Permit",
          "description": "A permit issued by an organization to an individual or business.",
          "type": "object",
          "x-hasSubclass": [
            "RealEstateLicense"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "Permit type.",
              "enum": [
                "Permit"
              ],
              "x-parser-schema-id": "<anonymous-schema-338>"
            },
            "name": {
              "type": "string",
              "description": "Common or display value of the Permit.",
              "example": "DRE Number",
              "x-parser-schema-id": "<anonymous-schema-339>"
            },
            "issuedBy": {
              "type": "object",
              "x-range": "Organization",
              "description": "The issuing authority",
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-340>"
            },
            "issuedThrough": {
              "type": "object",
              "description": "the service through which the permit was granted",
              "example": {
                "type": "Service",
                "name": "Department of Real Estate"
              },
              "x-parser-schema-id": "<anonymous-schema-341>"
            },
            "validIn": {
              "type": "object",
              "x-range": "Place",
              "x-parser-schema-id": "<anonymous-schema-342>"
            },
            "validFrom": {
              "type": "string",
              "format": "date-time",
              "description": "start date",
              "x-parser-schema-id": "<anonymous-schema-343>"
            },
            "validUntil": {
              "type": "string",
              "format": "date-time",
              "description": "end date",
              "x-parser-schema-id": "<anonymous-schema-344>"
            }
          },
          "x-parser-schema-id": "Permit"
        },
        "options": {}
      }
    }
  }
}


# Permit

A permit issued by an organization to an individual or business.



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "description": "Permit type.",
    "enum": [
      "Permit"
    ],
    "x-parser-schema-id": "<anonymous-schema-338>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Permit",
        "description": "A permit issued by an organization to an individual or business.",
        "type": "object",
        "x-hasSubclass": [
          "RealEstateLicense"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "Permit type.",
            "enum": [
              "Permit"
            ],
            "x-parser-schema-id": "<anonymous-schema-338>"
          },
          "name": {
            "type": "string",
            "description": "Common or display value of the Permit.",
            "example": "DRE Number",
            "x-parser-schema-id": "<anonymous-schema-339>"
          },
          "issuedBy": {
            "type": "object",
            "x-range": "Organization",
            "description": "The issuing authority",
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-340>"
          },
          "issuedThrough": {
            "type": "object",
            "description": "the service through which the permit was granted",
            "example": {
              "type": "Service",
              "name": "Department of Real Estate"
            },
            "x-parser-schema-id": "<anonymous-schema-341>"
          },
          "validIn": {
            "type": "object",
            "x-range": "Place",
            "x-parser-schema-id": "<anonymous-schema-342>"
          },
          "validFrom": {
            "type": "string",
            "format": "date-time",
            "description": "start date",
            "x-parser-schema-id": "<anonymous-schema-343>"
          },
          "validUntil": {
            "type": "string",
            "format": "date-time",
            "description": "end date",
            "x-parser-schema-id": "<anonymous-schema-344>"
          }
        },
        "x-parser-schema-id": "Permit"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "Common or display value of the Permit.",
    "example": "DRE Number",
    "x-parser-schema-id": "<anonymous-schema-339>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Permit",
        "description": "A permit issued by an organization to an individual or business.",
        "type": "object",
        "x-hasSubclass": [
          "RealEstateLicense"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "Permit type.",
            "enum": [
              "Permit"
            ],
            "x-parser-schema-id": "<anonymous-schema-338>"
          },
          "name": {
            "type": "string",
            "description": "Common or display value of the Permit.",
            "example": "DRE Number",
            "x-parser-schema-id": "<anonymous-schema-339>"
          },
          "issuedBy": {
            "type": "object",
            "x-range": "Organization",
            "description": "The issuing authority",
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-340>"
          },
          "issuedThrough": {
            "type": "object",
            "description": "the service through which the permit was granted",
            "example": {
              "type": "Service",
              "name": "Department of Real Estate"
            },
            "x-parser-schema-id": "<anonymous-schema-341>"
          },
          "validIn": {
            "type": "object",
            "x-range": "Place",
            "x-parser-schema-id": "<anonymous-schema-342>"
          },
          "validFrom": {
            "type": "string",
            "format": "date-time",
            "description": "start date",
            "x-parser-schema-id": "<anonymous-schema-343>"
          },
          "validUntil": {
            "type": "string",
            "format": "date-time",
            "description": "end date",
            "x-parser-schema-id": "<anonymous-schema-344>"
          }
        },
        "x-parser-schema-id": "Permit"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "x-range": "Organization",
    "description": "The issuing authority",
    "example": {
      "type": "State",
      "name": "California"
    },
    "x-parser-schema-id": "<anonymous-schema-340>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Permit",
        "description": "A permit issued by an organization to an individual or business.",
        "type": "object",
        "x-hasSubclass": [
          "RealEstateLicense"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "Permit type.",
            "enum": [
              "Permit"
            ],
            "x-parser-schema-id": "<anonymous-schema-338>"
          },
          "name": {
            "type": "string",
            "description": "Common or display value of the Permit.",
            "example": "DRE Number",
            "x-parser-schema-id": "<anonymous-schema-339>"
          },
          "issuedBy": {
            "type": "object",
            "x-range": "Organization",
            "description": "The issuing authority",
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-340>"
          },
          "issuedThrough": {
            "type": "object",
            "description": "the service through which the permit was granted",
            "example": {
              "type": "Service",
              "name": "Department of Real Estate"
            },
            "x-parser-schema-id": "<anonymous-schema-341>"
          },
          "validIn": {
            "type": "object",
            "x-range": "Place",
            "x-parser-schema-id": "<anonymous-schema-342>"
          },
          "validFrom": {
            "type": "string",
            "format": "date-time",
            "description": "start date",
            "x-parser-schema-id": "<anonymous-schema-343>"
          },
          "validUntil": {
            "type": "string",
            "format": "date-time",
            "description": "end date",
            "x-parser-schema-id": "<anonymous-schema-344>"
          }
        },
        "x-parser-schema-id": "Permit"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "the service through which the permit was granted",
    "example": {
      "type": "Service",
      "name": "Department of Real Estate"
    },
    "x-parser-schema-id": "<anonymous-schema-341>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Permit",
        "description": "A permit issued by an organization to an individual or business.",
        "type": "object",
        "x-hasSubclass": [
          "RealEstateLicense"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "Permit type.",
            "enum": [
              "Permit"
            ],
            "x-parser-schema-id": "<anonymous-schema-338>"
          },
          "name": {
            "type": "string",
            "description": "Common or display value of the Permit.",
            "example": "DRE Number",
            "x-parser-schema-id": "<anonymous-schema-339>"
          },
          "issuedBy": {
            "type": "object",
            "x-range": "Organization",
            "description": "The issuing authority",
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-340>"
          },
          "issuedThrough": {
            "type": "object",
            "description": "the service through which the permit was granted",
            "example": {
              "type": "Service",
              "name": "Department of Real Estate"
            },
            "x-parser-schema-id": "<anonymous-schema-341>"
          },
          "validIn": {
            "type": "object",
            "x-range": "Place",
            "x-parser-schema-id": "<anonymous-schema-342>"
          },
          "validFrom": {
            "type": "string",
            "format": "date-time",
            "description": "start date",
            "x-parser-schema-id": "<anonymous-schema-343>"
          },
          "validUntil": {
            "type": "string",
            "format": "date-time",
            "description": "end date",
            "x-parser-schema-id": "<anonymous-schema-344>"
          }
        },
        "x-parser-schema-id": "Permit"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "x-range": "Place",
    "x-parser-schema-id": "<anonymous-schema-342>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Permit",
        "description": "A permit issued by an organization to an individual or business.",
        "type": "object",
        "x-hasSubclass": [
          "RealEstateLicense"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "Permit type.",
            "enum": [
              "Permit"
            ],
            "x-parser-schema-id": "<anonymous-schema-338>"
          },
          "name": {
            "type": "string",
            "description": "Common or display value of the Permit.",
            "example": "DRE Number",
            "x-parser-schema-id": "<anonymous-schema-339>"
          },
          "issuedBy": {
            "type": "object",
            "x-range": "Organization",
            "description": "The issuing authority",
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-340>"
          },
          "issuedThrough": {
            "type": "object",
            "description": "the service through which the permit was granted",
            "example": {
              "type": "Service",
              "name": "Department of Real Estate"
            },
            "x-parser-schema-id": "<anonymous-schema-341>"
          },
          "validIn": {
            "type": "object",
            "x-range": "Place",
            "x-parser-schema-id": "<anonymous-schema-342>"
          },
          "validFrom": {
            "type": "string",
            "format": "date-time",
            "description": "start date",
            "x-parser-schema-id": "<anonymous-schema-343>"
          },
          "validUntil": {
            "type": "string",
            "format": "date-time",
            "description": "end date",
            "x-parser-schema-id": "<anonymous-schema-344>"
          }
        },
        "x-parser-schema-id": "Permit"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "date-time",
    "description": "start date",
    "x-parser-schema-id": "<anonymous-schema-343>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Permit",
        "description": "A permit issued by an organization to an individual or business.",
        "type": "object",
        "x-hasSubclass": [
          "RealEstateLicense"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "Permit type.",
            "enum": [
              "Permit"
            ],
            "x-parser-schema-id": "<anonymous-schema-338>"
          },
          "name": {
            "type": "string",
            "description": "Common or display value of the Permit.",
            "example": "DRE Number",
            "x-parser-schema-id": "<anonymous-schema-339>"
          },
          "issuedBy": {
            "type": "object",
            "x-range": "Organization",
            "description": "The issuing authority",
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-340>"
          },
          "issuedThrough": {
            "type": "object",
            "description": "the service through which the permit was granted",
            "example": {
              "type": "Service",
              "name": "Department of Real Estate"
            },
            "x-parser-schema-id": "<anonymous-schema-341>"
          },
          "validIn": {
            "type": "object",
            "x-range": "Place",
            "x-parser-schema-id": "<anonymous-schema-342>"
          },
          "validFrom": {
            "type": "string",
            "format": "date-time",
            "description": "start date",
            "x-parser-schema-id": "<anonymous-schema-343>"
          },
          "validUntil": {
            "type": "string",
            "format": "date-time",
            "description": "end date",
            "x-parser-schema-id": "<anonymous-schema-344>"
          }
        },
        "x-parser-schema-id": "Permit"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "date-time",
    "description": "end date",
    "x-parser-schema-id": "<anonymous-schema-344>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Permit",
        "description": "A permit issued by an organization to an individual or business.",
        "type": "object",
        "x-hasSubclass": [
          "RealEstateLicense"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "Permit type.",
            "enum": [
              "Permit"
            ],
            "x-parser-schema-id": "<anonymous-schema-338>"
          },
          "name": {
            "type": "string",
            "description": "Common or display value of the Permit.",
            "example": "DRE Number",
            "x-parser-schema-id": "<anonymous-schema-339>"
          },
          "issuedBy": {
            "type": "object",
            "x-range": "Organization",
            "description": "The issuing authority",
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-340>"
          },
          "issuedThrough": {
            "type": "object",
            "description": "the service through which the permit was granted",
            "example": {
              "type": "Service",
              "name": "Department of Real Estate"
            },
            "x-parser-schema-id": "<anonymous-schema-341>"
          },
          "validIn": {
            "type": "object",
            "x-range": "Place",
            "x-parser-schema-id": "<anonymous-schema-342>"
          },
          "validFrom": {
            "type": "string",
            "format": "date-time",
            "description": "start date",
            "x-parser-schema-id": "<anonymous-schema-343>"
          },
          "validUntil": {
            "type": "string",
            "format": "date-time",
            "description": "end date",
            "x-parser-schema-id": "<anonymous-schema-344>"
          }
        },
        "x-parser-schema-id": "Permit"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "Permit",
  "name": "DRE Number",
  "issuedBy": {
    "type": "State",
    "name": "California"
  },
  "issuedThrough": {
    "type": "Service",
    "name": "Department of Real Estate"
  },
  "validIn": {},
  "validFrom": "2019-08-24T14:15:22Z",
  "validUntil": "2019-08-24T14:15:22Z"
}
```

