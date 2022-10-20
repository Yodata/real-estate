

---
title: Task
---

{
  "type": {
    "_json": {
      "type": "string",
      "description": "The item type (Linked-Data @type)",
      "enum": [
        "Task"
      ],
      "x-parser-schema-id": "<anonymous-schema-352>"
    },
    "options": {
      "parent": {
        "_json": {
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
      "x-parser-schema-id": "<anonymous-schema-353>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "actionStatus": {
    "_json": {
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
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "memberOf": {
    "_json": {
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
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "agent": {
    "_json": {
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
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "participant": {
    "_json": {
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
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "name": {
    "_json": {
      "type": "string",
      "description": "name or title",
      "example": "Call Ricky",
      "x-parser-schema-id": "<anonymous-schema-359>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "description": {
    "_json": {
      "type": "string",
      "description": "task detailed description",
      "example": "Agenda 1. Something 2. Something Else ...",
      "x-parser-schema-id": "<anonymous-schema-360>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "keywords": {
    "_json": {
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
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "dateDue": {
    "_json": {
      "description": "the due date-time (ISO 8601 formated)",
      "type": "string",
      "format": "date-time",
      "x-parser-schema-id": "<anonymous-schema-363>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "dateCompleted": {
    "_json": {
      "type": "string",
      "format": "date-time",
      "description": "date the task was completed",
      "x-parser-schema-id": "<anonymous-schema-364>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "location": {
    "_json": {
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
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  }
}


# Task

an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "description": "The item type (Linked-Data @type)",
    "enum": [
      "Task"
    ],
    "x-parser-schema-id": "<anonymous-schema-352>"
  },
  "options": {
    "parent": {
      "_json": {
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
    "x-parser-schema-id": "<anonymous-schema-353>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
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
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
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
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
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
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
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
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}








{
  "_json": {
    "type": "string",
    "description": "name or title",
    "example": "Call Ricky",
    "x-parser-schema-id": "<anonymous-schema-359>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "task detailed description",
    "example": "Agenda 1. Something 2. Something Else ...",
    "x-parser-schema-id": "<anonymous-schema-360>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
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
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}








{
  "_json": {
    "description": "the due date-time (ISO 8601 formated)",
    "type": "string",
    "format": "date-time",
    "x-parser-schema-id": "<anonymous-schema-363>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "format": "date-time",
    "description": "date the task was completed",
    "x-parser-schema-id": "<anonymous-schema-364>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
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
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}










### Example

```json
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
```

