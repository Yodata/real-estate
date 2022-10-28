---
title: Question
route: /types/Question
menu: Types
---# Question
A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | The item type (Linked-Data @type)  |
| text | string | the question content  |

### Example
```json
{
  "type": "Question",
  "text": "I would like to view 123 Main Street."
}
```
