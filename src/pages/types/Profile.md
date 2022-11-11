---
title: Profile
---
| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| Profile.id | string | document uri |
| Profile.type | string | - |
| Profile.#me | object | - |
| Profile.#me.id | string | - |
| Profile.#me.type | string | - |
| Profile.#me.inbox | string | discoverable uri to your LDN inbox |
| Profile.#me.outbox | string | discoverable uri to your LDN outbox |
| Profile.#me.storage | string | uri to your linked-data storage root |
| Profile.#me.preferencesFile | string | discoverable uri for shared application preferences |
| Profile.#me.account | string | discoverable solid:account root |
| Profile.#me.privateTypeIndex | string | type index for your private use |
| Profile.#me.publicTypeIndex | string | shared, discoverable type index |

> Examples of Profile

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


