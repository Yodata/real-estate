---
title: website#shareproperty
---
## Message

*a website user shares a property listing*

A website user (agent) shared a (PropertyListing)[/types/PropertyListing]
with the recipient (a Person or Audience).


### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#shareproperty",
  "data": {
    "type": "ShareAction",
    "agent": {
      "type": "string",
      "affiliation": [
        "https://example.com/profile/card#me"
      ],
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
      "jobTitle": [
        "Chief Data Officer",
        "Sanitation Engineer"
      ],
      "knowsLanguage": [
        {
          "type": "Language",
          "name": "English",
          "additionalName": "en-us"
        }
      ],
      "name": "string",
      "telephone": "+15558675309",
      "worksFor": "string"
    },
    "object": {
      "type": "PropertyListing",
      "addressCountry": "CA",
      "addressLocality": "Gotham City",
      "addressRegion": "NJ",
      "buyerAgent": {
        "email": "butch.byers@example.com",
        "identifier": {
          "agentKey": "xxxx"
        },
        "name": "Butch Byers",
        "type": "RealEstateAgent"
      },
      "buyerOffice": {
        "email": "gcr@example.com",
        "identifier": {
          "officeKey": "grc1"
        },
        "name": "Gotham City Real Estate",
        "type": "RealEstateOffice"
      },
      "closeDate": "2019-08-24T14:15:22Z",
      "image": [
        {
          "type": "ImageObject",
          "id": "http://user.example.com/public/logo/image.jpg",
          "name": "image.jpg",
          "encodingFormat": "image/jpeg",
          "about": "http://user.example.com/profile/card#me",
          "url": "http://user.example.com/public/profile/image.jpg"
        }
      ],
      "internetAddressDisplayYN": "Y",
      "latitude": 40.75,
      "listingAgent": {
        "type": "RealEstateAgent",
        "name": "Lori Listagent",
        "telephone": "1-252-574-0160",
        "email": "lorilistagent@example.com"
      },
      "listingContractDate": "2019-08-24T14:15:22Z",
      "listingId": "GOTHAM-MLS+12345",
      "listingOffice": {
        "name": "Gotham City Real Estate",
        "type": "RealEstateOffice"
      },
      "listingOriginatingSystem": {
        "identifier": {
          "bhhsmlsid": "xxxx",
          "resoouid": "not-yet-available"
        },
        "name": "MLSListings",
        "type": "MultipleListingService"
      },
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 75000,
        "priceCurrency": "USD"
      },
      "listingStatus": "Active",
      "livingArea": {
        "type": "QuantitativeValue",
        "unitCode": "SqFt",
        "unitText": "Square Feet",
        "value": 1500
      },
      "longitude": 73.98,
      "lotSize": {
        "type": "QuantitativeValue",
        "unitCode": "AC",
        "unitText": "Acres",
        "value": 0.5
      },
      "numberOfBathrooms": "2",
      "numberOfBedrooms": "3",
      "numberOfRooms": "7",
      "originatingSystemKey": 12345,
      "originatingSystemName": "GOTHAM-MLS",
      "postalCode": "10010",
      "propertySubType": "ApartmentPropertyType",
      "propertyType": "RESI",
      "purchaseContractDate": "2019-08-24T14:15:22Z",
      "stories": 2,
      "streetAddress": "1007 Mountain Gate Rd",
      "universalPropertyId": "US-04015-N-R-11022331-N",
      "url": "https://www.example.com/homedetails/1007-Mountain-Gate-Rd-Gotham-City-Gotham/10007",
      "yearBuilt": 1988
    },
  "event": {
    "type": "EventName",
    "name": "Any event name",
    "id": "1d2995307f2c48ae9543caf586f43f9b",
    "url": "https://user.example.com/mentor/example-name/cid-example123/oh/123-example-street/pid-example112233",
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
  },
    "recipient": {
      "type": "Person",
      "name": "John Doe",
      "email": "user@example.com",
      "url": "http://facebook.com/1234567890",
      "instrument": {
        "type": "Organization",
        "name": "Facebook"
      }
    }
  }
}
```



### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/website#shareproperty"`)  |
| data | object | - |
| data.type | string | const (`"ShareAction"`)  |
| data.agent | object | - |
| data.agent.type | string | - |
| data.agent.affiliation | array<string> | An organization that this person is affiliated with |
| data.agent.affiliation (single item) | string |  format (`uri`) |
| data.agent.address | array<object> | - |
| data.agent.address.type | string | const (`"PostalAddress"`)  |
| data.agent.address.streetAddress | string | the street address <= 75 characters |
| data.agent.address.postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| data.agent.address.addressRegion | string | abbreviated state or province |
| data.agent.address.addressLocality | string | City, Township. <= 50 characters |
| data.agent.address.postalCode | string | Zip/Post Code <= 12 characters |
| data.agent.address.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| data.agent.address.addressCounty | string | County |
| data.agent.address.addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |
| data.agent.birthDate | string | date of birth. format (`date`) |
| data.agent.contactPoint | array<object> | contact points for the person |
| data.agent.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.agent.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.agent.contactPoint.telephone | string | - |
| data.agent.contactPoint.faxNumber | string | - |
| data.agent.contactPoint.email | string | an email address for the item. format (`email`) |
| data.agent.contactPoint.url | string | primary URL for the item. format (`uri`) |
| data.agent.email | string | a valid email address format (`email`) |
| data.agent.additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| data.agent.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) <= 50 characters |
| data.agent.faxNumber | string | Do people still use fax machines? |
| data.agent.givenName | string | First Name of a person |
| data.agent.honorificPrefix | string | An honorific prefix preceding a Person's name such as Dr/Mrs/Mr. |
| data.agent.honorificSuffix | string | An honorific title following a person's name like M.D. |
| data.agent.jobTitle | array<string> | job tiles associated with the item |
| data.agent.jobTitle (single item) | string | - |
| data.agent.knowsLanguage | array<object> | languages spoken by the person |
| data.agent.knowsLanguage.type | string | const (`"Language"`)  |
| data.agent.knowsLanguage.name | string | the display name of the language |
| data.agent.knowsLanguage.additionalName | string | BCP 47 language code |
| data.agent.name | string | Full name of the person. |
| data.agent.telephone | string | Primary phone number. |
| data.agent.worksFor | string | Organizations the person works for. |
| data.object | object | a real estate property listed for sale |
| data.object.type | string | allowed (`"PropertyListing"`)  |
| data.object.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| data.object.addressLocality | string | City, Township. <= 50 characters |
| data.object.addressRegion | string | abbreviated state or province |
| data.object.buyerAgent | object | the buyer's RealEstateAgent |
| data.object.buyerOffice | object | the buyer's RealEstateOffice |
| data.object.closeDate | string | With for-sale listings, the date the purchase agreement was fulfilled. With lease listings, the date the requirements were fulfilled, such as contract and/or deposit. format (`date-time`) |
| data.object.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.image.0 (index) | object allOf | - |
| data.object.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.image.0.0.0 (allOf item) | object | - |
| data.object.image.0.0.0.type | string | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`) |
| data.object.image.0.0.0.@id | string | the liked data uri for the Thing format (`uri`) |
| data.object.image.0.0.0 (property names) | - |  pattern (`^[a-z@$][a-zA-Z0-9-_]+$`) |
| data.object.image.0.0.1 (allOf item) | - | - |
| data.object.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.image.0.0.1.id | string | the URL to access the item. format (`uri`) |
| data.object.image.0.0.1.name | string | the file name of the object. |
| data.object.image.0.0.1.encodingFormat | string | MIME type |
| data.object.image.0.0.1.about | string | URI to the subject of the image or logo format (`uri`) |
| data.object.image.0.0.1.url | string | URL of the image content format (`uri`) |
| data.object.image.0.1 (allOf item) | - | - |
| data.object.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.object.image.0.1.id | any | - |
| data.object.image.0.1.name | any | - |
| data.object.image.0.1.encodingFormat | any | - |
| data.object.internetAddressDisplayYN | string | allowed (`"Y"`, `"N"`)  |
| data.object.latitude | number | The latitude of a location. |
| data.object.listingAgent | object | the agent/broker representing the seller in a real estate transaction |
| data.object.listingContractDate | string | The effective date of the agreement between the seller and the seller's broker. format (`date-time`) |
| data.object.listingId | string | the local identifier for the listing |
| data.object.listingOffice | object | the listing office |
| data.object.listingOriginatingSystem | object | The place where the item is originally input by the user. |
| data.object.listingPrice | object | - |
| data.object.listingStatus | string | allowed (`"Active"`, `"Pending"`, `"Sold"`, `"Canceled"`, `"Prelisted"`, `"OffMarket"`, `"Private"`)  |
| data.object.livingArea | object | property indoor space |
| data.object.longitude | number | The longitude of a location. |
| data.object.lotSize | object | outdoor space minValue, maxValue |
| data.object.numberOfBathrooms | string | the number of bathrooms |
| data.object.numberOfBedrooms | string | the number of bedrooms |
| data.object.numberOfRooms | string | the total number of rooms in the building |
| data.object.originatingSystemKey | string | the listing identifier from the original MLS, aka MLSID. |
| data.object.originatingSystemName | string | the name of the MLS where the listing was originally input |
| data.object.postalCode | string | Zip/Post Code <= 12 characters |
| data.object.propertySubType | string | allowed (`"ApartmentPropertyType"`, `"BoatSlipPropertyType"`, `"CabinPropertyType"`, `"CondominiumPropertyType"`, `"DeededParkingPropertyType"`, `"DuplexPropertyType"`, `"FarmPropertyType"`, `"ManufacturedHomePropertyType"`, `"ManufacturedOnLandPropertyType"`, `"MobileHomePropertyType"`, `"OwnYourOwnPropertyType"`, `"QuadruplexPropertyType"`, `"RanchPropertyType"`, `"SingleFamilyPropertyType"`, `"StockCooperativePropertyType"`, `"TimesharePropertyType"`, `"TownhousePropertyType"`, `"TriplexPropertyType"`, `"AgriculturePropertyType"`, `"BusinessPropertyType"`, `"HotelMotelPropertyType"`, `"IndustrialPropertyType"`, `"MixedUsePropertyType"`, `"MultiFamilyPropertyType"`, `"OfficePropertyType"`, `"RetailPropertyType"`, `"UnimprovedLandPropertyType"`, `"WarehousePropertyType"`) RESO property sub-type (see range for allowed values) |
| data.object.propertyType | string | allowed (`"RESI"`, `"RLSE"`, `"RINC"`, `"LAND"`, `"MOBI"`, `"FARM"`, `"COMS"`, `"COML"`, `"BUSO"`) RESO property type (see range for allowed values) 4 characters |
| data.object.purchaseContractDate | string | With for-sale listings, the date an offer was accepted and the listing was no longer on market. With lease listings this may represent a meeting of the minds to lease, but some contractual requirements are yet to be fulfilled, such as contract signing or receipt of the deposit. format (`date-time`) |
| data.object.stories | number | he number of floors in the property |
| data.object.streetAddress | string | the street address <= 75 characters |
| data.object.universalPropertyId | string | The Universal Property Identifier is a unique identifier for all real property in the US and Canada.  It is based on country and local identification methods and is limited to real property.  For cases such as shares of real property, units, and other more granular cases, please utilize the UniversalPropertySubId. |
| data.object.url | string | URL of the item. format (`uri`) |
| data.object.yearBuilt | number | the year the structure was created |
| data.event.type         | object | type of the event e.g Campaign                                                  |
| data.event.name         | string | any string name                                                                 |
| data.event.id           | string | format (`uri`)                                                                  |
| data.event.url          | string | url of the event                                                                |
| data.event.contactGroup | array  | array of contacts                                                               |
| data.recipient | object | - |
| data.recipient.type | string | allowed (`"Person"`, `"Audience"`)  |
| data.recipient.name | string | The name of the person or audience to whom the property listing was shared. |
| data.recipient.email | string | The email address of the person or audience to whom the property listing was shared. format (`email`) |
| data.recipient.url | string | A URL to the shared item if available. format (`uri`) |
| data.recipient.instrument | object | The instrument used to share the property listing. |
| data.recipient.instrument.type | string | const (`"Organization"`)  |
| data.recipient.instrument.name | string | The name of the instrument used to share the property listing. |

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

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


