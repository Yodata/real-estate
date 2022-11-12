---
title: Collection
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | a set of items. |
| type | string | allowed (`"Collection"`) Collection |
| name | string | name of the collection |
| identifier | object |  1 properties |
| creator | string | creator of the collection |
| dateCreated | string | The date on which the item was created. format (`date-time`) |
| dateModified | string | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. format (`date-time`) |
| member | array<object> | members of the collection |
| member (single item) | object | - |

## Example



```json
{
  "type": "Collection",
  "name": "Clients",
  "identifier": {
    "bhhsconsumerid": "12345"
  },
  "creator": "https://{agentid}.example.com/profile/card#me",
  "dateCreated": "2019-08-24T14:15:22Z",
  "dateModified": "2019-08-24T14:15:22Z",
  "member": [
    {}
  ]
}
```
