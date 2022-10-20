

---
title: Profile
---

{
  "id": {
    "_json": {
      "type": "string",
      "format": "uri",
      "description": "document uri",
      "example": "https://user.example.com/profile/card",
      "x-parser-schema-id": "<anonymous-schema-381>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "uri",
              "description": "document uri",
              "example": "https://user.example.com/profile/card",
              "x-parser-schema-id": "<anonymous-schema-381>"
            },
            "type": {
              "type": "string",
              "enum": [
                "ProfileDocument"
              ],
              "x-parser-schema-id": "<anonymous-schema-382>"
            },
            "#me": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "format": "uri",
                  "example": "https://user.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-384>"
                },
                "type": {
                  "type": "string",
                  "example": "SoftwareApplication",
                  "x-parser-schema-id": "<anonymous-schema-385>"
                },
                "inbox": {
                  "description": "discoverable uri to your LDN inbox",
                  "type": "string",
                  "example": "/inbox/",
                  "x-parser-schema-id": "<anonymous-schema-386>"
                },
                "outbox": {
                  "description": "discoverable uri to your LDN outbox",
                  "type": "string",
                  "example": "/outbox/",
                  "x-parser-schema-id": "<anonymous-schema-387>"
                },
                "storage": {
                  "description": "uri to your linked-data storage root",
                  "type": "string",
                  "example": "/",
                  "x-parser-schema-id": "<anonymous-schema-388>"
                },
                "preferencesFile": {
                  "description": "discoverable uri for shared application preferences",
                  "type": "string",
                  "example": "/settings/prefs",
                  "x-parser-schema-id": "<anonymous-schema-389>"
                },
                "account": {
                  "description": "discoverable solid:account root",
                  "type": "string",
                  "example": "/",
                  "x-parser-schema-id": "<anonymous-schema-390>"
                },
                "privateTypeIndex": {
                  "description": "type index for your private use",
                  "type": "string",
                  "example": "/settings/privateTypeIndex",
                  "x-parser-schema-id": "<anonymous-schema-391>"
                },
                "publicTypeIndex": {
                  "description": "shared, discoverable type index",
                  "type": "string",
                  "example": "/settings/publicTypeIndex",
                  "x-parser-schema-id": "<anonymous-schema-392>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-383>"
            }
          },
          "x-parser-schema-id": "Profile"
        },
        "options": {}
      }
    }
  },
  "type": {
    "_json": {
      "type": "string",
      "enum": [
        "ProfileDocument"
      ],
      "x-parser-schema-id": "<anonymous-schema-382>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "uri",
              "description": "document uri",
              "example": "https://user.example.com/profile/card",
              "x-parser-schema-id": "<anonymous-schema-381>"
            },
            "type": {
              "type": "string",
              "enum": [
                "ProfileDocument"
              ],
              "x-parser-schema-id": "<anonymous-schema-382>"
            },
            "#me": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "format": "uri",
                  "example": "https://user.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-384>"
                },
                "type": {
                  "type": "string",
                  "example": "SoftwareApplication",
                  "x-parser-schema-id": "<anonymous-schema-385>"
                },
                "inbox": {
                  "description": "discoverable uri to your LDN inbox",
                  "type": "string",
                  "example": "/inbox/",
                  "x-parser-schema-id": "<anonymous-schema-386>"
                },
                "outbox": {
                  "description": "discoverable uri to your LDN outbox",
                  "type": "string",
                  "example": "/outbox/",
                  "x-parser-schema-id": "<anonymous-schema-387>"
                },
                "storage": {
                  "description": "uri to your linked-data storage root",
                  "type": "string",
                  "example": "/",
                  "x-parser-schema-id": "<anonymous-schema-388>"
                },
                "preferencesFile": {
                  "description": "discoverable uri for shared application preferences",
                  "type": "string",
                  "example": "/settings/prefs",
                  "x-parser-schema-id": "<anonymous-schema-389>"
                },
                "account": {
                  "description": "discoverable solid:account root",
                  "type": "string",
                  "example": "/",
                  "x-parser-schema-id": "<anonymous-schema-390>"
                },
                "privateTypeIndex": {
                  "description": "type index for your private use",
                  "type": "string",
                  "example": "/settings/privateTypeIndex",
                  "x-parser-schema-id": "<anonymous-schema-391>"
                },
                "publicTypeIndex": {
                  "description": "shared, discoverable type index",
                  "type": "string",
                  "example": "/settings/publicTypeIndex",
                  "x-parser-schema-id": "<anonymous-schema-392>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-383>"
            }
          },
          "x-parser-schema-id": "Profile"
        },
        "options": {}
      }
    }
  },
  "#me": {
    "_json": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "format": "uri",
          "example": "https://user.example.com/profile/card#me",
          "x-parser-schema-id": "<anonymous-schema-384>"
        },
        "type": {
          "type": "string",
          "example": "SoftwareApplication",
          "x-parser-schema-id": "<anonymous-schema-385>"
        },
        "inbox": {
          "description": "discoverable uri to your LDN inbox",
          "type": "string",
          "example": "/inbox/",
          "x-parser-schema-id": "<anonymous-schema-386>"
        },
        "outbox": {
          "description": "discoverable uri to your LDN outbox",
          "type": "string",
          "example": "/outbox/",
          "x-parser-schema-id": "<anonymous-schema-387>"
        },
        "storage": {
          "description": "uri to your linked-data storage root",
          "type": "string",
          "example": "/",
          "x-parser-schema-id": "<anonymous-schema-388>"
        },
        "preferencesFile": {
          "description": "discoverable uri for shared application preferences",
          "type": "string",
          "example": "/settings/prefs",
          "x-parser-schema-id": "<anonymous-schema-389>"
        },
        "account": {
          "description": "discoverable solid:account root",
          "type": "string",
          "example": "/",
          "x-parser-schema-id": "<anonymous-schema-390>"
        },
        "privateTypeIndex": {
          "description": "type index for your private use",
          "type": "string",
          "example": "/settings/privateTypeIndex",
          "x-parser-schema-id": "<anonymous-schema-391>"
        },
        "publicTypeIndex": {
          "description": "shared, discoverable type index",
          "type": "string",
          "example": "/settings/publicTypeIndex",
          "x-parser-schema-id": "<anonymous-schema-392>"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-383>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "format": "uri",
              "description": "document uri",
              "example": "https://user.example.com/profile/card",
              "x-parser-schema-id": "<anonymous-schema-381>"
            },
            "type": {
              "type": "string",
              "enum": [
                "ProfileDocument"
              ],
              "x-parser-schema-id": "<anonymous-schema-382>"
            },
            "#me": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "format": "uri",
                  "example": "https://user.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-384>"
                },
                "type": {
                  "type": "string",
                  "example": "SoftwareApplication",
                  "x-parser-schema-id": "<anonymous-schema-385>"
                },
                "inbox": {
                  "description": "discoverable uri to your LDN inbox",
                  "type": "string",
                  "example": "/inbox/",
                  "x-parser-schema-id": "<anonymous-schema-386>"
                },
                "outbox": {
                  "description": "discoverable uri to your LDN outbox",
                  "type": "string",
                  "example": "/outbox/",
                  "x-parser-schema-id": "<anonymous-schema-387>"
                },
                "storage": {
                  "description": "uri to your linked-data storage root",
                  "type": "string",
                  "example": "/",
                  "x-parser-schema-id": "<anonymous-schema-388>"
                },
                "preferencesFile": {
                  "description": "discoverable uri for shared application preferences",
                  "type": "string",
                  "example": "/settings/prefs",
                  "x-parser-schema-id": "<anonymous-schema-389>"
                },
                "account": {
                  "description": "discoverable solid:account root",
                  "type": "string",
                  "example": "/",
                  "x-parser-schema-id": "<anonymous-schema-390>"
                },
                "privateTypeIndex": {
                  "description": "type index for your private use",
                  "type": "string",
                  "example": "/settings/privateTypeIndex",
                  "x-parser-schema-id": "<anonymous-schema-391>"
                },
                "publicTypeIndex": {
                  "description": "shared, discoverable type index",
                  "type": "string",
                  "example": "/settings/publicTypeIndex",
                  "x-parser-schema-id": "<anonymous-schema-392>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-383>"
            }
          },
          "x-parser-schema-id": "Profile"
        },
        "options": {}
      }
    }
  }
}


# Profile





### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "format": "uri",
    "description": "document uri",
    "example": "https://user.example.com/profile/card",
    "x-parser-schema-id": "<anonymous-schema-381>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "format": "uri",
            "description": "document uri",
            "example": "https://user.example.com/profile/card",
            "x-parser-schema-id": "<anonymous-schema-381>"
          },
          "type": {
            "type": "string",
            "enum": [
              "ProfileDocument"
            ],
            "x-parser-schema-id": "<anonymous-schema-382>"
          },
          "#me": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "format": "uri",
                "example": "https://user.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-384>"
              },
              "type": {
                "type": "string",
                "example": "SoftwareApplication",
                "x-parser-schema-id": "<anonymous-schema-385>"
              },
              "inbox": {
                "description": "discoverable uri to your LDN inbox",
                "type": "string",
                "example": "/inbox/",
                "x-parser-schema-id": "<anonymous-schema-386>"
              },
              "outbox": {
                "description": "discoverable uri to your LDN outbox",
                "type": "string",
                "example": "/outbox/",
                "x-parser-schema-id": "<anonymous-schema-387>"
              },
              "storage": {
                "description": "uri to your linked-data storage root",
                "type": "string",
                "example": "/",
                "x-parser-schema-id": "<anonymous-schema-388>"
              },
              "preferencesFile": {
                "description": "discoverable uri for shared application preferences",
                "type": "string",
                "example": "/settings/prefs",
                "x-parser-schema-id": "<anonymous-schema-389>"
              },
              "account": {
                "description": "discoverable solid:account root",
                "type": "string",
                "example": "/",
                "x-parser-schema-id": "<anonymous-schema-390>"
              },
              "privateTypeIndex": {
                "description": "type index for your private use",
                "type": "string",
                "example": "/settings/privateTypeIndex",
                "x-parser-schema-id": "<anonymous-schema-391>"
              },
              "publicTypeIndex": {
                "description": "shared, discoverable type index",
                "type": "string",
                "example": "/settings/publicTypeIndex",
                "x-parser-schema-id": "<anonymous-schema-392>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-383>"
          }
        },
        "x-parser-schema-id": "Profile"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "enum": [
      "ProfileDocument"
    ],
    "x-parser-schema-id": "<anonymous-schema-382>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "format": "uri",
            "description": "document uri",
            "example": "https://user.example.com/profile/card",
            "x-parser-schema-id": "<anonymous-schema-381>"
          },
          "type": {
            "type": "string",
            "enum": [
              "ProfileDocument"
            ],
            "x-parser-schema-id": "<anonymous-schema-382>"
          },
          "#me": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "format": "uri",
                "example": "https://user.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-384>"
              },
              "type": {
                "type": "string",
                "example": "SoftwareApplication",
                "x-parser-schema-id": "<anonymous-schema-385>"
              },
              "inbox": {
                "description": "discoverable uri to your LDN inbox",
                "type": "string",
                "example": "/inbox/",
                "x-parser-schema-id": "<anonymous-schema-386>"
              },
              "outbox": {
                "description": "discoverable uri to your LDN outbox",
                "type": "string",
                "example": "/outbox/",
                "x-parser-schema-id": "<anonymous-schema-387>"
              },
              "storage": {
                "description": "uri to your linked-data storage root",
                "type": "string",
                "example": "/",
                "x-parser-schema-id": "<anonymous-schema-388>"
              },
              "preferencesFile": {
                "description": "discoverable uri for shared application preferences",
                "type": "string",
                "example": "/settings/prefs",
                "x-parser-schema-id": "<anonymous-schema-389>"
              },
              "account": {
                "description": "discoverable solid:account root",
                "type": "string",
                "example": "/",
                "x-parser-schema-id": "<anonymous-schema-390>"
              },
              "privateTypeIndex": {
                "description": "type index for your private use",
                "type": "string",
                "example": "/settings/privateTypeIndex",
                "x-parser-schema-id": "<anonymous-schema-391>"
              },
              "publicTypeIndex": {
                "description": "shared, discoverable type index",
                "type": "string",
                "example": "/settings/publicTypeIndex",
                "x-parser-schema-id": "<anonymous-schema-392>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-383>"
          }
        },
        "x-parser-schema-id": "Profile"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "format": "uri",
        "example": "https://user.example.com/profile/card#me",
        "x-parser-schema-id": "<anonymous-schema-384>"
      },
      "type": {
        "type": "string",
        "example": "SoftwareApplication",
        "x-parser-schema-id": "<anonymous-schema-385>"
      },
      "inbox": {
        "description": "discoverable uri to your LDN inbox",
        "type": "string",
        "example": "/inbox/",
        "x-parser-schema-id": "<anonymous-schema-386>"
      },
      "outbox": {
        "description": "discoverable uri to your LDN outbox",
        "type": "string",
        "example": "/outbox/",
        "x-parser-schema-id": "<anonymous-schema-387>"
      },
      "storage": {
        "description": "uri to your linked-data storage root",
        "type": "string",
        "example": "/",
        "x-parser-schema-id": "<anonymous-schema-388>"
      },
      "preferencesFile": {
        "description": "discoverable uri for shared application preferences",
        "type": "string",
        "example": "/settings/prefs",
        "x-parser-schema-id": "<anonymous-schema-389>"
      },
      "account": {
        "description": "discoverable solid:account root",
        "type": "string",
        "example": "/",
        "x-parser-schema-id": "<anonymous-schema-390>"
      },
      "privateTypeIndex": {
        "description": "type index for your private use",
        "type": "string",
        "example": "/settings/privateTypeIndex",
        "x-parser-schema-id": "<anonymous-schema-391>"
      },
      "publicTypeIndex": {
        "description": "shared, discoverable type index",
        "type": "string",
        "example": "/settings/publicTypeIndex",
        "x-parser-schema-id": "<anonymous-schema-392>"
      }
    },
    "x-parser-schema-id": "<anonymous-schema-383>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "format": "uri",
            "description": "document uri",
            "example": "https://user.example.com/profile/card",
            "x-parser-schema-id": "<anonymous-schema-381>"
          },
          "type": {
            "type": "string",
            "enum": [
              "ProfileDocument"
            ],
            "x-parser-schema-id": "<anonymous-schema-382>"
          },
          "#me": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "format": "uri",
                "example": "https://user.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-384>"
              },
              "type": {
                "type": "string",
                "example": "SoftwareApplication",
                "x-parser-schema-id": "<anonymous-schema-385>"
              },
              "inbox": {
                "description": "discoverable uri to your LDN inbox",
                "type": "string",
                "example": "/inbox/",
                "x-parser-schema-id": "<anonymous-schema-386>"
              },
              "outbox": {
                "description": "discoverable uri to your LDN outbox",
                "type": "string",
                "example": "/outbox/",
                "x-parser-schema-id": "<anonymous-schema-387>"
              },
              "storage": {
                "description": "uri to your linked-data storage root",
                "type": "string",
                "example": "/",
                "x-parser-schema-id": "<anonymous-schema-388>"
              },
              "preferencesFile": {
                "description": "discoverable uri for shared application preferences",
                "type": "string",
                "example": "/settings/prefs",
                "x-parser-schema-id": "<anonymous-schema-389>"
              },
              "account": {
                "description": "discoverable solid:account root",
                "type": "string",
                "example": "/",
                "x-parser-schema-id": "<anonymous-schema-390>"
              },
              "privateTypeIndex": {
                "description": "type index for your private use",
                "type": "string",
                "example": "/settings/privateTypeIndex",
                "x-parser-schema-id": "<anonymous-schema-391>"
              },
              "publicTypeIndex": {
                "description": "shared, discoverable type index",
                "type": "string",
                "example": "/settings/publicTypeIndex",
                "x-parser-schema-id": "<anonymous-schema-392>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-383>"
          }
        },
        "x-parser-schema-id": "Profile"
      },
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;format&quot;: &quot;uri&quot;,
    &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
          },
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;SoftwareApplication&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
          },
          &quot;inbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/inbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
          },
          &quot;outbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/outbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
          },
          &quot;storage&quot;: {
            &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
          },
          &quot;preferencesFile&quot;: {
            &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/prefs&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
          },
          &quot;account&quot;: {
            &quot;description&quot;: &quot;discoverable solid:account root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
          },
          &quot;privateTypeIndex&quot;: {
            &quot;description&quot;: &quot;type index for your private use&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
          },
          &quot;publicTypeIndex&quot;: {
            &quot;description&quot;: &quot;shared, discoverable type index&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;document uri&quot;,
                &quot;example&quot;: &quot;https://user.example.com/profile/card&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-381&gt;&quot;
              },
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;ProfileDocument&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-382&gt;&quot;
              },
              &quot;#me&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
                  },
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;SoftwareApplication&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
                  },
                  &quot;inbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/inbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
                  },
                  &quot;outbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/outbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
                  },
                  &quot;storage&quot;: {
                    &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
                  },
                  &quot;preferencesFile&quot;: {
                    &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/prefs&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
                  },
                  &quot;account&quot;: {
                    &quot;description&quot;: &quot;discoverable solid:account root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
                  },
                  &quot;privateTypeIndex&quot;: {
                    &quot;description&quot;: &quot;type index for your private use&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
                  },
                  &quot;publicTypeIndex&quot;: {
                    &quot;description&quot;: &quot;shared, discoverable type index&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Profile&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = id
required = false
path = #me



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;example&quot;: &quot;SoftwareApplication&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
          },
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;SoftwareApplication&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
          },
          &quot;inbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/inbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
          },
          &quot;outbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/outbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
          },
          &quot;storage&quot;: {
            &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
          },
          &quot;preferencesFile&quot;: {
            &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/prefs&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
          },
          &quot;account&quot;: {
            &quot;description&quot;: &quot;discoverable solid:account root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
          },
          &quot;privateTypeIndex&quot;: {
            &quot;description&quot;: &quot;type index for your private use&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
          },
          &quot;publicTypeIndex&quot;: {
            &quot;description&quot;: &quot;shared, discoverable type index&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;document uri&quot;,
                &quot;example&quot;: &quot;https://user.example.com/profile/card&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-381&gt;&quot;
              },
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;ProfileDocument&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-382&gt;&quot;
              },
              &quot;#me&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
                  },
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;SoftwareApplication&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
                  },
                  &quot;inbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/inbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
                  },
                  &quot;outbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/outbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
                  },
                  &quot;storage&quot;: {
                    &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
                  },
                  &quot;preferencesFile&quot;: {
                    &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/prefs&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
                  },
                  &quot;account&quot;: {
                    &quot;description&quot;: &quot;discoverable solid:account root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
                  },
                  &quot;privateTypeIndex&quot;: {
                    &quot;description&quot;: &quot;type index for your private use&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
                  },
                  &quot;publicTypeIndex&quot;: {
                    &quot;description&quot;: &quot;shared, discoverable type index&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Profile&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = type
required = false
path = #me



prop = {
  &quot;_json&quot;: {
    &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
    &quot;type&quot;: &quot;string&quot;,
    &quot;example&quot;: &quot;/inbox/&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
          },
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;SoftwareApplication&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
          },
          &quot;inbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/inbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
          },
          &quot;outbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/outbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
          },
          &quot;storage&quot;: {
            &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
          },
          &quot;preferencesFile&quot;: {
            &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/prefs&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
          },
          &quot;account&quot;: {
            &quot;description&quot;: &quot;discoverable solid:account root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
          },
          &quot;privateTypeIndex&quot;: {
            &quot;description&quot;: &quot;type index for your private use&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
          },
          &quot;publicTypeIndex&quot;: {
            &quot;description&quot;: &quot;shared, discoverable type index&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;document uri&quot;,
                &quot;example&quot;: &quot;https://user.example.com/profile/card&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-381&gt;&quot;
              },
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;ProfileDocument&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-382&gt;&quot;
              },
              &quot;#me&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
                  },
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;SoftwareApplication&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
                  },
                  &quot;inbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/inbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
                  },
                  &quot;outbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/outbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
                  },
                  &quot;storage&quot;: {
                    &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
                  },
                  &quot;preferencesFile&quot;: {
                    &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/prefs&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
                  },
                  &quot;account&quot;: {
                    &quot;description&quot;: &quot;discoverable solid:account root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
                  },
                  &quot;privateTypeIndex&quot;: {
                    &quot;description&quot;: &quot;type index for your private use&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
                  },
                  &quot;publicTypeIndex&quot;: {
                    &quot;description&quot;: &quot;shared, discoverable type index&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Profile&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = inbox
required = false
path = #me



prop = {
  &quot;_json&quot;: {
    &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
    &quot;type&quot;: &quot;string&quot;,
    &quot;example&quot;: &quot;/outbox/&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
          },
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;SoftwareApplication&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
          },
          &quot;inbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/inbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
          },
          &quot;outbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/outbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
          },
          &quot;storage&quot;: {
            &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
          },
          &quot;preferencesFile&quot;: {
            &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/prefs&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
          },
          &quot;account&quot;: {
            &quot;description&quot;: &quot;discoverable solid:account root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
          },
          &quot;privateTypeIndex&quot;: {
            &quot;description&quot;: &quot;type index for your private use&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
          },
          &quot;publicTypeIndex&quot;: {
            &quot;description&quot;: &quot;shared, discoverable type index&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;document uri&quot;,
                &quot;example&quot;: &quot;https://user.example.com/profile/card&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-381&gt;&quot;
              },
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;ProfileDocument&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-382&gt;&quot;
              },
              &quot;#me&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
                  },
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;SoftwareApplication&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
                  },
                  &quot;inbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/inbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
                  },
                  &quot;outbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/outbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
                  },
                  &quot;storage&quot;: {
                    &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
                  },
                  &quot;preferencesFile&quot;: {
                    &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/prefs&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
                  },
                  &quot;account&quot;: {
                    &quot;description&quot;: &quot;discoverable solid:account root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
                  },
                  &quot;privateTypeIndex&quot;: {
                    &quot;description&quot;: &quot;type index for your private use&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
                  },
                  &quot;publicTypeIndex&quot;: {
                    &quot;description&quot;: &quot;shared, discoverable type index&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Profile&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = outbox
required = false
path = #me



prop = {
  &quot;_json&quot;: {
    &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
    &quot;type&quot;: &quot;string&quot;,
    &quot;example&quot;: &quot;/&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
          },
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;SoftwareApplication&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
          },
          &quot;inbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/inbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
          },
          &quot;outbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/outbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
          },
          &quot;storage&quot;: {
            &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
          },
          &quot;preferencesFile&quot;: {
            &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/prefs&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
          },
          &quot;account&quot;: {
            &quot;description&quot;: &quot;discoverable solid:account root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
          },
          &quot;privateTypeIndex&quot;: {
            &quot;description&quot;: &quot;type index for your private use&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
          },
          &quot;publicTypeIndex&quot;: {
            &quot;description&quot;: &quot;shared, discoverable type index&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;document uri&quot;,
                &quot;example&quot;: &quot;https://user.example.com/profile/card&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-381&gt;&quot;
              },
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;ProfileDocument&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-382&gt;&quot;
              },
              &quot;#me&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
                  },
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;SoftwareApplication&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
                  },
                  &quot;inbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/inbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
                  },
                  &quot;outbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/outbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
                  },
                  &quot;storage&quot;: {
                    &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
                  },
                  &quot;preferencesFile&quot;: {
                    &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/prefs&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
                  },
                  &quot;account&quot;: {
                    &quot;description&quot;: &quot;discoverable solid:account root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
                  },
                  &quot;privateTypeIndex&quot;: {
                    &quot;description&quot;: &quot;type index for your private use&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
                  },
                  &quot;publicTypeIndex&quot;: {
                    &quot;description&quot;: &quot;shared, discoverable type index&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Profile&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = storage
required = false
path = #me



prop = {
  &quot;_json&quot;: {
    &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
    &quot;type&quot;: &quot;string&quot;,
    &quot;example&quot;: &quot;/settings/prefs&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
          },
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;SoftwareApplication&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
          },
          &quot;inbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/inbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
          },
          &quot;outbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/outbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
          },
          &quot;storage&quot;: {
            &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
          },
          &quot;preferencesFile&quot;: {
            &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/prefs&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
          },
          &quot;account&quot;: {
            &quot;description&quot;: &quot;discoverable solid:account root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
          },
          &quot;privateTypeIndex&quot;: {
            &quot;description&quot;: &quot;type index for your private use&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
          },
          &quot;publicTypeIndex&quot;: {
            &quot;description&quot;: &quot;shared, discoverable type index&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;document uri&quot;,
                &quot;example&quot;: &quot;https://user.example.com/profile/card&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-381&gt;&quot;
              },
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;ProfileDocument&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-382&gt;&quot;
              },
              &quot;#me&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
                  },
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;SoftwareApplication&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
                  },
                  &quot;inbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/inbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
                  },
                  &quot;outbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/outbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
                  },
                  &quot;storage&quot;: {
                    &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
                  },
                  &quot;preferencesFile&quot;: {
                    &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/prefs&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
                  },
                  &quot;account&quot;: {
                    &quot;description&quot;: &quot;discoverable solid:account root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
                  },
                  &quot;privateTypeIndex&quot;: {
                    &quot;description&quot;: &quot;type index for your private use&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
                  },
                  &quot;publicTypeIndex&quot;: {
                    &quot;description&quot;: &quot;shared, discoverable type index&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Profile&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = preferencesFile
required = false
path = #me



prop = {
  &quot;_json&quot;: {
    &quot;description&quot;: &quot;discoverable solid:account root&quot;,
    &quot;type&quot;: &quot;string&quot;,
    &quot;example&quot;: &quot;/&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
          },
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;SoftwareApplication&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
          },
          &quot;inbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/inbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
          },
          &quot;outbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/outbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
          },
          &quot;storage&quot;: {
            &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
          },
          &quot;preferencesFile&quot;: {
            &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/prefs&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
          },
          &quot;account&quot;: {
            &quot;description&quot;: &quot;discoverable solid:account root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
          },
          &quot;privateTypeIndex&quot;: {
            &quot;description&quot;: &quot;type index for your private use&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
          },
          &quot;publicTypeIndex&quot;: {
            &quot;description&quot;: &quot;shared, discoverable type index&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;document uri&quot;,
                &quot;example&quot;: &quot;https://user.example.com/profile/card&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-381&gt;&quot;
              },
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;ProfileDocument&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-382&gt;&quot;
              },
              &quot;#me&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
                  },
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;SoftwareApplication&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
                  },
                  &quot;inbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/inbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
                  },
                  &quot;outbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/outbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
                  },
                  &quot;storage&quot;: {
                    &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
                  },
                  &quot;preferencesFile&quot;: {
                    &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/prefs&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
                  },
                  &quot;account&quot;: {
                    &quot;description&quot;: &quot;discoverable solid:account root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
                  },
                  &quot;privateTypeIndex&quot;: {
                    &quot;description&quot;: &quot;type index for your private use&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
                  },
                  &quot;publicTypeIndex&quot;: {
                    &quot;description&quot;: &quot;shared, discoverable type index&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Profile&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = account
required = false
path = #me



prop = {
  &quot;_json&quot;: {
    &quot;description&quot;: &quot;type index for your private use&quot;,
    &quot;type&quot;: &quot;string&quot;,
    &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
          },
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;SoftwareApplication&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
          },
          &quot;inbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/inbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
          },
          &quot;outbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/outbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
          },
          &quot;storage&quot;: {
            &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
          },
          &quot;preferencesFile&quot;: {
            &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/prefs&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
          },
          &quot;account&quot;: {
            &quot;description&quot;: &quot;discoverable solid:account root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
          },
          &quot;privateTypeIndex&quot;: {
            &quot;description&quot;: &quot;type index for your private use&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
          },
          &quot;publicTypeIndex&quot;: {
            &quot;description&quot;: &quot;shared, discoverable type index&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;document uri&quot;,
                &quot;example&quot;: &quot;https://user.example.com/profile/card&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-381&gt;&quot;
              },
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;ProfileDocument&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-382&gt;&quot;
              },
              &quot;#me&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
                  },
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;SoftwareApplication&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
                  },
                  &quot;inbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/inbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
                  },
                  &quot;outbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/outbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
                  },
                  &quot;storage&quot;: {
                    &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
                  },
                  &quot;preferencesFile&quot;: {
                    &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/prefs&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
                  },
                  &quot;account&quot;: {
                    &quot;description&quot;: &quot;discoverable solid:account root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
                  },
                  &quot;privateTypeIndex&quot;: {
                    &quot;description&quot;: &quot;type index for your private use&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
                  },
                  &quot;publicTypeIndex&quot;: {
                    &quot;description&quot;: &quot;shared, discoverable type index&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Profile&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = privateTypeIndex
required = false
path = #me



prop = {
  &quot;_json&quot;: {
    &quot;description&quot;: &quot;shared, discoverable type index&quot;,
    &quot;type&quot;: &quot;string&quot;,
    &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
          },
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;SoftwareApplication&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
          },
          &quot;inbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/inbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
          },
          &quot;outbox&quot;: {
            &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/outbox/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
          },
          &quot;storage&quot;: {
            &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
          },
          &quot;preferencesFile&quot;: {
            &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/prefs&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
          },
          &quot;account&quot;: {
            &quot;description&quot;: &quot;discoverable solid:account root&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
          },
          &quot;privateTypeIndex&quot;: {
            &quot;description&quot;: &quot;type index for your private use&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
          },
          &quot;publicTypeIndex&quot;: {
            &quot;description&quot;: &quot;shared, discoverable type index&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;document uri&quot;,
                &quot;example&quot;: &quot;https://user.example.com/profile/card&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-381&gt;&quot;
              },
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;ProfileDocument&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-382&gt;&quot;
              },
              &quot;#me&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-384&gt;&quot;
                  },
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;SoftwareApplication&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-385&gt;&quot;
                  },
                  &quot;inbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/inbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-386&gt;&quot;
                  },
                  &quot;outbox&quot;: {
                    &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/outbox/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-387&gt;&quot;
                  },
                  &quot;storage&quot;: {
                    &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-388&gt;&quot;
                  },
                  &quot;preferencesFile&quot;: {
                    &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/prefs&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-389&gt;&quot;
                  },
                  &quot;account&quot;: {
                    &quot;description&quot;: &quot;discoverable solid:account root&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-390&gt;&quot;
                  },
                  &quot;privateTypeIndex&quot;: {
                    &quot;description&quot;: &quot;type index for your private use&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-391&gt;&quot;
                  },
                  &quot;publicTypeIndex&quot;: {
                    &quot;description&quot;: &quot;shared, discoverable type index&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-392&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-383&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Profile&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = publicTypeIndex
required = false
path = #me









### Example

```json
{
  "id": "https://user.example.com/profile/card",
  "type": "ProfileDocument",
  "#me": {
    "id": "https://user.example.com/profile/card#me",
    "type": "SoftwareApplication",
    "inbox": "/inbox/",
    "outbox": "/outbox/",
    "storage": "/",
    "preferencesFile": "/settings/prefs",
    "account": "/",
    "privateTypeIndex": "/settings/privateTypeIndex",
    "publicTypeIndex": "/settings/publicTypeIndex"
  }
}
```

