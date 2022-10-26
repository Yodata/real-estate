---
title: Reference
---

# Using Service Area Data

## General Info

Real estate brokerages contract with HSF Affiliates to become franchisees within one of its franchises, such as Berkshire Hathaway HomeServices.  Each franchisee has permission to complete real estate transactions within certain cities and/or postal codes.  The geographic locations within which a franchisee has permission to do business are called Effective Service Areas, or ServiceAreas.

ServiceAreas are established for a variety of reasons.  They may be used to locate companies, route leads, and/or manage referrals.  There may be instances where a ServiceArea should be recognized for one reason but not for another.  For example, one of franchisee XX999’s ServiceAreas might be available for use in referrals but not for lead routing.  Each ServiceArea record includes attributes that specify how the information can be used.  Each vendor must look at the attribute that represents their type of business and use or ignore ServiceArea information accordingly.

Each franchisee has one or more offices designated as a “relocation office”.  Each of a franchisee’s ServiceAreas is assigned to a specific relocation office.  That way, if a franchisee has more than one relocation office then referrals for specific areas are always channeled to the correct location.

It is possible that more than one franchisee has permission to service a city or postal code.  For that reason, each ServiceArea includes a Sort Order that tells vendors the order in which to display relocation offices associated with the ServiceAreas for the selected city or postal code.  Each ServiceArea also includes a Weight so that vendors know how to route leads to franchisees’ relocation offices.

## Geographic Details

If a franchisee services multiple cities and/or postal codes (and they usually do), then there will be multiple ServiceArea records for the franchisee – one per city or postal code that is serviced.

Each ServiceArea record includes a combination of data that either defines a specific city or a specific postal code serviced by the franchisee.  The kind field indicates whether it is a city or postal code being defined.  When kind = “City”, the postalCode field will not be present.  When kind = “PostalCode”, the addressLocality field will show the primary city associated with the postal code.

**Example 1:** If the ServiceArea is for the city of Woodland Hills, CA then the following info would be provided.

```json
{
  "type": "ServiceArea",
  "kind": "City",
  "addressLocality": "Woodland Hills",
  "addressRegion": "CA",
  "addressCountry": "US",
  "addressCounty": "Los Angeles",
}
```

**Example 2:** If the ServiceArea is for the US postal code of 91371 then the following info would be provided.

```json
{
  "type": "ServiceArea",
  "kind": "PostalCode",
  "postalCode": "91371",
  "addressLocality": "Woodland Hills",
  "addressRegion": "CA",
  "addressCountry": "US",
  "addressCounty": "Los Angeles",
}
```


If the ServiceArea defines a postal code in which the franchisee has a physical office then additionalProperty.officeInPostalCode will be set to True.  The relocation office itself does not need to be located in the postal code in order for the value to be True.   If the ServiceArea defines a city then additionalProperty.officeInPostalCode will not be present.

## Franchisee Details

The franchisee servicing the area defined in the ServiceArea record is specified in the provider object.

-   provider.type = RealEstateOrganization
-   provider.id = *the url for the franchisee's profile*

The specific relocation office servicing the area defined in the ServiceArea record is specified in the RelocationOffice object (within the additionalProperty object).

-   additionalProperty.relocationOffice.type = RealEstateOffice
-   additionalProperty.relocationOffice.id = *the url for the relocation office's profile*

## Sorting Rules

Vendors must use the value in the additionalProperty.SortOrder field to determine the order in which to display relocation offices associated with ServiceArea records, where 0 is listed first and 9 is listed last.
-   Example: If franchisees XX999, YY999, and ZZ999 all service postal code 91371 then the vendor must look at the ServiceArea records for 91371 for all three franchisees.  If franchisee XX999’s ServiceArea record has a Sort Order of 5, YY999’s ServiceArea record has a Sort Order of 9, and ZZ999’s ServiceArea record has a Sort Order of 0, then the relocation offices for those franchisees would be displayed in the following order: 1) ZZ999, 2) XX999, 3) YY999
-   If ServiceArea records have the same Sort Order then the franchisee’s ID must be used as the secondary sort order.

## Routing Rules

Vendors using data for lead routing purposes must use the value in the additionalProperty.weight field in the ServiceArea records to determine routing, where the value represents a ratio in the relationship to other franchisees servicing the same area.
-   Example 1: If franchisees XX999, YY999, and ZZ999 all service postal code 91371 then the vendor must look at the ServiceArea records for all three franchisees.  If all records have a Weight of 1, then the ratio is 1:1:1.  This means leads must be equally distributed between the franchisees in a round robin.
-   Example 2: If franchisees AA999, BB999, and CC999 each have ServiceArea records for Pine Hills, FL then the vendor must look at the ServiceArea records for all three franchisees.  If franchisee AA999’s ServiceArea record has a Weight of 2, BB999’s ServiceArea record has a Weight of 3, and CC999’s ServiceArea record has a Weight of 1 then the ratio is 2:3:1.  That means two leads must be routed to AA999, then three leads must be routed to BB999, then one lead must be routed to CC999.

## Which ServiceArea Records May Be Used?

Vendors may only use ServiceArea data for their system when the attribute corresponding to their primary type of business is set to True.
-   Vendors that primarily use ServiceArea data to display information in HSF’s Company Locator app must look at the value in the additionalProperty.sentToCompanyLocator field.
-   Vendors that primarily use ServiceArea data to route leads to franchisees based on searches performed in a consumer site must look at the value in the additionalProperty.sentToConsumerSite field.
-   Vendors that primarily use ServiceArea data to support referral products must look at the value in the additionalProperty.sentToReferralSolutions field.

Each vendor should look at only one of these attributes to determine whether or not they can use ServiceArea data, as instructed by HSF.  For example, a company supporting the consumer site will be instructed to look at the value in the additionalProperty.sentToConsumerSite field and ignore values in the additionalProperty.sentToCompanyLocator and additionalProperty.sentToReloSpec fields.

## Luxury Price Minimum

Vendors may use the “LuxuryPriceMinimum” data to determine the price floor or minimum price for property listings in the area to be considered a luxury property per the postal code referenced in the ServiceArea data. The “priceCurrency” will determine the currency code applicable to the “price” provided.

For example, if “postalCode”: “91371” has the “price”: 1000000, and “priceCurrency”: “USD”, then this means that residential properties in postal code 91371 are considered a luxury property listing starting at $1,000,000 United States Dollar (USD). Note: Currency codes displayed will match the currency used in the country where the property listing is located.
