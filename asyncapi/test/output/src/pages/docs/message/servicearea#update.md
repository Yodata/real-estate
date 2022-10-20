# servicearea#update

```json 
{
  "_json": {
    "messageId": "servicearea#update",
    "x-scope": "realestate/servicearea#",
    "summary": "service area update",
    "payload": {
      "allOf": [
        {
          "type": "object",
          "required": [
            "topic",
            "data"
          ],
          "properties": {
            "topic": {
              "type": "string",
              "description": "the event topic which determines the schema of event.data",
              "x-parser-schema-id": "<anonymous-schema-3>"
            },
            "time": {
              "type": "string",
              "format": "date-time",
              "description": "date & time the event was produced",
              "x-parser-schema-id": "<anonymous-schema-4>"
            },
            "agent": {
              "type": "string",
              "format": "uri",
              "description": "the user,tema or organization who sent the event",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-5>"
            },
            "instrument": {
              "type": "string",
              "format": "uri",
              "description": "the service which created the event",
              "example": "https://vendorid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-6>"
            },
            "source": {
              "type": "string",
              "format": "uri",
              "description": "an agent, team or organization who received a copy of the event",
              "example": "https://companyid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-7>"
            },
            "originalRecipient": {
              "type": "string",
              "format": "uri",
              "description": "the original recipient of the event with this id",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-8>"
            },
            "id": {
              "type": "string",
              "format": "uri",
              "description": "the shared identifier of the event, akd the event id",
              "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-9>"
            },
            "@id": {
              "type": "string",
              "format": "uri",
              "description": "the url of your instance of the event in your inbox",
              "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-10>"
            },
            "data": {
              "type": "object",
              "description": "event payload, typically an Action",
              "x-parser-schema-id": "<anonymous-schema-11>"
            }
          },
          "x-parser-schema-id": "<anonymous-schema-2>"
        },
        {
          "properties": {
            "topic": {
              "enum": [
                "realestate/servicearea#update"
              ]
            },
            "data": {
              "properties": {
                "type": {
                  "enum": [
                    "UpdateAction"
                  ]
                },
                "object": {
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
                }
              }
            }
          },
          "x-parser-schema-id": "<anonymous-schema-80>"
        }
      ],
      "x-parser-schema-id": "<anonymous-schema-79>"
    },
    "x-parser-original-schema-format": "application/vnd.aai.asyncapi;version=2.4.0",
    "x-parser-original-payload": {
      "allOf": [
        {
          "type": "object",
          "required": [
            "topic",
            "data"
          ],
          "properties": {
            "topic": {
              "type": "string",
              "description": "the event topic which determines the schema of event.data"
            },
            "time": {
              "type": "string",
              "format": "date-time",
              "description": "date & time the event was produced"
            },
            "agent": {
              "type": "string",
              "format": "uri",
              "description": "the user,tema or organization who sent the event",
              "example": "https://agentid.example.com/profile/card#me"
            },
            "instrument": {
              "type": "string",
              "format": "uri",
              "description": "the service which created the event",
              "example": "https://vendorid.example.com/profile/card#me"
            },
            "source": {
              "type": "string",
              "format": "uri",
              "description": "an agent, team or organization who received a copy of the event",
              "example": "https://companyid.example.com/profile/card#me"
            },
            "originalRecipient": {
              "type": "string",
              "format": "uri",
              "description": "the original recipient of the event with this id",
              "example": "https://agentid.example.com/profile/card#me"
            },
            "id": {
              "type": "string",
              "format": "uri",
              "description": "the shared identifier of the event, akd the event id",
              "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx"
            },
            "@id": {
              "type": "string",
              "format": "uri",
              "description": "the url of your instance of the event in your inbox",
              "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx"
            },
            "data": {
              "type": "object",
              "description": "event payload, typically an Action"
            }
          }
        },
        {
          "properties": {
            "topic": {
              "enum": [
                "realestate/servicearea#update"
              ]
            },
            "data": {
              "properties": {
                "type": {
                  "enum": [
                    "UpdateAction"
                  ]
                },
                "object": {
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
                      ]
                    },
                    "kind": {
                      "type": "string",
                      "description": "ServiceArea sub-type.  City or PostalCode",
                      "enum": [
                        "City",
                        "PostalCode"
                      ],
                      "example": "PostalCode"
                    },
                    "identifier": {
                      "type": "object",
                      "description": "vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.",
                      "properties": {
                        "bhhsESAId": {
                          "type": "string",
                          "description": "BHHS internal ESA ID"
                        }
                      }
                    },
                    "addressLocality": {
                      "type": "string",
                      "description": "City, Township.",
                      "example": "Woodland Hills"
                    },
                    "postalCode": {
                      "type": "string",
                      "description": "Zip/Post Code",
                      "example": "91371"
                    },
                    "addressRegion": {
                      "type": "string",
                      "description": "State or Province.",
                      "example": "CA"
                    },
                    "addressCountry": {
                      "type": "string",
                      "description": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.",
                      "example": "US"
                    },
                    "addressCounty": {
                      "type": "string",
                      "description": "the county (us real estate extension)",
                      "example": "Los Angeles"
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
                          ]
                        },
                        "id": {
                          "type": "string",
                          "description": "profile URI",
                          "example": "https://org.example.com/profile/card#me"
                        }
                      }
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
                              ]
                            },
                            "id": {
                              "type": "string",
                              "x-subPropertyOf": "identifier",
                              "example": "https://org.example.com/profile/card#me"
                            }
                          }
                        },
                        "weight": {
                          "type": "integer",
                          "description": "weight"
                        },
                        "officeInPostalCode": {
                          "type": "boolean",
                          "description": "true if the service area provider is physically located in the ServiceArea."
                        },
                        "sortOrder": {
                          "type": "integer",
                          "description": "sort order"
                        },
                        "sentToConsumerSite": {
                          "type": "boolean",
                          "description": "sent to consumer site"
                        },
                        "sentToCompanyLocator": {
                          "type": "boolean",
                          "description": "sent to company locator"
                        },
                        "sentToReferralSolutions": {
                          "type": "boolean",
                          "description": "sent to referral solutions"
                        },
                        "luxuryPriceMinimum": {
                          "description": "minimum price for a property listing in the area to be considered a luxury property",
                          "type": "object",
                          "x-range": "PriceSpecification",
                          "example": {
                            "type": "PriceSpecification",
                            "price": 1000000,
                            "priceCurrency": "USD"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      ]
    },
    "schemaFormat": "application/vnd.aai.asyncapi;version=2.4.0",
    "x-parser-message-parsed": true,
    "x-parser-message-name": "<anonymous-message-8>"
  }
}
```