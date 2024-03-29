---
title: Comment
---
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

## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | A comment on an item. |
| type | string | const (`"Comment"`)  |
| dateCreated | string | The date on which the item was created. format (`date-time`) |
| dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. format (`date-time`) |
| dateDeleted | string | The date on which the item was deleted. format (`date-time`) |
| text | string | - |
| author | object | the author of something |
| about | object | The subject of the content |
| identifier | object |  1 properties |

