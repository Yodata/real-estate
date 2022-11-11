---
title: Language
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | a written or spoken Language |
| type | string | const (`"Language"`)  |
| name | string | the display name of the language |
| additionalName | string | BCP 47 language code |

## Example



```json
{
  "type": "Language",
  "name": "English",
  "additionalName": "en-us"
}
```
