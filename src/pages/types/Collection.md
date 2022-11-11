---
title: Collection
---
| Name | Type | Description |
|---|---|---|
| (root) | object | a set of items. |
| Collection.type | string | Collection |
| Collection.name | string | name of the collection |
| Collection.identifier | object | identifier assigned to a contact by the vendor who originally created the contact |
| Collection.creator | string | creator of the collection |
| Collection.dateCreated | string | The date on which the item was created. |
| Collection.dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. |
| Collection.member | array<object> | members of the collection |
| Collection.member (single item) | object | - |

> Examples of Collection

```json
{
  "type": "Collection",
  "name": "Clients",
  "identifier": {
    "salesforceid": "0031U00002XW1QWQA1"
  },
  "creator": "https://{agentid}.example.com/profile/card#me",
  "dateCreated": "2019-08-24T14:15:22Z",
  "dateModified": "2019-08-24T14:15:22Z",
  "member": [
    {}
  ]
}
```


