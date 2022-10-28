---
title: RealEstateWebsite
route: /types/RealEstateWebsite
menu: Types
---# RealEstateWebsite

## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | RealEstateWebsite  |
| about | object | subject of the website <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateOffice](/types/RealEstateOffice), [RealEstateOrganization](/types/RealEstateOrganization) |
| url | string&lt;uri&gt;  | URL of the item.  |

### Example
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