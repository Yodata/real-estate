---
title: MarketingProgram
---
## Example



```json
{
  "type": "MarketingProgram",
  "name": "Market Activity Report for 508 Homeward Avenue",
  "identifier": {
    "bhhsconsumerid": "12345"
  },
  "member": [
    {
      "type": "ProgramMembership",
      "role": "member",
      "member": {
        "type": "Contact",
        "name": "string",
        "identifier": {
          "bhhsconsumerid": "12345"
        }
      },
      "memberOf": {
        "type": "MarketingProgram",
        "name": "Market Activity Report 508 Homewood Ave",
        "identifier": {
          "bhhsconsumerid": "12345"
        }
      }
    }
  ],
  "creator": "http://example.com",
  "dateCreated": "2019-08-24T14:15:22Z",
  "dateModified": "2019-08-24T14:15:22Z",
  "about": {
    "type": "Place",
    "address": {
      "type": "PostalAddress",
      "name": "Home",
      "addressCountry": "USA",
      "addressCounty": "Gotham County",
      "addressLocality": "Gotham City",
      "addressRegion": "New Jersey",
      "addressSubdivision": "Gotham Heights",
      "postalCode": "10010",
      "postOfficeBoxNumber": "Box 1234",
      "streetAddress": "1007 Mountain Gate Rd"
    },
    "geo": {
      "type": "GeoShape",
      "geoMidpoint": {
        "type": "GeoCoordinates,",
        "longitude": "73.98",
        "latitude": "40.75"
      },
      "geoRadius": {
        "type": "QuantitativeValue,",
        "value": "10,",
        "unitCode": "mi,",
        "unitText": "miles"
      },
      "box": "(33.5697,-117.775),(33.6018,-117.707)"
    }
  }
}
```

## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | A collection of pre-defined activities which take place over a period of time or in a regular, ongoing schedule. |
| type | string | const (`"MarketingProgram"`)  |
| name | string | - |
| identifier | object |  1 properties |
| member | array<object> | - |
| member.type | string | const (`"ProgramMembership"`)  |
| member.role | string | allowed (`"member"`, `"owner"`)  |
| member.member | object | - |
| member.member.type | string | const (`"Contact"`)  |
| member.member.name | string | - |
| member.member.identifier | object |  1 properties |
| member.memberOf | object | - |
| member.memberOf.type | string | const (`"MarketingProgram"`)  |
| member.memberOf.name | string | - |
| member.memberOf.identifier | object |  1 properties |
| creator | string | creator / author of the item format (`uri`) |
| dateCreated | string | The date on which the item was created. format (`date-time`) |
| dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. format (`date-time`) |
| about | object | a physical location |
| about.type | string | allowed (`"Place"`) The item type (Linked-Data @type) |
| about.address | object | A physical address. |
| about.geo | object | a geo shape (circle or box) |

