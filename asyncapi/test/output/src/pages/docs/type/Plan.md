

---
title: Plan
---

{
  "type": {
    "_json": {
      "description": "Plan",
      "type": "string",
      "enum": [
        "Plan"
      ],
      "x-parser-schema-id": "<anonymous-schema-348>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Plan",
          "type": "object",
          "description": "a collection of related tasks",
          "required": [
            "type"
          ],
          "x-range": "Plan",
          "properties": {
            "type": {
              "description": "Plan",
              "type": "string",
              "enum": [
                "Plan"
              ],
              "x-parser-schema-id": "<anonymous-schema-348>"
            },
            "name": {
              "type": "string",
              "description": "name of the plan",
              "example": "Ricky Follow Up Plan",
              "x-parser-schema-id": "<anonymous-schema-349>"
            },
            "description": {
              "type": "string",
              "description": "description of the item",
              "example": "this is the description of my awesome plan",
              "x-parser-schema-id": "<anonymous-schema-350>"
            },
            "member": {
              "type": "array",
              "description": "tasks which make up the plan",
              "items": {
                "title": "Task",
                "type": "object",
                "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
                "x-range": "Task",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "Task"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-352>"
                  },
                  "identifier": {
                    "type": "object",
                    "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                    "example": {
                      "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
                    },
                    "x-parser-schema-id": "<anonymous-schema-353>"
                  },
                  "actionStatus": {
                    "example": "PotentialActionStatus",
                    "type": "string",
                    "description": "disposition of the Action at the time of this action message.",
                    "x-range": [
                      "CompletedActionStatus",
                      "FailedActionStatus",
                      "ActiveActionStatus",
                      "PotentialActionStatus"
                    ],
                    "enum": [
                      "CompletedActionStatus",
                      "FailedActionStatus",
                      "ActiveActionStatus",
                      "PotentialActionStatus"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-354>"
                  },
                  "memberOf": {
                    "type": "object",
                    "x-range": "Plan",
                    "description": "a plan the task is associated with",
                    "example": {
                      "type": "Plan",
                      "identifier": {
                        "redPlan_ID": "xxxx"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-355>"
                  },
                  "agent": {
                    "type": "object",
                    "description": "the party who completed, or will complete the task",
                    "x-range": [
                      "Person",
                      "Organization",
                      "RealEstateAgent",
                      "Contact"
                    ],
                    "example": {
                      "type": "RealEstateAgent",
                      "id": "http://user.example.com/profile/card#me"
                    },
                    "x-parser-schema-id": "<anonymous-schema-356>"
                  },
                  "participant": {
                    "x-title": "participant",
                    "x-range": [
                      "Person",
                      "RealEstateAgent",
                      "RealEstateTeam",
                      "RealEstateOrganization"
                    ],
                    "description": "Other co-agents with a direct or indirect interest in the action.",
                    "type": "array",
                    "items": {
                      "type": "object",
                      "x-parser-schema-id": "<anonymous-schema-358>"
                    },
                    "example": [
                      {
                        "type": "Contact",
                        "name": "Bruce Wayne",
                        "email": "bruce@example.com",
                        "identifier": {
                          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                        }
                      }
                    ],
                    "x-parser-schema-id": "<anonymous-schema-357>"
                  },
                  "name": {
                    "type": "string",
                    "description": "name or title",
                    "example": "Call Ricky",
                    "x-parser-schema-id": "<anonymous-schema-359>"
                  },
                  "description": {
                    "type": "string",
                    "description": "task detailed description",
                    "example": "Agenda 1. Something 2. Something Else ...",
                    "x-parser-schema-id": "<anonymous-schema-360>"
                  },
                  "keywords": {
                    "title": "keywords",
                    "description": "keywords/tags for grouping and organizing the item in collections",
                    "type": "array",
                    "example": [
                      "Sphere of Influence",
                      "Past Customer"
                    ],
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-362>"
                    },
                    "x-parser-schema-id": "<anonymous-schema-361>"
                  },
                  "dateDue": {
                    "description": "the due date-time (ISO 8601 formated)",
                    "type": "string",
                    "format": "date-time",
                    "x-parser-schema-id": "<anonymous-schema-363>"
                  },
                  "dateCompleted": {
                    "type": "string",
                    "format": "date-time",
                    "description": "date the task was completed",
                    "x-parser-schema-id": "<anonymous-schema-364>"
                  },
                  "location": {
                    "type": "object",
                    "description": "the physical location where an event takes place",
                    "x-range": [
                      "Place"
                    ],
                    "example": {
                      "type": "Place",
                      "address": {
                        "streetAddress": "1007 Mountain Gate Rd",
                        "addressLocality": "Gotham City",
                        "addressRegion": "NJ",
                        "postalCode": "10007",
                        "addressCounty": "Gotham addressCounty",
                        "addressSubdivision": "Gotham Heights"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-365>"
                  }
                },
                "x-parser-schema-id": "Task"
              },
              "x-parser-schema-id": "<anonymous-schema-351>"
            },
            "creator": {
              "title": "creator",
              "description": "the item creator",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": "http://agent.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-126>"
            },
            "dateCreated": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-211>"
            },
            "dateModified": {
              "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-212>"
            },
            "dateCompleted": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-366>"
            }
          },
          "x-parser-schema-id": "Plan"
        },
        "options": {}
      }
    }
  },
  "name": {
    "_json": {
      "type": "string",
      "description": "name of the plan",
      "example": "Ricky Follow Up Plan",
      "x-parser-schema-id": "<anonymous-schema-349>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Plan",
          "type": "object",
          "description": "a collection of related tasks",
          "required": [
            "type"
          ],
          "x-range": "Plan",
          "properties": {
            "type": {
              "description": "Plan",
              "type": "string",
              "enum": [
                "Plan"
              ],
              "x-parser-schema-id": "<anonymous-schema-348>"
            },
            "name": {
              "type": "string",
              "description": "name of the plan",
              "example": "Ricky Follow Up Plan",
              "x-parser-schema-id": "<anonymous-schema-349>"
            },
            "description": {
              "type": "string",
              "description": "description of the item",
              "example": "this is the description of my awesome plan",
              "x-parser-schema-id": "<anonymous-schema-350>"
            },
            "member": {
              "type": "array",
              "description": "tasks which make up the plan",
              "items": {
                "title": "Task",
                "type": "object",
                "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
                "x-range": "Task",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "Task"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-352>"
                  },
                  "identifier": {
                    "type": "object",
                    "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                    "example": {
                      "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
                    },
                    "x-parser-schema-id": "<anonymous-schema-353>"
                  },
                  "actionStatus": {
                    "example": "PotentialActionStatus",
                    "type": "string",
                    "description": "disposition of the Action at the time of this action message.",
                    "x-range": [
                      "CompletedActionStatus",
                      "FailedActionStatus",
                      "ActiveActionStatus",
                      "PotentialActionStatus"
                    ],
                    "enum": [
                      "CompletedActionStatus",
                      "FailedActionStatus",
                      "ActiveActionStatus",
                      "PotentialActionStatus"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-354>"
                  },
                  "memberOf": {
                    "type": "object",
                    "x-range": "Plan",
                    "description": "a plan the task is associated with",
                    "example": {
                      "type": "Plan",
                      "identifier": {
                        "redPlan_ID": "xxxx"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-355>"
                  },
                  "agent": {
                    "type": "object",
                    "description": "the party who completed, or will complete the task",
                    "x-range": [
                      "Person",
                      "Organization",
                      "RealEstateAgent",
                      "Contact"
                    ],
                    "example": {
                      "type": "RealEstateAgent",
                      "id": "http://user.example.com/profile/card#me"
                    },
                    "x-parser-schema-id": "<anonymous-schema-356>"
                  },
                  "participant": {
                    "x-title": "participant",
                    "x-range": [
                      "Person",
                      "RealEstateAgent",
                      "RealEstateTeam",
                      "RealEstateOrganization"
                    ],
                    "description": "Other co-agents with a direct or indirect interest in the action.",
                    "type": "array",
                    "items": {
                      "type": "object",
                      "x-parser-schema-id": "<anonymous-schema-358>"
                    },
                    "example": [
                      {
                        "type": "Contact",
                        "name": "Bruce Wayne",
                        "email": "bruce@example.com",
                        "identifier": {
                          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                        }
                      }
                    ],
                    "x-parser-schema-id": "<anonymous-schema-357>"
                  },
                  "name": {
                    "type": "string",
                    "description": "name or title",
                    "example": "Call Ricky",
                    "x-parser-schema-id": "<anonymous-schema-359>"
                  },
                  "description": {
                    "type": "string",
                    "description": "task detailed description",
                    "example": "Agenda 1. Something 2. Something Else ...",
                    "x-parser-schema-id": "<anonymous-schema-360>"
                  },
                  "keywords": {
                    "title": "keywords",
                    "description": "keywords/tags for grouping and organizing the item in collections",
                    "type": "array",
                    "example": [
                      "Sphere of Influence",
                      "Past Customer"
                    ],
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-362>"
                    },
                    "x-parser-schema-id": "<anonymous-schema-361>"
                  },
                  "dateDue": {
                    "description": "the due date-time (ISO 8601 formated)",
                    "type": "string",
                    "format": "date-time",
                    "x-parser-schema-id": "<anonymous-schema-363>"
                  },
                  "dateCompleted": {
                    "type": "string",
                    "format": "date-time",
                    "description": "date the task was completed",
                    "x-parser-schema-id": "<anonymous-schema-364>"
                  },
                  "location": {
                    "type": "object",
                    "description": "the physical location where an event takes place",
                    "x-range": [
                      "Place"
                    ],
                    "example": {
                      "type": "Place",
                      "address": {
                        "streetAddress": "1007 Mountain Gate Rd",
                        "addressLocality": "Gotham City",
                        "addressRegion": "NJ",
                        "postalCode": "10007",
                        "addressCounty": "Gotham addressCounty",
                        "addressSubdivision": "Gotham Heights"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-365>"
                  }
                },
                "x-parser-schema-id": "Task"
              },
              "x-parser-schema-id": "<anonymous-schema-351>"
            },
            "creator": {
              "title": "creator",
              "description": "the item creator",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": "http://agent.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-126>"
            },
            "dateCreated": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-211>"
            },
            "dateModified": {
              "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-212>"
            },
            "dateCompleted": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-366>"
            }
          },
          "x-parser-schema-id": "Plan"
        },
        "options": {}
      }
    }
  },
  "description": {
    "_json": {
      "type": "string",
      "description": "description of the item",
      "example": "this is the description of my awesome plan",
      "x-parser-schema-id": "<anonymous-schema-350>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Plan",
          "type": "object",
          "description": "a collection of related tasks",
          "required": [
            "type"
          ],
          "x-range": "Plan",
          "properties": {
            "type": {
              "description": "Plan",
              "type": "string",
              "enum": [
                "Plan"
              ],
              "x-parser-schema-id": "<anonymous-schema-348>"
            },
            "name": {
              "type": "string",
              "description": "name of the plan",
              "example": "Ricky Follow Up Plan",
              "x-parser-schema-id": "<anonymous-schema-349>"
            },
            "description": {
              "type": "string",
              "description": "description of the item",
              "example": "this is the description of my awesome plan",
              "x-parser-schema-id": "<anonymous-schema-350>"
            },
            "member": {
              "type": "array",
              "description": "tasks which make up the plan",
              "items": {
                "title": "Task",
                "type": "object",
                "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
                "x-range": "Task",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "Task"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-352>"
                  },
                  "identifier": {
                    "type": "object",
                    "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                    "example": {
                      "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
                    },
                    "x-parser-schema-id": "<anonymous-schema-353>"
                  },
                  "actionStatus": {
                    "example": "PotentialActionStatus",
                    "type": "string",
                    "description": "disposition of the Action at the time of this action message.",
                    "x-range": [
                      "CompletedActionStatus",
                      "FailedActionStatus",
                      "ActiveActionStatus",
                      "PotentialActionStatus"
                    ],
                    "enum": [
                      "CompletedActionStatus",
                      "FailedActionStatus",
                      "ActiveActionStatus",
                      "PotentialActionStatus"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-354>"
                  },
                  "memberOf": {
                    "type": "object",
                    "x-range": "Plan",
                    "description": "a plan the task is associated with",
                    "example": {
                      "type": "Plan",
                      "identifier": {
                        "redPlan_ID": "xxxx"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-355>"
                  },
                  "agent": {
                    "type": "object",
                    "description": "the party who completed, or will complete the task",
                    "x-range": [
                      "Person",
                      "Organization",
                      "RealEstateAgent",
                      "Contact"
                    ],
                    "example": {
                      "type": "RealEstateAgent",
                      "id": "http://user.example.com/profile/card#me"
                    },
                    "x-parser-schema-id": "<anonymous-schema-356>"
                  },
                  "participant": {
                    "x-title": "participant",
                    "x-range": [
                      "Person",
                      "RealEstateAgent",
                      "RealEstateTeam",
                      "RealEstateOrganization"
                    ],
                    "description": "Other co-agents with a direct or indirect interest in the action.",
                    "type": "array",
                    "items": {
                      "type": "object",
                      "x-parser-schema-id": "<anonymous-schema-358>"
                    },
                    "example": [
                      {
                        "type": "Contact",
                        "name": "Bruce Wayne",
                        "email": "bruce@example.com",
                        "identifier": {
                          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                        }
                      }
                    ],
                    "x-parser-schema-id": "<anonymous-schema-357>"
                  },
                  "name": {
                    "type": "string",
                    "description": "name or title",
                    "example": "Call Ricky",
                    "x-parser-schema-id": "<anonymous-schema-359>"
                  },
                  "description": {
                    "type": "string",
                    "description": "task detailed description",
                    "example": "Agenda 1. Something 2. Something Else ...",
                    "x-parser-schema-id": "<anonymous-schema-360>"
                  },
                  "keywords": {
                    "title": "keywords",
                    "description": "keywords/tags for grouping and organizing the item in collections",
                    "type": "array",
                    "example": [
                      "Sphere of Influence",
                      "Past Customer"
                    ],
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-362>"
                    },
                    "x-parser-schema-id": "<anonymous-schema-361>"
                  },
                  "dateDue": {
                    "description": "the due date-time (ISO 8601 formated)",
                    "type": "string",
                    "format": "date-time",
                    "x-parser-schema-id": "<anonymous-schema-363>"
                  },
                  "dateCompleted": {
                    "type": "string",
                    "format": "date-time",
                    "description": "date the task was completed",
                    "x-parser-schema-id": "<anonymous-schema-364>"
                  },
                  "location": {
                    "type": "object",
                    "description": "the physical location where an event takes place",
                    "x-range": [
                      "Place"
                    ],
                    "example": {
                      "type": "Place",
                      "address": {
                        "streetAddress": "1007 Mountain Gate Rd",
                        "addressLocality": "Gotham City",
                        "addressRegion": "NJ",
                        "postalCode": "10007",
                        "addressCounty": "Gotham addressCounty",
                        "addressSubdivision": "Gotham Heights"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-365>"
                  }
                },
                "x-parser-schema-id": "Task"
              },
              "x-parser-schema-id": "<anonymous-schema-351>"
            },
            "creator": {
              "title": "creator",
              "description": "the item creator",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": "http://agent.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-126>"
            },
            "dateCreated": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-211>"
            },
            "dateModified": {
              "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-212>"
            },
            "dateCompleted": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-366>"
            }
          },
          "x-parser-schema-id": "Plan"
        },
        "options": {}
      }
    }
  },
  "member": {
    "_json": {
      "type": "array",
      "description": "tasks which make up the plan",
      "items": {
        "title": "Task",
        "type": "object",
        "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
        "x-range": "Task",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "Task"
            ],
            "x-parser-schema-id": "<anonymous-schema-352>"
          },
          "identifier": {
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "example": {
              "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
            },
            "x-parser-schema-id": "<anonymous-schema-353>"
          },
          "actionStatus": {
            "example": "PotentialActionStatus",
            "type": "string",
            "description": "disposition of the Action at the time of this action message.",
            "x-range": [
              "CompletedActionStatus",
              "FailedActionStatus",
              "ActiveActionStatus",
              "PotentialActionStatus"
            ],
            "enum": [
              "CompletedActionStatus",
              "FailedActionStatus",
              "ActiveActionStatus",
              "PotentialActionStatus"
            ],
            "x-parser-schema-id": "<anonymous-schema-354>"
          },
          "memberOf": {
            "type": "object",
            "x-range": "Plan",
            "description": "a plan the task is associated with",
            "example": {
              "type": "Plan",
              "identifier": {
                "redPlan_ID": "xxxx"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-355>"
          },
          "agent": {
            "type": "object",
            "description": "the party who completed, or will complete the task",
            "x-range": [
              "Person",
              "Organization",
              "RealEstateAgent",
              "Contact"
            ],
            "example": {
              "type": "RealEstateAgent",
              "id": "http://user.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-356>"
          },
          "participant": {
            "x-title": "participant",
            "x-range": [
              "Person",
              "RealEstateAgent",
              "RealEstateTeam",
              "RealEstateOrganization"
            ],
            "description": "Other co-agents with a direct or indirect interest in the action.",
            "type": "array",
            "items": {
              "type": "object",
              "x-parser-schema-id": "<anonymous-schema-358>"
            },
            "example": [
              {
                "type": "Contact",
                "name": "Bruce Wayne",
                "email": "bruce@example.com",
                "identifier": {
                  "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                }
              }
            ],
            "x-parser-schema-id": "<anonymous-schema-357>"
          },
          "name": {
            "type": "string",
            "description": "name or title",
            "example": "Call Ricky",
            "x-parser-schema-id": "<anonymous-schema-359>"
          },
          "description": {
            "type": "string",
            "description": "task detailed description",
            "example": "Agenda 1. Something 2. Something Else ...",
            "x-parser-schema-id": "<anonymous-schema-360>"
          },
          "keywords": {
            "title": "keywords",
            "description": "keywords/tags for grouping and organizing the item in collections",
            "type": "array",
            "example": [
              "Sphere of Influence",
              "Past Customer"
            ],
            "items": {
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-362>"
            },
            "x-parser-schema-id": "<anonymous-schema-361>"
          },
          "dateDue": {
            "description": "the due date-time (ISO 8601 formated)",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-363>"
          },
          "dateCompleted": {
            "type": "string",
            "format": "date-time",
            "description": "date the task was completed",
            "x-parser-schema-id": "<anonymous-schema-364>"
          },
          "location": {
            "type": "object",
            "description": "the physical location where an event takes place",
            "x-range": [
              "Place"
            ],
            "example": {
              "type": "Place",
              "address": {
                "streetAddress": "1007 Mountain Gate Rd",
                "addressLocality": "Gotham City",
                "addressRegion": "NJ",
                "postalCode": "10007",
                "addressCounty": "Gotham addressCounty",
                "addressSubdivision": "Gotham Heights"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-365>"
          }
        },
        "x-parser-schema-id": "Task"
      },
      "x-parser-schema-id": "<anonymous-schema-351>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Plan",
          "type": "object",
          "description": "a collection of related tasks",
          "required": [
            "type"
          ],
          "x-range": "Plan",
          "properties": {
            "type": {
              "description": "Plan",
              "type": "string",
              "enum": [
                "Plan"
              ],
              "x-parser-schema-id": "<anonymous-schema-348>"
            },
            "name": {
              "type": "string",
              "description": "name of the plan",
              "example": "Ricky Follow Up Plan",
              "x-parser-schema-id": "<anonymous-schema-349>"
            },
            "description": {
              "type": "string",
              "description": "description of the item",
              "example": "this is the description of my awesome plan",
              "x-parser-schema-id": "<anonymous-schema-350>"
            },
            "member": {
              "type": "array",
              "description": "tasks which make up the plan",
              "items": {
                "title": "Task",
                "type": "object",
                "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
                "x-range": "Task",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "Task"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-352>"
                  },
                  "identifier": {
                    "type": "object",
                    "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                    "example": {
                      "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
                    },
                    "x-parser-schema-id": "<anonymous-schema-353>"
                  },
                  "actionStatus": {
                    "example": "PotentialActionStatus",
                    "type": "string",
                    "description": "disposition of the Action at the time of this action message.",
                    "x-range": [
                      "CompletedActionStatus",
                      "FailedActionStatus",
                      "ActiveActionStatus",
                      "PotentialActionStatus"
                    ],
                    "enum": [
                      "CompletedActionStatus",
                      "FailedActionStatus",
                      "ActiveActionStatus",
                      "PotentialActionStatus"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-354>"
                  },
                  "memberOf": {
                    "type": "object",
                    "x-range": "Plan",
                    "description": "a plan the task is associated with",
                    "example": {
                      "type": "Plan",
                      "identifier": {
                        "redPlan_ID": "xxxx"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-355>"
                  },
                  "agent": {
                    "type": "object",
                    "description": "the party who completed, or will complete the task",
                    "x-range": [
                      "Person",
                      "Organization",
                      "RealEstateAgent",
                      "Contact"
                    ],
                    "example": {
                      "type": "RealEstateAgent",
                      "id": "http://user.example.com/profile/card#me"
                    },
                    "x-parser-schema-id": "<anonymous-schema-356>"
                  },
                  "participant": {
                    "x-title": "participant",
                    "x-range": [
                      "Person",
                      "RealEstateAgent",
                      "RealEstateTeam",
                      "RealEstateOrganization"
                    ],
                    "description": "Other co-agents with a direct or indirect interest in the action.",
                    "type": "array",
                    "items": {
                      "type": "object",
                      "x-parser-schema-id": "<anonymous-schema-358>"
                    },
                    "example": [
                      {
                        "type": "Contact",
                        "name": "Bruce Wayne",
                        "email": "bruce@example.com",
                        "identifier": {
                          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                        }
                      }
                    ],
                    "x-parser-schema-id": "<anonymous-schema-357>"
                  },
                  "name": {
                    "type": "string",
                    "description": "name or title",
                    "example": "Call Ricky",
                    "x-parser-schema-id": "<anonymous-schema-359>"
                  },
                  "description": {
                    "type": "string",
                    "description": "task detailed description",
                    "example": "Agenda 1. Something 2. Something Else ...",
                    "x-parser-schema-id": "<anonymous-schema-360>"
                  },
                  "keywords": {
                    "title": "keywords",
                    "description": "keywords/tags for grouping and organizing the item in collections",
                    "type": "array",
                    "example": [
                      "Sphere of Influence",
                      "Past Customer"
                    ],
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-362>"
                    },
                    "x-parser-schema-id": "<anonymous-schema-361>"
                  },
                  "dateDue": {
                    "description": "the due date-time (ISO 8601 formated)",
                    "type": "string",
                    "format": "date-time",
                    "x-parser-schema-id": "<anonymous-schema-363>"
                  },
                  "dateCompleted": {
                    "type": "string",
                    "format": "date-time",
                    "description": "date the task was completed",
                    "x-parser-schema-id": "<anonymous-schema-364>"
                  },
                  "location": {
                    "type": "object",
                    "description": "the physical location where an event takes place",
                    "x-range": [
                      "Place"
                    ],
                    "example": {
                      "type": "Place",
                      "address": {
                        "streetAddress": "1007 Mountain Gate Rd",
                        "addressLocality": "Gotham City",
                        "addressRegion": "NJ",
                        "postalCode": "10007",
                        "addressCounty": "Gotham addressCounty",
                        "addressSubdivision": "Gotham Heights"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-365>"
                  }
                },
                "x-parser-schema-id": "Task"
              },
              "x-parser-schema-id": "<anonymous-schema-351>"
            },
            "creator": {
              "title": "creator",
              "description": "the item creator",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": "http://agent.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-126>"
            },
            "dateCreated": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-211>"
            },
            "dateModified": {
              "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-212>"
            },
            "dateCompleted": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-366>"
            }
          },
          "x-parser-schema-id": "Plan"
        },
        "options": {}
      }
    }
  },
  "creator": {
    "_json": {
      "title": "creator",
      "description": "the item creator",
      "x-range": [
        "Person",
        "Organization"
      ],
      "example": "http://agent.example.com/profile/card#me",
      "x-parser-schema-id": "<anonymous-schema-126>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Plan",
          "type": "object",
          "description": "a collection of related tasks",
          "required": [
            "type"
          ],
          "x-range": "Plan",
          "properties": {
            "type": {
              "description": "Plan",
              "type": "string",
              "enum": [
                "Plan"
              ],
              "x-parser-schema-id": "<anonymous-schema-348>"
            },
            "name": {
              "type": "string",
              "description": "name of the plan",
              "example": "Ricky Follow Up Plan",
              "x-parser-schema-id": "<anonymous-schema-349>"
            },
            "description": {
              "type": "string",
              "description": "description of the item",
              "example": "this is the description of my awesome plan",
              "x-parser-schema-id": "<anonymous-schema-350>"
            },
            "member": {
              "type": "array",
              "description": "tasks which make up the plan",
              "items": {
                "title": "Task",
                "type": "object",
                "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
                "x-range": "Task",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "Task"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-352>"
                  },
                  "identifier": {
                    "type": "object",
                    "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                    "example": {
                      "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
                    },
                    "x-parser-schema-id": "<anonymous-schema-353>"
                  },
                  "actionStatus": {
                    "example": "PotentialActionStatus",
                    "type": "string",
                    "description": "disposition of the Action at the time of this action message.",
                    "x-range": [
                      "CompletedActionStatus",
                      "FailedActionStatus",
                      "ActiveActionStatus",
                      "PotentialActionStatus"
                    ],
                    "enum": [
                      "CompletedActionStatus",
                      "FailedActionStatus",
                      "ActiveActionStatus",
                      "PotentialActionStatus"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-354>"
                  },
                  "memberOf": {
                    "type": "object",
                    "x-range": "Plan",
                    "description": "a plan the task is associated with",
                    "example": {
                      "type": "Plan",
                      "identifier": {
                        "redPlan_ID": "xxxx"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-355>"
                  },
                  "agent": {
                    "type": "object",
                    "description": "the party who completed, or will complete the task",
                    "x-range": [
                      "Person",
                      "Organization",
                      "RealEstateAgent",
                      "Contact"
                    ],
                    "example": {
                      "type": "RealEstateAgent",
                      "id": "http://user.example.com/profile/card#me"
                    },
                    "x-parser-schema-id": "<anonymous-schema-356>"
                  },
                  "participant": {
                    "x-title": "participant",
                    "x-range": [
                      "Person",
                      "RealEstateAgent",
                      "RealEstateTeam",
                      "RealEstateOrganization"
                    ],
                    "description": "Other co-agents with a direct or indirect interest in the action.",
                    "type": "array",
                    "items": {
                      "type": "object",
                      "x-parser-schema-id": "<anonymous-schema-358>"
                    },
                    "example": [
                      {
                        "type": "Contact",
                        "name": "Bruce Wayne",
                        "email": "bruce@example.com",
                        "identifier": {
                          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                        }
                      }
                    ],
                    "x-parser-schema-id": "<anonymous-schema-357>"
                  },
                  "name": {
                    "type": "string",
                    "description": "name or title",
                    "example": "Call Ricky",
                    "x-parser-schema-id": "<anonymous-schema-359>"
                  },
                  "description": {
                    "type": "string",
                    "description": "task detailed description",
                    "example": "Agenda 1. Something 2. Something Else ...",
                    "x-parser-schema-id": "<anonymous-schema-360>"
                  },
                  "keywords": {
                    "title": "keywords",
                    "description": "keywords/tags for grouping and organizing the item in collections",
                    "type": "array",
                    "example": [
                      "Sphere of Influence",
                      "Past Customer"
                    ],
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-362>"
                    },
                    "x-parser-schema-id": "<anonymous-schema-361>"
                  },
                  "dateDue": {
                    "description": "the due date-time (ISO 8601 formated)",
                    "type": "string",
                    "format": "date-time",
                    "x-parser-schema-id": "<anonymous-schema-363>"
                  },
                  "dateCompleted": {
                    "type": "string",
                    "format": "date-time",
                    "description": "date the task was completed",
                    "x-parser-schema-id": "<anonymous-schema-364>"
                  },
                  "location": {
                    "type": "object",
                    "description": "the physical location where an event takes place",
                    "x-range": [
                      "Place"
                    ],
                    "example": {
                      "type": "Place",
                      "address": {
                        "streetAddress": "1007 Mountain Gate Rd",
                        "addressLocality": "Gotham City",
                        "addressRegion": "NJ",
                        "postalCode": "10007",
                        "addressCounty": "Gotham addressCounty",
                        "addressSubdivision": "Gotham Heights"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-365>"
                  }
                },
                "x-parser-schema-id": "Task"
              },
              "x-parser-schema-id": "<anonymous-schema-351>"
            },
            "creator": {
              "title": "creator",
              "description": "the item creator",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": "http://agent.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-126>"
            },
            "dateCreated": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-211>"
            },
            "dateModified": {
              "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-212>"
            },
            "dateCompleted": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-366>"
            }
          },
          "x-parser-schema-id": "Plan"
        },
        "options": {}
      }
    }
  },
  "dateCreated": {
    "_json": {
      "description": "The date on which the item was created.",
      "type": "string",
      "format": "date-time",
      "x-parser-schema-id": "<anonymous-schema-211>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Plan",
          "type": "object",
          "description": "a collection of related tasks",
          "required": [
            "type"
          ],
          "x-range": "Plan",
          "properties": {
            "type": {
              "description": "Plan",
              "type": "string",
              "enum": [
                "Plan"
              ],
              "x-parser-schema-id": "<anonymous-schema-348>"
            },
            "name": {
              "type": "string",
              "description": "name of the plan",
              "example": "Ricky Follow Up Plan",
              "x-parser-schema-id": "<anonymous-schema-349>"
            },
            "description": {
              "type": "string",
              "description": "description of the item",
              "example": "this is the description of my awesome plan",
              "x-parser-schema-id": "<anonymous-schema-350>"
            },
            "member": {
              "type": "array",
              "description": "tasks which make up the plan",
              "items": {
                "title": "Task",
                "type": "object",
                "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
                "x-range": "Task",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "Task"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-352>"
                  },
                  "identifier": {
                    "type": "object",
                    "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                    "example": {
                      "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
                    },
                    "x-parser-schema-id": "<anonymous-schema-353>"
                  },
                  "actionStatus": {
                    "example": "PotentialActionStatus",
                    "type": "string",
                    "description": "disposition of the Action at the time of this action message.",
                    "x-range": [
                      "CompletedActionStatus",
                      "FailedActionStatus",
                      "ActiveActionStatus",
                      "PotentialActionStatus"
                    ],
                    "enum": [
                      "CompletedActionStatus",
                      "FailedActionStatus",
                      "ActiveActionStatus",
                      "PotentialActionStatus"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-354>"
                  },
                  "memberOf": {
                    "type": "object",
                    "x-range": "Plan",
                    "description": "a plan the task is associated with",
                    "example": {
                      "type": "Plan",
                      "identifier": {
                        "redPlan_ID": "xxxx"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-355>"
                  },
                  "agent": {
                    "type": "object",
                    "description": "the party who completed, or will complete the task",
                    "x-range": [
                      "Person",
                      "Organization",
                      "RealEstateAgent",
                      "Contact"
                    ],
                    "example": {
                      "type": "RealEstateAgent",
                      "id": "http://user.example.com/profile/card#me"
                    },
                    "x-parser-schema-id": "<anonymous-schema-356>"
                  },
                  "participant": {
                    "x-title": "participant",
                    "x-range": [
                      "Person",
                      "RealEstateAgent",
                      "RealEstateTeam",
                      "RealEstateOrganization"
                    ],
                    "description": "Other co-agents with a direct or indirect interest in the action.",
                    "type": "array",
                    "items": {
                      "type": "object",
                      "x-parser-schema-id": "<anonymous-schema-358>"
                    },
                    "example": [
                      {
                        "type": "Contact",
                        "name": "Bruce Wayne",
                        "email": "bruce@example.com",
                        "identifier": {
                          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                        }
                      }
                    ],
                    "x-parser-schema-id": "<anonymous-schema-357>"
                  },
                  "name": {
                    "type": "string",
                    "description": "name or title",
                    "example": "Call Ricky",
                    "x-parser-schema-id": "<anonymous-schema-359>"
                  },
                  "description": {
                    "type": "string",
                    "description": "task detailed description",
                    "example": "Agenda 1. Something 2. Something Else ...",
                    "x-parser-schema-id": "<anonymous-schema-360>"
                  },
                  "keywords": {
                    "title": "keywords",
                    "description": "keywords/tags for grouping and organizing the item in collections",
                    "type": "array",
                    "example": [
                      "Sphere of Influence",
                      "Past Customer"
                    ],
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-362>"
                    },
                    "x-parser-schema-id": "<anonymous-schema-361>"
                  },
                  "dateDue": {
                    "description": "the due date-time (ISO 8601 formated)",
                    "type": "string",
                    "format": "date-time",
                    "x-parser-schema-id": "<anonymous-schema-363>"
                  },
                  "dateCompleted": {
                    "type": "string",
                    "format": "date-time",
                    "description": "date the task was completed",
                    "x-parser-schema-id": "<anonymous-schema-364>"
                  },
                  "location": {
                    "type": "object",
                    "description": "the physical location where an event takes place",
                    "x-range": [
                      "Place"
                    ],
                    "example": {
                      "type": "Place",
                      "address": {
                        "streetAddress": "1007 Mountain Gate Rd",
                        "addressLocality": "Gotham City",
                        "addressRegion": "NJ",
                        "postalCode": "10007",
                        "addressCounty": "Gotham addressCounty",
                        "addressSubdivision": "Gotham Heights"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-365>"
                  }
                },
                "x-parser-schema-id": "Task"
              },
              "x-parser-schema-id": "<anonymous-schema-351>"
            },
            "creator": {
              "title": "creator",
              "description": "the item creator",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": "http://agent.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-126>"
            },
            "dateCreated": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-211>"
            },
            "dateModified": {
              "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-212>"
            },
            "dateCompleted": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-366>"
            }
          },
          "x-parser-schema-id": "Plan"
        },
        "options": {}
      }
    }
  },
  "dateModified": {
    "_json": {
      "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
      "type": "string",
      "format": "date-time",
      "x-parser-schema-id": "<anonymous-schema-212>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Plan",
          "type": "object",
          "description": "a collection of related tasks",
          "required": [
            "type"
          ],
          "x-range": "Plan",
          "properties": {
            "type": {
              "description": "Plan",
              "type": "string",
              "enum": [
                "Plan"
              ],
              "x-parser-schema-id": "<anonymous-schema-348>"
            },
            "name": {
              "type": "string",
              "description": "name of the plan",
              "example": "Ricky Follow Up Plan",
              "x-parser-schema-id": "<anonymous-schema-349>"
            },
            "description": {
              "type": "string",
              "description": "description of the item",
              "example": "this is the description of my awesome plan",
              "x-parser-schema-id": "<anonymous-schema-350>"
            },
            "member": {
              "type": "array",
              "description": "tasks which make up the plan",
              "items": {
                "title": "Task",
                "type": "object",
                "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
                "x-range": "Task",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "Task"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-352>"
                  },
                  "identifier": {
                    "type": "object",
                    "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                    "example": {
                      "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
                    },
                    "x-parser-schema-id": "<anonymous-schema-353>"
                  },
                  "actionStatus": {
                    "example": "PotentialActionStatus",
                    "type": "string",
                    "description": "disposition of the Action at the time of this action message.",
                    "x-range": [
                      "CompletedActionStatus",
                      "FailedActionStatus",
                      "ActiveActionStatus",
                      "PotentialActionStatus"
                    ],
                    "enum": [
                      "CompletedActionStatus",
                      "FailedActionStatus",
                      "ActiveActionStatus",
                      "PotentialActionStatus"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-354>"
                  },
                  "memberOf": {
                    "type": "object",
                    "x-range": "Plan",
                    "description": "a plan the task is associated with",
                    "example": {
                      "type": "Plan",
                      "identifier": {
                        "redPlan_ID": "xxxx"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-355>"
                  },
                  "agent": {
                    "type": "object",
                    "description": "the party who completed, or will complete the task",
                    "x-range": [
                      "Person",
                      "Organization",
                      "RealEstateAgent",
                      "Contact"
                    ],
                    "example": {
                      "type": "RealEstateAgent",
                      "id": "http://user.example.com/profile/card#me"
                    },
                    "x-parser-schema-id": "<anonymous-schema-356>"
                  },
                  "participant": {
                    "x-title": "participant",
                    "x-range": [
                      "Person",
                      "RealEstateAgent",
                      "RealEstateTeam",
                      "RealEstateOrganization"
                    ],
                    "description": "Other co-agents with a direct or indirect interest in the action.",
                    "type": "array",
                    "items": {
                      "type": "object",
                      "x-parser-schema-id": "<anonymous-schema-358>"
                    },
                    "example": [
                      {
                        "type": "Contact",
                        "name": "Bruce Wayne",
                        "email": "bruce@example.com",
                        "identifier": {
                          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                        }
                      }
                    ],
                    "x-parser-schema-id": "<anonymous-schema-357>"
                  },
                  "name": {
                    "type": "string",
                    "description": "name or title",
                    "example": "Call Ricky",
                    "x-parser-schema-id": "<anonymous-schema-359>"
                  },
                  "description": {
                    "type": "string",
                    "description": "task detailed description",
                    "example": "Agenda 1. Something 2. Something Else ...",
                    "x-parser-schema-id": "<anonymous-schema-360>"
                  },
                  "keywords": {
                    "title": "keywords",
                    "description": "keywords/tags for grouping and organizing the item in collections",
                    "type": "array",
                    "example": [
                      "Sphere of Influence",
                      "Past Customer"
                    ],
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-362>"
                    },
                    "x-parser-schema-id": "<anonymous-schema-361>"
                  },
                  "dateDue": {
                    "description": "the due date-time (ISO 8601 formated)",
                    "type": "string",
                    "format": "date-time",
                    "x-parser-schema-id": "<anonymous-schema-363>"
                  },
                  "dateCompleted": {
                    "type": "string",
                    "format": "date-time",
                    "description": "date the task was completed",
                    "x-parser-schema-id": "<anonymous-schema-364>"
                  },
                  "location": {
                    "type": "object",
                    "description": "the physical location where an event takes place",
                    "x-range": [
                      "Place"
                    ],
                    "example": {
                      "type": "Place",
                      "address": {
                        "streetAddress": "1007 Mountain Gate Rd",
                        "addressLocality": "Gotham City",
                        "addressRegion": "NJ",
                        "postalCode": "10007",
                        "addressCounty": "Gotham addressCounty",
                        "addressSubdivision": "Gotham Heights"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-365>"
                  }
                },
                "x-parser-schema-id": "Task"
              },
              "x-parser-schema-id": "<anonymous-schema-351>"
            },
            "creator": {
              "title": "creator",
              "description": "the item creator",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": "http://agent.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-126>"
            },
            "dateCreated": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-211>"
            },
            "dateModified": {
              "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-212>"
            },
            "dateCompleted": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-366>"
            }
          },
          "x-parser-schema-id": "Plan"
        },
        "options": {}
      }
    }
  },
  "dateCompleted": {
    "_json": {
      "description": "The date on which the item was created.",
      "type": "string",
      "format": "date-time",
      "x-parser-schema-id": "<anonymous-schema-366>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Plan",
          "type": "object",
          "description": "a collection of related tasks",
          "required": [
            "type"
          ],
          "x-range": "Plan",
          "properties": {
            "type": {
              "description": "Plan",
              "type": "string",
              "enum": [
                "Plan"
              ],
              "x-parser-schema-id": "<anonymous-schema-348>"
            },
            "name": {
              "type": "string",
              "description": "name of the plan",
              "example": "Ricky Follow Up Plan",
              "x-parser-schema-id": "<anonymous-schema-349>"
            },
            "description": {
              "type": "string",
              "description": "description of the item",
              "example": "this is the description of my awesome plan",
              "x-parser-schema-id": "<anonymous-schema-350>"
            },
            "member": {
              "type": "array",
              "description": "tasks which make up the plan",
              "items": {
                "title": "Task",
                "type": "object",
                "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
                "x-range": "Task",
                "properties": {
                  "type": {
                    "type": "string",
                    "description": "The item type (Linked-Data @type)",
                    "enum": [
                      "Task"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-352>"
                  },
                  "identifier": {
                    "type": "object",
                    "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                    "example": {
                      "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
                    },
                    "x-parser-schema-id": "<anonymous-schema-353>"
                  },
                  "actionStatus": {
                    "example": "PotentialActionStatus",
                    "type": "string",
                    "description": "disposition of the Action at the time of this action message.",
                    "x-range": [
                      "CompletedActionStatus",
                      "FailedActionStatus",
                      "ActiveActionStatus",
                      "PotentialActionStatus"
                    ],
                    "enum": [
                      "CompletedActionStatus",
                      "FailedActionStatus",
                      "ActiveActionStatus",
                      "PotentialActionStatus"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-354>"
                  },
                  "memberOf": {
                    "type": "object",
                    "x-range": "Plan",
                    "description": "a plan the task is associated with",
                    "example": {
                      "type": "Plan",
                      "identifier": {
                        "redPlan_ID": "xxxx"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-355>"
                  },
                  "agent": {
                    "type": "object",
                    "description": "the party who completed, or will complete the task",
                    "x-range": [
                      "Person",
                      "Organization",
                      "RealEstateAgent",
                      "Contact"
                    ],
                    "example": {
                      "type": "RealEstateAgent",
                      "id": "http://user.example.com/profile/card#me"
                    },
                    "x-parser-schema-id": "<anonymous-schema-356>"
                  },
                  "participant": {
                    "x-title": "participant",
                    "x-range": [
                      "Person",
                      "RealEstateAgent",
                      "RealEstateTeam",
                      "RealEstateOrganization"
                    ],
                    "description": "Other co-agents with a direct or indirect interest in the action.",
                    "type": "array",
                    "items": {
                      "type": "object",
                      "x-parser-schema-id": "<anonymous-schema-358>"
                    },
                    "example": [
                      {
                        "type": "Contact",
                        "name": "Bruce Wayne",
                        "email": "bruce@example.com",
                        "identifier": {
                          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                        }
                      }
                    ],
                    "x-parser-schema-id": "<anonymous-schema-357>"
                  },
                  "name": {
                    "type": "string",
                    "description": "name or title",
                    "example": "Call Ricky",
                    "x-parser-schema-id": "<anonymous-schema-359>"
                  },
                  "description": {
                    "type": "string",
                    "description": "task detailed description",
                    "example": "Agenda 1. Something 2. Something Else ...",
                    "x-parser-schema-id": "<anonymous-schema-360>"
                  },
                  "keywords": {
                    "title": "keywords",
                    "description": "keywords/tags for grouping and organizing the item in collections",
                    "type": "array",
                    "example": [
                      "Sphere of Influence",
                      "Past Customer"
                    ],
                    "items": {
                      "type": "string",
                      "x-parser-schema-id": "<anonymous-schema-362>"
                    },
                    "x-parser-schema-id": "<anonymous-schema-361>"
                  },
                  "dateDue": {
                    "description": "the due date-time (ISO 8601 formated)",
                    "type": "string",
                    "format": "date-time",
                    "x-parser-schema-id": "<anonymous-schema-363>"
                  },
                  "dateCompleted": {
                    "type": "string",
                    "format": "date-time",
                    "description": "date the task was completed",
                    "x-parser-schema-id": "<anonymous-schema-364>"
                  },
                  "location": {
                    "type": "object",
                    "description": "the physical location where an event takes place",
                    "x-range": [
                      "Place"
                    ],
                    "example": {
                      "type": "Place",
                      "address": {
                        "streetAddress": "1007 Mountain Gate Rd",
                        "addressLocality": "Gotham City",
                        "addressRegion": "NJ",
                        "postalCode": "10007",
                        "addressCounty": "Gotham addressCounty",
                        "addressSubdivision": "Gotham Heights"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-365>"
                  }
                },
                "x-parser-schema-id": "Task"
              },
              "x-parser-schema-id": "<anonymous-schema-351>"
            },
            "creator": {
              "title": "creator",
              "description": "the item creator",
              "x-range": [
                "Person",
                "Organization"
              ],
              "example": "http://agent.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-126>"
            },
            "dateCreated": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-211>"
            },
            "dateModified": {
              "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-212>"
            },
            "dateCompleted": {
              "description": "The date on which the item was created.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-366>"
            }
          },
          "x-parser-schema-id": "Plan"
        },
        "options": {}
      }
    }
  }
}


# Plan

a collection of related tasks



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "description": "Plan",
    "type": "string",
    "enum": [
      "Plan"
    ],
    "x-parser-schema-id": "<anonymous-schema-348>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Plan",
        "type": "object",
        "description": "a collection of related tasks",
        "required": [
          "type"
        ],
        "x-range": "Plan",
        "properties": {
          "type": {
            "description": "Plan",
            "type": "string",
            "enum": [
              "Plan"
            ],
            "x-parser-schema-id": "<anonymous-schema-348>"
          },
          "name": {
            "type": "string",
            "description": "name of the plan",
            "example": "Ricky Follow Up Plan",
            "x-parser-schema-id": "<anonymous-schema-349>"
          },
          "description": {
            "type": "string",
            "description": "description of the item",
            "example": "this is the description of my awesome plan",
            "x-parser-schema-id": "<anonymous-schema-350>"
          },
          "member": {
            "type": "array",
            "description": "tasks which make up the plan",
            "items": {
              "title": "Task",
              "type": "object",
              "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
              "x-range": "Task",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "enum": [
                    "Task"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-352>"
                },
                "identifier": {
                  "type": "object",
                  "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                  "example": {
                    "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
                  },
                  "x-parser-schema-id": "<anonymous-schema-353>"
                },
                "actionStatus": {
                  "example": "PotentialActionStatus",
                  "type": "string",
                  "description": "disposition of the Action at the time of this action message.",
                  "x-range": [
                    "CompletedActionStatus",
                    "FailedActionStatus",
                    "ActiveActionStatus",
                    "PotentialActionStatus"
                  ],
                  "enum": [
                    "CompletedActionStatus",
                    "FailedActionStatus",
                    "ActiveActionStatus",
                    "PotentialActionStatus"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-354>"
                },
                "memberOf": {
                  "type": "object",
                  "x-range": "Plan",
                  "description": "a plan the task is associated with",
                  "example": {
                    "type": "Plan",
                    "identifier": {
                      "redPlan_ID": "xxxx"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-355>"
                },
                "agent": {
                  "type": "object",
                  "description": "the party who completed, or will complete the task",
                  "x-range": [
                    "Person",
                    "Organization",
                    "RealEstateAgent",
                    "Contact"
                  ],
                  "example": {
                    "type": "RealEstateAgent",
                    "id": "http://user.example.com/profile/card#me"
                  },
                  "x-parser-schema-id": "<anonymous-schema-356>"
                },
                "participant": {
                  "x-title": "participant",
                  "x-range": [
                    "Person",
                    "RealEstateAgent",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "description": "Other co-agents with a direct or indirect interest in the action.",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-358>"
                  },
                  "example": [
                    {
                      "type": "Contact",
                      "name": "Bruce Wayne",
                      "email": "bruce@example.com",
                      "identifier": {
                        "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                      }
                    }
                  ],
                  "x-parser-schema-id": "<anonymous-schema-357>"
                },
                "name": {
                  "type": "string",
                  "description": "name or title",
                  "example": "Call Ricky",
                  "x-parser-schema-id": "<anonymous-schema-359>"
                },
                "description": {
                  "type": "string",
                  "description": "task detailed description",
                  "example": "Agenda 1. Something 2. Something Else ...",
                  "x-parser-schema-id": "<anonymous-schema-360>"
                },
                "keywords": {
                  "title": "keywords",
                  "description": "keywords/tags for grouping and organizing the item in collections",
                  "type": "array",
                  "example": [
                    "Sphere of Influence",
                    "Past Customer"
                  ],
                  "items": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-362>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-361>"
                },
                "dateDue": {
                  "description": "the due date-time (ISO 8601 formated)",
                  "type": "string",
                  "format": "date-time",
                  "x-parser-schema-id": "<anonymous-schema-363>"
                },
                "dateCompleted": {
                  "type": "string",
                  "format": "date-time",
                  "description": "date the task was completed",
                  "x-parser-schema-id": "<anonymous-schema-364>"
                },
                "location": {
                  "type": "object",
                  "description": "the physical location where an event takes place",
                  "x-range": [
                    "Place"
                  ],
                  "example": {
                    "type": "Place",
                    "address": {
                      "streetAddress": "1007 Mountain Gate Rd",
                      "addressLocality": "Gotham City",
                      "addressRegion": "NJ",
                      "postalCode": "10007",
                      "addressCounty": "Gotham addressCounty",
                      "addressSubdivision": "Gotham Heights"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-365>"
                }
              },
              "x-parser-schema-id": "Task"
            },
            "x-parser-schema-id": "<anonymous-schema-351>"
          },
          "creator": {
            "title": "creator",
            "description": "the item creator",
            "x-range": [
              "Person",
              "Organization"
            ],
            "example": "http://agent.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-126>"
          },
          "dateCreated": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-211>"
          },
          "dateModified": {
            "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-212>"
          },
          "dateCompleted": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-366>"
          }
        },
        "x-parser-schema-id": "Plan"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "name of the plan",
    "example": "Ricky Follow Up Plan",
    "x-parser-schema-id": "<anonymous-schema-349>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Plan",
        "type": "object",
        "description": "a collection of related tasks",
        "required": [
          "type"
        ],
        "x-range": "Plan",
        "properties": {
          "type": {
            "description": "Plan",
            "type": "string",
            "enum": [
              "Plan"
            ],
            "x-parser-schema-id": "<anonymous-schema-348>"
          },
          "name": {
            "type": "string",
            "description": "name of the plan",
            "example": "Ricky Follow Up Plan",
            "x-parser-schema-id": "<anonymous-schema-349>"
          },
          "description": {
            "type": "string",
            "description": "description of the item",
            "example": "this is the description of my awesome plan",
            "x-parser-schema-id": "<anonymous-schema-350>"
          },
          "member": {
            "type": "array",
            "description": "tasks which make up the plan",
            "items": {
              "title": "Task",
              "type": "object",
              "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
              "x-range": "Task",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "enum": [
                    "Task"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-352>"
                },
                "identifier": {
                  "type": "object",
                  "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                  "example": {
                    "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
                  },
                  "x-parser-schema-id": "<anonymous-schema-353>"
                },
                "actionStatus": {
                  "example": "PotentialActionStatus",
                  "type": "string",
                  "description": "disposition of the Action at the time of this action message.",
                  "x-range": [
                    "CompletedActionStatus",
                    "FailedActionStatus",
                    "ActiveActionStatus",
                    "PotentialActionStatus"
                  ],
                  "enum": [
                    "CompletedActionStatus",
                    "FailedActionStatus",
                    "ActiveActionStatus",
                    "PotentialActionStatus"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-354>"
                },
                "memberOf": {
                  "type": "object",
                  "x-range": "Plan",
                  "description": "a plan the task is associated with",
                  "example": {
                    "type": "Plan",
                    "identifier": {
                      "redPlan_ID": "xxxx"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-355>"
                },
                "agent": {
                  "type": "object",
                  "description": "the party who completed, or will complete the task",
                  "x-range": [
                    "Person",
                    "Organization",
                    "RealEstateAgent",
                    "Contact"
                  ],
                  "example": {
                    "type": "RealEstateAgent",
                    "id": "http://user.example.com/profile/card#me"
                  },
                  "x-parser-schema-id": "<anonymous-schema-356>"
                },
                "participant": {
                  "x-title": "participant",
                  "x-range": [
                    "Person",
                    "RealEstateAgent",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "description": "Other co-agents with a direct or indirect interest in the action.",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-358>"
                  },
                  "example": [
                    {
                      "type": "Contact",
                      "name": "Bruce Wayne",
                      "email": "bruce@example.com",
                      "identifier": {
                        "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                      }
                    }
                  ],
                  "x-parser-schema-id": "<anonymous-schema-357>"
                },
                "name": {
                  "type": "string",
                  "description": "name or title",
                  "example": "Call Ricky",
                  "x-parser-schema-id": "<anonymous-schema-359>"
                },
                "description": {
                  "type": "string",
                  "description": "task detailed description",
                  "example": "Agenda 1. Something 2. Something Else ...",
                  "x-parser-schema-id": "<anonymous-schema-360>"
                },
                "keywords": {
                  "title": "keywords",
                  "description": "keywords/tags for grouping and organizing the item in collections",
                  "type": "array",
                  "example": [
                    "Sphere of Influence",
                    "Past Customer"
                  ],
                  "items": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-362>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-361>"
                },
                "dateDue": {
                  "description": "the due date-time (ISO 8601 formated)",
                  "type": "string",
                  "format": "date-time",
                  "x-parser-schema-id": "<anonymous-schema-363>"
                },
                "dateCompleted": {
                  "type": "string",
                  "format": "date-time",
                  "description": "date the task was completed",
                  "x-parser-schema-id": "<anonymous-schema-364>"
                },
                "location": {
                  "type": "object",
                  "description": "the physical location where an event takes place",
                  "x-range": [
                    "Place"
                  ],
                  "example": {
                    "type": "Place",
                    "address": {
                      "streetAddress": "1007 Mountain Gate Rd",
                      "addressLocality": "Gotham City",
                      "addressRegion": "NJ",
                      "postalCode": "10007",
                      "addressCounty": "Gotham addressCounty",
                      "addressSubdivision": "Gotham Heights"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-365>"
                }
              },
              "x-parser-schema-id": "Task"
            },
            "x-parser-schema-id": "<anonymous-schema-351>"
          },
          "creator": {
            "title": "creator",
            "description": "the item creator",
            "x-range": [
              "Person",
              "Organization"
            ],
            "example": "http://agent.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-126>"
          },
          "dateCreated": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-211>"
          },
          "dateModified": {
            "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-212>"
          },
          "dateCompleted": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-366>"
          }
        },
        "x-parser-schema-id": "Plan"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "description of the item",
    "example": "this is the description of my awesome plan",
    "x-parser-schema-id": "<anonymous-schema-350>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Plan",
        "type": "object",
        "description": "a collection of related tasks",
        "required": [
          "type"
        ],
        "x-range": "Plan",
        "properties": {
          "type": {
            "description": "Plan",
            "type": "string",
            "enum": [
              "Plan"
            ],
            "x-parser-schema-id": "<anonymous-schema-348>"
          },
          "name": {
            "type": "string",
            "description": "name of the plan",
            "example": "Ricky Follow Up Plan",
            "x-parser-schema-id": "<anonymous-schema-349>"
          },
          "description": {
            "type": "string",
            "description": "description of the item",
            "example": "this is the description of my awesome plan",
            "x-parser-schema-id": "<anonymous-schema-350>"
          },
          "member": {
            "type": "array",
            "description": "tasks which make up the plan",
            "items": {
              "title": "Task",
              "type": "object",
              "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
              "x-range": "Task",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "enum": [
                    "Task"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-352>"
                },
                "identifier": {
                  "type": "object",
                  "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                  "example": {
                    "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
                  },
                  "x-parser-schema-id": "<anonymous-schema-353>"
                },
                "actionStatus": {
                  "example": "PotentialActionStatus",
                  "type": "string",
                  "description": "disposition of the Action at the time of this action message.",
                  "x-range": [
                    "CompletedActionStatus",
                    "FailedActionStatus",
                    "ActiveActionStatus",
                    "PotentialActionStatus"
                  ],
                  "enum": [
                    "CompletedActionStatus",
                    "FailedActionStatus",
                    "ActiveActionStatus",
                    "PotentialActionStatus"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-354>"
                },
                "memberOf": {
                  "type": "object",
                  "x-range": "Plan",
                  "description": "a plan the task is associated with",
                  "example": {
                    "type": "Plan",
                    "identifier": {
                      "redPlan_ID": "xxxx"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-355>"
                },
                "agent": {
                  "type": "object",
                  "description": "the party who completed, or will complete the task",
                  "x-range": [
                    "Person",
                    "Organization",
                    "RealEstateAgent",
                    "Contact"
                  ],
                  "example": {
                    "type": "RealEstateAgent",
                    "id": "http://user.example.com/profile/card#me"
                  },
                  "x-parser-schema-id": "<anonymous-schema-356>"
                },
                "participant": {
                  "x-title": "participant",
                  "x-range": [
                    "Person",
                    "RealEstateAgent",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "description": "Other co-agents with a direct or indirect interest in the action.",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-358>"
                  },
                  "example": [
                    {
                      "type": "Contact",
                      "name": "Bruce Wayne",
                      "email": "bruce@example.com",
                      "identifier": {
                        "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                      }
                    }
                  ],
                  "x-parser-schema-id": "<anonymous-schema-357>"
                },
                "name": {
                  "type": "string",
                  "description": "name or title",
                  "example": "Call Ricky",
                  "x-parser-schema-id": "<anonymous-schema-359>"
                },
                "description": {
                  "type": "string",
                  "description": "task detailed description",
                  "example": "Agenda 1. Something 2. Something Else ...",
                  "x-parser-schema-id": "<anonymous-schema-360>"
                },
                "keywords": {
                  "title": "keywords",
                  "description": "keywords/tags for grouping and organizing the item in collections",
                  "type": "array",
                  "example": [
                    "Sphere of Influence",
                    "Past Customer"
                  ],
                  "items": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-362>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-361>"
                },
                "dateDue": {
                  "description": "the due date-time (ISO 8601 formated)",
                  "type": "string",
                  "format": "date-time",
                  "x-parser-schema-id": "<anonymous-schema-363>"
                },
                "dateCompleted": {
                  "type": "string",
                  "format": "date-time",
                  "description": "date the task was completed",
                  "x-parser-schema-id": "<anonymous-schema-364>"
                },
                "location": {
                  "type": "object",
                  "description": "the physical location where an event takes place",
                  "x-range": [
                    "Place"
                  ],
                  "example": {
                    "type": "Place",
                    "address": {
                      "streetAddress": "1007 Mountain Gate Rd",
                      "addressLocality": "Gotham City",
                      "addressRegion": "NJ",
                      "postalCode": "10007",
                      "addressCounty": "Gotham addressCounty",
                      "addressSubdivision": "Gotham Heights"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-365>"
                }
              },
              "x-parser-schema-id": "Task"
            },
            "x-parser-schema-id": "<anonymous-schema-351>"
          },
          "creator": {
            "title": "creator",
            "description": "the item creator",
            "x-range": [
              "Person",
              "Organization"
            ],
            "example": "http://agent.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-126>"
          },
          "dateCreated": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-211>"
          },
          "dateModified": {
            "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-212>"
          },
          "dateCompleted": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-366>"
          }
        },
        "x-parser-schema-id": "Plan"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "array",
    "description": "tasks which make up the plan",
    "items": {
      "title": "Task",
      "type": "object",
      "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
      "x-range": "Task",
      "properties": {
        "type": {
          "type": "string",
          "description": "The item type (Linked-Data @type)",
          "enum": [
            "Task"
          ],
          "x-parser-schema-id": "<anonymous-schema-352>"
        },
        "identifier": {
          "type": "object",
          "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
          "example": {
            "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
          },
          "x-parser-schema-id": "<anonymous-schema-353>"
        },
        "actionStatus": {
          "example": "PotentialActionStatus",
          "type": "string",
          "description": "disposition of the Action at the time of this action message.",
          "x-range": [
            "CompletedActionStatus",
            "FailedActionStatus",
            "ActiveActionStatus",
            "PotentialActionStatus"
          ],
          "enum": [
            "CompletedActionStatus",
            "FailedActionStatus",
            "ActiveActionStatus",
            "PotentialActionStatus"
          ],
          "x-parser-schema-id": "<anonymous-schema-354>"
        },
        "memberOf": {
          "type": "object",
          "x-range": "Plan",
          "description": "a plan the task is associated with",
          "example": {
            "type": "Plan",
            "identifier": {
              "redPlan_ID": "xxxx"
            }
          },
          "x-parser-schema-id": "<anonymous-schema-355>"
        },
        "agent": {
          "type": "object",
          "description": "the party who completed, or will complete the task",
          "x-range": [
            "Person",
            "Organization",
            "RealEstateAgent",
            "Contact"
          ],
          "example": {
            "type": "RealEstateAgent",
            "id": "http://user.example.com/profile/card#me"
          },
          "x-parser-schema-id": "<anonymous-schema-356>"
        },
        "participant": {
          "x-title": "participant",
          "x-range": [
            "Person",
            "RealEstateAgent",
            "RealEstateTeam",
            "RealEstateOrganization"
          ],
          "description": "Other co-agents with a direct or indirect interest in the action.",
          "type": "array",
          "items": {
            "type": "object",
            "x-parser-schema-id": "<anonymous-schema-358>"
          },
          "example": [
            {
              "type": "Contact",
              "name": "Bruce Wayne",
              "email": "bruce@example.com",
              "identifier": {
                "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
              }
            }
          ],
          "x-parser-schema-id": "<anonymous-schema-357>"
        },
        "name": {
          "type": "string",
          "description": "name or title",
          "example": "Call Ricky",
          "x-parser-schema-id": "<anonymous-schema-359>"
        },
        "description": {
          "type": "string",
          "description": "task detailed description",
          "example": "Agenda 1. Something 2. Something Else ...",
          "x-parser-schema-id": "<anonymous-schema-360>"
        },
        "keywords": {
          "title": "keywords",
          "description": "keywords/tags for grouping and organizing the item in collections",
          "type": "array",
          "example": [
            "Sphere of Influence",
            "Past Customer"
          ],
          "items": {
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-362>"
          },
          "x-parser-schema-id": "<anonymous-schema-361>"
        },
        "dateDue": {
          "description": "the due date-time (ISO 8601 formated)",
          "type": "string",
          "format": "date-time",
          "x-parser-schema-id": "<anonymous-schema-363>"
        },
        "dateCompleted": {
          "type": "string",
          "format": "date-time",
          "description": "date the task was completed",
          "x-parser-schema-id": "<anonymous-schema-364>"
        },
        "location": {
          "type": "object",
          "description": "the physical location where an event takes place",
          "x-range": [
            "Place"
          ],
          "example": {
            "type": "Place",
            "address": {
              "streetAddress": "1007 Mountain Gate Rd",
              "addressLocality": "Gotham City",
              "addressRegion": "NJ",
              "postalCode": "10007",
              "addressCounty": "Gotham addressCounty",
              "addressSubdivision": "Gotham Heights"
            }
          },
          "x-parser-schema-id": "<anonymous-schema-365>"
        }
      },
      "x-parser-schema-id": "Task"
    },
    "x-parser-schema-id": "<anonymous-schema-351>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Plan",
        "type": "object",
        "description": "a collection of related tasks",
        "required": [
          "type"
        ],
        "x-range": "Plan",
        "properties": {
          "type": {
            "description": "Plan",
            "type": "string",
            "enum": [
              "Plan"
            ],
            "x-parser-schema-id": "<anonymous-schema-348>"
          },
          "name": {
            "type": "string",
            "description": "name of the plan",
            "example": "Ricky Follow Up Plan",
            "x-parser-schema-id": "<anonymous-schema-349>"
          },
          "description": {
            "type": "string",
            "description": "description of the item",
            "example": "this is the description of my awesome plan",
            "x-parser-schema-id": "<anonymous-schema-350>"
          },
          "member": {
            "type": "array",
            "description": "tasks which make up the plan",
            "items": {
              "title": "Task",
              "type": "object",
              "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
              "x-range": "Task",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "enum": [
                    "Task"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-352>"
                },
                "identifier": {
                  "type": "object",
                  "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                  "example": {
                    "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
                  },
                  "x-parser-schema-id": "<anonymous-schema-353>"
                },
                "actionStatus": {
                  "example": "PotentialActionStatus",
                  "type": "string",
                  "description": "disposition of the Action at the time of this action message.",
                  "x-range": [
                    "CompletedActionStatus",
                    "FailedActionStatus",
                    "ActiveActionStatus",
                    "PotentialActionStatus"
                  ],
                  "enum": [
                    "CompletedActionStatus",
                    "FailedActionStatus",
                    "ActiveActionStatus",
                    "PotentialActionStatus"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-354>"
                },
                "memberOf": {
                  "type": "object",
                  "x-range": "Plan",
                  "description": "a plan the task is associated with",
                  "example": {
                    "type": "Plan",
                    "identifier": {
                      "redPlan_ID": "xxxx"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-355>"
                },
                "agent": {
                  "type": "object",
                  "description": "the party who completed, or will complete the task",
                  "x-range": [
                    "Person",
                    "Organization",
                    "RealEstateAgent",
                    "Contact"
                  ],
                  "example": {
                    "type": "RealEstateAgent",
                    "id": "http://user.example.com/profile/card#me"
                  },
                  "x-parser-schema-id": "<anonymous-schema-356>"
                },
                "participant": {
                  "x-title": "participant",
                  "x-range": [
                    "Person",
                    "RealEstateAgent",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "description": "Other co-agents with a direct or indirect interest in the action.",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-358>"
                  },
                  "example": [
                    {
                      "type": "Contact",
                      "name": "Bruce Wayne",
                      "email": "bruce@example.com",
                      "identifier": {
                        "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                      }
                    }
                  ],
                  "x-parser-schema-id": "<anonymous-schema-357>"
                },
                "name": {
                  "type": "string",
                  "description": "name or title",
                  "example": "Call Ricky",
                  "x-parser-schema-id": "<anonymous-schema-359>"
                },
                "description": {
                  "type": "string",
                  "description": "task detailed description",
                  "example": "Agenda 1. Something 2. Something Else ...",
                  "x-parser-schema-id": "<anonymous-schema-360>"
                },
                "keywords": {
                  "title": "keywords",
                  "description": "keywords/tags for grouping and organizing the item in collections",
                  "type": "array",
                  "example": [
                    "Sphere of Influence",
                    "Past Customer"
                  ],
                  "items": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-362>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-361>"
                },
                "dateDue": {
                  "description": "the due date-time (ISO 8601 formated)",
                  "type": "string",
                  "format": "date-time",
                  "x-parser-schema-id": "<anonymous-schema-363>"
                },
                "dateCompleted": {
                  "type": "string",
                  "format": "date-time",
                  "description": "date the task was completed",
                  "x-parser-schema-id": "<anonymous-schema-364>"
                },
                "location": {
                  "type": "object",
                  "description": "the physical location where an event takes place",
                  "x-range": [
                    "Place"
                  ],
                  "example": {
                    "type": "Place",
                    "address": {
                      "streetAddress": "1007 Mountain Gate Rd",
                      "addressLocality": "Gotham City",
                      "addressRegion": "NJ",
                      "postalCode": "10007",
                      "addressCounty": "Gotham addressCounty",
                      "addressSubdivision": "Gotham Heights"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-365>"
                }
              },
              "x-parser-schema-id": "Task"
            },
            "x-parser-schema-id": "<anonymous-schema-351>"
          },
          "creator": {
            "title": "creator",
            "description": "the item creator",
            "x-range": [
              "Person",
              "Organization"
            ],
            "example": "http://agent.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-126>"
          },
          "dateCreated": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-211>"
          },
          "dateModified": {
            "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-212>"
          },
          "dateCompleted": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-366>"
          }
        },
        "x-parser-schema-id": "Plan"
      },
      "options": {}
    }
  }
}







prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
    &quot;enum&quot;: [
      &quot;Task&quot;
    ],
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;Task&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
        &quot;x-range&quot;: &quot;Task&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;enum&quot;: [
              &quot;Task&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
          },
          &quot;identifier&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
            &quot;example&quot;: {
              &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
          },
          &quot;actionStatus&quot;: {
            &quot;example&quot;: &quot;PotentialActionStatus&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
            &quot;x-range&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;enum&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
          },
          &quot;memberOf&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;Plan&quot;,
            &quot;description&quot;: &quot;a plan the task is associated with&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Plan&quot;,
              &quot;identifier&quot;: {
                &quot;redPlan_ID&quot;: &quot;xxxx&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
          },
          &quot;agent&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;Organization&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;Contact&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;RealEstateAgent&quot;,
              &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
          },
          &quot;participant&quot;: {
            &quot;x-title&quot;: &quot;participant&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;RealEstateTeam&quot;,
              &quot;RealEstateOrganization&quot;
            ],
            &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;items&quot;: {
              &quot;type&quot;: &quot;object&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
            },
            &quot;example&quot;: [
              {
                &quot;type&quot;: &quot;Contact&quot;,
                &quot;name&quot;: &quot;Bruce Wayne&quot;,
                &quot;email&quot;: &quot;bruce@example.com&quot;,
                &quot;identifier&quot;: {
                  &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                }
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;name or title&quot;,
            &quot;example&quot;: &quot;Call Ricky&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
          },
          &quot;description&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;task detailed description&quot;,
            &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
          },
          &quot;keywords&quot;: {
            &quot;title&quot;: &quot;keywords&quot;,
            &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;example&quot;: [
              &quot;Sphere of Influence&quot;,
              &quot;Past Customer&quot;
            ],
            &quot;items&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
          },
          &quot;dateDue&quot;: {
            &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
          },
          &quot;dateCompleted&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;description&quot;: &quot;date the task was completed&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
          },
          &quot;location&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
            &quot;x-range&quot;: [
              &quot;Place&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Place&quot;,
              &quot;address&quot;: {
                &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                &quot;addressRegion&quot;: &quot;NJ&quot;,
                &quot;postalCode&quot;: &quot;10007&quot;,
                &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;Task&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;array&quot;,
            &quot;description&quot;: &quot;tasks which make up the plan&quot;,
            &quot;items&quot;: {
              &quot;title&quot;: &quot;Task&quot;,
              &quot;type&quot;: &quot;object&quot;,
              &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
              &quot;x-range&quot;: &quot;Task&quot;,
              &quot;properties&quot;: {
                &quot;type&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                  &quot;enum&quot;: [
                    &quot;Task&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                },
                &quot;identifier&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                  &quot;example&quot;: {
                    &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                },
                &quot;actionStatus&quot;: {
                  &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                  &quot;x-range&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;enum&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                },
                &quot;memberOf&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;x-range&quot;: &quot;Plan&quot;,
                  &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Plan&quot;,
                    &quot;identifier&quot;: {
                      &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                },
                &quot;agent&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;Organization&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;Contact&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;RealEstateAgent&quot;,
                    &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                },
                &quot;participant&quot;: {
                  &quot;x-title&quot;: &quot;participant&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;RealEstateTeam&quot;,
                    &quot;RealEstateOrganization&quot;
                  ],
                  &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                  },
                  &quot;example&quot;: [
                    {
                      &quot;type&quot;: &quot;Contact&quot;,
                      &quot;name&quot;: &quot;Bruce Wayne&quot;,
                      &quot;email&quot;: &quot;bruce@example.com&quot;,
                      &quot;identifier&quot;: {
                        &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                      }
                    }
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                },
                &quot;name&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;name or title&quot;,
                  &quot;example&quot;: &quot;Call Ricky&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                },
                &quot;description&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;task detailed description&quot;,
                  &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                },
                &quot;keywords&quot;: {
                  &quot;title&quot;: &quot;keywords&quot;,
                  &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;example&quot;: [
                    &quot;Sphere of Influence&quot;,
                    &quot;Past Customer&quot;
                  ],
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                },
                &quot;dateDue&quot;: {
                  &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                },
                &quot;dateCompleted&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;description&quot;: &quot;date the task was completed&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                },
                &quot;location&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                  &quot;x-range&quot;: [
                    &quot;Place&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Place&quot;,
                    &quot;address&quot;: {
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;addressRegion&quot;: &quot;NJ&quot;,
                      &quot;postalCode&quot;: &quot;10007&quot;,
                      &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                      &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                }
              },
              &quot;x-parser-schema-id&quot;: &quot;Task&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
          },
          &quot;options&quot;: {
            &quot;parent&quot;: {
              &quot;_json&quot;: {
                &quot;title&quot;: &quot;Plan&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a collection of related tasks&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;
                ],
                &quot;x-range&quot;: &quot;Plan&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;description&quot;: &quot;Plan&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;Plan&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-348&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the plan&quot;,
                    &quot;example&quot;: &quot;Ricky Follow Up Plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-349&gt;&quot;
                  },
                  &quot;description&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item&quot;,
                    &quot;example&quot;: &quot;this is the description of my awesome plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-350&gt;&quot;
                  },
                  &quot;member&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;description&quot;: &quot;tasks which make up the plan&quot;,
                    &quot;items&quot;: {
                      &quot;title&quot;: &quot;Task&quot;,
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
                      &quot;x-range&quot;: &quot;Task&quot;,
                      &quot;properties&quot;: {
                        &quot;type&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                          &quot;enum&quot;: [
                            &quot;Task&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                        },
                        &quot;identifier&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                          &quot;example&quot;: {
                            &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                        },
                        &quot;actionStatus&quot;: {
                          &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                          &quot;x-range&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;enum&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                        },
                        &quot;memberOf&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;x-range&quot;: &quot;Plan&quot;,
                          &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Plan&quot;,
                            &quot;identifier&quot;: {
                              &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                        },
                        &quot;agent&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;Organization&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;Contact&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;RealEstateAgent&quot;,
                            &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                        },
                        &quot;participant&quot;: {
                          &quot;x-title&quot;: &quot;participant&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;RealEstateTeam&quot;,
                            &quot;RealEstateOrganization&quot;
                          ],
                          &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                          },
                          &quot;example&quot;: [
                            {
                              &quot;type&quot;: &quot;Contact&quot;,
                              &quot;name&quot;: &quot;Bruce Wayne&quot;,
                              &quot;email&quot;: &quot;bruce@example.com&quot;,
                              &quot;identifier&quot;: {
                                &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                              }
                            }
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                        },
                        &quot;name&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;name or title&quot;,
                          &quot;example&quot;: &quot;Call Ricky&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                        },
                        &quot;description&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;task detailed description&quot;,
                          &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                        },
                        &quot;keywords&quot;: {
                          &quot;title&quot;: &quot;keywords&quot;,
                          &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;example&quot;: [
                            &quot;Sphere of Influence&quot;,
                            &quot;Past Customer&quot;
                          ],
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;string&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                        },
                        &quot;dateDue&quot;: {
                          &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                        },
                        &quot;dateCompleted&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;description&quot;: &quot;date the task was completed&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                        },
                        &quot;location&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                          &quot;x-range&quot;: [
                            &quot;Place&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Place&quot;,
                            &quot;address&quot;: {
                              &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                              &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                              &quot;addressRegion&quot;: &quot;NJ&quot;,
                              &quot;postalCode&quot;: &quot;10007&quot;,
                              &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                              &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;Task&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
                  },
                  &quot;creator&quot;: {
                    &quot;title&quot;: &quot;creator&quot;,
                    &quot;description&quot;: &quot;the item creator&quot;,
                    &quot;x-range&quot;: [
                      &quot;Person&quot;,
                      &quot;Organization&quot;
                    ],
                    &quot;example&quot;: &quot;http://agent.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-126&gt;&quot;
                  },
                  &quot;dateCreated&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
                  },
                  &quot;dateModified&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-212&gt;&quot;
                  },
                  &quot;dateCompleted&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-366&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Plan&quot;
              },
              &quot;options&quot;: {}
            }
          }
        }
      }
    }
  }
}
pname = type
required = false
path = member



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;object&quot;,
    &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
    &quot;example&quot;: {
      &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;Task&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
        &quot;x-range&quot;: &quot;Task&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;enum&quot;: [
              &quot;Task&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
          },
          &quot;identifier&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
            &quot;example&quot;: {
              &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
          },
          &quot;actionStatus&quot;: {
            &quot;example&quot;: &quot;PotentialActionStatus&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
            &quot;x-range&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;enum&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
          },
          &quot;memberOf&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;Plan&quot;,
            &quot;description&quot;: &quot;a plan the task is associated with&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Plan&quot;,
              &quot;identifier&quot;: {
                &quot;redPlan_ID&quot;: &quot;xxxx&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
          },
          &quot;agent&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;Organization&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;Contact&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;RealEstateAgent&quot;,
              &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
          },
          &quot;participant&quot;: {
            &quot;x-title&quot;: &quot;participant&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;RealEstateTeam&quot;,
              &quot;RealEstateOrganization&quot;
            ],
            &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;items&quot;: {
              &quot;type&quot;: &quot;object&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
            },
            &quot;example&quot;: [
              {
                &quot;type&quot;: &quot;Contact&quot;,
                &quot;name&quot;: &quot;Bruce Wayne&quot;,
                &quot;email&quot;: &quot;bruce@example.com&quot;,
                &quot;identifier&quot;: {
                  &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                }
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;name or title&quot;,
            &quot;example&quot;: &quot;Call Ricky&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
          },
          &quot;description&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;task detailed description&quot;,
            &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
          },
          &quot;keywords&quot;: {
            &quot;title&quot;: &quot;keywords&quot;,
            &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;example&quot;: [
              &quot;Sphere of Influence&quot;,
              &quot;Past Customer&quot;
            ],
            &quot;items&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
          },
          &quot;dateDue&quot;: {
            &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
          },
          &quot;dateCompleted&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;description&quot;: &quot;date the task was completed&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
          },
          &quot;location&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
            &quot;x-range&quot;: [
              &quot;Place&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Place&quot;,
              &quot;address&quot;: {
                &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                &quot;addressRegion&quot;: &quot;NJ&quot;,
                &quot;postalCode&quot;: &quot;10007&quot;,
                &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;Task&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;array&quot;,
            &quot;description&quot;: &quot;tasks which make up the plan&quot;,
            &quot;items&quot;: {
              &quot;title&quot;: &quot;Task&quot;,
              &quot;type&quot;: &quot;object&quot;,
              &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
              &quot;x-range&quot;: &quot;Task&quot;,
              &quot;properties&quot;: {
                &quot;type&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                  &quot;enum&quot;: [
                    &quot;Task&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                },
                &quot;identifier&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                  &quot;example&quot;: {
                    &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                },
                &quot;actionStatus&quot;: {
                  &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                  &quot;x-range&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;enum&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                },
                &quot;memberOf&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;x-range&quot;: &quot;Plan&quot;,
                  &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Plan&quot;,
                    &quot;identifier&quot;: {
                      &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                },
                &quot;agent&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;Organization&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;Contact&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;RealEstateAgent&quot;,
                    &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                },
                &quot;participant&quot;: {
                  &quot;x-title&quot;: &quot;participant&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;RealEstateTeam&quot;,
                    &quot;RealEstateOrganization&quot;
                  ],
                  &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                  },
                  &quot;example&quot;: [
                    {
                      &quot;type&quot;: &quot;Contact&quot;,
                      &quot;name&quot;: &quot;Bruce Wayne&quot;,
                      &quot;email&quot;: &quot;bruce@example.com&quot;,
                      &quot;identifier&quot;: {
                        &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                      }
                    }
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                },
                &quot;name&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;name or title&quot;,
                  &quot;example&quot;: &quot;Call Ricky&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                },
                &quot;description&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;task detailed description&quot;,
                  &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                },
                &quot;keywords&quot;: {
                  &quot;title&quot;: &quot;keywords&quot;,
                  &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;example&quot;: [
                    &quot;Sphere of Influence&quot;,
                    &quot;Past Customer&quot;
                  ],
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                },
                &quot;dateDue&quot;: {
                  &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                },
                &quot;dateCompleted&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;description&quot;: &quot;date the task was completed&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                },
                &quot;location&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                  &quot;x-range&quot;: [
                    &quot;Place&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Place&quot;,
                    &quot;address&quot;: {
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;addressRegion&quot;: &quot;NJ&quot;,
                      &quot;postalCode&quot;: &quot;10007&quot;,
                      &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                      &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                }
              },
              &quot;x-parser-schema-id&quot;: &quot;Task&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
          },
          &quot;options&quot;: {
            &quot;parent&quot;: {
              &quot;_json&quot;: {
                &quot;title&quot;: &quot;Plan&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a collection of related tasks&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;
                ],
                &quot;x-range&quot;: &quot;Plan&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;description&quot;: &quot;Plan&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;Plan&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-348&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the plan&quot;,
                    &quot;example&quot;: &quot;Ricky Follow Up Plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-349&gt;&quot;
                  },
                  &quot;description&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item&quot;,
                    &quot;example&quot;: &quot;this is the description of my awesome plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-350&gt;&quot;
                  },
                  &quot;member&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;description&quot;: &quot;tasks which make up the plan&quot;,
                    &quot;items&quot;: {
                      &quot;title&quot;: &quot;Task&quot;,
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
                      &quot;x-range&quot;: &quot;Task&quot;,
                      &quot;properties&quot;: {
                        &quot;type&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                          &quot;enum&quot;: [
                            &quot;Task&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                        },
                        &quot;identifier&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                          &quot;example&quot;: {
                            &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                        },
                        &quot;actionStatus&quot;: {
                          &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                          &quot;x-range&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;enum&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                        },
                        &quot;memberOf&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;x-range&quot;: &quot;Plan&quot;,
                          &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Plan&quot;,
                            &quot;identifier&quot;: {
                              &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                        },
                        &quot;agent&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;Organization&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;Contact&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;RealEstateAgent&quot;,
                            &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                        },
                        &quot;participant&quot;: {
                          &quot;x-title&quot;: &quot;participant&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;RealEstateTeam&quot;,
                            &quot;RealEstateOrganization&quot;
                          ],
                          &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                          },
                          &quot;example&quot;: [
                            {
                              &quot;type&quot;: &quot;Contact&quot;,
                              &quot;name&quot;: &quot;Bruce Wayne&quot;,
                              &quot;email&quot;: &quot;bruce@example.com&quot;,
                              &quot;identifier&quot;: {
                                &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                              }
                            }
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                        },
                        &quot;name&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;name or title&quot;,
                          &quot;example&quot;: &quot;Call Ricky&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                        },
                        &quot;description&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;task detailed description&quot;,
                          &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                        },
                        &quot;keywords&quot;: {
                          &quot;title&quot;: &quot;keywords&quot;,
                          &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;example&quot;: [
                            &quot;Sphere of Influence&quot;,
                            &quot;Past Customer&quot;
                          ],
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;string&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                        },
                        &quot;dateDue&quot;: {
                          &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                        },
                        &quot;dateCompleted&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;description&quot;: &quot;date the task was completed&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                        },
                        &quot;location&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                          &quot;x-range&quot;: [
                            &quot;Place&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Place&quot;,
                            &quot;address&quot;: {
                              &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                              &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                              &quot;addressRegion&quot;: &quot;NJ&quot;,
                              &quot;postalCode&quot;: &quot;10007&quot;,
                              &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                              &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;Task&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
                  },
                  &quot;creator&quot;: {
                    &quot;title&quot;: &quot;creator&quot;,
                    &quot;description&quot;: &quot;the item creator&quot;,
                    &quot;x-range&quot;: [
                      &quot;Person&quot;,
                      &quot;Organization&quot;
                    ],
                    &quot;example&quot;: &quot;http://agent.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-126&gt;&quot;
                  },
                  &quot;dateCreated&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
                  },
                  &quot;dateModified&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-212&gt;&quot;
                  },
                  &quot;dateCompleted&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-366&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Plan&quot;
              },
              &quot;options&quot;: {}
            }
          }
        }
      }
    }
  }
}
pname = identifier
required = false
path = member



prop = {
  &quot;_json&quot;: {
    &quot;example&quot;: &quot;PotentialActionStatus&quot;,
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
    &quot;x-range&quot;: [
      &quot;CompletedActionStatus&quot;,
      &quot;FailedActionStatus&quot;,
      &quot;ActiveActionStatus&quot;,
      &quot;PotentialActionStatus&quot;
    ],
    &quot;enum&quot;: [
      &quot;CompletedActionStatus&quot;,
      &quot;FailedActionStatus&quot;,
      &quot;ActiveActionStatus&quot;,
      &quot;PotentialActionStatus&quot;
    ],
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;Task&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
        &quot;x-range&quot;: &quot;Task&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;enum&quot;: [
              &quot;Task&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
          },
          &quot;identifier&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
            &quot;example&quot;: {
              &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
          },
          &quot;actionStatus&quot;: {
            &quot;example&quot;: &quot;PotentialActionStatus&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
            &quot;x-range&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;enum&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
          },
          &quot;memberOf&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;Plan&quot;,
            &quot;description&quot;: &quot;a plan the task is associated with&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Plan&quot;,
              &quot;identifier&quot;: {
                &quot;redPlan_ID&quot;: &quot;xxxx&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
          },
          &quot;agent&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;Organization&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;Contact&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;RealEstateAgent&quot;,
              &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
          },
          &quot;participant&quot;: {
            &quot;x-title&quot;: &quot;participant&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;RealEstateTeam&quot;,
              &quot;RealEstateOrganization&quot;
            ],
            &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;items&quot;: {
              &quot;type&quot;: &quot;object&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
            },
            &quot;example&quot;: [
              {
                &quot;type&quot;: &quot;Contact&quot;,
                &quot;name&quot;: &quot;Bruce Wayne&quot;,
                &quot;email&quot;: &quot;bruce@example.com&quot;,
                &quot;identifier&quot;: {
                  &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                }
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;name or title&quot;,
            &quot;example&quot;: &quot;Call Ricky&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
          },
          &quot;description&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;task detailed description&quot;,
            &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
          },
          &quot;keywords&quot;: {
            &quot;title&quot;: &quot;keywords&quot;,
            &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;example&quot;: [
              &quot;Sphere of Influence&quot;,
              &quot;Past Customer&quot;
            ],
            &quot;items&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
          },
          &quot;dateDue&quot;: {
            &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
          },
          &quot;dateCompleted&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;description&quot;: &quot;date the task was completed&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
          },
          &quot;location&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
            &quot;x-range&quot;: [
              &quot;Place&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Place&quot;,
              &quot;address&quot;: {
                &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                &quot;addressRegion&quot;: &quot;NJ&quot;,
                &quot;postalCode&quot;: &quot;10007&quot;,
                &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;Task&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;array&quot;,
            &quot;description&quot;: &quot;tasks which make up the plan&quot;,
            &quot;items&quot;: {
              &quot;title&quot;: &quot;Task&quot;,
              &quot;type&quot;: &quot;object&quot;,
              &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
              &quot;x-range&quot;: &quot;Task&quot;,
              &quot;properties&quot;: {
                &quot;type&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                  &quot;enum&quot;: [
                    &quot;Task&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                },
                &quot;identifier&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                  &quot;example&quot;: {
                    &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                },
                &quot;actionStatus&quot;: {
                  &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                  &quot;x-range&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;enum&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                },
                &quot;memberOf&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;x-range&quot;: &quot;Plan&quot;,
                  &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Plan&quot;,
                    &quot;identifier&quot;: {
                      &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                },
                &quot;agent&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;Organization&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;Contact&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;RealEstateAgent&quot;,
                    &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                },
                &quot;participant&quot;: {
                  &quot;x-title&quot;: &quot;participant&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;RealEstateTeam&quot;,
                    &quot;RealEstateOrganization&quot;
                  ],
                  &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                  },
                  &quot;example&quot;: [
                    {
                      &quot;type&quot;: &quot;Contact&quot;,
                      &quot;name&quot;: &quot;Bruce Wayne&quot;,
                      &quot;email&quot;: &quot;bruce@example.com&quot;,
                      &quot;identifier&quot;: {
                        &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                      }
                    }
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                },
                &quot;name&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;name or title&quot;,
                  &quot;example&quot;: &quot;Call Ricky&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                },
                &quot;description&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;task detailed description&quot;,
                  &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                },
                &quot;keywords&quot;: {
                  &quot;title&quot;: &quot;keywords&quot;,
                  &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;example&quot;: [
                    &quot;Sphere of Influence&quot;,
                    &quot;Past Customer&quot;
                  ],
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                },
                &quot;dateDue&quot;: {
                  &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                },
                &quot;dateCompleted&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;description&quot;: &quot;date the task was completed&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                },
                &quot;location&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                  &quot;x-range&quot;: [
                    &quot;Place&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Place&quot;,
                    &quot;address&quot;: {
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;addressRegion&quot;: &quot;NJ&quot;,
                      &quot;postalCode&quot;: &quot;10007&quot;,
                      &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                      &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                }
              },
              &quot;x-parser-schema-id&quot;: &quot;Task&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
          },
          &quot;options&quot;: {
            &quot;parent&quot;: {
              &quot;_json&quot;: {
                &quot;title&quot;: &quot;Plan&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a collection of related tasks&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;
                ],
                &quot;x-range&quot;: &quot;Plan&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;description&quot;: &quot;Plan&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;Plan&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-348&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the plan&quot;,
                    &quot;example&quot;: &quot;Ricky Follow Up Plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-349&gt;&quot;
                  },
                  &quot;description&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item&quot;,
                    &quot;example&quot;: &quot;this is the description of my awesome plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-350&gt;&quot;
                  },
                  &quot;member&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;description&quot;: &quot;tasks which make up the plan&quot;,
                    &quot;items&quot;: {
                      &quot;title&quot;: &quot;Task&quot;,
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
                      &quot;x-range&quot;: &quot;Task&quot;,
                      &quot;properties&quot;: {
                        &quot;type&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                          &quot;enum&quot;: [
                            &quot;Task&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                        },
                        &quot;identifier&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                          &quot;example&quot;: {
                            &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                        },
                        &quot;actionStatus&quot;: {
                          &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                          &quot;x-range&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;enum&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                        },
                        &quot;memberOf&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;x-range&quot;: &quot;Plan&quot;,
                          &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Plan&quot;,
                            &quot;identifier&quot;: {
                              &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                        },
                        &quot;agent&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;Organization&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;Contact&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;RealEstateAgent&quot;,
                            &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                        },
                        &quot;participant&quot;: {
                          &quot;x-title&quot;: &quot;participant&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;RealEstateTeam&quot;,
                            &quot;RealEstateOrganization&quot;
                          ],
                          &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                          },
                          &quot;example&quot;: [
                            {
                              &quot;type&quot;: &quot;Contact&quot;,
                              &quot;name&quot;: &quot;Bruce Wayne&quot;,
                              &quot;email&quot;: &quot;bruce@example.com&quot;,
                              &quot;identifier&quot;: {
                                &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                              }
                            }
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                        },
                        &quot;name&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;name or title&quot;,
                          &quot;example&quot;: &quot;Call Ricky&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                        },
                        &quot;description&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;task detailed description&quot;,
                          &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                        },
                        &quot;keywords&quot;: {
                          &quot;title&quot;: &quot;keywords&quot;,
                          &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;example&quot;: [
                            &quot;Sphere of Influence&quot;,
                            &quot;Past Customer&quot;
                          ],
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;string&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                        },
                        &quot;dateDue&quot;: {
                          &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                        },
                        &quot;dateCompleted&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;description&quot;: &quot;date the task was completed&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                        },
                        &quot;location&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                          &quot;x-range&quot;: [
                            &quot;Place&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Place&quot;,
                            &quot;address&quot;: {
                              &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                              &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                              &quot;addressRegion&quot;: &quot;NJ&quot;,
                              &quot;postalCode&quot;: &quot;10007&quot;,
                              &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                              &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;Task&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
                  },
                  &quot;creator&quot;: {
                    &quot;title&quot;: &quot;creator&quot;,
                    &quot;description&quot;: &quot;the item creator&quot;,
                    &quot;x-range&quot;: [
                      &quot;Person&quot;,
                      &quot;Organization&quot;
                    ],
                    &quot;example&quot;: &quot;http://agent.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-126&gt;&quot;
                  },
                  &quot;dateCreated&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
                  },
                  &quot;dateModified&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-212&gt;&quot;
                  },
                  &quot;dateCompleted&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-366&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Plan&quot;
              },
              &quot;options&quot;: {}
            }
          }
        }
      }
    }
  }
}
pname = actionStatus
required = false
path = member



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;object&quot;,
    &quot;x-range&quot;: &quot;Plan&quot;,
    &quot;description&quot;: &quot;a plan the task is associated with&quot;,
    &quot;example&quot;: {
      &quot;type&quot;: &quot;Plan&quot;,
      &quot;identifier&quot;: {
        &quot;redPlan_ID&quot;: &quot;xxxx&quot;
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;Task&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
        &quot;x-range&quot;: &quot;Task&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;enum&quot;: [
              &quot;Task&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
          },
          &quot;identifier&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
            &quot;example&quot;: {
              &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
          },
          &quot;actionStatus&quot;: {
            &quot;example&quot;: &quot;PotentialActionStatus&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
            &quot;x-range&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;enum&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
          },
          &quot;memberOf&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;Plan&quot;,
            &quot;description&quot;: &quot;a plan the task is associated with&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Plan&quot;,
              &quot;identifier&quot;: {
                &quot;redPlan_ID&quot;: &quot;xxxx&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
          },
          &quot;agent&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;Organization&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;Contact&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;RealEstateAgent&quot;,
              &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
          },
          &quot;participant&quot;: {
            &quot;x-title&quot;: &quot;participant&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;RealEstateTeam&quot;,
              &quot;RealEstateOrganization&quot;
            ],
            &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;items&quot;: {
              &quot;type&quot;: &quot;object&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
            },
            &quot;example&quot;: [
              {
                &quot;type&quot;: &quot;Contact&quot;,
                &quot;name&quot;: &quot;Bruce Wayne&quot;,
                &quot;email&quot;: &quot;bruce@example.com&quot;,
                &quot;identifier&quot;: {
                  &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                }
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;name or title&quot;,
            &quot;example&quot;: &quot;Call Ricky&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
          },
          &quot;description&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;task detailed description&quot;,
            &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
          },
          &quot;keywords&quot;: {
            &quot;title&quot;: &quot;keywords&quot;,
            &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;example&quot;: [
              &quot;Sphere of Influence&quot;,
              &quot;Past Customer&quot;
            ],
            &quot;items&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
          },
          &quot;dateDue&quot;: {
            &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
          },
          &quot;dateCompleted&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;description&quot;: &quot;date the task was completed&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
          },
          &quot;location&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
            &quot;x-range&quot;: [
              &quot;Place&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Place&quot;,
              &quot;address&quot;: {
                &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                &quot;addressRegion&quot;: &quot;NJ&quot;,
                &quot;postalCode&quot;: &quot;10007&quot;,
                &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;Task&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;array&quot;,
            &quot;description&quot;: &quot;tasks which make up the plan&quot;,
            &quot;items&quot;: {
              &quot;title&quot;: &quot;Task&quot;,
              &quot;type&quot;: &quot;object&quot;,
              &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
              &quot;x-range&quot;: &quot;Task&quot;,
              &quot;properties&quot;: {
                &quot;type&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                  &quot;enum&quot;: [
                    &quot;Task&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                },
                &quot;identifier&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                  &quot;example&quot;: {
                    &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                },
                &quot;actionStatus&quot;: {
                  &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                  &quot;x-range&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;enum&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                },
                &quot;memberOf&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;x-range&quot;: &quot;Plan&quot;,
                  &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Plan&quot;,
                    &quot;identifier&quot;: {
                      &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                },
                &quot;agent&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;Organization&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;Contact&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;RealEstateAgent&quot;,
                    &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                },
                &quot;participant&quot;: {
                  &quot;x-title&quot;: &quot;participant&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;RealEstateTeam&quot;,
                    &quot;RealEstateOrganization&quot;
                  ],
                  &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                  },
                  &quot;example&quot;: [
                    {
                      &quot;type&quot;: &quot;Contact&quot;,
                      &quot;name&quot;: &quot;Bruce Wayne&quot;,
                      &quot;email&quot;: &quot;bruce@example.com&quot;,
                      &quot;identifier&quot;: {
                        &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                      }
                    }
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                },
                &quot;name&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;name or title&quot;,
                  &quot;example&quot;: &quot;Call Ricky&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                },
                &quot;description&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;task detailed description&quot;,
                  &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                },
                &quot;keywords&quot;: {
                  &quot;title&quot;: &quot;keywords&quot;,
                  &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;example&quot;: [
                    &quot;Sphere of Influence&quot;,
                    &quot;Past Customer&quot;
                  ],
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                },
                &quot;dateDue&quot;: {
                  &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                },
                &quot;dateCompleted&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;description&quot;: &quot;date the task was completed&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                },
                &quot;location&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                  &quot;x-range&quot;: [
                    &quot;Place&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Place&quot;,
                    &quot;address&quot;: {
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;addressRegion&quot;: &quot;NJ&quot;,
                      &quot;postalCode&quot;: &quot;10007&quot;,
                      &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                      &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                }
              },
              &quot;x-parser-schema-id&quot;: &quot;Task&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
          },
          &quot;options&quot;: {
            &quot;parent&quot;: {
              &quot;_json&quot;: {
                &quot;title&quot;: &quot;Plan&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a collection of related tasks&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;
                ],
                &quot;x-range&quot;: &quot;Plan&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;description&quot;: &quot;Plan&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;Plan&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-348&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the plan&quot;,
                    &quot;example&quot;: &quot;Ricky Follow Up Plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-349&gt;&quot;
                  },
                  &quot;description&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item&quot;,
                    &quot;example&quot;: &quot;this is the description of my awesome plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-350&gt;&quot;
                  },
                  &quot;member&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;description&quot;: &quot;tasks which make up the plan&quot;,
                    &quot;items&quot;: {
                      &quot;title&quot;: &quot;Task&quot;,
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
                      &quot;x-range&quot;: &quot;Task&quot;,
                      &quot;properties&quot;: {
                        &quot;type&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                          &quot;enum&quot;: [
                            &quot;Task&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                        },
                        &quot;identifier&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                          &quot;example&quot;: {
                            &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                        },
                        &quot;actionStatus&quot;: {
                          &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                          &quot;x-range&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;enum&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                        },
                        &quot;memberOf&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;x-range&quot;: &quot;Plan&quot;,
                          &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Plan&quot;,
                            &quot;identifier&quot;: {
                              &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                        },
                        &quot;agent&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;Organization&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;Contact&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;RealEstateAgent&quot;,
                            &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                        },
                        &quot;participant&quot;: {
                          &quot;x-title&quot;: &quot;participant&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;RealEstateTeam&quot;,
                            &quot;RealEstateOrganization&quot;
                          ],
                          &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                          },
                          &quot;example&quot;: [
                            {
                              &quot;type&quot;: &quot;Contact&quot;,
                              &quot;name&quot;: &quot;Bruce Wayne&quot;,
                              &quot;email&quot;: &quot;bruce@example.com&quot;,
                              &quot;identifier&quot;: {
                                &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                              }
                            }
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                        },
                        &quot;name&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;name or title&quot;,
                          &quot;example&quot;: &quot;Call Ricky&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                        },
                        &quot;description&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;task detailed description&quot;,
                          &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                        },
                        &quot;keywords&quot;: {
                          &quot;title&quot;: &quot;keywords&quot;,
                          &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;example&quot;: [
                            &quot;Sphere of Influence&quot;,
                            &quot;Past Customer&quot;
                          ],
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;string&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                        },
                        &quot;dateDue&quot;: {
                          &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                        },
                        &quot;dateCompleted&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;description&quot;: &quot;date the task was completed&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                        },
                        &quot;location&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                          &quot;x-range&quot;: [
                            &quot;Place&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Place&quot;,
                            &quot;address&quot;: {
                              &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                              &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                              &quot;addressRegion&quot;: &quot;NJ&quot;,
                              &quot;postalCode&quot;: &quot;10007&quot;,
                              &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                              &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;Task&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
                  },
                  &quot;creator&quot;: {
                    &quot;title&quot;: &quot;creator&quot;,
                    &quot;description&quot;: &quot;the item creator&quot;,
                    &quot;x-range&quot;: [
                      &quot;Person&quot;,
                      &quot;Organization&quot;
                    ],
                    &quot;example&quot;: &quot;http://agent.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-126&gt;&quot;
                  },
                  &quot;dateCreated&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
                  },
                  &quot;dateModified&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-212&gt;&quot;
                  },
                  &quot;dateCompleted&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-366&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Plan&quot;
              },
              &quot;options&quot;: {}
            }
          }
        }
      }
    }
  }
}
pname = memberOf
required = false
path = member



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;object&quot;,
    &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
    &quot;x-range&quot;: [
      &quot;Person&quot;,
      &quot;Organization&quot;,
      &quot;RealEstateAgent&quot;,
      &quot;Contact&quot;
    ],
    &quot;example&quot;: {
      &quot;type&quot;: &quot;RealEstateAgent&quot;,
      &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;Task&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
        &quot;x-range&quot;: &quot;Task&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;enum&quot;: [
              &quot;Task&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
          },
          &quot;identifier&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
            &quot;example&quot;: {
              &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
          },
          &quot;actionStatus&quot;: {
            &quot;example&quot;: &quot;PotentialActionStatus&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
            &quot;x-range&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;enum&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
          },
          &quot;memberOf&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;Plan&quot;,
            &quot;description&quot;: &quot;a plan the task is associated with&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Plan&quot;,
              &quot;identifier&quot;: {
                &quot;redPlan_ID&quot;: &quot;xxxx&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
          },
          &quot;agent&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;Organization&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;Contact&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;RealEstateAgent&quot;,
              &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
          },
          &quot;participant&quot;: {
            &quot;x-title&quot;: &quot;participant&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;RealEstateTeam&quot;,
              &quot;RealEstateOrganization&quot;
            ],
            &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;items&quot;: {
              &quot;type&quot;: &quot;object&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
            },
            &quot;example&quot;: [
              {
                &quot;type&quot;: &quot;Contact&quot;,
                &quot;name&quot;: &quot;Bruce Wayne&quot;,
                &quot;email&quot;: &quot;bruce@example.com&quot;,
                &quot;identifier&quot;: {
                  &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                }
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;name or title&quot;,
            &quot;example&quot;: &quot;Call Ricky&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
          },
          &quot;description&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;task detailed description&quot;,
            &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
          },
          &quot;keywords&quot;: {
            &quot;title&quot;: &quot;keywords&quot;,
            &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;example&quot;: [
              &quot;Sphere of Influence&quot;,
              &quot;Past Customer&quot;
            ],
            &quot;items&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
          },
          &quot;dateDue&quot;: {
            &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
          },
          &quot;dateCompleted&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;description&quot;: &quot;date the task was completed&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
          },
          &quot;location&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
            &quot;x-range&quot;: [
              &quot;Place&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Place&quot;,
              &quot;address&quot;: {
                &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                &quot;addressRegion&quot;: &quot;NJ&quot;,
                &quot;postalCode&quot;: &quot;10007&quot;,
                &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;Task&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;array&quot;,
            &quot;description&quot;: &quot;tasks which make up the plan&quot;,
            &quot;items&quot;: {
              &quot;title&quot;: &quot;Task&quot;,
              &quot;type&quot;: &quot;object&quot;,
              &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
              &quot;x-range&quot;: &quot;Task&quot;,
              &quot;properties&quot;: {
                &quot;type&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                  &quot;enum&quot;: [
                    &quot;Task&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                },
                &quot;identifier&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                  &quot;example&quot;: {
                    &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                },
                &quot;actionStatus&quot;: {
                  &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                  &quot;x-range&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;enum&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                },
                &quot;memberOf&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;x-range&quot;: &quot;Plan&quot;,
                  &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Plan&quot;,
                    &quot;identifier&quot;: {
                      &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                },
                &quot;agent&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;Organization&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;Contact&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;RealEstateAgent&quot;,
                    &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                },
                &quot;participant&quot;: {
                  &quot;x-title&quot;: &quot;participant&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;RealEstateTeam&quot;,
                    &quot;RealEstateOrganization&quot;
                  ],
                  &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                  },
                  &quot;example&quot;: [
                    {
                      &quot;type&quot;: &quot;Contact&quot;,
                      &quot;name&quot;: &quot;Bruce Wayne&quot;,
                      &quot;email&quot;: &quot;bruce@example.com&quot;,
                      &quot;identifier&quot;: {
                        &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                      }
                    }
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                },
                &quot;name&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;name or title&quot;,
                  &quot;example&quot;: &quot;Call Ricky&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                },
                &quot;description&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;task detailed description&quot;,
                  &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                },
                &quot;keywords&quot;: {
                  &quot;title&quot;: &quot;keywords&quot;,
                  &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;example&quot;: [
                    &quot;Sphere of Influence&quot;,
                    &quot;Past Customer&quot;
                  ],
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                },
                &quot;dateDue&quot;: {
                  &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                },
                &quot;dateCompleted&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;description&quot;: &quot;date the task was completed&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                },
                &quot;location&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                  &quot;x-range&quot;: [
                    &quot;Place&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Place&quot;,
                    &quot;address&quot;: {
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;addressRegion&quot;: &quot;NJ&quot;,
                      &quot;postalCode&quot;: &quot;10007&quot;,
                      &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                      &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                }
              },
              &quot;x-parser-schema-id&quot;: &quot;Task&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
          },
          &quot;options&quot;: {
            &quot;parent&quot;: {
              &quot;_json&quot;: {
                &quot;title&quot;: &quot;Plan&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a collection of related tasks&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;
                ],
                &quot;x-range&quot;: &quot;Plan&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;description&quot;: &quot;Plan&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;Plan&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-348&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the plan&quot;,
                    &quot;example&quot;: &quot;Ricky Follow Up Plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-349&gt;&quot;
                  },
                  &quot;description&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item&quot;,
                    &quot;example&quot;: &quot;this is the description of my awesome plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-350&gt;&quot;
                  },
                  &quot;member&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;description&quot;: &quot;tasks which make up the plan&quot;,
                    &quot;items&quot;: {
                      &quot;title&quot;: &quot;Task&quot;,
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
                      &quot;x-range&quot;: &quot;Task&quot;,
                      &quot;properties&quot;: {
                        &quot;type&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                          &quot;enum&quot;: [
                            &quot;Task&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                        },
                        &quot;identifier&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                          &quot;example&quot;: {
                            &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                        },
                        &quot;actionStatus&quot;: {
                          &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                          &quot;x-range&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;enum&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                        },
                        &quot;memberOf&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;x-range&quot;: &quot;Plan&quot;,
                          &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Plan&quot;,
                            &quot;identifier&quot;: {
                              &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                        },
                        &quot;agent&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;Organization&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;Contact&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;RealEstateAgent&quot;,
                            &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                        },
                        &quot;participant&quot;: {
                          &quot;x-title&quot;: &quot;participant&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;RealEstateTeam&quot;,
                            &quot;RealEstateOrganization&quot;
                          ],
                          &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                          },
                          &quot;example&quot;: [
                            {
                              &quot;type&quot;: &quot;Contact&quot;,
                              &quot;name&quot;: &quot;Bruce Wayne&quot;,
                              &quot;email&quot;: &quot;bruce@example.com&quot;,
                              &quot;identifier&quot;: {
                                &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                              }
                            }
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                        },
                        &quot;name&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;name or title&quot;,
                          &quot;example&quot;: &quot;Call Ricky&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                        },
                        &quot;description&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;task detailed description&quot;,
                          &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                        },
                        &quot;keywords&quot;: {
                          &quot;title&quot;: &quot;keywords&quot;,
                          &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;example&quot;: [
                            &quot;Sphere of Influence&quot;,
                            &quot;Past Customer&quot;
                          ],
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;string&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                        },
                        &quot;dateDue&quot;: {
                          &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                        },
                        &quot;dateCompleted&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;description&quot;: &quot;date the task was completed&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                        },
                        &quot;location&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                          &quot;x-range&quot;: [
                            &quot;Place&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Place&quot;,
                            &quot;address&quot;: {
                              &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                              &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                              &quot;addressRegion&quot;: &quot;NJ&quot;,
                              &quot;postalCode&quot;: &quot;10007&quot;,
                              &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                              &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;Task&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
                  },
                  &quot;creator&quot;: {
                    &quot;title&quot;: &quot;creator&quot;,
                    &quot;description&quot;: &quot;the item creator&quot;,
                    &quot;x-range&quot;: [
                      &quot;Person&quot;,
                      &quot;Organization&quot;
                    ],
                    &quot;example&quot;: &quot;http://agent.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-126&gt;&quot;
                  },
                  &quot;dateCreated&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
                  },
                  &quot;dateModified&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-212&gt;&quot;
                  },
                  &quot;dateCompleted&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-366&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Plan&quot;
              },
              &quot;options&quot;: {}
            }
          }
        }
      }
    }
  }
}
pname = agent
required = false
path = member



prop = {
  &quot;_json&quot;: {
    &quot;x-title&quot;: &quot;participant&quot;,
    &quot;x-range&quot;: [
      &quot;Person&quot;,
      &quot;RealEstateAgent&quot;,
      &quot;RealEstateTeam&quot;,
      &quot;RealEstateOrganization&quot;
    ],
    &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
    &quot;type&quot;: &quot;array&quot;,
    &quot;items&quot;: {
      &quot;type&quot;: &quot;object&quot;,
      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
    },
    &quot;example&quot;: [
      {
        &quot;type&quot;: &quot;Contact&quot;,
        &quot;name&quot;: &quot;Bruce Wayne&quot;,
        &quot;email&quot;: &quot;bruce@example.com&quot;,
        &quot;identifier&quot;: {
          &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
        }
      }
    ],
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;Task&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
        &quot;x-range&quot;: &quot;Task&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;enum&quot;: [
              &quot;Task&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
          },
          &quot;identifier&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
            &quot;example&quot;: {
              &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
          },
          &quot;actionStatus&quot;: {
            &quot;example&quot;: &quot;PotentialActionStatus&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
            &quot;x-range&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;enum&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
          },
          &quot;memberOf&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;Plan&quot;,
            &quot;description&quot;: &quot;a plan the task is associated with&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Plan&quot;,
              &quot;identifier&quot;: {
                &quot;redPlan_ID&quot;: &quot;xxxx&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
          },
          &quot;agent&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;Organization&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;Contact&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;RealEstateAgent&quot;,
              &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
          },
          &quot;participant&quot;: {
            &quot;x-title&quot;: &quot;participant&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;RealEstateTeam&quot;,
              &quot;RealEstateOrganization&quot;
            ],
            &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;items&quot;: {
              &quot;type&quot;: &quot;object&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
            },
            &quot;example&quot;: [
              {
                &quot;type&quot;: &quot;Contact&quot;,
                &quot;name&quot;: &quot;Bruce Wayne&quot;,
                &quot;email&quot;: &quot;bruce@example.com&quot;,
                &quot;identifier&quot;: {
                  &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                }
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;name or title&quot;,
            &quot;example&quot;: &quot;Call Ricky&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
          },
          &quot;description&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;task detailed description&quot;,
            &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
          },
          &quot;keywords&quot;: {
            &quot;title&quot;: &quot;keywords&quot;,
            &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;example&quot;: [
              &quot;Sphere of Influence&quot;,
              &quot;Past Customer&quot;
            ],
            &quot;items&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
          },
          &quot;dateDue&quot;: {
            &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
          },
          &quot;dateCompleted&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;description&quot;: &quot;date the task was completed&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
          },
          &quot;location&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
            &quot;x-range&quot;: [
              &quot;Place&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Place&quot;,
              &quot;address&quot;: {
                &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                &quot;addressRegion&quot;: &quot;NJ&quot;,
                &quot;postalCode&quot;: &quot;10007&quot;,
                &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;Task&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;array&quot;,
            &quot;description&quot;: &quot;tasks which make up the plan&quot;,
            &quot;items&quot;: {
              &quot;title&quot;: &quot;Task&quot;,
              &quot;type&quot;: &quot;object&quot;,
              &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
              &quot;x-range&quot;: &quot;Task&quot;,
              &quot;properties&quot;: {
                &quot;type&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                  &quot;enum&quot;: [
                    &quot;Task&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                },
                &quot;identifier&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                  &quot;example&quot;: {
                    &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                },
                &quot;actionStatus&quot;: {
                  &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                  &quot;x-range&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;enum&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                },
                &quot;memberOf&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;x-range&quot;: &quot;Plan&quot;,
                  &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Plan&quot;,
                    &quot;identifier&quot;: {
                      &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                },
                &quot;agent&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;Organization&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;Contact&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;RealEstateAgent&quot;,
                    &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                },
                &quot;participant&quot;: {
                  &quot;x-title&quot;: &quot;participant&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;RealEstateTeam&quot;,
                    &quot;RealEstateOrganization&quot;
                  ],
                  &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                  },
                  &quot;example&quot;: [
                    {
                      &quot;type&quot;: &quot;Contact&quot;,
                      &quot;name&quot;: &quot;Bruce Wayne&quot;,
                      &quot;email&quot;: &quot;bruce@example.com&quot;,
                      &quot;identifier&quot;: {
                        &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                      }
                    }
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                },
                &quot;name&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;name or title&quot;,
                  &quot;example&quot;: &quot;Call Ricky&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                },
                &quot;description&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;task detailed description&quot;,
                  &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                },
                &quot;keywords&quot;: {
                  &quot;title&quot;: &quot;keywords&quot;,
                  &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;example&quot;: [
                    &quot;Sphere of Influence&quot;,
                    &quot;Past Customer&quot;
                  ],
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                },
                &quot;dateDue&quot;: {
                  &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                },
                &quot;dateCompleted&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;description&quot;: &quot;date the task was completed&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                },
                &quot;location&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                  &quot;x-range&quot;: [
                    &quot;Place&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Place&quot;,
                    &quot;address&quot;: {
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;addressRegion&quot;: &quot;NJ&quot;,
                      &quot;postalCode&quot;: &quot;10007&quot;,
                      &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                      &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                }
              },
              &quot;x-parser-schema-id&quot;: &quot;Task&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
          },
          &quot;options&quot;: {
            &quot;parent&quot;: {
              &quot;_json&quot;: {
                &quot;title&quot;: &quot;Plan&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a collection of related tasks&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;
                ],
                &quot;x-range&quot;: &quot;Plan&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;description&quot;: &quot;Plan&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;Plan&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-348&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the plan&quot;,
                    &quot;example&quot;: &quot;Ricky Follow Up Plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-349&gt;&quot;
                  },
                  &quot;description&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item&quot;,
                    &quot;example&quot;: &quot;this is the description of my awesome plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-350&gt;&quot;
                  },
                  &quot;member&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;description&quot;: &quot;tasks which make up the plan&quot;,
                    &quot;items&quot;: {
                      &quot;title&quot;: &quot;Task&quot;,
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
                      &quot;x-range&quot;: &quot;Task&quot;,
                      &quot;properties&quot;: {
                        &quot;type&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                          &quot;enum&quot;: [
                            &quot;Task&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                        },
                        &quot;identifier&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                          &quot;example&quot;: {
                            &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                        },
                        &quot;actionStatus&quot;: {
                          &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                          &quot;x-range&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;enum&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                        },
                        &quot;memberOf&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;x-range&quot;: &quot;Plan&quot;,
                          &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Plan&quot;,
                            &quot;identifier&quot;: {
                              &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                        },
                        &quot;agent&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;Organization&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;Contact&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;RealEstateAgent&quot;,
                            &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                        },
                        &quot;participant&quot;: {
                          &quot;x-title&quot;: &quot;participant&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;RealEstateTeam&quot;,
                            &quot;RealEstateOrganization&quot;
                          ],
                          &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                          },
                          &quot;example&quot;: [
                            {
                              &quot;type&quot;: &quot;Contact&quot;,
                              &quot;name&quot;: &quot;Bruce Wayne&quot;,
                              &quot;email&quot;: &quot;bruce@example.com&quot;,
                              &quot;identifier&quot;: {
                                &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                              }
                            }
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                        },
                        &quot;name&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;name or title&quot;,
                          &quot;example&quot;: &quot;Call Ricky&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                        },
                        &quot;description&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;task detailed description&quot;,
                          &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                        },
                        &quot;keywords&quot;: {
                          &quot;title&quot;: &quot;keywords&quot;,
                          &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;example&quot;: [
                            &quot;Sphere of Influence&quot;,
                            &quot;Past Customer&quot;
                          ],
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;string&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                        },
                        &quot;dateDue&quot;: {
                          &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                        },
                        &quot;dateCompleted&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;description&quot;: &quot;date the task was completed&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                        },
                        &quot;location&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                          &quot;x-range&quot;: [
                            &quot;Place&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Place&quot;,
                            &quot;address&quot;: {
                              &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                              &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                              &quot;addressRegion&quot;: &quot;NJ&quot;,
                              &quot;postalCode&quot;: &quot;10007&quot;,
                              &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                              &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;Task&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
                  },
                  &quot;creator&quot;: {
                    &quot;title&quot;: &quot;creator&quot;,
                    &quot;description&quot;: &quot;the item creator&quot;,
                    &quot;x-range&quot;: [
                      &quot;Person&quot;,
                      &quot;Organization&quot;
                    ],
                    &quot;example&quot;: &quot;http://agent.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-126&gt;&quot;
                  },
                  &quot;dateCreated&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
                  },
                  &quot;dateModified&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-212&gt;&quot;
                  },
                  &quot;dateCompleted&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-366&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Plan&quot;
              },
              &quot;options&quot;: {}
            }
          }
        }
      }
    }
  }
}
pname = participant
required = false
path = member



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;name or title&quot;,
    &quot;example&quot;: &quot;Call Ricky&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;Task&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
        &quot;x-range&quot;: &quot;Task&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;enum&quot;: [
              &quot;Task&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
          },
          &quot;identifier&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
            &quot;example&quot;: {
              &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
          },
          &quot;actionStatus&quot;: {
            &quot;example&quot;: &quot;PotentialActionStatus&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
            &quot;x-range&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;enum&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
          },
          &quot;memberOf&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;Plan&quot;,
            &quot;description&quot;: &quot;a plan the task is associated with&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Plan&quot;,
              &quot;identifier&quot;: {
                &quot;redPlan_ID&quot;: &quot;xxxx&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
          },
          &quot;agent&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;Organization&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;Contact&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;RealEstateAgent&quot;,
              &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
          },
          &quot;participant&quot;: {
            &quot;x-title&quot;: &quot;participant&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;RealEstateTeam&quot;,
              &quot;RealEstateOrganization&quot;
            ],
            &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;items&quot;: {
              &quot;type&quot;: &quot;object&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
            },
            &quot;example&quot;: [
              {
                &quot;type&quot;: &quot;Contact&quot;,
                &quot;name&quot;: &quot;Bruce Wayne&quot;,
                &quot;email&quot;: &quot;bruce@example.com&quot;,
                &quot;identifier&quot;: {
                  &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                }
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;name or title&quot;,
            &quot;example&quot;: &quot;Call Ricky&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
          },
          &quot;description&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;task detailed description&quot;,
            &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
          },
          &quot;keywords&quot;: {
            &quot;title&quot;: &quot;keywords&quot;,
            &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;example&quot;: [
              &quot;Sphere of Influence&quot;,
              &quot;Past Customer&quot;
            ],
            &quot;items&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
          },
          &quot;dateDue&quot;: {
            &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
          },
          &quot;dateCompleted&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;description&quot;: &quot;date the task was completed&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
          },
          &quot;location&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
            &quot;x-range&quot;: [
              &quot;Place&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Place&quot;,
              &quot;address&quot;: {
                &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                &quot;addressRegion&quot;: &quot;NJ&quot;,
                &quot;postalCode&quot;: &quot;10007&quot;,
                &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;Task&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;array&quot;,
            &quot;description&quot;: &quot;tasks which make up the plan&quot;,
            &quot;items&quot;: {
              &quot;title&quot;: &quot;Task&quot;,
              &quot;type&quot;: &quot;object&quot;,
              &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
              &quot;x-range&quot;: &quot;Task&quot;,
              &quot;properties&quot;: {
                &quot;type&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                  &quot;enum&quot;: [
                    &quot;Task&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                },
                &quot;identifier&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                  &quot;example&quot;: {
                    &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                },
                &quot;actionStatus&quot;: {
                  &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                  &quot;x-range&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;enum&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                },
                &quot;memberOf&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;x-range&quot;: &quot;Plan&quot;,
                  &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Plan&quot;,
                    &quot;identifier&quot;: {
                      &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                },
                &quot;agent&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;Organization&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;Contact&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;RealEstateAgent&quot;,
                    &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                },
                &quot;participant&quot;: {
                  &quot;x-title&quot;: &quot;participant&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;RealEstateTeam&quot;,
                    &quot;RealEstateOrganization&quot;
                  ],
                  &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                  },
                  &quot;example&quot;: [
                    {
                      &quot;type&quot;: &quot;Contact&quot;,
                      &quot;name&quot;: &quot;Bruce Wayne&quot;,
                      &quot;email&quot;: &quot;bruce@example.com&quot;,
                      &quot;identifier&quot;: {
                        &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                      }
                    }
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                },
                &quot;name&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;name or title&quot;,
                  &quot;example&quot;: &quot;Call Ricky&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                },
                &quot;description&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;task detailed description&quot;,
                  &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                },
                &quot;keywords&quot;: {
                  &quot;title&quot;: &quot;keywords&quot;,
                  &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;example&quot;: [
                    &quot;Sphere of Influence&quot;,
                    &quot;Past Customer&quot;
                  ],
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                },
                &quot;dateDue&quot;: {
                  &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                },
                &quot;dateCompleted&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;description&quot;: &quot;date the task was completed&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                },
                &quot;location&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                  &quot;x-range&quot;: [
                    &quot;Place&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Place&quot;,
                    &quot;address&quot;: {
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;addressRegion&quot;: &quot;NJ&quot;,
                      &quot;postalCode&quot;: &quot;10007&quot;,
                      &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                      &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                }
              },
              &quot;x-parser-schema-id&quot;: &quot;Task&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
          },
          &quot;options&quot;: {
            &quot;parent&quot;: {
              &quot;_json&quot;: {
                &quot;title&quot;: &quot;Plan&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a collection of related tasks&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;
                ],
                &quot;x-range&quot;: &quot;Plan&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;description&quot;: &quot;Plan&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;Plan&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-348&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the plan&quot;,
                    &quot;example&quot;: &quot;Ricky Follow Up Plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-349&gt;&quot;
                  },
                  &quot;description&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item&quot;,
                    &quot;example&quot;: &quot;this is the description of my awesome plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-350&gt;&quot;
                  },
                  &quot;member&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;description&quot;: &quot;tasks which make up the plan&quot;,
                    &quot;items&quot;: {
                      &quot;title&quot;: &quot;Task&quot;,
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
                      &quot;x-range&quot;: &quot;Task&quot;,
                      &quot;properties&quot;: {
                        &quot;type&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                          &quot;enum&quot;: [
                            &quot;Task&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                        },
                        &quot;identifier&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                          &quot;example&quot;: {
                            &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                        },
                        &quot;actionStatus&quot;: {
                          &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                          &quot;x-range&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;enum&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                        },
                        &quot;memberOf&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;x-range&quot;: &quot;Plan&quot;,
                          &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Plan&quot;,
                            &quot;identifier&quot;: {
                              &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                        },
                        &quot;agent&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;Organization&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;Contact&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;RealEstateAgent&quot;,
                            &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                        },
                        &quot;participant&quot;: {
                          &quot;x-title&quot;: &quot;participant&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;RealEstateTeam&quot;,
                            &quot;RealEstateOrganization&quot;
                          ],
                          &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                          },
                          &quot;example&quot;: [
                            {
                              &quot;type&quot;: &quot;Contact&quot;,
                              &quot;name&quot;: &quot;Bruce Wayne&quot;,
                              &quot;email&quot;: &quot;bruce@example.com&quot;,
                              &quot;identifier&quot;: {
                                &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                              }
                            }
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                        },
                        &quot;name&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;name or title&quot;,
                          &quot;example&quot;: &quot;Call Ricky&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                        },
                        &quot;description&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;task detailed description&quot;,
                          &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                        },
                        &quot;keywords&quot;: {
                          &quot;title&quot;: &quot;keywords&quot;,
                          &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;example&quot;: [
                            &quot;Sphere of Influence&quot;,
                            &quot;Past Customer&quot;
                          ],
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;string&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                        },
                        &quot;dateDue&quot;: {
                          &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                        },
                        &quot;dateCompleted&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;description&quot;: &quot;date the task was completed&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                        },
                        &quot;location&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                          &quot;x-range&quot;: [
                            &quot;Place&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Place&quot;,
                            &quot;address&quot;: {
                              &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                              &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                              &quot;addressRegion&quot;: &quot;NJ&quot;,
                              &quot;postalCode&quot;: &quot;10007&quot;,
                              &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                              &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;Task&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
                  },
                  &quot;creator&quot;: {
                    &quot;title&quot;: &quot;creator&quot;,
                    &quot;description&quot;: &quot;the item creator&quot;,
                    &quot;x-range&quot;: [
                      &quot;Person&quot;,
                      &quot;Organization&quot;
                    ],
                    &quot;example&quot;: &quot;http://agent.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-126&gt;&quot;
                  },
                  &quot;dateCreated&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
                  },
                  &quot;dateModified&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-212&gt;&quot;
                  },
                  &quot;dateCompleted&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-366&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Plan&quot;
              },
              &quot;options&quot;: {}
            }
          }
        }
      }
    }
  }
}
pname = name
required = false
path = member



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;task detailed description&quot;,
    &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;Task&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
        &quot;x-range&quot;: &quot;Task&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;enum&quot;: [
              &quot;Task&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
          },
          &quot;identifier&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
            &quot;example&quot;: {
              &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
          },
          &quot;actionStatus&quot;: {
            &quot;example&quot;: &quot;PotentialActionStatus&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
            &quot;x-range&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;enum&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
          },
          &quot;memberOf&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;Plan&quot;,
            &quot;description&quot;: &quot;a plan the task is associated with&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Plan&quot;,
              &quot;identifier&quot;: {
                &quot;redPlan_ID&quot;: &quot;xxxx&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
          },
          &quot;agent&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;Organization&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;Contact&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;RealEstateAgent&quot;,
              &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
          },
          &quot;participant&quot;: {
            &quot;x-title&quot;: &quot;participant&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;RealEstateTeam&quot;,
              &quot;RealEstateOrganization&quot;
            ],
            &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;items&quot;: {
              &quot;type&quot;: &quot;object&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
            },
            &quot;example&quot;: [
              {
                &quot;type&quot;: &quot;Contact&quot;,
                &quot;name&quot;: &quot;Bruce Wayne&quot;,
                &quot;email&quot;: &quot;bruce@example.com&quot;,
                &quot;identifier&quot;: {
                  &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                }
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;name or title&quot;,
            &quot;example&quot;: &quot;Call Ricky&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
          },
          &quot;description&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;task detailed description&quot;,
            &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
          },
          &quot;keywords&quot;: {
            &quot;title&quot;: &quot;keywords&quot;,
            &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;example&quot;: [
              &quot;Sphere of Influence&quot;,
              &quot;Past Customer&quot;
            ],
            &quot;items&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
          },
          &quot;dateDue&quot;: {
            &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
          },
          &quot;dateCompleted&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;description&quot;: &quot;date the task was completed&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
          },
          &quot;location&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
            &quot;x-range&quot;: [
              &quot;Place&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Place&quot;,
              &quot;address&quot;: {
                &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                &quot;addressRegion&quot;: &quot;NJ&quot;,
                &quot;postalCode&quot;: &quot;10007&quot;,
                &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;Task&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;array&quot;,
            &quot;description&quot;: &quot;tasks which make up the plan&quot;,
            &quot;items&quot;: {
              &quot;title&quot;: &quot;Task&quot;,
              &quot;type&quot;: &quot;object&quot;,
              &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
              &quot;x-range&quot;: &quot;Task&quot;,
              &quot;properties&quot;: {
                &quot;type&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                  &quot;enum&quot;: [
                    &quot;Task&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                },
                &quot;identifier&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                  &quot;example&quot;: {
                    &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                },
                &quot;actionStatus&quot;: {
                  &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                  &quot;x-range&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;enum&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                },
                &quot;memberOf&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;x-range&quot;: &quot;Plan&quot;,
                  &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Plan&quot;,
                    &quot;identifier&quot;: {
                      &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                },
                &quot;agent&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;Organization&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;Contact&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;RealEstateAgent&quot;,
                    &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                },
                &quot;participant&quot;: {
                  &quot;x-title&quot;: &quot;participant&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;RealEstateTeam&quot;,
                    &quot;RealEstateOrganization&quot;
                  ],
                  &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                  },
                  &quot;example&quot;: [
                    {
                      &quot;type&quot;: &quot;Contact&quot;,
                      &quot;name&quot;: &quot;Bruce Wayne&quot;,
                      &quot;email&quot;: &quot;bruce@example.com&quot;,
                      &quot;identifier&quot;: {
                        &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                      }
                    }
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                },
                &quot;name&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;name or title&quot;,
                  &quot;example&quot;: &quot;Call Ricky&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                },
                &quot;description&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;task detailed description&quot;,
                  &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                },
                &quot;keywords&quot;: {
                  &quot;title&quot;: &quot;keywords&quot;,
                  &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;example&quot;: [
                    &quot;Sphere of Influence&quot;,
                    &quot;Past Customer&quot;
                  ],
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                },
                &quot;dateDue&quot;: {
                  &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                },
                &quot;dateCompleted&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;description&quot;: &quot;date the task was completed&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                },
                &quot;location&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                  &quot;x-range&quot;: [
                    &quot;Place&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Place&quot;,
                    &quot;address&quot;: {
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;addressRegion&quot;: &quot;NJ&quot;,
                      &quot;postalCode&quot;: &quot;10007&quot;,
                      &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                      &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                }
              },
              &quot;x-parser-schema-id&quot;: &quot;Task&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
          },
          &quot;options&quot;: {
            &quot;parent&quot;: {
              &quot;_json&quot;: {
                &quot;title&quot;: &quot;Plan&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a collection of related tasks&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;
                ],
                &quot;x-range&quot;: &quot;Plan&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;description&quot;: &quot;Plan&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;Plan&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-348&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the plan&quot;,
                    &quot;example&quot;: &quot;Ricky Follow Up Plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-349&gt;&quot;
                  },
                  &quot;description&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item&quot;,
                    &quot;example&quot;: &quot;this is the description of my awesome plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-350&gt;&quot;
                  },
                  &quot;member&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;description&quot;: &quot;tasks which make up the plan&quot;,
                    &quot;items&quot;: {
                      &quot;title&quot;: &quot;Task&quot;,
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
                      &quot;x-range&quot;: &quot;Task&quot;,
                      &quot;properties&quot;: {
                        &quot;type&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                          &quot;enum&quot;: [
                            &quot;Task&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                        },
                        &quot;identifier&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                          &quot;example&quot;: {
                            &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                        },
                        &quot;actionStatus&quot;: {
                          &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                          &quot;x-range&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;enum&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                        },
                        &quot;memberOf&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;x-range&quot;: &quot;Plan&quot;,
                          &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Plan&quot;,
                            &quot;identifier&quot;: {
                              &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                        },
                        &quot;agent&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;Organization&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;Contact&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;RealEstateAgent&quot;,
                            &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                        },
                        &quot;participant&quot;: {
                          &quot;x-title&quot;: &quot;participant&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;RealEstateTeam&quot;,
                            &quot;RealEstateOrganization&quot;
                          ],
                          &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                          },
                          &quot;example&quot;: [
                            {
                              &quot;type&quot;: &quot;Contact&quot;,
                              &quot;name&quot;: &quot;Bruce Wayne&quot;,
                              &quot;email&quot;: &quot;bruce@example.com&quot;,
                              &quot;identifier&quot;: {
                                &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                              }
                            }
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                        },
                        &quot;name&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;name or title&quot;,
                          &quot;example&quot;: &quot;Call Ricky&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                        },
                        &quot;description&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;task detailed description&quot;,
                          &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                        },
                        &quot;keywords&quot;: {
                          &quot;title&quot;: &quot;keywords&quot;,
                          &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;example&quot;: [
                            &quot;Sphere of Influence&quot;,
                            &quot;Past Customer&quot;
                          ],
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;string&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                        },
                        &quot;dateDue&quot;: {
                          &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                        },
                        &quot;dateCompleted&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;description&quot;: &quot;date the task was completed&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                        },
                        &quot;location&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                          &quot;x-range&quot;: [
                            &quot;Place&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Place&quot;,
                            &quot;address&quot;: {
                              &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                              &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                              &quot;addressRegion&quot;: &quot;NJ&quot;,
                              &quot;postalCode&quot;: &quot;10007&quot;,
                              &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                              &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;Task&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
                  },
                  &quot;creator&quot;: {
                    &quot;title&quot;: &quot;creator&quot;,
                    &quot;description&quot;: &quot;the item creator&quot;,
                    &quot;x-range&quot;: [
                      &quot;Person&quot;,
                      &quot;Organization&quot;
                    ],
                    &quot;example&quot;: &quot;http://agent.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-126&gt;&quot;
                  },
                  &quot;dateCreated&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
                  },
                  &quot;dateModified&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-212&gt;&quot;
                  },
                  &quot;dateCompleted&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-366&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Plan&quot;
              },
              &quot;options&quot;: {}
            }
          }
        }
      }
    }
  }
}
pname = description
required = false
path = member



prop = {
  &quot;_json&quot;: {
    &quot;title&quot;: &quot;keywords&quot;,
    &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
    &quot;type&quot;: &quot;array&quot;,
    &quot;example&quot;: [
      &quot;Sphere of Influence&quot;,
      &quot;Past Customer&quot;
    ],
    &quot;items&quot;: {
      &quot;type&quot;: &quot;string&quot;,
      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;Task&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
        &quot;x-range&quot;: &quot;Task&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;enum&quot;: [
              &quot;Task&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
          },
          &quot;identifier&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
            &quot;example&quot;: {
              &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
          },
          &quot;actionStatus&quot;: {
            &quot;example&quot;: &quot;PotentialActionStatus&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
            &quot;x-range&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;enum&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
          },
          &quot;memberOf&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;Plan&quot;,
            &quot;description&quot;: &quot;a plan the task is associated with&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Plan&quot;,
              &quot;identifier&quot;: {
                &quot;redPlan_ID&quot;: &quot;xxxx&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
          },
          &quot;agent&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;Organization&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;Contact&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;RealEstateAgent&quot;,
              &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
          },
          &quot;participant&quot;: {
            &quot;x-title&quot;: &quot;participant&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;RealEstateTeam&quot;,
              &quot;RealEstateOrganization&quot;
            ],
            &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;items&quot;: {
              &quot;type&quot;: &quot;object&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
            },
            &quot;example&quot;: [
              {
                &quot;type&quot;: &quot;Contact&quot;,
                &quot;name&quot;: &quot;Bruce Wayne&quot;,
                &quot;email&quot;: &quot;bruce@example.com&quot;,
                &quot;identifier&quot;: {
                  &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                }
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;name or title&quot;,
            &quot;example&quot;: &quot;Call Ricky&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
          },
          &quot;description&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;task detailed description&quot;,
            &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
          },
          &quot;keywords&quot;: {
            &quot;title&quot;: &quot;keywords&quot;,
            &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;example&quot;: [
              &quot;Sphere of Influence&quot;,
              &quot;Past Customer&quot;
            ],
            &quot;items&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
          },
          &quot;dateDue&quot;: {
            &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
          },
          &quot;dateCompleted&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;description&quot;: &quot;date the task was completed&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
          },
          &quot;location&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
            &quot;x-range&quot;: [
              &quot;Place&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Place&quot;,
              &quot;address&quot;: {
                &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                &quot;addressRegion&quot;: &quot;NJ&quot;,
                &quot;postalCode&quot;: &quot;10007&quot;,
                &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;Task&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;array&quot;,
            &quot;description&quot;: &quot;tasks which make up the plan&quot;,
            &quot;items&quot;: {
              &quot;title&quot;: &quot;Task&quot;,
              &quot;type&quot;: &quot;object&quot;,
              &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
              &quot;x-range&quot;: &quot;Task&quot;,
              &quot;properties&quot;: {
                &quot;type&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                  &quot;enum&quot;: [
                    &quot;Task&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                },
                &quot;identifier&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                  &quot;example&quot;: {
                    &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                },
                &quot;actionStatus&quot;: {
                  &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                  &quot;x-range&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;enum&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                },
                &quot;memberOf&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;x-range&quot;: &quot;Plan&quot;,
                  &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Plan&quot;,
                    &quot;identifier&quot;: {
                      &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                },
                &quot;agent&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;Organization&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;Contact&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;RealEstateAgent&quot;,
                    &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                },
                &quot;participant&quot;: {
                  &quot;x-title&quot;: &quot;participant&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;RealEstateTeam&quot;,
                    &quot;RealEstateOrganization&quot;
                  ],
                  &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                  },
                  &quot;example&quot;: [
                    {
                      &quot;type&quot;: &quot;Contact&quot;,
                      &quot;name&quot;: &quot;Bruce Wayne&quot;,
                      &quot;email&quot;: &quot;bruce@example.com&quot;,
                      &quot;identifier&quot;: {
                        &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                      }
                    }
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                },
                &quot;name&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;name or title&quot;,
                  &quot;example&quot;: &quot;Call Ricky&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                },
                &quot;description&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;task detailed description&quot;,
                  &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                },
                &quot;keywords&quot;: {
                  &quot;title&quot;: &quot;keywords&quot;,
                  &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;example&quot;: [
                    &quot;Sphere of Influence&quot;,
                    &quot;Past Customer&quot;
                  ],
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                },
                &quot;dateDue&quot;: {
                  &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                },
                &quot;dateCompleted&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;description&quot;: &quot;date the task was completed&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                },
                &quot;location&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                  &quot;x-range&quot;: [
                    &quot;Place&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Place&quot;,
                    &quot;address&quot;: {
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;addressRegion&quot;: &quot;NJ&quot;,
                      &quot;postalCode&quot;: &quot;10007&quot;,
                      &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                      &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                }
              },
              &quot;x-parser-schema-id&quot;: &quot;Task&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
          },
          &quot;options&quot;: {
            &quot;parent&quot;: {
              &quot;_json&quot;: {
                &quot;title&quot;: &quot;Plan&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a collection of related tasks&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;
                ],
                &quot;x-range&quot;: &quot;Plan&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;description&quot;: &quot;Plan&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;Plan&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-348&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the plan&quot;,
                    &quot;example&quot;: &quot;Ricky Follow Up Plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-349&gt;&quot;
                  },
                  &quot;description&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item&quot;,
                    &quot;example&quot;: &quot;this is the description of my awesome plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-350&gt;&quot;
                  },
                  &quot;member&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;description&quot;: &quot;tasks which make up the plan&quot;,
                    &quot;items&quot;: {
                      &quot;title&quot;: &quot;Task&quot;,
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
                      &quot;x-range&quot;: &quot;Task&quot;,
                      &quot;properties&quot;: {
                        &quot;type&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                          &quot;enum&quot;: [
                            &quot;Task&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                        },
                        &quot;identifier&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                          &quot;example&quot;: {
                            &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                        },
                        &quot;actionStatus&quot;: {
                          &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                          &quot;x-range&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;enum&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                        },
                        &quot;memberOf&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;x-range&quot;: &quot;Plan&quot;,
                          &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Plan&quot;,
                            &quot;identifier&quot;: {
                              &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                        },
                        &quot;agent&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;Organization&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;Contact&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;RealEstateAgent&quot;,
                            &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                        },
                        &quot;participant&quot;: {
                          &quot;x-title&quot;: &quot;participant&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;RealEstateTeam&quot;,
                            &quot;RealEstateOrganization&quot;
                          ],
                          &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                          },
                          &quot;example&quot;: [
                            {
                              &quot;type&quot;: &quot;Contact&quot;,
                              &quot;name&quot;: &quot;Bruce Wayne&quot;,
                              &quot;email&quot;: &quot;bruce@example.com&quot;,
                              &quot;identifier&quot;: {
                                &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                              }
                            }
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                        },
                        &quot;name&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;name or title&quot;,
                          &quot;example&quot;: &quot;Call Ricky&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                        },
                        &quot;description&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;task detailed description&quot;,
                          &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                        },
                        &quot;keywords&quot;: {
                          &quot;title&quot;: &quot;keywords&quot;,
                          &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;example&quot;: [
                            &quot;Sphere of Influence&quot;,
                            &quot;Past Customer&quot;
                          ],
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;string&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                        },
                        &quot;dateDue&quot;: {
                          &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                        },
                        &quot;dateCompleted&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;description&quot;: &quot;date the task was completed&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                        },
                        &quot;location&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                          &quot;x-range&quot;: [
                            &quot;Place&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Place&quot;,
                            &quot;address&quot;: {
                              &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                              &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                              &quot;addressRegion&quot;: &quot;NJ&quot;,
                              &quot;postalCode&quot;: &quot;10007&quot;,
                              &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                              &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;Task&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
                  },
                  &quot;creator&quot;: {
                    &quot;title&quot;: &quot;creator&quot;,
                    &quot;description&quot;: &quot;the item creator&quot;,
                    &quot;x-range&quot;: [
                      &quot;Person&quot;,
                      &quot;Organization&quot;
                    ],
                    &quot;example&quot;: &quot;http://agent.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-126&gt;&quot;
                  },
                  &quot;dateCreated&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
                  },
                  &quot;dateModified&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-212&gt;&quot;
                  },
                  &quot;dateCompleted&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-366&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Plan&quot;
              },
              &quot;options&quot;: {}
            }
          }
        }
      }
    }
  }
}
pname = keywords
required = false
path = member



prop = {
  &quot;_json&quot;: {
    &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
    &quot;type&quot;: &quot;string&quot;,
    &quot;format&quot;: &quot;date-time&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;Task&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
        &quot;x-range&quot;: &quot;Task&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;enum&quot;: [
              &quot;Task&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
          },
          &quot;identifier&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
            &quot;example&quot;: {
              &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
          },
          &quot;actionStatus&quot;: {
            &quot;example&quot;: &quot;PotentialActionStatus&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
            &quot;x-range&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;enum&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
          },
          &quot;memberOf&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;Plan&quot;,
            &quot;description&quot;: &quot;a plan the task is associated with&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Plan&quot;,
              &quot;identifier&quot;: {
                &quot;redPlan_ID&quot;: &quot;xxxx&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
          },
          &quot;agent&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;Organization&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;Contact&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;RealEstateAgent&quot;,
              &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
          },
          &quot;participant&quot;: {
            &quot;x-title&quot;: &quot;participant&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;RealEstateTeam&quot;,
              &quot;RealEstateOrganization&quot;
            ],
            &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;items&quot;: {
              &quot;type&quot;: &quot;object&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
            },
            &quot;example&quot;: [
              {
                &quot;type&quot;: &quot;Contact&quot;,
                &quot;name&quot;: &quot;Bruce Wayne&quot;,
                &quot;email&quot;: &quot;bruce@example.com&quot;,
                &quot;identifier&quot;: {
                  &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                }
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;name or title&quot;,
            &quot;example&quot;: &quot;Call Ricky&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
          },
          &quot;description&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;task detailed description&quot;,
            &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
          },
          &quot;keywords&quot;: {
            &quot;title&quot;: &quot;keywords&quot;,
            &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;example&quot;: [
              &quot;Sphere of Influence&quot;,
              &quot;Past Customer&quot;
            ],
            &quot;items&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
          },
          &quot;dateDue&quot;: {
            &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
          },
          &quot;dateCompleted&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;description&quot;: &quot;date the task was completed&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
          },
          &quot;location&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
            &quot;x-range&quot;: [
              &quot;Place&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Place&quot;,
              &quot;address&quot;: {
                &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                &quot;addressRegion&quot;: &quot;NJ&quot;,
                &quot;postalCode&quot;: &quot;10007&quot;,
                &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;Task&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;array&quot;,
            &quot;description&quot;: &quot;tasks which make up the plan&quot;,
            &quot;items&quot;: {
              &quot;title&quot;: &quot;Task&quot;,
              &quot;type&quot;: &quot;object&quot;,
              &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
              &quot;x-range&quot;: &quot;Task&quot;,
              &quot;properties&quot;: {
                &quot;type&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                  &quot;enum&quot;: [
                    &quot;Task&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                },
                &quot;identifier&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                  &quot;example&quot;: {
                    &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                },
                &quot;actionStatus&quot;: {
                  &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                  &quot;x-range&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;enum&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                },
                &quot;memberOf&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;x-range&quot;: &quot;Plan&quot;,
                  &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Plan&quot;,
                    &quot;identifier&quot;: {
                      &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                },
                &quot;agent&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;Organization&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;Contact&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;RealEstateAgent&quot;,
                    &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                },
                &quot;participant&quot;: {
                  &quot;x-title&quot;: &quot;participant&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;RealEstateTeam&quot;,
                    &quot;RealEstateOrganization&quot;
                  ],
                  &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                  },
                  &quot;example&quot;: [
                    {
                      &quot;type&quot;: &quot;Contact&quot;,
                      &quot;name&quot;: &quot;Bruce Wayne&quot;,
                      &quot;email&quot;: &quot;bruce@example.com&quot;,
                      &quot;identifier&quot;: {
                        &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                      }
                    }
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                },
                &quot;name&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;name or title&quot;,
                  &quot;example&quot;: &quot;Call Ricky&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                },
                &quot;description&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;task detailed description&quot;,
                  &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                },
                &quot;keywords&quot;: {
                  &quot;title&quot;: &quot;keywords&quot;,
                  &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;example&quot;: [
                    &quot;Sphere of Influence&quot;,
                    &quot;Past Customer&quot;
                  ],
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                },
                &quot;dateDue&quot;: {
                  &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                },
                &quot;dateCompleted&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;description&quot;: &quot;date the task was completed&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                },
                &quot;location&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                  &quot;x-range&quot;: [
                    &quot;Place&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Place&quot;,
                    &quot;address&quot;: {
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;addressRegion&quot;: &quot;NJ&quot;,
                      &quot;postalCode&quot;: &quot;10007&quot;,
                      &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                      &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                }
              },
              &quot;x-parser-schema-id&quot;: &quot;Task&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
          },
          &quot;options&quot;: {
            &quot;parent&quot;: {
              &quot;_json&quot;: {
                &quot;title&quot;: &quot;Plan&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a collection of related tasks&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;
                ],
                &quot;x-range&quot;: &quot;Plan&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;description&quot;: &quot;Plan&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;Plan&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-348&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the plan&quot;,
                    &quot;example&quot;: &quot;Ricky Follow Up Plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-349&gt;&quot;
                  },
                  &quot;description&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item&quot;,
                    &quot;example&quot;: &quot;this is the description of my awesome plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-350&gt;&quot;
                  },
                  &quot;member&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;description&quot;: &quot;tasks which make up the plan&quot;,
                    &quot;items&quot;: {
                      &quot;title&quot;: &quot;Task&quot;,
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
                      &quot;x-range&quot;: &quot;Task&quot;,
                      &quot;properties&quot;: {
                        &quot;type&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                          &quot;enum&quot;: [
                            &quot;Task&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                        },
                        &quot;identifier&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                          &quot;example&quot;: {
                            &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                        },
                        &quot;actionStatus&quot;: {
                          &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                          &quot;x-range&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;enum&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                        },
                        &quot;memberOf&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;x-range&quot;: &quot;Plan&quot;,
                          &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Plan&quot;,
                            &quot;identifier&quot;: {
                              &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                        },
                        &quot;agent&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;Organization&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;Contact&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;RealEstateAgent&quot;,
                            &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                        },
                        &quot;participant&quot;: {
                          &quot;x-title&quot;: &quot;participant&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;RealEstateTeam&quot;,
                            &quot;RealEstateOrganization&quot;
                          ],
                          &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                          },
                          &quot;example&quot;: [
                            {
                              &quot;type&quot;: &quot;Contact&quot;,
                              &quot;name&quot;: &quot;Bruce Wayne&quot;,
                              &quot;email&quot;: &quot;bruce@example.com&quot;,
                              &quot;identifier&quot;: {
                                &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                              }
                            }
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                        },
                        &quot;name&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;name or title&quot;,
                          &quot;example&quot;: &quot;Call Ricky&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                        },
                        &quot;description&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;task detailed description&quot;,
                          &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                        },
                        &quot;keywords&quot;: {
                          &quot;title&quot;: &quot;keywords&quot;,
                          &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;example&quot;: [
                            &quot;Sphere of Influence&quot;,
                            &quot;Past Customer&quot;
                          ],
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;string&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                        },
                        &quot;dateDue&quot;: {
                          &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                        },
                        &quot;dateCompleted&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;description&quot;: &quot;date the task was completed&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                        },
                        &quot;location&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                          &quot;x-range&quot;: [
                            &quot;Place&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Place&quot;,
                            &quot;address&quot;: {
                              &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                              &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                              &quot;addressRegion&quot;: &quot;NJ&quot;,
                              &quot;postalCode&quot;: &quot;10007&quot;,
                              &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                              &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;Task&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
                  },
                  &quot;creator&quot;: {
                    &quot;title&quot;: &quot;creator&quot;,
                    &quot;description&quot;: &quot;the item creator&quot;,
                    &quot;x-range&quot;: [
                      &quot;Person&quot;,
                      &quot;Organization&quot;
                    ],
                    &quot;example&quot;: &quot;http://agent.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-126&gt;&quot;
                  },
                  &quot;dateCreated&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
                  },
                  &quot;dateModified&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-212&gt;&quot;
                  },
                  &quot;dateCompleted&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-366&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Plan&quot;
              },
              &quot;options&quot;: {}
            }
          }
        }
      }
    }
  }
}
pname = dateDue
required = false
path = member



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;format&quot;: &quot;date-time&quot;,
    &quot;description&quot;: &quot;date the task was completed&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;Task&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
        &quot;x-range&quot;: &quot;Task&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;enum&quot;: [
              &quot;Task&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
          },
          &quot;identifier&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
            &quot;example&quot;: {
              &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
          },
          &quot;actionStatus&quot;: {
            &quot;example&quot;: &quot;PotentialActionStatus&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
            &quot;x-range&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;enum&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
          },
          &quot;memberOf&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;Plan&quot;,
            &quot;description&quot;: &quot;a plan the task is associated with&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Plan&quot;,
              &quot;identifier&quot;: {
                &quot;redPlan_ID&quot;: &quot;xxxx&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
          },
          &quot;agent&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;Organization&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;Contact&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;RealEstateAgent&quot;,
              &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
          },
          &quot;participant&quot;: {
            &quot;x-title&quot;: &quot;participant&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;RealEstateTeam&quot;,
              &quot;RealEstateOrganization&quot;
            ],
            &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;items&quot;: {
              &quot;type&quot;: &quot;object&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
            },
            &quot;example&quot;: [
              {
                &quot;type&quot;: &quot;Contact&quot;,
                &quot;name&quot;: &quot;Bruce Wayne&quot;,
                &quot;email&quot;: &quot;bruce@example.com&quot;,
                &quot;identifier&quot;: {
                  &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                }
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;name or title&quot;,
            &quot;example&quot;: &quot;Call Ricky&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
          },
          &quot;description&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;task detailed description&quot;,
            &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
          },
          &quot;keywords&quot;: {
            &quot;title&quot;: &quot;keywords&quot;,
            &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;example&quot;: [
              &quot;Sphere of Influence&quot;,
              &quot;Past Customer&quot;
            ],
            &quot;items&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
          },
          &quot;dateDue&quot;: {
            &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
          },
          &quot;dateCompleted&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;description&quot;: &quot;date the task was completed&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
          },
          &quot;location&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
            &quot;x-range&quot;: [
              &quot;Place&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Place&quot;,
              &quot;address&quot;: {
                &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                &quot;addressRegion&quot;: &quot;NJ&quot;,
                &quot;postalCode&quot;: &quot;10007&quot;,
                &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;Task&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;array&quot;,
            &quot;description&quot;: &quot;tasks which make up the plan&quot;,
            &quot;items&quot;: {
              &quot;title&quot;: &quot;Task&quot;,
              &quot;type&quot;: &quot;object&quot;,
              &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
              &quot;x-range&quot;: &quot;Task&quot;,
              &quot;properties&quot;: {
                &quot;type&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                  &quot;enum&quot;: [
                    &quot;Task&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                },
                &quot;identifier&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                  &quot;example&quot;: {
                    &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                },
                &quot;actionStatus&quot;: {
                  &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                  &quot;x-range&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;enum&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                },
                &quot;memberOf&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;x-range&quot;: &quot;Plan&quot;,
                  &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Plan&quot;,
                    &quot;identifier&quot;: {
                      &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                },
                &quot;agent&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;Organization&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;Contact&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;RealEstateAgent&quot;,
                    &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                },
                &quot;participant&quot;: {
                  &quot;x-title&quot;: &quot;participant&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;RealEstateTeam&quot;,
                    &quot;RealEstateOrganization&quot;
                  ],
                  &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                  },
                  &quot;example&quot;: [
                    {
                      &quot;type&quot;: &quot;Contact&quot;,
                      &quot;name&quot;: &quot;Bruce Wayne&quot;,
                      &quot;email&quot;: &quot;bruce@example.com&quot;,
                      &quot;identifier&quot;: {
                        &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                      }
                    }
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                },
                &quot;name&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;name or title&quot;,
                  &quot;example&quot;: &quot;Call Ricky&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                },
                &quot;description&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;task detailed description&quot;,
                  &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                },
                &quot;keywords&quot;: {
                  &quot;title&quot;: &quot;keywords&quot;,
                  &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;example&quot;: [
                    &quot;Sphere of Influence&quot;,
                    &quot;Past Customer&quot;
                  ],
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                },
                &quot;dateDue&quot;: {
                  &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                },
                &quot;dateCompleted&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;description&quot;: &quot;date the task was completed&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                },
                &quot;location&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                  &quot;x-range&quot;: [
                    &quot;Place&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Place&quot;,
                    &quot;address&quot;: {
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;addressRegion&quot;: &quot;NJ&quot;,
                      &quot;postalCode&quot;: &quot;10007&quot;,
                      &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                      &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                }
              },
              &quot;x-parser-schema-id&quot;: &quot;Task&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
          },
          &quot;options&quot;: {
            &quot;parent&quot;: {
              &quot;_json&quot;: {
                &quot;title&quot;: &quot;Plan&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a collection of related tasks&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;
                ],
                &quot;x-range&quot;: &quot;Plan&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;description&quot;: &quot;Plan&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;Plan&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-348&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the plan&quot;,
                    &quot;example&quot;: &quot;Ricky Follow Up Plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-349&gt;&quot;
                  },
                  &quot;description&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item&quot;,
                    &quot;example&quot;: &quot;this is the description of my awesome plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-350&gt;&quot;
                  },
                  &quot;member&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;description&quot;: &quot;tasks which make up the plan&quot;,
                    &quot;items&quot;: {
                      &quot;title&quot;: &quot;Task&quot;,
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
                      &quot;x-range&quot;: &quot;Task&quot;,
                      &quot;properties&quot;: {
                        &quot;type&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                          &quot;enum&quot;: [
                            &quot;Task&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                        },
                        &quot;identifier&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                          &quot;example&quot;: {
                            &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                        },
                        &quot;actionStatus&quot;: {
                          &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                          &quot;x-range&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;enum&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                        },
                        &quot;memberOf&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;x-range&quot;: &quot;Plan&quot;,
                          &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Plan&quot;,
                            &quot;identifier&quot;: {
                              &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                        },
                        &quot;agent&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;Organization&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;Contact&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;RealEstateAgent&quot;,
                            &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                        },
                        &quot;participant&quot;: {
                          &quot;x-title&quot;: &quot;participant&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;RealEstateTeam&quot;,
                            &quot;RealEstateOrganization&quot;
                          ],
                          &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                          },
                          &quot;example&quot;: [
                            {
                              &quot;type&quot;: &quot;Contact&quot;,
                              &quot;name&quot;: &quot;Bruce Wayne&quot;,
                              &quot;email&quot;: &quot;bruce@example.com&quot;,
                              &quot;identifier&quot;: {
                                &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                              }
                            }
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                        },
                        &quot;name&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;name or title&quot;,
                          &quot;example&quot;: &quot;Call Ricky&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                        },
                        &quot;description&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;task detailed description&quot;,
                          &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                        },
                        &quot;keywords&quot;: {
                          &quot;title&quot;: &quot;keywords&quot;,
                          &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;example&quot;: [
                            &quot;Sphere of Influence&quot;,
                            &quot;Past Customer&quot;
                          ],
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;string&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                        },
                        &quot;dateDue&quot;: {
                          &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                        },
                        &quot;dateCompleted&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;description&quot;: &quot;date the task was completed&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                        },
                        &quot;location&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                          &quot;x-range&quot;: [
                            &quot;Place&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Place&quot;,
                            &quot;address&quot;: {
                              &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                              &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                              &quot;addressRegion&quot;: &quot;NJ&quot;,
                              &quot;postalCode&quot;: &quot;10007&quot;,
                              &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                              &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;Task&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
                  },
                  &quot;creator&quot;: {
                    &quot;title&quot;: &quot;creator&quot;,
                    &quot;description&quot;: &quot;the item creator&quot;,
                    &quot;x-range&quot;: [
                      &quot;Person&quot;,
                      &quot;Organization&quot;
                    ],
                    &quot;example&quot;: &quot;http://agent.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-126&gt;&quot;
                  },
                  &quot;dateCreated&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
                  },
                  &quot;dateModified&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-212&gt;&quot;
                  },
                  &quot;dateCompleted&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-366&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Plan&quot;
              },
              &quot;options&quot;: {}
            }
          }
        }
      }
    }
  }
}
pname = dateCompleted
required = false
path = member



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;object&quot;,
    &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
    &quot;x-range&quot;: [
      &quot;Place&quot;
    ],
    &quot;example&quot;: {
      &quot;type&quot;: &quot;Place&quot;,
      &quot;address&quot;: {
        &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
        &quot;addressLocality&quot;: &quot;Gotham City&quot;,
        &quot;addressRegion&quot;: &quot;NJ&quot;,
        &quot;postalCode&quot;: &quot;10007&quot;,
        &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
        &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;Task&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
        &quot;x-range&quot;: &quot;Task&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;enum&quot;: [
              &quot;Task&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
          },
          &quot;identifier&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
            &quot;example&quot;: {
              &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
          },
          &quot;actionStatus&quot;: {
            &quot;example&quot;: &quot;PotentialActionStatus&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
            &quot;x-range&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;enum&quot;: [
              &quot;CompletedActionStatus&quot;,
              &quot;FailedActionStatus&quot;,
              &quot;ActiveActionStatus&quot;,
              &quot;PotentialActionStatus&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
          },
          &quot;memberOf&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;Plan&quot;,
            &quot;description&quot;: &quot;a plan the task is associated with&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Plan&quot;,
              &quot;identifier&quot;: {
                &quot;redPlan_ID&quot;: &quot;xxxx&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
          },
          &quot;agent&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;Organization&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;Contact&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;RealEstateAgent&quot;,
              &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
          },
          &quot;participant&quot;: {
            &quot;x-title&quot;: &quot;participant&quot;,
            &quot;x-range&quot;: [
              &quot;Person&quot;,
              &quot;RealEstateAgent&quot;,
              &quot;RealEstateTeam&quot;,
              &quot;RealEstateOrganization&quot;
            ],
            &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;items&quot;: {
              &quot;type&quot;: &quot;object&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
            },
            &quot;example&quot;: [
              {
                &quot;type&quot;: &quot;Contact&quot;,
                &quot;name&quot;: &quot;Bruce Wayne&quot;,
                &quot;email&quot;: &quot;bruce@example.com&quot;,
                &quot;identifier&quot;: {
                  &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                }
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
          },
          &quot;name&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;name or title&quot;,
            &quot;example&quot;: &quot;Call Ricky&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
          },
          &quot;description&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;task detailed description&quot;,
            &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
          },
          &quot;keywords&quot;: {
            &quot;title&quot;: &quot;keywords&quot;,
            &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;example&quot;: [
              &quot;Sphere of Influence&quot;,
              &quot;Past Customer&quot;
            ],
            &quot;items&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
          },
          &quot;dateDue&quot;: {
            &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
          },
          &quot;dateCompleted&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;date-time&quot;,
            &quot;description&quot;: &quot;date the task was completed&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
          },
          &quot;location&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
            &quot;x-range&quot;: [
              &quot;Place&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;Place&quot;,
              &quot;address&quot;: {
                &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                &quot;addressRegion&quot;: &quot;NJ&quot;,
                &quot;postalCode&quot;: &quot;10007&quot;,
                &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;Task&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;array&quot;,
            &quot;description&quot;: &quot;tasks which make up the plan&quot;,
            &quot;items&quot;: {
              &quot;title&quot;: &quot;Task&quot;,
              &quot;type&quot;: &quot;object&quot;,
              &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
              &quot;x-range&quot;: &quot;Task&quot;,
              &quot;properties&quot;: {
                &quot;type&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                  &quot;enum&quot;: [
                    &quot;Task&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                },
                &quot;identifier&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                  &quot;example&quot;: {
                    &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                },
                &quot;actionStatus&quot;: {
                  &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                  &quot;x-range&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;enum&quot;: [
                    &quot;CompletedActionStatus&quot;,
                    &quot;FailedActionStatus&quot;,
                    &quot;ActiveActionStatus&quot;,
                    &quot;PotentialActionStatus&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                },
                &quot;memberOf&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;x-range&quot;: &quot;Plan&quot;,
                  &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Plan&quot;,
                    &quot;identifier&quot;: {
                      &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                },
                &quot;agent&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;Organization&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;Contact&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;RealEstateAgent&quot;,
                    &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                },
                &quot;participant&quot;: {
                  &quot;x-title&quot;: &quot;participant&quot;,
                  &quot;x-range&quot;: [
                    &quot;Person&quot;,
                    &quot;RealEstateAgent&quot;,
                    &quot;RealEstateTeam&quot;,
                    &quot;RealEstateOrganization&quot;
                  ],
                  &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                  },
                  &quot;example&quot;: [
                    {
                      &quot;type&quot;: &quot;Contact&quot;,
                      &quot;name&quot;: &quot;Bruce Wayne&quot;,
                      &quot;email&quot;: &quot;bruce@example.com&quot;,
                      &quot;identifier&quot;: {
                        &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                      }
                    }
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                },
                &quot;name&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;name or title&quot;,
                  &quot;example&quot;: &quot;Call Ricky&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                },
                &quot;description&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;task detailed description&quot;,
                  &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                },
                &quot;keywords&quot;: {
                  &quot;title&quot;: &quot;keywords&quot;,
                  &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                  &quot;type&quot;: &quot;array&quot;,
                  &quot;example&quot;: [
                    &quot;Sphere of Influence&quot;,
                    &quot;Past Customer&quot;
                  ],
                  &quot;items&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                },
                &quot;dateDue&quot;: {
                  &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                },
                &quot;dateCompleted&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;date-time&quot;,
                  &quot;description&quot;: &quot;date the task was completed&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                },
                &quot;location&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                  &quot;x-range&quot;: [
                    &quot;Place&quot;
                  ],
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Place&quot;,
                    &quot;address&quot;: {
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;addressRegion&quot;: &quot;NJ&quot;,
                      &quot;postalCode&quot;: &quot;10007&quot;,
                      &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                      &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                }
              },
              &quot;x-parser-schema-id&quot;: &quot;Task&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
          },
          &quot;options&quot;: {
            &quot;parent&quot;: {
              &quot;_json&quot;: {
                &quot;title&quot;: &quot;Plan&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a collection of related tasks&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;
                ],
                &quot;x-range&quot;: &quot;Plan&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;description&quot;: &quot;Plan&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;Plan&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-348&gt;&quot;
                  },
                  &quot;name&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;name of the plan&quot;,
                    &quot;example&quot;: &quot;Ricky Follow Up Plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-349&gt;&quot;
                  },
                  &quot;description&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item&quot;,
                    &quot;example&quot;: &quot;this is the description of my awesome plan&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-350&gt;&quot;
                  },
                  &quot;member&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;description&quot;: &quot;tasks which make up the plan&quot;,
                    &quot;items&quot;: {
                      &quot;title&quot;: &quot;Task&quot;,
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;description&quot;: &quot;an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan&quot;,
                      &quot;x-range&quot;: &quot;Task&quot;,
                      &quot;properties&quot;: {
                        &quot;type&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                          &quot;enum&quot;: [
                            &quot;Task&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-352&gt;&quot;
                        },
                        &quot;identifier&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                          &quot;example&quot;: {
                            &quot;salesforceContactID&quot;: &quot;c28834ca-db69-4da8-90ad-75cdc9907298&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-353&gt;&quot;
                        },
                        &quot;actionStatus&quot;: {
                          &quot;example&quot;: &quot;PotentialActionStatus&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;disposition of the Action at the time of this action message.&quot;,
                          &quot;x-range&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;enum&quot;: [
                            &quot;CompletedActionStatus&quot;,
                            &quot;FailedActionStatus&quot;,
                            &quot;ActiveActionStatus&quot;,
                            &quot;PotentialActionStatus&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-354&gt;&quot;
                        },
                        &quot;memberOf&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;x-range&quot;: &quot;Plan&quot;,
                          &quot;description&quot;: &quot;a plan the task is associated with&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Plan&quot;,
                            &quot;identifier&quot;: {
                              &quot;redPlan_ID&quot;: &quot;xxxx&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-355&gt;&quot;
                        },
                        &quot;agent&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the party who completed, or will complete the task&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;Organization&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;Contact&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;RealEstateAgent&quot;,
                            &quot;id&quot;: &quot;http://user.example.com/profile/card#me&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-356&gt;&quot;
                        },
                        &quot;participant&quot;: {
                          &quot;x-title&quot;: &quot;participant&quot;,
                          &quot;x-range&quot;: [
                            &quot;Person&quot;,
                            &quot;RealEstateAgent&quot;,
                            &quot;RealEstateTeam&quot;,
                            &quot;RealEstateOrganization&quot;
                          ],
                          &quot;description&quot;: &quot;Other co-agents with a direct or indirect interest in the action.&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-358&gt;&quot;
                          },
                          &quot;example&quot;: [
                            {
                              &quot;type&quot;: &quot;Contact&quot;,
                              &quot;name&quot;: &quot;Bruce Wayne&quot;,
                              &quot;email&quot;: &quot;bruce@example.com&quot;,
                              &quot;identifier&quot;: {
                                &quot;redContact_GUID&quot;: &quot;92d0a096-457e-4643-ace8-fa95b6bdb1c5&quot;
                              }
                            }
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-357&gt;&quot;
                        },
                        &quot;name&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;name or title&quot;,
                          &quot;example&quot;: &quot;Call Ricky&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-359&gt;&quot;
                        },
                        &quot;description&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;task detailed description&quot;,
                          &quot;example&quot;: &quot;Agenda 1. Something 2. Something Else ...&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-360&gt;&quot;
                        },
                        &quot;keywords&quot;: {
                          &quot;title&quot;: &quot;keywords&quot;,
                          &quot;description&quot;: &quot;keywords/tags for grouping and organizing the item in collections&quot;,
                          &quot;type&quot;: &quot;array&quot;,
                          &quot;example&quot;: [
                            &quot;Sphere of Influence&quot;,
                            &quot;Past Customer&quot;
                          ],
                          &quot;items&quot;: {
                            &quot;type&quot;: &quot;string&quot;,
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-362&gt;&quot;
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-361&gt;&quot;
                        },
                        &quot;dateDue&quot;: {
                          &quot;description&quot;: &quot;the due date-time (ISO 8601 formated)&quot;,
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-363&gt;&quot;
                        },
                        &quot;dateCompleted&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;date-time&quot;,
                          &quot;description&quot;: &quot;date the task was completed&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-364&gt;&quot;
                        },
                        &quot;location&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;the physical location where an event takes place&quot;,
                          &quot;x-range&quot;: [
                            &quot;Place&quot;
                          ],
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Place&quot;,
                            &quot;address&quot;: {
                              &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                              &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                              &quot;addressRegion&quot;: &quot;NJ&quot;,
                              &quot;postalCode&quot;: &quot;10007&quot;,
                              &quot;addressCounty&quot;: &quot;Gotham addressCounty&quot;,
                              &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-365&gt;&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;Task&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-351&gt;&quot;
                  },
                  &quot;creator&quot;: {
                    &quot;title&quot;: &quot;creator&quot;,
                    &quot;description&quot;: &quot;the item creator&quot;,
                    &quot;x-range&quot;: [
                      &quot;Person&quot;,
                      &quot;Organization&quot;
                    ],
                    &quot;example&quot;: &quot;http://agent.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-126&gt;&quot;
                  },
                  &quot;dateCreated&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
                  },
                  &quot;dateModified&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-212&gt;&quot;
                  },
                  &quot;dateCompleted&quot;: {
                    &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;date-time&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-366&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Plan&quot;
              },
              &quot;options&quot;: {}
            }
          }
        }
      }
    }
  }
}
pname = location
required = false
path = member




{
  "_json": {
    "title": "creator",
    "description": "the item creator",
    "x-range": [
      "Person",
      "Organization"
    ],
    "example": "http://agent.example.com/profile/card#me",
    "x-parser-schema-id": "<anonymous-schema-126>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Plan",
        "type": "object",
        "description": "a collection of related tasks",
        "required": [
          "type"
        ],
        "x-range": "Plan",
        "properties": {
          "type": {
            "description": "Plan",
            "type": "string",
            "enum": [
              "Plan"
            ],
            "x-parser-schema-id": "<anonymous-schema-348>"
          },
          "name": {
            "type": "string",
            "description": "name of the plan",
            "example": "Ricky Follow Up Plan",
            "x-parser-schema-id": "<anonymous-schema-349>"
          },
          "description": {
            "type": "string",
            "description": "description of the item",
            "example": "this is the description of my awesome plan",
            "x-parser-schema-id": "<anonymous-schema-350>"
          },
          "member": {
            "type": "array",
            "description": "tasks which make up the plan",
            "items": {
              "title": "Task",
              "type": "object",
              "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
              "x-range": "Task",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "enum": [
                    "Task"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-352>"
                },
                "identifier": {
                  "type": "object",
                  "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                  "example": {
                    "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
                  },
                  "x-parser-schema-id": "<anonymous-schema-353>"
                },
                "actionStatus": {
                  "example": "PotentialActionStatus",
                  "type": "string",
                  "description": "disposition of the Action at the time of this action message.",
                  "x-range": [
                    "CompletedActionStatus",
                    "FailedActionStatus",
                    "ActiveActionStatus",
                    "PotentialActionStatus"
                  ],
                  "enum": [
                    "CompletedActionStatus",
                    "FailedActionStatus",
                    "ActiveActionStatus",
                    "PotentialActionStatus"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-354>"
                },
                "memberOf": {
                  "type": "object",
                  "x-range": "Plan",
                  "description": "a plan the task is associated with",
                  "example": {
                    "type": "Plan",
                    "identifier": {
                      "redPlan_ID": "xxxx"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-355>"
                },
                "agent": {
                  "type": "object",
                  "description": "the party who completed, or will complete the task",
                  "x-range": [
                    "Person",
                    "Organization",
                    "RealEstateAgent",
                    "Contact"
                  ],
                  "example": {
                    "type": "RealEstateAgent",
                    "id": "http://user.example.com/profile/card#me"
                  },
                  "x-parser-schema-id": "<anonymous-schema-356>"
                },
                "participant": {
                  "x-title": "participant",
                  "x-range": [
                    "Person",
                    "RealEstateAgent",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "description": "Other co-agents with a direct or indirect interest in the action.",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-358>"
                  },
                  "example": [
                    {
                      "type": "Contact",
                      "name": "Bruce Wayne",
                      "email": "bruce@example.com",
                      "identifier": {
                        "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                      }
                    }
                  ],
                  "x-parser-schema-id": "<anonymous-schema-357>"
                },
                "name": {
                  "type": "string",
                  "description": "name or title",
                  "example": "Call Ricky",
                  "x-parser-schema-id": "<anonymous-schema-359>"
                },
                "description": {
                  "type": "string",
                  "description": "task detailed description",
                  "example": "Agenda 1. Something 2. Something Else ...",
                  "x-parser-schema-id": "<anonymous-schema-360>"
                },
                "keywords": {
                  "title": "keywords",
                  "description": "keywords/tags for grouping and organizing the item in collections",
                  "type": "array",
                  "example": [
                    "Sphere of Influence",
                    "Past Customer"
                  ],
                  "items": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-362>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-361>"
                },
                "dateDue": {
                  "description": "the due date-time (ISO 8601 formated)",
                  "type": "string",
                  "format": "date-time",
                  "x-parser-schema-id": "<anonymous-schema-363>"
                },
                "dateCompleted": {
                  "type": "string",
                  "format": "date-time",
                  "description": "date the task was completed",
                  "x-parser-schema-id": "<anonymous-schema-364>"
                },
                "location": {
                  "type": "object",
                  "description": "the physical location where an event takes place",
                  "x-range": [
                    "Place"
                  ],
                  "example": {
                    "type": "Place",
                    "address": {
                      "streetAddress": "1007 Mountain Gate Rd",
                      "addressLocality": "Gotham City",
                      "addressRegion": "NJ",
                      "postalCode": "10007",
                      "addressCounty": "Gotham addressCounty",
                      "addressSubdivision": "Gotham Heights"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-365>"
                }
              },
              "x-parser-schema-id": "Task"
            },
            "x-parser-schema-id": "<anonymous-schema-351>"
          },
          "creator": {
            "title": "creator",
            "description": "the item creator",
            "x-range": [
              "Person",
              "Organization"
            ],
            "example": "http://agent.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-126>"
          },
          "dateCreated": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-211>"
          },
          "dateModified": {
            "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-212>"
          },
          "dateCompleted": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-366>"
          }
        },
        "x-parser-schema-id": "Plan"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "The date on which the item was created.",
    "type": "string",
    "format": "date-time",
    "x-parser-schema-id": "<anonymous-schema-211>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Plan",
        "type": "object",
        "description": "a collection of related tasks",
        "required": [
          "type"
        ],
        "x-range": "Plan",
        "properties": {
          "type": {
            "description": "Plan",
            "type": "string",
            "enum": [
              "Plan"
            ],
            "x-parser-schema-id": "<anonymous-schema-348>"
          },
          "name": {
            "type": "string",
            "description": "name of the plan",
            "example": "Ricky Follow Up Plan",
            "x-parser-schema-id": "<anonymous-schema-349>"
          },
          "description": {
            "type": "string",
            "description": "description of the item",
            "example": "this is the description of my awesome plan",
            "x-parser-schema-id": "<anonymous-schema-350>"
          },
          "member": {
            "type": "array",
            "description": "tasks which make up the plan",
            "items": {
              "title": "Task",
              "type": "object",
              "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
              "x-range": "Task",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "enum": [
                    "Task"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-352>"
                },
                "identifier": {
                  "type": "object",
                  "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                  "example": {
                    "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
                  },
                  "x-parser-schema-id": "<anonymous-schema-353>"
                },
                "actionStatus": {
                  "example": "PotentialActionStatus",
                  "type": "string",
                  "description": "disposition of the Action at the time of this action message.",
                  "x-range": [
                    "CompletedActionStatus",
                    "FailedActionStatus",
                    "ActiveActionStatus",
                    "PotentialActionStatus"
                  ],
                  "enum": [
                    "CompletedActionStatus",
                    "FailedActionStatus",
                    "ActiveActionStatus",
                    "PotentialActionStatus"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-354>"
                },
                "memberOf": {
                  "type": "object",
                  "x-range": "Plan",
                  "description": "a plan the task is associated with",
                  "example": {
                    "type": "Plan",
                    "identifier": {
                      "redPlan_ID": "xxxx"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-355>"
                },
                "agent": {
                  "type": "object",
                  "description": "the party who completed, or will complete the task",
                  "x-range": [
                    "Person",
                    "Organization",
                    "RealEstateAgent",
                    "Contact"
                  ],
                  "example": {
                    "type": "RealEstateAgent",
                    "id": "http://user.example.com/profile/card#me"
                  },
                  "x-parser-schema-id": "<anonymous-schema-356>"
                },
                "participant": {
                  "x-title": "participant",
                  "x-range": [
                    "Person",
                    "RealEstateAgent",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "description": "Other co-agents with a direct or indirect interest in the action.",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-358>"
                  },
                  "example": [
                    {
                      "type": "Contact",
                      "name": "Bruce Wayne",
                      "email": "bruce@example.com",
                      "identifier": {
                        "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                      }
                    }
                  ],
                  "x-parser-schema-id": "<anonymous-schema-357>"
                },
                "name": {
                  "type": "string",
                  "description": "name or title",
                  "example": "Call Ricky",
                  "x-parser-schema-id": "<anonymous-schema-359>"
                },
                "description": {
                  "type": "string",
                  "description": "task detailed description",
                  "example": "Agenda 1. Something 2. Something Else ...",
                  "x-parser-schema-id": "<anonymous-schema-360>"
                },
                "keywords": {
                  "title": "keywords",
                  "description": "keywords/tags for grouping and organizing the item in collections",
                  "type": "array",
                  "example": [
                    "Sphere of Influence",
                    "Past Customer"
                  ],
                  "items": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-362>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-361>"
                },
                "dateDue": {
                  "description": "the due date-time (ISO 8601 formated)",
                  "type": "string",
                  "format": "date-time",
                  "x-parser-schema-id": "<anonymous-schema-363>"
                },
                "dateCompleted": {
                  "type": "string",
                  "format": "date-time",
                  "description": "date the task was completed",
                  "x-parser-schema-id": "<anonymous-schema-364>"
                },
                "location": {
                  "type": "object",
                  "description": "the physical location where an event takes place",
                  "x-range": [
                    "Place"
                  ],
                  "example": {
                    "type": "Place",
                    "address": {
                      "streetAddress": "1007 Mountain Gate Rd",
                      "addressLocality": "Gotham City",
                      "addressRegion": "NJ",
                      "postalCode": "10007",
                      "addressCounty": "Gotham addressCounty",
                      "addressSubdivision": "Gotham Heights"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-365>"
                }
              },
              "x-parser-schema-id": "Task"
            },
            "x-parser-schema-id": "<anonymous-schema-351>"
          },
          "creator": {
            "title": "creator",
            "description": "the item creator",
            "x-range": [
              "Person",
              "Organization"
            ],
            "example": "http://agent.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-126>"
          },
          "dateCreated": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-211>"
          },
          "dateModified": {
            "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-212>"
          },
          "dateCompleted": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-366>"
          }
        },
        "x-parser-schema-id": "Plan"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
    "type": "string",
    "format": "date-time",
    "x-parser-schema-id": "<anonymous-schema-212>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Plan",
        "type": "object",
        "description": "a collection of related tasks",
        "required": [
          "type"
        ],
        "x-range": "Plan",
        "properties": {
          "type": {
            "description": "Plan",
            "type": "string",
            "enum": [
              "Plan"
            ],
            "x-parser-schema-id": "<anonymous-schema-348>"
          },
          "name": {
            "type": "string",
            "description": "name of the plan",
            "example": "Ricky Follow Up Plan",
            "x-parser-schema-id": "<anonymous-schema-349>"
          },
          "description": {
            "type": "string",
            "description": "description of the item",
            "example": "this is the description of my awesome plan",
            "x-parser-schema-id": "<anonymous-schema-350>"
          },
          "member": {
            "type": "array",
            "description": "tasks which make up the plan",
            "items": {
              "title": "Task",
              "type": "object",
              "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
              "x-range": "Task",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "enum": [
                    "Task"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-352>"
                },
                "identifier": {
                  "type": "object",
                  "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                  "example": {
                    "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
                  },
                  "x-parser-schema-id": "<anonymous-schema-353>"
                },
                "actionStatus": {
                  "example": "PotentialActionStatus",
                  "type": "string",
                  "description": "disposition of the Action at the time of this action message.",
                  "x-range": [
                    "CompletedActionStatus",
                    "FailedActionStatus",
                    "ActiveActionStatus",
                    "PotentialActionStatus"
                  ],
                  "enum": [
                    "CompletedActionStatus",
                    "FailedActionStatus",
                    "ActiveActionStatus",
                    "PotentialActionStatus"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-354>"
                },
                "memberOf": {
                  "type": "object",
                  "x-range": "Plan",
                  "description": "a plan the task is associated with",
                  "example": {
                    "type": "Plan",
                    "identifier": {
                      "redPlan_ID": "xxxx"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-355>"
                },
                "agent": {
                  "type": "object",
                  "description": "the party who completed, or will complete the task",
                  "x-range": [
                    "Person",
                    "Organization",
                    "RealEstateAgent",
                    "Contact"
                  ],
                  "example": {
                    "type": "RealEstateAgent",
                    "id": "http://user.example.com/profile/card#me"
                  },
                  "x-parser-schema-id": "<anonymous-schema-356>"
                },
                "participant": {
                  "x-title": "participant",
                  "x-range": [
                    "Person",
                    "RealEstateAgent",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "description": "Other co-agents with a direct or indirect interest in the action.",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-358>"
                  },
                  "example": [
                    {
                      "type": "Contact",
                      "name": "Bruce Wayne",
                      "email": "bruce@example.com",
                      "identifier": {
                        "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                      }
                    }
                  ],
                  "x-parser-schema-id": "<anonymous-schema-357>"
                },
                "name": {
                  "type": "string",
                  "description": "name or title",
                  "example": "Call Ricky",
                  "x-parser-schema-id": "<anonymous-schema-359>"
                },
                "description": {
                  "type": "string",
                  "description": "task detailed description",
                  "example": "Agenda 1. Something 2. Something Else ...",
                  "x-parser-schema-id": "<anonymous-schema-360>"
                },
                "keywords": {
                  "title": "keywords",
                  "description": "keywords/tags for grouping and organizing the item in collections",
                  "type": "array",
                  "example": [
                    "Sphere of Influence",
                    "Past Customer"
                  ],
                  "items": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-362>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-361>"
                },
                "dateDue": {
                  "description": "the due date-time (ISO 8601 formated)",
                  "type": "string",
                  "format": "date-time",
                  "x-parser-schema-id": "<anonymous-schema-363>"
                },
                "dateCompleted": {
                  "type": "string",
                  "format": "date-time",
                  "description": "date the task was completed",
                  "x-parser-schema-id": "<anonymous-schema-364>"
                },
                "location": {
                  "type": "object",
                  "description": "the physical location where an event takes place",
                  "x-range": [
                    "Place"
                  ],
                  "example": {
                    "type": "Place",
                    "address": {
                      "streetAddress": "1007 Mountain Gate Rd",
                      "addressLocality": "Gotham City",
                      "addressRegion": "NJ",
                      "postalCode": "10007",
                      "addressCounty": "Gotham addressCounty",
                      "addressSubdivision": "Gotham Heights"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-365>"
                }
              },
              "x-parser-schema-id": "Task"
            },
            "x-parser-schema-id": "<anonymous-schema-351>"
          },
          "creator": {
            "title": "creator",
            "description": "the item creator",
            "x-range": [
              "Person",
              "Organization"
            ],
            "example": "http://agent.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-126>"
          },
          "dateCreated": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-211>"
          },
          "dateModified": {
            "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-212>"
          },
          "dateCompleted": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-366>"
          }
        },
        "x-parser-schema-id": "Plan"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "The date on which the item was created.",
    "type": "string",
    "format": "date-time",
    "x-parser-schema-id": "<anonymous-schema-366>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Plan",
        "type": "object",
        "description": "a collection of related tasks",
        "required": [
          "type"
        ],
        "x-range": "Plan",
        "properties": {
          "type": {
            "description": "Plan",
            "type": "string",
            "enum": [
              "Plan"
            ],
            "x-parser-schema-id": "<anonymous-schema-348>"
          },
          "name": {
            "type": "string",
            "description": "name of the plan",
            "example": "Ricky Follow Up Plan",
            "x-parser-schema-id": "<anonymous-schema-349>"
          },
          "description": {
            "type": "string",
            "description": "description of the item",
            "example": "this is the description of my awesome plan",
            "x-parser-schema-id": "<anonymous-schema-350>"
          },
          "member": {
            "type": "array",
            "description": "tasks which make up the plan",
            "items": {
              "title": "Task",
              "type": "object",
              "description": "an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan",
              "x-range": "Task",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "The item type (Linked-Data @type)",
                  "enum": [
                    "Task"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-352>"
                },
                "identifier": {
                  "type": "object",
                  "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                  "example": {
                    "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
                  },
                  "x-parser-schema-id": "<anonymous-schema-353>"
                },
                "actionStatus": {
                  "example": "PotentialActionStatus",
                  "type": "string",
                  "description": "disposition of the Action at the time of this action message.",
                  "x-range": [
                    "CompletedActionStatus",
                    "FailedActionStatus",
                    "ActiveActionStatus",
                    "PotentialActionStatus"
                  ],
                  "enum": [
                    "CompletedActionStatus",
                    "FailedActionStatus",
                    "ActiveActionStatus",
                    "PotentialActionStatus"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-354>"
                },
                "memberOf": {
                  "type": "object",
                  "x-range": "Plan",
                  "description": "a plan the task is associated with",
                  "example": {
                    "type": "Plan",
                    "identifier": {
                      "redPlan_ID": "xxxx"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-355>"
                },
                "agent": {
                  "type": "object",
                  "description": "the party who completed, or will complete the task",
                  "x-range": [
                    "Person",
                    "Organization",
                    "RealEstateAgent",
                    "Contact"
                  ],
                  "example": {
                    "type": "RealEstateAgent",
                    "id": "http://user.example.com/profile/card#me"
                  },
                  "x-parser-schema-id": "<anonymous-schema-356>"
                },
                "participant": {
                  "x-title": "participant",
                  "x-range": [
                    "Person",
                    "RealEstateAgent",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "description": "Other co-agents with a direct or indirect interest in the action.",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "x-parser-schema-id": "<anonymous-schema-358>"
                  },
                  "example": [
                    {
                      "type": "Contact",
                      "name": "Bruce Wayne",
                      "email": "bruce@example.com",
                      "identifier": {
                        "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
                      }
                    }
                  ],
                  "x-parser-schema-id": "<anonymous-schema-357>"
                },
                "name": {
                  "type": "string",
                  "description": "name or title",
                  "example": "Call Ricky",
                  "x-parser-schema-id": "<anonymous-schema-359>"
                },
                "description": {
                  "type": "string",
                  "description": "task detailed description",
                  "example": "Agenda 1. Something 2. Something Else ...",
                  "x-parser-schema-id": "<anonymous-schema-360>"
                },
                "keywords": {
                  "title": "keywords",
                  "description": "keywords/tags for grouping and organizing the item in collections",
                  "type": "array",
                  "example": [
                    "Sphere of Influence",
                    "Past Customer"
                  ],
                  "items": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-362>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-361>"
                },
                "dateDue": {
                  "description": "the due date-time (ISO 8601 formated)",
                  "type": "string",
                  "format": "date-time",
                  "x-parser-schema-id": "<anonymous-schema-363>"
                },
                "dateCompleted": {
                  "type": "string",
                  "format": "date-time",
                  "description": "date the task was completed",
                  "x-parser-schema-id": "<anonymous-schema-364>"
                },
                "location": {
                  "type": "object",
                  "description": "the physical location where an event takes place",
                  "x-range": [
                    "Place"
                  ],
                  "example": {
                    "type": "Place",
                    "address": {
                      "streetAddress": "1007 Mountain Gate Rd",
                      "addressLocality": "Gotham City",
                      "addressRegion": "NJ",
                      "postalCode": "10007",
                      "addressCounty": "Gotham addressCounty",
                      "addressSubdivision": "Gotham Heights"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-365>"
                }
              },
              "x-parser-schema-id": "Task"
            },
            "x-parser-schema-id": "<anonymous-schema-351>"
          },
          "creator": {
            "title": "creator",
            "description": "the item creator",
            "x-range": [
              "Person",
              "Organization"
            ],
            "example": "http://agent.example.com/profile/card#me",
            "x-parser-schema-id": "<anonymous-schema-126>"
          },
          "dateCreated": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-211>"
          },
          "dateModified": {
            "description": "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-212>"
          },
          "dateCompleted": {
            "description": "The date on which the item was created.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-366>"
          }
        },
        "x-parser-schema-id": "Plan"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "Plan",
  "name": "Ricky Follow Up Plan",
  "description": "this is the description of my awesome plan",
  "member": [
    {
      "type": "Task",
      "identifier": {
        "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
      },
      "actionStatus": "PotentialActionStatus",
      "memberOf": {
        "type": "Plan",
        "identifier": {
          "redPlan_ID": "xxxx"
        }
      },
      "agent": {
        "type": "RealEstateAgent",
        "id": "http://user.example.com/profile/card#me"
      },
      "participant": [
        {
          "type": "Contact",
          "name": "Bruce Wayne",
          "email": "bruce@example.com",
          "identifier": {
            "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
          }
        }
      ],
      "name": "Call Ricky",
      "description": "Agenda 1. Something 2. Something Else ...",
      "keywords": [
        "Sphere of Influence",
        "Past Customer"
      ],
      "dateDue": "2019-08-24T14:15:22Z",
      "dateCompleted": "2019-08-24T14:15:22Z",
      "location": {
        "type": "Place",
        "address": {
          "streetAddress": "1007 Mountain Gate Rd",
          "addressLocality": "Gotham City",
          "addressRegion": "NJ",
          "postalCode": "10007",
          "addressCounty": "Gotham addressCounty",
          "addressSubdivision": "Gotham Heights"
        }
      }
    }
  ],
  "creator": "http://agent.example.com/profile/card#me",
  "dateCreated": "2019-08-24T14:15:22Z",
  "dateModified": "2019-08-24T14:15:22Z",
  "dateCompleted": "2019-08-24T14:15:22Z"
}
```

