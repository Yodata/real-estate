---
title: RealEstateAgent
---
| Name | Type | Description |
|---|---|---|
| (root) | object | A real estate agent who represents buyers and sellers |
| RealEstateAgent.type | string | - |
| RealEstateAgent.additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| RealEstateAgent.address | object | A physical address. |
| RealEstateAgent.certification | object | A certification issued by an organization to an individual or business. |
| RealEstateAgent.certification.type | string | Certification |
| RealEstateAgent.certification.name | string | the name of the Certification |
| RealEstateAgent.certification.issuedBy | object | the issuing authority |
| RealEstateAgent.certification.issuedBy.type | string | The item type (Linked-Data @type) |
| RealEstateAgent.certification.issuedBy.id | string | Linked-Data URI (@id) |
| RealEstateAgent.certification.issuedBy.name | string | name of the issuing organization |
| RealEstateAgent.certification.issuedTo | object | the subject |
| RealEstateAgent.certification.issuedTo.type | string | The item type (Linked-Data @type) |
| RealEstateAgent.certification.issuedTo.id | string | Linked-Data URI (@id) |
| RealEstateAgent.certification.issuedTo.name | string | the name of the item |
| RealEstateAgent.contactPoint | object | A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. |
| RealEstateAgent.contactPoint.type | string | - |
| RealEstateAgent.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| RealEstateAgent.contactPoint.telephone | string | - |
| RealEstateAgent.contactPoint.faxNumber | string | - |
| RealEstateAgent.contactPoint.email | string | an email address for the item. |
| RealEstateAgent.contactPoint.url | string | primary URL for the item. |
| RealEstateAgent.email | string | - |
| RealEstateAgent.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) |
| RealEstateAgent.givenName | string | First Name of a person |
| RealEstateAgent.id | string | Linked-Data URI (@id) |
| RealEstateAgent.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| RealEstateAgent.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| RealEstateAgent.image.0 (index) | object allOf | - |
| RealEstateAgent.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| RealEstateAgent.image.0.0.0 (allOf item) | object | - |
| RealEstateAgent.image.0.0.0.type | string | The item type (Linked-Data @type) |
| RealEstateAgent.image.0.0.0.@id | string | the liked data uri for the Thing |
| RealEstateAgent.image.0.0.0 (property names) | - | - |
| RealEstateAgent.image.0.0.1 (allOf item) | - | - |
| RealEstateAgent.image.0.0.1.type | string | - |
| RealEstateAgent.image.0.0.1.id | string | the URL to access the item. |
| RealEstateAgent.image.0.0.1.name | string | the file name of the object. |
| RealEstateAgent.image.0.0.1.encodingFormat | string | MIME type |
| RealEstateAgent.image.0.0.1.about | string | URI to the subject of the image or logo |
| RealEstateAgent.image.0.0.1.url | string | URL of the image content |
| RealEstateAgent.image.0.1 (allOf item) | - | - |
| RealEstateAgent.image.0.1.type | string | - |
| RealEstateAgent.image.0.1.id | any | - |
| RealEstateAgent.image.0.1.name | any | - |
| RealEstateAgent.image.0.1.encodingFormat | any | - |
| RealEstateAgent.jobTitle | array<string> | - |
| RealEstateAgent.jobTitle (single item) | string | The job title of the person (for example, Financial Manager). |
| RealEstateAgent.memberOf | array<anyOf> | an Organization (or ProgramMembership) to which this Person or Organization belongs. |
| RealEstateAgent.memberOf (single item) | anyOf | - |
| RealEstateAgent.memberOf.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| RealEstateAgent.memberOf.0.type | string | a role played by the member in the memberOf group |
| RealEstateAgent.memberOf.0.roleName | string | the role name |
| RealEstateAgent.memberOf.0.memberOf | object | the org or group where the role is performed |
| RealEstateAgent.memberOf.0.member | string | member object or id |
| RealEstateAgent.memberOf.0.startDate | string | date the member began performing this role |
| RealEstateAgent.memberOf.0.endDate | string | date the member stopped performing the role |
| RealEstateAgent.memberOf.1 (anyOf item) | string | - |
| RealEstateAgent.name | string | the name of the item |
| RealEstateAgent.parentOrganization | array<string> | organizations of which this org is a part. |
| RealEstateAgent.parentOrganization (single item) | string | - |
| RealEstateAgent.permit | object | A permit issued by an organization to an individual or business. |
| RealEstateAgent.permit.type | string | Permit type. |
| RealEstateAgent.permit.name | string | Common or display value of the Permit. |
| RealEstateAgent.permit.issuedBy | object | The issuing authority |
| RealEstateAgent.permit.issuedThrough | object | the service through which the permit was granted |
| RealEstateAgent.permit.validIn | object | - |
| RealEstateAgent.permit.validFrom | string | start date |
| RealEstateAgent.permit.validUntil | string | end date |
| RealEstateAgent.subOrganization | array<string> | child organizations of the organization |
| RealEstateAgent.subOrganization (single item) | string | - |
| RealEstateAgent.url | string | URL of the item. |

> Examples of RealEstateAgent

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


