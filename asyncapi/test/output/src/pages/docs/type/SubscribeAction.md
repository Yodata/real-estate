

---
title: SubscribeAction
---

{}


# SubscribeAction





### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
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
  },
  "options": {}
}



prop = {
  &quot;_json&quot;: {
    &quot;title&quot;: &quot;Action&quot;,
    &quot;type&quot;: &quot;object&quot;,
    &quot;description&quot;: &quot;An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.&quot;,
    &quot;required&quot;: [
      &quot;type&quot;
    ],
    &quot;properties&quot;: {
      &quot;type&quot;: {
        &quot;description&quot;: &quot;the action type&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-121&gt;&quot;
      },
      &quot;object&quot;: {
        &quot;description&quot;: &quot;item on which the action is carried out&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-122&gt;&quot;
      }
    },
    &quot;externalDocs&quot;: {
      &quot;description&quot;: &quot;schema.org/Action&quot;,
      &quot;url&quot;: &quot;https://schema.org/Action&quot;
    },
    &quot;x-parser-schema-id&quot;: &quot;Action&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;allOf&quot;: [
          {
            &quot;title&quot;: &quot;Action&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.&quot;,
            &quot;required&quot;: [
              &quot;type&quot;
            ],
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;description&quot;: &quot;the action type&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-121&gt;&quot;
              },
              &quot;object&quot;: {
                &quot;description&quot;: &quot;item on which the action is carried out&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-122&gt;&quot;
              }
            },
            &quot;externalDocs&quot;: {
              &quot;description&quot;: &quot;schema.org/Action&quot;,
              &quot;url&quot;: &quot;https://schema.org/Action&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;Action&quot;
          },
          {
            &quot;x-range&quot;: &quot;SubscribeAction&quot;,
            &quot;description&quot;: &quot;the consumer (agent) has subscribed to content from the participant with roleName SubscriptionProvider.&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;enum&quot;: [
                  &quot;SubscribeAction&quot;
                ]
              },
              &quot;agent&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the subscriber&quot;,
                &quot;x-range&quot;: &quot;Contact&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;Contact&quot;,
                  &quot;email&quot;: &quot;bob@example.com&quot;,
                  &quot;identifier&quot;: {
                    &quot;hsfconsumerid&quot;: &quot;D9AB8127-7D19-4C67-A514-9209F22F4511&quot;
                  }
                }
              },
              &quot;participant&quot;: {
                &quot;description&quot;: &quot;the subscription provider, an Agent, Team, Office or Organization&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateAgent&quot;,
                  &quot;RealEstateTeam&quot;,
                  &quot;RealEstateOffice&quot;,
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;type&quot;: &quot;array&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;properties&quot;: {
                    &quot;roleName&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;enum&quot;: [
                        &quot;SubscriptionProvider&quot;
                      ]
                    },
                    &quot;id&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;format&quot;: &quot;uri&quot;,
                      &quot;example&quot;: &quot;https://12345.example.com/profile/card#me&quot;
                    },
                    &quot;additionalProperty&quot;: {
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;properties&quot;: {
                        &quot;isCompanyQueue&quot;: {
                          &quot;type&quot;: &quot;boolean&quot;
                        }
                      }
                    }
                  }
                }
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-611&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;SubscribeAction&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;1&gt;
required = 
path = SubscribeAction




prop = {
  &quot;_json&quot;: {
    &quot;x-range&quot;: &quot;SubscribeAction&quot;,
    &quot;description&quot;: &quot;the consumer (agent) has subscribed to content from the participant with roleName SubscriptionProvider.&quot;,
    &quot;properties&quot;: {
      &quot;type&quot;: {
        &quot;enum&quot;: [
          &quot;SubscribeAction&quot;
        ]
      },
      &quot;agent&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;the subscriber&quot;,
        &quot;x-range&quot;: &quot;Contact&quot;,
        &quot;example&quot;: {
          &quot;type&quot;: &quot;Contact&quot;,
          &quot;email&quot;: &quot;bob@example.com&quot;,
          &quot;identifier&quot;: {
            &quot;hsfconsumerid&quot;: &quot;D9AB8127-7D19-4C67-A514-9209F22F4511&quot;
          }
        }
      },
      &quot;participant&quot;: {
        &quot;description&quot;: &quot;the subscription provider, an Agent, Team, Office or Organization&quot;,
        &quot;x-range&quot;: [
          &quot;RealEstateAgent&quot;,
          &quot;RealEstateTeam&quot;,
          &quot;RealEstateOffice&quot;,
          &quot;RealEstateOrganization&quot;
        ],
        &quot;type&quot;: &quot;array&quot;,
        &quot;items&quot;: {
          &quot;type&quot;: &quot;object&quot;,
          &quot;properties&quot;: {
            &quot;roleName&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;enum&quot;: [
                &quot;SubscriptionProvider&quot;
              ]
            },
            &quot;id&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;format&quot;: &quot;uri&quot;,
              &quot;example&quot;: &quot;https://12345.example.com/profile/card#me&quot;
            },
            &quot;additionalProperty&quot;: {
              &quot;type&quot;: &quot;object&quot;,
              &quot;properties&quot;: {
                &quot;isCompanyQueue&quot;: {
                  &quot;type&quot;: &quot;boolean&quot;
                }
              }
            }
          }
        }
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-611&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;allOf&quot;: [
          {
            &quot;title&quot;: &quot;Action&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.&quot;,
            &quot;required&quot;: [
              &quot;type&quot;
            ],
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;description&quot;: &quot;the action type&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-121&gt;&quot;
              },
              &quot;object&quot;: {
                &quot;description&quot;: &quot;item on which the action is carried out&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-122&gt;&quot;
              }
            },
            &quot;externalDocs&quot;: {
              &quot;description&quot;: &quot;schema.org/Action&quot;,
              &quot;url&quot;: &quot;https://schema.org/Action&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;Action&quot;
          },
          {
            &quot;x-range&quot;: &quot;SubscribeAction&quot;,
            &quot;description&quot;: &quot;the consumer (agent) has subscribed to content from the participant with roleName SubscriptionProvider.&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;enum&quot;: [
                  &quot;SubscribeAction&quot;
                ]
              },
              &quot;agent&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the subscriber&quot;,
                &quot;x-range&quot;: &quot;Contact&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;Contact&quot;,
                  &quot;email&quot;: &quot;bob@example.com&quot;,
                  &quot;identifier&quot;: {
                    &quot;hsfconsumerid&quot;: &quot;D9AB8127-7D19-4C67-A514-9209F22F4511&quot;
                  }
                }
              },
              &quot;participant&quot;: {
                &quot;description&quot;: &quot;the subscription provider, an Agent, Team, Office or Organization&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateAgent&quot;,
                  &quot;RealEstateTeam&quot;,
                  &quot;RealEstateOffice&quot;,
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;type&quot;: &quot;array&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;properties&quot;: {
                    &quot;roleName&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;enum&quot;: [
                        &quot;SubscriptionProvider&quot;
                      ]
                    },
                    &quot;id&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;format&quot;: &quot;uri&quot;,
                      &quot;example&quot;: &quot;https://12345.example.com/profile/card#me&quot;
                    },
                    &quot;additionalProperty&quot;: {
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;properties&quot;: {
                        &quot;isCompanyQueue&quot;: {
                          &quot;type&quot;: &quot;boolean&quot;
                        }
                      }
                    }
                  }
                }
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-611&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;SubscribeAction&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;2&gt;
required = 
path = SubscribeAction











### Example

```json
{
  "type": "SubscribeAction",
  "object": null,
  "agent": {
    "type": "Contact",
    "email": "bob@example.com",
    "identifier": {
      "hsfconsumerid": "D9AB8127-7D19-4C67-A514-9209F22F4511"
    }
  },
  "participant": [
    {
      "roleName": "SubscriptionProvider",
      "id": "https://12345.example.com/profile/card#me",
      "additionalProperty": {
        "isCompanyQueue": true
      }
    }
  ]
}
```

