---
title: Event
---
| Name | Type | Description |
|---|---|---|
| (root) | object | An event happening at a certain time and location |
| Event.type | string | The item type (Linked-Data @type) |
| Event.name | string | name of the event |
| Event.description | string | event message content |
| Event.about | object | a subject of the meeting or event |
| Event.startDate | string | the start date-time (ISO 8601 formated) |
| Event.endDate | string | the end date-time (ISO 8601 formated) |
| Event.organizer | object | the event organizer |

> Examples of Event

```json
{
  "type": "Event",
  "name": "Property Showing 1007 Mountain Gate Rd",
  "description": "an example meeting request for 4:00PM to 4:30PM.",
  "about": {
    "type": "PropertyListing",
    "originatingSystemName": "GOTHAM-MLS",
    "originatingSystemKey": "12345",
    "url": "https://{company-website-url}/{path-to-listing}",
    "streetAddress": "1007 Mountain Gate Rd",
    "addressRegion": "New Jersey",
    "addressLocality": "Gotham City",
    "postalCode": "10010",
    "addressCountry": "USA",
    "listingPrice": {
      "type": "PriceSpecification",
      "price": 7500000,
      "priceCurrency": "USD"
    }
  },
  "startDate": "2019-08-01T16:00Z",
  "endDate": "2019-08-01T16:30Z",
  "organizer": {
    "type": "RealEstateAgent",
    "name": "Bruce Wayne",
    "id": "https://batman.example.com/profile/card#me"
  }
}
```


