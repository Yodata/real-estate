# website#listingoffer

```json 
{
  "_json": {
    "messageId": "website#listingoffer",
    "x-scope": "realestate/website#",
    "summary": "website user makes a listing offer",
    "payload": {
      "allOf": [
        {
          "allOf": [
            {
              "title": "CloudEvent",
              "type": "object",
              "required": [
                "topic",
                "agent",
                "instrument",
                "time"
              ],
              "properties": {
                "topic": {
                  "type": "string",
                  "description": "the event topic which determines the event.data schema",
                  "x-parser-schema-id": "<anonymous-schema-85>"
                },
                "time": {
                  "type": "string",
                  "format": "date-time",
                  "description": "date & time the event was produced",
                  "x-parser-schema-id": "<anonymous-schema-86>"
                },
                "agent": {
                  "type": "string",
                  "format": "uri",
                  "description": "the user,tema or organization who sent the event",
                  "example": "https://agentid.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-87>"
                },
                "instrument": {
                  "type": "string",
                  "format": "uri",
                  "description": "the service which created the event",
                  "example": "https://vendorid.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-88>"
                },
                "source": {
                  "type": "string",
                  "format": "uri",
                  "description": "an agent, team or organization who received a copy of the event",
                  "example": "https://companyid.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-89>"
                },
                "originalRecipient": {
                  "type": "string",
                  "format": "uri",
                  "description": "the original recipient of the event with this id",
                  "example": "https://agentid.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-90>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the shared identifier of the event, akd the event id",
                  "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
                  "x-parser-schema-id": "<anonymous-schema-91>"
                },
                "@id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the url of your instance of the event in your inbox",
                  "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
                  "x-parser-schema-id": "<anonymous-schema-92>"
                },
                "data": {
                  "type": "object",
                  "description": "event payload, typically an Action",
                  "x-parser-schema-id": "<anonymous-schema-93>"
                }
              },
              "x-parser-schema-id": "CloudEvent"
            },
            {
              "properties": {
                "data": {
                  "type": "object",
                  "description": "the event payload, typeically a schema.org/Action",
                  "required": [
                    "type",
                    "agent",
                    "object"
                  ],
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "x-parser-schema-id": "<anonymous-schema-260>"
                    },
                    "agent": {
                      "type": "object",
                      "description": "the website user who performed the action",
                      "x-range": [
                        "Contact",
                        "Person"
                      ],
                      "example": {
                        "type": "Contact",
                        "name": "Miles Davis",
                        "givenName": "Miles",
                        "familyName": "Davis",
                        "telephone": "067-419-1230",
                        "email": "user@example.com",
                        "identifier": {
                          "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
                        },
                        "additionalProperty": {
                          "userPath": "xxx",
                          "workingWithAgent": true
                        }
                      }
                    },
                    "participant": {
                      "x-title": "participant",
                      "x-range": [
                        "Person",
                        "RealEstateAgent",
                        "RealEstateTeam",
                        "RealEstateOrganization"
                      ],
                      "description": "Other co-agents with a direct or indirect interest in the action.",
                      "type": "array",
                      "items": {
                        "type": "object",
                        "x-parser-schema-id": "<anonymous-schema-358>"
                      },
                      "example": [
                        {
                          "type": "Contact",
                          "name": "Bruce Wayne",
                          "email": "bruce@example.com",
                          "identifier": {
                            "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                          }
                        }
                      ]
                    },
                    "instrument": {
                      "type": "object",
                      "description": "website or mobile application",
                      "x-range": [
                        "RealEstateWebsite",
                        "MobileApplication",
                        "Thing"
                      ],
                      "example": {
                        "type": "RealEstateWebsite",
                        "url": "http://gotham-city-realestate.example.com"
                      }
                    },
                    "object": {
                      "type": "object"
                    }
                  }
                }
              },
              "x-parser-schema-id": "<anonymous-schema-94>"
            }
          ],
          "x-parser-schema-id": "<anonymous-schema-84>"
        },
        {
          "properties": {
            "topic": {
              "description": "realestate/website#listingoffer",
              "enum": [
                "realestate/website#listingoffer"
              ]
            },
            "data": {
              "allOf": [
                {
                  "type": "object",
                  "required": [
                    "type"
                  ],
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "x-parser-schema-id": "<anonymous-schema-144>"
                    }
                  },
                  "x-parser-schema-id": "Thing"
                },
                {
                  "description": "an offer is made to buy a PropertyListing",
                  "x-range": "ListingOffer",
                  "required": [
                    "type",
                    "agent",
                    "object",
                    "recipient",
                    "offerPrice"
                  ],
                  "properties": {
                    "type": {
                      "enum": [
                        "ListingOffer"
                      ]
                    },
                    "agent": {
                      "description": "the Person or Contact who makes the offer"
                    },
                    "offerPrice": {
                      "description": "the offer price or range",
                      "type": "object",
                      "title": "PriceSpecification",
                      "x-range": "PriceSpecification",
                      "properties": {
                        "type": {
                          "type": "string",
                          "description": "PriceSpecification",
                          "enum": [
                            "PriceSpecification"
                          ],
                          "x-parser-schema-id": "<anonymous-schema-376>"
                        },
                        "minPrice": {
                          "type": "number",
                          "description": "the low price offered if price is a range.",
                          "example": 75000,
                          "x-parser-schema-id": "<anonymous-schema-377>"
                        },
                        "maxPrice": {
                          "type": "number",
                          "description": "the high price offered if price is a range.",
                          "example": 100000,
                          "x-parser-schema-id": "<anonymous-schema-378>"
                        },
                        "price": {
                          "type": "number",
                          "description": "the offer price.",
                          "example": 75000,
                          "x-parser-schema-id": "<anonymous-schema-379>"
                        },
                        "priceCurrency": {
                          "type": "string",
                          "description": "use ISO4217",
                          "example": "USD",
                          "x-parser-schema-id": "<anonymous-schema-380>"
                        }
                      }
                    },
                    "object": {
                      "type": "object",
                      "x-range": [
                        "Comment",
                        "Question"
                      ],
                      "example": {
                        "type": "Comment",
                        "text": "take it or leave it."
                      }
                    },
                    "propertyListing": {
                      "type": "object",
                      "description": "the listing on which the offer is made.",
                      "example": {
                        "type": "PropertyListing",
                        "originatingSystemName": "GOTHAM-MLS",
                        "originatingSystemKey": "12345",
                        "url": "https://{company-website-url}/{path-to-listing}",
                        "streetAddress": "1007 Mountain Gate Rd",
                        "addressRegion": "New Jersey",
                        "addressLocality": "Gotham City",
                        "postalCode": "10010",
                        "addressCountry": "USA",
                        "listingPrice": {
                          "type": "PriceSpecification",
                          "price": 7500000,
                          "priceCurrency": "USD"
                        }
                      }
                    },
                    "recipient": {
                      "description": "listing agent or offer recipient",
                      "type": "object",
                      "x-range": [
                        "RealEstateAgent",
                        "RealEstateOrganization"
                      ],
                      "example": {
                        "type": "RealEstateAgent",
                        "name": "Randy RealEstateAgent",
                        "id": "https://{agentid}.example.com/profile/card#me"
                      }
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-308>"
                }
              ],
              "x-parser-schema-id": "ListingOffer"
            }
          },
          "x-parser-schema-id": "<anonymous-schema-97>"
        }
      ],
      "x-parser-schema-id": "<anonymous-schema-96>"
    },
    "x-parser-original-schema-format": "application/vnd.aai.asyncapi;version=2.4.0",
    "x-parser-original-payload": {
      "allOf": [
        {
          "allOf": [
            {
              "title": "CloudEvent",
              "type": "object",
              "required": [
                "topic",
                "agent",
                "instrument",
                "time"
              ],
              "properties": {
                "topic": {
                  "type": "string",
                  "description": "the event topic which determines the event.data schema"
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
                "data": {
                  "type": "object",
                  "description": "the event payload, typeically a schema.org/Action",
                  "required": [
                    "type",
                    "agent",
                    "object"
                  ],
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)"
                    },
                    "agent": {
                      "type": "object",
                      "description": "the website user who performed the action",
                      "x-range": [
                        "Contact",
                        "Person"
                      ],
                      "example": {
                        "type": "Contact",
                        "name": "Miles Davis",
                        "givenName": "Miles",
                        "familyName": "Davis",
                        "telephone": "067-419-1230",
                        "email": "user@example.com",
                        "identifier": {
                          "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
                        },
                        "additionalProperty": {
                          "userPath": "xxx",
                          "workingWithAgent": true
                        }
                      }
                    },
                    "participant": {
                      "x-title": "participant",
                      "x-range": [
                        "Person",
                        "RealEstateAgent",
                        "RealEstateTeam",
                        "RealEstateOrganization"
                      ],
                      "description": "Other co-agents with a direct or indirect interest in the action.",
                      "type": "array",
                      "items": {
                        "type": "object"
                      },
                      "example": [
                        {
                          "type": "Contact",
                          "name": "Bruce Wayne",
                          "email": "bruce@example.com",
                          "identifier": {
                            "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                          }
                        }
                      ]
                    },
                    "instrument": {
                      "type": "object",
                      "description": "website or mobile application",
                      "x-range": [
                        "RealEstateWebsite",
                        "MobileApplication",
                        "Thing"
                      ],
                      "example": {
                        "type": "RealEstateWebsite",
                        "url": "http://gotham-city-realestate.example.com"
                      }
                    },
                    "object": {
                      "type": "object"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "properties": {
            "topic": {
              "description": "realestate/website#listingoffer",
              "enum": [
                "realestate/website#listingoffer"
              ]
            },
            "data": {
              "allOf": [
                {
                  "type": "object",
                  "required": [
                    "type"
                  ],
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)"
                    }
                  }
                },
                {
                  "description": "an offer is made to buy a PropertyListing",
                  "x-range": "ListingOffer",
                  "required": [
                    "type",
                    "agent",
                    "object",
                    "recipient",
                    "offerPrice"
                  ],
                  "properties": {
                    "type": {
                      "enum": [
                        "ListingOffer"
                      ]
                    },
                    "agent": {
                      "description": "the Person or Contact who makes the offer"
                    },
                    "offerPrice": {
                      "description": "the offer price or range",
                      "type": "object",
                      "title": "PriceSpecification",
                      "x-range": "PriceSpecification",
                      "properties": {
                        "type": {
                          "type": "string",
                          "description": "PriceSpecification",
                          "enum": [
                            "PriceSpecification"
                          ]
                        },
                        "minPrice": {
                          "type": "number",
                          "description": "the low price offered if price is a range.",
                          "example": 75000
                        },
                        "maxPrice": {
                          "type": "number",
                          "description": "the high price offered if price is a range.",
                          "example": 100000
                        },
                        "price": {
                          "type": "number",
                          "description": "the offer price.",
                          "example": 75000
                        },
                        "priceCurrency": {
                          "type": "string",
                          "description": "use ISO4217",
                          "example": "USD"
                        }
                      }
                    },
                    "object": {
                      "type": "object",
                      "x-range": [
                        "Comment",
                        "Question"
                      ],
                      "example": {
                        "type": "Comment",
                        "text": "take it or leave it."
                      }
                    },
                    "propertyListing": {
                      "type": "object",
                      "description": "the listing on which the offer is made.",
                      "example": {
                        "type": "PropertyListing",
                        "originatingSystemName": "GOTHAM-MLS",
                        "originatingSystemKey": "12345",
                        "url": "https://{company-website-url}/{path-to-listing}",
                        "streetAddress": "1007 Mountain Gate Rd",
                        "addressRegion": "New Jersey",
                        "addressLocality": "Gotham City",
                        "postalCode": "10010",
                        "addressCountry": "USA",
                        "listingPrice": {
                          "type": "PriceSpecification",
                          "price": 7500000,
                          "priceCurrency": "USD"
                        }
                      }
                    },
                    "recipient": {
                      "description": "listing agent or offer recipient",
                      "type": "object",
                      "x-range": [
                        "RealEstateAgent",
                        "RealEstateOrganization"
                      ],
                      "example": {
                        "type": "RealEstateAgent",
                        "name": "Randy RealEstateAgent",
                        "id": "https://{agentid}.example.com/profile/card#me"
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    "schemaFormat": "application/vnd.aai.asyncapi;version=2.4.0",
    "x-parser-message-parsed": true,
    "x-parser-message-name": "<anonymous-message-9>"
  }
}
```