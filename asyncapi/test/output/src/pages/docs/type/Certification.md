

---
title: Certification
---

{
  "type": {
    "_json": {
      "description": "Certification",
      "type": "string",
      "enum": [
        "Certification"
      ],
      "x-parser-schema-id": "<anonymous-schema-190>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "Certification",
          "description": "A certification issued by an organization to an individual or business.",
          "x-range": "Certification",
          "properties": {
            "type": {
              "description": "Certification",
              "type": "string",
              "enum": [
                "Certification"
              ],
              "x-parser-schema-id": "<anonymous-schema-190>"
            },
            "name": {
              "type": "string",
              "description": "the name of the Certification",
              "example": "e-Agent Certified",
              "x-parser-schema-id": "<anonymous-schema-191>"
            },
            "issuedBy": {
              "type": "object",
              "x-range": "RealEstateOrganization",
              "description": "the issuing authority",
              "properties": {
                "type": {
                  "enum": [
                    "RealEstateOrganization"
                  ],
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-193>"
                },
                "id": {
                  "example": "https://example.com/profile/card#me",
                  "type": "string",
                  "format": "uri",
                  "description": "Linked-Data URI (@id)",
                  "x-parser-schema-id": "<anonymous-schema-194>"
                },
                "name": {
                  "type": "string",
                  "description": "name of the issuing organization",
                  "example": "Gotham City Real Estate",
                  "x-parser-schema-id": "<anonymous-schema-195>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-192>"
            },
            "issuedTo": {
              "x-range": "RealEstateAgent",
              "type": "object",
              "description": "the subject",
              "properties": {
                "type": {
                  "enum": [
                    "RealEstateAgent"
                  ],
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-197>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "Linked-Data URI (@id)",
                  "x-parser-schema-id": "<anonymous-schema-198>"
                },
                "name": {
                  "type": "string",
                  "description": "the name of the item",
                  "x-parser-schema-id": "<anonymous-schema-199>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-196>"
            }
          },
          "x-parser-schema-id": "Certification"
        },
        "options": {}
      }
    }
  },
  "name": {
    "_json": {
      "type": "string",
      "description": "the name of the Certification",
      "example": "e-Agent Certified",
      "x-parser-schema-id": "<anonymous-schema-191>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "Certification",
          "description": "A certification issued by an organization to an individual or business.",
          "x-range": "Certification",
          "properties": {
            "type": {
              "description": "Certification",
              "type": "string",
              "enum": [
                "Certification"
              ],
              "x-parser-schema-id": "<anonymous-schema-190>"
            },
            "name": {
              "type": "string",
              "description": "the name of the Certification",
              "example": "e-Agent Certified",
              "x-parser-schema-id": "<anonymous-schema-191>"
            },
            "issuedBy": {
              "type": "object",
              "x-range": "RealEstateOrganization",
              "description": "the issuing authority",
              "properties": {
                "type": {
                  "enum": [
                    "RealEstateOrganization"
                  ],
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-193>"
                },
                "id": {
                  "example": "https://example.com/profile/card#me",
                  "type": "string",
                  "format": "uri",
                  "description": "Linked-Data URI (@id)",
                  "x-parser-schema-id": "<anonymous-schema-194>"
                },
                "name": {
                  "type": "string",
                  "description": "name of the issuing organization",
                  "example": "Gotham City Real Estate",
                  "x-parser-schema-id": "<anonymous-schema-195>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-192>"
            },
            "issuedTo": {
              "x-range": "RealEstateAgent",
              "type": "object",
              "description": "the subject",
              "properties": {
                "type": {
                  "enum": [
                    "RealEstateAgent"
                  ],
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-197>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "Linked-Data URI (@id)",
                  "x-parser-schema-id": "<anonymous-schema-198>"
                },
                "name": {
                  "type": "string",
                  "description": "the name of the item",
                  "x-parser-schema-id": "<anonymous-schema-199>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-196>"
            }
          },
          "x-parser-schema-id": "Certification"
        },
        "options": {}
      }
    }
  },
  "issuedBy": {
    "_json": {
      "type": "object",
      "x-range": "RealEstateOrganization",
      "description": "the issuing authority",
      "properties": {
        "type": {
          "enum": [
            "RealEstateOrganization"
          ],
          "type": "string",
          "description": "The item type (Linked-Data @type)",
          "x-parser-schema-id": "<anonymous-schema-193>"
        },
        "id": {
          "example": "https://example.com/profile/card#me",
          "type": "string",
          "format": "uri",
          "description": "Linked-Data URI (@id)",
          "x-parser-schema-id": "<anonymous-schema-194>"
        },
        "name": {
          "type": "string",
          "description": "name of the issuing organization",
          "example": "Gotham City Real Estate",
          "x-parser-schema-id": "<anonymous-schema-195>"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-192>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "Certification",
          "description": "A certification issued by an organization to an individual or business.",
          "x-range": "Certification",
          "properties": {
            "type": {
              "description": "Certification",
              "type": "string",
              "enum": [
                "Certification"
              ],
              "x-parser-schema-id": "<anonymous-schema-190>"
            },
            "name": {
              "type": "string",
              "description": "the name of the Certification",
              "example": "e-Agent Certified",
              "x-parser-schema-id": "<anonymous-schema-191>"
            },
            "issuedBy": {
              "type": "object",
              "x-range": "RealEstateOrganization",
              "description": "the issuing authority",
              "properties": {
                "type": {
                  "enum": [
                    "RealEstateOrganization"
                  ],
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-193>"
                },
                "id": {
                  "example": "https://example.com/profile/card#me",
                  "type": "string",
                  "format": "uri",
                  "description": "Linked-Data URI (@id)",
                  "x-parser-schema-id": "<anonymous-schema-194>"
                },
                "name": {
                  "type": "string",
                  "description": "name of the issuing organization",
                  "example": "Gotham City Real Estate",
                  "x-parser-schema-id": "<anonymous-schema-195>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-192>"
            },
            "issuedTo": {
              "x-range": "RealEstateAgent",
              "type": "object",
              "description": "the subject",
              "properties": {
                "type": {
                  "enum": [
                    "RealEstateAgent"
                  ],
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-197>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "Linked-Data URI (@id)",
                  "x-parser-schema-id": "<anonymous-schema-198>"
                },
                "name": {
                  "type": "string",
                  "description": "the name of the item",
                  "x-parser-schema-id": "<anonymous-schema-199>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-196>"
            }
          },
          "x-parser-schema-id": "Certification"
        },
        "options": {}
      }
    }
  },
  "issuedTo": {
    "_json": {
      "x-range": "RealEstateAgent",
      "type": "object",
      "description": "the subject",
      "properties": {
        "type": {
          "enum": [
            "RealEstateAgent"
          ],
          "type": "string",
          "description": "The item type (Linked-Data @type)",
          "x-parser-schema-id": "<anonymous-schema-197>"
        },
        "id": {
          "type": "string",
          "format": "uri",
          "description": "Linked-Data URI (@id)",
          "x-parser-schema-id": "<anonymous-schema-198>"
        },
        "name": {
          "type": "string",
          "description": "the name of the item",
          "x-parser-schema-id": "<anonymous-schema-199>"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-196>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "Certification",
          "description": "A certification issued by an organization to an individual or business.",
          "x-range": "Certification",
          "properties": {
            "type": {
              "description": "Certification",
              "type": "string",
              "enum": [
                "Certification"
              ],
              "x-parser-schema-id": "<anonymous-schema-190>"
            },
            "name": {
              "type": "string",
              "description": "the name of the Certification",
              "example": "e-Agent Certified",
              "x-parser-schema-id": "<anonymous-schema-191>"
            },
            "issuedBy": {
              "type": "object",
              "x-range": "RealEstateOrganization",
              "description": "the issuing authority",
              "properties": {
                "type": {
                  "enum": [
                    "RealEstateOrganization"
                  ],
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-193>"
                },
                "id": {
                  "example": "https://example.com/profile/card#me",
                  "type": "string",
                  "format": "uri",
                  "description": "Linked-Data URI (@id)",
                  "x-parser-schema-id": "<anonymous-schema-194>"
                },
                "name": {
                  "type": "string",
                  "description": "name of the issuing organization",
                  "example": "Gotham City Real Estate",
                  "x-parser-schema-id": "<anonymous-schema-195>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-192>"
            },
            "issuedTo": {
              "x-range": "RealEstateAgent",
              "type": "object",
              "description": "the subject",
              "properties": {
                "type": {
                  "enum": [
                    "RealEstateAgent"
                  ],
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "x-parser-schema-id": "<anonymous-schema-197>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "Linked-Data URI (@id)",
                  "x-parser-schema-id": "<anonymous-schema-198>"
                },
                "name": {
                  "type": "string",
                  "description": "the name of the item",
                  "x-parser-schema-id": "<anonymous-schema-199>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-196>"
            }
          },
          "x-parser-schema-id": "Certification"
        },
        "options": {}
      }
    }
  }
}


# Certification

A certification issued by an organization to an individual or business.



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "description": "Certification",
    "type": "string",
    "enum": [
      "Certification"
    ],
    "x-parser-schema-id": "<anonymous-schema-190>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "Certification",
        "description": "A certification issued by an organization to an individual or business.",
        "x-range": "Certification",
        "properties": {
          "type": {
            "description": "Certification",
            "type": "string",
            "enum": [
              "Certification"
            ],
            "x-parser-schema-id": "<anonymous-schema-190>"
          },
          "name": {
            "type": "string",
            "description": "the name of the Certification",
            "example": "e-Agent Certified",
            "x-parser-schema-id": "<anonymous-schema-191>"
          },
          "issuedBy": {
            "type": "object",
            "x-range": "RealEstateOrganization",
            "description": "the issuing authority",
            "properties": {
              "type": {
                "enum": [
                  "RealEstateOrganization"
                ],
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-193>"
              },
              "id": {
                "example": "https://example.com/profile/card#me",
                "type": "string",
                "format": "uri",
                "description": "Linked-Data URI (@id)",
                "x-parser-schema-id": "<anonymous-schema-194>"
              },
              "name": {
                "type": "string",
                "description": "name of the issuing organization",
                "example": "Gotham City Real Estate",
                "x-parser-schema-id": "<anonymous-schema-195>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-192>"
          },
          "issuedTo": {
            "x-range": "RealEstateAgent",
            "type": "object",
            "description": "the subject",
            "properties": {
              "type": {
                "enum": [
                  "RealEstateAgent"
                ],
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-197>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "Linked-Data URI (@id)",
                "x-parser-schema-id": "<anonymous-schema-198>"
              },
              "name": {
                "type": "string",
                "description": "the name of the item",
                "x-parser-schema-id": "<anonymous-schema-199>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-196>"
          }
        },
        "x-parser-schema-id": "Certification"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "the name of the Certification",
    "example": "e-Agent Certified",
    "x-parser-schema-id": "<anonymous-schema-191>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "Certification",
        "description": "A certification issued by an organization to an individual or business.",
        "x-range": "Certification",
        "properties": {
          "type": {
            "description": "Certification",
            "type": "string",
            "enum": [
              "Certification"
            ],
            "x-parser-schema-id": "<anonymous-schema-190>"
          },
          "name": {
            "type": "string",
            "description": "the name of the Certification",
            "example": "e-Agent Certified",
            "x-parser-schema-id": "<anonymous-schema-191>"
          },
          "issuedBy": {
            "type": "object",
            "x-range": "RealEstateOrganization",
            "description": "the issuing authority",
            "properties": {
              "type": {
                "enum": [
                  "RealEstateOrganization"
                ],
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-193>"
              },
              "id": {
                "example": "https://example.com/profile/card#me",
                "type": "string",
                "format": "uri",
                "description": "Linked-Data URI (@id)",
                "x-parser-schema-id": "<anonymous-schema-194>"
              },
              "name": {
                "type": "string",
                "description": "name of the issuing organization",
                "example": "Gotham City Real Estate",
                "x-parser-schema-id": "<anonymous-schema-195>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-192>"
          },
          "issuedTo": {
            "x-range": "RealEstateAgent",
            "type": "object",
            "description": "the subject",
            "properties": {
              "type": {
                "enum": [
                  "RealEstateAgent"
                ],
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-197>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "Linked-Data URI (@id)",
                "x-parser-schema-id": "<anonymous-schema-198>"
              },
              "name": {
                "type": "string",
                "description": "the name of the item",
                "x-parser-schema-id": "<anonymous-schema-199>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-196>"
          }
        },
        "x-parser-schema-id": "Certification"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "x-range": "RealEstateOrganization",
    "description": "the issuing authority",
    "properties": {
      "type": {
        "enum": [
          "RealEstateOrganization"
        ],
        "type": "string",
        "description": "The item type (Linked-Data @type)",
        "x-parser-schema-id": "<anonymous-schema-193>"
      },
      "id": {
        "example": "https://example.com/profile/card#me",
        "type": "string",
        "format": "uri",
        "description": "Linked-Data URI (@id)",
        "x-parser-schema-id": "<anonymous-schema-194>"
      },
      "name": {
        "type": "string",
        "description": "name of the issuing organization",
        "example": "Gotham City Real Estate",
        "x-parser-schema-id": "<anonymous-schema-195>"
      }
    },
    "x-parser-schema-id": "<anonymous-schema-192>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "Certification",
        "description": "A certification issued by an organization to an individual or business.",
        "x-range": "Certification",
        "properties": {
          "type": {
            "description": "Certification",
            "type": "string",
            "enum": [
              "Certification"
            ],
            "x-parser-schema-id": "<anonymous-schema-190>"
          },
          "name": {
            "type": "string",
            "description": "the name of the Certification",
            "example": "e-Agent Certified",
            "x-parser-schema-id": "<anonymous-schema-191>"
          },
          "issuedBy": {
            "type": "object",
            "x-range": "RealEstateOrganization",
            "description": "the issuing authority",
            "properties": {
              "type": {
                "enum": [
                  "RealEstateOrganization"
                ],
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-193>"
              },
              "id": {
                "example": "https://example.com/profile/card#me",
                "type": "string",
                "format": "uri",
                "description": "Linked-Data URI (@id)",
                "x-parser-schema-id": "<anonymous-schema-194>"
              },
              "name": {
                "type": "string",
                "description": "name of the issuing organization",
                "example": "Gotham City Real Estate",
                "x-parser-schema-id": "<anonymous-schema-195>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-192>"
          },
          "issuedTo": {
            "x-range": "RealEstateAgent",
            "type": "object",
            "description": "the subject",
            "properties": {
              "type": {
                "enum": [
                  "RealEstateAgent"
                ],
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-197>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "Linked-Data URI (@id)",
                "x-parser-schema-id": "<anonymous-schema-198>"
              },
              "name": {
                "type": "string",
                "description": "the name of the item",
                "x-parser-schema-id": "<anonymous-schema-199>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-196>"
          }
        },
        "x-parser-schema-id": "Certification"
      },
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;enum&quot;: [
      &quot;RealEstateOrganization&quot;
    ],
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-193&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
        &quot;description&quot;: &quot;the issuing authority&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;enum&quot;: [
              &quot;RealEstateOrganization&quot;
            ],
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-193&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-194&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;name of the issuing organization&quot;,
            &quot;example&quot;: &quot;Gotham City Real Estate&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-195&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-192&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;Certification&quot;,
            &quot;description&quot;: &quot;A certification issued by an organization to an individual or business.&quot;,
            &quot;x-range&quot;: &quot;Certification&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;description&quot;: &quot;Certification&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;Certification&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-190&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the name of the Certification&quot;,
                &quot;example&quot;: &quot;e-Agent Certified&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-191&gt;&quot;
              },
              &quot;issuedBy&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                &quot;description&quot;: &quot;the issuing authority&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-193&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-194&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the issuing organization&quot;,
                    &quot;example&quot;: &quot;Gotham City Real Estate&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-195&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-192&gt;&quot;
              },
              &quot;issuedTo&quot;: {
                &quot;x-range&quot;: &quot;RealEstateAgent&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the subject&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;enum&quot;: [
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-197&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;the name of the item&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-199&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-196&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Certification&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = type
required = false
path = issuedBy



prop = {
  &quot;_json&quot;: {
    &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
    &quot;type&quot;: &quot;string&quot;,
    &quot;format&quot;: &quot;uri&quot;,
    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-194&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
        &quot;description&quot;: &quot;the issuing authority&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;enum&quot;: [
              &quot;RealEstateOrganization&quot;
            ],
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-193&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-194&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;name of the issuing organization&quot;,
            &quot;example&quot;: &quot;Gotham City Real Estate&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-195&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-192&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;Certification&quot;,
            &quot;description&quot;: &quot;A certification issued by an organization to an individual or business.&quot;,
            &quot;x-range&quot;: &quot;Certification&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;description&quot;: &quot;Certification&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;Certification&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-190&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the name of the Certification&quot;,
                &quot;example&quot;: &quot;e-Agent Certified&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-191&gt;&quot;
              },
              &quot;issuedBy&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                &quot;description&quot;: &quot;the issuing authority&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-193&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-194&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the issuing organization&quot;,
                    &quot;example&quot;: &quot;Gotham City Real Estate&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-195&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-192&gt;&quot;
              },
              &quot;issuedTo&quot;: {
                &quot;x-range&quot;: &quot;RealEstateAgent&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the subject&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;enum&quot;: [
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-197&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;the name of the item&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-199&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-196&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Certification&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = id
required = false
path = issuedBy



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;name of the issuing organization&quot;,
    &quot;example&quot;: &quot;Gotham City Real Estate&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-195&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
        &quot;description&quot;: &quot;the issuing authority&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;enum&quot;: [
              &quot;RealEstateOrganization&quot;
            ],
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-193&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-194&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;name of the issuing organization&quot;,
            &quot;example&quot;: &quot;Gotham City Real Estate&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-195&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-192&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;Certification&quot;,
            &quot;description&quot;: &quot;A certification issued by an organization to an individual or business.&quot;,
            &quot;x-range&quot;: &quot;Certification&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;description&quot;: &quot;Certification&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;Certification&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-190&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the name of the Certification&quot;,
                &quot;example&quot;: &quot;e-Agent Certified&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-191&gt;&quot;
              },
              &quot;issuedBy&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                &quot;description&quot;: &quot;the issuing authority&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-193&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-194&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the issuing organization&quot;,
                    &quot;example&quot;: &quot;Gotham City Real Estate&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-195&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-192&gt;&quot;
              },
              &quot;issuedTo&quot;: {
                &quot;x-range&quot;: &quot;RealEstateAgent&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the subject&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;enum&quot;: [
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-197&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;the name of the item&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-199&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-196&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Certification&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = name
required = false
path = issuedBy





{
  "_json": {
    "x-range": "RealEstateAgent",
    "type": "object",
    "description": "the subject",
    "properties": {
      "type": {
        "enum": [
          "RealEstateAgent"
        ],
        "type": "string",
        "description": "The item type (Linked-Data @type)",
        "x-parser-schema-id": "<anonymous-schema-197>"
      },
      "id": {
        "type": "string",
        "format": "uri",
        "description": "Linked-Data URI (@id)",
        "x-parser-schema-id": "<anonymous-schema-198>"
      },
      "name": {
        "type": "string",
        "description": "the name of the item",
        "x-parser-schema-id": "<anonymous-schema-199>"
      }
    },
    "x-parser-schema-id": "<anonymous-schema-196>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "Certification",
        "description": "A certification issued by an organization to an individual or business.",
        "x-range": "Certification",
        "properties": {
          "type": {
            "description": "Certification",
            "type": "string",
            "enum": [
              "Certification"
            ],
            "x-parser-schema-id": "<anonymous-schema-190>"
          },
          "name": {
            "type": "string",
            "description": "the name of the Certification",
            "example": "e-Agent Certified",
            "x-parser-schema-id": "<anonymous-schema-191>"
          },
          "issuedBy": {
            "type": "object",
            "x-range": "RealEstateOrganization",
            "description": "the issuing authority",
            "properties": {
              "type": {
                "enum": [
                  "RealEstateOrganization"
                ],
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-193>"
              },
              "id": {
                "example": "https://example.com/profile/card#me",
                "type": "string",
                "format": "uri",
                "description": "Linked-Data URI (@id)",
                "x-parser-schema-id": "<anonymous-schema-194>"
              },
              "name": {
                "type": "string",
                "description": "name of the issuing organization",
                "example": "Gotham City Real Estate",
                "x-parser-schema-id": "<anonymous-schema-195>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-192>"
          },
          "issuedTo": {
            "x-range": "RealEstateAgent",
            "type": "object",
            "description": "the subject",
            "properties": {
              "type": {
                "enum": [
                  "RealEstateAgent"
                ],
                "type": "string",
                "description": "The item type (Linked-Data @type)",
                "x-parser-schema-id": "<anonymous-schema-197>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "Linked-Data URI (@id)",
                "x-parser-schema-id": "<anonymous-schema-198>"
              },
              "name": {
                "type": "string",
                "description": "the name of the item",
                "x-parser-schema-id": "<anonymous-schema-199>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-196>"
          }
        },
        "x-parser-schema-id": "Certification"
      },
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;enum&quot;: [
      &quot;RealEstateAgent&quot;
    ],
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-197&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;x-range&quot;: &quot;RealEstateAgent&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;the subject&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;enum&quot;: [
              &quot;RealEstateAgent&quot;
            ],
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-197&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;the name of the item&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-199&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-196&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;Certification&quot;,
            &quot;description&quot;: &quot;A certification issued by an organization to an individual or business.&quot;,
            &quot;x-range&quot;: &quot;Certification&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;description&quot;: &quot;Certification&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;Certification&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-190&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the name of the Certification&quot;,
                &quot;example&quot;: &quot;e-Agent Certified&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-191&gt;&quot;
              },
              &quot;issuedBy&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                &quot;description&quot;: &quot;the issuing authority&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-193&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-194&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the issuing organization&quot;,
                    &quot;example&quot;: &quot;Gotham City Real Estate&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-195&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-192&gt;&quot;
              },
              &quot;issuedTo&quot;: {
                &quot;x-range&quot;: &quot;RealEstateAgent&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the subject&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;enum&quot;: [
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-197&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;the name of the item&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-199&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-196&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Certification&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = type
required = false
path = issuedTo



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;format&quot;: &quot;uri&quot;,
    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;x-range&quot;: &quot;RealEstateAgent&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;the subject&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;enum&quot;: [
              &quot;RealEstateAgent&quot;
            ],
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-197&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;the name of the item&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-199&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-196&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;Certification&quot;,
            &quot;description&quot;: &quot;A certification issued by an organization to an individual or business.&quot;,
            &quot;x-range&quot;: &quot;Certification&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;description&quot;: &quot;Certification&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;Certification&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-190&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the name of the Certification&quot;,
                &quot;example&quot;: &quot;e-Agent Certified&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-191&gt;&quot;
              },
              &quot;issuedBy&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                &quot;description&quot;: &quot;the issuing authority&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-193&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-194&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the issuing organization&quot;,
                    &quot;example&quot;: &quot;Gotham City Real Estate&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-195&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-192&gt;&quot;
              },
              &quot;issuedTo&quot;: {
                &quot;x-range&quot;: &quot;RealEstateAgent&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the subject&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;enum&quot;: [
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-197&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;the name of the item&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-199&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-196&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Certification&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = id
required = false
path = issuedTo



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;the name of the item&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-199&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;x-range&quot;: &quot;RealEstateAgent&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;the subject&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;enum&quot;: [
              &quot;RealEstateAgent&quot;
            ],
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-197&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;the name of the item&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-199&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-196&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;Certification&quot;,
            &quot;description&quot;: &quot;A certification issued by an organization to an individual or business.&quot;,
            &quot;x-range&quot;: &quot;Certification&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;description&quot;: &quot;Certification&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;Certification&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-190&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the name of the Certification&quot;,
                &quot;example&quot;: &quot;e-Agent Certified&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-191&gt;&quot;
              },
              &quot;issuedBy&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                &quot;description&quot;: &quot;the issuing authority&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-193&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-194&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the issuing organization&quot;,
                    &quot;example&quot;: &quot;Gotham City Real Estate&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-195&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-192&gt;&quot;
              },
              &quot;issuedTo&quot;: {
                &quot;x-range&quot;: &quot;RealEstateAgent&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the subject&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;enum&quot;: [
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-197&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;the name of the item&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-199&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-196&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Certification&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = name
required = false
path = issuedTo









### Example

```json
{
  "type": "Certification",
  "name": "e-Agent Certified",
  "issuedBy": {
    "type": "RealEstateOrganization",
    "id": "https://example.com/profile/card#me",
    "name": "Gotham City Real Estate"
  },
  "issuedTo": {
    "type": "RealEstateAgent",
    "id": "http://example.com",
    "name": "string"
  }
}
```

