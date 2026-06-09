---
title: lead#accept
---

## Message

_a lead (data.object) was accepted by the recipient (data.recipient)._

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/lead#accept",
  "data": {
    "agent": "https://ca326.bhhs.hsfaffiliates.com/profile/card#me",
    "recipient": "https://ca326.bhhs.hsfaffiliates.com/profile/card#me",
    "type": "AcceptAction",
    "dateSent": "2026-06-09T19:02:26.277443623Z",
    "object": {
      "type": "Lead",
      "identifier": {
        "bhhsconsumerid": "12345",
        "ProspectConverterId": "129810925"
      },
      "object": {
        "type": "Contact",
        "name": "Joe Smith",
        "telephone": "731-620-9877 x6155",
        "email": "Giuseppe.Lang62@hotmail.com",
        "givenName": "Nicole",
        "familyName": "Green",
        "sameAs": {
          "cregcontactkey": "14457937",
          "redContact_Guid": "fa2ab3b1-ebb1-45f8-908b-5e8609d40a41",
          "ProspectConverterId": 129810737
        },
        "additionalProperty": {
          "redPreferredContactMethod": "No Preference",
          "redPreferredTime": "",
          "preferredLanguage": "en-US",
          "preferredCurrency": "USD",
          "preferredUnits": "Imperial",
          "marketingViaEmailOptIn": true,
          "marketingViaSmsOptIn": false,
          "userPath": "https://www.bhhs.com/fox-and-roach-realtors-pa301/philadelphia/fran="
        }
      },
      "originatingSystem": {
        "type": "SoftwareApplication",
        "name": "RDesk",
        "description": "User Created.",
        "url": "http://www.rdeskwebsite.com/"
      },
      "recipient": "http://{lead-recipient}.example.com/profile/card#me",
      "sender": "http://{lead-sender}.example.com/profile/card#me",
      "owner": "http://{lead-owner}.example.com/profile/card#me",
      "dateAccepted": "2019-11-25T04:23:32.000Z",
      "dateRejected": "2019-08-24T14:15:22Z",
      "dateSent": "2019-08-24T14:15:22Z",
      "dateReceived": "2019-11-25T04:23:32.000Z",
      "leadSource": [
        {
          "type": "AskAction",
          "object": {
            "type": "Question",
            "text": "Help me I'm trapped inside documentation."
          },
          "instrument": {
            "type": "RealEstateWebsite",
            "name": "Office Website"
          },
          "recipient": "https://NY3.bhhs.hsfaffiliates.com/profile/card#me",
          "agent": {
            "type": "Contact",
            "identifier": {
              "hsfconsumerid": "77ba494b-dewfewfe-a16da9b46ccc"
            },
            "sameAs": {
              "cregcontactkey": "14457947",
              "redContact_Guid": "06611e1c-9ewfewfewf618405737"
            },
            "name": "Nicole Green",
            "givenName": "Nicole",
            "familyName": "Green",
            "email": "nicolfewfwefef0269@gmail.com",
            "dateCreated": "2026-06-09T18:13:28.347Z",
            "dateModified": "2026-06-09T18:13:28.347Z",
            "contactPoint": [
              {
                "type": "ContactPoint",
                "kind": "EmailAddress",
                "name": "primary",
                "email": "nicofrfwen0269@gmail.com"
              }
            ],
            "additionalProperty": {
              "redPreferredContactMethod": "No Preference",
              "redPreferredTime": "",
              "preferredLanguage": "en-US",
              "preferredCurrency": "USD",
              "preferredUnits": "Imperial",
              "marketingViaEmailOptIn": true,
              "marketingViaSmsOptIn": false,
              "userPath": "https://www.bhhsheritagererfwrfealty.com/search?SearchInput=13760%2BEndicott%2B&SearchType=PostalCode&PropertyType=1%2C2%2C3&App"
            }
          }
        }
      ]
    }
  }
}
```

### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/lead#accept"`) |
| data | object | - |
| data.agent | string | user associated with the action format (`uri`) |
| data.recipient | string | recipient of the action format (`uri`) |
| data.type | string | const (`"AcceptAction"`) |
| data.dateSent | string | date/time the action was sent format (`date-time`) |
| data.object | object | A sales opportunity offered by a sender to a recipient. |
| data.object.type | string | allowed (`"Lead"`) |
| data.object.identifier | object | Lead identifiers. |
| data.object.identifier.bhhsconsumerid | string | BHHS consumer identifier. |
| data.object.identifier.ProspectConverterId | string | Prospect Converter lead identifier. |
| data.object.object | object | The lead contact. |
| data.object.object.type | string | allowed (`"Contact"`) |
| data.object.object.name | string | Full name of the contact. |
| data.object.object.telephone | string | Contact phone number. |
| data.object.object.email | string | Contact email address format (`email`) |
| data.object.object.givenName | string | First name of the contact. |
| data.object.object.familyName | string | Last name of the contact. |
| data.object.object.sameAs | object | External system identifiers for the contact. |
| data.object.object.sameAs.cregcontactkey | string | CREG contact key. |
| data.object.object.sameAs.redContact_Guid | string | RED contact GUID. |
| data.object.object.sameAs.ProspectConverterId | number | Prospect Converter contact identifier. |
| data.object.object.additionalProperty | object | Additional contact preferences and source metadata. |
| data.object.object.additionalProperty.redPreferredContactMethod | string | Preferred contact method. |
| data.object.object.additionalProperty.redPreferredTime | string | Preferred contact time. |
| data.object.object.additionalProperty.preferredLanguage | string | Preferred language. |
| data.object.object.additionalProperty.preferredCurrency | string | Preferred currency. |
| data.object.object.additionalProperty.preferredUnits | string | Preferred units. |
| data.object.object.additionalProperty.marketingViaEmailOptIn | boolean | Marketing email opt-in status. |
| data.object.object.additionalProperty.marketingViaSmsOptIn | boolean | Marketing SMS opt-in status. |
| data.object.object.additionalProperty.userPath | string | User path or source page URL. |
| data.object.originatingSystem | object | Original system where this lead was created. |
| data.object.originatingSystem.type | string | Type of originating system. |
| data.object.originatingSystem.name | string | Name of originating system. |
| data.object.originatingSystem.description | string | Description of originating system. |
| data.object.originatingSystem.url | string | Originating system URL format (`uri`) |
| data.object.recipient | string | Lead recipient format (`uri`) |
| data.object.sender | string | Lead sender/provider format (`uri`) |
| data.object.owner | string | Original owner of the lead format (`uri`) |
| data.object.dateAccepted | string | Date/time the lead was accepted format (`date-time`) |
| data.object.dateRejected | string | Date/time the lead was rejected format (`date-time`) |
| data.object.dateSent | string | Date/time the lead was sent format (`date-time`) |
| data.object.dateReceived | string | Date/time the lead was received format (`date-time`) |
| data.object.leadSource | array<object> | Lead origin. May be a website event, website, mobile application, or other source. |
| data.object.leadSource.type | string | Lead source action type. |
| data.object.leadSource.object | object | Lead source object. |
| data.object.leadSource.object.type | string | Type of lead source object. |
| data.object.leadSource.object.text | string | Lead source question or message text. |
| data.object.leadSource.instrument | object | App, website, or service that produced the lead source event. |
| data.object.leadSource.instrument.type | string | Type of instrument. |
| data.object.leadSource.instrument.name | string | Name of instrument. |
| data.object.leadSource.recipient | string | Recipient associated with the lead source format (`uri`) |
| data.object.leadSource.agent | object | Agent/contact associated with the lead source. |
| data.object.leadSource.agent.type | string | allowed (`"Contact"`) |
| data.object.leadSource.agent.identifier | object | Agent identifiers. |
| data.object.leadSource.agent.identifier.hsfconsumerid | string | HSF consumer identifier. |
| data.object.leadSource.agent.sameAs | object | External system identifiers for the agent/contact. |
| data.object.leadSource.agent.sameAs.cregcontactkey | string | CREG contact key. |
| data.object.leadSource.agent.sameAs.redContact_Guid | string | RED contact GUID. |
| data.object.leadSource.agent.name | string | Full name of the agent/contact. |
| data.object.leadSource.agent.givenName | string | First name of the agent/contact. |
| data.object.leadSource.agent.familyName | string | Last name of the agent/contact. |
| data.object.leadSource.agent.email | string | Agent/contact email address format (`email`) |
| data.object.leadSource.agent.dateCreated | string | Date/time the agent/contact was created format (`date-time`) |
| data.object.leadSource.agent.dateModified | string | Date/time the agent/contact was modified format (`date-time`) |
| data.object.leadSource.agent.contactPoint | array<object> | Contact points for the agent/contact. |
| data.object.leadSource.agent.contactPoint.type | string | const (`"ContactPoint"`) |
| data.object.leadSource.agent.contactPoint.kind | string | Contact point kind, such as EmailAddress. |
| data.object.leadSource.agent.contactPoint.name | string | Contact point label. |
| data.object.leadSource.agent.contactPoint.email | string | Contact point email format (`email`) |
| data.object.leadSource.agent.additionalProperty | object | Additional preferences and source metadata for the agent/contact. |
| data.object.leadSource.agent.additionalProperty.redPreferredContactMethod | string | Preferred contact method. |
| data.object.leadSource.agent.additionalProperty.redPreferredTime | string | Preferred contact time. |
| data.object.leadSource.agent.additionalProperty.preferredLanguage | string | Preferred language. |
| data.object.leadSource.agent.additionalProperty.preferredCurrency | string | Preferred currency. |
| data.object.leadSource.agent.additionalProperty.preferredUnits | string | Preferred units. |
| data.object.leadSource.agent.additionalProperty.marketingViaEmailOptIn | boolean | Marketing email opt-in status. |
| data.object.leadSource.agent.additionalProperty.marketingViaSmsOptIn | boolean | Marketing SMS opt-in status. |
| data.object.leadSource.agent.additionalProperty.userPath | string | User path or source page URL. |

### Headers

| Name              | Type   | Description                                                                                                                                                                                                                                                                                               |
| ----------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (root)            | object | -                                                                                                                                                                                                                                                                                                         |
| time              | string | date & time the event was produced format (`date-time`)                                                                                                                                                                                                                                                   |
| agent             | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient format (`uri`)                                                                                                               |
| instrument        | string | the app or service that produced the event on behalf of the agent/user format (`uri`)                                                                                                                                                                                                                     |
| source            | string | a copy of the event was sent to the source(s). format (`uri`)                                                                                                                                                                                                                                             |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source format (`uri`) |
| id                | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. format (`uri`)                                                                             |
| @id               | string | format (`uri`)                                                                                                                                                                                                                                                                                            |

### Tools

- [Mock Data Generator](/tools/mock-data-generator)
- [Schema Validator](/tools/validate)
