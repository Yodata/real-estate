---
title: MarketingProgram
---
## Schema

| Name | Type | Description |
|---|---|---|
| (MarketingProgram) | object | A collection of pre-defined activities which take place over a period of time or in a regular, ongoing schedule. |
| type | string | - |
| name | string | the name of the item |
| identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| member | array<object> | - |
| member.type | string | - |
| member.role | string | - |
| member.member | object | - |
| member.member.type | string | - |
| member.member.name | string | - |
| member.member.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| member.memberOf | object | - |
| member.memberOf.type | string | - |
| member.memberOf.name | string | - |
| member.memberOf.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| creator | string | creator / author of the item <span class='constraints'>format (`uri`)</span> |
| dateCreated | string | The date on which the item was created. <span class='constraints'>format (`date-time`)</span> |
| dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. <span class='constraints'>format (`date-time`)</span> |
| about | object | a physical location |
| about.type | string | The item type (Linked-Data @type) |
| about.address | object | A physical address. |
| about.geo | object | a geo shape (circle or box) |
| type | string | - |
| name | string | the name of the item |
| identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| member | array<object> | - |
| member.type | string | - |
| member.role | string | - |
| member.member | object | - |
| member.member.type | string | - |
| member.member.name | string | - |
| member.member.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| member.memberOf | object | - |
| member.memberOf.type | string | - |
| member.memberOf.name | string | - |
| member.memberOf.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| creator | string | creator / author of the item <span class='constraints'>format (`uri`)</span> |
| dateCreated | string | The date on which the item was created. <span class='constraints'>format (`date-time`)</span> |
| dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. <span class='constraints'>format (`date-time`)</span> |
| about | object | a physical location |
| about.type | string | The item type (Linked-Data @type) |
| about.address | object | A physical address. |
| about.geo | object | a geo shape (circle or box) |

## Example



```json
{
  "type": "MarketingProgram",
  "name": "Market Activity Report for 508 Homeward Avenue",
  "identifier": {
    "salesforceid": "0031U00002XW1QWQA1"
  },
  "member": [
    {
      "type": "ProgramMembership",
      "role": "member",
      "member": {
        "type": "Contact",
        "name": "string",
        "identifier": {
          "salesforceid": "0031U00002XW1QWQA1"
        }
      },
      "memberOf": {
        "type": "MarketingProgram",
        "name": "Market Activity Report 508 Homewood Ave",
        "identifier": {
          "salesforceid": "0031U00002XW1QWQA1"
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
