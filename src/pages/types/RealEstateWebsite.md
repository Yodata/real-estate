---
title: RealEstateWebsite
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| type | string | allowed (`"RealEstateWebsite"`) RealEstateWebsite |
| about | object | subject of the website |
| url | string | URL of the item. format (`uri`) |

## Example



```json
{
  "type": "RealEstateWebsite",
  "about": {
    "type": "RealEstateAgent",
    "id": "http://agent.example.com/profile/card#me"
  },
  "url": "http://example.com"
}
```
