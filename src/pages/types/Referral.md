---
title: Referral
---
## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | describes a real estate referral from the referredBy (subProperty of agent) to the recipient |
| type | string | allowed (`"Referral"`) The item type (Linked-Data @type) |
| additionalProperty | object | context specific custom properties |
| additionalProperty.isReferralYN | string | allowed (`"Y"`, `"N"`) Y if transaction was a referral |
| additionalProperty.inNetworkReferralYN | string | allowed (`"Y"`, `"N"`) Y if transaction was referred by an in network agent |
| referredBy | object | the referring entity |
| referredBy.type | string | allowed (`"RealEstateOrganization"`, `"RealEstateAgent"`, `"RealEstateOffice"`, `"Organization"`, `"Person"`) the referring entity type i.e RealEstateOrganization, RealEstateAgent |
| referredBy.id | string | format (`uri`) Linked-Data URI (@id) |

## Example



```json
{
  "type": "Referral",
  "additionalProperty": {
    "isReferralYN": "Y",
    "inNetworkReferralYN": "Y"
  },
  "referredBy": {
    "type": "RealEstateOrganization",
    "id": "http://example.com"
  }
}
```
