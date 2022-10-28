---
title: ContactPoint
route: /types/ContactPoint
menu: Types
---# ContactPoint
A point of contact for the entity. By convention in the real estate domain, ContactPoints
are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values
for example, Work Telephone, Home, as named contactPoint values.



## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | ContactPoint  |
| name | string | a label for the contactPoint, i.e. 'Work', or 'Home'  |
| telephone | string | a telephone number  |
| faxNumber | string | a fax number  |
| email | string&lt;email&gt;  | an email address for the item.  |
| url | string&lt;uri&gt;  | primary URL for the item.  |

### Example
```json
{
  "type": "ContactPoint",
  "name": "Work",
  "telephone": "1-364-127-9618 x20418",
  "faxNumber": "834.320.1602",
  "email": "user@example.com",
  "url": "https://www.facebook.com/hallandoates"
}
```
