---
title: Comment
---
## Schema

| Name | Type | Description |
|---|---|---|
| (Comment) | object | A comment on an item. |
| type | string | const (`"Comment"`)  |
| dateCreated | string | format (`date-time`) The date on which the item was created. |
| dateModified | string | format (`date-time`) The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. |
| dateDeleted | string | format (`date-time`) The date on which the item was deleted. |
| text | string | examples (`"Populus debet control notitia sua"`, `"Aspicio pinguem in his vestimentis?"`, `"Et id ipsum vitae."`, `"Amici, Romani et cives, aures vestras mihi praebe"`, `"Heus, ego iustus occurrit tibi et hoc est insanus, sed hic numerus meus est, ut me vocas fortasse."`)  |
| author | object | examples (`{"type":"Contact","name":"Mark Twain","identifier":{"originatingSystemName":"originating-system-id"}}`, `{"type":"RealEstateAgent","name":"Andy Warhol","identifier":{"originatingSystemName":"originating-system-id"}}`, `{"name":"Stan Lee"}`, `{"email":"bob@example.com"}`, `{"telephone":"1-800-555-1212"}`) the author of something |
| about | object | examples (`{"type":"PropertyListing","streetAddress":"123 Main Street","addressLocality":"Anytown","addressRegion":"NY","postalCode":12345,"addressCountry":"US","identifier":{"originatingSystemName":"originatingsystemid"}}`) The subject of the content |
| identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| type | string | const (`"Comment"`)  |
| dateCreated | string | format (`date-time`) The date on which the item was created. |
| dateModified | string | format (`date-time`) The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. |
| dateDeleted | string | format (`date-time`) The date on which the item was deleted. |
| text | string | examples (`"Populus debet control notitia sua"`, `"Aspicio pinguem in his vestimentis?"`, `"Et id ipsum vitae."`, `"Amici, Romani et cives, aures vestras mihi praebe"`, `"Heus, ego iustus occurrit tibi et hoc est insanus, sed hic numerus meus est, ut me vocas fortasse."`)  |
| author | object | examples (`{"type":"Contact","name":"Mark Twain","identifier":{"originatingSystemName":"originating-system-id"}}`, `{"type":"RealEstateAgent","name":"Andy Warhol","identifier":{"originatingSystemName":"originating-system-id"}}`, `{"name":"Stan Lee"}`, `{"email":"bob@example.com"}`, `{"telephone":"1-800-555-1212"}`) the author of something |
| about | object | examples (`{"type":"PropertyListing","streetAddress":"123 Main Street","addressLocality":"Anytown","addressRegion":"NY","postalCode":12345,"addressCountry":"US","identifier":{"originatingSystemName":"originatingsystemid"}}`) The subject of the content |
| identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |

## Example



```json
{
  "type": "Comment",
  "dateCreated": "2019-08-24T14:15:22Z",
  "dateModified": "2019-08-24T14:15:22Z",
  "dateDeleted": "2019-08-24T14:15:22Z",
  "text": "Populus debet control notitia sua",
  "author": {
    "type": "Contact",
    "name": "Mark Twain",
    "identifier": {
      "originatingSystemName": "originating-system-id"
    }
  },
  "about": {
    "type": "Contact",
    "name": "Robin",
    "identifier": {
      "redContact_GUID": "6bf62a1b-225e-4fca-87b3-54cc09446a66"
    }
  },
  "identifier": {
    "redContact_Note_ID": "62c4a9ae-eba1-4c27-a2dd-afb4068695f8"
  }
}
```
