---
title: Referral
---
| Name | Type | Description |
|---|---|---|
| (root) | object | describes a real estate referral from the referredBy (subProperty of agent) to the recipient |
| Referral.type | string | The item type (Linked-Data @type) |
| Referral.additionalProperty | object | context specific custom properties |
| Referral.additionalProperty.isReferralYN | string | Y if transaction was a referral |
| Referral.additionalProperty.inNetworkReferralYN | string | Y if transaction was referred by an in network agent |
| Referral.referredBy | object | the referring entity |
| Referral.referredBy.type | string | the referring entity type i.e RealEstateOrganization, RealEstateAgent |
| Referral.referredBy.id | string | Linked-Data URI (@id) |

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


