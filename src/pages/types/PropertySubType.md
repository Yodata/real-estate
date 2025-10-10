---
title: PropertySubType
---
## Example



```json
{
  "propertySubType": "ApartmentPropertyType"
}
```

## Schema

| Name | Type | Description |
|---|---|---|
| (root) | object | Property sub-type enumeration values derived from RESO data dictionary. |
| ApartmentPropertyType | string | Apartment |
| BoatSlipPropertyType | string | Boat Slip |
| CabinPropertyType | string | Cabin |
| CondominiumPropertyType | string | Condominium |
| DeededParkingPropertyType | string | Deeded Parking |
| DuplexPropertyType | string | Residential Duplex |
| FarmPropertyType | string | Farm Property Type |
| ManufacturedHomePropertyType | string | Manufactured Home |
| ManufacturedOnLandPropertyType | string | Manufactured Home + Land |
| MobileHomePropertyType | string | Mobile Home |
| OwnYourOwnPropertyType | string | RESO Own Your Own Property |
| QuadruplexPropertyType | string | A residential property with four units |
| RanchPropertyType | string | A Ranch |
| SingleFamilyPropertyType | string | Single Family Residence |
| StockCooperativePropertyType | string | Stock Co-op. |
| TimesharePropertyType | string | Timeshare |
| TownhousePropertyType | string | Townhouse |
| TriplexPropertyType | string | A residential property with 3 separate units |
| AgriculturePropertyType | string | An agriculture property. |
| BusinessPropertyType | string | a residential property zoned for business operation |
| HotelMotelPropertyType | string | Hotel property for sale. |
| IndustrialPropertyType | string | Industrial property |
| MixedUsePropertyType | string | Residential/Commercial property |
| MultiFamilyPropertyType | string | A single building with multiple units |
| OfficePropertyType | string | An office. |
| RetailPropertyType | string | Retail property |
| UnimprovedLandPropertyType | string | Land for sale |
| WarehousePropertyType | string | A Warehouse property type. |
| OtherPropertyType | string | Other property. |

Cluster,TriplexPropertyType
Residential,TriplexPropertyType
Triplex,TriplexPropertyType

## Dependency

| PropertySubType | Type | Dependency |
|---|---|---|
| ApartmentPropertyType | string | allowed (`"Apartment"`,`"DoubleWide"`,`"ApartmentBuilding"`,`"ApartmentStyle"`,`"PartialOwnership"`,`"ResortProperty"`,`"Urban"`,`"Graze"`, `"OneStory"`,`"TwoStory"`,`"ThreeStory"`,`"BeachFront"`,`"AptsRetailStripBusPrk"`) |          
| BoatSlipPropertyType | string |allowed (`"WaterFront"`) |
| CabinPropertyType | string |allowed (`"LoftStyle"`,`"Cabin"`) |
| CondominiumPropertyType | string | allowed (`"Condo"`,`"ChurchSchool"`,`"BusinessOpportunities"`,`"CondoTownhouse"`,`"CommercialCondo"`,`"CondoNewConstruction"`, `"HighMidRiseCondo"`) |
| DeededParkingPropertyType | string | allowed (`"GarageParkingSpace"`) |
| DuplexPropertyType | string | allowed (`"Duplex"`,`"TwinHome"`,`"HalfDuplex"`,`"GeminiTwinHome"`) |
| FarmPropertyType | string | allowed (`"Highrise"`,`"Farm"`) |
| ManufacturedHomePropertyType | string | allowed (`"ManufacturedHome"`,`"ManufacturedMobileHome"`) |
| ManufacturedOnLandPropertyType | string | allowed (`"ModularPreFab"`,`"ManufacturedSingleFamily"`) |
| MobileHomePropertyType | string | allowed (`"Combination"`,`"MobileHome"`) |
| OwnYourOwnPropertyType | string | allowed (`"OwnYourOwn"`) |
| QuadruplexPropertyType | string | allowed (`"Fourplex"`) |
| RanchPropertyType | string | allowed (`"Ranch"`) |
| SingleFamilyPropertyType | string | allowed (`"SingleFamily"`,`"SingleFamilyAttached"`,`"Flat"`,`"SemiDetached"`,`"SingleFamilyDetached"`, `"SingleFamilyNewConstruction"`, `"RentalLease"`, `"Efficiency"`, `"Income"`, `"Other"`) |
| StockCooperativePropertyType | string | allowed (`"PreConstruction"`,`"StockCooperative"`,`"Coop"`) |
| TimesharePropertyType | string | allowed (`"TimeShare"`) |
| TownhousePropertyType | string | allowed (`"Townhouse"`,`"TownhouseNewConstruction"`,`"GardenPatioHomeDetached"`,`"FreeStandingBuilding"`,`"TownhomeStyle"`) |
| TriplexPropertyType | string | allowed (`"Cluster"`,`"Residential"`,`"Triplex"`) |
| AgriculturePropertyType | string | - |
| BusinessPropertyType | string | - |
| HotelMotelPropertyType | string | allowed (`"DwellingwRental"`,`"PatioHome"`,`"Penthouse"`,`" VacationHome"`,`"VacationRental"`, `"BedBreakfastHotelMotel"`,`"Other"`,`"OtherMotelHotelMHPrk"`,`"Special"`,`" Hotel"`) |
| IndustrialPropertyType | string | allowed (`"Industrial"`) |
| MixedUsePropertyType | string | allowed (`"MixedUse"`,`"NewHomePlan"`,`"Rural"`,`"Investment"`,`"MultipleUse"`,`"NewHomeCommunity"`,`"ComboResCom"`) |       
| MultiFamilyPropertyType | string | allowed (`"MultiFamily"`) |, 
| OfficePropertyType | string | allowed (`"Office"`,`" Medical"`,`"OfficeMedicalProfBldg"`) | 
| RetailPropertyType | string | allowed (`"Retail"`,`"GeneralCommercial"`,`"Restaurant"`,`"ShoppingCenter"`) |    
| UnimprovedLandPropertyType | string | allowed (`"Land"`,`"ResidentialLot"`,`"CommercialLand"`) |   
| WarehousePropertyType | string | allowed (`"SiteBuilt"`,`"LowRise"`,`"PatioVilla"`,`"Modular"`,`"Warehouse"`,`"OfcWrhsIndPrkManfcDist"`) |     