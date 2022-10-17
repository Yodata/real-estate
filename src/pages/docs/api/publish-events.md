---
title: Publishing Events
menu: API
---

## Overview

Use the publish API to send events to your user's PODs for distribution to that user's subscribers.

### Published Event Data Flow

```sequence
[ your app (producer) ] => [ user pod (publisher) ] => [ other user apps (subscribers) ]
```

## Usage

To publish an event, HTTP POST to your pod's /publish/ endpoint with a content-type of application/json and the event in the body.

```http
POST /publish/
Host: {your-pod-host}
Content-Type: application/json
x-api-key: {your-api-key}

{
    "recipient": "https://{user-pod}/profile/card#me",
    "source": "https://{participant-pod/profile/card#me"
    "topic": "{domain}/{topic}#{actiontype}",
    "data": {
        "type": "{actiontype}"
        ... payload
    }
}
```

### Example

Let's imagine your user has added a new CRM contact and you want to publish that event.

Assumptions:
- Your pod is producer.example.com
- Your user's pod is user.example.com
- A participant pod will receive a copy of this event
- The new contact is named "Bruce Wayne"

```sh
curl -X POST \
https://producer.example.com/publish/ \
-H 'Content-Type: application/json' \
-H 'x-api-key: {your-secret}' \
-d '[
  {
    "recipient": "https://user.example.com/profile/card#me",
    "source": "https://participant.example.com/profile/card#me"
    "topic": "realestate/contact#add",
    "data": {
        "type": "AddAction",
        "object": {
            "type": "Contact",
            "name": "Bruce Wayne"
        }
  }
]'
```

## SUCCESS RESPONSE

### 201 SUCCESS
A successful response wil have an HTTP status code 201 and the JSON response.body will contain the event.id.

### RESULT

- The `recipient` and optional  `source` in the request.body will receive a copy of the event and forward it to their subscribers.
- If you are subscriber of the event recipient and/or source you will receive the event in your `/inbox/`

```http
HTTP/1.1 201 OK
Content-Type: application/json
Location: https://your.domain.com/publish/{eventid}

{
    "id": "https://dave.bhhs.dev.yodata.io/publish/dc6cb9e6338c4af797a077577b9fd0ad"
}
```

## ERROR RESPONSES

### 400 BAD REQUEST
There is a problem with the request.body, see the response error message for more information.

```http
HTTP/1.1 400 BAD REQUEST
Content-Type: application/json

{
    "error": "No recipient found"
}
```

###
HOW TO FIX
Make sure your request.body inclues all required fields (recipient, topic and data)


### 403 FORBIDDEN
Your request was rejected, the error message for details.

```http
HTTP/1.1 403 FORBIDDEN
Content-Type: application/json

{
    "error": "Not authorized to publish to {recipient} on topic {topic}"
}
```

HOW TO FIX
1. contact the rejecting host and get authorized, then resend the event, or
2. remove or replace the rejecting host from the request recipient and/or source.
