---
title: commerciallisting
---
## commercial listing operations

### subscribe commercial listing events

A message is published to this topic when a commercial listing is created, updated, or deleted.
The message payload is a JSON-LD object with the following properties:
- `type` - the type of message, one of `CreateAction`, `UpdateAction`, or `DeleteAction`
- `object` - the commercial listing, as a JSON-LD object


* [commerciallisting#update.sale](message/commerciallisting.update.sale)
* [commerciallisting#update.lease](message/commerciallisting.update.lease)


