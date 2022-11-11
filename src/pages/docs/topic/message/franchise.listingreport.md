---
title: franchise#listingreport
---
## franchise#listingreport

*franchise listing report*

* MessageId: franchise#listingreport
* Content type: application/json

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


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


