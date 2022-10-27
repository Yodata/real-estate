---
 contact
menu: Topics
route: /topic/contact
---

# contact



### publishing contact events
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


### receiving contact events

| Event | Description |
| :---- | :---------- |
| [realestate/contact#add](#add) | a contact (data.object) is added by a user (data.agent), optionally to a specific targetCollection |
| [realestate/contact#collectioncreate](#collectioncreate) | a contact group was created |
| [realestate/contact#collectiondelete](#collectiondelete) | a contact group was deleted |
| [realestate/contact#collectionmemberadd](#collectionmemberadd) | a contact was added to a collection |
| [realestate/contact#collectionmemberremove](#collectionmemberremove) | a contact was removed from collection |
| [realestate/contact#plancreate](#plancreate) | an action plan was created |
| [realestate/contact#plandelete](#plandelete) | an action plan was created |
| [realestate/contact#delete](#delete) | contact (object) was removed by user (agent) |
| [realestate/contact#update](#update) | a crm contact was updated |


---
## add
```
realestate/contact#add
```

a contact (data.object) is added by a user (data.agent), optionally to a specific targetCollection



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
| data | object! | data (object) is added by user (agent), optionally to the targetCollection <br/>RANGE: [AddAction](/types/AddAction) |
| data.type | string! | AddAction  |
| data.object | object | a CRM contact. <br/>RANGE: [Contact](/types/Contact) |
| data.targetCollection | object | the collection or reference to the collection receiving the data  |

### Example
```json
{
  "topic": "realestate/contact#add",
  "time": "2022-10-12T01:13:42Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AddAction",
    "object": {
      "type": "Contact",
      "affiliation": [
        "https://example.com/profile/card#me"
      ],
      "address": [
        {
          "type": "PostalAddress",
          "name": "Home",
          "streetAddress": "1007 Mountain Gate Rd",
          "postOfficeBoxNumber": "Box 1234",
          "addressRegion": "New Jersey",
          "addressLocality": "Gotham City",
          "postalCode": "10010",
          "addressCountry": "USA",
          "addressCounty": "Gotham County",
          "addressSubdivision": "Gotham Heights"
        }
      ],
      "birthDate": "2022-10-12",
      "contactPoint": [
        {
          "type": "ContactPoint",
          "name": "Work",
          "telephone": "800-555-5555",
          "faxNumber": "888-4BA-TMAN",
          "email": "bruce@example.com",
          "url": "https://example.com"
        }
      ],
      "email": "user@example.com",
      "additionalName": "ambassador satch,pops,satchmo",
      "familyName": "Wayne",
      "faxNumber": "(873) 271-4802",
      "givenName": "Glenn",
      "honorificPrefix": "Dr",
      "honorifixSuffix": "Esq",
      "jobTitle": "Superhero",
      "knowsLanguage": [
        {
          "type": "Language",
          "name": "English",
          "additionalName": "en-us"
        }
      ],
      "name": "Bruce Wayne",
      "telephone": "1-339-041-0306 x2866",
      "worksFor": "Gotham City Police Department",
      "identifier": {
        "redContact_Guid": "55BC6EB4-5C3D-4603-B5AB-154117E1269F"
      },
      "additionalProperty": {
        "supercrmuserid": 1234,
        "doNotSell": true
      },
      "comment": [
        {
          "type": "Comment",
          "text": "this is my comment.",
          "author": {
            "type": "Contact",
            "name": "Bruce Wayne"
          },
          "about": {
            "type": "PropertyListing",
            "id": "https://example.com/listingid"
          },
          "dateCreated": "2019-07-15T05:24:05Z",
          "dateModified": "2019-07-15T05:24:05Z"
        }
      ],
      "contactGroup": [
        {
          "type": "Collection",
          "name": "Superheros",
          "identifier": {
            "vendoraid": "xxx"
          }
        }
      ],
      "keywords": [
        "Sphere of Influence",
        "Past Customer"
      ],
      "leadOwner": {
        "type": "RealEstateOrganization",
        "name": "Gotham City Real Estate",
        "id": "https://example.com/profile.card#me"
      },
      "leadSource": {
        "id": "https://www.zillow.com/homedetails/1044-Siler-Pl-Berkeley-CA-94705/24820985_zpid/",
        "type": "RealEstateWebsite",
        "name": "Zillow",
        "url": "https://zillow.com"
      },
      "originatingSystem": {
        "type": "SoftwareApplication",
        "name": "RDesk",
        "description": "User Created.",
        "url": "http://www.rdeskwebsite.com/"
      },
      "dateCreated": "2022-10-12T01:13:42Z",
      "dateModified": "2022-10-12T01:13:42Z"
    },
    "targetCollection": {}
  }
}
```


[back to top](#)

---
## collectioncreate
```
realestate/contact#collectioncreate
```

a contact group was created



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
| data.object | object | a set of items. <br/>RANGE: [Collection](/types/Collection) |

### Example
```json
{
  "topic": "realestate/contact#collectioncreate",
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
      "type": "Collection",
      "name": "Past Clients",
      "identifier": {
        "vendoraid": "pastclientscollectionid"
      },
      "dateCreated": "2019-07-17T11:05:17.000Z",
      "dateModified": "2019-07-17T11:05:17.000Z"
    }
  }
}
```


[back to top](#)

---
## collectiondelete
```
realestate/contact#collectiondelete
```

a contact group was deleted



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
| data.object | object | the deleted collection  |

### Example
```json
{
  "topic": "realestate/contact#collectiondelete",
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
      "type": "Collection",
      "name": "Past Clients",
      "identifier": {
        "vendoraid": "pastclientscollectionid"
      }
    }
  }
}
```


[back to top](#)

---
## collectionmemberadd
```
realestate/contact#collectionmemberadd
```

a contact was added to a collection



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
| data | object! | data (object) is added by user (agent), optionally to the targetCollection <br/>RANGE: [AddAction](/types/AddAction) |
| data.type | string! | AddAction  |
| data.object | object | data added <br/>RANGE: [Contact](/types/Contact) |
| data.targetCollection | object | the collection or reference to the collection receiving the data <br/>RANGE: [Collection](/types/Collection) |

### Example
```json
{
  "topic": "realestate/contact#collectionmemberadd",
  "time": "2022-10-12T01:13:42Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AddAction",
    "object": {
      "type": "Contact",
      "name": "Dick Grayson",
      "identifier": {
        "vendoraid": "robin"
      }
    },
    "targetCollection": {
      "type": "Collection",
      "name": "Superhero Sidekicks",
      "identifier": {
        "vendoraid": "xxx"
      }
    }
  }
}
```


[back to top](#)

---
## collectionmemberremove
```
realestate/contact#collectionmemberremove
```

a contact was removed from collection



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
| data | object! | an object (object) is removed by a user (agent), optionally from a collection (targetCollection)  |
| data.type | string! | the action type  |
| data.object | object | the item removed <br/>RANGE: [Contact](/types/Contact) |
| data.agent | * |   |
| data.targetCollection | object | the collection from which the item is being removed <br/>RANGE: [Collection](/types/Collection) |

### Example
```json
{
  "topic": "realestate/contact#collectionmemberremove",
  "time": "2022-10-12T01:13:42Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RemoveAction",
    "object": {
      "type": "Contact",
      "name": "Dick Grayson",
      "identifier": {
        "vendoraid": "xxx"
      }
    },
    "agent": "https://{user-who-removed-the-item}.com/profile/card#me",
    "targetCollection": {
      "type": "Collection",
      "name": "Past Clients",
      "identifier": {
        "vendoraid": "pastclientscollectionid"
      }
    }
  }
}
```


[back to top](#)

---
## plancreate
```
realestate/contact#plancreate
```

an action plan was created



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
| data.object | object | a collection of related tasks <br/>RANGE: [Plan](/types/Plan) |

### Example
```json
{
  "topic": "realestate/contact#plancreate",
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
      "type": "Plan",
      "name": "Ricky Follow Up Plan",
      "description": "this is the description of my awesome plan",
      "member": [
        {
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
      ],
      "creator": "http://agent.example.com/profile/card#me",
      "dateCreated": "2022-10-12T01:13:42Z",
      "dateModified": "2022-10-12T01:13:42Z",
      "dateCompleted": "2022-10-12T01:13:42Z"
    }
  }
}
```


[back to top](#)

---
## plandelete
```
realestate/contact#plandelete
```

an action plan was created



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
| data.object | object | the plan being deleted <br/>RANGE: [Plan](/types/Plan) |

### Example
```json
{
  "topic": "realestate/contact#plandelete",
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
      "type": "Plan",
      "identifier": {
        "vendoraid": "acb"
      }
    }
  }
}
```


[back to top](#)

---
## delete
```
realestate/contact#delete
```

contact (object) was removed by user (agent)



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
| data | object! | event payload, typically an Action <br/>RANGE: [DeleteAction](/types/DeleteAction) |
| data.type | string | DeleteAction  |
| data.object | object | the deleted contact <br/>RANGE: [Contact](/types/Contact) |

### Example
```json
{
  "topic": "realestate/contact#delete",
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
      "type": "Contact",
      "identifier": {
        "vendoraid": "xxx"
      }
    }
  }
}
```


[back to top](#)

---
## update
```
realestate/contact#update
```

a crm contact was updated



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
| data.object | object | a complete or partial contact containing only the changed values <br/>RANGE: [Contact](/types/Contact) |
| data.agent | * |   |

### Example
```json
{
  "topic": "realestate/contact#update",
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
      "type": "Contact",
      "description": "a partial update example",
      "identifier": {
        "redContact_GUID": "2d9d15be-de2d-497f-bd4d-edfa0f094356"
      },
      "contactPoint": [
        {
          "type": "ContactPoint",
          "name": "Mobile",
          "telephone": "800-4-BATMAN"
        }
      ]
    },
    "agent": {
      "type": "RealEstateAgent",
      "description": "the user who updated the item",
      "id": "https://agent.example.com/profile/card#me"
    }
  }
}
```


[back to top](#)
