---
title: contact#delete
---
## Message

*a contact (data.object) is deleted by a user (data.agent)*

### Payload Example(s) (generated)

```json


{
    "topic": "realestate/contact#delete",
    "data": {
        "type": "DeleteAction",
        "actionStatus": "CompletedActionStatus",
        "agent": "https://0000000.bhhs.hsfaffiliates.com/profile/card#me",
        "instrument": "https://ace.bhhs.hsfaffiliates.com/profile/card#me",
        "object": {
            "type": "Contact",
            "identifier": {
                "salesforceId": "***************"
            },
            "sameAs": {
                "salesforceId": "***************"
            },
            "givenName": "Test",
            "familyName": "Test",
            "address": [
                {
                    "streetAddress": "Test",
                    "addressLocality": "Suamico",
                    "addressCountry": "United States"
                }
            ],
            "leadOwner": {
                "type": "RealEstateAgent",
                "id": "https://0000000.bhhs.hsfaffiliates.com/profile/card#me"
            },
            "additionalProperty": {
                "salesforceId": "Test",
                "doNotSellPersonalInformation": false,
                "transactionType": "Other"
            },
            "contactPoint": []
        }
    },
    "source": "https://0000000.bhhs.hsfaffiliates.com/profile/card#me",
    "instrument": "https://ace.bhhs.hsfaffiliates.com/profile/card#me",
    "recipient": "https://0000000.bhhs.hsfaffiliates.com/profile/card#me",
    "@id": "https://ace.bhhs.hsfaffiliates.com/publish/Test",
    "id": "https://ace.bhhs.hsfaffiliates.com/publish/Test",
    "time": "2025-02-25T03:20:46.478Z",
    "timestamp": 1740453646478
}

// {
//   "topic": "realestate/contact#delete",
//   "data": {
//     "type": "DeleteAction",
//     "agent": {
//       "type": "Person",
//       "name": "string",
//       "email": "user@example.com",
//       "identifier": {
//         "bhhsconsumerid": "12345"
//       }
//     },
//     "object": {
//       "type": "Contact",
//       "identifier": {
//         "bhhsconsumerid": "12345"
//       },
//     "originatingSystem": {
//         "type": "SoftwareApplication",
//         "name": "RDesk",
//         "description": "User Created.",
//         "url": "http://www.rdeskwebsite.com/"
//     }, 
//     }
//   }
// }
```



### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/contact#delete"`)  |
| data | object | - |
| data.type | string | const (`"DeleteAction"`)  |
| data.actionStatus | string | const (`"CompletedActionStatus"`) |
| data.agent |  string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| data.instrument | string&lt;uri&gt;  | data instrument |
| data.object.type | string | const (`"Contact"`)  |
| data.object.identifier.salesforceId | string |  identifier Salesforce Id |
| data.object.sameAs.salesforceId | string |  sameAs Salesforce Id |
| data.object.givenName  | string |  given name |
| data.object.familyName | string | family name |
| data.object.address | array of object |  object has { streetAddress addressLocality , addressCountry } |
| data.object.leadOwner.type | string |  type of lead owner |
| data.object.leadOwner.id   |  string&lt;uri&gt; |  id(url) of lead owner |
| data.object.additionalProperty.salesforceId | string | salesforce Id |
| data.object.additionalProperty.doNotSellPersonalInformation | bool | false |
| data.object.additionalProperty.transactionType |string | transaction type  |
| data.object.contactPoint | array | contact point array |
| data.source | string |  format (`uri`) |
| data.instrument | string |  format (`uri`) |
| data.recipient | string |  format (`uri`) | 
| data.@id | string |  format (`uri`) |
| data.id  | string |  format (`uri`) | 
| data.time | string | date & time the event was produced format (`date-time`) |
| data.timestamp | string | time in numbers |  

### Headers

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| time | string | date & time the event was produced format (`date-time`) |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient format (`uri`) |
| instrument | string | the app or service that produced the event on behalf of the agent/user format (`uri`) |
| source | string | a copy of the event was sent to the source(s). format (`uri`) |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source format (`uri`) |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. format (`uri`) |
| @id | string |  format (`uri`) |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


