

---
title: MLSMembership
---

{}


# MLSMembership





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
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;1&gt;
required = 
path = MLSMembership




prop = {
  &quot;_json&quot;: {
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
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;2&gt;
required = 
path = MLSMembership











### Example

```json
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
```

