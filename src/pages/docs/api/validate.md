---
title: Schema Validator API Documentation
---

## Validate Schema API Example

You can validate any event message (with a "topic" property) or any Schema object (with a "type" property)

```http
  POST / HTTP/1.1
  Content-Type: application/json
  Host: http://realestate.yodata.me/api/validate

  {
    "object": {
        "topic": "realestate/franchise#transactionreport",
        "data": {...}
    }
  }


  HTTP/1.1 200 OK
  Connection: keep-alive
  Content-Length: 1115
  Date: Thu, 06 Oct 2022 02:55:18 GMT
  Keep-Alive: timeout=5
  content-type: application/json

  {
    "isValid": false,
    "error": {
        "message": "data should have required property 'source'",
        "items": [
            {
                "keyword": "required",
                "dataPath": "",
                "schemaPath": "#/allOf/0/required",
                "params": {
                    "missingProperty": "source"
                },
                "message": "should have required property 'source'"
            }
        ]
    }
}

```
