---
title: TransactionParticipant
route: /types/TransactionParticipant
menu: Types
---# TransactionParticipant

## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | "TransactionParticipant"  |
| roleName | string | enum: Buyer,Seller  |
| position | number | numeric position for the participant/roleName.  |
| givenName | string | First Name of a person  |
| familyName | string | Last Name of a person  |
| additionalName | string | middleName or alternate name of the Person  |
| email | string&lt;email&gt;  | Primary email address.  |
| telephone | string | Primary phone number.  |
| affiliation | [string&lt;uri&gt; ] | person or organization associated with the participant  |

### Example
```json
{
  "type": "TransactionParticipant",
  "roleName": "Buyer",
  "position": 1,
  "givenName": "Glenn",
  "familyName": "Miller",
  "additionalName": "Big",
  "email": "user@example.com",
  "telephone": "+15558675309",
  "affiliation": [
    "https://{agentid}.example.com/profile/card#me"
  ]
}
```
