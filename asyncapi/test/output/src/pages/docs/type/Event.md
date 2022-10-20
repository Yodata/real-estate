

---
title: Event
---

{
  "type": {
    "_json": {
      "type": "string",
      "description": "The item type (Linked-Data @type)",
      "example": "Event",
      "x-parser-schema-id": "<anonymous-schema-273>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "Event",
          "description": "An event happening at a certain time and location",
          "x-range": "Event",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "example": "Event",
              "x-parser-schema-id": "<anonymous-schema-273>"
            },
            "name": {
              "type": "string",
              "description": "name of the event",
              "example": "Property Showing 1007 Mountain Gate Rd",
              "x-parser-schema-id": "<anonymous-schema-274>"
            },
            "description": {
              "type": "string",
              "description": "event message content",
              "example": "an example meeting request for 4:00PM to 4:30PM.",
              "x-parser-schema-id": "<anonymous-schema-275>"
            },
            "about": {
              "type": "object",
              "description": "a subject of the meeting or event",
              "example": {
                "type": "PropertyListing",
                "originatingSystemName": "GOTHAM-MLS",
                "originatingSystemKey": "12345",
                "url": "https://{company-website-url}/{path-to-listing}",
                "streetAddress": "1007 Mountain Gate Rd",
                "addressRegion": "New Jersey",
                "addressLocality": "Gotham City",
                "postalCode": "10010",
                "addressCountry": "USA",
                "listingPrice": {
                  "type": "PriceSpecification",
                  "price": 7500000,
                  "priceCurrency": "USD"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-276>"
            },
            "startDate": {
              "description": "the start date-time (ISO 8601 formated)",
              "type": "string",
              "format": "date-time",
              "example": "2019-08-01T16:00Z",
              "x-parser-schema-id": "<anonymous-schema-277>"
            },
            "endDate": {
              "type": "string",
              "description": "the end date-time (ISO 8601 formated)",
              "format": "date-time",
              "example": "2019-08-01T16:30Z",
              "x-parser-schema-id": "<anonymous-schema-278>"
            },
            "organizer": {
              "title": "organizer",
              "description": "the event organizer",
              "type": "object",
              "example": {
                "type": "RealEstateAgent",
                "name": "Bruce Wayne",
                "id": "https://batman.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-279>"
            }
          },
          "x-parser-schema-id": "Event"
        },
        "options": {}
      }
    }
  },
  "name": {
    "_json": {
      "type": "string",
      "description": "name of the event",
      "example": "Property Showing 1007 Mountain Gate Rd",
      "x-parser-schema-id": "<anonymous-schema-274>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "Event",
          "description": "An event happening at a certain time and location",
          "x-range": "Event",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "example": "Event",
              "x-parser-schema-id": "<anonymous-schema-273>"
            },
            "name": {
              "type": "string",
              "description": "name of the event",
              "example": "Property Showing 1007 Mountain Gate Rd",
              "x-parser-schema-id": "<anonymous-schema-274>"
            },
            "description": {
              "type": "string",
              "description": "event message content",
              "example": "an example meeting request for 4:00PM to 4:30PM.",
              "x-parser-schema-id": "<anonymous-schema-275>"
            },
            "about": {
              "type": "object",
              "description": "a subject of the meeting or event",
              "example": {
                "type": "PropertyListing",
                "originatingSystemName": "GOTHAM-MLS",
                "originatingSystemKey": "12345",
                "url": "https://{company-website-url}/{path-to-listing}",
                "streetAddress": "1007 Mountain Gate Rd",
                "addressRegion": "New Jersey",
                "addressLocality": "Gotham City",
                "postalCode": "10010",
                "addressCountry": "USA",
                "listingPrice": {
                  "type": "PriceSpecification",
                  "price": 7500000,
                  "priceCurrency": "USD"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-276>"
            },
            "startDate": {
              "description": "the start date-time (ISO 8601 formated)",
              "type": "string",
              "format": "date-time",
              "example": "2019-08-01T16:00Z",
              "x-parser-schema-id": "<anonymous-schema-277>"
            },
            "endDate": {
              "type": "string",
              "description": "the end date-time (ISO 8601 formated)",
              "format": "date-time",
              "example": "2019-08-01T16:30Z",
              "x-parser-schema-id": "<anonymous-schema-278>"
            },
            "organizer": {
              "title": "organizer",
              "description": "the event organizer",
              "type": "object",
              "example": {
                "type": "RealEstateAgent",
                "name": "Bruce Wayne",
                "id": "https://batman.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-279>"
            }
          },
          "x-parser-schema-id": "Event"
        },
        "options": {}
      }
    }
  },
  "description": {
    "_json": {
      "type": "string",
      "description": "event message content",
      "example": "an example meeting request for 4:00PM to 4:30PM.",
      "x-parser-schema-id": "<anonymous-schema-275>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "Event",
          "description": "An event happening at a certain time and location",
          "x-range": "Event",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "example": "Event",
              "x-parser-schema-id": "<anonymous-schema-273>"
            },
            "name": {
              "type": "string",
              "description": "name of the event",
              "example": "Property Showing 1007 Mountain Gate Rd",
              "x-parser-schema-id": "<anonymous-schema-274>"
            },
            "description": {
              "type": "string",
              "description": "event message content",
              "example": "an example meeting request for 4:00PM to 4:30PM.",
              "x-parser-schema-id": "<anonymous-schema-275>"
            },
            "about": {
              "type": "object",
              "description": "a subject of the meeting or event",
              "example": {
                "type": "PropertyListing",
                "originatingSystemName": "GOTHAM-MLS",
                "originatingSystemKey": "12345",
                "url": "https://{company-website-url}/{path-to-listing}",
                "streetAddress": "1007 Mountain Gate Rd",
                "addressRegion": "New Jersey",
                "addressLocality": "Gotham City",
                "postalCode": "10010",
                "addressCountry": "USA",
                "listingPrice": {
                  "type": "PriceSpecification",
                  "price": 7500000,
                  "priceCurrency": "USD"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-276>"
            },
            "startDate": {
              "description": "the start date-time (ISO 8601 formated)",
              "type": "string",
              "format": "date-time",
              "example": "2019-08-01T16:00Z",
              "x-parser-schema-id": "<anonymous-schema-277>"
            },
            "endDate": {
              "type": "string",
              "description": "the end date-time (ISO 8601 formated)",
              "format": "date-time",
              "example": "2019-08-01T16:30Z",
              "x-parser-schema-id": "<anonymous-schema-278>"
            },
            "organizer": {
              "title": "organizer",
              "description": "the event organizer",
              "type": "object",
              "example": {
                "type": "RealEstateAgent",
                "name": "Bruce Wayne",
                "id": "https://batman.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-279>"
            }
          },
          "x-parser-schema-id": "Event"
        },
        "options": {}
      }
    }
  },
  "about": {
    "_json": {
      "type": "object",
      "description": "a subject of the meeting or event",
      "example": {
        "type": "PropertyListing",
        "originatingSystemName": "GOTHAM-MLS",
        "originatingSystemKey": "12345",
        "url": "https://{company-website-url}/{path-to-listing}",
        "streetAddress": "1007 Mountain Gate Rd",
        "addressRegion": "New Jersey",
        "addressLocality": "Gotham City",
        "postalCode": "10010",
        "addressCountry": "USA",
        "listingPrice": {
          "type": "PriceSpecification",
          "price": 7500000,
          "priceCurrency": "USD"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-276>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "Event",
          "description": "An event happening at a certain time and location",
          "x-range": "Event",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "example": "Event",
              "x-parser-schema-id": "<anonymous-schema-273>"
            },
            "name": {
              "type": "string",
              "description": "name of the event",
              "example": "Property Showing 1007 Mountain Gate Rd",
              "x-parser-schema-id": "<anonymous-schema-274>"
            },
            "description": {
              "type": "string",
              "description": "event message content",
              "example": "an example meeting request for 4:00PM to 4:30PM.",
              "x-parser-schema-id": "<anonymous-schema-275>"
            },
            "about": {
              "type": "object",
              "description": "a subject of the meeting or event",
              "example": {
                "type": "PropertyListing",
                "originatingSystemName": "GOTHAM-MLS",
                "originatingSystemKey": "12345",
                "url": "https://{company-website-url}/{path-to-listing}",
                "streetAddress": "1007 Mountain Gate Rd",
                "addressRegion": "New Jersey",
                "addressLocality": "Gotham City",
                "postalCode": "10010",
                "addressCountry": "USA",
                "listingPrice": {
                  "type": "PriceSpecification",
                  "price": 7500000,
                  "priceCurrency": "USD"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-276>"
            },
            "startDate": {
              "description": "the start date-time (ISO 8601 formated)",
              "type": "string",
              "format": "date-time",
              "example": "2019-08-01T16:00Z",
              "x-parser-schema-id": "<anonymous-schema-277>"
            },
            "endDate": {
              "type": "string",
              "description": "the end date-time (ISO 8601 formated)",
              "format": "date-time",
              "example": "2019-08-01T16:30Z",
              "x-parser-schema-id": "<anonymous-schema-278>"
            },
            "organizer": {
              "title": "organizer",
              "description": "the event organizer",
              "type": "object",
              "example": {
                "type": "RealEstateAgent",
                "name": "Bruce Wayne",
                "id": "https://batman.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-279>"
            }
          },
          "x-parser-schema-id": "Event"
        },
        "options": {}
      }
    }
  },
  "startDate": {
    "_json": {
      "description": "the start date-time (ISO 8601 formated)",
      "type": "string",
      "format": "date-time",
      "example": "2019-08-01T16:00Z",
      "x-parser-schema-id": "<anonymous-schema-277>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "Event",
          "description": "An event happening at a certain time and location",
          "x-range": "Event",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "example": "Event",
              "x-parser-schema-id": "<anonymous-schema-273>"
            },
            "name": {
              "type": "string",
              "description": "name of the event",
              "example": "Property Showing 1007 Mountain Gate Rd",
              "x-parser-schema-id": "<anonymous-schema-274>"
            },
            "description": {
              "type": "string",
              "description": "event message content",
              "example": "an example meeting request for 4:00PM to 4:30PM.",
              "x-parser-schema-id": "<anonymous-schema-275>"
            },
            "about": {
              "type": "object",
              "description": "a subject of the meeting or event",
              "example": {
                "type": "PropertyListing",
                "originatingSystemName": "GOTHAM-MLS",
                "originatingSystemKey": "12345",
                "url": "https://{company-website-url}/{path-to-listing}",
                "streetAddress": "1007 Mountain Gate Rd",
                "addressRegion": "New Jersey",
                "addressLocality": "Gotham City",
                "postalCode": "10010",
                "addressCountry": "USA",
                "listingPrice": {
                  "type": "PriceSpecification",
                  "price": 7500000,
                  "priceCurrency": "USD"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-276>"
            },
            "startDate": {
              "description": "the start date-time (ISO 8601 formated)",
              "type": "string",
              "format": "date-time",
              "example": "2019-08-01T16:00Z",
              "x-parser-schema-id": "<anonymous-schema-277>"
            },
            "endDate": {
              "type": "string",
              "description": "the end date-time (ISO 8601 formated)",
              "format": "date-time",
              "example": "2019-08-01T16:30Z",
              "x-parser-schema-id": "<anonymous-schema-278>"
            },
            "organizer": {
              "title": "organizer",
              "description": "the event organizer",
              "type": "object",
              "example": {
                "type": "RealEstateAgent",
                "name": "Bruce Wayne",
                "id": "https://batman.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-279>"
            }
          },
          "x-parser-schema-id": "Event"
        },
        "options": {}
      }
    }
  },
  "endDate": {
    "_json": {
      "type": "string",
      "description": "the end date-time (ISO 8601 formated)",
      "format": "date-time",
      "example": "2019-08-01T16:30Z",
      "x-parser-schema-id": "<anonymous-schema-278>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "Event",
          "description": "An event happening at a certain time and location",
          "x-range": "Event",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "example": "Event",
              "x-parser-schema-id": "<anonymous-schema-273>"
            },
            "name": {
              "type": "string",
              "description": "name of the event",
              "example": "Property Showing 1007 Mountain Gate Rd",
              "x-parser-schema-id": "<anonymous-schema-274>"
            },
            "description": {
              "type": "string",
              "description": "event message content",
              "example": "an example meeting request for 4:00PM to 4:30PM.",
              "x-parser-schema-id": "<anonymous-schema-275>"
            },
            "about": {
              "type": "object",
              "description": "a subject of the meeting or event",
              "example": {
                "type": "PropertyListing",
                "originatingSystemName": "GOTHAM-MLS",
                "originatingSystemKey": "12345",
                "url": "https://{company-website-url}/{path-to-listing}",
                "streetAddress": "1007 Mountain Gate Rd",
                "addressRegion": "New Jersey",
                "addressLocality": "Gotham City",
                "postalCode": "10010",
                "addressCountry": "USA",
                "listingPrice": {
                  "type": "PriceSpecification",
                  "price": 7500000,
                  "priceCurrency": "USD"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-276>"
            },
            "startDate": {
              "description": "the start date-time (ISO 8601 formated)",
              "type": "string",
              "format": "date-time",
              "example": "2019-08-01T16:00Z",
              "x-parser-schema-id": "<anonymous-schema-277>"
            },
            "endDate": {
              "type": "string",
              "description": "the end date-time (ISO 8601 formated)",
              "format": "date-time",
              "example": "2019-08-01T16:30Z",
              "x-parser-schema-id": "<anonymous-schema-278>"
            },
            "organizer": {
              "title": "organizer",
              "description": "the event organizer",
              "type": "object",
              "example": {
                "type": "RealEstateAgent",
                "name": "Bruce Wayne",
                "id": "https://batman.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-279>"
            }
          },
          "x-parser-schema-id": "Event"
        },
        "options": {}
      }
    }
  },
  "organizer": {
    "_json": {
      "title": "organizer",
      "description": "the event organizer",
      "type": "object",
      "example": {
        "type": "RealEstateAgent",
        "name": "Bruce Wayne",
        "id": "https://batman.example.com/profile/card#me"
      },
      "x-parser-schema-id": "<anonymous-schema-279>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "title": "Event",
          "description": "An event happening at a certain time and location",
          "x-range": "Event",
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "example": "Event",
              "x-parser-schema-id": "<anonymous-schema-273>"
            },
            "name": {
              "type": "string",
              "description": "name of the event",
              "example": "Property Showing 1007 Mountain Gate Rd",
              "x-parser-schema-id": "<anonymous-schema-274>"
            },
            "description": {
              "type": "string",
              "description": "event message content",
              "example": "an example meeting request for 4:00PM to 4:30PM.",
              "x-parser-schema-id": "<anonymous-schema-275>"
            },
            "about": {
              "type": "object",
              "description": "a subject of the meeting or event",
              "example": {
                "type": "PropertyListing",
                "originatingSystemName": "GOTHAM-MLS",
                "originatingSystemKey": "12345",
                "url": "https://{company-website-url}/{path-to-listing}",
                "streetAddress": "1007 Mountain Gate Rd",
                "addressRegion": "New Jersey",
                "addressLocality": "Gotham City",
                "postalCode": "10010",
                "addressCountry": "USA",
                "listingPrice": {
                  "type": "PriceSpecification",
                  "price": 7500000,
                  "priceCurrency": "USD"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-276>"
            },
            "startDate": {
              "description": "the start date-time (ISO 8601 formated)",
              "type": "string",
              "format": "date-time",
              "example": "2019-08-01T16:00Z",
              "x-parser-schema-id": "<anonymous-schema-277>"
            },
            "endDate": {
              "type": "string",
              "description": "the end date-time (ISO 8601 formated)",
              "format": "date-time",
              "example": "2019-08-01T16:30Z",
              "x-parser-schema-id": "<anonymous-schema-278>"
            },
            "organizer": {
              "title": "organizer",
              "description": "the event organizer",
              "type": "object",
              "example": {
                "type": "RealEstateAgent",
                "name": "Bruce Wayne",
                "id": "https://batman.example.com/profile/card#me"
              },
              "x-parser-schema-id": "<anonymous-schema-279>"
            }
          },
          "x-parser-schema-id": "Event"
        },
        "options": {}
      }
    }
  }
}


# Event

An event happening at a certain time and location



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "description": "The item type (Linked-Data @type)",
    "example": "Event",
    "x-parser-schema-id": "<anonymous-schema-273>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "Event",
        "description": "An event happening at a certain time and location",
        "x-range": "Event",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "example": "Event",
            "x-parser-schema-id": "<anonymous-schema-273>"
          },
          "name": {
            "type": "string",
            "description": "name of the event",
            "example": "Property Showing 1007 Mountain Gate Rd",
            "x-parser-schema-id": "<anonymous-schema-274>"
          },
          "description": {
            "type": "string",
            "description": "event message content",
            "example": "an example meeting request for 4:00PM to 4:30PM.",
            "x-parser-schema-id": "<anonymous-schema-275>"
          },
          "about": {
            "type": "object",
            "description": "a subject of the meeting or event",
            "example": {
              "type": "PropertyListing",
              "originatingSystemName": "GOTHAM-MLS",
              "originatingSystemKey": "12345",
              "url": "https://{company-website-url}/{path-to-listing}",
              "streetAddress": "1007 Mountain Gate Rd",
              "addressRegion": "New Jersey",
              "addressLocality": "Gotham City",
              "postalCode": "10010",
              "addressCountry": "USA",
              "listingPrice": {
                "type": "PriceSpecification",
                "price": 7500000,
                "priceCurrency": "USD"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-276>"
          },
          "startDate": {
            "description": "the start date-time (ISO 8601 formated)",
            "type": "string",
            "format": "date-time",
            "example": "2019-08-01T16:00Z",
            "x-parser-schema-id": "<anonymous-schema-277>"
          },
          "endDate": {
            "type": "string",
            "description": "the end date-time (ISO 8601 formated)",
            "format": "date-time",
            "example": "2019-08-01T16:30Z",
            "x-parser-schema-id": "<anonymous-schema-278>"
          },
          "organizer": {
            "title": "organizer",
            "description": "the event organizer",
            "type": "object",
            "example": {
              "type": "RealEstateAgent",
              "name": "Bruce Wayne",
              "id": "https://batman.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-279>"
          }
        },
        "x-parser-schema-id": "Event"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "name of the event",
    "example": "Property Showing 1007 Mountain Gate Rd",
    "x-parser-schema-id": "<anonymous-schema-274>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "Event",
        "description": "An event happening at a certain time and location",
        "x-range": "Event",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "example": "Event",
            "x-parser-schema-id": "<anonymous-schema-273>"
          },
          "name": {
            "type": "string",
            "description": "name of the event",
            "example": "Property Showing 1007 Mountain Gate Rd",
            "x-parser-schema-id": "<anonymous-schema-274>"
          },
          "description": {
            "type": "string",
            "description": "event message content",
            "example": "an example meeting request for 4:00PM to 4:30PM.",
            "x-parser-schema-id": "<anonymous-schema-275>"
          },
          "about": {
            "type": "object",
            "description": "a subject of the meeting or event",
            "example": {
              "type": "PropertyListing",
              "originatingSystemName": "GOTHAM-MLS",
              "originatingSystemKey": "12345",
              "url": "https://{company-website-url}/{path-to-listing}",
              "streetAddress": "1007 Mountain Gate Rd",
              "addressRegion": "New Jersey",
              "addressLocality": "Gotham City",
              "postalCode": "10010",
              "addressCountry": "USA",
              "listingPrice": {
                "type": "PriceSpecification",
                "price": 7500000,
                "priceCurrency": "USD"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-276>"
          },
          "startDate": {
            "description": "the start date-time (ISO 8601 formated)",
            "type": "string",
            "format": "date-time",
            "example": "2019-08-01T16:00Z",
            "x-parser-schema-id": "<anonymous-schema-277>"
          },
          "endDate": {
            "type": "string",
            "description": "the end date-time (ISO 8601 formated)",
            "format": "date-time",
            "example": "2019-08-01T16:30Z",
            "x-parser-schema-id": "<anonymous-schema-278>"
          },
          "organizer": {
            "title": "organizer",
            "description": "the event organizer",
            "type": "object",
            "example": {
              "type": "RealEstateAgent",
              "name": "Bruce Wayne",
              "id": "https://batman.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-279>"
          }
        },
        "x-parser-schema-id": "Event"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "event message content",
    "example": "an example meeting request for 4:00PM to 4:30PM.",
    "x-parser-schema-id": "<anonymous-schema-275>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "Event",
        "description": "An event happening at a certain time and location",
        "x-range": "Event",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "example": "Event",
            "x-parser-schema-id": "<anonymous-schema-273>"
          },
          "name": {
            "type": "string",
            "description": "name of the event",
            "example": "Property Showing 1007 Mountain Gate Rd",
            "x-parser-schema-id": "<anonymous-schema-274>"
          },
          "description": {
            "type": "string",
            "description": "event message content",
            "example": "an example meeting request for 4:00PM to 4:30PM.",
            "x-parser-schema-id": "<anonymous-schema-275>"
          },
          "about": {
            "type": "object",
            "description": "a subject of the meeting or event",
            "example": {
              "type": "PropertyListing",
              "originatingSystemName": "GOTHAM-MLS",
              "originatingSystemKey": "12345",
              "url": "https://{company-website-url}/{path-to-listing}",
              "streetAddress": "1007 Mountain Gate Rd",
              "addressRegion": "New Jersey",
              "addressLocality": "Gotham City",
              "postalCode": "10010",
              "addressCountry": "USA",
              "listingPrice": {
                "type": "PriceSpecification",
                "price": 7500000,
                "priceCurrency": "USD"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-276>"
          },
          "startDate": {
            "description": "the start date-time (ISO 8601 formated)",
            "type": "string",
            "format": "date-time",
            "example": "2019-08-01T16:00Z",
            "x-parser-schema-id": "<anonymous-schema-277>"
          },
          "endDate": {
            "type": "string",
            "description": "the end date-time (ISO 8601 formated)",
            "format": "date-time",
            "example": "2019-08-01T16:30Z",
            "x-parser-schema-id": "<anonymous-schema-278>"
          },
          "organizer": {
            "title": "organizer",
            "description": "the event organizer",
            "type": "object",
            "example": {
              "type": "RealEstateAgent",
              "name": "Bruce Wayne",
              "id": "https://batman.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-279>"
          }
        },
        "x-parser-schema-id": "Event"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "a subject of the meeting or event",
    "example": {
      "type": "PropertyListing",
      "originatingSystemName": "GOTHAM-MLS",
      "originatingSystemKey": "12345",
      "url": "https://{company-website-url}/{path-to-listing}",
      "streetAddress": "1007 Mountain Gate Rd",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      }
    },
    "x-parser-schema-id": "<anonymous-schema-276>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "Event",
        "description": "An event happening at a certain time and location",
        "x-range": "Event",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "example": "Event",
            "x-parser-schema-id": "<anonymous-schema-273>"
          },
          "name": {
            "type": "string",
            "description": "name of the event",
            "example": "Property Showing 1007 Mountain Gate Rd",
            "x-parser-schema-id": "<anonymous-schema-274>"
          },
          "description": {
            "type": "string",
            "description": "event message content",
            "example": "an example meeting request for 4:00PM to 4:30PM.",
            "x-parser-schema-id": "<anonymous-schema-275>"
          },
          "about": {
            "type": "object",
            "description": "a subject of the meeting or event",
            "example": {
              "type": "PropertyListing",
              "originatingSystemName": "GOTHAM-MLS",
              "originatingSystemKey": "12345",
              "url": "https://{company-website-url}/{path-to-listing}",
              "streetAddress": "1007 Mountain Gate Rd",
              "addressRegion": "New Jersey",
              "addressLocality": "Gotham City",
              "postalCode": "10010",
              "addressCountry": "USA",
              "listingPrice": {
                "type": "PriceSpecification",
                "price": 7500000,
                "priceCurrency": "USD"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-276>"
          },
          "startDate": {
            "description": "the start date-time (ISO 8601 formated)",
            "type": "string",
            "format": "date-time",
            "example": "2019-08-01T16:00Z",
            "x-parser-schema-id": "<anonymous-schema-277>"
          },
          "endDate": {
            "type": "string",
            "description": "the end date-time (ISO 8601 formated)",
            "format": "date-time",
            "example": "2019-08-01T16:30Z",
            "x-parser-schema-id": "<anonymous-schema-278>"
          },
          "organizer": {
            "title": "organizer",
            "description": "the event organizer",
            "type": "object",
            "example": {
              "type": "RealEstateAgent",
              "name": "Bruce Wayne",
              "id": "https://batman.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-279>"
          }
        },
        "x-parser-schema-id": "Event"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "the start date-time (ISO 8601 formated)",
    "type": "string",
    "format": "date-time",
    "example": "2019-08-01T16:00Z",
    "x-parser-schema-id": "<anonymous-schema-277>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "Event",
        "description": "An event happening at a certain time and location",
        "x-range": "Event",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "example": "Event",
            "x-parser-schema-id": "<anonymous-schema-273>"
          },
          "name": {
            "type": "string",
            "description": "name of the event",
            "example": "Property Showing 1007 Mountain Gate Rd",
            "x-parser-schema-id": "<anonymous-schema-274>"
          },
          "description": {
            "type": "string",
            "description": "event message content",
            "example": "an example meeting request for 4:00PM to 4:30PM.",
            "x-parser-schema-id": "<anonymous-schema-275>"
          },
          "about": {
            "type": "object",
            "description": "a subject of the meeting or event",
            "example": {
              "type": "PropertyListing",
              "originatingSystemName": "GOTHAM-MLS",
              "originatingSystemKey": "12345",
              "url": "https://{company-website-url}/{path-to-listing}",
              "streetAddress": "1007 Mountain Gate Rd",
              "addressRegion": "New Jersey",
              "addressLocality": "Gotham City",
              "postalCode": "10010",
              "addressCountry": "USA",
              "listingPrice": {
                "type": "PriceSpecification",
                "price": 7500000,
                "priceCurrency": "USD"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-276>"
          },
          "startDate": {
            "description": "the start date-time (ISO 8601 formated)",
            "type": "string",
            "format": "date-time",
            "example": "2019-08-01T16:00Z",
            "x-parser-schema-id": "<anonymous-schema-277>"
          },
          "endDate": {
            "type": "string",
            "description": "the end date-time (ISO 8601 formated)",
            "format": "date-time",
            "example": "2019-08-01T16:30Z",
            "x-parser-schema-id": "<anonymous-schema-278>"
          },
          "organizer": {
            "title": "organizer",
            "description": "the event organizer",
            "type": "object",
            "example": {
              "type": "RealEstateAgent",
              "name": "Bruce Wayne",
              "id": "https://batman.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-279>"
          }
        },
        "x-parser-schema-id": "Event"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "the end date-time (ISO 8601 formated)",
    "format": "date-time",
    "example": "2019-08-01T16:30Z",
    "x-parser-schema-id": "<anonymous-schema-278>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "Event",
        "description": "An event happening at a certain time and location",
        "x-range": "Event",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "example": "Event",
            "x-parser-schema-id": "<anonymous-schema-273>"
          },
          "name": {
            "type": "string",
            "description": "name of the event",
            "example": "Property Showing 1007 Mountain Gate Rd",
            "x-parser-schema-id": "<anonymous-schema-274>"
          },
          "description": {
            "type": "string",
            "description": "event message content",
            "example": "an example meeting request for 4:00PM to 4:30PM.",
            "x-parser-schema-id": "<anonymous-schema-275>"
          },
          "about": {
            "type": "object",
            "description": "a subject of the meeting or event",
            "example": {
              "type": "PropertyListing",
              "originatingSystemName": "GOTHAM-MLS",
              "originatingSystemKey": "12345",
              "url": "https://{company-website-url}/{path-to-listing}",
              "streetAddress": "1007 Mountain Gate Rd",
              "addressRegion": "New Jersey",
              "addressLocality": "Gotham City",
              "postalCode": "10010",
              "addressCountry": "USA",
              "listingPrice": {
                "type": "PriceSpecification",
                "price": 7500000,
                "priceCurrency": "USD"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-276>"
          },
          "startDate": {
            "description": "the start date-time (ISO 8601 formated)",
            "type": "string",
            "format": "date-time",
            "example": "2019-08-01T16:00Z",
            "x-parser-schema-id": "<anonymous-schema-277>"
          },
          "endDate": {
            "type": "string",
            "description": "the end date-time (ISO 8601 formated)",
            "format": "date-time",
            "example": "2019-08-01T16:30Z",
            "x-parser-schema-id": "<anonymous-schema-278>"
          },
          "organizer": {
            "title": "organizer",
            "description": "the event organizer",
            "type": "object",
            "example": {
              "type": "RealEstateAgent",
              "name": "Bruce Wayne",
              "id": "https://batman.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-279>"
          }
        },
        "x-parser-schema-id": "Event"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "title": "organizer",
    "description": "the event organizer",
    "type": "object",
    "example": {
      "type": "RealEstateAgent",
      "name": "Bruce Wayne",
      "id": "https://batman.example.com/profile/card#me"
    },
    "x-parser-schema-id": "<anonymous-schema-279>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "title": "Event",
        "description": "An event happening at a certain time and location",
        "x-range": "Event",
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "example": "Event",
            "x-parser-schema-id": "<anonymous-schema-273>"
          },
          "name": {
            "type": "string",
            "description": "name of the event",
            "example": "Property Showing 1007 Mountain Gate Rd",
            "x-parser-schema-id": "<anonymous-schema-274>"
          },
          "description": {
            "type": "string",
            "description": "event message content",
            "example": "an example meeting request for 4:00PM to 4:30PM.",
            "x-parser-schema-id": "<anonymous-schema-275>"
          },
          "about": {
            "type": "object",
            "description": "a subject of the meeting or event",
            "example": {
              "type": "PropertyListing",
              "originatingSystemName": "GOTHAM-MLS",
              "originatingSystemKey": "12345",
              "url": "https://{company-website-url}/{path-to-listing}",
              "streetAddress": "1007 Mountain Gate Rd",
              "addressRegion": "New Jersey",
              "addressLocality": "Gotham City",
              "postalCode": "10010",
              "addressCountry": "USA",
              "listingPrice": {
                "type": "PriceSpecification",
                "price": 7500000,
                "priceCurrency": "USD"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-276>"
          },
          "startDate": {
            "description": "the start date-time (ISO 8601 formated)",
            "type": "string",
            "format": "date-time",
            "example": "2019-08-01T16:00Z",
            "x-parser-schema-id": "<anonymous-schema-277>"
          },
          "endDate": {
            "type": "string",
            "description": "the end date-time (ISO 8601 formated)",
            "format": "date-time",
            "example": "2019-08-01T16:30Z",
            "x-parser-schema-id": "<anonymous-schema-278>"
          },
          "organizer": {
            "title": "organizer",
            "description": "the event organizer",
            "type": "object",
            "example": {
              "type": "RealEstateAgent",
              "name": "Bruce Wayne",
              "id": "https://batman.example.com/profile/card#me"
            },
            "x-parser-schema-id": "<anonymous-schema-279>"
          }
        },
        "x-parser-schema-id": "Event"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "Event",
  "name": "Property Showing 1007 Mountain Gate Rd",
  "description": "an example meeting request for 4:00PM to 4:30PM.",
  "about": {
    "type": "PropertyListing",
    "originatingSystemName": "GOTHAM-MLS",
    "originatingSystemKey": "12345",
    "url": "https://{company-website-url}/{path-to-listing}",
    "streetAddress": "1007 Mountain Gate Rd",
    "addressRegion": "New Jersey",
    "addressLocality": "Gotham City",
    "postalCode": "10010",
    "addressCountry": "USA",
    "listingPrice": {
      "type": "PriceSpecification",
      "price": 7500000,
      "priceCurrency": "USD"
    }
  },
  "startDate": "2019-08-01T16:00Z",
  "endDate": "2019-08-01T16:30Z",
  "organizer": {
    "type": "RealEstateAgent",
    "name": "Bruce Wayne",
    "id": "https://batman.example.com/profile/card#me"
  }
}
```

