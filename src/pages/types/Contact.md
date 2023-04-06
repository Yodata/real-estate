---
title: Contact
---

## Example

```json
{
  "type": "Contact",
  "affiliation": ["https://example.com/profile/card#me"],
  "address": [
    {
      "type": "PostalAddress",
      "streetAddress": "1007 Mountain Gate Rd",
      "postOfficeBoxNumber": "Box 1234",
      "addressRegion": "NJ",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "CA",
      "addressCounty": "string",
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
    "bhhsconsumerid": "12345"
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
        "bhhsconsumerid": "12345"
      },
      "name": "Past Clients"
    }
  ],
  "keywords": ["string"],
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

## Schema

| Name                         | Type          | Description                                                                                                                                               |
| ---------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (root)                       | allOf         | -                                                                                                                                                         |
| (allOf item)                 | object        | -                                                                                                                                                         |
| type                         | string        | -                                                                                                                                                         |
| affiliation                  | array<string> | An organization that this person is affiliated with                                                                                                       |
| affiliation (single item)    | string        | format (`uri`)                                                                                                                                            |
| address                      | array<object> | -                                                                                                                                                         |
| address.type                 | string        | const (`"PostalAddress"`)                                                                                                                                 |
| address.streetAddress        | string        | the street address <= 75 characters                                                                                                                       |
| address.postOfficeBoxNumber  | string        | The post office box number for PO box addresses.                                                                                                          |
| address.addressRegion        | string        | abbreviated state or province                                                                                                                             |
| address.addressLocality      | string        | City, Township. <= 50 characters                                                                                                                          |
| address.postalCode           | string        | Zip/Post Code <= 12 characters                                                                                                                            |
| address.addressCountry       | string        | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code       |
| address.addressCounty        | string        | County                                                                                                                                                    |
| address.addressSubdivision   | string        | the subdivision or neighborhood (us real estate extension)                                                                                                |
| birthDate                    | string        | date of birth. format (`date`)                                                                                                                            |
| contactPoint                 | array<object> | contact points for the person                                                                                                                             |
| contactPoint.type            | string        | const (`"ContactPoint"`)                                                                                                                                  |
| contactPoint.name            | string        | a label for the contactPoint, i.e. 'Work', or 'Home'                                                                                                      |
| contactPoint.telephone       | string        | -                                                                                                                                                         |
| contactPoint.faxNumber       | string        | -                                                                                                                                                         |
| contactPoint.email           | string        | an email address for the item. format (`email`)                                                                                                           |
| contactPoint.url             | string        | primary URL for the item. format (`uri`)                                                                                                                  |
| email                        | string        | a valid email address format (`email`)                                                                                                                    |
| additionalName               | string        | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| familyName                   | string        | Last Name of a person. [Family Name](https://schema.org/familyName) <= 50 characters                                                                      |
| faxNumber                    | string        | Do people still use fax machines?                                                                                                                         |
| givenName                    | string        | First Name of a person                                                                                                                                    |
| honorificPrefix              | string        | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.                                                                                          |
| honorificSuffix              | string        | An honorific title following a person's name like M.D.                                                                                                    |
| jobTitle                     | array<string> | job tiles associated with the item                                                                                                                        |
| jobTitle (single item)       | string        | -                                                                                                                                                         |
| knowsLanguage                | array<object> | languages spoken by the person                                                                                                                            |
| knowsLanguage.type           | string        | const (`"Language"`)                                                                                                                                      |
| knowsLanguage.name           | string        | the display name of the language                                                                                                                          |
| knowsLanguage.additionalName | string        | BCP 47 language code                                                                                                                                      |
| name                         | string        | Full name of the person.                                                                                                                                  |
| telephone                    | string        | Primary phone number.                                                                                                                                     |
| worksFor                     | string        | Organizations the person works for.                                                                                                                       |
| (allOf item)                 | -             | a CRM contact.                                                                                                                                            |
| type                         | string        | const (`"Contact"`)                                                                                                                                       |
| identifier                   | object        | 1 properties                                                                                                                                              |
| additionalProperty           | object        | additionalProperty are                                                                                                                                    |
| comment                      | array<object> | comments by, for or about the item                                                                                                                        |
| comment (single item)        | object        | -                                                                                                                                                         |
| jobTitle                     | string        | The job title of the person (for example, Financial Manager).                                                                                             |
| contactGroup                 | array<object> | -                                                                                                                                                         |
| contactGroup.type            | string        | allowed (`"ContactGroup"`, `"Collection"`)                                                                                                                |
| contactGroup.identifier      | object        | 1 properties                                                                                                                                              |
| contactGroup.name            | string        | -                                                                                                                                                         |
| keywords                     | array<string> | -                                                                                                                                                         |
| keywords (single item)       | string        | -                                                                                                                                                         |
| leadOwner                    | object        | lead owner                                                                                                                                                |
| leadSource                   | object        | origin of the lead                                                                                                                                        |
| originatingSystem            | object        | the original system where this item was created. Can be of type Thing or any sub-type.                                                                    |
| dateCreated                  | string        | The date on which the item was created. format (`date-time`)                                                                                              |
| dateModified                 | string        | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. format (`date-time`)                       |
