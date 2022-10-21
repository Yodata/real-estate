---
title: profile
---

## Operations### SUB `profile` Operation

Accepts **one of** the following messages:

#### Message `profile#add`

*an agent, office or organization profile was added*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/profile#add",
  "time": "2019-08-24T14:15:22Z",
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
      "branchCode": "for BHHS profile events see additionalProperty.OfficeId",
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
    },
    "branchCode": "ABC123",
    "type": "AddAction"
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `profile#update`

*an agent, office or organization profile was updated*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/profile#update",
  "time": "2019-08-24T14:15:22Z",
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
    },
    "branchCode": "ABC123",
    "type": "UpdateAction"
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `profile#teamcreate`

*a team profile was creatd*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/profile#teamcreate",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "object": {
      "type": "RealEstateTeam",
      "id": "http://example.com",
      "name": "string",
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
    },
    "branchCode": "ABC123",
    "type": "AddAction"
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `profile#teamdelete`

*a team profile was deleted*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/profile#teamdelete",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "object": {
      "type": "RealEstateTeam",
      "id": "http://example.com",
      "name": "string",
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
    },
    "branchCode": "ABC123",
    "type": "DeleteAction"
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `profile#teammemberadd`

*a team member was added*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/profile#teammemberadd",
  "time": "2019-08-24T14:15:22Z",
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
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `profile#teammemberremove`

*a member (user) is removed from the team*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/profile#teannenberremove",
  "time": "2019-08-24T14:15:22Z",
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
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|




