

---
title: RealEstateTeam
---

{}


# RealEstateTeam





### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
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
  },
  "options": {}
}



prop = {
  &quot;_json&quot;: {
    &quot;properties&quot;: {
      &quot;id&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-524&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;allOf&quot;: [
          {
            &quot;properties&quot;: {
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-524&gt;&quot;
          },
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
            &quot;title&quot;: &quot;RealEstateTeam&quot;,
            &quot;description&quot;: &quot;A real estate team.&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;RealEstateTeam&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateTeam&quot;
                ]
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
                &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                &quot;description&quot;: &quot;A franchisor or affiliate network of which this organization plays a membership role.&quot;,
                &quot;type&quot;: &quot;array&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;uri&quot;
                }
              },
              &quot;member&quot;: {
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
                      &quot;title&quot;: &quot;RealEstateTeamMembership&quot;,
                      &quot;description&quot;: &quot;a membership relationship.  Subclass of OrganizationRole&quot;,
                      &quot;properties&quot;: {
                        &quot;type&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;a member of a real estate team&quot;,
                          &quot;enum&quot;: [
                            &quot;RealEstateTeamMembership&quot;
                          ],
                          &quot;example&quot;: &quot;RealEstateTeamMembership&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-527&gt;&quot;
                        },
                        &quot;roleName&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;enum&quot;: [
                            &quot;TeamMember&quot;,
                            &quot;TeamAdmin&quot;,
                            &quot;TeamOwner&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-528&gt;&quot;
                        },
                        &quot;memberOf&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;uri&quot;,
                          &quot;example&quot;: &quot;https://{team-id}.example.com/profile/card#me&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-529&gt;&quot;
                        },
                        &quot;member&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;uri&quot;,
                          &quot;example&quot;: &quot;https://{agent}.example.com/profile/card#me&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-530&gt;&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-526&gt;&quot;
                    }
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;RealEstateTeamMembership&quot;
                }
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-525&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;RealEstateTeam&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;1&gt;
required = 
path = RealEstateTeam




prop = {
  &quot;_json&quot;: {
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
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;allOf&quot;: [
          {
            &quot;properties&quot;: {
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-524&gt;&quot;
          },
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
            &quot;title&quot;: &quot;RealEstateTeam&quot;,
            &quot;description&quot;: &quot;A real estate team.&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;RealEstateTeam&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateTeam&quot;
                ]
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
                &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                &quot;description&quot;: &quot;A franchisor or affiliate network of which this organization plays a membership role.&quot;,
                &quot;type&quot;: &quot;array&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;uri&quot;
                }
              },
              &quot;member&quot;: {
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
                      &quot;title&quot;: &quot;RealEstateTeamMembership&quot;,
                      &quot;description&quot;: &quot;a membership relationship.  Subclass of OrganizationRole&quot;,
                      &quot;properties&quot;: {
                        &quot;type&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;a member of a real estate team&quot;,
                          &quot;enum&quot;: [
                            &quot;RealEstateTeamMembership&quot;
                          ],
                          &quot;example&quot;: &quot;RealEstateTeamMembership&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-527&gt;&quot;
                        },
                        &quot;roleName&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;enum&quot;: [
                            &quot;TeamMember&quot;,
                            &quot;TeamAdmin&quot;,
                            &quot;TeamOwner&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-528&gt;&quot;
                        },
                        &quot;memberOf&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;uri&quot;,
                          &quot;example&quot;: &quot;https://{team-id}.example.com/profile/card#me&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-529&gt;&quot;
                        },
                        &quot;member&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;uri&quot;,
                          &quot;example&quot;: &quot;https://{agent}.example.com/profile/card#me&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-530&gt;&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-526&gt;&quot;
                    }
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;RealEstateTeamMembership&quot;
                }
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-525&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;RealEstateTeam&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;2&gt;
required = 
path = RealEstateTeam




prop = {
  &quot;_json&quot;: {
    &quot;title&quot;: &quot;RealEstateTeam&quot;,
    &quot;description&quot;: &quot;A real estate team.&quot;,
    &quot;properties&quot;: {
      &quot;type&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;RealEstateTeam&quot;,
        &quot;enum&quot;: [
          &quot;RealEstateTeam&quot;
        ]
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
        &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
        &quot;description&quot;: &quot;A franchisor or affiliate network of which this organization plays a membership role.&quot;,
        &quot;type&quot;: &quot;array&quot;,
        &quot;items&quot;: {
          &quot;type&quot;: &quot;string&quot;,
          &quot;format&quot;: &quot;uri&quot;
        }
      },
      &quot;member&quot;: {
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
              &quot;title&quot;: &quot;RealEstateTeamMembership&quot;,
              &quot;description&quot;: &quot;a membership relationship.  Subclass of OrganizationRole&quot;,
              &quot;properties&quot;: {
                &quot;type&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;description&quot;: &quot;a member of a real estate team&quot;,
                  &quot;enum&quot;: [
                    &quot;RealEstateTeamMembership&quot;
                  ],
                  &quot;example&quot;: &quot;RealEstateTeamMembership&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-527&gt;&quot;
                },
                &quot;roleName&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;enum&quot;: [
                    &quot;TeamMember&quot;,
                    &quot;TeamAdmin&quot;,
                    &quot;TeamOwner&quot;
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-528&gt;&quot;
                },
                &quot;memberOf&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;uri&quot;,
                  &quot;example&quot;: &quot;https://{team-id}.example.com/profile/card#me&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-529&gt;&quot;
                },
                &quot;member&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;uri&quot;,
                  &quot;example&quot;: &quot;https://{agent}.example.com/profile/card#me&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-530&gt;&quot;
                }
              },
              &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-526&gt;&quot;
            }
          ],
          &quot;x-parser-schema-id&quot;: &quot;RealEstateTeamMembership&quot;
        }
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-525&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;allOf&quot;: [
          {
            &quot;properties&quot;: {
              &quot;id&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;https://org.example.com/profile/card#me&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-524&gt;&quot;
          },
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
            &quot;title&quot;: &quot;RealEstateTeam&quot;,
            &quot;description&quot;: &quot;A real estate team.&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;RealEstateTeam&quot;,
                &quot;enum&quot;: [
                  &quot;RealEstateTeam&quot;
                ]
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
                &quot;x-range&quot;: &quot;RealEstateOrganization&quot;,
                &quot;description&quot;: &quot;A franchisor or affiliate network of which this organization plays a membership role.&quot;,
                &quot;type&quot;: &quot;array&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;uri&quot;
                }
              },
              &quot;member&quot;: {
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
                      &quot;title&quot;: &quot;RealEstateTeamMembership&quot;,
                      &quot;description&quot;: &quot;a membership relationship.  Subclass of OrganizationRole&quot;,
                      &quot;properties&quot;: {
                        &quot;type&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;description&quot;: &quot;a member of a real estate team&quot;,
                          &quot;enum&quot;: [
                            &quot;RealEstateTeamMembership&quot;
                          ],
                          &quot;example&quot;: &quot;RealEstateTeamMembership&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-527&gt;&quot;
                        },
                        &quot;roleName&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;enum&quot;: [
                            &quot;TeamMember&quot;,
                            &quot;TeamAdmin&quot;,
                            &quot;TeamOwner&quot;
                          ],
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-528&gt;&quot;
                        },
                        &quot;memberOf&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;uri&quot;,
                          &quot;example&quot;: &quot;https://{team-id}.example.com/profile/card#me&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-529&gt;&quot;
                        },
                        &quot;member&quot;: {
                          &quot;type&quot;: &quot;string&quot;,
                          &quot;format&quot;: &quot;uri&quot;,
                          &quot;example&quot;: &quot;https://{agent}.example.com/profile/card#me&quot;,
                          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-530&gt;&quot;
                        }
                      },
                      &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-526&gt;&quot;
                    }
                  ],
                  &quot;x-parser-schema-id&quot;: &quot;RealEstateTeamMembership&quot;
                }
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-525&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;RealEstateTeam&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;3&gt;
required = 
path = RealEstateTeam











### Example

```json
{
  "type": "RealEstateTeam",
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
  "name": "string",
  "parentOrganization": [
    "http://example.com"
  ],
  "subOrganization": [
    "http://org.example.com/profile/card#me"
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
  "description": "The number on Gotham City Real Estate Company since 1940",
  "member": [
    {
      "type": "RealEstateTeamMembership",
      "roleName": "TeamMember",
      "memberOf": "https://{team-id}.example.com/profile/card#me",
      "member": "https://{agent}.example.com/profile/card#me",
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z"
    }
  ]
}
```

