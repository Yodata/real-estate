# profile#update

```json 
{
  "_json": {
    "messageId": "profile#update",
    "x-scope": "realestate/profile#",
    "summary": "an agent, office or organization profile was updated",
    "payload": {
      "allOf": [
        {
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
                "data": {
                  "properties": {
                    "object": {
                      "oneOf": [
                        {
                          "allOf": [
                            {
                              "properties": {
                                "type": {
                                  "type": "string",
                                  "enum": [
                                    "RealEstateAgent"
                                  ],
                                  "description": "RealEstateAgent"
                                },
                                "id": {
                                  "type": "string",
                                  "format": "uri",
                                  "description": "Linked-Data URI (@id)",
                                  "x-parser-schema-id": "<anonymous-schema-198>"
                                },
                                "name": {
                                  "type": "string"
                                },
                                "givenName": {
                                  "type": "string",
                                  "description": "First Name of a person",
                                  "example": "Glenn",
                                  "x-parser-schema-id": "<anonymous-schema-233>"
                                },
                                "familyName": {
                                  "type": "string",
                                  "description": "Last Name of a person",
                                  "example": "Miller",
                                  "maxLength": 50,
                                  "x-parser-schema-id": "<anonymous-schema-262>"
                                }
                              },
                              "x-parser-schema-id": "<anonymous-schema-496>"
                            },
                            {
                              "allOf": [
                                {
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
                                      "x-kind": "Organization",
                                      "x-parser-schema-id": "<anonymous-schema-333>"
                                    },
                                    {
                                      "x-hasSubclass": [
                                        "RealEstateOrganization",
                                        "RealEstateOffice",
                                        "RealEstateAgent"
                                      ],
                                      "x-parser-schema-id": "<anonymous-schema-334>"
                                    },
                                    {
                                      "x-subClassOf": [
                                        "https://schema.org/Organization"
                                      ],
                                      "properties": {
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
                                          "x-parser-schema-id": "<anonymous-schema-225>"
                                        },
                                        "availableLanguage": {
                                          "title": "availableLanguage",
                                          "type": "array",
                                          "description": "Please use one of the language codes from the IETF BCP 47 standard.",
                                          "x-range": "Language",
                                          "items": {
                                            "title": "Language",
                                            "type": "object",
                                            "description": "a written or spoken Language",
                                            "x-range": "Language",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "Language",
                                                "enum": [
                                                  "Language"
                                                ],
                                                "x-parser-schema-id": "<anonymous-schema-287>"
                                              },
                                              "name": {
                                                "type": "string",
                                                "description": "the display name of the language",
                                                "example": "English",
                                                "x-parser-schema-id": "<anonymous-schema-288>"
                                              },
                                              "additionalName": {
                                                "type": "string",
                                                "description": "BCP 47 language code",
                                                "example": "en-US",
                                                "x-parser-schema-id": "<anonymous-schema-289>"
                                              }
                                            },
                                            "x-parser-schema-id": "Language"
                                          }
                                        },
                                        "branchCode": {
                                          "description": "A short textual code that uniquely identifies a place of business.",
                                          "example": "for BHHS profile events, see additionalProperty.OfficeId",
                                          "type": "string"
                                        },
                                        "certification": {
                                          "x-range": "Certification",
                                          "description": "certifications granted to a person or organization",
                                          "type": "array",
                                          "items": {
                                            "type": "object",
                                            "example": {
                                              "type": "Certification",
                                              "name": "E-Agent Certified",
                                              "validFrom": "2019-06-13T07:00:00.000Z",
                                              "additionalProperty": {
                                                "ceritificationTypeId": "86afafd3-ac25-4a89-9a6e-bebb3753c4b2"
                                              }
                                            }
                                          }
                                        },
                                        "contactPoint": {
                                          "type": "object",
                                          "description": "a named point of contact - telephone, email, faxNumber, and/or url for the entity",
                                          "x-range": "ContactPoint",
                                          "example": {
                                            "type": "ContactPoint",
                                            "name": "Work",
                                            "telephone": "800-555-5555",
                                            "faxNumber": "888-4BA-TMAN",
                                            "email": "bruce@example.com",
                                            "url": "https://example.com"
                                          },
                                          "x-parser-schema-id": "<anonymous-schema-228>"
                                        },
                                        "email": {
                                          "type": "string",
                                          "format": "email",
                                          "description": "Primary email address.",
                                          "example": "user@example.com",
                                          "x-parser-schema-id": "<anonymous-schema-561>"
                                        },
                                        "faxNumber": {
                                          "type": "string",
                                          "description": "Primary fax number.",
                                          "example": "(873) 271-4802",
                                          "x-parser-schema-id": "<anonymous-schema-232>"
                                        },
                                        "image": {
                                          "description": "an ImageObject or URI reference to an image of the entity on the web.",
                                          "title": "image",
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
                                          ]
                                        },
                                        "logo": {
                                          "description": "a logo associated with the organization.",
                                          "items": {
                                            "allOf": [
                                              {
                                                "type": "object",
                                                "title": "DigitalDocument",
                                                "x-range": "DigitalDocument",
                                                "description": "an electronic file.",
                                                "properties": {
                                                  "type": {
                                                    "type": "string",
                                                    "enum": [
                                                      "DigitalDocument"
                                                    ],
                                                    "x-parser-schema-id": "<anonymous-schema-264>"
                                                  },
                                                  "id": {
                                                    "type": "string",
                                                    "example": "http://user.example.com/public/logo/archive.zip",
                                                    "x-parser-schema-id": "<anonymous-schema-265>"
                                                  },
                                                  "name": {
                                                    "type": "string",
                                                    "description": "document name or title",
                                                    "example": "archive.zip",
                                                    "x-parser-schema-id": "<anonymous-schema-266>"
                                                  },
                                                  "encodingFormat": {
                                                    "type": "string",
                                                    "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
                                                    "example": "application/zip",
                                                    "x-parser-schema-id": "<anonymous-schema-267>"
                                                  },
                                                  "about": {
                                                    "type": "object",
                                                    "description": "subject of the Document",
                                                    "x-range": "Thing",
                                                    "example": {
                                                      "type": "RealEstateTransaction",
                                                      "identifier": {
                                                        "bmsTransactionId": "xxxx"
                                                      }
                                                    },
                                                    "x-parser-schema-id": "<anonymous-schema-268>"
                                                  },
                                                  "url": {
                                                    "type": "string",
                                                    "description": "public URL of the object",
                                                    "example": "https://example.com",
                                                    "x-parser-schema-id": "<anonymous-schema-269>"
                                                  }
                                                },
                                                "x-parser-schema-id": "DigitalDocument"
                                              },
                                              {
                                                "description": "an associated logo",
                                                "type": "object"
                                              }
                                            ],
                                            "type": "object"
                                          },
                                          "type": "array",
                                          "x-range": [
                                            "ImageObject",
                                            "DigitalDocument"
                                          ]
                                        },
                                        "name": {
                                          "description": "Name or DBA.",
                                          "type": "string"
                                        },
                                        "parentOrganization": {
                                          "items": {
                                            "format": "uri",
                                            "type": "string"
                                          },
                                          "type": "array"
                                        },
                                        "subOrganization": {
                                          "description": "a child organization",
                                          "x-range": [
                                            "RealEstateOrganization"
                                          ],
                                          "type": "array",
                                          "items": {
                                            "type": "string",
                                            "format": "uri",
                                            "example": "http://org.example.com/profile/card#me"
                                          }
                                        },
                                        "telephone": {
                                          "type": "string",
                                          "description": "Primary phone number.",
                                          "example": "+15558675309",
                                          "x-parser-schema-id": "<anonymous-schema-562>"
                                        },
                                        "type": {
                                          "enum": [
                                            "Organization"
                                          ],
                                          "type": "string"
                                        },
                                        "url": {
                                          "description": "primary website/url for the entity.",
                                          "format": "uri",
                                          "type": "string"
                                        }
                                      },
                                      "x-parser-schema-id": "<anonymous-schema-335>"
                                    }
                                  ],
                                  "x-parser-schema-id": "Organization"
                                },
                                {
                                  "title": "RealEstateOrganization",
                                  "description": "A real estate franchisor, broker or business",
                                  "x-range": "RealEstateOrganization",
                                  "properties": {
                                    "type": {
                                      "description": "RealEstateOrganzation",
                                      "enum": [
                                        "RealEstateOrganization",
                                        "RealEstateOffice",
                                        "RealEstateAgent"
                                      ],
                                      "example": "RealEstateOrganization"
                                    },
                                    "areaServed": {
                                      "type": "object",
                                      "description": "the physical areas that make up the ServiceArea",
                                      "x-range": [
                                        "City",
                                        "PostalCodeArea"
                                      ],
                                      "example": {
                                        "type": "PostalCode",
                                        "postalCode": "91371",
                                        "addressLocality": "Woodland Hills",
                                        "addressCounty": "Los Angeles",
                                        "addressRegion": "CA",
                                        "addressCountry": "US"
                                      }
                                    },
                                    "description": {
                                      "example": "The number on Gotham City Real Estate Company since 1940",
                                      "type": "string",
                                      "description": "description of the item."
                                    },
                                    "parentOrganization": {
                                      "type": "array",
                                      "x-range": "RealEstateOrganization",
                                      "description": "A franchisor or affiliate network of which this organization plays a membership role.",
                                      "items": {
                                        "type": "string",
                                        "format": "uri"
                                      }
                                    },
                                    "numberOfSubOrganizations": {
                                      "type": "number",
                                      "description": "the number of offices for an affiliate."
                                    },
                                    "member": {
                                      "title": "member",
                                      "description": "A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.",
                                      "type": "array",
                                      "x-range": [
                                        "OrganizationRole",
                                        "URI"
                                      ],
                                      "items": {
                                        "anyOf": [
                                          {
                                            "title": "OrganizationRole",
                                            "type": "object",
                                            "description": "describes a role played by a member and a group or organization.",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "a role played by the member in the memberOf group",
                                                "enum": [
                                                  "OrganizationRole"
                                                ],
                                                "x-parser-schema-id": "<anonymous-schema-316>"
                                              },
                                              "roleName": {
                                                "type": "string",
                                                "description": "the role name",
                                                "example": "Owner",
                                                "x-parser-schema-id": "<anonymous-schema-317>"
                                              },
                                              "memberOf": {
                                                "description": "the org or group where the role is performed",
                                                "type": "object",
                                                "example": {
                                                  "type": "RealEstateOrganization",
                                                  "id": "http://orgid.example.com/profile/card#me"
                                                },
                                                "x-parser-schema-id": "<anonymous-schema-318>"
                                              },
                                              "member": {
                                                "description": "member object or id",
                                                "type": "string",
                                                "format": "uri",
                                                "example": "https://memberid.example.com/profile/card#me",
                                                "x-parser-schema-id": "<anonymous-schema-319>"
                                              },
                                              "startDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "description": "date the member began performing this role",
                                                "x-parser-schema-id": "<anonymous-schema-320>"
                                              },
                                              "endDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "description": "date the member stopped performing the role",
                                                "x-parser-schema-id": "<anonymous-schema-321>"
                                              }
                                            },
                                            "x-parser-schema-id": "OrganizationRole"
                                          },
                                          {
                                            "type": "string",
                                            "format": "uri"
                                          }
                                        ]
                                      }
                                    },
                                    "memberOf": {
                                      "x-range": [
                                        "OrganizationRole",
                                        "MLSMembership"
                                      ],
                                      "description": "An Organization (or ProgramMembership) to which this Person or Organization belongs.",
                                      "type": "array",
                                      "items": {
                                        "allOf": [
                                          {
                                            "title": "OrganizationRole",
                                            "type": "object",
                                            "description": "describes a role played by a member and a group or organization.",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "a role played by the member in the memberOf group",
                                                "enum": [
                                                  "OrganizationRole"
                                                ],
                                                "x-parser-schema-id": "<anonymous-schema-316>"
                                              },
                                              "roleName": {
                                                "type": "string",
                                                "description": "the role name",
                                                "example": "Owner",
                                                "x-parser-schema-id": "<anonymous-schema-317>"
                                              },
                                              "memberOf": {
                                                "description": "the org or group where the role is performed",
                                                "type": "object",
                                                "example": {
                                                  "type": "RealEstateOrganization",
                                                  "id": "http://orgid.example.com/profile/card#me"
                                                },
                                                "x-parser-schema-id": "<anonymous-schema-318>"
                                              },
                                              "member": {
                                                "description": "member object or id",
                                                "type": "string",
                                                "format": "uri",
                                                "example": "https://memberid.example.com/profile/card#me",
                                                "x-parser-schema-id": "<anonymous-schema-319>"
                                              },
                                              "startDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "description": "date the member began performing this role",
                                                "x-parser-schema-id": "<anonymous-schema-320>"
                                              },
                                              "endDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "description": "date the member stopped performing the role",
                                                "x-parser-schema-id": "<anonymous-schema-321>"
                                              }
                                            },
                                            "x-parser-schema-id": "OrganizationRole"
                                          },
                                          {
                                            "type": "object",
                                            "title": "MLSMembership",
                                            "description": "a membership relationship",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "an MLS member relationship",
                                                "enum": [
                                                  "MLSMembership"
                                                ],
                                                "example": "MLSMembership",
                                                "x-parser-schema-id": "<anonymous-schema-323>"
                                              },
                                              "roleName": {
                                                "type": "string",
                                                "example": "MLSMember",
                                                "x-parser-schema-id": "<anonymous-schema-324>"
                                              },
                                              "memberOf": {
                                                "type": "object",
                                                "x-range": "MultipleListingService",
                                                "example": {
                                                  "type": "MultipleListingService",
                                                  "name": "GreatScottMLS"
                                                },
                                                "x-parser-schema-id": "<anonymous-schema-325>"
                                              },
                                              "member": {
                                                "type": "string",
                                                "format": "uri",
                                                "example": "https://{agent}.example.com/profile/card#me",
                                                "x-parser-schema-id": "<anonymous-schema-326>"
                                              },
                                              "memberId": {
                                                "type": "string",
                                                "description": "the user's MLSID",
                                                "example": "memberid123",
                                                "x-parser-schema-id": "<anonymous-schema-327>"
                                              }
                                            },
                                            "x-parser-schema-id": "<anonymous-schema-322>"
                                          }
                                        ],
                                        "x-parser-schema-id": "MLSMembership"
                                      }
                                    },
                                    "permit": {
                                      "type": "array",
                                      "x-range": "RealEstateLicense",
                                      "items": {
                                        "type": "object",
                                        "example": {
                                          "type": "RealEstateLicense",
                                          "name": "CA-DRE# 02068375",
                                          "identifier": {
                                            "type": "PropertyValue",
                                            "name": "CA-DRE",
                                            "value": "02068375"
                                          },
                                          "issuedBy": {
                                            "type": "State",
                                            "name": "California"
                                          },
                                          "issuedThrough": {
                                            "type": "Service",
                                            "name": "California Department of Real Estate"
                                          },
                                          "validIn": {
                                            "type": "State",
                                            "name": "California"
                                          },
                                          "validFrom": "2019-07-07T10:55:02Z",
                                          "validUntil": "2019-07-07T10:55:02Z"
                                        }
                                      }
                                    }
                                  },
                                  "x-parser-schema-id": "<anonymous-schema-497>"
                                }
                              ],
                              "x-parser-schema-id": "RealEstateOrganization"
                            },
                            {
                              "description": "A real estate agent",
                              "x-parser-schema-id": "<anonymous-schema-498>"
                            },
                            {
                              "properties": {
                                "description": {
                                  "example": "The leading Gotham City Real Estate Agent.",
                                  "type": "string",
                                  "x-parser-schema-id": "<anonymous-schema-500>"
                                },
                                "identifier": {
                                  "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                                  "example": {
                                    "ContactID": "1234567"
                                  },
                                  "type": "object",
                                  "x-parser-schema-id": "<anonymous-schema-501>"
                                },
                                "jobTitle": {
                                  "description": "agent's job titles",
                                  "items": {
                                    "example": [
                                      "Accounting Department",
                                      "Awards Coordinator"
                                    ],
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-503>"
                                  },
                                  "type": "array",
                                  "x-parser-schema-id": "<anonymous-schema-502>"
                                },
                                "name": {
                                  "example": "Louis Armstrong",
                                  "type": "string",
                                  "x-parser-schema-id": "<anonymous-schema-504>"
                                },
                                "givenName": {
                                  "type": "string",
                                  "description": "First Name of a person",
                                  "example": "Glenn",
                                  "x-parser-schema-id": "<anonymous-schema-505>"
                                },
                                "familyName": {
                                  "type": "string",
                                  "description": "Last Name of a person",
                                  "example": "Miller",
                                  "maxLength": 50,
                                  "x-parser-schema-id": "<anonymous-schema-506>"
                                },
                                "additionalName": {
                                  "type": "string",
                                  "description": "any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.",
                                  "example": "ambassador satch,pops,satchmo",
                                  "x-parser-schema-id": "<anonymous-schema-230>"
                                },
                                "parentOrganization": {
                                  "description": "URI reference to the agent's office. For teams, this can be a reference to the team leader/primary profile.",
                                  "example": [
                                    "http://office-real-estate.example.com/",
                                    "http://batmanandrobinteam.example.com/"
                                  ],
                                  "items": {
                                    "format": "uri",
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-508>"
                                  },
                                  "type": "array",
                                  "x-range": [
                                    "RealEstateOffice",
                                    "RealEstateAgent"
                                  ],
                                  "x-parser-schema-id": "<anonymous-schema-507>"
                                },
                                "sameAs": {
                                  "description": "key/value id assigned to the record",
                                  "example": {
                                    "bmsID": "1234"
                                  },
                                  "type": "object",
                                  "x-parser-schema-id": "<anonymous-schema-509>"
                                },
                                "subOrganization": {
                                  "description": "for teams: URI reference to a team member",
                                  "items": {
                                    "format": "uri",
                                    "type": "string",
                                    "x-parser-schema-id": "<anonymous-schema-511>"
                                  },
                                  "type": "array",
                                  "x-range": "RealEstateAgent",
                                  "x-parser-schema-id": "<anonymous-schema-510>"
                                },
                                "type": {
                                  "description": "RealEstateAgent",
                                  "enum": [
                                    "RealEstateAgent"
                                  ],
                                  "example": "RealEstateAgent",
                                  "type": "string",
                                  "x-parser-schema-id": "<anonymous-schema-512>"
                                }
                              },
                              "title": "RealEstateAgent",
                              "type": "object",
                              "x-parser-schema-id": "<anonymous-schema-499>"
                            }
                          ],
                          "description": "a real estate agent or team.",
                          "type": "object",
                          "x-parser-schema-id": "RealEstateAgent"
                        },
                        {
                          "type": "object",
                          "description": "A real estate office / place of business.",
                          "allOf": [
                            {
                              "allOf": [
                                {
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
                                      "x-kind": "Organization",
                                      "x-parser-schema-id": "<anonymous-schema-333>"
                                    },
                                    {
                                      "x-hasSubclass": [
                                        "RealEstateOrganization",
                                        "RealEstateOffice",
                                        "RealEstateAgent"
                                      ],
                                      "x-parser-schema-id": "<anonymous-schema-334>"
                                    },
                                    {
                                      "x-subClassOf": [
                                        "https://schema.org/Organization"
                                      ],
                                      "properties": {
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
                                          "x-parser-schema-id": "<anonymous-schema-225>"
                                        },
                                        "availableLanguage": {
                                          "title": "availableLanguage",
                                          "type": "array",
                                          "description": "Please use one of the language codes from the IETF BCP 47 standard.",
                                          "x-range": "Language",
                                          "items": {
                                            "title": "Language",
                                            "type": "object",
                                            "description": "a written or spoken Language",
                                            "x-range": "Language",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "Language",
                                                "enum": [
                                                  "Language"
                                                ],
                                                "x-parser-schema-id": "<anonymous-schema-287>"
                                              },
                                              "name": {
                                                "type": "string",
                                                "description": "the display name of the language",
                                                "example": "English",
                                                "x-parser-schema-id": "<anonymous-schema-288>"
                                              },
                                              "additionalName": {
                                                "type": "string",
                                                "description": "BCP 47 language code",
                                                "example": "en-US",
                                                "x-parser-schema-id": "<anonymous-schema-289>"
                                              }
                                            },
                                            "x-parser-schema-id": "Language"
                                          }
                                        },
                                        "branchCode": {
                                          "description": "A short textual code that uniquely identifies a place of business.",
                                          "example": "for BHHS profile events, see additionalProperty.OfficeId",
                                          "type": "string"
                                        },
                                        "certification": {
                                          "x-range": "Certification",
                                          "description": "certifications granted to a person or organization",
                                          "type": "array",
                                          "items": {
                                            "type": "object",
                                            "example": {
                                              "type": "Certification",
                                              "name": "E-Agent Certified",
                                              "validFrom": "2019-06-13T07:00:00.000Z",
                                              "additionalProperty": {
                                                "ceritificationTypeId": "86afafd3-ac25-4a89-9a6e-bebb3753c4b2"
                                              }
                                            }
                                          }
                                        },
                                        "contactPoint": {
                                          "type": "object",
                                          "description": "a named point of contact - telephone, email, faxNumber, and/or url for the entity",
                                          "x-range": "ContactPoint",
                                          "example": {
                                            "type": "ContactPoint",
                                            "name": "Work",
                                            "telephone": "800-555-5555",
                                            "faxNumber": "888-4BA-TMAN",
                                            "email": "bruce@example.com",
                                            "url": "https://example.com"
                                          },
                                          "x-parser-schema-id": "<anonymous-schema-228>"
                                        },
                                        "email": {
                                          "type": "string",
                                          "format": "email",
                                          "description": "Primary email address.",
                                          "example": "user@example.com",
                                          "x-parser-schema-id": "<anonymous-schema-561>"
                                        },
                                        "faxNumber": {
                                          "type": "string",
                                          "description": "Primary fax number.",
                                          "example": "(873) 271-4802",
                                          "x-parser-schema-id": "<anonymous-schema-232>"
                                        },
                                        "image": {
                                          "description": "an ImageObject or URI reference to an image of the entity on the web.",
                                          "title": "image",
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
                                          ]
                                        },
                                        "logo": {
                                          "description": "a logo associated with the organization.",
                                          "items": {
                                            "allOf": [
                                              {
                                                "type": "object",
                                                "title": "DigitalDocument",
                                                "x-range": "DigitalDocument",
                                                "description": "an electronic file.",
                                                "properties": {
                                                  "type": {
                                                    "type": "string",
                                                    "enum": [
                                                      "DigitalDocument"
                                                    ],
                                                    "x-parser-schema-id": "<anonymous-schema-264>"
                                                  },
                                                  "id": {
                                                    "type": "string",
                                                    "example": "http://user.example.com/public/logo/archive.zip",
                                                    "x-parser-schema-id": "<anonymous-schema-265>"
                                                  },
                                                  "name": {
                                                    "type": "string",
                                                    "description": "document name or title",
                                                    "example": "archive.zip",
                                                    "x-parser-schema-id": "<anonymous-schema-266>"
                                                  },
                                                  "encodingFormat": {
                                                    "type": "string",
                                                    "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
                                                    "example": "application/zip",
                                                    "x-parser-schema-id": "<anonymous-schema-267>"
                                                  },
                                                  "about": {
                                                    "type": "object",
                                                    "description": "subject of the Document",
                                                    "x-range": "Thing",
                                                    "example": {
                                                      "type": "RealEstateTransaction",
                                                      "identifier": {
                                                        "bmsTransactionId": "xxxx"
                                                      }
                                                    },
                                                    "x-parser-schema-id": "<anonymous-schema-268>"
                                                  },
                                                  "url": {
                                                    "type": "string",
                                                    "description": "public URL of the object",
                                                    "example": "https://example.com",
                                                    "x-parser-schema-id": "<anonymous-schema-269>"
                                                  }
                                                },
                                                "x-parser-schema-id": "DigitalDocument"
                                              },
                                              {
                                                "description": "an associated logo",
                                                "type": "object"
                                              }
                                            ],
                                            "type": "object"
                                          },
                                          "type": "array",
                                          "x-range": [
                                            "ImageObject",
                                            "DigitalDocument"
                                          ]
                                        },
                                        "name": {
                                          "description": "Name or DBA.",
                                          "type": "string"
                                        },
                                        "parentOrganization": {
                                          "items": {
                                            "format": "uri",
                                            "type": "string"
                                          },
                                          "type": "array"
                                        },
                                        "subOrganization": {
                                          "description": "a child organization",
                                          "x-range": [
                                            "RealEstateOrganization"
                                          ],
                                          "type": "array",
                                          "items": {
                                            "type": "string",
                                            "format": "uri",
                                            "example": "http://org.example.com/profile/card#me"
                                          }
                                        },
                                        "telephone": {
                                          "type": "string",
                                          "description": "Primary phone number.",
                                          "example": "+15558675309",
                                          "x-parser-schema-id": "<anonymous-schema-562>"
                                        },
                                        "type": {
                                          "enum": [
                                            "Organization"
                                          ],
                                          "type": "string"
                                        },
                                        "url": {
                                          "description": "primary website/url for the entity.",
                                          "format": "uri",
                                          "type": "string"
                                        }
                                      },
                                      "x-parser-schema-id": "<anonymous-schema-335>"
                                    }
                                  ],
                                  "x-parser-schema-id": "Organization"
                                },
                                {
                                  "title": "RealEstateOrganization",
                                  "description": "A real estate franchisor, broker or business",
                                  "x-range": "RealEstateOrganization",
                                  "properties": {
                                    "type": {
                                      "description": "RealEstateOrganzation",
                                      "enum": [
                                        "RealEstateOrganization",
                                        "RealEstateOffice",
                                        "RealEstateAgent"
                                      ],
                                      "example": "RealEstateOrganization"
                                    },
                                    "areaServed": {
                                      "type": "object",
                                      "description": "the physical areas that make up the ServiceArea",
                                      "x-range": [
                                        "City",
                                        "PostalCodeArea"
                                      ],
                                      "example": {
                                        "type": "PostalCode",
                                        "postalCode": "91371",
                                        "addressLocality": "Woodland Hills",
                                        "addressCounty": "Los Angeles",
                                        "addressRegion": "CA",
                                        "addressCountry": "US"
                                      }
                                    },
                                    "description": {
                                      "example": "The number on Gotham City Real Estate Company since 1940",
                                      "type": "string",
                                      "description": "description of the item."
                                    },
                                    "parentOrganization": {
                                      "type": "array",
                                      "x-range": "RealEstateOrganization",
                                      "description": "A franchisor or affiliate network of which this organization plays a membership role.",
                                      "items": {
                                        "type": "string",
                                        "format": "uri"
                                      }
                                    },
                                    "numberOfSubOrganizations": {
                                      "type": "number",
                                      "description": "the number of offices for an affiliate."
                                    },
                                    "member": {
                                      "title": "member",
                                      "description": "A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.",
                                      "type": "array",
                                      "x-range": [
                                        "OrganizationRole",
                                        "URI"
                                      ],
                                      "items": {
                                        "anyOf": [
                                          {
                                            "title": "OrganizationRole",
                                            "type": "object",
                                            "description": "describes a role played by a member and a group or organization.",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "a role played by the member in the memberOf group",
                                                "enum": [
                                                  "OrganizationRole"
                                                ],
                                                "x-parser-schema-id": "<anonymous-schema-316>"
                                              },
                                              "roleName": {
                                                "type": "string",
                                                "description": "the role name",
                                                "example": "Owner",
                                                "x-parser-schema-id": "<anonymous-schema-317>"
                                              },
                                              "memberOf": {
                                                "description": "the org or group where the role is performed",
                                                "type": "object",
                                                "example": {
                                                  "type": "RealEstateOrganization",
                                                  "id": "http://orgid.example.com/profile/card#me"
                                                },
                                                "x-parser-schema-id": "<anonymous-schema-318>"
                                              },
                                              "member": {
                                                "description": "member object or id",
                                                "type": "string",
                                                "format": "uri",
                                                "example": "https://memberid.example.com/profile/card#me",
                                                "x-parser-schema-id": "<anonymous-schema-319>"
                                              },
                                              "startDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "description": "date the member began performing this role",
                                                "x-parser-schema-id": "<anonymous-schema-320>"
                                              },
                                              "endDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "description": "date the member stopped performing the role",
                                                "x-parser-schema-id": "<anonymous-schema-321>"
                                              }
                                            },
                                            "x-parser-schema-id": "OrganizationRole"
                                          },
                                          {
                                            "type": "string",
                                            "format": "uri"
                                          }
                                        ]
                                      }
                                    },
                                    "memberOf": {
                                      "x-range": [
                                        "OrganizationRole",
                                        "MLSMembership"
                                      ],
                                      "description": "An Organization (or ProgramMembership) to which this Person or Organization belongs.",
                                      "type": "array",
                                      "items": {
                                        "allOf": [
                                          {
                                            "title": "OrganizationRole",
                                            "type": "object",
                                            "description": "describes a role played by a member and a group or organization.",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "a role played by the member in the memberOf group",
                                                "enum": [
                                                  "OrganizationRole"
                                                ],
                                                "x-parser-schema-id": "<anonymous-schema-316>"
                                              },
                                              "roleName": {
                                                "type": "string",
                                                "description": "the role name",
                                                "example": "Owner",
                                                "x-parser-schema-id": "<anonymous-schema-317>"
                                              },
                                              "memberOf": {
                                                "description": "the org or group where the role is performed",
                                                "type": "object",
                                                "example": {
                                                  "type": "RealEstateOrganization",
                                                  "id": "http://orgid.example.com/profile/card#me"
                                                },
                                                "x-parser-schema-id": "<anonymous-schema-318>"
                                              },
                                              "member": {
                                                "description": "member object or id",
                                                "type": "string",
                                                "format": "uri",
                                                "example": "https://memberid.example.com/profile/card#me",
                                                "x-parser-schema-id": "<anonymous-schema-319>"
                                              },
                                              "startDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "description": "date the member began performing this role",
                                                "x-parser-schema-id": "<anonymous-schema-320>"
                                              },
                                              "endDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "description": "date the member stopped performing the role",
                                                "x-parser-schema-id": "<anonymous-schema-321>"
                                              }
                                            },
                                            "x-parser-schema-id": "OrganizationRole"
                                          },
                                          {
                                            "type": "object",
                                            "title": "MLSMembership",
                                            "description": "a membership relationship",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "an MLS member relationship",
                                                "enum": [
                                                  "MLSMembership"
                                                ],
                                                "example": "MLSMembership",
                                                "x-parser-schema-id": "<anonymous-schema-323>"
                                              },
                                              "roleName": {
                                                "type": "string",
                                                "example": "MLSMember",
                                                "x-parser-schema-id": "<anonymous-schema-324>"
                                              },
                                              "memberOf": {
                                                "type": "object",
                                                "x-range": "MultipleListingService",
                                                "example": {
                                                  "type": "MultipleListingService",
                                                  "name": "GreatScottMLS"
                                                },
                                                "x-parser-schema-id": "<anonymous-schema-325>"
                                              },
                                              "member": {
                                                "type": "string",
                                                "format": "uri",
                                                "example": "https://{agent}.example.com/profile/card#me",
                                                "x-parser-schema-id": "<anonymous-schema-326>"
                                              },
                                              "memberId": {
                                                "type": "string",
                                                "description": "the user's MLSID",
                                                "example": "memberid123",
                                                "x-parser-schema-id": "<anonymous-schema-327>"
                                              }
                                            },
                                            "x-parser-schema-id": "<anonymous-schema-322>"
                                          }
                                        ],
                                        "x-parser-schema-id": "MLSMembership"
                                      }
                                    },
                                    "permit": {
                                      "type": "array",
                                      "x-range": "RealEstateLicense",
                                      "items": {
                                        "type": "object",
                                        "example": {
                                          "type": "RealEstateLicense",
                                          "name": "CA-DRE# 02068375",
                                          "identifier": {
                                            "type": "PropertyValue",
                                            "name": "CA-DRE",
                                            "value": "02068375"
                                          },
                                          "issuedBy": {
                                            "type": "State",
                                            "name": "California"
                                          },
                                          "issuedThrough": {
                                            "type": "Service",
                                            "name": "California Department of Real Estate"
                                          },
                                          "validIn": {
                                            "type": "State",
                                            "name": "California"
                                          },
                                          "validFrom": "2019-07-07T10:55:02Z",
                                          "validUntil": "2019-07-07T10:55:02Z"
                                        }
                                      }
                                    }
                                  },
                                  "x-parser-schema-id": "<anonymous-schema-497>"
                                }
                              ],
                              "x-parser-schema-id": "RealEstateOrganization"
                            },
                            {
                              "title": "RealEstateOffice",
                              "properties": {
                                "type": {
                                  "type": "string",
                                  "description": "RealEstateOffice",
                                  "enum": [
                                    "RealEstateOffice"
                                  ]
                                },
                                "contactPoint": {
                                  "description": "department or role specific contact points, i.e. relocation.",
                                  "example": [
                                    {
                                      "type": "ContactPoint",
                                      "name": "Relocation",
                                      "telephone": "1-245-880-8222",
                                      "faxNumber": "958-530-3473",
                                      "email": "relocation@example.com"
                                    }
                                  ]
                                },
                                "description": {
                                  "example": "The number on Gotham City Real Estate Company since 1940"
                                },
                                "parentOrganization": {
                                  "description": "Office broker or franchisor.",
                                  "x-range": "RealEstateOrganization"
                                },
                                "subOrganization": {
                                  "type": "array",
                                  "x-range": "RealEstateAgent",
                                  "description": "Agents and teams associated with the office.",
                                  "items": {
                                    "type": "string",
                                    "format": "uri"
                                  }
                                },
                                "geoCoordinates": {
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
                                  }
                                }
                              },
                              "x-parser-schema-id": "<anonymous-schema-523>"
                            }
                          ],
                          "x-parser-schema-id": "RealEstateOffice"
                        },
                        {
                          "allOf": [
                            {
                              "properties": {
                                "id": {
                                  "type": "string",
                                  "example": "https://org.example.com/profile/card#me"
                                }
                              },
                              "x-parser-schema-id": "<anonymous-schema-524>"
                            },
                            {
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
                                  "x-kind": "Organization",
                                  "x-parser-schema-id": "<anonymous-schema-333>"
                                },
                                {
                                  "x-hasSubclass": [
                                    "RealEstateOrganization",
                                    "RealEstateOffice",
                                    "RealEstateAgent"
                                  ],
                                  "x-parser-schema-id": "<anonymous-schema-334>"
                                },
                                {
                                  "x-subClassOf": [
                                    "https://schema.org/Organization"
                                  ],
                                  "properties": {
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
                                      "x-parser-schema-id": "<anonymous-schema-225>"
                                    },
                                    "availableLanguage": {
                                      "title": "availableLanguage",
                                      "type": "array",
                                      "description": "Please use one of the language codes from the IETF BCP 47 standard.",
                                      "x-range": "Language",
                                      "items": {
                                        "title": "Language",
                                        "type": "object",
                                        "description": "a written or spoken Language",
                                        "x-range": "Language",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "description": "Language",
                                            "enum": [
                                              "Language"
                                            ],
                                            "x-parser-schema-id": "<anonymous-schema-287>"
                                          },
                                          "name": {
                                            "type": "string",
                                            "description": "the display name of the language",
                                            "example": "English",
                                            "x-parser-schema-id": "<anonymous-schema-288>"
                                          },
                                          "additionalName": {
                                            "type": "string",
                                            "description": "BCP 47 language code",
                                            "example": "en-US",
                                            "x-parser-schema-id": "<anonymous-schema-289>"
                                          }
                                        },
                                        "x-parser-schema-id": "Language"
                                      }
                                    },
                                    "branchCode": {
                                      "description": "A short textual code that uniquely identifies a place of business.",
                                      "example": "for BHHS profile events, see additionalProperty.OfficeId",
                                      "type": "string"
                                    },
                                    "certification": {
                                      "x-range": "Certification",
                                      "description": "certifications granted to a person or organization",
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "example": {
                                          "type": "Certification",
                                          "name": "E-Agent Certified",
                                          "validFrom": "2019-06-13T07:00:00.000Z",
                                          "additionalProperty": {
                                            "ceritificationTypeId": "86afafd3-ac25-4a89-9a6e-bebb3753c4b2"
                                          }
                                        }
                                      }
                                    },
                                    "contactPoint": {
                                      "type": "object",
                                      "description": "a named point of contact - telephone, email, faxNumber, and/or url for the entity",
                                      "x-range": "ContactPoint",
                                      "example": {
                                        "type": "ContactPoint",
                                        "name": "Work",
                                        "telephone": "800-555-5555",
                                        "faxNumber": "888-4BA-TMAN",
                                        "email": "bruce@example.com",
                                        "url": "https://example.com"
                                      },
                                      "x-parser-schema-id": "<anonymous-schema-228>"
                                    },
                                    "email": {
                                      "type": "string",
                                      "format": "email",
                                      "description": "Primary email address.",
                                      "example": "user@example.com",
                                      "x-parser-schema-id": "<anonymous-schema-561>"
                                    },
                                    "faxNumber": {
                                      "type": "string",
                                      "description": "Primary fax number.",
                                      "example": "(873) 271-4802",
                                      "x-parser-schema-id": "<anonymous-schema-232>"
                                    },
                                    "image": {
                                      "description": "an ImageObject or URI reference to an image of the entity on the web.",
                                      "title": "image",
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
                                      ]
                                    },
                                    "logo": {
                                      "description": "a logo associated with the organization.",
                                      "items": {
                                        "allOf": [
                                          {
                                            "type": "object",
                                            "title": "DigitalDocument",
                                            "x-range": "DigitalDocument",
                                            "description": "an electronic file.",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "enum": [
                                                  "DigitalDocument"
                                                ],
                                                "x-parser-schema-id": "<anonymous-schema-264>"
                                              },
                                              "id": {
                                                "type": "string",
                                                "example": "http://user.example.com/public/logo/archive.zip",
                                                "x-parser-schema-id": "<anonymous-schema-265>"
                                              },
                                              "name": {
                                                "type": "string",
                                                "description": "document name or title",
                                                "example": "archive.zip",
                                                "x-parser-schema-id": "<anonymous-schema-266>"
                                              },
                                              "encodingFormat": {
                                                "type": "string",
                                                "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
                                                "example": "application/zip",
                                                "x-parser-schema-id": "<anonymous-schema-267>"
                                              },
                                              "about": {
                                                "type": "object",
                                                "description": "subject of the Document",
                                                "x-range": "Thing",
                                                "example": {
                                                  "type": "RealEstateTransaction",
                                                  "identifier": {
                                                    "bmsTransactionId": "xxxx"
                                                  }
                                                },
                                                "x-parser-schema-id": "<anonymous-schema-268>"
                                              },
                                              "url": {
                                                "type": "string",
                                                "description": "public URL of the object",
                                                "example": "https://example.com",
                                                "x-parser-schema-id": "<anonymous-schema-269>"
                                              }
                                            },
                                            "x-parser-schema-id": "DigitalDocument"
                                          },
                                          {
                                            "description": "an associated logo",
                                            "type": "object"
                                          }
                                        ],
                                        "type": "object"
                                      },
                                      "type": "array",
                                      "x-range": [
                                        "ImageObject",
                                        "DigitalDocument"
                                      ]
                                    },
                                    "name": {
                                      "description": "Name or DBA.",
                                      "type": "string"
                                    },
                                    "parentOrganization": {
                                      "items": {
                                        "format": "uri",
                                        "type": "string"
                                      },
                                      "type": "array"
                                    },
                                    "subOrganization": {
                                      "description": "a child organization",
                                      "x-range": [
                                        "RealEstateOrganization"
                                      ],
                                      "type": "array",
                                      "items": {
                                        "type": "string",
                                        "format": "uri",
                                        "example": "http://org.example.com/profile/card#me"
                                      }
                                    },
                                    "telephone": {
                                      "type": "string",
                                      "description": "Primary phone number.",
                                      "example": "+15558675309",
                                      "x-parser-schema-id": "<anonymous-schema-562>"
                                    },
                                    "type": {
                                      "enum": [
                                        "Organization"
                                      ],
                                      "type": "string"
                                    },
                                    "url": {
                                      "description": "primary website/url for the entity.",
                                      "format": "uri",
                                      "type": "string"
                                    }
                                  },
                                  "x-parser-schema-id": "<anonymous-schema-335>"
                                }
                              ],
                              "x-parser-schema-id": "Organization"
                            },
                            {
                              "title": "RealEstateTeam",
                              "description": "A real estate team.",
                              "properties": {
                                "type": {
                                  "type": "string",
                                  "description": "RealEstateTeam",
                                  "enum": [
                                    "RealEstateTeam"
                                  ]
                                },
                                "areaServed": {
                                  "type": "object",
                                  "description": "the physical areas that make up the ServiceArea",
                                  "x-range": [
                                    "City",
                                    "PostalCodeArea"
                                  ],
                                  "example": {
                                    "type": "PostalCode",
                                    "postalCode": "91371",
                                    "addressLocality": "Woodland Hills",
                                    "addressCounty": "Los Angeles",
                                    "addressRegion": "CA",
                                    "addressCountry": "US"
                                  }
                                },
                                "description": {
                                  "example": "The number on Gotham City Real Estate Company since 1940",
                                  "type": "string",
                                  "description": "description of the item."
                                },
                                "parentOrganization": {
                                  "x-range": "RealEstateOrganization",
                                  "description": "A franchisor or affiliate network of which this organization plays a membership role.",
                                  "type": "array",
                                  "items": {
                                    "type": "string",
                                    "format": "uri"
                                  }
                                },
                                "member": {
                                  "type": "array",
                                  "items": {
                                    "allOf": [
                                      {
                                        "title": "OrganizationRole",
                                        "type": "object",
                                        "description": "describes a role played by a member and a group or organization.",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "description": "a role played by the member in the memberOf group",
                                            "enum": [
                                              "OrganizationRole"
                                            ],
                                            "x-parser-schema-id": "<anonymous-schema-316>"
                                          },
                                          "roleName": {
                                            "type": "string",
                                            "description": "the role name",
                                            "example": "Owner",
                                            "x-parser-schema-id": "<anonymous-schema-317>"
                                          },
                                          "memberOf": {
                                            "description": "the org or group where the role is performed",
                                            "type": "object",
                                            "example": {
                                              "type": "RealEstateOrganization",
                                              "id": "http://orgid.example.com/profile/card#me"
                                            },
                                            "x-parser-schema-id": "<anonymous-schema-318>"
                                          },
                                          "member": {
                                            "description": "member object or id",
                                            "type": "string",
                                            "format": "uri",
                                            "example": "https://memberid.example.com/profile/card#me",
                                            "x-parser-schema-id": "<anonymous-schema-319>"
                                          },
                                          "startDate": {
                                            "type": "string",
                                            "format": "date-time",
                                            "description": "date the member began performing this role",
                                            "x-parser-schema-id": "<anonymous-schema-320>"
                                          },
                                          "endDate": {
                                            "type": "string",
                                            "format": "date-time",
                                            "description": "date the member stopped performing the role",
                                            "x-parser-schema-id": "<anonymous-schema-321>"
                                          }
                                        },
                                        "x-parser-schema-id": "OrganizationRole"
                                      },
                                      {
                                        "type": "object",
                                        "title": "RealEstateTeamMembership",
                                        "description": "a membership relationship.  Subclass of OrganizationRole",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "description": "a member of a real estate team",
                                            "enum": [
                                              "RealEstateTeamMembership"
                                            ],
                                            "example": "RealEstateTeamMembership",
                                            "x-parser-schema-id": "<anonymous-schema-527>"
                                          },
                                          "roleName": {
                                            "type": "string",
                                            "enum": [
                                              "TeamMember",
                                              "TeamAdmin",
                                              "TeamOwner"
                                            ],
                                            "x-parser-schema-id": "<anonymous-schema-528>"
                                          },
                                          "memberOf": {
                                            "type": "string",
                                            "format": "uri",
                                            "example": "https://{team-id}.example.com/profile/card#me",
                                            "x-parser-schema-id": "<anonymous-schema-529>"
                                          },
                                          "member": {
                                            "type": "string",
                                            "format": "uri",
                                            "example": "https://{agent}.example.com/profile/card#me",
                                            "x-parser-schema-id": "<anonymous-schema-530>"
                                          }
                                        },
                                        "x-parser-schema-id": "<anonymous-schema-526>"
                                      }
                                    ],
                                    "x-parser-schema-id": "RealEstateTeamMembership"
                                  }
                                }
                              },
                              "x-parser-schema-id": "<anonymous-schema-525>"
                            }
                          ],
                          "x-parser-schema-id": "RealEstateTeam"
                        }
                      ]
                    },
                    "branchCode": {
                      "example": "ABC123"
                    }
                  }
                }
              },
              "x-parser-schema-id": "<anonymous-schema-65>"
            }
          ],
          "x-parser-schema-id": "<anonymous-schema-64>"
        },
        {
          "properties": {
            "topic": {
              "enum": [
                "realestate/profile#update"
              ]
            },
            "data": {
              "x-range": "UpdateAction",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "UpdateAction",
                  "enum": [
                    "UpdateAction"
                  ],
                  "example": "UpdateAction"
                },
                "object": {
                  "x-range": [
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "RealEstateOrganization"
                  ],
                  "type": "object",
                  "description": "the updated or added profile value"
                }
              }
            }
          },
          "x-parser-schema-id": "<anonymous-schema-68>"
        }
      ],
      "x-parser-schema-id": "<anonymous-schema-67>"
    },
    "x-parser-original-schema-format": "application/vnd.aai.asyncapi;version=2.4.0",
    "x-parser-original-payload": {
      "allOf": [
        {
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
                "data": {
                  "properties": {
                    "object": {
                      "oneOf": [
                        {
                          "allOf": [
                            {
                              "properties": {
                                "type": {
                                  "type": "string",
                                  "enum": [
                                    "RealEstateAgent"
                                  ],
                                  "description": "RealEstateAgent"
                                },
                                "id": {
                                  "type": "string",
                                  "format": "uri",
                                  "description": "Linked-Data URI (@id)"
                                },
                                "name": {
                                  "type": "string"
                                },
                                "givenName": {
                                  "type": "string",
                                  "description": "First Name of a person",
                                  "example": "Glenn"
                                },
                                "familyName": {
                                  "type": "string",
                                  "description": "Last Name of a person",
                                  "example": "Miller",
                                  "maxLength": 50
                                }
                              }
                            },
                            {
                              "allOf": [
                                {
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
                                      "x-kind": "Organization"
                                    },
                                    {
                                      "x-hasSubclass": [
                                        "RealEstateOrganization",
                                        "RealEstateOffice",
                                        "RealEstateAgent"
                                      ]
                                    },
                                    {
                                      "x-subClassOf": [
                                        "https://schema.org/Organization"
                                      ],
                                      "properties": {
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
                                        "availableLanguage": {
                                          "title": "availableLanguage",
                                          "type": "array",
                                          "description": "Please use one of the language codes from the IETF BCP 47 standard.",
                                          "x-range": "Language",
                                          "items": {
                                            "title": "Language",
                                            "type": "object",
                                            "description": "a written or spoken Language",
                                            "x-range": "Language",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "Language",
                                                "enum": [
                                                  "Language"
                                                ]
                                              },
                                              "name": {
                                                "type": "string",
                                                "description": "the display name of the language",
                                                "example": "English"
                                              },
                                              "additionalName": {
                                                "type": "string",
                                                "description": "BCP 47 language code",
                                                "example": "en-US"
                                              }
                                            }
                                          }
                                        },
                                        "branchCode": {
                                          "description": "A short textual code that uniquely identifies a place of business.",
                                          "example": "for BHHS profile events, see additionalProperty.OfficeId",
                                          "type": "string"
                                        },
                                        "certification": {
                                          "x-range": "Certification",
                                          "description": "certifications granted to a person or organization",
                                          "type": "array",
                                          "items": {
                                            "type": "object",
                                            "example": {
                                              "type": "Certification",
                                              "name": "E-Agent Certified",
                                              "validFrom": "2019-06-13T07:00:00.000Z",
                                              "additionalProperty": {
                                                "ceritificationTypeId": "86afafd3-ac25-4a89-9a6e-bebb3753c4b2"
                                              }
                                            }
                                          }
                                        },
                                        "contactPoint": {
                                          "type": "object",
                                          "description": "a named point of contact - telephone, email, faxNumber, and/or url for the entity",
                                          "x-range": "ContactPoint",
                                          "example": {
                                            "type": "ContactPoint",
                                            "name": "Work",
                                            "telephone": "800-555-5555",
                                            "faxNumber": "888-4BA-TMAN",
                                            "email": "bruce@example.com",
                                            "url": "https://example.com"
                                          }
                                        },
                                        "email": {
                                          "type": "string",
                                          "format": "email",
                                          "description": "Primary email address.",
                                          "example": "user@example.com"
                                        },
                                        "faxNumber": {
                                          "type": "string",
                                          "description": "Primary fax number.",
                                          "example": "(873) 271-4802"
                                        },
                                        "image": {
                                          "description": "an ImageObject or URI reference to an image of the entity on the web.",
                                          "title": "image",
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
                                        "logo": {
                                          "description": "a logo associated with the organization.",
                                          "items": {
                                            "allOf": [
                                              {
                                                "type": "object",
                                                "title": "DigitalDocument",
                                                "x-range": "DigitalDocument",
                                                "description": "an electronic file.",
                                                "properties": {
                                                  "type": {
                                                    "type": "string",
                                                    "enum": [
                                                      "DigitalDocument"
                                                    ]
                                                  },
                                                  "id": {
                                                    "type": "string",
                                                    "example": "http://user.example.com/public/logo/archive.zip"
                                                  },
                                                  "name": {
                                                    "type": "string",
                                                    "description": "document name or title",
                                                    "example": "archive.zip"
                                                  },
                                                  "encodingFormat": {
                                                    "type": "string",
                                                    "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
                                                    "example": "application/zip"
                                                  },
                                                  "about": {
                                                    "type": "object",
                                                    "description": "subject of the Document",
                                                    "x-range": "Thing",
                                                    "example": {
                                                      "type": "RealEstateTransaction",
                                                      "identifier": {
                                                        "bmsTransactionId": "xxxx"
                                                      }
                                                    }
                                                  },
                                                  "url": {
                                                    "type": "string",
                                                    "description": "public URL of the object",
                                                    "example": "https://example.com"
                                                  }
                                                }
                                              },
                                              {
                                                "description": "an associated logo",
                                                "type": "object"
                                              }
                                            ],
                                            "type": "object"
                                          },
                                          "type": "array",
                                          "x-range": [
                                            "ImageObject",
                                            "DigitalDocument"
                                          ]
                                        },
                                        "name": {
                                          "description": "Name or DBA.",
                                          "type": "string"
                                        },
                                        "parentOrganization": {
                                          "items": {
                                            "format": "uri",
                                            "type": "string"
                                          },
                                          "type": "array"
                                        },
                                        "subOrganization": {
                                          "description": "a child organization",
                                          "x-range": [
                                            "RealEstateOrganization"
                                          ],
                                          "type": "array",
                                          "items": {
                                            "type": "string",
                                            "format": "uri",
                                            "example": "http://org.example.com/profile/card#me"
                                          }
                                        },
                                        "telephone": {
                                          "type": "string",
                                          "description": "Primary phone number.",
                                          "example": "+15558675309"
                                        },
                                        "type": {
                                          "enum": [
                                            "Organization"
                                          ],
                                          "type": "string"
                                        },
                                        "url": {
                                          "description": "primary website/url for the entity.",
                                          "format": "uri",
                                          "type": "string"
                                        }
                                      }
                                    }
                                  ]
                                },
                                {
                                  "title": "RealEstateOrganization",
                                  "description": "A real estate franchisor, broker or business",
                                  "x-range": "RealEstateOrganization",
                                  "properties": {
                                    "type": {
                                      "description": "RealEstateOrganzation",
                                      "enum": [
                                        "RealEstateOrganization",
                                        "RealEstateOffice",
                                        "RealEstateAgent"
                                      ],
                                      "example": "RealEstateOrganization"
                                    },
                                    "areaServed": {
                                      "type": "object",
                                      "description": "the physical areas that make up the ServiceArea",
                                      "x-range": [
                                        "City",
                                        "PostalCodeArea"
                                      ],
                                      "example": {
                                        "type": "PostalCode",
                                        "postalCode": "91371",
                                        "addressLocality": "Woodland Hills",
                                        "addressCounty": "Los Angeles",
                                        "addressRegion": "CA",
                                        "addressCountry": "US"
                                      }
                                    },
                                    "description": {
                                      "example": "The number on Gotham City Real Estate Company since 1940",
                                      "type": "string",
                                      "description": "description of the item."
                                    },
                                    "parentOrganization": {
                                      "type": "array",
                                      "x-range": "RealEstateOrganization",
                                      "description": "A franchisor or affiliate network of which this organization plays a membership role.",
                                      "items": {
                                        "type": "string",
                                        "format": "uri"
                                      }
                                    },
                                    "numberOfSubOrganizations": {
                                      "type": "number",
                                      "description": "the number of offices for an affiliate."
                                    },
                                    "member": {
                                      "title": "member",
                                      "description": "A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.",
                                      "type": "array",
                                      "x-range": [
                                        "OrganizationRole",
                                        "URI"
                                      ],
                                      "items": {
                                        "anyOf": [
                                          {
                                            "title": "OrganizationRole",
                                            "type": "object",
                                            "description": "describes a role played by a member and a group or organization.",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "a role played by the member in the memberOf group",
                                                "enum": [
                                                  "OrganizationRole"
                                                ]
                                              },
                                              "roleName": {
                                                "type": "string",
                                                "description": "the role name",
                                                "example": "Owner"
                                              },
                                              "memberOf": {
                                                "description": "the org or group where the role is performed",
                                                "type": "object",
                                                "example": {
                                                  "type": "RealEstateOrganization",
                                                  "id": "http://orgid.example.com/profile/card#me"
                                                }
                                              },
                                              "member": {
                                                "description": "member object or id",
                                                "type": "string",
                                                "format": "uri",
                                                "example": "https://memberid.example.com/profile/card#me"
                                              },
                                              "startDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "description": "date the member began performing this role"
                                              },
                                              "endDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "description": "date the member stopped performing the role"
                                              }
                                            }
                                          },
                                          {
                                            "type": "string",
                                            "format": "uri"
                                          }
                                        ]
                                      }
                                    },
                                    "memberOf": {
                                      "x-range": [
                                        "OrganizationRole",
                                        "MLSMembership"
                                      ],
                                      "description": "An Organization (or ProgramMembership) to which this Person or Organization belongs.",
                                      "type": "array",
                                      "items": {
                                        "allOf": [
                                          {
                                            "title": "OrganizationRole",
                                            "type": "object",
                                            "description": "describes a role played by a member and a group or organization.",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "a role played by the member in the memberOf group",
                                                "enum": [
                                                  "OrganizationRole"
                                                ]
                                              },
                                              "roleName": {
                                                "type": "string",
                                                "description": "the role name",
                                                "example": "Owner"
                                              },
                                              "memberOf": {
                                                "description": "the org or group where the role is performed",
                                                "type": "object",
                                                "example": {
                                                  "type": "RealEstateOrganization",
                                                  "id": "http://orgid.example.com/profile/card#me"
                                                }
                                              },
                                              "member": {
                                                "description": "member object or id",
                                                "type": "string",
                                                "format": "uri",
                                                "example": "https://memberid.example.com/profile/card#me"
                                              },
                                              "startDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "description": "date the member began performing this role"
                                              },
                                              "endDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "description": "date the member stopped performing the role"
                                              }
                                            }
                                          },
                                          {
                                            "type": "object",
                                            "title": "MLSMembership",
                                            "description": "a membership relationship",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "an MLS member relationship",
                                                "enum": [
                                                  "MLSMembership"
                                                ],
                                                "example": "MLSMembership"
                                              },
                                              "roleName": {
                                                "type": "string",
                                                "example": "MLSMember"
                                              },
                                              "memberOf": {
                                                "type": "object",
                                                "x-range": "MultipleListingService",
                                                "example": {
                                                  "type": "MultipleListingService",
                                                  "name": "GreatScottMLS"
                                                }
                                              },
                                              "member": {
                                                "type": "string",
                                                "format": "uri",
                                                "example": "https://{agent}.example.com/profile/card#me"
                                              },
                                              "memberId": {
                                                "type": "string",
                                                "description": "the user's MLSID",
                                                "example": "memberid123"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    "permit": {
                                      "type": "array",
                                      "x-range": "RealEstateLicense",
                                      "items": {
                                        "type": "object",
                                        "example": {
                                          "type": "RealEstateLicense",
                                          "name": "CA-DRE# 02068375",
                                          "identifier": {
                                            "type": "PropertyValue",
                                            "name": "CA-DRE",
                                            "value": "02068375"
                                          },
                                          "issuedBy": {
                                            "type": "State",
                                            "name": "California"
                                          },
                                          "issuedThrough": {
                                            "type": "Service",
                                            "name": "California Department of Real Estate"
                                          },
                                          "validIn": {
                                            "type": "State",
                                            "name": "California"
                                          },
                                          "validFrom": "2019-07-07T10:55:02Z",
                                          "validUntil": "2019-07-07T10:55:02Z"
                                        }
                                      }
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "description": "A real estate agent"
                            },
                            {
                              "properties": {
                                "description": {
                                  "example": "The leading Gotham City Real Estate Agent.",
                                  "type": "string"
                                },
                                "identifier": {
                                  "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
                                  "example": {
                                    "ContactID": "1234567"
                                  },
                                  "type": "object"
                                },
                                "jobTitle": {
                                  "description": "agent's job titles",
                                  "items": {
                                    "example": [
                                      "Accounting Department",
                                      "Awards Coordinator"
                                    ],
                                    "type": "string"
                                  },
                                  "type": "array"
                                },
                                "name": {
                                  "example": "Louis Armstrong",
                                  "type": "string"
                                },
                                "givenName": {
                                  "type": "string",
                                  "description": "First Name of a person",
                                  "example": "Glenn"
                                },
                                "familyName": {
                                  "type": "string",
                                  "description": "Last Name of a person",
                                  "example": "Miller",
                                  "maxLength": 50
                                },
                                "additionalName": {
                                  "type": "string",
                                  "description": "any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.",
                                  "example": "ambassador satch,pops,satchmo"
                                },
                                "parentOrganization": {
                                  "description": "URI reference to the agent's office. For teams, this can be a reference to the team leader/primary profile.",
                                  "example": [
                                    "http://office-real-estate.example.com/",
                                    "http://batmanandrobinteam.example.com/"
                                  ],
                                  "items": {
                                    "format": "uri",
                                    "type": "string"
                                  },
                                  "type": "array",
                                  "x-range": [
                                    "RealEstateOffice",
                                    "RealEstateAgent"
                                  ]
                                },
                                "sameAs": {
                                  "description": "key/value id assigned to the record",
                                  "example": {
                                    "bmsID": "1234"
                                  },
                                  "type": "object"
                                },
                                "subOrganization": {
                                  "description": "for teams: URI reference to a team member",
                                  "items": {
                                    "format": "uri",
                                    "type": "string"
                                  },
                                  "type": "array",
                                  "x-range": "RealEstateAgent"
                                },
                                "type": {
                                  "description": "RealEstateAgent",
                                  "enum": [
                                    "RealEstateAgent"
                                  ],
                                  "example": "RealEstateAgent",
                                  "type": "string"
                                }
                              },
                              "title": "RealEstateAgent",
                              "type": "object"
                            }
                          ],
                          "description": "a real estate agent or team.",
                          "type": "object"
                        },
                        {
                          "type": "object",
                          "description": "A real estate office / place of business.",
                          "allOf": [
                            {
                              "allOf": [
                                {
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
                                      "x-kind": "Organization"
                                    },
                                    {
                                      "x-hasSubclass": [
                                        "RealEstateOrganization",
                                        "RealEstateOffice",
                                        "RealEstateAgent"
                                      ]
                                    },
                                    {
                                      "x-subClassOf": [
                                        "https://schema.org/Organization"
                                      ],
                                      "properties": {
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
                                        "availableLanguage": {
                                          "title": "availableLanguage",
                                          "type": "array",
                                          "description": "Please use one of the language codes from the IETF BCP 47 standard.",
                                          "x-range": "Language",
                                          "items": {
                                            "title": "Language",
                                            "type": "object",
                                            "description": "a written or spoken Language",
                                            "x-range": "Language",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "Language",
                                                "enum": [
                                                  "Language"
                                                ]
                                              },
                                              "name": {
                                                "type": "string",
                                                "description": "the display name of the language",
                                                "example": "English"
                                              },
                                              "additionalName": {
                                                "type": "string",
                                                "description": "BCP 47 language code",
                                                "example": "en-US"
                                              }
                                            }
                                          }
                                        },
                                        "branchCode": {
                                          "description": "A short textual code that uniquely identifies a place of business.",
                                          "example": "for BHHS profile events, see additionalProperty.OfficeId",
                                          "type": "string"
                                        },
                                        "certification": {
                                          "x-range": "Certification",
                                          "description": "certifications granted to a person or organization",
                                          "type": "array",
                                          "items": {
                                            "type": "object",
                                            "example": {
                                              "type": "Certification",
                                              "name": "E-Agent Certified",
                                              "validFrom": "2019-06-13T07:00:00.000Z",
                                              "additionalProperty": {
                                                "ceritificationTypeId": "86afafd3-ac25-4a89-9a6e-bebb3753c4b2"
                                              }
                                            }
                                          }
                                        },
                                        "contactPoint": {
                                          "type": "object",
                                          "description": "a named point of contact - telephone, email, faxNumber, and/or url for the entity",
                                          "x-range": "ContactPoint",
                                          "example": {
                                            "type": "ContactPoint",
                                            "name": "Work",
                                            "telephone": "800-555-5555",
                                            "faxNumber": "888-4BA-TMAN",
                                            "email": "bruce@example.com",
                                            "url": "https://example.com"
                                          }
                                        },
                                        "email": {
                                          "type": "string",
                                          "format": "email",
                                          "description": "Primary email address.",
                                          "example": "user@example.com"
                                        },
                                        "faxNumber": {
                                          "type": "string",
                                          "description": "Primary fax number.",
                                          "example": "(873) 271-4802"
                                        },
                                        "image": {
                                          "description": "an ImageObject or URI reference to an image of the entity on the web.",
                                          "title": "image",
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
                                        "logo": {
                                          "description": "a logo associated with the organization.",
                                          "items": {
                                            "allOf": [
                                              {
                                                "type": "object",
                                                "title": "DigitalDocument",
                                                "x-range": "DigitalDocument",
                                                "description": "an electronic file.",
                                                "properties": {
                                                  "type": {
                                                    "type": "string",
                                                    "enum": [
                                                      "DigitalDocument"
                                                    ]
                                                  },
                                                  "id": {
                                                    "type": "string",
                                                    "example": "http://user.example.com/public/logo/archive.zip"
                                                  },
                                                  "name": {
                                                    "type": "string",
                                                    "description": "document name or title",
                                                    "example": "archive.zip"
                                                  },
                                                  "encodingFormat": {
                                                    "type": "string",
                                                    "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
                                                    "example": "application/zip"
                                                  },
                                                  "about": {
                                                    "type": "object",
                                                    "description": "subject of the Document",
                                                    "x-range": "Thing",
                                                    "example": {
                                                      "type": "RealEstateTransaction",
                                                      "identifier": {
                                                        "bmsTransactionId": "xxxx"
                                                      }
                                                    }
                                                  },
                                                  "url": {
                                                    "type": "string",
                                                    "description": "public URL of the object",
                                                    "example": "https://example.com"
                                                  }
                                                }
                                              },
                                              {
                                                "description": "an associated logo",
                                                "type": "object"
                                              }
                                            ],
                                            "type": "object"
                                          },
                                          "type": "array",
                                          "x-range": [
                                            "ImageObject",
                                            "DigitalDocument"
                                          ]
                                        },
                                        "name": {
                                          "description": "Name or DBA.",
                                          "type": "string"
                                        },
                                        "parentOrganization": {
                                          "items": {
                                            "format": "uri",
                                            "type": "string"
                                          },
                                          "type": "array"
                                        },
                                        "subOrganization": {
                                          "description": "a child organization",
                                          "x-range": [
                                            "RealEstateOrganization"
                                          ],
                                          "type": "array",
                                          "items": {
                                            "type": "string",
                                            "format": "uri",
                                            "example": "http://org.example.com/profile/card#me"
                                          }
                                        },
                                        "telephone": {
                                          "type": "string",
                                          "description": "Primary phone number.",
                                          "example": "+15558675309"
                                        },
                                        "type": {
                                          "enum": [
                                            "Organization"
                                          ],
                                          "type": "string"
                                        },
                                        "url": {
                                          "description": "primary website/url for the entity.",
                                          "format": "uri",
                                          "type": "string"
                                        }
                                      }
                                    }
                                  ]
                                },
                                {
                                  "title": "RealEstateOrganization",
                                  "description": "A real estate franchisor, broker or business",
                                  "x-range": "RealEstateOrganization",
                                  "properties": {
                                    "type": {
                                      "description": "RealEstateOrganzation",
                                      "enum": [
                                        "RealEstateOrganization",
                                        "RealEstateOffice",
                                        "RealEstateAgent"
                                      ],
                                      "example": "RealEstateOrganization"
                                    },
                                    "areaServed": {
                                      "type": "object",
                                      "description": "the physical areas that make up the ServiceArea",
                                      "x-range": [
                                        "City",
                                        "PostalCodeArea"
                                      ],
                                      "example": {
                                        "type": "PostalCode",
                                        "postalCode": "91371",
                                        "addressLocality": "Woodland Hills",
                                        "addressCounty": "Los Angeles",
                                        "addressRegion": "CA",
                                        "addressCountry": "US"
                                      }
                                    },
                                    "description": {
                                      "example": "The number on Gotham City Real Estate Company since 1940",
                                      "type": "string",
                                      "description": "description of the item."
                                    },
                                    "parentOrganization": {
                                      "type": "array",
                                      "x-range": "RealEstateOrganization",
                                      "description": "A franchisor or affiliate network of which this organization plays a membership role.",
                                      "items": {
                                        "type": "string",
                                        "format": "uri"
                                      }
                                    },
                                    "numberOfSubOrganizations": {
                                      "type": "number",
                                      "description": "the number of offices for an affiliate."
                                    },
                                    "member": {
                                      "title": "member",
                                      "description": "A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.",
                                      "type": "array",
                                      "x-range": [
                                        "OrganizationRole",
                                        "URI"
                                      ],
                                      "items": {
                                        "anyOf": [
                                          {
                                            "title": "OrganizationRole",
                                            "type": "object",
                                            "description": "describes a role played by a member and a group or organization.",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "a role played by the member in the memberOf group",
                                                "enum": [
                                                  "OrganizationRole"
                                                ]
                                              },
                                              "roleName": {
                                                "type": "string",
                                                "description": "the role name",
                                                "example": "Owner"
                                              },
                                              "memberOf": {
                                                "description": "the org or group where the role is performed",
                                                "type": "object",
                                                "example": {
                                                  "type": "RealEstateOrganization",
                                                  "id": "http://orgid.example.com/profile/card#me"
                                                }
                                              },
                                              "member": {
                                                "description": "member object or id",
                                                "type": "string",
                                                "format": "uri",
                                                "example": "https://memberid.example.com/profile/card#me"
                                              },
                                              "startDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "description": "date the member began performing this role"
                                              },
                                              "endDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "description": "date the member stopped performing the role"
                                              }
                                            }
                                          },
                                          {
                                            "type": "string",
                                            "format": "uri"
                                          }
                                        ]
                                      }
                                    },
                                    "memberOf": {
                                      "x-range": [
                                        "OrganizationRole",
                                        "MLSMembership"
                                      ],
                                      "description": "An Organization (or ProgramMembership) to which this Person or Organization belongs.",
                                      "type": "array",
                                      "items": {
                                        "allOf": [
                                          {
                                            "title": "OrganizationRole",
                                            "type": "object",
                                            "description": "describes a role played by a member and a group or organization.",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "a role played by the member in the memberOf group",
                                                "enum": [
                                                  "OrganizationRole"
                                                ]
                                              },
                                              "roleName": {
                                                "type": "string",
                                                "description": "the role name",
                                                "example": "Owner"
                                              },
                                              "memberOf": {
                                                "description": "the org or group where the role is performed",
                                                "type": "object",
                                                "example": {
                                                  "type": "RealEstateOrganization",
                                                  "id": "http://orgid.example.com/profile/card#me"
                                                }
                                              },
                                              "member": {
                                                "description": "member object or id",
                                                "type": "string",
                                                "format": "uri",
                                                "example": "https://memberid.example.com/profile/card#me"
                                              },
                                              "startDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "description": "date the member began performing this role"
                                              },
                                              "endDate": {
                                                "type": "string",
                                                "format": "date-time",
                                                "description": "date the member stopped performing the role"
                                              }
                                            }
                                          },
                                          {
                                            "type": "object",
                                            "title": "MLSMembership",
                                            "description": "a membership relationship",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "description": "an MLS member relationship",
                                                "enum": [
                                                  "MLSMembership"
                                                ],
                                                "example": "MLSMembership"
                                              },
                                              "roleName": {
                                                "type": "string",
                                                "example": "MLSMember"
                                              },
                                              "memberOf": {
                                                "type": "object",
                                                "x-range": "MultipleListingService",
                                                "example": {
                                                  "type": "MultipleListingService",
                                                  "name": "GreatScottMLS"
                                                }
                                              },
                                              "member": {
                                                "type": "string",
                                                "format": "uri",
                                                "example": "https://{agent}.example.com/profile/card#me"
                                              },
                                              "memberId": {
                                                "type": "string",
                                                "description": "the user's MLSID",
                                                "example": "memberid123"
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    },
                                    "permit": {
                                      "type": "array",
                                      "x-range": "RealEstateLicense",
                                      "items": {
                                        "type": "object",
                                        "example": {
                                          "type": "RealEstateLicense",
                                          "name": "CA-DRE# 02068375",
                                          "identifier": {
                                            "type": "PropertyValue",
                                            "name": "CA-DRE",
                                            "value": "02068375"
                                          },
                                          "issuedBy": {
                                            "type": "State",
                                            "name": "California"
                                          },
                                          "issuedThrough": {
                                            "type": "Service",
                                            "name": "California Department of Real Estate"
                                          },
                                          "validIn": {
                                            "type": "State",
                                            "name": "California"
                                          },
                                          "validFrom": "2019-07-07T10:55:02Z",
                                          "validUntil": "2019-07-07T10:55:02Z"
                                        }
                                      }
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "title": "RealEstateOffice",
                              "properties": {
                                "type": {
                                  "type": "string",
                                  "description": "RealEstateOffice",
                                  "enum": [
                                    "RealEstateOffice"
                                  ]
                                },
                                "contactPoint": {
                                  "description": "department or role specific contact points, i.e. relocation.",
                                  "example": [
                                    {
                                      "type": "ContactPoint",
                                      "name": "Relocation",
                                      "telephone": "1-245-880-8222",
                                      "faxNumber": "958-530-3473",
                                      "email": "relocation@example.com"
                                    }
                                  ]
                                },
                                "description": {
                                  "example": "The number on Gotham City Real Estate Company since 1940"
                                },
                                "parentOrganization": {
                                  "description": "Office broker or franchisor.",
                                  "x-range": "RealEstateOrganization"
                                },
                                "subOrganization": {
                                  "type": "array",
                                  "x-range": "RealEstateAgent",
                                  "description": "Agents and teams associated with the office.",
                                  "items": {
                                    "type": "string",
                                    "format": "uri"
                                  }
                                },
                                "geoCoordinates": {
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
                                      ]
                                    },
                                    "longitude": {
                                      "type": "number",
                                      "description": "The longitude of a location.",
                                      "x-title": "longitude",
                                      "example": 73.98
                                    },
                                    "latitude": {
                                      "type": "number",
                                      "description": "The latitude of a location.",
                                      "x-title": "latitude",
                                      "example": 40.75
                                    }
                                  }
                                }
                              }
                            }
                          ]
                        },
                        {
                          "allOf": [
                            {
                              "properties": {
                                "id": {
                                  "type": "string",
                                  "example": "https://org.example.com/profile/card#me"
                                }
                              }
                            },
                            {
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
                                  "x-kind": "Organization"
                                },
                                {
                                  "x-hasSubclass": [
                                    "RealEstateOrganization",
                                    "RealEstateOffice",
                                    "RealEstateAgent"
                                  ]
                                },
                                {
                                  "x-subClassOf": [
                                    "https://schema.org/Organization"
                                  ],
                                  "properties": {
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
                                    "availableLanguage": {
                                      "title": "availableLanguage",
                                      "type": "array",
                                      "description": "Please use one of the language codes from the IETF BCP 47 standard.",
                                      "x-range": "Language",
                                      "items": {
                                        "title": "Language",
                                        "type": "object",
                                        "description": "a written or spoken Language",
                                        "x-range": "Language",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "description": "Language",
                                            "enum": [
                                              "Language"
                                            ]
                                          },
                                          "name": {
                                            "type": "string",
                                            "description": "the display name of the language",
                                            "example": "English"
                                          },
                                          "additionalName": {
                                            "type": "string",
                                            "description": "BCP 47 language code",
                                            "example": "en-US"
                                          }
                                        }
                                      }
                                    },
                                    "branchCode": {
                                      "description": "A short textual code that uniquely identifies a place of business.",
                                      "example": "for BHHS profile events, see additionalProperty.OfficeId",
                                      "type": "string"
                                    },
                                    "certification": {
                                      "x-range": "Certification",
                                      "description": "certifications granted to a person or organization",
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "example": {
                                          "type": "Certification",
                                          "name": "E-Agent Certified",
                                          "validFrom": "2019-06-13T07:00:00.000Z",
                                          "additionalProperty": {
                                            "ceritificationTypeId": "86afafd3-ac25-4a89-9a6e-bebb3753c4b2"
                                          }
                                        }
                                      }
                                    },
                                    "contactPoint": {
                                      "type": "object",
                                      "description": "a named point of contact - telephone, email, faxNumber, and/or url for the entity",
                                      "x-range": "ContactPoint",
                                      "example": {
                                        "type": "ContactPoint",
                                        "name": "Work",
                                        "telephone": "800-555-5555",
                                        "faxNumber": "888-4BA-TMAN",
                                        "email": "bruce@example.com",
                                        "url": "https://example.com"
                                      }
                                    },
                                    "email": {
                                      "type": "string",
                                      "format": "email",
                                      "description": "Primary email address.",
                                      "example": "user@example.com"
                                    },
                                    "faxNumber": {
                                      "type": "string",
                                      "description": "Primary fax number.",
                                      "example": "(873) 271-4802"
                                    },
                                    "image": {
                                      "description": "an ImageObject or URI reference to an image of the entity on the web.",
                                      "title": "image",
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
                                    "logo": {
                                      "description": "a logo associated with the organization.",
                                      "items": {
                                        "allOf": [
                                          {
                                            "type": "object",
                                            "title": "DigitalDocument",
                                            "x-range": "DigitalDocument",
                                            "description": "an electronic file.",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "enum": [
                                                  "DigitalDocument"
                                                ]
                                              },
                                              "id": {
                                                "type": "string",
                                                "example": "http://user.example.com/public/logo/archive.zip"
                                              },
                                              "name": {
                                                "type": "string",
                                                "description": "document name or title",
                                                "example": "archive.zip"
                                              },
                                              "encodingFormat": {
                                                "type": "string",
                                                "description": "[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)",
                                                "example": "application/zip"
                                              },
                                              "about": {
                                                "type": "object",
                                                "description": "subject of the Document",
                                                "x-range": "Thing",
                                                "example": {
                                                  "type": "RealEstateTransaction",
                                                  "identifier": {
                                                    "bmsTransactionId": "xxxx"
                                                  }
                                                }
                                              },
                                              "url": {
                                                "type": "string",
                                                "description": "public URL of the object",
                                                "example": "https://example.com"
                                              }
                                            }
                                          },
                                          {
                                            "description": "an associated logo",
                                            "type": "object"
                                          }
                                        ],
                                        "type": "object"
                                      },
                                      "type": "array",
                                      "x-range": [
                                        "ImageObject",
                                        "DigitalDocument"
                                      ]
                                    },
                                    "name": {
                                      "description": "Name or DBA.",
                                      "type": "string"
                                    },
                                    "parentOrganization": {
                                      "items": {
                                        "format": "uri",
                                        "type": "string"
                                      },
                                      "type": "array"
                                    },
                                    "subOrganization": {
                                      "description": "a child organization",
                                      "x-range": [
                                        "RealEstateOrganization"
                                      ],
                                      "type": "array",
                                      "items": {
                                        "type": "string",
                                        "format": "uri",
                                        "example": "http://org.example.com/profile/card#me"
                                      }
                                    },
                                    "telephone": {
                                      "type": "string",
                                      "description": "Primary phone number.",
                                      "example": "+15558675309"
                                    },
                                    "type": {
                                      "enum": [
                                        "Organization"
                                      ],
                                      "type": "string"
                                    },
                                    "url": {
                                      "description": "primary website/url for the entity.",
                                      "format": "uri",
                                      "type": "string"
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "title": "RealEstateTeam",
                              "description": "A real estate team.",
                              "properties": {
                                "type": {
                                  "type": "string",
                                  "description": "RealEstateTeam",
                                  "enum": [
                                    "RealEstateTeam"
                                  ]
                                },
                                "areaServed": {
                                  "type": "object",
                                  "description": "the physical areas that make up the ServiceArea",
                                  "x-range": [
                                    "City",
                                    "PostalCodeArea"
                                  ],
                                  "example": {
                                    "type": "PostalCode",
                                    "postalCode": "91371",
                                    "addressLocality": "Woodland Hills",
                                    "addressCounty": "Los Angeles",
                                    "addressRegion": "CA",
                                    "addressCountry": "US"
                                  }
                                },
                                "description": {
                                  "example": "The number on Gotham City Real Estate Company since 1940",
                                  "type": "string",
                                  "description": "description of the item."
                                },
                                "parentOrganization": {
                                  "x-range": "RealEstateOrganization",
                                  "description": "A franchisor or affiliate network of which this organization plays a membership role.",
                                  "type": "array",
                                  "items": {
                                    "type": "string",
                                    "format": "uri"
                                  }
                                },
                                "member": {
                                  "type": "array",
                                  "items": {
                                    "allOf": [
                                      {
                                        "title": "OrganizationRole",
                                        "type": "object",
                                        "description": "describes a role played by a member and a group or organization.",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "description": "a role played by the member in the memberOf group",
                                            "enum": [
                                              "OrganizationRole"
                                            ]
                                          },
                                          "roleName": {
                                            "type": "string",
                                            "description": "the role name",
                                            "example": "Owner"
                                          },
                                          "memberOf": {
                                            "description": "the org or group where the role is performed",
                                            "type": "object",
                                            "example": {
                                              "type": "RealEstateOrganization",
                                              "id": "http://orgid.example.com/profile/card#me"
                                            }
                                          },
                                          "member": {
                                            "description": "member object or id",
                                            "type": "string",
                                            "format": "uri",
                                            "example": "https://memberid.example.com/profile/card#me"
                                          },
                                          "startDate": {
                                            "type": "string",
                                            "format": "date-time",
                                            "description": "date the member began performing this role"
                                          },
                                          "endDate": {
                                            "type": "string",
                                            "format": "date-time",
                                            "description": "date the member stopped performing the role"
                                          }
                                        }
                                      },
                                      {
                                        "type": "object",
                                        "title": "RealEstateTeamMembership",
                                        "description": "a membership relationship.  Subclass of OrganizationRole",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "description": "a member of a real estate team",
                                            "enum": [
                                              "RealEstateTeamMembership"
                                            ],
                                            "example": "RealEstateTeamMembership"
                                          },
                                          "roleName": {
                                            "type": "string",
                                            "enum": [
                                              "TeamMember",
                                              "TeamAdmin",
                                              "TeamOwner"
                                            ]
                                          },
                                          "memberOf": {
                                            "type": "string",
                                            "format": "uri",
                                            "example": "https://{team-id}.example.com/profile/card#me"
                                          },
                                          "member": {
                                            "type": "string",
                                            "format": "uri",
                                            "example": "https://{agent}.example.com/profile/card#me"
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              }
                            }
                          ]
                        }
                      ]
                    },
                    "branchCode": {
                      "example": "ABC123"
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
              "enum": [
                "realestate/profile#update"
              ]
            },
            "data": {
              "x-range": "UpdateAction",
              "properties": {
                "type": {
                  "type": "string",
                  "description": "UpdateAction",
                  "enum": [
                    "UpdateAction"
                  ],
                  "example": "UpdateAction"
                },
                "object": {
                  "x-range": [
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "RealEstateOrganization"
                  ],
                  "type": "object",
                  "description": "the updated or added profile value"
                }
              }
            }
          }
        }
      ]
    },
    "schemaFormat": "application/vnd.aai.asyncapi;version=2.4.0",
    "x-parser-message-parsed": true,
    "x-parser-message-name": "<anonymous-message-7>"
  }
}
```