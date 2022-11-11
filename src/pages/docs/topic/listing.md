---
title: listing
---
## ## Operations



### SUB `listing` Operation

A message is published to this topic when a listing is created, updated, or deleted.
The message payload is a JSON-LD object with the following properties:
- `type` - the type of message, one of `CreateAction`, `UpdateAction`, or `DeleteAction`
- `object` - the listing, as a JSON-LD object


Subscribers receive one of the following messages per event.

* [listing#update](message/listing.update)

* [listing#delete](message/listing.delete)


