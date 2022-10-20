

---
title: ApplicationProfile
---

{}


# ApplicationProfile





### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "allOf": [
      {
        "allOf": [
          {
            "type": "object",
            "required": [
              "type"
            ],
            "properties": {
              "type": {
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-144>"
              }
            },
            "x-parser-schema-id": "Thing"
          },
          {
            "type": "object",
            "description": "a solid profile document",
            "required": [
              "id",
              "type",
              "primaryTopic"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uri",
                "example": "https://user.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-146>"
              },
              "type": {
                "type": "string",
                "enum": [
                  "PersonalProfileDocument"
                ],
                "x-parser-schema-id": "<anonymous-schema-147>"
              },
              "primaryTopic": {
                "type": "string",
                "default": "#me",
                "x-parser-schema-id": "<anonymous-schema-148>"
              },
              "#me": {
                "type": "object",
                "required": [
                  "type"
                ],
                "properties": {
                  "type": {
                    "type": "string",
                    "example": "SoftwareApplication",
                    "x-parser-schema-id": "<anonymous-schema-150>"
                  },
                  "inbox": {
                    "description": "URI to your Linked-Data-Notifications Inbox",
                    "type": "string",
                    "example": "/inbox/",
                    "default": "/inbox/",
                    "x-parser-schema-id": "<anonymous-schema-151>"
                  },
                  "outbox": {
                    "description": "URI to your Linked-Data-Notifications Outbox",
                    "type": "string",
                    "example": "/outbox/",
                    "default": "/outbox/",
                    "x-parser-schema-id": "<anonymous-schema-152>"
                  },
                  "storage": {
                    "description": "URI to your storage root.",
                    "type": "string",
                    "example": "/",
                    "default": "/",
                    "x-parser-schema-id": "<anonymous-schema-153>"
                  },
                  "preferencesFile": {
                    "description": "URI to shared application prefs.",
                    "type": "string",
                    "example": "/settings/prefs",
                    "x-parser-schema-id": "<anonymous-schema-154>"
                  },
                  "account": {
                    "description": "discoverable solid:account root",
                    "type": "string",
                    "example": "/",
                    "x-parser-schema-id": "<anonymous-schema-155>"
                  },
                  "privateTypeIndex": {
                    "description": "type index for your private use",
                    "type": "string",
                    "example": "/settings/privateTypeIndex",
                    "x-parser-schema-id": "<anonymous-schema-156>"
                  },
                  "publicTypeIndex": {
                    "description": "shared, discoverable type index",
                    "type": "string",
                    "example": "/settings/publicTypeIndex",
                    "x-parser-schema-id": "<anonymous-schema-157>"
                  },
                  "permissions": {
                    "description": "Permissions required by an linked-data application or service.",
                    "x-enumeration": [
                      {
                        "name": "profile:read",
                        "description": "grantee can read the owner's profile data."
                      },
                      {
                        "name": "profile:write",
                        "description": "grantee can modify the owner's profile data."
                      },
                      {
                        "name": "lead",
                        "description": "grantee can read, write and modify leads."
                      },
                      {
                        "name": "contact",
                        "description": "grantee can read, write and modify contacts."
                      },
                      {
                        "name": "website:events",
                        "description": "grantee can read, write and modify website events."
                      }
                    ],
                    "type": "array",
                    "items": {
                      "type": "object",
                      "enum": [
                        "profile:read",
                        "profile:write",
                        "lead",
                        "contact",
                        "website:events"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-159>"
                    },
                    "x-parser-schema-id": "<anonymous-schema-158>"
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-149>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-145>"
          }
        ],
        "x-parser-schema-id": "<anonymous-schema-143>"
      },
      {
        "type": "object",
        "required": [
          "id",
          "type",
          "inbox",
          "outbox"
        ],
        "properties": {
          "id": {
            "type": "string",
            "format": "uri",
            "example": "https://user.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-161>"
          },
          "type": {
            "type": "string",
            "example": "SoftwareApplication",
            "x-parser-schema-id": "<anonymous-schema-162>"
          },
          "inbox": {
            "description": "discoverable uri to your LDN inbox",
            "type": "string",
            "example": "/inbox/",
            "x-parser-schema-id": "<anonymous-schema-163>"
          },
          "outbox": {
            "description": "discoverable uri to your LDN outbox",
            "type": "string",
            "example": "/outbox/",
            "x-parser-schema-id": "<anonymous-schema-164>"
          },
          "storage": {
            "description": "uri to your linked-data storage root",
            "type": "string",
            "example": "/",
            "x-parser-schema-id": "<anonymous-schema-165>"
          },
          "preferencesFile": {
            "description": "discoverable uri for shared application preferences",
            "type": "string",
            "example": "/settings/prefs",
            "x-parser-schema-id": "<anonymous-schema-166>"
          },
          "account": {
            "description": "discoverable solid:account root",
            "type": "string",
            "example": "/",
            "x-parser-schema-id": "<anonymous-schema-167>"
          },
          "privateTypeIndex": {
            "description": "type index for your private use",
            "type": "string",
            "example": "/settings/privateTypeIndex",
            "x-parser-schema-id": "<anonymous-schema-168>"
          },
          "publicTypeIndex": {
            "description": "shared, discoverable type index",
            "type": "string",
            "example": "/settings/publicTypeIndex",
            "x-parser-schema-id": "<anonymous-schema-169>"
          },
          "permissions": {
            "description": "the subscription types required by your service.",
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "profile:read",
                "contact",
                "lead",
                "listing"
              ],
              "x-parser-schema-id": "<anonymous-schema-171>"
            },
            "x-parser-schema-id": "<anonymous-schema-170>"
          }
        },
        "x-parser-schema-id": "<anonymous-schema-160>"
      }
    ],
    "x-parser-schema-id": "ApplicationProfile"
  },
  "options": {}
}



prop = {
  &quot;_json&quot;: {
    &quot;allOf&quot;: [
      {
        &quot;type&quot;: &quot;object&quot;,
        &quot;required&quot;: [
          &quot;type&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
      },
      {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;a solid profile document&quot;,
        &quot;required&quot;: [
          &quot;id&quot;,
          &quot;type&quot;,
          &quot;primaryTopic&quot;
        ],
        &quot;properties&quot;: {
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-146&gt;&quot;
          },
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;enum&quot;: [
              &quot;PersonalProfileDocument&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-147&gt;&quot;
          },
          &quot;primaryTopic&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;default&quot;: &quot;#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-148&gt;&quot;
          },
          &quot;#me&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;required&quot;: [
              &quot;type&quot;
            ],
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;SoftwareApplication&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-150&gt;&quot;
              },
              &quot;inbox&quot;: {
                &quot;description&quot;: &quot;URI to your Linked-Data-Notifications Inbox&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/inbox/&quot;,
                &quot;default&quot;: &quot;/inbox/&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-151&gt;&quot;
              },
              &quot;outbox&quot;: {
                &quot;description&quot;: &quot;URI to your Linked-Data-Notifications Outbox&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/outbox/&quot;,
                &quot;default&quot;: &quot;/outbox/&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-152&gt;&quot;
              },
              &quot;storage&quot;: {
                &quot;description&quot;: &quot;URI to your storage root.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/&quot;,
                &quot;default&quot;: &quot;/&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-153&gt;&quot;
              },
              &quot;preferencesFile&quot;: {
                &quot;description&quot;: &quot;URI to shared application prefs.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/settings/prefs&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-154&gt;&quot;
              },
              &quot;account&quot;: {
                &quot;description&quot;: &quot;discoverable solid:account root&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-155&gt;&quot;
              },
              &quot;privateTypeIndex&quot;: {
                &quot;description&quot;: &quot;type index for your private use&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-156&gt;&quot;
              },
              &quot;publicTypeIndex&quot;: {
                &quot;description&quot;: &quot;shared, discoverable type index&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-157&gt;&quot;
              },
              &quot;permissions&quot;: {
                &quot;description&quot;: &quot;Permissions required by an linked-data application or service.&quot;,
                &quot;x-enumeration&quot;: [
                  {
                    &quot;name&quot;: &quot;profile:read&quot;,
                    &quot;description&quot;: &quot;grantee can read the owner&#39;s profile data.&quot;
                  },
                  {
                    &quot;name&quot;: &quot;profile:write&quot;,
                    &quot;description&quot;: &quot;grantee can modify the owner&#39;s profile data.&quot;
                  },
                  {
                    &quot;name&quot;: &quot;lead&quot;,
                    &quot;description&quot;: &quot;grantee can read, write and modify leads.&quot;
                  },
                  {
                    &quot;name&quot;: &quot;contact&quot;,
                    &quot;description&quot;: &quot;grantee can read, write and modify contacts.&quot;
                  },
                  {
                    &quot;name&quot;: &quot;website:events&quot;,
                    &quot;description&quot;: &quot;grantee can read, write and modify website events.&quot;
                  }
                ],
                &quot;type&quot;: &quot;array&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;enum&quot;: [
                    &quot;profile:read&quot;,
                    &quot;profile:write&quot;,
                    &quot;lead&quot;,
                    &quot;contact&quot;,
                    &quot;website:events&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-159&gt;&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-158&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-149&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-145&gt;&quot;
      }
    ],
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-143&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;allOf&quot;: [
          {
            &quot;allOf&quot;: [
              {
                &quot;type&quot;: &quot;object&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
              },
              {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a solid profile document&quot;,
                &quot;required&quot;: [
                  &quot;id&quot;,
                  &quot;type&quot;,
                  &quot;primaryTopic&quot;
                ],
                &quot;properties&quot;: {
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-146&gt;&quot;
                  },
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;PersonalProfileDocument&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-147&gt;&quot;
                  },
                  &quot;primaryTopic&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;default&quot;: &quot;#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-148&gt;&quot;
                  },
                  &quot;#me&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;required&quot;: [
                      &quot;type&quot;
                    ],
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: &quot;SoftwareApplication&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-150&gt;&quot;
                      },
                      &quot;inbox&quot;: {
                        &quot;description&quot;: &quot;URI to your Linked-Data-Notifications Inbox&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: &quot;/inbox/&quot;,
                        &quot;default&quot;: &quot;/inbox/&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-151&gt;&quot;
                      },
                      &quot;outbox&quot;: {
                        &quot;description&quot;: &quot;URI to your Linked-Data-Notifications Outbox&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: &quot;/outbox/&quot;,
                        &quot;default&quot;: &quot;/outbox/&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-152&gt;&quot;
                      },
                      &quot;storage&quot;: {
                        &quot;description&quot;: &quot;URI to your storage root.&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: &quot;/&quot;,
                        &quot;default&quot;: &quot;/&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-153&gt;&quot;
                      },
                      &quot;preferencesFile&quot;: {
                        &quot;description&quot;: &quot;URI to shared application prefs.&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: &quot;/settings/prefs&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-154&gt;&quot;
                      },
                      &quot;account&quot;: {
                        &quot;description&quot;: &quot;discoverable solid:account root&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: &quot;/&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-155&gt;&quot;
                      },
                      &quot;privateTypeIndex&quot;: {
                        &quot;description&quot;: &quot;type index for your private use&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-156&gt;&quot;
                      },
                      &quot;publicTypeIndex&quot;: {
                        &quot;description&quot;: &quot;shared, discoverable type index&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-157&gt;&quot;
                      },
                      &quot;permissions&quot;: {
                        &quot;description&quot;: &quot;Permissions required by an linked-data application or service.&quot;,
                        &quot;x-enumeration&quot;: [
                          {
                            &quot;name&quot;: &quot;profile:read&quot;,
                            &quot;description&quot;: &quot;grantee can read the owner&#39;s profile data.&quot;
                          },
                          {
                            &quot;name&quot;: &quot;profile:write&quot;,
                            &quot;description&quot;: &quot;grantee can modify the owner&#39;s profile data.&quot;
                          },
                          {
                            &quot;name&quot;: &quot;lead&quot;,
                            &quot;description&quot;: &quot;grantee can read, write and modify leads.&quot;
                          },
                          {
                            &quot;name&quot;: &quot;contact&quot;,
                            &quot;description&quot;: &quot;grantee can read, write and modify contacts.&quot;
                          },
                          {
                            &quot;name&quot;: &quot;website:events&quot;,
                            &quot;description&quot;: &quot;grantee can read, write and modify website events.&quot;
                          }
                        ],
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;items&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;enum&quot;: [
                            &quot;profile:read&quot;,
                            &quot;profile:write&quot;,
                            &quot;lead&quot;,
                            &quot;contact&quot;,
                            &quot;website:events&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-159&gt;&quot;
                        },
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-158&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-149&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-145&gt;&quot;
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-143&gt;&quot;
          },
          {
            &quot;type&quot;: &quot;object&quot;,
            &quot;required&quot;: [
              &quot;id&quot;,
              &quot;type&quot;,
              &quot;inbox&quot;,
              &quot;outbox&quot;
            ],
            &quot;properties&quot;: {
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-161&gt;&quot;
              },
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;SoftwareApplication&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-162&gt;&quot;
              },
              &quot;inbox&quot;: {
                &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/inbox/&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-163&gt;&quot;
              },
              &quot;outbox&quot;: {
                &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/outbox/&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-164&gt;&quot;
              },
              &quot;storage&quot;: {
                &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-165&gt;&quot;
              },
              &quot;preferencesFile&quot;: {
                &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/settings/prefs&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-166&gt;&quot;
              },
              &quot;account&quot;: {
                &quot;description&quot;: &quot;discoverable solid:account root&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-167&gt;&quot;
              },
              &quot;privateTypeIndex&quot;: {
                &quot;description&quot;: &quot;type index for your private use&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-168&gt;&quot;
              },
              &quot;publicTypeIndex&quot;: {
                &quot;description&quot;: &quot;shared, discoverable type index&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-169&gt;&quot;
              },
              &quot;permissions&quot;: {
                &quot;description&quot;: &quot;the subscription types required by your service.&quot;,
                &quot;type&quot;: &quot;array&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;enum&quot;: [
                    &quot;profile:read&quot;,
                    &quot;contact&quot;,
                    &quot;lead&quot;,
                    &quot;listing&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-171&gt;&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-170&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-160&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;ApplicationProfile&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;1&gt;
required = 
path = ApplicationProfile




prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;object&quot;,
    &quot;required&quot;: [
      &quot;id&quot;,
      &quot;type&quot;,
      &quot;inbox&quot;,
      &quot;outbox&quot;
    ],
    &quot;properties&quot;: {
      &quot;id&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;format&quot;: &quot;uri&quot;,
        &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-161&gt;&quot;
      },
      &quot;type&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;example&quot;: &quot;SoftwareApplication&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-162&gt;&quot;
      },
      &quot;inbox&quot;: {
        &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;example&quot;: &quot;/inbox/&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-163&gt;&quot;
      },
      &quot;outbox&quot;: {
        &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;example&quot;: &quot;/outbox/&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-164&gt;&quot;
      },
      &quot;storage&quot;: {
        &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;example&quot;: &quot;/&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-165&gt;&quot;
      },
      &quot;preferencesFile&quot;: {
        &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;example&quot;: &quot;/settings/prefs&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-166&gt;&quot;
      },
      &quot;account&quot;: {
        &quot;description&quot;: &quot;discoverable solid:account root&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;example&quot;: &quot;/&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-167&gt;&quot;
      },
      &quot;privateTypeIndex&quot;: {
        &quot;description&quot;: &quot;type index for your private use&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-168&gt;&quot;
      },
      &quot;publicTypeIndex&quot;: {
        &quot;description&quot;: &quot;shared, discoverable type index&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-169&gt;&quot;
      },
      &quot;permissions&quot;: {
        &quot;description&quot;: &quot;the subscription types required by your service.&quot;,
        &quot;type&quot;: &quot;array&quot;,
        &quot;items&quot;: {
          &quot;type&quot;: &quot;string&quot;,
          &quot;enum&quot;: [
            &quot;profile:read&quot;,
            &quot;contact&quot;,
            &quot;lead&quot;,
            &quot;listing&quot;
          ],
          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-171&gt;&quot;
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-170&gt;&quot;
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-160&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;allOf&quot;: [
          {
            &quot;allOf&quot;: [
              {
                &quot;type&quot;: &quot;object&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
              },
              {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a solid profile document&quot;,
                &quot;required&quot;: [
                  &quot;id&quot;,
                  &quot;type&quot;,
                  &quot;primaryTopic&quot;
                ],
                &quot;properties&quot;: {
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-146&gt;&quot;
                  },
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;PersonalProfileDocument&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-147&gt;&quot;
                  },
                  &quot;primaryTopic&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;default&quot;: &quot;#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-148&gt;&quot;
                  },
                  &quot;#me&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;required&quot;: [
                      &quot;type&quot;
                    ],
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: &quot;SoftwareApplication&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-150&gt;&quot;
                      },
                      &quot;inbox&quot;: {
                        &quot;description&quot;: &quot;URI to your Linked-Data-Notifications Inbox&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: &quot;/inbox/&quot;,
                        &quot;default&quot;: &quot;/inbox/&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-151&gt;&quot;
                      },
                      &quot;outbox&quot;: {
                        &quot;description&quot;: &quot;URI to your Linked-Data-Notifications Outbox&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: &quot;/outbox/&quot;,
                        &quot;default&quot;: &quot;/outbox/&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-152&gt;&quot;
                      },
                      &quot;storage&quot;: {
                        &quot;description&quot;: &quot;URI to your storage root.&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: &quot;/&quot;,
                        &quot;default&quot;: &quot;/&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-153&gt;&quot;
                      },
                      &quot;preferencesFile&quot;: {
                        &quot;description&quot;: &quot;URI to shared application prefs.&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: &quot;/settings/prefs&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-154&gt;&quot;
                      },
                      &quot;account&quot;: {
                        &quot;description&quot;: &quot;discoverable solid:account root&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: &quot;/&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-155&gt;&quot;
                      },
                      &quot;privateTypeIndex&quot;: {
                        &quot;description&quot;: &quot;type index for your private use&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-156&gt;&quot;
                      },
                      &quot;publicTypeIndex&quot;: {
                        &quot;description&quot;: &quot;shared, discoverable type index&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-157&gt;&quot;
                      },
                      &quot;permissions&quot;: {
                        &quot;description&quot;: &quot;Permissions required by an linked-data application or service.&quot;,
                        &quot;x-enumeration&quot;: [
                          {
                            &quot;name&quot;: &quot;profile:read&quot;,
                            &quot;description&quot;: &quot;grantee can read the owner&#39;s profile data.&quot;
                          },
                          {
                            &quot;name&quot;: &quot;profile:write&quot;,
                            &quot;description&quot;: &quot;grantee can modify the owner&#39;s profile data.&quot;
                          },
                          {
                            &quot;name&quot;: &quot;lead&quot;,
                            &quot;description&quot;: &quot;grantee can read, write and modify leads.&quot;
                          },
                          {
                            &quot;name&quot;: &quot;contact&quot;,
                            &quot;description&quot;: &quot;grantee can read, write and modify contacts.&quot;
                          },
                          {
                            &quot;name&quot;: &quot;website:events&quot;,
                            &quot;description&quot;: &quot;grantee can read, write and modify website events.&quot;
                          }
                        ],
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;items&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;enum&quot;: [
                            &quot;profile:read&quot;,
                            &quot;profile:write&quot;,
                            &quot;lead&quot;,
                            &quot;contact&quot;,
                            &quot;website:events&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-159&gt;&quot;
                        },
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-158&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-149&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-145&gt;&quot;
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-143&gt;&quot;
          },
          {
            &quot;type&quot;: &quot;object&quot;,
            &quot;required&quot;: [
              &quot;id&quot;,
              &quot;type&quot;,
              &quot;inbox&quot;,
              &quot;outbox&quot;
            ],
            &quot;properties&quot;: {
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;example&quot;: &quot;https://user.example.com/profile/card#me&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-161&gt;&quot;
              },
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;SoftwareApplication&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-162&gt;&quot;
              },
              &quot;inbox&quot;: {
                &quot;description&quot;: &quot;discoverable uri to your LDN inbox&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/inbox/&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-163&gt;&quot;
              },
              &quot;outbox&quot;: {
                &quot;description&quot;: &quot;discoverable uri to your LDN outbox&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/outbox/&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-164&gt;&quot;
              },
              &quot;storage&quot;: {
                &quot;description&quot;: &quot;uri to your linked-data storage root&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-165&gt;&quot;
              },
              &quot;preferencesFile&quot;: {
                &quot;description&quot;: &quot;discoverable uri for shared application preferences&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/settings/prefs&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-166&gt;&quot;
              },
              &quot;account&quot;: {
                &quot;description&quot;: &quot;discoverable solid:account root&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-167&gt;&quot;
              },
              &quot;privateTypeIndex&quot;: {
                &quot;description&quot;: &quot;type index for your private use&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/settings/privateTypeIndex&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-168&gt;&quot;
              },
              &quot;publicTypeIndex&quot;: {
                &quot;description&quot;: &quot;shared, discoverable type index&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;/settings/publicTypeIndex&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-169&gt;&quot;
              },
              &quot;permissions&quot;: {
                &quot;description&quot;: &quot;the subscription types required by your service.&quot;,
                &quot;type&quot;: &quot;array&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;enum&quot;: [
                    &quot;profile:read&quot;,
                    &quot;contact&quot;,
                    &quot;lead&quot;,
                    &quot;listing&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-171&gt;&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-170&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-160&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;ApplicationProfile&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;2&gt;
required = 
path = ApplicationProfile











### Example

```json
{
  "type": "SoftwareApplication",
  "id": "https://user.example.com/profile/card#me",
  "primaryTopic": "#me",
  "#me": {
    "type": "SoftwareApplication",
    "inbox": "/inbox/",
    "outbox": "/outbox/",
    "storage": "/",
    "preferencesFile": "/settings/prefs",
    "account": "/",
    "privateTypeIndex": "/settings/privateTypeIndex",
    "publicTypeIndex": "/settings/publicTypeIndex",
    "permissions": [
      "profile:read"
    ]
  },
  "inbox": "/inbox/",
  "outbox": "/outbox/",
  "storage": "/",
  "preferencesFile": "/settings/prefs",
  "account": "/",
  "privateTypeIndex": "/settings/privateTypeIndex",
  "publicTypeIndex": "/settings/publicTypeIndex",
  "permissions": [
    "profile:read"
  ]
}
```

