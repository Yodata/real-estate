---
title: Contact
route: /types/Contact
menu: Types
---# Contact
a CRM contact.


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
| jobTitle | string | job tiles associated with the item  |
| knowsLanguage | [object] | languages spoken by the person <br/>RANGE: [Language](/types/Language) |
| name | string | Full name of the person.  |
| telephone | string | Primary phone number.  |
| worksFor | string | Organizations the person works for.  |
| identifier | object | key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.  |
| additionalProperty | object | additionalProperty are  |
| comment | [object] | comments by, for or about the item <br/>RANGE: [Comment](/types/Comment) |
| contactGroup | [object] | groups the contact is a member of. <br/>RANGE: [Collection](/types/Collection) |
| keywords | [string] | keywords/tags for grouping and organizing the item in collections  |
| leadOwner | object | lead owner <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateOrganization](/types/RealEstateOrganization), [RealEstateTeam](/types/RealEstateTeam) |
| leadSource | object | origin of the lead <br/>RANGE: [MobileApplication](/types/MobileApplication), [RealEstateOffice](/types/RealEstateOffice), [RealEstateWebsite](/types/RealEstateWebsite), [Thing](/types/Thing) |
| originatingSystem | object | the original system where this item was created.  Can be of type Thing or any sub-type. <br/>RANGE: [Thing](/types/Thing) |
| dateCreated | string&lt;date-time&gt;  | The date on which the item was created.  |
| dateModified | string&lt;date-time&gt;  | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.  |

### Example
```json
{
  "type": "Contact",
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
  "jobTitle": "Superhero",
  "knowsLanguage": [
    {
      "type": "Language",
      "name": "English",
      "additionalName": "en-us"
    }
  ],
  "name": "Bruce Wayne",
  "telephone": "1-339-041-0306 x2866",
  "worksFor": "Gotham City Police Department",
  "identifier": {
    "redContact_Guid": "55BC6EB4-5C3D-4603-B5AB-154117E1269F"
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
      "type": "Collection",
      "name": "Superheros",
      "identifier": {
        "vendoraid": "xxx"
      }
    }
  ],
  "keywords": [
    "Sphere of Influence",
    "Past Customer"
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
  "dateCreated": "2022-10-12T01:13:43Z",
  "dateModified": "2022-10-12T01:13:43Z"
}
```