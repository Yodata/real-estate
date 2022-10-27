---
title: award
menu: Topics
route: /topic/award
---

## award



### publishing award events
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


### receiving award events

| Event | Description |
| :---- | :---------- |
| [realestate/award#create](#create) | an award _object_ is bestowed upon the _recipient_ by the message _agent_. |
| [realestate/award#update](#update) | award action is updated |
| [realestate/award#delete](#delete) | award record deleted. |
| [realestate/award#seriescreate](#seriescreate) | a new award series was created |
| [realestate/award#seriesupdate](#seriesupdate) | an award series was updated |
| [realestate/award#seriesdelete](#seriesdelete) | an award series was deleted |
| [realestate/award#teamcreate](#teamcreate) | an award team was created |
| [realestate/award#teamupdate](#teamupdate) | an award team has been updated |
| [realestate/award#teammemberadd](#teammemberadd) | a member has been added to an award team |
| [realestate/award#teammemberremove](#teammemberremove) | a member has been removed from an award team |


---
## create
```
realestate/award#create
```

an award _object_ is bestowed upon the _recipient_ by the message _agent_.



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
| data.identifier | object | key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.  |
| data.agent | string&lt;uri&gt; &#124;object | the award presentor <br/>RANGE: [Person](/types/Person), [Organization](/types/Organization), [URI](/types/URI) |
| data.object | object | the award being bestowed <br/>RANGE: [AwardSeries](/types/AwardSeries) |
| data.recipient | object | profile URI of the award recipient <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateOffice](/types/RealEstateOffice), [RealEstateOrganiation](/types/RealEstateOrganiation) |

### Example
```json
{
  "topic": "realestate/award#create",
  "time": "2022-10-12T01:13:42Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "CreateAction",
    "identifier": {
      "bhhsAwardId": "xxxx"
    },
    "agent": "http://{user}.example.com/profile/card#me",
    "object": {
      "type": "AwardSeries",
      "name": "Agent of The Year",
      "identifier": {
        "hsfAwardSeriesId": "xxxx"
      }
    },
    "recipient": {
      "type": "RealEstateAgent",
      "id": "https://user.example.com/profile/card#me",
      "name": "Joann Agent"
    }
  }
}
```


[back to top](#)

---
## update
```
realestate/award#update
```

award action is updated



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
| data | object! | event payload, typically an Action <br/>RANGE: [UpdateAction](/types/UpdateAction) |
| data.type | * |   |
| data.identifier | object | key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.  |
| data.agent | string&lt;uri&gt; &#124;object | the award presentor <br/>RANGE: [Person](/types/Person), [Organization](/types/Organization), [URI](/types/URI) |
| data.object | object | the award being bestowed <br/>RANGE: [AwardSeries](/types/AwardSeries) |
| data.recipient | object | profile URI of the award recipient <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateOffice](/types/RealEstateOffice), [RealEstateOrganiation](/types/RealEstateOrganiation) |

### Example
```json
{
  "topic": "realestate/award#update",
  "time": "2022-10-12T01:13:42Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "UpdateAction",
    "identifier": {
      "bhhsAwardId": "xxxx"
    },
    "agent": "http://{user}.example.com/profile/card#me",
    "object": {
      "type": "AwardSeries",
      "name": "Agent of The Year",
      "identifier": {
        "hsfAwardSeriesId": "xxxx"
      }
    },
    "recipient": {
      "type": "RealEstateAgent",
      "id": "https://user.example.com/profile/card#me",
      "name": "Joann Agent"
    }
  }
}
```


[back to top](#)

---
## delete
```
realestate/award#delete
```

award record deleted.



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
| data.type | * |   |
| data.identifier | object | key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.  |
| data.agent | string&lt;uri&gt; &#124;object | the award presentor <br/>RANGE: [Person](/types/Person), [Organization](/types/Organization), [URI](/types/URI) |
| data.object | object | the award being bestowed <br/>RANGE: [AwardSeries](/types/AwardSeries) |
| data.recipient | object | profile URI of the award recipient <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateOffice](/types/RealEstateOffice), [RealEstateOrganiation](/types/RealEstateOrganiation) |

### Example
```json
{
  "topic": "realestate/award#delete",
  "time": "2022-10-12T01:13:42Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "DeleteAction",
    "identifier": {
      "bhhsAwardId": "xxxx"
    },
    "agent": "http://{user}.example.com/profile/card#me",
    "object": {
      "type": "AwardSeries",
      "name": "Agent of The Year",
      "identifier": {
        "hsfAwardSeriesId": "xxxx"
      }
    },
    "recipient": {
      "type": "RealEstateAgent",
      "id": "https://user.example.com/profile/card#me",
      "name": "Joann Agent"
    }
  }
}
```


[back to top](#)

---
## seriescreate
```
realestate/award#seriescreate
```

a new award series was created



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
| data.object | object | an award bestowed at regular intervals <br/>RANGE: [AwardSeries](/types/AwardSeries) |

### Example
```json
{
  "topic": "realestate/award#seriescreate",
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
      "type": "AwardSeries",
      "name": "Top 1% Club",
      "description": "Annual",
      "duration": "R/P1Y",
      "startDate": "2022-10-12T01:13:42Z",
      "endDate": "2022-10-12T01:13:42Z",
      "id": "https://example/com",
      "identifier": {
        "hsfAwardSeriesID": "xxxx"
      }
    }
  }
}
```


[back to top](#)

---
## seriesupdate
```
realestate/award#seriesupdate
```

an award series was updated



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
| data | object! | event payload, typically an Action <br/>RANGE: [UpdateAction](/types/UpdateAction) |
| data.type | * |   |
| data.object | object | an award bestowed at regular intervals <br/>RANGE: [AwardSeries](/types/AwardSeries) |

### Example
```json
{
  "topic": "realestate/award#seriesupdate",
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
      "type": "AwardSeries",
      "name": "Top 1% Club",
      "description": "Annual",
      "duration": "R/P1Y",
      "startDate": "2022-10-12T01:13:42Z",
      "endDate": "2022-10-12T01:13:42Z",
      "id": "https://example/com",
      "identifier": {
        "hsfAwardSeriesID": "xxxx"
      }
    }
  }
}
```


[back to top](#)

---
## seriesdelete
```
realestate/award#seriesdelete
```

an award series was deleted



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
| data.type | * |   |
| data.object | object | an award bestowed at regular intervals <br/>RANGE: [AwardSeries](/types/AwardSeries) |

### Example
```json
{
  "topic": "realestate/award#seriesdelete",
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
      "type": "AwardSeries",
      "name": "Top 1% Club",
      "description": "Annual",
      "duration": "R/P1Y",
      "startDate": "2022-10-12T01:13:42Z",
      "endDate": "2022-10-12T01:13:42Z",
      "id": "https://example/com",
      "identifier": {
        "hsfAwardSeriesID": "xxxx"
      }
    }
  }
}
```


[back to top](#)

---
## teamcreate
```
realestate/award#teamcreate
```

an award team was created



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
| data.object | object | a Collection <br/>RANGE: [AwardTeam](/types/AwardTeam) |

### Example
```json
{
  "topic": "realestate/award#teamcreate",
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
      "type": "AwardTeam",
      "name": "Clients",
      "identifier": {
        "hsfTeamId": "xxxxx"
      },
      "member": [
        "https://user.example.com/profile/card#me",
        "https://office.example.com/profile/card#me",
        "https://company.example.com/profile/card#me"
      ]
    }
  }
}
```


[back to top](#)

---
## teamupdate
```
realestate/award#teamupdate
```

an award team has been updated



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
| data | object! | event payload, typically an Action <br/>RANGE: [UpdateAction](/types/UpdateAction) |
| data.type | * |   |
| data.object | object | a Collection <br/>RANGE: [AwardTeam](/types/AwardTeam) |

### Example
```json
{
  "topic": "realestate/award#teamupdate",
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
      "type": "AwardTeam",
      "name": "Clients",
      "identifier": {
        "hsfTeamId": "xxxxx"
      },
      "member": [
        "https://user.example.com/profile/card#me",
        "https://office.example.com/profile/card#me",
        "https://company.example.com/profile/card#me"
      ]
    }
  }
}
```


[back to top](#)

---
## teammemberadd
```
realestate/award#teammemberadd
```

a member has been added to an award team



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
| data | object! | event payload, typically an Action <br/>RANGE: [AddAction](/types/AddAction) |
| data.type | * |   |
| data.object | string | the member being added <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateOffice](/types/RealEstateOffice), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.targetCollection | object | the team receiving the new member <br/>RANGE: [AwardTeam](/types/AwardTeam) |

### Example
```json
{
  "topic": "realestate/award#teammemberadd",
  "time": "2022-10-12T01:13:42Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AddAction",
    "object": "https://user.example.com/profile/card#me",
    "targetCollection": {
      "type": "AwardTeam",
      "identifier": {
        "hsfTeamId": "xxxx"
      }
    }
  }
}
```


[back to top](#)

---
## teammemberremove
```
realestate/award#teammemberremove
```

a member has been removed from an award team



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
| data | object! | event payload, typically an Action <br/>RANGE: [RemoveAction](/types/RemoveAction) |
| data.type | * |   |
| data.object | string | the member being removed <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateOffice](/types/RealEstateOffice), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.targetCollection | object | the team from which the member is removed <br/>RANGE: [AwardTeam](/types/AwardTeam) |

### Example
```json
{
  "topic": "realestate/award#teammemberremove",
  "time": "2022-10-12T01:13:42Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RemoveAction",
    "object": "https://user.example.com/profile/card#me",
    "targetCollection": {
      "type": "AwardTeam",
      "identifier": {
        "hsfTeamId": "xxxx"
      }
    }
  }
}
```


[back to top](#)
