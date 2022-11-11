---
title: Contact
---
| Name | Type | Description |
|---|---|---|
| (root) | allOf | - |
| Contact.0 (allOf item) | object | - |
| Contact.0.type | string | - |
| Contact.0.affiliation | array<string> | An organization that this person is affiliated with |
| Contact.0.affiliation (single item) | string | - |
| Contact.0.address | array<object> | - |
| Contact.0.address.type | string | - |
| Contact.0.address.streetAddress | string | the street number and name. |
| Contact.0.address.postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| Contact.0.address.addressRegion | string | State or Province. |
| Contact.0.address.addressLocality | string | City, Township. |
| Contact.0.address.postalCode | string | Zip/Post Code |
| Contact.0.address.addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| Contact.0.address.addressCounty | string | the county (us real estate extension) |
| Contact.0.address.addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |
| Contact.0.birthDate | string | date of birth. |
| Contact.0.contactPoint | array<object> | contact points for the person |
| Contact.0.contactPoint.type | string | - |
| Contact.0.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| Contact.0.contactPoint.telephone | string | - |
| Contact.0.contactPoint.faxNumber | string | - |
| Contact.0.contactPoint.email | string | an email address for the item. |
| Contact.0.contactPoint.url | string | primary URL for the item. |
| Contact.0.email | string | - |
| Contact.0.additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| Contact.0.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) |
| Contact.0.faxNumber | string | Do people still use fax machines? |
| Contact.0.givenName | string | First Name of a person |
| Contact.0.honorificPrefix | string | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. |
| Contact.0.honorificSuffix | string | An honorific title following a person's name like M.D. |
| Contact.0.jobTitle | array<string> | job tiles associated with the item |
| Contact.0.jobTitle (single item) | string | - |
| Contact.0.knowsLanguage | array<object> | languages spoken by the person |
| Contact.0.knowsLanguage.type | string | - |
| Contact.0.knowsLanguage.name | string | the display name of the language |
| Contact.0.knowsLanguage.additionalName | string | BCP 47 language code |
| Contact.0.name | string | Full name of the person. |
| Contact.0.telephone | string | Primary phone number. |
| Contact.0.worksFor | string | Organizations the person works for. |
| Contact.1 (allOf item) | - | a CRM contact. |
| Contact.1.type | string | - |
| Contact.1.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| Contact.1.additionalProperty | object | additionalProperty are |
| Contact.1.comment | array<object> | comments by, for or about the item |
| Contact.1.comment (single item) | object | - |
| Contact.1.jobTitle | string | The job title of the person (for example, Financial Manager). |
| Contact.1.contactGroup | array<object> | - |
| Contact.1.contactGroup.type | string | - |
| Contact.1.contactGroup.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| Contact.1.contactGroup.name | string | - |
| Contact.1.keywords | array<string> | - |
| Contact.1.keywords (single item) | string | - |
| Contact.1.leadOwner | object | lead owner |
| Contact.1.leadSource | object | origin of the lead |
| Contact.1.originatingSystem | object | the original system where this item was created.  Can be of type Thing or any sub-type. |
| Contact.1.dateCreated | string | The date on which the item was created. |
| Contact.1.dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. |

> Examples of Contact

```json
{
  "type": "Contact",
  "affiliation": [
    "https://example.com/profile/card#me"
  ],
  "address": [
    {
      "type": "PostalAddress",
      "streetAddress": "5046 Ottis Point",
      "postOfficeBoxNumber": "Box 1234",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "addressCounty": "Gotham County",
      "addressSubdivision": "Gotham Heights"
    }
  ],
  "birthDate": "2019-08-24",
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
  "additionalName": "Johnny,John",
  "familyName": "Smith",
  "faxNumber": "string",
  "givenName": "John",
  "honorificPrefix": "Dr",
  "honorificSuffix": "Esq",
  "jobTitle": "CEO",
  "knowsLanguage": [
    {
      "type": "Language",
      "name": "English",
      "additionalName": "en-us"
    }
  ],
  "name": "string",
  "telephone": "+15558675309",
  "worksFor": "string",
  "identifier": {
    "salesforceid": "0031U00002XW1QWQA1"
  },
  "additionalProperty": {
    "supercrmuserid": 1234,
    "doNotSell": true
  },
  "comment": [
    {
      "type": "Comment",
      "text": "this is my comment.",
      "author": {
        "type": "Contact",
        "name": "Bruce Wayne"
      },
      "about": {
        "type": "PropertyListing",
        "id": "https://example.com/listingid"
      },
      "dateCreated": "2019-07-15T05:24:05Z",
      "dateModified": "2019-07-15T05:24:05Z"
    }
  ],
  "contactGroup": [
    {
      "type": "ContactGroup",
      "identifier": {
        "salesforceid": "0031U00002XW1QWQA1"
      },
      "name": "Past Clients"
    }
  ],
  "keywords": [
    "string"
  ],
  "leadOwner": {
    "type": "RealEstateOrganization",
    "name": "Gotham City Real Estate",
    "id": "https://example.com/profile.card#me"
  },
  "leadSource": {
    "id": "https://www.zillow.com/homedetails/1044-Siler-Pl-Berkeley-CA-94705/24820985_zpid/",
    "type": "RealEstateWebsite",
    "name": "Zillow",
    "url": "https://zillow.com"
  },
  "originatingSystem": {
    "type": "SoftwareApplication",
    "name": "RDesk",
    "description": "User Created.",
    "url": "http://www.rdeskwebsite.com/"
  },
  "dateCreated": "2019-08-24T14:15:22Z",
  "dateModified": "2019-08-24T14:15:22Z"
}
```


