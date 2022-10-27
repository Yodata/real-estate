---
title: lead
menu: Topics
route: /topic/lead
---

## lead



### publishing lead events
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


### receiving lead events

| Event | Description |
| :---- | :---------- |
| [realestate/lead#accept](#accept) | a lead (data.object) was accepted by the recipient (data.recipient). |
| [realestate/lead#add](#add) | a crm lead was created |
| [realestate/lead#asssign](#asssign) | a lead was assigned |
| [realestate/lead#update](#update) | a crm lead was updated |
| [realestate/lead#reject](#reject) | a crm lead was rejected |
| [realestate/lead#retract](#retract) | a lead (data.object) is taken back from the previous assignee (data.participant) by the previous sender/owner (data.recipient) |


---
## accept
```
realestate/lead#accept
```

a lead (data.object) was accepted by the recipient (data.recipient).



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | realestate/lead#accept  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | The act of committing to/adopting an object. <br/>RANGE: [AcceptAction](/types/AcceptAction) |
| data.type | string! | the action type  |
| data.object | object | a sales opportunity (object) offered by a sender to a recipient. <br/>RANGE: [Lead](/types/Lead) |
| data.agent | string&lt;uri&gt;  | the accepting user  |

### Example
```json
{
  "topic": "realestate/lead#accept",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AcceptAction",
    "object": {
      "type": "Lead",
      "identifier": {
        "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
      },
      "object": {
        "type": "Contact",
        "name": "Joe Smith",
        "telephone": "731-620-9877 x6155",
        "email": "Giuseppe.Lang62@hotmail.com"
      },
      "recipient": "http://{lead-recipient}.example.com/profile/card#me",
      "sender": "http://{lead-sender}.example.com/profile/card#me",
      "owner": "http://{lead-owner}.example.com/profile/card#me",
      "dateAccepted": "2019-11-25T04:23:32.000Z",
      "dateRejected": "2022-10-12T01:13:43Z",
      "dateSent": "2022-10-12T01:13:43Z",
      "dateReceived": "2019-11-25T04:23:32.000Z",
      "leadSource": [
        {
          "type": "AskAction",
          "object": {
            "type": "Question",
            "text": "Help me I'm trapped inside documentation."
          }
        }
      ]
    },
    "agent": "https://{the-user-who-accepted-the-item}.com/profile/card#me"
  }
}
```


[back to top](#)

---
## add
```
realestate/lead#add
```

a crm lead was created



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
| data.object | object | a sales opportunity (object) offered by a sender to a recipient. <br/>RANGE: [Lead](/types/Lead) |
| data.targetCollection | object | the collection or reference to the collection receiving the data  |

### Example
```json
{
  "topic": "realestate/lead#add",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AddAction",
    "object": {
      "type": "Lead",
      "identifier": {
        "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
      },
      "object": {
        "type": "Contact",
        "name": "Joe Smith",
        "telephone": "731-620-9877 x6155",
        "email": "Giuseppe.Lang62@hotmail.com"
      },
      "recipient": "http://{lead-recipient}.example.com/profile/card#me",
      "sender": "http://{lead-sender}.example.com/profile/card#me",
      "owner": "http://{lead-owner}.example.com/profile/card#me",
      "dateAccepted": "2019-11-25T04:23:32.000Z",
      "dateRejected": "2022-10-12T01:13:43Z",
      "dateSent": "2022-10-12T01:13:43Z",
      "dateReceived": "2019-11-25T04:23:32.000Z",
      "leadSource": [
        {
          "type": "AskAction",
          "object": {
            "type": "Question",
            "text": "Help me I'm trapped inside documentation."
          }
        }
      ]
    },
    "targetCollection": {}
  }
}
```


[back to top](#)

---
## asssign
```
realestate/lead#asssign
```

a lead was assigned



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
| data | object! | An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.  |
| data.type | string! | static AssignAction  |
| data.object | object | a sales opportunity (object) offered by a sender to a recipient. <br/>RANGE: [Lead](/types/Lead) |
| data.agent | string&lt;uri&gt;  | the assignor, typically the lead owner  |

### Example
```json
{
  "topic": "realestate/lead#assign",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AssignAction",
    "object": {
      "type": "Lead",
      "identifier": {
        "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
      },
      "object": {
        "type": "Contact",
        "name": "Joe Smith",
        "telephone": "731-620-9877 x6155",
        "email": "Giuseppe.Lang62@hotmail.com"
      },
      "recipient": "http://{lead-recipient}.example.com/profile/card#me",
      "sender": "http://{lead-sender}.example.com/profile/card#me",
      "owner": "http://{lead-owner}.example.com/profile/card#me",
      "dateAccepted": "2019-11-25T04:23:32.000Z",
      "dateRejected": "2022-10-12T01:13:43Z",
      "dateSent": "2022-10-12T01:13:43Z",
      "dateReceived": "2019-11-25T04:23:32.000Z",
      "leadSource": [
        {
          "type": "AskAction",
          "object": {
            "type": "Question",
            "text": "Help me I'm trapped inside documentation."
          }
        }
      ]
    },
    "agent": "http://example.com"
  }
}
```


[back to top](#)

---
## update
```
realestate/lead#update
```

a crm lead was updated



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
| data | object! | the item (object) has been updated by user (agent) <br/>RANGE: [UpdateAction](/types/UpdateAction) |
| data.type | string! | const UpdateAction  |
| data.object | object | a sales opportunity (object) offered by a sender to a recipient. <br/>RANGE: [Lead](/types/Lead) |

### Example
```json
{
  "topic": "realestate/lead#update",
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
      "type": "Lead",
      "identifier": {
        "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
      },
      "object": {
        "type": "Contact",
        "name": "Joe Smith",
        "telephone": "731-620-9877 x6155",
        "email": "Giuseppe.Lang62@hotmail.com"
      },
      "recipient": "http://{lead-recipient}.example.com/profile/card#me",
      "sender": "http://{lead-sender}.example.com/profile/card#me",
      "owner": "http://{lead-owner}.example.com/profile/card#me",
      "dateAccepted": "2019-11-25T04:23:32.000Z",
      "dateRejected": "2022-10-12T01:13:43Z",
      "dateSent": "2022-10-12T01:13:43Z",
      "dateReceived": "2019-11-25T04:23:32.000Z",
      "leadSource": [
        {
          "type": "AskAction",
          "object": {
            "type": "Question",
            "text": "Help me I'm trapped inside documentation."
          }
        }
      ]
    }
  }
}
```


[back to top](#)

---
## reject
```
realestate/lead#reject
```

a crm lead was rejected



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
| data | object! | a user (agent) has rejected an item (object) <br/>RANGE: [RejectAction](/types/RejectAction) |
| data.type | string! | the action type  |
| data.object | object | a sales opportunity (object) offered by a sender to a recipient. <br/>RANGE: [Lead](/types/Lead) |
| data.participant | object | the entity who made the offer  |

### Example
```json
{
  "topic": "realestate/lead#reject",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RejectAction",
    "object": {
      "type": "Lead",
      "identifier": {
        "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
      },
      "object": {
        "type": "Contact",
        "name": "Joe Smith",
        "telephone": "731-620-9877 x6155",
        "email": "Giuseppe.Lang62@hotmail.com"
      },
      "recipient": "http://{lead-recipient}.example.com/profile/card#me",
      "sender": "http://{lead-sender}.example.com/profile/card#me",
      "owner": "http://{lead-owner}.example.com/profile/card#me",
      "dateAccepted": "2019-11-25T04:23:32.000Z",
      "dateRejected": "2022-10-12T01:13:43Z",
      "dateSent": "2022-10-12T01:13:43Z",
      "dateReceived": "2019-11-25T04:23:32.000Z",
      "leadSource": [
        {
          "type": "AskAction",
          "object": {
            "type": "Question",
            "text": "Help me I'm trapped inside documentation."
          }
        }
      ]
    },
    "participant": {
      "type": "RealEstateOrganization",
      "name": "Gotham City Real Estate"
    }
  }
}
```


[back to top](#)

---
## retract
```
realestate/lead#retract
```

a lead (data.object) is taken back from the previous assignee (data.participant) by the previous sender/owner (data.recipient)



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
| data | object! | the message payload <br/>RANGE: [RetractAction](/types/RetractAction) |
| data.type | string | static RetractAction  |
| data.object | object | the lead being retracted <br/>RANGE: [Lead](/types/Lead) |
| data.agent | string&lt;uri&gt;  | user who effected the change  |
| data.participant | object | the original recipient from which the lead is being taken <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateOffice](/types/RealEstateOffice), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.recipient | object | the lead-owner, to whom the lead is being returned <br/>RANGE: [RealEstateOffice](/types/RealEstateOffice), [RealEstateOrganization](/types/RealEstateOrganization), [RealEstateAgent](/types/RealEstateAgent) |

### Example
```json
{
  "topic": "realestate/lead#retract",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RetractAction",
    "object": {
      "type": "Lead",
      "object": {
        "type": "Contact",
        "identifier": {
          "redContact_Guid": "bbc1f449-21b3-41d8-a588-2d1c7d43281e"
        },
        "name": "Braxton Zboncak",
        "email": "user@example.com"
      }
    },
    "agent": "https://{lead-admin}.bhhs.hsaffailites.com/profile/card",
    "participant": {
      "type": "RealEstateAgent",
      "id": "https://user.example.com/profile/card#me"
    },
    "recipient": {
      "type": "RealEstateOrganization",
      "id": "https://{lead-owner}.example.com/profile/card#me"
    }
  }
}
```


[back to top](#)