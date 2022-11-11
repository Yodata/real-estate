---
title: contact#update
---
## Message

*a contact (data.object) is updated by a user (data.agent)*

* MessageId: contact#update
* Content type: application/json

### Headers

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| time | string | date & time the event was produced format (`date-time`) |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient format (`uri`) |
| instrument | string | the app or service that produced the event on behalf of the agent/user format (`uri`) |
| source | string | a copy of the event was sent to the source(s). format (`uri`) |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source format (`uri`) |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. format (`uri`) |
| @id | string |  format (`uri`) |

### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/contact#update"`)  |
| data | object | - |
| data.type | string | const (`"UpdateAction"`)  |
| data.agent | object |  >= 2 properties |
| data.agent.type | string | const (`"Person"`)  |
| data.agent.name | string | the name of the item |
| data.agent.email | string |  format (`email`) |
| data.agent.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object | allOf | - |
| data.object.0 (allOf item) | object | - |
| data.object.0.type | string | - |
| data.object.0.affiliation | array<string> | An organization that this person is affiliated with |
| data.object.0.affiliation (single item) | string |  format (`uri`) |
| data.object.0.address | array<object> | - |
| data.object.0.address.type | string | const (`"PostalAddress"`)  |
| data.object.0.address.streetAddress | string | the street number and name. |
| data.object.0.address.postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| data.object.0.address.addressRegion | string | State or Province. |
| data.object.0.address.addressLocality | string | City, Township. |
| data.object.0.address.postalCode | string | Zip/Post Code |
| data.object.0.address.addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| data.object.0.address.addressCounty | string | the county (us real estate extension) |
| data.object.0.address.addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |
| data.object.0.birthDate | string | date of birth. format (`date`) |
| data.object.0.contactPoint | array<object> | contact points for the person |
| data.object.0.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.object.0.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.object.0.contactPoint.telephone | string | - |
| data.object.0.contactPoint.faxNumber | string | - |
| data.object.0.contactPoint.email | string | an email address for the item. format (`email`) |
| data.object.0.contactPoint.url | string | primary URL for the item. format (`uri`) |
| data.object.0.email | string |  format (`email`) |
| data.object.0.additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| data.object.0.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) <= 50 characters |
| data.object.0.faxNumber | string | Do people still use fax machines? |
| data.object.0.givenName | string | First Name of a person |
| data.object.0.honorificPrefix | string | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. |
| data.object.0.honorificSuffix | string | An honorific title following a person's name like M.D. |
| data.object.0.jobTitle | array<string> | job tiles associated with the item |
| data.object.0.jobTitle (single item) | string | - |
| data.object.0.knowsLanguage | array<object> | languages spoken by the person |
| data.object.0.knowsLanguage.type | string | const (`"Language"`)  |
| data.object.0.knowsLanguage.name | string | the display name of the language |
| data.object.0.knowsLanguage.additionalName | string | BCP 47 language code |
| data.object.0.name | string | Full name of the person. |
| data.object.0.telephone | string | Primary phone number. |
| data.object.0.worksFor | string | Organizations the person works for. |
| data.object.1 (allOf item) | - | a CRM contact. |
| data.object.1.type | string | const (`"Contact"`)  |
| data.object.1.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object.1.additionalProperty | object | additionalProperty are |
| data.object.1.comment | array<object> | comments by, for or about the item |
| data.object.1.comment (single item) | object | - |
| data.object.1.jobTitle | string | The job title of the person (for example, Financial Manager). |
| data.object.1.contactGroup | array<object> | - |
| data.object.1.contactGroup.type | string | allowed (`"ContactGroup"`, `"Collection"`)  |
| data.object.1.contactGroup.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.object.1.contactGroup.name | string | - |
| data.object.1.keywords | array<string> | - |
| data.object.1.keywords (single item) | string | - |
| data.object.1.leadOwner | object | lead owner |
| data.object.1.leadSource | object | origin of the lead |
| data.object.1.originatingSystem | object | the original system where this item was created.  Can be of type Thing or any sub-type. |
| data.object.1.dateCreated | string | The date on which the item was created. format (`date-time`) |
| data.object.1.dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. format (`date-time`) |

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/contact#update",
  "data": {
    "type": "UpdateAction",
    "agent": {
      "type": "Person",
      "name": "string",
      "email": "user@example.com",
      "identifier": {
        "salesforceid": "0031U00002XW1QWQA1"
      }
    },
    "object": {
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
  }
}
```


### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


