# franchise#listingreport

```json 
{
  "_json": {
    "messageId": "franchise#listingreport",
    "x-scope": "realestate/franchise#",
    "summary": "franchise listingreport",
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
              "description": "realestate/franchise#listingreport",
              "enum": [
                "realestate/franchise#listingreport"
              ]
            },
            "data": {
              "allOf": [
                {
                  "allOf": [
                    {
                      "title": "Action",
                      "type": "object",
                      "description": "An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.",
                      "required": [
                        "type"
                      ],
                      "properties": {
                        "type": {
                          "description": "the action type",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-121>"
                        },
                        "object": {
                          "description": "item on which the action is carried out",
                          "x-parser-schema-id": "<anonymous-schema-122>"
                        }
                      },
                      "externalDocs": {
                        "description": "schema.org/Action",
                        "url": "https://schema.org/Action"
                      },
                      "x-parser-schema-id": "Action"
                    },
                    {
                      "type": "object",
                      "description": "the object was created by the agent",
                      "properties": {
                        "type": {
                          "type": "string",
                          "description": "CreateAction",
                          "enum": [
                            "CreateAction"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "properties": {
                    "object": {
                      "title": "ListingReport",
                      "description": "summary report of listing inventory count",
                      "x-range": "ListingReport",
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "description": "RECORD-TYPE",
                          "example": "ListingReport",
                          "x-parser-schema-id": "<anonymous-schema-309>"
                        },
                        "batchId": {
                          "type": "string",
                          "description": "BATCH-ID",
                          "x-parser-schema-id": "<anonymous-schema-310>"
                        },
                        "reportingOfficeId": {
                          "type": "string",
                          "format": "uri",
                          "description": "OFFICE-ID",
                          "example": "https://{officeid}.example.com/profile/card#me",
                          "x-parser-schema-id": "<anonymous-schema-311>"
                        },
                        "dateCreated": {
                          "type": "string",
                          "format": "date-time",
                          "description": "YEAR-MONTH",
                          "x-parser-schema-id": "<anonymous-schema-312>"
                        },
                        "listingsAddedCount": {
                          "type": "number",
                          "description": "LISTINGS-TAKEN",
                          "x-parser-schema-id": "<anonymous-schema-313>"
                        },
                        "totalListingsCount": {
                          "type": "number",
                          "description": "LISTINGS-INVENTORY",
                          "x-parser-schema-id": "<anonymous-schema-314>"
                        }
                      },
                      "x-parser-schema-id": "ListingReport"
                    }
                  }
                }
              ]
            }
          },
          "x-parser-schema-id": "<anonymous-schema-32>"
        }
      ],
      "x-parser-schema-id": "<anonymous-schema-31>"
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
              "description": "realestate/franchise#listingreport",
              "enum": [
                "realestate/franchise#listingreport"
              ]
            },
            "data": {
              "allOf": [
                {
                  "allOf": [
                    {
                      "title": "Action",
                      "type": "object",
                      "description": "An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.",
                      "required": [
                        "type"
                      ],
                      "properties": {
                        "type": {
                          "description": "the action type",
                          "type": "string"
                        },
                        "object": {
                          "description": "item on which the action is carried out"
                        }
                      },
                      "externalDocs": {
                        "description": "schema.org/Action",
                        "url": "https://schema.org/Action"
                      }
                    },
                    {
                      "type": "object",
                      "description": "the object was created by the agent",
                      "properties": {
                        "type": {
                          "type": "string",
                          "description": "CreateAction",
                          "enum": [
                            "CreateAction"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "properties": {
                    "object": {
                      "title": "ListingReport",
                      "description": "summary report of listing inventory count",
                      "x-range": "ListingReport",
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "description": "RECORD-TYPE",
                          "example": "ListingReport"
                        },
                        "batchId": {
                          "type": "string",
                          "description": "BATCH-ID"
                        },
                        "reportingOfficeId": {
                          "type": "string",
                          "format": "uri",
                          "description": "OFFICE-ID",
                          "example": "https://{officeid}.example.com/profile/card#me"
                        },
                        "dateCreated": {
                          "type": "string",
                          "format": "date-time",
                          "description": "YEAR-MONTH"
                        },
                        "listingsAddedCount": {
                          "type": "number",
                          "description": "LISTINGS-TAKEN"
                        },
                        "totalListingsCount": {
                          "type": "number",
                          "description": "LISTINGS-INVENTORY"
                        }
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
    "x-parser-message-name": "<anonymous-message-2>"
  }
}
```