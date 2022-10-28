---
title: BHHSTerms
route: /types/BHHSTerms
menu: AdditionalProperties
---# BHHSTerms
additional properties for BHHS.


## Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| contactPoint.name | string |   |
| additionalProperty | object |   |
| additionalProperty.Status | string |   |
| additionalProperty.UserType | string | employee type. For backward compatibility  |
| additionalProperty.AffiliateID | string | BHHS affiliate identifier  |
| additionalProperty.BrokerID | string | BHHS affiliate identifier. For backward compatibility  |
| additionalProperty.OfficeID | string | BHHS office identifier. For backward compatibility  |
| additionalProperty.OfficeDBA | string | name of office. For backward compatibility  |
| additionalProperty.AffiliateStatus | string | status of affiliate. For backward compatibility  |
| additionalProperty.OfficeStatus | string | status of office. For backward compatibility  |
| additionalProperty.EmployeeType | string | type of employee  |
| additionalProperty.IsCompanyQueue | boolean | if the real estate agent accepts company's lead  |
| additionalProperty.agentWebsiteType | string | agent's website type  |
| additionalProperty.RoqLogicTCVersion | string | version of RoqLogic terms and conditions agent accepted.  |
| additionalProperty.bhhsLeadNotificationPreference | object | lead notification preference  |
| additionalProperty.IsDisplayed | boolean | if an affiliate/office/agent is listed in company/office/agent finder.  |
| additionalProperty.OfficeType | string | type of office  |
| additionalProperty.FullTimeCount | integer | the number of full time sales professional  |
| additionalProperty.PartTimeCount | integer | the number of part time sales professional  |
| additionalProperty.franchiseCommitmentNotes | string |   |
| additionalProperty.franchiseCommitment | string |   |
| additionalProperty.listingLeadsToListingAgent | boolean |   |
| additionalProperty.HSoACompany | boolean | if company is owned by HSoA  |
| additionalProperty.unassignedLeadOwner | * | agent whom affiliate leads are assigned to  |
| additionalProperty.companyContactLastName | string | last name of company contact  |
| additionalProperty.companyContactFirstName | string | first name of company contact  |
| additionalProperty.companyCFO | string | full name of company CFO  |
| additionalProperty.primaryOffice | * | primay office of company  |
| additionalProperty.transactionReportingMethod | string | method of reporting transaction  |
| additionalProperty.databridgeVersion | string | version of data bridge  |
| additionalProperty.systemDeactivationDate | string&lt;date-time&gt;  |   |
| additionalProperty.inactiveDate | string&lt;date-time&gt;  |   |
| additionalProperty.goLiveDate | string&lt;date-time&gt;  |   |
| additionalProperty.originalAffiliationDate | string&lt;date-time&gt;  |   |
| additionalProperty.numberOfSubOrganizations | integer |   |
| additionalProperty.PublicOffice | string | office's public name  |
| additionalProperty.OfficeContact | * | office contact  |
| additionalProperty.IsRelocationOffice | boolean | if office is relocation office  |
| additionalProperty.PrimaryHomeStoryContact | * | office primary Home Story contact  |
| additionalProperty.PrimaryHomeStoryContactEmail | string | primary Home Story contact email  |
| additionalProperty.PrimaryRelocationContact | * | office primary relocation contact  |
| additionalProperty.PrimaryRelocationContactEmail | string | primary relocation contact email  |
| additionalProperty.PrimaryReferralContact | * | office primary referral contact  |
| additionalProperty.PrimaryReferralContactEmail | string | primary referral contact email  |
| additionalProperty.PrimaryREOContact | * | office primary REO contact  |
| additionalProperty.PrimaryREOContactEmail | string | primary REO contact email  |
| additionalProperty.transactionSequence | string | The adjustment sequence number. Must be zeros if STR is closed but not an adjustment or if STR is open or canceled. If adjusting a closed transaction, the first adjustment must have 001 in the adjustment sequence, the second must have 002, the third, 003, etc. Sequence number cannot be equal or less than the last adjustment sequence number reported for the transaction if the Status has not changed.  |
| additionalProperty.unimprovedLandFlag | string | A Yes/No flag identifying where or not the property involved in the transaction is considered unimproved land. Valid codes are Y = unimproved land  N= not an unimproved land  |
| additionalProperty.workingWithAgent | boolean | is consumer already working with an Agent?  |

### Example
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
    "systemDeactivationDate": "2022-10-12T01:13:43Z",
    "inactiveDate": "2022-10-12T01:13:43Z",
    "goLiveDate": "2022-10-12T01:13:43Z",
    "originalAffiliationDate": "2022-10-12T01:13:43Z",
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