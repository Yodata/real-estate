---
title: RealEstateTeam
route: /types/RealEstateTeam
menu: Types
---# RealEstateTeam
A real estate team.


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| id | string |   |
| type | string! | RealEstateTeam  |
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
| name | string | Name or DBA.  |
| parentOrganization | [string&lt;uri&gt; ] | A franchisor or affiliate network of which this organization plays a membership role. <br/>RANGE: [RealEstateOrganization](/types/RealEstateOrganization) |
| subOrganization | [string&lt;uri&gt; ] | a child organization <br/>RANGE: [RealEstateOrganization](/types/RealEstateOrganization) |
| telephone | string | Primary phone number.  |
| url | string&lt;uri&gt;  | primary website/url for the entity.  |
| areaServed | object | the physical areas that make up the ServiceArea <br/>RANGE: [City](/types/City), [PostalCodeArea](/types/PostalCodeArea) |
| description | string | description of the item.  |
| member | [*] |   |

### Example
```json
{
  "id": "https://org.example.com/profile/card#me",
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
      "startDate": "2022-10-12T01:13:43Z",
      "endDate": "2022-10-12T01:13:43Z"
    }
  ]
}
```
