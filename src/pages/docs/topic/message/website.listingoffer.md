---
title: website#listingoffer
---

## Message

_website user makes a listing offer_

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#listingoffer",
  "recipient": "https://dev.bhhs.hsfaffiliates.com/profile/card#me",
  "instrument": "https://aem.dev.bhhs.hsfaffiliates.com/profile/card#me",
  "@id": "https://aem.dev.bhhs.hsfaffiliates.com/publish/b0aced6fef0a41d5b1f5815fe113d01b",
  "id": "https://aem.dev.bhhs.hsfaffiliates.com/publish/b0aced6fef0a41d5b1f5815fe113d01b",
  "time": "2025-02-19T16:56:20.054Z",
  "timestamp": 1739984180054,
  "data": {
    "type": "ListingOffer",
    "identifier": "xnVDTwM1ZPwzU1wJ0hWK9ut1KvHoPYbybjvn6Ijx6T6YM2uBv4LHjfCvIpkc6gRrw6yBxq0/Cq0BBcryzY1UeEdX",
    "agent": {
      "type": "Contact",
      "name": "Lindsay Hoffmann",
      "givenName": "Lindsay",
      "familyName": "Hoffmann",
      "email": "hoffmannlindsay@yahoo.com",
      "telephone": "2035986487",
      "identifier": {
        "hsfconsumerid": "e4ef3f10-3916-4a5e-a557-500bf7d07e01"
      },
      "additionalProperty": {
        "userPath": "https%3A%2F%2Fwww.bhhsfloridarealty.com%2Fwindermere%2Fandrew-kincaid%2Fcid-1052163%2Fsearch%3FSearchInput%3DKissimmee%2520FL%26SearchType%3DCity%26MinPrice%3D10000%26MaxPrice%3D20000%26PropertyType%3D5%26ApplicationType%3DFOR_SALE%26ListingStatus%3D1%26NewListing%3Dfalse%26Sort%3DPRICE_ASCENDING%26PageSize%3D32%26Page%3D1%26NorthEastLatitude%3D30.618479114939824%26NorthEastLongitude%3D-74.51860807836056%26SouthWestLatitude%3D24.136170723586538%26SouthWestLongitude%3D-87.37261198461056%26SearchParameter%3DKissimmee%252C%2520FL%26Country%3DUS%26isFranchisePage%3Dtrue%26franchiseeCode%3DFL301|Property+Search+Results+%7C+Andrew+Kincaid+%7C+Berkshire+Hathaway+HomeServices|https%3A%2F%2Fwww.bhhsfloridarealty.com%2Fwindermere%2Fandrew-kincaid%2Fcid-1052163%2Ffl%2Fst-georges-court-kissimmee-34746%2Fpid-397345005|St+George%27S+Court%2C+Kissimmee%2C+FL+34746+-+MLS+A4640270+-+Berkshire+Hathaway+HomeServices|1"
      },
      "mortgage": false,
      "sameAs": {
        "amcecrmid": "1234567",
        "salesForceId": "xxxxxxxxxxxxx"
      }
    },
    "object": {
      "type": "Comment",
      "text": "Name: Lindsay Hoffmann\nEmail: hoffmannlindsay@yahoo.com\nPhone: 2035986487\nI am ready to buy. I just need the parcel number first to call the Osceola County Zoning department and make sure I can build on this lot. - Property Address: St George'S Court\nNo, I am not pre-approved for a home mortgage"
    },
    "recipient": {
      "type": "RealEstateAgent",
      "name": "Andrew Kincaid",
      "id": "https://1052163.dev.bhhs.hsfaffiliates.com/profile/card#me"
    },
    "offerPrice": {
      "type": "PriceSpecification",
      "minPrice": 75000,
      "maxPrice": 100000,
      "price": 15000,
      "priceCurrency": "USD"
    },
    "propertyListing": {
      "type": "PropertyListing",
      "url": "https://www.bhhsfloridarealty.com/windermere/andrew-kincaid/cid-1052163/fl/st-georges-court-kissimmee-34746/pid-397345005",
      "postalCode": "34746",
      "addressRegion": "FL",
      "streetAddress": "St George'S Court",
      "addressLocality": "Kissimmee",
      "listingId": "389508403",
      "listingOriginatingSystem": {
        "type": "MultipleListingService",
        "name": "Stellar MLS (My Florida)",
        "identifier": {
          "orgId": "flmfr"
        },
        "originatingSystemName": "Stellar MLS (My Florida)",
        "originatingSystemKey": "A4640270"
      },
      "addressCountry": "USA",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      }
    },
    "instrument": {},
    "leadOwner": {
      "type": "organization",
      "name": "Carolinas Realty",
      "id": "https://nc301.bhhs.hsfaffiliates.com/profile/card#me"
    },
    "event": {
      "type": "Event",
      "name": "Property Showing 64 Buttercup Lane, South Grafton, MA, USA",
      "description": "",
      "subEvents": [
        {
          "type": "Campaign",
          "name": "A good campaign name",
          "id": "ire:1d2995307f2c48ae9543caf586f43f9b",
          "url": "https://www.bhhspro.com/mentor/steve-baird/cid-356481/oh/889-hartford-drive-44035/pid-338005633",
          "contactGroup": [
            {
              "type": "Collection",
              "name": "Topic 1"
            },
            {
              "type": "Collection",
              "name": "Topic 2"
            }
          ]
        }
      ]
    },
    "originatingSystem": {
      "type": "SoftwareApplication",
      "name": "RDesk",
      "description": "User Created.",
      "url": "http://www.rdeskwebsite.com/"
    }
  }
}
```

### Payload

| Name                                              | Type                                  | Description                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (root)                                            | object                                | -                                                                                                                                                                                                                                                                                           |
| topic                                             | string                                | const (`"realestate/website#listingoffer"`)                                                                                                                                                                                                                                                 |
| data                                              | object                                | an offer is made to buy a PropertyListing                                                                                                                                                                                                                                                   |
| data.type                                         | string                                | const (`"ListingOffer"`)                                                                                                                                                                                                                                                                    |
| data.identifier                | string                           | unique identifier |
| data.agent                                        | object                                | a website user/visitor                                                                                                                                                                                                                                                                      |
| data.agent.type                                  | string  | allowed (`"Person"`, `"Contact"`)                                                                                                                                                                                                                                                           |
| data.agent.name                                  | string  | -                                                                                                                                                                                                                                                                                           |
| data.agent.email                                 | string  | format (`email`)                                                                                                                                                                                                                                                                            |
| data.agent.telephone                             | string  | -                                                                                                                                                                                                                                                                                           |
| data.agent.identifier                            | object  | 1 properties                                                                                                                                                                                                                                                                                |
| data.agent.identifier.hsfconsumerid | string | HSF consumer identifier |
| data.agent.mortgage | boolean | true or false |
| data.agent.additionalProperty.userPath | string | userPath                                                                                                                                                                                                                                                                                         |
| data.object.text                            | string  | agent info                                                                                                                                                                                                                                                                             |
| data.object.type                           | string  | object type                                                                                                                                                                                                                                                                            |
| data.recipient.id                              | string  |  format (`uri`)  |  
| data.recipient.name                              | string  | recipient name  |
| data.recipient.type                              | string  | recipient type  |
| data.offerPrice                                   | object                                | the offer price or range                                                                                                                                                                                                                                                                    |
| data.offerPrice.type                              | string                                | allowed (`"PriceSpecification"`) PriceSpecification                                                                                                                                                                                                                                         |
| data.offerPrice.minPrice                          | number                                | the low price offered if price is a range.                                                                                                                                                                                                                                                  |
| data.offerPrice.maxPrice                          | number                                | the high price offered if price is a range.                                                                                                                                                                                                                                                 |
| data.offerPrice.price                             | number                                | the offer price.                                                                                                                                                                                                                                                                            |
| data.offerPrice.priceCurrency                     | string                                | use ISO4217                                                                                                                                                                                                                                                                                 |
| data.propertyListing                              | object                                | the listing on which the offer is made.                                                                                                                                                                                                                                                     |
| data.propertyListing.type           | string | const (`"PropertyListing"`) |
| data.propertyListing.url                                              | string | property listing URL |
| data.propertyListing.postalCode                                       | string | postal code |
| data.propertyListing.addressRegion                                    | string | state or region |
| data.propertyListing.streetAddress                                    | string | street address |
| data.propertyListing.addressLocality                                  | string | city or locality |
| data.propertyListing.listingId                                        | string | unique listing identifier |
| data.propertyListing.listingOriginatingSystem                         | object | original listing system details |
| data.propertyListing.listingOriginatingSystem.type                    | string | const (`"MultipleListingService"`) |
| data.propertyListing.listingOriginatingSystem.name                    | string | listing system name |
| data.propertyListing.listingOriginatingSystem.identifier              | object | listing system identifier |
| data.propertyListing.listingOriginatingSystem.identifier.orgId        | string | MLS organization identifier |
| data.propertyListing.listingOriginatingSystem.originatingSystemName   | string | originating system name |
| data.propertyListing.listingOriginatingSystem.originatingSystemKey    | string | originating system listing key |
| data.instrument      | object | the site, app, or service on which the user action was observed |
| data.leadOwner       | object | lead owner details |
| data.leadOwner.type  | string | lead owner type |
| data.leadOwner.name  | string | lead owner name |
| data.leadOwner.id    | string | format (`uri`) |
| data.event.type                                   | string                                | type of the event e.g Campaign                                                                                                                                                                                                                                                              |
| data.event.name                                   | string                                | any string name                                                                                                                                                                                                                                                                             |
| data.event.id                                     | string                                | format (`uri`)                                                                                                                                                                                                                                                                              |
| data.event.url                                    | string                                | url of the event                                                                                                                                                                                                                                                                            |
| data.event.subEvents                              | array                                 | array of subEvents                                                                                                                                                                                                                                                                          |
| data.recipient                                    | oneOf                                 | listing agent or offer recipient                                                                                                                                                                                                                                                            |
| data.recipient.0 (oneOf item)                     | object                                | A real estate agent who represents buyers and sellers                                                                                                                                                                                                                                       |
| data.recipient.0.type                             | string                                | const (`"RealEstateAgent"`)                                                                                                                                                                                                                                                                 |
| data.recipient.0.additionalName                   | string                                | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.                                                                                                                                   |
| data.recipient.0.address                          | object                                | A physical address.                                                                                                                                                                                                                                                                         |
| data.recipient.0.certification                    | object                                | A certification issued by an organization to an individual or business.                                                                                                                                                                                                                     |
| data.recipient.0.certification.type               | string                                | allowed (`"Certification"`) Certification                                                                                                                                                                                                                                                   |
| data.recipient.0.certification.name               | string                                | the name of the Certification                                                                                                                                                                                                                                                               |
| data.recipient.0.certification.issuedBy           | object                                | the issuing authority                                                                                                                                                                                                                                                                       |
| data.recipient.0.certification.issuedBy.type      | string                                | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type)                                                                                                                                                                                                                      |
| data.recipient.0.certification.issuedBy.id        | string                                | Linked-Data URI (@id) format (`uri`)                                                                                                                                                                                                                                                        |
| data.recipient.0.certification.issuedBy.name      | string                                | name of the issuing organization                                                                                                                                                                                                                                                            |
| data.recipient.0.certification.issuedTo           | object                                | the subject                                                                                                                                                                                                                                                                                 |
| data.recipient.0.certification.issuedTo.type      | string                                | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type)                                                                                                                                                                                                                             |
| data.recipient.0.certification.issuedTo.id        | string                                | Linked-Data URI (@id) format (`uri`)                                                                                                                                                                                                                                                        |
| data.recipient.0.certification.issuedTo.name      | string                                | -                                                                                                                                                                                                                                                                                           |
| data.recipient.0.contactPoint                     | object                                | A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. >= 3 properties |
| data.recipient.0.contactPoint.type                | string                                | const (`"ContactPoint"`)                                                                                                                                                                                                                                                                    |
| data.recipient.0.contactPoint.name                | string                                | a label for the contactPoint, i.e. 'Work', or 'Home'                                                                                                                                                                                                                                        |
| data.recipient.0.contactPoint.telephone           | string                                | -                                                                                                                                                                                                                                                                                           |
| data.recipient.0.contactPoint.faxNumber           | string                                | -                                                                                                                                                                                                                                                                                           |
| data.recipient.0.contactPoint.email               | string                                | an email address for the item. format (`email`)                                                                                                                                                                                                                                             |
| data.recipient.0.contactPoint.url                 | string                                | primary URL for the item. format (`uri`)                                                                                                                                                                                                                                                    |
| data.recipient.0.email                            | string                                | a valid email address format (`email`)                                                                                                                                                                                                                                                      |
| data.recipient.0.familyName                       | string                                | Last Name of a person. [Family Name](https://schema.org/familyName) <= 50 characters                                                                                                                                                                                                        |
| data.recipient.0.givenName                        | string                                | First Name of a person                                                                                                                                                                                                                                                                      |
| data.recipient.0.id                               | string                                | Linked-Data URI (@id) format (`uri`)                                                                                                                                                                                                                                                        |
| data.recipient.0.identifier                       | object                                | 1 properties                                                                                                                                                                                                                                                                                |
| data.recipient.0.image                            | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web.                                                                                                                                                                                                                                     |
| data.recipient.0.image.0 (index)                  | object allOf                          | -                                                                                                                                                                                                                                                                                           |
| data.recipient.0.image.0.0 (allOf item)           | allOf                                 | an image, video or document availble for download                                                                                                                                                                                                                                           |
| data.recipient.0.image.0.0.0 (allOf item)         | object                                | -                                                                                                                                                                                                                                                                                           |
| data.recipient.0.image.0.0.0.type                 | string                                | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`)                                                                                                                                                                                                                           |
| data.recipient.0.image.0.0.0.@id                  | string                                | the liked data uri for the Thing format (`uri`)                                                                                                                                                                                                                                             |
| data.recipient.0.image.0.0.0 (property names)     | -                                     | pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)                                                                                                                                                                                                                                                         |
| data.recipient.0.image.0.0.1 (allOf item)         | -                                     | -                                                                                                                                                                                                                                                                                           |
| data.recipient.0.image.0.0.1.type                 | string                                | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)                                                                                                                                                                                                                             |
| data.recipient.0.image.0.0.1.id                   | string                                | the URL to access the item. format (`uri`)                                                                                                                                                                                                                                                  |
| data.recipient.0.image.0.0.1.name                 | string                                | the file name of the object.                                                                                                                                                                                                                                                                |
| data.recipient.0.image.0.0.1.encodingFormat       | string                                | MIME type                                                                                                                                                                                                                                                                                   |
| data.recipient.0.image.0.0.1.about                | string                                | URI to the subject of the image or logo format (`uri`)                                                                                                                                                                                                                                      |
| data.recipient.0.image.0.0.1.url                  | string                                | URL of the image content format (`uri`)                                                                                                                                                                                                                                                     |
| data.recipient.0.image.0.1 (allOf item)           | -                                     | -                                                                                                                                                                                                                                                                                           |
| data.recipient.0.image.0.1.type                   | string                                | allowed (`"ImageObject"`)                                                                                                                                                                                                                                                                   |
| data.recipient.0.image.0.1.id                     | any                                   | -                                                                                                                                                                                                                                                                                           |
| data.recipient.0.image.0.1.name                   | any                                   | -                                                                                                                                                                                                                                                                                           |
| data.recipient.0.image.0.1.encodingFormat         | any                                   | -                                                                                                                                                                                                                                                                                           |
| data.recipient.0.jobTitle                         | array<string>                         | -                                                                                                                                                                                                                                                                                           |
| data.recipient.0.jobTitle (single item)           | string                                | The job title of the person (for example, Financial Manager).                                                                                                                                                                                                                               |
| data.recipient.0.memberOf                         | array<anyOf>                          | an Organization (or ProgramMembership) to which this Person or Organization belongs.                                                                                                                                                                                                        |
| data.recipient.0.memberOf (single item)           | anyOf                                 | -                                                                                                                                                                                                                                                                                           |
| data.recipient.0.memberOf.0 (anyOf item)          | object                                | describes a role played by a member and a group or organization.                                                                                                                                                                                                                            |
| data.recipient.0.memberOf.0.type                  | string                                | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group                                                                                                                                                                                                            |
| data.recipient.0.memberOf.0.roleName              | string                                | the role name                                                                                                                                                                                                                                                                               |
| data.recipient.0.memberOf.0.memberOf              | object                                | the org or group where the role is performed                                                                                                                                                                                                                                                |
| data.recipient.0.memberOf.0.member                | string                                | member object or id format (`uri`)                                                                                                                                                                                                                                                          |
| data.recipient.0.memberOf.0.startDate             | string                                | date the member began performing this role format (`date-time`)                                                                                                                                                                                                                             |
| data.recipient.0.memberOf.0.endDate               | string                                | date the member stopped performing the role format (`date-time`)                                                                                                                                                                                                                            |
| data.recipient.0.memberOf.1 (anyOf item)          | string                                | format (`uri`)                                                                                                                                                                                                                                                                              |
| data.recipient.0.name                             | string                                | -                                                                                                                                                                                                                                                                                           |
| data.recipient.0.parentOrganization               | array<string>                         | organizations of which this org is a part.                                                                                                                                                                                                                                                  |
| data.recipient.0.parentOrganization (single item) | string                                | format (`uri`)                                                                                                                                                                                                                                                                              |
| data.recipient.0.permit                           | object                                | A permit issued by an organization to an individual or business.                                                                                                                                                                                                                            |
| data.recipient.0.permit.type                      | string                                | allowed (`"Permit"`) Permit type.                                                                                                                                                                                                                                                           |
| data.recipient.0.permit.name                      | string                                | Common or display value of the Permit.                                                                                                                                                                                                                                                      |
| data.recipient.0.permit.issuedBy                  | object                                | The issuing authority                                                                                                                                                                                                                                                                       |
| data.recipient.0.permit.issuedThrough             | object                                | the service through which the permit was granted                                                                                                                                                                                                                                            |
| data.recipient.0.permit.validIn                   | object                                | -                                                                                                                                                                                                                                                                                           |
| data.recipient.0.permit.validFrom                 | string                                | start date format (`date-time`)                                                                                                                                                                                                                                                             |
| data.recipient.0.permit.validUntil                | string                                | end date format (`date-time`)                                                                                                                                                                                                                                                               |
| data.recipient.0.subOrganization                  | array<string>                         | child organizations of the organization                                                                                                                                                                                                                                                     |
| data.recipient.0.subOrganization (single item)    | string                                | format (`uri`)                                                                                                                                                                                                                                                                              |
| data.recipient.0.url                              | string                                | URL of the item. format (`uri`)                                                                                                                                                                                                                                                             |
| data.recipient.1 (oneOf item)                     | object                                | -                                                                                                                                                                                                                                                                                           |
| data.recipient.1.type                             | string                                | -                                                                                                                                                                                                                                                                                           |
| data.recipient.1.affiliation                      | array<string>                         | An organization that this person is affiliated with                                                                                                                                                                                                                                         |
| data.recipient.1.affiliation (single item)        | string                                | format (`uri`)                                                                                                                                                                                                                                                                              |
| data.recipient.1.address                          | array<object>                         | -                                                                                                                                                                                                                                                                                           |
| data.recipient.1.address.type                     | string                                | const (`"PostalAddress"`)                                                                                                                                                                                                                                                                   |
| data.recipient.1.address.streetAddress            | string                                | the street address <= 75 characters                                                                                                                                                                                                                                                         |
| data.recipient.1.address.postOfficeBoxNumber      | string                                | The post office box number for PO box addresses.                                                                                                                                                                                                                                            |
| data.recipient.1.address.addressRegion            | string                                | abbreviated state or province                                                                                                                                                                                                                                                               |
| data.recipient.1.address.addressLocality          | string                                | City, Township. <= 50 characters                                                                                                                                                                                                                                                            |
| data.recipient.1.address.postalCode               | string                                | Zip/Post Code <= 12 characters                                                                                                                                                                                                                                                              |
| data.recipient.1.address.addressCountry           | string                                | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code                                                                                                                                         |
| data.recipient.1.address.addressCounty            | string                                | County                                                                                                                                                                                                                                                                                      |
| data.recipient.1.address.addressSubdivision       | string                                | the subdivision or neighborhood (us real estate extension)                                                                                                                                                                                                                                  |
| data.recipient.1.birthDate                        | string                                | date of birth. format (`date`)                                                                                                                                                                                                                                                              |
| data.recipient.1.contactPoint                     | array<object>                         | contact points for the person                                                                                                                                                                                                                                                               |
| data.recipient.1.contactPoint.type                | string                                | const (`"ContactPoint"`)                                                                                                                                                                                                                                                                    |
| data.recipient.1.contactPoint.name                | string                                | a label for the contactPoint, i.e. 'Work', or 'Home'                                                                                                                                                                                                                                        |
| data.recipient.1.contactPoint.telephone           | string                                | -                                                                                                                                                                                                                                                                                           |
| data.recipient.1.contactPoint.faxNumber           | string                                | -                                                                                                                                                                                                                                                                                           |
| data.recipient.1.contactPoint.email               | string                                | an email address for the item. format (`email`)                                                                                                                                                                                                                                             |
| data.recipient.1.contactPoint.url                 | string                                | primary URL for the item. format (`uri`)                                                                                                                                                                                                                                                    |
| data.recipient.1.email                            | string                                | a valid email address format (`email`)                                                                                                                                                                                                                                                      |
| data.recipient.1.additionalName                   | string                                | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.                                                                                                                                   |
| data.recipient.1.familyName                       | string                                | Last Name of a person. [Family Name](https://schema.org/familyName) <= 50 characters                                                                                                                                                                                                        |
| data.recipient.1.faxNumber                        | string                                | Do people still use fax machines?                                                                                                                                                                                                                                                           |
| data.recipient.1.givenName                        | string                                | First Name of a person                                                                                                                                                                                                                                                                      |
| data.recipient.1.honorificPrefix                  | string                                | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.                                                                                                                                                                                                                            |
| data.recipient.1.honorificSuffix                  | string                                | An honorific title following a person's name like M.D.                                                                                                                                                                                                                                      |
| data.recipient.1.jobTitle                         | array<string>                         | job tiles associated with the item                                                                                                                                                                                                                                                          |
| data.recipient.1.jobTitle (single item)           | string                                | -                                                                                                                                                                                                                                                                                           |
| data.recipient.1.knowsLanguage                    | array<object>                         | languages spoken by the person                                                                                                                                                                                                                                                              |
| data.recipient.1.knowsLanguage.type               | string                                | const (`"Language"`)                                                                                                                                                                                                                                                                        |
| data.recipient.1.knowsLanguage.name               | string                                | the display name of the language                                                                                                                                                                                                                                                            |
| data.recipient.1.knowsLanguage.additionalName     | string                                | BCP 47 language code                                                                                                                                                                                                                                                                        |
| data.recipient.1.name                             | string                                | Full name of the person.                                                                                                                                                                                                                                                                    |
| data.recipient.1.telephone                        | string                                | Primary phone number.                                                                                                                                                                                                                                                                       |
| data.recipient.1.worksFor                         | string                                | Organizations the person works for.                                                                                                                                                                                                                                                         |
| data.originatingSystem | object | the original system where this item was created.  Can be of type Thing or any sub-type. |
| data.agent.givenName | string | first name |
| data.agent.familyName | string | last name |
| data.agent.sameAs | object | external system identifiers |
| data.agent.sameAs.amcecrmid | string | AMCE CRM ID |
| data.agent.sameAs.salesForceId | string | Salesforce ID |
| data.propertyListing.addressCountry | string | country |
| data.propertyListing.listingPrice | object | listing price details |
| data.propertyListing.listingPrice.type | string | const (`"PriceSpecification"`) |
| data.propertyListing.listingPrice.price | number | listing price |
| data.propertyListing.listingPrice.priceCurrency | string | currency code |
| data.event.description | string | event description |
| data.event.subEvents.type | string | sub-event type |
| data.event.subEvents.name | string | sub-event name |
| data.event.subEvents.id | string | sub-event identifier |
| data.event.subEvents.url | string | sub-event URL |
| data.event.subEvents.contactGroup | array | contact groups |
| data.event.subEvents.contactGroup.type | string | contact group type |
| data.event.subEvents.contactGroup.name | string | contact group name |
| data.originatingSystem.type | string | originating system type |
| data.originatingSystem.name | string | originating system name |
| data.originatingSystem.description | string | originating system description |
| data.originatingSystem.url | string | originating system URL |

### Headers

| Name              | Type   | Description                                                                                                                                                                                                                                                                                               |
| ----------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (root)            | object | -                                                                                                                                                                                                                                                                                                         |
| time              | string | date & time the event was produced format (`date-time`)                                                                                                                                                                                                                                                   |
| agent             | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient format (`uri`)                                                                                                               |
| instrument        | string | the app or service that produced the event on behalf of the agent/user format (`uri`)                                                                                                                                                                                                                     |
| source            | string | a copy of the event was sent to the source(s). format (`uri`)                                                                                                                                                                                                                                             |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source format (`uri`) |
| id                | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. format (`uri`)                                                                             |
| @id               | string | format (`uri`)                                                                                                                                                                                                                                                                                            |

### Tools

- [Mock Data Generator](/tools/mock-data-generator)
- [Schema Validator](/tools/validate)
