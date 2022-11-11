---
title: Profile
---
## Schema

| Name | Type | Description |
|---|---|---|
| (Profile) | object | - |
| id | string | document uri <span class='constraints'>format (`uri`)</span> |
| type | string | - |
| #me | object | - |
| #me.id | string |  <span class='constraints'>format (`uri`)</span> |
| #me.type | string | - |
| #me.inbox | string | discoverable uri to your LDN inbox |
| #me.outbox | string | discoverable uri to your LDN outbox |
| #me.storage | string | uri to your linked-data storage root |
| #me.preferencesFile | string | discoverable uri for shared application preferences |
| #me.account | string | discoverable solid:account root |
| #me.privateTypeIndex | string | type index for your private use |
| #me.publicTypeIndex | string | shared, discoverable type index |
| id | string | document uri <span class='constraints'>format (`uri`)</span> |
| type | string | - |
| #me | object | - |
| #me.id | string |  <span class='constraints'>format (`uri`)</span> |
| #me.type | string | - |
| #me.inbox | string | discoverable uri to your LDN inbox |
| #me.outbox | string | discoverable uri to your LDN outbox |
| #me.storage | string | uri to your linked-data storage root |
| #me.preferencesFile | string | discoverable uri for shared application preferences |
| #me.account | string | discoverable solid:account root |
| #me.privateTypeIndex | string | type index for your private use |
| #me.publicTypeIndex | string | shared, discoverable type index |

## Example



```json
{
  "id": "https://user.example.com/profile/card",
  "type": "ProfileDocument",
  "#me": {
    "id": "https://user.example.com/profile/card#me",
    "type": "SoftwareApplication",
    "inbox": "/inbox/",
    "outbox": "/outbox/",
    "storage": "/",
    "preferencesFile": "/settings/prefs",
    "account": "/",
    "privateTypeIndex": "/settings/privateTypeIndex",
    "publicTypeIndex": "/settings/publicTypeIndex"
  }
}
```
