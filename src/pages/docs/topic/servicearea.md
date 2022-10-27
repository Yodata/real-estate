---
title: servicearea
menu: Topics
route: /topic/servicearea
---

## servicearea



### publishing servicearea events
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


### receiving servicearea events

| Event | Description |
| :---- | :---------- |
| [realestate/servicearea#create](#create) | service area created |
| [realestate/servicearea#update](#update) | service area update |
| [realestate/servicearea#delete](#delete) | ServiceArea (data.object) has been deleted.  Identifier is required. |


---
## create
```
realestate/servicearea#create
```

service area created



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
| data | object! | event payload, typically an Action <br/>RANGE: [CreateAction](/types/CreateAction) |
| data.type | * |   |
| data.object | [ServiceArea](/types/ServiceArea) | an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)  |

### Example
```json
{
  "topic": "realestate/servicearea#create",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "CreateAction",
    "object": {
      "type": "ServiceArea",
      "kind": "PostalCode",
      "identifier": {
        "bhhsESAId": "string"
      },
      "addressLocality": "Woodland Hills",
      "postalCode": "91371",
      "addressRegion": "CA",
      "addressCountry": "US",
      "addressCounty": "Los Angeles",
      "provider": {
        "type": "RealEstateOrganization",
        "id": "https://org.example.com/profile/card#me"
      },
      "additionalProperty": {
        "relocationOffice": {
          "type": "RealEstateOffice",
          "id": "https://org.example.com/profile/card#me"
        },
        "weight": 0,
        "officeInPostalCode": true,
        "sortOrder": 0,
        "sentToConsumerSite": true,
        "sentToCompanyLocator": true,
        "sentToReferralSolutions": true,
        "luxuryPriceMinimum": {
          "type": "PriceSpecification",
          "price": 1000000,
          "priceCurrency": "USD"
        }
      }
    }
  }
}
```


[back to top](#)

---
## update
```
realestate/servicearea#update
```

service area update



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
| data | object! | event payload, typically an Action  |
| data.type | * |   |
| data.object | [ServiceArea](/types/ServiceArea) | an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)  |

### Example
```json
{
  "topic": "realestate/servicearea#update",
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
      "type": "ServiceArea",
      "kind": "PostalCode",
      "identifier": {
        "bhhsESAId": "string"
      },
      "addressLocality": "Woodland Hills",
      "postalCode": "91371",
      "addressRegion": "CA",
      "addressCountry": "US",
      "addressCounty": "Los Angeles",
      "provider": {
        "type": "RealEstateOrganization",
        "id": "https://org.example.com/profile/card#me"
      },
      "additionalProperty": {
        "relocationOffice": {
          "type": "RealEstateOffice",
          "id": "https://org.example.com/profile/card#me"
        },
        "weight": 0,
        "officeInPostalCode": true,
        "sortOrder": 0,
        "sentToConsumerSite": true,
        "sentToCompanyLocator": true,
        "sentToReferralSolutions": true,
        "luxuryPriceMinimum": {
          "type": "PriceSpecification",
          "price": 1000000,
          "priceCurrency": "USD"
        }
      }
    }
  }
}
```


[back to top](#)

---
## delete
```
realestate/servicearea#delete
```

ServiceArea (data.object) has been deleted.  Identifier is required.



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
| data | object! | event payload, typically an Action  |
| data.type | * |   |
| data.object | object |  <br/>RANGE: [ServiceArea](/types/ServiceArea) |

### Example
```json
{
  "topic": "realestate/servicearea#delete",
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
      "type": "ServiceArea",
      "identifier": {
        "bhhsESAId": "abcde"
      }
    }
  }
}
```


[back to top](#)
