

---
title: GeoCircle
---

{
  "type": {
    "_json": {
      "type": "string",
      "enum": [
        "GeoCircle"
      ],
      "x-parser-schema-id": "<anonymous-schema-280>"
    },
    "options": {
      "parent": {
        "_json": {
          "x-range": "GeoCircle",
          "type": "object",
          "title": "GeoCircle",
          "description": "a circle with a mid point and radius",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "GeoCircle"
              ],
              "x-parser-schema-id": "<anonymous-schema-280>"
            },
            "geoMidpoint": {
              "title": "GeoCoordinates",
              "type": "object",
              "description": "a lat/long point.",
              "x-range": "GeoCoordinates",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "GeoCordinates",
                  "enum": [
                    "GeoCoordinates"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-281>"
                },
                "longitude": {
                  "type": "number",
                  "description": "The longitude of a location.",
                  "x-title": "longitude",
                  "example": 73.98,
                  "x-parser-schema-id": "<anonymous-schema-282>"
                },
                "latitude": {
                  "type": "number",
                  "description": "The latitude of a location.",
                  "x-title": "latitude",
                  "example": 40.75,
                  "x-parser-schema-id": "<anonymous-schema-283>"
                }
              },
              "x-parser-schema-id": "GeoCoordinates"
            },
            "geoRadius": {
              "title": "geoRadius",
              "type": "object",
              "x-range": "QuantitativeValue",
              "description": "the radius of a geo-shape in meters if unitCode is not indicated",
              "example": {
                "type": "QuantitativeValue",
                "value": "10",
                "unitCode": "mi",
                "unitText": "miles"
              },
              "x-parser-schema-id": "<anonymous-schema-284>"
            }
          },
          "x-parser-schema-id": "GeoCircle"
        },
        "options": {}
      }
    }
  },
  "geoMidpoint": {
    "_json": {
      "title": "GeoCoordinates",
      "type": "object",
      "description": "a lat/long point.",
      "x-range": "GeoCoordinates",
      "properties": {
        "type": {
          "type": "string",
          "description": "GeoCordinates",
          "enum": [
            "GeoCoordinates"
          ],
          "x-parser-schema-id": "<anonymous-schema-281>"
        },
        "longitude": {
          "type": "number",
          "description": "The longitude of a location.",
          "x-title": "longitude",
          "example": 73.98,
          "x-parser-schema-id": "<anonymous-schema-282>"
        },
        "latitude": {
          "type": "number",
          "description": "The latitude of a location.",
          "x-title": "latitude",
          "example": 40.75,
          "x-parser-schema-id": "<anonymous-schema-283>"
        }
      },
      "x-parser-schema-id": "GeoCoordinates"
    },
    "options": {
      "parent": {
        "_json": {
          "x-range": "GeoCircle",
          "type": "object",
          "title": "GeoCircle",
          "description": "a circle with a mid point and radius",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "GeoCircle"
              ],
              "x-parser-schema-id": "<anonymous-schema-280>"
            },
            "geoMidpoint": {
              "title": "GeoCoordinates",
              "type": "object",
              "description": "a lat/long point.",
              "x-range": "GeoCoordinates",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "GeoCordinates",
                  "enum": [
                    "GeoCoordinates"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-281>"
                },
                "longitude": {
                  "type": "number",
                  "description": "The longitude of a location.",
                  "x-title": "longitude",
                  "example": 73.98,
                  "x-parser-schema-id": "<anonymous-schema-282>"
                },
                "latitude": {
                  "type": "number",
                  "description": "The latitude of a location.",
                  "x-title": "latitude",
                  "example": 40.75,
                  "x-parser-schema-id": "<anonymous-schema-283>"
                }
              },
              "x-parser-schema-id": "GeoCoordinates"
            },
            "geoRadius": {
              "title": "geoRadius",
              "type": "object",
              "x-range": "QuantitativeValue",
              "description": "the radius of a geo-shape in meters if unitCode is not indicated",
              "example": {
                "type": "QuantitativeValue",
                "value": "10",
                "unitCode": "mi",
                "unitText": "miles"
              },
              "x-parser-schema-id": "<anonymous-schema-284>"
            }
          },
          "x-parser-schema-id": "GeoCircle"
        },
        "options": {}
      }
    }
  },
  "geoRadius": {
    "_json": {
      "title": "geoRadius",
      "type": "object",
      "x-range": "QuantitativeValue",
      "description": "the radius of a geo-shape in meters if unitCode is not indicated",
      "example": {
        "type": "QuantitativeValue",
        "value": "10",
        "unitCode": "mi",
        "unitText": "miles"
      },
      "x-parser-schema-id": "<anonymous-schema-284>"
    },
    "options": {
      "parent": {
        "_json": {
          "x-range": "GeoCircle",
          "type": "object",
          "title": "GeoCircle",
          "description": "a circle with a mid point and radius",
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "GeoCircle"
              ],
              "x-parser-schema-id": "<anonymous-schema-280>"
            },
            "geoMidpoint": {
              "title": "GeoCoordinates",
              "type": "object",
              "description": "a lat/long point.",
              "x-range": "GeoCoordinates",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "GeoCordinates",
                  "enum": [
                    "GeoCoordinates"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-281>"
                },
                "longitude": {
                  "type": "number",
                  "description": "The longitude of a location.",
                  "x-title": "longitude",
                  "example": 73.98,
                  "x-parser-schema-id": "<anonymous-schema-282>"
                },
                "latitude": {
                  "type": "number",
                  "description": "The latitude of a location.",
                  "x-title": "latitude",
                  "example": 40.75,
                  "x-parser-schema-id": "<anonymous-schema-283>"
                }
              },
              "x-parser-schema-id": "GeoCoordinates"
            },
            "geoRadius": {
              "title": "geoRadius",
              "type": "object",
              "x-range": "QuantitativeValue",
              "description": "the radius of a geo-shape in meters if unitCode is not indicated",
              "example": {
                "type": "QuantitativeValue",
                "value": "10",
                "unitCode": "mi",
                "unitText": "miles"
              },
              "x-parser-schema-id": "<anonymous-schema-284>"
            }
          },
          "x-parser-schema-id": "GeoCircle"
        },
        "options": {}
      }
    }
  }
}


# GeoCircle

a circle with a mid point and radius



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "enum": [
      "GeoCircle"
    ],
    "x-parser-schema-id": "<anonymous-schema-280>"
  },
  "options": {
    "parent": {
      "_json": {
        "x-range": "GeoCircle",
        "type": "object",
        "title": "GeoCircle",
        "description": "a circle with a mid point and radius",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "GeoCircle"
            ],
            "x-parser-schema-id": "<anonymous-schema-280>"
          },
          "geoMidpoint": {
            "title": "GeoCoordinates",
            "type": "object",
            "description": "a lat/long point.",
            "x-range": "GeoCoordinates",
            "properties": {
              "type": {
                "type": "string",
                "description": "GeoCordinates",
                "enum": [
                  "GeoCoordinates"
                ],
                "x-parser-schema-id": "<anonymous-schema-281>"
              },
              "longitude": {
                "type": "number",
                "description": "The longitude of a location.",
                "x-title": "longitude",
                "example": 73.98,
                "x-parser-schema-id": "<anonymous-schema-282>"
              },
              "latitude": {
                "type": "number",
                "description": "The latitude of a location.",
                "x-title": "latitude",
                "example": 40.75,
                "x-parser-schema-id": "<anonymous-schema-283>"
              }
            },
            "x-parser-schema-id": "GeoCoordinates"
          },
          "geoRadius": {
            "title": "geoRadius",
            "type": "object",
            "x-range": "QuantitativeValue",
            "description": "the radius of a geo-shape in meters if unitCode is not indicated",
            "example": {
              "type": "QuantitativeValue",
              "value": "10",
              "unitCode": "mi",
              "unitText": "miles"
            },
            "x-parser-schema-id": "<anonymous-schema-284>"
          }
        },
        "x-parser-schema-id": "GeoCircle"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "title": "GeoCoordinates",
    "type": "object",
    "description": "a lat/long point.",
    "x-range": "GeoCoordinates",
    "properties": {
      "type": {
        "type": "string",
        "description": "GeoCordinates",
        "enum": [
          "GeoCoordinates"
        ],
        "x-parser-schema-id": "<anonymous-schema-281>"
      },
      "longitude": {
        "type": "number",
        "description": "The longitude of a location.",
        "x-title": "longitude",
        "example": 73.98,
        "x-parser-schema-id": "<anonymous-schema-282>"
      },
      "latitude": {
        "type": "number",
        "description": "The latitude of a location.",
        "x-title": "latitude",
        "example": 40.75,
        "x-parser-schema-id": "<anonymous-schema-283>"
      }
    },
    "x-parser-schema-id": "GeoCoordinates"
  },
  "options": {
    "parent": {
      "_json": {
        "x-range": "GeoCircle",
        "type": "object",
        "title": "GeoCircle",
        "description": "a circle with a mid point and radius",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "GeoCircle"
            ],
            "x-parser-schema-id": "<anonymous-schema-280>"
          },
          "geoMidpoint": {
            "title": "GeoCoordinates",
            "type": "object",
            "description": "a lat/long point.",
            "x-range": "GeoCoordinates",
            "properties": {
              "type": {
                "type": "string",
                "description": "GeoCordinates",
                "enum": [
                  "GeoCoordinates"
                ],
                "x-parser-schema-id": "<anonymous-schema-281>"
              },
              "longitude": {
                "type": "number",
                "description": "The longitude of a location.",
                "x-title": "longitude",
                "example": 73.98,
                "x-parser-schema-id": "<anonymous-schema-282>"
              },
              "latitude": {
                "type": "number",
                "description": "The latitude of a location.",
                "x-title": "latitude",
                "example": 40.75,
                "x-parser-schema-id": "<anonymous-schema-283>"
              }
            },
            "x-parser-schema-id": "GeoCoordinates"
          },
          "geoRadius": {
            "title": "geoRadius",
            "type": "object",
            "x-range": "QuantitativeValue",
            "description": "the radius of a geo-shape in meters if unitCode is not indicated",
            "example": {
              "type": "QuantitativeValue",
              "value": "10",
              "unitCode": "mi",
              "unitText": "miles"
            },
            "x-parser-schema-id": "<anonymous-schema-284>"
          }
        },
        "x-parser-schema-id": "GeoCircle"
      },
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;GeoCordinates&quot;,
    &quot;enum&quot;: [
      &quot;GeoCoordinates&quot;
    ],
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-281&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;GeoCoordinates&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;a lat/long point.&quot;,
        &quot;x-range&quot;: &quot;GeoCoordinates&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;GeoCordinates&quot;,
            &quot;enum&quot;: [
              &quot;GeoCoordinates&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-281&gt;&quot;
          },
          &quot;longitude&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;The longitude of a location.&quot;,
            &quot;x-title&quot;: &quot;longitude&quot;,
            &quot;example&quot;: 73.98,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
          },
          &quot;latitude&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;The latitude of a location.&quot;,
            &quot;x-title&quot;: &quot;latitude&quot;,
            &quot;example&quot;: 40.75,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;GeoCoordinates&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;x-range&quot;: &quot;GeoCircle&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;GeoCircle&quot;,
            &quot;description&quot;: &quot;a circle with a mid point and radius&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;GeoCircle&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-280&gt;&quot;
              },
              &quot;geoMidpoint&quot;: {
                &quot;title&quot;: &quot;GeoCoordinates&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a lat/long point.&quot;,
                &quot;x-range&quot;: &quot;GeoCoordinates&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;GeoCordinates&quot;,
                    &quot;enum&quot;: [
                      &quot;GeoCoordinates&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-281&gt;&quot;
                  },
                  &quot;longitude&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;The longitude of a location.&quot;,
                    &quot;x-title&quot;: &quot;longitude&quot;,
                    &quot;example&quot;: 73.98,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
                  },
                  &quot;latitude&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;The latitude of a location.&quot;,
                    &quot;x-title&quot;: &quot;latitude&quot;,
                    &quot;example&quot;: 40.75,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;GeoCoordinates&quot;
              },
              &quot;geoRadius&quot;: {
                &quot;title&quot;: &quot;geoRadius&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                &quot;description&quot;: &quot;the radius of a geo-shape in meters if unitCode is not indicated&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;QuantitativeValue&quot;,
                  &quot;value&quot;: &quot;10&quot;,
                  &quot;unitCode&quot;: &quot;mi&quot;,
                  &quot;unitText&quot;: &quot;miles&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-284&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;GeoCircle&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = type
required = false
path = geoMidpoint



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;number&quot;,
    &quot;description&quot;: &quot;The longitude of a location.&quot;,
    &quot;x-title&quot;: &quot;longitude&quot;,
    &quot;example&quot;: 73.98,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;GeoCoordinates&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;a lat/long point.&quot;,
        &quot;x-range&quot;: &quot;GeoCoordinates&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;GeoCordinates&quot;,
            &quot;enum&quot;: [
              &quot;GeoCoordinates&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-281&gt;&quot;
          },
          &quot;longitude&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;The longitude of a location.&quot;,
            &quot;x-title&quot;: &quot;longitude&quot;,
            &quot;example&quot;: 73.98,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
          },
          &quot;latitude&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;The latitude of a location.&quot;,
            &quot;x-title&quot;: &quot;latitude&quot;,
            &quot;example&quot;: 40.75,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;GeoCoordinates&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;x-range&quot;: &quot;GeoCircle&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;GeoCircle&quot;,
            &quot;description&quot;: &quot;a circle with a mid point and radius&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;GeoCircle&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-280&gt;&quot;
              },
              &quot;geoMidpoint&quot;: {
                &quot;title&quot;: &quot;GeoCoordinates&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a lat/long point.&quot;,
                &quot;x-range&quot;: &quot;GeoCoordinates&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;GeoCordinates&quot;,
                    &quot;enum&quot;: [
                      &quot;GeoCoordinates&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-281&gt;&quot;
                  },
                  &quot;longitude&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;The longitude of a location.&quot;,
                    &quot;x-title&quot;: &quot;longitude&quot;,
                    &quot;example&quot;: 73.98,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
                  },
                  &quot;latitude&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;The latitude of a location.&quot;,
                    &quot;x-title&quot;: &quot;latitude&quot;,
                    &quot;example&quot;: 40.75,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;GeoCoordinates&quot;
              },
              &quot;geoRadius&quot;: {
                &quot;title&quot;: &quot;geoRadius&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                &quot;description&quot;: &quot;the radius of a geo-shape in meters if unitCode is not indicated&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;QuantitativeValue&quot;,
                  &quot;value&quot;: &quot;10&quot;,
                  &quot;unitCode&quot;: &quot;mi&quot;,
                  &quot;unitText&quot;: &quot;miles&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-284&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;GeoCircle&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = longitude
required = false
path = geoMidpoint



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;number&quot;,
    &quot;description&quot;: &quot;The latitude of a location.&quot;,
    &quot;x-title&quot;: &quot;latitude&quot;,
    &quot;example&quot;: 40.75,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;GeoCoordinates&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;a lat/long point.&quot;,
        &quot;x-range&quot;: &quot;GeoCoordinates&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;GeoCordinates&quot;,
            &quot;enum&quot;: [
              &quot;GeoCoordinates&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-281&gt;&quot;
          },
          &quot;longitude&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;The longitude of a location.&quot;,
            &quot;x-title&quot;: &quot;longitude&quot;,
            &quot;example&quot;: 73.98,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
          },
          &quot;latitude&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;The latitude of a location.&quot;,
            &quot;x-title&quot;: &quot;latitude&quot;,
            &quot;example&quot;: 40.75,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;GeoCoordinates&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;x-range&quot;: &quot;GeoCircle&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;GeoCircle&quot;,
            &quot;description&quot;: &quot;a circle with a mid point and radius&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;GeoCircle&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-280&gt;&quot;
              },
              &quot;geoMidpoint&quot;: {
                &quot;title&quot;: &quot;GeoCoordinates&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a lat/long point.&quot;,
                &quot;x-range&quot;: &quot;GeoCoordinates&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;GeoCordinates&quot;,
                    &quot;enum&quot;: [
                      &quot;GeoCoordinates&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-281&gt;&quot;
                  },
                  &quot;longitude&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;The longitude of a location.&quot;,
                    &quot;x-title&quot;: &quot;longitude&quot;,
                    &quot;example&quot;: 73.98,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
                  },
                  &quot;latitude&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;The latitude of a location.&quot;,
                    &quot;x-title&quot;: &quot;latitude&quot;,
                    &quot;example&quot;: 40.75,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;GeoCoordinates&quot;
              },
              &quot;geoRadius&quot;: {
                &quot;title&quot;: &quot;geoRadius&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                &quot;description&quot;: &quot;the radius of a geo-shape in meters if unitCode is not indicated&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;QuantitativeValue&quot;,
                  &quot;value&quot;: &quot;10&quot;,
                  &quot;unitCode&quot;: &quot;mi&quot;,
                  &quot;unitText&quot;: &quot;miles&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-284&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;GeoCircle&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = latitude
required = false
path = geoMidpoint





{
  "_json": {
    "title": "geoRadius",
    "type": "object",
    "x-range": "QuantitativeValue",
    "description": "the radius of a geo-shape in meters if unitCode is not indicated",
    "example": {
      "type": "QuantitativeValue",
      "value": "10",
      "unitCode": "mi",
      "unitText": "miles"
    },
    "x-parser-schema-id": "<anonymous-schema-284>"
  },
  "options": {
    "parent": {
      "_json": {
        "x-range": "GeoCircle",
        "type": "object",
        "title": "GeoCircle",
        "description": "a circle with a mid point and radius",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "GeoCircle"
            ],
            "x-parser-schema-id": "<anonymous-schema-280>"
          },
          "geoMidpoint": {
            "title": "GeoCoordinates",
            "type": "object",
            "description": "a lat/long point.",
            "x-range": "GeoCoordinates",
            "properties": {
              "type": {
                "type": "string",
                "description": "GeoCordinates",
                "enum": [
                  "GeoCoordinates"
                ],
                "x-parser-schema-id": "<anonymous-schema-281>"
              },
              "longitude": {
                "type": "number",
                "description": "The longitude of a location.",
                "x-title": "longitude",
                "example": 73.98,
                "x-parser-schema-id": "<anonymous-schema-282>"
              },
              "latitude": {
                "type": "number",
                "description": "The latitude of a location.",
                "x-title": "latitude",
                "example": 40.75,
                "x-parser-schema-id": "<anonymous-schema-283>"
              }
            },
            "x-parser-schema-id": "GeoCoordinates"
          },
          "geoRadius": {
            "title": "geoRadius",
            "type": "object",
            "x-range": "QuantitativeValue",
            "description": "the radius of a geo-shape in meters if unitCode is not indicated",
            "example": {
              "type": "QuantitativeValue",
              "value": "10",
              "unitCode": "mi",
              "unitText": "miles"
            },
            "x-parser-schema-id": "<anonymous-schema-284>"
          }
        },
        "x-parser-schema-id": "GeoCircle"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "GeoCircle",
  "geoMidpoint": {
    "type": "GeoCoordinates",
    "longitude": 73.98,
    "latitude": 40.75
  },
  "geoRadius": {
    "type": "QuantitativeValue",
    "value": "10",
    "unitCode": "mi",
    "unitText": "miles"
  }
}
```

