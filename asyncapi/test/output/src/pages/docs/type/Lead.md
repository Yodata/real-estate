

---
title: Lead
---

{
  "type": {
    "_json": {
      "type": "string",
      "enum": [
        "Lead"
      ],
      "description": "Lead",
      "x-parser-schema-id": "<anonymous-schema-290>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Lead",
          "type": "object",
          "x-range": "Lead",
          "description": "a sales opportunity (object) offered by a sender to a recipient.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Lead"
              ],
              "description": "Lead",
              "x-parser-schema-id": "<anonymous-schema-290>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "object": {
              "description": "the lead (Contact)",
              "x-range": [
                "Contact"
              ],
              "type": "object",
              "example": {
                "type": "Contact",
                "name": "Joe Smith",
                "telephone": "731-620-9877 x6155",
                "email": "Giuseppe.Lang62@hotmail.com"
              },
              "x-parser-schema-id": "<anonymous-schema-291>"
            },
            "recipient": {
              "description": "the lead recipient",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-recipient}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-292>"
            },
            "sender": {
              "description": "the lead provider",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-sender}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-293>"
            },
            "owner": {
              "description": "the original owner of the lead",
              "x-range": [
                "RealEstateOrganization",
                "RealEstateAgent",
                "Person"
              ],
              "type": "string",
              "format": "uri",
              "example": "http://{lead-owner}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-294>"
            },
            "dateAccepted": {
              "type": "string",
              "description": "The date/time the item was accepted by the recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-295>"
            },
            "dateRejected": {
              "type": "string",
              "format": "date-time",
              "description": "The date/time the item was rejected by the recipient",
              "x-parser-schema-id": "<anonymous-schema-296>"
            },
            "dateSent": {
              "description": "the date the lead was sent",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-297>"
            },
            "dateReceived": {
              "type": "string",
              "description": "The date/time the item was received by it's recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-298>"
            },
            "leadSource": {
              "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
              "x-range": [
                "Action",
                "RealEstateWebSite",
                "MobileApplication"
              ],
              "type": "array",
              "items": {
                "type": "object",
                "example": {
                  "type": "AskAction",
                  "object": {
                    "type": "Question",
                    "text": "Help me I'm trapped inside documentation."
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-300>"
              },
              "x-parser-schema-id": "<anonymous-schema-299>"
            }
          },
          "x-parser-schema-id": "Lead"
        },
        "options": {}
      }
    }
  },
  "identifier": {
    "_json": {
      "type": "object",
      "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
      "example": {
        "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
      },
      "x-parser-schema-id": "<anonymous-schema-209>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Lead",
          "type": "object",
          "x-range": "Lead",
          "description": "a sales opportunity (object) offered by a sender to a recipient.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Lead"
              ],
              "description": "Lead",
              "x-parser-schema-id": "<anonymous-schema-290>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "object": {
              "description": "the lead (Contact)",
              "x-range": [
                "Contact"
              ],
              "type": "object",
              "example": {
                "type": "Contact",
                "name": "Joe Smith",
                "telephone": "731-620-9877 x6155",
                "email": "Giuseppe.Lang62@hotmail.com"
              },
              "x-parser-schema-id": "<anonymous-schema-291>"
            },
            "recipient": {
              "description": "the lead recipient",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-recipient}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-292>"
            },
            "sender": {
              "description": "the lead provider",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-sender}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-293>"
            },
            "owner": {
              "description": "the original owner of the lead",
              "x-range": [
                "RealEstateOrganization",
                "RealEstateAgent",
                "Person"
              ],
              "type": "string",
              "format": "uri",
              "example": "http://{lead-owner}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-294>"
            },
            "dateAccepted": {
              "type": "string",
              "description": "The date/time the item was accepted by the recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-295>"
            },
            "dateRejected": {
              "type": "string",
              "format": "date-time",
              "description": "The date/time the item was rejected by the recipient",
              "x-parser-schema-id": "<anonymous-schema-296>"
            },
            "dateSent": {
              "description": "the date the lead was sent",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-297>"
            },
            "dateReceived": {
              "type": "string",
              "description": "The date/time the item was received by it's recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-298>"
            },
            "leadSource": {
              "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
              "x-range": [
                "Action",
                "RealEstateWebSite",
                "MobileApplication"
              ],
              "type": "array",
              "items": {
                "type": "object",
                "example": {
                  "type": "AskAction",
                  "object": {
                    "type": "Question",
                    "text": "Help me I'm trapped inside documentation."
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-300>"
              },
              "x-parser-schema-id": "<anonymous-schema-299>"
            }
          },
          "x-parser-schema-id": "Lead"
        },
        "options": {}
      }
    }
  },
  "object": {
    "_json": {
      "description": "the lead (Contact)",
      "x-range": [
        "Contact"
      ],
      "type": "object",
      "example": {
        "type": "Contact",
        "name": "Joe Smith",
        "telephone": "731-620-9877 x6155",
        "email": "Giuseppe.Lang62@hotmail.com"
      },
      "x-parser-schema-id": "<anonymous-schema-291>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Lead",
          "type": "object",
          "x-range": "Lead",
          "description": "a sales opportunity (object) offered by a sender to a recipient.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Lead"
              ],
              "description": "Lead",
              "x-parser-schema-id": "<anonymous-schema-290>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "object": {
              "description": "the lead (Contact)",
              "x-range": [
                "Contact"
              ],
              "type": "object",
              "example": {
                "type": "Contact",
                "name": "Joe Smith",
                "telephone": "731-620-9877 x6155",
                "email": "Giuseppe.Lang62@hotmail.com"
              },
              "x-parser-schema-id": "<anonymous-schema-291>"
            },
            "recipient": {
              "description": "the lead recipient",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-recipient}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-292>"
            },
            "sender": {
              "description": "the lead provider",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-sender}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-293>"
            },
            "owner": {
              "description": "the original owner of the lead",
              "x-range": [
                "RealEstateOrganization",
                "RealEstateAgent",
                "Person"
              ],
              "type": "string",
              "format": "uri",
              "example": "http://{lead-owner}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-294>"
            },
            "dateAccepted": {
              "type": "string",
              "description": "The date/time the item was accepted by the recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-295>"
            },
            "dateRejected": {
              "type": "string",
              "format": "date-time",
              "description": "The date/time the item was rejected by the recipient",
              "x-parser-schema-id": "<anonymous-schema-296>"
            },
            "dateSent": {
              "description": "the date the lead was sent",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-297>"
            },
            "dateReceived": {
              "type": "string",
              "description": "The date/time the item was received by it's recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-298>"
            },
            "leadSource": {
              "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
              "x-range": [
                "Action",
                "RealEstateWebSite",
                "MobileApplication"
              ],
              "type": "array",
              "items": {
                "type": "object",
                "example": {
                  "type": "AskAction",
                  "object": {
                    "type": "Question",
                    "text": "Help me I'm trapped inside documentation."
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-300>"
              },
              "x-parser-schema-id": "<anonymous-schema-299>"
            }
          },
          "x-parser-schema-id": "Lead"
        },
        "options": {}
      }
    }
  },
  "recipient": {
    "_json": {
      "description": "the lead recipient",
      "type": "string",
      "format": "uri",
      "example": "http://{lead-recipient}.example.com/profile/card#me",
      "x-parser-schema-id": "<anonymous-schema-292>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Lead",
          "type": "object",
          "x-range": "Lead",
          "description": "a sales opportunity (object) offered by a sender to a recipient.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Lead"
              ],
              "description": "Lead",
              "x-parser-schema-id": "<anonymous-schema-290>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "object": {
              "description": "the lead (Contact)",
              "x-range": [
                "Contact"
              ],
              "type": "object",
              "example": {
                "type": "Contact",
                "name": "Joe Smith",
                "telephone": "731-620-9877 x6155",
                "email": "Giuseppe.Lang62@hotmail.com"
              },
              "x-parser-schema-id": "<anonymous-schema-291>"
            },
            "recipient": {
              "description": "the lead recipient",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-recipient}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-292>"
            },
            "sender": {
              "description": "the lead provider",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-sender}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-293>"
            },
            "owner": {
              "description": "the original owner of the lead",
              "x-range": [
                "RealEstateOrganization",
                "RealEstateAgent",
                "Person"
              ],
              "type": "string",
              "format": "uri",
              "example": "http://{lead-owner}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-294>"
            },
            "dateAccepted": {
              "type": "string",
              "description": "The date/time the item was accepted by the recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-295>"
            },
            "dateRejected": {
              "type": "string",
              "format": "date-time",
              "description": "The date/time the item was rejected by the recipient",
              "x-parser-schema-id": "<anonymous-schema-296>"
            },
            "dateSent": {
              "description": "the date the lead was sent",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-297>"
            },
            "dateReceived": {
              "type": "string",
              "description": "The date/time the item was received by it's recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-298>"
            },
            "leadSource": {
              "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
              "x-range": [
                "Action",
                "RealEstateWebSite",
                "MobileApplication"
              ],
              "type": "array",
              "items": {
                "type": "object",
                "example": {
                  "type": "AskAction",
                  "object": {
                    "type": "Question",
                    "text": "Help me I'm trapped inside documentation."
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-300>"
              },
              "x-parser-schema-id": "<anonymous-schema-299>"
            }
          },
          "x-parser-schema-id": "Lead"
        },
        "options": {}
      }
    }
  },
  "sender": {
    "_json": {
      "description": "the lead provider",
      "type": "string",
      "format": "uri",
      "example": "http://{lead-sender}.example.com/profile/card#me",
      "x-parser-schema-id": "<anonymous-schema-293>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Lead",
          "type": "object",
          "x-range": "Lead",
          "description": "a sales opportunity (object) offered by a sender to a recipient.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Lead"
              ],
              "description": "Lead",
              "x-parser-schema-id": "<anonymous-schema-290>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "object": {
              "description": "the lead (Contact)",
              "x-range": [
                "Contact"
              ],
              "type": "object",
              "example": {
                "type": "Contact",
                "name": "Joe Smith",
                "telephone": "731-620-9877 x6155",
                "email": "Giuseppe.Lang62@hotmail.com"
              },
              "x-parser-schema-id": "<anonymous-schema-291>"
            },
            "recipient": {
              "description": "the lead recipient",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-recipient}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-292>"
            },
            "sender": {
              "description": "the lead provider",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-sender}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-293>"
            },
            "owner": {
              "description": "the original owner of the lead",
              "x-range": [
                "RealEstateOrganization",
                "RealEstateAgent",
                "Person"
              ],
              "type": "string",
              "format": "uri",
              "example": "http://{lead-owner}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-294>"
            },
            "dateAccepted": {
              "type": "string",
              "description": "The date/time the item was accepted by the recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-295>"
            },
            "dateRejected": {
              "type": "string",
              "format": "date-time",
              "description": "The date/time the item was rejected by the recipient",
              "x-parser-schema-id": "<anonymous-schema-296>"
            },
            "dateSent": {
              "description": "the date the lead was sent",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-297>"
            },
            "dateReceived": {
              "type": "string",
              "description": "The date/time the item was received by it's recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-298>"
            },
            "leadSource": {
              "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
              "x-range": [
                "Action",
                "RealEstateWebSite",
                "MobileApplication"
              ],
              "type": "array",
              "items": {
                "type": "object",
                "example": {
                  "type": "AskAction",
                  "object": {
                    "type": "Question",
                    "text": "Help me I'm trapped inside documentation."
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-300>"
              },
              "x-parser-schema-id": "<anonymous-schema-299>"
            }
          },
          "x-parser-schema-id": "Lead"
        },
        "options": {}
      }
    }
  },
  "owner": {
    "_json": {
      "description": "the original owner of the lead",
      "x-range": [
        "RealEstateOrganization",
        "RealEstateAgent",
        "Person"
      ],
      "type": "string",
      "format": "uri",
      "example": "http://{lead-owner}.example.com/profile/card#me",
      "x-parser-schema-id": "<anonymous-schema-294>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Lead",
          "type": "object",
          "x-range": "Lead",
          "description": "a sales opportunity (object) offered by a sender to a recipient.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Lead"
              ],
              "description": "Lead",
              "x-parser-schema-id": "<anonymous-schema-290>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "object": {
              "description": "the lead (Contact)",
              "x-range": [
                "Contact"
              ],
              "type": "object",
              "example": {
                "type": "Contact",
                "name": "Joe Smith",
                "telephone": "731-620-9877 x6155",
                "email": "Giuseppe.Lang62@hotmail.com"
              },
              "x-parser-schema-id": "<anonymous-schema-291>"
            },
            "recipient": {
              "description": "the lead recipient",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-recipient}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-292>"
            },
            "sender": {
              "description": "the lead provider",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-sender}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-293>"
            },
            "owner": {
              "description": "the original owner of the lead",
              "x-range": [
                "RealEstateOrganization",
                "RealEstateAgent",
                "Person"
              ],
              "type": "string",
              "format": "uri",
              "example": "http://{lead-owner}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-294>"
            },
            "dateAccepted": {
              "type": "string",
              "description": "The date/time the item was accepted by the recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-295>"
            },
            "dateRejected": {
              "type": "string",
              "format": "date-time",
              "description": "The date/time the item was rejected by the recipient",
              "x-parser-schema-id": "<anonymous-schema-296>"
            },
            "dateSent": {
              "description": "the date the lead was sent",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-297>"
            },
            "dateReceived": {
              "type": "string",
              "description": "The date/time the item was received by it's recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-298>"
            },
            "leadSource": {
              "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
              "x-range": [
                "Action",
                "RealEstateWebSite",
                "MobileApplication"
              ],
              "type": "array",
              "items": {
                "type": "object",
                "example": {
                  "type": "AskAction",
                  "object": {
                    "type": "Question",
                    "text": "Help me I'm trapped inside documentation."
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-300>"
              },
              "x-parser-schema-id": "<anonymous-schema-299>"
            }
          },
          "x-parser-schema-id": "Lead"
        },
        "options": {}
      }
    }
  },
  "dateAccepted": {
    "_json": {
      "type": "string",
      "description": "The date/time the item was accepted by the recipient",
      "x-range": "DateTime",
      "example": "2019-11-25T04:23:32.000Z",
      "x-parser-schema-id": "<anonymous-schema-295>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Lead",
          "type": "object",
          "x-range": "Lead",
          "description": "a sales opportunity (object) offered by a sender to a recipient.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Lead"
              ],
              "description": "Lead",
              "x-parser-schema-id": "<anonymous-schema-290>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "object": {
              "description": "the lead (Contact)",
              "x-range": [
                "Contact"
              ],
              "type": "object",
              "example": {
                "type": "Contact",
                "name": "Joe Smith",
                "telephone": "731-620-9877 x6155",
                "email": "Giuseppe.Lang62@hotmail.com"
              },
              "x-parser-schema-id": "<anonymous-schema-291>"
            },
            "recipient": {
              "description": "the lead recipient",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-recipient}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-292>"
            },
            "sender": {
              "description": "the lead provider",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-sender}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-293>"
            },
            "owner": {
              "description": "the original owner of the lead",
              "x-range": [
                "RealEstateOrganization",
                "RealEstateAgent",
                "Person"
              ],
              "type": "string",
              "format": "uri",
              "example": "http://{lead-owner}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-294>"
            },
            "dateAccepted": {
              "type": "string",
              "description": "The date/time the item was accepted by the recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-295>"
            },
            "dateRejected": {
              "type": "string",
              "format": "date-time",
              "description": "The date/time the item was rejected by the recipient",
              "x-parser-schema-id": "<anonymous-schema-296>"
            },
            "dateSent": {
              "description": "the date the lead was sent",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-297>"
            },
            "dateReceived": {
              "type": "string",
              "description": "The date/time the item was received by it's recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-298>"
            },
            "leadSource": {
              "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
              "x-range": [
                "Action",
                "RealEstateWebSite",
                "MobileApplication"
              ],
              "type": "array",
              "items": {
                "type": "object",
                "example": {
                  "type": "AskAction",
                  "object": {
                    "type": "Question",
                    "text": "Help me I'm trapped inside documentation."
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-300>"
              },
              "x-parser-schema-id": "<anonymous-schema-299>"
            }
          },
          "x-parser-schema-id": "Lead"
        },
        "options": {}
      }
    }
  },
  "dateRejected": {
    "_json": {
      "type": "string",
      "format": "date-time",
      "description": "The date/time the item was rejected by the recipient",
      "x-parser-schema-id": "<anonymous-schema-296>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Lead",
          "type": "object",
          "x-range": "Lead",
          "description": "a sales opportunity (object) offered by a sender to a recipient.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Lead"
              ],
              "description": "Lead",
              "x-parser-schema-id": "<anonymous-schema-290>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "object": {
              "description": "the lead (Contact)",
              "x-range": [
                "Contact"
              ],
              "type": "object",
              "example": {
                "type": "Contact",
                "name": "Joe Smith",
                "telephone": "731-620-9877 x6155",
                "email": "Giuseppe.Lang62@hotmail.com"
              },
              "x-parser-schema-id": "<anonymous-schema-291>"
            },
            "recipient": {
              "description": "the lead recipient",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-recipient}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-292>"
            },
            "sender": {
              "description": "the lead provider",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-sender}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-293>"
            },
            "owner": {
              "description": "the original owner of the lead",
              "x-range": [
                "RealEstateOrganization",
                "RealEstateAgent",
                "Person"
              ],
              "type": "string",
              "format": "uri",
              "example": "http://{lead-owner}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-294>"
            },
            "dateAccepted": {
              "type": "string",
              "description": "The date/time the item was accepted by the recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-295>"
            },
            "dateRejected": {
              "type": "string",
              "format": "date-time",
              "description": "The date/time the item was rejected by the recipient",
              "x-parser-schema-id": "<anonymous-schema-296>"
            },
            "dateSent": {
              "description": "the date the lead was sent",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-297>"
            },
            "dateReceived": {
              "type": "string",
              "description": "The date/time the item was received by it's recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-298>"
            },
            "leadSource": {
              "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
              "x-range": [
                "Action",
                "RealEstateWebSite",
                "MobileApplication"
              ],
              "type": "array",
              "items": {
                "type": "object",
                "example": {
                  "type": "AskAction",
                  "object": {
                    "type": "Question",
                    "text": "Help me I'm trapped inside documentation."
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-300>"
              },
              "x-parser-schema-id": "<anonymous-schema-299>"
            }
          },
          "x-parser-schema-id": "Lead"
        },
        "options": {}
      }
    }
  },
  "dateSent": {
    "_json": {
      "description": "the date the lead was sent",
      "type": "string",
      "format": "date-time",
      "x-parser-schema-id": "<anonymous-schema-297>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Lead",
          "type": "object",
          "x-range": "Lead",
          "description": "a sales opportunity (object) offered by a sender to a recipient.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Lead"
              ],
              "description": "Lead",
              "x-parser-schema-id": "<anonymous-schema-290>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "object": {
              "description": "the lead (Contact)",
              "x-range": [
                "Contact"
              ],
              "type": "object",
              "example": {
                "type": "Contact",
                "name": "Joe Smith",
                "telephone": "731-620-9877 x6155",
                "email": "Giuseppe.Lang62@hotmail.com"
              },
              "x-parser-schema-id": "<anonymous-schema-291>"
            },
            "recipient": {
              "description": "the lead recipient",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-recipient}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-292>"
            },
            "sender": {
              "description": "the lead provider",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-sender}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-293>"
            },
            "owner": {
              "description": "the original owner of the lead",
              "x-range": [
                "RealEstateOrganization",
                "RealEstateAgent",
                "Person"
              ],
              "type": "string",
              "format": "uri",
              "example": "http://{lead-owner}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-294>"
            },
            "dateAccepted": {
              "type": "string",
              "description": "The date/time the item was accepted by the recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-295>"
            },
            "dateRejected": {
              "type": "string",
              "format": "date-time",
              "description": "The date/time the item was rejected by the recipient",
              "x-parser-schema-id": "<anonymous-schema-296>"
            },
            "dateSent": {
              "description": "the date the lead was sent",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-297>"
            },
            "dateReceived": {
              "type": "string",
              "description": "The date/time the item was received by it's recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-298>"
            },
            "leadSource": {
              "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
              "x-range": [
                "Action",
                "RealEstateWebSite",
                "MobileApplication"
              ],
              "type": "array",
              "items": {
                "type": "object",
                "example": {
                  "type": "AskAction",
                  "object": {
                    "type": "Question",
                    "text": "Help me I'm trapped inside documentation."
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-300>"
              },
              "x-parser-schema-id": "<anonymous-schema-299>"
            }
          },
          "x-parser-schema-id": "Lead"
        },
        "options": {}
      }
    }
  },
  "dateReceived": {
    "_json": {
      "type": "string",
      "description": "The date/time the item was received by it's recipient",
      "x-range": "DateTime",
      "example": "2019-11-25T04:23:32.000Z",
      "x-parser-schema-id": "<anonymous-schema-298>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Lead",
          "type": "object",
          "x-range": "Lead",
          "description": "a sales opportunity (object) offered by a sender to a recipient.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Lead"
              ],
              "description": "Lead",
              "x-parser-schema-id": "<anonymous-schema-290>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "object": {
              "description": "the lead (Contact)",
              "x-range": [
                "Contact"
              ],
              "type": "object",
              "example": {
                "type": "Contact",
                "name": "Joe Smith",
                "telephone": "731-620-9877 x6155",
                "email": "Giuseppe.Lang62@hotmail.com"
              },
              "x-parser-schema-id": "<anonymous-schema-291>"
            },
            "recipient": {
              "description": "the lead recipient",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-recipient}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-292>"
            },
            "sender": {
              "description": "the lead provider",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-sender}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-293>"
            },
            "owner": {
              "description": "the original owner of the lead",
              "x-range": [
                "RealEstateOrganization",
                "RealEstateAgent",
                "Person"
              ],
              "type": "string",
              "format": "uri",
              "example": "http://{lead-owner}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-294>"
            },
            "dateAccepted": {
              "type": "string",
              "description": "The date/time the item was accepted by the recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-295>"
            },
            "dateRejected": {
              "type": "string",
              "format": "date-time",
              "description": "The date/time the item was rejected by the recipient",
              "x-parser-schema-id": "<anonymous-schema-296>"
            },
            "dateSent": {
              "description": "the date the lead was sent",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-297>"
            },
            "dateReceived": {
              "type": "string",
              "description": "The date/time the item was received by it's recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-298>"
            },
            "leadSource": {
              "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
              "x-range": [
                "Action",
                "RealEstateWebSite",
                "MobileApplication"
              ],
              "type": "array",
              "items": {
                "type": "object",
                "example": {
                  "type": "AskAction",
                  "object": {
                    "type": "Question",
                    "text": "Help me I'm trapped inside documentation."
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-300>"
              },
              "x-parser-schema-id": "<anonymous-schema-299>"
            }
          },
          "x-parser-schema-id": "Lead"
        },
        "options": {}
      }
    }
  },
  "leadSource": {
    "_json": {
      "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
      "x-range": [
        "Action",
        "RealEstateWebSite",
        "MobileApplication"
      ],
      "type": "array",
      "items": {
        "type": "object",
        "example": {
          "type": "AskAction",
          "object": {
            "type": "Question",
            "text": "Help me I'm trapped inside documentation."
          }
        },
        "x-parser-schema-id": "<anonymous-schema-300>"
      },
      "x-parser-schema-id": "<anonymous-schema-299>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Lead",
          "type": "object",
          "x-range": "Lead",
          "description": "a sales opportunity (object) offered by a sender to a recipient.",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Lead"
              ],
              "description": "Lead",
              "x-parser-schema-id": "<anonymous-schema-290>"
            },
            "identifier": {
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "example": {
                "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
              },
              "x-parser-schema-id": "<anonymous-schema-209>"
            },
            "object": {
              "description": "the lead (Contact)",
              "x-range": [
                "Contact"
              ],
              "type": "object",
              "example": {
                "type": "Contact",
                "name": "Joe Smith",
                "telephone": "731-620-9877 x6155",
                "email": "Giuseppe.Lang62@hotmail.com"
              },
              "x-parser-schema-id": "<anonymous-schema-291>"
            },
            "recipient": {
              "description": "the lead recipient",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-recipient}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-292>"
            },
            "sender": {
              "description": "the lead provider",
              "type": "string",
              "format": "uri",
              "example": "http://{lead-sender}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-293>"
            },
            "owner": {
              "description": "the original owner of the lead",
              "x-range": [
                "RealEstateOrganization",
                "RealEstateAgent",
                "Person"
              ],
              "type": "string",
              "format": "uri",
              "example": "http://{lead-owner}.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-294>"
            },
            "dateAccepted": {
              "type": "string",
              "description": "The date/time the item was accepted by the recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-295>"
            },
            "dateRejected": {
              "type": "string",
              "format": "date-time",
              "description": "The date/time the item was rejected by the recipient",
              "x-parser-schema-id": "<anonymous-schema-296>"
            },
            "dateSent": {
              "description": "the date the lead was sent",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-297>"
            },
            "dateReceived": {
              "type": "string",
              "description": "The date/time the item was received by it's recipient",
              "x-range": "DateTime",
              "example": "2019-11-25T04:23:32.000Z",
              "x-parser-schema-id": "<anonymous-schema-298>"
            },
            "leadSource": {
              "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
              "x-range": [
                "Action",
                "RealEstateWebSite",
                "MobileApplication"
              ],
              "type": "array",
              "items": {
                "type": "object",
                "example": {
                  "type": "AskAction",
                  "object": {
                    "type": "Question",
                    "text": "Help me I'm trapped inside documentation."
                  }
                },
                "x-parser-schema-id": "<anonymous-schema-300>"
              },
              "x-parser-schema-id": "<anonymous-schema-299>"
            }
          },
          "x-parser-schema-id": "Lead"
        },
        "options": {}
      }
    }
  }
}


# Lead

a sales opportunity (object) offered by a sender to a recipient.



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "enum": [
      "Lead"
    ],
    "description": "Lead",
    "x-parser-schema-id": "<anonymous-schema-290>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Lead",
        "type": "object",
        "x-range": "Lead",
        "description": "a sales opportunity (object) offered by a sender to a recipient.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Lead"
            ],
            "description": "Lead",
            "x-parser-schema-id": "<anonymous-schema-290>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "object": {
            "description": "the lead (Contact)",
            "x-range": [
              "Contact"
            ],
            "type": "object",
            "example": {
              "type": "Contact",
              "name": "Joe Smith",
              "telephone": "731-620-9877 x6155",
              "email": "Giuseppe.Lang62@hotmail.com"
            },
            "x-parser-schema-id": "<anonymous-schema-291>"
          },
          "recipient": {
            "description": "the lead recipient",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-recipient}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-292>"
          },
          "sender": {
            "description": "the lead provider",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-sender}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-293>"
          },
          "owner": {
            "description": "the original owner of the lead",
            "x-range": [
              "RealEstateOrganization",
              "RealEstateAgent",
              "Person"
            ],
            "type": "string",
            "format": "uri",
            "example": "http://{lead-owner}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-294>"
          },
          "dateAccepted": {
            "type": "string",
            "description": "The date/time the item was accepted by the recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-295>"
          },
          "dateRejected": {
            "type": "string",
            "format": "date-time",
            "description": "The date/time the item was rejected by the recipient",
            "x-parser-schema-id": "<anonymous-schema-296>"
          },
          "dateSent": {
            "description": "the date the lead was sent",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-297>"
          },
          "dateReceived": {
            "type": "string",
            "description": "The date/time the item was received by it's recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-298>"
          },
          "leadSource": {
            "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
            "x-range": [
              "Action",
              "RealEstateWebSite",
              "MobileApplication"
            ],
            "type": "array",
            "items": {
              "type": "object",
              "example": {
                "type": "AskAction",
                "object": {
                  "type": "Question",
                  "text": "Help me I'm trapped inside documentation."
                }
              },
              "x-parser-schema-id": "<anonymous-schema-300>"
            },
            "x-parser-schema-id": "<anonymous-schema-299>"
          }
        },
        "x-parser-schema-id": "Lead"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
    "example": {
      "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
    },
    "x-parser-schema-id": "<anonymous-schema-209>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Lead",
        "type": "object",
        "x-range": "Lead",
        "description": "a sales opportunity (object) offered by a sender to a recipient.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Lead"
            ],
            "description": "Lead",
            "x-parser-schema-id": "<anonymous-schema-290>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "object": {
            "description": "the lead (Contact)",
            "x-range": [
              "Contact"
            ],
            "type": "object",
            "example": {
              "type": "Contact",
              "name": "Joe Smith",
              "telephone": "731-620-9877 x6155",
              "email": "Giuseppe.Lang62@hotmail.com"
            },
            "x-parser-schema-id": "<anonymous-schema-291>"
          },
          "recipient": {
            "description": "the lead recipient",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-recipient}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-292>"
          },
          "sender": {
            "description": "the lead provider",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-sender}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-293>"
          },
          "owner": {
            "description": "the original owner of the lead",
            "x-range": [
              "RealEstateOrganization",
              "RealEstateAgent",
              "Person"
            ],
            "type": "string",
            "format": "uri",
            "example": "http://{lead-owner}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-294>"
          },
          "dateAccepted": {
            "type": "string",
            "description": "The date/time the item was accepted by the recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-295>"
          },
          "dateRejected": {
            "type": "string",
            "format": "date-time",
            "description": "The date/time the item was rejected by the recipient",
            "x-parser-schema-id": "<anonymous-schema-296>"
          },
          "dateSent": {
            "description": "the date the lead was sent",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-297>"
          },
          "dateReceived": {
            "type": "string",
            "description": "The date/time the item was received by it's recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-298>"
          },
          "leadSource": {
            "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
            "x-range": [
              "Action",
              "RealEstateWebSite",
              "MobileApplication"
            ],
            "type": "array",
            "items": {
              "type": "object",
              "example": {
                "type": "AskAction",
                "object": {
                  "type": "Question",
                  "text": "Help me I'm trapped inside documentation."
                }
              },
              "x-parser-schema-id": "<anonymous-schema-300>"
            },
            "x-parser-schema-id": "<anonymous-schema-299>"
          }
        },
        "x-parser-schema-id": "Lead"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "the lead (Contact)",
    "x-range": [
      "Contact"
    ],
    "type": "object",
    "example": {
      "type": "Contact",
      "name": "Joe Smith",
      "telephone": "731-620-9877 x6155",
      "email": "Giuseppe.Lang62@hotmail.com"
    },
    "x-parser-schema-id": "<anonymous-schema-291>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Lead",
        "type": "object",
        "x-range": "Lead",
        "description": "a sales opportunity (object) offered by a sender to a recipient.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Lead"
            ],
            "description": "Lead",
            "x-parser-schema-id": "<anonymous-schema-290>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "object": {
            "description": "the lead (Contact)",
            "x-range": [
              "Contact"
            ],
            "type": "object",
            "example": {
              "type": "Contact",
              "name": "Joe Smith",
              "telephone": "731-620-9877 x6155",
              "email": "Giuseppe.Lang62@hotmail.com"
            },
            "x-parser-schema-id": "<anonymous-schema-291>"
          },
          "recipient": {
            "description": "the lead recipient",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-recipient}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-292>"
          },
          "sender": {
            "description": "the lead provider",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-sender}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-293>"
          },
          "owner": {
            "description": "the original owner of the lead",
            "x-range": [
              "RealEstateOrganization",
              "RealEstateAgent",
              "Person"
            ],
            "type": "string",
            "format": "uri",
            "example": "http://{lead-owner}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-294>"
          },
          "dateAccepted": {
            "type": "string",
            "description": "The date/time the item was accepted by the recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-295>"
          },
          "dateRejected": {
            "type": "string",
            "format": "date-time",
            "description": "The date/time the item was rejected by the recipient",
            "x-parser-schema-id": "<anonymous-schema-296>"
          },
          "dateSent": {
            "description": "the date the lead was sent",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-297>"
          },
          "dateReceived": {
            "type": "string",
            "description": "The date/time the item was received by it's recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-298>"
          },
          "leadSource": {
            "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
            "x-range": [
              "Action",
              "RealEstateWebSite",
              "MobileApplication"
            ],
            "type": "array",
            "items": {
              "type": "object",
              "example": {
                "type": "AskAction",
                "object": {
                  "type": "Question",
                  "text": "Help me I'm trapped inside documentation."
                }
              },
              "x-parser-schema-id": "<anonymous-schema-300>"
            },
            "x-parser-schema-id": "<anonymous-schema-299>"
          }
        },
        "x-parser-schema-id": "Lead"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "the lead recipient",
    "type": "string",
    "format": "uri",
    "example": "http://{lead-recipient}.example.com/profile/card#me",
    "x-parser-schema-id": "<anonymous-schema-292>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Lead",
        "type": "object",
        "x-range": "Lead",
        "description": "a sales opportunity (object) offered by a sender to a recipient.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Lead"
            ],
            "description": "Lead",
            "x-parser-schema-id": "<anonymous-schema-290>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "object": {
            "description": "the lead (Contact)",
            "x-range": [
              "Contact"
            ],
            "type": "object",
            "example": {
              "type": "Contact",
              "name": "Joe Smith",
              "telephone": "731-620-9877 x6155",
              "email": "Giuseppe.Lang62@hotmail.com"
            },
            "x-parser-schema-id": "<anonymous-schema-291>"
          },
          "recipient": {
            "description": "the lead recipient",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-recipient}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-292>"
          },
          "sender": {
            "description": "the lead provider",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-sender}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-293>"
          },
          "owner": {
            "description": "the original owner of the lead",
            "x-range": [
              "RealEstateOrganization",
              "RealEstateAgent",
              "Person"
            ],
            "type": "string",
            "format": "uri",
            "example": "http://{lead-owner}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-294>"
          },
          "dateAccepted": {
            "type": "string",
            "description": "The date/time the item was accepted by the recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-295>"
          },
          "dateRejected": {
            "type": "string",
            "format": "date-time",
            "description": "The date/time the item was rejected by the recipient",
            "x-parser-schema-id": "<anonymous-schema-296>"
          },
          "dateSent": {
            "description": "the date the lead was sent",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-297>"
          },
          "dateReceived": {
            "type": "string",
            "description": "The date/time the item was received by it's recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-298>"
          },
          "leadSource": {
            "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
            "x-range": [
              "Action",
              "RealEstateWebSite",
              "MobileApplication"
            ],
            "type": "array",
            "items": {
              "type": "object",
              "example": {
                "type": "AskAction",
                "object": {
                  "type": "Question",
                  "text": "Help me I'm trapped inside documentation."
                }
              },
              "x-parser-schema-id": "<anonymous-schema-300>"
            },
            "x-parser-schema-id": "<anonymous-schema-299>"
          }
        },
        "x-parser-schema-id": "Lead"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "the lead provider",
    "type": "string",
    "format": "uri",
    "example": "http://{lead-sender}.example.com/profile/card#me",
    "x-parser-schema-id": "<anonymous-schema-293>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Lead",
        "type": "object",
        "x-range": "Lead",
        "description": "a sales opportunity (object) offered by a sender to a recipient.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Lead"
            ],
            "description": "Lead",
            "x-parser-schema-id": "<anonymous-schema-290>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "object": {
            "description": "the lead (Contact)",
            "x-range": [
              "Contact"
            ],
            "type": "object",
            "example": {
              "type": "Contact",
              "name": "Joe Smith",
              "telephone": "731-620-9877 x6155",
              "email": "Giuseppe.Lang62@hotmail.com"
            },
            "x-parser-schema-id": "<anonymous-schema-291>"
          },
          "recipient": {
            "description": "the lead recipient",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-recipient}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-292>"
          },
          "sender": {
            "description": "the lead provider",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-sender}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-293>"
          },
          "owner": {
            "description": "the original owner of the lead",
            "x-range": [
              "RealEstateOrganization",
              "RealEstateAgent",
              "Person"
            ],
            "type": "string",
            "format": "uri",
            "example": "http://{lead-owner}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-294>"
          },
          "dateAccepted": {
            "type": "string",
            "description": "The date/time the item was accepted by the recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-295>"
          },
          "dateRejected": {
            "type": "string",
            "format": "date-time",
            "description": "The date/time the item was rejected by the recipient",
            "x-parser-schema-id": "<anonymous-schema-296>"
          },
          "dateSent": {
            "description": "the date the lead was sent",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-297>"
          },
          "dateReceived": {
            "type": "string",
            "description": "The date/time the item was received by it's recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-298>"
          },
          "leadSource": {
            "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
            "x-range": [
              "Action",
              "RealEstateWebSite",
              "MobileApplication"
            ],
            "type": "array",
            "items": {
              "type": "object",
              "example": {
                "type": "AskAction",
                "object": {
                  "type": "Question",
                  "text": "Help me I'm trapped inside documentation."
                }
              },
              "x-parser-schema-id": "<anonymous-schema-300>"
            },
            "x-parser-schema-id": "<anonymous-schema-299>"
          }
        },
        "x-parser-schema-id": "Lead"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "the original owner of the lead",
    "x-range": [
      "RealEstateOrganization",
      "RealEstateAgent",
      "Person"
    ],
    "type": "string",
    "format": "uri",
    "example": "http://{lead-owner}.example.com/profile/card#me",
    "x-parser-schema-id": "<anonymous-schema-294>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Lead",
        "type": "object",
        "x-range": "Lead",
        "description": "a sales opportunity (object) offered by a sender to a recipient.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Lead"
            ],
            "description": "Lead",
            "x-parser-schema-id": "<anonymous-schema-290>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "object": {
            "description": "the lead (Contact)",
            "x-range": [
              "Contact"
            ],
            "type": "object",
            "example": {
              "type": "Contact",
              "name": "Joe Smith",
              "telephone": "731-620-9877 x6155",
              "email": "Giuseppe.Lang62@hotmail.com"
            },
            "x-parser-schema-id": "<anonymous-schema-291>"
          },
          "recipient": {
            "description": "the lead recipient",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-recipient}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-292>"
          },
          "sender": {
            "description": "the lead provider",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-sender}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-293>"
          },
          "owner": {
            "description": "the original owner of the lead",
            "x-range": [
              "RealEstateOrganization",
              "RealEstateAgent",
              "Person"
            ],
            "type": "string",
            "format": "uri",
            "example": "http://{lead-owner}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-294>"
          },
          "dateAccepted": {
            "type": "string",
            "description": "The date/time the item was accepted by the recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-295>"
          },
          "dateRejected": {
            "type": "string",
            "format": "date-time",
            "description": "The date/time the item was rejected by the recipient",
            "x-parser-schema-id": "<anonymous-schema-296>"
          },
          "dateSent": {
            "description": "the date the lead was sent",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-297>"
          },
          "dateReceived": {
            "type": "string",
            "description": "The date/time the item was received by it's recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-298>"
          },
          "leadSource": {
            "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
            "x-range": [
              "Action",
              "RealEstateWebSite",
              "MobileApplication"
            ],
            "type": "array",
            "items": {
              "type": "object",
              "example": {
                "type": "AskAction",
                "object": {
                  "type": "Question",
                  "text": "Help me I'm trapped inside documentation."
                }
              },
              "x-parser-schema-id": "<anonymous-schema-300>"
            },
            "x-parser-schema-id": "<anonymous-schema-299>"
          }
        },
        "x-parser-schema-id": "Lead"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "The date/time the item was accepted by the recipient",
    "x-range": "DateTime",
    "example": "2019-11-25T04:23:32.000Z",
    "x-parser-schema-id": "<anonymous-schema-295>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Lead",
        "type": "object",
        "x-range": "Lead",
        "description": "a sales opportunity (object) offered by a sender to a recipient.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Lead"
            ],
            "description": "Lead",
            "x-parser-schema-id": "<anonymous-schema-290>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "object": {
            "description": "the lead (Contact)",
            "x-range": [
              "Contact"
            ],
            "type": "object",
            "example": {
              "type": "Contact",
              "name": "Joe Smith",
              "telephone": "731-620-9877 x6155",
              "email": "Giuseppe.Lang62@hotmail.com"
            },
            "x-parser-schema-id": "<anonymous-schema-291>"
          },
          "recipient": {
            "description": "the lead recipient",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-recipient}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-292>"
          },
          "sender": {
            "description": "the lead provider",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-sender}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-293>"
          },
          "owner": {
            "description": "the original owner of the lead",
            "x-range": [
              "RealEstateOrganization",
              "RealEstateAgent",
              "Person"
            ],
            "type": "string",
            "format": "uri",
            "example": "http://{lead-owner}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-294>"
          },
          "dateAccepted": {
            "type": "string",
            "description": "The date/time the item was accepted by the recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-295>"
          },
          "dateRejected": {
            "type": "string",
            "format": "date-time",
            "description": "The date/time the item was rejected by the recipient",
            "x-parser-schema-id": "<anonymous-schema-296>"
          },
          "dateSent": {
            "description": "the date the lead was sent",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-297>"
          },
          "dateReceived": {
            "type": "string",
            "description": "The date/time the item was received by it's recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-298>"
          },
          "leadSource": {
            "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
            "x-range": [
              "Action",
              "RealEstateWebSite",
              "MobileApplication"
            ],
            "type": "array",
            "items": {
              "type": "object",
              "example": {
                "type": "AskAction",
                "object": {
                  "type": "Question",
                  "text": "Help me I'm trapped inside documentation."
                }
              },
              "x-parser-schema-id": "<anonymous-schema-300>"
            },
            "x-parser-schema-id": "<anonymous-schema-299>"
          }
        },
        "x-parser-schema-id": "Lead"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "date-time",
    "description": "The date/time the item was rejected by the recipient",
    "x-parser-schema-id": "<anonymous-schema-296>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Lead",
        "type": "object",
        "x-range": "Lead",
        "description": "a sales opportunity (object) offered by a sender to a recipient.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Lead"
            ],
            "description": "Lead",
            "x-parser-schema-id": "<anonymous-schema-290>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "object": {
            "description": "the lead (Contact)",
            "x-range": [
              "Contact"
            ],
            "type": "object",
            "example": {
              "type": "Contact",
              "name": "Joe Smith",
              "telephone": "731-620-9877 x6155",
              "email": "Giuseppe.Lang62@hotmail.com"
            },
            "x-parser-schema-id": "<anonymous-schema-291>"
          },
          "recipient": {
            "description": "the lead recipient",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-recipient}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-292>"
          },
          "sender": {
            "description": "the lead provider",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-sender}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-293>"
          },
          "owner": {
            "description": "the original owner of the lead",
            "x-range": [
              "RealEstateOrganization",
              "RealEstateAgent",
              "Person"
            ],
            "type": "string",
            "format": "uri",
            "example": "http://{lead-owner}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-294>"
          },
          "dateAccepted": {
            "type": "string",
            "description": "The date/time the item was accepted by the recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-295>"
          },
          "dateRejected": {
            "type": "string",
            "format": "date-time",
            "description": "The date/time the item was rejected by the recipient",
            "x-parser-schema-id": "<anonymous-schema-296>"
          },
          "dateSent": {
            "description": "the date the lead was sent",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-297>"
          },
          "dateReceived": {
            "type": "string",
            "description": "The date/time the item was received by it's recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-298>"
          },
          "leadSource": {
            "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
            "x-range": [
              "Action",
              "RealEstateWebSite",
              "MobileApplication"
            ],
            "type": "array",
            "items": {
              "type": "object",
              "example": {
                "type": "AskAction",
                "object": {
                  "type": "Question",
                  "text": "Help me I'm trapped inside documentation."
                }
              },
              "x-parser-schema-id": "<anonymous-schema-300>"
            },
            "x-parser-schema-id": "<anonymous-schema-299>"
          }
        },
        "x-parser-schema-id": "Lead"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "the date the lead was sent",
    "type": "string",
    "format": "date-time",
    "x-parser-schema-id": "<anonymous-schema-297>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Lead",
        "type": "object",
        "x-range": "Lead",
        "description": "a sales opportunity (object) offered by a sender to a recipient.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Lead"
            ],
            "description": "Lead",
            "x-parser-schema-id": "<anonymous-schema-290>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "object": {
            "description": "the lead (Contact)",
            "x-range": [
              "Contact"
            ],
            "type": "object",
            "example": {
              "type": "Contact",
              "name": "Joe Smith",
              "telephone": "731-620-9877 x6155",
              "email": "Giuseppe.Lang62@hotmail.com"
            },
            "x-parser-schema-id": "<anonymous-schema-291>"
          },
          "recipient": {
            "description": "the lead recipient",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-recipient}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-292>"
          },
          "sender": {
            "description": "the lead provider",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-sender}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-293>"
          },
          "owner": {
            "description": "the original owner of the lead",
            "x-range": [
              "RealEstateOrganization",
              "RealEstateAgent",
              "Person"
            ],
            "type": "string",
            "format": "uri",
            "example": "http://{lead-owner}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-294>"
          },
          "dateAccepted": {
            "type": "string",
            "description": "The date/time the item was accepted by the recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-295>"
          },
          "dateRejected": {
            "type": "string",
            "format": "date-time",
            "description": "The date/time the item was rejected by the recipient",
            "x-parser-schema-id": "<anonymous-schema-296>"
          },
          "dateSent": {
            "description": "the date the lead was sent",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-297>"
          },
          "dateReceived": {
            "type": "string",
            "description": "The date/time the item was received by it's recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-298>"
          },
          "leadSource": {
            "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
            "x-range": [
              "Action",
              "RealEstateWebSite",
              "MobileApplication"
            ],
            "type": "array",
            "items": {
              "type": "object",
              "example": {
                "type": "AskAction",
                "object": {
                  "type": "Question",
                  "text": "Help me I'm trapped inside documentation."
                }
              },
              "x-parser-schema-id": "<anonymous-schema-300>"
            },
            "x-parser-schema-id": "<anonymous-schema-299>"
          }
        },
        "x-parser-schema-id": "Lead"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "The date/time the item was received by it's recipient",
    "x-range": "DateTime",
    "example": "2019-11-25T04:23:32.000Z",
    "x-parser-schema-id": "<anonymous-schema-298>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Lead",
        "type": "object",
        "x-range": "Lead",
        "description": "a sales opportunity (object) offered by a sender to a recipient.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Lead"
            ],
            "description": "Lead",
            "x-parser-schema-id": "<anonymous-schema-290>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "object": {
            "description": "the lead (Contact)",
            "x-range": [
              "Contact"
            ],
            "type": "object",
            "example": {
              "type": "Contact",
              "name": "Joe Smith",
              "telephone": "731-620-9877 x6155",
              "email": "Giuseppe.Lang62@hotmail.com"
            },
            "x-parser-schema-id": "<anonymous-schema-291>"
          },
          "recipient": {
            "description": "the lead recipient",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-recipient}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-292>"
          },
          "sender": {
            "description": "the lead provider",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-sender}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-293>"
          },
          "owner": {
            "description": "the original owner of the lead",
            "x-range": [
              "RealEstateOrganization",
              "RealEstateAgent",
              "Person"
            ],
            "type": "string",
            "format": "uri",
            "example": "http://{lead-owner}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-294>"
          },
          "dateAccepted": {
            "type": "string",
            "description": "The date/time the item was accepted by the recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-295>"
          },
          "dateRejected": {
            "type": "string",
            "format": "date-time",
            "description": "The date/time the item was rejected by the recipient",
            "x-parser-schema-id": "<anonymous-schema-296>"
          },
          "dateSent": {
            "description": "the date the lead was sent",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-297>"
          },
          "dateReceived": {
            "type": "string",
            "description": "The date/time the item was received by it's recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-298>"
          },
          "leadSource": {
            "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
            "x-range": [
              "Action",
              "RealEstateWebSite",
              "MobileApplication"
            ],
            "type": "array",
            "items": {
              "type": "object",
              "example": {
                "type": "AskAction",
                "object": {
                  "type": "Question",
                  "text": "Help me I'm trapped inside documentation."
                }
              },
              "x-parser-schema-id": "<anonymous-schema-300>"
            },
            "x-parser-schema-id": "<anonymous-schema-299>"
          }
        },
        "x-parser-schema-id": "Lead"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
    "x-range": [
      "Action",
      "RealEstateWebSite",
      "MobileApplication"
    ],
    "type": "array",
    "items": {
      "type": "object",
      "example": {
        "type": "AskAction",
        "object": {
          "type": "Question",
          "text": "Help me I'm trapped inside documentation."
        }
      },
      "x-parser-schema-id": "<anonymous-schema-300>"
    },
    "x-parser-schema-id": "<anonymous-schema-299>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Lead",
        "type": "object",
        "x-range": "Lead",
        "description": "a sales opportunity (object) offered by a sender to a recipient.",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Lead"
            ],
            "description": "Lead",
            "x-parser-schema-id": "<anonymous-schema-290>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-209>"
          },
          "object": {
            "description": "the lead (Contact)",
            "x-range": [
              "Contact"
            ],
            "type": "object",
            "example": {
              "type": "Contact",
              "name": "Joe Smith",
              "telephone": "731-620-9877 x6155",
              "email": "Giuseppe.Lang62@hotmail.com"
            },
            "x-parser-schema-id": "<anonymous-schema-291>"
          },
          "recipient": {
            "description": "the lead recipient",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-recipient}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-292>"
          },
          "sender": {
            "description": "the lead provider",
            "type": "string",
            "format": "uri",
            "example": "http://{lead-sender}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-293>"
          },
          "owner": {
            "description": "the original owner of the lead",
            "x-range": [
              "RealEstateOrganization",
              "RealEstateAgent",
              "Person"
            ],
            "type": "string",
            "format": "uri",
            "example": "http://{lead-owner}.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-294>"
          },
          "dateAccepted": {
            "type": "string",
            "description": "The date/time the item was accepted by the recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-295>"
          },
          "dateRejected": {
            "type": "string",
            "format": "date-time",
            "description": "The date/time the item was rejected by the recipient",
            "x-parser-schema-id": "<anonymous-schema-296>"
          },
          "dateSent": {
            "description": "the date the lead was sent",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-297>"
          },
          "dateReceived": {
            "type": "string",
            "description": "The date/time the item was received by it's recipient",
            "x-range": "DateTime",
            "example": "2019-11-25T04:23:32.000Z",
            "x-parser-schema-id": "<anonymous-schema-298>"
          },
          "leadSource": {
            "description": "lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.",
            "x-range": [
              "Action",
              "RealEstateWebSite",
              "MobileApplication"
            ],
            "type": "array",
            "items": {
              "type": "object",
              "example": {
                "type": "AskAction",
                "object": {
                  "type": "Question",
                  "text": "Help me I'm trapped inside documentation."
                }
              },
              "x-parser-schema-id": "<anonymous-schema-300>"
            },
            "x-parser-schema-id": "<anonymous-schema-299>"
          }
        },
        "x-parser-schema-id": "Lead"
      },
      "options": {}
    }
  }
}












### Example

```json
{
  "type": "Lead",
  "identifier": {
    "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
  },
  "object": {
    "type": "Contact",
    "name": "Joe Smith",
    "telephone": "731-620-9877 x6155",
    "email": "Giuseppe.Lang62@hotmail.com"
  },
  "recipient": "http://{lead-recipient}.example.com/profile/card#me",
  "sender": "http://{lead-sender}.example.com/profile/card#me",
  "owner": "http://{lead-owner}.example.com/profile/card#me",
  "dateAccepted": "2019-11-25T04:23:32.000Z",
  "dateRejected": "2019-08-24T14:15:22Z",
  "dateSent": "2019-08-24T14:15:22Z",
  "dateReceived": "2019-11-25T04:23:32.000Z",
  "leadSource": [
    {
      "type": "AskAction",
      "object": {
        "type": "Question",
        "text": "Help me I'm trapped inside documentation."
      }
    }
  ]
}
```

