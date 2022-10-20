

---
title: PropertyValueReport
---

{
  "type": {
    "_json": {
      "type": "string",
      "description": "PropertyValueReport",
      "enum": [
        "PropertyValueReport"
      ],
      "x-parser-schema-id": "<anonymous-schema-474>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "name": {
    "_json": {
      "type": "string",
      "description": "document name or title",
      "example": "LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...",
      "x-parser-schema-id": "<anonymous-schema-475>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "result": {
    "_json": {
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
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "about": {
    "_json": {
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
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  }
}


# PropertyValueReport

an automated property value esmation



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "type": "string",
    "description": "PropertyValueReport",
    "enum": [
      "PropertyValueReport"
    ],
    "x-parser-schema-id": "<anonymous-schema-474>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "document name or title",
    "example": "LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...",
    "x-parser-schema-id": "<anonymous-schema-475>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
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
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;MonetaryAmount&quot;,
    &quot;enum&quot;: [
      &quot;MonetaryAmount&quot;
    ],
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;title&quot;: &quot;MonetaryAmount&quot;,
        &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
        &quot;required&quot;: [
          &quot;type&quot;,
          &quot;value&quot;,
          &quot;currency&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;MonetaryAmount&quot;,
            &quot;enum&quot;: [
              &quot;MonetaryAmount&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
          },
          &quot;minValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the lower limit of the range&quot;,
            &quot;example&quot;: 2400000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
          },
          &quot;maxValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the upper limit of the range&quot;,
            &quot;example&quot;: 3200000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
          },
          &quot;value&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the actual or expected value&quot;,
            &quot;example&quot;: 2700000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
          },
          &quot;currency&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
            &quot;maxLength&quot;: 3,
            &quot;example&quot;: &quot;USD&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
          }
        },
        &quot;description&quot;: &quot;the estimated value of the property&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-476&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;PropertyValueReport&quot;,
            &quot;x-range&quot;: &quot;PropertyValueReport&quot;,
            &quot;description&quot;: &quot;an automated property value esmation&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;PropertyValueReport&quot;,
                &quot;enum&quot;: [
                  &quot;PropertyValueReport&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-474&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;document name or title&quot;,
                &quot;example&quot;: &quot;LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-475&gt;&quot;
              },
              &quot;dateCreated&quot;: {
                &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
              },
              &quot;result&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;the estimated value of the property&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-476&gt;&quot;
              },
              &quot;about&quot;: {
                &quot;allOf&quot;: [
                  {
                    &quot;title&quot;: &quot;RealEstateProperty&quot;,
                    &quot;x-range&quot;: &quot;RealEstateProperty&quot;,
                    &quot;description&quot;: &quot;a property in the real estate transaction context&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;required&quot;: [
                      &quot;type&quot;,
                      &quot;propertyType&quot;
                    ],
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;description&quot;: &quot;\&quot;RealEstateProperty\&quot;&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateProperty&quot;
                        ],
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-478&gt;&quot;
                      },
                      &quot;propertyType&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;RESO property type (see range for allowed values)&quot;,
                        &quot;x-range&quot;: &quot;PropertyType&quot;,
                        &quot;minLength&quot;: 4,
                        &quot;maxLength&quot;: 4,
                        &quot;enum&quot;: [
                          &quot;RESI&quot;,
                          &quot;RLSE&quot;,
                          &quot;RINC&quot;,
                          &quot;LAND&quot;,
                          &quot;MOBI&quot;,
                          &quot;FARM&quot;,
                          &quot;COMS&quot;,
                          &quot;COML&quot;,
                          &quot;BUSO&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-419&gt;&quot;
                      },
                      &quot;addressCountry&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;two-letter ISO 3166-1 alpha-2 country code&quot;,
                        &quot;example&quot;: &quot;US&quot;,
                        &quot;enum&quot;: [
                          &quot;CA&quot;,
                          &quot;DE&quot;,
                          &quot;GR&quot;,
                          &quot;IN&quot;,
                          &quot;IT&quot;,
                          &quot;MX&quot;,
                          &quot;PE&quot;,
                          &quot;PT&quot;,
                          &quot;ES&quot;,
                          &quot;AE&quot;,
                          &quot;GB&quot;,
                          &quot;US&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-395&gt;&quot;
                      },
                      &quot;addressLocality&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;City, Township.&quot;,
                        &quot;example&quot;: &quot;Gotham City&quot;,
                        &quot;maxLength&quot;: 50,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-396&gt;&quot;
                      },
                      &quot;addressRegion&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;State or Province.&quot;,
                        &quot;example&quot;: &quot;New Jersey&quot;,
                        &quot;maxLength&quot;: 3,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-397&gt;&quot;
                      },
                      &quot;apn&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Assessors Parcel Number&quot;,
                        &quot;example&quot;: &quot;ABC-12345-XX-XXXX&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-479&gt;&quot;
                      },
                      &quot;image&quot;: {
                        &quot;title&quot;: &quot;image&quot;,
                        &quot;description&quot;: &quot;an ImageObject or URI reference to an image on the web.&quot;,
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;x-range&quot;: [
                          &quot;ImageObject&quot;
                        ],
                        &quot;items&quot;: [
                          {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;allOf&quot;: [
                              {
                                &quot;title&quot;: &quot;MediaObject&quot;,
                                &quot;description&quot;: &quot;an image, video or document availble for download&quot;,
                                &quot;x-subclass&quot;: [
                                  &quot;ImageObject&quot;,
                                  &quot;DigitalDocument&quot;
                                ],
                                &quot;allOf&quot;: [
                                  {
                                    &quot;type&quot;: &quot;object&quot;,
                                    &quot;required&quot;: [
                                      &quot;type&quot;
                                    ],
                                    &quot;properties&quot;: {
                                      &quot;type&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
                                      }
                                    },
                                    &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
                                  },
                                  {
                                    &quot;properties&quot;: {
                                      &quot;type&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;enum&quot;: [
                                          &quot;MediaObject&quot;,
                                          &quot;ImageObject&quot;,
                                          &quot;DigitalDocument&quot;
                                        ]
                                      },
                                      &quot;id&quot;: {
                                        &quot;description&quot;: &quot;the URL to access the item.&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/public/logo/fileName.zip&quot;,
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;
                                      },
                                      &quot;name&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;the file name of the object.&quot;,
                                        &quot;example&quot;: &quot;fileName.zip&quot;
                                      },
                                      &quot;encodingFormat&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;MIME type&quot;,
                                        &quot;example&quot;: &quot;application/zip&quot;
                                      },
                                      &quot;about&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;,
                                        &quot;description&quot;: &quot;URI to the subject of the image or logo&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/profile/card#me&quot;
                                      },
                                      &quot;url&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;,
                                        &quot;description&quot;: &quot;URL of the image content&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/public/profile/image.jpg&quot;
                                      }
                                    },
                                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-178&gt;&quot;
                                  }
                                ],
                                &quot;x-parser-schema-id&quot;: &quot;MediaObject&quot;
                              },
                              {
                                &quot;title&quot;: &quot;ImageObject&quot;,
                                &quot;x-range&quot;: &quot;ImageObject&quot;,
                                &quot;properties&quot;: {
                                  &quot;type&quot;: {
                                    &quot;enum&quot;: [
                                      &quot;ImageObject&quot;
                                    ],
                                    &quot;example&quot;: &quot;ImageObject&quot;
                                  },
                                  &quot;id&quot;: {
                                    &quot;example&quot;: &quot;http://user.example.com/public/logo/image.jpg&quot;
                                  },
                                  &quot;name&quot;: {
                                    &quot;example&quot;: &quot;image.jpg&quot;
                                  },
                                  &quot;encodingFormat&quot;: {
                                    &quot;example&quot;: &quot;image/jpeg&quot;
                                  }
                                },
                                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-179&gt;&quot;
                              }
                            ],
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-177&gt;&quot;
                          }
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-401&gt;&quot;
                      },
                      &quot;latitude&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;The latitude of a location.&quot;,
                        &quot;x-title&quot;: &quot;latitude&quot;,
                        &quot;example&quot;: 40.75,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
                      },
                      &quot;listingId&quot;: {
                        &quot;description&quot;: &quot;the local identifier for the listing (MLS #)&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-480&gt;&quot;
                      },
                      &quot;livingArea&quot;: {
                        &quot;description&quot;: &quot;property indoor space&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;QuantitativeValue&quot;,
                          &quot;unitCode&quot;: &quot;SqFt&quot;,
                          &quot;unitText&quot;: &quot;Square Feet&quot;,
                          &quot;value&quot;: 1500
                        },
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-481&gt;&quot;
                      },
                      &quot;longitude&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;The longitude of a location.&quot;,
                        &quot;x-title&quot;: &quot;longitude&quot;,
                        &quot;example&quot;: 73.98,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
                      },
                      &quot;lotSize&quot;: {
                        &quot;description&quot;: &quot;outdoor space minValue, maxValue&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;QuantitativeValue&quot;,
                          &quot;unitCode&quot;: &quot;AC&quot;,
                          &quot;unitText&quot;: &quot;Acres&quot;,
                          &quot;value&quot;: 0.5
                        },
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-482&gt;&quot;
                      },
                      &quot;numberOfBathrooms&quot;: {
                        &quot;description&quot;: &quot;the number of bathrooms&quot;,
                        &quot;example&quot;: &quot;2&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-483&gt;&quot;
                      },
                      &quot;numberOfBedrooms&quot;: {
                        &quot;description&quot;: &quot;the number of bedrooms&quot;,
                        &quot;example&quot;: &quot;3&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-484&gt;&quot;
                      },
                      &quot;numberOfRooms&quot;: {
                        &quot;description&quot;: &quot;the total number of rooms in the building&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: 7,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-485&gt;&quot;
                      },
                      &quot;postalCode&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Zip/Post Code&quot;,
                        &quot;example&quot;: &quot;10010&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-417&gt;&quot;
                      },
                      &quot;propertySubType&quot;: {
                        &quot;title&quot;: &quot;propertySubType&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-range&quot;: &quot;PropertySubType&quot;,
                        &quot;description&quot;: &quot;RESO property sub-type (see range for allowed values)&quot;,
                        &quot;enum&quot;: [
                          &quot;ApartmentPropertyType&quot;,
                          &quot;BoatSlipPropertyType&quot;,
                          &quot;CabinPropertyType&quot;,
                          &quot;CondominiumPropertyType&quot;,
                          &quot;DeededParkingPropertyType&quot;,
                          &quot;DuplexPropertyType&quot;,
                          &quot;FarmPropertyType&quot;,
                          &quot;ManufacturedHomePropertyType&quot;,
                          &quot;ManufacturedOnLandPropertyType&quot;,
                          &quot;MobileHomePropertyType&quot;,
                          &quot;OwnYourOwnPropertyType&quot;,
                          &quot;QuadruplexPropertyType&quot;,
                          &quot;RanchPropertyType&quot;,
                          &quot;SingleFamilyPropertyType&quot;,
                          &quot;StockCooperativePropertyType&quot;,
                          &quot;TimesharePropertyType&quot;,
                          &quot;TownhousePropertyType&quot;,
                          &quot;TriplexPropertyType&quot;,
                          &quot;AgriculturePropertyType&quot;,
                          &quot;BusinessPropertyType&quot;,
                          &quot;HotelMotelPropertyType&quot;,
                          &quot;IndustrialPropertyType&quot;,
                          &quot;MixedUsePropertyType&quot;,
                          &quot;MultiFamilyPropertyType&quot;,
                          &quot;OfficePropertyType&quot;,
                          &quot;RetailPropertyType&quot;,
                          &quot;UnimprovedLandPropertyType&quot;,
                          &quot;WarehousePropertyType&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-418&gt;&quot;
                      },
                      &quot;stories&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;he number of floors in the property&quot;,
                        &quot;example&quot;: 2,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-421&gt;&quot;
                      },
                      &quot;streetAddress&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;the street address&quot;,
                        &quot;example&quot;: &quot;1007 Mountain Gate Rd&quot;,
                        &quot;maxLength&quot;: 75,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-422&gt;&quot;
                      },
                      &quot;yearBuilt&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;the year the structure was created&quot;,
                        &quot;example&quot;: 1988,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-425&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;RealEstateProperty&quot;
                  },
                  {
                    &quot;description&quot;: &quot;the subject property&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-486&gt;&quot;
                  },
                  {
                    &quot;properties&quot;: {
                      &quot;additionalProperty&quot;: {
                        &quot;example&quot;: {
                          &quot;heating&quot;: null,
                          &quot;cooling&quot;: null,
                          &quot;isForeclosure&quot;: null,
                          &quot;isShortsale&quot;: null,
                          &quot;score&quot;: 7,
                          &quot;parcelId&quot;: null,
                          &quot;averageSalePrice&quot;: {
                            &quot;type&quot;: &quot;PriceSpecification&quot;,
                            &quot;price&quot;: 7500000,
                            &quot;priceCurrency&quot;: &quot;USD&quot;
                          },
                          &quot;nonDisclosureProperty&quot;: false,
                          &quot;taxAssessedValue&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;taxAssessedYear&quot;: 2021,
                          &quot;inHouseCompanyListingUrl&quot;: null,
                          &quot;inHouseCompanyListingEvent&quot;: null,
                          &quot;neighborhoodMetrics&quot;: null,
                          &quot;neighborhoodName&quot;: &quot;DEER CREEK WOODS&quot;,
                          &quot;neighborhoodKey&quot;: null,
                          &quot;useNeighborhoodDataForCharts&quot;: false,
                          &quot;ownerName&quot;: &quot;Bob Jones&quot;,
                          &quot;ownerOccupied&quot;: &quot;Y&quot;,
                          &quot;ownersEstimatedEquity&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;firstLoanPrice&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;firstLoanLenderName&quot;: &quot;&quot;,
                          &quot;secondLoanPrice&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: null,
                            &quot;currency&quot;: null
                          },
                          &quot;secondLoanLenderName&quot;: &quot;N/A&quot;,
                          &quot;lastRefinanceLoanVal1&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;lastRefinanceLenderName1&quot;: &quot;N/A&quot;,
                          &quot;lastRefinanceLoanVal2&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: null,
                            &quot;currency&quot;: null
                          },
                          &quot;lastRefinanceLenderName2&quot;: &quot;N/A&quot;,
                          &quot;Title_Company&quot;: &quot;&quot;
                        }
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-487&gt;&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-477&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;PropertyValueReport&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = type
required = false
path = result



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;number&quot;,
    &quot;description&quot;: &quot;the lower limit of the range&quot;,
    &quot;example&quot;: 2400000,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;title&quot;: &quot;MonetaryAmount&quot;,
        &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
        &quot;required&quot;: [
          &quot;type&quot;,
          &quot;value&quot;,
          &quot;currency&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;MonetaryAmount&quot;,
            &quot;enum&quot;: [
              &quot;MonetaryAmount&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
          },
          &quot;minValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the lower limit of the range&quot;,
            &quot;example&quot;: 2400000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
          },
          &quot;maxValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the upper limit of the range&quot;,
            &quot;example&quot;: 3200000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
          },
          &quot;value&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the actual or expected value&quot;,
            &quot;example&quot;: 2700000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
          },
          &quot;currency&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
            &quot;maxLength&quot;: 3,
            &quot;example&quot;: &quot;USD&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
          }
        },
        &quot;description&quot;: &quot;the estimated value of the property&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-476&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;PropertyValueReport&quot;,
            &quot;x-range&quot;: &quot;PropertyValueReport&quot;,
            &quot;description&quot;: &quot;an automated property value esmation&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;PropertyValueReport&quot;,
                &quot;enum&quot;: [
                  &quot;PropertyValueReport&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-474&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;document name or title&quot;,
                &quot;example&quot;: &quot;LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-475&gt;&quot;
              },
              &quot;dateCreated&quot;: {
                &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
              },
              &quot;result&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;the estimated value of the property&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-476&gt;&quot;
              },
              &quot;about&quot;: {
                &quot;allOf&quot;: [
                  {
                    &quot;title&quot;: &quot;RealEstateProperty&quot;,
                    &quot;x-range&quot;: &quot;RealEstateProperty&quot;,
                    &quot;description&quot;: &quot;a property in the real estate transaction context&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;required&quot;: [
                      &quot;type&quot;,
                      &quot;propertyType&quot;
                    ],
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;description&quot;: &quot;\&quot;RealEstateProperty\&quot;&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateProperty&quot;
                        ],
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-478&gt;&quot;
                      },
                      &quot;propertyType&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;RESO property type (see range for allowed values)&quot;,
                        &quot;x-range&quot;: &quot;PropertyType&quot;,
                        &quot;minLength&quot;: 4,
                        &quot;maxLength&quot;: 4,
                        &quot;enum&quot;: [
                          &quot;RESI&quot;,
                          &quot;RLSE&quot;,
                          &quot;RINC&quot;,
                          &quot;LAND&quot;,
                          &quot;MOBI&quot;,
                          &quot;FARM&quot;,
                          &quot;COMS&quot;,
                          &quot;COML&quot;,
                          &quot;BUSO&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-419&gt;&quot;
                      },
                      &quot;addressCountry&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;two-letter ISO 3166-1 alpha-2 country code&quot;,
                        &quot;example&quot;: &quot;US&quot;,
                        &quot;enum&quot;: [
                          &quot;CA&quot;,
                          &quot;DE&quot;,
                          &quot;GR&quot;,
                          &quot;IN&quot;,
                          &quot;IT&quot;,
                          &quot;MX&quot;,
                          &quot;PE&quot;,
                          &quot;PT&quot;,
                          &quot;ES&quot;,
                          &quot;AE&quot;,
                          &quot;GB&quot;,
                          &quot;US&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-395&gt;&quot;
                      },
                      &quot;addressLocality&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;City, Township.&quot;,
                        &quot;example&quot;: &quot;Gotham City&quot;,
                        &quot;maxLength&quot;: 50,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-396&gt;&quot;
                      },
                      &quot;addressRegion&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;State or Province.&quot;,
                        &quot;example&quot;: &quot;New Jersey&quot;,
                        &quot;maxLength&quot;: 3,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-397&gt;&quot;
                      },
                      &quot;apn&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Assessors Parcel Number&quot;,
                        &quot;example&quot;: &quot;ABC-12345-XX-XXXX&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-479&gt;&quot;
                      },
                      &quot;image&quot;: {
                        &quot;title&quot;: &quot;image&quot;,
                        &quot;description&quot;: &quot;an ImageObject or URI reference to an image on the web.&quot;,
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;x-range&quot;: [
                          &quot;ImageObject&quot;
                        ],
                        &quot;items&quot;: [
                          {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;allOf&quot;: [
                              {
                                &quot;title&quot;: &quot;MediaObject&quot;,
                                &quot;description&quot;: &quot;an image, video or document availble for download&quot;,
                                &quot;x-subclass&quot;: [
                                  &quot;ImageObject&quot;,
                                  &quot;DigitalDocument&quot;
                                ],
                                &quot;allOf&quot;: [
                                  {
                                    &quot;type&quot;: &quot;object&quot;,
                                    &quot;required&quot;: [
                                      &quot;type&quot;
                                    ],
                                    &quot;properties&quot;: {
                                      &quot;type&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
                                      }
                                    },
                                    &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
                                  },
                                  {
                                    &quot;properties&quot;: {
                                      &quot;type&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;enum&quot;: [
                                          &quot;MediaObject&quot;,
                                          &quot;ImageObject&quot;,
                                          &quot;DigitalDocument&quot;
                                        ]
                                      },
                                      &quot;id&quot;: {
                                        &quot;description&quot;: &quot;the URL to access the item.&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/public/logo/fileName.zip&quot;,
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;
                                      },
                                      &quot;name&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;the file name of the object.&quot;,
                                        &quot;example&quot;: &quot;fileName.zip&quot;
                                      },
                                      &quot;encodingFormat&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;MIME type&quot;,
                                        &quot;example&quot;: &quot;application/zip&quot;
                                      },
                                      &quot;about&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;,
                                        &quot;description&quot;: &quot;URI to the subject of the image or logo&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/profile/card#me&quot;
                                      },
                                      &quot;url&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;,
                                        &quot;description&quot;: &quot;URL of the image content&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/public/profile/image.jpg&quot;
                                      }
                                    },
                                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-178&gt;&quot;
                                  }
                                ],
                                &quot;x-parser-schema-id&quot;: &quot;MediaObject&quot;
                              },
                              {
                                &quot;title&quot;: &quot;ImageObject&quot;,
                                &quot;x-range&quot;: &quot;ImageObject&quot;,
                                &quot;properties&quot;: {
                                  &quot;type&quot;: {
                                    &quot;enum&quot;: [
                                      &quot;ImageObject&quot;
                                    ],
                                    &quot;example&quot;: &quot;ImageObject&quot;
                                  },
                                  &quot;id&quot;: {
                                    &quot;example&quot;: &quot;http://user.example.com/public/logo/image.jpg&quot;
                                  },
                                  &quot;name&quot;: {
                                    &quot;example&quot;: &quot;image.jpg&quot;
                                  },
                                  &quot;encodingFormat&quot;: {
                                    &quot;example&quot;: &quot;image/jpeg&quot;
                                  }
                                },
                                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-179&gt;&quot;
                              }
                            ],
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-177&gt;&quot;
                          }
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-401&gt;&quot;
                      },
                      &quot;latitude&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;The latitude of a location.&quot;,
                        &quot;x-title&quot;: &quot;latitude&quot;,
                        &quot;example&quot;: 40.75,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
                      },
                      &quot;listingId&quot;: {
                        &quot;description&quot;: &quot;the local identifier for the listing (MLS #)&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-480&gt;&quot;
                      },
                      &quot;livingArea&quot;: {
                        &quot;description&quot;: &quot;property indoor space&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;QuantitativeValue&quot;,
                          &quot;unitCode&quot;: &quot;SqFt&quot;,
                          &quot;unitText&quot;: &quot;Square Feet&quot;,
                          &quot;value&quot;: 1500
                        },
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-481&gt;&quot;
                      },
                      &quot;longitude&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;The longitude of a location.&quot;,
                        &quot;x-title&quot;: &quot;longitude&quot;,
                        &quot;example&quot;: 73.98,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
                      },
                      &quot;lotSize&quot;: {
                        &quot;description&quot;: &quot;outdoor space minValue, maxValue&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;QuantitativeValue&quot;,
                          &quot;unitCode&quot;: &quot;AC&quot;,
                          &quot;unitText&quot;: &quot;Acres&quot;,
                          &quot;value&quot;: 0.5
                        },
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-482&gt;&quot;
                      },
                      &quot;numberOfBathrooms&quot;: {
                        &quot;description&quot;: &quot;the number of bathrooms&quot;,
                        &quot;example&quot;: &quot;2&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-483&gt;&quot;
                      },
                      &quot;numberOfBedrooms&quot;: {
                        &quot;description&quot;: &quot;the number of bedrooms&quot;,
                        &quot;example&quot;: &quot;3&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-484&gt;&quot;
                      },
                      &quot;numberOfRooms&quot;: {
                        &quot;description&quot;: &quot;the total number of rooms in the building&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: 7,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-485&gt;&quot;
                      },
                      &quot;postalCode&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Zip/Post Code&quot;,
                        &quot;example&quot;: &quot;10010&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-417&gt;&quot;
                      },
                      &quot;propertySubType&quot;: {
                        &quot;title&quot;: &quot;propertySubType&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-range&quot;: &quot;PropertySubType&quot;,
                        &quot;description&quot;: &quot;RESO property sub-type (see range for allowed values)&quot;,
                        &quot;enum&quot;: [
                          &quot;ApartmentPropertyType&quot;,
                          &quot;BoatSlipPropertyType&quot;,
                          &quot;CabinPropertyType&quot;,
                          &quot;CondominiumPropertyType&quot;,
                          &quot;DeededParkingPropertyType&quot;,
                          &quot;DuplexPropertyType&quot;,
                          &quot;FarmPropertyType&quot;,
                          &quot;ManufacturedHomePropertyType&quot;,
                          &quot;ManufacturedOnLandPropertyType&quot;,
                          &quot;MobileHomePropertyType&quot;,
                          &quot;OwnYourOwnPropertyType&quot;,
                          &quot;QuadruplexPropertyType&quot;,
                          &quot;RanchPropertyType&quot;,
                          &quot;SingleFamilyPropertyType&quot;,
                          &quot;StockCooperativePropertyType&quot;,
                          &quot;TimesharePropertyType&quot;,
                          &quot;TownhousePropertyType&quot;,
                          &quot;TriplexPropertyType&quot;,
                          &quot;AgriculturePropertyType&quot;,
                          &quot;BusinessPropertyType&quot;,
                          &quot;HotelMotelPropertyType&quot;,
                          &quot;IndustrialPropertyType&quot;,
                          &quot;MixedUsePropertyType&quot;,
                          &quot;MultiFamilyPropertyType&quot;,
                          &quot;OfficePropertyType&quot;,
                          &quot;RetailPropertyType&quot;,
                          &quot;UnimprovedLandPropertyType&quot;,
                          &quot;WarehousePropertyType&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-418&gt;&quot;
                      },
                      &quot;stories&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;he number of floors in the property&quot;,
                        &quot;example&quot;: 2,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-421&gt;&quot;
                      },
                      &quot;streetAddress&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;the street address&quot;,
                        &quot;example&quot;: &quot;1007 Mountain Gate Rd&quot;,
                        &quot;maxLength&quot;: 75,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-422&gt;&quot;
                      },
                      &quot;yearBuilt&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;the year the structure was created&quot;,
                        &quot;example&quot;: 1988,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-425&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;RealEstateProperty&quot;
                  },
                  {
                    &quot;description&quot;: &quot;the subject property&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-486&gt;&quot;
                  },
                  {
                    &quot;properties&quot;: {
                      &quot;additionalProperty&quot;: {
                        &quot;example&quot;: {
                          &quot;heating&quot;: null,
                          &quot;cooling&quot;: null,
                          &quot;isForeclosure&quot;: null,
                          &quot;isShortsale&quot;: null,
                          &quot;score&quot;: 7,
                          &quot;parcelId&quot;: null,
                          &quot;averageSalePrice&quot;: {
                            &quot;type&quot;: &quot;PriceSpecification&quot;,
                            &quot;price&quot;: 7500000,
                            &quot;priceCurrency&quot;: &quot;USD&quot;
                          },
                          &quot;nonDisclosureProperty&quot;: false,
                          &quot;taxAssessedValue&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;taxAssessedYear&quot;: 2021,
                          &quot;inHouseCompanyListingUrl&quot;: null,
                          &quot;inHouseCompanyListingEvent&quot;: null,
                          &quot;neighborhoodMetrics&quot;: null,
                          &quot;neighborhoodName&quot;: &quot;DEER CREEK WOODS&quot;,
                          &quot;neighborhoodKey&quot;: null,
                          &quot;useNeighborhoodDataForCharts&quot;: false,
                          &quot;ownerName&quot;: &quot;Bob Jones&quot;,
                          &quot;ownerOccupied&quot;: &quot;Y&quot;,
                          &quot;ownersEstimatedEquity&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;firstLoanPrice&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;firstLoanLenderName&quot;: &quot;&quot;,
                          &quot;secondLoanPrice&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: null,
                            &quot;currency&quot;: null
                          },
                          &quot;secondLoanLenderName&quot;: &quot;N/A&quot;,
                          &quot;lastRefinanceLoanVal1&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;lastRefinanceLenderName1&quot;: &quot;N/A&quot;,
                          &quot;lastRefinanceLoanVal2&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: null,
                            &quot;currency&quot;: null
                          },
                          &quot;lastRefinanceLenderName2&quot;: &quot;N/A&quot;,
                          &quot;Title_Company&quot;: &quot;&quot;
                        }
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-487&gt;&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-477&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;PropertyValueReport&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = minValue
required = false
path = result



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;number&quot;,
    &quot;description&quot;: &quot;the upper limit of the range&quot;,
    &quot;example&quot;: 3200000,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;title&quot;: &quot;MonetaryAmount&quot;,
        &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
        &quot;required&quot;: [
          &quot;type&quot;,
          &quot;value&quot;,
          &quot;currency&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;MonetaryAmount&quot;,
            &quot;enum&quot;: [
              &quot;MonetaryAmount&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
          },
          &quot;minValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the lower limit of the range&quot;,
            &quot;example&quot;: 2400000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
          },
          &quot;maxValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the upper limit of the range&quot;,
            &quot;example&quot;: 3200000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
          },
          &quot;value&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the actual or expected value&quot;,
            &quot;example&quot;: 2700000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
          },
          &quot;currency&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
            &quot;maxLength&quot;: 3,
            &quot;example&quot;: &quot;USD&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
          }
        },
        &quot;description&quot;: &quot;the estimated value of the property&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-476&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;PropertyValueReport&quot;,
            &quot;x-range&quot;: &quot;PropertyValueReport&quot;,
            &quot;description&quot;: &quot;an automated property value esmation&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;PropertyValueReport&quot;,
                &quot;enum&quot;: [
                  &quot;PropertyValueReport&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-474&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;document name or title&quot;,
                &quot;example&quot;: &quot;LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-475&gt;&quot;
              },
              &quot;dateCreated&quot;: {
                &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
              },
              &quot;result&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;the estimated value of the property&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-476&gt;&quot;
              },
              &quot;about&quot;: {
                &quot;allOf&quot;: [
                  {
                    &quot;title&quot;: &quot;RealEstateProperty&quot;,
                    &quot;x-range&quot;: &quot;RealEstateProperty&quot;,
                    &quot;description&quot;: &quot;a property in the real estate transaction context&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;required&quot;: [
                      &quot;type&quot;,
                      &quot;propertyType&quot;
                    ],
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;description&quot;: &quot;\&quot;RealEstateProperty\&quot;&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateProperty&quot;
                        ],
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-478&gt;&quot;
                      },
                      &quot;propertyType&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;RESO property type (see range for allowed values)&quot;,
                        &quot;x-range&quot;: &quot;PropertyType&quot;,
                        &quot;minLength&quot;: 4,
                        &quot;maxLength&quot;: 4,
                        &quot;enum&quot;: [
                          &quot;RESI&quot;,
                          &quot;RLSE&quot;,
                          &quot;RINC&quot;,
                          &quot;LAND&quot;,
                          &quot;MOBI&quot;,
                          &quot;FARM&quot;,
                          &quot;COMS&quot;,
                          &quot;COML&quot;,
                          &quot;BUSO&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-419&gt;&quot;
                      },
                      &quot;addressCountry&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;two-letter ISO 3166-1 alpha-2 country code&quot;,
                        &quot;example&quot;: &quot;US&quot;,
                        &quot;enum&quot;: [
                          &quot;CA&quot;,
                          &quot;DE&quot;,
                          &quot;GR&quot;,
                          &quot;IN&quot;,
                          &quot;IT&quot;,
                          &quot;MX&quot;,
                          &quot;PE&quot;,
                          &quot;PT&quot;,
                          &quot;ES&quot;,
                          &quot;AE&quot;,
                          &quot;GB&quot;,
                          &quot;US&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-395&gt;&quot;
                      },
                      &quot;addressLocality&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;City, Township.&quot;,
                        &quot;example&quot;: &quot;Gotham City&quot;,
                        &quot;maxLength&quot;: 50,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-396&gt;&quot;
                      },
                      &quot;addressRegion&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;State or Province.&quot;,
                        &quot;example&quot;: &quot;New Jersey&quot;,
                        &quot;maxLength&quot;: 3,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-397&gt;&quot;
                      },
                      &quot;apn&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Assessors Parcel Number&quot;,
                        &quot;example&quot;: &quot;ABC-12345-XX-XXXX&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-479&gt;&quot;
                      },
                      &quot;image&quot;: {
                        &quot;title&quot;: &quot;image&quot;,
                        &quot;description&quot;: &quot;an ImageObject or URI reference to an image on the web.&quot;,
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;x-range&quot;: [
                          &quot;ImageObject&quot;
                        ],
                        &quot;items&quot;: [
                          {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;allOf&quot;: [
                              {
                                &quot;title&quot;: &quot;MediaObject&quot;,
                                &quot;description&quot;: &quot;an image, video or document availble for download&quot;,
                                &quot;x-subclass&quot;: [
                                  &quot;ImageObject&quot;,
                                  &quot;DigitalDocument&quot;
                                ],
                                &quot;allOf&quot;: [
                                  {
                                    &quot;type&quot;: &quot;object&quot;,
                                    &quot;required&quot;: [
                                      &quot;type&quot;
                                    ],
                                    &quot;properties&quot;: {
                                      &quot;type&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
                                      }
                                    },
                                    &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
                                  },
                                  {
                                    &quot;properties&quot;: {
                                      &quot;type&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;enum&quot;: [
                                          &quot;MediaObject&quot;,
                                          &quot;ImageObject&quot;,
                                          &quot;DigitalDocument&quot;
                                        ]
                                      },
                                      &quot;id&quot;: {
                                        &quot;description&quot;: &quot;the URL to access the item.&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/public/logo/fileName.zip&quot;,
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;
                                      },
                                      &quot;name&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;the file name of the object.&quot;,
                                        &quot;example&quot;: &quot;fileName.zip&quot;
                                      },
                                      &quot;encodingFormat&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;MIME type&quot;,
                                        &quot;example&quot;: &quot;application/zip&quot;
                                      },
                                      &quot;about&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;,
                                        &quot;description&quot;: &quot;URI to the subject of the image or logo&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/profile/card#me&quot;
                                      },
                                      &quot;url&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;,
                                        &quot;description&quot;: &quot;URL of the image content&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/public/profile/image.jpg&quot;
                                      }
                                    },
                                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-178&gt;&quot;
                                  }
                                ],
                                &quot;x-parser-schema-id&quot;: &quot;MediaObject&quot;
                              },
                              {
                                &quot;title&quot;: &quot;ImageObject&quot;,
                                &quot;x-range&quot;: &quot;ImageObject&quot;,
                                &quot;properties&quot;: {
                                  &quot;type&quot;: {
                                    &quot;enum&quot;: [
                                      &quot;ImageObject&quot;
                                    ],
                                    &quot;example&quot;: &quot;ImageObject&quot;
                                  },
                                  &quot;id&quot;: {
                                    &quot;example&quot;: &quot;http://user.example.com/public/logo/image.jpg&quot;
                                  },
                                  &quot;name&quot;: {
                                    &quot;example&quot;: &quot;image.jpg&quot;
                                  },
                                  &quot;encodingFormat&quot;: {
                                    &quot;example&quot;: &quot;image/jpeg&quot;
                                  }
                                },
                                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-179&gt;&quot;
                              }
                            ],
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-177&gt;&quot;
                          }
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-401&gt;&quot;
                      },
                      &quot;latitude&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;The latitude of a location.&quot;,
                        &quot;x-title&quot;: &quot;latitude&quot;,
                        &quot;example&quot;: 40.75,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
                      },
                      &quot;listingId&quot;: {
                        &quot;description&quot;: &quot;the local identifier for the listing (MLS #)&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-480&gt;&quot;
                      },
                      &quot;livingArea&quot;: {
                        &quot;description&quot;: &quot;property indoor space&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;QuantitativeValue&quot;,
                          &quot;unitCode&quot;: &quot;SqFt&quot;,
                          &quot;unitText&quot;: &quot;Square Feet&quot;,
                          &quot;value&quot;: 1500
                        },
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-481&gt;&quot;
                      },
                      &quot;longitude&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;The longitude of a location.&quot;,
                        &quot;x-title&quot;: &quot;longitude&quot;,
                        &quot;example&quot;: 73.98,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
                      },
                      &quot;lotSize&quot;: {
                        &quot;description&quot;: &quot;outdoor space minValue, maxValue&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;QuantitativeValue&quot;,
                          &quot;unitCode&quot;: &quot;AC&quot;,
                          &quot;unitText&quot;: &quot;Acres&quot;,
                          &quot;value&quot;: 0.5
                        },
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-482&gt;&quot;
                      },
                      &quot;numberOfBathrooms&quot;: {
                        &quot;description&quot;: &quot;the number of bathrooms&quot;,
                        &quot;example&quot;: &quot;2&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-483&gt;&quot;
                      },
                      &quot;numberOfBedrooms&quot;: {
                        &quot;description&quot;: &quot;the number of bedrooms&quot;,
                        &quot;example&quot;: &quot;3&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-484&gt;&quot;
                      },
                      &quot;numberOfRooms&quot;: {
                        &quot;description&quot;: &quot;the total number of rooms in the building&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: 7,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-485&gt;&quot;
                      },
                      &quot;postalCode&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Zip/Post Code&quot;,
                        &quot;example&quot;: &quot;10010&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-417&gt;&quot;
                      },
                      &quot;propertySubType&quot;: {
                        &quot;title&quot;: &quot;propertySubType&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-range&quot;: &quot;PropertySubType&quot;,
                        &quot;description&quot;: &quot;RESO property sub-type (see range for allowed values)&quot;,
                        &quot;enum&quot;: [
                          &quot;ApartmentPropertyType&quot;,
                          &quot;BoatSlipPropertyType&quot;,
                          &quot;CabinPropertyType&quot;,
                          &quot;CondominiumPropertyType&quot;,
                          &quot;DeededParkingPropertyType&quot;,
                          &quot;DuplexPropertyType&quot;,
                          &quot;FarmPropertyType&quot;,
                          &quot;ManufacturedHomePropertyType&quot;,
                          &quot;ManufacturedOnLandPropertyType&quot;,
                          &quot;MobileHomePropertyType&quot;,
                          &quot;OwnYourOwnPropertyType&quot;,
                          &quot;QuadruplexPropertyType&quot;,
                          &quot;RanchPropertyType&quot;,
                          &quot;SingleFamilyPropertyType&quot;,
                          &quot;StockCooperativePropertyType&quot;,
                          &quot;TimesharePropertyType&quot;,
                          &quot;TownhousePropertyType&quot;,
                          &quot;TriplexPropertyType&quot;,
                          &quot;AgriculturePropertyType&quot;,
                          &quot;BusinessPropertyType&quot;,
                          &quot;HotelMotelPropertyType&quot;,
                          &quot;IndustrialPropertyType&quot;,
                          &quot;MixedUsePropertyType&quot;,
                          &quot;MultiFamilyPropertyType&quot;,
                          &quot;OfficePropertyType&quot;,
                          &quot;RetailPropertyType&quot;,
                          &quot;UnimprovedLandPropertyType&quot;,
                          &quot;WarehousePropertyType&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-418&gt;&quot;
                      },
                      &quot;stories&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;he number of floors in the property&quot;,
                        &quot;example&quot;: 2,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-421&gt;&quot;
                      },
                      &quot;streetAddress&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;the street address&quot;,
                        &quot;example&quot;: &quot;1007 Mountain Gate Rd&quot;,
                        &quot;maxLength&quot;: 75,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-422&gt;&quot;
                      },
                      &quot;yearBuilt&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;the year the structure was created&quot;,
                        &quot;example&quot;: 1988,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-425&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;RealEstateProperty&quot;
                  },
                  {
                    &quot;description&quot;: &quot;the subject property&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-486&gt;&quot;
                  },
                  {
                    &quot;properties&quot;: {
                      &quot;additionalProperty&quot;: {
                        &quot;example&quot;: {
                          &quot;heating&quot;: null,
                          &quot;cooling&quot;: null,
                          &quot;isForeclosure&quot;: null,
                          &quot;isShortsale&quot;: null,
                          &quot;score&quot;: 7,
                          &quot;parcelId&quot;: null,
                          &quot;averageSalePrice&quot;: {
                            &quot;type&quot;: &quot;PriceSpecification&quot;,
                            &quot;price&quot;: 7500000,
                            &quot;priceCurrency&quot;: &quot;USD&quot;
                          },
                          &quot;nonDisclosureProperty&quot;: false,
                          &quot;taxAssessedValue&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;taxAssessedYear&quot;: 2021,
                          &quot;inHouseCompanyListingUrl&quot;: null,
                          &quot;inHouseCompanyListingEvent&quot;: null,
                          &quot;neighborhoodMetrics&quot;: null,
                          &quot;neighborhoodName&quot;: &quot;DEER CREEK WOODS&quot;,
                          &quot;neighborhoodKey&quot;: null,
                          &quot;useNeighborhoodDataForCharts&quot;: false,
                          &quot;ownerName&quot;: &quot;Bob Jones&quot;,
                          &quot;ownerOccupied&quot;: &quot;Y&quot;,
                          &quot;ownersEstimatedEquity&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;firstLoanPrice&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;firstLoanLenderName&quot;: &quot;&quot;,
                          &quot;secondLoanPrice&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: null,
                            &quot;currency&quot;: null
                          },
                          &quot;secondLoanLenderName&quot;: &quot;N/A&quot;,
                          &quot;lastRefinanceLoanVal1&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;lastRefinanceLenderName1&quot;: &quot;N/A&quot;,
                          &quot;lastRefinanceLoanVal2&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: null,
                            &quot;currency&quot;: null
                          },
                          &quot;lastRefinanceLenderName2&quot;: &quot;N/A&quot;,
                          &quot;Title_Company&quot;: &quot;&quot;
                        }
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-487&gt;&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-477&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;PropertyValueReport&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = maxValue
required = false
path = result



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;number&quot;,
    &quot;description&quot;: &quot;the actual or expected value&quot;,
    &quot;example&quot;: 2700000,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;title&quot;: &quot;MonetaryAmount&quot;,
        &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
        &quot;required&quot;: [
          &quot;type&quot;,
          &quot;value&quot;,
          &quot;currency&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;MonetaryAmount&quot;,
            &quot;enum&quot;: [
              &quot;MonetaryAmount&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
          },
          &quot;minValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the lower limit of the range&quot;,
            &quot;example&quot;: 2400000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
          },
          &quot;maxValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the upper limit of the range&quot;,
            &quot;example&quot;: 3200000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
          },
          &quot;value&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the actual or expected value&quot;,
            &quot;example&quot;: 2700000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
          },
          &quot;currency&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
            &quot;maxLength&quot;: 3,
            &quot;example&quot;: &quot;USD&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
          }
        },
        &quot;description&quot;: &quot;the estimated value of the property&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-476&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;PropertyValueReport&quot;,
            &quot;x-range&quot;: &quot;PropertyValueReport&quot;,
            &quot;description&quot;: &quot;an automated property value esmation&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;PropertyValueReport&quot;,
                &quot;enum&quot;: [
                  &quot;PropertyValueReport&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-474&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;document name or title&quot;,
                &quot;example&quot;: &quot;LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-475&gt;&quot;
              },
              &quot;dateCreated&quot;: {
                &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
              },
              &quot;result&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;the estimated value of the property&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-476&gt;&quot;
              },
              &quot;about&quot;: {
                &quot;allOf&quot;: [
                  {
                    &quot;title&quot;: &quot;RealEstateProperty&quot;,
                    &quot;x-range&quot;: &quot;RealEstateProperty&quot;,
                    &quot;description&quot;: &quot;a property in the real estate transaction context&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;required&quot;: [
                      &quot;type&quot;,
                      &quot;propertyType&quot;
                    ],
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;description&quot;: &quot;\&quot;RealEstateProperty\&quot;&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateProperty&quot;
                        ],
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-478&gt;&quot;
                      },
                      &quot;propertyType&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;RESO property type (see range for allowed values)&quot;,
                        &quot;x-range&quot;: &quot;PropertyType&quot;,
                        &quot;minLength&quot;: 4,
                        &quot;maxLength&quot;: 4,
                        &quot;enum&quot;: [
                          &quot;RESI&quot;,
                          &quot;RLSE&quot;,
                          &quot;RINC&quot;,
                          &quot;LAND&quot;,
                          &quot;MOBI&quot;,
                          &quot;FARM&quot;,
                          &quot;COMS&quot;,
                          &quot;COML&quot;,
                          &quot;BUSO&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-419&gt;&quot;
                      },
                      &quot;addressCountry&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;two-letter ISO 3166-1 alpha-2 country code&quot;,
                        &quot;example&quot;: &quot;US&quot;,
                        &quot;enum&quot;: [
                          &quot;CA&quot;,
                          &quot;DE&quot;,
                          &quot;GR&quot;,
                          &quot;IN&quot;,
                          &quot;IT&quot;,
                          &quot;MX&quot;,
                          &quot;PE&quot;,
                          &quot;PT&quot;,
                          &quot;ES&quot;,
                          &quot;AE&quot;,
                          &quot;GB&quot;,
                          &quot;US&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-395&gt;&quot;
                      },
                      &quot;addressLocality&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;City, Township.&quot;,
                        &quot;example&quot;: &quot;Gotham City&quot;,
                        &quot;maxLength&quot;: 50,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-396&gt;&quot;
                      },
                      &quot;addressRegion&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;State or Province.&quot;,
                        &quot;example&quot;: &quot;New Jersey&quot;,
                        &quot;maxLength&quot;: 3,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-397&gt;&quot;
                      },
                      &quot;apn&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Assessors Parcel Number&quot;,
                        &quot;example&quot;: &quot;ABC-12345-XX-XXXX&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-479&gt;&quot;
                      },
                      &quot;image&quot;: {
                        &quot;title&quot;: &quot;image&quot;,
                        &quot;description&quot;: &quot;an ImageObject or URI reference to an image on the web.&quot;,
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;x-range&quot;: [
                          &quot;ImageObject&quot;
                        ],
                        &quot;items&quot;: [
                          {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;allOf&quot;: [
                              {
                                &quot;title&quot;: &quot;MediaObject&quot;,
                                &quot;description&quot;: &quot;an image, video or document availble for download&quot;,
                                &quot;x-subclass&quot;: [
                                  &quot;ImageObject&quot;,
                                  &quot;DigitalDocument&quot;
                                ],
                                &quot;allOf&quot;: [
                                  {
                                    &quot;type&quot;: &quot;object&quot;,
                                    &quot;required&quot;: [
                                      &quot;type&quot;
                                    ],
                                    &quot;properties&quot;: {
                                      &quot;type&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
                                      }
                                    },
                                    &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
                                  },
                                  {
                                    &quot;properties&quot;: {
                                      &quot;type&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;enum&quot;: [
                                          &quot;MediaObject&quot;,
                                          &quot;ImageObject&quot;,
                                          &quot;DigitalDocument&quot;
                                        ]
                                      },
                                      &quot;id&quot;: {
                                        &quot;description&quot;: &quot;the URL to access the item.&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/public/logo/fileName.zip&quot;,
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;
                                      },
                                      &quot;name&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;the file name of the object.&quot;,
                                        &quot;example&quot;: &quot;fileName.zip&quot;
                                      },
                                      &quot;encodingFormat&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;MIME type&quot;,
                                        &quot;example&quot;: &quot;application/zip&quot;
                                      },
                                      &quot;about&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;,
                                        &quot;description&quot;: &quot;URI to the subject of the image or logo&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/profile/card#me&quot;
                                      },
                                      &quot;url&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;,
                                        &quot;description&quot;: &quot;URL of the image content&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/public/profile/image.jpg&quot;
                                      }
                                    },
                                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-178&gt;&quot;
                                  }
                                ],
                                &quot;x-parser-schema-id&quot;: &quot;MediaObject&quot;
                              },
                              {
                                &quot;title&quot;: &quot;ImageObject&quot;,
                                &quot;x-range&quot;: &quot;ImageObject&quot;,
                                &quot;properties&quot;: {
                                  &quot;type&quot;: {
                                    &quot;enum&quot;: [
                                      &quot;ImageObject&quot;
                                    ],
                                    &quot;example&quot;: &quot;ImageObject&quot;
                                  },
                                  &quot;id&quot;: {
                                    &quot;example&quot;: &quot;http://user.example.com/public/logo/image.jpg&quot;
                                  },
                                  &quot;name&quot;: {
                                    &quot;example&quot;: &quot;image.jpg&quot;
                                  },
                                  &quot;encodingFormat&quot;: {
                                    &quot;example&quot;: &quot;image/jpeg&quot;
                                  }
                                },
                                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-179&gt;&quot;
                              }
                            ],
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-177&gt;&quot;
                          }
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-401&gt;&quot;
                      },
                      &quot;latitude&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;The latitude of a location.&quot;,
                        &quot;x-title&quot;: &quot;latitude&quot;,
                        &quot;example&quot;: 40.75,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
                      },
                      &quot;listingId&quot;: {
                        &quot;description&quot;: &quot;the local identifier for the listing (MLS #)&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-480&gt;&quot;
                      },
                      &quot;livingArea&quot;: {
                        &quot;description&quot;: &quot;property indoor space&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;QuantitativeValue&quot;,
                          &quot;unitCode&quot;: &quot;SqFt&quot;,
                          &quot;unitText&quot;: &quot;Square Feet&quot;,
                          &quot;value&quot;: 1500
                        },
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-481&gt;&quot;
                      },
                      &quot;longitude&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;The longitude of a location.&quot;,
                        &quot;x-title&quot;: &quot;longitude&quot;,
                        &quot;example&quot;: 73.98,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
                      },
                      &quot;lotSize&quot;: {
                        &quot;description&quot;: &quot;outdoor space minValue, maxValue&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;QuantitativeValue&quot;,
                          &quot;unitCode&quot;: &quot;AC&quot;,
                          &quot;unitText&quot;: &quot;Acres&quot;,
                          &quot;value&quot;: 0.5
                        },
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-482&gt;&quot;
                      },
                      &quot;numberOfBathrooms&quot;: {
                        &quot;description&quot;: &quot;the number of bathrooms&quot;,
                        &quot;example&quot;: &quot;2&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-483&gt;&quot;
                      },
                      &quot;numberOfBedrooms&quot;: {
                        &quot;description&quot;: &quot;the number of bedrooms&quot;,
                        &quot;example&quot;: &quot;3&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-484&gt;&quot;
                      },
                      &quot;numberOfRooms&quot;: {
                        &quot;description&quot;: &quot;the total number of rooms in the building&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: 7,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-485&gt;&quot;
                      },
                      &quot;postalCode&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Zip/Post Code&quot;,
                        &quot;example&quot;: &quot;10010&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-417&gt;&quot;
                      },
                      &quot;propertySubType&quot;: {
                        &quot;title&quot;: &quot;propertySubType&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-range&quot;: &quot;PropertySubType&quot;,
                        &quot;description&quot;: &quot;RESO property sub-type (see range for allowed values)&quot;,
                        &quot;enum&quot;: [
                          &quot;ApartmentPropertyType&quot;,
                          &quot;BoatSlipPropertyType&quot;,
                          &quot;CabinPropertyType&quot;,
                          &quot;CondominiumPropertyType&quot;,
                          &quot;DeededParkingPropertyType&quot;,
                          &quot;DuplexPropertyType&quot;,
                          &quot;FarmPropertyType&quot;,
                          &quot;ManufacturedHomePropertyType&quot;,
                          &quot;ManufacturedOnLandPropertyType&quot;,
                          &quot;MobileHomePropertyType&quot;,
                          &quot;OwnYourOwnPropertyType&quot;,
                          &quot;QuadruplexPropertyType&quot;,
                          &quot;RanchPropertyType&quot;,
                          &quot;SingleFamilyPropertyType&quot;,
                          &quot;StockCooperativePropertyType&quot;,
                          &quot;TimesharePropertyType&quot;,
                          &quot;TownhousePropertyType&quot;,
                          &quot;TriplexPropertyType&quot;,
                          &quot;AgriculturePropertyType&quot;,
                          &quot;BusinessPropertyType&quot;,
                          &quot;HotelMotelPropertyType&quot;,
                          &quot;IndustrialPropertyType&quot;,
                          &quot;MixedUsePropertyType&quot;,
                          &quot;MultiFamilyPropertyType&quot;,
                          &quot;OfficePropertyType&quot;,
                          &quot;RetailPropertyType&quot;,
                          &quot;UnimprovedLandPropertyType&quot;,
                          &quot;WarehousePropertyType&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-418&gt;&quot;
                      },
                      &quot;stories&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;he number of floors in the property&quot;,
                        &quot;example&quot;: 2,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-421&gt;&quot;
                      },
                      &quot;streetAddress&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;the street address&quot;,
                        &quot;example&quot;: &quot;1007 Mountain Gate Rd&quot;,
                        &quot;maxLength&quot;: 75,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-422&gt;&quot;
                      },
                      &quot;yearBuilt&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;the year the structure was created&quot;,
                        &quot;example&quot;: 1988,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-425&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;RealEstateProperty&quot;
                  },
                  {
                    &quot;description&quot;: &quot;the subject property&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-486&gt;&quot;
                  },
                  {
                    &quot;properties&quot;: {
                      &quot;additionalProperty&quot;: {
                        &quot;example&quot;: {
                          &quot;heating&quot;: null,
                          &quot;cooling&quot;: null,
                          &quot;isForeclosure&quot;: null,
                          &quot;isShortsale&quot;: null,
                          &quot;score&quot;: 7,
                          &quot;parcelId&quot;: null,
                          &quot;averageSalePrice&quot;: {
                            &quot;type&quot;: &quot;PriceSpecification&quot;,
                            &quot;price&quot;: 7500000,
                            &quot;priceCurrency&quot;: &quot;USD&quot;
                          },
                          &quot;nonDisclosureProperty&quot;: false,
                          &quot;taxAssessedValue&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;taxAssessedYear&quot;: 2021,
                          &quot;inHouseCompanyListingUrl&quot;: null,
                          &quot;inHouseCompanyListingEvent&quot;: null,
                          &quot;neighborhoodMetrics&quot;: null,
                          &quot;neighborhoodName&quot;: &quot;DEER CREEK WOODS&quot;,
                          &quot;neighborhoodKey&quot;: null,
                          &quot;useNeighborhoodDataForCharts&quot;: false,
                          &quot;ownerName&quot;: &quot;Bob Jones&quot;,
                          &quot;ownerOccupied&quot;: &quot;Y&quot;,
                          &quot;ownersEstimatedEquity&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;firstLoanPrice&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;firstLoanLenderName&quot;: &quot;&quot;,
                          &quot;secondLoanPrice&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: null,
                            &quot;currency&quot;: null
                          },
                          &quot;secondLoanLenderName&quot;: &quot;N/A&quot;,
                          &quot;lastRefinanceLoanVal1&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;lastRefinanceLenderName1&quot;: &quot;N/A&quot;,
                          &quot;lastRefinanceLoanVal2&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: null,
                            &quot;currency&quot;: null
                          },
                          &quot;lastRefinanceLenderName2&quot;: &quot;N/A&quot;,
                          &quot;Title_Company&quot;: &quot;&quot;
                        }
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-487&gt;&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-477&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;PropertyValueReport&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = value
required = false
path = result



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
    &quot;maxLength&quot;: 3,
    &quot;example&quot;: &quot;USD&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;title&quot;: &quot;MonetaryAmount&quot;,
        &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
        &quot;required&quot;: [
          &quot;type&quot;,
          &quot;value&quot;,
          &quot;currency&quot;
        ],
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;MonetaryAmount&quot;,
            &quot;enum&quot;: [
              &quot;MonetaryAmount&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
          },
          &quot;minValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the lower limit of the range&quot;,
            &quot;example&quot;: 2400000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
          },
          &quot;maxValue&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the upper limit of the range&quot;,
            &quot;example&quot;: 3200000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
          },
          &quot;value&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the actual or expected value&quot;,
            &quot;example&quot;: 2700000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
          },
          &quot;currency&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
            &quot;maxLength&quot;: 3,
            &quot;example&quot;: &quot;USD&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
          }
        },
        &quot;description&quot;: &quot;the estimated value of the property&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-476&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;PropertyValueReport&quot;,
            &quot;x-range&quot;: &quot;PropertyValueReport&quot;,
            &quot;description&quot;: &quot;an automated property value esmation&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;PropertyValueReport&quot;,
                &quot;enum&quot;: [
                  &quot;PropertyValueReport&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-474&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;document name or title&quot;,
                &quot;example&quot;: &quot;LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-475&gt;&quot;
              },
              &quot;dateCreated&quot;: {
                &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
              },
              &quot;result&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;the estimated value of the property&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-476&gt;&quot;
              },
              &quot;about&quot;: {
                &quot;allOf&quot;: [
                  {
                    &quot;title&quot;: &quot;RealEstateProperty&quot;,
                    &quot;x-range&quot;: &quot;RealEstateProperty&quot;,
                    &quot;description&quot;: &quot;a property in the real estate transaction context&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;required&quot;: [
                      &quot;type&quot;,
                      &quot;propertyType&quot;
                    ],
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;description&quot;: &quot;\&quot;RealEstateProperty\&quot;&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateProperty&quot;
                        ],
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-478&gt;&quot;
                      },
                      &quot;propertyType&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;RESO property type (see range for allowed values)&quot;,
                        &quot;x-range&quot;: &quot;PropertyType&quot;,
                        &quot;minLength&quot;: 4,
                        &quot;maxLength&quot;: 4,
                        &quot;enum&quot;: [
                          &quot;RESI&quot;,
                          &quot;RLSE&quot;,
                          &quot;RINC&quot;,
                          &quot;LAND&quot;,
                          &quot;MOBI&quot;,
                          &quot;FARM&quot;,
                          &quot;COMS&quot;,
                          &quot;COML&quot;,
                          &quot;BUSO&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-419&gt;&quot;
                      },
                      &quot;addressCountry&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;two-letter ISO 3166-1 alpha-2 country code&quot;,
                        &quot;example&quot;: &quot;US&quot;,
                        &quot;enum&quot;: [
                          &quot;CA&quot;,
                          &quot;DE&quot;,
                          &quot;GR&quot;,
                          &quot;IN&quot;,
                          &quot;IT&quot;,
                          &quot;MX&quot;,
                          &quot;PE&quot;,
                          &quot;PT&quot;,
                          &quot;ES&quot;,
                          &quot;AE&quot;,
                          &quot;GB&quot;,
                          &quot;US&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-395&gt;&quot;
                      },
                      &quot;addressLocality&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;City, Township.&quot;,
                        &quot;example&quot;: &quot;Gotham City&quot;,
                        &quot;maxLength&quot;: 50,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-396&gt;&quot;
                      },
                      &quot;addressRegion&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;State or Province.&quot;,
                        &quot;example&quot;: &quot;New Jersey&quot;,
                        &quot;maxLength&quot;: 3,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-397&gt;&quot;
                      },
                      &quot;apn&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Assessors Parcel Number&quot;,
                        &quot;example&quot;: &quot;ABC-12345-XX-XXXX&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-479&gt;&quot;
                      },
                      &quot;image&quot;: {
                        &quot;title&quot;: &quot;image&quot;,
                        &quot;description&quot;: &quot;an ImageObject or URI reference to an image on the web.&quot;,
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;x-range&quot;: [
                          &quot;ImageObject&quot;
                        ],
                        &quot;items&quot;: [
                          {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;allOf&quot;: [
                              {
                                &quot;title&quot;: &quot;MediaObject&quot;,
                                &quot;description&quot;: &quot;an image, video or document availble for download&quot;,
                                &quot;x-subclass&quot;: [
                                  &quot;ImageObject&quot;,
                                  &quot;DigitalDocument&quot;
                                ],
                                &quot;allOf&quot;: [
                                  {
                                    &quot;type&quot;: &quot;object&quot;,
                                    &quot;required&quot;: [
                                      &quot;type&quot;
                                    ],
                                    &quot;properties&quot;: {
                                      &quot;type&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
                                      }
                                    },
                                    &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
                                  },
                                  {
                                    &quot;properties&quot;: {
                                      &quot;type&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;enum&quot;: [
                                          &quot;MediaObject&quot;,
                                          &quot;ImageObject&quot;,
                                          &quot;DigitalDocument&quot;
                                        ]
                                      },
                                      &quot;id&quot;: {
                                        &quot;description&quot;: &quot;the URL to access the item.&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/public/logo/fileName.zip&quot;,
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;
                                      },
                                      &quot;name&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;the file name of the object.&quot;,
                                        &quot;example&quot;: &quot;fileName.zip&quot;
                                      },
                                      &quot;encodingFormat&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;MIME type&quot;,
                                        &quot;example&quot;: &quot;application/zip&quot;
                                      },
                                      &quot;about&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;,
                                        &quot;description&quot;: &quot;URI to the subject of the image or logo&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/profile/card#me&quot;
                                      },
                                      &quot;url&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;,
                                        &quot;description&quot;: &quot;URL of the image content&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/public/profile/image.jpg&quot;
                                      }
                                    },
                                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-178&gt;&quot;
                                  }
                                ],
                                &quot;x-parser-schema-id&quot;: &quot;MediaObject&quot;
                              },
                              {
                                &quot;title&quot;: &quot;ImageObject&quot;,
                                &quot;x-range&quot;: &quot;ImageObject&quot;,
                                &quot;properties&quot;: {
                                  &quot;type&quot;: {
                                    &quot;enum&quot;: [
                                      &quot;ImageObject&quot;
                                    ],
                                    &quot;example&quot;: &quot;ImageObject&quot;
                                  },
                                  &quot;id&quot;: {
                                    &quot;example&quot;: &quot;http://user.example.com/public/logo/image.jpg&quot;
                                  },
                                  &quot;name&quot;: {
                                    &quot;example&quot;: &quot;image.jpg&quot;
                                  },
                                  &quot;encodingFormat&quot;: {
                                    &quot;example&quot;: &quot;image/jpeg&quot;
                                  }
                                },
                                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-179&gt;&quot;
                              }
                            ],
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-177&gt;&quot;
                          }
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-401&gt;&quot;
                      },
                      &quot;latitude&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;The latitude of a location.&quot;,
                        &quot;x-title&quot;: &quot;latitude&quot;,
                        &quot;example&quot;: 40.75,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
                      },
                      &quot;listingId&quot;: {
                        &quot;description&quot;: &quot;the local identifier for the listing (MLS #)&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-480&gt;&quot;
                      },
                      &quot;livingArea&quot;: {
                        &quot;description&quot;: &quot;property indoor space&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;QuantitativeValue&quot;,
                          &quot;unitCode&quot;: &quot;SqFt&quot;,
                          &quot;unitText&quot;: &quot;Square Feet&quot;,
                          &quot;value&quot;: 1500
                        },
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-481&gt;&quot;
                      },
                      &quot;longitude&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;The longitude of a location.&quot;,
                        &quot;x-title&quot;: &quot;longitude&quot;,
                        &quot;example&quot;: 73.98,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
                      },
                      &quot;lotSize&quot;: {
                        &quot;description&quot;: &quot;outdoor space minValue, maxValue&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;QuantitativeValue&quot;,
                          &quot;unitCode&quot;: &quot;AC&quot;,
                          &quot;unitText&quot;: &quot;Acres&quot;,
                          &quot;value&quot;: 0.5
                        },
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-482&gt;&quot;
                      },
                      &quot;numberOfBathrooms&quot;: {
                        &quot;description&quot;: &quot;the number of bathrooms&quot;,
                        &quot;example&quot;: &quot;2&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-483&gt;&quot;
                      },
                      &quot;numberOfBedrooms&quot;: {
                        &quot;description&quot;: &quot;the number of bedrooms&quot;,
                        &quot;example&quot;: &quot;3&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-484&gt;&quot;
                      },
                      &quot;numberOfRooms&quot;: {
                        &quot;description&quot;: &quot;the total number of rooms in the building&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: 7,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-485&gt;&quot;
                      },
                      &quot;postalCode&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Zip/Post Code&quot;,
                        &quot;example&quot;: &quot;10010&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-417&gt;&quot;
                      },
                      &quot;propertySubType&quot;: {
                        &quot;title&quot;: &quot;propertySubType&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-range&quot;: &quot;PropertySubType&quot;,
                        &quot;description&quot;: &quot;RESO property sub-type (see range for allowed values)&quot;,
                        &quot;enum&quot;: [
                          &quot;ApartmentPropertyType&quot;,
                          &quot;BoatSlipPropertyType&quot;,
                          &quot;CabinPropertyType&quot;,
                          &quot;CondominiumPropertyType&quot;,
                          &quot;DeededParkingPropertyType&quot;,
                          &quot;DuplexPropertyType&quot;,
                          &quot;FarmPropertyType&quot;,
                          &quot;ManufacturedHomePropertyType&quot;,
                          &quot;ManufacturedOnLandPropertyType&quot;,
                          &quot;MobileHomePropertyType&quot;,
                          &quot;OwnYourOwnPropertyType&quot;,
                          &quot;QuadruplexPropertyType&quot;,
                          &quot;RanchPropertyType&quot;,
                          &quot;SingleFamilyPropertyType&quot;,
                          &quot;StockCooperativePropertyType&quot;,
                          &quot;TimesharePropertyType&quot;,
                          &quot;TownhousePropertyType&quot;,
                          &quot;TriplexPropertyType&quot;,
                          &quot;AgriculturePropertyType&quot;,
                          &quot;BusinessPropertyType&quot;,
                          &quot;HotelMotelPropertyType&quot;,
                          &quot;IndustrialPropertyType&quot;,
                          &quot;MixedUsePropertyType&quot;,
                          &quot;MultiFamilyPropertyType&quot;,
                          &quot;OfficePropertyType&quot;,
                          &quot;RetailPropertyType&quot;,
                          &quot;UnimprovedLandPropertyType&quot;,
                          &quot;WarehousePropertyType&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-418&gt;&quot;
                      },
                      &quot;stories&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;he number of floors in the property&quot;,
                        &quot;example&quot;: 2,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-421&gt;&quot;
                      },
                      &quot;streetAddress&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;the street address&quot;,
                        &quot;example&quot;: &quot;1007 Mountain Gate Rd&quot;,
                        &quot;maxLength&quot;: 75,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-422&gt;&quot;
                      },
                      &quot;yearBuilt&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;the year the structure was created&quot;,
                        &quot;example&quot;: 1988,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-425&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;RealEstateProperty&quot;
                  },
                  {
                    &quot;description&quot;: &quot;the subject property&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-486&gt;&quot;
                  },
                  {
                    &quot;properties&quot;: {
                      &quot;additionalProperty&quot;: {
                        &quot;example&quot;: {
                          &quot;heating&quot;: null,
                          &quot;cooling&quot;: null,
                          &quot;isForeclosure&quot;: null,
                          &quot;isShortsale&quot;: null,
                          &quot;score&quot;: 7,
                          &quot;parcelId&quot;: null,
                          &quot;averageSalePrice&quot;: {
                            &quot;type&quot;: &quot;PriceSpecification&quot;,
                            &quot;price&quot;: 7500000,
                            &quot;priceCurrency&quot;: &quot;USD&quot;
                          },
                          &quot;nonDisclosureProperty&quot;: false,
                          &quot;taxAssessedValue&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;taxAssessedYear&quot;: 2021,
                          &quot;inHouseCompanyListingUrl&quot;: null,
                          &quot;inHouseCompanyListingEvent&quot;: null,
                          &quot;neighborhoodMetrics&quot;: null,
                          &quot;neighborhoodName&quot;: &quot;DEER CREEK WOODS&quot;,
                          &quot;neighborhoodKey&quot;: null,
                          &quot;useNeighborhoodDataForCharts&quot;: false,
                          &quot;ownerName&quot;: &quot;Bob Jones&quot;,
                          &quot;ownerOccupied&quot;: &quot;Y&quot;,
                          &quot;ownersEstimatedEquity&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;firstLoanPrice&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;firstLoanLenderName&quot;: &quot;&quot;,
                          &quot;secondLoanPrice&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: null,
                            &quot;currency&quot;: null
                          },
                          &quot;secondLoanLenderName&quot;: &quot;N/A&quot;,
                          &quot;lastRefinanceLoanVal1&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;lastRefinanceLenderName1&quot;: &quot;N/A&quot;,
                          &quot;lastRefinanceLoanVal2&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: null,
                            &quot;currency&quot;: null
                          },
                          &quot;lastRefinanceLenderName2&quot;: &quot;N/A&quot;,
                          &quot;Title_Company&quot;: &quot;&quot;
                        }
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-487&gt;&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-477&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;PropertyValueReport&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = currency
required = false
path = result





{
  "_json": {
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
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}



prop = {
  &quot;_json&quot;: {
    &quot;title&quot;: &quot;RealEstateProperty&quot;,
    &quot;x-range&quot;: &quot;RealEstateProperty&quot;,
    &quot;description&quot;: &quot;a property in the real estate transaction context&quot;,
    &quot;type&quot;: &quot;object&quot;,
    &quot;required&quot;: [
      &quot;type&quot;,
      &quot;propertyType&quot;
    ],
    &quot;properties&quot;: {
      &quot;type&quot;: {
        &quot;description&quot;: &quot;\&quot;RealEstateProperty\&quot;&quot;,
        &quot;enum&quot;: [
          &quot;RealEstateProperty&quot;
        ],
        &quot;type&quot;: &quot;string&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-478&gt;&quot;
      },
      &quot;propertyType&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;RESO property type (see range for allowed values)&quot;,
        &quot;x-range&quot;: &quot;PropertyType&quot;,
        &quot;minLength&quot;: 4,
        &quot;maxLength&quot;: 4,
        &quot;enum&quot;: [
          &quot;RESI&quot;,
          &quot;RLSE&quot;,
          &quot;RINC&quot;,
          &quot;LAND&quot;,
          &quot;MOBI&quot;,
          &quot;FARM&quot;,
          &quot;COMS&quot;,
          &quot;COML&quot;,
          &quot;BUSO&quot;
        ],
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-419&gt;&quot;
      },
      &quot;addressCountry&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;two-letter ISO 3166-1 alpha-2 country code&quot;,
        &quot;example&quot;: &quot;US&quot;,
        &quot;enum&quot;: [
          &quot;CA&quot;,
          &quot;DE&quot;,
          &quot;GR&quot;,
          &quot;IN&quot;,
          &quot;IT&quot;,
          &quot;MX&quot;,
          &quot;PE&quot;,
          &quot;PT&quot;,
          &quot;ES&quot;,
          &quot;AE&quot;,
          &quot;GB&quot;,
          &quot;US&quot;
        ],
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-395&gt;&quot;
      },
      &quot;addressLocality&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;City, Township.&quot;,
        &quot;example&quot;: &quot;Gotham City&quot;,
        &quot;maxLength&quot;: 50,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-396&gt;&quot;
      },
      &quot;addressRegion&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;State or Province.&quot;,
        &quot;example&quot;: &quot;New Jersey&quot;,
        &quot;maxLength&quot;: 3,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-397&gt;&quot;
      },
      &quot;apn&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;Assessors Parcel Number&quot;,
        &quot;example&quot;: &quot;ABC-12345-XX-XXXX&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-479&gt;&quot;
      },
      &quot;image&quot;: {
        &quot;title&quot;: &quot;image&quot;,
        &quot;description&quot;: &quot;an ImageObject or URI reference to an image on the web.&quot;,
        &quot;type&quot;: &quot;array&quot;,
        &quot;x-range&quot;: [
          &quot;ImageObject&quot;
        ],
        &quot;items&quot;: [
          {
            &quot;type&quot;: &quot;object&quot;,
            &quot;allOf&quot;: [
              {
                &quot;title&quot;: &quot;MediaObject&quot;,
                &quot;description&quot;: &quot;an image, video or document availble for download&quot;,
                &quot;x-subclass&quot;: [
                  &quot;ImageObject&quot;,
                  &quot;DigitalDocument&quot;
                ],
                &quot;allOf&quot;: [
                  {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;required&quot;: [
                      &quot;type&quot;
                    ],
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
                  },
                  {
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;enum&quot;: [
                          &quot;MediaObject&quot;,
                          &quot;ImageObject&quot;,
                          &quot;DigitalDocument&quot;
                        ]
                      },
                      &quot;id&quot;: {
                        &quot;description&quot;: &quot;the URL to access the item.&quot;,
                        &quot;example&quot;: &quot;http://user.example.com/public/logo/fileName.zip&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;format&quot;: &quot;uri&quot;
                      },
                      &quot;name&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;the file name of the object.&quot;,
                        &quot;example&quot;: &quot;fileName.zip&quot;
                      },
                      &quot;encodingFormat&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;MIME type&quot;,
                        &quot;example&quot;: &quot;application/zip&quot;
                      },
                      &quot;about&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;format&quot;: &quot;uri&quot;,
                        &quot;description&quot;: &quot;URI to the subject of the image or logo&quot;,
                        &quot;example&quot;: &quot;http://user.example.com/profile/card#me&quot;
                      },
                      &quot;url&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;format&quot;: &quot;uri&quot;,
                        &quot;description&quot;: &quot;URL of the image content&quot;,
                        &quot;example&quot;: &quot;http://user.example.com/public/profile/image.jpg&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-178&gt;&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;MediaObject&quot;
              },
              {
                &quot;title&quot;: &quot;ImageObject&quot;,
                &quot;x-range&quot;: &quot;ImageObject&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;enum&quot;: [
                      &quot;ImageObject&quot;
                    ],
                    &quot;example&quot;: &quot;ImageObject&quot;
                  },
                  &quot;id&quot;: {
                    &quot;example&quot;: &quot;http://user.example.com/public/logo/image.jpg&quot;
                  },
                  &quot;name&quot;: {
                    &quot;example&quot;: &quot;image.jpg&quot;
                  },
                  &quot;encodingFormat&quot;: {
                    &quot;example&quot;: &quot;image/jpeg&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-179&gt;&quot;
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-177&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-401&gt;&quot;
      },
      &quot;latitude&quot;: {
        &quot;type&quot;: &quot;number&quot;,
        &quot;description&quot;: &quot;The latitude of a location.&quot;,
        &quot;x-title&quot;: &quot;latitude&quot;,
        &quot;example&quot;: 40.75,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
      },
      &quot;listingId&quot;: {
        &quot;description&quot;: &quot;the local identifier for the listing (MLS #)&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-480&gt;&quot;
      },
      &quot;livingArea&quot;: {
        &quot;description&quot;: &quot;property indoor space&quot;,
        &quot;example&quot;: {
          &quot;type&quot;: &quot;QuantitativeValue&quot;,
          &quot;unitCode&quot;: &quot;SqFt&quot;,
          &quot;unitText&quot;: &quot;Square Feet&quot;,
          &quot;value&quot;: 1500
        },
        &quot;type&quot;: &quot;object&quot;,
        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-481&gt;&quot;
      },
      &quot;longitude&quot;: {
        &quot;type&quot;: &quot;number&quot;,
        &quot;description&quot;: &quot;The longitude of a location.&quot;,
        &quot;x-title&quot;: &quot;longitude&quot;,
        &quot;example&quot;: 73.98,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
      },
      &quot;lotSize&quot;: {
        &quot;description&quot;: &quot;outdoor space minValue, maxValue&quot;,
        &quot;example&quot;: {
          &quot;type&quot;: &quot;QuantitativeValue&quot;,
          &quot;unitCode&quot;: &quot;AC&quot;,
          &quot;unitText&quot;: &quot;Acres&quot;,
          &quot;value&quot;: 0.5
        },
        &quot;type&quot;: &quot;object&quot;,
        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-482&gt;&quot;
      },
      &quot;numberOfBathrooms&quot;: {
        &quot;description&quot;: &quot;the number of bathrooms&quot;,
        &quot;example&quot;: &quot;2&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-483&gt;&quot;
      },
      &quot;numberOfBedrooms&quot;: {
        &quot;description&quot;: &quot;the number of bedrooms&quot;,
        &quot;example&quot;: &quot;3&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-484&gt;&quot;
      },
      &quot;numberOfRooms&quot;: {
        &quot;description&quot;: &quot;the total number of rooms in the building&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;example&quot;: 7,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-485&gt;&quot;
      },
      &quot;postalCode&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;Zip/Post Code&quot;,
        &quot;example&quot;: &quot;10010&quot;,
        &quot;maxLength&quot;: 12,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-417&gt;&quot;
      },
      &quot;propertySubType&quot;: {
        &quot;title&quot;: &quot;propertySubType&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;x-range&quot;: &quot;PropertySubType&quot;,
        &quot;description&quot;: &quot;RESO property sub-type (see range for allowed values)&quot;,
        &quot;enum&quot;: [
          &quot;ApartmentPropertyType&quot;,
          &quot;BoatSlipPropertyType&quot;,
          &quot;CabinPropertyType&quot;,
          &quot;CondominiumPropertyType&quot;,
          &quot;DeededParkingPropertyType&quot;,
          &quot;DuplexPropertyType&quot;,
          &quot;FarmPropertyType&quot;,
          &quot;ManufacturedHomePropertyType&quot;,
          &quot;ManufacturedOnLandPropertyType&quot;,
          &quot;MobileHomePropertyType&quot;,
          &quot;OwnYourOwnPropertyType&quot;,
          &quot;QuadruplexPropertyType&quot;,
          &quot;RanchPropertyType&quot;,
          &quot;SingleFamilyPropertyType&quot;,
          &quot;StockCooperativePropertyType&quot;,
          &quot;TimesharePropertyType&quot;,
          &quot;TownhousePropertyType&quot;,
          &quot;TriplexPropertyType&quot;,
          &quot;AgriculturePropertyType&quot;,
          &quot;BusinessPropertyType&quot;,
          &quot;HotelMotelPropertyType&quot;,
          &quot;IndustrialPropertyType&quot;,
          &quot;MixedUsePropertyType&quot;,
          &quot;MultiFamilyPropertyType&quot;,
          &quot;OfficePropertyType&quot;,
          &quot;RetailPropertyType&quot;,
          &quot;UnimprovedLandPropertyType&quot;,
          &quot;WarehousePropertyType&quot;
        ],
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-418&gt;&quot;
      },
      &quot;stories&quot;: {
        &quot;type&quot;: &quot;number&quot;,
        &quot;description&quot;: &quot;he number of floors in the property&quot;,
        &quot;example&quot;: 2,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-421&gt;&quot;
      },
      &quot;streetAddress&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;the street address&quot;,
        &quot;example&quot;: &quot;1007 Mountain Gate Rd&quot;,
        &quot;maxLength&quot;: 75,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-422&gt;&quot;
      },
      &quot;yearBuilt&quot;: {
        &quot;type&quot;: &quot;number&quot;,
        &quot;description&quot;: &quot;the year the structure was created&quot;,
        &quot;example&quot;: 1988,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-425&gt;&quot;
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;RealEstateProperty&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;allOf&quot;: [
          {
            &quot;title&quot;: &quot;RealEstateProperty&quot;,
            &quot;x-range&quot;: &quot;RealEstateProperty&quot;,
            &quot;description&quot;: &quot;a property in the real estate transaction context&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;required&quot;: [
              &quot;type&quot;,
              &quot;propertyType&quot;
            ],
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;description&quot;: &quot;\&quot;RealEstateProperty\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateProperty&quot;
                ],
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-478&gt;&quot;
              },
              &quot;propertyType&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;RESO property type (see range for allowed values)&quot;,
                &quot;x-range&quot;: &quot;PropertyType&quot;,
                &quot;minLength&quot;: 4,
                &quot;maxLength&quot;: 4,
                &quot;enum&quot;: [
                  &quot;RESI&quot;,
                  &quot;RLSE&quot;,
                  &quot;RINC&quot;,
                  &quot;LAND&quot;,
                  &quot;MOBI&quot;,
                  &quot;FARM&quot;,
                  &quot;COMS&quot;,
                  &quot;COML&quot;,
                  &quot;BUSO&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-419&gt;&quot;
              },
              &quot;addressCountry&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;two-letter ISO 3166-1 alpha-2 country code&quot;,
                &quot;example&quot;: &quot;US&quot;,
                &quot;enum&quot;: [
                  &quot;CA&quot;,
                  &quot;DE&quot;,
                  &quot;GR&quot;,
                  &quot;IN&quot;,
                  &quot;IT&quot;,
                  &quot;MX&quot;,
                  &quot;PE&quot;,
                  &quot;PT&quot;,
                  &quot;ES&quot;,
                  &quot;AE&quot;,
                  &quot;GB&quot;,
                  &quot;US&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-395&gt;&quot;
              },
              &quot;addressLocality&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;City, Township.&quot;,
                &quot;example&quot;: &quot;Gotham City&quot;,
                &quot;maxLength&quot;: 50,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-396&gt;&quot;
              },
              &quot;addressRegion&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;State or Province.&quot;,
                &quot;example&quot;: &quot;New Jersey&quot;,
                &quot;maxLength&quot;: 3,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-397&gt;&quot;
              },
              &quot;apn&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Assessors Parcel Number&quot;,
                &quot;example&quot;: &quot;ABC-12345-XX-XXXX&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-479&gt;&quot;
              },
              &quot;image&quot;: {
                &quot;title&quot;: &quot;image&quot;,
                &quot;description&quot;: &quot;an ImageObject or URI reference to an image on the web.&quot;,
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-range&quot;: [
                  &quot;ImageObject&quot;
                ],
                &quot;items&quot;: [
                  {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;allOf&quot;: [
                      {
                        &quot;title&quot;: &quot;MediaObject&quot;,
                        &quot;description&quot;: &quot;an image, video or document availble for download&quot;,
                        &quot;x-subclass&quot;: [
                          &quot;ImageObject&quot;,
                          &quot;DigitalDocument&quot;
                        ],
                        &quot;allOf&quot;: [
                          {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;required&quot;: [
                              &quot;type&quot;
                            ],
                            &quot;properties&quot;: {
                              &quot;type&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
                              }
                            },
                            &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
                          },
                          {
                            &quot;properties&quot;: {
                              &quot;type&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;enum&quot;: [
                                  &quot;MediaObject&quot;,
                                  &quot;ImageObject&quot;,
                                  &quot;DigitalDocument&quot;
                                ]
                              },
                              &quot;id&quot;: {
                                &quot;description&quot;: &quot;the URL to access the item.&quot;,
                                &quot;example&quot;: &quot;http://user.example.com/public/logo/fileName.zip&quot;,
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;format&quot;: &quot;uri&quot;
                              },
                              &quot;name&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;description&quot;: &quot;the file name of the object.&quot;,
                                &quot;example&quot;: &quot;fileName.zip&quot;
                              },
                              &quot;encodingFormat&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;description&quot;: &quot;MIME type&quot;,
                                &quot;example&quot;: &quot;application/zip&quot;
                              },
                              &quot;about&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;format&quot;: &quot;uri&quot;,
                                &quot;description&quot;: &quot;URI to the subject of the image or logo&quot;,
                                &quot;example&quot;: &quot;http://user.example.com/profile/card#me&quot;
                              },
                              &quot;url&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;format&quot;: &quot;uri&quot;,
                                &quot;description&quot;: &quot;URL of the image content&quot;,
                                &quot;example&quot;: &quot;http://user.example.com/public/profile/image.jpg&quot;
                              }
                            },
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-178&gt;&quot;
                          }
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;MediaObject&quot;
                      },
                      {
                        &quot;title&quot;: &quot;ImageObject&quot;,
                        &quot;x-range&quot;: &quot;ImageObject&quot;,
                        &quot;properties&quot;: {
                          &quot;type&quot;: {
                            &quot;enum&quot;: [
                              &quot;ImageObject&quot;
                            ],
                            &quot;example&quot;: &quot;ImageObject&quot;
                          },
                          &quot;id&quot;: {
                            &quot;example&quot;: &quot;http://user.example.com/public/logo/image.jpg&quot;
                          },
                          &quot;name&quot;: {
                            &quot;example&quot;: &quot;image.jpg&quot;
                          },
                          &quot;encodingFormat&quot;: {
                            &quot;example&quot;: &quot;image/jpeg&quot;
                          }
                        },
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-179&gt;&quot;
                      }
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-177&gt;&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-401&gt;&quot;
              },
              &quot;latitude&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;The latitude of a location.&quot;,
                &quot;x-title&quot;: &quot;latitude&quot;,
                &quot;example&quot;: 40.75,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
              },
              &quot;listingId&quot;: {
                &quot;description&quot;: &quot;the local identifier for the listing (MLS #)&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-480&gt;&quot;
              },
              &quot;livingArea&quot;: {
                &quot;description&quot;: &quot;property indoor space&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;QuantitativeValue&quot;,
                  &quot;unitCode&quot;: &quot;SqFt&quot;,
                  &quot;unitText&quot;: &quot;Square Feet&quot;,
                  &quot;value&quot;: 1500
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-481&gt;&quot;
              },
              &quot;longitude&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;The longitude of a location.&quot;,
                &quot;x-title&quot;: &quot;longitude&quot;,
                &quot;example&quot;: 73.98,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
              },
              &quot;lotSize&quot;: {
                &quot;description&quot;: &quot;outdoor space minValue, maxValue&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;QuantitativeValue&quot;,
                  &quot;unitCode&quot;: &quot;AC&quot;,
                  &quot;unitText&quot;: &quot;Acres&quot;,
                  &quot;value&quot;: 0.5
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-482&gt;&quot;
              },
              &quot;numberOfBathrooms&quot;: {
                &quot;description&quot;: &quot;the number of bathrooms&quot;,
                &quot;example&quot;: &quot;2&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-483&gt;&quot;
              },
              &quot;numberOfBedrooms&quot;: {
                &quot;description&quot;: &quot;the number of bedrooms&quot;,
                &quot;example&quot;: &quot;3&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-484&gt;&quot;
              },
              &quot;numberOfRooms&quot;: {
                &quot;description&quot;: &quot;the total number of rooms in the building&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: 7,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-485&gt;&quot;
              },
              &quot;postalCode&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Zip/Post Code&quot;,
                &quot;example&quot;: &quot;10010&quot;,
                &quot;maxLength&quot;: 12,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-417&gt;&quot;
              },
              &quot;propertySubType&quot;: {
                &quot;title&quot;: &quot;propertySubType&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-range&quot;: &quot;PropertySubType&quot;,
                &quot;description&quot;: &quot;RESO property sub-type (see range for allowed values)&quot;,
                &quot;enum&quot;: [
                  &quot;ApartmentPropertyType&quot;,
                  &quot;BoatSlipPropertyType&quot;,
                  &quot;CabinPropertyType&quot;,
                  &quot;CondominiumPropertyType&quot;,
                  &quot;DeededParkingPropertyType&quot;,
                  &quot;DuplexPropertyType&quot;,
                  &quot;FarmPropertyType&quot;,
                  &quot;ManufacturedHomePropertyType&quot;,
                  &quot;ManufacturedOnLandPropertyType&quot;,
                  &quot;MobileHomePropertyType&quot;,
                  &quot;OwnYourOwnPropertyType&quot;,
                  &quot;QuadruplexPropertyType&quot;,
                  &quot;RanchPropertyType&quot;,
                  &quot;SingleFamilyPropertyType&quot;,
                  &quot;StockCooperativePropertyType&quot;,
                  &quot;TimesharePropertyType&quot;,
                  &quot;TownhousePropertyType&quot;,
                  &quot;TriplexPropertyType&quot;,
                  &quot;AgriculturePropertyType&quot;,
                  &quot;BusinessPropertyType&quot;,
                  &quot;HotelMotelPropertyType&quot;,
                  &quot;IndustrialPropertyType&quot;,
                  &quot;MixedUsePropertyType&quot;,
                  &quot;MultiFamilyPropertyType&quot;,
                  &quot;OfficePropertyType&quot;,
                  &quot;RetailPropertyType&quot;,
                  &quot;UnimprovedLandPropertyType&quot;,
                  &quot;WarehousePropertyType&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-418&gt;&quot;
              },
              &quot;stories&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;he number of floors in the property&quot;,
                &quot;example&quot;: 2,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-421&gt;&quot;
              },
              &quot;streetAddress&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the street address&quot;,
                &quot;example&quot;: &quot;1007 Mountain Gate Rd&quot;,
                &quot;maxLength&quot;: 75,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-422&gt;&quot;
              },
              &quot;yearBuilt&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;the year the structure was created&quot;,
                &quot;example&quot;: 1988,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-425&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;RealEstateProperty&quot;
          },
          {
            &quot;description&quot;: &quot;the subject property&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-486&gt;&quot;
          },
          {
            &quot;properties&quot;: {
              &quot;additionalProperty&quot;: {
                &quot;example&quot;: {
                  &quot;heating&quot;: null,
                  &quot;cooling&quot;: null,
                  &quot;isForeclosure&quot;: null,
                  &quot;isShortsale&quot;: null,
                  &quot;score&quot;: 7,
                  &quot;parcelId&quot;: null,
                  &quot;averageSalePrice&quot;: {
                    &quot;type&quot;: &quot;PriceSpecification&quot;,
                    &quot;price&quot;: 7500000,
                    &quot;priceCurrency&quot;: &quot;USD&quot;
                  },
                  &quot;nonDisclosureProperty&quot;: false,
                  &quot;taxAssessedValue&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: &quot;100000&quot;,
                    &quot;currency&quot;: &quot;USD&quot;
                  },
                  &quot;taxAssessedYear&quot;: 2021,
                  &quot;inHouseCompanyListingUrl&quot;: null,
                  &quot;inHouseCompanyListingEvent&quot;: null,
                  &quot;neighborhoodMetrics&quot;: null,
                  &quot;neighborhoodName&quot;: &quot;DEER CREEK WOODS&quot;,
                  &quot;neighborhoodKey&quot;: null,
                  &quot;useNeighborhoodDataForCharts&quot;: false,
                  &quot;ownerName&quot;: &quot;Bob Jones&quot;,
                  &quot;ownerOccupied&quot;: &quot;Y&quot;,
                  &quot;ownersEstimatedEquity&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: &quot;100000&quot;,
                    &quot;currency&quot;: &quot;USD&quot;
                  },
                  &quot;firstLoanPrice&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: &quot;100000&quot;,
                    &quot;currency&quot;: &quot;USD&quot;
                  },
                  &quot;firstLoanLenderName&quot;: &quot;&quot;,
                  &quot;secondLoanPrice&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: null,
                    &quot;currency&quot;: null
                  },
                  &quot;secondLoanLenderName&quot;: &quot;N/A&quot;,
                  &quot;lastRefinanceLoanVal1&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: &quot;100000&quot;,
                    &quot;currency&quot;: &quot;USD&quot;
                  },
                  &quot;lastRefinanceLenderName1&quot;: &quot;N/A&quot;,
                  &quot;lastRefinanceLoanVal2&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: null,
                    &quot;currency&quot;: null
                  },
                  &quot;lastRefinanceLenderName2&quot;: &quot;N/A&quot;,
                  &quot;Title_Company&quot;: &quot;&quot;
                }
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-487&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-477&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;PropertyValueReport&quot;,
            &quot;x-range&quot;: &quot;PropertyValueReport&quot;,
            &quot;description&quot;: &quot;an automated property value esmation&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;PropertyValueReport&quot;,
                &quot;enum&quot;: [
                  &quot;PropertyValueReport&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-474&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;document name or title&quot;,
                &quot;example&quot;: &quot;LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-475&gt;&quot;
              },
              &quot;dateCreated&quot;: {
                &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
              },
              &quot;result&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;the estimated value of the property&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-476&gt;&quot;
              },
              &quot;about&quot;: {
                &quot;allOf&quot;: [
                  {
                    &quot;title&quot;: &quot;RealEstateProperty&quot;,
                    &quot;x-range&quot;: &quot;RealEstateProperty&quot;,
                    &quot;description&quot;: &quot;a property in the real estate transaction context&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;required&quot;: [
                      &quot;type&quot;,
                      &quot;propertyType&quot;
                    ],
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;description&quot;: &quot;\&quot;RealEstateProperty\&quot;&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateProperty&quot;
                        ],
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-478&gt;&quot;
                      },
                      &quot;propertyType&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;RESO property type (see range for allowed values)&quot;,
                        &quot;x-range&quot;: &quot;PropertyType&quot;,
                        &quot;minLength&quot;: 4,
                        &quot;maxLength&quot;: 4,
                        &quot;enum&quot;: [
                          &quot;RESI&quot;,
                          &quot;RLSE&quot;,
                          &quot;RINC&quot;,
                          &quot;LAND&quot;,
                          &quot;MOBI&quot;,
                          &quot;FARM&quot;,
                          &quot;COMS&quot;,
                          &quot;COML&quot;,
                          &quot;BUSO&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-419&gt;&quot;
                      },
                      &quot;addressCountry&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;two-letter ISO 3166-1 alpha-2 country code&quot;,
                        &quot;example&quot;: &quot;US&quot;,
                        &quot;enum&quot;: [
                          &quot;CA&quot;,
                          &quot;DE&quot;,
                          &quot;GR&quot;,
                          &quot;IN&quot;,
                          &quot;IT&quot;,
                          &quot;MX&quot;,
                          &quot;PE&quot;,
                          &quot;PT&quot;,
                          &quot;ES&quot;,
                          &quot;AE&quot;,
                          &quot;GB&quot;,
                          &quot;US&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-395&gt;&quot;
                      },
                      &quot;addressLocality&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;City, Township.&quot;,
                        &quot;example&quot;: &quot;Gotham City&quot;,
                        &quot;maxLength&quot;: 50,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-396&gt;&quot;
                      },
                      &quot;addressRegion&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;State or Province.&quot;,
                        &quot;example&quot;: &quot;New Jersey&quot;,
                        &quot;maxLength&quot;: 3,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-397&gt;&quot;
                      },
                      &quot;apn&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Assessors Parcel Number&quot;,
                        &quot;example&quot;: &quot;ABC-12345-XX-XXXX&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-479&gt;&quot;
                      },
                      &quot;image&quot;: {
                        &quot;title&quot;: &quot;image&quot;,
                        &quot;description&quot;: &quot;an ImageObject or URI reference to an image on the web.&quot;,
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;x-range&quot;: [
                          &quot;ImageObject&quot;
                        ],
                        &quot;items&quot;: [
                          {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;allOf&quot;: [
                              {
                                &quot;title&quot;: &quot;MediaObject&quot;,
                                &quot;description&quot;: &quot;an image, video or document availble for download&quot;,
                                &quot;x-subclass&quot;: [
                                  &quot;ImageObject&quot;,
                                  &quot;DigitalDocument&quot;
                                ],
                                &quot;allOf&quot;: [
                                  {
                                    &quot;type&quot;: &quot;object&quot;,
                                    &quot;required&quot;: [
                                      &quot;type&quot;
                                    ],
                                    &quot;properties&quot;: {
                                      &quot;type&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
                                      }
                                    },
                                    &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
                                  },
                                  {
                                    &quot;properties&quot;: {
                                      &quot;type&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;enum&quot;: [
                                          &quot;MediaObject&quot;,
                                          &quot;ImageObject&quot;,
                                          &quot;DigitalDocument&quot;
                                        ]
                                      },
                                      &quot;id&quot;: {
                                        &quot;description&quot;: &quot;the URL to access the item.&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/public/logo/fileName.zip&quot;,
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;
                                      },
                                      &quot;name&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;the file name of the object.&quot;,
                                        &quot;example&quot;: &quot;fileName.zip&quot;
                                      },
                                      &quot;encodingFormat&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;MIME type&quot;,
                                        &quot;example&quot;: &quot;application/zip&quot;
                                      },
                                      &quot;about&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;,
                                        &quot;description&quot;: &quot;URI to the subject of the image or logo&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/profile/card#me&quot;
                                      },
                                      &quot;url&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;,
                                        &quot;description&quot;: &quot;URL of the image content&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/public/profile/image.jpg&quot;
                                      }
                                    },
                                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-178&gt;&quot;
                                  }
                                ],
                                &quot;x-parser-schema-id&quot;: &quot;MediaObject&quot;
                              },
                              {
                                &quot;title&quot;: &quot;ImageObject&quot;,
                                &quot;x-range&quot;: &quot;ImageObject&quot;,
                                &quot;properties&quot;: {
                                  &quot;type&quot;: {
                                    &quot;enum&quot;: [
                                      &quot;ImageObject&quot;
                                    ],
                                    &quot;example&quot;: &quot;ImageObject&quot;
                                  },
                                  &quot;id&quot;: {
                                    &quot;example&quot;: &quot;http://user.example.com/public/logo/image.jpg&quot;
                                  },
                                  &quot;name&quot;: {
                                    &quot;example&quot;: &quot;image.jpg&quot;
                                  },
                                  &quot;encodingFormat&quot;: {
                                    &quot;example&quot;: &quot;image/jpeg&quot;
                                  }
                                },
                                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-179&gt;&quot;
                              }
                            ],
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-177&gt;&quot;
                          }
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-401&gt;&quot;
                      },
                      &quot;latitude&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;The latitude of a location.&quot;,
                        &quot;x-title&quot;: &quot;latitude&quot;,
                        &quot;example&quot;: 40.75,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
                      },
                      &quot;listingId&quot;: {
                        &quot;description&quot;: &quot;the local identifier for the listing (MLS #)&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-480&gt;&quot;
                      },
                      &quot;livingArea&quot;: {
                        &quot;description&quot;: &quot;property indoor space&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;QuantitativeValue&quot;,
                          &quot;unitCode&quot;: &quot;SqFt&quot;,
                          &quot;unitText&quot;: &quot;Square Feet&quot;,
                          &quot;value&quot;: 1500
                        },
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-481&gt;&quot;
                      },
                      &quot;longitude&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;The longitude of a location.&quot;,
                        &quot;x-title&quot;: &quot;longitude&quot;,
                        &quot;example&quot;: 73.98,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
                      },
                      &quot;lotSize&quot;: {
                        &quot;description&quot;: &quot;outdoor space minValue, maxValue&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;QuantitativeValue&quot;,
                          &quot;unitCode&quot;: &quot;AC&quot;,
                          &quot;unitText&quot;: &quot;Acres&quot;,
                          &quot;value&quot;: 0.5
                        },
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-482&gt;&quot;
                      },
                      &quot;numberOfBathrooms&quot;: {
                        &quot;description&quot;: &quot;the number of bathrooms&quot;,
                        &quot;example&quot;: &quot;2&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-483&gt;&quot;
                      },
                      &quot;numberOfBedrooms&quot;: {
                        &quot;description&quot;: &quot;the number of bedrooms&quot;,
                        &quot;example&quot;: &quot;3&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-484&gt;&quot;
                      },
                      &quot;numberOfRooms&quot;: {
                        &quot;description&quot;: &quot;the total number of rooms in the building&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: 7,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-485&gt;&quot;
                      },
                      &quot;postalCode&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Zip/Post Code&quot;,
                        &quot;example&quot;: &quot;10010&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-417&gt;&quot;
                      },
                      &quot;propertySubType&quot;: {
                        &quot;title&quot;: &quot;propertySubType&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-range&quot;: &quot;PropertySubType&quot;,
                        &quot;description&quot;: &quot;RESO property sub-type (see range for allowed values)&quot;,
                        &quot;enum&quot;: [
                          &quot;ApartmentPropertyType&quot;,
                          &quot;BoatSlipPropertyType&quot;,
                          &quot;CabinPropertyType&quot;,
                          &quot;CondominiumPropertyType&quot;,
                          &quot;DeededParkingPropertyType&quot;,
                          &quot;DuplexPropertyType&quot;,
                          &quot;FarmPropertyType&quot;,
                          &quot;ManufacturedHomePropertyType&quot;,
                          &quot;ManufacturedOnLandPropertyType&quot;,
                          &quot;MobileHomePropertyType&quot;,
                          &quot;OwnYourOwnPropertyType&quot;,
                          &quot;QuadruplexPropertyType&quot;,
                          &quot;RanchPropertyType&quot;,
                          &quot;SingleFamilyPropertyType&quot;,
                          &quot;StockCooperativePropertyType&quot;,
                          &quot;TimesharePropertyType&quot;,
                          &quot;TownhousePropertyType&quot;,
                          &quot;TriplexPropertyType&quot;,
                          &quot;AgriculturePropertyType&quot;,
                          &quot;BusinessPropertyType&quot;,
                          &quot;HotelMotelPropertyType&quot;,
                          &quot;IndustrialPropertyType&quot;,
                          &quot;MixedUsePropertyType&quot;,
                          &quot;MultiFamilyPropertyType&quot;,
                          &quot;OfficePropertyType&quot;,
                          &quot;RetailPropertyType&quot;,
                          &quot;UnimprovedLandPropertyType&quot;,
                          &quot;WarehousePropertyType&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-418&gt;&quot;
                      },
                      &quot;stories&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;he number of floors in the property&quot;,
                        &quot;example&quot;: 2,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-421&gt;&quot;
                      },
                      &quot;streetAddress&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;the street address&quot;,
                        &quot;example&quot;: &quot;1007 Mountain Gate Rd&quot;,
                        &quot;maxLength&quot;: 75,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-422&gt;&quot;
                      },
                      &quot;yearBuilt&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;the year the structure was created&quot;,
                        &quot;example&quot;: 1988,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-425&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;RealEstateProperty&quot;
                  },
                  {
                    &quot;description&quot;: &quot;the subject property&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-486&gt;&quot;
                  },
                  {
                    &quot;properties&quot;: {
                      &quot;additionalProperty&quot;: {
                        &quot;example&quot;: {
                          &quot;heating&quot;: null,
                          &quot;cooling&quot;: null,
                          &quot;isForeclosure&quot;: null,
                          &quot;isShortsale&quot;: null,
                          &quot;score&quot;: 7,
                          &quot;parcelId&quot;: null,
                          &quot;averageSalePrice&quot;: {
                            &quot;type&quot;: &quot;PriceSpecification&quot;,
                            &quot;price&quot;: 7500000,
                            &quot;priceCurrency&quot;: &quot;USD&quot;
                          },
                          &quot;nonDisclosureProperty&quot;: false,
                          &quot;taxAssessedValue&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;taxAssessedYear&quot;: 2021,
                          &quot;inHouseCompanyListingUrl&quot;: null,
                          &quot;inHouseCompanyListingEvent&quot;: null,
                          &quot;neighborhoodMetrics&quot;: null,
                          &quot;neighborhoodName&quot;: &quot;DEER CREEK WOODS&quot;,
                          &quot;neighborhoodKey&quot;: null,
                          &quot;useNeighborhoodDataForCharts&quot;: false,
                          &quot;ownerName&quot;: &quot;Bob Jones&quot;,
                          &quot;ownerOccupied&quot;: &quot;Y&quot;,
                          &quot;ownersEstimatedEquity&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;firstLoanPrice&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;firstLoanLenderName&quot;: &quot;&quot;,
                          &quot;secondLoanPrice&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: null,
                            &quot;currency&quot;: null
                          },
                          &quot;secondLoanLenderName&quot;: &quot;N/A&quot;,
                          &quot;lastRefinanceLoanVal1&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;lastRefinanceLenderName1&quot;: &quot;N/A&quot;,
                          &quot;lastRefinanceLoanVal2&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: null,
                            &quot;currency&quot;: null
                          },
                          &quot;lastRefinanceLenderName2&quot;: &quot;N/A&quot;,
                          &quot;Title_Company&quot;: &quot;&quot;
                        }
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-487&gt;&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-477&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;PropertyValueReport&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = &lt;1&gt;
required = 
path = about




prop = {
  &quot;_json&quot;: {
    &quot;description&quot;: &quot;the subject property&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-486&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;allOf&quot;: [
          {
            &quot;title&quot;: &quot;RealEstateProperty&quot;,
            &quot;x-range&quot;: &quot;RealEstateProperty&quot;,
            &quot;description&quot;: &quot;a property in the real estate transaction context&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;required&quot;: [
              &quot;type&quot;,
              &quot;propertyType&quot;
            ],
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;description&quot;: &quot;\&quot;RealEstateProperty\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateProperty&quot;
                ],
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-478&gt;&quot;
              },
              &quot;propertyType&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;RESO property type (see range for allowed values)&quot;,
                &quot;x-range&quot;: &quot;PropertyType&quot;,
                &quot;minLength&quot;: 4,
                &quot;maxLength&quot;: 4,
                &quot;enum&quot;: [
                  &quot;RESI&quot;,
                  &quot;RLSE&quot;,
                  &quot;RINC&quot;,
                  &quot;LAND&quot;,
                  &quot;MOBI&quot;,
                  &quot;FARM&quot;,
                  &quot;COMS&quot;,
                  &quot;COML&quot;,
                  &quot;BUSO&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-419&gt;&quot;
              },
              &quot;addressCountry&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;two-letter ISO 3166-1 alpha-2 country code&quot;,
                &quot;example&quot;: &quot;US&quot;,
                &quot;enum&quot;: [
                  &quot;CA&quot;,
                  &quot;DE&quot;,
                  &quot;GR&quot;,
                  &quot;IN&quot;,
                  &quot;IT&quot;,
                  &quot;MX&quot;,
                  &quot;PE&quot;,
                  &quot;PT&quot;,
                  &quot;ES&quot;,
                  &quot;AE&quot;,
                  &quot;GB&quot;,
                  &quot;US&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-395&gt;&quot;
              },
              &quot;addressLocality&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;City, Township.&quot;,
                &quot;example&quot;: &quot;Gotham City&quot;,
                &quot;maxLength&quot;: 50,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-396&gt;&quot;
              },
              &quot;addressRegion&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;State or Province.&quot;,
                &quot;example&quot;: &quot;New Jersey&quot;,
                &quot;maxLength&quot;: 3,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-397&gt;&quot;
              },
              &quot;apn&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Assessors Parcel Number&quot;,
                &quot;example&quot;: &quot;ABC-12345-XX-XXXX&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-479&gt;&quot;
              },
              &quot;image&quot;: {
                &quot;title&quot;: &quot;image&quot;,
                &quot;description&quot;: &quot;an ImageObject or URI reference to an image on the web.&quot;,
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-range&quot;: [
                  &quot;ImageObject&quot;
                ],
                &quot;items&quot;: [
                  {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;allOf&quot;: [
                      {
                        &quot;title&quot;: &quot;MediaObject&quot;,
                        &quot;description&quot;: &quot;an image, video or document availble for download&quot;,
                        &quot;x-subclass&quot;: [
                          &quot;ImageObject&quot;,
                          &quot;DigitalDocument&quot;
                        ],
                        &quot;allOf&quot;: [
                          {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;required&quot;: [
                              &quot;type&quot;
                            ],
                            &quot;properties&quot;: {
                              &quot;type&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
                              }
                            },
                            &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
                          },
                          {
                            &quot;properties&quot;: {
                              &quot;type&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;enum&quot;: [
                                  &quot;MediaObject&quot;,
                                  &quot;ImageObject&quot;,
                                  &quot;DigitalDocument&quot;
                                ]
                              },
                              &quot;id&quot;: {
                                &quot;description&quot;: &quot;the URL to access the item.&quot;,
                                &quot;example&quot;: &quot;http://user.example.com/public/logo/fileName.zip&quot;,
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;format&quot;: &quot;uri&quot;
                              },
                              &quot;name&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;description&quot;: &quot;the file name of the object.&quot;,
                                &quot;example&quot;: &quot;fileName.zip&quot;
                              },
                              &quot;encodingFormat&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;description&quot;: &quot;MIME type&quot;,
                                &quot;example&quot;: &quot;application/zip&quot;
                              },
                              &quot;about&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;format&quot;: &quot;uri&quot;,
                                &quot;description&quot;: &quot;URI to the subject of the image or logo&quot;,
                                &quot;example&quot;: &quot;http://user.example.com/profile/card#me&quot;
                              },
                              &quot;url&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;format&quot;: &quot;uri&quot;,
                                &quot;description&quot;: &quot;URL of the image content&quot;,
                                &quot;example&quot;: &quot;http://user.example.com/public/profile/image.jpg&quot;
                              }
                            },
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-178&gt;&quot;
                          }
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;MediaObject&quot;
                      },
                      {
                        &quot;title&quot;: &quot;ImageObject&quot;,
                        &quot;x-range&quot;: &quot;ImageObject&quot;,
                        &quot;properties&quot;: {
                          &quot;type&quot;: {
                            &quot;enum&quot;: [
                              &quot;ImageObject&quot;
                            ],
                            &quot;example&quot;: &quot;ImageObject&quot;
                          },
                          &quot;id&quot;: {
                            &quot;example&quot;: &quot;http://user.example.com/public/logo/image.jpg&quot;
                          },
                          &quot;name&quot;: {
                            &quot;example&quot;: &quot;image.jpg&quot;
                          },
                          &quot;encodingFormat&quot;: {
                            &quot;example&quot;: &quot;image/jpeg&quot;
                          }
                        },
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-179&gt;&quot;
                      }
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-177&gt;&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-401&gt;&quot;
              },
              &quot;latitude&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;The latitude of a location.&quot;,
                &quot;x-title&quot;: &quot;latitude&quot;,
                &quot;example&quot;: 40.75,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
              },
              &quot;listingId&quot;: {
                &quot;description&quot;: &quot;the local identifier for the listing (MLS #)&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-480&gt;&quot;
              },
              &quot;livingArea&quot;: {
                &quot;description&quot;: &quot;property indoor space&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;QuantitativeValue&quot;,
                  &quot;unitCode&quot;: &quot;SqFt&quot;,
                  &quot;unitText&quot;: &quot;Square Feet&quot;,
                  &quot;value&quot;: 1500
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-481&gt;&quot;
              },
              &quot;longitude&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;The longitude of a location.&quot;,
                &quot;x-title&quot;: &quot;longitude&quot;,
                &quot;example&quot;: 73.98,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
              },
              &quot;lotSize&quot;: {
                &quot;description&quot;: &quot;outdoor space minValue, maxValue&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;QuantitativeValue&quot;,
                  &quot;unitCode&quot;: &quot;AC&quot;,
                  &quot;unitText&quot;: &quot;Acres&quot;,
                  &quot;value&quot;: 0.5
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-482&gt;&quot;
              },
              &quot;numberOfBathrooms&quot;: {
                &quot;description&quot;: &quot;the number of bathrooms&quot;,
                &quot;example&quot;: &quot;2&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-483&gt;&quot;
              },
              &quot;numberOfBedrooms&quot;: {
                &quot;description&quot;: &quot;the number of bedrooms&quot;,
                &quot;example&quot;: &quot;3&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-484&gt;&quot;
              },
              &quot;numberOfRooms&quot;: {
                &quot;description&quot;: &quot;the total number of rooms in the building&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: 7,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-485&gt;&quot;
              },
              &quot;postalCode&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Zip/Post Code&quot;,
                &quot;example&quot;: &quot;10010&quot;,
                &quot;maxLength&quot;: 12,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-417&gt;&quot;
              },
              &quot;propertySubType&quot;: {
                &quot;title&quot;: &quot;propertySubType&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-range&quot;: &quot;PropertySubType&quot;,
                &quot;description&quot;: &quot;RESO property sub-type (see range for allowed values)&quot;,
                &quot;enum&quot;: [
                  &quot;ApartmentPropertyType&quot;,
                  &quot;BoatSlipPropertyType&quot;,
                  &quot;CabinPropertyType&quot;,
                  &quot;CondominiumPropertyType&quot;,
                  &quot;DeededParkingPropertyType&quot;,
                  &quot;DuplexPropertyType&quot;,
                  &quot;FarmPropertyType&quot;,
                  &quot;ManufacturedHomePropertyType&quot;,
                  &quot;ManufacturedOnLandPropertyType&quot;,
                  &quot;MobileHomePropertyType&quot;,
                  &quot;OwnYourOwnPropertyType&quot;,
                  &quot;QuadruplexPropertyType&quot;,
                  &quot;RanchPropertyType&quot;,
                  &quot;SingleFamilyPropertyType&quot;,
                  &quot;StockCooperativePropertyType&quot;,
                  &quot;TimesharePropertyType&quot;,
                  &quot;TownhousePropertyType&quot;,
                  &quot;TriplexPropertyType&quot;,
                  &quot;AgriculturePropertyType&quot;,
                  &quot;BusinessPropertyType&quot;,
                  &quot;HotelMotelPropertyType&quot;,
                  &quot;IndustrialPropertyType&quot;,
                  &quot;MixedUsePropertyType&quot;,
                  &quot;MultiFamilyPropertyType&quot;,
                  &quot;OfficePropertyType&quot;,
                  &quot;RetailPropertyType&quot;,
                  &quot;UnimprovedLandPropertyType&quot;,
                  &quot;WarehousePropertyType&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-418&gt;&quot;
              },
              &quot;stories&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;he number of floors in the property&quot;,
                &quot;example&quot;: 2,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-421&gt;&quot;
              },
              &quot;streetAddress&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the street address&quot;,
                &quot;example&quot;: &quot;1007 Mountain Gate Rd&quot;,
                &quot;maxLength&quot;: 75,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-422&gt;&quot;
              },
              &quot;yearBuilt&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;the year the structure was created&quot;,
                &quot;example&quot;: 1988,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-425&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;RealEstateProperty&quot;
          },
          {
            &quot;description&quot;: &quot;the subject property&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-486&gt;&quot;
          },
          {
            &quot;properties&quot;: {
              &quot;additionalProperty&quot;: {
                &quot;example&quot;: {
                  &quot;heating&quot;: null,
                  &quot;cooling&quot;: null,
                  &quot;isForeclosure&quot;: null,
                  &quot;isShortsale&quot;: null,
                  &quot;score&quot;: 7,
                  &quot;parcelId&quot;: null,
                  &quot;averageSalePrice&quot;: {
                    &quot;type&quot;: &quot;PriceSpecification&quot;,
                    &quot;price&quot;: 7500000,
                    &quot;priceCurrency&quot;: &quot;USD&quot;
                  },
                  &quot;nonDisclosureProperty&quot;: false,
                  &quot;taxAssessedValue&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: &quot;100000&quot;,
                    &quot;currency&quot;: &quot;USD&quot;
                  },
                  &quot;taxAssessedYear&quot;: 2021,
                  &quot;inHouseCompanyListingUrl&quot;: null,
                  &quot;inHouseCompanyListingEvent&quot;: null,
                  &quot;neighborhoodMetrics&quot;: null,
                  &quot;neighborhoodName&quot;: &quot;DEER CREEK WOODS&quot;,
                  &quot;neighborhoodKey&quot;: null,
                  &quot;useNeighborhoodDataForCharts&quot;: false,
                  &quot;ownerName&quot;: &quot;Bob Jones&quot;,
                  &quot;ownerOccupied&quot;: &quot;Y&quot;,
                  &quot;ownersEstimatedEquity&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: &quot;100000&quot;,
                    &quot;currency&quot;: &quot;USD&quot;
                  },
                  &quot;firstLoanPrice&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: &quot;100000&quot;,
                    &quot;currency&quot;: &quot;USD&quot;
                  },
                  &quot;firstLoanLenderName&quot;: &quot;&quot;,
                  &quot;secondLoanPrice&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: null,
                    &quot;currency&quot;: null
                  },
                  &quot;secondLoanLenderName&quot;: &quot;N/A&quot;,
                  &quot;lastRefinanceLoanVal1&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: &quot;100000&quot;,
                    &quot;currency&quot;: &quot;USD&quot;
                  },
                  &quot;lastRefinanceLenderName1&quot;: &quot;N/A&quot;,
                  &quot;lastRefinanceLoanVal2&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: null,
                    &quot;currency&quot;: null
                  },
                  &quot;lastRefinanceLenderName2&quot;: &quot;N/A&quot;,
                  &quot;Title_Company&quot;: &quot;&quot;
                }
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-487&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-477&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;PropertyValueReport&quot;,
            &quot;x-range&quot;: &quot;PropertyValueReport&quot;,
            &quot;description&quot;: &quot;an automated property value esmation&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;PropertyValueReport&quot;,
                &quot;enum&quot;: [
                  &quot;PropertyValueReport&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-474&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;document name or title&quot;,
                &quot;example&quot;: &quot;LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-475&gt;&quot;
              },
              &quot;dateCreated&quot;: {
                &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
              },
              &quot;result&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;the estimated value of the property&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-476&gt;&quot;
              },
              &quot;about&quot;: {
                &quot;allOf&quot;: [
                  {
                    &quot;title&quot;: &quot;RealEstateProperty&quot;,
                    &quot;x-range&quot;: &quot;RealEstateProperty&quot;,
                    &quot;description&quot;: &quot;a property in the real estate transaction context&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;required&quot;: [
                      &quot;type&quot;,
                      &quot;propertyType&quot;
                    ],
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;description&quot;: &quot;\&quot;RealEstateProperty\&quot;&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateProperty&quot;
                        ],
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-478&gt;&quot;
                      },
                      &quot;propertyType&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;RESO property type (see range for allowed values)&quot;,
                        &quot;x-range&quot;: &quot;PropertyType&quot;,
                        &quot;minLength&quot;: 4,
                        &quot;maxLength&quot;: 4,
                        &quot;enum&quot;: [
                          &quot;RESI&quot;,
                          &quot;RLSE&quot;,
                          &quot;RINC&quot;,
                          &quot;LAND&quot;,
                          &quot;MOBI&quot;,
                          &quot;FARM&quot;,
                          &quot;COMS&quot;,
                          &quot;COML&quot;,
                          &quot;BUSO&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-419&gt;&quot;
                      },
                      &quot;addressCountry&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;two-letter ISO 3166-1 alpha-2 country code&quot;,
                        &quot;example&quot;: &quot;US&quot;,
                        &quot;enum&quot;: [
                          &quot;CA&quot;,
                          &quot;DE&quot;,
                          &quot;GR&quot;,
                          &quot;IN&quot;,
                          &quot;IT&quot;,
                          &quot;MX&quot;,
                          &quot;PE&quot;,
                          &quot;PT&quot;,
                          &quot;ES&quot;,
                          &quot;AE&quot;,
                          &quot;GB&quot;,
                          &quot;US&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-395&gt;&quot;
                      },
                      &quot;addressLocality&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;City, Township.&quot;,
                        &quot;example&quot;: &quot;Gotham City&quot;,
                        &quot;maxLength&quot;: 50,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-396&gt;&quot;
                      },
                      &quot;addressRegion&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;State or Province.&quot;,
                        &quot;example&quot;: &quot;New Jersey&quot;,
                        &quot;maxLength&quot;: 3,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-397&gt;&quot;
                      },
                      &quot;apn&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Assessors Parcel Number&quot;,
                        &quot;example&quot;: &quot;ABC-12345-XX-XXXX&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-479&gt;&quot;
                      },
                      &quot;image&quot;: {
                        &quot;title&quot;: &quot;image&quot;,
                        &quot;description&quot;: &quot;an ImageObject or URI reference to an image on the web.&quot;,
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;x-range&quot;: [
                          &quot;ImageObject&quot;
                        ],
                        &quot;items&quot;: [
                          {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;allOf&quot;: [
                              {
                                &quot;title&quot;: &quot;MediaObject&quot;,
                                &quot;description&quot;: &quot;an image, video or document availble for download&quot;,
                                &quot;x-subclass&quot;: [
                                  &quot;ImageObject&quot;,
                                  &quot;DigitalDocument&quot;
                                ],
                                &quot;allOf&quot;: [
                                  {
                                    &quot;type&quot;: &quot;object&quot;,
                                    &quot;required&quot;: [
                                      &quot;type&quot;
                                    ],
                                    &quot;properties&quot;: {
                                      &quot;type&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
                                      }
                                    },
                                    &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
                                  },
                                  {
                                    &quot;properties&quot;: {
                                      &quot;type&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;enum&quot;: [
                                          &quot;MediaObject&quot;,
                                          &quot;ImageObject&quot;,
                                          &quot;DigitalDocument&quot;
                                        ]
                                      },
                                      &quot;id&quot;: {
                                        &quot;description&quot;: &quot;the URL to access the item.&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/public/logo/fileName.zip&quot;,
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;
                                      },
                                      &quot;name&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;the file name of the object.&quot;,
                                        &quot;example&quot;: &quot;fileName.zip&quot;
                                      },
                                      &quot;encodingFormat&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;MIME type&quot;,
                                        &quot;example&quot;: &quot;application/zip&quot;
                                      },
                                      &quot;about&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;,
                                        &quot;description&quot;: &quot;URI to the subject of the image or logo&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/profile/card#me&quot;
                                      },
                                      &quot;url&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;,
                                        &quot;description&quot;: &quot;URL of the image content&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/public/profile/image.jpg&quot;
                                      }
                                    },
                                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-178&gt;&quot;
                                  }
                                ],
                                &quot;x-parser-schema-id&quot;: &quot;MediaObject&quot;
                              },
                              {
                                &quot;title&quot;: &quot;ImageObject&quot;,
                                &quot;x-range&quot;: &quot;ImageObject&quot;,
                                &quot;properties&quot;: {
                                  &quot;type&quot;: {
                                    &quot;enum&quot;: [
                                      &quot;ImageObject&quot;
                                    ],
                                    &quot;example&quot;: &quot;ImageObject&quot;
                                  },
                                  &quot;id&quot;: {
                                    &quot;example&quot;: &quot;http://user.example.com/public/logo/image.jpg&quot;
                                  },
                                  &quot;name&quot;: {
                                    &quot;example&quot;: &quot;image.jpg&quot;
                                  },
                                  &quot;encodingFormat&quot;: {
                                    &quot;example&quot;: &quot;image/jpeg&quot;
                                  }
                                },
                                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-179&gt;&quot;
                              }
                            ],
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-177&gt;&quot;
                          }
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-401&gt;&quot;
                      },
                      &quot;latitude&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;The latitude of a location.&quot;,
                        &quot;x-title&quot;: &quot;latitude&quot;,
                        &quot;example&quot;: 40.75,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
                      },
                      &quot;listingId&quot;: {
                        &quot;description&quot;: &quot;the local identifier for the listing (MLS #)&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-480&gt;&quot;
                      },
                      &quot;livingArea&quot;: {
                        &quot;description&quot;: &quot;property indoor space&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;QuantitativeValue&quot;,
                          &quot;unitCode&quot;: &quot;SqFt&quot;,
                          &quot;unitText&quot;: &quot;Square Feet&quot;,
                          &quot;value&quot;: 1500
                        },
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-481&gt;&quot;
                      },
                      &quot;longitude&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;The longitude of a location.&quot;,
                        &quot;x-title&quot;: &quot;longitude&quot;,
                        &quot;example&quot;: 73.98,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
                      },
                      &quot;lotSize&quot;: {
                        &quot;description&quot;: &quot;outdoor space minValue, maxValue&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;QuantitativeValue&quot;,
                          &quot;unitCode&quot;: &quot;AC&quot;,
                          &quot;unitText&quot;: &quot;Acres&quot;,
                          &quot;value&quot;: 0.5
                        },
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-482&gt;&quot;
                      },
                      &quot;numberOfBathrooms&quot;: {
                        &quot;description&quot;: &quot;the number of bathrooms&quot;,
                        &quot;example&quot;: &quot;2&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-483&gt;&quot;
                      },
                      &quot;numberOfBedrooms&quot;: {
                        &quot;description&quot;: &quot;the number of bedrooms&quot;,
                        &quot;example&quot;: &quot;3&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-484&gt;&quot;
                      },
                      &quot;numberOfRooms&quot;: {
                        &quot;description&quot;: &quot;the total number of rooms in the building&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: 7,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-485&gt;&quot;
                      },
                      &quot;postalCode&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Zip/Post Code&quot;,
                        &quot;example&quot;: &quot;10010&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-417&gt;&quot;
                      },
                      &quot;propertySubType&quot;: {
                        &quot;title&quot;: &quot;propertySubType&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-range&quot;: &quot;PropertySubType&quot;,
                        &quot;description&quot;: &quot;RESO property sub-type (see range for allowed values)&quot;,
                        &quot;enum&quot;: [
                          &quot;ApartmentPropertyType&quot;,
                          &quot;BoatSlipPropertyType&quot;,
                          &quot;CabinPropertyType&quot;,
                          &quot;CondominiumPropertyType&quot;,
                          &quot;DeededParkingPropertyType&quot;,
                          &quot;DuplexPropertyType&quot;,
                          &quot;FarmPropertyType&quot;,
                          &quot;ManufacturedHomePropertyType&quot;,
                          &quot;ManufacturedOnLandPropertyType&quot;,
                          &quot;MobileHomePropertyType&quot;,
                          &quot;OwnYourOwnPropertyType&quot;,
                          &quot;QuadruplexPropertyType&quot;,
                          &quot;RanchPropertyType&quot;,
                          &quot;SingleFamilyPropertyType&quot;,
                          &quot;StockCooperativePropertyType&quot;,
                          &quot;TimesharePropertyType&quot;,
                          &quot;TownhousePropertyType&quot;,
                          &quot;TriplexPropertyType&quot;,
                          &quot;AgriculturePropertyType&quot;,
                          &quot;BusinessPropertyType&quot;,
                          &quot;HotelMotelPropertyType&quot;,
                          &quot;IndustrialPropertyType&quot;,
                          &quot;MixedUsePropertyType&quot;,
                          &quot;MultiFamilyPropertyType&quot;,
                          &quot;OfficePropertyType&quot;,
                          &quot;RetailPropertyType&quot;,
                          &quot;UnimprovedLandPropertyType&quot;,
                          &quot;WarehousePropertyType&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-418&gt;&quot;
                      },
                      &quot;stories&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;he number of floors in the property&quot;,
                        &quot;example&quot;: 2,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-421&gt;&quot;
                      },
                      &quot;streetAddress&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;the street address&quot;,
                        &quot;example&quot;: &quot;1007 Mountain Gate Rd&quot;,
                        &quot;maxLength&quot;: 75,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-422&gt;&quot;
                      },
                      &quot;yearBuilt&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;the year the structure was created&quot;,
                        &quot;example&quot;: 1988,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-425&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;RealEstateProperty&quot;
                  },
                  {
                    &quot;description&quot;: &quot;the subject property&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-486&gt;&quot;
                  },
                  {
                    &quot;properties&quot;: {
                      &quot;additionalProperty&quot;: {
                        &quot;example&quot;: {
                          &quot;heating&quot;: null,
                          &quot;cooling&quot;: null,
                          &quot;isForeclosure&quot;: null,
                          &quot;isShortsale&quot;: null,
                          &quot;score&quot;: 7,
                          &quot;parcelId&quot;: null,
                          &quot;averageSalePrice&quot;: {
                            &quot;type&quot;: &quot;PriceSpecification&quot;,
                            &quot;price&quot;: 7500000,
                            &quot;priceCurrency&quot;: &quot;USD&quot;
                          },
                          &quot;nonDisclosureProperty&quot;: false,
                          &quot;taxAssessedValue&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;taxAssessedYear&quot;: 2021,
                          &quot;inHouseCompanyListingUrl&quot;: null,
                          &quot;inHouseCompanyListingEvent&quot;: null,
                          &quot;neighborhoodMetrics&quot;: null,
                          &quot;neighborhoodName&quot;: &quot;DEER CREEK WOODS&quot;,
                          &quot;neighborhoodKey&quot;: null,
                          &quot;useNeighborhoodDataForCharts&quot;: false,
                          &quot;ownerName&quot;: &quot;Bob Jones&quot;,
                          &quot;ownerOccupied&quot;: &quot;Y&quot;,
                          &quot;ownersEstimatedEquity&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;firstLoanPrice&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;firstLoanLenderName&quot;: &quot;&quot;,
                          &quot;secondLoanPrice&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: null,
                            &quot;currency&quot;: null
                          },
                          &quot;secondLoanLenderName&quot;: &quot;N/A&quot;,
                          &quot;lastRefinanceLoanVal1&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;lastRefinanceLenderName1&quot;: &quot;N/A&quot;,
                          &quot;lastRefinanceLoanVal2&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: null,
                            &quot;currency&quot;: null
                          },
                          &quot;lastRefinanceLenderName2&quot;: &quot;N/A&quot;,
                          &quot;Title_Company&quot;: &quot;&quot;
                        }
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-487&gt;&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-477&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;PropertyValueReport&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = &lt;2&gt;
required = 
path = about




prop = {
  &quot;_json&quot;: {
    &quot;properties&quot;: {
      &quot;additionalProperty&quot;: {
        &quot;example&quot;: {
          &quot;heating&quot;: null,
          &quot;cooling&quot;: null,
          &quot;isForeclosure&quot;: null,
          &quot;isShortsale&quot;: null,
          &quot;score&quot;: 7,
          &quot;parcelId&quot;: null,
          &quot;averageSalePrice&quot;: {
            &quot;type&quot;: &quot;PriceSpecification&quot;,
            &quot;price&quot;: 7500000,
            &quot;priceCurrency&quot;: &quot;USD&quot;
          },
          &quot;nonDisclosureProperty&quot;: false,
          &quot;taxAssessedValue&quot;: {
            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
            &quot;amount&quot;: &quot;100000&quot;,
            &quot;currency&quot;: &quot;USD&quot;
          },
          &quot;taxAssessedYear&quot;: 2021,
          &quot;inHouseCompanyListingUrl&quot;: null,
          &quot;inHouseCompanyListingEvent&quot;: null,
          &quot;neighborhoodMetrics&quot;: null,
          &quot;neighborhoodName&quot;: &quot;DEER CREEK WOODS&quot;,
          &quot;neighborhoodKey&quot;: null,
          &quot;useNeighborhoodDataForCharts&quot;: false,
          &quot;ownerName&quot;: &quot;Bob Jones&quot;,
          &quot;ownerOccupied&quot;: &quot;Y&quot;,
          &quot;ownersEstimatedEquity&quot;: {
            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
            &quot;amount&quot;: &quot;100000&quot;,
            &quot;currency&quot;: &quot;USD&quot;
          },
          &quot;firstLoanPrice&quot;: {
            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
            &quot;amount&quot;: &quot;100000&quot;,
            &quot;currency&quot;: &quot;USD&quot;
          },
          &quot;firstLoanLenderName&quot;: &quot;&quot;,
          &quot;secondLoanPrice&quot;: {
            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
            &quot;amount&quot;: null,
            &quot;currency&quot;: null
          },
          &quot;secondLoanLenderName&quot;: &quot;N/A&quot;,
          &quot;lastRefinanceLoanVal1&quot;: {
            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
            &quot;amount&quot;: &quot;100000&quot;,
            &quot;currency&quot;: &quot;USD&quot;
          },
          &quot;lastRefinanceLenderName1&quot;: &quot;N/A&quot;,
          &quot;lastRefinanceLoanVal2&quot;: {
            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
            &quot;amount&quot;: null,
            &quot;currency&quot;: null
          },
          &quot;lastRefinanceLenderName2&quot;: &quot;N/A&quot;,
          &quot;Title_Company&quot;: &quot;&quot;
        }
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-487&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;allOf&quot;: [
          {
            &quot;title&quot;: &quot;RealEstateProperty&quot;,
            &quot;x-range&quot;: &quot;RealEstateProperty&quot;,
            &quot;description&quot;: &quot;a property in the real estate transaction context&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;required&quot;: [
              &quot;type&quot;,
              &quot;propertyType&quot;
            ],
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;description&quot;: &quot;\&quot;RealEstateProperty\&quot;&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateProperty&quot;
                ],
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-478&gt;&quot;
              },
              &quot;propertyType&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;RESO property type (see range for allowed values)&quot;,
                &quot;x-range&quot;: &quot;PropertyType&quot;,
                &quot;minLength&quot;: 4,
                &quot;maxLength&quot;: 4,
                &quot;enum&quot;: [
                  &quot;RESI&quot;,
                  &quot;RLSE&quot;,
                  &quot;RINC&quot;,
                  &quot;LAND&quot;,
                  &quot;MOBI&quot;,
                  &quot;FARM&quot;,
                  &quot;COMS&quot;,
                  &quot;COML&quot;,
                  &quot;BUSO&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-419&gt;&quot;
              },
              &quot;addressCountry&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;two-letter ISO 3166-1 alpha-2 country code&quot;,
                &quot;example&quot;: &quot;US&quot;,
                &quot;enum&quot;: [
                  &quot;CA&quot;,
                  &quot;DE&quot;,
                  &quot;GR&quot;,
                  &quot;IN&quot;,
                  &quot;IT&quot;,
                  &quot;MX&quot;,
                  &quot;PE&quot;,
                  &quot;PT&quot;,
                  &quot;ES&quot;,
                  &quot;AE&quot;,
                  &quot;GB&quot;,
                  &quot;US&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-395&gt;&quot;
              },
              &quot;addressLocality&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;City, Township.&quot;,
                &quot;example&quot;: &quot;Gotham City&quot;,
                &quot;maxLength&quot;: 50,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-396&gt;&quot;
              },
              &quot;addressRegion&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;State or Province.&quot;,
                &quot;example&quot;: &quot;New Jersey&quot;,
                &quot;maxLength&quot;: 3,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-397&gt;&quot;
              },
              &quot;apn&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Assessors Parcel Number&quot;,
                &quot;example&quot;: &quot;ABC-12345-XX-XXXX&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-479&gt;&quot;
              },
              &quot;image&quot;: {
                &quot;title&quot;: &quot;image&quot;,
                &quot;description&quot;: &quot;an ImageObject or URI reference to an image on the web.&quot;,
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-range&quot;: [
                  &quot;ImageObject&quot;
                ],
                &quot;items&quot;: [
                  {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;allOf&quot;: [
                      {
                        &quot;title&quot;: &quot;MediaObject&quot;,
                        &quot;description&quot;: &quot;an image, video or document availble for download&quot;,
                        &quot;x-subclass&quot;: [
                          &quot;ImageObject&quot;,
                          &quot;DigitalDocument&quot;
                        ],
                        &quot;allOf&quot;: [
                          {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;required&quot;: [
                              &quot;type&quot;
                            ],
                            &quot;properties&quot;: {
                              &quot;type&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
                              }
                            },
                            &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
                          },
                          {
                            &quot;properties&quot;: {
                              &quot;type&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;enum&quot;: [
                                  &quot;MediaObject&quot;,
                                  &quot;ImageObject&quot;,
                                  &quot;DigitalDocument&quot;
                                ]
                              },
                              &quot;id&quot;: {
                                &quot;description&quot;: &quot;the URL to access the item.&quot;,
                                &quot;example&quot;: &quot;http://user.example.com/public/logo/fileName.zip&quot;,
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;format&quot;: &quot;uri&quot;
                              },
                              &quot;name&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;description&quot;: &quot;the file name of the object.&quot;,
                                &quot;example&quot;: &quot;fileName.zip&quot;
                              },
                              &quot;encodingFormat&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;description&quot;: &quot;MIME type&quot;,
                                &quot;example&quot;: &quot;application/zip&quot;
                              },
                              &quot;about&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;format&quot;: &quot;uri&quot;,
                                &quot;description&quot;: &quot;URI to the subject of the image or logo&quot;,
                                &quot;example&quot;: &quot;http://user.example.com/profile/card#me&quot;
                              },
                              &quot;url&quot;: {
                                &quot;type&quot;: &quot;string&quot;,
                                &quot;format&quot;: &quot;uri&quot;,
                                &quot;description&quot;: &quot;URL of the image content&quot;,
                                &quot;example&quot;: &quot;http://user.example.com/public/profile/image.jpg&quot;
                              }
                            },
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-178&gt;&quot;
                          }
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;MediaObject&quot;
                      },
                      {
                        &quot;title&quot;: &quot;ImageObject&quot;,
                        &quot;x-range&quot;: &quot;ImageObject&quot;,
                        &quot;properties&quot;: {
                          &quot;type&quot;: {
                            &quot;enum&quot;: [
                              &quot;ImageObject&quot;
                            ],
                            &quot;example&quot;: &quot;ImageObject&quot;
                          },
                          &quot;id&quot;: {
                            &quot;example&quot;: &quot;http://user.example.com/public/logo/image.jpg&quot;
                          },
                          &quot;name&quot;: {
                            &quot;example&quot;: &quot;image.jpg&quot;
                          },
                          &quot;encodingFormat&quot;: {
                            &quot;example&quot;: &quot;image/jpeg&quot;
                          }
                        },
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-179&gt;&quot;
                      }
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-177&gt;&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-401&gt;&quot;
              },
              &quot;latitude&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;The latitude of a location.&quot;,
                &quot;x-title&quot;: &quot;latitude&quot;,
                &quot;example&quot;: 40.75,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
              },
              &quot;listingId&quot;: {
                &quot;description&quot;: &quot;the local identifier for the listing (MLS #)&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-480&gt;&quot;
              },
              &quot;livingArea&quot;: {
                &quot;description&quot;: &quot;property indoor space&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;QuantitativeValue&quot;,
                  &quot;unitCode&quot;: &quot;SqFt&quot;,
                  &quot;unitText&quot;: &quot;Square Feet&quot;,
                  &quot;value&quot;: 1500
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-481&gt;&quot;
              },
              &quot;longitude&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;The longitude of a location.&quot;,
                &quot;x-title&quot;: &quot;longitude&quot;,
                &quot;example&quot;: 73.98,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
              },
              &quot;lotSize&quot;: {
                &quot;description&quot;: &quot;outdoor space minValue, maxValue&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;QuantitativeValue&quot;,
                  &quot;unitCode&quot;: &quot;AC&quot;,
                  &quot;unitText&quot;: &quot;Acres&quot;,
                  &quot;value&quot;: 0.5
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-482&gt;&quot;
              },
              &quot;numberOfBathrooms&quot;: {
                &quot;description&quot;: &quot;the number of bathrooms&quot;,
                &quot;example&quot;: &quot;2&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-483&gt;&quot;
              },
              &quot;numberOfBedrooms&quot;: {
                &quot;description&quot;: &quot;the number of bedrooms&quot;,
                &quot;example&quot;: &quot;3&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-484&gt;&quot;
              },
              &quot;numberOfRooms&quot;: {
                &quot;description&quot;: &quot;the total number of rooms in the building&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: 7,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-485&gt;&quot;
              },
              &quot;postalCode&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Zip/Post Code&quot;,
                &quot;example&quot;: &quot;10010&quot;,
                &quot;maxLength&quot;: 12,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-417&gt;&quot;
              },
              &quot;propertySubType&quot;: {
                &quot;title&quot;: &quot;propertySubType&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-range&quot;: &quot;PropertySubType&quot;,
                &quot;description&quot;: &quot;RESO property sub-type (see range for allowed values)&quot;,
                &quot;enum&quot;: [
                  &quot;ApartmentPropertyType&quot;,
                  &quot;BoatSlipPropertyType&quot;,
                  &quot;CabinPropertyType&quot;,
                  &quot;CondominiumPropertyType&quot;,
                  &quot;DeededParkingPropertyType&quot;,
                  &quot;DuplexPropertyType&quot;,
                  &quot;FarmPropertyType&quot;,
                  &quot;ManufacturedHomePropertyType&quot;,
                  &quot;ManufacturedOnLandPropertyType&quot;,
                  &quot;MobileHomePropertyType&quot;,
                  &quot;OwnYourOwnPropertyType&quot;,
                  &quot;QuadruplexPropertyType&quot;,
                  &quot;RanchPropertyType&quot;,
                  &quot;SingleFamilyPropertyType&quot;,
                  &quot;StockCooperativePropertyType&quot;,
                  &quot;TimesharePropertyType&quot;,
                  &quot;TownhousePropertyType&quot;,
                  &quot;TriplexPropertyType&quot;,
                  &quot;AgriculturePropertyType&quot;,
                  &quot;BusinessPropertyType&quot;,
                  &quot;HotelMotelPropertyType&quot;,
                  &quot;IndustrialPropertyType&quot;,
                  &quot;MixedUsePropertyType&quot;,
                  &quot;MultiFamilyPropertyType&quot;,
                  &quot;OfficePropertyType&quot;,
                  &quot;RetailPropertyType&quot;,
                  &quot;UnimprovedLandPropertyType&quot;,
                  &quot;WarehousePropertyType&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-418&gt;&quot;
              },
              &quot;stories&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;he number of floors in the property&quot;,
                &quot;example&quot;: 2,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-421&gt;&quot;
              },
              &quot;streetAddress&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the street address&quot;,
                &quot;example&quot;: &quot;1007 Mountain Gate Rd&quot;,
                &quot;maxLength&quot;: 75,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-422&gt;&quot;
              },
              &quot;yearBuilt&quot;: {
                &quot;type&quot;: &quot;number&quot;,
                &quot;description&quot;: &quot;the year the structure was created&quot;,
                &quot;example&quot;: 1988,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-425&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;RealEstateProperty&quot;
          },
          {
            &quot;description&quot;: &quot;the subject property&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-486&gt;&quot;
          },
          {
            &quot;properties&quot;: {
              &quot;additionalProperty&quot;: {
                &quot;example&quot;: {
                  &quot;heating&quot;: null,
                  &quot;cooling&quot;: null,
                  &quot;isForeclosure&quot;: null,
                  &quot;isShortsale&quot;: null,
                  &quot;score&quot;: 7,
                  &quot;parcelId&quot;: null,
                  &quot;averageSalePrice&quot;: {
                    &quot;type&quot;: &quot;PriceSpecification&quot;,
                    &quot;price&quot;: 7500000,
                    &quot;priceCurrency&quot;: &quot;USD&quot;
                  },
                  &quot;nonDisclosureProperty&quot;: false,
                  &quot;taxAssessedValue&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: &quot;100000&quot;,
                    &quot;currency&quot;: &quot;USD&quot;
                  },
                  &quot;taxAssessedYear&quot;: 2021,
                  &quot;inHouseCompanyListingUrl&quot;: null,
                  &quot;inHouseCompanyListingEvent&quot;: null,
                  &quot;neighborhoodMetrics&quot;: null,
                  &quot;neighborhoodName&quot;: &quot;DEER CREEK WOODS&quot;,
                  &quot;neighborhoodKey&quot;: null,
                  &quot;useNeighborhoodDataForCharts&quot;: false,
                  &quot;ownerName&quot;: &quot;Bob Jones&quot;,
                  &quot;ownerOccupied&quot;: &quot;Y&quot;,
                  &quot;ownersEstimatedEquity&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: &quot;100000&quot;,
                    &quot;currency&quot;: &quot;USD&quot;
                  },
                  &quot;firstLoanPrice&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: &quot;100000&quot;,
                    &quot;currency&quot;: &quot;USD&quot;
                  },
                  &quot;firstLoanLenderName&quot;: &quot;&quot;,
                  &quot;secondLoanPrice&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: null,
                    &quot;currency&quot;: null
                  },
                  &quot;secondLoanLenderName&quot;: &quot;N/A&quot;,
                  &quot;lastRefinanceLoanVal1&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: &quot;100000&quot;,
                    &quot;currency&quot;: &quot;USD&quot;
                  },
                  &quot;lastRefinanceLenderName1&quot;: &quot;N/A&quot;,
                  &quot;lastRefinanceLoanVal2&quot;: {
                    &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                    &quot;amount&quot;: null,
                    &quot;currency&quot;: null
                  },
                  &quot;lastRefinanceLenderName2&quot;: &quot;N/A&quot;,
                  &quot;Title_Company&quot;: &quot;&quot;
                }
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-487&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-477&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;title&quot;: &quot;PropertyValueReport&quot;,
            &quot;x-range&quot;: &quot;PropertyValueReport&quot;,
            &quot;description&quot;: &quot;an automated property value esmation&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;PropertyValueReport&quot;,
                &quot;enum&quot;: [
                  &quot;PropertyValueReport&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-474&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;document name or title&quot;,
                &quot;example&quot;: &quot;LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-475&gt;&quot;
              },
              &quot;dateCreated&quot;: {
                &quot;description&quot;: &quot;The date on which the item was created.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-211&gt;&quot;
              },
              &quot;result&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;MonetaryAmount&quot;,
                &quot;x-range&quot;: &quot;MonetaryAmount&quot;,
                &quot;required&quot;: [
                  &quot;type&quot;,
                  &quot;value&quot;,
                  &quot;currency&quot;
                ],
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;MonetaryAmount&quot;,
                    &quot;enum&quot;: [
                      &quot;MonetaryAmount&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-328&gt;&quot;
                  },
                  &quot;minValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the lower limit of the range&quot;,
                    &quot;example&quot;: 2400000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-329&gt;&quot;
                  },
                  &quot;maxValue&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the upper limit of the range&quot;,
                    &quot;example&quot;: 3200000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-330&gt;&quot;
                  },
                  &quot;value&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the actual or expected value&quot;,
                    &quot;example&quot;: 2700000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-331&gt;&quot;
                  },
                  &quot;currency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217 country codes&quot;,
                    &quot;maxLength&quot;: 3,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-332&gt;&quot;
                  }
                },
                &quot;description&quot;: &quot;the estimated value of the property&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-476&gt;&quot;
              },
              &quot;about&quot;: {
                &quot;allOf&quot;: [
                  {
                    &quot;title&quot;: &quot;RealEstateProperty&quot;,
                    &quot;x-range&quot;: &quot;RealEstateProperty&quot;,
                    &quot;description&quot;: &quot;a property in the real estate transaction context&quot;,
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;required&quot;: [
                      &quot;type&quot;,
                      &quot;propertyType&quot;
                    ],
                    &quot;properties&quot;: {
                      &quot;type&quot;: {
                        &quot;description&quot;: &quot;\&quot;RealEstateProperty\&quot;&quot;,
                        &quot;enum&quot;: [
                          &quot;RealEstateProperty&quot;
                        ],
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-478&gt;&quot;
                      },
                      &quot;propertyType&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;RESO property type (see range for allowed values)&quot;,
                        &quot;x-range&quot;: &quot;PropertyType&quot;,
                        &quot;minLength&quot;: 4,
                        &quot;maxLength&quot;: 4,
                        &quot;enum&quot;: [
                          &quot;RESI&quot;,
                          &quot;RLSE&quot;,
                          &quot;RINC&quot;,
                          &quot;LAND&quot;,
                          &quot;MOBI&quot;,
                          &quot;FARM&quot;,
                          &quot;COMS&quot;,
                          &quot;COML&quot;,
                          &quot;BUSO&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-419&gt;&quot;
                      },
                      &quot;addressCountry&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;two-letter ISO 3166-1 alpha-2 country code&quot;,
                        &quot;example&quot;: &quot;US&quot;,
                        &quot;enum&quot;: [
                          &quot;CA&quot;,
                          &quot;DE&quot;,
                          &quot;GR&quot;,
                          &quot;IN&quot;,
                          &quot;IT&quot;,
                          &quot;MX&quot;,
                          &quot;PE&quot;,
                          &quot;PT&quot;,
                          &quot;ES&quot;,
                          &quot;AE&quot;,
                          &quot;GB&quot;,
                          &quot;US&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-395&gt;&quot;
                      },
                      &quot;addressLocality&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;City, Township.&quot;,
                        &quot;example&quot;: &quot;Gotham City&quot;,
                        &quot;maxLength&quot;: 50,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-396&gt;&quot;
                      },
                      &quot;addressRegion&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;State or Province.&quot;,
                        &quot;example&quot;: &quot;New Jersey&quot;,
                        &quot;maxLength&quot;: 3,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-397&gt;&quot;
                      },
                      &quot;apn&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Assessors Parcel Number&quot;,
                        &quot;example&quot;: &quot;ABC-12345-XX-XXXX&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-479&gt;&quot;
                      },
                      &quot;image&quot;: {
                        &quot;title&quot;: &quot;image&quot;,
                        &quot;description&quot;: &quot;an ImageObject or URI reference to an image on the web.&quot;,
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;x-range&quot;: [
                          &quot;ImageObject&quot;
                        ],
                        &quot;items&quot;: [
                          {
                            &quot;type&quot;: &quot;object&quot;,
                            &quot;allOf&quot;: [
                              {
                                &quot;title&quot;: &quot;MediaObject&quot;,
                                &quot;description&quot;: &quot;an image, video or document availble for download&quot;,
                                &quot;x-subclass&quot;: [
                                  &quot;ImageObject&quot;,
                                  &quot;DigitalDocument&quot;
                                ],
                                &quot;allOf&quot;: [
                                  {
                                    &quot;type&quot;: &quot;object&quot;,
                                    &quot;required&quot;: [
                                      &quot;type&quot;
                                    ],
                                    &quot;properties&quot;: {
                                      &quot;type&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
                                      }
                                    },
                                    &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
                                  },
                                  {
                                    &quot;properties&quot;: {
                                      &quot;type&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;enum&quot;: [
                                          &quot;MediaObject&quot;,
                                          &quot;ImageObject&quot;,
                                          &quot;DigitalDocument&quot;
                                        ]
                                      },
                                      &quot;id&quot;: {
                                        &quot;description&quot;: &quot;the URL to access the item.&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/public/logo/fileName.zip&quot;,
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;
                                      },
                                      &quot;name&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;the file name of the object.&quot;,
                                        &quot;example&quot;: &quot;fileName.zip&quot;
                                      },
                                      &quot;encodingFormat&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;description&quot;: &quot;MIME type&quot;,
                                        &quot;example&quot;: &quot;application/zip&quot;
                                      },
                                      &quot;about&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;,
                                        &quot;description&quot;: &quot;URI to the subject of the image or logo&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/profile/card#me&quot;
                                      },
                                      &quot;url&quot;: {
                                        &quot;type&quot;: &quot;string&quot;,
                                        &quot;format&quot;: &quot;uri&quot;,
                                        &quot;description&quot;: &quot;URL of the image content&quot;,
                                        &quot;example&quot;: &quot;http://user.example.com/public/profile/image.jpg&quot;
                                      }
                                    },
                                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-178&gt;&quot;
                                  }
                                ],
                                &quot;x-parser-schema-id&quot;: &quot;MediaObject&quot;
                              },
                              {
                                &quot;title&quot;: &quot;ImageObject&quot;,
                                &quot;x-range&quot;: &quot;ImageObject&quot;,
                                &quot;properties&quot;: {
                                  &quot;type&quot;: {
                                    &quot;enum&quot;: [
                                      &quot;ImageObject&quot;
                                    ],
                                    &quot;example&quot;: &quot;ImageObject&quot;
                                  },
                                  &quot;id&quot;: {
                                    &quot;example&quot;: &quot;http://user.example.com/public/logo/image.jpg&quot;
                                  },
                                  &quot;name&quot;: {
                                    &quot;example&quot;: &quot;image.jpg&quot;
                                  },
                                  &quot;encodingFormat&quot;: {
                                    &quot;example&quot;: &quot;image/jpeg&quot;
                                  }
                                },
                                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-179&gt;&quot;
                              }
                            ],
                            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-177&gt;&quot;
                          }
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-401&gt;&quot;
                      },
                      &quot;latitude&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;The latitude of a location.&quot;,
                        &quot;x-title&quot;: &quot;latitude&quot;,
                        &quot;example&quot;: 40.75,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-283&gt;&quot;
                      },
                      &quot;listingId&quot;: {
                        &quot;description&quot;: &quot;the local identifier for the listing (MLS #)&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-480&gt;&quot;
                      },
                      &quot;livingArea&quot;: {
                        &quot;description&quot;: &quot;property indoor space&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;QuantitativeValue&quot;,
                          &quot;unitCode&quot;: &quot;SqFt&quot;,
                          &quot;unitText&quot;: &quot;Square Feet&quot;,
                          &quot;value&quot;: 1500
                        },
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-481&gt;&quot;
                      },
                      &quot;longitude&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;The longitude of a location.&quot;,
                        &quot;x-title&quot;: &quot;longitude&quot;,
                        &quot;example&quot;: 73.98,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-282&gt;&quot;
                      },
                      &quot;lotSize&quot;: {
                        &quot;description&quot;: &quot;outdoor space minValue, maxValue&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;QuantitativeValue&quot;,
                          &quot;unitCode&quot;: &quot;AC&quot;,
                          &quot;unitText&quot;: &quot;Acres&quot;,
                          &quot;value&quot;: 0.5
                        },
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;x-range&quot;: &quot;QuantitativeValue&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-482&gt;&quot;
                      },
                      &quot;numberOfBathrooms&quot;: {
                        &quot;description&quot;: &quot;the number of bathrooms&quot;,
                        &quot;example&quot;: &quot;2&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-483&gt;&quot;
                      },
                      &quot;numberOfBedrooms&quot;: {
                        &quot;description&quot;: &quot;the number of bedrooms&quot;,
                        &quot;example&quot;: &quot;3&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-484&gt;&quot;
                      },
                      &quot;numberOfRooms&quot;: {
                        &quot;description&quot;: &quot;the total number of rooms in the building&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;example&quot;: 7,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-485&gt;&quot;
                      },
                      &quot;postalCode&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Zip/Post Code&quot;,
                        &quot;example&quot;: &quot;10010&quot;,
                        &quot;maxLength&quot;: 12,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-417&gt;&quot;
                      },
                      &quot;propertySubType&quot;: {
                        &quot;title&quot;: &quot;propertySubType&quot;,
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;x-range&quot;: &quot;PropertySubType&quot;,
                        &quot;description&quot;: &quot;RESO property sub-type (see range for allowed values)&quot;,
                        &quot;enum&quot;: [
                          &quot;ApartmentPropertyType&quot;,
                          &quot;BoatSlipPropertyType&quot;,
                          &quot;CabinPropertyType&quot;,
                          &quot;CondominiumPropertyType&quot;,
                          &quot;DeededParkingPropertyType&quot;,
                          &quot;DuplexPropertyType&quot;,
                          &quot;FarmPropertyType&quot;,
                          &quot;ManufacturedHomePropertyType&quot;,
                          &quot;ManufacturedOnLandPropertyType&quot;,
                          &quot;MobileHomePropertyType&quot;,
                          &quot;OwnYourOwnPropertyType&quot;,
                          &quot;QuadruplexPropertyType&quot;,
                          &quot;RanchPropertyType&quot;,
                          &quot;SingleFamilyPropertyType&quot;,
                          &quot;StockCooperativePropertyType&quot;,
                          &quot;TimesharePropertyType&quot;,
                          &quot;TownhousePropertyType&quot;,
                          &quot;TriplexPropertyType&quot;,
                          &quot;AgriculturePropertyType&quot;,
                          &quot;BusinessPropertyType&quot;,
                          &quot;HotelMotelPropertyType&quot;,
                          &quot;IndustrialPropertyType&quot;,
                          &quot;MixedUsePropertyType&quot;,
                          &quot;MultiFamilyPropertyType&quot;,
                          &quot;OfficePropertyType&quot;,
                          &quot;RetailPropertyType&quot;,
                          &quot;UnimprovedLandPropertyType&quot;,
                          &quot;WarehousePropertyType&quot;
                        ],
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-418&gt;&quot;
                      },
                      &quot;stories&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;he number of floors in the property&quot;,
                        &quot;example&quot;: 2,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-421&gt;&quot;
                      },
                      &quot;streetAddress&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;the street address&quot;,
                        &quot;example&quot;: &quot;1007 Mountain Gate Rd&quot;,
                        &quot;maxLength&quot;: 75,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-422&gt;&quot;
                      },
                      &quot;yearBuilt&quot;: {
                        &quot;type&quot;: &quot;number&quot;,
                        &quot;description&quot;: &quot;the year the structure was created&quot;,
                        &quot;example&quot;: 1988,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-425&gt;&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;RealEstateProperty&quot;
                  },
                  {
                    &quot;description&quot;: &quot;the subject property&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-486&gt;&quot;
                  },
                  {
                    &quot;properties&quot;: {
                      &quot;additionalProperty&quot;: {
                        &quot;example&quot;: {
                          &quot;heating&quot;: null,
                          &quot;cooling&quot;: null,
                          &quot;isForeclosure&quot;: null,
                          &quot;isShortsale&quot;: null,
                          &quot;score&quot;: 7,
                          &quot;parcelId&quot;: null,
                          &quot;averageSalePrice&quot;: {
                            &quot;type&quot;: &quot;PriceSpecification&quot;,
                            &quot;price&quot;: 7500000,
                            &quot;priceCurrency&quot;: &quot;USD&quot;
                          },
                          &quot;nonDisclosureProperty&quot;: false,
                          &quot;taxAssessedValue&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;taxAssessedYear&quot;: 2021,
                          &quot;inHouseCompanyListingUrl&quot;: null,
                          &quot;inHouseCompanyListingEvent&quot;: null,
                          &quot;neighborhoodMetrics&quot;: null,
                          &quot;neighborhoodName&quot;: &quot;DEER CREEK WOODS&quot;,
                          &quot;neighborhoodKey&quot;: null,
                          &quot;useNeighborhoodDataForCharts&quot;: false,
                          &quot;ownerName&quot;: &quot;Bob Jones&quot;,
                          &quot;ownerOccupied&quot;: &quot;Y&quot;,
                          &quot;ownersEstimatedEquity&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;firstLoanPrice&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;firstLoanLenderName&quot;: &quot;&quot;,
                          &quot;secondLoanPrice&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: null,
                            &quot;currency&quot;: null
                          },
                          &quot;secondLoanLenderName&quot;: &quot;N/A&quot;,
                          &quot;lastRefinanceLoanVal1&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: &quot;100000&quot;,
                            &quot;currency&quot;: &quot;USD&quot;
                          },
                          &quot;lastRefinanceLenderName1&quot;: &quot;N/A&quot;,
                          &quot;lastRefinanceLoanVal2&quot;: {
                            &quot;@type&quot;: &quot;MonetaryAmount&quot;,
                            &quot;amount&quot;: null,
                            &quot;currency&quot;: null
                          },
                          &quot;lastRefinanceLenderName2&quot;: &quot;N/A&quot;,
                          &quot;Title_Company&quot;: &quot;&quot;
                        }
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-487&gt;&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-477&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;PropertyValueReport&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = &lt;3&gt;
required = 
path = about











### Example

```json
{
  "type": "PropertyValueReport",
  "name": "LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...",
  "dateCreated": "2019-08-24T14:15:22Z",
  "result": {
    "type": "MonetaryAmount",
    "minValue": 2400000,
    "maxValue": 3200000,
    "value": 2700000,
    "currency": "USD"
  },
  "about": {
    "type": "RealEstateProperty",
    "propertyType": "RESI",
    "addressCountry": "US",
    "addressLocality": "Gotham City",
    "addressRegion": "New Jersey",
    "apn": "ABC-12345-XX-XXXX",
    "image": [
      {
        "type": "ImageObject",
        "id": "http://user.example.com/public/logo/image.jpg",
        "name": "image.jpg",
        "encodingFormat": "image/jpeg",
        "about": "http://user.example.com/profile/card#me",
        "url": "http://user.example.com/public/profile/image.jpg"
      }
    ],
    "latitude": 40.75,
    "listingId": "string",
    "livingArea": {
      "type": "QuantitativeValue",
      "unitCode": "SqFt",
      "unitText": "Square Feet",
      "value": 1500
    },
    "longitude": 73.98,
    "lotSize": {
      "type": "QuantitativeValue",
      "unitCode": "AC",
      "unitText": "Acres",
      "value": 0.5
    },
    "numberOfBathrooms": "2",
    "numberOfBedrooms": "3",
    "numberOfRooms": 7,
    "postalCode": "10010",
    "propertySubType": "ApartmentPropertyType",
    "stories": 2,
    "streetAddress": "1007 Mountain Gate Rd",
    "yearBuilt": 1988,
    "additionalProperty": {
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
```

