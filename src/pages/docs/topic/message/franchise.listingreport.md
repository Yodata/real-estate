---
title: franchise#listingreport
---
## Message franchise#listingreport `franchise#listingreport`

*franchise listing report*

* Message ID: `franchise#listingreport`
* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

### Headers

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| time | string | date & time the event was produced |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient |
| instrument | string | the app or service that produced the event on behalf of the agent/user |
| source | string | a copy of the event was sent to the source(s). |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. |
| @id | string | - |

> Examples of headers _(generated)_

```json
{
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://teamsupermario.example.com/profile/card#me",
  "instrument": "http://supercrm.example.com/profile/card#me",
  "source": "https://bigbrandrealestate.example.com/profile/card#me",
  "originalRecipient": "http://bigbrandrealestate.example.com/profile/card#me",
  "id": "http://supercrm.example.com/publish/12345",
  "@id": "http://reliance.example.com/inbox/23456"
}
```


### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | - |
| data | object | - |
| data.type | string | - |
| data.object | object | summary report of listing inventory count |
| data.object.type | string | RECORD-TYPE |
| data.object.batchId | string | BATCH-ID |
| data.object.reportingOfficeId | string | OFFICE-ID |
| data.object.dateCreated | string | YEAR-MONTH |
| data.object.listingsAddedCount | number | LISTINGS-TAKEN |
| data.object.totalListingsCount | number | LISTINGS-INVENTORY |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/franchise#listingreport",
  "data": {
    "type": "UpdateAction",
    "object": {
      "type": "ListingReport",
      "batchId": "string",
      "reportingOfficeId": "https://{officeid}.example.com/profile/card#me",
      "dateCreated": "2019-08-24T14:15:22Z",
      "listingsAddedCount": 0,
      "totalListingsCount": 0
    }
  }
}
```


