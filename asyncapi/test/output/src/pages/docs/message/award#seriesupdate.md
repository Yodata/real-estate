# award#seriesupdate

```json 
{
  "_json": {
    "messageId": "award#seriesupdate",
    "x-scope": "realestate/award#",
    "summary": "an award series was updated",
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
                "realestate/award#seriesupdate"
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
                  "title": "AwardSeries",
                  "type": "object",
                  "x-range": [
                    "AwardSeries"
                  ],
                  "description": "an award bestowed at regular intervals",
                  "properties": {
                    "type": {
                      "enum": [
                        "AwardSeries"
                      ],
                      "description": "\"AwardSeries\"",
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-130>"
                    },
                    "name": {
                      "example": "Top 1% Club",
                      "description": "name of the series",
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-131>"
                    },
                    "description": {
                      "example": "Annual",
                      "type": "string",
                      "description": "description of the item.",
                      "x-parser-schema-id": "<anonymous-schema-132>"
                    },
                    "duration": {
                      "title": "duration",
                      "type": "string",
                      "description": "The duration of the item in ISO 8601 date format.",
                      "example": "R/P1Y",
                      "x-parser-schema-id": "<anonymous-schema-133>"
                    },
                    "startDate": {
                      "description": "the start date-time (ISO 8601 formated)",
                      "type": "string",
                      "format": "date-time",
                      "x-parser-schema-id": "<anonymous-schema-134>"
                    },
                    "endDate": {
                      "type": "string",
                      "description": "the end date-time (ISO 8601 formated)",
                      "format": "date-time",
                      "x-parser-schema-id": "<anonymous-schema-135>"
                    },
                    "id": {
                      "example": "https://example/com",
                      "type": "string",
                      "format": "uri",
                      "description": "Linked-Data URI (@id)",
                      "x-parser-schema-id": "<anonymous-schema-136>"
                    },
                    "identifier": {
                      "example": {
                        "hsfAwardSeriesID": "xxxx"
                      },
                      "type": "object",
                      "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                      "x-parser-schema-id": "<anonymous-schema-137>"
                    }
                  },
                  "x-parser-schema-id": "AwardSeries"
                }
              }
            }
          },
          "x-parser-schema-id": "<anonymous-schema-18>"
        }
      ],
      "x-parser-schema-id": "<anonymous-schema-17>"
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
                "realestate/award#seriesupdate"
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
                  "title": "AwardSeries",
                  "type": "object",
                  "x-range": [
                    "AwardSeries"
                  ],
                  "description": "an award bestowed at regular intervals",
                  "properties": {
                    "type": {
                      "enum": [
                        "AwardSeries"
                      ],
                      "description": "\"AwardSeries\"",
                      "type": "string"
                    },
                    "name": {
                      "example": "Top 1% Club",
                      "description": "name of the series",
                      "type": "string"
                    },
                    "description": {
                      "example": "Annual",
                      "type": "string",
                      "description": "description of the item."
                    },
                    "duration": {
                      "title": "duration",
                      "type": "string",
                      "description": "The duration of the item in ISO 8601 date format.",
                      "example": "R/P1Y"
                    },
                    "startDate": {
                      "description": "the start date-time (ISO 8601 formated)",
                      "type": "string",
                      "format": "date-time"
                    },
                    "endDate": {
                      "type": "string",
                      "description": "the end date-time (ISO 8601 formated)",
                      "format": "date-time"
                    },
                    "id": {
                      "example": "https://example/com",
                      "type": "string",
                      "format": "uri",
                      "description": "Linked-Data URI (@id)"
                    },
                    "identifier": {
                      "example": {
                        "hsfAwardSeriesID": "xxxx"
                      },
                      "type": "object",
                      "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record."
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