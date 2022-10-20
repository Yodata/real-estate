

---
title: BlogPosting
---

{
  "type": {
    "_json": {
      "enum": [
        "BlogPosting"
      ],
      "x-parser-schema-id": "<anonymous-schema-172>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "BlogPosting",
          "type": "object",
          "x-range": "BlogPosting",
          "description": "A blog post.",
          "properties": {
            "type": {
              "enum": [
                "BlogPosting"
              ],
              "x-parser-schema-id": "<anonymous-schema-172>"
            },
            "identifier": {
              "example": {
                "aempostid": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-173>"
            },
            "headline": {
              "type": "string",
              "description": "headline of the post.",
              "example": "Top 10 Spring Cleeaning Tips",
              "x-parser-schema-id": "<anonymous-schema-174>"
            },
            "articleBody": {
              "type": "string",
              "description": "the actual body of the post in HTML format.",
              "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
              "x-parser-schema-id": "<anonymous-schema-175>"
            },
            "image": {
              "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
              ],
              "x-parser-schema-id": "<anonymous-schema-176>"
            },
            "author": {
              "description": "author of the work",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-181>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the author",
                  "example": "https://agent123.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-182>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-180>"
            },
            "provider": {
              "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateOrganization",
                    "RealEstateTeam",
                    "RealEstateOffice",
                    "RealEstateAgent"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-184>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the provider",
                  "example": "https://example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-185>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-183>"
            },
            "dateCreated": {
              "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-186>"
            },
            "dateModified": {
              "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-187>"
            },
            "url": {
              "title": "url",
              "type": "string",
              "format": "uri",
              "description": "URL of the item.",
              "x-parser-schema-id": "<anonymous-schema-188>"
            },
            "urlTemplate": {
              "type": "string",
              "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
              "example": "https://example.com/{author/name}/blog/post?{slug}",
              "x-parser-schema-id": "<anonymous-schema-189>"
            }
          },
          "x-parser-schema-id": "BlogPosting"
        },
        "options": {}
      }
    }
  },
  "identifier": {
    "_json": {
      "example": {
        "aempostid": "xxxx"
      },
      "type": "object",
      "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
      "x-parser-schema-id": "<anonymous-schema-173>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "BlogPosting",
          "type": "object",
          "x-range": "BlogPosting",
          "description": "A blog post.",
          "properties": {
            "type": {
              "enum": [
                "BlogPosting"
              ],
              "x-parser-schema-id": "<anonymous-schema-172>"
            },
            "identifier": {
              "example": {
                "aempostid": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-173>"
            },
            "headline": {
              "type": "string",
              "description": "headline of the post.",
              "example": "Top 10 Spring Cleeaning Tips",
              "x-parser-schema-id": "<anonymous-schema-174>"
            },
            "articleBody": {
              "type": "string",
              "description": "the actual body of the post in HTML format.",
              "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
              "x-parser-schema-id": "<anonymous-schema-175>"
            },
            "image": {
              "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
              ],
              "x-parser-schema-id": "<anonymous-schema-176>"
            },
            "author": {
              "description": "author of the work",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-181>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the author",
                  "example": "https://agent123.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-182>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-180>"
            },
            "provider": {
              "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateOrganization",
                    "RealEstateTeam",
                    "RealEstateOffice",
                    "RealEstateAgent"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-184>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the provider",
                  "example": "https://example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-185>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-183>"
            },
            "dateCreated": {
              "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-186>"
            },
            "dateModified": {
              "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-187>"
            },
            "url": {
              "title": "url",
              "type": "string",
              "format": "uri",
              "description": "URL of the item.",
              "x-parser-schema-id": "<anonymous-schema-188>"
            },
            "urlTemplate": {
              "type": "string",
              "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
              "example": "https://example.com/{author/name}/blog/post?{slug}",
              "x-parser-schema-id": "<anonymous-schema-189>"
            }
          },
          "x-parser-schema-id": "BlogPosting"
        },
        "options": {}
      }
    }
  },
  "headline": {
    "_json": {
      "type": "string",
      "description": "headline of the post.",
      "example": "Top 10 Spring Cleeaning Tips",
      "x-parser-schema-id": "<anonymous-schema-174>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "BlogPosting",
          "type": "object",
          "x-range": "BlogPosting",
          "description": "A blog post.",
          "properties": {
            "type": {
              "enum": [
                "BlogPosting"
              ],
              "x-parser-schema-id": "<anonymous-schema-172>"
            },
            "identifier": {
              "example": {
                "aempostid": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-173>"
            },
            "headline": {
              "type": "string",
              "description": "headline of the post.",
              "example": "Top 10 Spring Cleeaning Tips",
              "x-parser-schema-id": "<anonymous-schema-174>"
            },
            "articleBody": {
              "type": "string",
              "description": "the actual body of the post in HTML format.",
              "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
              "x-parser-schema-id": "<anonymous-schema-175>"
            },
            "image": {
              "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
              ],
              "x-parser-schema-id": "<anonymous-schema-176>"
            },
            "author": {
              "description": "author of the work",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-181>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the author",
                  "example": "https://agent123.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-182>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-180>"
            },
            "provider": {
              "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateOrganization",
                    "RealEstateTeam",
                    "RealEstateOffice",
                    "RealEstateAgent"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-184>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the provider",
                  "example": "https://example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-185>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-183>"
            },
            "dateCreated": {
              "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-186>"
            },
            "dateModified": {
              "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-187>"
            },
            "url": {
              "title": "url",
              "type": "string",
              "format": "uri",
              "description": "URL of the item.",
              "x-parser-schema-id": "<anonymous-schema-188>"
            },
            "urlTemplate": {
              "type": "string",
              "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
              "example": "https://example.com/{author/name}/blog/post?{slug}",
              "x-parser-schema-id": "<anonymous-schema-189>"
            }
          },
          "x-parser-schema-id": "BlogPosting"
        },
        "options": {}
      }
    }
  },
  "articleBody": {
    "_json": {
      "type": "string",
      "description": "the actual body of the post in HTML format.",
      "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
      "x-parser-schema-id": "<anonymous-schema-175>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "BlogPosting",
          "type": "object",
          "x-range": "BlogPosting",
          "description": "A blog post.",
          "properties": {
            "type": {
              "enum": [
                "BlogPosting"
              ],
              "x-parser-schema-id": "<anonymous-schema-172>"
            },
            "identifier": {
              "example": {
                "aempostid": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-173>"
            },
            "headline": {
              "type": "string",
              "description": "headline of the post.",
              "example": "Top 10 Spring Cleeaning Tips",
              "x-parser-schema-id": "<anonymous-schema-174>"
            },
            "articleBody": {
              "type": "string",
              "description": "the actual body of the post in HTML format.",
              "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
              "x-parser-schema-id": "<anonymous-schema-175>"
            },
            "image": {
              "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
              ],
              "x-parser-schema-id": "<anonymous-schema-176>"
            },
            "author": {
              "description": "author of the work",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-181>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the author",
                  "example": "https://agent123.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-182>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-180>"
            },
            "provider": {
              "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateOrganization",
                    "RealEstateTeam",
                    "RealEstateOffice",
                    "RealEstateAgent"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-184>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the provider",
                  "example": "https://example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-185>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-183>"
            },
            "dateCreated": {
              "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-186>"
            },
            "dateModified": {
              "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-187>"
            },
            "url": {
              "title": "url",
              "type": "string",
              "format": "uri",
              "description": "URL of the item.",
              "x-parser-schema-id": "<anonymous-schema-188>"
            },
            "urlTemplate": {
              "type": "string",
              "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
              "example": "https://example.com/{author/name}/blog/post?{slug}",
              "x-parser-schema-id": "<anonymous-schema-189>"
            }
          },
          "x-parser-schema-id": "BlogPosting"
        },
        "options": {}
      }
    }
  },
  "image": {
    "_json": {
      "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
      ],
      "x-parser-schema-id": "<anonymous-schema-176>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "BlogPosting",
          "type": "object",
          "x-range": "BlogPosting",
          "description": "A blog post.",
          "properties": {
            "type": {
              "enum": [
                "BlogPosting"
              ],
              "x-parser-schema-id": "<anonymous-schema-172>"
            },
            "identifier": {
              "example": {
                "aempostid": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-173>"
            },
            "headline": {
              "type": "string",
              "description": "headline of the post.",
              "example": "Top 10 Spring Cleeaning Tips",
              "x-parser-schema-id": "<anonymous-schema-174>"
            },
            "articleBody": {
              "type": "string",
              "description": "the actual body of the post in HTML format.",
              "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
              "x-parser-schema-id": "<anonymous-schema-175>"
            },
            "image": {
              "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
              ],
              "x-parser-schema-id": "<anonymous-schema-176>"
            },
            "author": {
              "description": "author of the work",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-181>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the author",
                  "example": "https://agent123.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-182>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-180>"
            },
            "provider": {
              "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateOrganization",
                    "RealEstateTeam",
                    "RealEstateOffice",
                    "RealEstateAgent"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-184>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the provider",
                  "example": "https://example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-185>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-183>"
            },
            "dateCreated": {
              "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-186>"
            },
            "dateModified": {
              "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-187>"
            },
            "url": {
              "title": "url",
              "type": "string",
              "format": "uri",
              "description": "URL of the item.",
              "x-parser-schema-id": "<anonymous-schema-188>"
            },
            "urlTemplate": {
              "type": "string",
              "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
              "example": "https://example.com/{author/name}/blog/post?{slug}",
              "x-parser-schema-id": "<anonymous-schema-189>"
            }
          },
          "x-parser-schema-id": "BlogPosting"
        },
        "options": {}
      }
    }
  },
  "author": {
    "_json": {
      "description": "author of the work",
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "RealEstateAgent",
            "RealEstateOffice",
            "RealEstateTeam",
            "RealEstateOrganization"
          ],
          "x-parser-schema-id": "<anonymous-schema-181>"
        },
        "id": {
          "type": "string",
          "format": "uri",
          "description": "the profile URI of the author",
          "example": "https://agent123.example.com/profile/card#me",
          "x-parser-schema-id": "<anonymous-schema-182>"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-180>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "BlogPosting",
          "type": "object",
          "x-range": "BlogPosting",
          "description": "A blog post.",
          "properties": {
            "type": {
              "enum": [
                "BlogPosting"
              ],
              "x-parser-schema-id": "<anonymous-schema-172>"
            },
            "identifier": {
              "example": {
                "aempostid": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-173>"
            },
            "headline": {
              "type": "string",
              "description": "headline of the post.",
              "example": "Top 10 Spring Cleeaning Tips",
              "x-parser-schema-id": "<anonymous-schema-174>"
            },
            "articleBody": {
              "type": "string",
              "description": "the actual body of the post in HTML format.",
              "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
              "x-parser-schema-id": "<anonymous-schema-175>"
            },
            "image": {
              "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
              ],
              "x-parser-schema-id": "<anonymous-schema-176>"
            },
            "author": {
              "description": "author of the work",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-181>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the author",
                  "example": "https://agent123.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-182>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-180>"
            },
            "provider": {
              "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateOrganization",
                    "RealEstateTeam",
                    "RealEstateOffice",
                    "RealEstateAgent"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-184>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the provider",
                  "example": "https://example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-185>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-183>"
            },
            "dateCreated": {
              "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-186>"
            },
            "dateModified": {
              "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-187>"
            },
            "url": {
              "title": "url",
              "type": "string",
              "format": "uri",
              "description": "URL of the item.",
              "x-parser-schema-id": "<anonymous-schema-188>"
            },
            "urlTemplate": {
              "type": "string",
              "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
              "example": "https://example.com/{author/name}/blog/post?{slug}",
              "x-parser-schema-id": "<anonymous-schema-189>"
            }
          },
          "x-parser-schema-id": "BlogPosting"
        },
        "options": {}
      }
    }
  },
  "provider": {
    "_json": {
      "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "RealEstateOrganization",
            "RealEstateTeam",
            "RealEstateOffice",
            "RealEstateAgent"
          ],
          "x-parser-schema-id": "<anonymous-schema-184>"
        },
        "id": {
          "type": "string",
          "format": "uri",
          "description": "the profile URI of the provider",
          "example": "https://example.com/profile/card#me",
          "x-parser-schema-id": "<anonymous-schema-185>"
        }
      },
      "x-parser-schema-id": "<anonymous-schema-183>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "BlogPosting",
          "type": "object",
          "x-range": "BlogPosting",
          "description": "A blog post.",
          "properties": {
            "type": {
              "enum": [
                "BlogPosting"
              ],
              "x-parser-schema-id": "<anonymous-schema-172>"
            },
            "identifier": {
              "example": {
                "aempostid": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-173>"
            },
            "headline": {
              "type": "string",
              "description": "headline of the post.",
              "example": "Top 10 Spring Cleeaning Tips",
              "x-parser-schema-id": "<anonymous-schema-174>"
            },
            "articleBody": {
              "type": "string",
              "description": "the actual body of the post in HTML format.",
              "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
              "x-parser-schema-id": "<anonymous-schema-175>"
            },
            "image": {
              "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
              ],
              "x-parser-schema-id": "<anonymous-schema-176>"
            },
            "author": {
              "description": "author of the work",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-181>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the author",
                  "example": "https://agent123.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-182>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-180>"
            },
            "provider": {
              "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateOrganization",
                    "RealEstateTeam",
                    "RealEstateOffice",
                    "RealEstateAgent"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-184>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the provider",
                  "example": "https://example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-185>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-183>"
            },
            "dateCreated": {
              "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-186>"
            },
            "dateModified": {
              "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-187>"
            },
            "url": {
              "title": "url",
              "type": "string",
              "format": "uri",
              "description": "URL of the item.",
              "x-parser-schema-id": "<anonymous-schema-188>"
            },
            "urlTemplate": {
              "type": "string",
              "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
              "example": "https://example.com/{author/name}/blog/post?{slug}",
              "x-parser-schema-id": "<anonymous-schema-189>"
            }
          },
          "x-parser-schema-id": "BlogPosting"
        },
        "options": {}
      }
    }
  },
  "dateCreated": {
    "_json": {
      "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
      "type": "string",
      "format": "date-time",
      "x-parser-schema-id": "<anonymous-schema-186>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "BlogPosting",
          "type": "object",
          "x-range": "BlogPosting",
          "description": "A blog post.",
          "properties": {
            "type": {
              "enum": [
                "BlogPosting"
              ],
              "x-parser-schema-id": "<anonymous-schema-172>"
            },
            "identifier": {
              "example": {
                "aempostid": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-173>"
            },
            "headline": {
              "type": "string",
              "description": "headline of the post.",
              "example": "Top 10 Spring Cleeaning Tips",
              "x-parser-schema-id": "<anonymous-schema-174>"
            },
            "articleBody": {
              "type": "string",
              "description": "the actual body of the post in HTML format.",
              "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
              "x-parser-schema-id": "<anonymous-schema-175>"
            },
            "image": {
              "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
              ],
              "x-parser-schema-id": "<anonymous-schema-176>"
            },
            "author": {
              "description": "author of the work",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-181>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the author",
                  "example": "https://agent123.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-182>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-180>"
            },
            "provider": {
              "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateOrganization",
                    "RealEstateTeam",
                    "RealEstateOffice",
                    "RealEstateAgent"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-184>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the provider",
                  "example": "https://example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-185>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-183>"
            },
            "dateCreated": {
              "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-186>"
            },
            "dateModified": {
              "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-187>"
            },
            "url": {
              "title": "url",
              "type": "string",
              "format": "uri",
              "description": "URL of the item.",
              "x-parser-schema-id": "<anonymous-schema-188>"
            },
            "urlTemplate": {
              "type": "string",
              "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
              "example": "https://example.com/{author/name}/blog/post?{slug}",
              "x-parser-schema-id": "<anonymous-schema-189>"
            }
          },
          "x-parser-schema-id": "BlogPosting"
        },
        "options": {}
      }
    }
  },
  "dateModified": {
    "_json": {
      "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
      "type": "string",
      "format": "date-time",
      "x-parser-schema-id": "<anonymous-schema-187>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "BlogPosting",
          "type": "object",
          "x-range": "BlogPosting",
          "description": "A blog post.",
          "properties": {
            "type": {
              "enum": [
                "BlogPosting"
              ],
              "x-parser-schema-id": "<anonymous-schema-172>"
            },
            "identifier": {
              "example": {
                "aempostid": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-173>"
            },
            "headline": {
              "type": "string",
              "description": "headline of the post.",
              "example": "Top 10 Spring Cleeaning Tips",
              "x-parser-schema-id": "<anonymous-schema-174>"
            },
            "articleBody": {
              "type": "string",
              "description": "the actual body of the post in HTML format.",
              "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
              "x-parser-schema-id": "<anonymous-schema-175>"
            },
            "image": {
              "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
              ],
              "x-parser-schema-id": "<anonymous-schema-176>"
            },
            "author": {
              "description": "author of the work",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-181>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the author",
                  "example": "https://agent123.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-182>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-180>"
            },
            "provider": {
              "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateOrganization",
                    "RealEstateTeam",
                    "RealEstateOffice",
                    "RealEstateAgent"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-184>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the provider",
                  "example": "https://example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-185>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-183>"
            },
            "dateCreated": {
              "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-186>"
            },
            "dateModified": {
              "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-187>"
            },
            "url": {
              "title": "url",
              "type": "string",
              "format": "uri",
              "description": "URL of the item.",
              "x-parser-schema-id": "<anonymous-schema-188>"
            },
            "urlTemplate": {
              "type": "string",
              "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
              "example": "https://example.com/{author/name}/blog/post?{slug}",
              "x-parser-schema-id": "<anonymous-schema-189>"
            }
          },
          "x-parser-schema-id": "BlogPosting"
        },
        "options": {}
      }
    }
  },
  "url": {
    "_json": {
      "title": "url",
      "type": "string",
      "format": "uri",
      "description": "URL of the item.",
      "x-parser-schema-id": "<anonymous-schema-188>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "BlogPosting",
          "type": "object",
          "x-range": "BlogPosting",
          "description": "A blog post.",
          "properties": {
            "type": {
              "enum": [
                "BlogPosting"
              ],
              "x-parser-schema-id": "<anonymous-schema-172>"
            },
            "identifier": {
              "example": {
                "aempostid": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-173>"
            },
            "headline": {
              "type": "string",
              "description": "headline of the post.",
              "example": "Top 10 Spring Cleeaning Tips",
              "x-parser-schema-id": "<anonymous-schema-174>"
            },
            "articleBody": {
              "type": "string",
              "description": "the actual body of the post in HTML format.",
              "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
              "x-parser-schema-id": "<anonymous-schema-175>"
            },
            "image": {
              "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
              ],
              "x-parser-schema-id": "<anonymous-schema-176>"
            },
            "author": {
              "description": "author of the work",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-181>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the author",
                  "example": "https://agent123.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-182>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-180>"
            },
            "provider": {
              "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateOrganization",
                    "RealEstateTeam",
                    "RealEstateOffice",
                    "RealEstateAgent"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-184>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the provider",
                  "example": "https://example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-185>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-183>"
            },
            "dateCreated": {
              "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-186>"
            },
            "dateModified": {
              "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-187>"
            },
            "url": {
              "title": "url",
              "type": "string",
              "format": "uri",
              "description": "URL of the item.",
              "x-parser-schema-id": "<anonymous-schema-188>"
            },
            "urlTemplate": {
              "type": "string",
              "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
              "example": "https://example.com/{author/name}/blog/post?{slug}",
              "x-parser-schema-id": "<anonymous-schema-189>"
            }
          },
          "x-parser-schema-id": "BlogPosting"
        },
        "options": {}
      }
    }
  },
  "urlTemplate": {
    "_json": {
      "type": "string",
      "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
      "example": "https://example.com/{author/name}/blog/post?{slug}",
      "x-parser-schema-id": "<anonymous-schema-189>"
    },
    "options": {
      "parent": {
        "_json": {
          "title": "BlogPosting",
          "type": "object",
          "x-range": "BlogPosting",
          "description": "A blog post.",
          "properties": {
            "type": {
              "enum": [
                "BlogPosting"
              ],
              "x-parser-schema-id": "<anonymous-schema-172>"
            },
            "identifier": {
              "example": {
                "aempostid": "xxxx"
              },
              "type": "object",
              "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
              "x-parser-schema-id": "<anonymous-schema-173>"
            },
            "headline": {
              "type": "string",
              "description": "headline of the post.",
              "example": "Top 10 Spring Cleeaning Tips",
              "x-parser-schema-id": "<anonymous-schema-174>"
            },
            "articleBody": {
              "type": "string",
              "description": "the actual body of the post in HTML format.",
              "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
              "x-parser-schema-id": "<anonymous-schema-175>"
            },
            "image": {
              "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
              ],
              "x-parser-schema-id": "<anonymous-schema-176>"
            },
            "author": {
              "description": "author of the work",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateAgent",
                    "RealEstateOffice",
                    "RealEstateTeam",
                    "RealEstateOrganization"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-181>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the author",
                  "example": "https://agent123.example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-182>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-180>"
            },
            "provider": {
              "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "enum": [
                    "RealEstateOrganization",
                    "RealEstateTeam",
                    "RealEstateOffice",
                    "RealEstateAgent"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-184>"
                },
                "id": {
                  "type": "string",
                  "format": "uri",
                  "description": "the profile URI of the provider",
                  "example": "https://example.com/profile/card#me",
                  "x-parser-schema-id": "<anonymous-schema-185>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-183>"
            },
            "dateCreated": {
              "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-186>"
            },
            "dateModified": {
              "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
              "type": "string",
              "format": "date-time",
              "x-parser-schema-id": "<anonymous-schema-187>"
            },
            "url": {
              "title": "url",
              "type": "string",
              "format": "uri",
              "description": "URL of the item.",
              "x-parser-schema-id": "<anonymous-schema-188>"
            },
            "urlTemplate": {
              "type": "string",
              "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
              "example": "https://example.com/{author/name}/blog/post?{slug}",
              "x-parser-schema-id": "<anonymous-schema-189>"
            }
          },
          "x-parser-schema-id": "BlogPosting"
        },
        "options": {}
      }
    }
  }
}


# BlogPosting

A blog post.



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "enum": [
      "BlogPosting"
    ],
    "x-parser-schema-id": "<anonymous-schema-172>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "BlogPosting",
        "type": "object",
        "x-range": "BlogPosting",
        "description": "A blog post.",
        "properties": {
          "type": {
            "enum": [
              "BlogPosting"
            ],
            "x-parser-schema-id": "<anonymous-schema-172>"
          },
          "identifier": {
            "example": {
              "aempostid": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-173>"
          },
          "headline": {
            "type": "string",
            "description": "headline of the post.",
            "example": "Top 10 Spring Cleeaning Tips",
            "x-parser-schema-id": "<anonymous-schema-174>"
          },
          "articleBody": {
            "type": "string",
            "description": "the actual body of the post in HTML format.",
            "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
            "x-parser-schema-id": "<anonymous-schema-175>"
          },
          "image": {
            "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
            ],
            "x-parser-schema-id": "<anonymous-schema-176>"
          },
          "author": {
            "description": "author of the work",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateAgent",
                  "RealEstateOffice",
                  "RealEstateTeam",
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-181>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the author",
                "example": "https://agent123.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-182>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-180>"
          },
          "provider": {
            "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateOrganization",
                  "RealEstateTeam",
                  "RealEstateOffice",
                  "RealEstateAgent"
                ],
                "x-parser-schema-id": "<anonymous-schema-184>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the provider",
                "example": "https://example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-185>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-183>"
          },
          "dateCreated": {
            "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-186>"
          },
          "dateModified": {
            "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-187>"
          },
          "url": {
            "title": "url",
            "type": "string",
            "format": "uri",
            "description": "URL of the item.",
            "x-parser-schema-id": "<anonymous-schema-188>"
          },
          "urlTemplate": {
            "type": "string",
            "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
            "example": "https://example.com/{author/name}/blog/post?{slug}",
            "x-parser-schema-id": "<anonymous-schema-189>"
          }
        },
        "x-parser-schema-id": "BlogPosting"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "example": {
      "aempostid": "xxxx"
    },
    "type": "object",
    "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
    "x-parser-schema-id": "<anonymous-schema-173>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "BlogPosting",
        "type": "object",
        "x-range": "BlogPosting",
        "description": "A blog post.",
        "properties": {
          "type": {
            "enum": [
              "BlogPosting"
            ],
            "x-parser-schema-id": "<anonymous-schema-172>"
          },
          "identifier": {
            "example": {
              "aempostid": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-173>"
          },
          "headline": {
            "type": "string",
            "description": "headline of the post.",
            "example": "Top 10 Spring Cleeaning Tips",
            "x-parser-schema-id": "<anonymous-schema-174>"
          },
          "articleBody": {
            "type": "string",
            "description": "the actual body of the post in HTML format.",
            "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
            "x-parser-schema-id": "<anonymous-schema-175>"
          },
          "image": {
            "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
            ],
            "x-parser-schema-id": "<anonymous-schema-176>"
          },
          "author": {
            "description": "author of the work",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateAgent",
                  "RealEstateOffice",
                  "RealEstateTeam",
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-181>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the author",
                "example": "https://agent123.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-182>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-180>"
          },
          "provider": {
            "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateOrganization",
                  "RealEstateTeam",
                  "RealEstateOffice",
                  "RealEstateAgent"
                ],
                "x-parser-schema-id": "<anonymous-schema-184>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the provider",
                "example": "https://example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-185>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-183>"
          },
          "dateCreated": {
            "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-186>"
          },
          "dateModified": {
            "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-187>"
          },
          "url": {
            "title": "url",
            "type": "string",
            "format": "uri",
            "description": "URL of the item.",
            "x-parser-schema-id": "<anonymous-schema-188>"
          },
          "urlTemplate": {
            "type": "string",
            "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
            "example": "https://example.com/{author/name}/blog/post?{slug}",
            "x-parser-schema-id": "<anonymous-schema-189>"
          }
        },
        "x-parser-schema-id": "BlogPosting"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "headline of the post.",
    "example": "Top 10 Spring Cleeaning Tips",
    "x-parser-schema-id": "<anonymous-schema-174>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "BlogPosting",
        "type": "object",
        "x-range": "BlogPosting",
        "description": "A blog post.",
        "properties": {
          "type": {
            "enum": [
              "BlogPosting"
            ],
            "x-parser-schema-id": "<anonymous-schema-172>"
          },
          "identifier": {
            "example": {
              "aempostid": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-173>"
          },
          "headline": {
            "type": "string",
            "description": "headline of the post.",
            "example": "Top 10 Spring Cleeaning Tips",
            "x-parser-schema-id": "<anonymous-schema-174>"
          },
          "articleBody": {
            "type": "string",
            "description": "the actual body of the post in HTML format.",
            "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
            "x-parser-schema-id": "<anonymous-schema-175>"
          },
          "image": {
            "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
            ],
            "x-parser-schema-id": "<anonymous-schema-176>"
          },
          "author": {
            "description": "author of the work",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateAgent",
                  "RealEstateOffice",
                  "RealEstateTeam",
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-181>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the author",
                "example": "https://agent123.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-182>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-180>"
          },
          "provider": {
            "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateOrganization",
                  "RealEstateTeam",
                  "RealEstateOffice",
                  "RealEstateAgent"
                ],
                "x-parser-schema-id": "<anonymous-schema-184>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the provider",
                "example": "https://example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-185>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-183>"
          },
          "dateCreated": {
            "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-186>"
          },
          "dateModified": {
            "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-187>"
          },
          "url": {
            "title": "url",
            "type": "string",
            "format": "uri",
            "description": "URL of the item.",
            "x-parser-schema-id": "<anonymous-schema-188>"
          },
          "urlTemplate": {
            "type": "string",
            "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
            "example": "https://example.com/{author/name}/blog/post?{slug}",
            "x-parser-schema-id": "<anonymous-schema-189>"
          }
        },
        "x-parser-schema-id": "BlogPosting"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "the actual body of the post in HTML format.",
    "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
    "x-parser-schema-id": "<anonymous-schema-175>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "BlogPosting",
        "type": "object",
        "x-range": "BlogPosting",
        "description": "A blog post.",
        "properties": {
          "type": {
            "enum": [
              "BlogPosting"
            ],
            "x-parser-schema-id": "<anonymous-schema-172>"
          },
          "identifier": {
            "example": {
              "aempostid": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-173>"
          },
          "headline": {
            "type": "string",
            "description": "headline of the post.",
            "example": "Top 10 Spring Cleeaning Tips",
            "x-parser-schema-id": "<anonymous-schema-174>"
          },
          "articleBody": {
            "type": "string",
            "description": "the actual body of the post in HTML format.",
            "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
            "x-parser-schema-id": "<anonymous-schema-175>"
          },
          "image": {
            "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
            ],
            "x-parser-schema-id": "<anonymous-schema-176>"
          },
          "author": {
            "description": "author of the work",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateAgent",
                  "RealEstateOffice",
                  "RealEstateTeam",
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-181>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the author",
                "example": "https://agent123.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-182>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-180>"
          },
          "provider": {
            "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateOrganization",
                  "RealEstateTeam",
                  "RealEstateOffice",
                  "RealEstateAgent"
                ],
                "x-parser-schema-id": "<anonymous-schema-184>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the provider",
                "example": "https://example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-185>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-183>"
          },
          "dateCreated": {
            "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-186>"
          },
          "dateModified": {
            "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-187>"
          },
          "url": {
            "title": "url",
            "type": "string",
            "format": "uri",
            "description": "URL of the item.",
            "x-parser-schema-id": "<anonymous-schema-188>"
          },
          "urlTemplate": {
            "type": "string",
            "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
            "example": "https://example.com/{author/name}/blog/post?{slug}",
            "x-parser-schema-id": "<anonymous-schema-189>"
          }
        },
        "x-parser-schema-id": "BlogPosting"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
    ],
    "x-parser-schema-id": "<anonymous-schema-176>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "BlogPosting",
        "type": "object",
        "x-range": "BlogPosting",
        "description": "A blog post.",
        "properties": {
          "type": {
            "enum": [
              "BlogPosting"
            ],
            "x-parser-schema-id": "<anonymous-schema-172>"
          },
          "identifier": {
            "example": {
              "aempostid": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-173>"
          },
          "headline": {
            "type": "string",
            "description": "headline of the post.",
            "example": "Top 10 Spring Cleeaning Tips",
            "x-parser-schema-id": "<anonymous-schema-174>"
          },
          "articleBody": {
            "type": "string",
            "description": "the actual body of the post in HTML format.",
            "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
            "x-parser-schema-id": "<anonymous-schema-175>"
          },
          "image": {
            "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
            ],
            "x-parser-schema-id": "<anonymous-schema-176>"
          },
          "author": {
            "description": "author of the work",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateAgent",
                  "RealEstateOffice",
                  "RealEstateTeam",
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-181>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the author",
                "example": "https://agent123.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-182>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-180>"
          },
          "provider": {
            "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateOrganization",
                  "RealEstateTeam",
                  "RealEstateOffice",
                  "RealEstateAgent"
                ],
                "x-parser-schema-id": "<anonymous-schema-184>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the provider",
                "example": "https://example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-185>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-183>"
          },
          "dateCreated": {
            "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-186>"
          },
          "dateModified": {
            "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-187>"
          },
          "url": {
            "title": "url",
            "type": "string",
            "format": "uri",
            "description": "URL of the item.",
            "x-parser-schema-id": "<anonymous-schema-188>"
          },
          "urlTemplate": {
            "type": "string",
            "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
            "example": "https://example.com/{author/name}/blog/post?{slug}",
            "x-parser-schema-id": "<anonymous-schema-189>"
          }
        },
        "x-parser-schema-id": "BlogPosting"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "author of the work",
    "type": "object",
    "properties": {
      "type": {
        "type": "string",
        "enum": [
          "RealEstateAgent",
          "RealEstateOffice",
          "RealEstateTeam",
          "RealEstateOrganization"
        ],
        "x-parser-schema-id": "<anonymous-schema-181>"
      },
      "id": {
        "type": "string",
        "format": "uri",
        "description": "the profile URI of the author",
        "example": "https://agent123.example.com/profile/card#me",
        "x-parser-schema-id": "<anonymous-schema-182>"
      }
    },
    "x-parser-schema-id": "<anonymous-schema-180>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "BlogPosting",
        "type": "object",
        "x-range": "BlogPosting",
        "description": "A blog post.",
        "properties": {
          "type": {
            "enum": [
              "BlogPosting"
            ],
            "x-parser-schema-id": "<anonymous-schema-172>"
          },
          "identifier": {
            "example": {
              "aempostid": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-173>"
          },
          "headline": {
            "type": "string",
            "description": "headline of the post.",
            "example": "Top 10 Spring Cleeaning Tips",
            "x-parser-schema-id": "<anonymous-schema-174>"
          },
          "articleBody": {
            "type": "string",
            "description": "the actual body of the post in HTML format.",
            "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
            "x-parser-schema-id": "<anonymous-schema-175>"
          },
          "image": {
            "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
            ],
            "x-parser-schema-id": "<anonymous-schema-176>"
          },
          "author": {
            "description": "author of the work",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateAgent",
                  "RealEstateOffice",
                  "RealEstateTeam",
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-181>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the author",
                "example": "https://agent123.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-182>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-180>"
          },
          "provider": {
            "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateOrganization",
                  "RealEstateTeam",
                  "RealEstateOffice",
                  "RealEstateAgent"
                ],
                "x-parser-schema-id": "<anonymous-schema-184>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the provider",
                "example": "https://example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-185>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-183>"
          },
          "dateCreated": {
            "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-186>"
          },
          "dateModified": {
            "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-187>"
          },
          "url": {
            "title": "url",
            "type": "string",
            "format": "uri",
            "description": "URL of the item.",
            "x-parser-schema-id": "<anonymous-schema-188>"
          },
          "urlTemplate": {
            "type": "string",
            "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
            "example": "https://example.com/{author/name}/blog/post?{slug}",
            "x-parser-schema-id": "<anonymous-schema-189>"
          }
        },
        "x-parser-schema-id": "BlogPosting"
      },
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;enum&quot;: [
      &quot;RealEstateAgent&quot;,
      &quot;RealEstateOffice&quot;,
      &quot;RealEstateTeam&quot;,
      &quot;RealEstateOrganization&quot;
    ],
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-181&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;description&quot;: &quot;author of the work&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;enum&quot;: [
              &quot;RealEstateAgent&quot;,
              &quot;RealEstateOffice&quot;,
              &quot;RealEstateTeam&quot;,
              &quot;RealEstateOrganization&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-181&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;description&quot;: &quot;the profile URI of the author&quot;,
            &quot;example&quot;: &quot;https://agent123.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-182&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-180&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;BlogPosting&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;BlogPosting&quot;,
            &quot;description&quot;: &quot;A blog post.&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;enum&quot;: [
                  &quot;BlogPosting&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-172&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;example&quot;: {
                  &quot;aempostid&quot;: &quot;xxxx&quot;
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-173&gt;&quot;
              },
              &quot;headline&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;headline of the post.&quot;,
                &quot;example&quot;: &quot;Top 10 Spring Cleeaning Tips&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-174&gt;&quot;
              },
              &quot;articleBody&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the actual body of the post in HTML format.&quot;,
                &quot;example&quot;: &quot;&lt;HTML&gt;&lt;body&gt;lorem ipsum dolor sit amet, consectetur adipiscing&lt;/body&gt;&lt;/HTML&gt;&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-175&gt;&quot;
              },
              &quot;image&quot;: {
                &quot;description&quot;: &quot;by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.&quot;,
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
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-176&gt;&quot;
              },
              &quot;author&quot;: {
                &quot;description&quot;: &quot;author of the work&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateAgent&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;RealEstateTeam&quot;,
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-181&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;the profile URI of the author&quot;,
                    &quot;example&quot;: &quot;https://agent123.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-182&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-180&gt;&quot;
              },
              &quot;provider&quot;: {
                &quot;description&quot;: &quot;if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;,
                      &quot;RealEstateTeam&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-184&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;the profile URI of the provider&quot;,
                    &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-185&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-183&gt;&quot;
              },
              &quot;dateCreated&quot;: {
                &quot;description&quot;: &quot;The date on which the BlogPosting was created or the item was added to a DataFeed.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-186&gt;&quot;
              },
              &quot;dateModified&quot;: {
                &quot;description&quot;: &quot;The date on which the BlogPosting was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-187&gt;&quot;
              },
              &quot;url&quot;: {
                &quot;title&quot;: &quot;url&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;URL of the item.&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-188&gt;&quot;
              },
              &quot;urlTemplate&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)&quot;,
                &quot;example&quot;: &quot;https://example.com/{author/name}/blog/post?{slug}&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-189&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;BlogPosting&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = type
required = false
path = author



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;format&quot;: &quot;uri&quot;,
    &quot;description&quot;: &quot;the profile URI of the author&quot;,
    &quot;example&quot;: &quot;https://agent123.example.com/profile/card#me&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-182&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;description&quot;: &quot;author of the work&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;enum&quot;: [
              &quot;RealEstateAgent&quot;,
              &quot;RealEstateOffice&quot;,
              &quot;RealEstateTeam&quot;,
              &quot;RealEstateOrganization&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-181&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;description&quot;: &quot;the profile URI of the author&quot;,
            &quot;example&quot;: &quot;https://agent123.example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-182&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-180&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;BlogPosting&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;BlogPosting&quot;,
            &quot;description&quot;: &quot;A blog post.&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;enum&quot;: [
                  &quot;BlogPosting&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-172&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;example&quot;: {
                  &quot;aempostid&quot;: &quot;xxxx&quot;
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-173&gt;&quot;
              },
              &quot;headline&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;headline of the post.&quot;,
                &quot;example&quot;: &quot;Top 10 Spring Cleeaning Tips&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-174&gt;&quot;
              },
              &quot;articleBody&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the actual body of the post in HTML format.&quot;,
                &quot;example&quot;: &quot;&lt;HTML&gt;&lt;body&gt;lorem ipsum dolor sit amet, consectetur adipiscing&lt;/body&gt;&lt;/HTML&gt;&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-175&gt;&quot;
              },
              &quot;image&quot;: {
                &quot;description&quot;: &quot;by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.&quot;,
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
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-176&gt;&quot;
              },
              &quot;author&quot;: {
                &quot;description&quot;: &quot;author of the work&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateAgent&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;RealEstateTeam&quot;,
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-181&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;the profile URI of the author&quot;,
                    &quot;example&quot;: &quot;https://agent123.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-182&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-180&gt;&quot;
              },
              &quot;provider&quot;: {
                &quot;description&quot;: &quot;if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;,
                      &quot;RealEstateTeam&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-184&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;the profile URI of the provider&quot;,
                    &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-185&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-183&gt;&quot;
              },
              &quot;dateCreated&quot;: {
                &quot;description&quot;: &quot;The date on which the BlogPosting was created or the item was added to a DataFeed.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-186&gt;&quot;
              },
              &quot;dateModified&quot;: {
                &quot;description&quot;: &quot;The date on which the BlogPosting was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-187&gt;&quot;
              },
              &quot;url&quot;: {
                &quot;title&quot;: &quot;url&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;URL of the item.&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-188&gt;&quot;
              },
              &quot;urlTemplate&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)&quot;,
                &quot;example&quot;: &quot;https://example.com/{author/name}/blog/post?{slug}&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-189&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;BlogPosting&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = id
required = false
path = author





{
  "_json": {
    "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
    "type": "object",
    "properties": {
      "type": {
        "type": "string",
        "enum": [
          "RealEstateOrganization",
          "RealEstateTeam",
          "RealEstateOffice",
          "RealEstateAgent"
        ],
        "x-parser-schema-id": "<anonymous-schema-184>"
      },
      "id": {
        "type": "string",
        "format": "uri",
        "description": "the profile URI of the provider",
        "example": "https://example.com/profile/card#me",
        "x-parser-schema-id": "<anonymous-schema-185>"
      }
    },
    "x-parser-schema-id": "<anonymous-schema-183>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "BlogPosting",
        "type": "object",
        "x-range": "BlogPosting",
        "description": "A blog post.",
        "properties": {
          "type": {
            "enum": [
              "BlogPosting"
            ],
            "x-parser-schema-id": "<anonymous-schema-172>"
          },
          "identifier": {
            "example": {
              "aempostid": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-173>"
          },
          "headline": {
            "type": "string",
            "description": "headline of the post.",
            "example": "Top 10 Spring Cleeaning Tips",
            "x-parser-schema-id": "<anonymous-schema-174>"
          },
          "articleBody": {
            "type": "string",
            "description": "the actual body of the post in HTML format.",
            "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
            "x-parser-schema-id": "<anonymous-schema-175>"
          },
          "image": {
            "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
            ],
            "x-parser-schema-id": "<anonymous-schema-176>"
          },
          "author": {
            "description": "author of the work",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateAgent",
                  "RealEstateOffice",
                  "RealEstateTeam",
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-181>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the author",
                "example": "https://agent123.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-182>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-180>"
          },
          "provider": {
            "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateOrganization",
                  "RealEstateTeam",
                  "RealEstateOffice",
                  "RealEstateAgent"
                ],
                "x-parser-schema-id": "<anonymous-schema-184>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the provider",
                "example": "https://example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-185>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-183>"
          },
          "dateCreated": {
            "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-186>"
          },
          "dateModified": {
            "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-187>"
          },
          "url": {
            "title": "url",
            "type": "string",
            "format": "uri",
            "description": "URL of the item.",
            "x-parser-schema-id": "<anonymous-schema-188>"
          },
          "urlTemplate": {
            "type": "string",
            "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
            "example": "https://example.com/{author/name}/blog/post?{slug}",
            "x-parser-schema-id": "<anonymous-schema-189>"
          }
        },
        "x-parser-schema-id": "BlogPosting"
      },
      "options": {}
    }
  }
}




prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;enum&quot;: [
      &quot;RealEstateOrganization&quot;,
      &quot;RealEstateTeam&quot;,
      &quot;RealEstateOffice&quot;,
      &quot;RealEstateAgent&quot;
    ],
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-184&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;description&quot;: &quot;if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;enum&quot;: [
              &quot;RealEstateOrganization&quot;,
              &quot;RealEstateTeam&quot;,
              &quot;RealEstateOffice&quot;,
              &quot;RealEstateAgent&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-184&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;description&quot;: &quot;the profile URI of the provider&quot;,
            &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-185&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-183&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;BlogPosting&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;BlogPosting&quot;,
            &quot;description&quot;: &quot;A blog post.&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;enum&quot;: [
                  &quot;BlogPosting&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-172&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;example&quot;: {
                  &quot;aempostid&quot;: &quot;xxxx&quot;
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-173&gt;&quot;
              },
              &quot;headline&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;headline of the post.&quot;,
                &quot;example&quot;: &quot;Top 10 Spring Cleeaning Tips&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-174&gt;&quot;
              },
              &quot;articleBody&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the actual body of the post in HTML format.&quot;,
                &quot;example&quot;: &quot;&lt;HTML&gt;&lt;body&gt;lorem ipsum dolor sit amet, consectetur adipiscing&lt;/body&gt;&lt;/HTML&gt;&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-175&gt;&quot;
              },
              &quot;image&quot;: {
                &quot;description&quot;: &quot;by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.&quot;,
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
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-176&gt;&quot;
              },
              &quot;author&quot;: {
                &quot;description&quot;: &quot;author of the work&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateAgent&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;RealEstateTeam&quot;,
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-181&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;the profile URI of the author&quot;,
                    &quot;example&quot;: &quot;https://agent123.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-182&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-180&gt;&quot;
              },
              &quot;provider&quot;: {
                &quot;description&quot;: &quot;if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;,
                      &quot;RealEstateTeam&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-184&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;the profile URI of the provider&quot;,
                    &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-185&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-183&gt;&quot;
              },
              &quot;dateCreated&quot;: {
                &quot;description&quot;: &quot;The date on which the BlogPosting was created or the item was added to a DataFeed.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-186&gt;&quot;
              },
              &quot;dateModified&quot;: {
                &quot;description&quot;: &quot;The date on which the BlogPosting was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-187&gt;&quot;
              },
              &quot;url&quot;: {
                &quot;title&quot;: &quot;url&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;URL of the item.&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-188&gt;&quot;
              },
              &quot;urlTemplate&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)&quot;,
                &quot;example&quot;: &quot;https://example.com/{author/name}/blog/post?{slug}&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-189&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;BlogPosting&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = type
required = false
path = provider



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;string&quot;,
    &quot;format&quot;: &quot;uri&quot;,
    &quot;description&quot;: &quot;the profile URI of the provider&quot;,
    &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-185&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;description&quot;: &quot;if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;enum&quot;: [
              &quot;RealEstateOrganization&quot;,
              &quot;RealEstateTeam&quot;,
              &quot;RealEstateOffice&quot;,
              &quot;RealEstateAgent&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-184&gt;&quot;
          },
          &quot;id&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;format&quot;: &quot;uri&quot;,
            &quot;description&quot;: &quot;the profile URI of the provider&quot;,
            &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-185&gt;&quot;
          }
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-183&gt;&quot;
      },
      &quot;options&quot;: {
        &quot;parent&quot;: {
          &quot;_json&quot;: {
            &quot;title&quot;: &quot;BlogPosting&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;x-range&quot;: &quot;BlogPosting&quot;,
            &quot;description&quot;: &quot;A blog post.&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;enum&quot;: [
                  &quot;BlogPosting&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-172&gt;&quot;
              },
              &quot;identifier&quot;: {
                &quot;example&quot;: {
                  &quot;aempostid&quot;: &quot;xxxx&quot;
                },
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-173&gt;&quot;
              },
              &quot;headline&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;headline of the post.&quot;,
                &quot;example&quot;: &quot;Top 10 Spring Cleeaning Tips&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-174&gt;&quot;
              },
              &quot;articleBody&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the actual body of the post in HTML format.&quot;,
                &quot;example&quot;: &quot;&lt;HTML&gt;&lt;body&gt;lorem ipsum dolor sit amet, consectetur adipiscing&lt;/body&gt;&lt;/HTML&gt;&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-175&gt;&quot;
              },
              &quot;image&quot;: {
                &quot;description&quot;: &quot;by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.&quot;,
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
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-176&gt;&quot;
              },
              &quot;author&quot;: {
                &quot;description&quot;: &quot;author of the work&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateAgent&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;RealEstateTeam&quot;,
                      &quot;RealEstateOrganization&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-181&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;the profile URI of the author&quot;,
                    &quot;example&quot;: &quot;https://agent123.example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-182&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-180&gt;&quot;
              },
              &quot;provider&quot;: {
                &quot;description&quot;: &quot;if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;enum&quot;: [
                      &quot;RealEstateOrganization&quot;,
                      &quot;RealEstateTeam&quot;,
                      &quot;RealEstateOffice&quot;,
                      &quot;RealEstateAgent&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-184&gt;&quot;
                  },
                  &quot;id&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;format&quot;: &quot;uri&quot;,
                    &quot;description&quot;: &quot;the profile URI of the provider&quot;,
                    &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-185&gt;&quot;
                  }
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-183&gt;&quot;
              },
              &quot;dateCreated&quot;: {
                &quot;description&quot;: &quot;The date on which the BlogPosting was created or the item was added to a DataFeed.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-186&gt;&quot;
              },
              &quot;dateModified&quot;: {
                &quot;description&quot;: &quot;The date on which the BlogPosting was most recently modified or when the item&#39;s entry was modified within a DataFeed.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date-time&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-187&gt;&quot;
              },
              &quot;url&quot;: {
                &quot;title&quot;: &quot;url&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;URL of the item.&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-188&gt;&quot;
              },
              &quot;urlTemplate&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)&quot;,
                &quot;example&quot;: &quot;https://example.com/{author/name}/blog/post?{slug}&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-189&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;BlogPosting&quot;
          },
          &quot;options&quot;: {}
        }
      }
    }
  }
}
pname = id
required = false
path = provider





{
  "_json": {
    "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
    "type": "string",
    "format": "date-time",
    "x-parser-schema-id": "<anonymous-schema-186>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "BlogPosting",
        "type": "object",
        "x-range": "BlogPosting",
        "description": "A blog post.",
        "properties": {
          "type": {
            "enum": [
              "BlogPosting"
            ],
            "x-parser-schema-id": "<anonymous-schema-172>"
          },
          "identifier": {
            "example": {
              "aempostid": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-173>"
          },
          "headline": {
            "type": "string",
            "description": "headline of the post.",
            "example": "Top 10 Spring Cleeaning Tips",
            "x-parser-schema-id": "<anonymous-schema-174>"
          },
          "articleBody": {
            "type": "string",
            "description": "the actual body of the post in HTML format.",
            "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
            "x-parser-schema-id": "<anonymous-schema-175>"
          },
          "image": {
            "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
            ],
            "x-parser-schema-id": "<anonymous-schema-176>"
          },
          "author": {
            "description": "author of the work",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateAgent",
                  "RealEstateOffice",
                  "RealEstateTeam",
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-181>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the author",
                "example": "https://agent123.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-182>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-180>"
          },
          "provider": {
            "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateOrganization",
                  "RealEstateTeam",
                  "RealEstateOffice",
                  "RealEstateAgent"
                ],
                "x-parser-schema-id": "<anonymous-schema-184>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the provider",
                "example": "https://example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-185>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-183>"
          },
          "dateCreated": {
            "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-186>"
          },
          "dateModified": {
            "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-187>"
          },
          "url": {
            "title": "url",
            "type": "string",
            "format": "uri",
            "description": "URL of the item.",
            "x-parser-schema-id": "<anonymous-schema-188>"
          },
          "urlTemplate": {
            "type": "string",
            "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
            "example": "https://example.com/{author/name}/blog/post?{slug}",
            "x-parser-schema-id": "<anonymous-schema-189>"
          }
        },
        "x-parser-schema-id": "BlogPosting"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
    "type": "string",
    "format": "date-time",
    "x-parser-schema-id": "<anonymous-schema-187>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "BlogPosting",
        "type": "object",
        "x-range": "BlogPosting",
        "description": "A blog post.",
        "properties": {
          "type": {
            "enum": [
              "BlogPosting"
            ],
            "x-parser-schema-id": "<anonymous-schema-172>"
          },
          "identifier": {
            "example": {
              "aempostid": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-173>"
          },
          "headline": {
            "type": "string",
            "description": "headline of the post.",
            "example": "Top 10 Spring Cleeaning Tips",
            "x-parser-schema-id": "<anonymous-schema-174>"
          },
          "articleBody": {
            "type": "string",
            "description": "the actual body of the post in HTML format.",
            "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
            "x-parser-schema-id": "<anonymous-schema-175>"
          },
          "image": {
            "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
            ],
            "x-parser-schema-id": "<anonymous-schema-176>"
          },
          "author": {
            "description": "author of the work",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateAgent",
                  "RealEstateOffice",
                  "RealEstateTeam",
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-181>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the author",
                "example": "https://agent123.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-182>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-180>"
          },
          "provider": {
            "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateOrganization",
                  "RealEstateTeam",
                  "RealEstateOffice",
                  "RealEstateAgent"
                ],
                "x-parser-schema-id": "<anonymous-schema-184>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the provider",
                "example": "https://example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-185>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-183>"
          },
          "dateCreated": {
            "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-186>"
          },
          "dateModified": {
            "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-187>"
          },
          "url": {
            "title": "url",
            "type": "string",
            "format": "uri",
            "description": "URL of the item.",
            "x-parser-schema-id": "<anonymous-schema-188>"
          },
          "urlTemplate": {
            "type": "string",
            "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
            "example": "https://example.com/{author/name}/blog/post?{slug}",
            "x-parser-schema-id": "<anonymous-schema-189>"
          }
        },
        "x-parser-schema-id": "BlogPosting"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "title": "url",
    "type": "string",
    "format": "uri",
    "description": "URL of the item.",
    "x-parser-schema-id": "<anonymous-schema-188>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "BlogPosting",
        "type": "object",
        "x-range": "BlogPosting",
        "description": "A blog post.",
        "properties": {
          "type": {
            "enum": [
              "BlogPosting"
            ],
            "x-parser-schema-id": "<anonymous-schema-172>"
          },
          "identifier": {
            "example": {
              "aempostid": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-173>"
          },
          "headline": {
            "type": "string",
            "description": "headline of the post.",
            "example": "Top 10 Spring Cleeaning Tips",
            "x-parser-schema-id": "<anonymous-schema-174>"
          },
          "articleBody": {
            "type": "string",
            "description": "the actual body of the post in HTML format.",
            "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
            "x-parser-schema-id": "<anonymous-schema-175>"
          },
          "image": {
            "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
            ],
            "x-parser-schema-id": "<anonymous-schema-176>"
          },
          "author": {
            "description": "author of the work",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateAgent",
                  "RealEstateOffice",
                  "RealEstateTeam",
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-181>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the author",
                "example": "https://agent123.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-182>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-180>"
          },
          "provider": {
            "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateOrganization",
                  "RealEstateTeam",
                  "RealEstateOffice",
                  "RealEstateAgent"
                ],
                "x-parser-schema-id": "<anonymous-schema-184>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the provider",
                "example": "https://example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-185>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-183>"
          },
          "dateCreated": {
            "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-186>"
          },
          "dateModified": {
            "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-187>"
          },
          "url": {
            "title": "url",
            "type": "string",
            "format": "uri",
            "description": "URL of the item.",
            "x-parser-schema-id": "<anonymous-schema-188>"
          },
          "urlTemplate": {
            "type": "string",
            "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
            "example": "https://example.com/{author/name}/blog/post?{slug}",
            "x-parser-schema-id": "<anonymous-schema-189>"
          }
        },
        "x-parser-schema-id": "BlogPosting"
      },
      "options": {}
    }
  }
}






{
  "_json": {
    "type": "string",
    "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
    "example": "https://example.com/{author/name}/blog/post?{slug}",
    "x-parser-schema-id": "<anonymous-schema-189>"
  },
  "options": {
    "parent": {
      "_json": {
        "title": "BlogPosting",
        "type": "object",
        "x-range": "BlogPosting",
        "description": "A blog post.",
        "properties": {
          "type": {
            "enum": [
              "BlogPosting"
            ],
            "x-parser-schema-id": "<anonymous-schema-172>"
          },
          "identifier": {
            "example": {
              "aempostid": "xxxx"
            },
            "type": "object",
            "description": "key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.",
            "x-parser-schema-id": "<anonymous-schema-173>"
          },
          "headline": {
            "type": "string",
            "description": "headline of the post.",
            "example": "Top 10 Spring Cleeaning Tips",
            "x-parser-schema-id": "<anonymous-schema-174>"
          },
          "articleBody": {
            "type": "string",
            "description": "the actual body of the post in HTML format.",
            "example": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
            "x-parser-schema-id": "<anonymous-schema-175>"
          },
          "image": {
            "description": "by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.",
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
            ],
            "x-parser-schema-id": "<anonymous-schema-176>"
          },
          "author": {
            "description": "author of the work",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateAgent",
                  "RealEstateOffice",
                  "RealEstateTeam",
                  "RealEstateOrganization"
                ],
                "x-parser-schema-id": "<anonymous-schema-181>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the author",
                "example": "https://agent123.example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-182>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-180>"
          },
          "provider": {
            "description": "if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.",
            "type": "object",
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "RealEstateOrganization",
                  "RealEstateTeam",
                  "RealEstateOffice",
                  "RealEstateAgent"
                ],
                "x-parser-schema-id": "<anonymous-schema-184>"
              },
              "id": {
                "type": "string",
                "format": "uri",
                "description": "the profile URI of the provider",
                "example": "https://example.com/profile/card#me",
                "x-parser-schema-id": "<anonymous-schema-185>"
              }
            },
            "x-parser-schema-id": "<anonymous-schema-183>"
          },
          "dateCreated": {
            "description": "The date on which the BlogPosting was created or the item was added to a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-186>"
          },
          "dateModified": {
            "description": "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
            "type": "string",
            "format": "date-time",
            "x-parser-schema-id": "<anonymous-schema-187>"
          },
          "url": {
            "title": "url",
            "type": "string",
            "format": "uri",
            "description": "URL of the item.",
            "x-parser-schema-id": "<anonymous-schema-188>"
          },
          "urlTemplate": {
            "type": "string",
            "description": "urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)",
            "example": "https://example.com/{author/name}/blog/post?{slug}",
            "x-parser-schema-id": "<anonymous-schema-189>"
          }
        },
        "x-parser-schema-id": "BlogPosting"
      },
      "options": {}
    }
  }
}










### Example

```json
{
  "type": "BlogPosting",
  "identifier": {
    "aempostid": "xxxx"
  },
  "headline": "Top 10 Spring Cleeaning Tips",
  "articleBody": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
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
  "author": {
    "type": "RealEstateAgent",
    "id": "https://agent123.example.com/profile/card#me"
  },
  "provider": {
    "type": "RealEstateOrganization",
    "id": "https://example.com/profile/card#me"
  },
  "dateCreated": "2019-08-24T14:15:22Z",
  "dateModified": "2019-08-24T14:15:22Z",
  "url": "http://example.com",
  "urlTemplate": "https://example.com/{author/name}/blog/post?{slug}"
}
```

