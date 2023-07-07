---
title: Replay items API
---

## endpoint

https://realestate.yodata.me/api/replay

## payload parameters

### time bounded request (contains startDate and endDate)

will replay all inbox messages for vendor.example.com between the starte and end date/time

```yaml
type: ReplayRequestAction
target: 'https://vendor.example.com/inbox/'
startDate: '2022-09-30T02:09:16.483Z'
endDate: '2022-09-30T03:09:16.483Z'
```

### specific item request

will replay a specific list of items. Max request payload for http requests will limit the number of items you can replay in a single request to ~ 4-5K items per request. Use mutliple requests if you need more.

```yaml
type: ReplayRequestAction
target: 'https://example.com/inbox/'
items:
   - 5e76a09475324bb6af67f90e629fd011
   - 5e76a09475324bb6af67f90e629fd012
   - 5e76a09475324bb6af67f90e629fd013
```

### optional filter

this request will replay all LEAD events
events between the start and end times

```yaml
type: ReplayRequestAction
target: 'https://example.com/inbox/'
startDate: '2022-09-30T02:09:16.483Z'
endDate: '2022-09-30T03:09:16.483Z'
filter: ## optional filter
  $contains:
    topic: realestate/lead#
```

### POST request

```http

POST / HTTP
Host: https://realestate.yodata.me/api/replay
Payload
{
        "type": "ReplayRequestAction",
        "target": "https://example.com/inbox/",
        "startDate" :"2022-09-01T02:09:16.483Z",
        "endDate":"2022-09-02T03:09:16.483Z",
        "items":[ "5e76a09475324bb6af67f90e629fd011"
                  "5e76a09475324bb6af67f90e629fd012"
                  "5e76a09475324bb6af67f90e629fd013"], // specific items (optional)
        "filter":{
          "topic":"realestate/contact#add",
          ...restFilters
        } // optional
        // restFilters can contains any property of s3 data object

   }

Response

HTTP 200 || 201 OK
{
    "agent": "post-replay",
    "object": {
        "type": "ReplayRequestAction",
        "target": "https://example.com/inbox/",
        "startDate": "2022-09-01T02:09:16.483Z",
        "endDate": "2022-09-02T03:09:16.483Z",
        "items": [
                  "5e76a09475324bb6af67f90e629fd011"
                  "5e76a09475324bb6af67f90e629fd012"
                  "5e76a09475324bb6af67f90e629fd013"
        ],
        "filter": {
            "topic": "realestate/contact#add",
            ...restFilters
        }
    },
    "result": "replay request sent successfully",
    "actionStatus": "CompletedActionStatus"
}

HTTP 40X (X=> (0 || 1 || 2 ||  3 || 4)) BAD REQUEST
{
    "agent": "post-replay",
    "object": {
        "type": "ReplayRequestAction",
        "target": "https://example.com/inbox/",
        "startDate": "2022-09-01T02:09:16.483Z",
        "endDate": "2022-09-02T03:09:16.483Z",
        "items": [
                  "5e76a09475324bb6af67f90e629fd011"
                  "5e76a09475324bb6af67f90e629fd012"
                  "5e76a09475324bb6af67f90e629fd013"
        ],
        "filter": {
            "topic": "realestate/contact#add",
            ...restFilters
        }
    },
    "result": "Error Message", // Error
    "actionStatus": "FailedActionStatus"
}

```
