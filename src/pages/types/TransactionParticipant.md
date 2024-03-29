---
title: TransactionParticipant
---
## Example



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

## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | a participant in a transaction, i.e. Buyer, Seller, etc... |
| type | string | const (`"TransactionParticipant"`)  |
| roleName | string | the role of the participant in the transaction |
| position | number | numeric position for the participant/roleName. |
| givenName | string | First Name of a person |
| familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) <= 50 characters |
| additionalName | string | middleName or alternate name of the Person |
| email | string | a valid email address format (`email`) |
| telephone | string | Primary phone number. |
| affiliation | array<string> | person or organization associated with the participant |
| affiliation (single item) | string |  format (`uri`) |

