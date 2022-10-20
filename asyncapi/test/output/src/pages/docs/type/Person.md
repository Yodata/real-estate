

---
title: Person
---

{}


# Person





### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "allOf": [
      {
        "title": "Person",
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "Person",
            "enum": [
              "Person"
            ],
            "x-parser-schema-id": "<anonymous-schema-221>"
          },
          "affiliation": {
            "type": "array",
            "description": "An organization that this person is affiliated with",
            "items": {
              "type": "string",
              "format": "uri",
              "example": "https://example.com/profile/card#me",
              "x-parser-schema-id": "<anonymous-schema-223>"
            },
            "x-parser-schema-id": "<anonymous-schema-222>"
          },
          "address": {
            "type": "array",
            "x-range": "PostalAddress",
            "description": "addresses for the item",
            "items": {
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
            "x-parser-schema-id": "<anonymous-schema-224>"
          },
          "birthDate": {
            "type": "string",
            "format": "date",
            "description": "date of birth.",
            "x-parser-schema-id": "<anonymous-schema-226>"
          },
          "contactPoint": {
            "type": "array",
            "x-range": "ContactPoint",
            "description": "a named point of contact - telephone, email, faxNumber, and/or url for the entity",
            "items": {
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
            "x-parser-schema-id": "<anonymous-schema-227>"
          },
          "email": {
            "type": "string",
            "description": "Primary email address.",
            "example": "user@example.com",
            "x-parser-schema-id": "<anonymous-schema-229>"
          },
          "additionalName": {
            "type": "string",
            "description": "any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.",
            "example": "ambassador satch,pops,satchmo",
            "x-parser-schema-id": "<anonymous-schema-230>"
          },
          "familyName": {
            "type": "string",
            "description": "Last Name of a person",
            "example": "Wayne",
            "x-parser-schema-id": "<anonymous-schema-231>"
          },
          "faxNumber": {
            "type": "string",
            "description": "Primary fax number.",
            "example": "(873) 271-4802",
            "x-parser-schema-id": "<anonymous-schema-232>"
          },
          "givenName": {
            "type": "string",
            "description": "First Name of a person",
            "example": "Glenn",
            "x-parser-schema-id": "<anonymous-schema-233>"
          },
          "honorificPrefix": {
            "title": "honorificPrefix",
            "description": "An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.",
            "type": "string",
            "example": "Dr",
            "x-parser-schema-id": "<anonymous-schema-234>"
          },
          "honorifixSuffix": {
            "title": "honorificSuffix",
            "description": "An honorific title following a person's name like M.D.",
            "type": "string",
            "example": "Esq",
            "x-parser-schema-id": "<anonymous-schema-235>"
          },
          "jobTitle": {
            "title": "jobTitle",
            "description": "job tiles associated with the item",
            "type": "array",
            "items": {
              "type": "string",
              "x-parser-schema-id": "<anonymous-schema-237>"
            },
            "example": [
              "Chief Data Officer",
              "Sanitation Engineer"
            ],
            "x-parser-schema-id": "<anonymous-schema-236>"
          },
          "knowsLanguage": {
            "type": "array",
            "description": "languages spoken by the person",
            "x-range": "Language",
            "items": {
              "type": "object",
              "x-parser-schema-id": "<anonymous-schema-239>"
            },
            "example": [
              {
                "type": "Language",
                "name": "English",
                "additionalName": "en-us"
              }
            ],
            "x-parser-schema-id": "<anonymous-schema-238>"
          },
          "name": {
            "type": "string",
            "description": "Full name of the person.",
            "example": "Bruce Wayne",
            "x-parser-schema-id": "<anonymous-schema-240>"
          },
          "telephone": {
            "description": "Primary phone number.",
            "type": "string",
            "example": "1-339-041-0306 x2866",
            "x-parser-schema-id": "<anonymous-schema-241>"
          },
          "worksFor": {
            "type": "string",
            "description": "Organizations the person works for.",
            "example": "Gotham City Police Department",
            "x-parser-schema-id": "<anonymous-schema-242>"
          }
        },
        "x-parser-schema-id": "<anonymous-schema-220>"
      }
    ],
    "x-parser-schema-id": "Person"
  },
  "options": {}
}



prop = {
  &quot;_json&quot;: {
    &quot;title&quot;: &quot;Person&quot;,
    &quot;type&quot;: &quot;object&quot;,
    &quot;properties&quot;: {
      &quot;type&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;Person&quot;,
        &quot;enum&quot;: [
          &quot;Person&quot;
        ],
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-221&gt;&quot;
      },
      &quot;affiliation&quot;: {
        &quot;type&quot;: &quot;array&quot;,
        &quot;description&quot;: &quot;An organization that this person is affiliated with&quot;,
        &quot;items&quot;: {
          &quot;type&quot;: &quot;string&quot;,
          &quot;format&quot;: &quot;uri&quot;,
          &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-223&gt;&quot;
        },
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-222&gt;&quot;
      },
      &quot;address&quot;: {
        &quot;type&quot;: &quot;array&quot;,
        &quot;x-range&quot;: &quot;PostalAddress&quot;,
        &quot;description&quot;: &quot;addresses for the item&quot;,
        &quot;items&quot;: {
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
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-224&gt;&quot;
      },
      &quot;birthDate&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;format&quot;: &quot;date&quot;,
        &quot;description&quot;: &quot;date of birth.&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-226&gt;&quot;
      },
      &quot;contactPoint&quot;: {
        &quot;type&quot;: &quot;array&quot;,
        &quot;x-range&quot;: &quot;ContactPoint&quot;,
        &quot;description&quot;: &quot;a named point of contact - telephone, email, faxNumber, and/or url for the entity&quot;,
        &quot;items&quot;: {
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
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-227&gt;&quot;
      },
      &quot;email&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;Primary email address.&quot;,
        &quot;example&quot;: &quot;user@example.com&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-229&gt;&quot;
      },
      &quot;additionalName&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.&quot;,
        &quot;example&quot;: &quot;ambassador satch,pops,satchmo&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-230&gt;&quot;
      },
      &quot;familyName&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;Last Name of a person&quot;,
        &quot;example&quot;: &quot;Wayne&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-231&gt;&quot;
      },
      &quot;faxNumber&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;Primary fax number.&quot;,
        &quot;example&quot;: &quot;(873) 271-4802&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-232&gt;&quot;
      },
      &quot;givenName&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;First Name of a person&quot;,
        &quot;example&quot;: &quot;Glenn&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
      },
      &quot;honorificPrefix&quot;: {
        &quot;title&quot;: &quot;honorificPrefix&quot;,
        &quot;description&quot;: &quot;An honorific prefix preceding a Person&#39;s name such as Dr/Mrs/Mr.&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;example&quot;: &quot;Dr&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-234&gt;&quot;
      },
      &quot;honorifixSuffix&quot;: {
        &quot;title&quot;: &quot;honorificSuffix&quot;,
        &quot;description&quot;: &quot;An honorific title following a person&#39;s name like M.D.&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;example&quot;: &quot;Esq&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-235&gt;&quot;
      },
      &quot;jobTitle&quot;: {
        &quot;title&quot;: &quot;jobTitle&quot;,
        &quot;description&quot;: &quot;job tiles associated with the item&quot;,
        &quot;type&quot;: &quot;array&quot;,
        &quot;items&quot;: {
          &quot;type&quot;: &quot;string&quot;,
          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-237&gt;&quot;
        },
        &quot;example&quot;: [
          &quot;Chief Data Officer&quot;,
          &quot;Sanitation Engineer&quot;
        ],
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-236&gt;&quot;
      },
      &quot;knowsLanguage&quot;: {
        &quot;type&quot;: &quot;array&quot;,
        &quot;description&quot;: &quot;languages spoken by the person&quot;,
        &quot;x-range&quot;: &quot;Language&quot;,
        &quot;items&quot;: {
          &quot;type&quot;: &quot;object&quot;,
          &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-239&gt;&quot;
        },
        &quot;example&quot;: [
          {
            &quot;type&quot;: &quot;Language&quot;,
            &quot;name&quot;: &quot;English&quot;,
            &quot;additionalName&quot;: &quot;en-us&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-238&gt;&quot;
      },
      &quot;name&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;Full name of the person.&quot;,
        &quot;example&quot;: &quot;Bruce Wayne&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-240&gt;&quot;
      },
      &quot;telephone&quot;: {
        &quot;description&quot;: &quot;Primary phone number.&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;example&quot;: &quot;1-339-041-0306 x2866&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-241&gt;&quot;
      },
      &quot;worksFor&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;Organizations the person works for.&quot;,
        &quot;example&quot;: &quot;Gotham City Police Department&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-242&gt;&quot;
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-220&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;allOf&quot;: [
          {
            &quot;title&quot;: &quot;Person&quot;,
            &quot;type&quot;: &quot;object&quot;,
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Person&quot;,
                &quot;enum&quot;: [
                  &quot;Person&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-221&gt;&quot;
              },
              &quot;affiliation&quot;: {
                &quot;type&quot;: &quot;array&quot;,
                &quot;description&quot;: &quot;An organization that this person is affiliated with&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;format&quot;: &quot;uri&quot;,
                  &quot;example&quot;: &quot;https://example.com/profile/card#me&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-223&gt;&quot;
                },
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-222&gt;&quot;
              },
              &quot;address&quot;: {
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-range&quot;: &quot;PostalAddress&quot;,
                &quot;description&quot;: &quot;addresses for the item&quot;,
                &quot;items&quot;: {
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
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-224&gt;&quot;
              },
              &quot;birthDate&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;date&quot;,
                &quot;description&quot;: &quot;date of birth.&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-226&gt;&quot;
              },
              &quot;contactPoint&quot;: {
                &quot;type&quot;: &quot;array&quot;,
                &quot;x-range&quot;: &quot;ContactPoint&quot;,
                &quot;description&quot;: &quot;a named point of contact - telephone, email, faxNumber, and/or url for the entity&quot;,
                &quot;items&quot;: {
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
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-227&gt;&quot;
              },
              &quot;email&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Primary email address.&quot;,
                &quot;example&quot;: &quot;user@example.com&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-229&gt;&quot;
              },
              &quot;additionalName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.&quot;,
                &quot;example&quot;: &quot;ambassador satch,pops,satchmo&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-230&gt;&quot;
              },
              &quot;familyName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Last Name of a person&quot;,
                &quot;example&quot;: &quot;Wayne&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-231&gt;&quot;
              },
              &quot;faxNumber&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Primary fax number.&quot;,
                &quot;example&quot;: &quot;(873) 271-4802&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-232&gt;&quot;
              },
              &quot;givenName&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;First Name of a person&quot;,
                &quot;example&quot;: &quot;Glenn&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-233&gt;&quot;
              },
              &quot;honorificPrefix&quot;: {
                &quot;title&quot;: &quot;honorificPrefix&quot;,
                &quot;description&quot;: &quot;An honorific prefix preceding a Person&#39;s name such as Dr/Mrs/Mr.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;Dr&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-234&gt;&quot;
              },
              &quot;honorifixSuffix&quot;: {
                &quot;title&quot;: &quot;honorificSuffix&quot;,
                &quot;description&quot;: &quot;An honorific title following a person&#39;s name like M.D.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;Esq&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-235&gt;&quot;
              },
              &quot;jobTitle&quot;: {
                &quot;title&quot;: &quot;jobTitle&quot;,
                &quot;description&quot;: &quot;job tiles associated with the item&quot;,
                &quot;type&quot;: &quot;array&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;string&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-237&gt;&quot;
                },
                &quot;example&quot;: [
                  &quot;Chief Data Officer&quot;,
                  &quot;Sanitation Engineer&quot;
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-236&gt;&quot;
              },
              &quot;knowsLanguage&quot;: {
                &quot;type&quot;: &quot;array&quot;,
                &quot;description&quot;: &quot;languages spoken by the person&quot;,
                &quot;x-range&quot;: &quot;Language&quot;,
                &quot;items&quot;: {
                  &quot;type&quot;: &quot;object&quot;,
                  &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-239&gt;&quot;
                },
                &quot;example&quot;: [
                  {
                    &quot;type&quot;: &quot;Language&quot;,
                    &quot;name&quot;: &quot;English&quot;,
                    &quot;additionalName&quot;: &quot;en-us&quot;
                  }
                ],
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-238&gt;&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Full name of the person.&quot;,
                &quot;example&quot;: &quot;Bruce Wayne&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-240&gt;&quot;
              },
              &quot;telephone&quot;: {
                &quot;description&quot;: &quot;Primary phone number.&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;example&quot;: &quot;1-339-041-0306 x2866&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-241&gt;&quot;
              },
              &quot;worksFor&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;Organizations the person works for.&quot;,
                &quot;example&quot;: &quot;Gotham City Police Department&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-242&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-220&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;Person&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;1&gt;
required = 
path = Person











### Example

```json
{
  "type": "Person",
  "affiliation": [
    "https://example.com/profile/card#me"
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
      "addressCountry": "USA",
      "addressCounty": "Gotham County",
      "addressSubdivision": "Gotham Heights"
    }
  ],
  "birthDate": "2019-08-24",
  "contactPoint": [
    {
      "type": "ContactPoint",
      "name": "Work",
      "telephone": "800-555-5555",
      "faxNumber": "888-4BA-TMAN",
      "email": "bruce@example.com",
      "url": "https://example.com"
    }
  ],
  "email": "user@example.com",
  "additionalName": "ambassador satch,pops,satchmo",
  "familyName": "Wayne",
  "faxNumber": "(873) 271-4802",
  "givenName": "Glenn",
  "honorificPrefix": "Dr",
  "honorifixSuffix": "Esq",
  "jobTitle": [
    "Chief Data Officer",
    "Sanitation Engineer"
  ],
  "knowsLanguage": [
    {
      "type": "Language",
      "name": "English",
      "additionalName": "en-us"
    }
  ],
  "name": "Bruce Wayne",
  "telephone": "1-339-041-0306 x2866",
  "worksFor": "Gotham City Police Department"
}
```

