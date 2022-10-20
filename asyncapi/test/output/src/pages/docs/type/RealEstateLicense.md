

---
title: RealEstateLicense
---

{
  "type": {
    "_json": {
      "type": "string",
      "enum": [
        "RealEstateLicense"
      ],
      "description": "RealEstateLicense",
      "x-parser-schema-id": "<anonymous-schema-513>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "RealEstateLicense",
          "type": "object",
          "description": "Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "RealEstateLicense"
              ],
              "description": "RealEstateLicense",
              "x-parser-schema-id": "<anonymous-schema-513>"
            },
            "name": {
              "type": "string",
              "description": "display value, i.e. 'CA-DRE# 02068375'",
              "example": "CA-DRE# 02068375",
              "x-parser-schema-id": "<anonymous-schema-514>"
            },
            "issuedTo": {
              "type": "object",
              "description": "the license recipient",
              "x-range": [
                "RealEstateAgent",
                "RealEstateOrganization"
              ],
              "example": {
                "type": "RealEstateAgent",
                "id": "http://{agentid}.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-515>"
            },
            "issuedBy": {
              "type": "object",
              "description": "the issuing organization or service",
              "x-range": [
                "State",
                "Organization",
                "AdministrativeArea"
              ],
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-516>"
            },
            "issuedThrough": {
              "x-range": [
                "Organization"
              ],
              "description": "The service through with the permit was granted.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "example": "Service",
                  "x-parser-schema-id": "<anonymous-schema-518>"
                },
                "name": {
                  "type": "string",
                  "example": "California Department of Real Estate",
                  "x-parser-schema-id": "<anonymous-schema-519>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-517>"
            },
            "validIn": {
              "type": "object",
              "description": "the state where the RealEstateLicense is valid",
              "x-range": [
                "State",
                "City",
                "GeographicArea",
                "PostalCode"
              ],
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-520>"
            },
            "validFrom": {
              "type": "string",
              "format": "date-time",
              "description": "the first date and time on which the license is valid.",
              "x-parser-schema-id": "<anonymous-schema-521>"
            },
            "validUntil": {
              "type": "string",
              "format": "date-time",
              "description": "the last date and time on which the license is valid.",
              "x-parser-schema-id": "<anonymous-schema-522>"
            }
          },
          "x-parser-schema-id": "RealEstateLicense"
        },
        "options": {}
      }
    }
  },
  "name": {
    "_json": {
      "type": "string",
      "description": "display value, i.e. 'CA-DRE# 02068375'",
      "example": "CA-DRE# 02068375",
      "x-parser-schema-id": "<anonymous-schema-514>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "RealEstateLicense",
          "type": "object",
          "description": "Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "RealEstateLicense"
              ],
              "description": "RealEstateLicense",
              "x-parser-schema-id": "<anonymous-schema-513>"
            },
            "name": {
              "type": "string",
              "description": "display value, i.e. 'CA-DRE# 02068375'",
              "example": "CA-DRE# 02068375",
              "x-parser-schema-id": "<anonymous-schema-514>"
            },
            "issuedTo": {
              "type": "object",
              "description": "the license recipient",
              "x-range": [
                "RealEstateAgent",
                "RealEstateOrganization"
              ],
              "example": {
                "type": "RealEstateAgent",
                "id": "http://{agentid}.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-515>"
            },
            "issuedBy": {
              "type": "object",
              "description": "the issuing organization or service",
              "x-range": [
                "State",
                "Organization",
                "AdministrativeArea"
              ],
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-516>"
            },
            "issuedThrough": {
              "x-range": [
                "Organization"
              ],
              "description": "The service through with the permit was granted.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "example": "Service",
                  "x-parser-schema-id": "<anonymous-schema-518>"
                },
                "name": {
                  "type": "string",
                  "example": "California Department of Real Estate",
                  "x-parser-schema-id": "<anonymous-schema-519>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-517>"
            },
            "validIn": {
              "type": "object",
              "description": "the state where the RealEstateLicense is valid",
              "x-range": [
                "State",
                "City",
                "GeographicArea",
                "PostalCode"
              ],
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-520>"
            },
            "validFrom": {
              "type": "string",
              "format": "date-time",
              "description": "the first date and time on which the license is valid.",
              "x-parser-schema-id": "<anonymous-schema-521>"
            },
            "validUntil": {
              "type": "string",
              "format": "date-time",
              "description": "the last date and time on which the license is valid.",
              "x-parser-schema-id": "<anonymous-schema-522>"
            }
          },
          "x-parser-schema-id": "RealEstateLicense"
        },
        "options": {}
      }
    }
  },
  "issuedTo": {
    "_json": {
      "type": "object",
      "description": "the license recipient",
      "x-range": [
        "RealEstateAgent",
        "RealEstateOrganization"
      ],
      "example": {
        "type": "RealEstateAgent",
        "id": "http://{agentid}.example.com/profile/card#me"
      },
      "x-parser-schema-id": "<anonymous-schema-515>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "RealEstateLicense",
          "type": "object",
          "description": "Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "RealEstateLicense"
              ],
              "description": "RealEstateLicense",
              "x-parser-schema-id": "<anonymous-schema-513>"
            },
            "name": {
              "type": "string",
              "description": "display value, i.e. 'CA-DRE# 02068375'",
              "example": "CA-DRE# 02068375",
              "x-parser-schema-id": "<anonymous-schema-514>"
            },
            "issuedTo": {
              "type": "object",
              "description": "the license recipient",
              "x-range": [
                "RealEstateAgent",
                "RealEstateOrganization"
              ],
              "example": {
                "type": "RealEstateAgent",
                "id": "http://{agentid}.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-515>"
            },
            "issuedBy": {
              "type": "object",
              "description": "the issuing organization or service",
              "x-range": [
                "State",
                "Organization",
                "AdministrativeArea"
              ],
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-516>"
            },
            "issuedThrough": {
              "x-range": [
                "Organization"
              ],
              "description": "The service through with the permit was granted.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "example": "Service",
                  "x-parser-schema-id": "<anonymous-schema-518>"
                },
                "name": {
                  "type": "string",
                  "example": "California Department of Real Estate",
                  "x-parser-schema-id": "<anonymous-schema-519>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-517>"
            },
            "validIn": {
              "type": "object",
              "description": "the state where the RealEstateLicense is valid",
              "x-range": [
                "State",
                "City",
                "GeographicArea",
                "PostalCode"
              ],
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-520>"
            },
            "validFrom": {
              "type": "string",
              "format": "date-time",
              "description": "the first date and time on which the license is valid.",
              "x-parser-schema-id": "<anonymous-schema-521>"
            },
            "validUntil": {
              "type": "string",
              "format": "date-time",
              "description": "the last date and time on which the license is valid.",
              "x-parser-schema-id": "<anonymous-schema-522>"
            }
          },
          "x-parser-schema-id": "RealEstateLicense"
        },
        "options": {}
      }
    }
  },
  "issuedBy": {
    "_json": {
      "type": "object",
      "description": "the issuing organization or service",
      "x-range": [
        "State",
        "Organization",
        "AdministrativeArea"
      ],
      "example": {
        "type": "State",
        "name": "California"
      },
      "x-parser-schema-id": "<anonymous-schema-516>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "RealEstateLicense",
          "type": "object",
          "description": "Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "RealEstateLicense"
              ],
              "description": "RealEstateLicense",
              "x-parser-schema-id": "<anonymous-schema-513>"
            },
            "name": {
              "type": "string",
              "description": "display value, i.e. 'CA-DRE# 02068375'",
              "example": "CA-DRE# 02068375",
              "x-parser-schema-id": "<anonymous-schema-514>"
            },
            "issuedTo": {
              "type": "object",
              "description": "the license recipient",
              "x-range": [
                "RealEstateAgent",
                "RealEstateOrganization"
              ],
              "example": {
                "type": "RealEstateAgent",
                "id": "http://{agentid}.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-515>"
            },
            "issuedBy": {
              "type": "object",
              "description": "the issuing organization or service",
              "x-range": [
                "State",
                "Organization",
                "AdministrativeArea"
              ],
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-516>"
            },
            "issuedThrough": {
              "x-range": [
                "Organization"
              ],
              "description": "The service through with the permit was granted.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "example": "Service",
                  "x-parser-schema-id": "<anonymous-schema-518>"
                },
                "name": {
                  "type": "string",
                  "example": "California Department of Real Estate",
                  "x-parser-schema-id": "<anonymous-schema-519>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-517>"
            },
            "validIn": {
              "type": "object",
              "description": "the state where the RealEstateLicense is valid",
              "x-range": [
                "State",
                "City",
                "GeographicArea",
                "PostalCode"
              ],
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-520>"
            },
            "validFrom": {
              "type": "string",
              "format": "date-time",
              "description": "the first date and time on which the license is valid.",
              "x-parser-schema-id": "<anonymous-schema-521>"
            },
            "validUntil": {
              "type": "string",
              "format": "date-time",
              "description": "the last date and time on which the license is valid.",
              "x-parser-schema-id": "<anonymous-schema-522>"
            }
          },
          "x-parser-schema-id": "RealEstateLicense"
        },
        "options": {}
      }
    }
  },
  "issuedThrough": {
    "_json": {
      "x-range": [
        "Organization"
      ],
      "description": "The service through with the permit was granted.",
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "example": "Service",
          "x-parser-schema-id": "<anonymous-schema-518>"
        },
        "name": {
          "type": "string",
          "example": "California Department of Real Estate",
          "x-parser-schema-id": "<anonymous-schema-519>"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-517>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "RealEstateLicense",
          "type": "object",
          "description": "Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "RealEstateLicense"
              ],
              "description": "RealEstateLicense",
              "x-parser-schema-id": "<anonymous-schema-513>"
            },
            "name": {
              "type": "string",
              "description": "display value, i.e. 'CA-DRE# 02068375'",
              "example": "CA-DRE# 02068375",
              "x-parser-schema-id": "<anonymous-schema-514>"
            },
            "issuedTo": {
              "type": "object",
              "description": "the license recipient",
              "x-range": [
                "RealEstateAgent",
                "RealEstateOrganization"
              ],
              "example": {
                "type": "RealEstateAgent",
                "id": "http://{agentid}.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-515>"
            },
            "issuedBy": {
              "type": "object",
              "description": "the issuing organization or service",
              "x-range": [
                "State",
                "Organization",
                "AdministrativeArea"
              ],
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-516>"
            },
            "issuedThrough": {
              "x-range": [
                "Organization"
              ],
              "description": "The service through with the permit was granted.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "example": "Service",
                  "x-parser-schema-id": "<anonymous-schema-518>"
                },
                "name": {
                  "type": "string",
                  "example": "California Department of Real Estate",
                  "x-parser-schema-id": "<anonymous-schema-519>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-517>"
            },
            "validIn": {
              "type": "object",
              "description": "the state where the RealEstateLicense is valid",
              "x-range": [
                "State",
                "City",
                "GeographicArea",
                "PostalCode"
              ],
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-520>"
            },
            "validFrom": {
              "type": "string",
              "format": "date-time",
              "description": "the first date and time on which the license is valid.",
              "x-parser-schema-id": "<anonymous-schema-521>"
            },
            "validUntil": {
              "type": "string",
              "format": "date-time",
              "description": "the last date and time on which the license is valid.",
              "x-parser-schema-id": "<anonymous-schema-522>"
            }
          },
          "x-parser-schema-id": "RealEstateLicense"
        },
        "options": {}
      }
    }
  },
  "validIn": {
    "_json": {
      "type": "object",
      "description": "the state where the RealEstateLicense is valid",
      "x-range": [
        "State",
        "City",
        "GeographicArea",
        "PostalCode"
      ],
      "example": {
        "type": "State",
        "name": "California"
      },
      "x-parser-schema-id": "<anonymous-schema-520>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "RealEstateLicense",
          "type": "object",
          "description": "Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "RealEstateLicense"
              ],
              "description": "RealEstateLicense",
              "x-parser-schema-id": "<anonymous-schema-513>"
            },
            "name": {
              "type": "string",
              "description": "display value, i.e. 'CA-DRE# 02068375'",
              "example": "CA-DRE# 02068375",
              "x-parser-schema-id": "<anonymous-schema-514>"
            },
            "issuedTo": {
              "type": "object",
              "description": "the license recipient",
              "x-range": [
                "RealEstateAgent",
                "RealEstateOrganization"
              ],
              "example": {
                "type": "RealEstateAgent",
                "id": "http://{agentid}.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-515>"
            },
            "issuedBy": {
              "type": "object",
              "description": "the issuing organization or service",
              "x-range": [
                "State",
                "Organization",
                "AdministrativeArea"
              ],
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-516>"
            },
            "issuedThrough": {
              "x-range": [
                "Organization"
              ],
              "description": "The service through with the permit was granted.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "example": "Service",
                  "x-parser-schema-id": "<anonymous-schema-518>"
                },
                "name": {
                  "type": "string",
                  "example": "California Department of Real Estate",
                  "x-parser-schema-id": "<anonymous-schema-519>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-517>"
            },
            "validIn": {
              "type": "object",
              "description": "the state where the RealEstateLicense is valid",
              "x-range": [
                "State",
                "City",
                "GeographicArea",
                "PostalCode"
              ],
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-520>"
            },
            "validFrom": {
              "type": "string",
              "format": "date-time",
              "description": "the first date and time on which the license is valid.",
              "x-parser-schema-id": "<anonymous-schema-521>"
            },
            "validUntil": {
              "type": "string",
              "format": "date-time",
              "description": "the last date and time on which the license is valid.",
              "x-parser-schema-id": "<anonymous-schema-522>"
            }
          },
          "x-parser-schema-id": "RealEstateLicense"
        },
        "options": {}
      }
    }
  },
  "validFrom": {
    "_json": {
      "type": "string",
      "format": "date-time",
      "description": "the first date and time on which the license is valid.",
      "x-parser-schema-id": "<anonymous-schema-521>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "RealEstateLicense",
          "type": "object",
          "description": "Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "RealEstateLicense"
              ],
              "description": "RealEstateLicense",
              "x-parser-schema-id": "<anonymous-schema-513>"
            },
            "name": {
              "type": "string",
              "description": "display value, i.e. 'CA-DRE# 02068375'",
              "example": "CA-DRE# 02068375",
              "x-parser-schema-id": "<anonymous-schema-514>"
            },
            "issuedTo": {
              "type": "object",
              "description": "the license recipient",
              "x-range": [
                "RealEstateAgent",
                "RealEstateOrganization"
              ],
              "example": {
                "type": "RealEstateAgent",
                "id": "http://{agentid}.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-515>"
            },
            "issuedBy": {
              "type": "object",
              "description": "the issuing organization or service",
              "x-range": [
                "State",
                "Organization",
                "AdministrativeArea"
              ],
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-516>"
            },
            "issuedThrough": {
              "x-range": [
                "Organization"
              ],
              "description": "The service through with the permit was granted.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "example": "Service",
                  "x-parser-schema-id": "<anonymous-schema-518>"
                },
                "name": {
                  "type": "string",
                  "example": "California Department of Real Estate",
                  "x-parser-schema-id": "<anonymous-schema-519>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-517>"
            },
            "validIn": {
              "type": "object",
              "description": "the state where the RealEstateLicense is valid",
              "x-range": [
                "State",
                "City",
                "GeographicArea",
                "PostalCode"
              ],
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-520>"
            },
            "validFrom": {
              "type": "string",
              "format": "date-time",
              "description": "the first date and time on which the license is valid.",
              "x-parser-schema-id": "<anonymous-schema-521>"
            },
            "validUntil": {
              "type": "string",
              "format": "date-time",
              "description": "the last date and time on which the license is valid.",
              "x-parser-schema-id": "<anonymous-schema-522>"
            }
          },
          "x-parser-schema-id": "RealEstateLicense"
        },
        "options": {}
      }
    }
  },
  "validUntil": {
    "_json": {
      "type": "string",
      "format": "date-time",
      "description": "the last date and time on which the license is valid.",
      "x-parser-schema-id": "<anonymous-schema-522>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "RealEstateLicense",
          "type": "object",
          "description": "Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "RealEstateLicense"
              ],
              "description": "RealEstateLicense",
              "x-parser-schema-id": "<anonymous-schema-513>"
            },
            "name": {
              "type": "string",
              "description": "display value, i.e. 'CA-DRE# 02068375'",
              "example": "CA-DRE# 02068375",
              "x-parser-schema-id": "<anonymous-schema-514>"
            },
            "issuedTo": {
              "type": "object",
              "description": "the license recipient",
              "x-range": [
                "RealEstateAgent",
                "RealEstateOrganization"
              ],
              "example": {
                "type": "RealEstateAgent",
                "id": "http://{agentid}.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-515>"
            },
            "issuedBy": {
              "type": "object",
              "description": "the issuing organization or service",
              "x-range": [
                "State",
                "Organization",
                "AdministrativeArea"
              ],
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-516>"
            },
            "issuedThrough": {
              "x-range": [
                "Organization"
              ],
              "description": "The service through with the permit was granted.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "example": "Service",
                  "x-parser-schema-id": "<anonymous-schema-518>"
                },
                "name": {
                  "type": "string",
                  "example": "California Department of Real Estate",
                  "x-parser-schema-id": "<anonymous-schema-519>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-517>"
            },
            "validIn": {
              "type": "object",
              "description": "the state where the RealEstateLicense is valid",
              "x-range": [
                "State",
                "City",
                "GeographicArea",
                "PostalCode"
              ],
              "example": {
                "type": "State",
                "name": "California"
              },
              "x-parser-schema-id": "<anonymous-schema-520>"
            },
            "validFrom": {
              "type": "string",
              "format": "date-time",
              "description": "the first date and time on which the license is valid.",
              "x-parser-schema-id": "<anonymous-schema-521>"
            },
            "validUntil": {
              "type": "string",
              "format": "date-time",
              "description": "the last date and time on which the license is valid.",
              "x-parser-schema-id": "<anonymous-schema-522>"
            }
          },
          "x-parser-schema-id": "RealEstateLicense"
        },
        "options": {}
      }
    }
  }
}


# RealEstateLicense

Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "enum": [
      "RealEstateLicense"
    ],
    "description": "RealEstateLicense",
    "x-parser-schema-id": "<anonymous-schema-513>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "RealEstateLicense",
        "type": "object",
        "description": "Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "RealEstateLicense"
            ],
            "description": "RealEstateLicense",
            "x-parser-schema-id": "<anonymous-schema-513>"
          },
          "name": {
            "type": "string",
            "description": "display value, i.e. 'CA-DRE# 02068375'",
            "example": "CA-DRE# 02068375",
            "x-parser-schema-id": "<anonymous-schema-514>"
          },
          "issuedTo": {
            "type": "object",
            "description": "the license recipient",
            "x-range": [
              "RealEstateAgent",
              "RealEstateOrganization"
            ],
            "example": {
              "type": "RealEstateAgent",
              "id": "http://{agentid}.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-515>"
          },
          "issuedBy": {
            "type": "object",
            "description": "the issuing organization or service",
            "x-range": [
              "State",
              "Organization",
              "AdministrativeArea"
            ],
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-516>"
          },
          "issuedThrough": {
            "x-range": [
              "Organization"
            ],
            "description": "The service through with the permit was granted.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "example": "Service",
                "x-parser-schema-id": "<anonymous-schema-518>"
              },
              "name": {
                "type": "string",
                "example": "California Department of Real Estate",
                "x-parser-schema-id": "<anonymous-schema-519>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-517>"
          },
          "validIn": {
            "type": "object",
            "description": "the state where the RealEstateLicense is valid",
            "x-range": [
              "State",
              "City",
              "GeographicArea",
              "PostalCode"
            ],
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-520>"
          },
          "validFrom": {
            "type": "string",
            "format": "date-time",
            "description": "the first date and time on which the license is valid.",
            "x-parser-schema-id": "<anonymous-schema-521>"
          },
          "validUntil": {
            "type": "string",
            "format": "date-time",
            "description": "the last date and time on which the license is valid.",
            "x-parser-schema-id": "<anonymous-schema-522>"
          }
        },
        "x-parser-schema-id": "RealEstateLicense"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "display value, i.e. 'CA-DRE# 02068375'",
    "example": "CA-DRE# 02068375",
    "x-parser-schema-id": "<anonymous-schema-514>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "RealEstateLicense",
        "type": "object",
        "description": "Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "RealEstateLicense"
            ],
            "description": "RealEstateLicense",
            "x-parser-schema-id": "<anonymous-schema-513>"
          },
          "name": {
            "type": "string",
            "description": "display value, i.e. 'CA-DRE# 02068375'",
            "example": "CA-DRE# 02068375",
            "x-parser-schema-id": "<anonymous-schema-514>"
          },
          "issuedTo": {
            "type": "object",
            "description": "the license recipient",
            "x-range": [
              "RealEstateAgent",
              "RealEstateOrganization"
            ],
            "example": {
              "type": "RealEstateAgent",
              "id": "http://{agentid}.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-515>"
          },
          "issuedBy": {
            "type": "object",
            "description": "the issuing organization or service",
            "x-range": [
              "State",
              "Organization",
              "AdministrativeArea"
            ],
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-516>"
          },
          "issuedThrough": {
            "x-range": [
              "Organization"
            ],
            "description": "The service through with the permit was granted.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "example": "Service",
                "x-parser-schema-id": "<anonymous-schema-518>"
              },
              "name": {
                "type": "string",
                "example": "California Department of Real Estate",
                "x-parser-schema-id": "<anonymous-schema-519>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-517>"
          },
          "validIn": {
            "type": "object",
            "description": "the state where the RealEstateLicense is valid",
            "x-range": [
              "State",
              "City",
              "GeographicArea",
              "PostalCode"
            ],
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-520>"
          },
          "validFrom": {
            "type": "string",
            "format": "date-time",
            "description": "the first date and time on which the license is valid.",
            "x-parser-schema-id": "<anonymous-schema-521>"
          },
          "validUntil": {
            "type": "string",
            "format": "date-time",
            "description": "the last date and time on which the license is valid.",
            "x-parser-schema-id": "<anonymous-schema-522>"
          }
        },
        "x-parser-schema-id": "RealEstateLicense"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "the license recipient",
    "x-range": [
      "RealEstateAgent",
      "RealEstateOrganization"
    ],
    "example": {
      "type": "RealEstateAgent",
      "id": "http://{agentid}.example.com/profile/card#me"
    },
    "x-parser-schema-id": "<anonymous-schema-515>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "RealEstateLicense",
        "type": "object",
        "description": "Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "RealEstateLicense"
            ],
            "description": "RealEstateLicense",
            "x-parser-schema-id": "<anonymous-schema-513>"
          },
          "name": {
            "type": "string",
            "description": "display value, i.e. 'CA-DRE# 02068375'",
            "example": "CA-DRE# 02068375",
            "x-parser-schema-id": "<anonymous-schema-514>"
          },
          "issuedTo": {
            "type": "object",
            "description": "the license recipient",
            "x-range": [
              "RealEstateAgent",
              "RealEstateOrganization"
            ],
            "example": {
              "type": "RealEstateAgent",
              "id": "http://{agentid}.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-515>"
          },
          "issuedBy": {
            "type": "object",
            "description": "the issuing organization or service",
            "x-range": [
              "State",
              "Organization",
              "AdministrativeArea"
            ],
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-516>"
          },
          "issuedThrough": {
            "x-range": [
              "Organization"
            ],
            "description": "The service through with the permit was granted.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "example": "Service",
                "x-parser-schema-id": "<anonymous-schema-518>"
              },
              "name": {
                "type": "string",
                "example": "California Department of Real Estate",
                "x-parser-schema-id": "<anonymous-schema-519>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-517>"
          },
          "validIn": {
            "type": "object",
            "description": "the state where the RealEstateLicense is valid",
            "x-range": [
              "State",
              "City",
              "GeographicArea",
              "PostalCode"
            ],
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-520>"
          },
          "validFrom": {
            "type": "string",
            "format": "date-time",
            "description": "the first date and time on which the license is valid.",
            "x-parser-schema-id": "<anonymous-schema-521>"
          },
          "validUntil": {
            "type": "string",
            "format": "date-time",
            "description": "the last date and time on which the license is valid.",
            "x-parser-schema-id": "<anonymous-schema-522>"
          }
        },
        "x-parser-schema-id": "RealEstateLicense"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "the issuing organization or service",
    "x-range": [
      "State",
      "Organization",
      "AdministrativeArea"
    ],
    "example": {
      "type": "State",
      "name": "California"
    },
    "x-parser-schema-id": "<anonymous-schema-516>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "RealEstateLicense",
        "type": "object",
        "description": "Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "RealEstateLicense"
            ],
            "description": "RealEstateLicense",
            "x-parser-schema-id": "<anonymous-schema-513>"
          },
          "name": {
            "type": "string",
            "description": "display value, i.e. 'CA-DRE# 02068375'",
            "example": "CA-DRE# 02068375",
            "x-parser-schema-id": "<anonymous-schema-514>"
          },
          "issuedTo": {
            "type": "object",
            "description": "the license recipient",
            "x-range": [
              "RealEstateAgent",
              "RealEstateOrganization"
            ],
            "example": {
              "type": "RealEstateAgent",
              "id": "http://{agentid}.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-515>"
          },
          "issuedBy": {
            "type": "object",
            "description": "the issuing organization or service",
            "x-range": [
              "State",
              "Organization",
              "AdministrativeArea"
            ],
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-516>"
          },
          "issuedThrough": {
            "x-range": [
              "Organization"
            ],
            "description": "The service through with the permit was granted.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "example": "Service",
                "x-parser-schema-id": "<anonymous-schema-518>"
              },
              "name": {
                "type": "string",
                "example": "California Department of Real Estate",
                "x-parser-schema-id": "<anonymous-schema-519>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-517>"
          },
          "validIn": {
            "type": "object",
            "description": "the state where the RealEstateLicense is valid",
            "x-range": [
              "State",
              "City",
              "GeographicArea",
              "PostalCode"
            ],
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-520>"
          },
          "validFrom": {
            "type": "string",
            "format": "date-time",
            "description": "the first date and time on which the license is valid.",
            "x-parser-schema-id": "<anonymous-schema-521>"
          },
          "validUntil": {
            "type": "string",
            "format": "date-time",
            "description": "the last date and time on which the license is valid.",
            "x-parser-schema-id": "<anonymous-schema-522>"
          }
        },
        "x-parser-schema-id": "RealEstateLicense"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "x-range": [
      "Organization"
    ],
    "description": "The service through with the permit was granted.",
    "type": "object",
    "properties": {
      "type": {
        "type": "string",
        "example": "Service",
        "x-parser-schema-id": "<anonymous-schema-518>"
      },
      "name": {
        "type": "string",
        "example": "California Department of Real Estate",
        "x-parser-schema-id": "<anonymous-schema-519>"
      }
    },
    "x-parser-schema-id": "<anonymous-schema-517>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "RealEstateLicense",
        "type": "object",
        "description": "Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "RealEstateLicense"
            ],
            "description": "RealEstateLicense",
            "x-parser-schema-id": "<anonymous-schema-513>"
          },
          "name": {
            "type": "string",
            "description": "display value, i.e. 'CA-DRE# 02068375'",
            "example": "CA-DRE# 02068375",
            "x-parser-schema-id": "<anonymous-schema-514>"
          },
          "issuedTo": {
            "type": "object",
            "description": "the license recipient",
            "x-range": [
              "RealEstateAgent",
              "RealEstateOrganization"
            ],
            "example": {
              "type": "RealEstateAgent",
              "id": "http://{agentid}.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-515>"
          },
          "issuedBy": {
            "type": "object",
            "description": "the issuing organization or service",
            "x-range": [
              "State",
              "Organization",
              "AdministrativeArea"
            ],
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-516>"
          },
          "issuedThrough": {
            "x-range": [
              "Organization"
            ],
            "description": "The service through with the permit was granted.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "example": "Service",
                "x-parser-schema-id": "<anonymous-schema-518>"
              },
              "name": {
                "type": "string",
                "example": "California Department of Real Estate",
                "x-parser-schema-id": "<anonymous-schema-519>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-517>"
          },
          "validIn": {
            "type": "object",
            "description": "the state where the RealEstateLicense is valid",
            "x-range": [
              "State",
              "City",
              "GeographicArea",
              "PostalCode"
            ],
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-520>"
          },
          "validFrom": {
            "type": "string",
            "format": "date-time",
            "description": "the first date and time on which the license is valid.",
            "x-parser-schema-id": "<anonymous-schema-521>"
          },
          "validUntil": {
            "type": "string",
            "format": "date-time",
            "description": "the last date and time on which the license is valid.",
            "x-parser-schema-id": "<anonymous-schema-522>"
          }
        },
        "x-parser-schema-id": "RealEstateLicense"
      },
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;example&quot;: &quot;Service&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-518&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;x-range&quot;: [
          &quot;Organization&quot;
        ],
        &quot;description&quot;: &quot;The service through with the permit was granted.&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;Service&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-518&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;California Department of Real Estate&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-519&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-517&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;RealEstateLicense&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateLicense&quot;
                ],
                &quot;description&quot;: &quot;RealEstateLicense&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-513&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;display value, i.e. &#39;CA-DRE# 02068375&#39;&quot;,
                &quot;example&quot;: &quot;CA-DRE# 02068375&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-514&gt;&quot;
              },
              &quot;issuedTo&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the license recipient&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateAgent&quot;,
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;RealEstateAgent&quot;,
                  &quot;id&quot;: &quot;http://{agentid}.example.com/profile/card#me&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-515&gt;&quot;
              },
              &quot;issuedBy&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the issuing organization or service&quot;,
                &quot;x-range&quot;: [
                  &quot;State&quot;,
                  &quot;Organization&quot;,
                  &quot;AdministrativeArea&quot;
                ],
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;State&quot;,
                  &quot;name&quot;: &quot;California&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-516&gt;&quot;
              },
              &quot;issuedThrough&quot;: {
                &quot;x-range&quot;: [
                  &quot;Organization&quot;
                ],
                &quot;description&quot;: &quot;The service through with the permit was granted.&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;Service&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-518&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;California Department of Real Estate&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-519&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-517&gt;&quot;
              },
              &quot;validIn&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the state where the RealEstateLicense is valid&quot;,
                &quot;x-range&quot;: [
                  &quot;State&quot;,
                  &quot;City&quot;,
                  &quot;GeographicArea&quot;,
                  &quot;PostalCode&quot;
                ],
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;State&quot;,
                  &quot;name&quot;: &quot;California&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-520&gt;&quot;
              },
              &quot;validFrom&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;description&quot;: &quot;the first date and time on which the license is valid.&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-521&gt;&quot;
              },
              &quot;validUntil&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;description&quot;: &quot;the last date and time on which the license is valid.&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-522&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;RealEstateLicense&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = type
required = false
path = issuedThrough



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;example&quot;: &quot;California Department of Real Estate&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-519&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;x-range&quot;: [
          &quot;Organization&quot;
        ],
        &quot;description&quot;: &quot;The service through with the permit was granted.&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;Service&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-518&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;California Department of Real Estate&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-519&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-517&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;RealEstateLicense&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateLicense&quot;
                ],
                &quot;description&quot;: &quot;RealEstateLicense&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-513&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;display value, i.e. &#39;CA-DRE# 02068375&#39;&quot;,
                &quot;example&quot;: &quot;CA-DRE# 02068375&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-514&gt;&quot;
              },
              &quot;issuedTo&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the license recipient&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateAgent&quot;,
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;RealEstateAgent&quot;,
                  &quot;id&quot;: &quot;http://{agentid}.example.com/profile/card#me&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-515&gt;&quot;
              },
              &quot;issuedBy&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the issuing organization or service&quot;,
                &quot;x-range&quot;: [
                  &quot;State&quot;,
                  &quot;Organization&quot;,
                  &quot;AdministrativeArea&quot;
                ],
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;State&quot;,
                  &quot;name&quot;: &quot;California&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-516&gt;&quot;
              },
              &quot;issuedThrough&quot;: {
                &quot;x-range&quot;: [
                  &quot;Organization&quot;
                ],
                &quot;description&quot;: &quot;The service through with the permit was granted.&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;Service&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-518&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;California Department of Real Estate&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-519&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-517&gt;&quot;
              },
              &quot;validIn&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the state where the RealEstateLicense is valid&quot;,
                &quot;x-range&quot;: [
                  &quot;State&quot;,
                  &quot;City&quot;,
                  &quot;GeographicArea&quot;,
                  &quot;PostalCode&quot;
                ],
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;State&quot;,
                  &quot;name&quot;: &quot;California&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-520&gt;&quot;
              },
              &quot;validFrom&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;description&quot;: &quot;the first date and time on which the license is valid.&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-521&gt;&quot;
              },
              &quot;validUntil&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;description&quot;: &quot;the last date and time on which the license is valid.&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-522&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;RealEstateLicense&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = name
required = false
path = issuedThrough





{
  "_json": {
    "type": "object",
    "description": "the state where the RealEstateLicense is valid",
    "x-range": [
      "State",
      "City",
      "GeographicArea",
      "PostalCode"
    ],
    "example": {
      "type": "State",
      "name": "California"
    },
    "x-parser-schema-id": "<anonymous-schema-520>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "RealEstateLicense",
        "type": "object",
        "description": "Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "RealEstateLicense"
            ],
            "description": "RealEstateLicense",
            "x-parser-schema-id": "<anonymous-schema-513>"
          },
          "name": {
            "type": "string",
            "description": "display value, i.e. 'CA-DRE# 02068375'",
            "example": "CA-DRE# 02068375",
            "x-parser-schema-id": "<anonymous-schema-514>"
          },
          "issuedTo": {
            "type": "object",
            "description": "the license recipient",
            "x-range": [
              "RealEstateAgent",
              "RealEstateOrganization"
            ],
            "example": {
              "type": "RealEstateAgent",
              "id": "http://{agentid}.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-515>"
          },
          "issuedBy": {
            "type": "object",
            "description": "the issuing organization or service",
            "x-range": [
              "State",
              "Organization",
              "AdministrativeArea"
            ],
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-516>"
          },
          "issuedThrough": {
            "x-range": [
              "Organization"
            ],
            "description": "The service through with the permit was granted.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "example": "Service",
                "x-parser-schema-id": "<anonymous-schema-518>"
              },
              "name": {
                "type": "string",
                "example": "California Department of Real Estate",
                "x-parser-schema-id": "<anonymous-schema-519>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-517>"
          },
          "validIn": {
            "type": "object",
            "description": "the state where the RealEstateLicense is valid",
            "x-range": [
              "State",
              "City",
              "GeographicArea",
              "PostalCode"
            ],
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-520>"
          },
          "validFrom": {
            "type": "string",
            "format": "date-time",
            "description": "the first date and time on which the license is valid.",
            "x-parser-schema-id": "<anonymous-schema-521>"
          },
          "validUntil": {
            "type": "string",
            "format": "date-time",
            "description": "the last date and time on which the license is valid.",
            "x-parser-schema-id": "<anonymous-schema-522>"
          }
        },
        "x-parser-schema-id": "RealEstateLicense"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "date-time",
    "description": "the first date and time on which the license is valid.",
    "x-parser-schema-id": "<anonymous-schema-521>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "RealEstateLicense",
        "type": "object",
        "description": "Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "RealEstateLicense"
            ],
            "description": "RealEstateLicense",
            "x-parser-schema-id": "<anonymous-schema-513>"
          },
          "name": {
            "type": "string",
            "description": "display value, i.e. 'CA-DRE# 02068375'",
            "example": "CA-DRE# 02068375",
            "x-parser-schema-id": "<anonymous-schema-514>"
          },
          "issuedTo": {
            "type": "object",
            "description": "the license recipient",
            "x-range": [
              "RealEstateAgent",
              "RealEstateOrganization"
            ],
            "example": {
              "type": "RealEstateAgent",
              "id": "http://{agentid}.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-515>"
          },
          "issuedBy": {
            "type": "object",
            "description": "the issuing organization or service",
            "x-range": [
              "State",
              "Organization",
              "AdministrativeArea"
            ],
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-516>"
          },
          "issuedThrough": {
            "x-range": [
              "Organization"
            ],
            "description": "The service through with the permit was granted.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "example": "Service",
                "x-parser-schema-id": "<anonymous-schema-518>"
              },
              "name": {
                "type": "string",
                "example": "California Department of Real Estate",
                "x-parser-schema-id": "<anonymous-schema-519>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-517>"
          },
          "validIn": {
            "type": "object",
            "description": "the state where the RealEstateLicense is valid",
            "x-range": [
              "State",
              "City",
              "GeographicArea",
              "PostalCode"
            ],
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-520>"
          },
          "validFrom": {
            "type": "string",
            "format": "date-time",
            "description": "the first date and time on which the license is valid.",
            "x-parser-schema-id": "<anonymous-schema-521>"
          },
          "validUntil": {
            "type": "string",
            "format": "date-time",
            "description": "the last date and time on which the license is valid.",
            "x-parser-schema-id": "<anonymous-schema-522>"
          }
        },
        "x-parser-schema-id": "RealEstateLicense"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "date-time",
    "description": "the last date and time on which the license is valid.",
    "x-parser-schema-id": "<anonymous-schema-522>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "RealEstateLicense",
        "type": "object",
        "description": "Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "RealEstateLicense"
            ],
            "description": "RealEstateLicense",
            "x-parser-schema-id": "<anonymous-schema-513>"
          },
          "name": {
            "type": "string",
            "description": "display value, i.e. 'CA-DRE# 02068375'",
            "example": "CA-DRE# 02068375",
            "x-parser-schema-id": "<anonymous-schema-514>"
          },
          "issuedTo": {
            "type": "object",
            "description": "the license recipient",
            "x-range": [
              "RealEstateAgent",
              "RealEstateOrganization"
            ],
            "example": {
              "type": "RealEstateAgent",
              "id": "http://{agentid}.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-515>"
          },
          "issuedBy": {
            "type": "object",
            "description": "the issuing organization or service",
            "x-range": [
              "State",
              "Organization",
              "AdministrativeArea"
            ],
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-516>"
          },
          "issuedThrough": {
            "x-range": [
              "Organization"
            ],
            "description": "The service through with the permit was granted.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "example": "Service",
                "x-parser-schema-id": "<anonymous-schema-518>"
              },
              "name": {
                "type": "string",
                "example": "California Department of Real Estate",
                "x-parser-schema-id": "<anonymous-schema-519>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-517>"
          },
          "validIn": {
            "type": "object",
            "description": "the state where the RealEstateLicense is valid",
            "x-range": [
              "State",
              "City",
              "GeographicArea",
              "PostalCode"
            ],
            "example": {
              "type": "State",
              "name": "California"
            },
            "x-parser-schema-id": "<anonymous-schema-520>"
          },
          "validFrom": {
            "type": "string",
            "format": "date-time",
            "description": "the first date and time on which the license is valid.",
            "x-parser-schema-id": "<anonymous-schema-521>"
          },
          "validUntil": {
            "type": "string",
            "format": "date-time",
            "description": "the last date and time on which the license is valid.",
            "x-parser-schema-id": "<anonymous-schema-522>"
          }
        },
        "x-parser-schema-id": "RealEstateLicense"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "RealEstateLicense",
  "name": "CA-DRE# 02068375",
  "issuedTo": {
    "type": "RealEstateAgent",
    "id": "http://{agentid}.example.com/profile/card#me"
  },
  "issuedBy": {
    "type": "State",
    "name": "California"
  },
  "issuedThrough": {
    "type": "Service",
    "name": "California Department of Real Estate"
  },
  "validIn": {
    "type": "State",
    "name": "California"
  },
  "validFrom": "2019-08-24T14:15:22Z",
  "validUntil": "2019-08-24T14:15:22Z"
}
```

