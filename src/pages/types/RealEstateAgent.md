---
title: RealEstateAgent
---
## Schema

| Name | Type | Description |
|---|---|---|
| (RealEstateAgent) | object | A real estate agent who represents buyers and sellers |
| type | string | const (`"RealEstateAgent"`)  |
| additionalName | string | examples (`"Johnny,John"`, `"Prince,The Artist Formerly Known as Prince,The Artist"`, `"Babs,Barbara"`, `"Katheryn Elizabeth Hudson,Katy Perry"`, `"Destiny Hope Cyrus,Miley Cyrus"`) any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| address | object | A physical address. |
| certification | object | A certification issued by an organization to an individual or business. |
| certification.type | string | allowed (`"Certification"`) Certification |
| certification.name | string | the name of the Certification |
| certification.issuedBy | object | the issuing authority |
| certification.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| certification.issuedBy.id | string | format (`uri`) Linked-Data URI (@id) |
| certification.issuedBy.name | string | name of the issuing organization |
| certification.issuedTo | object | the subject |
| certification.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| certification.issuedTo.id | string | format (`uri`) Linked-Data URI (@id) |
| certification.issuedTo.name | string | the name of the item |
| contactPoint | object | >= 3 properties A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. |
| contactPoint.type | string | const (`"ContactPoint"`)  |
| contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| contactPoint.url | string | format (`uri`) primary URL for the item. |
| email | string | format (`email`)  |
| familyName | string | examples (`"Smith"`, `"Jones"`, `"Parker"`, `"Monk"`, `"Brown"`, `"Miller"`, `"Davis"`, `"Wilson"`, `"Fitzgerald"`, `"Johnson"`, `"Williams"`) <= 50 characters Last Name of a person. [Family Name](https://schema.org/familyName) |
| givenName | string | examples (`"John"`, `"Jane"`, `"Mary"`, `"Joseph"`, `"William"`, `"David"`, `"Richard"`, `"Charles"`, `"Thomas"`, `"Christopher"`, `"Daniel"`, `"Matthew"`, `"Anthony"`, `"Donald"`, `"Mark"`, `"Paul"`, `"Steven"`, `"Andrew"`, `"Kenneth"`, `"George"`, `"Joshua"`, `"Kevin"`, `"Brian"`, `"Edward"`, `"Ronald"`, `"Timothy"`, `"Jason"`, `"Jeffrey"`, `"Ryan"`, `"Jacob"`) First Name of a person |
| id | string | format (`uri`) Linked-Data URI (@id) |
| identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| image.0 (index) | object allOf | - |
| image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| image.0.0.0 (allOf item) | object | - |
| image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| image.0.0.1 (allOf item) | - | - |
| image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| image.0.0.1.name | string | the file name of the object. |
| image.0.0.1.encodingFormat | string | MIME type |
| image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| image.0.0.1.url | string | format (`uri`) URL of the image content |
| image.0.1 (allOf item) | - | - |
| image.0.1.type | string | allowed (`"ImageObject"`)  |
| image.0.1.id | any | - |
| image.0.1.name | any | - |
| image.0.1.encodingFormat | any | - |
| jobTitle | array<string> | - |
| jobTitle (single item) | string | examples (`"CEO"`, `"Sales Manager"`, `"Escrow Officer"`, `"Transaction Coordinator"`, `"Director of Marketing"`, `"Senior Loan Officer"`, `"Loan Officer"`, `"Sanitation Engineer"`, `"Owner"`, `"Cofounder"`, `"Founder"`, `"President"`, `"Vice President of Sales"`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`) The job title of the person (for example, Financial Manager). |
| memberOf | array<anyOf> | an Organization (or ProgramMembership) to which this Person or Organization belongs. |
| memberOf (single item) | anyOf | - |
| memberOf.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| memberOf.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| memberOf.0.roleName | string | the role name |
| memberOf.0.memberOf | object | the org or group where the role is performed |
| memberOf.0.member | string | format (`uri`) member object or id |
| memberOf.0.startDate | string | format (`date-time`) date the member began performing this role |
| memberOf.0.endDate | string | format (`date-time`) date the member stopped performing the role |
| memberOf.1 (anyOf item) | string | format (`uri`)  |
| name | string | the name of the item |
| parentOrganization | array<string> | organizations of which this org is a part. |
| parentOrganization (single item) | string | format (`uri`)  |
| permit | object | A permit issued by an organization to an individual or business. |
| permit.type | string | allowed (`"Permit"`) Permit type. |
| permit.name | string | Common or display value of the Permit. |
| permit.issuedBy | object | The issuing authority |
| permit.issuedThrough | object | the service through which the permit was granted |
| permit.validIn | object | - |
| permit.validFrom | string | format (`date-time`) start date |
| permit.validUntil | string | format (`date-time`) end date |
| subOrganization | array<string> | child organizations of the organization |
| subOrganization (single item) | string | format (`uri`)  |
| url | string | format (`uri`) URL of the item. |
| type | string | const (`"RealEstateAgent"`)  |
| additionalName | string | examples (`"Johnny,John"`, `"Prince,The Artist Formerly Known as Prince,The Artist"`, `"Babs,Barbara"`, `"Katheryn Elizabeth Hudson,Katy Perry"`, `"Destiny Hope Cyrus,Miley Cyrus"`) any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| address | object | A physical address. |
| certification | object | A certification issued by an organization to an individual or business. |
| certification.type | string | allowed (`"Certification"`) Certification |
| certification.name | string | the name of the Certification |
| certification.issuedBy | object | the issuing authority |
| certification.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| certification.issuedBy.id | string | format (`uri`) Linked-Data URI (@id) |
| certification.issuedBy.name | string | name of the issuing organization |
| certification.issuedTo | object | the subject |
| certification.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| certification.issuedTo.id | string | format (`uri`) Linked-Data URI (@id) |
| certification.issuedTo.name | string | the name of the item |
| contactPoint | object | >= 3 properties A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. |
| contactPoint.type | string | const (`"ContactPoint"`)  |
| contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| contactPoint.url | string | format (`uri`) primary URL for the item. |
| email | string | format (`email`)  |
| familyName | string | examples (`"Smith"`, `"Jones"`, `"Parker"`, `"Monk"`, `"Brown"`, `"Miller"`, `"Davis"`, `"Wilson"`, `"Fitzgerald"`, `"Johnson"`, `"Williams"`) <= 50 characters Last Name of a person. [Family Name](https://schema.org/familyName) |
| givenName | string | examples (`"John"`, `"Jane"`, `"Mary"`, `"Joseph"`, `"William"`, `"David"`, `"Richard"`, `"Charles"`, `"Thomas"`, `"Christopher"`, `"Daniel"`, `"Matthew"`, `"Anthony"`, `"Donald"`, `"Mark"`, `"Paul"`, `"Steven"`, `"Andrew"`, `"Kenneth"`, `"George"`, `"Joshua"`, `"Kevin"`, `"Brian"`, `"Edward"`, `"Ronald"`, `"Timothy"`, `"Jason"`, `"Jeffrey"`, `"Ryan"`, `"Jacob"`) First Name of a person |
| id | string | format (`uri`) Linked-Data URI (@id) |
| identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| image.0 (index) | object allOf | - |
| image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| image.0.0.0 (allOf item) | object | - |
| image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| image.0.0.1 (allOf item) | - | - |
| image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| image.0.0.1.name | string | the file name of the object. |
| image.0.0.1.encodingFormat | string | MIME type |
| image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| image.0.0.1.url | string | format (`uri`) URL of the image content |
| image.0.1 (allOf item) | - | - |
| image.0.1.type | string | allowed (`"ImageObject"`)  |
| image.0.1.id | any | - |
| image.0.1.name | any | - |
| image.0.1.encodingFormat | any | - |
| jobTitle | array<string> | - |
| jobTitle (single item) | string | examples (`"CEO"`, `"Sales Manager"`, `"Escrow Officer"`, `"Transaction Coordinator"`, `"Director of Marketing"`, `"Senior Loan Officer"`, `"Loan Officer"`, `"Sanitation Engineer"`, `"Owner"`, `"Cofounder"`, `"Founder"`, `"President"`, `"Vice President of Sales"`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`) The job title of the person (for example, Financial Manager). |
| memberOf | array<anyOf> | an Organization (or ProgramMembership) to which this Person or Organization belongs. |
| memberOf (single item) | anyOf | - |
| memberOf.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| memberOf.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| memberOf.0.roleName | string | the role name |
| memberOf.0.memberOf | object | the org or group where the role is performed |
| memberOf.0.member | string | format (`uri`) member object or id |
| memberOf.0.startDate | string | format (`date-time`) date the member began performing this role |
| memberOf.0.endDate | string | format (`date-time`) date the member stopped performing the role |
| memberOf.1 (anyOf item) | string | format (`uri`)  |
| name | string | the name of the item |
| parentOrganization | array<string> | organizations of which this org is a part. |
| parentOrganization (single item) | string | format (`uri`)  |
| permit | object | A permit issued by an organization to an individual or business. |
| permit.type | string | allowed (`"Permit"`) Permit type. |
| permit.name | string | Common or display value of the Permit. |
| permit.issuedBy | object | The issuing authority |
| permit.issuedThrough | object | the service through which the permit was granted |
| permit.validIn | object | - |
| permit.validFrom | string | format (`date-time`) start date |
| permit.validUntil | string | format (`date-time`) end date |
| subOrganization | array<string> | child organizations of the organization |
| subOrganization (single item) | string | format (`uri`)  |
| url | string | format (`uri`) URL of the item. |

## Example



```json
{
  "type": "RealEstateAgent",
  "additionalName": "Johnny,John",
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
  "certification": {
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
  },
  "contactPoint": {
    "type": "ContactPoint",
    "name": "Work",
    "telephone": "555-555-5555",
    "faxNumber": "555-555-5555",
    "email": "bob@example.com",
    "url": "https://www.facebook.com/hallandoates"
  },
  "email": "user@example.com",
  "familyName": "Smith",
  "givenName": "John",
  "id": "http://example.com",
  "identifier": {
    "salesforceid": "0031U00002XW1QWQA1"
  },
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
  "jobTitle": [
    "CEO"
  ],
  "memberOf": [
    {
      "type": "OrganizationRole",
      "roleName": "Owner",
      "memberOf": {
        "type": "RealEstateOrganization",
        "id": "http://orgid.example.com/profile/card#me"
      },
      "member": "https://memberid.example.com/profile/card#me",
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z"
    }
  ],
  "name": "string",
  "parentOrganization": [
    "http://example.com"
  ],
  "permit": {
    "type": "Permit",
    "name": "DRE Number",
    "issuedBy": {
      "type": "State",
      "name": "California"
    },
    "issuedThrough": {
      "type": "Service",
      "name": "Department of Real Estate"
    },
    "validIn": {},
    "validFrom": "2019-08-24T14:15:22Z",
    "validUntil": "2019-08-24T14:15:22Z"
  },
  "subOrganization": [
    "http://example.com"
  ],
  "url": "http://example.com"
}
```
