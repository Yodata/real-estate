

---
title: Place
---

{
  "type": {
    "_json": {
      "type": "string",
      "description": "The item type (Linked-Data @type)",
      "enum": [
        "Place"
      ],
      "x-parser-schema-id": "<anonymous-schema-345>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "description": "a physical location",
          "title": "Place",
          "x-range": [
            "Place",
            "City",
            "State",
            "PostalCode",
            "GeoCircle",
            "GeoShape"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "Place"
              ],
              "x-parser-schema-id": "<anonymous-schema-345>"
            },
            "address": {
              "type": "object",
              "x-range": "PostalAddress",
              "description": "A physical address.",
              "example": {
                "type": "PostalAddress",
                "name": "Home",
                "streetAddress": "1007 Mountain Gate Rd",
                "postOfficeBoxNumber": "Box 1234",
                "addressRegion": "New Jersey",
                "addressLocality": "Gotham City",
                "postalCode": "10010",
                "addressCountry": "USA",
                "addressCounty": "Gotham County",
                "addressSubdivision": "Gotham Heights"
              },
              "x-parser-schema-id": "<anonymous-schema-346>"
            },
            "geo": {
              "type": "object",
              "description": "a geo shape (circle or box)",
              "x-range": [
                "GeoCircle",
                "GeoShape"
              ],
              "example": {
                "type": "GeoShape",
                "geoMidpoint": {
                  "type": "GeoCoordinates,",
                  "longitude": "73.98",
                  "latitude": "40.75"
                },
                "geoRadius": {
                  "type": "QuantitativeValue,",
                  "value": "10,",
                  "unitCode": "mi,",
                  "unitText": "miles"
                },
                "box": "(33.5697,-117.775),(33.6018,-117.707)"
              },
              "x-parser-schema-id": "<anonymous-schema-347>"
            }
          },
          "x-parser-schema-id": "Place"
        },
        "options": {}
      }
    }
  },
  "address": {
    "_json": {
      "type": "object",
      "x-range": "PostalAddress",
      "description": "A physical address.",
      "example": {
        "type": "PostalAddress",
        "name": "Home",
        "streetAddress": "1007 Mountain Gate Rd",
        "postOfficeBoxNumber": "Box 1234",
        "addressRegion": "New Jersey",
        "addressLocality": "Gotham City",
        "postalCode": "10010",
        "addressCountry": "USA",
        "addressCounty": "Gotham County",
        "addressSubdivision": "Gotham Heights"
      },
      "x-parser-schema-id": "<anonymous-schema-346>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "description": "a physical location",
          "title": "Place",
          "x-range": [
            "Place",
            "City",
            "State",
            "PostalCode",
            "GeoCircle",
            "GeoShape"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "Place"
              ],
              "x-parser-schema-id": "<anonymous-schema-345>"
            },
            "address": {
              "type": "object",
              "x-range": "PostalAddress",
              "description": "A physical address.",
              "example": {
                "type": "PostalAddress",
                "name": "Home",
                "streetAddress": "1007 Mountain Gate Rd",
                "postOfficeBoxNumber": "Box 1234",
                "addressRegion": "New Jersey",
                "addressLocality": "Gotham City",
                "postalCode": "10010",
                "addressCountry": "USA",
                "addressCounty": "Gotham County",
                "addressSubdivision": "Gotham Heights"
              },
              "x-parser-schema-id": "<anonymous-schema-346>"
            },
            "geo": {
              "type": "object",
              "description": "a geo shape (circle or box)",
              "x-range": [
                "GeoCircle",
                "GeoShape"
              ],
              "example": {
                "type": "GeoShape",
                "geoMidpoint": {
                  "type": "GeoCoordinates,",
                  "longitude": "73.98",
                  "latitude": "40.75"
                },
                "geoRadius": {
                  "type": "QuantitativeValue,",
                  "value": "10,",
                  "unitCode": "mi,",
                  "unitText": "miles"
                },
                "box": "(33.5697,-117.775),(33.6018,-117.707)"
              },
              "x-parser-schema-id": "<anonymous-schema-347>"
            }
          },
          "x-parser-schema-id": "Place"
        },
        "options": {}
      }
    }
  },
  "geo": {
    "_json": {
      "type": "object",
      "description": "a geo shape (circle or box)",
      "x-range": [
        "GeoCircle",
        "GeoShape"
      ],
      "example": {
        "type": "GeoShape",
        "geoMidpoint": {
          "type": "GeoCoordinates,",
          "longitude": "73.98",
          "latitude": "40.75"
        },
        "geoRadius": {
          "type": "QuantitativeValue,",
          "value": "10,",
          "unitCode": "mi,",
          "unitText": "miles"
        },
        "box": "(33.5697,-117.775),(33.6018,-117.707)"
      },
      "x-parser-schema-id": "<anonymous-schema-347>"
    },
    "options": {
      "parent": {
        "_json": {
          "type": "object",
          "description": "a physical location",
          "title": "Place",
          "x-range": [
            "Place",
            "City",
            "State",
            "PostalCode",
            "GeoCircle",
            "GeoShape"
          ],
          "properties": {
            "type": {
              "type": "string",
              "description": "The item type (Linked-Data @type)",
              "enum": [
                "Place"
              ],
              "x-parser-schema-id": "<anonymous-schema-345>"
            },
            "address": {
              "type": "object",
              "x-range": "PostalAddress",
              "description": "A physical address.",
              "example": {
                "type": "PostalAddress",
                "name": "Home",
                "streetAddress": "1007 Mountain Gate Rd",
                "postOfficeBoxNumber": "Box 1234",
                "addressRegion": "New Jersey",
                "addressLocality": "Gotham City",
                "postalCode": "10010",
                "addressCountry": "USA",
                "addressCounty": "Gotham County",
                "addressSubdivision": "Gotham Heights"
              },
              "x-parser-schema-id": "<anonymous-schema-346>"
            },
            "geo": {
              "type": "object",
              "description": "a geo shape (circle or box)",
              "x-range": [
                "GeoCircle",
                "GeoShape"
              ],
              "example": {
                "type": "GeoShape",
                "geoMidpoint": {
                  "type": "GeoCoordinates,",
                  "longitude": "73.98",
                  "latitude": "40.75"
                },
                "geoRadius": {
                  "type": "QuantitativeValue,",
                  "value": "10,",
                  "unitCode": "mi,",
                  "unitText": "miles"
                },
                "box": "(33.5697,-117.775),(33.6018,-117.707)"
              },
              "x-parser-schema-id": "<anonymous-schema-347>"
            }
          },
          "x-parser-schema-id": "Place"
        },
        "options": {}
      }
    }
  }
}


# Place

a physical location



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "description": "The item type (Linked-Data @type)",
    "enum": [
      "Place"
    ],
    "x-parser-schema-id": "<anonymous-schema-345>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "description": "a physical location",
        "title": "Place",
        "x-range": [
          "Place",
          "City",
          "State",
          "PostalCode",
          "GeoCircle",
          "GeoShape"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "Place"
            ],
            "x-parser-schema-id": "<anonymous-schema-345>"
          },
          "address": {
            "type": "object",
            "x-range": "PostalAddress",
            "description": "A physical address.",
            "example": {
              "type": "PostalAddress",
              "name": "Home",
              "streetAddress": "1007 Mountain Gate Rd",
              "postOfficeBoxNumber": "Box 1234",
              "addressRegion": "New Jersey",
              "addressLocality": "Gotham City",
              "postalCode": "10010",
              "addressCountry": "USA",
              "addressCounty": "Gotham County",
              "addressSubdivision": "Gotham Heights"
            },
            "x-parser-schema-id": "<anonymous-schema-346>"
          },
          "geo": {
            "type": "object",
            "description": "a geo shape (circle or box)",
            "x-range": [
              "GeoCircle",
              "GeoShape"
            ],
            "example": {
              "type": "GeoShape",
              "geoMidpoint": {
                "type": "GeoCoordinates,",
                "longitude": "73.98",
                "latitude": "40.75"
              },
              "geoRadius": {
                "type": "QuantitativeValue,",
                "value": "10,",
                "unitCode": "mi,",
                "unitText": "miles"
              },
              "box": "(33.5697,-117.775),(33.6018,-117.707)"
            },
            "x-parser-schema-id": "<anonymous-schema-347>"
          }
        },
        "x-parser-schema-id": "Place"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "x-range": "PostalAddress",
    "description": "A physical address.",
    "example": {
      "type": "PostalAddress",
      "name": "Home",
      "streetAddress": "1007 Mountain Gate Rd",
      "postOfficeBoxNumber": "Box 1234",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "addressCounty": "Gotham County",
      "addressSubdivision": "Gotham Heights"
    },
    "x-parser-schema-id": "<anonymous-schema-346>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "description": "a physical location",
        "title": "Place",
        "x-range": [
          "Place",
          "City",
          "State",
          "PostalCode",
          "GeoCircle",
          "GeoShape"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "Place"
            ],
            "x-parser-schema-id": "<anonymous-schema-345>"
          },
          "address": {
            "type": "object",
            "x-range": "PostalAddress",
            "description": "A physical address.",
            "example": {
              "type": "PostalAddress",
              "name": "Home",
              "streetAddress": "1007 Mountain Gate Rd",
              "postOfficeBoxNumber": "Box 1234",
              "addressRegion": "New Jersey",
              "addressLocality": "Gotham City",
              "postalCode": "10010",
              "addressCountry": "USA",
              "addressCounty": "Gotham County",
              "addressSubdivision": "Gotham Heights"
            },
            "x-parser-schema-id": "<anonymous-schema-346>"
          },
          "geo": {
            "type": "object",
            "description": "a geo shape (circle or box)",
            "x-range": [
              "GeoCircle",
              "GeoShape"
            ],
            "example": {
              "type": "GeoShape",
              "geoMidpoint": {
                "type": "GeoCoordinates,",
                "longitude": "73.98",
                "latitude": "40.75"
              },
              "geoRadius": {
                "type": "QuantitativeValue,",
                "value": "10,",
                "unitCode": "mi,",
                "unitText": "miles"
              },
              "box": "(33.5697,-117.775),(33.6018,-117.707)"
            },
            "x-parser-schema-id": "<anonymous-schema-347>"
          }
        },
        "x-parser-schema-id": "Place"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "object",
    "description": "a geo shape (circle or box)",
    "x-range": [
      "GeoCircle",
      "GeoShape"
    ],
    "example": {
      "type": "GeoShape",
      "geoMidpoint": {
        "type": "GeoCoordinates,",
        "longitude": "73.98",
        "latitude": "40.75"
      },
      "geoRadius": {
        "type": "QuantitativeValue,",
        "value": "10,",
        "unitCode": "mi,",
        "unitText": "miles"
      },
      "box": "(33.5697,-117.775),(33.6018,-117.707)"
    },
    "x-parser-schema-id": "<anonymous-schema-347>"
  },
  "options": {
    "parent": {
      "_json": {
        "type": "object",
        "description": "a physical location",
        "title": "Place",
        "x-range": [
          "Place",
          "City",
          "State",
          "PostalCode",
          "GeoCircle",
          "GeoShape"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "enum": [
              "Place"
            ],
            "x-parser-schema-id": "<anonymous-schema-345>"
          },
          "address": {
            "type": "object",
            "x-range": "PostalAddress",
            "description": "A physical address.",
            "example": {
              "type": "PostalAddress",
              "name": "Home",
              "streetAddress": "1007 Mountain Gate Rd",
              "postOfficeBoxNumber": "Box 1234",
              "addressRegion": "New Jersey",
              "addressLocality": "Gotham City",
              "postalCode": "10010",
              "addressCountry": "USA",
              "addressCounty": "Gotham County",
              "addressSubdivision": "Gotham Heights"
            },
            "x-parser-schema-id": "<anonymous-schema-346>"
          },
          "geo": {
            "type": "object",
            "description": "a geo shape (circle or box)",
            "x-range": [
              "GeoCircle",
              "GeoShape"
            ],
            "example": {
              "type": "GeoShape",
              "geoMidpoint": {
                "type": "GeoCoordinates,",
                "longitude": "73.98",
                "latitude": "40.75"
              },
              "geoRadius": {
                "type": "QuantitativeValue,",
                "value": "10,",
                "unitCode": "mi,",
                "unitText": "miles"
              },
              "box": "(33.5697,-117.775),(33.6018,-117.707)"
            },
            "x-parser-schema-id": "<anonymous-schema-347>"
          }
        },
        "x-parser-schema-id": "Place"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "Place",
  "address": {
    "type": "PostalAddress",
    "name": "Home",
    "streetAddress": "1007 Mountain Gate Rd",
    "postOfficeBoxNumber": "Box 1234",
    "addressRegion": "New Jersey",
    "addressLocality": "Gotham City",
    "postalCode": "10010",
    "addressCountry": "USA",
    "addressCounty": "Gotham County",
    "addressSubdivision": "Gotham Heights"
  },
  "geo": {
    "type": "GeoShape",
    "geoMidpoint": {
      "type": "GeoCoordinates,",
      "longitude": "73.98",
      "latitude": "40.75"
    },
    "geoRadius": {
      "type": "QuantitativeValue,",
      "value": "10,",
      "unitCode": "mi,",
      "unitText": "miles"
    },
    "box": "(33.5697,-117.775),(33.6018,-117.707)"
  }
}
```

