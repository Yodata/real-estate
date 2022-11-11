---
title: RealEstateWebsite
---
## Schema

| Name | Type | Description |
|---|---|---|
| (RealEstateWebsite) | object | - |
| type | string | RealEstateWebsite |
| about | object | subject of the website |
| url | string | URL of the item. <span class='constraints'>format (`uri`)</span> |
| type | string | RealEstateWebsite |
| about | object | subject of the website |
| url | string | URL of the item. <span class='constraints'>format (`uri`)</span> |

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
