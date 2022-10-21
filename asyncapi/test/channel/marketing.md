---
title: marketing
---

## Operations### SUB `marketing` Operation

Accepts **one of** the following messages:

#### Message `marketing#create`

*a marketing program has been created*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/marketingprogram#create",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "CreateAction",
    "object": {
      "type": "MarketingProgram",
      "name": "Market Activity Report 508 Homewood Ave",
      "identifier": {
        "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298",
        "namespaceid": "xxxx"
      },
      "member": [
        {
          "type": "Person",
          "roleName": "Owner",
          "memberOf": null,
          "member": {
            "type": "Contact",
            "name": "Bruce Wayne",
            "givenName": "Bruce",
            "familyName": "Wayne",
            "jobTitle": "Batman",
            "contactPoint": [
              {
                "type": "ContactPoint",
                "name": "Mobile Phone",
                "telephone": "888.GET-BATMAN"
              },
              {
                "type": "ContactPoint",
                "name": "Email",
                "email": "batman@example.com"
              }
            ],
            "address": [
              {
                "type": "PostalAddress",
                "name": "Home",
                "streetAddress": "1007 Mountain Gate Rd",
                "postOfficeBoxNumber": "Box 1234",
                "addressRegion": "New Jersey",
                "addressLocality": "Gotham City",
                "postalCode": "10010",
                "addressCountry": "USA"
              }
            ],
            "birthDate": "2019-07-09",
            "leadOwner": {
              "type": "RealEstateOrganization",
              "id": "https://{lead-owner}.example.com/profile/card#me"
            },
            "leadSource": {
              "type": "RealEstateWebsite",
              "url": "https://agentwebsite.example.com"
            }
          },
          "startDate": "2019-08-24T14:15:22Z",
          "endDate": "2019-08-24T14:15:22Z",
          "name": "John Smith",
          "identifier": {
            "buysideid": "ab123"
          }
        }
      ],
      "creator": "http://{user}.example.com/profile/card#me",
      "dateCreated": "2019-08-24T14:15:22Z",
      "dateModified": "2019-08-24T14:15:22Z",
      "about": {
        "type": "Place",
        "address": {
          "streetAddress": "508 Homewood Ave",
          "addressLocality": "Chula Vista",
          "addressRegion": "California",
          "postalCode": "55555"
        }
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `marketing#delete`

*a marketing program was deleted*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/marketingprogram#delete",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "DeleteAction",
    "object": {
      "type": "MarketingProgram",
      "identifier": {
        "namespaceid": "xxxx"
      }
    },
    "agent": "https://{user}.example.com/profile/card#me"
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `marketing#memberadd`

*a program member was added by the agent*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/marketingprogram#memberadd",
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
      "type": "ProgramMembership",
      "roleName": "Owner",
      "memberOf": {
        "type": "MarketingProgram",
        "name": "Market Activity Report 508 Homewood Ave",
        "identifier": {
          "aceid": "4ef1469a-1fc4-43af-96b1-0e4402ccc46e",
          "buysideid": "83271c2a-c35e-44e9-b790-5389f2c11b17"
        }
      },
      "member": {
        "type": "Person",
        "name": "Edgardo Fisher",
        "givenName": "Bruce",
        "familyName": "Wayne",
        "jobTitle": "Batman",
        "contactPoint": [
          {
            "type": "ContactPoint",
            "name": "Mobile Phone",
            "telephone": "888.GET-BATMAN"
          },
          {
            "type": "ContactPoint",
            "name": "Email",
            "email": "batman@example.com"
          }
        ],
        "address": [
          {
            "type": "PostalAddress",
            "name": "Home",
            "streetAddress": "1007 Mountain Gate Rd",
            "postOfficeBoxNumber": "Box 1234",
            "addressRegion": "New Jersey",
            "addressLocality": "Gotham City",
            "postalCode": "10010",
            "addressCountry": "USA"
          }
        ],
        "birthDate": "2019-07-09",
        "leadOwner": {
          "type": "RealEstateOrganization",
          "id": "https://{lead-owner}.example.com/profile/card#me"
        },
        "leadSource": {
          "type": "RealEstateWebsite",
          "url": "https://agentwebsite.example.com"
        },
        "identifier": {
          "aceid": "816fd12f-6479-4f45-b26f-0a2ba54972b6"
        }
      },
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z",
      "role": "Owner"
    },
    "targetCollection": {
      "type": "MarketingProgram",
      "name": "Market Activity Report 508 Homewood Ave",
      "identifier": {
        "aceid": "4ef1469a-1fc4-43af-96b1-0e4402ccc46e",
        "buysideid": "83271c2a-c35e-44e9-b790-5389f2c11b17"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `marketing#memberremove`

*a program member was removed by the agent*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/marketingprogram#memberremove",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RemoveAction",
    "object": {
      "type": "ProgramMembership",
      "roleName": "Owner",
      "memberOf": null,
      "member": {
        "type": "Person",
        "name": "Edgardo Fisher",
        "givenName": "Bruce",
        "familyName": "Wayne",
        "jobTitle": "Batman",
        "contactPoint": [
          {
            "type": "ContactPoint",
            "name": "Mobile Phone",
            "telephone": "888.GET-BATMAN"
          },
          {
            "type": "ContactPoint",
            "name": "Email",
            "email": "batman@example.com"
          }
        ],
        "address": [
          {
            "type": "PostalAddress",
            "name": "Home",
            "streetAddress": "1007 Mountain Gate Rd",
            "postOfficeBoxNumber": "Box 1234",
            "addressRegion": "New Jersey",
            "addressLocality": "Gotham City",
            "postalCode": "10010",
            "addressCountry": "USA"
          }
        ],
        "birthDate": "2019-07-09",
        "leadOwner": {
          "type": "RealEstateOrganization",
          "id": "https://{lead-owner}.example.com/profile/card#me"
        },
        "leadSource": {
          "type": "RealEstateWebsite",
          "url": "https://agentwebsite.example.com"
        },
        "identifier": {
          "aceid": "816fd12f-6479-4f45-b26f-0a2ba54972b6"
        }
      },
      "startDate": "2019-08-24T14:15:22Z",
      "endDate": "2019-08-24T14:15:22Z",
      "role": "Owner"
    },
    "agent": "https://{user-who-removed-the-item}.com/profile/card#me",
    "targetCollection": {
      "type": "MarketingProgram",
      "name": "Market Activity Report 508 Homewood Ave",
      "identifier": {
        "aceid": "4ef1469a-1fc4-43af-96b1-0e4402ccc46e",
        "buysideid": "83271c2a-c35e-44e9-b790-5389f2c11b17"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|




