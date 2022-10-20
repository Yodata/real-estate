

---
title: ServiceArea
---

{
  "type": {
    "_json": {
      "type": "string",
      "description": "\"ServiceArea\"",
      "enum": [
        "ServiceArea"
      ],
      "x-parser-schema-id": "<anonymous-schema-587>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ServiceArea",
          "type": "object",
          "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
          "x-kind": "ServiceArea",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ServiceArea\"",
              "enum": [
                "ServiceArea"
              ],
              "x-parser-schema-id": "<anonymous-schema-587>"
            },
            "kind": {
              "type": "string",
              "description": "ServiceArea sub-type.  City or PostalCode",
              "enum": [
                "City",
                "PostalCode"
              ],
              "example": "PostalCode",
              "x-parser-schema-id": "<anonymous-schema-588>"
            },
            "identifier": {
              "type": "object",
              "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
              "properties": {
                "bhhsESAId": {
                  "type": "string",
                  "description": "BHHS internal ESA ID",
                  "x-parser-schema-id": "<anonymous-schema-590>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-589>"
            },
            "addressLocality": {
              "type": "string",
              "description": "City, Township.",
              "example": "Woodland Hills",
              "x-parser-schema-id": "<anonymous-schema-591>"
            },
            "postalCode": {
              "type": "string",
              "description": "Zip/Post Code",
              "example": "91371",
              "x-parser-schema-id": "<anonymous-schema-592>"
            },
            "addressRegion": {
              "type": "string",
              "description": "State or Province.",
              "example": "CA",
              "x-parser-schema-id": "<anonymous-schema-593>"
            },
            "addressCountry": {
              "type": "string",
              "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
              "example": "US",
              "x-parser-schema-id": "<anonymous-schema-594>"
            },
            "addressCounty": {
              "type": "string",
              "description": "the county (us real estate extension)",
              "example": "Los Angeles",
              "x-parser-schema-id": "<anonymous-schema-595>"
            },
            "provider": {
              "type": "object",
              "description": "a broker or company who provides service in the ServiceArea",
              "x-range": [
                "RealEstateOrganization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "\"RealEstateOrganization\"",
                  "enum": [
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-597>"
                },
                "id": {
                  "type": "string",
                  "description": "profile URI",
                  "example": "https://org.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-598>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-596>"
            },
            "additionalProperty": {
              "type": "object",
              "description": "BHHS specific ServiceArea properties",
              "properties": {
                "relocationOffice": {
                  "type": "object",
                  "description": "relocation office",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "enum": [
                        "RealEstateOffice"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-601>"
                    },
                    "id": {
                      "type": "string",
                      "x-subPropertyOf": "identifier",
                      "example": "https://org.example.com/profile/card#me",
                      "x-parser-schema-id": "<anonymous-schema-602>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-600>"
                },
                "weight": {
                  "type": "integer",
                  "description": "weight",
                  "x-parser-schema-id": "<anonymous-schema-603>"
                },
                "officeInPostalCode": {
                  "type": "boolean",
                  "description": "true if the service area provider is physically located in the ServiceArea.",
                  "x-parser-schema-id": "<anonymous-schema-604>"
                },
                "sortOrder": {
                  "type": "integer",
                  "description": "sort order",
                  "x-parser-schema-id": "<anonymous-schema-605>"
                },
                "sentToConsumerSite": {
                  "type": "boolean",
                  "description": "sent to consumer site",
                  "x-parser-schema-id": "<anonymous-schema-606>"
                },
                "sentToCompanyLocator": {
                  "type": "boolean",
                  "description": "sent to company locator",
                  "x-parser-schema-id": "<anonymous-schema-607>"
                },
                "sentToReferralSolutions": {
                  "type": "boolean",
                  "description": "sent to referral solutions",
                  "x-parser-schema-id": "<anonymous-schema-608>"
                },
                "luxuryPriceMinimum": {
                  "description": "minimum price for a property listing in the area to be considered a luxury property",
                  "type": "object",
                  "x-range": "PriceSpecification",
                  "example": {
                    "type": "PriceSpecification",
                    "price": 1000000,
                    "priceCurrency": "USD"
                  },
                  "x-parser-schema-id": "<anonymous-schema-609>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-599>"
            }
          },
          "x-parser-schema-id": "ServiceArea"
        },
        "options": {}
      }
    }
  },
  "kind": {
    "_json": {
      "type": "string",
      "description": "ServiceArea sub-type.  City or PostalCode",
      "enum": [
        "City",
        "PostalCode"
      ],
      "example": "PostalCode",
      "x-parser-schema-id": "<anonymous-schema-588>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ServiceArea",
          "type": "object",
          "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
          "x-kind": "ServiceArea",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ServiceArea\"",
              "enum": [
                "ServiceArea"
              ],
              "x-parser-schema-id": "<anonymous-schema-587>"
            },
            "kind": {
              "type": "string",
              "description": "ServiceArea sub-type.  City or PostalCode",
              "enum": [
                "City",
                "PostalCode"
              ],
              "example": "PostalCode",
              "x-parser-schema-id": "<anonymous-schema-588>"
            },
            "identifier": {
              "type": "object",
              "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
              "properties": {
                "bhhsESAId": {
                  "type": "string",
                  "description": "BHHS internal ESA ID",
                  "x-parser-schema-id": "<anonymous-schema-590>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-589>"
            },
            "addressLocality": {
              "type": "string",
              "description": "City, Township.",
              "example": "Woodland Hills",
              "x-parser-schema-id": "<anonymous-schema-591>"
            },
            "postalCode": {
              "type": "string",
              "description": "Zip/Post Code",
              "example": "91371",
              "x-parser-schema-id": "<anonymous-schema-592>"
            },
            "addressRegion": {
              "type": "string",
              "description": "State or Province.",
              "example": "CA",
              "x-parser-schema-id": "<anonymous-schema-593>"
            },
            "addressCountry": {
              "type": "string",
              "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
              "example": "US",
              "x-parser-schema-id": "<anonymous-schema-594>"
            },
            "addressCounty": {
              "type": "string",
              "description": "the county (us real estate extension)",
              "example": "Los Angeles",
              "x-parser-schema-id": "<anonymous-schema-595>"
            },
            "provider": {
              "type": "object",
              "description": "a broker or company who provides service in the ServiceArea",
              "x-range": [
                "RealEstateOrganization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "\"RealEstateOrganization\"",
                  "enum": [
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-597>"
                },
                "id": {
                  "type": "string",
                  "description": "profile URI",
                  "example": "https://org.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-598>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-596>"
            },
            "additionalProperty": {
              "type": "object",
              "description": "BHHS specific ServiceArea properties",
              "properties": {
                "relocationOffice": {
                  "type": "object",
                  "description": "relocation office",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "enum": [
                        "RealEstateOffice"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-601>"
                    },
                    "id": {
                      "type": "string",
                      "x-subPropertyOf": "identifier",
                      "example": "https://org.example.com/profile/card#me",
                      "x-parser-schema-id": "<anonymous-schema-602>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-600>"
                },
                "weight": {
                  "type": "integer",
                  "description": "weight",
                  "x-parser-schema-id": "<anonymous-schema-603>"
                },
                "officeInPostalCode": {
                  "type": "boolean",
                  "description": "true if the service area provider is physically located in the ServiceArea.",
                  "x-parser-schema-id": "<anonymous-schema-604>"
                },
                "sortOrder": {
                  "type": "integer",
                  "description": "sort order",
                  "x-parser-schema-id": "<anonymous-schema-605>"
                },
                "sentToConsumerSite": {
                  "type": "boolean",
                  "description": "sent to consumer site",
                  "x-parser-schema-id": "<anonymous-schema-606>"
                },
                "sentToCompanyLocator": {
                  "type": "boolean",
                  "description": "sent to company locator",
                  "x-parser-schema-id": "<anonymous-schema-607>"
                },
                "sentToReferralSolutions": {
                  "type": "boolean",
                  "description": "sent to referral solutions",
                  "x-parser-schema-id": "<anonymous-schema-608>"
                },
                "luxuryPriceMinimum": {
                  "description": "minimum price for a property listing in the area to be considered a luxury property",
                  "type": "object",
                  "x-range": "PriceSpecification",
                  "example": {
                    "type": "PriceSpecification",
                    "price": 1000000,
                    "priceCurrency": "USD"
                  },
                  "x-parser-schema-id": "<anonymous-schema-609>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-599>"
            }
          },
          "x-parser-schema-id": "ServiceArea"
        },
        "options": {}
      }
    }
  },
  "identifier": {
    "_json": {
      "type": "object",
      "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
      "properties": {
        "bhhsESAId": {
          "type": "string",
          "description": "BHHS internal ESA ID",
          "x-parser-schema-id": "<anonymous-schema-590>"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-589>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ServiceArea",
          "type": "object",
          "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
          "x-kind": "ServiceArea",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ServiceArea\"",
              "enum": [
                "ServiceArea"
              ],
              "x-parser-schema-id": "<anonymous-schema-587>"
            },
            "kind": {
              "type": "string",
              "description": "ServiceArea sub-type.  City or PostalCode",
              "enum": [
                "City",
                "PostalCode"
              ],
              "example": "PostalCode",
              "x-parser-schema-id": "<anonymous-schema-588>"
            },
            "identifier": {
              "type": "object",
              "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
              "properties": {
                "bhhsESAId": {
                  "type": "string",
                  "description": "BHHS internal ESA ID",
                  "x-parser-schema-id": "<anonymous-schema-590>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-589>"
            },
            "addressLocality": {
              "type": "string",
              "description": "City, Township.",
              "example": "Woodland Hills",
              "x-parser-schema-id": "<anonymous-schema-591>"
            },
            "postalCode": {
              "type": "string",
              "description": "Zip/Post Code",
              "example": "91371",
              "x-parser-schema-id": "<anonymous-schema-592>"
            },
            "addressRegion": {
              "type": "string",
              "description": "State or Province.",
              "example": "CA",
              "x-parser-schema-id": "<anonymous-schema-593>"
            },
            "addressCountry": {
              "type": "string",
              "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
              "example": "US",
              "x-parser-schema-id": "<anonymous-schema-594>"
            },
            "addressCounty": {
              "type": "string",
              "description": "the county (us real estate extension)",
              "example": "Los Angeles",
              "x-parser-schema-id": "<anonymous-schema-595>"
            },
            "provider": {
              "type": "object",
              "description": "a broker or company who provides service in the ServiceArea",
              "x-range": [
                "RealEstateOrganization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "\"RealEstateOrganization\"",
                  "enum": [
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-597>"
                },
                "id": {
                  "type": "string",
                  "description": "profile URI",
                  "example": "https://org.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-598>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-596>"
            },
            "additionalProperty": {
              "type": "object",
              "description": "BHHS specific ServiceArea properties",
              "properties": {
                "relocationOffice": {
                  "type": "object",
                  "description": "relocation office",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "enum": [
                        "RealEstateOffice"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-601>"
                    },
                    "id": {
                      "type": "string",
                      "x-subPropertyOf": "identifier",
                      "example": "https://org.example.com/profile/card#me",
                      "x-parser-schema-id": "<anonymous-schema-602>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-600>"
                },
                "weight": {
                  "type": "integer",
                  "description": "weight",
                  "x-parser-schema-id": "<anonymous-schema-603>"
                },
                "officeInPostalCode": {
                  "type": "boolean",
                  "description": "true if the service area provider is physically located in the ServiceArea.",
                  "x-parser-schema-id": "<anonymous-schema-604>"
                },
                "sortOrder": {
                  "type": "integer",
                  "description": "sort order",
                  "x-parser-schema-id": "<anonymous-schema-605>"
                },
                "sentToConsumerSite": {
                  "type": "boolean",
                  "description": "sent to consumer site",
                  "x-parser-schema-id": "<anonymous-schema-606>"
                },
                "sentToCompanyLocator": {
                  "type": "boolean",
                  "description": "sent to company locator",
                  "x-parser-schema-id": "<anonymous-schema-607>"
                },
                "sentToReferralSolutions": {
                  "type": "boolean",
                  "description": "sent to referral solutions",
                  "x-parser-schema-id": "<anonymous-schema-608>"
                },
                "luxuryPriceMinimum": {
                  "description": "minimum price for a property listing in the area to be considered a luxury property",
                  "type": "object",
                  "x-range": "PriceSpecification",
                  "example": {
                    "type": "PriceSpecification",
                    "price": 1000000,
                    "priceCurrency": "USD"
                  },
                  "x-parser-schema-id": "<anonymous-schema-609>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-599>"
            }
          },
          "x-parser-schema-id": "ServiceArea"
        },
        "options": {}
      }
    }
  },
  "addressLocality": {
    "_json": {
      "type": "string",
      "description": "City, Township.",
      "example": "Woodland Hills",
      "x-parser-schema-id": "<anonymous-schema-591>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ServiceArea",
          "type": "object",
          "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
          "x-kind": "ServiceArea",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ServiceArea\"",
              "enum": [
                "ServiceArea"
              ],
              "x-parser-schema-id": "<anonymous-schema-587>"
            },
            "kind": {
              "type": "string",
              "description": "ServiceArea sub-type.  City or PostalCode",
              "enum": [
                "City",
                "PostalCode"
              ],
              "example": "PostalCode",
              "x-parser-schema-id": "<anonymous-schema-588>"
            },
            "identifier": {
              "type": "object",
              "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
              "properties": {
                "bhhsESAId": {
                  "type": "string",
                  "description": "BHHS internal ESA ID",
                  "x-parser-schema-id": "<anonymous-schema-590>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-589>"
            },
            "addressLocality": {
              "type": "string",
              "description": "City, Township.",
              "example": "Woodland Hills",
              "x-parser-schema-id": "<anonymous-schema-591>"
            },
            "postalCode": {
              "type": "string",
              "description": "Zip/Post Code",
              "example": "91371",
              "x-parser-schema-id": "<anonymous-schema-592>"
            },
            "addressRegion": {
              "type": "string",
              "description": "State or Province.",
              "example": "CA",
              "x-parser-schema-id": "<anonymous-schema-593>"
            },
            "addressCountry": {
              "type": "string",
              "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
              "example": "US",
              "x-parser-schema-id": "<anonymous-schema-594>"
            },
            "addressCounty": {
              "type": "string",
              "description": "the county (us real estate extension)",
              "example": "Los Angeles",
              "x-parser-schema-id": "<anonymous-schema-595>"
            },
            "provider": {
              "type": "object",
              "description": "a broker or company who provides service in the ServiceArea",
              "x-range": [
                "RealEstateOrganization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "\"RealEstateOrganization\"",
                  "enum": [
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-597>"
                },
                "id": {
                  "type": "string",
                  "description": "profile URI",
                  "example": "https://org.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-598>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-596>"
            },
            "additionalProperty": {
              "type": "object",
              "description": "BHHS specific ServiceArea properties",
              "properties": {
                "relocationOffice": {
                  "type": "object",
                  "description": "relocation office",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "enum": [
                        "RealEstateOffice"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-601>"
                    },
                    "id": {
                      "type": "string",
                      "x-subPropertyOf": "identifier",
                      "example": "https://org.example.com/profile/card#me",
                      "x-parser-schema-id": "<anonymous-schema-602>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-600>"
                },
                "weight": {
                  "type": "integer",
                  "description": "weight",
                  "x-parser-schema-id": "<anonymous-schema-603>"
                },
                "officeInPostalCode": {
                  "type": "boolean",
                  "description": "true if the service area provider is physically located in the ServiceArea.",
                  "x-parser-schema-id": "<anonymous-schema-604>"
                },
                "sortOrder": {
                  "type": "integer",
                  "description": "sort order",
                  "x-parser-schema-id": "<anonymous-schema-605>"
                },
                "sentToConsumerSite": {
                  "type": "boolean",
                  "description": "sent to consumer site",
                  "x-parser-schema-id": "<anonymous-schema-606>"
                },
                "sentToCompanyLocator": {
                  "type": "boolean",
                  "description": "sent to company locator",
                  "x-parser-schema-id": "<anonymous-schema-607>"
                },
                "sentToReferralSolutions": {
                  "type": "boolean",
                  "description": "sent to referral solutions",
                  "x-parser-schema-id": "<anonymous-schema-608>"
                },
                "luxuryPriceMinimum": {
                  "description": "minimum price for a property listing in the area to be considered a luxury property",
                  "type": "object",
                  "x-range": "PriceSpecification",
                  "example": {
                    "type": "PriceSpecification",
                    "price": 1000000,
                    "priceCurrency": "USD"
                  },
                  "x-parser-schema-id": "<anonymous-schema-609>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-599>"
            }
          },
          "x-parser-schema-id": "ServiceArea"
        },
        "options": {}
      }
    }
  },
  "postalCode": {
    "_json": {
      "type": "string",
      "description": "Zip/Post Code",
      "example": "91371",
      "x-parser-schema-id": "<anonymous-schema-592>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ServiceArea",
          "type": "object",
          "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
          "x-kind": "ServiceArea",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ServiceArea\"",
              "enum": [
                "ServiceArea"
              ],
              "x-parser-schema-id": "<anonymous-schema-587>"
            },
            "kind": {
              "type": "string",
              "description": "ServiceArea sub-type.  City or PostalCode",
              "enum": [
                "City",
                "PostalCode"
              ],
              "example": "PostalCode",
              "x-parser-schema-id": "<anonymous-schema-588>"
            },
            "identifier": {
              "type": "object",
              "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
              "properties": {
                "bhhsESAId": {
                  "type": "string",
                  "description": "BHHS internal ESA ID",
                  "x-parser-schema-id": "<anonymous-schema-590>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-589>"
            },
            "addressLocality": {
              "type": "string",
              "description": "City, Township.",
              "example": "Woodland Hills",
              "x-parser-schema-id": "<anonymous-schema-591>"
            },
            "postalCode": {
              "type": "string",
              "description": "Zip/Post Code",
              "example": "91371",
              "x-parser-schema-id": "<anonymous-schema-592>"
            },
            "addressRegion": {
              "type": "string",
              "description": "State or Province.",
              "example": "CA",
              "x-parser-schema-id": "<anonymous-schema-593>"
            },
            "addressCountry": {
              "type": "string",
              "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
              "example": "US",
              "x-parser-schema-id": "<anonymous-schema-594>"
            },
            "addressCounty": {
              "type": "string",
              "description": "the county (us real estate extension)",
              "example": "Los Angeles",
              "x-parser-schema-id": "<anonymous-schema-595>"
            },
            "provider": {
              "type": "object",
              "description": "a broker or company who provides service in the ServiceArea",
              "x-range": [
                "RealEstateOrganization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "\"RealEstateOrganization\"",
                  "enum": [
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-597>"
                },
                "id": {
                  "type": "string",
                  "description": "profile URI",
                  "example": "https://org.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-598>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-596>"
            },
            "additionalProperty": {
              "type": "object",
              "description": "BHHS specific ServiceArea properties",
              "properties": {
                "relocationOffice": {
                  "type": "object",
                  "description": "relocation office",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "enum": [
                        "RealEstateOffice"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-601>"
                    },
                    "id": {
                      "type": "string",
                      "x-subPropertyOf": "identifier",
                      "example": "https://org.example.com/profile/card#me",
                      "x-parser-schema-id": "<anonymous-schema-602>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-600>"
                },
                "weight": {
                  "type": "integer",
                  "description": "weight",
                  "x-parser-schema-id": "<anonymous-schema-603>"
                },
                "officeInPostalCode": {
                  "type": "boolean",
                  "description": "true if the service area provider is physically located in the ServiceArea.",
                  "x-parser-schema-id": "<anonymous-schema-604>"
                },
                "sortOrder": {
                  "type": "integer",
                  "description": "sort order",
                  "x-parser-schema-id": "<anonymous-schema-605>"
                },
                "sentToConsumerSite": {
                  "type": "boolean",
                  "description": "sent to consumer site",
                  "x-parser-schema-id": "<anonymous-schema-606>"
                },
                "sentToCompanyLocator": {
                  "type": "boolean",
                  "description": "sent to company locator",
                  "x-parser-schema-id": "<anonymous-schema-607>"
                },
                "sentToReferralSolutions": {
                  "type": "boolean",
                  "description": "sent to referral solutions",
                  "x-parser-schema-id": "<anonymous-schema-608>"
                },
                "luxuryPriceMinimum": {
                  "description": "minimum price for a property listing in the area to be considered a luxury property",
                  "type": "object",
                  "x-range": "PriceSpecification",
                  "example": {
                    "type": "PriceSpecification",
                    "price": 1000000,
                    "priceCurrency": "USD"
                  },
                  "x-parser-schema-id": "<anonymous-schema-609>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-599>"
            }
          },
          "x-parser-schema-id": "ServiceArea"
        },
        "options": {}
      }
    }
  },
  "addressRegion": {
    "_json": {
      "type": "string",
      "description": "State or Province.",
      "example": "CA",
      "x-parser-schema-id": "<anonymous-schema-593>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ServiceArea",
          "type": "object",
          "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
          "x-kind": "ServiceArea",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ServiceArea\"",
              "enum": [
                "ServiceArea"
              ],
              "x-parser-schema-id": "<anonymous-schema-587>"
            },
            "kind": {
              "type": "string",
              "description": "ServiceArea sub-type.  City or PostalCode",
              "enum": [
                "City",
                "PostalCode"
              ],
              "example": "PostalCode",
              "x-parser-schema-id": "<anonymous-schema-588>"
            },
            "identifier": {
              "type": "object",
              "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
              "properties": {
                "bhhsESAId": {
                  "type": "string",
                  "description": "BHHS internal ESA ID",
                  "x-parser-schema-id": "<anonymous-schema-590>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-589>"
            },
            "addressLocality": {
              "type": "string",
              "description": "City, Township.",
              "example": "Woodland Hills",
              "x-parser-schema-id": "<anonymous-schema-591>"
            },
            "postalCode": {
              "type": "string",
              "description": "Zip/Post Code",
              "example": "91371",
              "x-parser-schema-id": "<anonymous-schema-592>"
            },
            "addressRegion": {
              "type": "string",
              "description": "State or Province.",
              "example": "CA",
              "x-parser-schema-id": "<anonymous-schema-593>"
            },
            "addressCountry": {
              "type": "string",
              "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
              "example": "US",
              "x-parser-schema-id": "<anonymous-schema-594>"
            },
            "addressCounty": {
              "type": "string",
              "description": "the county (us real estate extension)",
              "example": "Los Angeles",
              "x-parser-schema-id": "<anonymous-schema-595>"
            },
            "provider": {
              "type": "object",
              "description": "a broker or company who provides service in the ServiceArea",
              "x-range": [
                "RealEstateOrganization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "\"RealEstateOrganization\"",
                  "enum": [
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-597>"
                },
                "id": {
                  "type": "string",
                  "description": "profile URI",
                  "example": "https://org.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-598>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-596>"
            },
            "additionalProperty": {
              "type": "object",
              "description": "BHHS specific ServiceArea properties",
              "properties": {
                "relocationOffice": {
                  "type": "object",
                  "description": "relocation office",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "enum": [
                        "RealEstateOffice"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-601>"
                    },
                    "id": {
                      "type": "string",
                      "x-subPropertyOf": "identifier",
                      "example": "https://org.example.com/profile/card#me",
                      "x-parser-schema-id": "<anonymous-schema-602>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-600>"
                },
                "weight": {
                  "type": "integer",
                  "description": "weight",
                  "x-parser-schema-id": "<anonymous-schema-603>"
                },
                "officeInPostalCode": {
                  "type": "boolean",
                  "description": "true if the service area provider is physically located in the ServiceArea.",
                  "x-parser-schema-id": "<anonymous-schema-604>"
                },
                "sortOrder": {
                  "type": "integer",
                  "description": "sort order",
                  "x-parser-schema-id": "<anonymous-schema-605>"
                },
                "sentToConsumerSite": {
                  "type": "boolean",
                  "description": "sent to consumer site",
                  "x-parser-schema-id": "<anonymous-schema-606>"
                },
                "sentToCompanyLocator": {
                  "type": "boolean",
                  "description": "sent to company locator",
                  "x-parser-schema-id": "<anonymous-schema-607>"
                },
                "sentToReferralSolutions": {
                  "type": "boolean",
                  "description": "sent to referral solutions",
                  "x-parser-schema-id": "<anonymous-schema-608>"
                },
                "luxuryPriceMinimum": {
                  "description": "minimum price for a property listing in the area to be considered a luxury property",
                  "type": "object",
                  "x-range": "PriceSpecification",
                  "example": {
                    "type": "PriceSpecification",
                    "price": 1000000,
                    "priceCurrency": "USD"
                  },
                  "x-parser-schema-id": "<anonymous-schema-609>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-599>"
            }
          },
          "x-parser-schema-id": "ServiceArea"
        },
        "options": {}
      }
    }
  },
  "addressCountry": {
    "_json": {
      "type": "string",
      "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
      "example": "US",
      "x-parser-schema-id": "<anonymous-schema-594>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ServiceArea",
          "type": "object",
          "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
          "x-kind": "ServiceArea",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ServiceArea\"",
              "enum": [
                "ServiceArea"
              ],
              "x-parser-schema-id": "<anonymous-schema-587>"
            },
            "kind": {
              "type": "string",
              "description": "ServiceArea sub-type.  City or PostalCode",
              "enum": [
                "City",
                "PostalCode"
              ],
              "example": "PostalCode",
              "x-parser-schema-id": "<anonymous-schema-588>"
            },
            "identifier": {
              "type": "object",
              "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
              "properties": {
                "bhhsESAId": {
                  "type": "string",
                  "description": "BHHS internal ESA ID",
                  "x-parser-schema-id": "<anonymous-schema-590>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-589>"
            },
            "addressLocality": {
              "type": "string",
              "description": "City, Township.",
              "example": "Woodland Hills",
              "x-parser-schema-id": "<anonymous-schema-591>"
            },
            "postalCode": {
              "type": "string",
              "description": "Zip/Post Code",
              "example": "91371",
              "x-parser-schema-id": "<anonymous-schema-592>"
            },
            "addressRegion": {
              "type": "string",
              "description": "State or Province.",
              "example": "CA",
              "x-parser-schema-id": "<anonymous-schema-593>"
            },
            "addressCountry": {
              "type": "string",
              "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
              "example": "US",
              "x-parser-schema-id": "<anonymous-schema-594>"
            },
            "addressCounty": {
              "type": "string",
              "description": "the county (us real estate extension)",
              "example": "Los Angeles",
              "x-parser-schema-id": "<anonymous-schema-595>"
            },
            "provider": {
              "type": "object",
              "description": "a broker or company who provides service in the ServiceArea",
              "x-range": [
                "RealEstateOrganization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "\"RealEstateOrganization\"",
                  "enum": [
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-597>"
                },
                "id": {
                  "type": "string",
                  "description": "profile URI",
                  "example": "https://org.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-598>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-596>"
            },
            "additionalProperty": {
              "type": "object",
              "description": "BHHS specific ServiceArea properties",
              "properties": {
                "relocationOffice": {
                  "type": "object",
                  "description": "relocation office",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "enum": [
                        "RealEstateOffice"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-601>"
                    },
                    "id": {
                      "type": "string",
                      "x-subPropertyOf": "identifier",
                      "example": "https://org.example.com/profile/card#me",
                      "x-parser-schema-id": "<anonymous-schema-602>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-600>"
                },
                "weight": {
                  "type": "integer",
                  "description": "weight",
                  "x-parser-schema-id": "<anonymous-schema-603>"
                },
                "officeInPostalCode": {
                  "type": "boolean",
                  "description": "true if the service area provider is physically located in the ServiceArea.",
                  "x-parser-schema-id": "<anonymous-schema-604>"
                },
                "sortOrder": {
                  "type": "integer",
                  "description": "sort order",
                  "x-parser-schema-id": "<anonymous-schema-605>"
                },
                "sentToConsumerSite": {
                  "type": "boolean",
                  "description": "sent to consumer site",
                  "x-parser-schema-id": "<anonymous-schema-606>"
                },
                "sentToCompanyLocator": {
                  "type": "boolean",
                  "description": "sent to company locator",
                  "x-parser-schema-id": "<anonymous-schema-607>"
                },
                "sentToReferralSolutions": {
                  "type": "boolean",
                  "description": "sent to referral solutions",
                  "x-parser-schema-id": "<anonymous-schema-608>"
                },
                "luxuryPriceMinimum": {
                  "description": "minimum price for a property listing in the area to be considered a luxury property",
                  "type": "object",
                  "x-range": "PriceSpecification",
                  "example": {
                    "type": "PriceSpecification",
                    "price": 1000000,
                    "priceCurrency": "USD"
                  },
                  "x-parser-schema-id": "<anonymous-schema-609>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-599>"
            }
          },
          "x-parser-schema-id": "ServiceArea"
        },
        "options": {}
      }
    }
  },
  "addressCounty": {
    "_json": {
      "type": "string",
      "description": "the county (us real estate extension)",
      "example": "Los Angeles",
      "x-parser-schema-id": "<anonymous-schema-595>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ServiceArea",
          "type": "object",
          "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
          "x-kind": "ServiceArea",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ServiceArea\"",
              "enum": [
                "ServiceArea"
              ],
              "x-parser-schema-id": "<anonymous-schema-587>"
            },
            "kind": {
              "type": "string",
              "description": "ServiceArea sub-type.  City or PostalCode",
              "enum": [
                "City",
                "PostalCode"
              ],
              "example": "PostalCode",
              "x-parser-schema-id": "<anonymous-schema-588>"
            },
            "identifier": {
              "type": "object",
              "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
              "properties": {
                "bhhsESAId": {
                  "type": "string",
                  "description": "BHHS internal ESA ID",
                  "x-parser-schema-id": "<anonymous-schema-590>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-589>"
            },
            "addressLocality": {
              "type": "string",
              "description": "City, Township.",
              "example": "Woodland Hills",
              "x-parser-schema-id": "<anonymous-schema-591>"
            },
            "postalCode": {
              "type": "string",
              "description": "Zip/Post Code",
              "example": "91371",
              "x-parser-schema-id": "<anonymous-schema-592>"
            },
            "addressRegion": {
              "type": "string",
              "description": "State or Province.",
              "example": "CA",
              "x-parser-schema-id": "<anonymous-schema-593>"
            },
            "addressCountry": {
              "type": "string",
              "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
              "example": "US",
              "x-parser-schema-id": "<anonymous-schema-594>"
            },
            "addressCounty": {
              "type": "string",
              "description": "the county (us real estate extension)",
              "example": "Los Angeles",
              "x-parser-schema-id": "<anonymous-schema-595>"
            },
            "provider": {
              "type": "object",
              "description": "a broker or company who provides service in the ServiceArea",
              "x-range": [
                "RealEstateOrganization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "\"RealEstateOrganization\"",
                  "enum": [
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-597>"
                },
                "id": {
                  "type": "string",
                  "description": "profile URI",
                  "example": "https://org.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-598>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-596>"
            },
            "additionalProperty": {
              "type": "object",
              "description": "BHHS specific ServiceArea properties",
              "properties": {
                "relocationOffice": {
                  "type": "object",
                  "description": "relocation office",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "enum": [
                        "RealEstateOffice"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-601>"
                    },
                    "id": {
                      "type": "string",
                      "x-subPropertyOf": "identifier",
                      "example": "https://org.example.com/profile/card#me",
                      "x-parser-schema-id": "<anonymous-schema-602>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-600>"
                },
                "weight": {
                  "type": "integer",
                  "description": "weight",
                  "x-parser-schema-id": "<anonymous-schema-603>"
                },
                "officeInPostalCode": {
                  "type": "boolean",
                  "description": "true if the service area provider is physically located in the ServiceArea.",
                  "x-parser-schema-id": "<anonymous-schema-604>"
                },
                "sortOrder": {
                  "type": "integer",
                  "description": "sort order",
                  "x-parser-schema-id": "<anonymous-schema-605>"
                },
                "sentToConsumerSite": {
                  "type": "boolean",
                  "description": "sent to consumer site",
                  "x-parser-schema-id": "<anonymous-schema-606>"
                },
                "sentToCompanyLocator": {
                  "type": "boolean",
                  "description": "sent to company locator",
                  "x-parser-schema-id": "<anonymous-schema-607>"
                },
                "sentToReferralSolutions": {
                  "type": "boolean",
                  "description": "sent to referral solutions",
                  "x-parser-schema-id": "<anonymous-schema-608>"
                },
                "luxuryPriceMinimum": {
                  "description": "minimum price for a property listing in the area to be considered a luxury property",
                  "type": "object",
                  "x-range": "PriceSpecification",
                  "example": {
                    "type": "PriceSpecification",
                    "price": 1000000,
                    "priceCurrency": "USD"
                  },
                  "x-parser-schema-id": "<anonymous-schema-609>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-599>"
            }
          },
          "x-parser-schema-id": "ServiceArea"
        },
        "options": {}
      }
    }
  },
  "provider": {
    "_json": {
      "type": "object",
      "description": "a broker or company who provides service in the ServiceArea",
      "x-range": [
        "RealEstateOrganization"
      ],
      "properties": {
        "type": {
          "type": "string",
          "description": "\"RealEstateOrganization\"",
          "enum": [
            "RealEstateOrganization"
          ],
          "x-parser-schema-id": "<anonymous-schema-597>"
        },
        "id": {
          "type": "string",
          "description": "profile URI",
          "example": "https://org.example.com/profile/card#me",
          "x-parser-schema-id": "<anonymous-schema-598>"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-596>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ServiceArea",
          "type": "object",
          "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
          "x-kind": "ServiceArea",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ServiceArea\"",
              "enum": [
                "ServiceArea"
              ],
              "x-parser-schema-id": "<anonymous-schema-587>"
            },
            "kind": {
              "type": "string",
              "description": "ServiceArea sub-type.  City or PostalCode",
              "enum": [
                "City",
                "PostalCode"
              ],
              "example": "PostalCode",
              "x-parser-schema-id": "<anonymous-schema-588>"
            },
            "identifier": {
              "type": "object",
              "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
              "properties": {
                "bhhsESAId": {
                  "type": "string",
                  "description": "BHHS internal ESA ID",
                  "x-parser-schema-id": "<anonymous-schema-590>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-589>"
            },
            "addressLocality": {
              "type": "string",
              "description": "City, Township.",
              "example": "Woodland Hills",
              "x-parser-schema-id": "<anonymous-schema-591>"
            },
            "postalCode": {
              "type": "string",
              "description": "Zip/Post Code",
              "example": "91371",
              "x-parser-schema-id": "<anonymous-schema-592>"
            },
            "addressRegion": {
              "type": "string",
              "description": "State or Province.",
              "example": "CA",
              "x-parser-schema-id": "<anonymous-schema-593>"
            },
            "addressCountry": {
              "type": "string",
              "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
              "example": "US",
              "x-parser-schema-id": "<anonymous-schema-594>"
            },
            "addressCounty": {
              "type": "string",
              "description": "the county (us real estate extension)",
              "example": "Los Angeles",
              "x-parser-schema-id": "<anonymous-schema-595>"
            },
            "provider": {
              "type": "object",
              "description": "a broker or company who provides service in the ServiceArea",
              "x-range": [
                "RealEstateOrganization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "\"RealEstateOrganization\"",
                  "enum": [
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-597>"
                },
                "id": {
                  "type": "string",
                  "description": "profile URI",
                  "example": "https://org.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-598>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-596>"
            },
            "additionalProperty": {
              "type": "object",
              "description": "BHHS specific ServiceArea properties",
              "properties": {
                "relocationOffice": {
                  "type": "object",
                  "description": "relocation office",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "enum": [
                        "RealEstateOffice"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-601>"
                    },
                    "id": {
                      "type": "string",
                      "x-subPropertyOf": "identifier",
                      "example": "https://org.example.com/profile/card#me",
                      "x-parser-schema-id": "<anonymous-schema-602>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-600>"
                },
                "weight": {
                  "type": "integer",
                  "description": "weight",
                  "x-parser-schema-id": "<anonymous-schema-603>"
                },
                "officeInPostalCode": {
                  "type": "boolean",
                  "description": "true if the service area provider is physically located in the ServiceArea.",
                  "x-parser-schema-id": "<anonymous-schema-604>"
                },
                "sortOrder": {
                  "type": "integer",
                  "description": "sort order",
                  "x-parser-schema-id": "<anonymous-schema-605>"
                },
                "sentToConsumerSite": {
                  "type": "boolean",
                  "description": "sent to consumer site",
                  "x-parser-schema-id": "<anonymous-schema-606>"
                },
                "sentToCompanyLocator": {
                  "type": "boolean",
                  "description": "sent to company locator",
                  "x-parser-schema-id": "<anonymous-schema-607>"
                },
                "sentToReferralSolutions": {
                  "type": "boolean",
                  "description": "sent to referral solutions",
                  "x-parser-schema-id": "<anonymous-schema-608>"
                },
                "luxuryPriceMinimum": {
                  "description": "minimum price for a property listing in the area to be considered a luxury property",
                  "type": "object",
                  "x-range": "PriceSpecification",
                  "example": {
                    "type": "PriceSpecification",
                    "price": 1000000,
                    "priceCurrency": "USD"
                  },
                  "x-parser-schema-id": "<anonymous-schema-609>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-599>"
            }
          },
          "x-parser-schema-id": "ServiceArea"
        },
        "options": {}
      }
    }
  },
  "additionalProperty": {
    "_json": {
      "type": "object",
      "description": "BHHS specific ServiceArea properties",
      "properties": {
        "relocationOffice": {
          "type": "object",
          "description": "relocation office",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "RealEstateOffice"
              ],
              "x-parser-schema-id": "<anonymous-schema-601>"
            },
            "id": {
              "type": "string",
              "x-subPropertyOf": "identifier",
              "example": "https://org.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-602>"
            }
          },
          "x-parser-schema-id": "<anonymous-schema-600>"
        },
        "weight": {
          "type": "integer",
          "description": "weight",
          "x-parser-schema-id": "<anonymous-schema-603>"
        },
        "officeInPostalCode": {
          "type": "boolean",
          "description": "true if the service area provider is physically located in the ServiceArea.",
          "x-parser-schema-id": "<anonymous-schema-604>"
        },
        "sortOrder": {
          "type": "integer",
          "description": "sort order",
          "x-parser-schema-id": "<anonymous-schema-605>"
        },
        "sentToConsumerSite": {
          "type": "boolean",
          "description": "sent to consumer site",
          "x-parser-schema-id": "<anonymous-schema-606>"
        },
        "sentToCompanyLocator": {
          "type": "boolean",
          "description": "sent to company locator",
          "x-parser-schema-id": "<anonymous-schema-607>"
        },
        "sentToReferralSolutions": {
          "type": "boolean",
          "description": "sent to referral solutions",
          "x-parser-schema-id": "<anonymous-schema-608>"
        },
        "luxuryPriceMinimum": {
          "description": "minimum price for a property listing in the area to be considered a luxury property",
          "type": "object",
          "x-range": "PriceSpecification",
          "example": {
            "type": "PriceSpecification",
            "price": 1000000,
            "priceCurrency": "USD"
          },
          "x-parser-schema-id": "<anonymous-schema-609>"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-599>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "ServiceArea",
          "type": "object",
          "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
          "x-kind": "ServiceArea",
          "properties": {
            "type": {
              "type": "string",
              "description": "\"ServiceArea\"",
              "enum": [
                "ServiceArea"
              ],
              "x-parser-schema-id": "<anonymous-schema-587>"
            },
            "kind": {
              "type": "string",
              "description": "ServiceArea sub-type.  City or PostalCode",
              "enum": [
                "City",
                "PostalCode"
              ],
              "example": "PostalCode",
              "x-parser-schema-id": "<anonymous-schema-588>"
            },
            "identifier": {
              "type": "object",
              "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
              "properties": {
                "bhhsESAId": {
                  "type": "string",
                  "description": "BHHS internal ESA ID",
                  "x-parser-schema-id": "<anonymous-schema-590>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-589>"
            },
            "addressLocality": {
              "type": "string",
              "description": "City, Township.",
              "example": "Woodland Hills",
              "x-parser-schema-id": "<anonymous-schema-591>"
            },
            "postalCode": {
              "type": "string",
              "description": "Zip/Post Code",
              "example": "91371",
              "x-parser-schema-id": "<anonymous-schema-592>"
            },
            "addressRegion": {
              "type": "string",
              "description": "State or Province.",
              "example": "CA",
              "x-parser-schema-id": "<anonymous-schema-593>"
            },
            "addressCountry": {
              "type": "string",
              "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
              "example": "US",
              "x-parser-schema-id": "<anonymous-schema-594>"
            },
            "addressCounty": {
              "type": "string",
              "description": "the county (us real estate extension)",
              "example": "Los Angeles",
              "x-parser-schema-id": "<anonymous-schema-595>"
            },
            "provider": {
              "type": "object",
              "description": "a broker or company who provides service in the ServiceArea",
              "x-range": [
                "RealEstateOrganization"
              ],
              "properties": {
                "type": {
                  "type": "string",
                  "description": "\"RealEstateOrganization\"",
                  "enum": [
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-597>"
                },
                "id": {
                  "type": "string",
                  "description": "profile URI",
                  "example": "https://org.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-598>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-596>"
            },
            "additionalProperty": {
              "type": "object",
              "description": "BHHS specific ServiceArea properties",
              "properties": {
                "relocationOffice": {
                  "type": "object",
                  "description": "relocation office",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "enum": [
                        "RealEstateOffice"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-601>"
                    },
                    "id": {
                      "type": "string",
                      "x-subPropertyOf": "identifier",
                      "example": "https://org.example.com/profile/card#me",
                      "x-parser-schema-id": "<anonymous-schema-602>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-600>"
                },
                "weight": {
                  "type": "integer",
                  "description": "weight",
                  "x-parser-schema-id": "<anonymous-schema-603>"
                },
                "officeInPostalCode": {
                  "type": "boolean",
                  "description": "true if the service area provider is physically located in the ServiceArea.",
                  "x-parser-schema-id": "<anonymous-schema-604>"
                },
                "sortOrder": {
                  "type": "integer",
                  "description": "sort order",
                  "x-parser-schema-id": "<anonymous-schema-605>"
                },
                "sentToConsumerSite": {
                  "type": "boolean",
                  "description": "sent to consumer site",
                  "x-parser-schema-id": "<anonymous-schema-606>"
                },
                "sentToCompanyLocator": {
                  "type": "boolean",
                  "description": "sent to company locator",
                  "x-parser-schema-id": "<anonymous-schema-607>"
                },
                "sentToReferralSolutions": {
                  "type": "boolean",
                  "description": "sent to referral solutions",
                  "x-parser-schema-id": "<anonymous-schema-608>"
                },
                "luxuryPriceMinimum": {
                  "description": "minimum price for a property listing in the area to be considered a luxury property",
                  "type": "object",
                  "x-range": "PriceSpecification",
                  "example": {
                    "type": "PriceSpecification",
                    "price": 1000000,
                    "priceCurrency": "USD"
                  },
                  "x-parser-schema-id": "<anonymous-schema-609>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-599>"
            }
          },
          "x-parser-schema-id": "ServiceArea"
        },
        "options": {}
      }
    }
  }
}


# ServiceArea

an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "description": "\"ServiceArea\"",
    "enum": [
      "ServiceArea"
    ],
    "x-parser-schema-id": "<anonymous-schema-587>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ServiceArea",
        "type": "object",
        "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
        "x-kind": "ServiceArea",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ServiceArea\"",
            "enum": [
              "ServiceArea"
            ],
            "x-parser-schema-id": "<anonymous-schema-587>"
          },
          "kind": {
            "type": "string",
            "description": "ServiceArea sub-type.  City or PostalCode",
            "enum": [
              "City",
              "PostalCode"
            ],
            "example": "PostalCode",
            "x-parser-schema-id": "<anonymous-schema-588>"
          },
          "identifier": {
            "type": "object",
            "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
            "properties": {
              "bhhsESAId": {
                "type": "string",
                "description": "BHHS internal ESA ID",
                "x-parser-schema-id": "<anonymous-schema-590>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-589>"
          },
          "addressLocality": {
            "type": "string",
            "description": "City, Township.",
            "example": "Woodland Hills",
            "x-parser-schema-id": "<anonymous-schema-591>"
          },
          "postalCode": {
            "type": "string",
            "description": "Zip/Post Code",
            "example": "91371",
            "x-parser-schema-id": "<anonymous-schema-592>"
          },
          "addressRegion": {
            "type": "string",
            "description": "State or Province.",
            "example": "CA",
            "x-parser-schema-id": "<anonymous-schema-593>"
          },
          "addressCountry": {
            "type": "string",
            "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
            "example": "US",
            "x-parser-schema-id": "<anonymous-schema-594>"
          },
          "addressCounty": {
            "type": "string",
            "description": "the county (us real estate extension)",
            "example": "Los Angeles",
            "x-parser-schema-id": "<anonymous-schema-595>"
          },
          "provider": {
            "type": "object",
            "description": "a broker or company who provides service in the ServiceArea",
            "x-range": [
              "RealEstateOrganization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "\"RealEstateOrganization\"",
                "enum": [
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-597>"
              },
              "id": {
                "type": "string",
                "description": "profile URI",
                "example": "https://org.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-598>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-596>"
          },
          "additionalProperty": {
            "type": "object",
            "description": "BHHS specific ServiceArea properties",
            "properties": {
              "relocationOffice": {
                "type": "object",
                "description": "relocation office",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "RealEstateOffice"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-601>"
                  },
                  "id": {
                    "type": "string",
                    "x-subPropertyOf": "identifier",
                    "example": "https://org.example.com/profile/card#me",
                    "x-parser-schema-id": "<anonymous-schema-602>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-600>"
              },
              "weight": {
                "type": "integer",
                "description": "weight",
                "x-parser-schema-id": "<anonymous-schema-603>"
              },
              "officeInPostalCode": {
                "type": "boolean",
                "description": "true if the service area provider is physically located in the ServiceArea.",
                "x-parser-schema-id": "<anonymous-schema-604>"
              },
              "sortOrder": {
                "type": "integer",
                "description": "sort order",
                "x-parser-schema-id": "<anonymous-schema-605>"
              },
              "sentToConsumerSite": {
                "type": "boolean",
                "description": "sent to consumer site",
                "x-parser-schema-id": "<anonymous-schema-606>"
              },
              "sentToCompanyLocator": {
                "type": "boolean",
                "description": "sent to company locator",
                "x-parser-schema-id": "<anonymous-schema-607>"
              },
              "sentToReferralSolutions": {
                "type": "boolean",
                "description": "sent to referral solutions",
                "x-parser-schema-id": "<anonymous-schema-608>"
              },
              "luxuryPriceMinimum": {
                "description": "minimum price for a property listing in the area to be considered a luxury property",
                "type": "object",
                "x-range": "PriceSpecification",
                "example": {
                  "type": "PriceSpecification",
                  "price": 1000000,
                  "priceCurrency": "USD"
                },
                "x-parser-schema-id": "<anonymous-schema-609>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-599>"
          }
        },
        "x-parser-schema-id": "ServiceArea"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "ServiceArea sub-type.  City or PostalCode",
    "enum": [
      "City",
      "PostalCode"
    ],
    "example": "PostalCode",
    "x-parser-schema-id": "<anonymous-schema-588>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ServiceArea",
        "type": "object",
        "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
        "x-kind": "ServiceArea",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ServiceArea\"",
            "enum": [
              "ServiceArea"
            ],
            "x-parser-schema-id": "<anonymous-schema-587>"
          },
          "kind": {
            "type": "string",
            "description": "ServiceArea sub-type.  City or PostalCode",
            "enum": [
              "City",
              "PostalCode"
            ],
            "example": "PostalCode",
            "x-parser-schema-id": "<anonymous-schema-588>"
          },
          "identifier": {
            "type": "object",
            "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
            "properties": {
              "bhhsESAId": {
                "type": "string",
                "description": "BHHS internal ESA ID",
                "x-parser-schema-id": "<anonymous-schema-590>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-589>"
          },
          "addressLocality": {
            "type": "string",
            "description": "City, Township.",
            "example": "Woodland Hills",
            "x-parser-schema-id": "<anonymous-schema-591>"
          },
          "postalCode": {
            "type": "string",
            "description": "Zip/Post Code",
            "example": "91371",
            "x-parser-schema-id": "<anonymous-schema-592>"
          },
          "addressRegion": {
            "type": "string",
            "description": "State or Province.",
            "example": "CA",
            "x-parser-schema-id": "<anonymous-schema-593>"
          },
          "addressCountry": {
            "type": "string",
            "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
            "example": "US",
            "x-parser-schema-id": "<anonymous-schema-594>"
          },
          "addressCounty": {
            "type": "string",
            "description": "the county (us real estate extension)",
            "example": "Los Angeles",
            "x-parser-schema-id": "<anonymous-schema-595>"
          },
          "provider": {
            "type": "object",
            "description": "a broker or company who provides service in the ServiceArea",
            "x-range": [
              "RealEstateOrganization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "\"RealEstateOrganization\"",
                "enum": [
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-597>"
              },
              "id": {
                "type": "string",
                "description": "profile URI",
                "example": "https://org.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-598>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-596>"
          },
          "additionalProperty": {
            "type": "object",
            "description": "BHHS specific ServiceArea properties",
            "properties": {
              "relocationOffice": {
                "type": "object",
                "description": "relocation office",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "RealEstateOffice"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-601>"
                  },
                  "id": {
                    "type": "string",
                    "x-subPropertyOf": "identifier",
                    "example": "https://org.example.com/profile/card#me",
                    "x-parser-schema-id": "<anonymous-schema-602>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-600>"
              },
              "weight": {
                "type": "integer",
                "description": "weight",
                "x-parser-schema-id": "<anonymous-schema-603>"
              },
              "officeInPostalCode": {
                "type": "boolean",
                "description": "true if the service area provider is physically located in the ServiceArea.",
                "x-parser-schema-id": "<anonymous-schema-604>"
              },
              "sortOrder": {
                "type": "integer",
                "description": "sort order",
                "x-parser-schema-id": "<anonymous-schema-605>"
              },
              "sentToConsumerSite": {
                "type": "boolean",
                "description": "sent to consumer site",
                "x-parser-schema-id": "<anonymous-schema-606>"
              },
              "sentToCompanyLocator": {
                "type": "boolean",
                "description": "sent to company locator",
                "x-parser-schema-id": "<anonymous-schema-607>"
              },
              "sentToReferralSolutions": {
                "type": "boolean",
                "description": "sent to referral solutions",
                "x-parser-schema-id": "<anonymous-schema-608>"
              },
              "luxuryPriceMinimum": {
                "description": "minimum price for a property listing in the area to be considered a luxury property",
                "type": "object",
                "x-range": "PriceSpecification",
                "example": {
                  "type": "PriceSpecification",
                  "price": 1000000,
                  "priceCurrency": "USD"
                },
                "x-parser-schema-id": "<anonymous-schema-609>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-599>"
          }
        },
        "x-parser-schema-id": "ServiceArea"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
    "properties": {
      "bhhsESAId": {
        "type": "string",
        "description": "BHHS internal ESA ID",
        "x-parser-schema-id": "<anonymous-schema-590>"
      }
    },
    "x-parser-schema-id": "<anonymous-schema-589>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ServiceArea",
        "type": "object",
        "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
        "x-kind": "ServiceArea",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ServiceArea\"",
            "enum": [
              "ServiceArea"
            ],
            "x-parser-schema-id": "<anonymous-schema-587>"
          },
          "kind": {
            "type": "string",
            "description": "ServiceArea sub-type.  City or PostalCode",
            "enum": [
              "City",
              "PostalCode"
            ],
            "example": "PostalCode",
            "x-parser-schema-id": "<anonymous-schema-588>"
          },
          "identifier": {
            "type": "object",
            "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
            "properties": {
              "bhhsESAId": {
                "type": "string",
                "description": "BHHS internal ESA ID",
                "x-parser-schema-id": "<anonymous-schema-590>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-589>"
          },
          "addressLocality": {
            "type": "string",
            "description": "City, Township.",
            "example": "Woodland Hills",
            "x-parser-schema-id": "<anonymous-schema-591>"
          },
          "postalCode": {
            "type": "string",
            "description": "Zip/Post Code",
            "example": "91371",
            "x-parser-schema-id": "<anonymous-schema-592>"
          },
          "addressRegion": {
            "type": "string",
            "description": "State or Province.",
            "example": "CA",
            "x-parser-schema-id": "<anonymous-schema-593>"
          },
          "addressCountry": {
            "type": "string",
            "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
            "example": "US",
            "x-parser-schema-id": "<anonymous-schema-594>"
          },
          "addressCounty": {
            "type": "string",
            "description": "the county (us real estate extension)",
            "example": "Los Angeles",
            "x-parser-schema-id": "<anonymous-schema-595>"
          },
          "provider": {
            "type": "object",
            "description": "a broker or company who provides service in the ServiceArea",
            "x-range": [
              "RealEstateOrganization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "\"RealEstateOrganization\"",
                "enum": [
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-597>"
              },
              "id": {
                "type": "string",
                "description": "profile URI",
                "example": "https://org.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-598>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-596>"
          },
          "additionalProperty": {
            "type": "object",
            "description": "BHHS specific ServiceArea properties",
            "properties": {
              "relocationOffice": {
                "type": "object",
                "description": "relocation office",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "RealEstateOffice"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-601>"
                  },
                  "id": {
                    "type": "string",
                    "x-subPropertyOf": "identifier",
                    "example": "https://org.example.com/profile/card#me",
                    "x-parser-schema-id": "<anonymous-schema-602>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-600>"
              },
              "weight": {
                "type": "integer",
                "description": "weight",
                "x-parser-schema-id": "<anonymous-schema-603>"
              },
              "officeInPostalCode": {
                "type": "boolean",
                "description": "true if the service area provider is physically located in the ServiceArea.",
                "x-parser-schema-id": "<anonymous-schema-604>"
              },
              "sortOrder": {
                "type": "integer",
                "description": "sort order",
                "x-parser-schema-id": "<anonymous-schema-605>"
              },
              "sentToConsumerSite": {
                "type": "boolean",
                "description": "sent to consumer site",
                "x-parser-schema-id": "<anonymous-schema-606>"
              },
              "sentToCompanyLocator": {
                "type": "boolean",
                "description": "sent to company locator",
                "x-parser-schema-id": "<anonymous-schema-607>"
              },
              "sentToReferralSolutions": {
                "type": "boolean",
                "description": "sent to referral solutions",
                "x-parser-schema-id": "<anonymous-schema-608>"
              },
              "luxuryPriceMinimum": {
                "description": "minimum price for a property listing in the area to be considered a luxury property",
                "type": "object",
                "x-range": "PriceSpecification",
                "example": {
                  "type": "PriceSpecification",
                  "price": 1000000,
                  "priceCurrency": "USD"
                },
                "x-parser-schema-id": "<anonymous-schema-609>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-599>"
          }
        },
        "x-parser-schema-id": "ServiceArea"
      },
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;BHHS internal ESA ID&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-590&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.&quot;,
        &quot;properties&quot;: {
          &quot;bhhsESAId&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;BHHS internal ESA ID&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-590&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-589&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;ServiceArea&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)&quot;,
            &quot;x-kind&quot;: &quot;ServiceArea&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;\&quot;ServiceArea\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;ServiceArea&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-587&gt;&quot;
              },
              &quot;kind&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;ServiceArea sub-type.  City or PostalCode&quot;,
                &quot;enum&quot;: [
                  &quot;City&quot;,
                  &quot;PostalCode&quot;
                ],
                &quot;example&quot;: &quot;PostalCode&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-588&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.&quot;,
                &quot;properties&quot;: {
                  &quot;bhhsESAId&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;BHHS internal ESA ID&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-590&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-589&gt;&quot;
              },
              &quot;addressLocality&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;City, Township.&quot;,
                &quot;example&quot;: &quot;Woodland Hills&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-591&gt;&quot;
              },
              &quot;postalCode&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Zip/Post Code&quot;,
                &quot;example&quot;: &quot;91371&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-592&gt;&quot;
              },
              &quot;addressRegion&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;State or Province.&quot;,
                &quot;example&quot;: &quot;CA&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-593&gt;&quot;
              },
              &quot;addressCountry&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.&quot;,
                &quot;example&quot;: &quot;US&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-594&gt;&quot;
              },
              &quot;addressCounty&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the county (us real estate extension)&quot;,
                &quot;example&quot;: &quot;Los Angeles&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-595&gt;&quot;
              },
              &quot;provider&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a broker or company who provides service in the ServiceArea&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;\&quot;RealEstateOrganization\&quot;&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-597&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;profile URI&quot;,
                    &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-598&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-596&gt;&quot;
              },
              &quot;additionalProperty&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
                &quot;properties&quot;: {
                  &quot;relocationOffice&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;relocation office&quot;,
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateOffice&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
                      },
                      &quot;id&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                        &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
                  },
                  &quot;weight&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;weight&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
                  },
                  &quot;officeInPostalCode&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
                  },
                  &quot;sortOrder&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;sort order&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
                  },
                  &quot;sentToConsumerSite&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to consumer site&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
                  },
                  &quot;sentToCompanyLocator&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to company locator&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
                  },
                  &quot;sentToReferralSolutions&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to referral solutions&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
                  },
                  &quot;luxuryPriceMinimum&quot;: {
                    &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-range&quot;: &quot;PriceSpecification&quot;,
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PriceSpecification&quot;,
                      &quot;price&quot;: 1000000,
                      &quot;priceCurrency&quot;: &quot;USD&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;ServiceArea&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = bhhsESAId
required = false
path = identifier





{
  "_json": {
    "type": "string",
    "description": "City, Township.",
    "example": "Woodland Hills",
    "x-parser-schema-id": "<anonymous-schema-591>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ServiceArea",
        "type": "object",
        "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
        "x-kind": "ServiceArea",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ServiceArea\"",
            "enum": [
              "ServiceArea"
            ],
            "x-parser-schema-id": "<anonymous-schema-587>"
          },
          "kind": {
            "type": "string",
            "description": "ServiceArea sub-type.  City or PostalCode",
            "enum": [
              "City",
              "PostalCode"
            ],
            "example": "PostalCode",
            "x-parser-schema-id": "<anonymous-schema-588>"
          },
          "identifier": {
            "type": "object",
            "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
            "properties": {
              "bhhsESAId": {
                "type": "string",
                "description": "BHHS internal ESA ID",
                "x-parser-schema-id": "<anonymous-schema-590>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-589>"
          },
          "addressLocality": {
            "type": "string",
            "description": "City, Township.",
            "example": "Woodland Hills",
            "x-parser-schema-id": "<anonymous-schema-591>"
          },
          "postalCode": {
            "type": "string",
            "description": "Zip/Post Code",
            "example": "91371",
            "x-parser-schema-id": "<anonymous-schema-592>"
          },
          "addressRegion": {
            "type": "string",
            "description": "State or Province.",
            "example": "CA",
            "x-parser-schema-id": "<anonymous-schema-593>"
          },
          "addressCountry": {
            "type": "string",
            "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
            "example": "US",
            "x-parser-schema-id": "<anonymous-schema-594>"
          },
          "addressCounty": {
            "type": "string",
            "description": "the county (us real estate extension)",
            "example": "Los Angeles",
            "x-parser-schema-id": "<anonymous-schema-595>"
          },
          "provider": {
            "type": "object",
            "description": "a broker or company who provides service in the ServiceArea",
            "x-range": [
              "RealEstateOrganization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "\"RealEstateOrganization\"",
                "enum": [
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-597>"
              },
              "id": {
                "type": "string",
                "description": "profile URI",
                "example": "https://org.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-598>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-596>"
          },
          "additionalProperty": {
            "type": "object",
            "description": "BHHS specific ServiceArea properties",
            "properties": {
              "relocationOffice": {
                "type": "object",
                "description": "relocation office",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "RealEstateOffice"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-601>"
                  },
                  "id": {
                    "type": "string",
                    "x-subPropertyOf": "identifier",
                    "example": "https://org.example.com/profile/card#me",
                    "x-parser-schema-id": "<anonymous-schema-602>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-600>"
              },
              "weight": {
                "type": "integer",
                "description": "weight",
                "x-parser-schema-id": "<anonymous-schema-603>"
              },
              "officeInPostalCode": {
                "type": "boolean",
                "description": "true if the service area provider is physically located in the ServiceArea.",
                "x-parser-schema-id": "<anonymous-schema-604>"
              },
              "sortOrder": {
                "type": "integer",
                "description": "sort order",
                "x-parser-schema-id": "<anonymous-schema-605>"
              },
              "sentToConsumerSite": {
                "type": "boolean",
                "description": "sent to consumer site",
                "x-parser-schema-id": "<anonymous-schema-606>"
              },
              "sentToCompanyLocator": {
                "type": "boolean",
                "description": "sent to company locator",
                "x-parser-schema-id": "<anonymous-schema-607>"
              },
              "sentToReferralSolutions": {
                "type": "boolean",
                "description": "sent to referral solutions",
                "x-parser-schema-id": "<anonymous-schema-608>"
              },
              "luxuryPriceMinimum": {
                "description": "minimum price for a property listing in the area to be considered a luxury property",
                "type": "object",
                "x-range": "PriceSpecification",
                "example": {
                  "type": "PriceSpecification",
                  "price": 1000000,
                  "priceCurrency": "USD"
                },
                "x-parser-schema-id": "<anonymous-schema-609>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-599>"
          }
        },
        "x-parser-schema-id": "ServiceArea"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "Zip/Post Code",
    "example": "91371",
    "x-parser-schema-id": "<anonymous-schema-592>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ServiceArea",
        "type": "object",
        "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
        "x-kind": "ServiceArea",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ServiceArea\"",
            "enum": [
              "ServiceArea"
            ],
            "x-parser-schema-id": "<anonymous-schema-587>"
          },
          "kind": {
            "type": "string",
            "description": "ServiceArea sub-type.  City or PostalCode",
            "enum": [
              "City",
              "PostalCode"
            ],
            "example": "PostalCode",
            "x-parser-schema-id": "<anonymous-schema-588>"
          },
          "identifier": {
            "type": "object",
            "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
            "properties": {
              "bhhsESAId": {
                "type": "string",
                "description": "BHHS internal ESA ID",
                "x-parser-schema-id": "<anonymous-schema-590>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-589>"
          },
          "addressLocality": {
            "type": "string",
            "description": "City, Township.",
            "example": "Woodland Hills",
            "x-parser-schema-id": "<anonymous-schema-591>"
          },
          "postalCode": {
            "type": "string",
            "description": "Zip/Post Code",
            "example": "91371",
            "x-parser-schema-id": "<anonymous-schema-592>"
          },
          "addressRegion": {
            "type": "string",
            "description": "State or Province.",
            "example": "CA",
            "x-parser-schema-id": "<anonymous-schema-593>"
          },
          "addressCountry": {
            "type": "string",
            "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
            "example": "US",
            "x-parser-schema-id": "<anonymous-schema-594>"
          },
          "addressCounty": {
            "type": "string",
            "description": "the county (us real estate extension)",
            "example": "Los Angeles",
            "x-parser-schema-id": "<anonymous-schema-595>"
          },
          "provider": {
            "type": "object",
            "description": "a broker or company who provides service in the ServiceArea",
            "x-range": [
              "RealEstateOrganization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "\"RealEstateOrganization\"",
                "enum": [
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-597>"
              },
              "id": {
                "type": "string",
                "description": "profile URI",
                "example": "https://org.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-598>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-596>"
          },
          "additionalProperty": {
            "type": "object",
            "description": "BHHS specific ServiceArea properties",
            "properties": {
              "relocationOffice": {
                "type": "object",
                "description": "relocation office",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "RealEstateOffice"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-601>"
                  },
                  "id": {
                    "type": "string",
                    "x-subPropertyOf": "identifier",
                    "example": "https://org.example.com/profile/card#me",
                    "x-parser-schema-id": "<anonymous-schema-602>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-600>"
              },
              "weight": {
                "type": "integer",
                "description": "weight",
                "x-parser-schema-id": "<anonymous-schema-603>"
              },
              "officeInPostalCode": {
                "type": "boolean",
                "description": "true if the service area provider is physically located in the ServiceArea.",
                "x-parser-schema-id": "<anonymous-schema-604>"
              },
              "sortOrder": {
                "type": "integer",
                "description": "sort order",
                "x-parser-schema-id": "<anonymous-schema-605>"
              },
              "sentToConsumerSite": {
                "type": "boolean",
                "description": "sent to consumer site",
                "x-parser-schema-id": "<anonymous-schema-606>"
              },
              "sentToCompanyLocator": {
                "type": "boolean",
                "description": "sent to company locator",
                "x-parser-schema-id": "<anonymous-schema-607>"
              },
              "sentToReferralSolutions": {
                "type": "boolean",
                "description": "sent to referral solutions",
                "x-parser-schema-id": "<anonymous-schema-608>"
              },
              "luxuryPriceMinimum": {
                "description": "minimum price for a property listing in the area to be considered a luxury property",
                "type": "object",
                "x-range": "PriceSpecification",
                "example": {
                  "type": "PriceSpecification",
                  "price": 1000000,
                  "priceCurrency": "USD"
                },
                "x-parser-schema-id": "<anonymous-schema-609>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-599>"
          }
        },
        "x-parser-schema-id": "ServiceArea"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "State or Province.",
    "example": "CA",
    "x-parser-schema-id": "<anonymous-schema-593>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ServiceArea",
        "type": "object",
        "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
        "x-kind": "ServiceArea",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ServiceArea\"",
            "enum": [
              "ServiceArea"
            ],
            "x-parser-schema-id": "<anonymous-schema-587>"
          },
          "kind": {
            "type": "string",
            "description": "ServiceArea sub-type.  City or PostalCode",
            "enum": [
              "City",
              "PostalCode"
            ],
            "example": "PostalCode",
            "x-parser-schema-id": "<anonymous-schema-588>"
          },
          "identifier": {
            "type": "object",
            "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
            "properties": {
              "bhhsESAId": {
                "type": "string",
                "description": "BHHS internal ESA ID",
                "x-parser-schema-id": "<anonymous-schema-590>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-589>"
          },
          "addressLocality": {
            "type": "string",
            "description": "City, Township.",
            "example": "Woodland Hills",
            "x-parser-schema-id": "<anonymous-schema-591>"
          },
          "postalCode": {
            "type": "string",
            "description": "Zip/Post Code",
            "example": "91371",
            "x-parser-schema-id": "<anonymous-schema-592>"
          },
          "addressRegion": {
            "type": "string",
            "description": "State or Province.",
            "example": "CA",
            "x-parser-schema-id": "<anonymous-schema-593>"
          },
          "addressCountry": {
            "type": "string",
            "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
            "example": "US",
            "x-parser-schema-id": "<anonymous-schema-594>"
          },
          "addressCounty": {
            "type": "string",
            "description": "the county (us real estate extension)",
            "example": "Los Angeles",
            "x-parser-schema-id": "<anonymous-schema-595>"
          },
          "provider": {
            "type": "object",
            "description": "a broker or company who provides service in the ServiceArea",
            "x-range": [
              "RealEstateOrganization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "\"RealEstateOrganization\"",
                "enum": [
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-597>"
              },
              "id": {
                "type": "string",
                "description": "profile URI",
                "example": "https://org.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-598>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-596>"
          },
          "additionalProperty": {
            "type": "object",
            "description": "BHHS specific ServiceArea properties",
            "properties": {
              "relocationOffice": {
                "type": "object",
                "description": "relocation office",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "RealEstateOffice"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-601>"
                  },
                  "id": {
                    "type": "string",
                    "x-subPropertyOf": "identifier",
                    "example": "https://org.example.com/profile/card#me",
                    "x-parser-schema-id": "<anonymous-schema-602>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-600>"
              },
              "weight": {
                "type": "integer",
                "description": "weight",
                "x-parser-schema-id": "<anonymous-schema-603>"
              },
              "officeInPostalCode": {
                "type": "boolean",
                "description": "true if the service area provider is physically located in the ServiceArea.",
                "x-parser-schema-id": "<anonymous-schema-604>"
              },
              "sortOrder": {
                "type": "integer",
                "description": "sort order",
                "x-parser-schema-id": "<anonymous-schema-605>"
              },
              "sentToConsumerSite": {
                "type": "boolean",
                "description": "sent to consumer site",
                "x-parser-schema-id": "<anonymous-schema-606>"
              },
              "sentToCompanyLocator": {
                "type": "boolean",
                "description": "sent to company locator",
                "x-parser-schema-id": "<anonymous-schema-607>"
              },
              "sentToReferralSolutions": {
                "type": "boolean",
                "description": "sent to referral solutions",
                "x-parser-schema-id": "<anonymous-schema-608>"
              },
              "luxuryPriceMinimum": {
                "description": "minimum price for a property listing in the area to be considered a luxury property",
                "type": "object",
                "x-range": "PriceSpecification",
                "example": {
                  "type": "PriceSpecification",
                  "price": 1000000,
                  "priceCurrency": "USD"
                },
                "x-parser-schema-id": "<anonymous-schema-609>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-599>"
          }
        },
        "x-parser-schema-id": "ServiceArea"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
    "example": "US",
    "x-parser-schema-id": "<anonymous-schema-594>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ServiceArea",
        "type": "object",
        "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
        "x-kind": "ServiceArea",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ServiceArea\"",
            "enum": [
              "ServiceArea"
            ],
            "x-parser-schema-id": "<anonymous-schema-587>"
          },
          "kind": {
            "type": "string",
            "description": "ServiceArea sub-type.  City or PostalCode",
            "enum": [
              "City",
              "PostalCode"
            ],
            "example": "PostalCode",
            "x-parser-schema-id": "<anonymous-schema-588>"
          },
          "identifier": {
            "type": "object",
            "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
            "properties": {
              "bhhsESAId": {
                "type": "string",
                "description": "BHHS internal ESA ID",
                "x-parser-schema-id": "<anonymous-schema-590>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-589>"
          },
          "addressLocality": {
            "type": "string",
            "description": "City, Township.",
            "example": "Woodland Hills",
            "x-parser-schema-id": "<anonymous-schema-591>"
          },
          "postalCode": {
            "type": "string",
            "description": "Zip/Post Code",
            "example": "91371",
            "x-parser-schema-id": "<anonymous-schema-592>"
          },
          "addressRegion": {
            "type": "string",
            "description": "State or Province.",
            "example": "CA",
            "x-parser-schema-id": "<anonymous-schema-593>"
          },
          "addressCountry": {
            "type": "string",
            "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
            "example": "US",
            "x-parser-schema-id": "<anonymous-schema-594>"
          },
          "addressCounty": {
            "type": "string",
            "description": "the county (us real estate extension)",
            "example": "Los Angeles",
            "x-parser-schema-id": "<anonymous-schema-595>"
          },
          "provider": {
            "type": "object",
            "description": "a broker or company who provides service in the ServiceArea",
            "x-range": [
              "RealEstateOrganization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "\"RealEstateOrganization\"",
                "enum": [
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-597>"
              },
              "id": {
                "type": "string",
                "description": "profile URI",
                "example": "https://org.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-598>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-596>"
          },
          "additionalProperty": {
            "type": "object",
            "description": "BHHS specific ServiceArea properties",
            "properties": {
              "relocationOffice": {
                "type": "object",
                "description": "relocation office",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "RealEstateOffice"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-601>"
                  },
                  "id": {
                    "type": "string",
                    "x-subPropertyOf": "identifier",
                    "example": "https://org.example.com/profile/card#me",
                    "x-parser-schema-id": "<anonymous-schema-602>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-600>"
              },
              "weight": {
                "type": "integer",
                "description": "weight",
                "x-parser-schema-id": "<anonymous-schema-603>"
              },
              "officeInPostalCode": {
                "type": "boolean",
                "description": "true if the service area provider is physically located in the ServiceArea.",
                "x-parser-schema-id": "<anonymous-schema-604>"
              },
              "sortOrder": {
                "type": "integer",
                "description": "sort order",
                "x-parser-schema-id": "<anonymous-schema-605>"
              },
              "sentToConsumerSite": {
                "type": "boolean",
                "description": "sent to consumer site",
                "x-parser-schema-id": "<anonymous-schema-606>"
              },
              "sentToCompanyLocator": {
                "type": "boolean",
                "description": "sent to company locator",
                "x-parser-schema-id": "<anonymous-schema-607>"
              },
              "sentToReferralSolutions": {
                "type": "boolean",
                "description": "sent to referral solutions",
                "x-parser-schema-id": "<anonymous-schema-608>"
              },
              "luxuryPriceMinimum": {
                "description": "minimum price for a property listing in the area to be considered a luxury property",
                "type": "object",
                "x-range": "PriceSpecification",
                "example": {
                  "type": "PriceSpecification",
                  "price": 1000000,
                  "priceCurrency": "USD"
                },
                "x-parser-schema-id": "<anonymous-schema-609>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-599>"
          }
        },
        "x-parser-schema-id": "ServiceArea"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "the county (us real estate extension)",
    "example": "Los Angeles",
    "x-parser-schema-id": "<anonymous-schema-595>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ServiceArea",
        "type": "object",
        "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
        "x-kind": "ServiceArea",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ServiceArea\"",
            "enum": [
              "ServiceArea"
            ],
            "x-parser-schema-id": "<anonymous-schema-587>"
          },
          "kind": {
            "type": "string",
            "description": "ServiceArea sub-type.  City or PostalCode",
            "enum": [
              "City",
              "PostalCode"
            ],
            "example": "PostalCode",
            "x-parser-schema-id": "<anonymous-schema-588>"
          },
          "identifier": {
            "type": "object",
            "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
            "properties": {
              "bhhsESAId": {
                "type": "string",
                "description": "BHHS internal ESA ID",
                "x-parser-schema-id": "<anonymous-schema-590>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-589>"
          },
          "addressLocality": {
            "type": "string",
            "description": "City, Township.",
            "example": "Woodland Hills",
            "x-parser-schema-id": "<anonymous-schema-591>"
          },
          "postalCode": {
            "type": "string",
            "description": "Zip/Post Code",
            "example": "91371",
            "x-parser-schema-id": "<anonymous-schema-592>"
          },
          "addressRegion": {
            "type": "string",
            "description": "State or Province.",
            "example": "CA",
            "x-parser-schema-id": "<anonymous-schema-593>"
          },
          "addressCountry": {
            "type": "string",
            "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
            "example": "US",
            "x-parser-schema-id": "<anonymous-schema-594>"
          },
          "addressCounty": {
            "type": "string",
            "description": "the county (us real estate extension)",
            "example": "Los Angeles",
            "x-parser-schema-id": "<anonymous-schema-595>"
          },
          "provider": {
            "type": "object",
            "description": "a broker or company who provides service in the ServiceArea",
            "x-range": [
              "RealEstateOrganization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "\"RealEstateOrganization\"",
                "enum": [
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-597>"
              },
              "id": {
                "type": "string",
                "description": "profile URI",
                "example": "https://org.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-598>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-596>"
          },
          "additionalProperty": {
            "type": "object",
            "description": "BHHS specific ServiceArea properties",
            "properties": {
              "relocationOffice": {
                "type": "object",
                "description": "relocation office",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "RealEstateOffice"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-601>"
                  },
                  "id": {
                    "type": "string",
                    "x-subPropertyOf": "identifier",
                    "example": "https://org.example.com/profile/card#me",
                    "x-parser-schema-id": "<anonymous-schema-602>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-600>"
              },
              "weight": {
                "type": "integer",
                "description": "weight",
                "x-parser-schema-id": "<anonymous-schema-603>"
              },
              "officeInPostalCode": {
                "type": "boolean",
                "description": "true if the service area provider is physically located in the ServiceArea.",
                "x-parser-schema-id": "<anonymous-schema-604>"
              },
              "sortOrder": {
                "type": "integer",
                "description": "sort order",
                "x-parser-schema-id": "<anonymous-schema-605>"
              },
              "sentToConsumerSite": {
                "type": "boolean",
                "description": "sent to consumer site",
                "x-parser-schema-id": "<anonymous-schema-606>"
              },
              "sentToCompanyLocator": {
                "type": "boolean",
                "description": "sent to company locator",
                "x-parser-schema-id": "<anonymous-schema-607>"
              },
              "sentToReferralSolutions": {
                "type": "boolean",
                "description": "sent to referral solutions",
                "x-parser-schema-id": "<anonymous-schema-608>"
              },
              "luxuryPriceMinimum": {
                "description": "minimum price for a property listing in the area to be considered a luxury property",
                "type": "object",
                "x-range": "PriceSpecification",
                "example": {
                  "type": "PriceSpecification",
                  "price": 1000000,
                  "priceCurrency": "USD"
                },
                "x-parser-schema-id": "<anonymous-schema-609>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-599>"
          }
        },
        "x-parser-schema-id": "ServiceArea"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "a broker or company who provides service in the ServiceArea",
    "x-range": [
      "RealEstateOrganization"
    ],
    "properties": {
      "type": {
        "type": "string",
        "description": "\"RealEstateOrganization\"",
        "enum": [
          "RealEstateOrganization"
        ],
        "x-parser-schema-id": "<anonymous-schema-597>"
      },
      "id": {
        "type": "string",
        "description": "profile URI",
        "example": "https://org.example.com/profile/card#me",
        "x-parser-schema-id": "<anonymous-schema-598>"
      }
    },
    "x-parser-schema-id": "<anonymous-schema-596>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ServiceArea",
        "type": "object",
        "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
        "x-kind": "ServiceArea",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ServiceArea\"",
            "enum": [
              "ServiceArea"
            ],
            "x-parser-schema-id": "<anonymous-schema-587>"
          },
          "kind": {
            "type": "string",
            "description": "ServiceArea sub-type.  City or PostalCode",
            "enum": [
              "City",
              "PostalCode"
            ],
            "example": "PostalCode",
            "x-parser-schema-id": "<anonymous-schema-588>"
          },
          "identifier": {
            "type": "object",
            "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
            "properties": {
              "bhhsESAId": {
                "type": "string",
                "description": "BHHS internal ESA ID",
                "x-parser-schema-id": "<anonymous-schema-590>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-589>"
          },
          "addressLocality": {
            "type": "string",
            "description": "City, Township.",
            "example": "Woodland Hills",
            "x-parser-schema-id": "<anonymous-schema-591>"
          },
          "postalCode": {
            "type": "string",
            "description": "Zip/Post Code",
            "example": "91371",
            "x-parser-schema-id": "<anonymous-schema-592>"
          },
          "addressRegion": {
            "type": "string",
            "description": "State or Province.",
            "example": "CA",
            "x-parser-schema-id": "<anonymous-schema-593>"
          },
          "addressCountry": {
            "type": "string",
            "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
            "example": "US",
            "x-parser-schema-id": "<anonymous-schema-594>"
          },
          "addressCounty": {
            "type": "string",
            "description": "the county (us real estate extension)",
            "example": "Los Angeles",
            "x-parser-schema-id": "<anonymous-schema-595>"
          },
          "provider": {
            "type": "object",
            "description": "a broker or company who provides service in the ServiceArea",
            "x-range": [
              "RealEstateOrganization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "\"RealEstateOrganization\"",
                "enum": [
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-597>"
              },
              "id": {
                "type": "string",
                "description": "profile URI",
                "example": "https://org.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-598>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-596>"
          },
          "additionalProperty": {
            "type": "object",
            "description": "BHHS specific ServiceArea properties",
            "properties": {
              "relocationOffice": {
                "type": "object",
                "description": "relocation office",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "RealEstateOffice"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-601>"
                  },
                  "id": {
                    "type": "string",
                    "x-subPropertyOf": "identifier",
                    "example": "https://org.example.com/profile/card#me",
                    "x-parser-schema-id": "<anonymous-schema-602>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-600>"
              },
              "weight": {
                "type": "integer",
                "description": "weight",
                "x-parser-schema-id": "<anonymous-schema-603>"
              },
              "officeInPostalCode": {
                "type": "boolean",
                "description": "true if the service area provider is physically located in the ServiceArea.",
                "x-parser-schema-id": "<anonymous-schema-604>"
              },
              "sortOrder": {
                "type": "integer",
                "description": "sort order",
                "x-parser-schema-id": "<anonymous-schema-605>"
              },
              "sentToConsumerSite": {
                "type": "boolean",
                "description": "sent to consumer site",
                "x-parser-schema-id": "<anonymous-schema-606>"
              },
              "sentToCompanyLocator": {
                "type": "boolean",
                "description": "sent to company locator",
                "x-parser-schema-id": "<anonymous-schema-607>"
              },
              "sentToReferralSolutions": {
                "type": "boolean",
                "description": "sent to referral solutions",
                "x-parser-schema-id": "<anonymous-schema-608>"
              },
              "luxuryPriceMinimum": {
                "description": "minimum price for a property listing in the area to be considered a luxury property",
                "type": "object",
                "x-range": "PriceSpecification",
                "example": {
                  "type": "PriceSpecification",
                  "price": 1000000,
                  "priceCurrency": "USD"
                },
                "x-parser-schema-id": "<anonymous-schema-609>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-599>"
          }
        },
        "x-parser-schema-id": "ServiceArea"
      },
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;\&quot;RealEstateOrganization\&quot;&quot;,
    &quot;enum&quot;: [
      &quot;RealEstateOrganization&quot;
    ],
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-597&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;a broker or company who provides service in the ServiceArea&quot;,
        &quot;x-range&quot;: [
          &quot;RealEstateOrganization&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;\&quot;RealEstateOrganization\&quot;&quot;,
            &quot;enum&quot;: [
              &quot;RealEstateOrganization&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-597&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;profile URI&quot;,
            &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-598&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-596&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;ServiceArea&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)&quot;,
            &quot;x-kind&quot;: &quot;ServiceArea&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;\&quot;ServiceArea\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;ServiceArea&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-587&gt;&quot;
              },
              &quot;kind&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;ServiceArea sub-type.  City or PostalCode&quot;,
                &quot;enum&quot;: [
                  &quot;City&quot;,
                  &quot;PostalCode&quot;
                ],
                &quot;example&quot;: &quot;PostalCode&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-588&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.&quot;,
                &quot;properties&quot;: {
                  &quot;bhhsESAId&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;BHHS internal ESA ID&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-590&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-589&gt;&quot;
              },
              &quot;addressLocality&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;City, Township.&quot;,
                &quot;example&quot;: &quot;Woodland Hills&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-591&gt;&quot;
              },
              &quot;postalCode&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Zip/Post Code&quot;,
                &quot;example&quot;: &quot;91371&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-592&gt;&quot;
              },
              &quot;addressRegion&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;State or Province.&quot;,
                &quot;example&quot;: &quot;CA&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-593&gt;&quot;
              },
              &quot;addressCountry&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.&quot;,
                &quot;example&quot;: &quot;US&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-594&gt;&quot;
              },
              &quot;addressCounty&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the county (us real estate extension)&quot;,
                &quot;example&quot;: &quot;Los Angeles&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-595&gt;&quot;
              },
              &quot;provider&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a broker or company who provides service in the ServiceArea&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;\&quot;RealEstateOrganization\&quot;&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-597&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;profile URI&quot;,
                    &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-598&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-596&gt;&quot;
              },
              &quot;additionalProperty&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
                &quot;properties&quot;: {
                  &quot;relocationOffice&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;relocation office&quot;,
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateOffice&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
                      },
                      &quot;id&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                        &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
                  },
                  &quot;weight&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;weight&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
                  },
                  &quot;officeInPostalCode&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
                  },
                  &quot;sortOrder&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;sort order&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
                  },
                  &quot;sentToConsumerSite&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to consumer site&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
                  },
                  &quot;sentToCompanyLocator&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to company locator&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
                  },
                  &quot;sentToReferralSolutions&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to referral solutions&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
                  },
                  &quot;luxuryPriceMinimum&quot;: {
                    &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-range&quot;: &quot;PriceSpecification&quot;,
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PriceSpecification&quot;,
                      &quot;price&quot;: 1000000,
                      &quot;priceCurrency&quot;: &quot;USD&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;ServiceArea&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = type
required = false
path = provider



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;profile URI&quot;,
    &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-598&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;a broker or company who provides service in the ServiceArea&quot;,
        &quot;x-range&quot;: [
          &quot;RealEstateOrganization&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;\&quot;RealEstateOrganization\&quot;&quot;,
            &quot;enum&quot;: [
              &quot;RealEstateOrganization&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-597&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;profile URI&quot;,
            &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-598&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-596&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;ServiceArea&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)&quot;,
            &quot;x-kind&quot;: &quot;ServiceArea&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;\&quot;ServiceArea\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;ServiceArea&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-587&gt;&quot;
              },
              &quot;kind&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;ServiceArea sub-type.  City or PostalCode&quot;,
                &quot;enum&quot;: [
                  &quot;City&quot;,
                  &quot;PostalCode&quot;
                ],
                &quot;example&quot;: &quot;PostalCode&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-588&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.&quot;,
                &quot;properties&quot;: {
                  &quot;bhhsESAId&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;BHHS internal ESA ID&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-590&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-589&gt;&quot;
              },
              &quot;addressLocality&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;City, Township.&quot;,
                &quot;example&quot;: &quot;Woodland Hills&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-591&gt;&quot;
              },
              &quot;postalCode&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Zip/Post Code&quot;,
                &quot;example&quot;: &quot;91371&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-592&gt;&quot;
              },
              &quot;addressRegion&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;State or Province.&quot;,
                &quot;example&quot;: &quot;CA&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-593&gt;&quot;
              },
              &quot;addressCountry&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.&quot;,
                &quot;example&quot;: &quot;US&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-594&gt;&quot;
              },
              &quot;addressCounty&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the county (us real estate extension)&quot;,
                &quot;example&quot;: &quot;Los Angeles&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-595&gt;&quot;
              },
              &quot;provider&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a broker or company who provides service in the ServiceArea&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;\&quot;RealEstateOrganization\&quot;&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-597&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;profile URI&quot;,
                    &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-598&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-596&gt;&quot;
              },
              &quot;additionalProperty&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
                &quot;properties&quot;: {
                  &quot;relocationOffice&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;relocation office&quot;,
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateOffice&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
                      },
                      &quot;id&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                        &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
                  },
                  &quot;weight&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;weight&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
                  },
                  &quot;officeInPostalCode&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
                  },
                  &quot;sortOrder&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;sort order&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
                  },
                  &quot;sentToConsumerSite&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to consumer site&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
                  },
                  &quot;sentToCompanyLocator&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to company locator&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
                  },
                  &quot;sentToReferralSolutions&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to referral solutions&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
                  },
                  &quot;luxuryPriceMinimum&quot;: {
                    &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-range&quot;: &quot;PriceSpecification&quot;,
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PriceSpecification&quot;,
                      &quot;price&quot;: 1000000,
                      &quot;priceCurrency&quot;: &quot;USD&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;ServiceArea&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = id
required = false
path = provider





{
  "_json": {
    "type": "object",
    "description": "BHHS specific ServiceArea properties",
    "properties": {
      "relocationOffice": {
        "type": "object",
        "description": "relocation office",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "RealEstateOffice"
            ],
            "x-parser-schema-id": "<anonymous-schema-601>"
          },
          "id": {
            "type": "string",
            "x-subPropertyOf": "identifier",
            "example": "https://org.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-602>"
          }
        },
        "x-parser-schema-id": "<anonymous-schema-600>"
      },
      "weight": {
        "type": "integer",
        "description": "weight",
        "x-parser-schema-id": "<anonymous-schema-603>"
      },
      "officeInPostalCode": {
        "type": "boolean",
        "description": "true if the service area provider is physically located in the ServiceArea.",
        "x-parser-schema-id": "<anonymous-schema-604>"
      },
      "sortOrder": {
        "type": "integer",
        "description": "sort order",
        "x-parser-schema-id": "<anonymous-schema-605>"
      },
      "sentToConsumerSite": {
        "type": "boolean",
        "description": "sent to consumer site",
        "x-parser-schema-id": "<anonymous-schema-606>"
      },
      "sentToCompanyLocator": {
        "type": "boolean",
        "description": "sent to company locator",
        "x-parser-schema-id": "<anonymous-schema-607>"
      },
      "sentToReferralSolutions": {
        "type": "boolean",
        "description": "sent to referral solutions",
        "x-parser-schema-id": "<anonymous-schema-608>"
      },
      "luxuryPriceMinimum": {
        "description": "minimum price for a property listing in the area to be considered a luxury property",
        "type": "object",
        "x-range": "PriceSpecification",
        "example": {
          "type": "PriceSpecification",
          "price": 1000000,
          "priceCurrency": "USD"
        },
        "x-parser-schema-id": "<anonymous-schema-609>"
      }
    },
    "x-parser-schema-id": "<anonymous-schema-599>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "ServiceArea",
        "type": "object",
        "description": "an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)",
        "x-kind": "ServiceArea",
        "properties": {
          "type": {
            "type": "string",
            "description": "\"ServiceArea\"",
            "enum": [
              "ServiceArea"
            ],
            "x-parser-schema-id": "<anonymous-schema-587>"
          },
          "kind": {
            "type": "string",
            "description": "ServiceArea sub-type.  City or PostalCode",
            "enum": [
              "City",
              "PostalCode"
            ],
            "example": "PostalCode",
            "x-parser-schema-id": "<anonymous-schema-588>"
          },
          "identifier": {
            "type": "object",
            "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
            "properties": {
              "bhhsESAId": {
                "type": "string",
                "description": "BHHS internal ESA ID",
                "x-parser-schema-id": "<anonymous-schema-590>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-589>"
          },
          "addressLocality": {
            "type": "string",
            "description": "City, Township.",
            "example": "Woodland Hills",
            "x-parser-schema-id": "<anonymous-schema-591>"
          },
          "postalCode": {
            "type": "string",
            "description": "Zip/Post Code",
            "example": "91371",
            "x-parser-schema-id": "<anonymous-schema-592>"
          },
          "addressRegion": {
            "type": "string",
            "description": "State or Province.",
            "example": "CA",
            "x-parser-schema-id": "<anonymous-schema-593>"
          },
          "addressCountry": {
            "type": "string",
            "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
            "example": "US",
            "x-parser-schema-id": "<anonymous-schema-594>"
          },
          "addressCounty": {
            "type": "string",
            "description": "the county (us real estate extension)",
            "example": "Los Angeles",
            "x-parser-schema-id": "<anonymous-schema-595>"
          },
          "provider": {
            "type": "object",
            "description": "a broker or company who provides service in the ServiceArea",
            "x-range": [
              "RealEstateOrganization"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "\"RealEstateOrganization\"",
                "enum": [
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-597>"
              },
              "id": {
                "type": "string",
                "description": "profile URI",
                "example": "https://org.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-598>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-596>"
          },
          "additionalProperty": {
            "type": "object",
            "description": "BHHS specific ServiceArea properties",
            "properties": {
              "relocationOffice": {
                "type": "object",
                "description": "relocation office",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "RealEstateOffice"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-601>"
                  },
                  "id": {
                    "type": "string",
                    "x-subPropertyOf": "identifier",
                    "example": "https://org.example.com/profile/card#me",
                    "x-parser-schema-id": "<anonymous-schema-602>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-600>"
              },
              "weight": {
                "type": "integer",
                "description": "weight",
                "x-parser-schema-id": "<anonymous-schema-603>"
              },
              "officeInPostalCode": {
                "type": "boolean",
                "description": "true if the service area provider is physically located in the ServiceArea.",
                "x-parser-schema-id": "<anonymous-schema-604>"
              },
              "sortOrder": {
                "type": "integer",
                "description": "sort order",
                "x-parser-schema-id": "<anonymous-schema-605>"
              },
              "sentToConsumerSite": {
                "type": "boolean",
                "description": "sent to consumer site",
                "x-parser-schema-id": "<anonymous-schema-606>"
              },
              "sentToCompanyLocator": {
                "type": "boolean",
                "description": "sent to company locator",
                "x-parser-schema-id": "<anonymous-schema-607>"
              },
              "sentToReferralSolutions": {
                "type": "boolean",
                "description": "sent to referral solutions",
                "x-parser-schema-id": "<anonymous-schema-608>"
              },
              "luxuryPriceMinimum": {
                "description": "minimum price for a property listing in the area to be considered a luxury property",
                "type": "object",
                "x-range": "PriceSpecification",
                "example": {
                  "type": "PriceSpecification",
                  "price": 1000000,
                  "priceCurrency": "USD"
                },
                "x-parser-schema-id": "<anonymous-schema-609>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-599>"
          }
        },
        "x-parser-schema-id": "ServiceArea"
      },
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;object&quot;,
    &quot;description&quot;: &quot;relocation office&quot;,
    &quot;properties&quot;: {
      &quot;type&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
        &quot;enum&quot;: [
          &quot;RealEstateOffice&quot;
        ],
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
      },
      &quot;id&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
        &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
        &quot;properties&quot;: {
          &quot;relocationOffice&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;relocation office&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateOffice&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
              },
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
          },
          &quot;weight&quot;: {
            &quot;type&quot;: &quot;integer&quot;,
            &quot;description&quot;: &quot;weight&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
          },
          &quot;officeInPostalCode&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
          },
          &quot;sortOrder&quot;: {
            &quot;type&quot;: &quot;integer&quot;,
            &quot;description&quot;: &quot;sort order&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
          },
          &quot;sentToConsumerSite&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to consumer site&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
          },
          &quot;sentToCompanyLocator&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to company locator&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
          },
          &quot;sentToReferralSolutions&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to referral solutions&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
          },
          &quot;luxuryPriceMinimum&quot;: {
            &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;PriceSpecification&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;PriceSpecification&quot;,
              &quot;price&quot;: 1000000,
              &quot;priceCurrency&quot;: &quot;USD&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;ServiceArea&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)&quot;,
            &quot;x-kind&quot;: &quot;ServiceArea&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;\&quot;ServiceArea\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;ServiceArea&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-587&gt;&quot;
              },
              &quot;kind&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;ServiceArea sub-type.  City or PostalCode&quot;,
                &quot;enum&quot;: [
                  &quot;City&quot;,
                  &quot;PostalCode&quot;
                ],
                &quot;example&quot;: &quot;PostalCode&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-588&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.&quot;,
                &quot;properties&quot;: {
                  &quot;bhhsESAId&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;BHHS internal ESA ID&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-590&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-589&gt;&quot;
              },
              &quot;addressLocality&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;City, Township.&quot;,
                &quot;example&quot;: &quot;Woodland Hills&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-591&gt;&quot;
              },
              &quot;postalCode&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Zip/Post Code&quot;,
                &quot;example&quot;: &quot;91371&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-592&gt;&quot;
              },
              &quot;addressRegion&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;State or Province.&quot;,
                &quot;example&quot;: &quot;CA&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-593&gt;&quot;
              },
              &quot;addressCountry&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.&quot;,
                &quot;example&quot;: &quot;US&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-594&gt;&quot;
              },
              &quot;addressCounty&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the county (us real estate extension)&quot;,
                &quot;example&quot;: &quot;Los Angeles&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-595&gt;&quot;
              },
              &quot;provider&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a broker or company who provides service in the ServiceArea&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;\&quot;RealEstateOrganization\&quot;&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-597&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;profile URI&quot;,
                    &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-598&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-596&gt;&quot;
              },
              &quot;additionalProperty&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
                &quot;properties&quot;: {
                  &quot;relocationOffice&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;relocation office&quot;,
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateOffice&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
                      },
                      &quot;id&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                        &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
                  },
                  &quot;weight&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;weight&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
                  },
                  &quot;officeInPostalCode&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
                  },
                  &quot;sortOrder&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;sort order&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
                  },
                  &quot;sentToConsumerSite&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to consumer site&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
                  },
                  &quot;sentToCompanyLocator&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to company locator&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
                  },
                  &quot;sentToReferralSolutions&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to referral solutions&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
                  },
                  &quot;luxuryPriceMinimum&quot;: {
                    &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-range&quot;: &quot;PriceSpecification&quot;,
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PriceSpecification&quot;,
                      &quot;price&quot;: 1000000,
                      &quot;priceCurrency&quot;: &quot;USD&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;ServiceArea&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = relocationOffice
required = false
path = additionalProperty



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;integer&quot;,
    &quot;description&quot;: &quot;weight&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
        &quot;properties&quot;: {
          &quot;relocationOffice&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;relocation office&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateOffice&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
              },
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
          },
          &quot;weight&quot;: {
            &quot;type&quot;: &quot;integer&quot;,
            &quot;description&quot;: &quot;weight&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
          },
          &quot;officeInPostalCode&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
          },
          &quot;sortOrder&quot;: {
            &quot;type&quot;: &quot;integer&quot;,
            &quot;description&quot;: &quot;sort order&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
          },
          &quot;sentToConsumerSite&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to consumer site&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
          },
          &quot;sentToCompanyLocator&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to company locator&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
          },
          &quot;sentToReferralSolutions&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to referral solutions&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
          },
          &quot;luxuryPriceMinimum&quot;: {
            &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;PriceSpecification&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;PriceSpecification&quot;,
              &quot;price&quot;: 1000000,
              &quot;priceCurrency&quot;: &quot;USD&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;ServiceArea&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)&quot;,
            &quot;x-kind&quot;: &quot;ServiceArea&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;\&quot;ServiceArea\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;ServiceArea&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-587&gt;&quot;
              },
              &quot;kind&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;ServiceArea sub-type.  City or PostalCode&quot;,
                &quot;enum&quot;: [
                  &quot;City&quot;,
                  &quot;PostalCode&quot;
                ],
                &quot;example&quot;: &quot;PostalCode&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-588&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.&quot;,
                &quot;properties&quot;: {
                  &quot;bhhsESAId&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;BHHS internal ESA ID&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-590&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-589&gt;&quot;
              },
              &quot;addressLocality&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;City, Township.&quot;,
                &quot;example&quot;: &quot;Woodland Hills&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-591&gt;&quot;
              },
              &quot;postalCode&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Zip/Post Code&quot;,
                &quot;example&quot;: &quot;91371&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-592&gt;&quot;
              },
              &quot;addressRegion&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;State or Province.&quot;,
                &quot;example&quot;: &quot;CA&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-593&gt;&quot;
              },
              &quot;addressCountry&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.&quot;,
                &quot;example&quot;: &quot;US&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-594&gt;&quot;
              },
              &quot;addressCounty&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the county (us real estate extension)&quot;,
                &quot;example&quot;: &quot;Los Angeles&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-595&gt;&quot;
              },
              &quot;provider&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a broker or company who provides service in the ServiceArea&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;\&quot;RealEstateOrganization\&quot;&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-597&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;profile URI&quot;,
                    &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-598&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-596&gt;&quot;
              },
              &quot;additionalProperty&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
                &quot;properties&quot;: {
                  &quot;relocationOffice&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;relocation office&quot;,
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateOffice&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
                      },
                      &quot;id&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                        &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
                  },
                  &quot;weight&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;weight&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
                  },
                  &quot;officeInPostalCode&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
                  },
                  &quot;sortOrder&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;sort order&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
                  },
                  &quot;sentToConsumerSite&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to consumer site&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
                  },
                  &quot;sentToCompanyLocator&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to company locator&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
                  },
                  &quot;sentToReferralSolutions&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to referral solutions&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
                  },
                  &quot;luxuryPriceMinimum&quot;: {
                    &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-range&quot;: &quot;PriceSpecification&quot;,
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PriceSpecification&quot;,
                      &quot;price&quot;: 1000000,
                      &quot;priceCurrency&quot;: &quot;USD&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;ServiceArea&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = weight
required = false
path = additionalProperty



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;boolean&quot;,
    &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
        &quot;properties&quot;: {
          &quot;relocationOffice&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;relocation office&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateOffice&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
              },
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
          },
          &quot;weight&quot;: {
            &quot;type&quot;: &quot;integer&quot;,
            &quot;description&quot;: &quot;weight&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
          },
          &quot;officeInPostalCode&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
          },
          &quot;sortOrder&quot;: {
            &quot;type&quot;: &quot;integer&quot;,
            &quot;description&quot;: &quot;sort order&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
          },
          &quot;sentToConsumerSite&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to consumer site&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
          },
          &quot;sentToCompanyLocator&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to company locator&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
          },
          &quot;sentToReferralSolutions&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to referral solutions&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
          },
          &quot;luxuryPriceMinimum&quot;: {
            &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;PriceSpecification&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;PriceSpecification&quot;,
              &quot;price&quot;: 1000000,
              &quot;priceCurrency&quot;: &quot;USD&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;ServiceArea&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)&quot;,
            &quot;x-kind&quot;: &quot;ServiceArea&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;\&quot;ServiceArea\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;ServiceArea&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-587&gt;&quot;
              },
              &quot;kind&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;ServiceArea sub-type.  City or PostalCode&quot;,
                &quot;enum&quot;: [
                  &quot;City&quot;,
                  &quot;PostalCode&quot;
                ],
                &quot;example&quot;: &quot;PostalCode&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-588&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.&quot;,
                &quot;properties&quot;: {
                  &quot;bhhsESAId&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;BHHS internal ESA ID&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-590&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-589&gt;&quot;
              },
              &quot;addressLocality&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;City, Township.&quot;,
                &quot;example&quot;: &quot;Woodland Hills&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-591&gt;&quot;
              },
              &quot;postalCode&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Zip/Post Code&quot;,
                &quot;example&quot;: &quot;91371&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-592&gt;&quot;
              },
              &quot;addressRegion&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;State or Province.&quot;,
                &quot;example&quot;: &quot;CA&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-593&gt;&quot;
              },
              &quot;addressCountry&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.&quot;,
                &quot;example&quot;: &quot;US&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-594&gt;&quot;
              },
              &quot;addressCounty&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the county (us real estate extension)&quot;,
                &quot;example&quot;: &quot;Los Angeles&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-595&gt;&quot;
              },
              &quot;provider&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a broker or company who provides service in the ServiceArea&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;\&quot;RealEstateOrganization\&quot;&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-597&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;profile URI&quot;,
                    &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-598&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-596&gt;&quot;
              },
              &quot;additionalProperty&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
                &quot;properties&quot;: {
                  &quot;relocationOffice&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;relocation office&quot;,
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateOffice&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
                      },
                      &quot;id&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                        &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
                  },
                  &quot;weight&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;weight&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
                  },
                  &quot;officeInPostalCode&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
                  },
                  &quot;sortOrder&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;sort order&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
                  },
                  &quot;sentToConsumerSite&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to consumer site&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
                  },
                  &quot;sentToCompanyLocator&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to company locator&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
                  },
                  &quot;sentToReferralSolutions&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to referral solutions&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
                  },
                  &quot;luxuryPriceMinimum&quot;: {
                    &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-range&quot;: &quot;PriceSpecification&quot;,
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PriceSpecification&quot;,
                      &quot;price&quot;: 1000000,
                      &quot;priceCurrency&quot;: &quot;USD&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;ServiceArea&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = officeInPostalCode
required = false
path = additionalProperty



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;integer&quot;,
    &quot;description&quot;: &quot;sort order&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
        &quot;properties&quot;: {
          &quot;relocationOffice&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;relocation office&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateOffice&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
              },
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
          },
          &quot;weight&quot;: {
            &quot;type&quot;: &quot;integer&quot;,
            &quot;description&quot;: &quot;weight&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
          },
          &quot;officeInPostalCode&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
          },
          &quot;sortOrder&quot;: {
            &quot;type&quot;: &quot;integer&quot;,
            &quot;description&quot;: &quot;sort order&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
          },
          &quot;sentToConsumerSite&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to consumer site&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
          },
          &quot;sentToCompanyLocator&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to company locator&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
          },
          &quot;sentToReferralSolutions&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to referral solutions&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
          },
          &quot;luxuryPriceMinimum&quot;: {
            &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;PriceSpecification&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;PriceSpecification&quot;,
              &quot;price&quot;: 1000000,
              &quot;priceCurrency&quot;: &quot;USD&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;ServiceArea&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)&quot;,
            &quot;x-kind&quot;: &quot;ServiceArea&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;\&quot;ServiceArea\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;ServiceArea&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-587&gt;&quot;
              },
              &quot;kind&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;ServiceArea sub-type.  City or PostalCode&quot;,
                &quot;enum&quot;: [
                  &quot;City&quot;,
                  &quot;PostalCode&quot;
                ],
                &quot;example&quot;: &quot;PostalCode&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-588&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.&quot;,
                &quot;properties&quot;: {
                  &quot;bhhsESAId&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;BHHS internal ESA ID&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-590&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-589&gt;&quot;
              },
              &quot;addressLocality&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;City, Township.&quot;,
                &quot;example&quot;: &quot;Woodland Hills&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-591&gt;&quot;
              },
              &quot;postalCode&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Zip/Post Code&quot;,
                &quot;example&quot;: &quot;91371&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-592&gt;&quot;
              },
              &quot;addressRegion&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;State or Province.&quot;,
                &quot;example&quot;: &quot;CA&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-593&gt;&quot;
              },
              &quot;addressCountry&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.&quot;,
                &quot;example&quot;: &quot;US&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-594&gt;&quot;
              },
              &quot;addressCounty&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the county (us real estate extension)&quot;,
                &quot;example&quot;: &quot;Los Angeles&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-595&gt;&quot;
              },
              &quot;provider&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a broker or company who provides service in the ServiceArea&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;\&quot;RealEstateOrganization\&quot;&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-597&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;profile URI&quot;,
                    &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-598&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-596&gt;&quot;
              },
              &quot;additionalProperty&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
                &quot;properties&quot;: {
                  &quot;relocationOffice&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;relocation office&quot;,
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateOffice&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
                      },
                      &quot;id&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                        &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
                  },
                  &quot;weight&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;weight&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
                  },
                  &quot;officeInPostalCode&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
                  },
                  &quot;sortOrder&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;sort order&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
                  },
                  &quot;sentToConsumerSite&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to consumer site&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
                  },
                  &quot;sentToCompanyLocator&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to company locator&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
                  },
                  &quot;sentToReferralSolutions&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to referral solutions&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
                  },
                  &quot;luxuryPriceMinimum&quot;: {
                    &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-range&quot;: &quot;PriceSpecification&quot;,
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PriceSpecification&quot;,
                      &quot;price&quot;: 1000000,
                      &quot;priceCurrency&quot;: &quot;USD&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;ServiceArea&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = sortOrder
required = false
path = additionalProperty



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;boolean&quot;,
    &quot;description&quot;: &quot;sent to consumer site&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
        &quot;properties&quot;: {
          &quot;relocationOffice&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;relocation office&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateOffice&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
              },
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
          },
          &quot;weight&quot;: {
            &quot;type&quot;: &quot;integer&quot;,
            &quot;description&quot;: &quot;weight&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
          },
          &quot;officeInPostalCode&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
          },
          &quot;sortOrder&quot;: {
            &quot;type&quot;: &quot;integer&quot;,
            &quot;description&quot;: &quot;sort order&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
          },
          &quot;sentToConsumerSite&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to consumer site&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
          },
          &quot;sentToCompanyLocator&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to company locator&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
          },
          &quot;sentToReferralSolutions&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to referral solutions&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
          },
          &quot;luxuryPriceMinimum&quot;: {
            &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;PriceSpecification&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;PriceSpecification&quot;,
              &quot;price&quot;: 1000000,
              &quot;priceCurrency&quot;: &quot;USD&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;ServiceArea&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)&quot;,
            &quot;x-kind&quot;: &quot;ServiceArea&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;\&quot;ServiceArea\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;ServiceArea&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-587&gt;&quot;
              },
              &quot;kind&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;ServiceArea sub-type.  City or PostalCode&quot;,
                &quot;enum&quot;: [
                  &quot;City&quot;,
                  &quot;PostalCode&quot;
                ],
                &quot;example&quot;: &quot;PostalCode&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-588&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.&quot;,
                &quot;properties&quot;: {
                  &quot;bhhsESAId&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;BHHS internal ESA ID&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-590&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-589&gt;&quot;
              },
              &quot;addressLocality&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;City, Township.&quot;,
                &quot;example&quot;: &quot;Woodland Hills&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-591&gt;&quot;
              },
              &quot;postalCode&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Zip/Post Code&quot;,
                &quot;example&quot;: &quot;91371&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-592&gt;&quot;
              },
              &quot;addressRegion&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;State or Province.&quot;,
                &quot;example&quot;: &quot;CA&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-593&gt;&quot;
              },
              &quot;addressCountry&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.&quot;,
                &quot;example&quot;: &quot;US&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-594&gt;&quot;
              },
              &quot;addressCounty&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the county (us real estate extension)&quot;,
                &quot;example&quot;: &quot;Los Angeles&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-595&gt;&quot;
              },
              &quot;provider&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a broker or company who provides service in the ServiceArea&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;\&quot;RealEstateOrganization\&quot;&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-597&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;profile URI&quot;,
                    &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-598&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-596&gt;&quot;
              },
              &quot;additionalProperty&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
                &quot;properties&quot;: {
                  &quot;relocationOffice&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;relocation office&quot;,
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateOffice&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
                      },
                      &quot;id&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                        &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
                  },
                  &quot;weight&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;weight&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
                  },
                  &quot;officeInPostalCode&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
                  },
                  &quot;sortOrder&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;sort order&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
                  },
                  &quot;sentToConsumerSite&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to consumer site&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
                  },
                  &quot;sentToCompanyLocator&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to company locator&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
                  },
                  &quot;sentToReferralSolutions&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to referral solutions&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
                  },
                  &quot;luxuryPriceMinimum&quot;: {
                    &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-range&quot;: &quot;PriceSpecification&quot;,
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PriceSpecification&quot;,
                      &quot;price&quot;: 1000000,
                      &quot;priceCurrency&quot;: &quot;USD&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;ServiceArea&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = sentToConsumerSite
required = false
path = additionalProperty



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;boolean&quot;,
    &quot;description&quot;: &quot;sent to company locator&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
        &quot;properties&quot;: {
          &quot;relocationOffice&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;relocation office&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateOffice&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
              },
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
          },
          &quot;weight&quot;: {
            &quot;type&quot;: &quot;integer&quot;,
            &quot;description&quot;: &quot;weight&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
          },
          &quot;officeInPostalCode&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
          },
          &quot;sortOrder&quot;: {
            &quot;type&quot;: &quot;integer&quot;,
            &quot;description&quot;: &quot;sort order&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
          },
          &quot;sentToConsumerSite&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to consumer site&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
          },
          &quot;sentToCompanyLocator&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to company locator&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
          },
          &quot;sentToReferralSolutions&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to referral solutions&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
          },
          &quot;luxuryPriceMinimum&quot;: {
            &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;PriceSpecification&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;PriceSpecification&quot;,
              &quot;price&quot;: 1000000,
              &quot;priceCurrency&quot;: &quot;USD&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;ServiceArea&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)&quot;,
            &quot;x-kind&quot;: &quot;ServiceArea&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;\&quot;ServiceArea\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;ServiceArea&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-587&gt;&quot;
              },
              &quot;kind&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;ServiceArea sub-type.  City or PostalCode&quot;,
                &quot;enum&quot;: [
                  &quot;City&quot;,
                  &quot;PostalCode&quot;
                ],
                &quot;example&quot;: &quot;PostalCode&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-588&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.&quot;,
                &quot;properties&quot;: {
                  &quot;bhhsESAId&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;BHHS internal ESA ID&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-590&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-589&gt;&quot;
              },
              &quot;addressLocality&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;City, Township.&quot;,
                &quot;example&quot;: &quot;Woodland Hills&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-591&gt;&quot;
              },
              &quot;postalCode&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Zip/Post Code&quot;,
                &quot;example&quot;: &quot;91371&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-592&gt;&quot;
              },
              &quot;addressRegion&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;State or Province.&quot;,
                &quot;example&quot;: &quot;CA&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-593&gt;&quot;
              },
              &quot;addressCountry&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.&quot;,
                &quot;example&quot;: &quot;US&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-594&gt;&quot;
              },
              &quot;addressCounty&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the county (us real estate extension)&quot;,
                &quot;example&quot;: &quot;Los Angeles&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-595&gt;&quot;
              },
              &quot;provider&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a broker or company who provides service in the ServiceArea&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;\&quot;RealEstateOrganization\&quot;&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-597&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;profile URI&quot;,
                    &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-598&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-596&gt;&quot;
              },
              &quot;additionalProperty&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
                &quot;properties&quot;: {
                  &quot;relocationOffice&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;relocation office&quot;,
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateOffice&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
                      },
                      &quot;id&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                        &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
                  },
                  &quot;weight&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;weight&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
                  },
                  &quot;officeInPostalCode&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
                  },
                  &quot;sortOrder&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;sort order&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
                  },
                  &quot;sentToConsumerSite&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to consumer site&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
                  },
                  &quot;sentToCompanyLocator&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to company locator&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
                  },
                  &quot;sentToReferralSolutions&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to referral solutions&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
                  },
                  &quot;luxuryPriceMinimum&quot;: {
                    &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-range&quot;: &quot;PriceSpecification&quot;,
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PriceSpecification&quot;,
                      &quot;price&quot;: 1000000,
                      &quot;priceCurrency&quot;: &quot;USD&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;ServiceArea&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = sentToCompanyLocator
required = false
path = additionalProperty



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;boolean&quot;,
    &quot;description&quot;: &quot;sent to referral solutions&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
        &quot;properties&quot;: {
          &quot;relocationOffice&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;relocation office&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateOffice&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
              },
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
          },
          &quot;weight&quot;: {
            &quot;type&quot;: &quot;integer&quot;,
            &quot;description&quot;: &quot;weight&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
          },
          &quot;officeInPostalCode&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
          },
          &quot;sortOrder&quot;: {
            &quot;type&quot;: &quot;integer&quot;,
            &quot;description&quot;: &quot;sort order&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
          },
          &quot;sentToConsumerSite&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to consumer site&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
          },
          &quot;sentToCompanyLocator&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to company locator&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
          },
          &quot;sentToReferralSolutions&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to referral solutions&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
          },
          &quot;luxuryPriceMinimum&quot;: {
            &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;PriceSpecification&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;PriceSpecification&quot;,
              &quot;price&quot;: 1000000,
              &quot;priceCurrency&quot;: &quot;USD&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;ServiceArea&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)&quot;,
            &quot;x-kind&quot;: &quot;ServiceArea&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;\&quot;ServiceArea\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;ServiceArea&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-587&gt;&quot;
              },
              &quot;kind&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;ServiceArea sub-type.  City or PostalCode&quot;,
                &quot;enum&quot;: [
                  &quot;City&quot;,
                  &quot;PostalCode&quot;
                ],
                &quot;example&quot;: &quot;PostalCode&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-588&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.&quot;,
                &quot;properties&quot;: {
                  &quot;bhhsESAId&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;BHHS internal ESA ID&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-590&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-589&gt;&quot;
              },
              &quot;addressLocality&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;City, Township.&quot;,
                &quot;example&quot;: &quot;Woodland Hills&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-591&gt;&quot;
              },
              &quot;postalCode&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Zip/Post Code&quot;,
                &quot;example&quot;: &quot;91371&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-592&gt;&quot;
              },
              &quot;addressRegion&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;State or Province.&quot;,
                &quot;example&quot;: &quot;CA&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-593&gt;&quot;
              },
              &quot;addressCountry&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.&quot;,
                &quot;example&quot;: &quot;US&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-594&gt;&quot;
              },
              &quot;addressCounty&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the county (us real estate extension)&quot;,
                &quot;example&quot;: &quot;Los Angeles&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-595&gt;&quot;
              },
              &quot;provider&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a broker or company who provides service in the ServiceArea&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;\&quot;RealEstateOrganization\&quot;&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-597&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;profile URI&quot;,
                    &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-598&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-596&gt;&quot;
              },
              &quot;additionalProperty&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
                &quot;properties&quot;: {
                  &quot;relocationOffice&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;relocation office&quot;,
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateOffice&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
                      },
                      &quot;id&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                        &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
                  },
                  &quot;weight&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;weight&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
                  },
                  &quot;officeInPostalCode&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
                  },
                  &quot;sortOrder&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;sort order&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
                  },
                  &quot;sentToConsumerSite&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to consumer site&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
                  },
                  &quot;sentToCompanyLocator&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to company locator&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
                  },
                  &quot;sentToReferralSolutions&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to referral solutions&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
                  },
                  &quot;luxuryPriceMinimum&quot;: {
                    &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-range&quot;: &quot;PriceSpecification&quot;,
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PriceSpecification&quot;,
                      &quot;price&quot;: 1000000,
                      &quot;priceCurrency&quot;: &quot;USD&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;ServiceArea&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = sentToReferralSolutions
required = false
path = additionalProperty



prop = {
  &quot;_json&quot;: {
    &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
    &quot;type&quot;: &quot;object&quot;,
    &quot;x-range&quot;: &quot;PriceSpecification&quot;,
    &quot;example&quot;: {
      &quot;type&quot;: &quot;PriceSpecification&quot;,
      &quot;price&quot;: 1000000,
      &quot;priceCurrency&quot;: &quot;USD&quot;
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
        &quot;properties&quot;: {
          &quot;relocationOffice&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;relocation office&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateOffice&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
              },
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
          },
          &quot;weight&quot;: {
            &quot;type&quot;: &quot;integer&quot;,
            &quot;description&quot;: &quot;weight&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
          },
          &quot;officeInPostalCode&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
          },
          &quot;sortOrder&quot;: {
            &quot;type&quot;: &quot;integer&quot;,
            &quot;description&quot;: &quot;sort order&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
          },
          &quot;sentToConsumerSite&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to consumer site&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
          },
          &quot;sentToCompanyLocator&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to company locator&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
          },
          &quot;sentToReferralSolutions&quot;: {
            &quot;type&quot;: &quot;boolean&quot;,
            &quot;description&quot;: &quot;sent to referral solutions&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
          },
          &quot;luxuryPriceMinimum&quot;: {
            &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;PriceSpecification&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;PriceSpecification&quot;,
              &quot;price&quot;: 1000000,
              &quot;priceCurrency&quot;: &quot;USD&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;ServiceArea&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)&quot;,
            &quot;x-kind&quot;: &quot;ServiceArea&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;\&quot;ServiceArea\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;ServiceArea&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-587&gt;&quot;
              },
              &quot;kind&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;ServiceArea sub-type.  City or PostalCode&quot;,
                &quot;enum&quot;: [
                  &quot;City&quot;,
                  &quot;PostalCode&quot;
                ],
                &quot;example&quot;: &quot;PostalCode&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-588&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.&quot;,
                &quot;properties&quot;: {
                  &quot;bhhsESAId&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;BHHS internal ESA ID&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-590&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-589&gt;&quot;
              },
              &quot;addressLocality&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;City, Township.&quot;,
                &quot;example&quot;: &quot;Woodland Hills&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-591&gt;&quot;
              },
              &quot;postalCode&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Zip/Post Code&quot;,
                &quot;example&quot;: &quot;91371&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-592&gt;&quot;
              },
              &quot;addressRegion&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;State or Province.&quot;,
                &quot;example&quot;: &quot;CA&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-593&gt;&quot;
              },
              &quot;addressCountry&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.&quot;,
                &quot;example&quot;: &quot;US&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-594&gt;&quot;
              },
              &quot;addressCounty&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the county (us real estate extension)&quot;,
                &quot;example&quot;: &quot;Los Angeles&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-595&gt;&quot;
              },
              &quot;provider&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a broker or company who provides service in the ServiceArea&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;\&quot;RealEstateOrganization\&quot;&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-597&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;profile URI&quot;,
                    &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-598&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-596&gt;&quot;
              },
              &quot;additionalProperty&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;BHHS specific ServiceArea properties&quot;,
                &quot;properties&quot;: {
                  &quot;relocationOffice&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;relocation office&quot;,
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateOffice&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-601&gt;&quot;
                      },
                      &quot;id&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-subPropertyOf&quot;: &quot;identifier&quot;,
                        &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-602&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-600&gt;&quot;
                  },
                  &quot;weight&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;weight&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-603&gt;&quot;
                  },
                  &quot;officeInPostalCode&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;true if the service area provider is physically located in the ServiceArea.&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-604&gt;&quot;
                  },
                  &quot;sortOrder&quot;: {
                    &quot;type&quot;: &quot;integer&quot;,
                    &quot;description&quot;: &quot;sort order&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-605&gt;&quot;
                  },
                  &quot;sentToConsumerSite&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to consumer site&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-606&gt;&quot;
                  },
                  &quot;sentToCompanyLocator&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to company locator&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-607&gt;&quot;
                  },
                  &quot;sentToReferralSolutions&quot;: {
                    &quot;type&quot;: &quot;boolean&quot;,
                    &quot;description&quot;: &quot;sent to referral solutions&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-608&gt;&quot;
                  },
                  &quot;luxuryPriceMinimum&quot;: {
                    &quot;description&quot;: &quot;minimum price for a property listing in the area to be considered a luxury property&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-range&quot;: &quot;PriceSpecification&quot;,
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PriceSpecification&quot;,
                      &quot;price&quot;: 1000000,
                      &quot;priceCurrency&quot;: &quot;USD&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-609&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-599&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;ServiceArea&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = luxuryPriceMinimum
required = false
path = additionalProperty









### Example

```json
{
  "type": "ServiceArea",
  "kind": "PostalCode",
  "identifier": {
    "bhhsESAId": "string"
  },
  "addressLocality": "Woodland Hills",
  "postalCode": "91371",
  "addressRegion": "CA",
  "addressCountry": "US",
  "addressCounty": "Los Angeles",
  "provider": {
    "type": "RealEstateOrganization",
    "id": "https://org.example.com/profile/card#me"
  },
  "additionalProperty": {
    "relocationOffice": {
      "type": "RealEstateOffice",
      "id": "https://org.example.com/profile/card#me"
    },
    "weight": 0,
    "officeInPostalCode": true,
    "sortOrder": 0,
    "sentToConsumerSite": true,
    "sentToCompanyLocator": true,
    "sentToReferralSolutions": true,
    "luxuryPriceMinimum": {
      "type": "PriceSpecification",
      "price": 1000000,
      "priceCurrency": "USD"
    }
  }
}
```

