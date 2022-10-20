# profile#teammemberadd

```json 
{
  "_json": {
    "messageId": "profile#teammemberadd",
    "x-scope": "realestate/profile#",
    "summary": "a team member was added",
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
                "realestate/profile#teammemberadd"
              ]
            },
            "data": {
              "x-range": "AddAction",
              "properties": {
                "type": {
                  "description": "AddAction",
                  "enum": [
                    "AddAction"
                  ]
                },
                "object": {
                  "allOf": [
                    {
                      "title": "OrganizationRole",
                      "type": "object",
                      "description": "describes a role played by a member and a group or organization.",
                      "properties": {
                        "type": {
                          "type": "string",
                          "description": "a role played by the member in the memberOf group",
                          "enum": [
                            "OrganizationRole"
                          ],
                          "x-parser-schema-id": "<anonymous-schema-316>"
                        },
                        "roleName": {
                          "type": "string",
                          "description": "the role name",
                          "example": "Owner",
                          "x-parser-schema-id": "<anonymous-schema-317>"
                        },
                        "memberOf": {
                          "description": "the org or group where the role is performed",
                          "type": "object",
                          "example": {
                            "type": "RealEstateOrganization",
                            "id": "http://orgid.example.com/profile/card#me"
                          },
                          "x-parser-schema-id": "<anonymous-schema-318>"
                        },
                        "member": {
                          "description": "member object or id",
                          "type": "string",
                          "format": "uri",
                          "example": "https://memberid.example.com/profile/card#me",
                          "x-parser-schema-id": "<anonymous-schema-319>"
                        },
                        "startDate": {
                          "type": "string",
                          "format": "date-time",
                          "description": "date the member began performing this role",
                          "x-parser-schema-id": "<anonymous-schema-320>"
                        },
                        "endDate": {
                          "type": "string",
                          "format": "date-time",
                          "description": "date the member stopped performing the role",
                          "x-parser-schema-id": "<anonymous-schema-321>"
                        }
                      },
                      "x-parser-schema-id": "OrganizationRole"
                    },
                    {
                      "type": "object",
                      "title": "RealEstateTeamMembership",
                      "description": "a membership relationship.  Subclass of OrganizationRole",
                      "properties": {
                        "type": {
                          "type": "string",
                          "description": "a member of a real estate team",
                          "enum": [
                            "RealEstateTeamMembership"
                          ],
                          "example": "RealEstateTeamMembership",
                          "x-parser-schema-id": "<anonymous-schema-527>"
                        },
                        "roleName": {
                          "type": "string",
                          "enum": [
                            "TeamMember",
                            "TeamAdmin",
                            "TeamOwner"
                          ],
                          "x-parser-schema-id": "<anonymous-schema-528>"
                        },
                        "memberOf": {
                          "type": "string",
                          "format": "uri",
                          "example": "https://{team-id}.example.com/profile/card#me",
                          "x-parser-schema-id": "<anonymous-schema-529>"
                        },
                        "member": {
                          "type": "string",
                          "format": "uri",
                          "example": "https://{agent}.example.com/profile/card#me",
                          "x-parser-schema-id": "<anonymous-schema-530>"
                        }
                      },
                      "x-parser-schema-id": "<anonymous-schema-526>"
                    }
                  ],
                  "x-parser-schema-id": "RealEstateTeamMembership"
                }
              }
            }
          },
          "x-parser-schema-id": "<anonymous-schema-74>"
        }
      ],
      "x-parser-schema-id": "<anonymous-schema-73>"
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
                "realestate/profile#teammemberadd"
              ]
            },
            "data": {
              "x-range": "AddAction",
              "properties": {
                "type": {
                  "description": "AddAction",
                  "enum": [
                    "AddAction"
                  ]
                },
                "object": {
                  "allOf": [
                    {
                      "title": "OrganizationRole",
                      "type": "object",
                      "description": "describes a role played by a member and a group or organization.",
                      "properties": {
                        "type": {
                          "type": "string",
                          "description": "a role played by the member in the memberOf group",
                          "enum": [
                            "OrganizationRole"
                          ]
                        },
                        "roleName": {
                          "type": "string",
                          "description": "the role name",
                          "example": "Owner"
                        },
                        "memberOf": {
                          "description": "the org or group where the role is performed",
                          "type": "object",
                          "example": {
                            "type": "RealEstateOrganization",
                            "id": "http://orgid.example.com/profile/card#me"
                          }
                        },
                        "member": {
                          "description": "member object or id",
                          "type": "string",
                          "format": "uri",
                          "example": "https://memberid.example.com/profile/card#me"
                        },
                        "startDate": {
                          "type": "string",
                          "format": "date-time",
                          "description": "date the member began performing this role"
                        },
                        "endDate": {
                          "type": "string",
                          "format": "date-time",
                          "description": "date the member stopped performing the role"
                        }
                      }
                    },
                    {
                      "type": "object",
                      "title": "RealEstateTeamMembership",
                      "description": "a membership relationship.  Subclass of OrganizationRole",
                      "properties": {
                        "type": {
                          "type": "string",
                          "description": "a member of a real estate team",
                          "enum": [
                            "RealEstateTeamMembership"
                          ],
                          "example": "RealEstateTeamMembership"
                        },
                        "roleName": {
                          "type": "string",
                          "enum": [
                            "TeamMember",
                            "TeamAdmin",
                            "TeamOwner"
                          ]
                        },
                        "memberOf": {
                          "type": "string",
                          "format": "uri",
                          "example": "https://{team-id}.example.com/profile/card#me"
                        },
                        "member": {
                          "type": "string",
                          "format": "uri",
                          "example": "https://{agent}.example.com/profile/card#me"
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      ]
    },
    "schemaFormat": "application/vnd.aai.asyncapi;version=2.4.0",
    "x-parser-message-parsed": true,
    "x-parser-message-name": "<anonymous-message-7>"
  }
}
```