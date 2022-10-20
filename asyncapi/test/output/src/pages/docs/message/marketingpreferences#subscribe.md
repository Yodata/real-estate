# marketingpreferences#subscribe

```json 
{
  "_json": {
    "messageId": "marketingpreferences#subscribe",
    "x-scope": "realestate/marketingpreferences#",
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
                "realestate/marketingpreferences#subscribe"
              ]
            },
            "data": {
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
                  "x-range": "SubscribeAction",
                  "description": "the consumer (agent) has subscribed to content from the participant with roleName SubscriptionProvider.",
                  "properties": {
                    "type": {
                      "enum": [
                        "SubscribeAction"
                      ]
                    },
                    "agent": {
                      "type": "object",
                      "description": "the subscriber",
                      "x-range": "Contact",
                      "example": {
                        "type": "Contact",
                        "email": "bob@example.com",
                        "identifier": {
                          "hsfconsumerid": "D9AB8127-7D19-4C67-A514-9209F22F4511"
                        }
                      }
                    },
                    "participant": {
                      "description": "the subscription provider, an Agent, Team, Office or Organization",
                      "x-range": [
                        "RealEstateAgent",
                        "RealEstateTeam",
                        "RealEstateOffice",
                        "RealEstateOrganization"
                      ],
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "roleName": {
                            "type": "string",
                            "enum": [
                              "SubscriptionProvider"
                            ]
                          },
                          "id": {
                            "type": "string",
                            "format": "uri",
                            "example": "https://12345.example.com/profile/card#me"
                          },
                          "additionalProperty": {
                            "type": "object",
                            "properties": {
                              "isCompanyQueue": {
                                "type": "boolean"
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-611>"
                }
              ],
              "x-parser-schema-id": "SubscribeAction"
            }
          },
          "x-parser-schema-id": "<anonymous-schema-60>"
        }
      ],
      "x-parser-schema-id": "<anonymous-schema-59>"
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
                "realestate/marketingpreferences#subscribe"
              ]
            },
            "data": {
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
                  "x-range": "SubscribeAction",
                  "description": "the consumer (agent) has subscribed to content from the participant with roleName SubscriptionProvider.",
                  "properties": {
                    "type": {
                      "enum": [
                        "SubscribeAction"
                      ]
                    },
                    "agent": {
                      "type": "object",
                      "description": "the subscriber",
                      "x-range": "Contact",
                      "example": {
                        "type": "Contact",
                        "email": "bob@example.com",
                        "identifier": {
                          "hsfconsumerid": "D9AB8127-7D19-4C67-A514-9209F22F4511"
                        }
                      }
                    },
                    "participant": {
                      "description": "the subscription provider, an Agent, Team, Office or Organization",
                      "x-range": [
                        "RealEstateAgent",
                        "RealEstateTeam",
                        "RealEstateOffice",
                        "RealEstateOrganization"
                      ],
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "roleName": {
                            "type": "string",
                            "enum": [
                              "SubscriptionProvider"
                            ]
                          },
                          "id": {
                            "type": "string",
                            "format": "uri",
                            "example": "https://12345.example.com/profile/card#me"
                          },
                          "additionalProperty": {
                            "type": "object",
                            "properties": {
                              "isCompanyQueue": {
                                "type": "boolean"
                              }
                            }
                          }
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
    "x-parser-message-name": "<anonymous-message-6>"
  }
}
```