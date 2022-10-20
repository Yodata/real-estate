

---
title: CloudEvent
---

{
  "topic": {
    "_json": {
      "type": "string",
      "description": "the event topic which determines the event.data schema",
      "x-parser-schema-id": "<anonymous-schema-85>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "CloudEvent",
          "type": "object",
          "required": [
            "topic",
            "agent",
            "instrument",
            "time"
          ],
          "properties": {
            "topic": {
              "type": "string",
              "description": "the event topic which determines the event.data schema",
              "x-parser-schema-id": "<anonymous-schema-85>"
            },
            "time": {
              "type": "string",
              "format": "date-time",
              "description": "date & time the event was produced",
              "x-parser-schema-id": "<anonymous-schema-86>"
            },
            "agent": {
              "type": "string",
              "format": "uri",
              "description": "the user,tema or organization who sent the event",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-87>"
            },
            "instrument": {
              "type": "string",
              "format": "uri",
              "description": "the service which created the event",
              "example": "https://vendorid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-88>"
            },
            "source": {
              "type": "string",
              "format": "uri",
              "description": "an agent, team or organization who received a copy of the event",
              "example": "https://companyid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-89>"
            },
            "originalRecipient": {
              "type": "string",
              "format": "uri",
              "description": "the original recipient of the event with this id",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-90>"
            },
            "id": {
              "type": "string",
              "format": "uri",
              "description": "the shared identifier of the event, akd the event id",
              "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-91>"
            },
            "@id": {
              "type": "string",
              "format": "uri",
              "description": "the url of your instance of the event in your inbox",
              "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-92>"
            },
            "data": {
              "type": "object",
              "description": "event payload, typically an Action",
              "x-parser-schema-id": "<anonymous-schema-93>"
            }
          },
          "x-parser-schema-id": "CloudEvent"
        },
        "options": {}
      }
    }
  },
  "time": {
    "_json": {
      "type": "string",
      "format": "date-time",
      "description": "date & time the event was produced",
      "x-parser-schema-id": "<anonymous-schema-86>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "CloudEvent",
          "type": "object",
          "required": [
            "topic",
            "agent",
            "instrument",
            "time"
          ],
          "properties": {
            "topic": {
              "type": "string",
              "description": "the event topic which determines the event.data schema",
              "x-parser-schema-id": "<anonymous-schema-85>"
            },
            "time": {
              "type": "string",
              "format": "date-time",
              "description": "date & time the event was produced",
              "x-parser-schema-id": "<anonymous-schema-86>"
            },
            "agent": {
              "type": "string",
              "format": "uri",
              "description": "the user,tema or organization who sent the event",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-87>"
            },
            "instrument": {
              "type": "string",
              "format": "uri",
              "description": "the service which created the event",
              "example": "https://vendorid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-88>"
            },
            "source": {
              "type": "string",
              "format": "uri",
              "description": "an agent, team or organization who received a copy of the event",
              "example": "https://companyid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-89>"
            },
            "originalRecipient": {
              "type": "string",
              "format": "uri",
              "description": "the original recipient of the event with this id",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-90>"
            },
            "id": {
              "type": "string",
              "format": "uri",
              "description": "the shared identifier of the event, akd the event id",
              "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-91>"
            },
            "@id": {
              "type": "string",
              "format": "uri",
              "description": "the url of your instance of the event in your inbox",
              "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-92>"
            },
            "data": {
              "type": "object",
              "description": "event payload, typically an Action",
              "x-parser-schema-id": "<anonymous-schema-93>"
            }
          },
          "x-parser-schema-id": "CloudEvent"
        },
        "options": {}
      }
    }
  },
  "agent": {
    "_json": {
      "type": "string",
      "format": "uri",
      "description": "the user,tema or organization who sent the event",
      "example": "https://agentid.example.com/profile/card#me",
      "x-parser-schema-id": "<anonymous-schema-87>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "CloudEvent",
          "type": "object",
          "required": [
            "topic",
            "agent",
            "instrument",
            "time"
          ],
          "properties": {
            "topic": {
              "type": "string",
              "description": "the event topic which determines the event.data schema",
              "x-parser-schema-id": "<anonymous-schema-85>"
            },
            "time": {
              "type": "string",
              "format": "date-time",
              "description": "date & time the event was produced",
              "x-parser-schema-id": "<anonymous-schema-86>"
            },
            "agent": {
              "type": "string",
              "format": "uri",
              "description": "the user,tema or organization who sent the event",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-87>"
            },
            "instrument": {
              "type": "string",
              "format": "uri",
              "description": "the service which created the event",
              "example": "https://vendorid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-88>"
            },
            "source": {
              "type": "string",
              "format": "uri",
              "description": "an agent, team or organization who received a copy of the event",
              "example": "https://companyid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-89>"
            },
            "originalRecipient": {
              "type": "string",
              "format": "uri",
              "description": "the original recipient of the event with this id",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-90>"
            },
            "id": {
              "type": "string",
              "format": "uri",
              "description": "the shared identifier of the event, akd the event id",
              "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-91>"
            },
            "@id": {
              "type": "string",
              "format": "uri",
              "description": "the url of your instance of the event in your inbox",
              "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-92>"
            },
            "data": {
              "type": "object",
              "description": "event payload, typically an Action",
              "x-parser-schema-id": "<anonymous-schema-93>"
            }
          },
          "x-parser-schema-id": "CloudEvent"
        },
        "options": {}
      }
    }
  },
  "instrument": {
    "_json": {
      "type": "string",
      "format": "uri",
      "description": "the service which created the event",
      "example": "https://vendorid.example.com/profile/card#me",
      "x-parser-schema-id": "<anonymous-schema-88>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "CloudEvent",
          "type": "object",
          "required": [
            "topic",
            "agent",
            "instrument",
            "time"
          ],
          "properties": {
            "topic": {
              "type": "string",
              "description": "the event topic which determines the event.data schema",
              "x-parser-schema-id": "<anonymous-schema-85>"
            },
            "time": {
              "type": "string",
              "format": "date-time",
              "description": "date & time the event was produced",
              "x-parser-schema-id": "<anonymous-schema-86>"
            },
            "agent": {
              "type": "string",
              "format": "uri",
              "description": "the user,tema or organization who sent the event",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-87>"
            },
            "instrument": {
              "type": "string",
              "format": "uri",
              "description": "the service which created the event",
              "example": "https://vendorid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-88>"
            },
            "source": {
              "type": "string",
              "format": "uri",
              "description": "an agent, team or organization who received a copy of the event",
              "example": "https://companyid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-89>"
            },
            "originalRecipient": {
              "type": "string",
              "format": "uri",
              "description": "the original recipient of the event with this id",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-90>"
            },
            "id": {
              "type": "string",
              "format": "uri",
              "description": "the shared identifier of the event, akd the event id",
              "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-91>"
            },
            "@id": {
              "type": "string",
              "format": "uri",
              "description": "the url of your instance of the event in your inbox",
              "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-92>"
            },
            "data": {
              "type": "object",
              "description": "event payload, typically an Action",
              "x-parser-schema-id": "<anonymous-schema-93>"
            }
          },
          "x-parser-schema-id": "CloudEvent"
        },
        "options": {}
      }
    }
  },
  "source": {
    "_json": {
      "type": "string",
      "format": "uri",
      "description": "an agent, team or organization who received a copy of the event",
      "example": "https://companyid.example.com/profile/card#me",
      "x-parser-schema-id": "<anonymous-schema-89>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "CloudEvent",
          "type": "object",
          "required": [
            "topic",
            "agent",
            "instrument",
            "time"
          ],
          "properties": {
            "topic": {
              "type": "string",
              "description": "the event topic which determines the event.data schema",
              "x-parser-schema-id": "<anonymous-schema-85>"
            },
            "time": {
              "type": "string",
              "format": "date-time",
              "description": "date & time the event was produced",
              "x-parser-schema-id": "<anonymous-schema-86>"
            },
            "agent": {
              "type": "string",
              "format": "uri",
              "description": "the user,tema or organization who sent the event",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-87>"
            },
            "instrument": {
              "type": "string",
              "format": "uri",
              "description": "the service which created the event",
              "example": "https://vendorid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-88>"
            },
            "source": {
              "type": "string",
              "format": "uri",
              "description": "an agent, team or organization who received a copy of the event",
              "example": "https://companyid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-89>"
            },
            "originalRecipient": {
              "type": "string",
              "format": "uri",
              "description": "the original recipient of the event with this id",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-90>"
            },
            "id": {
              "type": "string",
              "format": "uri",
              "description": "the shared identifier of the event, akd the event id",
              "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-91>"
            },
            "@id": {
              "type": "string",
              "format": "uri",
              "description": "the url of your instance of the event in your inbox",
              "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-92>"
            },
            "data": {
              "type": "object",
              "description": "event payload, typically an Action",
              "x-parser-schema-id": "<anonymous-schema-93>"
            }
          },
          "x-parser-schema-id": "CloudEvent"
        },
        "options": {}
      }
    }
  },
  "originalRecipient": {
    "_json": {
      "type": "string",
      "format": "uri",
      "description": "the original recipient of the event with this id",
      "example": "https://agentid.example.com/profile/card#me",
      "x-parser-schema-id": "<anonymous-schema-90>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "CloudEvent",
          "type": "object",
          "required": [
            "topic",
            "agent",
            "instrument",
            "time"
          ],
          "properties": {
            "topic": {
              "type": "string",
              "description": "the event topic which determines the event.data schema",
              "x-parser-schema-id": "<anonymous-schema-85>"
            },
            "time": {
              "type": "string",
              "format": "date-time",
              "description": "date & time the event was produced",
              "x-parser-schema-id": "<anonymous-schema-86>"
            },
            "agent": {
              "type": "string",
              "format": "uri",
              "description": "the user,tema or organization who sent the event",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-87>"
            },
            "instrument": {
              "type": "string",
              "format": "uri",
              "description": "the service which created the event",
              "example": "https://vendorid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-88>"
            },
            "source": {
              "type": "string",
              "format": "uri",
              "description": "an agent, team or organization who received a copy of the event",
              "example": "https://companyid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-89>"
            },
            "originalRecipient": {
              "type": "string",
              "format": "uri",
              "description": "the original recipient of the event with this id",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-90>"
            },
            "id": {
              "type": "string",
              "format": "uri",
              "description": "the shared identifier of the event, akd the event id",
              "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-91>"
            },
            "@id": {
              "type": "string",
              "format": "uri",
              "description": "the url of your instance of the event in your inbox",
              "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-92>"
            },
            "data": {
              "type": "object",
              "description": "event payload, typically an Action",
              "x-parser-schema-id": "<anonymous-schema-93>"
            }
          },
          "x-parser-schema-id": "CloudEvent"
        },
        "options": {}
      }
    }
  },
  "id": {
    "_json": {
      "type": "string",
      "format": "uri",
      "description": "the shared identifier of the event, akd the event id",
      "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
      "x-parser-schema-id": "<anonymous-schema-91>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "CloudEvent",
          "type": "object",
          "required": [
            "topic",
            "agent",
            "instrument",
            "time"
          ],
          "properties": {
            "topic": {
              "type": "string",
              "description": "the event topic which determines the event.data schema",
              "x-parser-schema-id": "<anonymous-schema-85>"
            },
            "time": {
              "type": "string",
              "format": "date-time",
              "description": "date & time the event was produced",
              "x-parser-schema-id": "<anonymous-schema-86>"
            },
            "agent": {
              "type": "string",
              "format": "uri",
              "description": "the user,tema or organization who sent the event",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-87>"
            },
            "instrument": {
              "type": "string",
              "format": "uri",
              "description": "the service which created the event",
              "example": "https://vendorid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-88>"
            },
            "source": {
              "type": "string",
              "format": "uri",
              "description": "an agent, team or organization who received a copy of the event",
              "example": "https://companyid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-89>"
            },
            "originalRecipient": {
              "type": "string",
              "format": "uri",
              "description": "the original recipient of the event with this id",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-90>"
            },
            "id": {
              "type": "string",
              "format": "uri",
              "description": "the shared identifier of the event, akd the event id",
              "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-91>"
            },
            "@id": {
              "type": "string",
              "format": "uri",
              "description": "the url of your instance of the event in your inbox",
              "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-92>"
            },
            "data": {
              "type": "object",
              "description": "event payload, typically an Action",
              "x-parser-schema-id": "<anonymous-schema-93>"
            }
          },
          "x-parser-schema-id": "CloudEvent"
        },
        "options": {}
      }
    }
  },
  "@id": {
    "_json": {
      "type": "string",
      "format": "uri",
      "description": "the url of your instance of the event in your inbox",
      "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
      "x-parser-schema-id": "<anonymous-schema-92>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "CloudEvent",
          "type": "object",
          "required": [
            "topic",
            "agent",
            "instrument",
            "time"
          ],
          "properties": {
            "topic": {
              "type": "string",
              "description": "the event topic which determines the event.data schema",
              "x-parser-schema-id": "<anonymous-schema-85>"
            },
            "time": {
              "type": "string",
              "format": "date-time",
              "description": "date & time the event was produced",
              "x-parser-schema-id": "<anonymous-schema-86>"
            },
            "agent": {
              "type": "string",
              "format": "uri",
              "description": "the user,tema or organization who sent the event",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-87>"
            },
            "instrument": {
              "type": "string",
              "format": "uri",
              "description": "the service which created the event",
              "example": "https://vendorid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-88>"
            },
            "source": {
              "type": "string",
              "format": "uri",
              "description": "an agent, team or organization who received a copy of the event",
              "example": "https://companyid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-89>"
            },
            "originalRecipient": {
              "type": "string",
              "format": "uri",
              "description": "the original recipient of the event with this id",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-90>"
            },
            "id": {
              "type": "string",
              "format": "uri",
              "description": "the shared identifier of the event, akd the event id",
              "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-91>"
            },
            "@id": {
              "type": "string",
              "format": "uri",
              "description": "the url of your instance of the event in your inbox",
              "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-92>"
            },
            "data": {
              "type": "object",
              "description": "event payload, typically an Action",
              "x-parser-schema-id": "<anonymous-schema-93>"
            }
          },
          "x-parser-schema-id": "CloudEvent"
        },
        "options": {}
      }
    }
  },
  "data": {
    "_json": {
      "type": "object",
      "description": "event payload, typically an Action",
      "x-parser-schema-id": "<anonymous-schema-93>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "CloudEvent",
          "type": "object",
          "required": [
            "topic",
            "agent",
            "instrument",
            "time"
          ],
          "properties": {
            "topic": {
              "type": "string",
              "description": "the event topic which determines the event.data schema",
              "x-parser-schema-id": "<anonymous-schema-85>"
            },
            "time": {
              "type": "string",
              "format": "date-time",
              "description": "date & time the event was produced",
              "x-parser-schema-id": "<anonymous-schema-86>"
            },
            "agent": {
              "type": "string",
              "format": "uri",
              "description": "the user,tema or organization who sent the event",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-87>"
            },
            "instrument": {
              "type": "string",
              "format": "uri",
              "description": "the service which created the event",
              "example": "https://vendorid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-88>"
            },
            "source": {
              "type": "string",
              "format": "uri",
              "description": "an agent, team or organization who received a copy of the event",
              "example": "https://companyid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-89>"
            },
            "originalRecipient": {
              "type": "string",
              "format": "uri",
              "description": "the original recipient of the event with this id",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-90>"
            },
            "id": {
              "type": "string",
              "format": "uri",
              "description": "the shared identifier of the event, akd the event id",
              "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-91>"
            },
            "@id": {
              "type": "string",
              "format": "uri",
              "description": "the url of your instance of the event in your inbox",
              "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-92>"
            },
            "data": {
              "type": "object",
              "description": "event payload, typically an Action",
              "x-parser-schema-id": "<anonymous-schema-93>"
            }
          },
          "x-parser-schema-id": "CloudEvent"
        },
        "options": {}
      }
    }
  }
}


# CloudEvent





### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "description": "the event topic which determines the event.data schema",
    "x-parser-schema-id": "<anonymous-schema-85>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "CloudEvent",
        "type": "object",
        "required": [
          "topic",
          "agent",
          "instrument",
          "time"
        ],
        "properties": {
          "topic": {
            "type": "string",
            "description": "the event topic which determines the event.data schema",
            "x-parser-schema-id": "<anonymous-schema-85>"
          },
          "time": {
            "type": "string",
            "format": "date-time",
            "description": "date & time the event was produced",
            "x-parser-schema-id": "<anonymous-schema-86>"
          },
          "agent": {
            "type": "string",
            "format": "uri",
            "description": "the user,tema or organization who sent the event",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-87>"
          },
          "instrument": {
            "type": "string",
            "format": "uri",
            "description": "the service which created the event",
            "example": "https://vendorid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-88>"
          },
          "source": {
            "type": "string",
            "format": "uri",
            "description": "an agent, team or organization who received a copy of the event",
            "example": "https://companyid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-89>"
          },
          "originalRecipient": {
            "type": "string",
            "format": "uri",
            "description": "the original recipient of the event with this id",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-90>"
          },
          "id": {
            "type": "string",
            "format": "uri",
            "description": "the shared identifier of the event, akd the event id",
            "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-91>"
          },
          "@id": {
            "type": "string",
            "format": "uri",
            "description": "the url of your instance of the event in your inbox",
            "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-92>"
          },
          "data": {
            "type": "object",
            "description": "event payload, typically an Action",
            "x-parser-schema-id": "<anonymous-schema-93>"
          }
        },
        "x-parser-schema-id": "CloudEvent"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "date-time",
    "description": "date & time the event was produced",
    "x-parser-schema-id": "<anonymous-schema-86>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "CloudEvent",
        "type": "object",
        "required": [
          "topic",
          "agent",
          "instrument",
          "time"
        ],
        "properties": {
          "topic": {
            "type": "string",
            "description": "the event topic which determines the event.data schema",
            "x-parser-schema-id": "<anonymous-schema-85>"
          },
          "time": {
            "type": "string",
            "format": "date-time",
            "description": "date & time the event was produced",
            "x-parser-schema-id": "<anonymous-schema-86>"
          },
          "agent": {
            "type": "string",
            "format": "uri",
            "description": "the user,tema or organization who sent the event",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-87>"
          },
          "instrument": {
            "type": "string",
            "format": "uri",
            "description": "the service which created the event",
            "example": "https://vendorid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-88>"
          },
          "source": {
            "type": "string",
            "format": "uri",
            "description": "an agent, team or organization who received a copy of the event",
            "example": "https://companyid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-89>"
          },
          "originalRecipient": {
            "type": "string",
            "format": "uri",
            "description": "the original recipient of the event with this id",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-90>"
          },
          "id": {
            "type": "string",
            "format": "uri",
            "description": "the shared identifier of the event, akd the event id",
            "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-91>"
          },
          "@id": {
            "type": "string",
            "format": "uri",
            "description": "the url of your instance of the event in your inbox",
            "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-92>"
          },
          "data": {
            "type": "object",
            "description": "event payload, typically an Action",
            "x-parser-schema-id": "<anonymous-schema-93>"
          }
        },
        "x-parser-schema-id": "CloudEvent"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "uri",
    "description": "the user,tema or organization who sent the event",
    "example": "https://agentid.example.com/profile/card#me",
    "x-parser-schema-id": "<anonymous-schema-87>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "CloudEvent",
        "type": "object",
        "required": [
          "topic",
          "agent",
          "instrument",
          "time"
        ],
        "properties": {
          "topic": {
            "type": "string",
            "description": "the event topic which determines the event.data schema",
            "x-parser-schema-id": "<anonymous-schema-85>"
          },
          "time": {
            "type": "string",
            "format": "date-time",
            "description": "date & time the event was produced",
            "x-parser-schema-id": "<anonymous-schema-86>"
          },
          "agent": {
            "type": "string",
            "format": "uri",
            "description": "the user,tema or organization who sent the event",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-87>"
          },
          "instrument": {
            "type": "string",
            "format": "uri",
            "description": "the service which created the event",
            "example": "https://vendorid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-88>"
          },
          "source": {
            "type": "string",
            "format": "uri",
            "description": "an agent, team or organization who received a copy of the event",
            "example": "https://companyid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-89>"
          },
          "originalRecipient": {
            "type": "string",
            "format": "uri",
            "description": "the original recipient of the event with this id",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-90>"
          },
          "id": {
            "type": "string",
            "format": "uri",
            "description": "the shared identifier of the event, akd the event id",
            "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-91>"
          },
          "@id": {
            "type": "string",
            "format": "uri",
            "description": "the url of your instance of the event in your inbox",
            "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-92>"
          },
          "data": {
            "type": "object",
            "description": "event payload, typically an Action",
            "x-parser-schema-id": "<anonymous-schema-93>"
          }
        },
        "x-parser-schema-id": "CloudEvent"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "uri",
    "description": "the service which created the event",
    "example": "https://vendorid.example.com/profile/card#me",
    "x-parser-schema-id": "<anonymous-schema-88>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "CloudEvent",
        "type": "object",
        "required": [
          "topic",
          "agent",
          "instrument",
          "time"
        ],
        "properties": {
          "topic": {
            "type": "string",
            "description": "the event topic which determines the event.data schema",
            "x-parser-schema-id": "<anonymous-schema-85>"
          },
          "time": {
            "type": "string",
            "format": "date-time",
            "description": "date & time the event was produced",
            "x-parser-schema-id": "<anonymous-schema-86>"
          },
          "agent": {
            "type": "string",
            "format": "uri",
            "description": "the user,tema or organization who sent the event",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-87>"
          },
          "instrument": {
            "type": "string",
            "format": "uri",
            "description": "the service which created the event",
            "example": "https://vendorid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-88>"
          },
          "source": {
            "type": "string",
            "format": "uri",
            "description": "an agent, team or organization who received a copy of the event",
            "example": "https://companyid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-89>"
          },
          "originalRecipient": {
            "type": "string",
            "format": "uri",
            "description": "the original recipient of the event with this id",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-90>"
          },
          "id": {
            "type": "string",
            "format": "uri",
            "description": "the shared identifier of the event, akd the event id",
            "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-91>"
          },
          "@id": {
            "type": "string",
            "format": "uri",
            "description": "the url of your instance of the event in your inbox",
            "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-92>"
          },
          "data": {
            "type": "object",
            "description": "event payload, typically an Action",
            "x-parser-schema-id": "<anonymous-schema-93>"
          }
        },
        "x-parser-schema-id": "CloudEvent"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "uri",
    "description": "an agent, team or organization who received a copy of the event",
    "example": "https://companyid.example.com/profile/card#me",
    "x-parser-schema-id": "<anonymous-schema-89>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "CloudEvent",
        "type": "object",
        "required": [
          "topic",
          "agent",
          "instrument",
          "time"
        ],
        "properties": {
          "topic": {
            "type": "string",
            "description": "the event topic which determines the event.data schema",
            "x-parser-schema-id": "<anonymous-schema-85>"
          },
          "time": {
            "type": "string",
            "format": "date-time",
            "description": "date & time the event was produced",
            "x-parser-schema-id": "<anonymous-schema-86>"
          },
          "agent": {
            "type": "string",
            "format": "uri",
            "description": "the user,tema or organization who sent the event",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-87>"
          },
          "instrument": {
            "type": "string",
            "format": "uri",
            "description": "the service which created the event",
            "example": "https://vendorid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-88>"
          },
          "source": {
            "type": "string",
            "format": "uri",
            "description": "an agent, team or organization who received a copy of the event",
            "example": "https://companyid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-89>"
          },
          "originalRecipient": {
            "type": "string",
            "format": "uri",
            "description": "the original recipient of the event with this id",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-90>"
          },
          "id": {
            "type": "string",
            "format": "uri",
            "description": "the shared identifier of the event, akd the event id",
            "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-91>"
          },
          "@id": {
            "type": "string",
            "format": "uri",
            "description": "the url of your instance of the event in your inbox",
            "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-92>"
          },
          "data": {
            "type": "object",
            "description": "event payload, typically an Action",
            "x-parser-schema-id": "<anonymous-schema-93>"
          }
        },
        "x-parser-schema-id": "CloudEvent"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "uri",
    "description": "the original recipient of the event with this id",
    "example": "https://agentid.example.com/profile/card#me",
    "x-parser-schema-id": "<anonymous-schema-90>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "CloudEvent",
        "type": "object",
        "required": [
          "topic",
          "agent",
          "instrument",
          "time"
        ],
        "properties": {
          "topic": {
            "type": "string",
            "description": "the event topic which determines the event.data schema",
            "x-parser-schema-id": "<anonymous-schema-85>"
          },
          "time": {
            "type": "string",
            "format": "date-time",
            "description": "date & time the event was produced",
            "x-parser-schema-id": "<anonymous-schema-86>"
          },
          "agent": {
            "type": "string",
            "format": "uri",
            "description": "the user,tema or organization who sent the event",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-87>"
          },
          "instrument": {
            "type": "string",
            "format": "uri",
            "description": "the service which created the event",
            "example": "https://vendorid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-88>"
          },
          "source": {
            "type": "string",
            "format": "uri",
            "description": "an agent, team or organization who received a copy of the event",
            "example": "https://companyid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-89>"
          },
          "originalRecipient": {
            "type": "string",
            "format": "uri",
            "description": "the original recipient of the event with this id",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-90>"
          },
          "id": {
            "type": "string",
            "format": "uri",
            "description": "the shared identifier of the event, akd the event id",
            "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-91>"
          },
          "@id": {
            "type": "string",
            "format": "uri",
            "description": "the url of your instance of the event in your inbox",
            "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-92>"
          },
          "data": {
            "type": "object",
            "description": "event payload, typically an Action",
            "x-parser-schema-id": "<anonymous-schema-93>"
          }
        },
        "x-parser-schema-id": "CloudEvent"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "uri",
    "description": "the shared identifier of the event, akd the event id",
    "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
    "x-parser-schema-id": "<anonymous-schema-91>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "CloudEvent",
        "type": "object",
        "required": [
          "topic",
          "agent",
          "instrument",
          "time"
        ],
        "properties": {
          "topic": {
            "type": "string",
            "description": "the event topic which determines the event.data schema",
            "x-parser-schema-id": "<anonymous-schema-85>"
          },
          "time": {
            "type": "string",
            "format": "date-time",
            "description": "date & time the event was produced",
            "x-parser-schema-id": "<anonymous-schema-86>"
          },
          "agent": {
            "type": "string",
            "format": "uri",
            "description": "the user,tema or organization who sent the event",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-87>"
          },
          "instrument": {
            "type": "string",
            "format": "uri",
            "description": "the service which created the event",
            "example": "https://vendorid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-88>"
          },
          "source": {
            "type": "string",
            "format": "uri",
            "description": "an agent, team or organization who received a copy of the event",
            "example": "https://companyid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-89>"
          },
          "originalRecipient": {
            "type": "string",
            "format": "uri",
            "description": "the original recipient of the event with this id",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-90>"
          },
          "id": {
            "type": "string",
            "format": "uri",
            "description": "the shared identifier of the event, akd the event id",
            "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-91>"
          },
          "@id": {
            "type": "string",
            "format": "uri",
            "description": "the url of your instance of the event in your inbox",
            "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-92>"
          },
          "data": {
            "type": "object",
            "description": "event payload, typically an Action",
            "x-parser-schema-id": "<anonymous-schema-93>"
          }
        },
        "x-parser-schema-id": "CloudEvent"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "uri",
    "description": "the url of your instance of the event in your inbox",
    "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
    "x-parser-schema-id": "<anonymous-schema-92>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "CloudEvent",
        "type": "object",
        "required": [
          "topic",
          "agent",
          "instrument",
          "time"
        ],
        "properties": {
          "topic": {
            "type": "string",
            "description": "the event topic which determines the event.data schema",
            "x-parser-schema-id": "<anonymous-schema-85>"
          },
          "time": {
            "type": "string",
            "format": "date-time",
            "description": "date & time the event was produced",
            "x-parser-schema-id": "<anonymous-schema-86>"
          },
          "agent": {
            "type": "string",
            "format": "uri",
            "description": "the user,tema or organization who sent the event",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-87>"
          },
          "instrument": {
            "type": "string",
            "format": "uri",
            "description": "the service which created the event",
            "example": "https://vendorid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-88>"
          },
          "source": {
            "type": "string",
            "format": "uri",
            "description": "an agent, team or organization who received a copy of the event",
            "example": "https://companyid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-89>"
          },
          "originalRecipient": {
            "type": "string",
            "format": "uri",
            "description": "the original recipient of the event with this id",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-90>"
          },
          "id": {
            "type": "string",
            "format": "uri",
            "description": "the shared identifier of the event, akd the event id",
            "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-91>"
          },
          "@id": {
            "type": "string",
            "format": "uri",
            "description": "the url of your instance of the event in your inbox",
            "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-92>"
          },
          "data": {
            "type": "object",
            "description": "event payload, typically an Action",
            "x-parser-schema-id": "<anonymous-schema-93>"
          }
        },
        "x-parser-schema-id": "CloudEvent"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "event payload, typically an Action",
    "x-parser-schema-id": "<anonymous-schema-93>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "CloudEvent",
        "type": "object",
        "required": [
          "topic",
          "agent",
          "instrument",
          "time"
        ],
        "properties": {
          "topic": {
            "type": "string",
            "description": "the event topic which determines the event.data schema",
            "x-parser-schema-id": "<anonymous-schema-85>"
          },
          "time": {
            "type": "string",
            "format": "date-time",
            "description": "date & time the event was produced",
            "x-parser-schema-id": "<anonymous-schema-86>"
          },
          "agent": {
            "type": "string",
            "format": "uri",
            "description": "the user,tema or organization who sent the event",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-87>"
          },
          "instrument": {
            "type": "string",
            "format": "uri",
            "description": "the service which created the event",
            "example": "https://vendorid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-88>"
          },
          "source": {
            "type": "string",
            "format": "uri",
            "description": "an agent, team or organization who received a copy of the event",
            "example": "https://companyid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-89>"
          },
          "originalRecipient": {
            "type": "string",
            "format": "uri",
            "description": "the original recipient of the event with this id",
            "example": "https://agentid.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-90>"
          },
          "id": {
            "type": "string",
            "format": "uri",
            "description": "the shared identifier of the event, akd the event id",
            "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-91>"
          },
          "@id": {
            "type": "string",
            "format": "uri",
            "description": "the url of your instance of the event in your inbox",
            "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
            "x-parser-schema-id": "<anonymous-schema-92>"
          },
          "data": {
            "type": "object",
            "description": "event payload, typically an Action",
            "x-parser-schema-id": "<anonymous-schema-93>"
          }
        },
        "x-parser-schema-id": "CloudEvent"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "topic": "string",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {}
}
```

