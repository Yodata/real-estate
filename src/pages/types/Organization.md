---
title: Organization
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | allOf | - |
| 0 (allOf item) | object | - |
| type | string | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`) |
| @id | string | the liked data uri for the Thing format (`uri`) |
| 0 (property names) | - |  pattern (`^[a-z@$][a-zA-Z0-9-_]+$`) |
| 1 (allOf item) | any | - |
| 2 (allOf item) | any | - |
| 3 (allOf item) | - | - |
| 3.address | object | A physical address. |
| 3.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| 3.availableLanguage.type | string | const (`"Language"`)  |
| 3.availableLanguage.name | string | the display name of the language |
| 3.availableLanguage.additionalName | string | BCP 47 language code |
| 3.branchCode | string | A short textual code that uniquely identifies a place of business. |
| 3.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| 3.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| 3.certification.0.type | string | allowed (`"Certification"`) Certification |
| 3.certification.0.name | string | the name of the Certification |
| 3.certification.0.issuedBy | object | the issuing authority |
| 3.certification.0.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| 3.certification.0.issuedBy.id | string | Linked-Data URI (@id) format (`uri`) |
| 3.certification.0.issuedBy.name | string | name of the issuing organization |
| 3.certification.0.issuedTo | object | the subject |
| 3.certification.0.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| 3.certification.0.issuedTo.id | string | Linked-Data URI (@id) format (`uri`) |
| 3.certification.0.issuedTo.name | string | the name of the item |
| 3.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| 3.contactPoint.type | string | const (`"ContactPoint"`)  |
| 3.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| 3.contactPoint.telephone | string | - |
| 3.contactPoint.faxNumber | string | - |
| 3.contactPoint.email | string | an email address for the item. format (`email`) |
| 3.contactPoint.url | string | primary URL for the item. format (`uri`) |
| 3.email | string |  format (`email`) |
| 3.faxNumber | string | Do people still use fax machines? |
| 3.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| 3.image.0 (index) | object allOf | - |
| 3.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| 3.image.0.0.0 (allOf item) | object | - |
| 3.image.0.0.0.type | string | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`) |
| 3.image.0.0.0.@id | string | the liked data uri for the Thing format (`uri`) |
| 3.image.0.0.0 (property names) | - |  pattern (`^[a-z@$][a-zA-Z0-9-_]+$`) |
| 3.image.0.0.1 (allOf item) | - | - |
| 3.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| 3.image.0.0.1.id | string | the URL to access the item. format (`uri`) |
| 3.image.0.0.1.name | string | the file name of the object. |
| 3.image.0.0.1.encodingFormat | string | MIME type |
| 3.image.0.0.1.about | string | URI to the subject of the image or logo format (`uri`) |
| 3.image.0.0.1.url | string | URL of the image content format (`uri`) |
| 3.image.0.1 (allOf item) | - | - |
| 3.image.0.1.type | string | allowed (`"ImageObject"`)  |
| 3.image.0.1.id | any | - |
| 3.image.0.1.name | any | - |
| 3.image.0.1.encodingFormat | any | - |
| 3.logo | array<object allOf> | a logo associated with the organization. |
| 3.logo (single item) | object allOf | - |
| 3.logo.0 (allOf item) | object | an electronic file. |
| 3.logo.0.type | string | allowed (`"DigitalDocument"`)  |
| 3.logo.0.id | string | - |
| 3.logo.0.name | string | document name or title |
| 3.logo.0.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| 3.logo.0.about | object | subject of the Document |
| 3.logo.0.url | string | public URL of the object |
| 3.logo.1 (allOf item) | object | an associated logo |
| 3.name | string | Name or DBA. |
| 3.parentOrganization | array<string> | - |
| 3.parentOrganization (single item) | string |  format (`uri`) |
| 3.subOrganization | array<string> | a child organization |
| 3.subOrganization (single item) | string |  format (`uri`) |
| 3.telephone | string | Primary phone number. |
| 3.type | string | allowed (`"Organization"`)  |
| 3.url | string | primary website/url for the entity. format (`uri`) |

## Example



```json
{
  "type": "Organization",
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
  "url": "http://example.com"
}
```