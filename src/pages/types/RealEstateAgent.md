---
title: RealEstateAgent
route: /types/RealEstateAgent
menu: Types
---# RealEstateAgent
A real estate agent


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string! | RealEstateAgent  |
| id | string&lt;uri&gt;  | Linked-Data URI (@id)  |
| name | string | Name or DBA.  |
| givenName | string | First Name of a person  |
| familyName | string | Last Name of a person  |
| address | object | A physical address. <br/>RANGE: [PostalAddress](/types/PostalAddress) |
| availableLanguage | [object] | Please use one of the language codes from the IETF BCP 47 standard. <br/>RANGE: [Language](/types/Language) |
| availableLanguage.type | string | Language  |
| availableLanguage.name | string | the display name of the language  |
| availableLanguage.additionalName | string | BCP 47 language code  |
| branchCode | string | A short textual code that uniquely identifies a place of business.  |
| certification | [object] | certifications granted to a person or organization <br/>RANGE: [Certification](/types/Certification) |
| contactPoint | object | a named point of contact - telephone, email, faxNumber, and/or url for the entity <br/>RANGE: [ContactPoint](/types/ContactPoint) |
| email | string&lt;email&gt;  | Primary email address.  |
| faxNumber | string | Primary fax number.  |
| image | [*] | an ImageObject or URI reference to an image of the entity on the web. <br/>RANGE: [ImageObject](/types/ImageObject) |
| logo | [object] | a logo associated with the organization. <br/>RANGE: [ImageObject](/types/ImageObject), [DigitalDocument](/types/DigitalDocument) |
| parentOrganization | [string&lt;uri&gt; ] | URI reference to the agent's office. For teams, this can be a reference to the team leader/primary profile. <br/>RANGE: [RealEstateOffice](/types/RealEstateOffice), [RealEstateAgent](/types/RealEstateAgent) |
| subOrganization | [string&lt;uri&gt; ] | for teams: URI reference to a team member <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent) |
| telephone | string | Primary phone number.  |
| url | string&lt;uri&gt;  | primary website/url for the entity.  |
| areaServed | object | the physical areas that make up the ServiceArea <br/>RANGE: [City](/types/City), [PostalCodeArea](/types/PostalCodeArea) |
| description | string | description of the item.  |
| numberOfSubOrganizations | number | the number of offices for an affiliate.  |
| member | [object&#124;string&lt;uri&gt; ] | A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. <br/>RANGE: [OrganizationRole](/types/OrganizationRole), [URI](/types/URI) |
| memberOf | [*] | An Organization (or ProgramMembership) to which this Person or Organization belongs. <br/>RANGE: [OrganizationRole](/types/OrganizationRole), [MLSMembership](/types/MLSMembership) |
| permit | [object] |  <br/>RANGE: [RealEstateLicense](/types/RealEstateLicense) |
| identifier | object | key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.  |
| jobTitle | [string] | agent's job titles  |
| additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.  |
| sameAs | object | key/value id assigned to the record  |

### Example
```json
{
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
}
```