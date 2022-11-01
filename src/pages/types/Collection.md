---
title: Collection
route: /types/Collection
menu: Types
---# Collection
a set of items.


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string! | Collection  |
| name | string | name of the collection  |
| identifier | object | key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.  |
| creator | string | creator of the collection  |
| dateCreated | string&lt;date-time&gt;  | The date on which the item was created.  |
| dateModified | string&lt;date-time&gt;  | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.  |
| member | [object] | members of the collection  |

### Example
```json
{
  "type": "Collection",
  "name": "Clients",
  "identifier": {
    "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
  },
  "creator": "https://{agentid}.example.com/profile/card#me",
  "dateCreated": "2022-10-12T01:13:43Z",
  "dateModified": "2022-10-12T01:13:43Z",
  "member": [
    {}
  ]
}
```
