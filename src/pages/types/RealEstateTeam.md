---
title: RealEstateTeam
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | allOf | - |
| 0 (allOf item) | - | - |
| id | string | - |
| 1 (allOf item) | allOf | - |
| 1.0 (allOf item) | object | - |
| 1.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| 1.0.@id | string | format (`uri`) the liked data uri for the Thing |
| 1.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| 1.1 (allOf item) | any | - |
| 1.2 (allOf item) | any | - |
| 1.3 (allOf item) | - | - |
| 1.3.address | object | A physical address. |
| 1.3.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| 1.3.availableLanguage.type | string | const (`"Language"`)  |
| 1.3.availableLanguage.name | string | the display name of the language |
| 1.3.availableLanguage.additionalName | string | BCP 47 language code |
| 1.3.branchCode | string | A short textual code that uniquely identifies a place of business. |
| 1.3.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| 1.3.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| 1.3.certification.0.type | string | allowed (`"Certification"`) Certification |
| 1.3.certification.0.name | string | the name of the Certification |
| 1.3.certification.0.issuedBy | object | the issuing authority |
| 1.3.certification.0.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| 1.3.certification.0.issuedBy.id | string | format (`uri`) Linked-Data URI (@id) |
| 1.3.certification.0.issuedBy.name | string | name of the issuing organization |
| 1.3.certification.0.issuedTo | object | the subject |
| 1.3.certification.0.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| 1.3.certification.0.issuedTo.id | string | format (`uri`) Linked-Data URI (@id) |
| 1.3.certification.0.issuedTo.name | string | the name of the item |
| 1.3.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| 1.3.contactPoint.type | string | const (`"ContactPoint"`)  |
| 1.3.contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| 1.3.contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| 1.3.contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| 1.3.contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| 1.3.contactPoint.url | string | format (`uri`) primary URL for the item. |
| 1.3.email | string | format (`email`)  |
| 1.3.faxNumber | string | Do people still use fax machines? |
| 1.3.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| 1.3.image.0 (index) | object allOf | - |
| 1.3.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| 1.3.image.0.0.0 (allOf item) | object | - |
| 1.3.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| 1.3.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| 1.3.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| 1.3.image.0.0.1 (allOf item) | - | - |
| 1.3.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| 1.3.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| 1.3.image.0.0.1.name | string | the file name of the object. |
| 1.3.image.0.0.1.encodingFormat | string | MIME type |
| 1.3.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| 1.3.image.0.0.1.url | string | format (`uri`) URL of the image content |
| 1.3.image.0.1 (allOf item) | - | - |
| 1.3.image.0.1.type | string | allowed (`"ImageObject"`)  |
| 1.3.image.0.1.id | any | - |
| 1.3.image.0.1.name | any | - |
| 1.3.image.0.1.encodingFormat | any | - |
| 1.3.logo | array<object allOf> | a logo associated with the organization. |
| 1.3.logo (single item) | object allOf | - |
| 1.3.logo.0 (allOf item) | object | an electronic file. |
| 1.3.logo.0.type | string | allowed (`"DigitalDocument"`)  |
| 1.3.logo.0.id | string | - |
| 1.3.logo.0.name | string | document name or title |
| 1.3.logo.0.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| 1.3.logo.0.about | object | subject of the Document |
| 1.3.logo.0.url | string | public URL of the object |
| 1.3.logo.1 (allOf item) | object | an associated logo |
| 1.3.name | string | Name or DBA. |
| 1.3.parentOrganization | array<string> | - |
| 1.3.parentOrganization (single item) | string | format (`uri`)  |
| 1.3.subOrganization | array<string> | a child organization |
| 1.3.subOrganization (single item) | string | format (`uri`)  |
| 1.3.telephone | string | Primary phone number. |
| 1.3.type | string | allowed (`"Organization"`)  |
| 1.3.url | string | format (`uri`) primary website/url for the entity. |
| 2 (allOf item) | - | A real estate team. |
| 2.type | string | allowed (`"RealEstateTeam"`) RealEstateTeam |
| 2.areaServed | object | the physical areas that make up the ServiceArea |
| 2.description | string | description of the item. |
| 2.parentOrganization | array<string> | A franchisor or affiliate network of which this organization plays a membership role. |
| 2.parentOrganization (single item) | string | format (`uri`)  |
| 2.member | array<allOf> | - |
| 2.member (single item) | allOf | - |
| 2.member.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| 2.member.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| 2.member.0.roleName | string | the role name |
| 2.member.0.memberOf | object | the org or group where the role is performed |
| 2.member.0.member | string | format (`uri`) member object or id |
| 2.member.0.startDate | string | format (`date-time`) date the member began performing this role |
| 2.member.0.endDate | string | format (`date-time`) date the member stopped performing the role |
| 2.member.1 (allOf item) | object | a membership relationship.  Subclass of OrganizationRole |
| 2.member.1.type | string | allowed (`"RealEstateTeamMembership"`) a member of a real estate team |
| 2.member.1.roleName | string | allowed (`"TeamMember"`, `"TeamAdmin"`, `"TeamOwner"`)  |
| 2.member.1.memberOf | string | format (`uri`)  |
| 2.member.1.member | string | format (`uri`)  |

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
