

---
title: ProgramMembership
---

{}


# ProgramMembership





### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
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
        "title": "ProgramMembership",
        "description": "describes membership relation between a member (Person) and a MarketingProgram",
        "properties": {
          "type": {
            "enum": [
              "ProgramMembership"
            ]
          },
          "member": {
            "type": "object",
            "x-range": "Contact",
            "description": "a contact",
            "example": {
              "type": "Contact",
              "name": "Bruce Wayne",
              "givenName": "Bruce",
              "familyName": "Wayne",
              "jobTitle": "Batman",
              "contactPoint": [
                {
                  "type": "ContactPoint",
                  "name": "Mobile Phone",
                  "telephone": "888.GET-BATMAN"
                },
                {
                  "type": "ContactPoint",
                  "name": "Email",
                  "email": "batman@example.com"
                }
              ],
              "address": [
                {
                  "type": "PostalAddress",
                  "name": "Home",
                  "streetAddress": "1007 Mountain Gate Rd",
                  "postOfficeBoxNumber": "Box 1234",
                  "addressRegion": "New Jersey",
                  "addressLocality": "Gotham City",
                  "postalCode": "10010",
                  "addressCountry": "USA"
                }
              ],
              "birthDate": "2019-07-09",
              "leadOwner": {
                "type": "RealEstateOrganization",
                "id": "https://{lead-owner}.example.com/profile/card#me"
              },
              "leadSource": {
                "type": "RealEstateWebsite",
                "url": "https://agentwebsite.example.com"
              }
            }
          },
          "memberOf": {
            "x-range": "MarketingProgram"
          }
        },
        "x-parser-schema-id": "<anonymous-schema-393>"
      }
    ],
    "x-parser-schema-id": "ProgramMembership"
  },
  "options": {}
}



prop = {
  &quot;_json&quot;: {
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
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
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
            &quot;title&quot;: &quot;ProgramMembership&quot;,
            &quot;description&quot;: &quot;describes membership relation between a member (Person) and a MarketingProgram&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;enum&quot;: [
                  &quot;ProgramMembership&quot;
                ]
              },
              &quot;member&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;Contact&quot;,
                &quot;description&quot;: &quot;a contact&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;Contact&quot;,
                  &quot;name&quot;: &quot;Bruce Wayne&quot;,
                  &quot;givenName&quot;: &quot;Bruce&quot;,
                  &quot;familyName&quot;: &quot;Wayne&quot;,
                  &quot;jobTitle&quot;: &quot;Batman&quot;,
                  &quot;contactPoint&quot;: [
                    {
                      &quot;type&quot;: &quot;ContactPoint&quot;,
                      &quot;name&quot;: &quot;Mobile Phone&quot;,
                      &quot;telephone&quot;: &quot;888.GET-BATMAN&quot;
                    },
                    {
                      &quot;type&quot;: &quot;ContactPoint&quot;,
                      &quot;name&quot;: &quot;Email&quot;,
                      &quot;email&quot;: &quot;batman@example.com&quot;
                    }
                  ],
                  &quot;address&quot;: [
                    {
                      &quot;type&quot;: &quot;PostalAddress&quot;,
                      &quot;name&quot;: &quot;Home&quot;,
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;postOfficeBoxNumber&quot;: &quot;Box 1234&quot;,
                      &quot;addressRegion&quot;: &quot;New Jersey&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;postalCode&quot;: &quot;10010&quot;,
                      &quot;addressCountry&quot;: &quot;USA&quot;
                    }
                  ],
                  &quot;birthDate&quot;: &quot;2019-07-09&quot;,
                  &quot;leadOwner&quot;: {
                    &quot;type&quot;: &quot;RealEstateOrganization&quot;,
                    &quot;id&quot;: &quot;https://{lead-owner}.example.com/profile/card#me&quot;
                  },
                  &quot;leadSource&quot;: {
                    &quot;type&quot;: &quot;RealEstateWebsite&quot;,
                    &quot;url&quot;: &quot;https://agentwebsite.example.com&quot;
                  }
                }
              },
              &quot;memberOf&quot;: {
                &quot;x-range&quot;: &quot;MarketingProgram&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-393&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;ProgramMembership&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;1&gt;
required = 
path = ProgramMembership




prop = {
  &quot;_json&quot;: {
    &quot;title&quot;: &quot;ProgramMembership&quot;,
    &quot;description&quot;: &quot;describes membership relation between a member (Person) and a MarketingProgram&quot;,
    &quot;properties&quot;: {
      &quot;type&quot;: {
        &quot;enum&quot;: [
          &quot;ProgramMembership&quot;
        ]
      },
      &quot;member&quot;: {
        &quot;type&quot;: &quot;object&quot;,
        &quot;x-range&quot;: &quot;Contact&quot;,
        &quot;description&quot;: &quot;a contact&quot;,
        &quot;example&quot;: {
          &quot;type&quot;: &quot;Contact&quot;,
          &quot;name&quot;: &quot;Bruce Wayne&quot;,
          &quot;givenName&quot;: &quot;Bruce&quot;,
          &quot;familyName&quot;: &quot;Wayne&quot;,
          &quot;jobTitle&quot;: &quot;Batman&quot;,
          &quot;contactPoint&quot;: [
            {
              &quot;type&quot;: &quot;ContactPoint&quot;,
              &quot;name&quot;: &quot;Mobile Phone&quot;,
              &quot;telephone&quot;: &quot;888.GET-BATMAN&quot;
            },
            {
              &quot;type&quot;: &quot;ContactPoint&quot;,
              &quot;name&quot;: &quot;Email&quot;,
              &quot;email&quot;: &quot;batman@example.com&quot;
            }
          ],
          &quot;address&quot;: [
            {
              &quot;type&quot;: &quot;PostalAddress&quot;,
              &quot;name&quot;: &quot;Home&quot;,
              &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
              &quot;postOfficeBoxNumber&quot;: &quot;Box 1234&quot;,
              &quot;addressRegion&quot;: &quot;New Jersey&quot;,
              &quot;addressLocality&quot;: &quot;Gotham City&quot;,
              &quot;postalCode&quot;: &quot;10010&quot;,
              &quot;addressCountry&quot;: &quot;USA&quot;
            }
          ],
          &quot;birthDate&quot;: &quot;2019-07-09&quot;,
          &quot;leadOwner&quot;: {
            &quot;type&quot;: &quot;RealEstateOrganization&quot;,
            &quot;id&quot;: &quot;https://{lead-owner}.example.com/profile/card#me&quot;
          },
          &quot;leadSource&quot;: {
            &quot;type&quot;: &quot;RealEstateWebsite&quot;,
            &quot;url&quot;: &quot;https://agentwebsite.example.com&quot;
          }
        }
      },
      &quot;memberOf&quot;: {
        &quot;x-range&quot;: &quot;MarketingProgram&quot;
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-393&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
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
            &quot;title&quot;: &quot;ProgramMembership&quot;,
            &quot;description&quot;: &quot;describes membership relation between a member (Person) and a MarketingProgram&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;enum&quot;: [
                  &quot;ProgramMembership&quot;
                ]
              },
              &quot;member&quot;: {
                &quot;type&quot;: &quot;object&quot;,
                &quot;x-range&quot;: &quot;Contact&quot;,
                &quot;description&quot;: &quot;a contact&quot;,
                &quot;example&quot;: {
                  &quot;type&quot;: &quot;Contact&quot;,
                  &quot;name&quot;: &quot;Bruce Wayne&quot;,
                  &quot;givenName&quot;: &quot;Bruce&quot;,
                  &quot;familyName&quot;: &quot;Wayne&quot;,
                  &quot;jobTitle&quot;: &quot;Batman&quot;,
                  &quot;contactPoint&quot;: [
                    {
                      &quot;type&quot;: &quot;ContactPoint&quot;,
                      &quot;name&quot;: &quot;Mobile Phone&quot;,
                      &quot;telephone&quot;: &quot;888.GET-BATMAN&quot;
                    },
                    {
                      &quot;type&quot;: &quot;ContactPoint&quot;,
                      &quot;name&quot;: &quot;Email&quot;,
                      &quot;email&quot;: &quot;batman@example.com&quot;
                    }
                  ],
                  &quot;address&quot;: [
                    {
                      &quot;type&quot;: &quot;PostalAddress&quot;,
                      &quot;name&quot;: &quot;Home&quot;,
                      &quot;streetAddress&quot;: &quot;1007 Mountain Gate Rd&quot;,
                      &quot;postOfficeBoxNumber&quot;: &quot;Box 1234&quot;,
                      &quot;addressRegion&quot;: &quot;New Jersey&quot;,
                      &quot;addressLocality&quot;: &quot;Gotham City&quot;,
                      &quot;postalCode&quot;: &quot;10010&quot;,
                      &quot;addressCountry&quot;: &quot;USA&quot;
                    }
                  ],
                  &quot;birthDate&quot;: &quot;2019-07-09&quot;,
                  &quot;leadOwner&quot;: {
                    &quot;type&quot;: &quot;RealEstateOrganization&quot;,
                    &quot;id&quot;: &quot;https://{lead-owner}.example.com/profile/card#me&quot;
                  },
                  &quot;leadSource&quot;: {
                    &quot;type&quot;: &quot;RealEstateWebsite&quot;,
                    &quot;url&quot;: &quot;https://agentwebsite.example.com&quot;
                  }
                }
              },
              &quot;memberOf&quot;: {
                &quot;x-range&quot;: &quot;MarketingProgram&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-393&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;ProgramMembership&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;2&gt;
required = 
path = ProgramMembership











### Example

```json
{
  "type": "ProgramMembership",
  "roleName": "Owner",
  "memberOf": null,
  "member": {
    "type": "Contact",
    "name": "Bruce Wayne",
    "givenName": "Bruce",
    "familyName": "Wayne",
    "jobTitle": "Batman",
    "contactPoint": [
      {
        "type": "ContactPoint",
        "name": "Mobile Phone",
        "telephone": "888.GET-BATMAN"
      },
      {
        "type": "ContactPoint",
        "name": "Email",
        "email": "batman@example.com"
      }
    ],
    "address": [
      {
        "type": "PostalAddress",
        "name": "Home",
        "streetAddress": "1007 Mountain Gate Rd",
        "postOfficeBoxNumber": "Box 1234",
        "addressRegion": "New Jersey",
        "addressLocality": "Gotham City",
        "postalCode": "10010",
        "addressCountry": "USA"
      }
    ],
    "birthDate": "2019-07-09",
    "leadOwner": {
      "type": "RealEstateOrganization",
      "id": "https://{lead-owner}.example.com/profile/card#me"
    },
    "leadSource": {
      "type": "RealEstateWebsite",
      "url": "https://agentwebsite.example.com"
    }
  },
  "startDate": "2019-08-24T14:15:22Z",
  "endDate": "2019-08-24T14:15:22Z"
}
```

