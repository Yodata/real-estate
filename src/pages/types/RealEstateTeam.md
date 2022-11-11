---
title: RealEstateTeam
---
## Schema

| Name | Type | Description |
|---|---|---|
| (RealEstateTeam) | allOf | - |
| 0 (allOf item) | - | - |
| id | string | - |
| 1 (allOf item) | allOf | - |
| 1.0 (allOf item) | object | - |
| 1.0.type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| 1.0.@id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| 1.0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| 1.1 (allOf item) | any | - |
| 1.2 (allOf item) | any | - |
| 1.3 (allOf item) | - | - |
| 1.3.address | object | A physical address. |
| 1.3.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| 1.3.availableLanguage.type | string | - |
| 1.3.availableLanguage.name | string | the display name of the language |
| 1.3.availableLanguage.additionalName | string | BCP 47 language code |
| 1.3.branchCode | string | A short textual code that uniquely identifies a place of business. |
| 1.3.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| 1.3.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| 1.3.certification.0.type | string | Certification |
| 1.3.certification.0.name | string | the name of the Certification |
| 1.3.certification.0.issuedBy | object | the issuing authority |
| 1.3.certification.0.issuedBy.type | string | The item type (Linked-Data @type) |
| 1.3.certification.0.issuedBy.id | string | Linked-Data URI (@id) <span class='constraints'>format (`uri`)</span> |
| 1.3.certification.0.issuedBy.name | string | name of the issuing organization |
| 1.3.certification.0.issuedTo | object | the subject |
| 1.3.certification.0.issuedTo.type | string | The item type (Linked-Data @type) |
| 1.3.certification.0.issuedTo.id | string | Linked-Data URI (@id) <span class='constraints'>format (`uri`)</span> |
| 1.3.certification.0.issuedTo.name | string | the name of the item |
| 1.3.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| 1.3.contactPoint.type | string | - |
| 1.3.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| 1.3.contactPoint.telephone | string | - |
| 1.3.contactPoint.faxNumber | string | - |
| 1.3.contactPoint.email | string | an email address for the item. <span class='constraints'>format (`email`)</span> |
| 1.3.contactPoint.url | string | primary URL for the item. <span class='constraints'>format (`uri`)</span> |
| 1.3.email | string |  <span class='constraints'>format (`email`)</span> |
| 1.3.faxNumber | string | Do people still use fax machines? |
| 1.3.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| 1.3.image.0 (index) | object allOf | - |
| 1.3.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| 1.3.image.0.0.0 (allOf item) | object | - |
| 1.3.image.0.0.0.type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| 1.3.image.0.0.0.@id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| 1.3.image.0.0.0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| 1.3.image.0.0.1 (allOf item) | - | - |
| 1.3.image.0.0.1.type | string | - |
| 1.3.image.0.0.1.id | string | the URL to access the item. <span class='constraints'>format (`uri`)</span> |
| 1.3.image.0.0.1.name | string | the file name of the object. |
| 1.3.image.0.0.1.encodingFormat | string | MIME type |
| 1.3.image.0.0.1.about | string | URI to the subject of the image or logo <span class='constraints'>format (`uri`)</span> |
| 1.3.image.0.0.1.url | string | URL of the image content <span class='constraints'>format (`uri`)</span> |
| 1.3.image.0.1 (allOf item) | - | - |
| 1.3.image.0.1.type | string | - |
| 1.3.image.0.1.id | any | - |
| 1.3.image.0.1.name | any | - |
| 1.3.image.0.1.encodingFormat | any | - |
| 1.3.logo | array<object allOf> | a logo associated with the organization. |
| 1.3.logo (single item) | object allOf | - |
| 1.3.logo.0 (allOf item) | object | an electronic file. |
| 1.3.logo.0.type | string | - |
| 1.3.logo.0.id | string | - |
| 1.3.logo.0.name | string | document name or title |
| 1.3.logo.0.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| 1.3.logo.0.about | object | subject of the Document |
| 1.3.logo.0.url | string | public URL of the object |
| 1.3.logo.1 (allOf item) | object | an associated logo |
| 1.3.name | string | Name or DBA. |
| 1.3.parentOrganization | array<string> | - |
| 1.3.parentOrganization (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| 1.3.subOrganization | array<string> | a child organization |
| 1.3.subOrganization (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| 1.3.telephone | string | Primary phone number. |
| 1.3.type | string | - |
| 1.3.url | string | primary website/url for the entity. <span class='constraints'>format (`uri`)</span> |
| 2 (allOf item) | - | A real estate team. |
| 2.type | string | RealEstateTeam |
| 2.areaServed | object | the physical areas that make up the ServiceArea |
| 2.description | string | description of the item. |
| 2.parentOrganization | array<string> | A franchisor or affiliate network of which this organization plays a membership role. |
| 2.parentOrganization (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| 2.member | array<allOf> | - |
| 2.member (single item) | allOf | - |
| 2.member.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| 2.member.0.type | string | a role played by the member in the memberOf group |
| 2.member.0.roleName | string | the role name |
| 2.member.0.memberOf | object | the org or group where the role is performed |
| 2.member.0.member | string | member object or id <span class='constraints'>format (`uri`)</span> |
| 2.member.0.startDate | string | date the member began performing this role <span class='constraints'>format (`date-time`)</span> |
| 2.member.0.endDate | string | date the member stopped performing the role <span class='constraints'>format (`date-time`)</span> |
| 2.member.1 (allOf item) | object | a membership relationship.  Subclass of OrganizationRole |
| 2.member.1.type | string | a member of a real estate team |
| 2.member.1.roleName | string | - |
| 2.member.1.memberOf | string |  <span class='constraints'>format (`uri`)</span> |
| 2.member.1.member | string |  <span class='constraints'>format (`uri`)</span> |
| 0 (allOf item) | - | - |
| id | string | - |
| 1 (allOf item) | allOf | - |
| 1.0 (allOf item) | object | - |
| 1.0.type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| 1.0.@id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| 1.0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| 1.1 (allOf item) | any | - |
| 1.2 (allOf item) | any | - |
| 1.3 (allOf item) | - | - |
| 1.3.address | object | A physical address. |
| 1.3.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| 1.3.availableLanguage.type | string | - |
| 1.3.availableLanguage.name | string | the display name of the language |
| 1.3.availableLanguage.additionalName | string | BCP 47 language code |
| 1.3.branchCode | string | A short textual code that uniquely identifies a place of business. |
| 1.3.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| 1.3.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| 1.3.certification.0.type | string | Certification |
| 1.3.certification.0.name | string | the name of the Certification |
| 1.3.certification.0.issuedBy | object | the issuing authority |
| 1.3.certification.0.issuedBy.type | string | The item type (Linked-Data @type) |
| 1.3.certification.0.issuedBy.id | string | Linked-Data URI (@id) <span class='constraints'>format (`uri`)</span> |
| 1.3.certification.0.issuedBy.name | string | name of the issuing organization |
| 1.3.certification.0.issuedTo | object | the subject |
| 1.3.certification.0.issuedTo.type | string | The item type (Linked-Data @type) |
| 1.3.certification.0.issuedTo.id | string | Linked-Data URI (@id) <span class='constraints'>format (`uri`)</span> |
| 1.3.certification.0.issuedTo.name | string | the name of the item |
| 1.3.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| 1.3.contactPoint.type | string | - |
| 1.3.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| 1.3.contactPoint.telephone | string | - |
| 1.3.contactPoint.faxNumber | string | - |
| 1.3.contactPoint.email | string | an email address for the item. <span class='constraints'>format (`email`)</span> |
| 1.3.contactPoint.url | string | primary URL for the item. <span class='constraints'>format (`uri`)</span> |
| 1.3.email | string |  <span class='constraints'>format (`email`)</span> |
| 1.3.faxNumber | string | Do people still use fax machines? |
| 1.3.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| 1.3.image.0 (index) | object allOf | - |
| 1.3.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| 1.3.image.0.0.0 (allOf item) | object | - |
| 1.3.image.0.0.0.type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| 1.3.image.0.0.0.@id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| 1.3.image.0.0.0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| 1.3.image.0.0.1 (allOf item) | - | - |
| 1.3.image.0.0.1.type | string | - |
| 1.3.image.0.0.1.id | string | the URL to access the item. <span class='constraints'>format (`uri`)</span> |
| 1.3.image.0.0.1.name | string | the file name of the object. |
| 1.3.image.0.0.1.encodingFormat | string | MIME type |
| 1.3.image.0.0.1.about | string | URI to the subject of the image or logo <span class='constraints'>format (`uri`)</span> |
| 1.3.image.0.0.1.url | string | URL of the image content <span class='constraints'>format (`uri`)</span> |
| 1.3.image.0.1 (allOf item) | - | - |
| 1.3.image.0.1.type | string | - |
| 1.3.image.0.1.id | any | - |
| 1.3.image.0.1.name | any | - |
| 1.3.image.0.1.encodingFormat | any | - |
| 1.3.logo | array<object allOf> | a logo associated with the organization. |
| 1.3.logo (single item) | object allOf | - |
| 1.3.logo.0 (allOf item) | object | an electronic file. |
| 1.3.logo.0.type | string | - |
| 1.3.logo.0.id | string | - |
| 1.3.logo.0.name | string | document name or title |
| 1.3.logo.0.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| 1.3.logo.0.about | object | subject of the Document |
| 1.3.logo.0.url | string | public URL of the object |
| 1.3.logo.1 (allOf item) | object | an associated logo |
| 1.3.name | string | Name or DBA. |
| 1.3.parentOrganization | array<string> | - |
| 1.3.parentOrganization (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| 1.3.subOrganization | array<string> | a child organization |
| 1.3.subOrganization (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| 1.3.telephone | string | Primary phone number. |
| 1.3.type | string | - |
| 1.3.url | string | primary website/url for the entity. <span class='constraints'>format (`uri`)</span> |
| 2 (allOf item) | - | A real estate team. |
| 2.type | string | RealEstateTeam |
| 2.areaServed | object | the physical areas that make up the ServiceArea |
| 2.description | string | description of the item. |
| 2.parentOrganization | array<string> | A franchisor or affiliate network of which this organization plays a membership role. |
| 2.parentOrganization (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| 2.member | array<allOf> | - |
| 2.member (single item) | allOf | - |
| 2.member.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| 2.member.0.type | string | a role played by the member in the memberOf group |
| 2.member.0.roleName | string | the role name |
| 2.member.0.memberOf | object | the org or group where the role is performed |
| 2.member.0.member | string | member object or id <span class='constraints'>format (`uri`)</span> |
| 2.member.0.startDate | string | date the member began performing this role <span class='constraints'>format (`date-time`)</span> |
| 2.member.0.endDate | string | date the member stopped performing the role <span class='constraints'>format (`date-time`)</span> |
| 2.member.1 (allOf item) | object | a membership relationship.  Subclass of OrganizationRole |
| 2.member.1.type | string | a member of a real estate team |
| 2.member.1.roleName | string | - |
| 2.member.1.memberOf | string |  <span class='constraints'>format (`uri`)</span> |
| 2.member.1.member | string |  <span class='constraints'>format (`uri`)</span> |

## Example



```json
{
  "type": "RealEstateTeam",
  "@id": "http://example.com",
  "address": {
    "type": "PostalAddress",
    "name": "Home",
    "addressCountry": "USA",
    "addressCounty": "Gotham County",
    "addressLocality": "Gotham City",
    "addressRegion": "New Jersey",
    "addressSubdivision": "Gotham Heights",
    "postalCode": "10010",
    "postOfficeBoxNumber": "Box 1234",
    "streetAddress": "1007 Mountain Gate Rd"
  },
  "availableLanguage": [
    {
      "type": "Language",
      "name": "English",
      "additionalName": "en-us"
    }
  ],
  "branchCode": "for BHHS profile events, see additionalProperty.OfficeId",
  "certification": [
    {
      "type": "Certification",
      "name": "e-Agent Certified",
      "issuedBy": {
        "type": "RealEstateOrganization",
        "id": "https://example.com/profile/card#me",
        "name": "Gotham City Real Estate"
      },
      "issuedTo": {
        "type": "RealEstateAgent",
        "id": "http://example.com",
        "name": "string"
      }
    }
  ],
  "contactPoint": [
    {
      "type": "ContactPoint",
      "name": "Work",
      "telephone": "555-555-5555",
      "faxNumber": "555-555-5555",
      "email": "bob@example.com",
      "url": "https://www.facebook.com/hallandoates"
    }
  ],
  "email": "user@example.com",
  "faxNumber": "string",
  "image": [
    {
      "type": "ImageObject",
      "@id": "http://example.com",
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
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z"
    }
  ]
}
```
