---
title: ContactPoint
---
| Name | Type | Description |
|---|---|---|
| (root) | object | A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. |
| ContactPoint.type | string | - |
| ContactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| ContactPoint.telephone | string | - |
| ContactPoint.faxNumber | string | - |
| ContactPoint.email | string | an email address for the item. |
| ContactPoint.url | string | primary URL for the item. |

> Examples of ContactPoint

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


