

---
title: EmailMessage
---

{}


# EmailMessage





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
            "title": "CreativeWork",
            "description": "A creative work, including books, movies, photographs, software programs, etc.",
            "properties": {
              "type": {
                "enum": [
                  "CreativeWork"
                ]
              },
              "name": {
                "type": "string",
                "description": "name of the work.",
                "example": "Market Report 1008 Mountain Gate Road"
              },
              "description": {
                "type": "string",
                "description": "description of the item",
                "example": "Dolor accusamus rerum nemo non omnis. Nam labore pariatur eius omnis sit."
              },
              "creator": {
                "description": "creator / author of the work",
                "type": "string",
                "format": "uri",
                "example": "http://user.example.com/profile/card"
              },
              "dateCreated": {
                "description": "The date on which the CreativeWork was created or the item was added to a DataFeed.",
                "type": "string",
                "format": "date-time"
              },
              "dateModified": {
                "description": "The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.",
                "type": "string",
                "format": "date-time"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-271>"
          }
        ],
        "x-parser-schema-id": "<anonymous-schema-270>"
      },
      {
        "title": "EmailMessage",
        "x-range": "EamilMessage",
        "description": "an email message",
        "properties": {
          "type": {
            "type": "string",
            "description": "EmailMessage",
            "enum": [
              "EmailMessage"
            ],
            "example": "EmailMessage"
          },
          "sender": {
            "type": "string",
            "format": "uri",
            "description": "ref to the sender",
            "example": "http://user.example.com/profile/card"
          },
          "messageAttachment": {
            "description": "message attachments",
            "x-range": "DigitalDocument",
            "type": "array",
            "items": {
              "type": "object",
              "title": "DigitalDocument",
              "x-range": "DigitalDocument",
              "description": "an electronic file.",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "DigitalDocument"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-264>"
                },
                "id": {
                  "type": "string",
                  "example": "http://user.example.com/public/logo/archive.zip",
                  "x-parser-schema-id": "<anonymous-schema-265>"
                },
                "name": {
                  "type": "string",
                  "description": "document name or title",
                  "example": "archive.zip",
                  "x-parser-schema-id": "<anonymous-schema-266>"
                },
                "encodingFormat": {
                  "type": "string",
                  "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
                  "example": "application/zip",
                  "x-parser-schema-id": "<anonymous-schema-267>"
                },
                "about": {
                  "type": "object",
                  "description": "subject of the Document",
                  "x-range": "Thing",
                  "example": {
                    "type": "RealEstateTransaction",
                    "identifier": {
                      "bmsTransactionId": "xxxx"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-268>"
                },
                "url": {
                  "type": "string",
                  "description": "public URL of the object",
                  "example": "https://example.com",
                  "x-parser-schema-id": "<anonymous-schema-269>"
                }
              },
              "x-parser-schema-id": "DigitalDocument"
            }
          },
          "dateSent": {
            "type": "string",
            "format": "date-time",
            "description": "The date/time at which the message was sent"
          },
          "dateReceived": {
            "type": "string",
            "format": "date-time",
            "description": "The date/time at which the message was received"
          },
          "dateRead": {
            "type": "string",
            "format": "date-time",
            "description": "The date/time at which the message was first viewed"
          },
          "toRecipient": {
            "type": "array",
            "description": "direct recipient of the message",
            "items": {
              "type": "string",
              "example": "user@example.com"
            }
          },
          "ccRecipient": {
            "type": "array",
            "description": "direct recipient of the message",
            "items": {
              "type": "string",
              "example": "user@example.com"
            }
          },
          "bccRecipient": {
            "type": "array",
            "description": "direct recipient of the message",
            "items": {
              "type": "string",
              "example": "user@example.com"
            }
          }
        },
        "x-parser-schema-id": "<anonymous-schema-272>"
      }
    ],
    "x-parser-schema-id": "EmailMessage"
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
        &quot;title&quot;: &quot;CreativeWork&quot;,
        &quot;description&quot;: &quot;A creative work, including books, movies, photographs, software programs, etc.&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;enum&quot;: [
              &quot;CreativeWork&quot;
            ]
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;name of the work.&quot;,
            &quot;example&quot;: &quot;Market Report 1008 Mountain Gate Road&quot;
          },
          &quot;description&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;description of the item&quot;,
            &quot;example&quot;: &quot;Dolor accusamus rerum nemo non omnis. Nam labore pariatur eius omnis sit.&quot;
          },
          &quot;creator&quot;: {
            &quot;description&quot;: &quot;creator / author of the work&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;example&quot;: &quot;http://user.example.com/profile/card&quot;
          },
          &quot;dateCreated&quot;: {
            &quot;description&quot;: &quot;The date on which the CreativeWork was created or the item was added to a DataFeed.&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;
          },
          &quot;dateModified&quot;: {
            &quot;description&quot;: &quot;The date on which the CreativeWork was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-271&gt;&quot;
      }
    ],
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-270&gt;&quot;
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
                &quot;title&quot;: &quot;CreativeWork&quot;,
                &quot;description&quot;: &quot;A creative work, including books, movies, photographs, software programs, etc.&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;enum&quot;: [
                      &quot;CreativeWork&quot;
                    ]
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the work.&quot;,
                    &quot;example&quot;: &quot;Market Report 1008 Mountain Gate Road&quot;
                  },
                  &quot;description&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item&quot;,
                    &quot;example&quot;: &quot;Dolor accusamus rerum nemo non omnis. Nam labore pariatur eius omnis sit.&quot;
                  },
                  &quot;creator&quot;: {
                    &quot;description&quot;: &quot;creator / author of the work&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;example&quot;: &quot;http://user.example.com/profile/card&quot;
                  },
                  &quot;dateCreated&quot;: {
                    &quot;description&quot;: &quot;The date on which the CreativeWork was created or the item was added to a DataFeed.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;
                  },
                  &quot;dateModified&quot;: {
                    &quot;description&quot;: &quot;The date on which the CreativeWork was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-271&gt;&quot;
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-270&gt;&quot;
          },
          {
            &quot;title&quot;: &quot;EmailMessage&quot;,
            &quot;x-range&quot;: &quot;EamilMessage&quot;,
            &quot;description&quot;: &quot;an email message&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;EmailMessage&quot;,
                &quot;enum&quot;: [
                  &quot;EmailMessage&quot;
                ],
                &quot;example&quot;: &quot;EmailMessage&quot;
              },
              &quot;sender&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;ref to the sender&quot;,
                &quot;example&quot;: &quot;http://user.example.com/profile/card&quot;
              },
              &quot;messageAttachment&quot;: {
                &quot;description&quot;: &quot;message attachments&quot;,
                &quot;x-range&quot;: &quot;DigitalDocument&quot;,
                &quot;type&quot;: &quot;array&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;title&quot;: &quot;DigitalDocument&quot;,
                  &quot;x-range&quot;: &quot;DigitalDocument&quot;,
                  &quot;description&quot;: &quot;an electronic file.&quot;,
                  &quot;properties&quot;: {
                    &quot;type&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;enum&quot;: [
                        &quot;DigitalDocument&quot;
                      ],
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-264&gt;&quot;
                    },
                    &quot;id&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;example&quot;: &quot;http://user.example.com/public/logo/archive.zip&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-265&gt;&quot;
                    },
                    &quot;name&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;description&quot;: &quot;document name or title&quot;,
                      &quot;example&quot;: &quot;archive.zip&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-266&gt;&quot;
                    },
                    &quot;encodingFormat&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;description&quot;: &quot;[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)&quot;,
                      &quot;example&quot;: &quot;application/zip&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-267&gt;&quot;
                    },
                    &quot;about&quot;: {
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;description&quot;: &quot;subject of the Document&quot;,
                      &quot;x-range&quot;: &quot;Thing&quot;,
                      &quot;example&quot;: {
                        &quot;type&quot;: &quot;RealEstateTransaction&quot;,
                        &quot;identifier&quot;: {
                          &quot;bmsTransactionId&quot;: &quot;xxxx&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-268&gt;&quot;
                    },
                    &quot;url&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;description&quot;: &quot;public URL of the object&quot;,
                      &quot;example&quot;: &quot;https://example.com&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-269&gt;&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;DigitalDocument&quot;
                }
              },
              &quot;dateSent&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;description&quot;: &quot;The date/time at which the message was sent&quot;
              },
              &quot;dateReceived&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;description&quot;: &quot;The date/time at which the message was received&quot;
              },
              &quot;dateRead&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;description&quot;: &quot;The date/time at which the message was first viewed&quot;
              },
              &quot;toRecipient&quot;: {
                &quot;type&quot;: &quot;array&quot;,
                &quot;description&quot;: &quot;direct recipient of the message&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;example&quot;: &quot;user@example.com&quot;
                }
              },
              &quot;ccRecipient&quot;: {
                &quot;type&quot;: &quot;array&quot;,
                &quot;description&quot;: &quot;direct recipient of the message&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;example&quot;: &quot;user@example.com&quot;
                }
              },
              &quot;bccRecipient&quot;: {
                &quot;type&quot;: &quot;array&quot;,
                &quot;description&quot;: &quot;direct recipient of the message&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;example&quot;: &quot;user@example.com&quot;
                }
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-272&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;EmailMessage&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;1&gt;
required = 
path = EmailMessage




prop = {
  &quot;_json&quot;: {
    &quot;title&quot;: &quot;EmailMessage&quot;,
    &quot;x-range&quot;: &quot;EamilMessage&quot;,
    &quot;description&quot;: &quot;an email message&quot;,
    &quot;properties&quot;: {
      &quot;type&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;EmailMessage&quot;,
        &quot;enum&quot;: [
          &quot;EmailMessage&quot;
        ],
        &quot;example&quot;: &quot;EmailMessage&quot;
      },
      &quot;sender&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;format&quot;: &quot;uri&quot;,
        &quot;description&quot;: &quot;ref to the sender&quot;,
        &quot;example&quot;: &quot;http://user.example.com/profile/card&quot;
      },
      &quot;messageAttachment&quot;: {
        &quot;description&quot;: &quot;message attachments&quot;,
        &quot;x-range&quot;: &quot;DigitalDocument&quot;,
        &quot;type&quot;: &quot;array&quot;,
        &quot;items&quot;: {
          &quot;type&quot;: &quot;object&quot;,
          &quot;title&quot;: &quot;DigitalDocument&quot;,
          &quot;x-range&quot;: &quot;DigitalDocument&quot;,
          &quot;description&quot;: &quot;an electronic file.&quot;,
          &quot;properties&quot;: {
            &quot;type&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;enum&quot;: [
                &quot;DigitalDocument&quot;
              ],
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-264&gt;&quot;
            },
            &quot;id&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;example&quot;: &quot;http://user.example.com/public/logo/archive.zip&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-265&gt;&quot;
            },
            &quot;name&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;description&quot;: &quot;document name or title&quot;,
              &quot;example&quot;: &quot;archive.zip&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-266&gt;&quot;
            },
            &quot;encodingFormat&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;description&quot;: &quot;[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)&quot;,
              &quot;example&quot;: &quot;application/zip&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-267&gt;&quot;
            },
            &quot;about&quot;: {
              &quot;type&quot;: &quot;object&quot;,
              &quot;description&quot;: &quot;subject of the Document&quot;,
              &quot;x-range&quot;: &quot;Thing&quot;,
              &quot;example&quot;: {
                &quot;type&quot;: &quot;RealEstateTransaction&quot;,
                &quot;identifier&quot;: {
                  &quot;bmsTransactionId&quot;: &quot;xxxx&quot;
                }
              },
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-268&gt;&quot;
            },
            &quot;url&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;description&quot;: &quot;public URL of the object&quot;,
              &quot;example&quot;: &quot;https://example.com&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-269&gt;&quot;
            }
          },
          &quot;x-parser-schema-id&quot;: &quot;DigitalDocument&quot;
        }
      },
      &quot;dateSent&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;format&quot;: &quot;date-time&quot;,
        &quot;description&quot;: &quot;The date/time at which the message was sent&quot;
      },
      &quot;dateReceived&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;format&quot;: &quot;date-time&quot;,
        &quot;description&quot;: &quot;The date/time at which the message was received&quot;
      },
      &quot;dateRead&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;format&quot;: &quot;date-time&quot;,
        &quot;description&quot;: &quot;The date/time at which the message was first viewed&quot;
      },
      &quot;toRecipient&quot;: {
        &quot;type&quot;: &quot;array&quot;,
        &quot;description&quot;: &quot;direct recipient of the message&quot;,
        &quot;items&quot;: {
          &quot;type&quot;: &quot;string&quot;,
          &quot;example&quot;: &quot;user@example.com&quot;
        }
      },
      &quot;ccRecipient&quot;: {
        &quot;type&quot;: &quot;array&quot;,
        &quot;description&quot;: &quot;direct recipient of the message&quot;,
        &quot;items&quot;: {
          &quot;type&quot;: &quot;string&quot;,
          &quot;example&quot;: &quot;user@example.com&quot;
        }
      },
      &quot;bccRecipient&quot;: {
        &quot;type&quot;: &quot;array&quot;,
        &quot;description&quot;: &quot;direct recipient of the message&quot;,
        &quot;items&quot;: {
          &quot;type&quot;: &quot;string&quot;,
          &quot;example&quot;: &quot;user@example.com&quot;
        }
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-272&gt;&quot;
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
                &quot;title&quot;: &quot;CreativeWork&quot;,
                &quot;description&quot;: &quot;A creative work, including books, movies, photographs, software programs, etc.&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;enum&quot;: [
                      &quot;CreativeWork&quot;
                    ]
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the work.&quot;,
                    &quot;example&quot;: &quot;Market Report 1008 Mountain Gate Road&quot;
                  },
                  &quot;description&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item&quot;,
                    &quot;example&quot;: &quot;Dolor accusamus rerum nemo non omnis. Nam labore pariatur eius omnis sit.&quot;
                  },
                  &quot;creator&quot;: {
                    &quot;description&quot;: &quot;creator / author of the work&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;example&quot;: &quot;http://user.example.com/profile/card&quot;
                  },
                  &quot;dateCreated&quot;: {
                    &quot;description&quot;: &quot;The date on which the CreativeWork was created or the item was added to a DataFeed.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;
                  },
                  &quot;dateModified&quot;: {
                    &quot;description&quot;: &quot;The date on which the CreativeWork was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-271&gt;&quot;
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-270&gt;&quot;
          },
          {
            &quot;title&quot;: &quot;EmailMessage&quot;,
            &quot;x-range&quot;: &quot;EamilMessage&quot;,
            &quot;description&quot;: &quot;an email message&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;EmailMessage&quot;,
                &quot;enum&quot;: [
                  &quot;EmailMessage&quot;
                ],
                &quot;example&quot;: &quot;EmailMessage&quot;
              },
              &quot;sender&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;ref to the sender&quot;,
                &quot;example&quot;: &quot;http://user.example.com/profile/card&quot;
              },
              &quot;messageAttachment&quot;: {
                &quot;description&quot;: &quot;message attachments&quot;,
                &quot;x-range&quot;: &quot;DigitalDocument&quot;,
                &quot;type&quot;: &quot;array&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;title&quot;: &quot;DigitalDocument&quot;,
                  &quot;x-range&quot;: &quot;DigitalDocument&quot;,
                  &quot;description&quot;: &quot;an electronic file.&quot;,
                  &quot;properties&quot;: {
                    &quot;type&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;enum&quot;: [
                        &quot;DigitalDocument&quot;
                      ],
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-264&gt;&quot;
                    },
                    &quot;id&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;example&quot;: &quot;http://user.example.com/public/logo/archive.zip&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-265&gt;&quot;
                    },
                    &quot;name&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;description&quot;: &quot;document name or title&quot;,
                      &quot;example&quot;: &quot;archive.zip&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-266&gt;&quot;
                    },
                    &quot;encodingFormat&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;description&quot;: &quot;[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)&quot;,
                      &quot;example&quot;: &quot;application/zip&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-267&gt;&quot;
                    },
                    &quot;about&quot;: {
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;description&quot;: &quot;subject of the Document&quot;,
                      &quot;x-range&quot;: &quot;Thing&quot;,
                      &quot;example&quot;: {
                        &quot;type&quot;: &quot;RealEstateTransaction&quot;,
                        &quot;identifier&quot;: {
                          &quot;bmsTransactionId&quot;: &quot;xxxx&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-268&gt;&quot;
                    },
                    &quot;url&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;description&quot;: &quot;public URL of the object&quot;,
                      &quot;example&quot;: &quot;https://example.com&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-269&gt;&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;DigitalDocument&quot;
                }
              },
              &quot;dateSent&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;description&quot;: &quot;The date/time at which the message was sent&quot;
              },
              &quot;dateReceived&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;description&quot;: &quot;The date/time at which the message was received&quot;
              },
              &quot;dateRead&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;description&quot;: &quot;The date/time at which the message was first viewed&quot;
              },
              &quot;toRecipient&quot;: {
                &quot;type&quot;: &quot;array&quot;,
                &quot;description&quot;: &quot;direct recipient of the message&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;example&quot;: &quot;user@example.com&quot;
                }
              },
              &quot;ccRecipient&quot;: {
                &quot;type&quot;: &quot;array&quot;,
                &quot;description&quot;: &quot;direct recipient of the message&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;example&quot;: &quot;user@example.com&quot;
                }
              },
              &quot;bccRecipient&quot;: {
                &quot;type&quot;: &quot;array&quot;,
                &quot;description&quot;: &quot;direct recipient of the message&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;example&quot;: &quot;user@example.com&quot;
                }
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-272&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;EmailMessage&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;2&gt;
required = 
path = EmailMessage











### Example

```json
{
  "type": "EmailMessage",
  "name": "Market Report 1008 Mountain Gate Road",
  "description": "Dolor accusamus rerum nemo non omnis. Nam labore pariatur eius omnis sit.",
  "creator": "http://user.example.com/profile/card",
  "dateCreated": "2019-08-24T14:15:22Z",
  "dateModified": "2019-08-24T14:15:22Z",
  "sender": "http://user.example.com/profile/card",
  "messageAttachment": [
    {
      "type": "DigitalDocument",
      "id": "http://user.example.com/public/logo/archive.zip",
      "name": "archive.zip",
      "encodingFormat": "application/zip",
      "about": {
        "type": "RealEstateTransaction",
        "identifier": {
          "bmsTransactionId": "xxxx"
        }
      },
      "url": "https://example.com"
    }
  ],
  "dateSent": "2019-08-24T14:15:22Z",
  "dateReceived": "2019-08-24T14:15:22Z",
  "dateRead": "2019-08-24T14:15:22Z",
  "toRecipient": [
    "user@example.com"
  ],
  "ccRecipient": [
    "user@example.com"
  ],
  "bccRecipient": [
    "user@example.com"
  ]
}
```

