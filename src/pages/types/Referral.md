---
title: Referral
---
| Name | Type | Description |
|---|---|---|
| (root) | object | describes a real estate referral from the referredBy (subProperty of agent) to the recipient |
| type | string | The item type (Linked-Data @type) |
| additionalProperty | object | context specific custom properties |
| additionalProperty.isReferralYN | string | Y if transaction was a referral |
| additionalProperty.inNetworkReferralYN | string | Y if transaction was referred by an in network agent |
| referredBy | object | the referring entity |
| referredBy.type | string | the referring entity type i.e RealEstateOrganization, RealEstateAgent |
| referredBy.id | string | Linked-Data URI (@id) |

> Examples of Referral

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


