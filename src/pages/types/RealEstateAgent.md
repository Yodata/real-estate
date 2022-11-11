---
title: RealEstateAgent
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | A real estate agent who represents buyers and sellers |
| type | string | const (`"RealEstateAgent"`)  |
| additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| address | object | A physical address. |
| certification | object | A certification issued by an organization to an individual or business. |
| certification.type | string | allowed (`"Certification"`) Certification |
| certification.name | string | the name of the Certification |
| certification.issuedBy | object | the issuing authority |
| certification.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| certification.issuedBy.id | string | Linked-Data URI (@id) format (`uri`) |
| certification.issuedBy.name | string | name of the issuing organization |
| certification.issuedTo | object | the subject |
| certification.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| certification.issuedTo.id | string | Linked-Data URI (@id) format (`uri`) |
| certification.issuedTo.name | string | the name of the item |
| contactPoint | object | A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. >= 3 properties |
| contactPoint.type | string | const (`"ContactPoint"`)  |
| contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| contactPoint.telephone | string | - |
| contactPoint.faxNumber | string | - |
| contactPoint.email | string | an email address for the item. format (`email`) |
| contactPoint.url | string | primary URL for the item. format (`uri`) |
| email | string |  format (`email`) |
| familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) <= 50 characters |
| givenName | string | First Name of a person |
| id | string | Linked-Data URI (@id) format (`uri`) |
| identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
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
| jobTitle | array<string> | - |
| jobTitle (single item) | string | The job title of the person (for example, Financial Manager). |
| memberOf | array<anyOf> | an Organization (or ProgramMembership) to which this Person or Organization belongs. |
| memberOf (single item) | anyOf | - |
| memberOf.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| memberOf.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| memberOf.0.roleName | string | the role name |
| memberOf.0.memberOf | object | the org or group where the role is performed |
| memberOf.0.member | string | member object or id format (`uri`) |
| memberOf.0.startDate | string | date the member began performing this role format (`date-time`) |
| memberOf.0.endDate | string | date the member stopped performing the role format (`date-time`) |
| memberOf.1 (anyOf item) | string |  format (`uri`) |
| name | string | the name of the item |
| parentOrganization | array<string> | organizations of which this org is a part. |
| parentOrganization (single item) | string |  format (`uri`) |
| permit | object | A permit issued by an organization to an individual or business. |
| permit.type | string | allowed (`"Permit"`) Permit type. |
| permit.name | string | Common or display value of the Permit. |
| permit.issuedBy | object | The issuing authority |
| permit.issuedThrough | object | the service through which the permit was granted |
| permit.validIn | object | - |
| permit.validFrom | string | start date format (`date-time`) |
| permit.validUntil | string | end date format (`date-time`) |
| subOrganization | array<string> | child organizations of the organization |
| subOrganization (single item) | string |  format (`uri`) |
| url | string | URL of the item. format (`uri`) |

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
