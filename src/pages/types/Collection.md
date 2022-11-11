---
title: Collection
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | a set of items. |
| type | string | allowed (`"Collection"`) Collection |
| name | string | name of the collection |
| identifier | object | examples (`{"salesforceid":"0031U00002XW1QWQA1"}`, `{"vendoraid":"123456"}`, `{"originating_system_id":"123456"}`) identifier assigned to a contact by the vendor who originally created the contact |
| creator | string | creator of the collection |
| dateCreated | string | format (`date-time`) The date on which the item was created. |
| dateModified | string | format (`date-time`) The date on which the item was most recently modified or when the item's entry was modified within a DataFeed. |
| member | array<object> | members of the collection |
| member (single item) | object | - |

## Example



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
