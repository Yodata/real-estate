---
title: profile#teamcreate
---
## profile#teamcreate

*a team profile was created*

* MessageId: profile#teamcreate
* Content type: application/json

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


### Headers

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| time | string | date & time the event was produced |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient |
| instrument | string | the app or service that produced the event on behalf of the agent/user |
| source | string | a copy of the event was sent to the source(s). |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. |
| @id | string | - |

### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.object | allOf | - |
| data.object.0 (allOf item) | - | - |
| data.object.0.id | string | - |
| data.object.1 (allOf item) | allOf | - |
| data.object.1.0 (allOf item) | object | - |
| data.object.1.0.type | string | The item type (Linked-Data @type) |
| data.object.1.0.@id | string | the liked data uri for the Thing |
| data.object.1.0 (property names) | - | - |
| data.object.1.1 (allOf item) | any | - |
| data.object.1.2 (allOf item) | any | - |
| data.object.1.3 (allOf item) | - | - |
| data.object.1.3.address | object | A physical address. |
| data.object.1.3.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| data.object.1.3.availableLanguage.type | string | - |
| data.object.1.3.availableLanguage.name | string | the display name of the language |
| data.object.1.3.availableLanguage.additionalName | string | BCP 47 language code |
| data.object.1.3.branchCode | string | A short textual code that uniquely identifies a place of business. |
| data.object.1.3.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| data.object.1.3.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| data.object.1.3.certification.0.type | string | Certification |
| data.object.1.3.certification.0.name | string | the name of the Certification |
| data.object.1.3.certification.0.issuedBy | object | the issuing authority |
| data.object.1.3.certification.0.issuedBy.type | string | The item type (Linked-Data @type) |
| data.object.1.3.certification.0.issuedBy.id | string | Linked-Data URI (@id) |
| data.object.1.3.certification.0.issuedBy.name | string | name of the issuing organization |
| data.object.1.3.certification.0.issuedTo | object | the subject |
| data.object.1.3.certification.0.issuedTo.type | string | The item type (Linked-Data @type) |
| data.object.1.3.certification.0.issuedTo.id | string | Linked-Data URI (@id) |
| data.object.1.3.certification.0.issuedTo.name | string | the name of the item |
| data.object.1.3.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| data.object.1.3.contactPoint.type | string | - |
| data.object.1.3.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.object.1.3.contactPoint.telephone | string | - |
| data.object.1.3.contactPoint.faxNumber | string | - |
| data.object.1.3.contactPoint.email | string | an email address for the item. |
| data.object.1.3.contactPoint.url | string | primary URL for the item. |
| data.object.1.3.email | string | - |
| data.object.1.3.faxNumber | string | Do people still use fax machines? |
| data.object.1.3.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.1.3.image.0 (index) | object allOf | - |
| data.object.1.3.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.1.3.image.0.0.0 (allOf item) | object | - |
| data.object.1.3.image.0.0.0.type | string | The item type (Linked-Data @type) |
| data.object.1.3.image.0.0.0.@id | string | the liked data uri for the Thing |
| data.object.1.3.image.0.0.0 (property names) | - | - |
| data.object.1.3.image.0.0.1 (allOf item) | - | - |
| data.object.1.3.image.0.0.1.type | string | - |
| data.object.1.3.image.0.0.1.id | string | the URL to access the item. |
| data.object.1.3.image.0.0.1.name | string | the file name of the object. |
| data.object.1.3.image.0.0.1.encodingFormat | string | MIME type |
| data.object.1.3.image.0.0.1.about | string | URI to the subject of the image or logo |
| data.object.1.3.image.0.0.1.url | string | URL of the image content |
| data.object.1.3.image.0.1 (allOf item) | - | - |
| data.object.1.3.image.0.1.type | string | - |
| data.object.1.3.image.0.1.id | any | - |
| data.object.1.3.image.0.1.name | any | - |
| data.object.1.3.image.0.1.encodingFormat | any | - |
| data.object.1.3.logo | array<object allOf> | a logo associated with the organization. |
| data.object.1.3.logo (single item) | object allOf | - |
| data.object.1.3.logo.0 (allOf item) | object | an electronic file. |
| data.object.1.3.logo.0.type | string | - |
| data.object.1.3.logo.0.id | string | - |
| data.object.1.3.logo.0.name | string | document name or title |
| data.object.1.3.logo.0.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| data.object.1.3.logo.0.about | object | subject of the Document |
| data.object.1.3.logo.0.url | string | public URL of the object |
| data.object.1.3.logo.1 (allOf item) | object | an associated logo |
| data.object.1.3.name | string | Name or DBA. |
| data.object.1.3.parentOrganization | array<string> | - |
| data.object.1.3.parentOrganization (single item) | string | - |
| data.object.1.3.subOrganization | array<string> | a child organization |
| data.object.1.3.subOrganization (single item) | string | - |
| data.object.1.3.telephone | string | Primary phone number. |
| data.object.1.3.type | string | - |
| data.object.1.3.url | string | primary website/url for the entity. |
| data.object.2 (allOf item) | - | A real estate team. |
| data.object.2.type | string | RealEstateTeam |
| data.object.2.areaServed | object | the physical areas that make up the ServiceArea |
| data.object.2.description | string | description of the item. |
| data.object.2.parentOrganization | array<string> | A franchisor or affiliate network of which this organization plays a membership role. |
| data.object.2.parentOrganization (single item) | string | - |
| data.object.2.member | array<allOf> | - |
| data.object.2.member (single item) | allOf | - |
| data.object.2.member.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| data.object.2.member.0.type | string | a role played by the member in the memberOf group |
| data.object.2.member.0.roleName | string | the role name |
| data.object.2.member.0.memberOf | object | the org or group where the role is performed |
| data.object.2.member.0.member | string | member object or id |
| data.object.2.member.0.startDate | string | date the member began performing this role |
| data.object.2.member.0.endDate | string | date the member stopped performing the role |
| data.object.2.member.1 (allOf item) | object | a membership relationship.  Subclass of OrganizationRole |
| data.object.2.member.1.type | string | a member of a real estate team |
| data.object.2.member.1.roleName | string | - |
| data.object.2.member.1.memberOf | string | - |
| data.object.2.member.1.member | string | - |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/profile#teamcreate",
  "data": {
    "type": "CreateAction",
    "object": {
      "type": "RealEstateTeam",
      "@id": "http://example.com",
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
      "availableLanguage": [
        {
          "type": "Language",
          "name": "English",
          "additionalName": "en-us"
        }
      ],
      "branchCode": "for BHHS profile events, see additionalProperty.OfficeId",
      "certification": [
        {
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
        }
      ],
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
      "faxNumber": "string",
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
      "logo": [
        {
          "type": "DigitalDocument",
          "id": "http://user.example.com/public/logo/archive.zip",
          "name": "archive.zip",
          "encodingFormat": "application/zip",
          "about": {
            "type": "RealEstateTransaction",
            "identifier": {
              "bmsTransactionId": "xxxx"
            }
          },
          "url": "https://example.com"
        }
      ],
      "name": "string",
      "parentOrganization": [
        "http://example.com"
      ],
      "subOrganization": [
        "http://org.example.com/profile/card#me"
      ],
      "telephone": "+15558675309",
      "url": "http://example.com",
      "areaServed": {
        "type": "PostalCode",
        "postalCode": "91371",
        "addressLocality": "Woodland Hills",
        "addressCounty": "Los Angeles",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "description": "The number on Gotham City Real Estate Company since 1940",
      "member": [
        {
          "type": "RealEstateTeamMembership",
          "roleName": "TeamMember",
          "memberOf": "https://{team-id}.example.com/profile/card#me",
          "member": "https://{agent}.example.com/profile/card#me",
          "startDate": "2019-08-24T14:15:22Z",
          "endDate": "2019-08-24T14:15:22Z"
        }
      ]
    }
  }
}
```


