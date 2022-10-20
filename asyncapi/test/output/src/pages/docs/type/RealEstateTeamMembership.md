

---
title: RealEstateTeamMembership
---

{}


# RealEstateTeamMembership





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
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;1&gt;
required = 
path = RealEstateTeamMembership




prop = {
  &quot;_json&quot;: {
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
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;2&gt;
required = 
path = RealEstateTeamMembership











### Example

```json
{
  "type": "RealEstateTeamMembership",
  "roleName": "TeamMember",
  "memberOf": "https://{team-id}.example.com/profile/card#me",
  "member": "https://{agent}.example.com/profile/card#me",
  "startDate": "2019-08-24T14:15:22Z",
  "endDate": "2019-08-24T14:15:22Z"
}
```

