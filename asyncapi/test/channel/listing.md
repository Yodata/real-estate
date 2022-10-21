---
title: listing
---

## Operations### SUB `listing` Operation

Accepts **one of** the following messages:

#### Message `listing#update`

*a PropertyListing is created or updated*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/listing#update",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "UpdateAction",
    "object": {
      "type": "PropertyListing",
      "addressCountry": "US",
      "addressLocality": "Gotham City",
      "addressRegion": "New Jersey",
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
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `listing#delete`

*a PropertyListing is deleted*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/listing#delete",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "DeleteAction",
    "object": {
      "type": "PropertyListing",
      "url": "https://www.example.com/Gotham-Properties-NJ001/homes-for-sale/1007-Mountain-Gate-Road-Gotham-City-NJ-10007-187440425"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|




