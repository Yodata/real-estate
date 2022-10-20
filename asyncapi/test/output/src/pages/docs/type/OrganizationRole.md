

---
title: OrganizationRole
---

{
  "type": {
    "_json": {
      "type": "string",
      "description": "a role played by the member in the memberOf group",
      "enum": [
        "OrganizationRole"
      ],
      "x-parser-schema-id": "<anonymous-schema-316>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "OrganizationRole",
          "type": "object",
          "description": "describes a role played by a member and a group or organization.",
          "properties": {
            "type": {
              "type": "string",
              "description": "a role played by the member in the memberOf group",
              "enum": [
                "OrganizationRole"
              ],
              "x-parser-schema-id": "<anonymous-schema-316>"
            },
            "roleName": {
              "type": "string",
              "description": "the role name",
              "example": "Owner",
              "x-parser-schema-id": "<anonymous-schema-317>"
            },
            "memberOf": {
              "description": "the org or group where the role is performed",
              "type": "object",
              "example": {
                "type": "RealEstateOrganization",
                "id": "http://orgid.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-318>"
            },
            "member": {
              "description": "member object or id",
              "type": "string",
              "format": "uri",
              "example": "https://memberid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-319>"
            },
            "startDate": {
              "type": "string",
              "format": "date-time",
              "description": "date the member began performing this role",
              "x-parser-schema-id": "<anonymous-schema-320>"
            },
            "endDate": {
              "type": "string",
              "format": "date-time",
              "description": "date the member stopped performing the role",
              "x-parser-schema-id": "<anonymous-schema-321>"
            }
          },
          "x-parser-schema-id": "OrganizationRole"
        },
        "options": {}
      }
    }
  },
  "roleName": {
    "_json": {
      "type": "string",
      "description": "the role name",
      "example": "Owner",
      "x-parser-schema-id": "<anonymous-schema-317>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "OrganizationRole",
          "type": "object",
          "description": "describes a role played by a member and a group or organization.",
          "properties": {
            "type": {
              "type": "string",
              "description": "a role played by the member in the memberOf group",
              "enum": [
                "OrganizationRole"
              ],
              "x-parser-schema-id": "<anonymous-schema-316>"
            },
            "roleName": {
              "type": "string",
              "description": "the role name",
              "example": "Owner",
              "x-parser-schema-id": "<anonymous-schema-317>"
            },
            "memberOf": {
              "description": "the org or group where the role is performed",
              "type": "object",
              "example": {
                "type": "RealEstateOrganization",
                "id": "http://orgid.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-318>"
            },
            "member": {
              "description": "member object or id",
              "type": "string",
              "format": "uri",
              "example": "https://memberid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-319>"
            },
            "startDate": {
              "type": "string",
              "format": "date-time",
              "description": "date the member began performing this role",
              "x-parser-schema-id": "<anonymous-schema-320>"
            },
            "endDate": {
              "type": "string",
              "format": "date-time",
              "description": "date the member stopped performing the role",
              "x-parser-schema-id": "<anonymous-schema-321>"
            }
          },
          "x-parser-schema-id": "OrganizationRole"
        },
        "options": {}
      }
    }
  },
  "memberOf": {
    "_json": {
      "description": "the org or group where the role is performed",
      "type": "object",
      "example": {
        "type": "RealEstateOrganization",
        "id": "http://orgid.example.com/profile/card#me"
      },
      "x-parser-schema-id": "<anonymous-schema-318>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "OrganizationRole",
          "type": "object",
          "description": "describes a role played by a member and a group or organization.",
          "properties": {
            "type": {
              "type": "string",
              "description": "a role played by the member in the memberOf group",
              "enum": [
                "OrganizationRole"
              ],
              "x-parser-schema-id": "<anonymous-schema-316>"
            },
            "roleName": {
              "type": "string",
              "description": "the role name",
              "example": "Owner",
              "x-parser-schema-id": "<anonymous-schema-317>"
            },
            "memberOf": {
              "description": "the org or group where the role is performed",
              "type": "object",
              "example": {
                "type": "RealEstateOrganization",
                "id": "http://orgid.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-318>"
            },
            "member": {
              "description": "member object or id",
              "type": "string",
              "format": "uri",
              "example": "https://memberid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-319>"
            },
            "startDate": {
              "type": "string",
              "format": "date-time",
              "description": "date the member began performing this role",
              "x-parser-schema-id": "<anonymous-schema-320>"
            },
            "endDate": {
              "type": "string",
              "format": "date-time",
              "description": "date the member stopped performing the role",
              "x-parser-schema-id": "<anonymous-schema-321>"
            }
          },
          "x-parser-schema-id": "OrganizationRole"
        },
        "options": {}
      }
    }
  },
  "member": {
    "_json": {
      "description": "member object or id",
      "type": "string",
      "format": "uri",
      "example": "https://memberid.example.com/profile/card#me",
      "x-parser-schema-id": "<anonymous-schema-319>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "OrganizationRole",
          "type": "object",
          "description": "describes a role played by a member and a group or organization.",
          "properties": {
            "type": {
              "type": "string",
              "description": "a role played by the member in the memberOf group",
              "enum": [
                "OrganizationRole"
              ],
              "x-parser-schema-id": "<anonymous-schema-316>"
            },
            "roleName": {
              "type": "string",
              "description": "the role name",
              "example": "Owner",
              "x-parser-schema-id": "<anonymous-schema-317>"
            },
            "memberOf": {
              "description": "the org or group where the role is performed",
              "type": "object",
              "example": {
                "type": "RealEstateOrganization",
                "id": "http://orgid.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-318>"
            },
            "member": {
              "description": "member object or id",
              "type": "string",
              "format": "uri",
              "example": "https://memberid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-319>"
            },
            "startDate": {
              "type": "string",
              "format": "date-time",
              "description": "date the member began performing this role",
              "x-parser-schema-id": "<anonymous-schema-320>"
            },
            "endDate": {
              "type": "string",
              "format": "date-time",
              "description": "date the member stopped performing the role",
              "x-parser-schema-id": "<anonymous-schema-321>"
            }
          },
          "x-parser-schema-id": "OrganizationRole"
        },
        "options": {}
      }
    }
  },
  "startDate": {
    "_json": {
      "type": "string",
      "format": "date-time",
      "description": "date the member began performing this role",
      "x-parser-schema-id": "<anonymous-schema-320>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "OrganizationRole",
          "type": "object",
          "description": "describes a role played by a member and a group or organization.",
          "properties": {
            "type": {
              "type": "string",
              "description": "a role played by the member in the memberOf group",
              "enum": [
                "OrganizationRole"
              ],
              "x-parser-schema-id": "<anonymous-schema-316>"
            },
            "roleName": {
              "type": "string",
              "description": "the role name",
              "example": "Owner",
              "x-parser-schema-id": "<anonymous-schema-317>"
            },
            "memberOf": {
              "description": "the org or group where the role is performed",
              "type": "object",
              "example": {
                "type": "RealEstateOrganization",
                "id": "http://orgid.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-318>"
            },
            "member": {
              "description": "member object or id",
              "type": "string",
              "format": "uri",
              "example": "https://memberid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-319>"
            },
            "startDate": {
              "type": "string",
              "format": "date-time",
              "description": "date the member began performing this role",
              "x-parser-schema-id": "<anonymous-schema-320>"
            },
            "endDate": {
              "type": "string",
              "format": "date-time",
              "description": "date the member stopped performing the role",
              "x-parser-schema-id": "<anonymous-schema-321>"
            }
          },
          "x-parser-schema-id": "OrganizationRole"
        },
        "options": {}
      }
    }
  },
  "endDate": {
    "_json": {
      "type": "string",
      "format": "date-time",
      "description": "date the member stopped performing the role",
      "x-parser-schema-id": "<anonymous-schema-321>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "OrganizationRole",
          "type": "object",
          "description": "describes a role played by a member and a group or organization.",
          "properties": {
            "type": {
              "type": "string",
              "description": "a role played by the member in the memberOf group",
              "enum": [
                "OrganizationRole"
              ],
              "x-parser-schema-id": "<anonymous-schema-316>"
            },
            "roleName": {
              "type": "string",
              "description": "the role name",
              "example": "Owner",
              "x-parser-schema-id": "<anonymous-schema-317>"
            },
            "memberOf": {
              "description": "the org or group where the role is performed",
              "type": "object",
              "example": {
                "type": "RealEstateOrganization",
                "id": "http://orgid.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-318>"
            },
            "member": {
              "description": "member object or id",
              "type": "string",
              "format": "uri",
              "example": "https://memberid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-319>"
            },
            "startDate": {
              "type": "string",
              "format": "date-time",
              "description": "date the member began performing this role",
              "x-parser-schema-id": "<anonymous-schema-320>"
            },
            "endDate": {
              "type": "string",
              "format": "date-time",
              "description": "date the member stopped performing the role",
              "x-parser-schema-id": "<anonymous-schema-321>"
            }
          },
          "x-parser-schema-id": "OrganizationRole"
        },
        "options": {}
      }
    }
  }
}


# OrganizationRole

describes a role played by a member and a group or organization.



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "description": "a role played by the member in the memberOf group",
    "enum": [
      "OrganizationRole"
    ],
    "x-parser-schema-id": "<anonymous-schema-316>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "OrganizationRole",
        "type": "object",
        "description": "describes a role played by a member and a group or organization.",
        "properties": {
          "type": {
            "type": "string",
            "description": "a role played by the member in the memberOf group",
            "enum": [
              "OrganizationRole"
            ],
            "x-parser-schema-id": "<anonymous-schema-316>"
          },
          "roleName": {
            "type": "string",
            "description": "the role name",
            "example": "Owner",
            "x-parser-schema-id": "<anonymous-schema-317>"
          },
          "memberOf": {
            "description": "the org or group where the role is performed",
            "type": "object",
            "example": {
              "type": "RealEstateOrganization",
              "id": "http://orgid.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-318>"
          },
          "member": {
            "description": "member object or id",
            "type": "string",
            "format": "uri",
            "example": "https://memberid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-319>"
          },
          "startDate": {
            "type": "string",
            "format": "date-time",
            "description": "date the member began performing this role",
            "x-parser-schema-id": "<anonymous-schema-320>"
          },
          "endDate": {
            "type": "string",
            "format": "date-time",
            "description": "date the member stopped performing the role",
            "x-parser-schema-id": "<anonymous-schema-321>"
          }
        },
        "x-parser-schema-id": "OrganizationRole"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "the role name",
    "example": "Owner",
    "x-parser-schema-id": "<anonymous-schema-317>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "OrganizationRole",
        "type": "object",
        "description": "describes a role played by a member and a group or organization.",
        "properties": {
          "type": {
            "type": "string",
            "description": "a role played by the member in the memberOf group",
            "enum": [
              "OrganizationRole"
            ],
            "x-parser-schema-id": "<anonymous-schema-316>"
          },
          "roleName": {
            "type": "string",
            "description": "the role name",
            "example": "Owner",
            "x-parser-schema-id": "<anonymous-schema-317>"
          },
          "memberOf": {
            "description": "the org or group where the role is performed",
            "type": "object",
            "example": {
              "type": "RealEstateOrganization",
              "id": "http://orgid.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-318>"
          },
          "member": {
            "description": "member object or id",
            "type": "string",
            "format": "uri",
            "example": "https://memberid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-319>"
          },
          "startDate": {
            "type": "string",
            "format": "date-time",
            "description": "date the member began performing this role",
            "x-parser-schema-id": "<anonymous-schema-320>"
          },
          "endDate": {
            "type": "string",
            "format": "date-time",
            "description": "date the member stopped performing the role",
            "x-parser-schema-id": "<anonymous-schema-321>"
          }
        },
        "x-parser-schema-id": "OrganizationRole"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "the org or group where the role is performed",
    "type": "object",
    "example": {
      "type": "RealEstateOrganization",
      "id": "http://orgid.example.com/profile/card#me"
    },
    "x-parser-schema-id": "<anonymous-schema-318>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "OrganizationRole",
        "type": "object",
        "description": "describes a role played by a member and a group or organization.",
        "properties": {
          "type": {
            "type": "string",
            "description": "a role played by the member in the memberOf group",
            "enum": [
              "OrganizationRole"
            ],
            "x-parser-schema-id": "<anonymous-schema-316>"
          },
          "roleName": {
            "type": "string",
            "description": "the role name",
            "example": "Owner",
            "x-parser-schema-id": "<anonymous-schema-317>"
          },
          "memberOf": {
            "description": "the org or group where the role is performed",
            "type": "object",
            "example": {
              "type": "RealEstateOrganization",
              "id": "http://orgid.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-318>"
          },
          "member": {
            "description": "member object or id",
            "type": "string",
            "format": "uri",
            "example": "https://memberid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-319>"
          },
          "startDate": {
            "type": "string",
            "format": "date-time",
            "description": "date the member began performing this role",
            "x-parser-schema-id": "<anonymous-schema-320>"
          },
          "endDate": {
            "type": "string",
            "format": "date-time",
            "description": "date the member stopped performing the role",
            "x-parser-schema-id": "<anonymous-schema-321>"
          }
        },
        "x-parser-schema-id": "OrganizationRole"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "member object or id",
    "type": "string",
    "format": "uri",
    "example": "https://memberid.example.com/profile/card#me",
    "x-parser-schema-id": "<anonymous-schema-319>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "OrganizationRole",
        "type": "object",
        "description": "describes a role played by a member and a group or organization.",
        "properties": {
          "type": {
            "type": "string",
            "description": "a role played by the member in the memberOf group",
            "enum": [
              "OrganizationRole"
            ],
            "x-parser-schema-id": "<anonymous-schema-316>"
          },
          "roleName": {
            "type": "string",
            "description": "the role name",
            "example": "Owner",
            "x-parser-schema-id": "<anonymous-schema-317>"
          },
          "memberOf": {
            "description": "the org or group where the role is performed",
            "type": "object",
            "example": {
              "type": "RealEstateOrganization",
              "id": "http://orgid.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-318>"
          },
          "member": {
            "description": "member object or id",
            "type": "string",
            "format": "uri",
            "example": "https://memberid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-319>"
          },
          "startDate": {
            "type": "string",
            "format": "date-time",
            "description": "date the member began performing this role",
            "x-parser-schema-id": "<anonymous-schema-320>"
          },
          "endDate": {
            "type": "string",
            "format": "date-time",
            "description": "date the member stopped performing the role",
            "x-parser-schema-id": "<anonymous-schema-321>"
          }
        },
        "x-parser-schema-id": "OrganizationRole"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "date-time",
    "description": "date the member began performing this role",
    "x-parser-schema-id": "<anonymous-schema-320>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "OrganizationRole",
        "type": "object",
        "description": "describes a role played by a member and a group or organization.",
        "properties": {
          "type": {
            "type": "string",
            "description": "a role played by the member in the memberOf group",
            "enum": [
              "OrganizationRole"
            ],
            "x-parser-schema-id": "<anonymous-schema-316>"
          },
          "roleName": {
            "type": "string",
            "description": "the role name",
            "example": "Owner",
            "x-parser-schema-id": "<anonymous-schema-317>"
          },
          "memberOf": {
            "description": "the org or group where the role is performed",
            "type": "object",
            "example": {
              "type": "RealEstateOrganization",
              "id": "http://orgid.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-318>"
          },
          "member": {
            "description": "member object or id",
            "type": "string",
            "format": "uri",
            "example": "https://memberid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-319>"
          },
          "startDate": {
            "type": "string",
            "format": "date-time",
            "description": "date the member began performing this role",
            "x-parser-schema-id": "<anonymous-schema-320>"
          },
          "endDate": {
            "type": "string",
            "format": "date-time",
            "description": "date the member stopped performing the role",
            "x-parser-schema-id": "<anonymous-schema-321>"
          }
        },
        "x-parser-schema-id": "OrganizationRole"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "date-time",
    "description": "date the member stopped performing the role",
    "x-parser-schema-id": "<anonymous-schema-321>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "OrganizationRole",
        "type": "object",
        "description": "describes a role played by a member and a group or organization.",
        "properties": {
          "type": {
            "type": "string",
            "description": "a role played by the member in the memberOf group",
            "enum": [
              "OrganizationRole"
            ],
            "x-parser-schema-id": "<anonymous-schema-316>"
          },
          "roleName": {
            "type": "string",
            "description": "the role name",
            "example": "Owner",
            "x-parser-schema-id": "<anonymous-schema-317>"
          },
          "memberOf": {
            "description": "the org or group where the role is performed",
            "type": "object",
            "example": {
              "type": "RealEstateOrganization",
              "id": "http://orgid.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-318>"
          },
          "member": {
            "description": "member object or id",
            "type": "string",
            "format": "uri",
            "example": "https://memberid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-319>"
          },
          "startDate": {
            "type": "string",
            "format": "date-time",
            "description": "date the member began performing this role",
            "x-parser-schema-id": "<anonymous-schema-320>"
          },
          "endDate": {
            "type": "string",
            "format": "date-time",
            "description": "date the member stopped performing the role",
            "x-parser-schema-id": "<anonymous-schema-321>"
          }
        },
        "x-parser-schema-id": "OrganizationRole"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "OrganizationRole",
  "roleName": "Owner",
  "memberOf": {
    "type": "RealEstateOrganization",
    "id": "http://orgid.example.com/profile/card#me"
  },
  "member": "https://memberid.example.com/profile/card#me",
  "startDate": "2019-08-24T14:15:22Z",
  "endDate": "2019-08-24T14:15:22Z"
}
```

