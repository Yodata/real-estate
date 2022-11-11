---
title: Person
---
| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| Person.type | string | - |
| Person.affiliation | array<string> | An organization that this person is affiliated with |
| Person.affiliation (single item) | string | - |
| Person.address | array<object> | - |
| Person.address.type | string | - |
| Person.address.streetAddress | string | the street number and name. |
| Person.address.postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| Person.address.addressRegion | string | State or Province. |
| Person.address.addressLocality | string | City, Township. |
| Person.address.postalCode | string | Zip/Post Code |
| Person.address.addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| Person.address.addressCounty | string | the county (us real estate extension) |
| Person.address.addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |
| Person.birthDate | string | date of birth. |
| Person.contactPoint | array<object> | contact points for the person |
| Person.contactPoint.type | string | - |
| Person.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| Person.contactPoint.telephone | string | - |
| Person.contactPoint.faxNumber | string | - |
| Person.contactPoint.email | string | an email address for the item. |
| Person.contactPoint.url | string | primary URL for the item. |
| Person.email | string | - |
| Person.additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| Person.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) |
| Person.faxNumber | string | Do people still use fax machines? |
| Person.givenName | string | First Name of a person |
| Person.honorificPrefix | string | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. |
| Person.honorificSuffix | string | An honorific title following a person's name like M.D. |
| Person.jobTitle | array<string> | job tiles associated with the item |
| Person.jobTitle (single item) | string | - |
| Person.knowsLanguage | array<object> | languages spoken by the person |
| Person.knowsLanguage.type | string | - |
| Person.knowsLanguage.name | string | the display name of the language |
| Person.knowsLanguage.additionalName | string | BCP 47 language code |
| Person.name | string | Full name of the person. |
| Person.telephone | string | Primary phone number. |
| Person.worksFor | string | Organizations the person works for. |

> Examples of Person

```json
{
  "type": "string",
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
  "jobTitle": [
    "Chief Data Officer",
    "Sanitation Engineer"
  ],
  "knowsLanguage": [
    {
      "type": "Language",
      "name": "English",
      "additionalName": "en-us"
    }
  ],
  "name": "string",
  "telephone": "+15558675309",
  "worksFor": "string"
}
```


