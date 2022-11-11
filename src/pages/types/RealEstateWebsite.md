---
title: RealEstateWebsite
---
## Schema

| Name | Type | Description |
|---|---|---|
| (RealEstateWebsite) | object | - |
| type | string | allowed (`"RealEstateWebsite"`) RealEstateWebsite |
| about | object | subject of the website |
| url | string | format (`uri`) URL of the item. |
| type | string | allowed (`"RealEstateWebsite"`) RealEstateWebsite |
| about | object | subject of the website |
| url | string | format (`uri`) URL of the item. |

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
