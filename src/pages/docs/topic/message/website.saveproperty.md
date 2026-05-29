---
title: website#saveproperty
---

## Message

\_website user saves a property

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/website#saveproperty",
  "time": "2020-06-18T18:30:49Z",
  "agent": "https://bhhs.example.com/profile/card#me",
  "instrument": "https://smarter-agent.example.com/profile/card#me",
  "source": "https://{agentid}.example.com/profile/card#me",
  "recipient": "https://bhhs.hsfaffiliates.com/profile/card#me",
  "identifier": "9e1067ce-ebab-41f4-9b52-26cf2232097b",
  "data": {
    "type": "SaveAction",
    "identifier": "nwurogb34tnoi3t",
    "agent": {
      "type": "Contact",
      "name": "Bill Bailey",
      "givenName": "Amy",
      "familyName": "Page",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "dateCreated": "2026-05-28T18:22:14.203Z",
      "dateModified": "2026-05-28T19:15:59.313Z",
      "additionalProperty": {
        "userPath": "xxx",
        "redPreferredContactMethod": "No Preference",
        "redPreferredTime": "",
        "preferredLanguage": "en-US",
        "preferredCurrency": "USD",
        "preferredUnits": "Imperial",
        "marketingViaEmailOptIn": false,
        "marketingViaSmsOptIn": false
      },
      "identifier": {
        "sausID": "216bf670-0777-43db-9d73-c3377d280fe4",
        "redContact_Guid": "201ff92c-e3ad-43b1-8a01-5555168cb0ae",
        "hsfconsumerid": "5763a3dd-87cd-41e9-9308-6ceac2051fc3"
      },
      "sameAs": {
        "cregcontactkey": "14451413",
        "redContact_Guid": "60e426ef-0b9b-4dd1-b26b-808726b559a0"
      },
      "contactPoint": [
        {
          "type": "ContactPoint",
          "kind": "EmailAddress",
          "name": "primary",
          "email": "apage528@protonmail.com"
        }
      ]
    },
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com",
      "name": "Office Website"
    },
    "object": {
      "type": "PropertyListing",
      "redListingKey": "9a0b7555-cd92-473b-b312-3c5b717afe97",
      "originatingSystemName": "GOTHAM-MLS",
      "originatingSystemKey": "12345",
      "listingStatus": "Active",
      "url": "https://{company-website-url}/{path-to-listing}",
      "streetAddress": "1007 Mountain Gate Rd",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "addressCounty": "Marion",
      "addressSubdivision": "Amber Ridge",
      "listingTypeName": "Residential",
      "propertyType": "Single Family",
      "propertySubType": "Traditional",
      "daysOnMarket": 6,
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      },
      "purchaseContractDate": "2026-05-22T00:00:00.000Z",
      "listingAgent": {
        "type": "RealEstateAgent",
        "name": "Jake Stiles",
        "givenName": "Jake",
        "familyName": "Stiles",
        "email": "jake@cbstiles.com"
      },
      "listingOffice": {
        "type": "RealEstateOffice",
        "identifier": "STIL01",
        "name": "Coldwell Banker Stiles",
        "telephone": "3178839461"
      },
      "yearBuilt": 2002,
      "numberOfBedrooms": "4",
      "numberOfBathrooms": "2.5",
      "numberOfGarageSpaces": 2,
      "lotSize": {
        "type": "QuantitativeValue",
        "value": 0.47
      },
      "description": "Welcome to this spacious 4-bedroom, 2.5-bath home tucked away on a quiet cul-de-sac!",
      "additionalProperty": {
        "heating": "Gas Heat",
        "cooling": "Central Air",
        "exteriorFeatures": "Patio",
        "interiorFeatures": "Breakfast Bar, Eat-in Kitchen, Smart Thermostat, Walk-In Closet(s)",
        "stories": 2,
        "lotSizeDimensions": "0.00 x 0.00"
      },
      "dateCreated": "2026-05-28T19:16:00.415Z",
      "dateModified": "2026-05-28T19:16:00.415Z"
    },
    "description": "ExternalUpdate PropertyAdded Updated",
    "leadOwner": {
      "type": "RealEstateWebsite",
      "name": "Office Website",
      "id": "https://IN302.bhhs.hsfaffiliates.com/profile/card#me"
    },
    "originatingSystem": {
      "type": "SoftwareApplication",
      "name": "RDesk",
      "description": "User Created.",
      "url": "http://www.rdeskwebsite.com/"
    },
    "event": {
      "type": "Event",
      "name": "Property Showing  64 Buttercup Lane, South Grafton, MA, USA",
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
    }
  },
  "@id": "https://creg.bhhs.hsfaffiliates.com/publish/9f388267cfa5409e8f334e321f85a537",
  "id": "https://creg.bhhs.hsfaffiliates.com/publish/9f388267cfa5409e8f334e321f85a537",
  "timestamp": 1779995761589,
  "originalRecipient": "https://bhhs.hsfaffiliates.com/profile/card#me",
  "@to": "https://listtracwebsite.bhhs.hsfaffiliates.com/profile/card#me"
}
```

### Payload
| Name                                                                  | Type                | Description |
| --------------------------------------------------------------------- | ------------------- | ----------- |
| (root)                                                                | object              | - |
| topic                                                                 | string!             | const (`"realestate/website#saveproperty"`) |
| time                                                                  | string<date-time> ! | date & time the event was produced |
| agent                                                                 | string<uri> !       | event publisher |
| instrument                                                            | string<uri> !       | the application that produced the event |
| source                                                                | string<uri>         | associated RealEstate{Agent,Office,Organization} |
| recipient                                                             | string<uri>         | event recipient |
| identifier                                                            | string              | unique identifier |
| timestamp                                                             | number              | event timestamp |
| originalRecipient                                                     | string              | format (`uri`) |
| @id                                                                   | string              | format (`uri`) |
| id                                                                    | string              | format (`uri`) |
| @to                                                                   | string              | format (`uri`) |
| data                                                                  | object              | An action performed by a direct agent and indirect participants upon a direct object |
| data.type                                                             | string!             | const (`"SaveAction"`) |
| data.identifier                                                       | string              | unique identifier |
| data.description                                                      | string              | data description |
| data.agent                                                            | object!             | the website user RANGE: Contact, Person |
| data.agent.type                                                       | string              | allowed (`"Person"`, `"Contact"`) |
| data.agent.name                                                       | string              | full name |
| data.agent.givenName                                                  | string              | first name |
| data.agent.familyName                                                 | string              | last name |
| data.agent.telephone                                                  | string              | telephone number |
| data.agent.email                                                      | string              | format (`email`) |
| data.agent.dateCreated                                                | string              | date and time the contact was created |
| data.agent.dateModified                                               | string              | date and time the contact was modified |
| data.agent.identifier                                                 | object              | agent identifier |
| data.agent.identifier.sausID                                          | string              | SAUS identifier |
| data.agent.identifier.redContact_Guid                                 | string              | RED contact GUID |
| data.agent.identifier.hsfconsumerid                                   | string              | HSF consumer identifier |
| data.agent.sameAs                                                     | object              | vendor specific identifiers |
| data.agent.sameAs.cregcontactkey                                      | string              | CREG contact key |
| data.agent.sameAs.redContact_Guid                                     | string              | RED contact GUID |
| data.agent.contactPoint                                               | array               | contact points for the user |
| data.agent.contactPoint.0.type                                        | string              | const (`"ContactPoint"`) |
| data.agent.contactPoint.0.kind                                        | string              | contact point kind |
| data.agent.contactPoint.0.name                                        | string              | contact point label |
| data.agent.contactPoint.0.email                                       | string              | format (`email`) |
| data.agent.additionalProperty                                         | object              | additional property for the website user |
| data.agent.additionalProperty.userPath                                | string              | user path |
| data.agent.additionalProperty.redPreferredContactMethod               | string              | preferred contact method |
| data.agent.additionalProperty.redPreferredTime                        | string              | preferred contact time |
| data.agent.additionalProperty.preferredLanguage                       | string              | preferred language |
| data.agent.additionalProperty.preferredCurrency                       | string              | preferred currency |
| data.agent.additionalProperty.preferredUnits                          | string              | preferred units |
| data.agent.additionalProperty.marketingViaEmailOptIn                  | boolean             | true or false |
| data.agent.additionalProperty.marketingViaSmsOptIn                    | boolean             | true or false |
| data.instrument                                                       | object              | website or mobile application RANGE: RealEstateWebsite, MobileApplication, Thing |
| data.instrument.type                                                  | string              | const (`"RealEstateWebsite"`) |
| data.instrument.url                                                   | string              | format (`uri`) |
| data.instrument.name                                                  | string              | instrument name |
| data.object                                                           | object!             | the property that was saved RANGE: PropertyListing |
| data.object.type                                                      | string              | const (`"PropertyListing"`) |
| data.object.redListingKey                                             | string              | RED listing key |
| data.object.originatingSystemName                                     | string              | originating system name |
| data.object.originatingSystemKey                                      | string              | originating system key |
| data.object.listingStatus                                             | string              | listing status |
| data.object.url                                                       | string              | property listing URL |
| data.object.streetAddress                                             | string              | street address |
| data.object.addressRegion                                             | string              | state or region |
| data.object.addressLocality                                           | string              | city or locality |
| data.object.postalCode                                                | string              | postal code |
| data.object.addressCountry                                            | string              | country |
| data.object.addressCounty                                             | string              | county |
| data.object.addressSubdivision                                        | string              | subdivision or neighborhood |
| data.object.listingTypeName                                           | string              | listing type name |
| data.object.propertyType                                              | string              | property type |
| data.object.propertySubType                                           | string              | property subtype |
| data.object.daysOnMarket                                              | number              | number of days on market |
| data.object.listingPrice                                              | object              | listing price details |
| data.object.listingPrice.type                                         | string              | const (`"PriceSpecification"`) |
| data.object.listingPrice.priceCurrency                                | string              | use ISO4217 |
| data.object.listingPrice.price                                        | number              | listing price |
| data.object.purchaseContractDate                                      | string              | purchase contract date |
| data.object.listingAgent                                              | object              | listing agent details |
| data.object.listingAgent.type                                         | string              | const (`"RealEstateAgent"`) |
| data.object.listingAgent.name                                         | string              | listing agent name |
| data.object.listingAgent.givenName                                    | string              | listing agent first name |
| data.object.listingAgent.familyName                                   | string              | listing agent last name |
| data.object.listingAgent.email                                        | string              | format (`email`) |
| data.object.listingOffice                                             | object              | listing office details |
| data.object.listingOffice.type                                        | string              | const (`"RealEstateOffice"`) |
| data.object.listingOffice.identifier                                  | string              | listing office identifier |
| data.object.listingOffice.name                                        | string              | listing office name |
| data.object.listingOffice.telephone                                   | string              | listing office telephone number |
| data.object.yearBuilt                                                 | number              | year built |
| data.object.numberOfBedrooms                                          | string              | number of bedrooms |
| data.object.numberOfBathrooms                                         | string              | number of bathrooms |
| data.object.numberOfGarageSpaces                                      | number              | number of garage spaces |
| data.object.lotSize                                                   | object              | lot size details |
| data.object.lotSize.type                                              | string              | const (`"QuantitativeValue"`) |
| data.object.lotSize.value                                             | number              | lot size value |
| data.object.description                                               | string              | listing description |
| data.object.additionalProperty                                        | object              | additional property details |
| data.object.additionalProperty.heating                                | string              | heating details |
| data.object.additionalProperty.cooling                                | string              | cooling details |
| data.object.additionalProperty.exteriorFeatures                       | string              | exterior features |
| data.object.additionalProperty.interiorFeatures                       | string              | interior features |
| data.object.additionalProperty.stories                                | number              | number of stories |
| data.object.additionalProperty.lotSizeDimensions                      | string              | lot size dimensions |
| data.object.dateCreated                                               | string              | date and time the listing was created |
| data.object.dateModified                                              | string              | date and time the listing was modified |
| data.leadOwner                                                        | object              | lead owner details |
| data.leadOwner.type                                                   | string              | lead owner type |
| data.leadOwner.name                                                   | string              | lead owner name |
| data.leadOwner.id                                                     | string              | format (`uri`) |
| data.event.type                                                       | object              | type of the event e.g Campaign |
| data.event.name                                                       | string              | any string name |
| data.event.id                                                         | string              | format (`uri`) |
| data.event.url                                                        | string              | url of the event |
| data.event.subEvents                                                  | array               | array of subEvents |
| data.originatingSystem                                                | object              | the original system where this item was created. Can be of type Thing or any sub-type |

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
