---
title: marketingpreferences
menu: Topics
route: /topic/marketingpreferences
---

## marketingpreferences



### publishing marketingpreferences events
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


### receiving marketingpreferences events

| Event | Description |
| :---- | :---------- |
| [realestate/marketingpreferences#subscribe](#subscribe) |  |
| [realestate/marketingpreferences#unsubscribe](#unsubscribe) | a consumer (agent) unsubscribes to email or sms for a specific agent (object) |


---
## subscribe
```
realestate/marketingpreferences#subscribe
```





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
| data | object! | the consumer (agent) has subscribed to content from the participant with roleName SubscriptionProvider. <br/>RANGE: [SubscribeAction](/types/SubscribeAction) |
| data.type | string! | the action type  |
| data.object | * | item on which the action is carried out  |
| data.agent | object | the subscriber <br/>RANGE: [Contact](/types/Contact) |
| data.participant | [object] | the subscription provider, an Agent, Team, Office or Organization <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateTeam](/types/RealEstateTeam), [RealEstateOffice](/types/RealEstateOffice), [RealEstateOrganization](/types/RealEstateOrganization) |

### Example
```json
{
  "topic": "realestate/marketingpreferences#subscribe",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "SubscribeAction",
    "object": null,
    "agent": {
      "type": "Contact",
      "email": "bob@example.com",
      "identifier": {
        "hsfconsumerid": "D9AB8127-7D19-4C67-A514-9209F22F4511"
      }
    },
    "participant": [
      {
        "roleName": "SubscriptionProvider",
        "id": "https://12345.example.com/profile/card#me",
        "additionalProperty": {
          "isCompanyQueue": true
        }
      }
    ]
  }
}
```


[back to top](#)

---
## unsubscribe
```
realestate/marketingpreferences#unsubscribe
```

a consumer (agent) unsubscribes to email or sms for a specific agent (object)



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
| data | object! | the consumer (agent) has unsubscribed to content from the participant with roleName SubscriptionProvider. <br/>RANGE: [UnsubscribeAction](/types/UnsubscribeAction) |
| data.type | string! | the action type  |
| data.object | * | item on which the action is carried out  |
| data.agent | object | the subscriber <br/>RANGE: [Contact](/types/Contact) |
| data.participant | [object] | the subscription provider, an Agent, Team, Office or Organization <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateTeam](/types/RealEstateTeam), [RealEstateOffice](/types/RealEstateOffice), [RealEstateOrganization](/types/RealEstateOrganization) |

### Example
```json
{
  "topic": "realestate/marketingpreferences#unsubscribe",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "UnsubscribeAction",
    "object": null,
    "agent": {
      "type": "Contact",
      "email": "bob@example.com",
      "identifier": {
        "hsfconsumerid": "xxxxxxxxxxxxx"
      }
    },
    "participant": [
      {
        "roleName": "SubscriptionProvider",
        "id": "https://12345.example.com/profile/card#me",
        "additionalProperty": {
          "isCompanyQueue": true
        }
      }
    ]
  }
}
```


[back to top](#)