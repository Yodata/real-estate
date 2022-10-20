# website#searchproperties

```json 
{
  "_json": {
    "messageId": "website#searchproperties",
    "x-scope": "realestate/website#",
    "summary": "a website user has performed a property search",
    "payload": {
      "allOf": [
        {
          "allOf": [
            {
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
            {
              "properties": {
                "data": {
                  "type": "object",
                  "description": "the event payload, typeically a schema.org/Action",
                  "required": [
                    "type",
                    "agent",
                    "object"
                  ],
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)",
                      "x-parser-schema-id": "<anonymous-schema-260>"
                    },
                    "agent": {
                      "type": "object",
                      "description": "the website user who performed the action",
                      "x-range": [
                        "Contact",
                        "Person"
                      ],
                      "example": {
                        "type": "Contact",
                        "name": "Miles Davis",
                        "givenName": "Miles",
                        "familyName": "Davis",
                        "telephone": "067-419-1230",
                        "email": "user@example.com",
                        "identifier": {
                          "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
                        },
                        "additionalProperty": {
                          "userPath": "xxx",
                          "workingWithAgent": true
                        }
                      }
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
                      ]
                    },
                    "instrument": {
                      "type": "object",
                      "description": "website or mobile application",
                      "x-range": [
                        "RealEstateWebsite",
                        "MobileApplication",
                        "Thing"
                      ],
                      "example": {
                        "type": "RealEstateWebsite",
                        "url": "http://gotham-city-realestate.example.com"
                      }
                    },
                    "object": {
                      "type": "object"
                    }
                  }
                }
              },
              "x-parser-schema-id": "<anonymous-schema-94>"
            }
          ],
          "x-parser-schema-id": "<anonymous-schema-84>"
        },
        {
          "properties": {
            "topic": {
              "description": "realestate/website#searchproperties",
              "enum": [
                "realestate/website#searchproperties"
              ]
            },
            "data": {
              "allOf": [
                {
                  "type": "object",
                  "x-range": "SearchAction",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "SearchAction",
                      "enum": [
                        "SearchAction"
                      ]
                    },
                    "agent": {
                      "type": "object",
                      "description": "the user who performed the search"
                    },
                    "object": {
                      "description": "search criteria",
                      "x-range": "PropertySearch"
                    },
                    "result": {
                      "description": "search result",
                      "x-range": "FindAction"
                    }
                  }
                },
                {
                  "properties": {
                    "object": {
                      "title": "PropertySearch",
                      "x-range": "PropertySearch",
                      "type": "object",
                      "description": "property search parameters",
                      "properties": {
                        "type": {
                          "type": "string",
                          "enum": [
                            "PropertySearch"
                          ],
                          "x-parser-schema-id": "<anonymous-schema-426>"
                        },
                        "name": {
                          "type": "string",
                          "description": "name of the search, input by the user or generated automatically",
                          "example": "3+ beds in Gotham City",
                          "x-parser-schema-id": "<anonymous-schema-427>"
                        },
                        "description": {
                          "type": "string",
                          "description": "optional search description input by the user or generated automatically",
                          "example": "((city=Gotham),(Bedrooms=3+))",
                          "x-parser-schema-id": "<anonymous-schema-428>"
                        },
                        "propertyType": {
                          "type": "string",
                          "description": "RESO property type (see range for allowed values)",
                          "x-range": "PropertyType",
                          "minLength": 4,
                          "maxLength": 4,
                          "enum": [
                            "RESI",
                            "RLSE",
                            "RINC",
                            "LAND",
                            "MOBI",
                            "FARM",
                            "COMS",
                            "COML",
                            "BUSO"
                          ],
                          "x-parser-schema-id": "<anonymous-schema-419>"
                        },
                        "propertySubType": {
                          "title": "PropertySubType",
                          "type": "object",
                          "description": "Property sub-type enumeration values derived from RESO data dictionary.",
                          "example": {
                            "propertySubType": "ApartmentPropertyType"
                          },
                          "properties": {
                            "ApartmentPropertyType": {
                              "type": "string",
                              "description": "Apartment",
                              "x-parser-schema-id": "<anonymous-schema-429>"
                            },
                            "BoatSlipPropertyType": {
                              "type": "string",
                              "description": "Boat Slip",
                              "x-parser-schema-id": "<anonymous-schema-430>"
                            },
                            "CabinPropertyType": {
                              "type": "string",
                              "description": "Cabin",
                              "x-parser-schema-id": "<anonymous-schema-431>"
                            },
                            "CondominiumPropertyType": {
                              "type": "string",
                              "description": "Condominium",
                              "x-parser-schema-id": "<anonymous-schema-432>"
                            },
                            "DeededParkingPropertyType": {
                              "type": "string",
                              "description": "Deeded Parking",
                              "x-parser-schema-id": "<anonymous-schema-433>"
                            },
                            "DuplexPropertyType": {
                              "type": "string",
                              "description": "Residential Duplex",
                              "x-parser-schema-id": "<anonymous-schema-434>"
                            },
                            "FarmPropertyType": {
                              "type": "string",
                              "description": "Farm Property Type",
                              "x-parser-schema-id": "<anonymous-schema-435>"
                            },
                            "ManufacturedHomePropertyType": {
                              "type": "string",
                              "description": "Manufactured Home",
                              "x-parser-schema-id": "<anonymous-schema-436>"
                            },
                            "ManufacturedOnLandPropertyType": {
                              "type": "string",
                              "description": "Manufactured Home + Land",
                              "x-parser-schema-id": "<anonymous-schema-437>"
                            },
                            "MobileHomePropertyType": {
                              "type": "string",
                              "description": "Mobile Home",
                              "x-parser-schema-id": "<anonymous-schema-438>"
                            },
                            "OwnYourOwnPropertyType": {
                              "type": "string",
                              "description": "RESO Own Your Own Property",
                              "x-parser-schema-id": "<anonymous-schema-439>"
                            },
                            "QuadruplexPropertyType": {
                              "type": "string",
                              "description": "A residential property with four units",
                              "x-parser-schema-id": "<anonymous-schema-440>"
                            },
                            "RanchPropertyType": {
                              "type": "string",
                              "description": "A Ranch",
                              "x-parser-schema-id": "<anonymous-schema-441>"
                            },
                            "SingleFamilyPropertyType": {
                              "type": "string",
                              "description": "Single Family Residence",
                              "x-parser-schema-id": "<anonymous-schema-442>"
                            },
                            "StockCooperativePropertyType": {
                              "type": "string",
                              "description": "Stock Co-op.",
                              "x-parser-schema-id": "<anonymous-schema-443>"
                            },
                            "TimesharePropertyType": {
                              "type": "string",
                              "description": "Timeshare",
                              "x-parser-schema-id": "<anonymous-schema-444>"
                            },
                            "TownhousePropertyType": {
                              "type": "string",
                              "description": "Townhouse",
                              "x-parser-schema-id": "<anonymous-schema-445>"
                            },
                            "TriplexPropertyType": {
                              "type": "string",
                              "description": "A residential property with 3 separate units",
                              "x-parser-schema-id": "<anonymous-schema-446>"
                            },
                            "AgriculturePropertyType": {
                              "type": "string",
                              "description": "An agriculture property.",
                              "x-parser-schema-id": "<anonymous-schema-447>"
                            },
                            "BusinessPropertyType": {
                              "type": "string",
                              "description": "a residential property zoned for business operation",
                              "x-parser-schema-id": "<anonymous-schema-448>"
                            },
                            "HotelMotelPropertyType": {
                              "type": "string",
                              "description": "Hotel property for sale.",
                              "x-parser-schema-id": "<anonymous-schema-449>"
                            },
                            "IndustrialPropertyType": {
                              "type": "string",
                              "description": "Industrial property",
                              "x-parser-schema-id": "<anonymous-schema-450>"
                            },
                            "MixedUsePropertyType": {
                              "type": "string",
                              "description": "Residential/Commercial property",
                              "x-parser-schema-id": "<anonymous-schema-451>"
                            },
                            "MultiFamilyPropertyType": {
                              "type": "string",
                              "description": "A single building with multiple units",
                              "x-parser-schema-id": "<anonymous-schema-452>"
                            },
                            "OfficePropertyType": {
                              "type": "string",
                              "description": "An office.",
                              "x-parser-schema-id": "<anonymous-schema-453>"
                            },
                            "RetailPropertyType": {
                              "type": "string",
                              "description": "Retail property",
                              "x-parser-schema-id": "<anonymous-schema-454>"
                            },
                            "UnimprovedLandPropertyType": {
                              "type": "string",
                              "description": "Land for sale",
                              "x-parser-schema-id": "<anonymous-schema-455>"
                            },
                            "WarehousePropertyType": {
                              "type": "string",
                              "description": "A Warehouse property type.",
                              "x-parser-schema-id": "<anonymous-schema-456>"
                            }
                          },
                          "x-parser-schema-id": "PropertySubType"
                        },
                        "listingStatus": {
                          "type": "string",
                          "description": "RESO Listing Status Code",
                          "x-range": [
                            "ActiveListingStatus",
                            "PendingListingStatus",
                            "SoldListingStatus",
                            "ContingentListingStatus"
                          ],
                          "example": "ActiveListingStatus,ContingentListingStatus",
                          "x-parser-schema-id": "<anonymous-schema-457>"
                        },
                        "location": {
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
                        "price": {
                          "type": "object",
                          "title": "PriceSpecification",
                          "x-range": "PriceSpecification",
                          "description": "a price offered for transfer of ownership of an item",
                          "properties": {
                            "type": {
                              "type": "string",
                              "description": "PriceSpecification",
                              "enum": [
                                "PriceSpecification"
                              ],
                              "x-parser-schema-id": "<anonymous-schema-376>"
                            },
                            "minPrice": {
                              "type": "number",
                              "description": "the low price offered if price is a range.",
                              "example": 75000,
                              "x-parser-schema-id": "<anonymous-schema-377>"
                            },
                            "maxPrice": {
                              "type": "number",
                              "description": "the high price offered if price is a range.",
                              "example": 100000,
                              "x-parser-schema-id": "<anonymous-schema-378>"
                            },
                            "price": {
                              "type": "number",
                              "description": "the offer price.",
                              "example": 75000,
                              "x-parser-schema-id": "<anonymous-schema-379>"
                            },
                            "priceCurrency": {
                              "type": "string",
                              "description": "use ISO4217",
                              "example": "USD",
                              "x-parser-schema-id": "<anonymous-schema-380>"
                            }
                          },
                          "x-parser-schema-id": "<anonymous-schema-458>"
                        },
                        "bedrooms": {
                          "description": "number of bedrooms (range)",
                          "type": "object",
                          "x-range": "QuantitativeValue",
                          "example": {
                            "type": "QuantitativeValue",
                            "minValue": 0,
                            "maxValue": 4,
                            "unitCode": "BD",
                            "unitText": "Bedrooms"
                          },
                          "x-parser-schema-id": "<anonymous-schema-459>"
                        },
                        "bathrooms": {
                          "description": "number of bathrooms (range)",
                          "type": "object",
                          "x-range": "QuantitativeValue",
                          "example": {
                            "type": "QuantitativeValue",
                            "minValue": 2,
                            "unitCode": "BA",
                            "unitText": "Bathrooms"
                          },
                          "x-parser-schema-id": "<anonymous-schema-460>"
                        },
                        "livingArea": {
                          "description": "property indoor space",
                          "type": "object",
                          "x-range": "QuantitativeValue",
                          "example": {
                            "type": "QuantitativeValue",
                            "minValue": 1500,
                            "unitCode": "SqFt",
                            "unitText": "Square Feet"
                          },
                          "x-parser-schema-id": "<anonymous-schema-461>"
                        },
                        "lotSize": {
                          "description": "outdoor space minValue, maxValue",
                          "type": "object",
                          "x-range": "QuantitativeValue",
                          "example": {
                            "type": "QuantitativeValue",
                            "minValue": 0.5,
                            "unitCode": "AC",
                            "unitText": "Acres"
                          },
                          "x-parser-schema-id": "<anonymous-schema-462>"
                        }
                      },
                      "x-parser-schema-id": "PropertySearch"
                    },
                    "result": {
                      "x-range": "FindAction",
                      "description": "the result of a search action",
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "enum": [
                            "FindAction"
                          ]
                        },
                        "object": {
                          "description": "the items found",
                          "type": "array",
                          "example": [
                            {
                              "type": "PropertyListing",
                              "url": "http://example.com/listing/123"
                            },
                            {
                              "type": "PropertyListing",
                              "url": "http://example.com/listing/234"
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "x-parser-schema-id": "<anonymous-schema-109>"
        }
      ],
      "x-parser-schema-id": "<anonymous-schema-108>"
    },
    "x-parser-original-schema-format": "application/vnd.aai.asyncapi;version=2.4.0",
    "x-parser-original-payload": {
      "allOf": [
        {
          "allOf": [
            {
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
                  "description": "the event topic which determines the event.data schema"
                },
                "time": {
                  "type": "string",
                  "format": "date-time",
                  "description": "date & time the event was produced"
                },
                "agent": {
                  "type": "string",
                  "format": "uri",
                  "description": "the user,tema or organization who sent the event",
                  "example": "https://agentid.example.com/profile/card#me"
                },
                "instrument": {
                  "type": "string",
                  "format": "uri",
                  "description": "the service which created the event",
                  "example": "https://vendorid.example.com/profile/card#me"
                },
                "source": {
                  "type": "string",
                  "format": "uri",
                  "description": "an agent, team or organization who received a copy of the event",
                  "example": "https://companyid.example.com/profile/card#me"
                },
                "originalRecipient": {
                  "type": "string",
                  "format": "uri",
                  "description": "the original recipient of the event with this id",
                  "example": "https://agentid.example.com/profile/card#me"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the shared identifier of the event, akd the event id",
                  "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx"
                },
                "@id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the url of your instance of the event in your inbox",
                  "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx"
                },
                "data": {
                  "type": "object",
                  "description": "event payload, typically an Action"
                }
              }
            },
            {
              "properties": {
                "data": {
                  "type": "object",
                  "description": "the event payload, typeically a schema.org/Action",
                  "required": [
                    "type",
                    "agent",
                    "object"
                  ],
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "The item type (Linked-Data @type)"
                    },
                    "agent": {
                      "type": "object",
                      "description": "the website user who performed the action",
                      "x-range": [
                        "Contact",
                        "Person"
                      ],
                      "example": {
                        "type": "Contact",
                        "name": "Miles Davis",
                        "givenName": "Miles",
                        "familyName": "Davis",
                        "telephone": "067-419-1230",
                        "email": "user@example.com",
                        "identifier": {
                          "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
                        },
                        "additionalProperty": {
                          "userPath": "xxx",
                          "workingWithAgent": true
                        }
                      }
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
                        "type": "object"
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
                      ]
                    },
                    "instrument": {
                      "type": "object",
                      "description": "website or mobile application",
                      "x-range": [
                        "RealEstateWebsite",
                        "MobileApplication",
                        "Thing"
                      ],
                      "example": {
                        "type": "RealEstateWebsite",
                        "url": "http://gotham-city-realestate.example.com"
                      }
                    },
                    "object": {
                      "type": "object"
                    }
                  }
                }
              }
            }
          ]
        },
        {
          "properties": {
            "topic": {
              "description": "realestate/website#searchproperties",
              "enum": [
                "realestate/website#searchproperties"
              ]
            },
            "data": {
              "allOf": [
                {
                  "type": "object",
                  "x-range": "SearchAction",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "SearchAction",
                      "enum": [
                        "SearchAction"
                      ]
                    },
                    "agent": {
                      "type": "object",
                      "description": "the user who performed the search"
                    },
                    "object": {
                      "description": "search criteria",
                      "x-range": "PropertySearch"
                    },
                    "result": {
                      "description": "search result",
                      "x-range": "FindAction"
                    }
                  }
                },
                {
                  "properties": {
                    "object": {
                      "title": "PropertySearch",
                      "x-range": "PropertySearch",
                      "type": "object",
                      "description": "property search parameters",
                      "properties": {
                        "type": {
                          "type": "string",
                          "enum": [
                            "PropertySearch"
                          ]
                        },
                        "name": {
                          "type": "string",
                          "description": "name of the search, input by the user or generated automatically",
                          "example": "3+ beds in Gotham City"
                        },
                        "description": {
                          "type": "string",
                          "description": "optional search description input by the user or generated automatically",
                          "example": "((city=Gotham),(Bedrooms=3+))"
                        },
                        "propertyType": {
                          "type": "string",
                          "description": "RESO property type (see range for allowed values)",
                          "x-range": "PropertyType",
                          "minLength": 4,
                          "maxLength": 4,
                          "enum": [
                            "RESI",
                            "RLSE",
                            "RINC",
                            "LAND",
                            "MOBI",
                            "FARM",
                            "COMS",
                            "COML",
                            "BUSO"
                          ]
                        },
                        "propertySubType": {
                          "title": "PropertySubType",
                          "type": "object",
                          "description": "Property sub-type enumeration values derived from RESO data dictionary.",
                          "example": {
                            "propertySubType": "ApartmentPropertyType"
                          },
                          "properties": {
                            "ApartmentPropertyType": {
                              "type": "string",
                              "description": "Apartment"
                            },
                            "BoatSlipPropertyType": {
                              "type": "string",
                              "description": "Boat Slip"
                            },
                            "CabinPropertyType": {
                              "type": "string",
                              "description": "Cabin"
                            },
                            "CondominiumPropertyType": {
                              "type": "string",
                              "description": "Condominium"
                            },
                            "DeededParkingPropertyType": {
                              "type": "string",
                              "description": "Deeded Parking"
                            },
                            "DuplexPropertyType": {
                              "type": "string",
                              "description": "Residential Duplex"
                            },
                            "FarmPropertyType": {
                              "type": "string",
                              "description": "Farm Property Type"
                            },
                            "ManufacturedHomePropertyType": {
                              "type": "string",
                              "description": "Manufactured Home"
                            },
                            "ManufacturedOnLandPropertyType": {
                              "type": "string",
                              "description": "Manufactured Home + Land"
                            },
                            "MobileHomePropertyType": {
                              "type": "string",
                              "description": "Mobile Home"
                            },
                            "OwnYourOwnPropertyType": {
                              "type": "string",
                              "description": "RESO Own Your Own Property"
                            },
                            "QuadruplexPropertyType": {
                              "type": "string",
                              "description": "A residential property with four units"
                            },
                            "RanchPropertyType": {
                              "type": "string",
                              "description": "A Ranch"
                            },
                            "SingleFamilyPropertyType": {
                              "type": "string",
                              "description": "Single Family Residence"
                            },
                            "StockCooperativePropertyType": {
                              "type": "string",
                              "description": "Stock Co-op."
                            },
                            "TimesharePropertyType": {
                              "type": "string",
                              "description": "Timeshare"
                            },
                            "TownhousePropertyType": {
                              "type": "string",
                              "description": "Townhouse"
                            },
                            "TriplexPropertyType": {
                              "type": "string",
                              "description": "A residential property with 3 separate units"
                            },
                            "AgriculturePropertyType": {
                              "type": "string",
                              "description": "An agriculture property."
                            },
                            "BusinessPropertyType": {
                              "type": "string",
                              "description": "a residential property zoned for business operation"
                            },
                            "HotelMotelPropertyType": {
                              "type": "string",
                              "description": "Hotel property for sale."
                            },
                            "IndustrialPropertyType": {
                              "type": "string",
                              "description": "Industrial property"
                            },
                            "MixedUsePropertyType": {
                              "type": "string",
                              "description": "Residential/Commercial property"
                            },
                            "MultiFamilyPropertyType": {
                              "type": "string",
                              "description": "A single building with multiple units"
                            },
                            "OfficePropertyType": {
                              "type": "string",
                              "description": "An office."
                            },
                            "RetailPropertyType": {
                              "type": "string",
                              "description": "Retail property"
                            },
                            "UnimprovedLandPropertyType": {
                              "type": "string",
                              "description": "Land for sale"
                            },
                            "WarehousePropertyType": {
                              "type": "string",
                              "description": "A Warehouse property type."
                            }
                          }
                        },
                        "listingStatus": {
                          "type": "string",
                          "description": "RESO Listing Status Code",
                          "x-range": [
                            "ActiveListingStatus",
                            "PendingListingStatus",
                            "SoldListingStatus",
                            "ContingentListingStatus"
                          ],
                          "example": "ActiveListingStatus,ContingentListingStatus"
                        },
                        "location": {
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
                              ]
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
                              }
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
                              }
                            }
                          }
                        },
                        "price": {
                          "type": "object",
                          "title": "PriceSpecification",
                          "x-range": "PriceSpecification",
                          "description": "a price offered for transfer of ownership of an item",
                          "properties": {
                            "type": {
                              "type": "string",
                              "description": "PriceSpecification",
                              "enum": [
                                "PriceSpecification"
                              ]
                            },
                            "minPrice": {
                              "type": "number",
                              "description": "the low price offered if price is a range.",
                              "example": 75000
                            },
                            "maxPrice": {
                              "type": "number",
                              "description": "the high price offered if price is a range.",
                              "example": 100000
                            },
                            "price": {
                              "type": "number",
                              "description": "the offer price.",
                              "example": 75000
                            },
                            "priceCurrency": {
                              "type": "string",
                              "description": "use ISO4217",
                              "example": "USD"
                            }
                          }
                        },
                        "bedrooms": {
                          "description": "number of bedrooms (range)",
                          "type": "object",
                          "x-range": "QuantitativeValue",
                          "example": {
                            "type": "QuantitativeValue",
                            "minValue": 0,
                            "maxValue": 4,
                            "unitCode": "BD",
                            "unitText": "Bedrooms"
                          }
                        },
                        "bathrooms": {
                          "description": "number of bathrooms (range)",
                          "type": "object",
                          "x-range": "QuantitativeValue",
                          "example": {
                            "type": "QuantitativeValue",
                            "minValue": 2,
                            "unitCode": "BA",
                            "unitText": "Bathrooms"
                          }
                        },
                        "livingArea": {
                          "description": "property indoor space",
                          "type": "object",
                          "x-range": "QuantitativeValue",
                          "example": {
                            "type": "QuantitativeValue",
                            "minValue": 1500,
                            "unitCode": "SqFt",
                            "unitText": "Square Feet"
                          }
                        },
                        "lotSize": {
                          "description": "outdoor space minValue, maxValue",
                          "type": "object",
                          "x-range": "QuantitativeValue",
                          "example": {
                            "type": "QuantitativeValue",
                            "minValue": 0.5,
                            "unitCode": "AC",
                            "unitText": "Acres"
                          }
                        }
                      }
                    },
                    "result": {
                      "x-range": "FindAction",
                      "description": "the result of a search action",
                      "type": "object",
                      "properties": {
                        "type": {
                          "type": "string",
                          "enum": [
                            "FindAction"
                          ]
                        },
                        "object": {
                          "description": "the items found",
                          "type": "array",
                          "example": [
                            {
                              "type": "PropertyListing",
                              "url": "http://example.com/listing/123"
                            },
                            {
                              "type": "PropertyListing",
                              "url": "http://example.com/listing/234"
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    "schemaFormat": "application/vnd.aai.asyncapi;version=2.4.0",
    "x-parser-message-parsed": true,
    "x-parser-message-name": "<anonymous-message-9>"
  }
}
```