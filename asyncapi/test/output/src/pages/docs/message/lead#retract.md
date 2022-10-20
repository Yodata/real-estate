# lead#retract

```json 
{
  "_json": {
    "messageId": "lead#retract",
    "x-scope": "realestate/lead#",
    "summary": "a lead (data.object) is taken back from the previous assignee (data.participant) by the previous sender/owner (data.recipient)",
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
                "realestate/lead#retract"
              ]
            },
            "data": {
              "type": "object",
              "description": "the message payload",
              "x-range": "RetractAction",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "static RetractAction",
                  "enum": [
                    "RetractAction"
                  ]
                },
                "object": {
                  "type": "object",
                  "description": "the lead being retracted",
                  "x-range": [
                    "Lead"
                  ],
                  "example": {
                    "type": "Lead",
                    "object": {
                      "type": "Contact",
                      "identifier": {
                        "redContact_Guid": "bbc1f449-21b3-41d8-a588-2d1c7d43281e"
                      },
                      "name": "Braxton Zboncak",
                      "email": "user@example.com"
                    }
                  }
                },
                "agent": {
                  "type": "string",
                  "description": "user who effected the change",
                  "format": "uri",
                  "example": "https://{lead-admin}.bhhs.hsaffailites.com/profile/card"
                },
                "participant": {
                  "type": "object",
                  "description": "the original recipient from which the lead is being taken",
                  "x-range": [
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "RealEstateOrganization"
                  ],
                  "example": {
                    "type": "RealEstateAgent",
                    "id": "https://user.example.com/profile/card#me"
                  }
                },
                "recipient": {
                  "type": "object",
                  "description": "the lead-owner, to whom the lead is being returned",
                  "x-range": [
                    "RealEstateOffice",
                    "RealEstateOrganization",
                    "RealEstateAgent"
                  ],
                  "example": {
                    "type": "RealEstateOrganization",
                    "id": "https://{lead-owner}.example.com/profile/card#me"
                  }
                }
              }
            }
          },
          "x-parser-schema-id": "<anonymous-schema-46>"
        }
      ],
      "x-parser-schema-id": "<anonymous-schema-45>"
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
                "realestate/lead#retract"
              ]
            },
            "data": {
              "type": "object",
              "description": "the message payload",
              "x-range": "RetractAction",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "static RetractAction",
                  "enum": [
                    "RetractAction"
                  ]
                },
                "object": {
                  "type": "object",
                  "description": "the lead being retracted",
                  "x-range": [
                    "Lead"
                  ],
                  "example": {
                    "type": "Lead",
                    "object": {
                      "type": "Contact",
                      "identifier": {
                        "redContact_Guid": "bbc1f449-21b3-41d8-a588-2d1c7d43281e"
                      },
                      "name": "Braxton Zboncak",
                      "email": "user@example.com"
                    }
                  }
                },
                "agent": {
                  "type": "string",
                  "description": "user who effected the change",
                  "format": "uri",
                  "example": "https://{lead-admin}.bhhs.hsaffailites.com/profile/card"
                },
                "participant": {
                  "type": "object",
                  "description": "the original recipient from which the lead is being taken",
                  "x-range": [
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "RealEstateOrganization"
                  ],
                  "example": {
                    "type": "RealEstateAgent",
                    "id": "https://user.example.com/profile/card#me"
                  }
                },
                "recipient": {
                  "type": "object",
                  "description": "the lead-owner, to whom the lead is being returned",
                  "x-range": [
                    "RealEstateOffice",
                    "RealEstateOrganization",
                    "RealEstateAgent"
                  ],
                  "example": {
                    "type": "RealEstateOrganization",
                    "id": "https://{lead-owner}.example.com/profile/card#me"
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
    "x-parser-message-name": "<anonymous-message-3>"
  }
}
```