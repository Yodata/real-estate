---
title: BHHSTerms
---
| Name | Type | Description |
|---|---|---|
| (root) | object | additional properties for BHHS. |
| BHHSTerms.contactPoint.name | string | - |
| BHHSTerms.additionalProperty | object | - |
| BHHSTerms.additionalProperty.Status | string | - |
| BHHSTerms.additionalProperty.UserType | string | employee type. For backward compatibility |
| BHHSTerms.additionalProperty.AffiliateID | string | BHHS affiliate identifier |
| BHHSTerms.additionalProperty.BrokerID | string | BHHS affiliate identifier. For backward compatibility |
| BHHSTerms.additionalProperty.OfficeID | string | BHHS office identifier. For backward compatibility |
| BHHSTerms.additionalProperty.OfficeDBA | string | name of office. For backward compatibility |
| BHHSTerms.additionalProperty.AffiliateStatus | string | status of affiliate. For backward compatibility |
| BHHSTerms.additionalProperty.OfficeStatus | string | status of office. For backward compatibility |
| BHHSTerms.additionalProperty.EmployeeType | string | type of employee |
| BHHSTerms.additionalProperty.IsCompanyQueue | boolean | if the real estate agent accepts company's lead |
| BHHSTerms.additionalProperty.agentWebsiteType | string | agent's website type |
| BHHSTerms.additionalProperty.RoqLogicTCVersion | string | version of RoqLogic terms and conditions agent accepted. |
| BHHSTerms.additionalProperty.bhhsLeadNotificationPreference | object | lead notification preference |
| BHHSTerms.additionalProperty.bhhsLeadNotificationPreference.timeZone | string | - |
| BHHSTerms.additionalProperty.bhhsLeadNotificationPreference.emailNotification | boolean | if notification will be sent to sepcified email address |
| BHHSTerms.additionalProperty.bhhsLeadNotificationPreference.textNotification | boolean | if notification will be sent to sepcified phone number |
| BHHSTerms.additionalProperty.bhhsLeadNotificationPreference.email | string | email address that notification will be sent to |
| BHHSTerms.additionalProperty.bhhsLeadNotificationPreference.telephone | string | phone number that notification will be sent to |
| BHHSTerms.additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule | array<object> | - |
| BHHSTerms.additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.type | string | The item type (Linked-Data @type) |
| BHHSTerms.additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byDay | array<string> | Defines the day(s) of the week on which a recurring Event takes place |
| BHHSTerms.additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byDay (single item) | string | - |
| BHHSTerms.additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byMonth | array<number> | Defines the month(s) of the year on which a recurring Event takes place. Specified as an Integer between 1-12. January is 1. |
| BHHSTerms.additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byMonth (single item) | number | - |
| BHHSTerms.additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byMonthDay | array<number> | Defines the day(s) of the month on which a recurring Event takes place. Specified as an Integer between 1-31. |
| BHHSTerms.additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule.byMonthDay (single item) | number | - |
| BHHSTerms.additionalProperty.IsDisplayed | boolean | if an affiliate/office/agent is listed in company/office/agent finder. |
| BHHSTerms.additionalProperty.OfficeType | string | type of office |
| BHHSTerms.additionalProperty.FullTimeCount | integer | the number of full time sales professional |
| BHHSTerms.additionalProperty.PartTimeCount | integer | the number of part time sales professional |
| BHHSTerms.additionalProperty.franchiseCommitmentNotes | string | - |
| BHHSTerms.additionalProperty.franchiseCommitment | string | - |
| BHHSTerms.additionalProperty.listingLeadsToListingAgent | boolean | - |
| BHHSTerms.additionalProperty.HSoACompany | boolean | if company is owned by HSoA |
| BHHSTerms.additionalProperty.unassignedLeadOwner | any | agent whom affiliate leads are assigned to |
| BHHSTerms.additionalProperty.companyContactLastName | string | last name of company contact |
| BHHSTerms.additionalProperty.companyContactFirstName | string | first name of company contact |
| BHHSTerms.additionalProperty.companyCFO | string | full name of company CFO |
| BHHSTerms.additionalProperty.primaryOffice | any | primay office of company |
| BHHSTerms.additionalProperty.transactionReportingMethod | string | method of reporting transaction |
| BHHSTerms.additionalProperty.databridgeVersion | string | version of data bridge |
| BHHSTerms.additionalProperty.systemDeactivationDate | string | - |
| BHHSTerms.additionalProperty.inactiveDate | string | - |
| BHHSTerms.additionalProperty.goLiveDate | string | - |
| BHHSTerms.additionalProperty.originalAffiliationDate | string | - |
| BHHSTerms.additionalProperty.numberOfSubOrganizations | integer | - |
| BHHSTerms.additionalProperty.PublicOffice | string | office's public name |
| BHHSTerms.additionalProperty.OfficeContact | any | office contact |
| BHHSTerms.additionalProperty.IsRelocationOffice | boolean | if office is relocation office |
| BHHSTerms.additionalProperty.PrimaryHomeStoryContact | any | office primary Home Story contact |
| BHHSTerms.additionalProperty.PrimaryHomeStoryContactEmail | string | primary Home Story contact email |
| BHHSTerms.additionalProperty.PrimaryRelocationContact | any | office primary relocation contact |
| BHHSTerms.additionalProperty.PrimaryRelocationContactEmail | string | primary relocation contact email |
| BHHSTerms.additionalProperty.PrimaryReferralContact | any | office primary referral contact |
| BHHSTerms.additionalProperty.PrimaryReferralContactEmail | string | primary referral contact email |
| BHHSTerms.additionalProperty.PrimaryREOContact | any | office primary REO contact |
| BHHSTerms.additionalProperty.PrimaryREOContactEmail | string | primary REO contact email |
| BHHSTerms.additionalProperty.transactionSequence | string | The adjustment sequence number. Must be zeros if STR is closed but not an adjustment or if STR is open or canceled. If adjusting a closed transaction, the first adjustment must have 001 in the adjustment sequence, the second must have 002, the third, 003, etc. Sequence number cannot be equal or less than the last adjustment sequence number reported for the transaction if the Status has not changed. |
| BHHSTerms.additionalProperty.unimprovedLandFlag | string | A Yes/No flag identifying where or not the property involved in the transaction is considered unimproved land. Valid codes are Y = unimproved land  N= not an unimproved land |
| BHHSTerms.additionalProperty.workingWithAgent | boolean | is consumer already working with an Agent? |

> Examples of BHHSTerms

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


