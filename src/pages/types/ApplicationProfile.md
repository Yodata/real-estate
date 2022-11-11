---
title: ApplicationProfile
---
## Schema

| Name | Type | Description |
|---|---|---|
| (ApplicationProfile) | allOf | - |
| 0 (allOf item) | allOf | - |
| 0 (allOf item) | object | - |
| type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| @id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| 0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| 1 (allOf item) | object | a solid profile document |
| 1.id | string |  <span class='constraints'>format (`uri`)</span> |
| 1.type | string | - |
| 1.primaryTopic | string | - |
| 1.#me | object | - |
| 1.#me.type | string | - |
| 1.#me.inbox | string | URI to your Linked-Data-Notifications Inbox |
| 1.#me.outbox | string | URI to your Linked-Data-Notifications Outbox |
| 1.#me.storage | string | URI to your storage root. |
| 1.#me.preferencesFile | string | URI to shared application prefs. |
| 1.#me.account | string | discoverable solid:account root |
| 1.#me.privateTypeIndex | string | type index for your private use |
| 1.#me.publicTypeIndex | string | shared, discoverable type index |
| 1.#me.permissions | array<object> | Permissions required by an linked-data application or service. |
| 1.#me.permissions (single item) | object | - |
| 1 (allOf item) | object | - |
| 1.id | string |  <span class='constraints'>format (`uri`)</span> |
| 1.type | string | - |
| 1.inbox | string | discoverable uri to your LDN inbox |
| 1.outbox | string | discoverable uri to your LDN outbox |
| 1.storage | string | uri to your linked-data storage root |
| 1.preferencesFile | string | discoverable uri for shared application preferences |
| 1.account | string | discoverable solid:account root |
| 1.privateTypeIndex | string | type index for your private use |
| 1.publicTypeIndex | string | shared, discoverable type index |
| 1.permissions | array<string> | the subscription types required by your service. |
| 1.permissions (single item) | string | - |
| 0 (allOf item) | allOf | - |
| 0 (allOf item) | object | - |
| type | string | The item type (Linked-Data @type) <span class='constraints'>pattern (`^[A-Z][a-zA-Z0-9]+$`)</span> |
| @id | string | the liked data uri for the Thing <span class='constraints'>format (`uri`)</span> |
| 0 (property names) | - |  <span class='constraints'>pattern (`^[a-z@$][a-zA-Z0-9-_]+$`)</span> |
| 1 (allOf item) | object | a solid profile document |
| 1.id | string |  <span class='constraints'>format (`uri`)</span> |
| 1.type | string | - |
| 1.primaryTopic | string | - |
| 1.#me | object | - |
| 1.#me.type | string | - |
| 1.#me.inbox | string | URI to your Linked-Data-Notifications Inbox |
| 1.#me.outbox | string | URI to your Linked-Data-Notifications Outbox |
| 1.#me.storage | string | URI to your storage root. |
| 1.#me.preferencesFile | string | URI to shared application prefs. |
| 1.#me.account | string | discoverable solid:account root |
| 1.#me.privateTypeIndex | string | type index for your private use |
| 1.#me.publicTypeIndex | string | shared, discoverable type index |
| 1.#me.permissions | array<object> | Permissions required by an linked-data application or service. |
| 1.#me.permissions (single item) | object | - |
| 1 (allOf item) | object | - |
| 1.id | string |  <span class='constraints'>format (`uri`)</span> |
| 1.type | string | - |
| 1.inbox | string | discoverable uri to your LDN inbox |
| 1.outbox | string | discoverable uri to your LDN outbox |
| 1.storage | string | uri to your linked-data storage root |
| 1.preferencesFile | string | discoverable uri for shared application preferences |
| 1.account | string | discoverable solid:account root |
| 1.privateTypeIndex | string | type index for your private use |
| 1.publicTypeIndex | string | shared, discoverable type index |
| 1.permissions | array<string> | the subscription types required by your service. |
| 1.permissions (single item) | string | - |

## Example



```json
{
  "type": "SoftwareApplication",
  "@id": "http://example.com",
  "id": "https://user.example.com/profile/card#me",
  "primaryTopic": "#me",
  "#me": {
    "type": "SoftwareApplication",
    "inbox": "/inbox/",
    "outbox": "/outbox/",
    "storage": "/",
    "preferencesFile": "/settings/prefs",
    "account": "/",
    "privateTypeIndex": "/settings/privateTypeIndex",
    "publicTypeIndex": "/settings/publicTypeIndex",
    "permissions": [
      "profile:read"
    ]
  },
  "inbox": "/inbox/",
  "outbox": "/outbox/",
  "storage": "/",
  "preferencesFile": "/settings/prefs",
  "account": "/",
  "privateTypeIndex": "/settings/privateTypeIndex",
  "publicTypeIndex": "/settings/publicTypeIndex",
  "permissions": [
    "profile:read"
  ]
}
```
