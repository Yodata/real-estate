---
title: BHHSTerms
---
## Schema

| Name | Type | Description |
|---|---|---|
| (BHHSTerms) | object | additional properties for BHHS. |
| contactPoint.name | string | allowed (`"BHHSWebsiteURL"`, `"BHHSWebsiteVanityURL"`)  |
| additionalProperty | object | - |
| additionalProperty.Status | string | allowed (`"Active"`, `"Inactive"`, `"Pre-Active"`)  |
| additionalProperty.UserType | string | employee type. For backward compatibility |
| additionalProperty.AffiliateID | string | BHHS affiliate identifier |
| additionalProperty.BrokerID | string | BHHS affiliate identifier. For backward compatibility |
| additionalProperty.OfficeID | string | BHHS office identifier. For backward compatibility |
| additionalProperty.OfficeDBA | string | name of office. For backward compatibility |
| additionalProperty.AffiliateStatus | string | status of affiliate. For backward compatibility |
| additionalProperty.OfficeStatus | string | status of office. For backward compatibility |
| additionalProperty.EmployeeType | string | allowed (`"Full Time Sales Professional"`, `"Part Time Sales Professional"`, `"Non-Agent"`, `"Marketing Team"`, `"In-House Admin. Profile"`) type of employee |
| additionalProperty.IsCompanyQueue | boolean | if the real estate agent accepts company's lead |
| additionalProperty.agentWebsiteType | string | allowed (`"Agent Profile"`, `"Agent Page with IDX Search"`) agent's website type |
| additionalProperty.RoqLogicTCVersion | string | version of RoqLogic terms and conditions agent accepted. |
| additionalProperty.bhhsLeadNotificationPreference | object | lead notification preference |
| additionalProperty.bhhsLeadNotificationPreference.timeZone | string | - |
| additionalProperty.bhhsLeadNotificationPreference.emailNotification | boolean | if notification will be sent to sepcified email address |
| additionalProperty.bhhsLeadNotificationPreference.textNotification | boolean | if notification will be sent to sepcified phone number |
| additionalProperty.bhhsLeadNotificationPreference.email | string | email address that notification will be sent to |
| additionalProperty.bhhsLeadNotificationPreference.telephone | string | phone number that notification will be sent to |
| additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule | array<object> | - |
| additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.type | string | The item type (Linked-Data @type) |
| additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byDay | array<string> | Defines the day(s) of the week on which a recurring Event takes place |
| additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byDay (single item) | string | allowed (`"Sunday"`, `"Monday"`, `"Tuesday"`, `"Wednesday"`, `"Thursday"`, `"Friday"`)  |
| additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byMonth | array<number> | Defines the month(s) of the year on which a recurring Event takes place. Specified as an Integer between 1-12. January is 1. |
| additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byMonth (single item) | number | allowed (`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`)  |
| additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byMonthDay | array<number> | Defines the day(s) of the month on which a recurring Event takes place. Specified as an Integer between 1-31. |
| additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byMonthDay (single item) | number | - |
| additionalProperty.IsDisplayed | boolean | if an affiliate/office/agent is listed in company/office/agent finder. |
| additionalProperty.OfficeType | string | allowed (`"Administrative Office"`, `"Branch Office"`, `"Kiosk"`, `"Primary Office"`, `"Srvice Center"`, `"Subdivision Sales Office"`) type of office |
| additionalProperty.FullTimeCount | integer | the number of full time sales professional |
| additionalProperty.PartTimeCount | integer | the number of part time sales professional |
| additionalProperty.franchiseCommitmentNotes | string | - |
| additionalProperty.franchiseCommitment | string | - |
| additionalProperty.listingLeadsToListingAgent | boolean | - |
| additionalProperty.HSoACompany | boolean | if company is owned by HSoA |
| additionalProperty.unassignedLeadOwner | any | agent whom affiliate leads are assigned to |
| additionalProperty.companyContactLastName | string | last name of company contact |
| additionalProperty.companyContactFirstName | string | first name of company contact |
| additionalProperty.companyCFO | string | full name of company CFO |
| additionalProperty.primaryOffice | any | primay office of company |
| additionalProperty.transactionReportingMethod | string | allowed (`"Batch File Upload"`, `"Direct Data Entry"`, `"Summary Reporting"`) method of reporting transaction |
| additionalProperty.databridgeVersion | string | allowed (`"DB4.0"`, `"DB3.0"`) version of data bridge |
| additionalProperty.systemDeactivationDate | string | format (`date-time`)  |
| additionalProperty.inactiveDate | string | format (`date-time`)  |
| additionalProperty.goLiveDate | string | format (`date-time`)  |
| additionalProperty.originalAffiliationDate | string | format (`date-time`)  |
| additionalProperty.numberOfSubOrganizations | integer | - |
| additionalProperty.PublicOffice | string | office's public name |
| additionalProperty.OfficeContact | any | office contact |
| additionalProperty.IsRelocationOffice | boolean | if office is relocation office |
| additionalProperty.PrimaryHomeStoryContact | any | office primary Home Story contact |
| additionalProperty.PrimaryHomeStoryContactEmail | string | primary Home Story contact email |
| additionalProperty.PrimaryRelocationContact | any | office primary relocation contact |
| additionalProperty.PrimaryRelocationContactEmail | string | primary relocation contact email |
| additionalProperty.PrimaryReferralContact | any | office primary referral contact |
| additionalProperty.PrimaryReferralContactEmail | string | primary referral contact email |
| additionalProperty.PrimaryREOContact | any | office primary REO contact |
| additionalProperty.PrimaryREOContactEmail | string | primary REO contact email |
| additionalProperty.transactionSequence | string | The adjustment sequence number. Must be zeros if STR is closed but not an adjustment or if STR is open or canceled. If adjusting a closed transaction, the first adjustment must have 001 in the adjustment sequence, the second must have 002, the third, 003, etc. Sequence number cannot be equal or less than the last adjustment sequence number reported for the transaction if the Status has not changed. |
| additionalProperty.unimprovedLandFlag | string | A Yes/No flag identifying where or not the property involved in the transaction is considered unimproved land. Valid codes are Y = unimproved land  N= not an unimproved land |
| additionalProperty.workingWithAgent | boolean | is consumer already working with an Agent? |
| contactPoint.name | string | allowed (`"BHHSWebsiteURL"`, `"BHHSWebsiteVanityURL"`)  |
| additionalProperty | object | - |
| additionalProperty.Status | string | allowed (`"Active"`, `"Inactive"`, `"Pre-Active"`)  |
| additionalProperty.UserType | string | employee type. For backward compatibility |
| additionalProperty.AffiliateID | string | BHHS affiliate identifier |
| additionalProperty.BrokerID | string | BHHS affiliate identifier. For backward compatibility |
| additionalProperty.OfficeID | string | BHHS office identifier. For backward compatibility |
| additionalProperty.OfficeDBA | string | name of office. For backward compatibility |
| additionalProperty.AffiliateStatus | string | status of affiliate. For backward compatibility |
| additionalProperty.OfficeStatus | string | status of office. For backward compatibility |
| additionalProperty.EmployeeType | string | allowed (`"Full Time Sales Professional"`, `"Part Time Sales Professional"`, `"Non-Agent"`, `"Marketing Team"`, `"In-House Admin. Profile"`) type of employee |
| additionalProperty.IsCompanyQueue | boolean | if the real estate agent accepts company's lead |
| additionalProperty.agentWebsiteType | string | allowed (`"Agent Profile"`, `"Agent Page with IDX Search"`) agent's website type |
| additionalProperty.RoqLogicTCVersion | string | version of RoqLogic terms and conditions agent accepted. |
| additionalProperty.bhhsLeadNotificationPreference | object | lead notification preference |
| additionalProperty.bhhsLeadNotificationPreference.timeZone | string | - |
| additionalProperty.bhhsLeadNotificationPreference.emailNotification | boolean | if notification will be sent to sepcified email address |
| additionalProperty.bhhsLeadNotificationPreference.textNotification | boolean | if notification will be sent to sepcified phone number |
| additionalProperty.bhhsLeadNotificationPreference.email | string | email address that notification will be sent to |
| additionalProperty.bhhsLeadNotificationPreference.telephone | string | phone number that notification will be sent to |
| additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule | array<object> | - |
| additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.type | string | The item type (Linked-Data @type) |
| additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byDay | array<string> | Defines the day(s) of the week on which a recurring Event takes place |
| additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byDay (single item) | string | allowed (`"Sunday"`, `"Monday"`, `"Tuesday"`, `"Wednesday"`, `"Thursday"`, `"Friday"`)  |
| additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byMonth | array<number> | Defines the month(s) of the year on which a recurring Event takes place. Specified as an Integer between 1-12. January is 1. |
| additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byMonth (single item) | number | allowed (`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`)  |
| additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byMonthDay | array<number> | Defines the day(s) of the month on which a recurring Event takes place. Specified as an Integer between 1-31. |
| additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byMonthDay (single item) | number | - |
| additionalProperty.IsDisplayed | boolean | if an affiliate/office/agent is listed in company/office/agent finder. |
| additionalProperty.OfficeType | string | allowed (`"Administrative Office"`, `"Branch Office"`, `"Kiosk"`, `"Primary Office"`, `"Srvice Center"`, `"Subdivision Sales Office"`) type of office |
| additionalProperty.FullTimeCount | integer | the number of full time sales professional |
| additionalProperty.PartTimeCount | integer | the number of part time sales professional |
| additionalProperty.franchiseCommitmentNotes | string | - |
| additionalProperty.franchiseCommitment | string | - |
| additionalProperty.listingLeadsToListingAgent | boolean | - |
| additionalProperty.HSoACompany | boolean | if company is owned by HSoA |
| additionalProperty.unassignedLeadOwner | any | agent whom affiliate leads are assigned to |
| additionalProperty.companyContactLastName | string | last name of company contact |
| additionalProperty.companyContactFirstName | string | first name of company contact |
| additionalProperty.companyCFO | string | full name of company CFO |
| additionalProperty.primaryOffice | any | primay office of company |
| additionalProperty.transactionReportingMethod | string | allowed (`"Batch File Upload"`, `"Direct Data Entry"`, `"Summary Reporting"`) method of reporting transaction |
| additionalProperty.databridgeVersion | string | allowed (`"DB4.0"`, `"DB3.0"`) version of data bridge |
| additionalProperty.systemDeactivationDate | string | format (`date-time`)  |
| additionalProperty.inactiveDate | string | format (`date-time`)  |
| additionalProperty.goLiveDate | string | format (`date-time`)  |
| additionalProperty.originalAffiliationDate | string | format (`date-time`)  |
| additionalProperty.numberOfSubOrganizations | integer | - |
| additionalProperty.PublicOffice | string | office's public name |
| additionalProperty.OfficeContact | any | office contact |
| additionalProperty.IsRelocationOffice | boolean | if office is relocation office |
| additionalProperty.PrimaryHomeStoryContact | any | office primary Home Story contact |
| additionalProperty.PrimaryHomeStoryContactEmail | string | primary Home Story contact email |
| additionalProperty.PrimaryRelocationContact | any | office primary relocation contact |
| additionalProperty.PrimaryRelocationContactEmail | string | primary relocation contact email |
| additionalProperty.PrimaryReferralContact | any | office primary referral contact |
| additionalProperty.PrimaryReferralContactEmail | string | primary referral contact email |
| additionalProperty.PrimaryREOContact | any | office primary REO contact |
| additionalProperty.PrimaryREOContactEmail | string | primary REO contact email |
| additionalProperty.transactionSequence | string | The adjustment sequence number. Must be zeros if STR is closed but not an adjustment or if STR is open or canceled. If adjusting a closed transaction, the first adjustment must have 001 in the adjustment sequence, the second must have 002, the third, 003, etc. Sequence number cannot be equal or less than the last adjustment sequence number reported for the transaction if the Status has not changed. |
| additionalProperty.unimprovedLandFlag | string | A Yes/No flag identifying where or not the property involved in the transaction is considered unimproved land. Valid codes are Y = unimproved land  N= not an unimproved land |
| additionalProperty.workingWithAgent | boolean | is consumer already working with an Agent? |

## Example



```json
{
  "contactPoint.name": "BHHSWebsiteURL",
  "additionalProperty": {
    "Status": "Active",
    "UserType": "string",
    "AffiliateID": "string",
    "BrokerID": "string",
    "OfficeID": "string",
    "OfficeDBA": "string",
    "AffiliateStatus": "string",
    "OfficeStatus": "string",
    "EmployeeType": "Full Time Sales Professional",
    "IsCompanyQueue": true,
    "agentWebsiteType": "Agent Profile",
    "RoqLogicTCVersion": "TC-00035",
    "bhhsLeadNotificationPreference": {
      "timeZone": [
        "GMT+12:00 Fiji Time (Pacific/Fiji)"
      ],
      "emailNotification": true,
      "textNotification": true,
      "email": "string",
      "telephone": "string",
      "leadNotificationSchedule": [
        {
          "type": "string",
          "byDay": [
            "Monday",
            "Wednesday",
            "Friday"
          ],
          "byMonth": [
            1
          ],
          "byMonthDay": [
            0
          ]
        }
      ]
    },
    "IsDisplayed": true,
    "OfficeType": "Administrative Office",
    "FullTimeCount": 0,
    "PartTimeCount": 0,
    "franchiseCommitmentNotes": "string",
    "franchiseCommitment": "string",
    "listingLeadsToListingAgent": true,
    "HSoACompany": true,
    "unassignedLeadOwner": null,
    "companyContactLastName": "string",
    "companyContactFirstName": "string",
    "companyCFO": "string",
    "primaryOffice": null,
    "transactionReportingMethod": "Batch File Upload",
    "databridgeVersion": "DB4.0",
    "systemDeactivationDate": "2019-08-24T14:15:22Z",
    "inactiveDate": "2019-08-24T14:15:22Z",
    "goLiveDate": "2019-08-24T14:15:22Z",
    "originalAffiliationDate": "2019-08-24T14:15:22Z",
    "numberOfSubOrganizations": 0,
    "PublicOffice": "string",
    "OfficeContact": null,
    "IsRelocationOffice": true,
    "PrimaryHomeStoryContact": null,
    "PrimaryHomeStoryContactEmail": "string",
    "PrimaryRelocationContact": null,
    "PrimaryRelocationContactEmail": "string",
    "PrimaryReferralContact": null,
    "PrimaryReferralContactEmail": "string",
    "PrimaryREOContact": null,
    "PrimaryREOContactEmail": "string",
    "transactionSequence": "string",
    "unimprovedLandFlag": "string",
    "workingWithAgent": true
  }
}
```
