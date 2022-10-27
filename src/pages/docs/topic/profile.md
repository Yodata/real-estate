---
title: profile
menu: Topics
route: /topic/profile
---

## profile



### publishing profile events
Publish events by HTTP POST to your own pods `/publish/` endpoint including the topic, recipient and message body.]



### Example
```http
POST /publish/ HTTP/1.1
Host: # { your pod host url }
x-api-key: # { your api key }
Content-Type: application/json

{
  "topic": "https://realestate/{topic}#{event}",
  "recipient": # the publishing pod,
  "@context": # optional transformation context,
  "data": {
    "type": "{Action}
  }

}
```


### receiving profile events

| Event | Description |
| :---- | :---------- |
| [realestate/profile#add](#add) | an agent, office or organization profile was added |
| [realestate/profile#update](#update) | an agent, office or organization profile was updated |
| [realestate/profile#teamcreate](#teamcreate) | a team profile was creatd |
| [realestate/profile#teamdelete](#teamdelete) | a team profile was deleted |
| [realestate/profile#teammemberadd](#teammemberadd) | a team member was added |
| [realestate/profile#teammemberremove](#teammemberremove) | a member (user) is removed from the team |


---
## add
```
realestate/profile#add
```

an agent, office or organization profile was added



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | event payload, typically an Action <br/>RANGE: [AddAction](/types/AddAction) |
| data.object | object | the updated or added profile value <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateOffice](/types/RealEstateOffice), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.branchCode | * |   |
| data.type | * | AddAction  |

### Example
```json
{
  "topic": "realestate/profile#add",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "object": {
      "type": "RealEstateAgent",
      "id": "http://example.com",
      "name": "Louis Armstrong",
      "givenName": "Louis",
      "familyName": "Armstrong",
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
          "startDate": "2022-10-12T01:13:43Z",
          "endDate": "2022-10-12T01:13:43Z"
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
          "startDate": "2022-10-12T01:13:43Z",
          "endDate": "2022-10-12T01:13:43Z",
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
    },
    "branchCode": "ABC123",
    "type": "AddAction"
  }
}
```


[back to top](#)

---
## update
```
realestate/profile#update
```

an agent, office or organization profile was updated



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | event payload, typically an Action <br/>RANGE: [UpdateAction](/types/UpdateAction) |
| data.object | object | the updated or added profile value <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateOffice](/types/RealEstateOffice), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.branchCode | * |   |
| data.type | string | UpdateAction  |

### Example
```json
{
  "topic": "realestate/profile#update",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "object": {
      "type": "RealEstateAgent",
      "id": "http://example.com",
      "name": "Louis Armstrong",
      "givenName": "Louis",
      "familyName": "Armstrong",
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
          "startDate": "2022-10-12T01:13:43Z",
          "endDate": "2022-10-12T01:13:43Z"
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
          "startDate": "2022-10-12T01:13:43Z",
          "endDate": "2022-10-12T01:13:43Z",
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
    },
    "branchCode": "ABC123",
    "type": "UpdateAction"
  }
}
```


[back to top](#)

---
## teamcreate
```
realestate/profile#teamcreate
```

a team profile was creatd



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | event payload, typically an Action <br/>RANGE: [AddAction](/types/AddAction) |
| data.object | object&#124;object&#124;* |   |
| data.branchCode | * |   |
| data.type | * | AddAction  |

### Example
```json
{
  "topic": "realestate/profile#teamcreate",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "object": {
      "type": "RealEstateTeam",
      "id": "https://org.example.com/profile/card#me",
      "name": "string",
      "givenName": "Louis",
      "familyName": "Armstrong",
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
        "http://example.com",
        "http://batmanandrobinteam.example.com/"
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
      "numberOfSubOrganizations": 0,
      "member": [
        {
          "type": "RealEstateTeamMembership",
          "roleName": "TeamMember",
          "memberOf": "https://{team-id}.example.com/profile/card#me",
          "member": "https://{agent}.example.com/profile/card#me",
          "startDate": "2022-10-12T01:13:43Z",
          "endDate": "2022-10-12T01:13:43Z"
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
          "startDate": "2022-10-12T01:13:43Z",
          "endDate": "2022-10-12T01:13:43Z",
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
    },
    "branchCode": "ABC123",
    "type": "AddAction"
  }
}
```


[back to top](#)

---
## teamdelete
```
realestate/profile#teamdelete
```

a team profile was deleted



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | event payload, typically an Action <br/>RANGE: [DeleteAction](/types/DeleteAction) |
| data.object | object&#124;object&#124;* |   |
| data.branchCode | * |   |
| data.type | * | DeleteAction  |

### Example
```json
{
  "topic": "realestate/profile#teamdelete",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "object": {
      "type": "RealEstateTeam",
      "id": "https://org.example.com/profile/card#me",
      "name": "string",
      "givenName": "Louis",
      "familyName": "Armstrong",
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
        "http://example.com",
        "http://batmanandrobinteam.example.com/"
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
      "numberOfSubOrganizations": 0,
      "member": [
        {
          "type": "RealEstateTeamMembership",
          "roleName": "TeamMember",
          "memberOf": "https://{team-id}.example.com/profile/card#me",
          "member": "https://{agent}.example.com/profile/card#me",
          "startDate": "2022-10-12T01:13:43Z",
          "endDate": "2022-10-12T01:13:43Z"
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
          "startDate": "2022-10-12T01:13:43Z",
          "endDate": "2022-10-12T01:13:43Z",
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
    },
    "branchCode": "ABC123",
    "type": "DeleteAction"
  }
}
```


[back to top](#)

---
## teammemberadd
```
realestate/profile#teammemberadd
```

a team member was added



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | event payload, typically an Action <br/>RANGE: [AddAction](/types/AddAction) |
| data.type | * | AddAction  |
| data.object | * |   |

### Example
```json
{
  "topic": "realestate/profile#teammemberadd",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AddAction",
    "object": {
      "type": "RealEstateTeamMembership",
      "roleName": "TeamMember",
      "memberOf": "https://{team-id}.example.com/profile/card#me",
      "member": "https://{agent}.example.com/profile/card#me",
      "startDate": "2022-10-12T01:13:43Z",
      "endDate": "2022-10-12T01:13:43Z"
    }
  }
}
```


[back to top](#)

---
## teammemberremove
```
realestate/profile#teammemberremove
```

a member (user) is removed from the team



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | event payload, typically an Action <br/>RANGE: [RemoveAction](/types/RemoveAction) |
| data.type | * | RemoveAction  |
| data.object | object |  <br/>RANGE: [RealEstateTeamMembership](/types/RealEstateTeamMembership) |

### Example
```json
{
  "topic": "realestate/profile#teannenberremove",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RemoveAction",
    "object": {
      "type": "RealEstateTeamMembership",
      "roleName": "TeamMember",
      "memberOf": "https://{team-id}.example.com/profile/card#me",
      "member": "https://{agent}.example.com/profile/card#me",
      "startDate": "2022-10-12T01:13:43Z",
      "endDate": "2022-10-12T01:13:43Z"
    }
  }
}
```


[back to top](#)