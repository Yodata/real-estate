---
title: ApplicationProfile
---
| Name | Type | Description |
|---|---|---|
| (root) | allOf | - |
| ApplicationProfile.0 (allOf item) | allOf | - |
| ApplicationProfile.0.0 (allOf item) | object | - |
| ApplicationProfile.0.0.type | string | The item type (Linked-Data @type) |
| ApplicationProfile.0.0.@id | string | the liked data uri for the Thing |
| ApplicationProfile.0.0 (property names) | - | - |
| ApplicationProfile.0.1 (allOf item) | object | a solid profile document |
| ApplicationProfile.0.1.id | string | - |
| ApplicationProfile.0.1.type | string | - |
| ApplicationProfile.0.1.primaryTopic | string | - |
| ApplicationProfile.0.1.#me | object | - |
| ApplicationProfile.0.1.#me.type | string | - |
| ApplicationProfile.0.1.#me.inbox | string | URI to your Linked-Data-Notifications Inbox |
| ApplicationProfile.0.1.#me.outbox | string | URI to your Linked-Data-Notifications Outbox |
| ApplicationProfile.0.1.#me.storage | string | URI to your storage root. |
| ApplicationProfile.0.1.#me.preferencesFile | string | URI to shared application prefs. |
| ApplicationProfile.0.1.#me.account | string | discoverable solid:account root |
| ApplicationProfile.0.1.#me.privateTypeIndex | string | type index for your private use |
| ApplicationProfile.0.1.#me.publicTypeIndex | string | shared, discoverable type index |
| ApplicationProfile.0.1.#me.permissions | array<object> | Permissions required by an linked-data application or service. |
| ApplicationProfile.0.1.#me.permissions (single item) | object | - |
| ApplicationProfile.1 (allOf item) | object | - |
| ApplicationProfile.1.id | string | - |
| ApplicationProfile.1.type | string | - |
| ApplicationProfile.1.inbox | string | discoverable uri to your LDN inbox |
| ApplicationProfile.1.outbox | string | discoverable uri to your LDN outbox |
| ApplicationProfile.1.storage | string | uri to your linked-data storage root |
| ApplicationProfile.1.preferencesFile | string | discoverable uri for shared application preferences |
| ApplicationProfile.1.account | string | discoverable solid:account root |
| ApplicationProfile.1.privateTypeIndex | string | type index for your private use |
| ApplicationProfile.1.publicTypeIndex | string | shared, discoverable type index |
| ApplicationProfile.1.permissions | array<string> | the subscription types required by your service. |
| ApplicationProfile.1.permissions (single item) | string | - |

> Examples of ApplicationProfile

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


