---
title: TransactionParticipant
---
| Name | Type | Description |
|---|---|---|
| (root) | object | a participant in a transaction, i.e. Buyer, Seller, etc... |
| TransactionParticipant.type | string | - |
| TransactionParticipant.roleName | string | the role of the participant in the transaction |
| TransactionParticipant.position | number | numeric position for the participant/roleName. |
| TransactionParticipant.givenName | string | First Name of a person |
| TransactionParticipant.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) |
| TransactionParticipant.additionalName | string | middleName or alternate name of the Person |
| TransactionParticipant.email | string | - |
| TransactionParticipant.telephone | string | Primary phone number. |
| TransactionParticipant.affiliation | array<string> | person or organization associated with the participant |
| TransactionParticipant.affiliation (single item) | string | - |

> Examples of TransactionParticipant

```json
{
  "type": "TransactionParticipant",
  "roleName": "Buyer",
  "position": 1,
  "givenName": "John",
  "familyName": "Smith",
  "additionalName": "Big",
  "email": "user@example.com",
  "telephone": "+15558675309",
  "affiliation": [
    "https://{agentid}.example.com/profile/card#me"
  ]
}
```


