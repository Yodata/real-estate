---
title: Lead
route: /types/Lead
menu: Types
---# Lead
a sales opportunity (object) offered by a sender to a recipient.


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string | Lead  |
| identifier | object | key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.  |
| object | object | the lead (Contact) <br/>RANGE: [Contact](/types/Contact) |
| recipient | string&lt;uri&gt;  | the lead recipient  |
| sender | string&lt;uri&gt;  | the lead provider  |
| owner | string&lt;uri&gt;  | the original owner of the lead <br/>RANGE: [RealEstateOrganization](/types/RealEstateOrganization), [RealEstateAgent](/types/RealEstateAgent), [Person](/types/Person) |
| dateAccepted | string | The date/time the item was accepted by the recipient <br/>RANGE: [DateTime](/types/DateTime) |
| dateRejected | string&lt;date-time&gt;  | The date/time the item was rejected by the recipient  |
| dateSent | string&lt;date-time&gt;  | the date the lead was sent  |
| dateReceived | string | The date/time the item was received by it's recipient <br/>RANGE: [DateTime](/types/DateTime) |
| leadSource | [object] | lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton. <br/>RANGE: [Action](/types/Action), [RealEstateWebSite](/types/RealEstateWebSite), [MobileApplication](/types/MobileApplication) |

### Example
```json
{
  "type": "Lead",
  "identifier": {
    "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
  },
  "object": {
    "type": "Contact",
    "name": "Joe Smith",
    "telephone": "731-620-9877 x6155",
    "email": "Giuseppe.Lang62@hotmail.com"
  },
  "recipient": "http://{lead-recipient}.example.com/profile/card#me",
  "sender": "http://{lead-sender}.example.com/profile/card#me",
  "owner": "http://{lead-owner}.example.com/profile/card#me",
  "dateAccepted": "2019-11-25T04:23:32.000Z",
  "dateRejected": "2022-10-12T01:13:43Z",
  "dateSent": "2022-10-12T01:13:43Z",
  "dateReceived": "2019-11-25T04:23:32.000Z",
  "leadSource": [
    {
      "type": "AskAction",
      "object": {
        "type": "Question",
        "text": "Help me I'm trapped inside documentation."
      }
    }
  ]
}
```
