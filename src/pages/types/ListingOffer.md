---
title: ListingOffer
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | an offer is made to buy a PropertyListing |
| type | string | const (`"ListingOffer"`)  |
| agent | object | a website user/visitor |
| offerPrice | object | the offer price or range |
| offerPrice.type | string | allowed (`"PriceSpecification"`) PriceSpecification |
| offerPrice.minPrice | number | the low price offered if price is a range. |
| offerPrice.maxPrice | number | the high price offered if price is a range. |
| offerPrice.price | number | the offer price. |
| offerPrice.priceCurrency | string | use ISO4217 |
| propertyListing | object | the listing on which the offer is made. |
| recipient | oneOf | listing agent or offer recipient |
| recipient.0 (oneOf item) | object | A real estate agent who represents buyers and sellers |
| recipient.0.type | string | const (`"RealEstateAgent"`)  |
| recipient.0.additionalName | string | examples (`"Johnny,John"`, `"Prince,The Artist Formerly Known as Prince,The Artist"`, `"Babs,Barbara"`, `"Katheryn Elizabeth Hudson,Katy Perry"`, `"Destiny Hope Cyrus,Miley Cyrus"`) any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| recipient.0.address | object | A physical address. |
| recipient.0.certification | object | A certification issued by an organization to an individual or business. |
| recipient.0.certification.type | string | allowed (`"Certification"`) Certification |
| recipient.0.certification.name | string | the name of the Certification |
| recipient.0.certification.issuedBy | object | the issuing authority |
| recipient.0.certification.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| recipient.0.certification.issuedBy.id | string | format (`uri`) Linked-Data URI (@id) |
| recipient.0.certification.issuedBy.name | string | name of the issuing organization |
| recipient.0.certification.issuedTo | object | the subject |
| recipient.0.certification.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| recipient.0.certification.issuedTo.id | string | format (`uri`) Linked-Data URI (@id) |
| recipient.0.certification.issuedTo.name | string | the name of the item |
| recipient.0.contactPoint | object | >= 3 properties A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. |
| recipient.0.contactPoint.type | string | const (`"ContactPoint"`)  |
| recipient.0.contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| recipient.0.contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| recipient.0.contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| recipient.0.contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| recipient.0.contactPoint.url | string | format (`uri`) primary URL for the item. |
| recipient.0.email | string | format (`email`)  |
| recipient.0.familyName | string | examples (`"Smith"`, `"Jones"`, `"Parker"`, `"Monk"`, `"Brown"`, `"Miller"`, `"Davis"`, `"Wilson"`, `"Fitzgerald"`, `"Johnson"`, `"Williams"`) <= 50 characters Last Name of a person. [Family Name](https://schema.org/familyName) |
| recipient.0.givenName | string | examples (`"John"`, `"Jane"`, `"Mary"`, `"Joseph"`, `"William"`, `"David"`, `"Richard"`, `"Charles"`, `"Thomas"`, `"Christopher"`, `"Daniel"`, `"Matthew"`, `"Anthony"`, `"Donald"`, `"Mark"`, `"Paul"`, `"Steven"`, `"Andrew"`, `"Kenneth"`, `"George"`, `"Joshua"`, `"Kevin"`, `"Brian"`, `"Edward"`, `"Ronald"`, `"Timothy"`, `"Jason"`, `"Jeffrey"`, `"Ryan"`, `"Jacob"`) First Name of a person |
| recipient.0.id | string | format (`uri`) Linked-Data URI (@id) |
| recipient.0.identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| recipient.0.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| recipient.0.image.0 (index) | object allOf | - |
| recipient.0.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| recipient.0.image.0.0.0 (allOf item) | object | - |
| recipient.0.image.0.0.0.type | string | pattern (`^[A-Z][a-zA-Z0-9]+$`) The item type (Linked-Data @type) |
| recipient.0.image.0.0.0.@id | string | format (`uri`) the liked data uri for the Thing |
| recipient.0.image.0.0.0 (property names) | - | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)  |
| recipient.0.image.0.0.1 (allOf item) | - | - |
| recipient.0.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| recipient.0.image.0.0.1.id | string | format (`uri`) the URL to access the item. |
| recipient.0.image.0.0.1.name | string | the file name of the object. |
| recipient.0.image.0.0.1.encodingFormat | string | MIME type |
| recipient.0.image.0.0.1.about | string | format (`uri`) URI to the subject of the image or logo |
| recipient.0.image.0.0.1.url | string | format (`uri`) URL of the image content |
| recipient.0.image.0.1 (allOf item) | - | - |
| recipient.0.image.0.1.type | string | allowed (`"ImageObject"`)  |
| recipient.0.image.0.1.id | any | - |
| recipient.0.image.0.1.name | any | - |
| recipient.0.image.0.1.encodingFormat | any | - |
| recipient.0.jobTitle | array<string> | - |
| recipient.0.jobTitle (single item) | string | examples (`"CEO"`, `"Sales Manager"`, `"Escrow Officer"`, `"Transaction Coordinator"`, `"Director of Marketing"`, `"Senior Loan Officer"`, `"Loan Officer"`, `"Sanitation Engineer"`, `"Owner"`, `"Cofounder"`, `"Founder"`, `"President"`, `"Vice President of Sales"`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`, `null`) The job title of the person (for example, Financial Manager). |
| recipient.0.memberOf | array<anyOf> | an Organization (or ProgramMembership) to which this Person or Organization belongs. |
| recipient.0.memberOf (single item) | anyOf | - |
| recipient.0.memberOf.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| recipient.0.memberOf.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| recipient.0.memberOf.0.roleName | string | the role name |
| recipient.0.memberOf.0.memberOf | object | the org or group where the role is performed |
| recipient.0.memberOf.0.member | string | format (`uri`) member object or id |
| recipient.0.memberOf.0.startDate | string | format (`date-time`) date the member began performing this role |
| recipient.0.memberOf.0.endDate | string | format (`date-time`) date the member stopped performing the role |
| recipient.0.memberOf.1 (anyOf item) | string | format (`uri`)  |
| recipient.0.name | string | the name of the item |
| recipient.0.parentOrganization | array<string> | organizations of which this org is a part. |
| recipient.0.parentOrganization (single item) | string | format (`uri`)  |
| recipient.0.permit | object | A permit issued by an organization to an individual or business. |
| recipient.0.permit.type | string | allowed (`"Permit"`) Permit type. |
| recipient.0.permit.name | string | Common or display value of the Permit. |
| recipient.0.permit.issuedBy | object | The issuing authority |
| recipient.0.permit.issuedThrough | object | the service through which the permit was granted |
| recipient.0.permit.validIn | object | - |
| recipient.0.permit.validFrom | string | format (`date-time`) start date |
| recipient.0.permit.validUntil | string | format (`date-time`) end date |
| recipient.0.subOrganization | array<string> | child organizations of the organization |
| recipient.0.subOrganization (single item) | string | format (`uri`)  |
| recipient.0.url | string | format (`uri`) URL of the item. |
| recipient.1 (oneOf item) | object | - |
| recipient.1.type | string | - |
| recipient.1.affiliation | array<string> | An organization that this person is affiliated with |
| recipient.1.affiliation (single item) | string | format (`uri`)  |
| recipient.1.address | array<object> | - |
| recipient.1.address.type | string | const (`"PostalAddress"`)  |
| recipient.1.address.streetAddress | string | examples (`"5046 Ottis Point"`, `"166 Marion Burg"`, `"93044 Haley Stream"`) the street number and name. |
| recipient.1.address.postOfficeBoxNumber | string | examples (`"Box 1234"`, `"Apt. 161"`, `"Apt. 623"`) The post office box number for PO box addresses. |
| recipient.1.address.addressRegion | string | examples (`"New Jersey"`, `"California"`, `"MI"`, `null`) State or Province. |
| recipient.1.address.addressLocality | string | examples (`"Gotham City"`, `"Kulasmouth"`, `"Heidistad"`, `"Altamonte Springs"`, `"West Ahmed"`, `"Blaiseview"`) City, Township. |
| recipient.1.address.postalCode | string | examples (`"10010"`, `"38859"`, `"40387"`, `"50239-7698"`, `null`) Zip/Post Code |
| recipient.1.address.addressCountry | string | examples (`"USA"`, `"TH"`, `"NZ"`, `"EG"`, `"SJ"`, `"VN"`) The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| recipient.1.address.addressCounty | string | examples (`"Gotham County"`, `"Buckinghamshire"`, `"Borders"`, `null`) the county (us real estate extension) |
| recipient.1.address.addressSubdivision | string | examples (`"Gotham Heights"`, `"South Kensington"`, `"SOMA (South of Market)"`, `"Nob Hill"`) the subdivision or neighborhood (us real estate extension) |
| recipient.1.birthDate | string | format (`date`) date of birth. |
| recipient.1.contactPoint | array<object> | contact points for the person |
| recipient.1.contactPoint.type | string | const (`"ContactPoint"`)  |
| recipient.1.contactPoint.name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| recipient.1.contactPoint.telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| recipient.1.contactPoint.faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| recipient.1.contactPoint.email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| recipient.1.contactPoint.url | string | format (`uri`) primary URL for the item. |
| recipient.1.email | string | format (`email`)  |
| recipient.1.additionalName | string | examples (`"Johnny,John"`, `"Prince,The Artist Formerly Known as Prince,The Artist"`, `"Babs,Barbara"`, `"Katheryn Elizabeth Hudson,Katy Perry"`, `"Destiny Hope Cyrus,Miley Cyrus"`) any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| recipient.1.familyName | string | examples (`"Smith"`, `"Jones"`, `"Parker"`, `"Monk"`, `"Brown"`, `"Miller"`, `"Davis"`, `"Wilson"`, `"Fitzgerald"`, `"Johnson"`, `"Williams"`) <= 50 characters Last Name of a person. [Family Name](https://schema.org/familyName) |
| recipient.1.faxNumber | string | Do people still use fax machines? |
| recipient.1.givenName | string | examples (`"John"`, `"Jane"`, `"Mary"`, `"Joseph"`, `"William"`, `"David"`, `"Richard"`, `"Charles"`, `"Thomas"`, `"Christopher"`, `"Daniel"`, `"Matthew"`, `"Anthony"`, `"Donald"`, `"Mark"`, `"Paul"`, `"Steven"`, `"Andrew"`, `"Kenneth"`, `"George"`, `"Joshua"`, `"Kevin"`, `"Brian"`, `"Edward"`, `"Ronald"`, `"Timothy"`, `"Jason"`, `"Jeffrey"`, `"Ryan"`, `"Jacob"`) First Name of a person |
| recipient.1.honorificPrefix | string | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. |
| recipient.1.honorificSuffix | string | An honorific title following a person's name like M.D. |
| recipient.1.jobTitle | array<string> | job tiles associated with the item |
| recipient.1.jobTitle (single item) | string | - |
| recipient.1.knowsLanguage | array<object> | languages spoken by the person |
| recipient.1.knowsLanguage.type | string | const (`"Language"`)  |
| recipient.1.knowsLanguage.name | string | the display name of the language |
| recipient.1.knowsLanguage.additionalName | string | BCP 47 language code |
| recipient.1.name | string | Full name of the person. |
| recipient.1.telephone | string | Primary phone number. |
| recipient.1.worksFor | string | Organizations the person works for. |

## Example



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
