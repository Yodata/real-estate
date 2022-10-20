

---
title: RealEstateProperty
---

{
  "type": {
    "_json": {
      "description": "\"RealEstateProperty\"",
      "enum": [
        "RealEstateProperty"
      ],
      "type": "string",
      "x-parser-schema-id": "<anonymous-schema-478>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "propertyType": {
    "_json": {
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
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "addressCountry": {
    "_json": {
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
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "addressLocality": {
    "_json": {
      "type": "string",
      "description": "City, Township.",
      "example": "Gotham City",
      "maxLength": 50,
      "x-parser-schema-id": "<anonymous-schema-396>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "addressRegion": {
    "_json": {
      "type": "string",
      "description": "State or Province.",
      "example": "New Jersey",
      "maxLength": 3,
      "x-parser-schema-id": "<anonymous-schema-397>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "apn": {
    "_json": {
      "type": "string",
      "description": "Assessors Parcel Number",
      "example": "ABC-12345-XX-XXXX",
      "x-parser-schema-id": "<anonymous-schema-479>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "image": {
    "_json": {
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
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "latitude": {
    "_json": {
      "type": "number",
      "description": "The latitude of a location.",
      "x-title": "latitude",
      "example": 40.75,
      "x-parser-schema-id": "<anonymous-schema-283>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "listingId": {
    "_json": {
      "description": "the local identifier for the listing (MLS #)",
      "type": "string",
      "x-parser-schema-id": "<anonymous-schema-480>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "livingArea": {
    "_json": {
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
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "longitude": {
    "_json": {
      "type": "number",
      "description": "The longitude of a location.",
      "x-title": "longitude",
      "example": 73.98,
      "x-parser-schema-id": "<anonymous-schema-282>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "lotSize": {
    "_json": {
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
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "numberOfBathrooms": {
    "_json": {
      "description": "the number of bathrooms",
      "example": "2",
      "type": "string",
      "x-parser-schema-id": "<anonymous-schema-483>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "numberOfBedrooms": {
    "_json": {
      "description": "the number of bedrooms",
      "example": "3",
      "type": "string",
      "x-parser-schema-id": "<anonymous-schema-484>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "numberOfRooms": {
    "_json": {
      "description": "the total number of rooms in the building",
      "type": "string",
      "example": 7,
      "x-parser-schema-id": "<anonymous-schema-485>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "postalCode": {
    "_json": {
      "type": "string",
      "description": "Zip/Post Code",
      "example": "10010",
      "maxLength": 12,
      "x-parser-schema-id": "<anonymous-schema-417>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "propertySubType": {
    "_json": {
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
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "stories": {
    "_json": {
      "type": "number",
      "description": "he number of floors in the property",
      "example": 2,
      "x-parser-schema-id": "<anonymous-schema-421>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "streetAddress": {
    "_json": {
      "type": "string",
      "description": "the street address",
      "example": "1007 Mountain Gate Rd",
      "maxLength": 75,
      "x-parser-schema-id": "<anonymous-schema-422>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  },
  "yearBuilt": {
    "_json": {
      "type": "number",
      "description": "the year the structure was created",
      "example": 1988,
      "x-parser-schema-id": "<anonymous-schema-425>"
    },
    "options": {
      "parent": {
        "_json": {
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
        "options": {}
      }
    }
  }
}


# RealEstateProperty

a property in the real estate transaction context



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "description": "\"RealEstateProperty\"",
    "enum": [
      "RealEstateProperty"
    ],
    "type": "string",
    "x-parser-schema-id": "<anonymous-schema-478>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
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
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
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
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "City, Township.",
    "example": "Gotham City",
    "maxLength": 50,
    "x-parser-schema-id": "<anonymous-schema-396>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "State or Province.",
    "example": "New Jersey",
    "maxLength": 3,
    "x-parser-schema-id": "<anonymous-schema-397>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "Assessors Parcel Number",
    "example": "ABC-12345-XX-XXXX",
    "x-parser-schema-id": "<anonymous-schema-479>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
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
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "number",
    "description": "The latitude of a location.",
    "x-title": "latitude",
    "example": 40.75,
    "x-parser-schema-id": "<anonymous-schema-283>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "the local identifier for the listing (MLS #)",
    "type": "string",
    "x-parser-schema-id": "<anonymous-schema-480>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
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
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "number",
    "description": "The longitude of a location.",
    "x-title": "longitude",
    "example": 73.98,
    "x-parser-schema-id": "<anonymous-schema-282>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
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
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "the number of bathrooms",
    "example": "2",
    "type": "string",
    "x-parser-schema-id": "<anonymous-schema-483>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "the number of bedrooms",
    "example": "3",
    "type": "string",
    "x-parser-schema-id": "<anonymous-schema-484>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "the total number of rooms in the building",
    "type": "string",
    "example": 7,
    "x-parser-schema-id": "<anonymous-schema-485>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "Zip/Post Code",
    "example": "10010",
    "maxLength": 12,
    "x-parser-schema-id": "<anonymous-schema-417>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
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
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "number",
    "description": "he number of floors in the property",
    "example": 2,
    "x-parser-schema-id": "<anonymous-schema-421>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "the street address",
    "example": "1007 Mountain Gate Rd",
    "maxLength": 75,
    "x-parser-schema-id": "<anonymous-schema-422>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "number",
    "description": "the year the structure was created",
    "example": 1988,
    "x-parser-schema-id": "<anonymous-schema-425>"
  },
  "options": {
    "parent": {
      "_json": {
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
      "options": {}
    }
  }
}










### Example

```json
{
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
  "yearBuilt": 1988
}
```

