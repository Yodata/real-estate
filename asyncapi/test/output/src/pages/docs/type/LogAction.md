

---
title: LogAction
---

{
  "type": {
    "_json": {
      "type": "string",
      "description": "the action type (LogAction)",
      "x-parser-schema-id": "<anonymous-schema-301>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "LogAction",
          "type": "object",
          "description": "a LogAction should be produced at the end of service execution",
          "required": [
            "type",
            "actionStatus"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "the action type (LogAction)",
              "x-parser-schema-id": "<anonymous-schema-301>"
            },
            "actionStatus": {
              "type": "string",
              "description": "CompletedActionStatus | FailedActionStatus",
              "enum": [
                "CompletedActionStatus",
                "FailedActionStatus"
              ],
              "x-parser-schema-id": "<anonymous-schema-302>"
            },
            "object": {
              "type": "object",
              "description": "the data input",
              "example": {
                "topic": "realestate/contact#add",
                "data": {
                  "type": "AddAction",
                  "object": {
                    "name": "Bob Smith",
                    "email": "bob@example.com"
                  }
                }
              },
              "x-parser-schema-id": "<anonymous-schema-303>"
            },
            "result": {
              "type": "object",
              "description": "the output of a sucessful execution",
              "x-parser-schema-id": "<anonymous-schema-304>"
            },
            "error": {
              "type": "object",
              "description": "details the error of an unsucessful execution",
              "properties": {
                "message": {
                  "description": "the error message",
                  "type": "string",
                  "example": "sorry dave",
                  "x-parser-schema-id": "<anonymous-schema-306>"
                },
                "stack": {
                  "description": "the error stack",
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-307>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-305>"
            }
          },
          "x-parser-schema-id": "LogAction"
        },
        "options": {}
      }
    }
  },
  "actionStatus": {
    "_json": {
      "type": "string",
      "description": "CompletedActionStatus | FailedActionStatus",
      "enum": [
        "CompletedActionStatus",
        "FailedActionStatus"
      ],
      "x-parser-schema-id": "<anonymous-schema-302>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "LogAction",
          "type": "object",
          "description": "a LogAction should be produced at the end of service execution",
          "required": [
            "type",
            "actionStatus"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "the action type (LogAction)",
              "x-parser-schema-id": "<anonymous-schema-301>"
            },
            "actionStatus": {
              "type": "string",
              "description": "CompletedActionStatus | FailedActionStatus",
              "enum": [
                "CompletedActionStatus",
                "FailedActionStatus"
              ],
              "x-parser-schema-id": "<anonymous-schema-302>"
            },
            "object": {
              "type": "object",
              "description": "the data input",
              "example": {
                "topic": "realestate/contact#add",
                "data": {
                  "type": "AddAction",
                  "object": {
                    "name": "Bob Smith",
                    "email": "bob@example.com"
                  }
                }
              },
              "x-parser-schema-id": "<anonymous-schema-303>"
            },
            "result": {
              "type": "object",
              "description": "the output of a sucessful execution",
              "x-parser-schema-id": "<anonymous-schema-304>"
            },
            "error": {
              "type": "object",
              "description": "details the error of an unsucessful execution",
              "properties": {
                "message": {
                  "description": "the error message",
                  "type": "string",
                  "example": "sorry dave",
                  "x-parser-schema-id": "<anonymous-schema-306>"
                },
                "stack": {
                  "description": "the error stack",
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-307>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-305>"
            }
          },
          "x-parser-schema-id": "LogAction"
        },
        "options": {}
      }
    }
  },
  "object": {
    "_json": {
      "type": "object",
      "description": "the data input",
      "example": {
        "topic": "realestate/contact#add",
        "data": {
          "type": "AddAction",
          "object": {
            "name": "Bob Smith",
            "email": "bob@example.com"
          }
        }
      },
      "x-parser-schema-id": "<anonymous-schema-303>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "LogAction",
          "type": "object",
          "description": "a LogAction should be produced at the end of service execution",
          "required": [
            "type",
            "actionStatus"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "the action type (LogAction)",
              "x-parser-schema-id": "<anonymous-schema-301>"
            },
            "actionStatus": {
              "type": "string",
              "description": "CompletedActionStatus | FailedActionStatus",
              "enum": [
                "CompletedActionStatus",
                "FailedActionStatus"
              ],
              "x-parser-schema-id": "<anonymous-schema-302>"
            },
            "object": {
              "type": "object",
              "description": "the data input",
              "example": {
                "topic": "realestate/contact#add",
                "data": {
                  "type": "AddAction",
                  "object": {
                    "name": "Bob Smith",
                    "email": "bob@example.com"
                  }
                }
              },
              "x-parser-schema-id": "<anonymous-schema-303>"
            },
            "result": {
              "type": "object",
              "description": "the output of a sucessful execution",
              "x-parser-schema-id": "<anonymous-schema-304>"
            },
            "error": {
              "type": "object",
              "description": "details the error of an unsucessful execution",
              "properties": {
                "message": {
                  "description": "the error message",
                  "type": "string",
                  "example": "sorry dave",
                  "x-parser-schema-id": "<anonymous-schema-306>"
                },
                "stack": {
                  "description": "the error stack",
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-307>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-305>"
            }
          },
          "x-parser-schema-id": "LogAction"
        },
        "options": {}
      }
    }
  },
  "result": {
    "_json": {
      "type": "object",
      "description": "the output of a sucessful execution",
      "x-parser-schema-id": "<anonymous-schema-304>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "LogAction",
          "type": "object",
          "description": "a LogAction should be produced at the end of service execution",
          "required": [
            "type",
            "actionStatus"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "the action type (LogAction)",
              "x-parser-schema-id": "<anonymous-schema-301>"
            },
            "actionStatus": {
              "type": "string",
              "description": "CompletedActionStatus | FailedActionStatus",
              "enum": [
                "CompletedActionStatus",
                "FailedActionStatus"
              ],
              "x-parser-schema-id": "<anonymous-schema-302>"
            },
            "object": {
              "type": "object",
              "description": "the data input",
              "example": {
                "topic": "realestate/contact#add",
                "data": {
                  "type": "AddAction",
                  "object": {
                    "name": "Bob Smith",
                    "email": "bob@example.com"
                  }
                }
              },
              "x-parser-schema-id": "<anonymous-schema-303>"
            },
            "result": {
              "type": "object",
              "description": "the output of a sucessful execution",
              "x-parser-schema-id": "<anonymous-schema-304>"
            },
            "error": {
              "type": "object",
              "description": "details the error of an unsucessful execution",
              "properties": {
                "message": {
                  "description": "the error message",
                  "type": "string",
                  "example": "sorry dave",
                  "x-parser-schema-id": "<anonymous-schema-306>"
                },
                "stack": {
                  "description": "the error stack",
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-307>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-305>"
            }
          },
          "x-parser-schema-id": "LogAction"
        },
        "options": {}
      }
    }
  },
  "error": {
    "_json": {
      "type": "object",
      "description": "details the error of an unsucessful execution",
      "properties": {
        "message": {
          "description": "the error message",
          "type": "string",
          "example": "sorry dave",
          "x-parser-schema-id": "<anonymous-schema-306>"
        },
        "stack": {
          "description": "the error stack",
          "type": "string",
          "x-parser-schema-id": "<anonymous-schema-307>"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-305>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "LogAction",
          "type": "object",
          "description": "a LogAction should be produced at the end of service execution",
          "required": [
            "type",
            "actionStatus"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "the action type (LogAction)",
              "x-parser-schema-id": "<anonymous-schema-301>"
            },
            "actionStatus": {
              "type": "string",
              "description": "CompletedActionStatus | FailedActionStatus",
              "enum": [
                "CompletedActionStatus",
                "FailedActionStatus"
              ],
              "x-parser-schema-id": "<anonymous-schema-302>"
            },
            "object": {
              "type": "object",
              "description": "the data input",
              "example": {
                "topic": "realestate/contact#add",
                "data": {
                  "type": "AddAction",
                  "object": {
                    "name": "Bob Smith",
                    "email": "bob@example.com"
                  }
                }
              },
              "x-parser-schema-id": "<anonymous-schema-303>"
            },
            "result": {
              "type": "object",
              "description": "the output of a sucessful execution",
              "x-parser-schema-id": "<anonymous-schema-304>"
            },
            "error": {
              "type": "object",
              "description": "details the error of an unsucessful execution",
              "properties": {
                "message": {
                  "description": "the error message",
                  "type": "string",
                  "example": "sorry dave",
                  "x-parser-schema-id": "<anonymous-schema-306>"
                },
                "stack": {
                  "description": "the error stack",
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-307>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-305>"
            }
          },
          "x-parser-schema-id": "LogAction"
        },
        "options": {}
      }
    }
  }
}


# LogAction

a LogAction should be produced at the end of service execution



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "description": "the action type (LogAction)",
    "x-parser-schema-id": "<anonymous-schema-301>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "LogAction",
        "type": "object",
        "description": "a LogAction should be produced at the end of service execution",
        "required": [
          "type",
          "actionStatus"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "the action type (LogAction)",
            "x-parser-schema-id": "<anonymous-schema-301>"
          },
          "actionStatus": {
            "type": "string",
            "description": "CompletedActionStatus | FailedActionStatus",
            "enum": [
              "CompletedActionStatus",
              "FailedActionStatus"
            ],
            "x-parser-schema-id": "<anonymous-schema-302>"
          },
          "object": {
            "type": "object",
            "description": "the data input",
            "example": {
              "topic": "realestate/contact#add",
              "data": {
                "type": "AddAction",
                "object": {
                  "name": "Bob Smith",
                  "email": "bob@example.com"
                }
              }
            },
            "x-parser-schema-id": "<anonymous-schema-303>"
          },
          "result": {
            "type": "object",
            "description": "the output of a sucessful execution",
            "x-parser-schema-id": "<anonymous-schema-304>"
          },
          "error": {
            "type": "object",
            "description": "details the error of an unsucessful execution",
            "properties": {
              "message": {
                "description": "the error message",
                "type": "string",
                "example": "sorry dave",
                "x-parser-schema-id": "<anonymous-schema-306>"
              },
              "stack": {
                "description": "the error stack",
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-307>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-305>"
          }
        },
        "x-parser-schema-id": "LogAction"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "CompletedActionStatus | FailedActionStatus",
    "enum": [
      "CompletedActionStatus",
      "FailedActionStatus"
    ],
    "x-parser-schema-id": "<anonymous-schema-302>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "LogAction",
        "type": "object",
        "description": "a LogAction should be produced at the end of service execution",
        "required": [
          "type",
          "actionStatus"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "the action type (LogAction)",
            "x-parser-schema-id": "<anonymous-schema-301>"
          },
          "actionStatus": {
            "type": "string",
            "description": "CompletedActionStatus | FailedActionStatus",
            "enum": [
              "CompletedActionStatus",
              "FailedActionStatus"
            ],
            "x-parser-schema-id": "<anonymous-schema-302>"
          },
          "object": {
            "type": "object",
            "description": "the data input",
            "example": {
              "topic": "realestate/contact#add",
              "data": {
                "type": "AddAction",
                "object": {
                  "name": "Bob Smith",
                  "email": "bob@example.com"
                }
              }
            },
            "x-parser-schema-id": "<anonymous-schema-303>"
          },
          "result": {
            "type": "object",
            "description": "the output of a sucessful execution",
            "x-parser-schema-id": "<anonymous-schema-304>"
          },
          "error": {
            "type": "object",
            "description": "details the error of an unsucessful execution",
            "properties": {
              "message": {
                "description": "the error message",
                "type": "string",
                "example": "sorry dave",
                "x-parser-schema-id": "<anonymous-schema-306>"
              },
              "stack": {
                "description": "the error stack",
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-307>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-305>"
          }
        },
        "x-parser-schema-id": "LogAction"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "the data input",
    "example": {
      "topic": "realestate/contact#add",
      "data": {
        "type": "AddAction",
        "object": {
          "name": "Bob Smith",
          "email": "bob@example.com"
        }
      }
    },
    "x-parser-schema-id": "<anonymous-schema-303>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "LogAction",
        "type": "object",
        "description": "a LogAction should be produced at the end of service execution",
        "required": [
          "type",
          "actionStatus"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "the action type (LogAction)",
            "x-parser-schema-id": "<anonymous-schema-301>"
          },
          "actionStatus": {
            "type": "string",
            "description": "CompletedActionStatus | FailedActionStatus",
            "enum": [
              "CompletedActionStatus",
              "FailedActionStatus"
            ],
            "x-parser-schema-id": "<anonymous-schema-302>"
          },
          "object": {
            "type": "object",
            "description": "the data input",
            "example": {
              "topic": "realestate/contact#add",
              "data": {
                "type": "AddAction",
                "object": {
                  "name": "Bob Smith",
                  "email": "bob@example.com"
                }
              }
            },
            "x-parser-schema-id": "<anonymous-schema-303>"
          },
          "result": {
            "type": "object",
            "description": "the output of a sucessful execution",
            "x-parser-schema-id": "<anonymous-schema-304>"
          },
          "error": {
            "type": "object",
            "description": "details the error of an unsucessful execution",
            "properties": {
              "message": {
                "description": "the error message",
                "type": "string",
                "example": "sorry dave",
                "x-parser-schema-id": "<anonymous-schema-306>"
              },
              "stack": {
                "description": "the error stack",
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-307>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-305>"
          }
        },
        "x-parser-schema-id": "LogAction"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "the output of a sucessful execution",
    "x-parser-schema-id": "<anonymous-schema-304>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "LogAction",
        "type": "object",
        "description": "a LogAction should be produced at the end of service execution",
        "required": [
          "type",
          "actionStatus"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "the action type (LogAction)",
            "x-parser-schema-id": "<anonymous-schema-301>"
          },
          "actionStatus": {
            "type": "string",
            "description": "CompletedActionStatus | FailedActionStatus",
            "enum": [
              "CompletedActionStatus",
              "FailedActionStatus"
            ],
            "x-parser-schema-id": "<anonymous-schema-302>"
          },
          "object": {
            "type": "object",
            "description": "the data input",
            "example": {
              "topic": "realestate/contact#add",
              "data": {
                "type": "AddAction",
                "object": {
                  "name": "Bob Smith",
                  "email": "bob@example.com"
                }
              }
            },
            "x-parser-schema-id": "<anonymous-schema-303>"
          },
          "result": {
            "type": "object",
            "description": "the output of a sucessful execution",
            "x-parser-schema-id": "<anonymous-schema-304>"
          },
          "error": {
            "type": "object",
            "description": "details the error of an unsucessful execution",
            "properties": {
              "message": {
                "description": "the error message",
                "type": "string",
                "example": "sorry dave",
                "x-parser-schema-id": "<anonymous-schema-306>"
              },
              "stack": {
                "description": "the error stack",
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-307>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-305>"
          }
        },
        "x-parser-schema-id": "LogAction"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "details the error of an unsucessful execution",
    "properties": {
      "message": {
        "description": "the error message",
        "type": "string",
        "example": "sorry dave",
        "x-parser-schema-id": "<anonymous-schema-306>"
      },
      "stack": {
        "description": "the error stack",
        "type": "string",
        "x-parser-schema-id": "<anonymous-schema-307>"
      }
    },
    "x-parser-schema-id": "<anonymous-schema-305>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "LogAction",
        "type": "object",
        "description": "a LogAction should be produced at the end of service execution",
        "required": [
          "type",
          "actionStatus"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "the action type (LogAction)",
            "x-parser-schema-id": "<anonymous-schema-301>"
          },
          "actionStatus": {
            "type": "string",
            "description": "CompletedActionStatus | FailedActionStatus",
            "enum": [
              "CompletedActionStatus",
              "FailedActionStatus"
            ],
            "x-parser-schema-id": "<anonymous-schema-302>"
          },
          "object": {
            "type": "object",
            "description": "the data input",
            "example": {
              "topic": "realestate/contact#add",
              "data": {
                "type": "AddAction",
                "object": {
                  "name": "Bob Smith",
                  "email": "bob@example.com"
                }
              }
            },
            "x-parser-schema-id": "<anonymous-schema-303>"
          },
          "result": {
            "type": "object",
            "description": "the output of a sucessful execution",
            "x-parser-schema-id": "<anonymous-schema-304>"
          },
          "error": {
            "type": "object",
            "description": "details the error of an unsucessful execution",
            "properties": {
              "message": {
                "description": "the error message",
                "type": "string",
                "example": "sorry dave",
                "x-parser-schema-id": "<anonymous-schema-306>"
              },
              "stack": {
                "description": "the error stack",
                "type": "string",
                "x-parser-schema-id": "<anonymous-schema-307>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-305>"
          }
        },
        "x-parser-schema-id": "LogAction"
      },
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;description&quot;: &quot;the error message&quot;,
    &quot;type&quot;: &quot;string&quot;,
    &quot;example&quot;: &quot;sorry dave&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-306&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;details the error of an unsucessful execution&quot;,
        &quot;properties&quot;: {
          &quot;message&quot;: {
            &quot;description&quot;: &quot;the error message&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;sorry dave&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-306&gt;&quot;
          },
          &quot;stack&quot;: {
            &quot;description&quot;: &quot;the error stack&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-307&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-305&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;LogAction&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;a LogAction should be produced at the end of service execution&quot;,
            &quot;required&quot;: [
              &quot;type&quot;,
              &quot;actionStatus&quot;
            ],
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the action type (LogAction)&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-301&gt;&quot;
              },
              &quot;actionStatus&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;CompletedActionStatus | FailedActionStatus&quot;,
                &quot;enum&quot;: [
                  &quot;CompletedActionStatus&quot;,
                  &quot;FailedActionStatus&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-302&gt;&quot;
              },
              &quot;object&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the data input&quot;,
                &quot;example&quot;: {
                  &quot;topic&quot;: &quot;realestate/contact#add&quot;,
                  &quot;data&quot;: {
                    &quot;type&quot;: &quot;AddAction&quot;,
                    &quot;object&quot;: {
                      &quot;name&quot;: &quot;Bob Smith&quot;,
                      &quot;email&quot;: &quot;bob@example.com&quot;
                    }
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-303&gt;&quot;
              },
              &quot;result&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the output of a sucessful execution&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-304&gt;&quot;
              },
              &quot;error&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;details the error of an unsucessful execution&quot;,
                &quot;properties&quot;: {
                  &quot;message&quot;: {
                    &quot;description&quot;: &quot;the error message&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;sorry dave&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-306&gt;&quot;
                  },
                  &quot;stack&quot;: {
                    &quot;description&quot;: &quot;the error stack&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-307&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-305&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;LogAction&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = message
required = false
path = error



prop = {
  &quot;_json&quot;: {
    &quot;description&quot;: &quot;the error stack&quot;,
    &quot;type&quot;: &quot;string&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-307&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;details the error of an unsucessful execution&quot;,
        &quot;properties&quot;: {
          &quot;message&quot;: {
            &quot;description&quot;: &quot;the error message&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;example&quot;: &quot;sorry dave&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-306&gt;&quot;
          },
          &quot;stack&quot;: {
            &quot;description&quot;: &quot;the error stack&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-307&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-305&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;LogAction&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;a LogAction should be produced at the end of service execution&quot;,
            &quot;required&quot;: [
              &quot;type&quot;,
              &quot;actionStatus&quot;
            ],
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the action type (LogAction)&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-301&gt;&quot;
              },
              &quot;actionStatus&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;CompletedActionStatus | FailedActionStatus&quot;,
                &quot;enum&quot;: [
                  &quot;CompletedActionStatus&quot;,
                  &quot;FailedActionStatus&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-302&gt;&quot;
              },
              &quot;object&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the data input&quot;,
                &quot;example&quot;: {
                  &quot;topic&quot;: &quot;realestate/contact#add&quot;,
                  &quot;data&quot;: {
                    &quot;type&quot;: &quot;AddAction&quot;,
                    &quot;object&quot;: {
                      &quot;name&quot;: &quot;Bob Smith&quot;,
                      &quot;email&quot;: &quot;bob@example.com&quot;
                    }
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-303&gt;&quot;
              },
              &quot;result&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the output of a sucessful execution&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-304&gt;&quot;
              },
              &quot;error&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;details the error of an unsucessful execution&quot;,
                &quot;properties&quot;: {
                  &quot;message&quot;: {
                    &quot;description&quot;: &quot;the error message&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;example&quot;: &quot;sorry dave&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-306&gt;&quot;
                  },
                  &quot;stack&quot;: {
                    &quot;description&quot;: &quot;the error stack&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-307&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-305&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;LogAction&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = stack
required = false
path = error









### Example

```json
{
  "type": "string",
  "actionStatus": "CompletedActionStatus",
  "object": {
    "topic": "realestate/contact#add",
    "data": {
      "type": "AddAction",
      "object": {
        "name": "Bob Smith",
        "email": "bob@example.com"
      }
    }
  },
  "result": {},
  "error": {
    "message": "sorry dave",
    "stack": "string"
  }
}
```

