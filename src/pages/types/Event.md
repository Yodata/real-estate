---
title: Event
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | An event happening at a certain time and location |
| type | string | The item type (Linked-Data @type) |
| name | string | name of the event |
| description | string | event message content |
| about | object | a subject of the meeting or event |
| startDate | string | format (`date-time`) the start date-time (ISO 8601 formated) |
| endDate | string | format (`date-time`) the end date-time (ISO 8601 formated) |
| organizer | object | the event organizer |

## Example



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
