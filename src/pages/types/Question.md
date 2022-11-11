---
title: Question
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document. |
| type | string | const (`"Question"`)  |
| text | string | examples (`"Populus debet control notitia sua"`, `"Aspicio pinguem in his vestimentis?"`, `"Et id ipsum vitae."`, `"Amici, Romani et cives, aures vestras mihi praebe"`, `"Heus, ego iustus occurrit tibi et hoc est insanus, sed hic numerus meus est, ut me vocas fortasse."`)  |

## Example



```json
{
  "type": "Question",
  "text": "Populus debet control notitia sua"
}
```
