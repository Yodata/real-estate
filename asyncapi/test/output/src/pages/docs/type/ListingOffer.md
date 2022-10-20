

---
title: ListingOffer
---

{}


# ListingOffer





### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
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
        "description": "an offer is made to buy a PropertyListing",
        "x-range": "ListingOffer",
        "required": [
          "type",
          "agent",
          "object",
          "recipient",
          "offerPrice"
        ],
        "properties": {
          "type": {
            "enum": [
              "ListingOffer"
            ]
          },
          "agent": {
            "description": "the Person or Contact who makes the offer"
          },
          "offerPrice": {
            "description": "the offer price or range",
            "type": "object",
            "title": "PriceSpecification",
            "x-range": "PriceSpecification",
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
            }
          },
          "object": {
            "type": "object",
            "x-range": [
              "Comment",
              "Question"
            ],
            "example": {
              "type": "Comment",
              "text": "take it or leave it."
            }
          },
          "propertyListing": {
            "type": "object",
            "description": "the listing on which the offer is made.",
            "example": {
              "type": "PropertyListing",
              "originatingSystemName": "GOTHAM-MLS",
              "originatingSystemKey": "12345",
              "url": "https://{company-website-url}/{path-to-listing}",
              "streetAddress": "1007 Mountain Gate Rd",
              "addressRegion": "New Jersey",
              "addressLocality": "Gotham City",
              "postalCode": "10010",
              "addressCountry": "USA",
              "listingPrice": {
                "type": "PriceSpecification",
                "price": 7500000,
                "priceCurrency": "USD"
              }
            }
          },
          "recipient": {
            "description": "listing agent or offer recipient",
            "type": "object",
            "x-range": [
              "RealEstateAgent",
              "RealEstateOrganization"
            ],
            "example": {
              "type": "RealEstateAgent",
              "name": "Randy RealEstateAgent",
              "id": "https://{agentid}.example.com/profile/card#me"
            }
          }
        },
        "x-parser-schema-id": "<anonymous-schema-308>"
      }
    ],
    "x-parser-schema-id": "ListingOffer"
  },
  "options": {}
}



prop = {
  &quot;_json&quot;: {
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
  &quot;options&quot;: {
    &quot;parent&quot;: {
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
            &quot;description&quot;: &quot;an offer is made to buy a PropertyListing&quot;,
            &quot;x-range&quot;: &quot;ListingOffer&quot;,
            &quot;required&quot;: [
              &quot;type&quot;,
              &quot;agent&quot;,
              &quot;object&quot;,
              &quot;recipient&quot;,
              &quot;offerPrice&quot;
            ],
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;enum&quot;: [
                  &quot;ListingOffer&quot;
                ]
              },
              &quot;agent&quot;: {
                &quot;description&quot;: &quot;the Person or Contact who makes the offer&quot;
              },
              &quot;offerPrice&quot;: {
                &quot;description&quot;: &quot;the offer price or range&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;PriceSpecification&quot;,
                &quot;x-range&quot;: &quot;PriceSpecification&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;PriceSpecification&quot;,
                    &quot;enum&quot;: [
                      &quot;PriceSpecification&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-376&gt;&quot;
                  },
                  &quot;minPrice&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the low price offered if price is a range.&quot;,
                    &quot;example&quot;: 75000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-377&gt;&quot;
                  },
                  &quot;maxPrice&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the high price offered if price is a range.&quot;,
                    &quot;example&quot;: 100000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-378&gt;&quot;
                  },
                  &quot;price&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the offer price.&quot;,
                    &quot;example&quot;: 75000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-379&gt;&quot;
                  },
                  &quot;priceCurrency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217&quot;,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-380&gt;&quot;
                  }
                }
              },
              &quot;object&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: [
                  &quot;Comment&quot;,
                  &quot;Question&quot;
                ],
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;Comment&quot;,
                  &quot;text&quot;: &quot;take it or leave it.&quot;
                }
              },
              &quot;propertyListing&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the listing on which the offer is made.&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;PropertyListing&quot;,
                  &quot;originatingSystemName&quot;: &quot;GOTHAM-MLS&quot;,
                  &quot;originatingSystemKey&quot;: &quot;12345&quot;,
                  &quot;url&quot;: &quot;https://{company-website-url}/{path-to-listing}&quot;,
                  &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                  &quot;addressRegion&quot;: &quot;New Jersey&quot;,
                  &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                  &quot;postalCode&quot;: &quot;10010&quot;,
                  &quot;addressCountry&quot;: &quot;USA&quot;,
                  &quot;listingPrice&quot;: {
                    &quot;type&quot;: &quot;PriceSpecification&quot;,
                    &quot;price&quot;: 7500000,
                    &quot;priceCurrency&quot;: &quot;USD&quot;
                  }
                }
              },
              &quot;recipient&quot;: {
                &quot;description&quot;: &quot;listing agent or offer recipient&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateAgent&quot;,
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;RealEstateAgent&quot;,
                  &quot;name&quot;: &quot;Randy RealEstateAgent&quot;,
                  &quot;id&quot;: &quot;https://{agentid}.example.com/profile/card#me&quot;
                }
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-308&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;ListingOffer&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;1&gt;
required = 
path = ListingOffer




prop = {
  &quot;_json&quot;: {
    &quot;description&quot;: &quot;an offer is made to buy a PropertyListing&quot;,
    &quot;x-range&quot;: &quot;ListingOffer&quot;,
    &quot;required&quot;: [
      &quot;type&quot;,
      &quot;agent&quot;,
      &quot;object&quot;,
      &quot;recipient&quot;,
      &quot;offerPrice&quot;
    ],
    &quot;properties&quot;: {
      &quot;type&quot;: {
        &quot;enum&quot;: [
          &quot;ListingOffer&quot;
        ]
      },
      &quot;agent&quot;: {
        &quot;description&quot;: &quot;the Person or Contact who makes the offer&quot;
      },
      &quot;offerPrice&quot;: {
        &quot;description&quot;: &quot;the offer price or range&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;title&quot;: &quot;PriceSpecification&quot;,
        &quot;x-range&quot;: &quot;PriceSpecification&quot;,
        &quot;properties&quot;: {
          &quot;type&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;PriceSpecification&quot;,
            &quot;enum&quot;: [
              &quot;PriceSpecification&quot;
            ],
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-376&gt;&quot;
          },
          &quot;minPrice&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the low price offered if price is a range.&quot;,
            &quot;example&quot;: 75000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-377&gt;&quot;
          },
          &quot;maxPrice&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the high price offered if price is a range.&quot;,
            &quot;example&quot;: 100000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-378&gt;&quot;
          },
          &quot;price&quot;: {
            &quot;type&quot;: &quot;number&quot;,
            &quot;description&quot;: &quot;the offer price.&quot;,
            &quot;example&quot;: 75000,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-379&gt;&quot;
          },
          &quot;priceCurrency&quot;: {
            &quot;type&quot;: &quot;string&quot;,
            &quot;description&quot;: &quot;use ISO4217&quot;,
            &quot;example&quot;: &quot;USD&quot;,
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-380&gt;&quot;
          }
        }
      },
      &quot;object&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;x-range&quot;: [
          &quot;Comment&quot;,
          &quot;Question&quot;
        ],
        &quot;example&quot;: {
          &quot;type&quot;: &quot;Comment&quot;,
          &quot;text&quot;: &quot;take it or leave it.&quot;
        }
      },
      &quot;propertyListing&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;description&quot;: &quot;the listing on which the offer is made.&quot;,
        &quot;example&quot;: {
          &quot;type&quot;: &quot;PropertyListing&quot;,
          &quot;originatingSystemName&quot;: &quot;GOTHAM-MLS&quot;,
          &quot;originatingSystemKey&quot;: &quot;12345&quot;,
          &quot;url&quot;: &quot;https://{company-website-url}/{path-to-listing}&quot;,
          &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
          &quot;addressRegion&quot;: &quot;New Jersey&quot;,
          &quot;addressLocality&quot;: &quot;Gotham City&quot;,
          &quot;postalCode&quot;: &quot;10010&quot;,
          &quot;addressCountry&quot;: &quot;USA&quot;,
          &quot;listingPrice&quot;: {
            &quot;type&quot;: &quot;PriceSpecification&quot;,
            &quot;price&quot;: 7500000,
            &quot;priceCurrency&quot;: &quot;USD&quot;
          }
        }
      },
      &quot;recipient&quot;: {
        &quot;description&quot;: &quot;listing agent or offer recipient&quot;,
        &quot;type&quot;: &quot;object&quot;,
        &quot;x-range&quot;: [
          &quot;RealEstateAgent&quot;,
          &quot;RealEstateOrganization&quot;
        ],
        &quot;example&quot;: {
          &quot;type&quot;: &quot;RealEstateAgent&quot;,
          &quot;name&quot;: &quot;Randy RealEstateAgent&quot;,
          &quot;id&quot;: &quot;https://{agentid}.example.com/profile/card#me&quot;
        }
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-308&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
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
            &quot;description&quot;: &quot;an offer is made to buy a PropertyListing&quot;,
            &quot;x-range&quot;: &quot;ListingOffer&quot;,
            &quot;required&quot;: [
              &quot;type&quot;,
              &quot;agent&quot;,
              &quot;object&quot;,
              &quot;recipient&quot;,
              &quot;offerPrice&quot;
            ],
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;enum&quot;: [
                  &quot;ListingOffer&quot;
                ]
              },
              &quot;agent&quot;: {
                &quot;description&quot;: &quot;the Person or Contact who makes the offer&quot;
              },
              &quot;offerPrice&quot;: {
                &quot;description&quot;: &quot;the offer price or range&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;title&quot;: &quot;PriceSpecification&quot;,
                &quot;x-range&quot;: &quot;PriceSpecification&quot;,
                &quot;properties&quot;: {
                  &quot;type&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;PriceSpecification&quot;,
                    &quot;enum&quot;: [
                      &quot;PriceSpecification&quot;
                    ],
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-376&gt;&quot;
                  },
                  &quot;minPrice&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the low price offered if price is a range.&quot;,
                    &quot;example&quot;: 75000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-377&gt;&quot;
                  },
                  &quot;maxPrice&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the high price offered if price is a range.&quot;,
                    &quot;example&quot;: 100000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-378&gt;&quot;
                  },
                  &quot;price&quot;: {
                    &quot;type&quot;: &quot;number&quot;,
                    &quot;description&quot;: &quot;the offer price.&quot;,
                    &quot;example&quot;: 75000,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-379&gt;&quot;
                  },
                  &quot;priceCurrency&quot;: {
                    &quot;type&quot;: &quot;string&quot;,
                    &quot;description&quot;: &quot;use ISO4217&quot;,
                    &quot;example&quot;: &quot;USD&quot;,
                    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-380&gt;&quot;
                  }
                }
              },
              &quot;object&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: [
                  &quot;Comment&quot;,
                  &quot;Question&quot;
                ],
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;Comment&quot;,
                  &quot;text&quot;: &quot;take it or leave it.&quot;
                }
              },
              &quot;propertyListing&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;description&quot;: &quot;the listing on which the offer is made.&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;PropertyListing&quot;,
                  &quot;originatingSystemName&quot;: &quot;GOTHAM-MLS&quot;,
                  &quot;originatingSystemKey&quot;: &quot;12345&quot;,
                  &quot;url&quot;: &quot;https://{company-website-url}/{path-to-listing}&quot;,
                  &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                  &quot;addressRegion&quot;: &quot;New Jersey&quot;,
                  &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                  &quot;postalCode&quot;: &quot;10010&quot;,
                  &quot;addressCountry&quot;: &quot;USA&quot;,
                  &quot;listingPrice&quot;: {
                    &quot;type&quot;: &quot;PriceSpecification&quot;,
                    &quot;price&quot;: 7500000,
                    &quot;priceCurrency&quot;: &quot;USD&quot;
                  }
                }
              },
              &quot;recipient&quot;: {
                &quot;description&quot;: &quot;listing agent or offer recipient&quot;,
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: [
                  &quot;RealEstateAgent&quot;,
                  &quot;RealEstateOrganization&quot;
                ],
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;RealEstateAgent&quot;,
                  &quot;name&quot;: &quot;Randy RealEstateAgent&quot;,
                  &quot;id&quot;: &quot;https://{agentid}.example.com/profile/card#me&quot;
                }
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-308&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;ListingOffer&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;2&gt;
required = 
path = ListingOffer











### Example

```json
{
  "type": "ListingOffer",
  "agent": null,
  "offerPrice": {
    "type": "PriceSpecification",
    "minPrice": 75000,
    "maxPrice": 100000,
    "price": 75000,
    "priceCurrency": "USD"
  },
  "object": {
    "type": "Comment",
    "text": "take it or leave it."
  },
  "propertyListing": {
    "type": "PropertyListing",
    "originatingSystemName": "GOTHAM-MLS",
    "originatingSystemKey": "12345",
    "url": "https://{company-website-url}/{path-to-listing}",
    "streetAddress": "1007 Mountain Gate Rd",
    "addressRegion": "New Jersey",
    "addressLocality": "Gotham City",
    "postalCode": "10010",
    "addressCountry": "USA",
    "listingPrice": {
      "type": "PriceSpecification",
      "price": 7500000,
      "priceCurrency": "USD"
    }
  },
  "recipient": {
    "type": "RealEstateAgent",
    "name": "Randy RealEstateAgent",
    "id": "https://{agentid}.example.com/profile/card#me"
  }
}
```

