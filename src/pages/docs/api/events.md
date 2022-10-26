---
title: Send/Receive Messages
---
# Send/Receive Messages

## Process

To allow incoming and outgoing communication with other pods, two special resources are available:
- Inbox to receive messages
- Outbox to send messages

They are considered Containers in the Linked Data specification, giving it the same functionality
as a folder which you can list the content of via paging (*N* items per page) and use the items name
to fetch their content.

## Inbox

Your pod has a default Inbox available at `/inbox/`, which is also the default location when other
pods attempt to discover your inbox location using your pod's profile card, located at `/profile/card#me`

### Use your inbox

#### Basic
When you are first given access to your pod, you'll directly be able to query your inbox content with your
API key. Your inbox will be empty at first until data comes in or you send data yourself.

To list your inbox content:
```http
GET /inbox/ HTTP/1.1
X-API-Key: myApiKey

HTTP/1.1 200 OK
Content-Type: application/json

{
    "next": "DFDSlkdfslk345434",
    "contains": [
        "https://pod.example.org/inbox/1",
        "https://pod.example.org/inbox/2",
        "https://pod.example.org/inbox/3",
        "https://pod.example.org/inbox/4",
        "https://pod.example.org/inbox/5"
    ]
}
```
You can then fetch each message and process it. Once you want to go to the next page, you use the value of `next`
as a query parameter with the key `from`, like so:
```http
GET /inbox/?from=DFDSlkdfslk345434 HTTP/1.1
X-API-Key: myApiKey

HTTP/1.1 200 OK
Content-Type: application/json

{
    "contains": []
}
```
If `next` is not present of empty, you have reached the end of the paging. You can keep using the value until there
is new data.

#### Customize
You can use the following query parameters to customize the response:

| Key      | Type   | Description                                                                                               |
|----------|--------|-----------------------------------------------------------------------------------------------------------|
| `from`   | String | Opaque string use for fetching the next page of content using a specific type of token                    |
| `by`     | String | Enum with the values `token` (used with `next`), `timestamp`                                              |
| `format` | String | Enum with the values `full` (display the content of each element within the listing) or `links` (default) |
