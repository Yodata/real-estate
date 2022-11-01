---
title: Real Estate Schema/Event Mocker
---

## Real Estate Schema/Event Mocker

This api allows you to generate mock events and entities from the real estate vocabulary.
for example: you can use the following to generate events...

```http
--- request
GET /api/mock/Contact
HOST http://realestate.yodata.me

--- response
HTTP/1.1 200 OK
Content-Type: application/json

{
    "type": "Contact",
    "name": "Bob Smith",
    "email": "bob.smith@example.com",
    "telephone": "943.302.7677 x776"
}
```
