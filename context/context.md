---
id: context
name: JSON-LD Context
menu: JSON-LD Context
---

```yaml
'@context':
  # unless stated otherwise, terms are schema.org
  - '@vocab': 'http://schema.org/'
  # aliasing json-ld @type and @id for convenience
  - type: @type
    id: @id
  # context for HSF specific mappings 
  - hsf: 'https://yodata.io/hsf/reflex/context#'
```
