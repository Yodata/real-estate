---
title: TransactionParticipant
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | a participant in a transaction, i.e. Buyer, Seller, etc... |
| type | string | const (`"TransactionParticipant"`)  |
| roleName | string | examples (`"Buyer"`, `"Seller"`) the role of the participant in the transaction |
| position | number | numeric position for the participant/roleName. |
| givenName | string | examples (`"John"`, `"Jane"`, `"Mary"`, `"Joseph"`, `"William"`, `"David"`, `"Richard"`, `"Charles"`, `"Thomas"`, `"Christopher"`, `"Daniel"`, `"Matthew"`, `"Anthony"`, `"Donald"`, `"Mark"`, `"Paul"`, `"Steven"`, `"Andrew"`, `"Kenneth"`, `"George"`, `"Joshua"`, `"Kevin"`, `"Brian"`, `"Edward"`, `"Ronald"`, `"Timothy"`, `"Jason"`, `"Jeffrey"`, `"Ryan"`, `"Jacob"`) First Name of a person |
| familyName | string | examples (`"Smith"`, `"Jones"`, `"Parker"`, `"Monk"`, `"Brown"`, `"Miller"`, `"Davis"`, `"Wilson"`, `"Fitzgerald"`, `"Johnson"`, `"Williams"`) <= 50 characters Last Name of a person. [Family Name](https://schema.org/familyName) |
| additionalName | string | middleName or alternate name of the Person |
| email | string | format (`email`)  |
| telephone | string | Primary phone number. |
| affiliation | array<string> | person or organization associated with the participant |
| affiliation (single item) | string | format (`uri`)  |

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
