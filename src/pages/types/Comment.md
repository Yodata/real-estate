---
title: Comment
route: /types/Comment
menu: Types
---# Comment
A comment on an item.


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string! | Comment  |
| dateCreated | string&lt;date-time&gt;  | The date on which the item was created.  |
| dateModified | string&lt;date-time&gt;  | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.  |
| text | string! | the comment body  |
| author | object | the content author  |
| about | object | the action subject  |
| identifier | object | key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.  |

### Example
```json
{
  "type": "Comment",
  "dateCreated": "2022-10-12T01:13:43Z",
  "dateModified": "2022-10-12T01:13:43Z",
  "text": "That's a negative attitude, Robin.",
  "author": {
    "type": "RealEstateAgent",
    "name": "Batman"
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