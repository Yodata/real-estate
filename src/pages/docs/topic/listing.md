---
 listing
menu: Topics
route: /topic/listing
---

# listing



### publishing listing events
Publish events by HTTP POST to your own pods `/publish/` endpoint including the topic, recipient and message body.]



### Example
```http
POST /publish/ HTTP/1.1
Host: # { your pod host url }
x-api-key: # { your api key }
Content-Type: application/json

{
  "topic": "https://realestate/{topic}#{event}",
  "recipient": # the publishing pod,
  "@context": # optional transformation context,
  "data": {
    "type": "{Action}
  }

}
```


### receiving listing events

| Event | Description |
| :---- | :---------- |
| [realestate/listing#update](#update) | a PropertyListing is created or updated |
| [realestate/listing#delete](#delete) | a PropertyListing is deleted |


---
## update
```
realestate/listing#update
```

a PropertyListing is created or updated



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | the item (object) has been updated by user (agent)  |
| data.type | string! | const UpdateAction  |
| data.object | object | a real estate property listed for sale <br/>RANGE: [PropertyListing](/types/PropertyListing) |

### Example
```json
{
  "topic": "realestate/listing#update",
  "time": "2022-10-12T01:13:43Z",
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
      "closeDate": "2022-10-12T01:13:43Z",
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
      "listingContractDate": "2022-10-12T01:13:43Z",
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
      "purchaseContractDate": "2022-10-12T01:13:43Z",
      "stories": 2,
      "streetAddress": "1007 Mountain Gate Rd",
      "universalPropertyId": "US-04015-N-R-11022331-N",
      "url": "https://www.example.com/homedetails/1007-Mountain-Gate-Rd-Gotham-City-Gotham/10007",
      "yearBuilt": 1988
    }
  }
}
```


[back to top](#)

---
## delete
```
realestate/listing#delete
```

a PropertyListing is deleted



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | object is removed by the agent from the targetCollection <br/>RANGE: [DeleteAction](/types/DeleteAction) |
| data.type | string! | the action type  |
| data.object | object | a real estate property listed for sale <br/>RANGE: [PropertyListing](/types/PropertyListing) |

### Example
```json
{
  "topic": "realestate/listing#delete",
  "time": "2022-10-12T01:13:43Z",
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


[back to top](#)
