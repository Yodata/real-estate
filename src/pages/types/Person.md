---
title: Person
route: /types/Person
menu: Types
---# Person

## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | Person  |
| affiliation | [string&lt;uri&gt; ] | An organization that this person is affiliated with  |
| address | [object] | addresses for the item <br/>RANGE: [PostalAddress](/types/PostalAddress) |
| birthDate | string&lt;date&gt;  | date of birth.  |
| contactPoint | [object] | a named point of contact - telephone, email, faxNumber, and/or url for the entity <br/>RANGE: [ContactPoint](/types/ContactPoint) |
| email | string | Primary email address.  |
| additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.  |
| familyName | string | Last Name of a person  |
| faxNumber | string | Primary fax number.  |
| givenName | string | First Name of a person  |
| honorificPrefix | string | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.  |
| honorifixSuffix | string | An honorific title following a person's name like M.D.  |
| jobTitle | [string] | job tiles associated with the item  |
| knowsLanguage | [object] | languages spoken by the person <br/>RANGE: [Language](/types/Language) |
| name | string | Full name of the person.  |
| telephone | string | Primary phone number.  |
| worksFor | string | Organizations the person works for.  |

### Example
```json
{
  "type": "Person",
  "affiliation": [
    "https://example.com/profile/card#me"
  ],
  "address": [
    {
      "type": "PostalAddress",
      "name": "Home",
      "streetAddress": "1007 Mountain Gate Rd",
      "postOfficeBoxNumber": "Box 1234",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "addressCounty": "Gotham County",
      "addressSubdivision": "Gotham Heights"
    }
  ],
  "birthDate": "2022-10-12",
  "contactPoint": [
    {
      "type": "ContactPoint",
      "name": "Work",
      "telephone": "800-555-5555",
      "faxNumber": "888-4BA-TMAN",
      "email": "bruce@example.com",
      "url": "https://example.com"
    }
  ],
  "email": "user@example.com",
  "additionalName": "ambassador satch,pops,satchmo",
  "familyName": "Wayne",
  "faxNumber": "(873) 271-4802",
  "givenName": "Glenn",
  "honorificPrefix": "Dr",
  "honorifixSuffix": "Esq",
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
  "name": "Bruce Wayne",
  "telephone": "1-339-041-0306 x2866",
  "worksFor": "Gotham City Police Department"
}
```