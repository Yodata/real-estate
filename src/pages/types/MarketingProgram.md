---
title: MarketingProgram
route: /types/MarketingProgram
menu: Types
---# MarketingProgram
A collection of pre-defined activities which take place over a period of time or in a regular, ongoing schedule.


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| type | string! | The item type (Linked-Data @type)  |
| name | string | name of the item  |
| identifier | object | key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.  |
| member | [*] | array of program memberships <br/>RANGE: [ProgramMembership](/types/ProgramMembership) |
| creator | string&lt;uri&gt;  | creator / author of the item  |
| dateCreated | string&lt;date-time&gt;  | The date on which the item was created.  |
| dateModified | string&lt;date-time&gt;  | The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.  |

### Example
```json
{
  "type": "MarketingProgram",
  "name": "Market Activity Report 508 Homewood Ave",
  "identifier": {
    "salesforceContactID": "c28834ca-db69-4da8-90ad-75cdc9907298"
  },
  "member": [
    {
      "type": "ProgramMembership",
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
      "startDate": "2022-10-12T01:13:43Z",
      "endDate": "2022-10-12T01:13:43Z"
    }
  ],
  "creator": "http://{user}.example.com/profile/card#me",
  "dateCreated": "2022-10-12T01:13:43Z",
  "dateModified": "2022-10-12T01:13:43Z"
}
```