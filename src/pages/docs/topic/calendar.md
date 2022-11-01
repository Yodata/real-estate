---
title: calendar
menu: Topics
route: /topic/calendar
---

## calendar



### publishing calendar events
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


### receiving calendar events

| Event | Description |
| :---- | :---------- |
| [realestate/calendar#eventcreate](#eventcreate) | a calendar event was created |
| [realestate/calendar#taskcreate](#taskcreate) | a new task is created and optionally added to plan |
| [realestate/calendar#taskdelete](#taskdelete) | a task was removed from an action plan |
| [realestate/calendar#taskupdate](#taskupdate) | a task has been updated |


---
## eventcreate
```
realestate/calendar#eventcreate
```

a calendar event was created



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
| data | object! | the object was created by the agent  |
| data.type | string! | CreateAction  |
| data.object | object | An event happening at a certain time and location <br/>RANGE: [Event](/types/Event) |

### Example
```json
{
  "topic": "realestate/calendar#eventcreate",
  "time": "2022-10-12T01:13:42Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "CreateAction",
    "object": {
      "type": "Event",
      "name": "Property Showing 1007 Mountain Gate Rd",
      "description": "an example meeting request for 4:00PM to 4:30PM.",
      "about": {
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
      "startDate": "2019-08-01T16:00Z",
      "endDate": "2019-08-01T16:30Z",
      "organizer": {
        "type": "RealEstateAgent",
        "name": "Bruce Wayne",
        "id": "https://batman.example.com/profile/card#me"
      }
    }
  }
}
```


[back to top](#)

---
## taskcreate
```
realestate/calendar#taskcreate
```

a new task is created and optionally added to plan



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
| data | object! | the object was created by the agent  |
| data.type | string! | CreateAction  |
| data.object | object | the task to be added <br/>RANGE: [Task](/types/Task) |

### Example
```json
{
  "topic": "realestate/calendar#taskcreate",
  "time": "2022-10-12T01:13:42Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "CreateAction",
    "object": {
      "type": "Task",
      "identifier": {
        "redEvent_ID": "23445"
      },
      "actionStatus": "PotentialActionStatus",
      "memberOf": {
        "type": "Plan",
        "identifier": {
          "redPlan_ID": "xxxx"
        }
      },
      "agent": {
        "type": "RealEstateAgent",
        "id": "http://user.example.com/profile/card#me"
      },
      "participant": [
        {
          "type": "Contact",
          "name": "Bruce Wayne",
          "email": "bruce@example.com",
          "identifier": {
            "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
          }
        }
      ],
      "name": "Call Ricky",
      "description": "Agenda 1. Something 2. Something Else ...",
      "keywords": [
        "Sphere of Influence",
        "Past Customer"
      ],
      "dateDue": "2022-10-12T01:13:42Z",
      "dateCompleted": "2022-10-12T01:13:42Z",
      "location": {
        "type": "Place",
        "address": {
          "streetAddress": "1007 Mountain Gate Rd",
          "addressLocality": "Gotham City",
          "addressRegion": "NJ",
          "postalCode": "10007",
          "addressCounty": "Gotham addressCounty",
          "addressSubdivision": "Gotham Heights"
        }
      }
    }
  }
}
```


[back to top](#)

---
## taskdelete
```
realestate/calendar#taskdelete
```

a task was removed from an action plan



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
| data.object | object | the deleted item <br/>RANGE: [Task](/types/Task) |

### Example
```json
{
  "topic": "realestate/calendar#taskdelete",
  "time": "2022-10-12T01:13:42Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "DeleteAction",
    "object": {
      "type": "Task",
      "identifier": {
        "vendoraid": "xxx"
      }
    }
  }
}
```


[back to top](#)

---
## taskupdate
```
realestate/calendar#taskupdate
```

a task has been updated



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
| data.object | object | the task to be updated <br/>RANGE: [Task](/types/Task) |

### Example
```json
{
  "topic": "realestate/calendar#taskupdate",
  "time": "2022-10-12T01:13:42Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "UpdateAction",
    "object": {
      "type": "Task",
      "identifier": {
        "redEvent_ID": "23445"
      },
      "actionStatus": "PotentialActionStatus",
      "memberOf": {
        "type": "Plan",
        "identifier": {
          "redPlan_ID": "xxxx"
        }
      },
      "agent": {
        "type": "RealEstateAgent",
        "id": "http://user.example.com/profile/card#me"
      },
      "participant": [
        {
          "type": "Contact",
          "name": "Bruce Wayne",
          "email": "bruce@example.com",
          "identifier": {
            "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
          }
        }
      ],
      "name": "Call Ricky",
      "description": "Agenda 1. Something 2. Something Else ...",
      "keywords": [
        "Sphere of Influence",
        "Past Customer"
      ],
      "dateDue": "2022-10-12T01:13:42Z",
      "dateCompleted": "2022-10-12T01:13:42Z",
      "location": {
        "type": "Place",
        "address": {
          "streetAddress": "1007 Mountain Gate Rd",
          "addressLocality": "Gotham City",
          "addressRegion": "NJ",
          "postalCode": "10007",
          "addressCounty": "Gotham addressCounty",
          "addressSubdivision": "Gotham Heights"
        }
      }
    }
  }
}
```


[back to top](#)
