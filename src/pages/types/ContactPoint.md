---
title: ContactPoint
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | >= 3 properties A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. |
| type | string | const (`"ContactPoint"`)  |
| name | string | examples (`"Work"`, `"Home"`, `"Vacation"`, `"Bob's Cell"`, `"Alice's Work"`) a label for the contactPoint, i.e. 'Work', or 'Home' |
| telephone | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| faxNumber | string | examples (`"555-555-5555"`, `"555-555-5555 x123"`, `"555-555-5555 ext. 123"`, `"+1-555-555-5555"`)  |
| email | string | examples (`"bob@example.com"`, `"alice@example.com"`) format (`email`) an email address for the item. |
| url | string | format (`uri`) primary URL for the item. |

## Example



```json
{
  "type": "ContactPoint",
  "name": "Work",
  "telephone": "555-555-5555",
  "faxNumber": "555-555-5555",
  "email": "bob@example.com",
  "url": "https://www.facebook.com/hallandoates"
}
```
