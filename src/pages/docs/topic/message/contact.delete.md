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
            "givenName": "Test", //optional
            "familyName": "Test",  //optional
            "address": [   //optional
                { 
                    "streetAddress": "Test",
                    "addressLocality": "Suamico",
                    "addressCountry": "United States"
                }
            ],
            "leadOwner": {  //optional
                "type": "RealEstateAgent",
                "id": "https://0000000.bhhs.hsfaffiliates.com/profile/card#me"
            },
            "additionalProperty": {  //optional
                "salesforceId": "Test",
                "doNotSellPersonalInformation": false,
                "transactionType": "Other"
            },
            "contactPoint": []  //optional
        }
    },
    "source": "https://0000000.bhhs.hsfaffiliates.com/profile/card#me",
    "recipient": "https://0000000.bhhs.hsfaffiliates.com/profile/card#me",
}

```



### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/contact#delete"`)  |
| data | object | - |
| data.type | string | const (`"DeleteAction"`)  |
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
| data.recipient | string |  format (`uri`) | 
 

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


