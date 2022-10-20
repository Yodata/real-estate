# award#create

```json 
{
  "_json": {
    "messageId": "award#create",
    "name": "award#create",
    "title": "award#create",
    "summary": "Action to sign a user up.",
    "description": "A longer description",
    "contentType": "application/json",
    "tags": [
      {
        "name": "action|create"
      },
      {
        "name": "topic|award"
      },
      {
        "name": "domain|realestate"
      }
    ],
    "payload": {
      "type": "object",
      "properties": {
        "topic": {
          "enum": [
            "realestate/award#create"
          ],
          "x-parser-schema-id": "<anonymous-schema-119>"
        },
        "data": {
          "x-range": [
            "CreateAction"
          ],
          "properties": {
            "type": {
              "enum": [
                "CreateAction"
              ]
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              }
            },
            "agent": {
              "description": "the award presentor",
              "title": "agent",
              "x-range": [
                "Person",
                "Organization",
                "URI"
              ],
              "oneOf": [
                {
                  "type": "string",
                  "format": "uri",
                  "example": "http://{user}.example.com/profile/card#me"
                },
                {
                  "type": "object"
                }
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
              "example": {
                "type": "AwardSeries",
                "name": "Agent of The Year",
                "identifier": {
                  "hsfAwardSeriesId": "xxxx"
                }
              }
            },
            "recipient": {
              "type": "object",
              "x-range": [
                "RealEstateAgent",
                "RealEstateOffice",
                "RealEstateOrganiation"
              ],
              "description": "profile URI of the award recipient",
              "example": {
                "type": "RealEstateAgent",
                "id": "https://user.example.com/profile/card#me",
                "name": "Joann Agent"
              }
            }
          },
          "x-parser-schema-id": "<anonymous-schema-120>"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-118>"
    },
    "x-parser-original-schema-format": "application/vnd.aai.asyncapi;version=2.4.0",
    "x-parser-original-payload": {
      "type": "object",
      "properties": {
        "topic": {
          "enum": [
            "realestate/award#create"
          ]
        },
        "data": {
          "x-range": [
            "CreateAction"
          ],
          "properties": {
            "type": {
              "enum": [
                "CreateAction"
              ]
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              }
            },
            "agent": {
              "description": "the award presentor",
              "title": "agent",
              "x-range": [
                "Person",
                "Organization",
                "URI"
              ],
              "oneOf": [
                {
                  "type": "string",
                  "format": "uri",
                  "example": "http://{user}.example.com/profile/card#me"
                },
                {
                  "type": "object"
                }
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
              },
              "example": {
                "type": "AwardSeries",
                "name": "Agent of The Year",
                "identifier": {
                  "hsfAwardSeriesId": "xxxx"
                }
              }
            },
            "recipient": {
              "type": "object",
              "x-range": [
                "RealEstateAgent",
                "RealEstateOffice",
                "RealEstateOrganiation"
              ],
              "description": "profile URI of the award recipient",
              "example": {
                "type": "RealEstateAgent",
                "id": "https://user.example.com/profile/card#me",
                "name": "Joann Agent"
              }
            }
          }
        }
      }
    },
    "schemaFormat": "application/vnd.aai.asyncapi;version=2.4.0",
    "x-parser-message-parsed": true
  }
}
```