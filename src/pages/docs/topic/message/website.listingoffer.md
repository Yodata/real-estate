---
title: website#listingoffer
---
## Message

*website user makes a listing offer*

* MessageId: website#listingoffer
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
| topic | string | const (`"realestate/website#listingoffer"`)  |
| data | object | an offer is made to buy a PropertyListing |
| data.type | string | const (`"ListingOffer"`)  |
| data.agent | object | a website user/visitor |
| data.offerPrice | object | the offer price or range |
| data.offerPrice.type | string | allowed (`"PriceSpecification"`) PriceSpecification |
| data.offerPrice.minPrice | number | the low price offered if price is a range. |
| data.offerPrice.maxPrice | number | the high price offered if price is a range. |
| data.offerPrice.price | number | the offer price. |
| data.offerPrice.priceCurrency | string | use ISO4217 |
| data.propertyListing | object | the listing on which the offer is made. |
| data.recipient | oneOf | listing agent or offer recipient |
| data.recipient.0 (oneOf item) | object | A real estate agent who represents buyers and sellers |
| data.recipient.0.type | string | const (`"RealEstateAgent"`)  |
| data.recipient.0.additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| data.recipient.0.address | object | A physical address. |
| data.recipient.0.certification | object | A certification issued by an organization to an individual or business. |
| data.recipient.0.certification.type | string | allowed (`"Certification"`) Certification |
| data.recipient.0.certification.name | string | the name of the Certification |
| data.recipient.0.certification.issuedBy | object | the issuing authority |
| data.recipient.0.certification.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| data.recipient.0.certification.issuedBy.id | string | Linked-Data URI (@id) format (`uri`) |
| data.recipient.0.certification.issuedBy.name | string | name of the issuing organization |
| data.recipient.0.certification.issuedTo | object | the subject |
| data.recipient.0.certification.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| data.recipient.0.certification.issuedTo.id | string | Linked-Data URI (@id) format (`uri`) |
| data.recipient.0.certification.issuedTo.name | string | the name of the item |
| data.recipient.0.contactPoint | object | A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. >= 3 properties |
| data.recipient.0.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.recipient.0.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.recipient.0.contactPoint.telephone | string | - |
| data.recipient.0.contactPoint.faxNumber | string | - |
| data.recipient.0.contactPoint.email | string | an email address for the item. format (`email`) |
| data.recipient.0.contactPoint.url | string | primary URL for the item. format (`uri`) |
| data.recipient.0.email | string |  format (`email`) |
| data.recipient.0.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) <= 50 characters |
| data.recipient.0.givenName | string | First Name of a person |
| data.recipient.0.id | string | Linked-Data URI (@id) format (`uri`) |
| data.recipient.0.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| data.recipient.0.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.recipient.0.image.0 (index) | object allOf | - |
| data.recipient.0.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.recipient.0.image.0.0.0 (allOf item) | object | - |
| data.recipient.0.image.0.0.0.type | string | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`) |
| data.recipient.0.image.0.0.0.@id | string | the liked data uri for the Thing format (`uri`) |
| data.recipient.0.image.0.0.0 (property names) | - |  pattern (`^[a-z@$][a-zA-Z0-9-_]+$`) |
| data.recipient.0.image.0.0.1 (allOf item) | - | - |
| data.recipient.0.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.recipient.0.image.0.0.1.id | string | the URL to access the item. format (`uri`) |
| data.recipient.0.image.0.0.1.name | string | the file name of the object. |
| data.recipient.0.image.0.0.1.encodingFormat | string | MIME type |
| data.recipient.0.image.0.0.1.about | string | URI to the subject of the image or logo format (`uri`) |
| data.recipient.0.image.0.0.1.url | string | URL of the image content format (`uri`) |
| data.recipient.0.image.0.1 (allOf item) | - | - |
| data.recipient.0.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.recipient.0.image.0.1.id | any | - |
| data.recipient.0.image.0.1.name | any | - |
| data.recipient.0.image.0.1.encodingFormat | any | - |
| data.recipient.0.jobTitle | array<string> | - |
| data.recipient.0.jobTitle (single item) | string | The job title of the person (for example, Financial Manager). |
| data.recipient.0.memberOf | array<anyOf> | an Organization (or ProgramMembership) to which this Person or Organization belongs. |
| data.recipient.0.memberOf (single item) | anyOf | - |
| data.recipient.0.memberOf.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| data.recipient.0.memberOf.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.recipient.0.memberOf.0.roleName | string | the role name |
| data.recipient.0.memberOf.0.memberOf | object | the org or group where the role is performed |
| data.recipient.0.memberOf.0.member | string | member object or id format (`uri`) |
| data.recipient.0.memberOf.0.startDate | string | date the member began performing this role format (`date-time`) |
| data.recipient.0.memberOf.0.endDate | string | date the member stopped performing the role format (`date-time`) |
| data.recipient.0.memberOf.1 (anyOf item) | string |  format (`uri`) |
| data.recipient.0.name | string | the name of the item |
| data.recipient.0.parentOrganization | array<string> | organizations of which this org is a part. |
| data.recipient.0.parentOrganization (single item) | string |  format (`uri`) |
| data.recipient.0.permit | object | A permit issued by an organization to an individual or business. |
| data.recipient.0.permit.type | string | allowed (`"Permit"`) Permit type. |
| data.recipient.0.permit.name | string | Common or display value of the Permit. |
| data.recipient.0.permit.issuedBy | object | The issuing authority |
| data.recipient.0.permit.issuedThrough | object | the service through which the permit was granted |
| data.recipient.0.permit.validIn | object | - |
| data.recipient.0.permit.validFrom | string | start date format (`date-time`) |
| data.recipient.0.permit.validUntil | string | end date format (`date-time`) |
| data.recipient.0.subOrganization | array<string> | child organizations of the organization |
| data.recipient.0.subOrganization (single item) | string |  format (`uri`) |
| data.recipient.0.url | string | URL of the item. format (`uri`) |
| data.recipient.1 (oneOf item) | object | - |
| data.recipient.1.type | string | - |
| data.recipient.1.affiliation | array<string> | An organization that this person is affiliated with |
| data.recipient.1.affiliation (single item) | string |  format (`uri`) |
| data.recipient.1.address | array<object> | - |
| data.recipient.1.address.type | string | const (`"PostalAddress"`)  |
| data.recipient.1.address.streetAddress | string | the street number and name. |
| data.recipient.1.address.postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| data.recipient.1.address.addressRegion | string | State or Province. |
| data.recipient.1.address.addressLocality | string | City, Township. |
| data.recipient.1.address.postalCode | string | Zip/Post Code |
| data.recipient.1.address.addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| data.recipient.1.address.addressCounty | string | the county (us real estate extension) |
| data.recipient.1.address.addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |
| data.recipient.1.birthDate | string | date of birth. format (`date`) |
| data.recipient.1.contactPoint | array<object> | contact points for the person |
| data.recipient.1.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.recipient.1.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.recipient.1.contactPoint.telephone | string | - |
| data.recipient.1.contactPoint.faxNumber | string | - |
| data.recipient.1.contactPoint.email | string | an email address for the item. format (`email`) |
| data.recipient.1.contactPoint.url | string | primary URL for the item. format (`uri`) |
| data.recipient.1.email | string |  format (`email`) |
| data.recipient.1.additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| data.recipient.1.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) <= 50 characters |
| data.recipient.1.faxNumber | string | Do people still use fax machines? |
| data.recipient.1.givenName | string | First Name of a person |
| data.recipient.1.honorificPrefix | string | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. |
| data.recipient.1.honorificSuffix | string | An honorific title following a person's name like M.D. |
| data.recipient.1.jobTitle | array<string> | job tiles associated with the item |
| data.recipient.1.jobTitle (single item) | string | - |
| data.recipient.1.knowsLanguage | array<object> | languages spoken by the person |
| data.recipient.1.knowsLanguage.type | string | const (`"Language"`)  |
| data.recipient.1.knowsLanguage.name | string | the display name of the language |
| data.recipient.1.knowsLanguage.additionalName | string | BCP 47 language code |
| data.recipient.1.name | string | Full name of the person. |
| data.recipient.1.telephone | string | Primary phone number. |
| data.recipient.1.worksFor | string | Organizations the person works for. |

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#listingoffer",
  "data": {
    "type": "ListingOffer",
    "agent": {
      "type": "Contact",
      "name": "Bruce Wayne",
      "givenName": "Bruce",
      "familyName": "Wayne",
      "email": "batman@example.com",
      "telephone": "1+888-867-5309",
      "identifier": {
        "hsfconsumerid": "xxxxxxxxxxxxx"
      },
      "sameAs": {
        "amcecrmid": "1234567",
        "salesForceId": "xxxxxxxxxxxxx"
      }
    },
    "offerPrice": {
      "type": "PriceSpecification",
      "minPrice": 75000,
      "maxPrice": 100000,
      "price": 75000,
      "priceCurrency": "USD"
    },
    "propertyListing": {
      "type": "PropertyListing",
      "originatingSystemName": "GOTHAM-MLS",
      "originatingSystemKey": "12345",
      "url": "https://{company-website-url}/{path-to-listing}",
      "streetAddress": "1007 Mountain Gate Rd",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      }
    },
    "recipient": {
      "type": "RealEstateAgent",
      "name": "Randy RealEstateAgent",
      "id": "https://{agentid}.example.com/profile/card#me"
    }
  }
}
```


### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


