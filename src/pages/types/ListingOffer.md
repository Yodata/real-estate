---
title: ListingOffer
---
| Name | Type | Description |
|---|---|---|
| (root) | object | an offer is made to buy a PropertyListing |
| ListingOffer.type | string | - |
| ListingOffer.agent | object | a website user/visitor |
| ListingOffer.offerPrice | object | the offer price or range |
| ListingOffer.offerPrice.type | string | PriceSpecification |
| ListingOffer.offerPrice.minPrice | number | the low price offered if price is a range. |
| ListingOffer.offerPrice.maxPrice | number | the high price offered if price is a range. |
| ListingOffer.offerPrice.price | number | the offer price. |
| ListingOffer.offerPrice.priceCurrency | string | use ISO4217 |
| ListingOffer.propertyListing | object | the listing on which the offer is made. |
| ListingOffer.recipient | oneOf | listing agent or offer recipient |
| ListingOffer.recipient.0 (oneOf item) | object | A real estate agent who represents buyers and sellers |
| ListingOffer.recipient.0.type | string | - |
| ListingOffer.recipient.0.additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| ListingOffer.recipient.0.address | object | A physical address. |
| ListingOffer.recipient.0.certification | object | A certification issued by an organization to an individual or business. |
| ListingOffer.recipient.0.certification.type | string | Certification |
| ListingOffer.recipient.0.certification.name | string | the name of the Certification |
| ListingOffer.recipient.0.certification.issuedBy | object | the issuing authority |
| ListingOffer.recipient.0.certification.issuedBy.type | string | The item type (Linked-Data @type) |
| ListingOffer.recipient.0.certification.issuedBy.id | string | Linked-Data URI (@id) |
| ListingOffer.recipient.0.certification.issuedBy.name | string | name of the issuing organization |
| ListingOffer.recipient.0.certification.issuedTo | object | the subject |
| ListingOffer.recipient.0.certification.issuedTo.type | string | The item type (Linked-Data @type) |
| ListingOffer.recipient.0.certification.issuedTo.id | string | Linked-Data URI (@id) |
| ListingOffer.recipient.0.certification.issuedTo.name | string | the name of the item |
| ListingOffer.recipient.0.contactPoint | object | A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. |
| ListingOffer.recipient.0.contactPoint.type | string | - |
| ListingOffer.recipient.0.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| ListingOffer.recipient.0.contactPoint.telephone | string | - |
| ListingOffer.recipient.0.contactPoint.faxNumber | string | - |
| ListingOffer.recipient.0.contactPoint.email | string | an email address for the item. |
| ListingOffer.recipient.0.contactPoint.url | string | primary URL for the item. |
| ListingOffer.recipient.0.email | string | - |
| ListingOffer.recipient.0.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) |
| ListingOffer.recipient.0.givenName | string | First Name of a person |
| ListingOffer.recipient.0.id | string | Linked-Data URI (@id) |
| ListingOffer.recipient.0.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| ListingOffer.recipient.0.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| ListingOffer.recipient.0.image.0 (index) | object allOf | - |
| ListingOffer.recipient.0.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| ListingOffer.recipient.0.image.0.0.0 (allOf item) | object | - |
| ListingOffer.recipient.0.image.0.0.0.type | string | The item type (Linked-Data @type) |
| ListingOffer.recipient.0.image.0.0.0.@id | string | the liked data uri for the Thing |
| ListingOffer.recipient.0.image.0.0.0 (property names) | - | - |
| ListingOffer.recipient.0.image.0.0.1 (allOf item) | - | - |
| ListingOffer.recipient.0.image.0.0.1.type | string | - |
| ListingOffer.recipient.0.image.0.0.1.id | string | the URL to access the item. |
| ListingOffer.recipient.0.image.0.0.1.name | string | the file name of the object. |
| ListingOffer.recipient.0.image.0.0.1.encodingFormat | string | MIME type |
| ListingOffer.recipient.0.image.0.0.1.about | string | URI to the subject of the image or logo |
| ListingOffer.recipient.0.image.0.0.1.url | string | URL of the image content |
| ListingOffer.recipient.0.image.0.1 (allOf item) | - | - |
| ListingOffer.recipient.0.image.0.1.type | string | - |
| ListingOffer.recipient.0.image.0.1.id | any | - |
| ListingOffer.recipient.0.image.0.1.name | any | - |
| ListingOffer.recipient.0.image.0.1.encodingFormat | any | - |
| ListingOffer.recipient.0.jobTitle | array<string> | - |
| ListingOffer.recipient.0.jobTitle (single item) | string | The job title of the person (for example, Financial Manager). |
| ListingOffer.recipient.0.memberOf | array<anyOf> | an Organization (or ProgramMembership) to which this Person or Organization belongs. |
| ListingOffer.recipient.0.memberOf (single item) | anyOf | - |
| ListingOffer.recipient.0.memberOf.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| ListingOffer.recipient.0.memberOf.0.type | string | a role played by the member in the memberOf group |
| ListingOffer.recipient.0.memberOf.0.roleName | string | the role name |
| ListingOffer.recipient.0.memberOf.0.memberOf | object | the org or group where the role is performed |
| ListingOffer.recipient.0.memberOf.0.member | string | member object or id |
| ListingOffer.recipient.0.memberOf.0.startDate | string | date the member began performing this role |
| ListingOffer.recipient.0.memberOf.0.endDate | string | date the member stopped performing the role |
| ListingOffer.recipient.0.memberOf.1 (anyOf item) | string | - |
| ListingOffer.recipient.0.name | string | the name of the item |
| ListingOffer.recipient.0.parentOrganization | array<string> | organizations of which this org is a part. |
| ListingOffer.recipient.0.parentOrganization (single item) | string | - |
| ListingOffer.recipient.0.permit | object | A permit issued by an organization to an individual or business. |
| ListingOffer.recipient.0.permit.type | string | Permit type. |
| ListingOffer.recipient.0.permit.name | string | Common or display value of the Permit. |
| ListingOffer.recipient.0.permit.issuedBy | object | The issuing authority |
| ListingOffer.recipient.0.permit.issuedThrough | object | the service through which the permit was granted |
| ListingOffer.recipient.0.permit.validIn | object | - |
| ListingOffer.recipient.0.permit.validFrom | string | start date |
| ListingOffer.recipient.0.permit.validUntil | string | end date |
| ListingOffer.recipient.0.subOrganization | array<string> | child organizations of the organization |
| ListingOffer.recipient.0.subOrganization (single item) | string | - |
| ListingOffer.recipient.0.url | string | URL of the item. |
| ListingOffer.recipient.1 (oneOf item) | object | - |
| ListingOffer.recipient.1.type | string | - |
| ListingOffer.recipient.1.affiliation | array<string> | An organization that this person is affiliated with |
| ListingOffer.recipient.1.affiliation (single item) | string | - |
| ListingOffer.recipient.1.address | array<object> | - |
| ListingOffer.recipient.1.address.type | string | - |
| ListingOffer.recipient.1.address.streetAddress | string | the street number and name. |
| ListingOffer.recipient.1.address.postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| ListingOffer.recipient.1.address.addressRegion | string | State or Province. |
| ListingOffer.recipient.1.address.addressLocality | string | City, Township. |
| ListingOffer.recipient.1.address.postalCode | string | Zip/Post Code |
| ListingOffer.recipient.1.address.addressCountry | string | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| ListingOffer.recipient.1.address.addressCounty | string | the county (us real estate extension) |
| ListingOffer.recipient.1.address.addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |
| ListingOffer.recipient.1.birthDate | string | date of birth. |
| ListingOffer.recipient.1.contactPoint | array<object> | contact points for the person |
| ListingOffer.recipient.1.contactPoint.type | string | - |
| ListingOffer.recipient.1.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| ListingOffer.recipient.1.contactPoint.telephone | string | - |
| ListingOffer.recipient.1.contactPoint.faxNumber | string | - |
| ListingOffer.recipient.1.contactPoint.email | string | an email address for the item. |
| ListingOffer.recipient.1.contactPoint.url | string | primary URL for the item. |
| ListingOffer.recipient.1.email | string | - |
| ListingOffer.recipient.1.additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| ListingOffer.recipient.1.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) |
| ListingOffer.recipient.1.faxNumber | string | Do people still use fax machines? |
| ListingOffer.recipient.1.givenName | string | First Name of a person |
| ListingOffer.recipient.1.honorificPrefix | string | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. |
| ListingOffer.recipient.1.honorificSuffix | string | An honorific title following a person's name like M.D. |
| ListingOffer.recipient.1.jobTitle | array<string> | job tiles associated with the item |
| ListingOffer.recipient.1.jobTitle (single item) | string | - |
| ListingOffer.recipient.1.knowsLanguage | array<object> | languages spoken by the person |
| ListingOffer.recipient.1.knowsLanguage.type | string | - |
| ListingOffer.recipient.1.knowsLanguage.name | string | the display name of the language |
| ListingOffer.recipient.1.knowsLanguage.additionalName | string | BCP 47 language code |
| ListingOffer.recipient.1.name | string | Full name of the person. |
| ListingOffer.recipient.1.telephone | string | Primary phone number. |
| ListingOffer.recipient.1.worksFor | string | Organizations the person works for. |

> Examples of ListingOffer

```json
{
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
```


