

---
title: Service
---

{
  "type": {
    "_json": {
      "type": "string",
      "enum": [
        "Service"
      ],
      "x-parser-schema-id": "<anonymous-schema-585>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Service",
          "description": "A service provided by an organization.",
          "x-kind": "Service",
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Service"
              ],
              "x-parser-schema-id": "<anonymous-schema-585>"
            },
            "name": {
              "type": "string",
              "description": "name of the service.",
              "x-parser-schema-id": "<anonymous-schema-586>"
            },
            "areaServed": {
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
            }
          },
          "x-parser-schema-id": "Service"
        },
        "options": {}
      }
    }
  },
  "name": {
    "_json": {
      "type": "string",
      "description": "name of the service.",
      "x-parser-schema-id": "<anonymous-schema-586>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "Service",
          "description": "A service provided by an organization.",
          "x-kind": "Service",
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Service"
              ],
              "x-parser-schema-id": "<anonymous-schema-585>"
            },
            "name": {
              "type": "string",
              "description": "name of the service.",
              "x-parser-schema-id": "<anonymous-schema-586>"
            },
            "areaServed": {
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
            }
          },
          "x-parser-schema-id": "Service"
        },
        "options": {}
      }
    }
  },
  "areaServed": {
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
    "options": {
      "parent": {
        "_json": {
          "title": "Service",
          "description": "A service provided by an organization.",
          "x-kind": "Service",
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "Service"
              ],
              "x-parser-schema-id": "<anonymous-schema-585>"
            },
            "name": {
              "type": "string",
              "description": "name of the service.",
              "x-parser-schema-id": "<anonymous-schema-586>"
            },
            "areaServed": {
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
            }
          },
          "x-parser-schema-id": "Service"
        },
        "options": {}
      }
    }
  }
}


# Service

A service provided by an organization.



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "enum": [
      "Service"
    ],
    "x-parser-schema-id": "<anonymous-schema-585>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Service",
        "description": "A service provided by an organization.",
        "x-kind": "Service",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Service"
            ],
            "x-parser-schema-id": "<anonymous-schema-585>"
          },
          "name": {
            "type": "string",
            "description": "name of the service.",
            "x-parser-schema-id": "<anonymous-schema-586>"
          },
          "areaServed": {
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
          }
        },
        "x-parser-schema-id": "Service"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "name of the service.",
    "x-parser-schema-id": "<anonymous-schema-586>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "Service",
        "description": "A service provided by an organization.",
        "x-kind": "Service",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Service"
            ],
            "x-parser-schema-id": "<anonymous-schema-585>"
          },
          "name": {
            "type": "string",
            "description": "name of the service.",
            "x-parser-schema-id": "<anonymous-schema-586>"
          },
          "areaServed": {
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
          }
        },
        "x-parser-schema-id": "Service"
      },
      "options": {}
    }
  }
}






{
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
  "options": {
    "parent": {
      "_json": {
        "title": "Service",
        "description": "A service provided by an organization.",
        "x-kind": "Service",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "Service"
            ],
            "x-parser-schema-id": "<anonymous-schema-585>"
          },
          "name": {
            "type": "string",
            "description": "name of the service.",
            "x-parser-schema-id": "<anonymous-schema-586>"
          },
          "areaServed": {
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
          }
        },
        "x-parser-schema-id": "Service"
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
      &quot;Place&quot;
    ],
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-345&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;a physical location&quot;,
        &quot;title&quot;: &quot;Place&quot;,
        &quot;x-range&quot;: [
          &quot;Place&quot;,
          &quot;City&quot;,
          &quot;State&quot;,
          &quot;PostalCode&quot;,
          &quot;GeoCircle&quot;,
          &quot;GeoShape&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;enum&quot;: [
              &quot;Place&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-345&gt;&quot;
          },
          &quot;address&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;PostalAddress&quot;,
            &quot;description&quot;: &quot;A physical address.&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;PostalAddress&quot;,
              &quot;name&quot;: &quot;Home&quot;,
              &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
              &quot;postOfficeBoxNumber&quot;: &quot;Box 1234&quot;,
              &quot;addressRegion&quot;: &quot;New Jersey&quot;,
              &quot;addressLocality&quot;: &quot;Gotham City&quot;,
              &quot;postalCode&quot;: &quot;10010&quot;,
              &quot;addressCountry&quot;: &quot;USA&quot;,
              &quot;addressCounty&quot;: &quot;Gotham County&quot;,
              &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-346&gt;&quot;
          },
          &quot;geo&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;a geo shape (circle or box)&quot;,
            &quot;x-range&quot;: [
              &quot;GeoCircle&quot;,
              &quot;GeoShape&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;GeoShape&quot;,
              &quot;geoMidpoint&quot;: {
                &quot;type&quot;: &quot;GeoCoordinates,&quot;,
                &quot;longitude&quot;: &quot;73.98&quot;,
                &quot;latitude&quot;: &quot;40.75&quot;
              },
              &quot;geoRadius&quot;: {
                &quot;type&quot;: &quot;QuantitativeValue,&quot;,
                &quot;value&quot;: &quot;10,&quot;,
                &quot;unitCode&quot;: &quot;mi,&quot;,
                &quot;unitText&quot;: &quot;miles&quot;
              },
              &quot;box&quot;: &quot;(33.5697,-117.775),(33.6018,-117.707)&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-347&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;Place&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;Service&quot;,
            &quot;description&quot;: &quot;A service provided by an organization.&quot;,
            &quot;x-kind&quot;: &quot;Service&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;Service&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-585&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;name of the service.&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-586&gt;&quot;
              },
              &quot;areaServed&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a physical location&quot;,
                &quot;title&quot;: &quot;Place&quot;,
                &quot;x-range&quot;: [
                  &quot;Place&quot;,
                  &quot;City&quot;,
                  &quot;State&quot;,
                  &quot;PostalCode&quot;,
                  &quot;GeoCircle&quot;,
                  &quot;GeoShape&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;enum&quot;: [
                      &quot;Place&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-345&gt;&quot;
                  },
                  &quot;address&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-range&quot;: &quot;PostalAddress&quot;,
                    &quot;description&quot;: &quot;A physical address.&quot;,
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PostalAddress&quot;,
                      &quot;name&quot;: &quot;Home&quot;,
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;postOfficeBoxNumber&quot;: &quot;Box 1234&quot;,
                      &quot;addressRegion&quot;: &quot;New Jersey&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;postalCode&quot;: &quot;10010&quot;,
                      &quot;addressCountry&quot;: &quot;USA&quot;,
                      &quot;addressCounty&quot;: &quot;Gotham County&quot;,
                      &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-346&gt;&quot;
                  },
                  &quot;geo&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;a geo shape (circle or box)&quot;,
                    &quot;x-range&quot;: [
                      &quot;GeoCircle&quot;,
                      &quot;GeoShape&quot;
                    ],
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;GeoShape&quot;,
                      &quot;geoMidpoint&quot;: {
                        &quot;type&quot;: &quot;GeoCoordinates,&quot;,
                        &quot;longitude&quot;: &quot;73.98&quot;,
                        &quot;latitude&quot;: &quot;40.75&quot;
                      },
                      &quot;geoRadius&quot;: {
                        &quot;type&quot;: &quot;QuantitativeValue,&quot;,
                        &quot;value&quot;: &quot;10,&quot;,
                        &quot;unitCode&quot;: &quot;mi,&quot;,
                        &quot;unitText&quot;: &quot;miles&quot;
                      },
                      &quot;box&quot;: &quot;(33.5697,-117.775),(33.6018,-117.707)&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-347&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Place&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Service&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = type
required = false
path = areaServed



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;object&quot;,
    &quot;x-range&quot;: &quot;PostalAddress&quot;,
    &quot;description&quot;: &quot;A physical address.&quot;,
    &quot;example&quot;: {
      &quot;type&quot;: &quot;PostalAddress&quot;,
      &quot;name&quot;: &quot;Home&quot;,
      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
      &quot;postOfficeBoxNumber&quot;: &quot;Box 1234&quot;,
      &quot;addressRegion&quot;: &quot;New Jersey&quot;,
      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
      &quot;postalCode&quot;: &quot;10010&quot;,
      &quot;addressCountry&quot;: &quot;USA&quot;,
      &quot;addressCounty&quot;: &quot;Gotham County&quot;,
      &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-346&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;a physical location&quot;,
        &quot;title&quot;: &quot;Place&quot;,
        &quot;x-range&quot;: [
          &quot;Place&quot;,
          &quot;City&quot;,
          &quot;State&quot;,
          &quot;PostalCode&quot;,
          &quot;GeoCircle&quot;,
          &quot;GeoShape&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;enum&quot;: [
              &quot;Place&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-345&gt;&quot;
          },
          &quot;address&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;PostalAddress&quot;,
            &quot;description&quot;: &quot;A physical address.&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;PostalAddress&quot;,
              &quot;name&quot;: &quot;Home&quot;,
              &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
              &quot;postOfficeBoxNumber&quot;: &quot;Box 1234&quot;,
              &quot;addressRegion&quot;: &quot;New Jersey&quot;,
              &quot;addressLocality&quot;: &quot;Gotham City&quot;,
              &quot;postalCode&quot;: &quot;10010&quot;,
              &quot;addressCountry&quot;: &quot;USA&quot;,
              &quot;addressCounty&quot;: &quot;Gotham County&quot;,
              &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-346&gt;&quot;
          },
          &quot;geo&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;a geo shape (circle or box)&quot;,
            &quot;x-range&quot;: [
              &quot;GeoCircle&quot;,
              &quot;GeoShape&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;GeoShape&quot;,
              &quot;geoMidpoint&quot;: {
                &quot;type&quot;: &quot;GeoCoordinates,&quot;,
                &quot;longitude&quot;: &quot;73.98&quot;,
                &quot;latitude&quot;: &quot;40.75&quot;
              },
              &quot;geoRadius&quot;: {
                &quot;type&quot;: &quot;QuantitativeValue,&quot;,
                &quot;value&quot;: &quot;10,&quot;,
                &quot;unitCode&quot;: &quot;mi,&quot;,
                &quot;unitText&quot;: &quot;miles&quot;
              },
              &quot;box&quot;: &quot;(33.5697,-117.775),(33.6018,-117.707)&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-347&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;Place&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;Service&quot;,
            &quot;description&quot;: &quot;A service provided by an organization.&quot;,
            &quot;x-kind&quot;: &quot;Service&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;Service&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-585&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;name of the service.&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-586&gt;&quot;
              },
              &quot;areaServed&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a physical location&quot;,
                &quot;title&quot;: &quot;Place&quot;,
                &quot;x-range&quot;: [
                  &quot;Place&quot;,
                  &quot;City&quot;,
                  &quot;State&quot;,
                  &quot;PostalCode&quot;,
                  &quot;GeoCircle&quot;,
                  &quot;GeoShape&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;enum&quot;: [
                      &quot;Place&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-345&gt;&quot;
                  },
                  &quot;address&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-range&quot;: &quot;PostalAddress&quot;,
                    &quot;description&quot;: &quot;A physical address.&quot;,
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PostalAddress&quot;,
                      &quot;name&quot;: &quot;Home&quot;,
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;postOfficeBoxNumber&quot;: &quot;Box 1234&quot;,
                      &quot;addressRegion&quot;: &quot;New Jersey&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;postalCode&quot;: &quot;10010&quot;,
                      &quot;addressCountry&quot;: &quot;USA&quot;,
                      &quot;addressCounty&quot;: &quot;Gotham County&quot;,
                      &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-346&gt;&quot;
                  },
                  &quot;geo&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;a geo shape (circle or box)&quot;,
                    &quot;x-range&quot;: [
                      &quot;GeoCircle&quot;,
                      &quot;GeoShape&quot;
                    ],
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;GeoShape&quot;,
                      &quot;geoMidpoint&quot;: {
                        &quot;type&quot;: &quot;GeoCoordinates,&quot;,
                        &quot;longitude&quot;: &quot;73.98&quot;,
                        &quot;latitude&quot;: &quot;40.75&quot;
                      },
                      &quot;geoRadius&quot;: {
                        &quot;type&quot;: &quot;QuantitativeValue,&quot;,
                        &quot;value&quot;: &quot;10,&quot;,
                        &quot;unitCode&quot;: &quot;mi,&quot;,
                        &quot;unitText&quot;: &quot;miles&quot;
                      },
                      &quot;box&quot;: &quot;(33.5697,-117.775),(33.6018,-117.707)&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-347&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Place&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Service&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = address
required = false
path = areaServed



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;object&quot;,
    &quot;description&quot;: &quot;a geo shape (circle or box)&quot;,
    &quot;x-range&quot;: [
      &quot;GeoCircle&quot;,
      &quot;GeoShape&quot;
    ],
    &quot;example&quot;: {
      &quot;type&quot;: &quot;GeoShape&quot;,
      &quot;geoMidpoint&quot;: {
        &quot;type&quot;: &quot;GeoCoordinates,&quot;,
        &quot;longitude&quot;: &quot;73.98&quot;,
        &quot;latitude&quot;: &quot;40.75&quot;
      },
      &quot;geoRadius&quot;: {
        &quot;type&quot;: &quot;QuantitativeValue,&quot;,
        &quot;value&quot;: &quot;10,&quot;,
        &quot;unitCode&quot;: &quot;mi,&quot;,
        &quot;unitText&quot;: &quot;miles&quot;
      },
      &quot;box&quot;: &quot;(33.5697,-117.775),(33.6018,-117.707)&quot;
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-347&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;a physical location&quot;,
        &quot;title&quot;: &quot;Place&quot;,
        &quot;x-range&quot;: [
          &quot;Place&quot;,
          &quot;City&quot;,
          &quot;State&quot;,
          &quot;PostalCode&quot;,
          &quot;GeoCircle&quot;,
          &quot;GeoShape&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
            &quot;enum&quot;: [
              &quot;Place&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-345&gt;&quot;
          },
          &quot;address&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;PostalAddress&quot;,
            &quot;description&quot;: &quot;A physical address.&quot;,
            &quot;example&quot;: {
              &quot;type&quot;: &quot;PostalAddress&quot;,
              &quot;name&quot;: &quot;Home&quot;,
              &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
              &quot;postOfficeBoxNumber&quot;: &quot;Box 1234&quot;,
              &quot;addressRegion&quot;: &quot;New Jersey&quot;,
              &quot;addressLocality&quot;: &quot;Gotham City&quot;,
              &quot;postalCode&quot;: &quot;10010&quot;,
              &quot;addressCountry&quot;: &quot;USA&quot;,
              &quot;addressCounty&quot;: &quot;Gotham County&quot;,
              &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-346&gt;&quot;
          },
          &quot;geo&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;a geo shape (circle or box)&quot;,
            &quot;x-range&quot;: [
              &quot;GeoCircle&quot;,
              &quot;GeoShape&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;GeoShape&quot;,
              &quot;geoMidpoint&quot;: {
                &quot;type&quot;: &quot;GeoCoordinates,&quot;,
                &quot;longitude&quot;: &quot;73.98&quot;,
                &quot;latitude&quot;: &quot;40.75&quot;
              },
              &quot;geoRadius&quot;: {
                &quot;type&quot;: &quot;QuantitativeValue,&quot;,
                &quot;value&quot;: &quot;10,&quot;,
                &quot;unitCode&quot;: &quot;mi,&quot;,
                &quot;unitText&quot;: &quot;miles&quot;
              },
              &quot;box&quot;: &quot;(33.5697,-117.775),(33.6018,-117.707)&quot;
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-347&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;Place&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;Service&quot;,
            &quot;description&quot;: &quot;A service provided by an organization.&quot;,
            &quot;x-kind&quot;: &quot;Service&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;Service&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-585&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;name of the service.&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-586&gt;&quot;
              },
              &quot;areaServed&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a physical location&quot;,
                &quot;title&quot;: &quot;Place&quot;,
                &quot;x-range&quot;: [
                  &quot;Place&quot;,
                  &quot;City&quot;,
                  &quot;State&quot;,
                  &quot;PostalCode&quot;,
                  &quot;GeoCircle&quot;,
                  &quot;GeoShape&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                    &quot;enum&quot;: [
                      &quot;Place&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-345&gt;&quot;
                  },
                  &quot;address&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;x-range&quot;: &quot;PostalAddress&quot;,
                    &quot;description&quot;: &quot;A physical address.&quot;,
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PostalAddress&quot;,
                      &quot;name&quot;: &quot;Home&quot;,
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;postOfficeBoxNumber&quot;: &quot;Box 1234&quot;,
                      &quot;addressRegion&quot;: &quot;New Jersey&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;postalCode&quot;: &quot;10010&quot;,
                      &quot;addressCountry&quot;: &quot;USA&quot;,
                      &quot;addressCounty&quot;: &quot;Gotham County&quot;,
                      &quot;addressSubdivision&quot;: &quot;Gotham Heights&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-346&gt;&quot;
                  },
                  &quot;geo&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;a geo shape (circle or box)&quot;,
                    &quot;x-range&quot;: [
                      &quot;GeoCircle&quot;,
                      &quot;GeoShape&quot;
                    ],
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;GeoShape&quot;,
                      &quot;geoMidpoint&quot;: {
                        &quot;type&quot;: &quot;GeoCoordinates,&quot;,
                        &quot;longitude&quot;: &quot;73.98&quot;,
                        &quot;latitude&quot;: &quot;40.75&quot;
                      },
                      &quot;geoRadius&quot;: {
                        &quot;type&quot;: &quot;QuantitativeValue,&quot;,
                        &quot;value&quot;: &quot;10,&quot;,
                        &quot;unitCode&quot;: &quot;mi,&quot;,
                        &quot;unitText&quot;: &quot;miles&quot;
                      },
                      &quot;box&quot;: &quot;(33.5697,-117.775),(33.6018,-117.707)&quot;
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-347&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;Place&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Service&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = geo
required = false
path = areaServed









### Example

```json
{
  "type": "Service",
  "name": "string",
  "areaServed": {
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
}
```

