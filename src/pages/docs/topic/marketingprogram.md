---
title: marketingprogram
menu: Topics
route: /topic/marketingprogram
---

## marketingprogram



### publishing marketingprogram events
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


### receiving marketingprogram events

| Event | Description |
| :---- | :---------- |
| [realestate/marketingprogram#create](#create) | a marketing program has been created |
| [realestate/marketingprogram#update](#update) | a marketing program has been updated |
| [realestate/marketingprogram#delete](#delete) | a marketing program was deleted |
| [realestate/marketingprogram#memberadd](#memberadd) | a program member was added by the agent |
| [realestate/marketingprogram#memberremove](#memberremove) | a program member was removed by the agent |
| [realestate/marketingprogram#openhouseeventsummary](#openhouseeventsummary) |marketing program for openhouseeventsummary |


---
## create
```
realestate/marketingprogram#create
```

a marketing program has been created



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | the object was created by the agent  |
| data.agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| data.type | string! | CreateAction  |
| data.object | object | A collection of pre-defined activities which take place over a period of time or in a regular, ongoing schedule. <br/>RANGE: [MarketingProgram](/types/MarketingProgram) |
| data.object.status | string | status of object |
| data.object.additionalProperty.campaignType | string | type of Campaign (e.g DigitalAd, Ecard, Flyer ) |
| data.object.additionalProperty.sharingType | string | sharing type of Campaign (e.g --- AutomatedListingProgram, AdBuilderService, Email ) |

### Example
```json
{
  "topic": "realestate/marketingprogram#create",
  "time": "2022-10-12T01:13:43Z",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "CreateAction",
    "agent": "https://agentid.example.com/profile/card#me",
    "object": {
      "type": "MarketingProgram",
      "name": "Market Activity Report 508 Homewood Ave",
      "identifier": {
        "namespaceid": "c28834ca-db69-4da8-90ad-75cdc9907298",
      },
      "status": "Active",
      "member": [ # optional
        {
          "type": "Person",
          "name": "John Smith",
          "identifier": {
            "buysideid": "ab123"
          }
        }
      ],
      "creator": "http://{user}.example.com/profile/card#me",
      "dateCreated": "2022-10-12T01:13:43Z",
      "dateModified": "2022-10-12T01:13:43Z",
      "about": {
        "type": "Place",
        "address": {
          "streetAddress": "508 Homewood Ave",
          "addressLocality": "Chula Vista",
          "addressRegion": "California",
          "postalCode": "55555"
        }
      }
    }
  }
}
```
### Example
```json
{
    "topic": "realestate/marketingprogram#create",
    "recipient" : "https://bhhs.hsfaffiliates.com/profile/card#me",
    "instrument": "https://chalkdigital.bhhs.hsfaffiliates.com",         
    "data": {
        "type": "CreateAction",
        "agent": "https://15787.bhhs.hsfaffiliates.com/profile/card#me",
        "object": {
            "type": "MarketingProgram",      
            "name": "Automated Listing Program Report for ADDRESS",  
            "url": "URL CAMPAIGN SENDS TRAFFIC TO",
            "identifier": {
                "chalkdigitalid": "UNIQUEIDFORCAMPAIGN",
                "report_id": "XXXXX" 
            },
            "additionalProperty": {
                    "campaignType": "Ecard",
                    "sharingType": "Email"
            },
            "status": "Active",
            "dateCreated": "2023-09-18T16:05:58+00:00",
            "dateModified": "2023-09-18T16:05:58+00:00",
            "about": {
                "type": "PropertyListing",
                "originatingSystemName": "ky-cayman-f",
                "originatingSystemKey": "414892",
                "streetAddress": "213 N 5th Street",
                "addressLocality": "Youngwood",
                "addressRegion": "PA",
                "postalCode": "15697",
                "addressCountry": "US",
                "listingId": "355019410"                                                                          
             }
        },
        "marketingProgramSummary": {
              "type": "MarketingProgramSummary",
              "unique_users": 10,
              "impressions": 5,
              "clicks": 7
          } 
    },
}
```


[back to top](#)



---
## update
```
realestate/marketingprogram#update
```

a marketing program has been updated



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | the object was created by the agent  |
| data.agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| data.type | string! | UpdateAction  |
| data.object | object | A collection of pre-defined activities which take place over a period of time or in a regular, ongoing schedule. <br/>RANGE: [MarketingProgram](/types/MarketingProgram) |
| data.object.status | string | status of object |
| data.marketingProgramSummary | object | marketing program summary |
| data.object.about | object | about object |
| data.object.additionalProperty.campaignType | string | type of Campaign (e.g DigitalAd, Ecard, Flyer ) |
| data.object.additionalProperty.sharingType | string | sharing type of Campaign (e.g  AutomatedListingProgram, AdBuilderService, Email ) |

### Example
```json
{
  "topic": "realestate/marketingprogram#update",
  "time": "2022-10-12T01:13:43Z",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "UpdateAction",
    "agent": "https://agentid.example.com/profile/card#me",
    "object": {
      "type": "MarketingProgram",
      "name": "Market Activity Report 508 Homewood Ave",
      "identifier": {
        "namespaceid": "c28834ca-db69-4da8-90ad-75cdc9907298",
      },
      "status": "Active",
      "member": [ # optional
        {
          "type": "Person",
          "name": "John Smith",
          "identifier": {
            "buysideid": "ab123"
          }
        }
      ],
      "creator": "http://{user}.example.com/profile/card#me",
      "dateCreated": "2022-10-12T01:13:43Z",
      "dateModified": "2022-10-12T01:13:43Z",
      "about": {
        "type": "Place",
        "address": {
          "streetAddress": "508 Homewood Ave",
          "addressLocality": "Chula Vista",
          "addressRegion": "California",
          "postalCode": "55555"
        }
      }
    },
     "marketingProgramSummary": {  # optional
              "type": "MarketingProgramSummary",
              "unique_users": 10,
              "impressions": 5,
              "clicks": 7
     } 
  }
}
```


### Example
```json
{
    "topic": "realestate/marketingprogram#update",
    "recipient" : "https://bhhs.hsfaffiliates.com/profile/card#me",
    "instrument": "https://chalkdigital.bhhs.hsfaffiliates.com",         
    "data": {
        "type": "UpdateAction",
        "agent": "https://15787.bhhs.hsfaffiliates.com/profile/card#me",
        "object": {
            "type": "MarketingProgram",      
            "name": "Automated Listing Program Report for ADDRESS",  
            "url": "URL CAMPAIGN SENDS TRAFFIC TO",
            "identifier": {
                "chalkdigitalid": "UNIQUEIDFORCAMPAIGN",
                "report_id": "XXXXX" 
            },
            "additionalProperty": {
                    "campaignType": "Ecard",
                    "sharingType": "Email"
            },
            "status": "Active",
            "dateCreated": "2023-09-18T16:05:58+00:00",
            "dateModified": "2023-09-18T16:05:58+00:00",
            "about": {
                "type": "PropertyListing",
                "originatingSystemName": "ky-cayman-f",
                "originatingSystemKey": "414892",
                "streetAddress": "213 N 5th Street",
                "addressLocality": "Youngwood",
                "addressRegion": "PA",
                "postalCode": "15697",
                "addressCountry": "US",
                "listingId": "355019410"                                                                          
             }
        },
        "marketingProgramSummary": {
              "type": "MarketingProgramSummary",
              "unique_users": 10,
              "impressions": 5,
              "clicks": 7
          } 

    },
}
```

[back to top](#)

---
## delete
```
realestate/marketingprogram#delete
```

a marketing program was deleted



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | object is removed by the agent from the targetCollection <br/>RANGE: [DeleteAction](/types/DeleteAction) |
| data.agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| data.type | string! | the action type  |
| data.object | object | A collection of pre-defined activities which take place over a period of time or in a regular, ongoing schedule.  |

### Example
```json
{
    "topic": "realestate/marketingprogram#delete",
    "recipient": "https://bhhs.hsfaffiliates.com/profile/card#me",
    "data": {
        "type": "DeleteAction",
        "object": {
            "type": "SellerActivityReport",
            "name": "Listing Activity Report 1625 Birch Ln",
            "identifier": {
                "namespaceid": "7efb5faac5e7316674e2373359d557cf9a05b44d"
            }
        },
        "agent": "https://363463.bhhs.hsfaffiliates.com/profile/card#me",
        "instrument": "https://sage.getbuyside.com"
    },
    "source": "https://bhhs.hsfaffiliates.com/profile/card#me",
    "time": "2023-08-08T20:52:11.658Z",
    "@id": "https://buyside.bhhs.hsfaffiliates.com/publish/2378b39773fb46878f1d27c8822e1fff",
    "id": "https://buyside.bhhs.hsfaffiliates.com/publish/2378b39773fb46878f1d27c8822e1fff",
    "timestamp": 1691527931658
}
```


[back to top](#)

---
## memberadd
```
realestate/marketingprogram#memberadd
```

a program member was added by the agent



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | data (object) is added by user (agent), optionally to the targetCollection <br/>RANGE: [AddAction](/types/AddAction) |
| data.type | string! | AddAction  |
| data. agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| data.object | object | describes membership relation between a member (Person) and a MarketingProgram <br/>RANGE: [ProgramMembership](/types/ProgramMembership) |
| data.targetCollection | object | the collection or reference to the collection receiving the data <br/>RANGE: [MarketingProgram](/types/MarketingProgram) |

### Example
```json
{
  "topic": "realestate/marketingprogram#memberadd",
  "time": "2022-10-12T01:13:43Z",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AddAction",
    "agent": "https://agentid.example.com/profile/card#me",
    "object": {
      "type": "ProgramMembership",
      "role": "Owner",
      "member": {
        "type": "Person",
        "name": "Edgardo Fisher",
        "identifier": {
          "aceid": "816fd12f-6479-4f45-b26f-0a2ba54972b6"
        }
      },
      "memberOf": {
        "type": "MarketingProgram",
        "name": "Market Activity Report 508 Homewood Ave",
        "identifier": {
          "aceid": "4ef1469a-1fc4-43af-96b1-0e4402ccc46e",
          "buysideid": "83271c2a-c35e-44e9-b790-5389f2c11b17"
        }
      }
    },
    "targetCollection": {
      "type": "MarketingProgram",
      "name": "Market Activity Report 508 Homewood Ave",
      "identifier": {
        "aceid": "4ef1469a-1fc4-43af-96b1-0e4402ccc46e",
        "buysideid": "83271c2a-c35e-44e9-b790-5389f2c11b17"
      }
    }
  }
}
```


[back to top](#)

---
## memberremove
```
realestate/marketingprogram#memberremove
```

a program member was removed by the agent



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | an object (object) is removed by a user (agent), optionally from a collection (targetCollection)  |
| data.type | string! | the action type  |
| data.agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| data.object | object | describes membership relation between a member (Person) and a MarketingProgram <br/>RANGE: [ProgramMembership](/types/ProgramMembership) |
| data.targetCollection | * | the collection from which the item is being removed <br/>RANGE: [MarketingProgram](/types/MarketingProgram) |

### Example
```json
{
  "topic": "realestate/marketingprogram#memberremove",
  "time": "2022-10-12T01:13:43Z",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RemoveAction",
    "agent": "https://agentid.example.com/profile/card#me",
    "object": {
      "type": "ProgramMembership",
      "role": "Owner",
      "member": {
        "type": "Person",
        "name": "Edgardo Fisher",
        "identifier": {
          "aceid": "816fd12f-6479-4f45-b26f-0a2ba54972b6"
        }
      }
    },
    "targetCollection": {
      "type": "MarketingProgram",
      "name": "Market Activity Report 508 Homewood Ave",
      "identifier": {
        "aceid": "4ef1469a-1fc4-43af-96b1-0e4402ccc46e",
        "buysideid": "83271c2a-c35e-44e9-b790-5389f2c11b17"
      }
    }
  }
}
```


---
## openhouseeventsummary
```
realestate/marketingprogram#openhouseeventsummary
```

a marketing program for openhouseeventsummary

### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| recipient | string&lt;uri&gt;  | the  recipient of the event with this id  |
|  data.event.type               | string   | cosnt (`"OpenHouseEvent"`)
|  data.event.name               | string   | event name  |
|  data.event.description        | string   | event descritpion  |
|  data.event.startDate       |   string<date-time>   |  the start date-time (ISO 8601 formated) format (`date-time`)  |
|  data.event.endDate         |   string<date-time>   |  the end date-time (ISO 8601 formated) format (`date-time`) |
|  data.event.organizer.type  | string   | const(`"RealEstateAgent "`) |
|  data.event.organizer.name  | string    | event organizer name |
|  data.event.organizer.id    |  string<uri>  | event organizer id  |
|  data.event.about.type      |  string  | const(`"PropertyListing"`) |
|  data.event.about.originatingSystemName  |  string  | originating system name  |
|  data.event.about.originatingSystemKey  | string   |  the  identifier from the original MLS, aka MLSID.  |
|  data.event.about.listingId  | string   |the unique listing id |
|  data.event.about.streetAddress  |  string  | the street address <= 75 characters  |
|  data.event.about.addressLocality  |  string  |  City, Township. <= 50 characters |
|  data.event.about.postalCode  |  string  | Zip/Post Code <= 12 characters |
|  data.event.about.addressCountry  |  string  |  allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
|  data.event.about.eventSummary.type  | string    | Event Summary type |
|  data.event.about.eventSummary.signins  | number   |total number of sign ins |




### Example
```json
{
  "topic": "realestate/marketingprogram#openhouseeventsummary",
  "recipient": "https://bhhs.hsfaffiliates.com/profile/card#me",
  "data": {
    "event": {
      "type": "OpenHouseEvent",
      "name": "Property Showing 94 Bainbridge Road",
      "description": "",
      "startDate": "2024-08-11T12:00:00",
      "endDate": "2024-08-11T14:00:00",
      "organizer": {
        "type": "RealEstateAgent",
        "name": "Marla Byrnes",
        "id": "https://335178.bhhs.hsfaffilaites.com/profile/card#me"
      },
      "about": {
        "type": "PropertyListing",
        "originatingSystemName": "GOTHAM-MLS",
        "originatingSystemKey": "12345",
        "url": "https://{company-website-url}/{path-to-listing}",
        "streetAddress": "1007 Mountain Gate Rd",
        "addressRegion": "New Jersey",
        "addressLocality": "Gotham City",
        "postalCode": "10010",
        "addressCountry": "USA"
      }
    },
    "eventSummary": {
      "type": "eventSummary",
      "signins": 10
    }
  }
}
```

[back to top](#)
