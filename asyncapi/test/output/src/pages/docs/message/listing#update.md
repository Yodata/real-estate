# listing#update

```json 
{
  "_json": {
    "messageId": "listing#update",
    "x-scope": "realestate/listing#",
    "summary": "a PropertyListing is created or updated",
    "payload": {
      "allOf": [
        {
          "type": "object",
          "required": [
            "topic",
            "data"
          ],
          "properties": {
            "topic": {
              "type": "string",
              "description": "the event topic which determines the schema of event.data",
              "x-parser-schema-id": "<anonymous-schema-3>"
            },
            "time": {
              "type": "string",
              "format": "date-time",
              "description": "date & time the event was produced",
              "x-parser-schema-id": "<anonymous-schema-4>"
            },
            "agent": {
              "type": "string",
              "format": "uri",
              "description": "the user,tema or organization who sent the event",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-5>"
            },
            "instrument": {
              "type": "string",
              "format": "uri",
              "description": "the service which created the event",
              "example": "https://vendorid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-6>"
            },
            "source": {
              "type": "string",
              "format": "uri",
              "description": "an agent, team or organization who received a copy of the event",
              "example": "https://companyid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-7>"
            },
            "originalRecipient": {
              "type": "string",
              "format": "uri",
              "description": "the original recipient of the event with this id",
              "example": "https://agentid.example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-8>"
            },
            "id": {
              "type": "string",
              "format": "uri",
              "description": "the shared identifier of the event, akd the event id",
              "example": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-9>"
            },
            "@id": {
              "type": "string",
              "format": "uri",
              "description": "the url of your instance of the event in your inbox",
              "example": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
              "x-parser-schema-id": "<anonymous-schema-10>"
            },
            "data": {
              "type": "object",
              "description": "event payload, typically an Action",
              "x-parser-schema-id": "<anonymous-schema-11>"
            }
          },
          "x-parser-schema-id": "<anonymous-schema-2>"
        },
        {
          "properties": {
            "topic": {
              "enum": [
                "realestate/listing#update"
              ]
            },
            "data": {
              "allOf": [
                {
                  "allOf": [
                    {
                      "title": "Action",
                      "type": "object",
                      "description": "An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.",
                      "required": [
                        "type"
                      ],
                      "properties": {
                        "type": {
                          "description": "the action type",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-121>"
                        },
                        "object": {
                          "description": "item on which the action is carried out",
                          "x-parser-schema-id": "<anonymous-schema-122>"
                        }
                      },
                      "externalDocs": {
                        "description": "schema.org/Action",
                        "url": "https://schema.org/Action"
                      },
                      "x-parser-schema-id": "Action"
                    },
                    {
                      "title": "UpdateAction",
                      "description": "the item (object) has been updated by user (agent)",
                      "properties": {
                        "type": {
                          "description": "const UpdateAction",
                          "enum": [
                            "UpdateAction"
                          ]
                        },
                        "object": {
                          "type": "object",
                          "description": "the updated item"
                        }
                      }
                    }
                  ]
                },
                {
                  "properties": {
                    "object": {
                      "title": "PropertyListing",
                      "type": "object",
                      "x-range": "PropertyListing",
                      "description": "a real estate property listed for sale",
                      "properties": {
                        "type": {
                          "enum": [
                            "PropertyListing"
                          ],
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-394>"
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
                        "buyerAgent": {
                          "description": "the buyer's RealEstateAgent",
                          "example": {
                            "email": "butch.byers@example.com",
                            "identifier": {
                              "agentKey": "xxxx"
                            },
                            "name": "Butch Byers",
                            "type": "RealEstateAgent"
                          },
                          "type": "object",
                          "x-range": "RealEstateAgent",
                          "x-parser-schema-id": "<anonymous-schema-398>"
                        },
                        "buyerOffice": {
                          "description": "the buyer's RealEstateOffice",
                          "example": {
                            "email": "gcr@example.com",
                            "identifier": {
                              "officeKey": "grc1"
                            },
                            "name": "Gotham City Real Estate",
                            "type": "RealEstateOffice"
                          },
                          "type": "object",
                          "x-range": "RealEstateOffice",
                          "x-parser-schema-id": "<anonymous-schema-399>"
                        },
                        "closeDate": {
                          "title": "closeDate",
                          "type": "string",
                          "format": "date-time",
                          "description": "With for-sale listings, the date the purchase agreement was fulfilled. With lease listings, the date the requirements were fulfilled, such as contract and/or deposit.",
                          "x-range": "DateTime",
                          "x-parser-schema-id": "<anonymous-schema-400>"
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
                        "internetAddressDisplayYN": {
                          "enum": [
                            "Y",
                            "N"
                          ],
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-402>"
                        },
                        "latitude": {
                          "type": "number",
                          "description": "The latitude of a location.",
                          "x-title": "latitude",
                          "example": 40.75,
                          "x-parser-schema-id": "<anonymous-schema-283>"
                        },
                        "listingAgent": {
                          "type": "object",
                          "description": "the agent/broker representing the seller in a real estate transaction",
                          "x-range": [
                            "RealEstateAgent",
                            "RealEstateOrganization"
                          ],
                          "example": {
                            "type": "RealEstateAgent",
                            "name": "Lori Listagent",
                            "telephone": "1-252-574-0160",
                            "email": "lorilistagent@example.com"
                          },
                          "x-parser-schema-id": "<anonymous-schema-403>"
                        },
                        "listingContractDate": {
                          "description": "The effective date of the agreement between the seller and the seller's broker.",
                          "format": "date-time",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-404>"
                        },
                        "listingId": {
                          "description": "the local identifier for the listing",
                          "example": "GOTHAM-MLS+12345",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-405>"
                        },
                        "listingOffice": {
                          "description": "the listing office",
                          "example": {
                            "name": "Gotham City Real Estate",
                            "type": "RealEstateOffice"
                          },
                          "type": "object",
                          "x-range": "RealEstateOrganization",
                          "x-parser-schema-id": "<anonymous-schema-406>"
                        },
                        "listingOriginatingSystem": {
                          "description": "The place where the item is originally input by the user.",
                          "example": {
                            "identifier": {
                              "bhhsmlsid": "xxxx",
                              "resoouid": "not-yet-available"
                            },
                            "name": "MLSListings",
                            "type": "MultipleListingService"
                          },
                          "type": "object",
                          "x-range": "MultipleListingService",
                          "x-subPropertyOf": "instrument",
                          "x-parser-schema-id": "<anonymous-schema-407>"
                        },
                        "listingPrice": {
                          "type": "object",
                          "x-range": "PriceSpecification",
                          "example": {
                            "type": "PriceSpecification",
                            "price": 75000,
                            "priceCurrency": "USD"
                          },
                          "x-parser-schema-id": "<anonymous-schema-408>"
                        },
                        "listingStatus": {
                          "enum": [
                            "Active",
                            "Pending",
                            "Sold",
                            "Canceled",
                            "Prelisted",
                            "OffMarket",
                            "Private"
                          ],
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-409>"
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
                          "x-parser-schema-id": "<anonymous-schema-410>"
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
                          "x-parser-schema-id": "<anonymous-schema-411>"
                        },
                        "numberOfBathrooms": {
                          "description": "the number of bathrooms",
                          "example": "2",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-412>"
                        },
                        "numberOfBedrooms": {
                          "description": "the number of bedrooms",
                          "example": "3",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-413>"
                        },
                        "numberOfRooms": {
                          "description": "the total number of rooms in the building",
                          "example": "7",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-414>"
                        },
                        "originatingSystemKey": {
                          "description": "the listing identifier from the original MLS, aka MLSID.",
                          "example": 12345,
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-415>"
                        },
                        "originatingSystemName": {
                          "description": "the name of the MLS where the listing was originally input",
                          "example": "GOTHAM-MLS",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-416>"
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
                        "purchaseContractDate": {
                          "description": "With for-sale listings, the date an offer was accepted and the listing was no longer on market. With lease listings this may represent a meeting of the minds to lease, but some contractual requirements are yet to be fulfilled, such as contract signing or receipt of the deposit.",
                          "format": "date-time",
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-420>"
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
                        "universalPropertyId": {
                          "type": "string",
                          "title": "universalPropertyId",
                          "description": "The Universal Property Identifier is a unique identifier for all real property in the US and Canada.  It is based on country and local identification methods and is limited to real property.  For cases such as shares of real property, units, and other more granular cases, please utilize the UniversalPropertySubId.",
                          "example": "US-04015-N-R-11022331-N",
                          "x-parser-schema-id": "<anonymous-schema-423>"
                        },
                        "url": {
                          "title": "url",
                          "type": "string",
                          "format": "uri",
                          "description": "URL of the item.",
                          "example": "https://www.example.com/homedetails/1007-Mountain-Gate-Rd-Gotham-City-Gotham/10007",
                          "x-parser-schema-id": "<anonymous-schema-424>"
                        },
                        "yearBuilt": {
                          "type": "number",
                          "description": "the year the structure was created",
                          "example": 1988,
                          "x-parser-schema-id": "<anonymous-schema-425>"
                        }
                      },
                      "x-parser-schema-id": "PropertyListing"
                    }
                  }
                }
              ]
            }
          },
          "x-parser-schema-id": "<anonymous-schema-48>"
        }
      ],
      "x-parser-schema-id": "<anonymous-schema-47>"
    },
    "x-parser-original-schema-format": "application/vnd.aai.asyncapi;version=2.4.0",
    "x-parser-original-payload": {
      "allOf": [
        {
          "type": "object",
          "required": [
            "topic",
            "data"
          ],
          "properties": {
            "topic": {
              "type": "string",
              "description": "the event topic which determines the schema of event.data"
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
            "topic": {
              "enum": [
                "realestate/listing#update"
              ]
            },
            "data": {
              "allOf": [
                {
                  "allOf": [
                    {
                      "title": "Action",
                      "type": "object",
                      "description": "An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.",
                      "required": [
                        "type"
                      ],
                      "properties": {
                        "type": {
                          "description": "the action type",
                          "type": "string"
                        },
                        "object": {
                          "description": "item on which the action is carried out"
                        }
                      },
                      "externalDocs": {
                        "description": "schema.org/Action",
                        "url": "https://schema.org/Action"
                      }
                    },
                    {
                      "title": "UpdateAction",
                      "description": "the item (object) has been updated by user (agent)",
                      "properties": {
                        "type": {
                          "description": "const UpdateAction",
                          "enum": [
                            "UpdateAction"
                          ]
                        },
                        "object": {
                          "type": "object",
                          "description": "the updated item"
                        }
                      }
                    }
                  ]
                },
                {
                  "properties": {
                    "object": {
                      "title": "PropertyListing",
                      "type": "object",
                      "x-range": "PropertyListing",
                      "description": "a real estate property listed for sale",
                      "properties": {
                        "type": {
                          "enum": [
                            "PropertyListing"
                          ],
                          "type": "string"
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
                        "buyerAgent": {
                          "description": "the buyer's RealEstateAgent",
                          "example": {
                            "email": "butch.byers@example.com",
                            "identifier": {
                              "agentKey": "xxxx"
                            },
                            "name": "Butch Byers",
                            "type": "RealEstateAgent"
                          },
                          "type": "object",
                          "x-range": "RealEstateAgent"
                        },
                        "buyerOffice": {
                          "description": "the buyer's RealEstateOffice",
                          "example": {
                            "email": "gcr@example.com",
                            "identifier": {
                              "officeKey": "grc1"
                            },
                            "name": "Gotham City Real Estate",
                            "type": "RealEstateOffice"
                          },
                          "type": "object",
                          "x-range": "RealEstateOffice"
                        },
                        "closeDate": {
                          "title": "closeDate",
                          "type": "string",
                          "format": "date-time",
                          "description": "With for-sale listings, the date the purchase agreement was fulfilled. With lease listings, the date the requirements were fulfilled, such as contract and/or deposit.",
                          "x-range": "DateTime"
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
                        "internetAddressDisplayYN": {
                          "enum": [
                            "Y",
                            "N"
                          ],
                          "type": "string"
                        },
                        "latitude": {
                          "type": "number",
                          "description": "The latitude of a location.",
                          "x-title": "latitude",
                          "example": 40.75
                        },
                        "listingAgent": {
                          "type": "object",
                          "description": "the agent/broker representing the seller in a real estate transaction",
                          "x-range": [
                            "RealEstateAgent",
                            "RealEstateOrganization"
                          ],
                          "example": {
                            "type": "RealEstateAgent",
                            "name": "Lori Listagent",
                            "telephone": "1-252-574-0160",
                            "email": "lorilistagent@example.com"
                          }
                        },
                        "listingContractDate": {
                          "description": "The effective date of the agreement between the seller and the seller's broker.",
                          "format": "date-time",
                          "type": "string"
                        },
                        "listingId": {
                          "description": "the local identifier for the listing",
                          "example": "GOTHAM-MLS+12345",
                          "type": "string"
                        },
                        "listingOffice": {
                          "description": "the listing office",
                          "example": {
                            "name": "Gotham City Real Estate",
                            "type": "RealEstateOffice"
                          },
                          "type": "object",
                          "x-range": "RealEstateOrganization"
                        },
                        "listingOriginatingSystem": {
                          "description": "The place where the item is originally input by the user.",
                          "example": {
                            "identifier": {
                              "bhhsmlsid": "xxxx",
                              "resoouid": "not-yet-available"
                            },
                            "name": "MLSListings",
                            "type": "MultipleListingService"
                          },
                          "type": "object",
                          "x-range": "MultipleListingService",
                          "x-subPropertyOf": "instrument"
                        },
                        "listingPrice": {
                          "type": "object",
                          "x-range": "PriceSpecification",
                          "example": {
                            "type": "PriceSpecification",
                            "price": 75000,
                            "priceCurrency": "USD"
                          }
                        },
                        "listingStatus": {
                          "enum": [
                            "Active",
                            "Pending",
                            "Sold",
                            "Canceled",
                            "Prelisted",
                            "OffMarket",
                            "Private"
                          ],
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
                          "example": "7",
                          "type": "string"
                        },
                        "originatingSystemKey": {
                          "description": "the listing identifier from the original MLS, aka MLSID.",
                          "example": 12345,
                          "type": "string"
                        },
                        "originatingSystemName": {
                          "description": "the name of the MLS where the listing was originally input",
                          "example": "GOTHAM-MLS",
                          "type": "string"
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
                        "purchaseContractDate": {
                          "description": "With for-sale listings, the date an offer was accepted and the listing was no longer on market. With lease listings this may represent a meeting of the minds to lease, but some contractual requirements are yet to be fulfilled, such as contract signing or receipt of the deposit.",
                          "format": "date-time",
                          "type": "string"
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
                        "universalPropertyId": {
                          "type": "string",
                          "title": "universalPropertyId",
                          "description": "The Universal Property Identifier is a unique identifier for all real property in the US and Canada.  It is based on country and local identification methods and is limited to real property.  For cases such as shares of real property, units, and other more granular cases, please utilize the UniversalPropertySubId.",
                          "example": "US-04015-N-R-11022331-N"
                        },
                        "url": {
                          "title": "url",
                          "type": "string",
                          "format": "uri",
                          "description": "URL of the item.",
                          "example": "https://www.example.com/homedetails/1007-Mountain-Gate-Rd-Gotham-City-Gotham/10007"
                        },
                        "yearBuilt": {
                          "type": "number",
                          "description": "the year the structure was created",
                          "example": 1988
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
    "x-parser-message-name": "<anonymous-message-4>"
  }
}
```