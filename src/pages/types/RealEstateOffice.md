---
title: RealEstateOffice
---
## Schema

| Name | Type | Description |
|---|---|---|
| (RealEstateOffice) | object allOf | A real estate office / place of business. |
| 0 (allOf item) | allOf | - |
| 0 (allOf item) | allOf | - |
| 0 (allOf item) | object | - |
| type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| @id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| 0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| 1 (allOf item) | any | - |
| 2 (allOf item) | any | - |
| 3 (allOf item) | - | - |
| 3.address | object | A physical address. |
| 3.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| 3.availableLanguage.type | string | - |
| 3.availableLanguage.name | string | the display name of the language |
| 3.availableLanguage.additionalName | string | BCP 47 language code |
| 3.branchCode | string | A short textual code that uniquely identifies a place of business. |
| 3.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| 3.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| 3.certification.0.type | string | Certification |
| 3.certification.0.name | string | the name of the Certification |
| 3.certification.0.issuedBy | object | the issuing authority |
| 3.certification.0.issuedBy.type | string | The item type (Linked-Data @type) |
| 3.certification.0.issuedBy.id | string | Linked-Data URI (@id) <span class='constraints'>format (`uri`)</span> |
| 3.certification.0.issuedBy.name | string | name of the issuing organization |
| 3.certification.0.issuedTo | object | the subject |
| 3.certification.0.issuedTo.type | string | The item type (Linked-Data @type) |
| 3.certification.0.issuedTo.id | string | Linked-Data URI (@id) <span class='constraints'>format (`uri`)</span> |
| 3.certification.0.issuedTo.name | string | the name of the item |
| 3.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| 3.contactPoint.type | string | - |
| 3.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| 3.contactPoint.telephone | string | - |
| 3.contactPoint.faxNumber | string | - |
| 3.contactPoint.email | string | an email address for the item. <span class='constraints'>format (`email`)</span> |
| 3.contactPoint.url | string | primary URL for the item. <span class='constraints'>format (`uri`)</span> |
| 3.email | string |  <span class='constraints'>format (`email`)</span> |
| 3.faxNumber | string | Do people still use fax machines? |
| 3.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| 3.image.0 (index) | object allOf | - |
| 3.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| 3.image.0.0.0 (allOf item) | object | - |
| 3.image.0.0.0.type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| 3.image.0.0.0.@id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| 3.image.0.0.0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| 3.image.0.0.1 (allOf item) | - | - |
| 3.image.0.0.1.type | string | - |
| 3.image.0.0.1.id | string | the URL to access the item. <span class='constraints'>format (`uri`)</span> |
| 3.image.0.0.1.name | string | the file name of the object. |
| 3.image.0.0.1.encodingFormat | string | MIME type |
| 3.image.0.0.1.about | string | URI to the subject of the image or logo <span class='constraints'>format (`uri`)</span> |
| 3.image.0.0.1.url | string | URL of the image content <span class='constraints'>format (`uri`)</span> |
| 3.image.0.1 (allOf item) | - | - |
| 3.image.0.1.type | string | - |
| 3.image.0.1.id | any | - |
| 3.image.0.1.name | any | - |
| 3.image.0.1.encodingFormat | any | - |
| 3.logo | array<object allOf> | a logo associated with the organization. |
| 3.logo (single item) | object allOf | - |
| 3.logo.0 (allOf item) | object | an electronic file. |
| 3.logo.0.type | string | - |
| 3.logo.0.id | string | - |
| 3.logo.0.name | string | document name or title |
| 3.logo.0.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| 3.logo.0.about | object | subject of the Document |
| 3.logo.0.url | string | public URL of the object |
| 3.logo.1 (allOf item) | object | an associated logo |
| 3.name | string | Name or DBA. |
| 3.parentOrganization | array<string> | - |
| 3.parentOrganization (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| 3.subOrganization | array<string> | a child organization |
| 3.subOrganization (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| 3.telephone | string | Primary phone number. |
| 3.type | string | - |
| 3.url | string | primary website/url for the entity. <span class='constraints'>format (`uri`)</span> |
| 1 (allOf item) | - | A real estate franchisor, broker or business |
| 1.type | string | RealEstateOrganzation |
| 1.areaServed | object | the physical areas that make up the ServiceArea |
| 1.description | string | description of the item. |
| 1.parentOrganization | array<string> | A franchisor or affiliate network of which this organization plays a membership role. |
| 1.parentOrganization (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| 1.numberOfSubOrganizations | number | the number of offices for an affiliate. |
| 1.member | array<anyOf> | A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. |
| 1.member (single item) | anyOf | - |
| 1.member.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| 1.member.0.type | string | a role played by the member in the memberOf group |
| 1.member.0.roleName | string | the role name |
| 1.member.0.memberOf | object | the org or group where the role is performed |
| 1.member.0.member | string | member object or id <span class='constraints'>format (`uri`)</span> |
| 1.member.0.startDate | string | date the member began performing this role <span class='constraints'>format (`date-time`)</span> |
| 1.member.0.endDate | string | date the member stopped performing the role <span class='constraints'>format (`date-time`)</span> |
| 1.member.1 (anyOf item) | string |  <span class='constraints'>format (`uri`)</span> |
| 1.memberOf | array<allOf> | An Organization (or ProgramMembership) to which this Person or Organization belongs. |
| 1.memberOf (single item) | allOf | - |
| 1.memberOf.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| 1.memberOf.0.type | string | a role played by the member in the memberOf group |
| 1.memberOf.0.roleName | string | the role name |
| 1.memberOf.0.memberOf | object | the org or group where the role is performed |
| 1.memberOf.0.member | string | member object or id <span class='constraints'>format (`uri`)</span> |
| 1.memberOf.0.startDate | string | date the member began performing this role <span class='constraints'>format (`date-time`)</span> |
| 1.memberOf.0.endDate | string | date the member stopped performing the role <span class='constraints'>format (`date-time`)</span> |
| 1.memberOf.1 (allOf item) | object | a membership relationship |
| 1.memberOf.1.type | string | an MLS member relationship |
| 1.memberOf.1.roleName | string | - |
| 1.memberOf.1.memberOf | object | - |
| 1.memberOf.1.member | string |  <span class='constraints'>format (`uri`)</span> |
| 1.memberOf.1.memberId | string | the user's MLSID |
| 1.permit | array<object> | - |
| 1.permit (single item) | object | - |
| 1 (allOf item) | - | - |
| 1.type | string | RealEstateOffice |
| 1.contactPoint | any | department or role specific contact points, i.e. relocation. |
| 1.description | any | - |
| 1.parentOrganization | any | Office broker or franchisor. |
| 1.subOrganization | array<string> | Agents and teams associated with the office. |
| 1.subOrganization (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| 1.geoCoordinates | object | a lat/long point. |
| 1.geoCoordinates.type | string | GeoCordinates |
| 1.geoCoordinates.longitude | number | The longitude of a location. |
| 1.geoCoordinates.latitude | number | The latitude of a location. |
| 0 (allOf item) | allOf | - |
| 0 (allOf item) | allOf | - |
| 0 (allOf item) | object | - |
| type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| @id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| 0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| 1 (allOf item) | any | - |
| 2 (allOf item) | any | - |
| 3 (allOf item) | - | - |
| 3.address | object | A physical address. |
| 3.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| 3.availableLanguage.type | string | - |
| 3.availableLanguage.name | string | the display name of the language |
| 3.availableLanguage.additionalName | string | BCP 47 language code |
| 3.branchCode | string | A short textual code that uniquely identifies a place of business. |
| 3.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| 3.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| 3.certification.0.type | string | Certification |
| 3.certification.0.name | string | the name of the Certification |
| 3.certification.0.issuedBy | object | the issuing authority |
| 3.certification.0.issuedBy.type | string | The item type (Linked-Data @type) |
| 3.certification.0.issuedBy.id | string | Linked-Data URI (@id) <span class='constraints'>format (`uri`)</span> |
| 3.certification.0.issuedBy.name | string | name of the issuing organization |
| 3.certification.0.issuedTo | object | the subject |
| 3.certification.0.issuedTo.type | string | The item type (Linked-Data @type) |
| 3.certification.0.issuedTo.id | string | Linked-Data URI (@id) <span class='constraints'>format (`uri`)</span> |
| 3.certification.0.issuedTo.name | string | the name of the item |
| 3.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| 3.contactPoint.type | string | - |
| 3.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| 3.contactPoint.telephone | string | - |
| 3.contactPoint.faxNumber | string | - |
| 3.contactPoint.email | string | an email address for the item. <span class='constraints'>format (`email`)</span> |
| 3.contactPoint.url | string | primary URL for the item. <span class='constraints'>format (`uri`)</span> |
| 3.email | string |  <span class='constraints'>format (`email`)</span> |
| 3.faxNumber | string | Do people still use fax machines? |
| 3.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| 3.image.0 (index) | object allOf | - |
| 3.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| 3.image.0.0.0 (allOf item) | object | - |
| 3.image.0.0.0.type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| 3.image.0.0.0.@id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| 3.image.0.0.0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| 3.image.0.0.1 (allOf item) | - | - |
| 3.image.0.0.1.type | string | - |
| 3.image.0.0.1.id | string | the URL to access the item. <span class='constraints'>format (`uri`)</span> |
| 3.image.0.0.1.name | string | the file name of the object. |
| 3.image.0.0.1.encodingFormat | string | MIME type |
| 3.image.0.0.1.about | string | URI to the subject of the image or logo <span class='constraints'>format (`uri`)</span> |
| 3.image.0.0.1.url | string | URL of the image content <span class='constraints'>format (`uri`)</span> |
| 3.image.0.1 (allOf item) | - | - |
| 3.image.0.1.type | string | - |
| 3.image.0.1.id | any | - |
| 3.image.0.1.name | any | - |
| 3.image.0.1.encodingFormat | any | - |
| 3.logo | array<object allOf> | a logo associated with the organization. |
| 3.logo (single item) | object allOf | - |
| 3.logo.0 (allOf item) | object | an electronic file. |
| 3.logo.0.type | string | - |
| 3.logo.0.id | string | - |
| 3.logo.0.name | string | document name or title |
| 3.logo.0.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| 3.logo.0.about | object | subject of the Document |
| 3.logo.0.url | string | public URL of the object |
| 3.logo.1 (allOf item) | object | an associated logo |
| 3.name | string | Name or DBA. |
| 3.parentOrganization | array<string> | - |
| 3.parentOrganization (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| 3.subOrganization | array<string> | a child organization |
| 3.subOrganization (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| 3.telephone | string | Primary phone number. |
| 3.type | string | - |
| 3.url | string | primary website/url for the entity. <span class='constraints'>format (`uri`)</span> |
| 1 (allOf item) | - | A real estate franchisor, broker or business |
| 1.type | string | RealEstateOrganzation |
| 1.areaServed | object | the physical areas that make up the ServiceArea |
| 1.description | string | description of the item. |
| 1.parentOrganization | array<string> | A franchisor or affiliate network of which this organization plays a membership role. |
| 1.parentOrganization (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| 1.numberOfSubOrganizations | number | the number of offices for an affiliate. |
| 1.member | array<anyOf> | A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. |
| 1.member (single item) | anyOf | - |
| 1.member.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| 1.member.0.type | string | a role played by the member in the memberOf group |
| 1.member.0.roleName | string | the role name |
| 1.member.0.memberOf | object | the org or group where the role is performed |
| 1.member.0.member | string | member object or id <span class='constraints'>format (`uri`)</span> |
| 1.member.0.startDate | string | date the member began performing this role <span class='constraints'>format (`date-time`)</span> |
| 1.member.0.endDate | string | date the member stopped performing the role <span class='constraints'>format (`date-time`)</span> |
| 1.member.1 (anyOf item) | string |  <span class='constraints'>format (`uri`)</span> |
| 1.memberOf | array<allOf> | An Organization (or ProgramMembership) to which this Person or Organization belongs. |
| 1.memberOf (single item) | allOf | - |
| 1.memberOf.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| 1.memberOf.0.type | string | a role played by the member in the memberOf group |
| 1.memberOf.0.roleName | string | the role name |
| 1.memberOf.0.memberOf | object | the org or group where the role is performed |
| 1.memberOf.0.member | string | member object or id <span class='constraints'>format (`uri`)</span> |
| 1.memberOf.0.startDate | string | date the member began performing this role <span class='constraints'>format (`date-time`)</span> |
| 1.memberOf.0.endDate | string | date the member stopped performing the role <span class='constraints'>format (`date-time`)</span> |
| 1.memberOf.1 (allOf item) | object | a membership relationship |
| 1.memberOf.1.type | string | an MLS member relationship |
| 1.memberOf.1.roleName | string | - |
| 1.memberOf.1.memberOf | object | - |
| 1.memberOf.1.member | string |  <span class='constraints'>format (`uri`)</span> |
| 1.memberOf.1.memberId | string | the user's MLSID |
| 1.permit | array<object> | - |
| 1.permit (single item) | object | - |
| 1 (allOf item) | - | - |
| 1.type | string | RealEstateOffice |
| 1.contactPoint | any | department or role specific contact points, i.e. relocation. |
| 1.description | any | - |
| 1.parentOrganization | any | Office broker or franchisor. |
| 1.subOrganization | array<string> | Agents and teams associated with the office. |
| 1.subOrganization (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| 1.geoCoordinates | object | a lat/long point. |
| 1.geoCoordinates.type | string | GeoCordinates |
| 1.geoCoordinates.longitude | number | The longitude of a location. |
| 1.geoCoordinates.latitude | number | The latitude of a location. |

## Example



```json
{
  "type": "RealEstateOffice",
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
      "name": "Relocation",
      "telephone": "1-245-880-8222",
      "faxNumber": "958-530-3473",
      "email": "relocation@example.com",
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
  "parentOrganization": null,
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
  "geoCoordinates": {
    "type": "GeoCoordinates",
    "longitude": 73.98,
    "latitude": 40.75
  }
}
```
