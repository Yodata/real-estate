

---
title: RealEstateAgent
---

{}


# RealEstateAgent

a real estate agent or team.



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
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
  "options": {}
}



prop = {
  &quot;_json&quot;: {
    &quot;properties&quot;: {
      &quot;type&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;enum&quot;: [
          &quot;RealEstateAgent&quot;
        ],
        &quot;description&quot;: &quot;RealEstateAgent&quot;
      },
      &quot;id&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;format&quot;: &quot;uri&quot;,
        &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
      },
      &quot;name&quot;: {
        &quot;type&quot;: &quot;string&quot;
      },
      &quot;givenName&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;First Name of a person&quot;,
        &quot;example&quot;: &quot;Glenn&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
      },
      &quot;familyName&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;Last Name of a person&quot;,
        &quot;example&quot;: &quot;Miller&quot;,
        &quot;maxLength&quot;: 50,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-262&gt;&quot;
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-496&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;allOf&quot;: [
          {
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateAgent&quot;
                ],
                &quot;description&quot;: &quot;RealEstateAgent&quot;
              },
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;
              },
              &quot;givenName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;First Name of a person&quot;,
                &quot;example&quot;: &quot;Glenn&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
              },
              &quot;familyName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Last Name of a person&quot;,
                &quot;example&quot;: &quot;Miller&quot;,
                &quot;maxLength&quot;: 50,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-262&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-496&gt;&quot;
          },
          {
            &quot;allOf&quot;: [
              {
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
                    &quot;x-kind&quot;: &quot;Organization&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-333&gt;&quot;
                  },
                  {
                    &quot;x-hasSubclass&quot;: [
                      &quot;RealEstateOrganization&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-334&gt;&quot;
                  },
                  {
                    &quot;x-subClassOf&quot;: [
                      &quot;https://schema.org/Organization&quot;
                    ],
                    &quot;properties&quot;: {
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
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-225&gt;&quot;
                      },
                      &quot;availableLanguage&quot;: {
                        &quot;title&quot;: &quot;availableLanguage&quot;,
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;description&quot;: &quot;Please use one of the language codes from the IETF BCP 47 standard.&quot;,
                        &quot;x-range&quot;: &quot;Language&quot;,
                        &quot;items&quot;: {
                          &quot;title&quot;: &quot;Language&quot;,
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;a written or spoken Language&quot;,
                          &quot;x-range&quot;: &quot;Language&quot;,
                          &quot;properties&quot;: {
                            &quot;type&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;Language&quot;,
                              &quot;enum&quot;: [
                                &quot;Language&quot;
                              ],
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-287&gt;&quot;
                            },
                            &quot;name&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;the display name of the language&quot;,
                              &quot;example&quot;: &quot;English&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-288&gt;&quot;
                            },
                            &quot;additionalName&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;BCP 47 language code&quot;,
                              &quot;example&quot;: &quot;en-US&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-289&gt;&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;Language&quot;
                        }
                      },
                      &quot;branchCode&quot;: {
                        &quot;description&quot;: &quot;A short textual code that uniquely identifies a place of business.&quot;,
                        &quot;example&quot;: &quot;for BHHS profile events, see additionalProperty.OfficeId&quot;,
                        &quot;type&quot;: &quot;string&quot;
                      },
                      &quot;certification&quot;: {
                        &quot;x-range&quot;: &quot;Certification&quot;,
                        &quot;description&quot;: &quot;certifications granted to a person or organization&quot;,
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;items&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Certification&quot;,
                            &quot;name&quot;: &quot;E-Agent Certified&quot;,
                            &quot;validFrom&quot;: &quot;2019-06-13T07:00:00.000Z&quot;,
                            &quot;additionalProperty&quot;: {
                              &quot;ceritificationTypeId&quot;: &quot;86afafd3-ac25-4a89-9a6e-bebb3753c4b2&quot;
                            }
                          }
                        }
                      },
                      &quot;contactPoint&quot;: {
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;description&quot;: &quot;a named point of contact - telephone, email, faxNumber, and/or url for the entity&quot;,
                        &quot;x-range&quot;: &quot;ContactPoint&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;ContactPoint&quot;,
                          &quot;name&quot;: &quot;Work&quot;,
                          &quot;telephone&quot;: &quot;800-555-5555&quot;,
                          &quot;faxNumber&quot;: &quot;888-4BA-TMAN&quot;,
                          &quot;email&quot;: &quot;bruce@example.com&quot;,
                          &quot;url&quot;: &quot;https://example.com&quot;
                        },
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-228&gt;&quot;
                      },
                      &quot;email&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;format&quot;: &quot;email&quot;,
                        &quot;description&quot;: &quot;Primary email address.&quot;,
                        &quot;example&quot;: &quot;user@example.com&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-561&gt;&quot;
                      },
                      &quot;faxNumber&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Primary fax number.&quot;,
                        &quot;example&quot;: &quot;(873) 271-4802&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-232&gt;&quot;
                      },
                      &quot;image&quot;: {
                        &quot;description&quot;: &quot;an ImageObject or URI reference to an image of the entity on the web.&quot;,
                        &quot;title&quot;: &quot;image&quot;,
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
                        ]
                      },
                      &quot;logo&quot;: {
                        &quot;description&quot;: &quot;a logo associated with the organization.&quot;,
                        &quot;items&quot;: {
                          &quot;allOf&quot;: [
                            {
                              &quot;type&quot;: &quot;object&quot;,
                              &quot;title&quot;: &quot;DigitalDocument&quot;,
                              &quot;x-range&quot;: &quot;DigitalDocument&quot;,
                              &quot;description&quot;: &quot;an electronic file.&quot;,
                              &quot;properties&quot;: {
                                &quot;type&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;enum&quot;: [
                                    &quot;DigitalDocument&quot;
                                  ],
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-264&gt;&quot;
                                },
                                &quot;id&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;example&quot;: &quot;http://user.example.com/public/logo/archive.zip&quot;,
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-265&gt;&quot;
                                },
                                &quot;name&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;description&quot;: &quot;document name or title&quot;,
                                  &quot;example&quot;: &quot;archive.zip&quot;,
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-266&gt;&quot;
                                },
                                &quot;encodingFormat&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;description&quot;: &quot;[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)&quot;,
                                  &quot;example&quot;: &quot;application/zip&quot;,
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-267&gt;&quot;
                                },
                                &quot;about&quot;: {
                                  &quot;type&quot;: &quot;object&quot;,
                                  &quot;description&quot;: &quot;subject of the Document&quot;,
                                  &quot;x-range&quot;: &quot;Thing&quot;,
                                  &quot;example&quot;: {
                                    &quot;type&quot;: &quot;RealEstateTransaction&quot;,
                                    &quot;identifier&quot;: {
                                      &quot;bmsTransactionId&quot;: &quot;xxxx&quot;
                                    }
                                  },
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-268&gt;&quot;
                                },
                                &quot;url&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;description&quot;: &quot;public URL of the object&quot;,
                                  &quot;example&quot;: &quot;https://example.com&quot;,
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-269&gt;&quot;
                                }
                              },
                              &quot;x-parser-schema-id&quot;: &quot;DigitalDocument&quot;
                            },
                            {
                              &quot;description&quot;: &quot;an associated logo&quot;,
                              &quot;type&quot;: &quot;object&quot;
                            }
                          ],
                          &quot;type&quot;: &quot;object&quot;
                        },
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;x-range&quot;: [
                          &quot;ImageObject&quot;,
                          &quot;DigitalDocument&quot;
                        ]
                      },
                      &quot;name&quot;: {
                        &quot;description&quot;: &quot;Name or DBA.&quot;,
                        &quot;type&quot;: &quot;string&quot;
                      },
                      &quot;parentOrganization&quot;: {
                        &quot;items&quot;: {
                          &quot;format&quot;: &quot;uri&quot;,
                          &quot;type&quot;: &quot;string&quot;
                        },
                        &quot;type&quot;: &quot;array&quot;
                      },
                      &quot;subOrganization&quot;: {
                        &quot;description&quot;: &quot;a child organization&quot;,
                        &quot;x-range&quot;: [
                          &quot;RealEstateOrganization&quot;
                        ],
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;items&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;uri&quot;,
                          &quot;example&quot;: &quot;http://org.example.com/profile/card#me&quot;
                        }
                      },
                      &quot;telephone&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Primary phone number.&quot;,
                        &quot;example&quot;: &quot;+15558675309&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-562&gt;&quot;
                      },
                      &quot;type&quot;: {
                        &quot;enum&quot;: [
                          &quot;Organization&quot;
                        ],
                        &quot;type&quot;: &quot;string&quot;
                      },
                      &quot;url&quot;: {
                        &quot;description&quot;: &quot;primary website/url for the entity.&quot;,
                        &quot;format&quot;: &quot;uri&quot;,
                        &quot;type&quot;: &quot;string&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-335&gt;&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;Organization&quot;
              },
              {
                &quot;title&quot;: &quot;RealEstateOrganization&quot;,
                &quot;description&quot;: &quot;A real estate franchisor, broker or business&quot;,
                &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;description&quot;: &quot;RealEstateOrganzation&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;example&quot;: &quot;RealEstateOrganization&quot;
                  },
                  &quot;areaServed&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;the physical areas that make up the ServiceArea&quot;,
                    &quot;x-range&quot;: [
                      &quot;City&quot;,
                      &quot;PostalCodeArea&quot;
                    ],
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PostalCode&quot;,
                      &quot;postalCode&quot;: &quot;91371&quot;,
                      &quot;addressLocality&quot;: &quot;Woodland Hills&quot;,
                      &quot;addressCounty&quot;: &quot;Los Angeles&quot;,
                      &quot;addressRegion&quot;: &quot;CA&quot;,
                      &quot;addressCountry&quot;: &quot;US&quot;
                    }
                  },
                  &quot;description&quot;: {
                    &quot;example&quot;: &quot;The number on Gotham City Real Estate Company since 1940&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item.&quot;
                  },
                  &quot;parentOrganization&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                    &quot;description&quot;: &quot;A franchisor or affiliate network of which this organization plays a membership role.&quot;,
                    &quot;items&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;format&quot;: &quot;uri&quot;
                    }
                  },
                  &quot;numberOfSubOrganizations&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the number of offices for an affiliate.&quot;
                  },
                  &quot;member&quot;: {
                    &quot;title&quot;: &quot;member&quot;,
                    &quot;description&quot;: &quot;A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.&quot;,
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;x-range&quot;: [
                      &quot;OrganizationRole&quot;,
                      &quot;URI&quot;
                    ],
                    &quot;items&quot;: {
                      &quot;anyOf&quot;: [
                        {
                          &quot;title&quot;: &quot;OrganizationRole&quot;,
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;describes a role played by a member and a group or organization.&quot;,
                          &quot;properties&quot;: {
                            &quot;type&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;a role played by the member in the memberOf group&quot;,
                              &quot;enum&quot;: [
                                &quot;OrganizationRole&quot;
                              ],
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-316&gt;&quot;
                            },
                            &quot;roleName&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;the role name&quot;,
                              &quot;example&quot;: &quot;Owner&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-317&gt;&quot;
                            },
                            &quot;memberOf&quot;: {
                              &quot;description&quot;: &quot;the org or group where the role is performed&quot;,
                              &quot;type&quot;: &quot;object&quot;,
                              &quot;example&quot;: {
                                &quot;type&quot;: &quot;RealEstateOrganization&quot;,
                                &quot;id&quot;: &quot;http://orgid.example.com/profile/card#me&quot;
                              },
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-318&gt;&quot;
                            },
                            &quot;member&quot;: {
                              &quot;description&quot;: &quot;member object or id&quot;,
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;uri&quot;,
                              &quot;example&quot;: &quot;https://memberid.example.com/profile/card#me&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-319&gt;&quot;
                            },
                            &quot;startDate&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;date-time&quot;,
                              &quot;description&quot;: &quot;date the member began performing this role&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-320&gt;&quot;
                            },
                            &quot;endDate&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;date-time&quot;,
                              &quot;description&quot;: &quot;date the member stopped performing the role&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-321&gt;&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;OrganizationRole&quot;
                        },
                        {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;uri&quot;
                        }
                      ]
                    }
                  },
                  &quot;memberOf&quot;: {
                    &quot;x-range&quot;: [
                      &quot;OrganizationRole&quot;,
                      &quot;MLSMembership&quot;
                    ],
                    &quot;description&quot;: &quot;An Organization (or ProgramMembership) to which this Person or Organization belongs.&quot;,
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;items&quot;: {
                      &quot;allOf&quot;: [
                        {
                          &quot;title&quot;: &quot;OrganizationRole&quot;,
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;describes a role played by a member and a group or organization.&quot;,
                          &quot;properties&quot;: {
                            &quot;type&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;a role played by the member in the memberOf group&quot;,
                              &quot;enum&quot;: [
                                &quot;OrganizationRole&quot;
                              ],
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-316&gt;&quot;
                            },
                            &quot;roleName&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;the role name&quot;,
                              &quot;example&quot;: &quot;Owner&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-317&gt;&quot;
                            },
                            &quot;memberOf&quot;: {
                              &quot;description&quot;: &quot;the org or group where the role is performed&quot;,
                              &quot;type&quot;: &quot;object&quot;,
                              &quot;example&quot;: {
                                &quot;type&quot;: &quot;RealEstateOrganization&quot;,
                                &quot;id&quot;: &quot;http://orgid.example.com/profile/card#me&quot;
                              },
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-318&gt;&quot;
                            },
                            &quot;member&quot;: {
                              &quot;description&quot;: &quot;member object or id&quot;,
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;uri&quot;,
                              &quot;example&quot;: &quot;https://memberid.example.com/profile/card#me&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-319&gt;&quot;
                            },
                            &quot;startDate&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;date-time&quot;,
                              &quot;description&quot;: &quot;date the member began performing this role&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-320&gt;&quot;
                            },
                            &quot;endDate&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;date-time&quot;,
                              &quot;description&quot;: &quot;date the member stopped performing the role&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-321&gt;&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;OrganizationRole&quot;
                        },
                        {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;title&quot;: &quot;MLSMembership&quot;,
                          &quot;description&quot;: &quot;a membership relationship&quot;,
                          &quot;properties&quot;: {
                            &quot;type&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;an MLS member relationship&quot;,
                              &quot;enum&quot;: [
                                &quot;MLSMembership&quot;
                              ],
                              &quot;example&quot;: &quot;MLSMembership&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-323&gt;&quot;
                            },
                            &quot;roleName&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;example&quot;: &quot;MLSMember&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-324&gt;&quot;
                            },
                            &quot;memberOf&quot;: {
                              &quot;type&quot;: &quot;object&quot;,
                              &quot;x-range&quot;: &quot;MultipleListingService&quot;,
                              &quot;example&quot;: {
                                &quot;type&quot;: &quot;MultipleListingService&quot;,
                                &quot;name&quot;: &quot;GreatScottMLS&quot;
                              },
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-325&gt;&quot;
                            },
                            &quot;member&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;uri&quot;,
                              &quot;example&quot;: &quot;https://{agent}.example.com/profile/card#me&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-326&gt;&quot;
                            },
                            &quot;memberId&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;the user&#39;s MLSID&quot;,
                              &quot;example&quot;: &quot;memberid123&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-327&gt;&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-322&gt;&quot;
                        }
                      ],
                      &quot;x-parser-schema-id&quot;: &quot;MLSMembership&quot;
                    }
                  },
                  &quot;permit&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;x-range&quot;: &quot;RealEstateLicense&quot;,
                    &quot;items&quot;: {
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;example&quot;: {
                        &quot;type&quot;: &quot;RealEstateLicense&quot;,
                        &quot;name&quot;: &quot;CA-DRE# 02068375&quot;,
                        &quot;identifier&quot;: {
                          &quot;type&quot;: &quot;PropertyValue&quot;,
                          &quot;name&quot;: &quot;CA-DRE&quot;,
                          &quot;value&quot;: &quot;02068375&quot;
                        },
                        &quot;issuedBy&quot;: {
                          &quot;type&quot;: &quot;State&quot;,
                          &quot;name&quot;: &quot;California&quot;
                        },
                        &quot;issuedThrough&quot;: {
                          &quot;type&quot;: &quot;Service&quot;,
                          &quot;name&quot;: &quot;California Department of Real Estate&quot;
                        },
                        &quot;validIn&quot;: {
                          &quot;type&quot;: &quot;State&quot;,
                          &quot;name&quot;: &quot;California&quot;
                        },
                        &quot;validFrom&quot;: &quot;2019-07-07T10:55:02Z&quot;,
                        &quot;validUntil&quot;: &quot;2019-07-07T10:55:02Z&quot;
                      }
                    }
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-497&gt;&quot;
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;RealEstateOrganization&quot;
          },
          {
            &quot;description&quot;: &quot;A real estate agent&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-498&gt;&quot;
          },
          {
            &quot;properties&quot;: {
              &quot;description&quot;: {
                &quot;example&quot;: &quot;The leading Gotham City Real Estate Agent.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-500&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                &quot;example&quot;: {
                  &quot;ContactID&quot;: &quot;1234567&quot;
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-501&gt;&quot;
              },
              &quot;jobTitle&quot;: {
                &quot;description&quot;: &quot;agent&#39;s job titles&quot;,
                &quot;items&quot;: {
                  &quot;example&quot;: [
                    &quot;Accounting Department&quot;,
                    &quot;Awards Coordinator&quot;
                  ],
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-503&gt;&quot;
                },
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-502&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;example&quot;: &quot;Louis Armstrong&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-504&gt;&quot;
              },
              &quot;givenName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;First Name of a person&quot;,
                &quot;example&quot;: &quot;Glenn&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-505&gt;&quot;
              },
              &quot;familyName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Last Name of a person&quot;,
                &quot;example&quot;: &quot;Miller&quot;,
                &quot;maxLength&quot;: 50,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-506&gt;&quot;
              },
              &quot;additionalName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.&quot;,
                &quot;example&quot;: &quot;ambassador satch,pops,satchmo&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-230&gt;&quot;
              },
              &quot;parentOrganization&quot;: {
                &quot;description&quot;: &quot;URI reference to the agent&#39;s office. For teams, this can be a reference to the team leader/primary profile.&quot;,
                &quot;example&quot;: [
                  &quot;http://office-real-estate.example.com/&quot;,
                  &quot;http://batmanandrobinteam.example.com/&quot;
                ],
                &quot;items&quot;: {
                  &quot;format&quot;: &quot;uri&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-508&gt;&quot;
                },
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateOffice&quot;,
                  &quot;RealEstateAgent&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-507&gt;&quot;
              },
              &quot;sameAs&quot;: {
                &quot;description&quot;: &quot;key/value id assigned to the record&quot;,
                &quot;example&quot;: {
                  &quot;bmsID&quot;: &quot;1234&quot;
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-509&gt;&quot;
              },
              &quot;subOrganization&quot;: {
                &quot;description&quot;: &quot;for teams: URI reference to a team member&quot;,
                &quot;items&quot;: {
                  &quot;format&quot;: &quot;uri&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-511&gt;&quot;
                },
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-range&quot;: &quot;RealEstateAgent&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-510&gt;&quot;
              },
              &quot;type&quot;: {
                &quot;description&quot;: &quot;RealEstateAgent&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateAgent&quot;
                ],
                &quot;example&quot;: &quot;RealEstateAgent&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-512&gt;&quot;
              }
            },
            &quot;title&quot;: &quot;RealEstateAgent&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-499&gt;&quot;
          }
        ],
        &quot;description&quot;: &quot;a real estate agent or team.&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;x-parser-schema-id&quot;: &quot;RealEstateAgent&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;1&gt;
required = 
path = RealEstateAgent




prop = {
  &quot;_json&quot;: {
    &quot;allOf&quot;: [
      {
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
            &quot;x-kind&quot;: &quot;Organization&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-333&gt;&quot;
          },
          {
            &quot;x-hasSubclass&quot;: [
              &quot;RealEstateOrganization&quot;,
              &quot;RealEstateOffice&quot;,
              &quot;RealEstateAgent&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-334&gt;&quot;
          },
          {
            &quot;x-subClassOf&quot;: [
              &quot;https://schema.org/Organization&quot;
            ],
            &quot;properties&quot;: {
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
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-225&gt;&quot;
              },
              &quot;availableLanguage&quot;: {
                &quot;title&quot;: &quot;availableLanguage&quot;,
                &quot;type&quot;: &quot;array&quot;,
                &quot;description&quot;: &quot;Please use one of the language codes from the IETF BCP 47 standard.&quot;,
                &quot;x-range&quot;: &quot;Language&quot;,
                &quot;items&quot;: {
                  &quot;title&quot;: &quot;Language&quot;,
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;a written or spoken Language&quot;,
                  &quot;x-range&quot;: &quot;Language&quot;,
                  &quot;properties&quot;: {
                    &quot;type&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;description&quot;: &quot;Language&quot;,
                      &quot;enum&quot;: [
                        &quot;Language&quot;
                      ],
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-287&gt;&quot;
                    },
                    &quot;name&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;description&quot;: &quot;the display name of the language&quot;,
                      &quot;example&quot;: &quot;English&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-288&gt;&quot;
                    },
                    &quot;additionalName&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;description&quot;: &quot;BCP 47 language code&quot;,
                      &quot;example&quot;: &quot;en-US&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-289&gt;&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;Language&quot;
                }
              },
              &quot;branchCode&quot;: {
                &quot;description&quot;: &quot;A short textual code that uniquely identifies a place of business.&quot;,
                &quot;example&quot;: &quot;for BHHS profile events, see additionalProperty.OfficeId&quot;,
                &quot;type&quot;: &quot;string&quot;
              },
              &quot;certification&quot;: {
                &quot;x-range&quot;: &quot;Certification&quot;,
                &quot;description&quot;: &quot;certifications granted to a person or organization&quot;,
                &quot;type&quot;: &quot;array&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;example&quot;: {
                    &quot;type&quot;: &quot;Certification&quot;,
                    &quot;name&quot;: &quot;E-Agent Certified&quot;,
                    &quot;validFrom&quot;: &quot;2019-06-13T07:00:00.000Z&quot;,
                    &quot;additionalProperty&quot;: {
                      &quot;ceritificationTypeId&quot;: &quot;86afafd3-ac25-4a89-9a6e-bebb3753c4b2&quot;
                    }
                  }
                }
              },
              &quot;contactPoint&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;a named point of contact - telephone, email, faxNumber, and/or url for the entity&quot;,
                &quot;x-range&quot;: &quot;ContactPoint&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;ContactPoint&quot;,
                  &quot;name&quot;: &quot;Work&quot;,
                  &quot;telephone&quot;: &quot;800-555-5555&quot;,
                  &quot;faxNumber&quot;: &quot;888-4BA-TMAN&quot;,
                  &quot;email&quot;: &quot;bruce@example.com&quot;,
                  &quot;url&quot;: &quot;https://example.com&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-228&gt;&quot;
              },
              &quot;email&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;email&quot;,
                &quot;description&quot;: &quot;Primary email address.&quot;,
                &quot;example&quot;: &quot;user@example.com&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-561&gt;&quot;
              },
              &quot;faxNumber&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Primary fax number.&quot;,
                &quot;example&quot;: &quot;(873) 271-4802&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-232&gt;&quot;
              },
              &quot;image&quot;: {
                &quot;description&quot;: &quot;an ImageObject or URI reference to an image of the entity on the web.&quot;,
                &quot;title&quot;: &quot;image&quot;,
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
                ]
              },
              &quot;logo&quot;: {
                &quot;description&quot;: &quot;a logo associated with the organization.&quot;,
                &quot;items&quot;: {
                  &quot;allOf&quot;: [
                    {
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;title&quot;: &quot;DigitalDocument&quot;,
                      &quot;x-range&quot;: &quot;DigitalDocument&quot;,
                      &quot;description&quot;: &quot;an electronic file.&quot;,
                      &quot;properties&quot;: {
                        &quot;type&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;enum&quot;: [
                            &quot;DigitalDocument&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-264&gt;&quot;
                        },
                        &quot;id&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;example&quot;: &quot;http://user.example.com/public/logo/archive.zip&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-265&gt;&quot;
                        },
                        &quot;name&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;document name or title&quot;,
                          &quot;example&quot;: &quot;archive.zip&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-266&gt;&quot;
                        },
                        &quot;encodingFormat&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)&quot;,
                          &quot;example&quot;: &quot;application/zip&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-267&gt;&quot;
                        },
                        &quot;about&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;subject of the Document&quot;,
                          &quot;x-range&quot;: &quot;Thing&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;RealEstateTransaction&quot;,
                            &quot;identifier&quot;: {
                              &quot;bmsTransactionId&quot;: &quot;xxxx&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-268&gt;&quot;
                        },
                        &quot;url&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;public URL of the object&quot;,
                          &quot;example&quot;: &quot;https://example.com&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-269&gt;&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;DigitalDocument&quot;
                    },
                    {
                      &quot;description&quot;: &quot;an associated logo&quot;,
                      &quot;type&quot;: &quot;object&quot;
                    }
                  ],
                  &quot;type&quot;: &quot;object&quot;
                },
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-range&quot;: [
                  &quot;ImageObject&quot;,
                  &quot;DigitalDocument&quot;
                ]
              },
              &quot;name&quot;: {
                &quot;description&quot;: &quot;Name or DBA.&quot;,
                &quot;type&quot;: &quot;string&quot;
              },
              &quot;parentOrganization&quot;: {
                &quot;items&quot;: {
                  &quot;format&quot;: &quot;uri&quot;,
                  &quot;type&quot;: &quot;string&quot;
                },
                &quot;type&quot;: &quot;array&quot;
              },
              &quot;subOrganization&quot;: {
                &quot;description&quot;: &quot;a child organization&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;type&quot;: &quot;array&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;uri&quot;,
                  &quot;example&quot;: &quot;http://org.example.com/profile/card#me&quot;
                }
              },
              &quot;telephone&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Primary phone number.&quot;,
                &quot;example&quot;: &quot;+15558675309&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-562&gt;&quot;
              },
              &quot;type&quot;: {
                &quot;enum&quot;: [
                  &quot;Organization&quot;
                ],
                &quot;type&quot;: &quot;string&quot;
              },
              &quot;url&quot;: {
                &quot;description&quot;: &quot;primary website/url for the entity.&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;type&quot;: &quot;string&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-335&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;Organization&quot;
      },
      {
        &quot;title&quot;: &quot;RealEstateOrganization&quot;,
        &quot;description&quot;: &quot;A real estate franchisor, broker or business&quot;,
        &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;description&quot;: &quot;RealEstateOrganzation&quot;,
            &quot;enum&quot;: [
              &quot;RealEstateOrganization&quot;,
              &quot;RealEstateOffice&quot;,
              &quot;RealEstateAgent&quot;
            ],
            &quot;example&quot;: &quot;RealEstateOrganization&quot;
          },
          &quot;areaServed&quot;: {
            &quot;type&quot;: &quot;object&quot;,
            &quot;description&quot;: &quot;the physical areas that make up the ServiceArea&quot;,
            &quot;x-range&quot;: [
              &quot;City&quot;,
              &quot;PostalCodeArea&quot;
            ],
            &quot;example&quot;: {
              &quot;type&quot;: &quot;PostalCode&quot;,
              &quot;postalCode&quot;: &quot;91371&quot;,
              &quot;addressLocality&quot;: &quot;Woodland Hills&quot;,
              &quot;addressCounty&quot;: &quot;Los Angeles&quot;,
              &quot;addressRegion&quot;: &quot;CA&quot;,
              &quot;addressCountry&quot;: &quot;US&quot;
            }
          },
          &quot;description&quot;: {
            &quot;example&quot;: &quot;The number on Gotham City Real Estate Company since 1940&quot;,
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;description of the item.&quot;
          },
          &quot;parentOrganization&quot;: {
            &quot;type&quot;: &quot;array&quot;,
            &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
            &quot;description&quot;: &quot;A franchisor or affiliate network of which this organization plays a membership role.&quot;,
            &quot;items&quot;: {
              &quot;type&quot;: &quot;string&quot;,
              &quot;format&quot;: &quot;uri&quot;
            }
          },
          &quot;numberOfSubOrganizations&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the number of offices for an affiliate.&quot;
          },
          &quot;member&quot;: {
            &quot;title&quot;: &quot;member&quot;,
            &quot;description&quot;: &quot;A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;x-range&quot;: [
              &quot;OrganizationRole&quot;,
              &quot;URI&quot;
            ],
            &quot;items&quot;: {
              &quot;anyOf&quot;: [
                {
                  &quot;title&quot;: &quot;OrganizationRole&quot;,
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;describes a role played by a member and a group or organization.&quot;,
                  &quot;properties&quot;: {
                    &quot;type&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;description&quot;: &quot;a role played by the member in the memberOf group&quot;,
                      &quot;enum&quot;: [
                        &quot;OrganizationRole&quot;
                      ],
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-316&gt;&quot;
                    },
                    &quot;roleName&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;description&quot;: &quot;the role name&quot;,
                      &quot;example&quot;: &quot;Owner&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-317&gt;&quot;
                    },
                    &quot;memberOf&quot;: {
                      &quot;description&quot;: &quot;the org or group where the role is performed&quot;,
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;example&quot;: {
                        &quot;type&quot;: &quot;RealEstateOrganization&quot;,
                        &quot;id&quot;: &quot;http://orgid.example.com/profile/card#me&quot;
                      },
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-318&gt;&quot;
                    },
                    &quot;member&quot;: {
                      &quot;description&quot;: &quot;member object or id&quot;,
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;format&quot;: &quot;uri&quot;,
                      &quot;example&quot;: &quot;https://memberid.example.com/profile/card#me&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-319&gt;&quot;
                    },
                    &quot;startDate&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;format&quot;: &quot;date-time&quot;,
                      &quot;description&quot;: &quot;date the member began performing this role&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-320&gt;&quot;
                    },
                    &quot;endDate&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;format&quot;: &quot;date-time&quot;,
                      &quot;description&quot;: &quot;date the member stopped performing the role&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-321&gt;&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;OrganizationRole&quot;
                },
                {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;uri&quot;
                }
              ]
            }
          },
          &quot;memberOf&quot;: {
            &quot;x-range&quot;: [
              &quot;OrganizationRole&quot;,
              &quot;MLSMembership&quot;
            ],
            &quot;description&quot;: &quot;An Organization (or ProgramMembership) to which this Person or Organization belongs.&quot;,
            &quot;type&quot;: &quot;array&quot;,
            &quot;items&quot;: {
              &quot;allOf&quot;: [
                {
                  &quot;title&quot;: &quot;OrganizationRole&quot;,
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;description&quot;: &quot;describes a role played by a member and a group or organization.&quot;,
                  &quot;properties&quot;: {
                    &quot;type&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;description&quot;: &quot;a role played by the member in the memberOf group&quot;,
                      &quot;enum&quot;: [
                        &quot;OrganizationRole&quot;
                      ],
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-316&gt;&quot;
                    },
                    &quot;roleName&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;description&quot;: &quot;the role name&quot;,
                      &quot;example&quot;: &quot;Owner&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-317&gt;&quot;
                    },
                    &quot;memberOf&quot;: {
                      &quot;description&quot;: &quot;the org or group where the role is performed&quot;,
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;example&quot;: {
                        &quot;type&quot;: &quot;RealEstateOrganization&quot;,
                        &quot;id&quot;: &quot;http://orgid.example.com/profile/card#me&quot;
                      },
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-318&gt;&quot;
                    },
                    &quot;member&quot;: {
                      &quot;description&quot;: &quot;member object or id&quot;,
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;format&quot;: &quot;uri&quot;,
                      &quot;example&quot;: &quot;https://memberid.example.com/profile/card#me&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-319&gt;&quot;
                    },
                    &quot;startDate&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;format&quot;: &quot;date-time&quot;,
                      &quot;description&quot;: &quot;date the member began performing this role&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-320&gt;&quot;
                    },
                    &quot;endDate&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;format&quot;: &quot;date-time&quot;,
                      &quot;description&quot;: &quot;date the member stopped performing the role&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-321&gt;&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;OrganizationRole&quot;
                },
                {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;title&quot;: &quot;MLSMembership&quot;,
                  &quot;description&quot;: &quot;a membership relationship&quot;,
                  &quot;properties&quot;: {
                    &quot;type&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;description&quot;: &quot;an MLS member relationship&quot;,
                      &quot;enum&quot;: [
                        &quot;MLSMembership&quot;
                      ],
                      &quot;example&quot;: &quot;MLSMembership&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-323&gt;&quot;
                    },
                    &quot;roleName&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;example&quot;: &quot;MLSMember&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-324&gt;&quot;
                    },
                    &quot;memberOf&quot;: {
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;x-range&quot;: &quot;MultipleListingService&quot;,
                      &quot;example&quot;: {
                        &quot;type&quot;: &quot;MultipleListingService&quot;,
                        &quot;name&quot;: &quot;GreatScottMLS&quot;
                      },
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-325&gt;&quot;
                    },
                    &quot;member&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;format&quot;: &quot;uri&quot;,
                      &quot;example&quot;: &quot;https://{agent}.example.com/profile/card#me&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-326&gt;&quot;
                    },
                    &quot;memberId&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;description&quot;: &quot;the user&#39;s MLSID&quot;,
                      &quot;example&quot;: &quot;memberid123&quot;,
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-327&gt;&quot;
                    }
                  },
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-322&gt;&quot;
                }
              ],
              &quot;x-parser-schema-id&quot;: &quot;MLSMembership&quot;
            }
          },
          &quot;permit&quot;: {
            &quot;type&quot;: &quot;array&quot;,
            &quot;x-range&quot;: &quot;RealEstateLicense&quot;,
            &quot;items&quot;: {
              &quot;type&quot;: &quot;object&quot;,
              &quot;example&quot;: {
                &quot;type&quot;: &quot;RealEstateLicense&quot;,
                &quot;name&quot;: &quot;CA-DRE# 02068375&quot;,
                &quot;identifier&quot;: {
                  &quot;type&quot;: &quot;PropertyValue&quot;,
                  &quot;name&quot;: &quot;CA-DRE&quot;,
                  &quot;value&quot;: &quot;02068375&quot;
                },
                &quot;issuedBy&quot;: {
                  &quot;type&quot;: &quot;State&quot;,
                  &quot;name&quot;: &quot;California&quot;
                },
                &quot;issuedThrough&quot;: {
                  &quot;type&quot;: &quot;Service&quot;,
                  &quot;name&quot;: &quot;California Department of Real Estate&quot;
                },
                &quot;validIn&quot;: {
                  &quot;type&quot;: &quot;State&quot;,
                  &quot;name&quot;: &quot;California&quot;
                },
                &quot;validFrom&quot;: &quot;2019-07-07T10:55:02Z&quot;,
                &quot;validUntil&quot;: &quot;2019-07-07T10:55:02Z&quot;
              }
            }
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-497&gt;&quot;
      }
    ],
    &quot;x-parser-schema-id&quot;: &quot;RealEstateOrganization&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;allOf&quot;: [
          {
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateAgent&quot;
                ],
                &quot;description&quot;: &quot;RealEstateAgent&quot;
              },
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;
              },
              &quot;givenName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;First Name of a person&quot;,
                &quot;example&quot;: &quot;Glenn&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
              },
              &quot;familyName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Last Name of a person&quot;,
                &quot;example&quot;: &quot;Miller&quot;,
                &quot;maxLength&quot;: 50,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-262&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-496&gt;&quot;
          },
          {
            &quot;allOf&quot;: [
              {
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
                    &quot;x-kind&quot;: &quot;Organization&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-333&gt;&quot;
                  },
                  {
                    &quot;x-hasSubclass&quot;: [
                      &quot;RealEstateOrganization&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-334&gt;&quot;
                  },
                  {
                    &quot;x-subClassOf&quot;: [
                      &quot;https://schema.org/Organization&quot;
                    ],
                    &quot;properties&quot;: {
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
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-225&gt;&quot;
                      },
                      &quot;availableLanguage&quot;: {
                        &quot;title&quot;: &quot;availableLanguage&quot;,
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;description&quot;: &quot;Please use one of the language codes from the IETF BCP 47 standard.&quot;,
                        &quot;x-range&quot;: &quot;Language&quot;,
                        &quot;items&quot;: {
                          &quot;title&quot;: &quot;Language&quot;,
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;a written or spoken Language&quot;,
                          &quot;x-range&quot;: &quot;Language&quot;,
                          &quot;properties&quot;: {
                            &quot;type&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;Language&quot;,
                              &quot;enum&quot;: [
                                &quot;Language&quot;
                              ],
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-287&gt;&quot;
                            },
                            &quot;name&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;the display name of the language&quot;,
                              &quot;example&quot;: &quot;English&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-288&gt;&quot;
                            },
                            &quot;additionalName&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;BCP 47 language code&quot;,
                              &quot;example&quot;: &quot;en-US&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-289&gt;&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;Language&quot;
                        }
                      },
                      &quot;branchCode&quot;: {
                        &quot;description&quot;: &quot;A short textual code that uniquely identifies a place of business.&quot;,
                        &quot;example&quot;: &quot;for BHHS profile events, see additionalProperty.OfficeId&quot;,
                        &quot;type&quot;: &quot;string&quot;
                      },
                      &quot;certification&quot;: {
                        &quot;x-range&quot;: &quot;Certification&quot;,
                        &quot;description&quot;: &quot;certifications granted to a person or organization&quot;,
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;items&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Certification&quot;,
                            &quot;name&quot;: &quot;E-Agent Certified&quot;,
                            &quot;validFrom&quot;: &quot;2019-06-13T07:00:00.000Z&quot;,
                            &quot;additionalProperty&quot;: {
                              &quot;ceritificationTypeId&quot;: &quot;86afafd3-ac25-4a89-9a6e-bebb3753c4b2&quot;
                            }
                          }
                        }
                      },
                      &quot;contactPoint&quot;: {
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;description&quot;: &quot;a named point of contact - telephone, email, faxNumber, and/or url for the entity&quot;,
                        &quot;x-range&quot;: &quot;ContactPoint&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;ContactPoint&quot;,
                          &quot;name&quot;: &quot;Work&quot;,
                          &quot;telephone&quot;: &quot;800-555-5555&quot;,
                          &quot;faxNumber&quot;: &quot;888-4BA-TMAN&quot;,
                          &quot;email&quot;: &quot;bruce@example.com&quot;,
                          &quot;url&quot;: &quot;https://example.com&quot;
                        },
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-228&gt;&quot;
                      },
                      &quot;email&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;format&quot;: &quot;email&quot;,
                        &quot;description&quot;: &quot;Primary email address.&quot;,
                        &quot;example&quot;: &quot;user@example.com&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-561&gt;&quot;
                      },
                      &quot;faxNumber&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Primary fax number.&quot;,
                        &quot;example&quot;: &quot;(873) 271-4802&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-232&gt;&quot;
                      },
                      &quot;image&quot;: {
                        &quot;description&quot;: &quot;an ImageObject or URI reference to an image of the entity on the web.&quot;,
                        &quot;title&quot;: &quot;image&quot;,
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
                        ]
                      },
                      &quot;logo&quot;: {
                        &quot;description&quot;: &quot;a logo associated with the organization.&quot;,
                        &quot;items&quot;: {
                          &quot;allOf&quot;: [
                            {
                              &quot;type&quot;: &quot;object&quot;,
                              &quot;title&quot;: &quot;DigitalDocument&quot;,
                              &quot;x-range&quot;: &quot;DigitalDocument&quot;,
                              &quot;description&quot;: &quot;an electronic file.&quot;,
                              &quot;properties&quot;: {
                                &quot;type&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;enum&quot;: [
                                    &quot;DigitalDocument&quot;
                                  ],
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-264&gt;&quot;
                                },
                                &quot;id&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;example&quot;: &quot;http://user.example.com/public/logo/archive.zip&quot;,
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-265&gt;&quot;
                                },
                                &quot;name&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;description&quot;: &quot;document name or title&quot;,
                                  &quot;example&quot;: &quot;archive.zip&quot;,
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-266&gt;&quot;
                                },
                                &quot;encodingFormat&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;description&quot;: &quot;[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)&quot;,
                                  &quot;example&quot;: &quot;application/zip&quot;,
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-267&gt;&quot;
                                },
                                &quot;about&quot;: {
                                  &quot;type&quot;: &quot;object&quot;,
                                  &quot;description&quot;: &quot;subject of the Document&quot;,
                                  &quot;x-range&quot;: &quot;Thing&quot;,
                                  &quot;example&quot;: {
                                    &quot;type&quot;: &quot;RealEstateTransaction&quot;,
                                    &quot;identifier&quot;: {
                                      &quot;bmsTransactionId&quot;: &quot;xxxx&quot;
                                    }
                                  },
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-268&gt;&quot;
                                },
                                &quot;url&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;description&quot;: &quot;public URL of the object&quot;,
                                  &quot;example&quot;: &quot;https://example.com&quot;,
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-269&gt;&quot;
                                }
                              },
                              &quot;x-parser-schema-id&quot;: &quot;DigitalDocument&quot;
                            },
                            {
                              &quot;description&quot;: &quot;an associated logo&quot;,
                              &quot;type&quot;: &quot;object&quot;
                            }
                          ],
                          &quot;type&quot;: &quot;object&quot;
                        },
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;x-range&quot;: [
                          &quot;ImageObject&quot;,
                          &quot;DigitalDocument&quot;
                        ]
                      },
                      &quot;name&quot;: {
                        &quot;description&quot;: &quot;Name or DBA.&quot;,
                        &quot;type&quot;: &quot;string&quot;
                      },
                      &quot;parentOrganization&quot;: {
                        &quot;items&quot;: {
                          &quot;format&quot;: &quot;uri&quot;,
                          &quot;type&quot;: &quot;string&quot;
                        },
                        &quot;type&quot;: &quot;array&quot;
                      },
                      &quot;subOrganization&quot;: {
                        &quot;description&quot;: &quot;a child organization&quot;,
                        &quot;x-range&quot;: [
                          &quot;RealEstateOrganization&quot;
                        ],
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;items&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;uri&quot;,
                          &quot;example&quot;: &quot;http://org.example.com/profile/card#me&quot;
                        }
                      },
                      &quot;telephone&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Primary phone number.&quot;,
                        &quot;example&quot;: &quot;+15558675309&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-562&gt;&quot;
                      },
                      &quot;type&quot;: {
                        &quot;enum&quot;: [
                          &quot;Organization&quot;
                        ],
                        &quot;type&quot;: &quot;string&quot;
                      },
                      &quot;url&quot;: {
                        &quot;description&quot;: &quot;primary website/url for the entity.&quot;,
                        &quot;format&quot;: &quot;uri&quot;,
                        &quot;type&quot;: &quot;string&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-335&gt;&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;Organization&quot;
              },
              {
                &quot;title&quot;: &quot;RealEstateOrganization&quot;,
                &quot;description&quot;: &quot;A real estate franchisor, broker or business&quot;,
                &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;description&quot;: &quot;RealEstateOrganzation&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;example&quot;: &quot;RealEstateOrganization&quot;
                  },
                  &quot;areaServed&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;the physical areas that make up the ServiceArea&quot;,
                    &quot;x-range&quot;: [
                      &quot;City&quot;,
                      &quot;PostalCodeArea&quot;
                    ],
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PostalCode&quot;,
                      &quot;postalCode&quot;: &quot;91371&quot;,
                      &quot;addressLocality&quot;: &quot;Woodland Hills&quot;,
                      &quot;addressCounty&quot;: &quot;Los Angeles&quot;,
                      &quot;addressRegion&quot;: &quot;CA&quot;,
                      &quot;addressCountry&quot;: &quot;US&quot;
                    }
                  },
                  &quot;description&quot;: {
                    &quot;example&quot;: &quot;The number on Gotham City Real Estate Company since 1940&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item.&quot;
                  },
                  &quot;parentOrganization&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                    &quot;description&quot;: &quot;A franchisor or affiliate network of which this organization plays a membership role.&quot;,
                    &quot;items&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;format&quot;: &quot;uri&quot;
                    }
                  },
                  &quot;numberOfSubOrganizations&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the number of offices for an affiliate.&quot;
                  },
                  &quot;member&quot;: {
                    &quot;title&quot;: &quot;member&quot;,
                    &quot;description&quot;: &quot;A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.&quot;,
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;x-range&quot;: [
                      &quot;OrganizationRole&quot;,
                      &quot;URI&quot;
                    ],
                    &quot;items&quot;: {
                      &quot;anyOf&quot;: [
                        {
                          &quot;title&quot;: &quot;OrganizationRole&quot;,
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;describes a role played by a member and a group or organization.&quot;,
                          &quot;properties&quot;: {
                            &quot;type&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;a role played by the member in the memberOf group&quot;,
                              &quot;enum&quot;: [
                                &quot;OrganizationRole&quot;
                              ],
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-316&gt;&quot;
                            },
                            &quot;roleName&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;the role name&quot;,
                              &quot;example&quot;: &quot;Owner&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-317&gt;&quot;
                            },
                            &quot;memberOf&quot;: {
                              &quot;description&quot;: &quot;the org or group where the role is performed&quot;,
                              &quot;type&quot;: &quot;object&quot;,
                              &quot;example&quot;: {
                                &quot;type&quot;: &quot;RealEstateOrganization&quot;,
                                &quot;id&quot;: &quot;http://orgid.example.com/profile/card#me&quot;
                              },
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-318&gt;&quot;
                            },
                            &quot;member&quot;: {
                              &quot;description&quot;: &quot;member object or id&quot;,
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;uri&quot;,
                              &quot;example&quot;: &quot;https://memberid.example.com/profile/card#me&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-319&gt;&quot;
                            },
                            &quot;startDate&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;date-time&quot;,
                              &quot;description&quot;: &quot;date the member began performing this role&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-320&gt;&quot;
                            },
                            &quot;endDate&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;date-time&quot;,
                              &quot;description&quot;: &quot;date the member stopped performing the role&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-321&gt;&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;OrganizationRole&quot;
                        },
                        {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;uri&quot;
                        }
                      ]
                    }
                  },
                  &quot;memberOf&quot;: {
                    &quot;x-range&quot;: [
                      &quot;OrganizationRole&quot;,
                      &quot;MLSMembership&quot;
                    ],
                    &quot;description&quot;: &quot;An Organization (or ProgramMembership) to which this Person or Organization belongs.&quot;,
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;items&quot;: {
                      &quot;allOf&quot;: [
                        {
                          &quot;title&quot;: &quot;OrganizationRole&quot;,
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;describes a role played by a member and a group or organization.&quot;,
                          &quot;properties&quot;: {
                            &quot;type&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;a role played by the member in the memberOf group&quot;,
                              &quot;enum&quot;: [
                                &quot;OrganizationRole&quot;
                              ],
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-316&gt;&quot;
                            },
                            &quot;roleName&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;the role name&quot;,
                              &quot;example&quot;: &quot;Owner&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-317&gt;&quot;
                            },
                            &quot;memberOf&quot;: {
                              &quot;description&quot;: &quot;the org or group where the role is performed&quot;,
                              &quot;type&quot;: &quot;object&quot;,
                              &quot;example&quot;: {
                                &quot;type&quot;: &quot;RealEstateOrganization&quot;,
                                &quot;id&quot;: &quot;http://orgid.example.com/profile/card#me&quot;
                              },
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-318&gt;&quot;
                            },
                            &quot;member&quot;: {
                              &quot;description&quot;: &quot;member object or id&quot;,
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;uri&quot;,
                              &quot;example&quot;: &quot;https://memberid.example.com/profile/card#me&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-319&gt;&quot;
                            },
                            &quot;startDate&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;date-time&quot;,
                              &quot;description&quot;: &quot;date the member began performing this role&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-320&gt;&quot;
                            },
                            &quot;endDate&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;date-time&quot;,
                              &quot;description&quot;: &quot;date the member stopped performing the role&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-321&gt;&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;OrganizationRole&quot;
                        },
                        {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;title&quot;: &quot;MLSMembership&quot;,
                          &quot;description&quot;: &quot;a membership relationship&quot;,
                          &quot;properties&quot;: {
                            &quot;type&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;an MLS member relationship&quot;,
                              &quot;enum&quot;: [
                                &quot;MLSMembership&quot;
                              ],
                              &quot;example&quot;: &quot;MLSMembership&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-323&gt;&quot;
                            },
                            &quot;roleName&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;example&quot;: &quot;MLSMember&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-324&gt;&quot;
                            },
                            &quot;memberOf&quot;: {
                              &quot;type&quot;: &quot;object&quot;,
                              &quot;x-range&quot;: &quot;MultipleListingService&quot;,
                              &quot;example&quot;: {
                                &quot;type&quot;: &quot;MultipleListingService&quot;,
                                &quot;name&quot;: &quot;GreatScottMLS&quot;
                              },
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-325&gt;&quot;
                            },
                            &quot;member&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;uri&quot;,
                              &quot;example&quot;: &quot;https://{agent}.example.com/profile/card#me&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-326&gt;&quot;
                            },
                            &quot;memberId&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;the user&#39;s MLSID&quot;,
                              &quot;example&quot;: &quot;memberid123&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-327&gt;&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-322&gt;&quot;
                        }
                      ],
                      &quot;x-parser-schema-id&quot;: &quot;MLSMembership&quot;
                    }
                  },
                  &quot;permit&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;x-range&quot;: &quot;RealEstateLicense&quot;,
                    &quot;items&quot;: {
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;example&quot;: {
                        &quot;type&quot;: &quot;RealEstateLicense&quot;,
                        &quot;name&quot;: &quot;CA-DRE# 02068375&quot;,
                        &quot;identifier&quot;: {
                          &quot;type&quot;: &quot;PropertyValue&quot;,
                          &quot;name&quot;: &quot;CA-DRE&quot;,
                          &quot;value&quot;: &quot;02068375&quot;
                        },
                        &quot;issuedBy&quot;: {
                          &quot;type&quot;: &quot;State&quot;,
                          &quot;name&quot;: &quot;California&quot;
                        },
                        &quot;issuedThrough&quot;: {
                          &quot;type&quot;: &quot;Service&quot;,
                          &quot;name&quot;: &quot;California Department of Real Estate&quot;
                        },
                        &quot;validIn&quot;: {
                          &quot;type&quot;: &quot;State&quot;,
                          &quot;name&quot;: &quot;California&quot;
                        },
                        &quot;validFrom&quot;: &quot;2019-07-07T10:55:02Z&quot;,
                        &quot;validUntil&quot;: &quot;2019-07-07T10:55:02Z&quot;
                      }
                    }
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-497&gt;&quot;
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;RealEstateOrganization&quot;
          },
          {
            &quot;description&quot;: &quot;A real estate agent&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-498&gt;&quot;
          },
          {
            &quot;properties&quot;: {
              &quot;description&quot;: {
                &quot;example&quot;: &quot;The leading Gotham City Real Estate Agent.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-500&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                &quot;example&quot;: {
                  &quot;ContactID&quot;: &quot;1234567&quot;
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-501&gt;&quot;
              },
              &quot;jobTitle&quot;: {
                &quot;description&quot;: &quot;agent&#39;s job titles&quot;,
                &quot;items&quot;: {
                  &quot;example&quot;: [
                    &quot;Accounting Department&quot;,
                    &quot;Awards Coordinator&quot;
                  ],
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-503&gt;&quot;
                },
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-502&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;example&quot;: &quot;Louis Armstrong&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-504&gt;&quot;
              },
              &quot;givenName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;First Name of a person&quot;,
                &quot;example&quot;: &quot;Glenn&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-505&gt;&quot;
              },
              &quot;familyName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Last Name of a person&quot;,
                &quot;example&quot;: &quot;Miller&quot;,
                &quot;maxLength&quot;: 50,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-506&gt;&quot;
              },
              &quot;additionalName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.&quot;,
                &quot;example&quot;: &quot;ambassador satch,pops,satchmo&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-230&gt;&quot;
              },
              &quot;parentOrganization&quot;: {
                &quot;description&quot;: &quot;URI reference to the agent&#39;s office. For teams, this can be a reference to the team leader/primary profile.&quot;,
                &quot;example&quot;: [
                  &quot;http://office-real-estate.example.com/&quot;,
                  &quot;http://batmanandrobinteam.example.com/&quot;
                ],
                &quot;items&quot;: {
                  &quot;format&quot;: &quot;uri&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-508&gt;&quot;
                },
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateOffice&quot;,
                  &quot;RealEstateAgent&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-507&gt;&quot;
              },
              &quot;sameAs&quot;: {
                &quot;description&quot;: &quot;key/value id assigned to the record&quot;,
                &quot;example&quot;: {
                  &quot;bmsID&quot;: &quot;1234&quot;
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-509&gt;&quot;
              },
              &quot;subOrganization&quot;: {
                &quot;description&quot;: &quot;for teams: URI reference to a team member&quot;,
                &quot;items&quot;: {
                  &quot;format&quot;: &quot;uri&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-511&gt;&quot;
                },
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-range&quot;: &quot;RealEstateAgent&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-510&gt;&quot;
              },
              &quot;type&quot;: {
                &quot;description&quot;: &quot;RealEstateAgent&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateAgent&quot;
                ],
                &quot;example&quot;: &quot;RealEstateAgent&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-512&gt;&quot;
              }
            },
            &quot;title&quot;: &quot;RealEstateAgent&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-499&gt;&quot;
          }
        ],
        &quot;description&quot;: &quot;a real estate agent or team.&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;x-parser-schema-id&quot;: &quot;RealEstateAgent&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;2&gt;
required = 
path = RealEstateAgent




prop = {
  &quot;_json&quot;: {
    &quot;description&quot;: &quot;A real estate agent&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-498&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;allOf&quot;: [
          {
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateAgent&quot;
                ],
                &quot;description&quot;: &quot;RealEstateAgent&quot;
              },
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;
              },
              &quot;givenName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;First Name of a person&quot;,
                &quot;example&quot;: &quot;Glenn&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
              },
              &quot;familyName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Last Name of a person&quot;,
                &quot;example&quot;: &quot;Miller&quot;,
                &quot;maxLength&quot;: 50,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-262&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-496&gt;&quot;
          },
          {
            &quot;allOf&quot;: [
              {
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
                    &quot;x-kind&quot;: &quot;Organization&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-333&gt;&quot;
                  },
                  {
                    &quot;x-hasSubclass&quot;: [
                      &quot;RealEstateOrganization&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-334&gt;&quot;
                  },
                  {
                    &quot;x-subClassOf&quot;: [
                      &quot;https://schema.org/Organization&quot;
                    ],
                    &quot;properties&quot;: {
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
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-225&gt;&quot;
                      },
                      &quot;availableLanguage&quot;: {
                        &quot;title&quot;: &quot;availableLanguage&quot;,
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;description&quot;: &quot;Please use one of the language codes from the IETF BCP 47 standard.&quot;,
                        &quot;x-range&quot;: &quot;Language&quot;,
                        &quot;items&quot;: {
                          &quot;title&quot;: &quot;Language&quot;,
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;a written or spoken Language&quot;,
                          &quot;x-range&quot;: &quot;Language&quot;,
                          &quot;properties&quot;: {
                            &quot;type&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;Language&quot;,
                              &quot;enum&quot;: [
                                &quot;Language&quot;
                              ],
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-287&gt;&quot;
                            },
                            &quot;name&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;the display name of the language&quot;,
                              &quot;example&quot;: &quot;English&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-288&gt;&quot;
                            },
                            &quot;additionalName&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;BCP 47 language code&quot;,
                              &quot;example&quot;: &quot;en-US&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-289&gt;&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;Language&quot;
                        }
                      },
                      &quot;branchCode&quot;: {
                        &quot;description&quot;: &quot;A short textual code that uniquely identifies a place of business.&quot;,
                        &quot;example&quot;: &quot;for BHHS profile events, see additionalProperty.OfficeId&quot;,
                        &quot;type&quot;: &quot;string&quot;
                      },
                      &quot;certification&quot;: {
                        &quot;x-range&quot;: &quot;Certification&quot;,
                        &quot;description&quot;: &quot;certifications granted to a person or organization&quot;,
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;items&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Certification&quot;,
                            &quot;name&quot;: &quot;E-Agent Certified&quot;,
                            &quot;validFrom&quot;: &quot;2019-06-13T07:00:00.000Z&quot;,
                            &quot;additionalProperty&quot;: {
                              &quot;ceritificationTypeId&quot;: &quot;86afafd3-ac25-4a89-9a6e-bebb3753c4b2&quot;
                            }
                          }
                        }
                      },
                      &quot;contactPoint&quot;: {
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;description&quot;: &quot;a named point of contact - telephone, email, faxNumber, and/or url for the entity&quot;,
                        &quot;x-range&quot;: &quot;ContactPoint&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;ContactPoint&quot;,
                          &quot;name&quot;: &quot;Work&quot;,
                          &quot;telephone&quot;: &quot;800-555-5555&quot;,
                          &quot;faxNumber&quot;: &quot;888-4BA-TMAN&quot;,
                          &quot;email&quot;: &quot;bruce@example.com&quot;,
                          &quot;url&quot;: &quot;https://example.com&quot;
                        },
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-228&gt;&quot;
                      },
                      &quot;email&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;format&quot;: &quot;email&quot;,
                        &quot;description&quot;: &quot;Primary email address.&quot;,
                        &quot;example&quot;: &quot;user@example.com&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-561&gt;&quot;
                      },
                      &quot;faxNumber&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Primary fax number.&quot;,
                        &quot;example&quot;: &quot;(873) 271-4802&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-232&gt;&quot;
                      },
                      &quot;image&quot;: {
                        &quot;description&quot;: &quot;an ImageObject or URI reference to an image of the entity on the web.&quot;,
                        &quot;title&quot;: &quot;image&quot;,
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
                        ]
                      },
                      &quot;logo&quot;: {
                        &quot;description&quot;: &quot;a logo associated with the organization.&quot;,
                        &quot;items&quot;: {
                          &quot;allOf&quot;: [
                            {
                              &quot;type&quot;: &quot;object&quot;,
                              &quot;title&quot;: &quot;DigitalDocument&quot;,
                              &quot;x-range&quot;: &quot;DigitalDocument&quot;,
                              &quot;description&quot;: &quot;an electronic file.&quot;,
                              &quot;properties&quot;: {
                                &quot;type&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;enum&quot;: [
                                    &quot;DigitalDocument&quot;
                                  ],
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-264&gt;&quot;
                                },
                                &quot;id&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;example&quot;: &quot;http://user.example.com/public/logo/archive.zip&quot;,
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-265&gt;&quot;
                                },
                                &quot;name&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;description&quot;: &quot;document name or title&quot;,
                                  &quot;example&quot;: &quot;archive.zip&quot;,
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-266&gt;&quot;
                                },
                                &quot;encodingFormat&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;description&quot;: &quot;[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)&quot;,
                                  &quot;example&quot;: &quot;application/zip&quot;,
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-267&gt;&quot;
                                },
                                &quot;about&quot;: {
                                  &quot;type&quot;: &quot;object&quot;,
                                  &quot;description&quot;: &quot;subject of the Document&quot;,
                                  &quot;x-range&quot;: &quot;Thing&quot;,
                                  &quot;example&quot;: {
                                    &quot;type&quot;: &quot;RealEstateTransaction&quot;,
                                    &quot;identifier&quot;: {
                                      &quot;bmsTransactionId&quot;: &quot;xxxx&quot;
                                    }
                                  },
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-268&gt;&quot;
                                },
                                &quot;url&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;description&quot;: &quot;public URL of the object&quot;,
                                  &quot;example&quot;: &quot;https://example.com&quot;,
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-269&gt;&quot;
                                }
                              },
                              &quot;x-parser-schema-id&quot;: &quot;DigitalDocument&quot;
                            },
                            {
                              &quot;description&quot;: &quot;an associated logo&quot;,
                              &quot;type&quot;: &quot;object&quot;
                            }
                          ],
                          &quot;type&quot;: &quot;object&quot;
                        },
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;x-range&quot;: [
                          &quot;ImageObject&quot;,
                          &quot;DigitalDocument&quot;
                        ]
                      },
                      &quot;name&quot;: {
                        &quot;description&quot;: &quot;Name or DBA.&quot;,
                        &quot;type&quot;: &quot;string&quot;
                      },
                      &quot;parentOrganization&quot;: {
                        &quot;items&quot;: {
                          &quot;format&quot;: &quot;uri&quot;,
                          &quot;type&quot;: &quot;string&quot;
                        },
                        &quot;type&quot;: &quot;array&quot;
                      },
                      &quot;subOrganization&quot;: {
                        &quot;description&quot;: &quot;a child organization&quot;,
                        &quot;x-range&quot;: [
                          &quot;RealEstateOrganization&quot;
                        ],
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;items&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;uri&quot;,
                          &quot;example&quot;: &quot;http://org.example.com/profile/card#me&quot;
                        }
                      },
                      &quot;telephone&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Primary phone number.&quot;,
                        &quot;example&quot;: &quot;+15558675309&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-562&gt;&quot;
                      },
                      &quot;type&quot;: {
                        &quot;enum&quot;: [
                          &quot;Organization&quot;
                        ],
                        &quot;type&quot;: &quot;string&quot;
                      },
                      &quot;url&quot;: {
                        &quot;description&quot;: &quot;primary website/url for the entity.&quot;,
                        &quot;format&quot;: &quot;uri&quot;,
                        &quot;type&quot;: &quot;string&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-335&gt;&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;Organization&quot;
              },
              {
                &quot;title&quot;: &quot;RealEstateOrganization&quot;,
                &quot;description&quot;: &quot;A real estate franchisor, broker or business&quot;,
                &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;description&quot;: &quot;RealEstateOrganzation&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;example&quot;: &quot;RealEstateOrganization&quot;
                  },
                  &quot;areaServed&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;the physical areas that make up the ServiceArea&quot;,
                    &quot;x-range&quot;: [
                      &quot;City&quot;,
                      &quot;PostalCodeArea&quot;
                    ],
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PostalCode&quot;,
                      &quot;postalCode&quot;: &quot;91371&quot;,
                      &quot;addressLocality&quot;: &quot;Woodland Hills&quot;,
                      &quot;addressCounty&quot;: &quot;Los Angeles&quot;,
                      &quot;addressRegion&quot;: &quot;CA&quot;,
                      &quot;addressCountry&quot;: &quot;US&quot;
                    }
                  },
                  &quot;description&quot;: {
                    &quot;example&quot;: &quot;The number on Gotham City Real Estate Company since 1940&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item.&quot;
                  },
                  &quot;parentOrganization&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                    &quot;description&quot;: &quot;A franchisor or affiliate network of which this organization plays a membership role.&quot;,
                    &quot;items&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;format&quot;: &quot;uri&quot;
                    }
                  },
                  &quot;numberOfSubOrganizations&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the number of offices for an affiliate.&quot;
                  },
                  &quot;member&quot;: {
                    &quot;title&quot;: &quot;member&quot;,
                    &quot;description&quot;: &quot;A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.&quot;,
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;x-range&quot;: [
                      &quot;OrganizationRole&quot;,
                      &quot;URI&quot;
                    ],
                    &quot;items&quot;: {
                      &quot;anyOf&quot;: [
                        {
                          &quot;title&quot;: &quot;OrganizationRole&quot;,
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;describes a role played by a member and a group or organization.&quot;,
                          &quot;properties&quot;: {
                            &quot;type&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;a role played by the member in the memberOf group&quot;,
                              &quot;enum&quot;: [
                                &quot;OrganizationRole&quot;
                              ],
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-316&gt;&quot;
                            },
                            &quot;roleName&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;the role name&quot;,
                              &quot;example&quot;: &quot;Owner&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-317&gt;&quot;
                            },
                            &quot;memberOf&quot;: {
                              &quot;description&quot;: &quot;the org or group where the role is performed&quot;,
                              &quot;type&quot;: &quot;object&quot;,
                              &quot;example&quot;: {
                                &quot;type&quot;: &quot;RealEstateOrganization&quot;,
                                &quot;id&quot;: &quot;http://orgid.example.com/profile/card#me&quot;
                              },
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-318&gt;&quot;
                            },
                            &quot;member&quot;: {
                              &quot;description&quot;: &quot;member object or id&quot;,
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;uri&quot;,
                              &quot;example&quot;: &quot;https://memberid.example.com/profile/card#me&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-319&gt;&quot;
                            },
                            &quot;startDate&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;date-time&quot;,
                              &quot;description&quot;: &quot;date the member began performing this role&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-320&gt;&quot;
                            },
                            &quot;endDate&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;date-time&quot;,
                              &quot;description&quot;: &quot;date the member stopped performing the role&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-321&gt;&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;OrganizationRole&quot;
                        },
                        {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;uri&quot;
                        }
                      ]
                    }
                  },
                  &quot;memberOf&quot;: {
                    &quot;x-range&quot;: [
                      &quot;OrganizationRole&quot;,
                      &quot;MLSMembership&quot;
                    ],
                    &quot;description&quot;: &quot;An Organization (or ProgramMembership) to which this Person or Organization belongs.&quot;,
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;items&quot;: {
                      &quot;allOf&quot;: [
                        {
                          &quot;title&quot;: &quot;OrganizationRole&quot;,
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;describes a role played by a member and a group or organization.&quot;,
                          &quot;properties&quot;: {
                            &quot;type&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;a role played by the member in the memberOf group&quot;,
                              &quot;enum&quot;: [
                                &quot;OrganizationRole&quot;
                              ],
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-316&gt;&quot;
                            },
                            &quot;roleName&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;the role name&quot;,
                              &quot;example&quot;: &quot;Owner&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-317&gt;&quot;
                            },
                            &quot;memberOf&quot;: {
                              &quot;description&quot;: &quot;the org or group where the role is performed&quot;,
                              &quot;type&quot;: &quot;object&quot;,
                              &quot;example&quot;: {
                                &quot;type&quot;: &quot;RealEstateOrganization&quot;,
                                &quot;id&quot;: &quot;http://orgid.example.com/profile/card#me&quot;
                              },
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-318&gt;&quot;
                            },
                            &quot;member&quot;: {
                              &quot;description&quot;: &quot;member object or id&quot;,
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;uri&quot;,
                              &quot;example&quot;: &quot;https://memberid.example.com/profile/card#me&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-319&gt;&quot;
                            },
                            &quot;startDate&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;date-time&quot;,
                              &quot;description&quot;: &quot;date the member began performing this role&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-320&gt;&quot;
                            },
                            &quot;endDate&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;date-time&quot;,
                              &quot;description&quot;: &quot;date the member stopped performing the role&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-321&gt;&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;OrganizationRole&quot;
                        },
                        {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;title&quot;: &quot;MLSMembership&quot;,
                          &quot;description&quot;: &quot;a membership relationship&quot;,
                          &quot;properties&quot;: {
                            &quot;type&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;an MLS member relationship&quot;,
                              &quot;enum&quot;: [
                                &quot;MLSMembership&quot;
                              ],
                              &quot;example&quot;: &quot;MLSMembership&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-323&gt;&quot;
                            },
                            &quot;roleName&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;example&quot;: &quot;MLSMember&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-324&gt;&quot;
                            },
                            &quot;memberOf&quot;: {
                              &quot;type&quot;: &quot;object&quot;,
                              &quot;x-range&quot;: &quot;MultipleListingService&quot;,
                              &quot;example&quot;: {
                                &quot;type&quot;: &quot;MultipleListingService&quot;,
                                &quot;name&quot;: &quot;GreatScottMLS&quot;
                              },
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-325&gt;&quot;
                            },
                            &quot;member&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;uri&quot;,
                              &quot;example&quot;: &quot;https://{agent}.example.com/profile/card#me&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-326&gt;&quot;
                            },
                            &quot;memberId&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;the user&#39;s MLSID&quot;,
                              &quot;example&quot;: &quot;memberid123&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-327&gt;&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-322&gt;&quot;
                        }
                      ],
                      &quot;x-parser-schema-id&quot;: &quot;MLSMembership&quot;
                    }
                  },
                  &quot;permit&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;x-range&quot;: &quot;RealEstateLicense&quot;,
                    &quot;items&quot;: {
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;example&quot;: {
                        &quot;type&quot;: &quot;RealEstateLicense&quot;,
                        &quot;name&quot;: &quot;CA-DRE# 02068375&quot;,
                        &quot;identifier&quot;: {
                          &quot;type&quot;: &quot;PropertyValue&quot;,
                          &quot;name&quot;: &quot;CA-DRE&quot;,
                          &quot;value&quot;: &quot;02068375&quot;
                        },
                        &quot;issuedBy&quot;: {
                          &quot;type&quot;: &quot;State&quot;,
                          &quot;name&quot;: &quot;California&quot;
                        },
                        &quot;issuedThrough&quot;: {
                          &quot;type&quot;: &quot;Service&quot;,
                          &quot;name&quot;: &quot;California Department of Real Estate&quot;
                        },
                        &quot;validIn&quot;: {
                          &quot;type&quot;: &quot;State&quot;,
                          &quot;name&quot;: &quot;California&quot;
                        },
                        &quot;validFrom&quot;: &quot;2019-07-07T10:55:02Z&quot;,
                        &quot;validUntil&quot;: &quot;2019-07-07T10:55:02Z&quot;
                      }
                    }
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-497&gt;&quot;
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;RealEstateOrganization&quot;
          },
          {
            &quot;description&quot;: &quot;A real estate agent&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-498&gt;&quot;
          },
          {
            &quot;properties&quot;: {
              &quot;description&quot;: {
                &quot;example&quot;: &quot;The leading Gotham City Real Estate Agent.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-500&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                &quot;example&quot;: {
                  &quot;ContactID&quot;: &quot;1234567&quot;
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-501&gt;&quot;
              },
              &quot;jobTitle&quot;: {
                &quot;description&quot;: &quot;agent&#39;s job titles&quot;,
                &quot;items&quot;: {
                  &quot;example&quot;: [
                    &quot;Accounting Department&quot;,
                    &quot;Awards Coordinator&quot;
                  ],
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-503&gt;&quot;
                },
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-502&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;example&quot;: &quot;Louis Armstrong&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-504&gt;&quot;
              },
              &quot;givenName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;First Name of a person&quot;,
                &quot;example&quot;: &quot;Glenn&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-505&gt;&quot;
              },
              &quot;familyName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Last Name of a person&quot;,
                &quot;example&quot;: &quot;Miller&quot;,
                &quot;maxLength&quot;: 50,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-506&gt;&quot;
              },
              &quot;additionalName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.&quot;,
                &quot;example&quot;: &quot;ambassador satch,pops,satchmo&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-230&gt;&quot;
              },
              &quot;parentOrganization&quot;: {
                &quot;description&quot;: &quot;URI reference to the agent&#39;s office. For teams, this can be a reference to the team leader/primary profile.&quot;,
                &quot;example&quot;: [
                  &quot;http://office-real-estate.example.com/&quot;,
                  &quot;http://batmanandrobinteam.example.com/&quot;
                ],
                &quot;items&quot;: {
                  &quot;format&quot;: &quot;uri&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-508&gt;&quot;
                },
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateOffice&quot;,
                  &quot;RealEstateAgent&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-507&gt;&quot;
              },
              &quot;sameAs&quot;: {
                &quot;description&quot;: &quot;key/value id assigned to the record&quot;,
                &quot;example&quot;: {
                  &quot;bmsID&quot;: &quot;1234&quot;
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-509&gt;&quot;
              },
              &quot;subOrganization&quot;: {
                &quot;description&quot;: &quot;for teams: URI reference to a team member&quot;,
                &quot;items&quot;: {
                  &quot;format&quot;: &quot;uri&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-511&gt;&quot;
                },
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-range&quot;: &quot;RealEstateAgent&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-510&gt;&quot;
              },
              &quot;type&quot;: {
                &quot;description&quot;: &quot;RealEstateAgent&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateAgent&quot;
                ],
                &quot;example&quot;: &quot;RealEstateAgent&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-512&gt;&quot;
              }
            },
            &quot;title&quot;: &quot;RealEstateAgent&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-499&gt;&quot;
          }
        ],
        &quot;description&quot;: &quot;a real estate agent or team.&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;x-parser-schema-id&quot;: &quot;RealEstateAgent&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;3&gt;
required = 
path = RealEstateAgent




prop = {
  &quot;_json&quot;: {
    &quot;properties&quot;: {
      &quot;description&quot;: {
        &quot;example&quot;: &quot;The leading Gotham City Real Estate Agent.&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-500&gt;&quot;
      },
      &quot;identifier&quot;: {
        &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
        &quot;example&quot;: {
          &quot;ContactID&quot;: &quot;1234567&quot;
        },
        &quot;type&quot;: &quot;object&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-501&gt;&quot;
      },
      &quot;jobTitle&quot;: {
        &quot;description&quot;: &quot;agent&#39;s job titles&quot;,
        &quot;items&quot;: {
          &quot;example&quot;: [
            &quot;Accounting Department&quot;,
            &quot;Awards Coordinator&quot;
          ],
          &quot;type&quot;: &quot;string&quot;,
          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-503&gt;&quot;
        },
        &quot;type&quot;: &quot;array&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-502&gt;&quot;
      },
      &quot;name&quot;: {
        &quot;example&quot;: &quot;Louis Armstrong&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-504&gt;&quot;
      },
      &quot;givenName&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;First Name of a person&quot;,
        &quot;example&quot;: &quot;Glenn&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-505&gt;&quot;
      },
      &quot;familyName&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;Last Name of a person&quot;,
        &quot;example&quot;: &quot;Miller&quot;,
        &quot;maxLength&quot;: 50,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-506&gt;&quot;
      },
      &quot;additionalName&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.&quot;,
        &quot;example&quot;: &quot;ambassador satch,pops,satchmo&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-230&gt;&quot;
      },
      &quot;parentOrganization&quot;: {
        &quot;description&quot;: &quot;URI reference to the agent&#39;s office. For teams, this can be a reference to the team leader/primary profile.&quot;,
        &quot;example&quot;: [
          &quot;http://office-real-estate.example.com/&quot;,
          &quot;http://batmanandrobinteam.example.com/&quot;
        ],
        &quot;items&quot;: {
          &quot;format&quot;: &quot;uri&quot;,
          &quot;type&quot;: &quot;string&quot;,
          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-508&gt;&quot;
        },
        &quot;type&quot;: &quot;array&quot;,
        &quot;x-range&quot;: [
          &quot;RealEstateOffice&quot;,
          &quot;RealEstateAgent&quot;
        ],
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-507&gt;&quot;
      },
      &quot;sameAs&quot;: {
        &quot;description&quot;: &quot;key/value id assigned to the record&quot;,
        &quot;example&quot;: {
          &quot;bmsID&quot;: &quot;1234&quot;
        },
        &quot;type&quot;: &quot;object&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-509&gt;&quot;
      },
      &quot;subOrganization&quot;: {
        &quot;description&quot;: &quot;for teams: URI reference to a team member&quot;,
        &quot;items&quot;: {
          &quot;format&quot;: &quot;uri&quot;,
          &quot;type&quot;: &quot;string&quot;,
          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-511&gt;&quot;
        },
        &quot;type&quot;: &quot;array&quot;,
        &quot;x-range&quot;: &quot;RealEstateAgent&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-510&gt;&quot;
      },
      &quot;type&quot;: {
        &quot;description&quot;: &quot;RealEstateAgent&quot;,
        &quot;enum&quot;: [
          &quot;RealEstateAgent&quot;
        ],
        &quot;example&quot;: &quot;RealEstateAgent&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-512&gt;&quot;
      }
    },
    &quot;title&quot;: &quot;RealEstateAgent&quot;,
    &quot;type&quot;: &quot;object&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-499&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;allOf&quot;: [
          {
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateAgent&quot;
                ],
                &quot;description&quot;: &quot;RealEstateAgent&quot;
              },
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;Linked-Data URI (@id)&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-198&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;
              },
              &quot;givenName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;First Name of a person&quot;,
                &quot;example&quot;: &quot;Glenn&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
              },
              &quot;familyName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Last Name of a person&quot;,
                &quot;example&quot;: &quot;Miller&quot;,
                &quot;maxLength&quot;: 50,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-262&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-496&gt;&quot;
          },
          {
            &quot;allOf&quot;: [
              {
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
                    &quot;x-kind&quot;: &quot;Organization&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-333&gt;&quot;
                  },
                  {
                    &quot;x-hasSubclass&quot;: [
                      &quot;RealEstateOrganization&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-334&gt;&quot;
                  },
                  {
                    &quot;x-subClassOf&quot;: [
                      &quot;https://schema.org/Organization&quot;
                    ],
                    &quot;properties&quot;: {
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
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-225&gt;&quot;
                      },
                      &quot;availableLanguage&quot;: {
                        &quot;title&quot;: &quot;availableLanguage&quot;,
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;description&quot;: &quot;Please use one of the language codes from the IETF BCP 47 standard.&quot;,
                        &quot;x-range&quot;: &quot;Language&quot;,
                        &quot;items&quot;: {
                          &quot;title&quot;: &quot;Language&quot;,
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;a written or spoken Language&quot;,
                          &quot;x-range&quot;: &quot;Language&quot;,
                          &quot;properties&quot;: {
                            &quot;type&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;Language&quot;,
                              &quot;enum&quot;: [
                                &quot;Language&quot;
                              ],
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-287&gt;&quot;
                            },
                            &quot;name&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;the display name of the language&quot;,
                              &quot;example&quot;: &quot;English&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-288&gt;&quot;
                            },
                            &quot;additionalName&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;BCP 47 language code&quot;,
                              &quot;example&quot;: &quot;en-US&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-289&gt;&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;Language&quot;
                        }
                      },
                      &quot;branchCode&quot;: {
                        &quot;description&quot;: &quot;A short textual code that uniquely identifies a place of business.&quot;,
                        &quot;example&quot;: &quot;for BHHS profile events, see additionalProperty.OfficeId&quot;,
                        &quot;type&quot;: &quot;string&quot;
                      },
                      &quot;certification&quot;: {
                        &quot;x-range&quot;: &quot;Certification&quot;,
                        &quot;description&quot;: &quot;certifications granted to a person or organization&quot;,
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;items&quot;: {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;example&quot;: {
                            &quot;type&quot;: &quot;Certification&quot;,
                            &quot;name&quot;: &quot;E-Agent Certified&quot;,
                            &quot;validFrom&quot;: &quot;2019-06-13T07:00:00.000Z&quot;,
                            &quot;additionalProperty&quot;: {
                              &quot;ceritificationTypeId&quot;: &quot;86afafd3-ac25-4a89-9a6e-bebb3753c4b2&quot;
                            }
                          }
                        }
                      },
                      &quot;contactPoint&quot;: {
                        &quot;type&quot;: &quot;object&quot;,
                        &quot;description&quot;: &quot;a named point of contact - telephone, email, faxNumber, and/or url for the entity&quot;,
                        &quot;x-range&quot;: &quot;ContactPoint&quot;,
                        &quot;example&quot;: {
                          &quot;type&quot;: &quot;ContactPoint&quot;,
                          &quot;name&quot;: &quot;Work&quot;,
                          &quot;telephone&quot;: &quot;800-555-5555&quot;,
                          &quot;faxNumber&quot;: &quot;888-4BA-TMAN&quot;,
                          &quot;email&quot;: &quot;bruce@example.com&quot;,
                          &quot;url&quot;: &quot;https://example.com&quot;
                        },
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-228&gt;&quot;
                      },
                      &quot;email&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;format&quot;: &quot;email&quot;,
                        &quot;description&quot;: &quot;Primary email address.&quot;,
                        &quot;example&quot;: &quot;user@example.com&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-561&gt;&quot;
                      },
                      &quot;faxNumber&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Primary fax number.&quot;,
                        &quot;example&quot;: &quot;(873) 271-4802&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-232&gt;&quot;
                      },
                      &quot;image&quot;: {
                        &quot;description&quot;: &quot;an ImageObject or URI reference to an image of the entity on the web.&quot;,
                        &quot;title&quot;: &quot;image&quot;,
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
                        ]
                      },
                      &quot;logo&quot;: {
                        &quot;description&quot;: &quot;a logo associated with the organization.&quot;,
                        &quot;items&quot;: {
                          &quot;allOf&quot;: [
                            {
                              &quot;type&quot;: &quot;object&quot;,
                              &quot;title&quot;: &quot;DigitalDocument&quot;,
                              &quot;x-range&quot;: &quot;DigitalDocument&quot;,
                              &quot;description&quot;: &quot;an electronic file.&quot;,
                              &quot;properties&quot;: {
                                &quot;type&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;enum&quot;: [
                                    &quot;DigitalDocument&quot;
                                  ],
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-264&gt;&quot;
                                },
                                &quot;id&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;example&quot;: &quot;http://user.example.com/public/logo/archive.zip&quot;,
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-265&gt;&quot;
                                },
                                &quot;name&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;description&quot;: &quot;document name or title&quot;,
                                  &quot;example&quot;: &quot;archive.zip&quot;,
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-266&gt;&quot;
                                },
                                &quot;encodingFormat&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;description&quot;: &quot;[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)&quot;,
                                  &quot;example&quot;: &quot;application/zip&quot;,
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-267&gt;&quot;
                                },
                                &quot;about&quot;: {
                                  &quot;type&quot;: &quot;object&quot;,
                                  &quot;description&quot;: &quot;subject of the Document&quot;,
                                  &quot;x-range&quot;: &quot;Thing&quot;,
                                  &quot;example&quot;: {
                                    &quot;type&quot;: &quot;RealEstateTransaction&quot;,
                                    &quot;identifier&quot;: {
                                      &quot;bmsTransactionId&quot;: &quot;xxxx&quot;
                                    }
                                  },
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-268&gt;&quot;
                                },
                                &quot;url&quot;: {
                                  &quot;type&quot;: &quot;string&quot;,
                                  &quot;description&quot;: &quot;public URL of the object&quot;,
                                  &quot;example&quot;: &quot;https://example.com&quot;,
                                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-269&gt;&quot;
                                }
                              },
                              &quot;x-parser-schema-id&quot;: &quot;DigitalDocument&quot;
                            },
                            {
                              &quot;description&quot;: &quot;an associated logo&quot;,
                              &quot;type&quot;: &quot;object&quot;
                            }
                          ],
                          &quot;type&quot;: &quot;object&quot;
                        },
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;x-range&quot;: [
                          &quot;ImageObject&quot;,
                          &quot;DigitalDocument&quot;
                        ]
                      },
                      &quot;name&quot;: {
                        &quot;description&quot;: &quot;Name or DBA.&quot;,
                        &quot;type&quot;: &quot;string&quot;
                      },
                      &quot;parentOrganization&quot;: {
                        &quot;items&quot;: {
                          &quot;format&quot;: &quot;uri&quot;,
                          &quot;type&quot;: &quot;string&quot;
                        },
                        &quot;type&quot;: &quot;array&quot;
                      },
                      &quot;subOrganization&quot;: {
                        &quot;description&quot;: &quot;a child organization&quot;,
                        &quot;x-range&quot;: [
                          &quot;RealEstateOrganization&quot;
                        ],
                        &quot;type&quot;: &quot;array&quot;,
                        &quot;items&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;uri&quot;,
                          &quot;example&quot;: &quot;http://org.example.com/profile/card#me&quot;
                        }
                      },
                      &quot;telephone&quot;: {
                        &quot;type&quot;: &quot;string&quot;,
                        &quot;description&quot;: &quot;Primary phone number.&quot;,
                        &quot;example&quot;: &quot;+15558675309&quot;,
                        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-562&gt;&quot;
                      },
                      &quot;type&quot;: {
                        &quot;enum&quot;: [
                          &quot;Organization&quot;
                        ],
                        &quot;type&quot;: &quot;string&quot;
                      },
                      &quot;url&quot;: {
                        &quot;description&quot;: &quot;primary website/url for the entity.&quot;,
                        &quot;format&quot;: &quot;uri&quot;,
                        &quot;type&quot;: &quot;string&quot;
                      }
                    },
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-335&gt;&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;Organization&quot;
              },
              {
                &quot;title&quot;: &quot;RealEstateOrganization&quot;,
                &quot;description&quot;: &quot;A real estate franchisor, broker or business&quot;,
                &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;description&quot;: &quot;RealEstateOrganzation&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;example&quot;: &quot;RealEstateOrganization&quot;
                  },
                  &quot;areaServed&quot;: {
                    &quot;type&quot;: &quot;object&quot;,
                    &quot;description&quot;: &quot;the physical areas that make up the ServiceArea&quot;,
                    &quot;x-range&quot;: [
                      &quot;City&quot;,
                      &quot;PostalCodeArea&quot;
                    ],
                    &quot;example&quot;: {
                      &quot;type&quot;: &quot;PostalCode&quot;,
                      &quot;postalCode&quot;: &quot;91371&quot;,
                      &quot;addressLocality&quot;: &quot;Woodland Hills&quot;,
                      &quot;addressCounty&quot;: &quot;Los Angeles&quot;,
                      &quot;addressRegion&quot;: &quot;CA&quot;,
                      &quot;addressCountry&quot;: &quot;US&quot;
                    }
                  },
                  &quot;description&quot;: {
                    &quot;example&quot;: &quot;The number on Gotham City Real Estate Company since 1940&quot;,
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;description of the item.&quot;
                  },
                  &quot;parentOrganization&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                    &quot;description&quot;: &quot;A franchisor or affiliate network of which this organization plays a membership role.&quot;,
                    &quot;items&quot;: {
                      &quot;type&quot;: &quot;string&quot;,
                      &quot;format&quot;: &quot;uri&quot;
                    }
                  },
                  &quot;numberOfSubOrganizations&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the number of offices for an affiliate.&quot;
                  },
                  &quot;member&quot;: {
                    &quot;title&quot;: &quot;member&quot;,
                    &quot;description&quot;: &quot;A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.&quot;,
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;x-range&quot;: [
                      &quot;OrganizationRole&quot;,
                      &quot;URI&quot;
                    ],
                    &quot;items&quot;: {
                      &quot;anyOf&quot;: [
                        {
                          &quot;title&quot;: &quot;OrganizationRole&quot;,
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;describes a role played by a member and a group or organization.&quot;,
                          &quot;properties&quot;: {
                            &quot;type&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;a role played by the member in the memberOf group&quot;,
                              &quot;enum&quot;: [
                                &quot;OrganizationRole&quot;
                              ],
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-316&gt;&quot;
                            },
                            &quot;roleName&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;the role name&quot;,
                              &quot;example&quot;: &quot;Owner&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-317&gt;&quot;
                            },
                            &quot;memberOf&quot;: {
                              &quot;description&quot;: &quot;the org or group where the role is performed&quot;,
                              &quot;type&quot;: &quot;object&quot;,
                              &quot;example&quot;: {
                                &quot;type&quot;: &quot;RealEstateOrganization&quot;,
                                &quot;id&quot;: &quot;http://orgid.example.com/profile/card#me&quot;
                              },
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-318&gt;&quot;
                            },
                            &quot;member&quot;: {
                              &quot;description&quot;: &quot;member object or id&quot;,
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;uri&quot;,
                              &quot;example&quot;: &quot;https://memberid.example.com/profile/card#me&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-319&gt;&quot;
                            },
                            &quot;startDate&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;date-time&quot;,
                              &quot;description&quot;: &quot;date the member began performing this role&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-320&gt;&quot;
                            },
                            &quot;endDate&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;date-time&quot;,
                              &quot;description&quot;: &quot;date the member stopped performing the role&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-321&gt;&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;OrganizationRole&quot;
                        },
                        {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;uri&quot;
                        }
                      ]
                    }
                  },
                  &quot;memberOf&quot;: {
                    &quot;x-range&quot;: [
                      &quot;OrganizationRole&quot;,
                      &quot;MLSMembership&quot;
                    ],
                    &quot;description&quot;: &quot;An Organization (or ProgramMembership) to which this Person or Organization belongs.&quot;,
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;items&quot;: {
                      &quot;allOf&quot;: [
                        {
                          &quot;title&quot;: &quot;OrganizationRole&quot;,
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;description&quot;: &quot;describes a role played by a member and a group or organization.&quot;,
                          &quot;properties&quot;: {
                            &quot;type&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;a role played by the member in the memberOf group&quot;,
                              &quot;enum&quot;: [
                                &quot;OrganizationRole&quot;
                              ],
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-316&gt;&quot;
                            },
                            &quot;roleName&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;the role name&quot;,
                              &quot;example&quot;: &quot;Owner&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-317&gt;&quot;
                            },
                            &quot;memberOf&quot;: {
                              &quot;description&quot;: &quot;the org or group where the role is performed&quot;,
                              &quot;type&quot;: &quot;object&quot;,
                              &quot;example&quot;: {
                                &quot;type&quot;: &quot;RealEstateOrganization&quot;,
                                &quot;id&quot;: &quot;http://orgid.example.com/profile/card#me&quot;
                              },
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-318&gt;&quot;
                            },
                            &quot;member&quot;: {
                              &quot;description&quot;: &quot;member object or id&quot;,
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;uri&quot;,
                              &quot;example&quot;: &quot;https://memberid.example.com/profile/card#me&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-319&gt;&quot;
                            },
                            &quot;startDate&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;date-time&quot;,
                              &quot;description&quot;: &quot;date the member began performing this role&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-320&gt;&quot;
                            },
                            &quot;endDate&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;date-time&quot;,
                              &quot;description&quot;: &quot;date the member stopped performing the role&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-321&gt;&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;OrganizationRole&quot;
                        },
                        {
                          &quot;type&quot;: &quot;object&quot;,
                          &quot;title&quot;: &quot;MLSMembership&quot;,
                          &quot;description&quot;: &quot;a membership relationship&quot;,
                          &quot;properties&quot;: {
                            &quot;type&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;an MLS member relationship&quot;,
                              &quot;enum&quot;: [
                                &quot;MLSMembership&quot;
                              ],
                              &quot;example&quot;: &quot;MLSMembership&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-323&gt;&quot;
                            },
                            &quot;roleName&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;example&quot;: &quot;MLSMember&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-324&gt;&quot;
                            },
                            &quot;memberOf&quot;: {
                              &quot;type&quot;: &quot;object&quot;,
                              &quot;x-range&quot;: &quot;MultipleListingService&quot;,
                              &quot;example&quot;: {
                                &quot;type&quot;: &quot;MultipleListingService&quot;,
                                &quot;name&quot;: &quot;GreatScottMLS&quot;
                              },
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-325&gt;&quot;
                            },
                            &quot;member&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;format&quot;: &quot;uri&quot;,
                              &quot;example&quot;: &quot;https://{agent}.example.com/profile/card#me&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-326&gt;&quot;
                            },
                            &quot;memberId&quot;: {
                              &quot;type&quot;: &quot;string&quot;,
                              &quot;description&quot;: &quot;the user&#39;s MLSID&quot;,
                              &quot;example&quot;: &quot;memberid123&quot;,
                              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-327&gt;&quot;
                            }
                          },
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-322&gt;&quot;
                        }
                      ],
                      &quot;x-parser-schema-id&quot;: &quot;MLSMembership&quot;
                    }
                  },
                  &quot;permit&quot;: {
                    &quot;type&quot;: &quot;array&quot;,
                    &quot;x-range&quot;: &quot;RealEstateLicense&quot;,
                    &quot;items&quot;: {
                      &quot;type&quot;: &quot;object&quot;,
                      &quot;example&quot;: {
                        &quot;type&quot;: &quot;RealEstateLicense&quot;,
                        &quot;name&quot;: &quot;CA-DRE# 02068375&quot;,
                        &quot;identifier&quot;: {
                          &quot;type&quot;: &quot;PropertyValue&quot;,
                          &quot;name&quot;: &quot;CA-DRE&quot;,
                          &quot;value&quot;: &quot;02068375&quot;
                        },
                        &quot;issuedBy&quot;: {
                          &quot;type&quot;: &quot;State&quot;,
                          &quot;name&quot;: &quot;California&quot;
                        },
                        &quot;issuedThrough&quot;: {
                          &quot;type&quot;: &quot;Service&quot;,
                          &quot;name&quot;: &quot;California Department of Real Estate&quot;
                        },
                        &quot;validIn&quot;: {
                          &quot;type&quot;: &quot;State&quot;,
                          &quot;name&quot;: &quot;California&quot;
                        },
                        &quot;validFrom&quot;: &quot;2019-07-07T10:55:02Z&quot;,
                        &quot;validUntil&quot;: &quot;2019-07-07T10:55:02Z&quot;
                      }
                    }
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-497&gt;&quot;
              }
            ],
            &quot;x-parser-schema-id&quot;: &quot;RealEstateOrganization&quot;
          },
          {
            &quot;description&quot;: &quot;A real estate agent&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-498&gt;&quot;
          },
          {
            &quot;properties&quot;: {
              &quot;description&quot;: {
                &quot;example&quot;: &quot;The leading Gotham City Real Estate Agent.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-500&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                &quot;example&quot;: {
                  &quot;ContactID&quot;: &quot;1234567&quot;
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-501&gt;&quot;
              },
              &quot;jobTitle&quot;: {
                &quot;description&quot;: &quot;agent&#39;s job titles&quot;,
                &quot;items&quot;: {
                  &quot;example&quot;: [
                    &quot;Accounting Department&quot;,
                    &quot;Awards Coordinator&quot;
                  ],
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-503&gt;&quot;
                },
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-502&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;example&quot;: &quot;Louis Armstrong&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-504&gt;&quot;
              },
              &quot;givenName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;First Name of a person&quot;,
                &quot;example&quot;: &quot;Glenn&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-505&gt;&quot;
              },
              &quot;familyName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Last Name of a person&quot;,
                &quot;example&quot;: &quot;Miller&quot;,
                &quot;maxLength&quot;: 50,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-506&gt;&quot;
              },
              &quot;additionalName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.&quot;,
                &quot;example&quot;: &quot;ambassador satch,pops,satchmo&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-230&gt;&quot;
              },
              &quot;parentOrganization&quot;: {
                &quot;description&quot;: &quot;URI reference to the agent&#39;s office. For teams, this can be a reference to the team leader/primary profile.&quot;,
                &quot;example&quot;: [
                  &quot;http://office-real-estate.example.com/&quot;,
                  &quot;http://batmanandrobinteam.example.com/&quot;
                ],
                &quot;items&quot;: {
                  &quot;format&quot;: &quot;uri&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-508&gt;&quot;
                },
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateOffice&quot;,
                  &quot;RealEstateAgent&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-507&gt;&quot;
              },
              &quot;sameAs&quot;: {
                &quot;description&quot;: &quot;key/value id assigned to the record&quot;,
                &quot;example&quot;: {
                  &quot;bmsID&quot;: &quot;1234&quot;
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-509&gt;&quot;
              },
              &quot;subOrganization&quot;: {
                &quot;description&quot;: &quot;for teams: URI reference to a team member&quot;,
                &quot;items&quot;: {
                  &quot;format&quot;: &quot;uri&quot;,
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-511&gt;&quot;
                },
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-range&quot;: &quot;RealEstateAgent&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-510&gt;&quot;
              },
              &quot;type&quot;: {
                &quot;description&quot;: &quot;RealEstateAgent&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateAgent&quot;
                ],
                &quot;example&quot;: &quot;RealEstateAgent&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-512&gt;&quot;
              }
            },
            &quot;title&quot;: &quot;RealEstateAgent&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-499&gt;&quot;
          }
        ],
        &quot;description&quot;: &quot;a real estate agent or team.&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;x-parser-schema-id&quot;: &quot;RealEstateAgent&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;4&gt;
required = 
path = RealEstateAgent











### Example

```json
{
  "type": "RealEstateAgent",
  "id": "http://example.com",
  "name": "Louis Armstrong",
  "givenName": "Glenn",
  "familyName": "Miller",
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
  "availableLanguage": [
    {
      "type": "Language",
      "name": "English",
      "additionalName": "en-US"
    }
  ],
  "branchCode": "for BHHS profile events, see additionalProperty.OfficeId",
  "certification": [
    {
      "type": "Certification",
      "name": "E-Agent Certified",
      "validFrom": "2019-06-13T07:00:00.000Z",
      "additionalProperty": {
        "ceritificationTypeId": "86afafd3-ac25-4a89-9a6e-bebb3753c4b2"
      }
    }
  ],
  "contactPoint": {
    "type": "ContactPoint",
    "name": "Work",
    "telephone": "800-555-5555",
    "faxNumber": "888-4BA-TMAN",
    "email": "bruce@example.com",
    "url": "https://example.com"
  },
  "email": "user@example.com",
  "faxNumber": "(873) 271-4802",
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
  "logo": [
    {
      "type": "DigitalDocument",
      "id": "http://user.example.com/public/logo/archive.zip",
      "name": "archive.zip",
      "encodingFormat": "application/zip",
      "about": {
        "type": "RealEstateTransaction",
        "identifier": {
          "bmsTransactionId": "xxxx"
        }
      },
      "url": "https://example.com"
    }
  ],
  "parentOrganization": [
    "http://office-real-estate.example.com/",
    "http://batmanandrobinteam.example.com/"
  ],
  "subOrganization": [
    "http://example.com"
  ],
  "telephone": "+15558675309",
  "url": "http://example.com",
  "areaServed": {
    "type": "PostalCode",
    "postalCode": "91371",
    "addressLocality": "Woodland Hills",
    "addressCounty": "Los Angeles",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "description": "The leading Gotham City Real Estate Agent.",
  "numberOfSubOrganizations": 0,
  "member": [
    {
      "type": "OrganizationRole",
      "roleName": "Owner",
      "memberOf": {
        "type": "RealEstateOrganization",
        "id": "http://orgid.example.com/profile/card#me"
      },
      "member": "https://memberid.example.com/profile/card#me",
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z"
    }
  ],
  "memberOf": [
    {
      "type": "MLSMembership",
      "roleName": "MLSMember",
      "memberOf": {
        "type": "MultipleListingService",
        "id": "http://orgid.example.com/profile/card#me",
        "name": "GreatScottMLS"
      },
      "member": "https://{agent}.example.com/profile/card#me",
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z",
      "memberId": "memberid123"
    }
  ],
  "permit": [
    {
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
  ],
  "identifier": {
    "ContactID": "1234567"
  },
  "jobTitle": [
    [
      "Accounting Department",
      "Awards Coordinator"
    ]
  ],
  "additionalName": "ambassador satch,pops,satchmo",
  "sameAs": {
    "bmsID": "1234"
  }
}
```

