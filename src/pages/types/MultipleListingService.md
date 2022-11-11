---
title: MultipleListingService
---
| Name | Type | Description |
|---|---|---|
| (root) | allOf | - |
| MultipleListingService.0 (allOf item) | allOf | - |
| MultipleListingService.0.0 (allOf item) | object | - |
| MultipleListingService.0.0.type | string | The item type (Linked-Data @type) |
| MultipleListingService.0.0.@id | string | the liked data uri for the Thing |
| MultipleListingService.0.0 (property names) | - | - |
| MultipleListingService.0.1 (allOf item) | any | - |
| MultipleListingService.0.2 (allOf item) | any | - |
| MultipleListingService.0.3 (allOf item) | - | - |
| MultipleListingService.0.3.address | object | A physical address. |
| MultipleListingService.0.3.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| MultipleListingService.0.3.availableLanguage.type | string | - |
| MultipleListingService.0.3.availableLanguage.name | string | the display name of the language |
| MultipleListingService.0.3.availableLanguage.additionalName | string | BCP 47 language code |
| MultipleListingService.0.3.branchCode | string | A short textual code that uniquely identifies a place of business. |
| MultipleListingService.0.3.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| MultipleListingService.0.3.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| MultipleListingService.0.3.certification.0.type | string | Certification |
| MultipleListingService.0.3.certification.0.name | string | the name of the Certification |
| MultipleListingService.0.3.certification.0.issuedBy | object | the issuing authority |
| MultipleListingService.0.3.certification.0.issuedBy.type | string | The item type (Linked-Data @type) |
| MultipleListingService.0.3.certification.0.issuedBy.id | string | Linked-Data URI (@id) |
| MultipleListingService.0.3.certification.0.issuedBy.name | string | name of the issuing organization |
| MultipleListingService.0.3.certification.0.issuedTo | object | the subject |
| MultipleListingService.0.3.certification.0.issuedTo.type | string | The item type (Linked-Data @type) |
| MultipleListingService.0.3.certification.0.issuedTo.id | string | Linked-Data URI (@id) |
| MultipleListingService.0.3.certification.0.issuedTo.name | string | the name of the item |
| MultipleListingService.0.3.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| MultipleListingService.0.3.contactPoint.type | string | - |
| MultipleListingService.0.3.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| MultipleListingService.0.3.contactPoint.telephone | string | - |
| MultipleListingService.0.3.contactPoint.faxNumber | string | - |
| MultipleListingService.0.3.contactPoint.email | string | an email address for the item. |
| MultipleListingService.0.3.contactPoint.url | string | primary URL for the item. |
| MultipleListingService.0.3.email | string | - |
| MultipleListingService.0.3.faxNumber | string | Do people still use fax machines? |
| MultipleListingService.0.3.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| MultipleListingService.0.3.image.0 (index) | object allOf | - |
| MultipleListingService.0.3.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| MultipleListingService.0.3.image.0.0.0 (allOf item) | object | - |
| MultipleListingService.0.3.image.0.0.0.type | string | The item type (Linked-Data @type) |
| MultipleListingService.0.3.image.0.0.0.@id | string | the liked data uri for the Thing |
| MultipleListingService.0.3.image.0.0.0 (property names) | - | - |
| MultipleListingService.0.3.image.0.0.1 (allOf item) | - | - |
| MultipleListingService.0.3.image.0.0.1.type | string | - |
| MultipleListingService.0.3.image.0.0.1.id | string | the URL to access the item. |
| MultipleListingService.0.3.image.0.0.1.name | string | the file name of the object. |
| MultipleListingService.0.3.image.0.0.1.encodingFormat | string | MIME type |
| MultipleListingService.0.3.image.0.0.1.about | string | URI to the subject of the image or logo |
| MultipleListingService.0.3.image.0.0.1.url | string | URL of the image content |
| MultipleListingService.0.3.image.0.1 (allOf item) | - | - |
| MultipleListingService.0.3.image.0.1.type | string | - |
| MultipleListingService.0.3.image.0.1.id | any | - |
| MultipleListingService.0.3.image.0.1.name | any | - |
| MultipleListingService.0.3.image.0.1.encodingFormat | any | - |
| MultipleListingService.0.3.logo | array<object allOf> | a logo associated with the organization. |
| MultipleListingService.0.3.logo (single item) | object allOf | - |
| MultipleListingService.0.3.logo.0 (allOf item) | object | an electronic file. |
| MultipleListingService.0.3.logo.0.type | string | - |
| MultipleListingService.0.3.logo.0.id | string | - |
| MultipleListingService.0.3.logo.0.name | string | document name or title |
| MultipleListingService.0.3.logo.0.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| MultipleListingService.0.3.logo.0.about | object | subject of the Document |
| MultipleListingService.0.3.logo.0.url | string | public URL of the object |
| MultipleListingService.0.3.logo.1 (allOf item) | object | an associated logo |
| MultipleListingService.0.3.name | string | Name or DBA. |
| MultipleListingService.0.3.parentOrganization | array<string> | - |
| MultipleListingService.0.3.parentOrganization (single item) | string | - |
| MultipleListingService.0.3.subOrganization | array<string> | a child organization |
| MultipleListingService.0.3.subOrganization (single item) | string | - |
| MultipleListingService.0.3.telephone | string | Primary phone number. |
| MultipleListingService.0.3.type | string | - |
| MultipleListingService.0.3.url | string | primary website/url for the entity. |
| MultipleListingService.1 (allOf item) | object | A multiple listing service (MLS, also multiple listing system or multiple listings service) is a suite of services that real estate brokers use to establish contractual offers of compensation (among brokers) and accumulate and disseminate information to enable appraisals. A multiple listing service's database and software is used by real estate brokers in real estate (or aircraft broker[1] in other industries for example), representing sellers under a listing contract to widely share information about properties with other brokers who may represent potential buyers or wish to work with a seller's broker in finding a buyer for the property or asset. The listing data stored in a multiple listing service's database is the proprietary information of the broker who has obtained a listing agreement with a property's seller. |
| MultipleListingService.1.type | string | - |
| MultipleListingService.1.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |

> Examples of MultipleListingService

```json
{
  "type": "MultipleListingService",
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
  "name": "MLSListings",
  "parentOrganization": [
    "http://example.com"
  ],
  "subOrganization": [
    "http://org.example.com/profile/card#me"
  ],
  "telephone": "+15558675309",
  "url": "http://example.com",
  "identifier": {
    "resoouid": "M00000101",
    "bhhsmlsid": "xxxxxx"
  }
}
```


