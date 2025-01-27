---
title: listing#delete
---
## Message

*a PropertyListing is deleted*

Delete events may happen when a listing has been removed and should not exist in a 3rd party system. In these instances, the listing should be deleted and no longer display. The listing is “deleted”. Here are some examples where a delete event would be used.


*DELETED - A listing that is deleted is no longer available in the MLS system*

*ON HOLD Status- A listing that is “on hold” status is no longer available in the MLS to show*

*ZAPPED- A listing that is modified in admin to a status of Zapped is no longer available to display on the web site*

*NO LONGER A COMPANY LISTING - A listing that is no longer a company listing is not deleted, it is simply not valid for Reflex export any longer*

*MLS IS NO LONGER VALID - When an MLS is no longer connected to the website, the listings will disappear from the Reflex export process*

*NON-DISCLOSURE- A listing from a non disclosure state is sold and is no longer available to display on the website*

### Payload Example(s) (generated)

```json
{
  "topic":"realestate/listing#delete",
  "recipient":"https://pod.bhhs.hsfaffiliates.com/profile/card#me",
  "data":{
          "type":"DeleteAction",
          "object":{
          "type":"PropertyListing",
          "listingId":302302302,
          "deleted":true
          },
          "instrument":{
          "type":"RealEstateWebsite",
          "url":"https://bhhs.com/profile/card#me"
          }
  },
  "time":"2024-12-18T12:26:54.0782681-08:00",
  "agent":"Constellation 1",
  "instrument":"Trio"
}
```



### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/listing#delete"`)  |
| data | object | - |
| data.type | string | const (`"DeleteAction"`)  |
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
| data.object.deleted | bool | listing status |
| data.instrument |  string&lt;uri&gt;  | data instrument |
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


