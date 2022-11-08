---
title: Data Mocker
---

## Real Estate Data Mocker API Reference

generates a message or schema object, and
optionally sends it to your service.

```http
GET /api/schema/mock/PostalAddress HTTP/1.1 200
HOST realestate.yodata.me

RESPONSE:

{
    "type": "PostalAddress",
    "addressCountry": "SJ",
    "addressCounty": "Buckinghamshire",
    "addressLocality": "Kulasmouth",
    "addressRegion": "New Jersey",
    "postalCode": "10010",
    "postOfficeBoxNumber": "Apt. 161",
    "streetAddress": "166 Marion Burg"
}

```


## optional query parameters

### requiredOnly {true/false} (default: false)
if true only required properties will be returned

### randomOptionals {true/false} (default: false)
if true, random properties and values will be included in the response.
good for testing your handlers.

### sortProperties {true/false} (default: false)
if true, the properties will be sorted by key

Need a bunch of test data sent to your serivce? Try [mock data generator GUI](/tools/mock-data-generator).
