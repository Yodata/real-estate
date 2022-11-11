---
title: RealEstateOrganization
---
| Name | Type | Description |
|---|---|---|
| (root) | allOf | - |
| RealEstateOrganization.0 (allOf item) | allOf | - |
| RealEstateOrganization.0.0 (allOf item) | object | - |
| RealEstateOrganization.0.0.type | string | The item type (Linked-Data @type) |
| RealEstateOrganization.0.0.@id | string | the liked data uri for the Thing |
| RealEstateOrganization.0.0 (property names) | - | - |
| RealEstateOrganization.0.1 (allOf item) | any | - |
| RealEstateOrganization.0.2 (allOf item) | any | - |
| RealEstateOrganization.0.3 (allOf item) | - | - |
| RealEstateOrganization.0.3.address | object | A physical address. |
| RealEstateOrganization.0.3.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| RealEstateOrganization.0.3.availableLanguage.type | string | - |
| RealEstateOrganization.0.3.availableLanguage.name | string | the display name of the language |
| RealEstateOrganization.0.3.availableLanguage.additionalName | string | BCP 47 language code |
| RealEstateOrganization.0.3.branchCode | string | A short textual code that uniquely identifies a place of business. |
| RealEstateOrganization.0.3.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| RealEstateOrganization.0.3.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| RealEstateOrganization.0.3.certification.0.type | string | Certification |
| RealEstateOrganization.0.3.certification.0.name | string | the name of the Certification |
| RealEstateOrganization.0.3.certification.0.issuedBy | object | the issuing authority |
| RealEstateOrganization.0.3.certification.0.issuedBy.type | string | The item type (Linked-Data @type) |
| RealEstateOrganization.0.3.certification.0.issuedBy.id | string | Linked-Data URI (@id) |
| RealEstateOrganization.0.3.certification.0.issuedBy.name | string | name of the issuing organization |
| RealEstateOrganization.0.3.certification.0.issuedTo | object | the subject |
| RealEstateOrganization.0.3.certification.0.issuedTo.type | string | The item type (Linked-Data @type) |
| RealEstateOrganization.0.3.certification.0.issuedTo.id | string | Linked-Data URI (@id) |
| RealEstateOrganization.0.3.certification.0.issuedTo.name | string | the name of the item |
| RealEstateOrganization.0.3.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| RealEstateOrganization.0.3.contactPoint.type | string | - |
| RealEstateOrganization.0.3.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| RealEstateOrganization.0.3.contactPoint.telephone | string | - |
| RealEstateOrganization.0.3.contactPoint.faxNumber | string | - |
| RealEstateOrganization.0.3.contactPoint.email | string | an email address for the item. |
| RealEstateOrganization.0.3.contactPoint.url | string | primary URL for the item. |
| RealEstateOrganization.0.3.email | string | - |
| RealEstateOrganization.0.3.faxNumber | string | Do people still use fax machines? |
| RealEstateOrganization.0.3.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| RealEstateOrganization.0.3.image.0 (index) | object allOf | - |
| RealEstateOrganization.0.3.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| RealEstateOrganization.0.3.image.0.0.0 (allOf item) | object | - |
| RealEstateOrganization.0.3.image.0.0.0.type | string | The item type (Linked-Data @type) |
| RealEstateOrganization.0.3.image.0.0.0.@id | string | the liked data uri for the Thing |
| RealEstateOrganization.0.3.image.0.0.0 (property names) | - | - |
| RealEstateOrganization.0.3.image.0.0.1 (allOf item) | - | - |
| RealEstateOrganization.0.3.image.0.0.1.type | string | - |
| RealEstateOrganization.0.3.image.0.0.1.id | string | the URL to access the item. |
| RealEstateOrganization.0.3.image.0.0.1.name | string | the file name of the object. |
| RealEstateOrganization.0.3.image.0.0.1.encodingFormat | string | MIME type |
| RealEstateOrganization.0.3.image.0.0.1.about | string | URI to the subject of the image or logo |
| RealEstateOrganization.0.3.image.0.0.1.url | string | URL of the image content |
| RealEstateOrganization.0.3.image.0.1 (allOf item) | - | - |
| RealEstateOrganization.0.3.image.0.1.type | string | - |
| RealEstateOrganization.0.3.image.0.1.id | any | - |
| RealEstateOrganization.0.3.image.0.1.name | any | - |
| RealEstateOrganization.0.3.image.0.1.encodingFormat | any | - |
| RealEstateOrganization.0.3.logo | array<object allOf> | a logo associated with the organization. |
| RealEstateOrganization.0.3.logo (single item) | object allOf | - |
| RealEstateOrganization.0.3.logo.0 (allOf item) | object | an electronic file. |
| RealEstateOrganization.0.3.logo.0.type | string | - |
| RealEstateOrganization.0.3.logo.0.id | string | - |
| RealEstateOrganization.0.3.logo.0.name | string | document name or title |
| RealEstateOrganization.0.3.logo.0.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| RealEstateOrganization.0.3.logo.0.about | object | subject of the Document |
| RealEstateOrganization.0.3.logo.0.url | string | public URL of the object |
| RealEstateOrganization.0.3.logo.1 (allOf item) | object | an associated logo |
| RealEstateOrganization.0.3.name | string | Name or DBA. |
| RealEstateOrganization.0.3.parentOrganization | array<string> | - |
| RealEstateOrganization.0.3.parentOrganization (single item) | string | - |
| RealEstateOrganization.0.3.subOrganization | array<string> | a child organization |
| RealEstateOrganization.0.3.subOrganization (single item) | string | - |
| RealEstateOrganization.0.3.telephone | string | Primary phone number. |
| RealEstateOrganization.0.3.type | string | - |
| RealEstateOrganization.0.3.url | string | primary website/url for the entity. |
| RealEstateOrganization.1 (allOf item) | - | A real estate franchisor, broker or business |
| RealEstateOrganization.1.type | string | RealEstateOrganzation |
| RealEstateOrganization.1.areaServed | object | the physical areas that make up the ServiceArea |
| RealEstateOrganization.1.description | string | description of the item. |
| RealEstateOrganization.1.parentOrganization | array<string> | A franchisor or affiliate network of which this organization plays a membership role. |
| RealEstateOrganization.1.parentOrganization (single item) | string | - |
| RealEstateOrganization.1.numberOfSubOrganizations | number | the number of offices for an affiliate. |
| RealEstateOrganization.1.member | array<anyOf> | A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. |
| RealEstateOrganization.1.member (single item) | anyOf | - |
| RealEstateOrganization.1.member.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| RealEstateOrganization.1.member.0.type | string | a role played by the member in the memberOf group |
| RealEstateOrganization.1.member.0.roleName | string | the role name |
| RealEstateOrganization.1.member.0.memberOf | object | the org or group where the role is performed |
| RealEstateOrganization.1.member.0.member | string | member object or id |
| RealEstateOrganization.1.member.0.startDate | string | date the member began performing this role |
| RealEstateOrganization.1.member.0.endDate | string | date the member stopped performing the role |
| RealEstateOrganization.1.member.1 (anyOf item) | string | - |
| RealEstateOrganization.1.memberOf | array<allOf> | An Organization (or ProgramMembership) to which this Person or Organization belongs. |
| RealEstateOrganization.1.memberOf (single item) | allOf | - |
| RealEstateOrganization.1.memberOf.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| RealEstateOrganization.1.memberOf.0.type | string | a role played by the member in the memberOf group |
| RealEstateOrganization.1.memberOf.0.roleName | string | the role name |
| RealEstateOrganization.1.memberOf.0.memberOf | object | the org or group where the role is performed |
| RealEstateOrganization.1.memberOf.0.member | string | member object or id |
| RealEstateOrganization.1.memberOf.0.startDate | string | date the member began performing this role |
| RealEstateOrganization.1.memberOf.0.endDate | string | date the member stopped performing the role |
| RealEstateOrganization.1.memberOf.1 (allOf item) | object | a membership relationship |
| RealEstateOrganization.1.memberOf.1.type | string | an MLS member relationship |
| RealEstateOrganization.1.memberOf.1.roleName | string | - |
| RealEstateOrganization.1.memberOf.1.memberOf | object | - |
| RealEstateOrganization.1.memberOf.1.member | string | - |
| RealEstateOrganization.1.memberOf.1.memberId | string | the user's MLSID |
| RealEstateOrganization.1.permit | array<object> | - |
| RealEstateOrganization.1.permit (single item) | object | - |

> Examples of RealEstateOrganization

```json
{
  "type": "RealEstateOrganization",
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
  ]
}
```


