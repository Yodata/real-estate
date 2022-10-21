---
title: award
---

## Operations### PUB `award` Operation

Accepts **one of** the following messages:

#### Message award#delete `award#delete`

*award deleted*

* Message ID: `award#delete`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#delete",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "DeleteAction",
    "identifier": {
      "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
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


##### Message tags

| Name | Description | Documentation |
|---|---|---|
| action\|delete | - | - |
| topic\|award | - | - |
| domain\|realestate | - | - |

#### Message `award#seriescreate`

*a new award series was created*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#seriescreate",
  "time": "2019-08-24T14:15:22Z",
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
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z",
      "id": "https://example/com",
      "identifier": {
        "hsfAwardSeriesID": "xxxx"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `award#seriesdelete`

*an award series was deleted*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#seriesdelete",
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
      "type": "AwardSeries",
      "name": "Top 1% Club",
      "description": "Annual",
      "duration": "R/P1Y",
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z",
      "id": "https://example/com",
      "identifier": {
        "hsfAwardSeriesID": "xxxx"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `award#seriesupdate`

*an award series was updated*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#seriesupdate",
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
      "type": "AwardSeries",
      "name": "Top 1% Club",
      "description": "Annual",
      "duration": "R/P1Y",
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z",
      "id": "https://example/com",
      "identifier": {
        "hsfAwardSeriesID": "xxxx"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `award#teamcreate`

*an award team was created*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#teamcreate",
  "time": "2019-08-24T14:15:22Z",
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


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `award#teammemberadd`

*a member has been added to an award team*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#teammemberadd",
  "time": "2019-08-24T14:15:22Z",
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


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `award#teammemberremove`

*a member has been removed from an award team*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#teammemberremove",
  "time": "2019-08-24T14:15:22Z",
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


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `award#teamupdate`

*an award team has been updated*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#teamupdate",
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


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `award#update`

*award action is updated*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/award#update",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "UpdateAction",
    "identifier": {
      "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
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


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|




