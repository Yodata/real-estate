

---
title: Referral
---

{
  "type": {
    "_json": {
      "type": "string",
      "description": "The item type (Linked-Data @type)",
      "enum": [
        "Referral"
      ],
      "x-parser-schema-id": "<anonymous-schema-550>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Referral",
          "type": "object",
          "description": "describes a real estate referral from the referredBy (subProperty of agent) to the recipient",
          "x-range": "Referral",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "Referral"
              ],
              "x-parser-schema-id": "<anonymous-schema-550>"
            },
            "additionalProperty": {
              "type": "object",
              "description": "context specific custom properties",
              "properties": {
                "isReferralYN": {
                  "type": "string",
                  "description": "Y if transaction was a referral",
                  "enum": [
                    "Y",
                    "N"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-552>"
                },
                "inNetworkReferralYN": {
                  "type": "string",
                  "description": "Y if transaction was referred by an in network agent",
                  "enum": [
                    "Y",
                    "N"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-553>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-551>"
            },
            "referredBy": {
              "type": "object",
              "description": "the referring entity",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "the referring entity type i.e RealEstateOrganization, RealEstateAgent",
                  "enum": [
                    "RealEstateOrganization",
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "Organization",
                    "Person"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-555>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "Linked-Data URI (@id)",
                  "x-parser-schema-id": "<anonymous-schema-198>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-554>"
            }
          },
          "x-parser-schema-id": "Referral"
        },
        "options": {}
      }
    }
  },
  "additionalProperty": {
    "_json": {
      "type": "object",
      "description": "context specific custom properties",
      "properties": {
        "isReferralYN": {
          "type": "string",
          "description": "Y if transaction was a referral",
          "enum": [
            "Y",
            "N"
          ],
          "x-parser-schema-id": "<anonymous-schema-552>"
        },
        "inNetworkReferralYN": {
          "type": "string",
          "description": "Y if transaction was referred by an in network agent",
          "enum": [
            "Y",
            "N"
          ],
          "x-parser-schema-id": "<anonymous-schema-553>"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-551>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Referral",
          "type": "object",
          "description": "describes a real estate referral from the referredBy (subProperty of agent) to the recipient",
          "x-range": "Referral",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "Referral"
              ],
              "x-parser-schema-id": "<anonymous-schema-550>"
            },
            "additionalProperty": {
              "type": "object",
              "description": "context specific custom properties",
              "properties": {
                "isReferralYN": {
                  "type": "string",
                  "description": "Y if transaction was a referral",
                  "enum": [
                    "Y",
                    "N"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-552>"
                },
                "inNetworkReferralYN": {
                  "type": "string",
                  "description": "Y if transaction was referred by an in network agent",
                  "enum": [
                    "Y",
                    "N"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-553>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-551>"
            },
            "referredBy": {
              "type": "object",
              "description": "the referring entity",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "the referring entity type i.e RealEstateOrganization, RealEstateAgent",
                  "enum": [
                    "RealEstateOrganization",
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "Organization",
                    "Person"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-555>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "Linked-Data URI (@id)",
                  "x-parser-schema-id": "<anonymous-schema-198>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-554>"
            }
          },
          "x-parser-schema-id": "Referral"
        },
        "options": {}
      }
    }
  },
  "referredBy": {
    "_json": {
      "type": "object",
      "description": "the referring entity",
      "properties": {
        "type": {
          "type": "string",
          "description": "the referring entity type i.e RealEstateOrganization, RealEstateAgent",
          "enum": [
            "RealEstateOrganization",
            "RealEstateAgent",
            "RealEstateOffice",
            "Organization",
            "Person"
          ],
          "x-parser-schema-id": "<anonymous-schema-555>"
        },
        "id": {
          "type": "string",
          "format": "uri",
          "description": "Linked-Data URI (@id)",
          "x-parser-schema-id": "<anonymous-schema-198>"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-554>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Referral",
          "type": "object",
          "description": "describes a real estate referral from the referredBy (subProperty of agent) to the recipient",
          "x-range": "Referral",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "Referral"
              ],
              "x-parser-schema-id": "<anonymous-schema-550>"
            },
            "additionalProperty": {
              "type": "object",
              "description": "context specific custom properties",
              "properties": {
                "isReferralYN": {
                  "type": "string",
                  "description": "Y if transaction was a referral",
                  "enum": [
                    "Y",
                    "N"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-552>"
                },
                "inNetworkReferralYN": {
                  "type": "string",
                  "description": "Y if transaction was referred by an in network agent",
                  "enum": [
                    "Y",
                    "N"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-553>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-551>"
            },
            "referredBy": {
              "type": "object",
              "description": "the referring entity",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "the referring entity type i.e RealEstateOrganization, RealEstateAgent",
                  "enum": [
                    "RealEstateOrganization",
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "Organization",
                    "Person"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-555>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "Linked-Data URI (@id)",
                  "x-parser-schema-id": "<anonymous-schema-198>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-554>"
            }
          },
          "x-parser-schema-id": "Referral"
        },
        "options": {}
      }
    }
  }
}


# Referral

describes a real estate referral from the referredBy (subProperty of agent) to the recipient



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "description": "The item type (Linked-Data @type)",
    "enum": [
      "Referral"
    ],
    "x-parser-schema-id": "<anonymous-schema-550>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Referral",
        "type": "object",
        "description": "describes a real estate referral from the referredBy (subProperty of agent) to the recipient",
        "x-range": "Referral",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "Referral"
            ],
            "x-parser-schema-id": "<anonymous-schema-550>"
          },
          "additionalProperty": {
            "type": "object",
            "description": "context specific custom properties",
            "properties": {
              "isReferralYN": {
                "type": "string",
                "description": "Y if transaction was a referral",
                "enum": [
                  "Y",
                  "N"
                ],
                "x-parser-schema-id": "<anonymous-schema-552>"
              },
              "inNetworkReferralYN": {
                "type": "string",
                "description": "Y if transaction was referred by an in network agent",
                "enum": [
                  "Y",
                  "N"
                ],
                "x-parser-schema-id": "<anonymous-schema-553>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-551>"
          },
          "referredBy": {
            "type": "object",
            "description": "the referring entity",
            "properties": {
              "type": {
                "type": "string",
                "description": "the referring entity type i.e RealEstateOrganization, RealEstateAgent",
                "enum": [
                  "RealEstateOrganization",
                  "RealEstateAgent",
                  "RealEstateOffice",
                  "Organization",
                  "Person"
                ],
                "x-parser-schema-id": "<anonymous-schema-555>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "Linked-Data URI (@id)",
                "x-parser-schema-id": "<anonymous-schema-198>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-554>"
          }
        },
        "x-parser-schema-id": "Referral"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "context specific custom properties",
    "properties": {
      "isReferralYN": {
        "type": "string",
        "description": "Y if transaction was a referral",
        "enum": [
          "Y",
          "N"
        ],
        "x-parser-schema-id": "<anonymous-schema-552>"
      },
      "inNetworkReferralYN": {
        "type": "string",
        "description": "Y if transaction was referred by an in network agent",
        "enum": [
          "Y",
          "N"
        ],
        "x-parser-schema-id": "<anonymous-schema-553>"
      }
    },
    "x-parser-schema-id": "<anonymous-schema-551>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Referral",
        "type": "object",
        "description": "describes a real estate referral from the referredBy (subProperty of agent) to the recipient",
        "x-range": "Referral",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "Referral"
            ],
            "x-parser-schema-id": "<anonymous-schema-550>"
          },
          "additionalProperty": {
            "type": "object",
            "description": "context specific custom properties",
            "properties": {
              "isReferralYN": {
                "type": "string",
                "description": "Y if transaction was a referral",
                "enum": [
                  "Y",
                  "N"
                ],
                "x-parser-schema-id": "<anonymous-schema-552>"
              },
              "inNetworkReferralYN": {
                "type": "string",
                "description": "Y if transaction was referred by an in network agent",
                "enum": [
                  "Y",
                  "N"
                ],
                "x-parser-schema-id": "<anonymous-schema-553>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-551>"
          },
          "referredBy": {
            "type": "object",
            "description": "the referring entity",
            "properties": {
              "type": {
                "type": "string",
                "description": "the referring entity type i.e RealEstateOrganization, RealEstateAgent",
                "enum": [
                  "RealEstateOrganization",
                  "RealEstateAgent",
                  "RealEstateOffice",
                  "Organization",
                  "Person"
                ],
                "x-parser-schema-id": "<anonymous-schema-555>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "Linked-Data URI (@id)",
                "x-parser-schema-id": "<anonymous-schema-198>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-554>"
          }
        },
        "x-parser-schema-id": "Referral"
      },
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;Y if transaction was a referral&quot;,
    &quot;enum&quot;: [
      &quot;Y&quot;,
      &quot;N&quot;
    ],
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-552&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;context specific custom properties&quot;,
        &quot;properties&quot;: {
          &quot;isReferralYN&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;Y if transaction was a referral&quot;,
            &quot;enum&quot;: [
              &quot;Y&quot;,
              &quot;N&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-552&gt;&quot;
          },
          &quot;inNetworkReferralYN&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;Y if transaction was referred by an in network agent&quot;,
            &quot;enum&quot;: [
              &quot;Y&quot;,
              &quot;N&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-553&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-551&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;Referral&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;describes a real estate referral from the referredBy (subProperty of agent) to the recipient&quot;,
            &quot;x-range&quot;: &quot;Referral&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                &quot;enum&quot;: [
                  &quot;Referral&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-550&gt;&quot;
              },
              &quot;additionalProperty&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;context specific custom properties&quot;,
                &quot;properties&quot;: {
                  &quot;isReferralYN&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;Y if transaction was a referral&quot;,
                    &quot;enum&quot;: [
                      &quot;Y&quot;,
                      &quot;N&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-552&gt;&quot;
                  },
                  &quot;inNetworkReferralYN&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;Y if transaction was referred by an in network agent&quot;,
                    &quot;enum&quot;: [
                      &quot;Y&quot;,
                      &quot;N&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-553&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-551&gt;&quot;
              },
              &quot;referredBy&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the referring entity&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;the referring entity type i.e RealEstateOrganization, RealEstateAgent&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;,
                      &quot;RealEstateAgent&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;Organization&quot;,
                      &quot;Person&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-555&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-554&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Referral&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = isReferralYN
required = false
path = additionalProperty



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;Y if transaction was referred by an in network agent&quot;,
    &quot;enum&quot;: [
      &quot;Y&quot;,
      &quot;N&quot;
    ],
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-553&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;context specific custom properties&quot;,
        &quot;properties&quot;: {
          &quot;isReferralYN&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;Y if transaction was a referral&quot;,
            &quot;enum&quot;: [
              &quot;Y&quot;,
              &quot;N&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-552&gt;&quot;
          },
          &quot;inNetworkReferralYN&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;Y if transaction was referred by an in network agent&quot;,
            &quot;enum&quot;: [
              &quot;Y&quot;,
              &quot;N&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-553&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-551&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;Referral&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;describes a real estate referral from the referredBy (subProperty of agent) to the recipient&quot;,
            &quot;x-range&quot;: &quot;Referral&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                &quot;enum&quot;: [
                  &quot;Referral&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-550&gt;&quot;
              },
              &quot;additionalProperty&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;context specific custom properties&quot;,
                &quot;properties&quot;: {
                  &quot;isReferralYN&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;Y if transaction was a referral&quot;,
                    &quot;enum&quot;: [
                      &quot;Y&quot;,
                      &quot;N&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-552&gt;&quot;
                  },
                  &quot;inNetworkReferralYN&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;Y if transaction was referred by an in network agent&quot;,
                    &quot;enum&quot;: [
                      &quot;Y&quot;,
                      &quot;N&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-553&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-551&gt;&quot;
              },
              &quot;referredBy&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the referring entity&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;the referring entity type i.e RealEstateOrganization, RealEstateAgent&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;,
                      &quot;RealEstateAgent&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;Organization&quot;,
                      &quot;Person&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-555&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-554&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Referral&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = inNetworkReferralYN
required = false
path = additionalProperty





{
  "_json": {
    "type": "object",
    "description": "the referring entity",
    "properties": {
      "type": {
        "type": "string",
        "description": "the referring entity type i.e RealEstateOrganization, RealEstateAgent",
        "enum": [
          "RealEstateOrganization",
          "RealEstateAgent",
          "RealEstateOffice",
          "Organization",
          "Person"
        ],
        "x-parser-schema-id": "<anonymous-schema-555>"
      },
      "id": {
        "type": "string",
        "format": "uri",
        "description": "Linked-Data URI (@id)",
        "x-parser-schema-id": "<anonymous-schema-198>"
      }
    },
    "x-parser-schema-id": "<anonymous-schema-554>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Referral",
        "type": "object",
        "description": "describes a real estate referral from the referredBy (subProperty of agent) to the recipient",
        "x-range": "Referral",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "Referral"
            ],
            "x-parser-schema-id": "<anonymous-schema-550>"
          },
          "additionalProperty": {
            "type": "object",
            "description": "context specific custom properties",
            "properties": {
              "isReferralYN": {
                "type": "string",
                "description": "Y if transaction was a referral",
                "enum": [
                  "Y",
                  "N"
                ],
                "x-parser-schema-id": "<anonymous-schema-552>"
              },
              "inNetworkReferralYN": {
                "type": "string",
                "description": "Y if transaction was referred by an in network agent",
                "enum": [
                  "Y",
                  "N"
                ],
                "x-parser-schema-id": "<anonymous-schema-553>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-551>"
          },
          "referredBy": {
            "type": "object",
            "description": "the referring entity",
            "properties": {
              "type": {
                "type": "string",
                "description": "the referring entity type i.e RealEstateOrganization, RealEstateAgent",
                "enum": [
                  "RealEstateOrganization",
                  "RealEstateAgent",
                  "RealEstateOffice",
                  "Organization",
                  "Person"
                ],
                "x-parser-schema-id": "<anonymous-schema-555>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "Linked-Data URI (@id)",
                "x-parser-schema-id": "<anonymous-schema-198>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-554>"
          }
        },
        "x-parser-schema-id": "Referral"
      },
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;the referring entity type i.e RealEstateOrganization, RealEstateAgent&quot;,
    &quot;enum&quot;: [
      &quot;RealEstateOrganization&quot;,
      &quot;RealEstateAgent&quot;,
      &quot;RealEstateOffice&quot;,
      &quot;Organization&quot;,
      &quot;Person&quot;
    ],
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-555&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;the referring entity&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;the referring entity type i.e RealEstateOrganization, RealEstateAgent&quot;,
            &quot;enum&quot;: [
              &quot;RealEstateOrganization&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;RealEstateOffice&quot;,
              &quot;Organization&quot;,
              &quot;Person&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-555&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-554&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;Referral&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;describes a real estate referral from the referredBy (subProperty of agent) to the recipient&quot;,
            &quot;x-range&quot;: &quot;Referral&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                &quot;enum&quot;: [
                  &quot;Referral&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-550&gt;&quot;
              },
              &quot;additionalProperty&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;context specific custom properties&quot;,
                &quot;properties&quot;: {
                  &quot;isReferralYN&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;Y if transaction was a referral&quot;,
                    &quot;enum&quot;: [
                      &quot;Y&quot;,
                      &quot;N&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-552&gt;&quot;
                  },
                  &quot;inNetworkReferralYN&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;Y if transaction was referred by an in network agent&quot;,
                    &quot;enum&quot;: [
                      &quot;Y&quot;,
                      &quot;N&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-553&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-551&gt;&quot;
              },
              &quot;referredBy&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the referring entity&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;the referring entity type i.e RealEstateOrganization, RealEstateAgent&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;,
                      &quot;RealEstateAgent&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;Organization&quot;,
                      &quot;Person&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-555&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-554&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Referral&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = type
required = false
path = referredBy



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
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;the referring entity&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;the referring entity type i.e RealEstateOrganization, RealEstateAgent&quot;,
            &quot;enum&quot;: [
              &quot;RealEstateOrganization&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;RealEstateOffice&quot;,
              &quot;Organization&quot;,
              &quot;Person&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-555&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-554&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;Referral&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;describes a real estate referral from the referredBy (subProperty of agent) to the recipient&quot;,
            &quot;x-range&quot;: &quot;Referral&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                &quot;enum&quot;: [
                  &quot;Referral&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-550&gt;&quot;
              },
              &quot;additionalProperty&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;context specific custom properties&quot;,
                &quot;properties&quot;: {
                  &quot;isReferralYN&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;Y if transaction was a referral&quot;,
                    &quot;enum&quot;: [
                      &quot;Y&quot;,
                      &quot;N&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-552&gt;&quot;
                  },
                  &quot;inNetworkReferralYN&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;Y if transaction was referred by an in network agent&quot;,
                    &quot;enum&quot;: [
                      &quot;Y&quot;,
                      &quot;N&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-553&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-551&gt;&quot;
              },
              &quot;referredBy&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the referring entity&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;the referring entity type i.e RealEstateOrganization, RealEstateAgent&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;,
                      &quot;RealEstateAgent&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;Organization&quot;,
                      &quot;Person&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-555&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-554&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Referral&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = id
required = false
path = referredBy









### Example

```json
{
  "type": "Referral",
  "additionalProperty": {
    "isReferralYN": "Y",
    "inNetworkReferralYN": "Y"
  },
  "referredBy": {
    "type": "RealEstateOrganization",
    "id": "http://example.com"
  }
}
```

