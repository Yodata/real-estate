# award#teamupdate

```json 
{
  "_json": {
    "messageId": "award#teamupdate",
    "x-scope": "realestate/award#",
    "summary": "an award team has been updated",
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
                "realestate/award#teamupdate"
              ]
            },
            "data": {
              "x-range": [
                "UpdateAction"
              ],
              "properties": {
                "type": {
                  "enum": [
                    "UpdateAction"
                  ]
                },
                "object": {
                  "title": "AwardTeam",
                  "type": "object",
                  "x-range": "AwardTeam",
                  "description": "a Collection",
                  "required": [
                    "type"
                  ],
                  "properties": {
                    "type": {
                      "description": "AwardTeam",
                      "type": "string",
                      "enum": [
                        "AwardTeam"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-138>"
                    },
                    "name": {
                      "type": "string",
                      "description": "name of the AwardTeam",
                      "example": "Clients",
                      "x-parser-schema-id": "<anonymous-schema-139>"
                    },
                    "identifier": {
                      "example": {
                        "hsfTeamId": "xxxxx"
                      },
                      "type": "object",
                      "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                      "x-parser-schema-id": "<anonymous-schema-140>"
                    },
                    "member": {
                      "description": "members of the AwardTeam",
                      "type": "array",
                      "x-range": [
                        "RealEstateAgent",
                        "RealEstateOffice",
                        "RealEstateOrganization"
                      ],
                      "items": {
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-142>"
                      },
                      "example": [
                        "https://user.example.com/profile/card#me",
                        "https://office.example.com/profile/card#me",
                        "https://company.example.com/profile/card#me"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-141>"
                    }
                  },
                  "x-parser-schema-id": "AwardTeam"
                }
              }
            }
          },
          "x-parser-schema-id": "<anonymous-schema-26>"
        }
      ],
      "x-parser-schema-id": "<anonymous-schema-25>"
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
                "realestate/award#teamupdate"
              ]
            },
            "data": {
              "x-range": [
                "UpdateAction"
              ],
              "properties": {
                "type": {
                  "enum": [
                    "UpdateAction"
                  ]
                },
                "object": {
                  "title": "AwardTeam",
                  "type": "object",
                  "x-range": "AwardTeam",
                  "description": "a Collection",
                  "required": [
                    "type"
                  ],
                  "properties": {
                    "type": {
                      "description": "AwardTeam",
                      "type": "string",
                      "enum": [
                        "AwardTeam"
                      ]
                    },
                    "name": {
                      "type": "string",
                      "description": "name of the AwardTeam",
                      "example": "Clients"
                    },
                    "identifier": {
                      "example": {
                        "hsfTeamId": "xxxxx"
                      },
                      "type": "object",
                      "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record."
                    },
                    "member": {
                      "description": "members of the AwardTeam",
                      "type": "array",
                      "x-range": [
                        "RealEstateAgent",
                        "RealEstateOffice",
                        "RealEstateOrganization"
                      ],
                      "items": {
                        "type": "string"
                      },
                      "example": [
                        "https://user.example.com/profile/card#me",
                        "https://office.example.com/profile/card#me",
                        "https://company.example.com/profile/card#me"
                      ]
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
    "x-parser-message-name": "<anonymous-message-1>"
  }
}
```