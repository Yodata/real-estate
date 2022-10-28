---
title: Language
route: /types/Language
menu: Types
---# Language
a written or spoken Language


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | Language  |
| name | string | the display name of the language  |
| additionalName | string | BCP 47 language code  |

### Example
```json
{
  "type": "Language",
  "name": "English",
  "additionalName": "en-US"
}
```