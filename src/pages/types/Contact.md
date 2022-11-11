---
title: Contact
---
## Schema

| Name | Type | Description |
|---|---|---|
| (Contact) | allOf | - |
| 0 (allOf item) | object | - |
| type | string | - |
| affiliation | array<string> | An organization that this person is affiliated with |
| affiliation (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| address | array<object> | - |
| address.type | string | - |
| address.streetAddress | string | the street number and name. |
| address.postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| address.addressRegion | string | State or Province. |
| address.addressLocality | string | City, Township. |
| address.postalCode | string | Zip/Post Code |
| address.addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| address.addressCounty | string | the county (us real estate extension) |
| address.addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |
| birthDate | string | date of birth. <span class='constraints'>format (`date`)</span> |
| contactPoint | array<object> | contact points for the person |
| contactPoint.type | string | - |
| contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| contactPoint.telephone | string | - |
| contactPoint.faxNumber | string | - |
| contactPoint.email | string | an email address for the item. <span class='constraints'>format (`email`)</span> |
| contactPoint.url | string | primary URL for the item. <span class='constraints'>format (`uri`)</span> |
| email | string |  <span class='constraints'>format (`email`)</span> |
| additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) <span class='constraints'><= 50 characters</span> |
| faxNumber | string | Do people still use fax machines? |
| givenName | string | First Name of a person |
| honorificPrefix | string | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. |
| honorificSuffix | string | An honorific title following a person's name like M.D. |
| jobTitle | array<string> | job tiles associated with the item |
| jobTitle (single item) | string | - |
| knowsLanguage | array<object> | languages spoken by the person |
| knowsLanguage.type | string | - |
| knowsLanguage.name | string | the display name of the language |
| knowsLanguage.additionalName | string | BCP 47 language code |
| name | string | Full name of the person. |
| telephone | string | Primary phone number. |
| worksFor | string | Organizations the person works for. |
| 1 (allOf item) | - | a CRM contact. |
| 1.type | string | - |
| 1.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| 1.additionalProperty | object | additionalProperty are |
| 1.comment | array<object> | comments by, for or about the item |
| 1.comment (single item) | object | - |
| 1.jobTitle | string | The job title of the person (for example, Financial Manager). |
| 1.contactGroup | array<object> | - |
| 1.contactGroup.type | string | - |
| 1.contactGroup.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| 1.contactGroup.name | string | - |
| 1.keywords | array<string> | - |
| 1.keywords (single item) | string | - |
| 1.leadOwner | object | lead owner |
| 1.leadSource | object | origin of the lead |
| 1.originatingSystem | object | the original system where this item was created.  Can be of type Thing or any sub-type. |
| 1.dateCreated | string | The date on which the item was created. <span class='constraints'>format (`date-time`)</span> |
| 1.dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. <span class='constraints'>format (`date-time`)</span> |
| 0 (allOf item) | object | - |
| type | string | - |
| affiliation | array<string> | An organization that this person is affiliated with |
| affiliation (single item) | string |  <span class='constraints'>format (`uri`)</span> |
| address | array<object> | - |
| address.type | string | - |
| address.streetAddress | string | the street number and name. |
| address.postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| address.addressRegion | string | State or Province. |
| address.addressLocality | string | City, Township. |
| address.postalCode | string | Zip/Post Code |
| address.addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| address.addressCounty | string | the county (us real estate extension) |
| address.addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |
| birthDate | string | date of birth. <span class='constraints'>format (`date`)</span> |
| contactPoint | array<object> | contact points for the person |
| contactPoint.type | string | - |
| contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| contactPoint.telephone | string | - |
| contactPoint.faxNumber | string | - |
| contactPoint.email | string | an email address for the item. <span class='constraints'>format (`email`)</span> |
| contactPoint.url | string | primary URL for the item. <span class='constraints'>format (`uri`)</span> |
| email | string |  <span class='constraints'>format (`email`)</span> |
| additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) <span class='constraints'><= 50 characters</span> |
| faxNumber | string | Do people still use fax machines? |
| givenName | string | First Name of a person |
| honorificPrefix | string | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. |
| honorificSuffix | string | An honorific title following a person's name like M.D. |
| jobTitle | array<string> | job tiles associated with the item |
| jobTitle (single item) | string | - |
| knowsLanguage | array<object> | languages spoken by the person |
| knowsLanguage.type | string | - |
| knowsLanguage.name | string | the display name of the language |
| knowsLanguage.additionalName | string | BCP 47 language code |
| name | string | Full name of the person. |
| telephone | string | Primary phone number. |
| worksFor | string | Organizations the person works for. |
| 1 (allOf item) | - | a CRM contact. |
| 1.type | string | - |
| 1.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| 1.additionalProperty | object | additionalProperty are |
| 1.comment | array<object> | comments by, for or about the item |
| 1.comment (single item) | object | - |
| 1.jobTitle | string | The job title of the person (for example, Financial Manager). |
| 1.contactGroup | array<object> | - |
| 1.contactGroup.type | string | - |
| 1.contactGroup.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| 1.contactGroup.name | string | - |
| 1.keywords | array<string> | - |
| 1.keywords (single item) | string | - |
| 1.leadOwner | object | lead owner |
| 1.leadSource | object | origin of the lead |
| 1.originatingSystem | object | the original system where this item was created.  Can be of type Thing or any sub-type. |
| 1.dateCreated | string | The date on which the item was created. <span class='constraints'>format (`date-time`)</span> |
| 1.dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. <span class='constraints'>format (`date-time`)</span> |

## Example



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
