---
title: OpenHouseEvent
---

## Example

```json
{
  "type": "OrganizationRole",
  "roleName": "Owner",
  "memberOf": {
    "type": "RealEstateOrganization",
    "id": "http://orgid.example.com/profile/card#me"
  },
  "member": "https://memberid.example.com/profile/card#me",
  "startDate": "2022-08-18T03:41:05Z",
  "endDate": "2022-08-18T03:41:05Z"
}
```

## Schema

| Name      | Type              | Description                                       |
| --------- | ----------------- | ------------------------------------------------- |
| type      | string            | a role played by the member in the memberOf group |
| roleName  | string            | the role name                                     |
| memberOf  | object            | the org or group where the role is performed      |
| member    | string<uri>       | member object or id                               |
| startDate | string<date-time> | date the member began performing this role        |
| endDate   | string<date-time> | date the member stopped performing the role       |
