---
title: lead
---

## Operations### SUB `lead` Operation

Accepts **one of** the following messages:

#### Message `lead#accept`

*a lead (data.object) was accepted by the recipient (data.recipient).*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/lead#accept",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AcceptAction",
    "object": {
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
      "dateRejected": "2019-08-24T14:15:22Z",
      "dateSent": "2019-08-24T14:15:22Z",
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
    },
    "agent": "https://{the-user-who-accepted-the-item}.com/profile/card#me"
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `lead#add`

*a crm lead was created*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/lead#add",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AddAction",
    "object": {
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
      "dateRejected": "2019-08-24T14:15:22Z",
      "dateSent": "2019-08-24T14:15:22Z",
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
    },
    "targetCollection": {}
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `lead#asssign`

*a lead was assigned*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/lead#assign",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "string",
    "object": {
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
      "dateRejected": "2019-08-24T14:15:22Z",
      "dateSent": "2019-08-24T14:15:22Z",
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
    },
    "agent": "http://example.com"
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `lead#update`

*a crm lead was updated*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/lead#update",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "UpdateAction",
    "object": {
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
      "dateRejected": "2019-08-24T14:15:22Z",
      "dateSent": "2019-08-24T14:15:22Z",
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
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `lead#reject`

*a crm lead was rejected*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/lead#reject",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RejectAction",
    "object": {
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
      "dateRejected": "2019-08-24T14:15:22Z",
      "dateSent": "2019-08-24T14:15:22Z",
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
    },
    "participant": {
      "type": "RealEstateOrganization",
      "name": "Gotham City Real Estate"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `lead#retract`

*a lead (data.object) is taken back from the previous assignee (data.participant) by the previous sender/owner (data.recipient)*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/lead#retract",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RetractAction",
    "object": {
      "type": "Lead",
      "object": {
        "type": "Contact",
        "identifier": {
          "redContact_Guid": "bbc1f449-21b3-41d8-a588-2d1c7d43281e"
        },
        "name": "Braxton Zboncak",
        "email": "user@example.com"
      }
    },
    "agent": "https://{lead-admin}.bhhs.hsaffailites.com/profile/card",
    "participant": {
      "type": "RealEstateAgent",
      "id": "https://user.example.com/profile/card#me"
    },
    "recipient": {
      "type": "RealEstateOrganization",
      "id": "https://{lead-owner}.example.com/profile/card#me"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|




