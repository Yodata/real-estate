# marketing#memberremove

```json 
{
  "_json": {
    "messageId": "marketing#memberremove",
    "x-scope": "realestate/marketingprogram#",
    "summary": "a program member was removed by the agent",
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
                "realestate/marketingprogram#memberremove"
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
                      "description": "an object (object) is removed by a user (agent), optionally from a collection (targetCollection)",
                      "properties": {
                        "type": {
                          "type": "string",
                          "enum": [
                            "RemoveAction"
                          ]
                        },
                        "agent": {
                          "example": "https://{user-who-removed-the-item}.com/profile/card#me"
                        },
                        "object": {
                          "description": "the item removed"
                        },
                        "targetCollection": {
                          "description": "the collection from which the item is being removed"
                        }
                      }
                    }
                  ]
                },
                {
                  "properties": {
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
                          "title": "ProgramMembership",
                          "description": "describes membership relation between a member (Person) and a MarketingProgram",
                          "properties": {
                            "type": {
                              "enum": [
                                "ProgramMembership"
                              ]
                            },
                            "member": {
                              "type": "object",
                              "x-range": "Contact",
                              "description": "a contact",
                              "example": {
                                "type": "Contact",
                                "name": "Bruce Wayne",
                                "givenName": "Bruce",
                                "familyName": "Wayne",
                                "jobTitle": "Batman",
                                "contactPoint": [
                                  {
                                    "type": "ContactPoint",
                                    "name": "Mobile Phone",
                                    "telephone": "888.GET-BATMAN"
                                  },
                                  {
                                    "type": "ContactPoint",
                                    "name": "Email",
                                    "email": "batman@example.com"
                                  }
                                ],
                                "address": [
                                  {
                                    "type": "PostalAddress",
                                    "name": "Home",
                                    "streetAddress": "1007 Mountain Gate Rd",
                                    "postOfficeBoxNumber": "Box 1234",
                                    "addressRegion": "New Jersey",
                                    "addressLocality": "Gotham City",
                                    "postalCode": "10010",
                                    "addressCountry": "USA"
                                  }
                                ],
                                "birthDate": "2019-07-09",
                                "leadOwner": {
                                  "type": "RealEstateOrganization",
                                  "id": "https://{lead-owner}.example.com/profile/card#me"
                                },
                                "leadSource": {
                                  "type": "RealEstateWebsite",
                                  "url": "https://agentwebsite.example.com"
                                }
                              }
                            },
                            "memberOf": {
                              "x-range": "MarketingProgram"
                            }
                          },
                          "x-parser-schema-id": "<anonymous-schema-393>"
                        }
                      ],
                      "x-parser-schema-id": "ProgramMembership"
                    }
                  }
                },
                {
                  "properties": {
                    "object": {
                      "x-range": "ProgramMembership",
                      "example": {
                        "type": "ProgramMembership",
                        "role": "Owner",
                        "member": {
                          "type": "Person",
                          "name": "Edgardo Fisher",
                          "identifier": {
                            "aceid": "816fd12f-6479-4f45-b26f-0a2ba54972b6"
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "properties": {
                    "targetCollection": {
                      "x-range": "MarketingProgram",
                      "example": {
                        "type": "MarketingProgram",
                        "name": "Market Activity Report 508 Homewood Ave",
                        "identifier": {
                          "aceid": "4ef1469a-1fc4-43af-96b1-0e4402ccc46e",
                          "buysideid": "83271c2a-c35e-44e9-b790-5389f2c11b17"
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "x-parser-schema-id": "<anonymous-schema-58>"
        }
      ],
      "x-parser-schema-id": "<anonymous-schema-57>"
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
                "realestate/marketingprogram#memberremove"
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
                      "description": "an object (object) is removed by a user (agent), optionally from a collection (targetCollection)",
                      "properties": {
                        "type": {
                          "type": "string",
                          "enum": [
                            "RemoveAction"
                          ]
                        },
                        "agent": {
                          "example": "https://{user-who-removed-the-item}.com/profile/card#me"
                        },
                        "object": {
                          "description": "the item removed"
                        },
                        "targetCollection": {
                          "description": "the collection from which the item is being removed"
                        }
                      }
                    }
                  ]
                },
                {
                  "properties": {
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
                          "title": "ProgramMembership",
                          "description": "describes membership relation between a member (Person) and a MarketingProgram",
                          "properties": {
                            "type": {
                              "enum": [
                                "ProgramMembership"
                              ]
                            },
                            "member": {
                              "type": "object",
                              "x-range": "Contact",
                              "description": "a contact",
                              "example": {
                                "type": "Contact",
                                "name": "Bruce Wayne",
                                "givenName": "Bruce",
                                "familyName": "Wayne",
                                "jobTitle": "Batman",
                                "contactPoint": [
                                  {
                                    "type": "ContactPoint",
                                    "name": "Mobile Phone",
                                    "telephone": "888.GET-BATMAN"
                                  },
                                  {
                                    "type": "ContactPoint",
                                    "name": "Email",
                                    "email": "batman@example.com"
                                  }
                                ],
                                "address": [
                                  {
                                    "type": "PostalAddress",
                                    "name": "Home",
                                    "streetAddress": "1007 Mountain Gate Rd",
                                    "postOfficeBoxNumber": "Box 1234",
                                    "addressRegion": "New Jersey",
                                    "addressLocality": "Gotham City",
                                    "postalCode": "10010",
                                    "addressCountry": "USA"
                                  }
                                ],
                                "birthDate": "2019-07-09",
                                "leadOwner": {
                                  "type": "RealEstateOrganization",
                                  "id": "https://{lead-owner}.example.com/profile/card#me"
                                },
                                "leadSource": {
                                  "type": "RealEstateWebsite",
                                  "url": "https://agentwebsite.example.com"
                                }
                              }
                            },
                            "memberOf": {
                              "x-range": "MarketingProgram"
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "properties": {
                    "object": {
                      "x-range": "ProgramMembership",
                      "example": {
                        "type": "ProgramMembership",
                        "role": "Owner",
                        "member": {
                          "type": "Person",
                          "name": "Edgardo Fisher",
                          "identifier": {
                            "aceid": "816fd12f-6479-4f45-b26f-0a2ba54972b6"
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "properties": {
                    "targetCollection": {
                      "x-range": "MarketingProgram",
                      "example": {
                        "type": "MarketingProgram",
                        "name": "Market Activity Report 508 Homewood Ave",
                        "identifier": {
                          "aceid": "4ef1469a-1fc4-43af-96b1-0e4402ccc46e",
                          "buysideid": "83271c2a-c35e-44e9-b790-5389f2c11b17"
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
    "x-parser-message-name": "<anonymous-message-5>"
  }
}
```