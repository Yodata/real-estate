# website#sharepropertyvaluereport

```json 
{
  "_json": {
    "messageId": "website#sharepropertyvaluereport",
    "x-scope": "realestate/website#",
    "summary": "agent shared object with recipient",
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
              "description": "realestate/website#sharepropertyvaluereport",
              "enum": [
                "realestate/website#sharepropertyvaluereport"
              ]
            },
            "data": {
              "properties": {
                "type": {
                  "enum": [
                    "ShareAction"
                  ]
                },
                "object": {
                  "type": "object",
                  "title": "PropertyValueReport",
                  "x-range": "PropertyValueReport",
                  "description": "an automated property value esmation",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "PropertyValueReport",
                      "enum": [
                        "PropertyValueReport"
                      ],
                      "x-parser-schema-id": "<anonymous-schema-474>"
                    },
                    "name": {
                      "type": "string",
                      "description": "document name or title",
                      "example": "LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...",
                      "x-parser-schema-id": "<anonymous-schema-475>"
                    },
                    "dateCreated": {
                      "description": "The date on which the item was created.",
                      "type": "string",
                      "format": "date-time",
                      "x-parser-schema-id": "<anonymous-schema-211>"
                    },
                    "result": {
                      "type": "object",
                      "title": "MonetaryAmount",
                      "x-range": "MonetaryAmount",
                      "required": [
                        "type",
                        "value",
                        "currency"
                      ],
                      "properties": {
                        "type": {
                          "type": "string",
                          "description": "MonetaryAmount",
                          "enum": [
                            "MonetaryAmount"
                          ],
                          "x-parser-schema-id": "<anonymous-schema-328>"
                        },
                        "minValue": {
                          "type": "number",
                          "description": "the lower limit of the range",
                          "example": 2400000,
                          "x-parser-schema-id": "<anonymous-schema-329>"
                        },
                        "maxValue": {
                          "type": "number",
                          "description": "the upper limit of the range",
                          "example": 3200000,
                          "x-parser-schema-id": "<anonymous-schema-330>"
                        },
                        "value": {
                          "type": "number",
                          "description": "the actual or expected value",
                          "example": 2700000,
                          "x-parser-schema-id": "<anonymous-schema-331>"
                        },
                        "currency": {
                          "type": "string",
                          "description": "use ISO4217 country codes",
                          "maxLength": 3,
                          "example": "USD",
                          "x-parser-schema-id": "<anonymous-schema-332>"
                        }
                      },
                      "description": "the estimated value of the property",
                      "x-parser-schema-id": "<anonymous-schema-476>"
                    },
                    "about": {
                      "allOf": [
                        {
                          "title": "RealEstateProperty",
                          "x-range": "RealEstateProperty",
                          "description": "a property in the real estate transaction context",
                          "type": "object",
                          "required": [
                            "type",
                            "propertyType"
                          ],
                          "properties": {
                            "type": {
                              "description": "\"RealEstateProperty\"",
                              "enum": [
                                "RealEstateProperty"
                              ],
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-478>"
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
                            "addressCountry": {
                              "type": "string",
                              "description": "two-letter ISO 3166-1 alpha-2 country code",
                              "example": "US",
                              "enum": [
                                "CA",
                                "DE",
                                "GR",
                                "IN",
                                "IT",
                                "MX",
                                "PE",
                                "PT",
                                "ES",
                                "AE",
                                "GB",
                                "US"
                              ],
                              "x-parser-schema-id": "<anonymous-schema-395>"
                            },
                            "addressLocality": {
                              "type": "string",
                              "description": "City, Township.",
                              "example": "Gotham City",
                              "maxLength": 50,
                              "x-parser-schema-id": "<anonymous-schema-396>"
                            },
                            "addressRegion": {
                              "type": "string",
                              "description": "State or Province.",
                              "example": "New Jersey",
                              "maxLength": 3,
                              "x-parser-schema-id": "<anonymous-schema-397>"
                            },
                            "apn": {
                              "type": "string",
                              "description": "Assessors Parcel Number",
                              "example": "ABC-12345-XX-XXXX",
                              "x-parser-schema-id": "<anonymous-schema-479>"
                            },
                            "image": {
                              "title": "image",
                              "description": "an ImageObject or URI reference to an image on the web.",
                              "type": "array",
                              "x-range": [
                                "ImageObject"
                              ],
                              "items": [
                                {
                                  "type": "object",
                                  "allOf": [
                                    {
                                      "title": "MediaObject",
                                      "description": "an image, video or document availble for download",
                                      "x-subclass": [
                                        "ImageObject",
                                        "DigitalDocument"
                                      ],
                                      "allOf": [
                                        {
                                          "type": "object",
                                          "required": [
                                            "type"
                                          ],
                                          "properties": {
                                            "type": {
                                              "type": "string",
                                              "description": "The item type (Linked-Data @type)",
                                              "x-parser-schema-id": "<anonymous-schema-144>"
                                            }
                                          },
                                          "x-parser-schema-id": "Thing"
                                        },
                                        {
                                          "properties": {
                                            "type": {
                                              "type": "string",
                                              "enum": [
                                                "MediaObject",
                                                "ImageObject",
                                                "DigitalDocument"
                                              ]
                                            },
                                            "id": {
                                              "description": "the URL to access the item.",
                                              "example": "http://user.example.com/public/logo/fileName.zip",
                                              "type": "string",
                                              "format": "uri"
                                            },
                                            "name": {
                                              "type": "string",
                                              "description": "the file name of the object.",
                                              "example": "fileName.zip"
                                            },
                                            "encodingFormat": {
                                              "type": "string",
                                              "description": "MIME type",
                                              "example": "application/zip"
                                            },
                                            "about": {
                                              "type": "string",
                                              "format": "uri",
                                              "description": "URI to the subject of the image or logo",
                                              "example": "http://user.example.com/profile/card#me"
                                            },
                                            "url": {
                                              "type": "string",
                                              "format": "uri",
                                              "description": "URL of the image content",
                                              "example": "http://user.example.com/public/profile/image.jpg"
                                            }
                                          },
                                          "x-parser-schema-id": "<anonymous-schema-178>"
                                        }
                                      ],
                                      "x-parser-schema-id": "MediaObject"
                                    },
                                    {
                                      "title": "ImageObject",
                                      "x-range": "ImageObject",
                                      "properties": {
                                        "type": {
                                          "enum": [
                                            "ImageObject"
                                          ],
                                          "example": "ImageObject"
                                        },
                                        "id": {
                                          "example": "http://user.example.com/public/logo/image.jpg"
                                        },
                                        "name": {
                                          "example": "image.jpg"
                                        },
                                        "encodingFormat": {
                                          "example": "image/jpeg"
                                        }
                                      },
                                      "x-parser-schema-id": "<anonymous-schema-179>"
                                    }
                                  ],
                                  "x-parser-schema-id": "<anonymous-schema-177>"
                                }
                              ],
                              "x-parser-schema-id": "<anonymous-schema-401>"
                            },
                            "latitude": {
                              "type": "number",
                              "description": "The latitude of a location.",
                              "x-title": "latitude",
                              "example": 40.75,
                              "x-parser-schema-id": "<anonymous-schema-283>"
                            },
                            "listingId": {
                              "description": "the local identifier for the listing (MLS #)",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-480>"
                            },
                            "livingArea": {
                              "description": "property indoor space",
                              "example": {
                                "type": "QuantitativeValue",
                                "unitCode": "SqFt",
                                "unitText": "Square Feet",
                                "value": 1500
                              },
                              "type": "object",
                              "x-range": "QuantitativeValue",
                              "x-parser-schema-id": "<anonymous-schema-481>"
                            },
                            "longitude": {
                              "type": "number",
                              "description": "The longitude of a location.",
                              "x-title": "longitude",
                              "example": 73.98,
                              "x-parser-schema-id": "<anonymous-schema-282>"
                            },
                            "lotSize": {
                              "description": "outdoor space minValue, maxValue",
                              "example": {
                                "type": "QuantitativeValue",
                                "unitCode": "AC",
                                "unitText": "Acres",
                                "value": 0.5
                              },
                              "type": "object",
                              "x-range": "QuantitativeValue",
                              "x-parser-schema-id": "<anonymous-schema-482>"
                            },
                            "numberOfBathrooms": {
                              "description": "the number of bathrooms",
                              "example": "2",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-483>"
                            },
                            "numberOfBedrooms": {
                              "description": "the number of bedrooms",
                              "example": "3",
                              "type": "string",
                              "x-parser-schema-id": "<anonymous-schema-484>"
                            },
                            "numberOfRooms": {
                              "description": "the total number of rooms in the building",
                              "type": "string",
                              "example": 7,
                              "x-parser-schema-id": "<anonymous-schema-485>"
                            },
                            "postalCode": {
                              "type": "string",
                              "description": "Zip/Post Code",
                              "example": "10010",
                              "maxLength": 12,
                              "x-parser-schema-id": "<anonymous-schema-417>"
                            },
                            "propertySubType": {
                              "title": "propertySubType",
                              "type": "string",
                              "x-range": "PropertySubType",
                              "description": "RESO property sub-type (see range for allowed values)",
                              "enum": [
                                "ApartmentPropertyType",
                                "BoatSlipPropertyType",
                                "CabinPropertyType",
                                "CondominiumPropertyType",
                                "DeededParkingPropertyType",
                                "DuplexPropertyType",
                                "FarmPropertyType",
                                "ManufacturedHomePropertyType",
                                "ManufacturedOnLandPropertyType",
                                "MobileHomePropertyType",
                                "OwnYourOwnPropertyType",
                                "QuadruplexPropertyType",
                                "RanchPropertyType",
                                "SingleFamilyPropertyType",
                                "StockCooperativePropertyType",
                                "TimesharePropertyType",
                                "TownhousePropertyType",
                                "TriplexPropertyType",
                                "AgriculturePropertyType",
                                "BusinessPropertyType",
                                "HotelMotelPropertyType",
                                "IndustrialPropertyType",
                                "MixedUsePropertyType",
                                "MultiFamilyPropertyType",
                                "OfficePropertyType",
                                "RetailPropertyType",
                                "UnimprovedLandPropertyType",
                                "WarehousePropertyType"
                              ],
                              "x-parser-schema-id": "<anonymous-schema-418>"
                            },
                            "stories": {
                              "type": "number",
                              "description": "he number of floors in the property",
                              "example": 2,
                              "x-parser-schema-id": "<anonymous-schema-421>"
                            },
                            "streetAddress": {
                              "type": "string",
                              "description": "the street address",
                              "example": "1007 Mountain Gate Rd",
                              "maxLength": 75,
                              "x-parser-schema-id": "<anonymous-schema-422>"
                            },
                            "yearBuilt": {
                              "type": "number",
                              "description": "the year the structure was created",
                              "example": 1988,
                              "x-parser-schema-id": "<anonymous-schema-425>"
                            }
                          },
                          "x-parser-schema-id": "RealEstateProperty"
                        },
                        {
                          "description": "the subject property",
                          "x-parser-schema-id": "<anonymous-schema-486>"
                        },
                        {
                          "properties": {
                            "additionalProperty": {
                              "example": {
                                "heating": null,
                                "cooling": null,
                                "isForeclosure": null,
                                "isShortsale": null,
                                "score": 7,
                                "parcelId": null,
                                "averageSalePrice": {
                                  "type": "PriceSpecification",
                                  "price": 7500000,
                                  "priceCurrency": "USD"
                                },
                                "nonDisclosureProperty": false,
                                "taxAssessedValue": {
                                  "@type": "MonetaryAmount",
                                  "amount": "100000",
                                  "currency": "USD"
                                },
                                "taxAssessedYear": 2021,
                                "inHouseCompanyListingUrl": null,
                                "inHouseCompanyListingEvent": null,
                                "neighborhoodMetrics": null,
                                "neighborhoodName": "DEER CREEK WOODS",
                                "neighborhoodKey": null,
                                "useNeighborhoodDataForCharts": false,
                                "ownerName": "Bob Jones",
                                "ownerOccupied": "Y",
                                "ownersEstimatedEquity": {
                                  "@type": "MonetaryAmount",
                                  "amount": "100000",
                                  "currency": "USD"
                                },
                                "firstLoanPrice": {
                                  "@type": "MonetaryAmount",
                                  "amount": "100000",
                                  "currency": "USD"
                                },
                                "firstLoanLenderName": "",
                                "secondLoanPrice": {
                                  "@type": "MonetaryAmount",
                                  "amount": null,
                                  "currency": null
                                },
                                "secondLoanLenderName": "N/A",
                                "lastRefinanceLoanVal1": {
                                  "@type": "MonetaryAmount",
                                  "amount": "100000",
                                  "currency": "USD"
                                },
                                "lastRefinanceLenderName1": "N/A",
                                "lastRefinanceLoanVal2": {
                                  "@type": "MonetaryAmount",
                                  "amount": null,
                                  "currency": null
                                },
                                "lastRefinanceLenderName2": "N/A",
                                "Title_Company": ""
                              }
                            }
                          },
                          "x-parser-schema-id": "<anonymous-schema-487>"
                        }
                      ],
                      "x-parser-schema-id": "<anonymous-schema-477>"
                    }
                  },
                  "x-parser-schema-id": "PropertyValueReport"
                },
                "recipient": {
                  "type": "object",
                  "description": "the recipient of the share",
                  "example": {
                    "type": "Person",
                    "email": "user@example.com"
                  }
                }
              }
            }
          },
          "x-parser-schema-id": "<anonymous-schema-113>"
        }
      ],
      "x-parser-schema-id": "<anonymous-schema-112>"
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
              "description": "realestate/website#sharepropertyvaluereport",
              "enum": [
                "realestate/website#sharepropertyvaluereport"
              ]
            },
            "data": {
              "properties": {
                "type": {
                  "enum": [
                    "ShareAction"
                  ]
                },
                "object": {
                  "type": "object",
                  "title": "PropertyValueReport",
                  "x-range": "PropertyValueReport",
                  "description": "an automated property value esmation",
                  "properties": {
                    "type": {
                      "type": "string",
                      "description": "PropertyValueReport",
                      "enum": [
                        "PropertyValueReport"
                      ]
                    },
                    "name": {
                      "type": "string",
                      "description": "document name or title",
                      "example": "LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH..."
                    },
                    "dateCreated": {
                      "description": "The date on which the item was created.",
                      "type": "string",
                      "format": "date-time"
                    },
                    "result": {
                      "type": "object",
                      "title": "MonetaryAmount",
                      "x-range": "MonetaryAmount",
                      "required": [
                        "type",
                        "value",
                        "currency"
                      ],
                      "properties": {
                        "type": {
                          "type": "string",
                          "description": "MonetaryAmount",
                          "enum": [
                            "MonetaryAmount"
                          ]
                        },
                        "minValue": {
                          "type": "number",
                          "description": "the lower limit of the range",
                          "example": 2400000
                        },
                        "maxValue": {
                          "type": "number",
                          "description": "the upper limit of the range",
                          "example": 3200000
                        },
                        "value": {
                          "type": "number",
                          "description": "the actual or expected value",
                          "example": 2700000
                        },
                        "currency": {
                          "type": "string",
                          "description": "use ISO4217 country codes",
                          "maxLength": 3,
                          "example": "USD"
                        }
                      },
                      "description": "the estimated value of the property"
                    },
                    "about": {
                      "allOf": [
                        {
                          "title": "RealEstateProperty",
                          "x-range": "RealEstateProperty",
                          "description": "a property in the real estate transaction context",
                          "type": "object",
                          "required": [
                            "type",
                            "propertyType"
                          ],
                          "properties": {
                            "type": {
                              "description": "\"RealEstateProperty\"",
                              "enum": [
                                "RealEstateProperty"
                              ],
                              "type": "string"
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
                            "addressCountry": {
                              "type": "string",
                              "description": "two-letter ISO 3166-1 alpha-2 country code",
                              "example": "US",
                              "enum": [
                                "CA",
                                "DE",
                                "GR",
                                "IN",
                                "IT",
                                "MX",
                                "PE",
                                "PT",
                                "ES",
                                "AE",
                                "GB",
                                "US"
                              ]
                            },
                            "addressLocality": {
                              "type": "string",
                              "description": "City, Township.",
                              "example": "Gotham City",
                              "maxLength": 50
                            },
                            "addressRegion": {
                              "type": "string",
                              "description": "State or Province.",
                              "example": "New Jersey",
                              "maxLength": 3
                            },
                            "apn": {
                              "type": "string",
                              "description": "Assessors Parcel Number",
                              "example": "ABC-12345-XX-XXXX"
                            },
                            "image": {
                              "title": "image",
                              "description": "an ImageObject or URI reference to an image on the web.",
                              "type": "array",
                              "x-range": [
                                "ImageObject"
                              ],
                              "items": [
                                {
                                  "type": "object",
                                  "allOf": [
                                    {
                                      "title": "MediaObject",
                                      "description": "an image, video or document availble for download",
                                      "x-subclass": [
                                        "ImageObject",
                                        "DigitalDocument"
                                      ],
                                      "allOf": [
                                        {
                                          "type": "object",
                                          "required": [
                                            "type"
                                          ],
                                          "properties": {
                                            "type": {
                                              "type": "string",
                                              "description": "The item type (Linked-Data @type)"
                                            }
                                          }
                                        },
                                        {
                                          "properties": {
                                            "type": {
                                              "type": "string",
                                              "enum": [
                                                "MediaObject",
                                                "ImageObject",
                                                "DigitalDocument"
                                              ]
                                            },
                                            "id": {
                                              "description": "the URL to access the item.",
                                              "example": "http://user.example.com/public/logo/fileName.zip",
                                              "type": "string",
                                              "format": "uri"
                                            },
                                            "name": {
                                              "type": "string",
                                              "description": "the file name of the object.",
                                              "example": "fileName.zip"
                                            },
                                            "encodingFormat": {
                                              "type": "string",
                                              "description": "MIME type",
                                              "example": "application/zip"
                                            },
                                            "about": {
                                              "type": "string",
                                              "format": "uri",
                                              "description": "URI to the subject of the image or logo",
                                              "example": "http://user.example.com/profile/card#me"
                                            },
                                            "url": {
                                              "type": "string",
                                              "format": "uri",
                                              "description": "URL of the image content",
                                              "example": "http://user.example.com/public/profile/image.jpg"
                                            }
                                          }
                                        }
                                      ]
                                    },
                                    {
                                      "title": "ImageObject",
                                      "x-range": "ImageObject",
                                      "properties": {
                                        "type": {
                                          "enum": [
                                            "ImageObject"
                                          ],
                                          "example": "ImageObject"
                                        },
                                        "id": {
                                          "example": "http://user.example.com/public/logo/image.jpg"
                                        },
                                        "name": {
                                          "example": "image.jpg"
                                        },
                                        "encodingFormat": {
                                          "example": "image/jpeg"
                                        }
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            "latitude": {
                              "type": "number",
                              "description": "The latitude of a location.",
                              "x-title": "latitude",
                              "example": 40.75
                            },
                            "listingId": {
                              "description": "the local identifier for the listing (MLS #)",
                              "type": "string"
                            },
                            "livingArea": {
                              "description": "property indoor space",
                              "example": {
                                "type": "QuantitativeValue",
                                "unitCode": "SqFt",
                                "unitText": "Square Feet",
                                "value": 1500
                              },
                              "type": "object",
                              "x-range": "QuantitativeValue"
                            },
                            "longitude": {
                              "type": "number",
                              "description": "The longitude of a location.",
                              "x-title": "longitude",
                              "example": 73.98
                            },
                            "lotSize": {
                              "description": "outdoor space minValue, maxValue",
                              "example": {
                                "type": "QuantitativeValue",
                                "unitCode": "AC",
                                "unitText": "Acres",
                                "value": 0.5
                              },
                              "type": "object",
                              "x-range": "QuantitativeValue"
                            },
                            "numberOfBathrooms": {
                              "description": "the number of bathrooms",
                              "example": "2",
                              "type": "string"
                            },
                            "numberOfBedrooms": {
                              "description": "the number of bedrooms",
                              "example": "3",
                              "type": "string"
                            },
                            "numberOfRooms": {
                              "description": "the total number of rooms in the building",
                              "type": "string",
                              "example": 7
                            },
                            "postalCode": {
                              "type": "string",
                              "description": "Zip/Post Code",
                              "example": "10010",
                              "maxLength": 12
                            },
                            "propertySubType": {
                              "title": "propertySubType",
                              "type": "string",
                              "x-range": "PropertySubType",
                              "description": "RESO property sub-type (see range for allowed values)",
                              "enum": [
                                "ApartmentPropertyType",
                                "BoatSlipPropertyType",
                                "CabinPropertyType",
                                "CondominiumPropertyType",
                                "DeededParkingPropertyType",
                                "DuplexPropertyType",
                                "FarmPropertyType",
                                "ManufacturedHomePropertyType",
                                "ManufacturedOnLandPropertyType",
                                "MobileHomePropertyType",
                                "OwnYourOwnPropertyType",
                                "QuadruplexPropertyType",
                                "RanchPropertyType",
                                "SingleFamilyPropertyType",
                                "StockCooperativePropertyType",
                                "TimesharePropertyType",
                                "TownhousePropertyType",
                                "TriplexPropertyType",
                                "AgriculturePropertyType",
                                "BusinessPropertyType",
                                "HotelMotelPropertyType",
                                "IndustrialPropertyType",
                                "MixedUsePropertyType",
                                "MultiFamilyPropertyType",
                                "OfficePropertyType",
                                "RetailPropertyType",
                                "UnimprovedLandPropertyType",
                                "WarehousePropertyType"
                              ]
                            },
                            "stories": {
                              "type": "number",
                              "description": "he number of floors in the property",
                              "example": 2
                            },
                            "streetAddress": {
                              "type": "string",
                              "description": "the street address",
                              "example": "1007 Mountain Gate Rd",
                              "maxLength": 75
                            },
                            "yearBuilt": {
                              "type": "number",
                              "description": "the year the structure was created",
                              "example": 1988
                            }
                          }
                        },
                        {
                          "description": "the subject property"
                        },
                        {
                          "properties": {
                            "additionalProperty": {
                              "example": {
                                "heating": null,
                                "cooling": null,
                                "isForeclosure": null,
                                "isShortsale": null,
                                "score": 7,
                                "parcelId": null,
                                "averageSalePrice": {
                                  "type": "PriceSpecification",
                                  "price": 7500000,
                                  "priceCurrency": "USD"
                                },
                                "nonDisclosureProperty": false,
                                "taxAssessedValue": {
                                  "@type": "MonetaryAmount",
                                  "amount": "100000",
                                  "currency": "USD"
                                },
                                "taxAssessedYear": 2021,
                                "inHouseCompanyListingUrl": null,
                                "inHouseCompanyListingEvent": null,
                                "neighborhoodMetrics": null,
                                "neighborhoodName": "DEER CREEK WOODS",
                                "neighborhoodKey": null,
                                "useNeighborhoodDataForCharts": false,
                                "ownerName": "Bob Jones",
                                "ownerOccupied": "Y",
                                "ownersEstimatedEquity": {
                                  "@type": "MonetaryAmount",
                                  "amount": "100000",
                                  "currency": "USD"
                                },
                                "firstLoanPrice": {
                                  "@type": "MonetaryAmount",
                                  "amount": "100000",
                                  "currency": "USD"
                                },
                                "firstLoanLenderName": "",
                                "secondLoanPrice": {
                                  "@type": "MonetaryAmount",
                                  "amount": null,
                                  "currency": null
                                },
                                "secondLoanLenderName": "N/A",
                                "lastRefinanceLoanVal1": {
                                  "@type": "MonetaryAmount",
                                  "amount": "100000",
                                  "currency": "USD"
                                },
                                "lastRefinanceLenderName1": "N/A",
                                "lastRefinanceLoanVal2": {
                                  "@type": "MonetaryAmount",
                                  "amount": null,
                                  "currency": null
                                },
                                "lastRefinanceLenderName2": "N/A",
                                "Title_Company": ""
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "recipient": {
                  "type": "object",
                  "description": "the recipient of the share",
                  "example": {
                    "type": "Person",
                    "email": "user@example.com"
                  }
                }
              }
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