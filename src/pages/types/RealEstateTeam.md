---
title: RealEstateTeam
---
## Example



```json
{
  "type": "RealEstateTeam",
  "address": {
    "type": "PostalAddress",
    "streetAddress": "1007 Mountain Gate Rd",
    "postOfficeBoxNumber": "Box 1234",
    "addressRegion": "NJ",
    "addressLocality": "Gotham City",
    "postalCode": "10010",
    "addressCountry": "CA",
    "addressCounty": "string",
    "addressSubdivision": "Gotham Heights"
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
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | allOf | - |
| 0 (allOf item) | - | - |
| id | string | - |
| 1 (allOf item) | object | - |
| 1.type | string | - |
| 1.address | object | A physical address. |
| 1.address.type | string | const (`"PostalAddress"`)  |
| 1.address.streetAddress | string | the street address <= 75 characters |
| 1.address.postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| 1.address.addressRegion | string | abbreviated state or province |
| 1.address.addressLocality | string | City, Township. <= 50 characters |
| 1.address.postalCode | string | Zip/Post Code <= 12 characters |
| 1.address.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| 1.address.addressCounty | string | County |
| 1.address.addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |
| 1.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| 1.availableLanguage.type | string | const (`"Language"`)  |
| 1.availableLanguage.name | string | the display name of the language |
| 1.availableLanguage.additionalName | string | BCP 47 language code |
| 1.branchCode | string | A short textual code that uniquely identifies a place of business. |
| 1.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| 1.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| 1.certification.0.type | string | allowed (`"Certification"`) Certification |
| 1.certification.0.name | string | the name of the Certification |
| 1.certification.0.issuedBy | object | the issuing authority |
| 1.certification.0.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| 1.certification.0.issuedBy.id | string | Linked-Data URI (@id) format (`uri`) |
| 1.certification.0.issuedBy.name | string | name of the issuing organization |
| 1.certification.0.issuedTo | object | the subject |
| 1.certification.0.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| 1.certification.0.issuedTo.id | string | Linked-Data URI (@id) format (`uri`) |
| 1.certification.0.issuedTo.name | string | - |
| 1.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| 1.contactPoint.type | string | const (`"ContactPoint"`)  |
| 1.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| 1.contactPoint.telephone | string | - |
| 1.contactPoint.faxNumber | string | - |
| 1.contactPoint.email | string | an email address for the item. format (`email`) |
| 1.contactPoint.url | string | primary URL for the item. format (`uri`) |
| 1.email | string | a valid email address format (`email`) |
| 1.faxNumber | string | Do people still use fax machines? |
| 1.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| 1.image.0 (index) | object allOf | - |
| 1.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| 1.image.0.0.0 (allOf item) | object | - |
| 1.image.0.0.0.type | string | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`) |
| 1.image.0.0.0.@id | string | the liked data uri for the Thing format (`uri`) |
| 1.image.0.0.0 (property names) | - |  pattern (`^[a-z@$][a-zA-Z0-9-_]+$`) |
| 1.image.0.0.1 (allOf item) | - | - |
| 1.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| 1.image.0.0.1.id | string | the URL to access the item. format (`uri`) |
| 1.image.0.0.1.name | string | the file name of the object. |
| 1.image.0.0.1.encodingFormat | string | MIME type |
| 1.image.0.0.1.about | string | URI to the subject of the image or logo format (`uri`) |
| 1.image.0.0.1.url | string | URL of the image content format (`uri`) |
| 1.image.0.1 (allOf item) | - | - |
| 1.image.0.1.type | string | allowed (`"ImageObject"`)  |
| 1.image.0.1.id | any | - |
| 1.image.0.1.name | any | - |
| 1.image.0.1.encodingFormat | any | - |
| 1.logo | array<object> | - |
| 1.logo.type | string | allowed (`"DigitalDocument"`)  |
| 1.logo.id | string | - |
| 1.logo.name | string | document name or title |
| 1.logo.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| 1.logo.about | object | subject of the Document |
| 1.logo.url | string | public URL of the object |
| 1.name | string | - |
| 1.parentOrganization | array<string> | organizations of which this org is a part. |
| 1.parentOrganization (single item) | string |  format (`uri`) |
| 1.subOrganization | array<string> | child organizations of the organization |
| 1.subOrganization (single item) | string |  format (`uri`) |
| 1.telephone | string | Primary phone number. |
| 1.url | string | URL of the item. format (`uri`) |
| 2 (allOf item) | - | A real estate team. |
| 2.type | string | allowed (`"RealEstateTeam"`) RealEstateTeam |
| 2.areaServed | object | the physical areas that make up the ServiceArea |
| 2.description | string | description of the item. |
| 2.parentOrganization | array<string> | A franchisor or affiliate network of which this organization plays a membership role. |
| 2.parentOrganization (single item) | string |  format (`uri`) |
| 2.member | array<allOf> | - |
| 2.member (single item) | allOf | - |
| 2.member.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| 2.member.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| 2.member.0.roleName | string | the role name |
| 2.member.0.memberOf | object | the org or group where the role is performed |
| 2.member.0.member | string | member object or id format (`uri`) |
| 2.member.0.startDate | string | date the member began performing this role format (`date-time`) |
| 2.member.0.endDate | string | date the member stopped performing the role format (`date-time`) |
| 2.member.1 (allOf item) | object | a membership relationship.  Subclass of OrganizationRole |
| 2.member.1.type | string | allowed (`"RealEstateTeamMembership"`) a member of a real estate team |
| 2.member.1.roleName | string | allowed (`"TeamMember"`, `"TeamAdmin"`, `"TeamOwner"`)  |
| 2.member.1.memberOf | string |  format (`uri`) |
| 2.member.1.member | string |  format (`uri`) |

