---
title: website#askquestion
---
## Message

*website user asks a question*

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#askquestion",
  "data": {
    "type": "AskAction",
    "agent": {
      "type": "Person",
      "name": "string",
      "givenName": "string",
      "familyName": "string",
      "email": "user@example.com",
      "telephone": "string",
      "identifier": {
        "bhhsconsumerid": "12345"
      },
      "sameAs": {
        "amcecrmid": 1234567,
        "salesForceId": "parsing"
      },
      "contactPoint": {
        "type": "ContactPoint",
        "name": "Work",
        "telephone": "555-555-5555",
        "faxNumber": "555-555-5555",
        "email": "bob@example.com",
        "url": "https://www.facebook.com/hallandoates"
      },
      "additionalProperties": {
        "workingWithAgent": true
      }
    },
    "object": {
      "type": "Question",
      "text": "Populus debet control notitia sua"
    },
    "recipient": {
      "type": "RealEstateAgent",
      "name": "Randy Real Estate",
      "id": "https://8675309.example.com/profile/card#me"
    },
    "about": {
      "$ref": "../../example-propertylisting.yaml"
    }
  }
}
```



### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/website#askquestion"`)  |
| data | object | - |
| data.type | string | const (`"AskAction"`)  |
| data.agent | object | a website user/visitor |
| data.agent.type | string | allowed (`"Person"`, `"Contact"`)  |
| data.agent.name | string | - |
| data.agent.givenName | string | - |
| data.agent.familyName | string | - |
| data.agent.email | string |  format (`email`) |
| data.agent.telephone | string | - |
| data.agent.identifier | object |  1 properties |
| data.agent.sameAs | string | vendor specific identifier for the user can be shared with other vendors to identify the user format (`uri`) |
| data.agent.contactPoint | object | A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. >= 3 properties |
| data.agent.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.agent.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.agent.contactPoint.telephone | string | - |
| data.agent.contactPoint.faxNumber | string | - |
| data.agent.contactPoint.email | string | an email address for the item. format (`email`) |
| data.agent.contactPoint.url | string | primary URL for the item. format (`uri`) |
| data.agent.additionalProperties | object | additional properties for the website user |
| data.agent.additionalProperties.workingWithAgent | boolean | - |
| data.object | object | A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document. |
| data.object.type | string | const (`"Question"`)  |
| data.object.text | string | - |
| data.recipient | object | the agent being asked |
| data.about | object | a real estate property listed for sale |
| data.about.type | string | allowed (`"PropertyListing"`)  |
| data.about.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| data.about.addressLocality | string | City, Township. <= 50 characters |
| data.about.addressRegion | string | abbreviated state or province |
| data.about.buyerAgent | object | the buyer's RealEstateAgent |
| data.about.buyerOffice | object | the buyer's RealEstateOffice |
| data.about.closeDate | string | With for-sale listings, the date the purchase agreement was fulfilled. With lease listings, the date the requirements were fulfilled, such as contract and/or deposit. format (`date-time`) |
| data.about.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.about.image.0 (index) | object allOf | - |
| data.about.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.about.image.0.0.0 (allOf item) | object | - |
| data.about.image.0.0.0.type | string | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`) |
| data.about.image.0.0.0.@id | string | the liked data uri for the Thing format (`uri`) |
| data.about.image.0.0.0 (property names) | - |  pattern (`^[a-z@$][a-zA-Z0-9-_]+$`) |
| data.about.image.0.0.1 (allOf item) | - | - |
| data.about.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.about.image.0.0.1.id | string | the URL to access the item. format (`uri`) |
| data.about.image.0.0.1.name | string | the file name of the object. |
| data.about.image.0.0.1.encodingFormat | string | MIME type |
| data.about.image.0.0.1.about | string | URI to the subject of the image or logo format (`uri`) |
| data.about.image.0.0.1.url | string | URL of the image content format (`uri`) |
| data.about.image.0.1 (allOf item) | - | - |
| data.about.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.about.image.0.1.id | any | - |
| data.about.image.0.1.name | any | - |
| data.about.image.0.1.encodingFormat | any | - |
| data.about.internetAddressDisplayYN | string | allowed (`"Y"`, `"N"`)  |
| data.about.latitude | number | The latitude of a location. |
| data.about.listingAgent | object | the agent/broker representing the seller in a real estate transaction |
| data.about.listingContractDate | string | The effective date of the agreement between the seller and the seller's broker. format (`date-time`) |
| data.about.listingId | string | the local identifier for the listing |
| data.about.listingOffice | object | the listing office |
| data.about.listingOriginatingSystem | object | The place where the item is originally input by the user. |
| data.about.listingPrice | object | - |
| data.about.listingStatus | string | allowed (`"Active"`, `"Pending"`, `"Sold"`, `"Canceled"`, `"Prelisted"`, `"OffMarket"`, `"Private"`)  |
| data.about.livingArea | object | property indoor space |
| data.about.longitude | number | The longitude of a location. |
| data.about.lotSize | object | outdoor space minValue, maxValue |
| data.about.numberOfBathrooms | string | the number of bathrooms |
| data.about.numberOfBedrooms | string | the number of bedrooms |
| data.about.numberOfRooms | string | the total number of rooms in the building |
| data.about.originatingSystemKey | string | the listing identifier from the original MLS, aka MLSID. |
| data.about.originatingSystemName | string | the name of the MLS where the listing was originally input |
| data.about.postalCode | string | Zip/Post Code <= 12 characters |
| data.about.propertySubType | string | allowed (`"ApartmentPropertyType"`, `"BoatSlipPropertyType"`, `"CabinPropertyType"`, `"CondominiumPropertyType"`, `"DeededParkingPropertyType"`, `"DuplexPropertyType"`, `"FarmPropertyType"`, `"ManufacturedHomePropertyType"`, `"ManufacturedOnLandPropertyType"`, `"MobileHomePropertyType"`, `"OwnYourOwnPropertyType"`, `"QuadruplexPropertyType"`, `"RanchPropertyType"`, `"SingleFamilyPropertyType"`, `"StockCooperativePropertyType"`, `"TimesharePropertyType"`, `"TownhousePropertyType"`, `"TriplexPropertyType"`, `"AgriculturePropertyType"`, `"BusinessPropertyType"`, `"HotelMotelPropertyType"`, `"IndustrialPropertyType"`, `"MixedUsePropertyType"`, `"MultiFamilyPropertyType"`, `"OfficePropertyType"`, `"RetailPropertyType"`, `"UnimprovedLandPropertyType"`, `"WarehousePropertyType"`) RESO property sub-type (see range for allowed values) |
| data.about.propertyType | string | allowed (`"RESI"`, `"RLSE"`, `"RINC"`, `"LAND"`, `"MOBI"`, `"FARM"`, `"COMS"`, `"COML"`, `"BUSO"`) RESO property type (see range for allowed values) 4 characters |
| data.about.purchaseContractDate | string | With for-sale listings, the date an offer was accepted and the listing was no longer on market. With lease listings this may represent a meeting of the minds to lease, but some contractual requirements are yet to be fulfilled, such as contract signing or receipt of the deposit. format (`date-time`) |
| data.about.stories | number | he number of floors in the property |
| data.about.streetAddress | string | the street address <= 75 characters |
| data.about.universalPropertyId | string | The Universal Property Identifier is a unique identifier for all real property in the US and Canada.  It is based on country and local identification methods and is limited to real property.  For cases such as shares of real property, units, and other more granular cases, please utilize the UniversalPropertySubId. |
| data.about.url | string | URL of the item. format (`uri`) |
| data.about.yearBuilt | number | the year the structure was created |

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


