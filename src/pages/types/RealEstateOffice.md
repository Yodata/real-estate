---
title: RealEstateOffice
---
## Example



```json
{
  "type": "RealEstateOffice",
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
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object allOf | A real estate office / place of business. |
| 0 (allOf item) | allOf | - |
| 0 (allOf item) | object | - |
| type | string | - |
| address | object | A physical address. |
| address.type | string | const (`"PostalAddress"`)  |
| address.streetAddress | string | the street address <= 75 characters |
| address.postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| address.addressRegion | string | abbreviated state or province |
| address.addressLocality | string | City, Township. <= 50 characters |
| address.postalCode | string | Zip/Post Code <= 12 characters |
| address.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| address.addressCounty | string | County |
| address.addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |
| availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| availableLanguage.type | string | const (`"Language"`)  |
| availableLanguage.name | string | the display name of the language |
| availableLanguage.additionalName | string | BCP 47 language code |
| branchCode | string | A short textual code that uniquely identifies a place of business. |
| certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| certification.0.type | string | allowed (`"Certification"`) Certification |
| certification.0.name | string | the name of the Certification |
| certification.0.issuedBy | object | the issuing authority |
| certification.0.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| certification.0.issuedBy.id | string | Linked-Data URI (@id) format (`uri`) |
| certification.0.issuedBy.name | string | name of the issuing organization |
| certification.0.issuedTo | object | the subject |
| certification.0.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| certification.0.issuedTo.id | string | Linked-Data URI (@id) format (`uri`) |
| certification.0.issuedTo.name | string | - |
| contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| contactPoint.type | string | const (`"ContactPoint"`)  |
| contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| contactPoint.telephone | string | - |
| contactPoint.faxNumber | string | - |
| contactPoint.email | string | an email address for the item. format (`email`) |
| contactPoint.url | string | primary URL for the item. format (`uri`) |
| email | string | a valid email address format (`email`) |
| faxNumber | string | Do people still use fax machines? |
| image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| image.0 (index) | object allOf | - |
| image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| image.0.0.0 (allOf item) | object | - |
| image.0.0.0.type | string | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`) |
| image.0.0.0.@id | string | the liked data uri for the Thing format (`uri`) |
| image.0.0.0 (property names) | - |  pattern (`^[a-z@$][a-zA-Z0-9-_]+$`) |
| image.0.0.1 (allOf item) | - | - |
| image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| image.0.0.1.id | string | the URL to access the item. format (`uri`) |
| image.0.0.1.name | string | the file name of the object. |
| image.0.0.1.encodingFormat | string | MIME type |
| image.0.0.1.about | string | URI to the subject of the image or logo format (`uri`) |
| image.0.0.1.url | string | URL of the image content format (`uri`) |
| image.0.1 (allOf item) | - | - |
| image.0.1.type | string | allowed (`"ImageObject"`)  |
| image.0.1.id | any | - |
| image.0.1.name | any | - |
| image.0.1.encodingFormat | any | - |
| logo | array<object> | - |
| logo.type | string | allowed (`"DigitalDocument"`)  |
| logo.id | string | - |
| logo.name | string | document name or title |
| logo.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| logo.about | object | subject of the Document |
| logo.url | string | public URL of the object |
| name | string | - |
| parentOrganization | array<string> | organizations of which this org is a part. |
| parentOrganization (single item) | string |  format (`uri`) |
| subOrganization | array<string> | child organizations of the organization |
| subOrganization (single item) | string |  format (`uri`) |
| telephone | string | Primary phone number. |
| url | string | URL of the item. format (`uri`) |
| 1 (allOf item) | - | A real estate franchisor, broker or business |
| 1.type | string | allowed (`"RealEstateOrganization"`, `"RealEstateOffice"`)  |
| 1.areaServed | object | the physical areas that make up the ServiceArea |
| 1.description | string | description of the item. |
| 1.parentOrganization | array<string> | organizations of which this org is a part. |
| 1.parentOrganization (single item) | string |  format (`uri`) |
| 1.numberOfSubOrganizations | number | the number of offices for an affiliate. |
| 1.member | array<anyOf> | A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. |
| 1.member (single item) | anyOf | - |
| 1.member.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| 1.member.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| 1.member.0.roleName | string | the role name |
| 1.member.0.memberOf | object | the org or group where the role is performed |
| 1.member.0.member | string | member object or id format (`uri`) |
| 1.member.0.startDate | string | date the member began performing this role format (`date-time`) |
| 1.member.0.endDate | string | date the member stopped performing the role format (`date-time`) |
| 1.member.1 (anyOf item) | string |  format (`uri`) |
| 1.memberOf | array<anyOf> | - |
| 1.memberOf (single item) | anyOf | - |
| 1.memberOf.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| 1.memberOf.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| 1.memberOf.0.roleName | string | the role name |
| 1.memberOf.0.memberOf | object | the org or group where the role is performed |
| 1.memberOf.0.member | string | member object or id format (`uri`) |
| 1.memberOf.0.startDate | string | date the member began performing this role format (`date-time`) |
| 1.memberOf.0.endDate | string | date the member stopped performing the role format (`date-time`) |
| 1.memberOf.1 (anyOf item) | allOf | - |
| 1.memberOf.1.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| 1.memberOf.1.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| 1.memberOf.1.0.roleName | string | the role name |
| 1.memberOf.1.0.memberOf | object | the org or group where the role is performed |
| 1.memberOf.1.0.member | string | member object or id format (`uri`) |
| 1.memberOf.1.0.startDate | string | date the member began performing this role format (`date-time`) |
| 1.memberOf.1.0.endDate | string | date the member stopped performing the role format (`date-time`) |
| 1.memberOf.1.1 (allOf item) | object | a membership relationship |
| 1.memberOf.1.1.type | string | allowed (`"MLSMembership"`) an MLS member relationship |
| 1.memberOf.1.1.roleName | string | - |
| 1.memberOf.1.1.memberOf | object | - |
| 1.memberOf.1.1.member | string |  format (`uri`) |
| 1.memberOf.1.1.memberId | string | the user's MLSID |
| 1.permit | array<object> | - |
| 1.permit (single item) | object | - |
| 1 (allOf item) | - | - |
| 1.type | string | allowed (`"RealEstateOffice"`) RealEstateOffice |
| 1.contactPoint | any | department or role specific contact points, i.e. relocation. |
| 1.description | any | - |
| 1.parentOrganization | any | Office broker or franchisor. |
| 1.subOrganization | array<string> | Agents and teams associated with the office. |
| 1.subOrganization (single item) | string |  format (`uri`) |
| 1.geoCoordinates | object | a lat/long point. |
| 1.geoCoordinates.type | string | allowed (`"GeoCoordinates"`) GeoCordinates |
| 1.geoCoordinates.longitude | number | The longitude of a location. |
| 1.geoCoordinates.latitude | number | The latitude of a location. |

