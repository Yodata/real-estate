---
title: blog
---

_publishing blog events_
_Publish events by HTTP POST to your own pods /publish/ endpoint including the topic, recipient and message body._

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

## Blog Posting

- [realestate/blog#postingcreate](message/blog.create)
- [realestate/blog#postingupdate](message/blog.update)
- [realestate/blog#postingdelete](message/blog.delete)
