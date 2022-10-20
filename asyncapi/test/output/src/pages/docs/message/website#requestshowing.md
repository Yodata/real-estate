# website#requestshowing

```json 
{
  "_json": {
    "messageId": "website#requestshowing",
    "x-scope": "realestate/website#",
    "summary": "a website visitor has requested a property showing",
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
              "description": "\"realestate/website#requestshowing\"",
              "enum": [
                "realestate/website#requestshowing"
              ]
            },
            "data": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "\"RequestShowingAction\"",
                  "enum": [
                    "RequestShowingAction"
                  ]
                },
                "agent": {
                  "description": "website user requesting the showing"
                },
                "about": {
                  "type": "object",
                  "x-range": "PropertyListing",
                  "description": "the PropertyListing",
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
                "event": {
                  "type": "object",
                  "title": "Event",
                  "description": "An event happening at a certain time and location",
                  "x-range": "Event",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "example": "Event",
                      "x-parser-schema-id": "<anonymous-schema-273>"
                    },
                    "name": {
                      "type": "string",
                      "description": "name of the event",
                      "example": "Property Showing 1007 Mountain Gate Rd",
                      "x-parser-schema-id": "<anonymous-schema-274>"
                    },
                    "description": {
                      "type": "string",
                      "description": "event message content",
                      "example": "an example meeting request for 4:00PM to 4:30PM.",
                      "x-parser-schema-id": "<anonymous-schema-275>"
                    },
                    "about": {
                      "type": "object",
                      "description": "a subject of the meeting or event",
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
                      },
                      "x-parser-schema-id": "<anonymous-schema-276>"
                    },
                    "startDate": {
                      "description": "the start date-time (ISO 8601 formated)",
                      "type": "string",
                      "format": "date-time",
                      "example": "2019-08-01T16:00Z",
                      "x-parser-schema-id": "<anonymous-schema-277>"
                    },
                    "endDate": {
                      "type": "string",
                      "description": "the end date-time (ISO 8601 formated)",
                      "format": "date-time",
                      "example": "2019-08-01T16:30Z",
                      "x-parser-schema-id": "<anonymous-schema-278>"
                    },
                    "organizer": {
                      "title": "organizer",
                      "description": "the event organizer",
                      "type": "object",
                      "example": {
                        "type": "RealEstateAgent",
                        "name": "Bruce Wayne",
                        "id": "https://batman.example.com/profile/card#me"
                      },
                      "x-parser-schema-id": "<anonymous-schema-279>"
                    }
                  },
                  "example": {
                    "type": "Event",
                    "name": "Property Showing 1007 Mountain Gate Rd",
                    "description": "an example meeting request for 4:00PM to 4:30PM.",
                    "startDate": "2019-08-01T16:00Z",
                    "endDate": "2019-08-01T16:30Z"
                  }
                },
                "object": {
                  "type": "object",
                  "description": "A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.",
                  "title": "Question",
                  "x-range": "Question",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "enum": [
                        "Question"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-494>"
                    },
                    "text": {
                      "type": "string",
                      "description": "the question content",
                      "example": "I would like to view 123 Main Street.",
                      "x-parser-schema-id": "<anonymous-schema-495>"
                    }
                  },
                  "x-parser-schema-id": "Question"
                },
                "recipient": {
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
                  }
                }
              }
            }
          },
          "x-parser-schema-id": "<anonymous-schema-103>"
        }
      ],
      "x-parser-schema-id": "<anonymous-schema-102>"
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
              "description": "\"realestate/website#requestshowing\"",
              "enum": [
                "realestate/website#requestshowing"
              ]
            },
            "data": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "\"RequestShowingAction\"",
                  "enum": [
                    "RequestShowingAction"
                  ]
                },
                "agent": {
                  "description": "website user requesting the showing"
                },
                "about": {
                  "type": "object",
                  "x-range": "PropertyListing",
                  "description": "the PropertyListing",
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
                "event": {
                  "type": "object",
                  "title": "Event",
                  "description": "An event happening at a certain time and location",
                  "x-range": "Event",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "example": "Event"
                    },
                    "name": {
                      "type": "string",
                      "description": "name of the event",
                      "example": "Property Showing 1007 Mountain Gate Rd"
                    },
                    "description": {
                      "type": "string",
                      "description": "event message content",
                      "example": "an example meeting request for 4:00PM to 4:30PM."
                    },
                    "about": {
                      "type": "object",
                      "description": "a subject of the meeting or event",
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
                    "startDate": {
                      "description": "the start date-time (ISO 8601 formated)",
                      "type": "string",
                      "format": "date-time",
                      "example": "2019-08-01T16:00Z"
                    },
                    "endDate": {
                      "type": "string",
                      "description": "the end date-time (ISO 8601 formated)",
                      "format": "date-time",
                      "example": "2019-08-01T16:30Z"
                    },
                    "organizer": {
                      "title": "organizer",
                      "description": "the event organizer",
                      "type": "object",
                      "example": {
                        "type": "RealEstateAgent",
                        "name": "Bruce Wayne",
                        "id": "https://batman.example.com/profile/card#me"
                      }
                    }
                  },
                  "example": {
                    "type": "Event",
                    "name": "Property Showing 1007 Mountain Gate Rd",
                    "description": "an example meeting request for 4:00PM to 4:30PM.",
                    "startDate": "2019-08-01T16:00Z",
                    "endDate": "2019-08-01T16:30Z"
                  }
                },
                "object": {
                  "type": "object",
                  "description": "A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.",
                  "title": "Question",
                  "x-range": "Question",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "enum": [
                        "Question"
                      ]
                    },
                    "text": {
                      "type": "string",
                      "description": "the question content",
                      "example": "I would like to view 123 Main Street."
                    }
                  }
                },
                "recipient": {
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
    "x-parser-message-name": "<anonymous-message-9>"
  }
}
```