---
title: Organization
---
## Example



```json
{
  "type": "string",
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
  "url": "http://example.com"
}
```

## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
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

