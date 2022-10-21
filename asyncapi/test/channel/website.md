---
title: website
---

## Operations### SUB `website` Operation

Accepts **one of** the following messages:

#### Message `website#askquestion`

*website user asks a question*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#askquestion",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "AskAction",
    "agent": {
      "type": "Contact",
      "name": "Miles Davis",
      "givenName": "Miles",
      "familyName": "Davis",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "identifier": {
        "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
      },
      "additionalProperty": {
        "userPath": "xxxx",
        "workingWithAgent": true
      }
    },
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "Question",
      "text": "I would like to view 123 Main Street."
    },
    "recipient": {
      "type": "RealEstateAgent",
      "name": "Randy RealEstateAgent",
      "id": "https://{userid}.example.com/profile/card#me"
    },
    "about": {
      "type": "PropertyListing",
      "originatingSystemName": "GOTHAM-MLS",
      "originatingSystemKey": "12345",
      "url": "https://{company-website-url}/{path-to-listing}",
      "streetAddress": "1007 Mountain Gate Rd",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#listingoffer`

*website user makes a listing offer*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#listingoffer",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "ListingOffer",
    "agent": null,
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "Comment",
      "text": "take it or leave it."
    },
    "offerPrice": {
      "type": "PriceSpecification",
      "minPrice": 75000,
      "maxPrice": 100000,
      "price": 75000,
      "priceCurrency": "USD"
    },
    "propertyListing": {
      "type": "PropertyListing",
      "originatingSystemName": "GOTHAM-MLS",
      "originatingSystemKey": "12345",
      "url": "https://{company-website-url}/{path-to-listing}",
      "streetAddress": "1007 Mountain Gate Rd",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      }
    },
    "recipient": {
      "type": "RealEstateAgent",
      "name": "Randy RealEstateAgent",
      "id": "https://{agentid}.example.com/profile/card#me"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#register`

*website user has registered on the website.*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#register",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RegisterAction",
    "agent": null,
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "RealEstateWebsite",
      "url": "https://gothamcityrealestate.example.com"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#requestappointment`

*website user has requested an appointment*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#requestappointment",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RequestAppointmentAction",
    "agent": null,
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "Question",
      "text": "I would like to view 123 Main Street."
    },
    "recipient": {
      "type": "RealEstateAgent",
      "name": "Randy RealEstateAgent",
      "id": "https://{userid}.example.com/profile/card#me"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#requestshowing`

*a website visitor has requested a property showing*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#requestshowing",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RequestShowingAction",
    "agent": null,
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "Question",
      "text": "I would like to view 123 Main Street."
    },
    "about": {
      "type": "PropertyListing",
      "originatingSystemName": "GOTHAM-MLS",
      "originatingSystemKey": "12345",
      "url": "https://{company-website-url}/{path-to-listing}",
      "streetAddress": "1007 Mountain Gate Rd",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      }
    },
    "event": {
      "type": "Event",
      "name": "Property Showing 1007 Mountain Gate Rd",
      "description": "an example meeting request for 4:00PM to 4:30PM.",
      "startDate": "2019-08-01T16:00Z",
      "endDate": "2019-08-01T16:30Z"
    },
    "recipient": {
      "type": "RealEstateAgent",
      "name": "Randy RealEstateAgent",
      "id": "https://{userid}.example.com/profile/card#me"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#saveproperty`

*website user (agent) saved a property*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#saveproperty",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "SaveAction",
    "agent": {
      "type": "Contact",
      "name": "Miles Davis",
      "givenName": "Miles",
      "familyName": "Davis",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "identifier": {
        "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
      },
      "additionalProperty": {
        "userPath": "xxx",
        "workingWithAgent": true
      }
    },
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertyListing",
      "originatingSystemName": "GOTHAM-MLS",
      "originatingSystemKey": "12345",
      "url": "https://{company-website-url}/{path-to-listing}",
      "streetAddress": "1007 Mountain Gate Rd",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#propertysearchsave`

*website user (agent) saves a property search (object), on a website or mobile app (instrument)*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#propertysearchsave",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "SaveAction",
    "agent": {
      "type": "Contact",
      "name": "Miles Davis",
      "givenName": "Miles",
      "familyName": "Davis",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "identifier": {
        "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
      },
      "additionalProperty": {
        "userPath": "xxx",
        "workingWithAgent": true
      }
    },
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertySearch",
      "name": "3+ beds in Gotham City",
      "description": "((city=Gotham),(Bedrooms=3+))",
      "propertyType": "RESI",
      "propertySubType": {
        "propertySubType": "ApartmentPropertyType"
      },
      "listingStatus": "ActiveListingStatus,ContingentListingStatus",
      "location": {
        "type": "Place",
        "address": {
          "type": "PostalAddress",
          "name": "Home",
          "streetAddress": "1007 Mountain Gate Rd",
          "postOfficeBoxNumber": "Box 1234",
          "addressRegion": "New Jersey",
          "addressLocality": "Gotham City",
          "postalCode": "10010",
          "addressCountry": "USA",
          "addressCounty": "Gotham County",
          "addressSubdivision": "Gotham Heights"
        },
        "geo": {
          "type": "GeoShape",
          "geoMidpoint": {
            "type": "GeoCoordinates,",
            "longitude": "73.98",
            "latitude": "40.75"
          },
          "geoRadius": {
            "type": "QuantitativeValue,",
            "value": "10,",
            "unitCode": "mi,",
            "unitText": "miles"
          },
          "box": "(33.5697,-117.775),(33.6018,-117.707)"
        }
      },
      "price": {
        "type": "PriceSpecification",
        "minPrice": 75000,
        "maxPrice": 100000,
        "price": 75000,
        "priceCurrency": "USD"
      },
      "bedrooms": {
        "type": "QuantitativeValue",
        "minValue": 0,
        "maxValue": 4,
        "unitCode": "BD",
        "unitText": "Bedrooms"
      },
      "bathrooms": {
        "type": "QuantitativeValue",
        "minValue": 2,
        "unitCode": "BA",
        "unitText": "Bathrooms"
      },
      "livingArea": {
        "type": "QuantitativeValue",
        "minValue": 1500,
        "unitCode": "SqFt",
        "unitText": "Square Feet"
      },
      "lotSize": {
        "type": "QuantitativeValue",
        "minValue": 0.5,
        "unitCode": "AC",
        "unitText": "Acres"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#searchproperties`

*a website user has performed a property search*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#searchproperties",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "SearchAction",
    "agent": {
      "type": "Contact",
      "name": "Miles Davis",
      "givenName": "Miles",
      "familyName": "Davis",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "identifier": {
        "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
      },
      "additionalProperty": {
        "userPath": "xxx",
        "workingWithAgent": true
      }
    },
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertySearch",
      "name": "3+ beds in Gotham City",
      "description": "((city=Gotham),(Bedrooms=3+))",
      "propertyType": "RESI",
      "propertySubType": {
        "propertySubType": "ApartmentPropertyType"
      },
      "listingStatus": "ActiveListingStatus,ContingentListingStatus",
      "location": {
        "type": "Place",
        "address": {
          "type": "PostalAddress",
          "name": "Home",
          "streetAddress": "1007 Mountain Gate Rd",
          "postOfficeBoxNumber": "Box 1234",
          "addressRegion": "New Jersey",
          "addressLocality": "Gotham City",
          "postalCode": "10010",
          "addressCountry": "USA",
          "addressCounty": "Gotham County",
          "addressSubdivision": "Gotham Heights"
        },
        "geo": {
          "type": "GeoShape",
          "geoMidpoint": {
            "type": "GeoCoordinates,",
            "longitude": "73.98",
            "latitude": "40.75"
          },
          "geoRadius": {
            "type": "QuantitativeValue,",
            "value": "10,",
            "unitCode": "mi,",
            "unitText": "miles"
          },
          "box": "(33.5697,-117.775),(33.6018,-117.707)"
        }
      },
      "price": {
        "type": "PriceSpecification",
        "minPrice": 75000,
        "maxPrice": 100000,
        "price": 75000,
        "priceCurrency": "USD"
      },
      "bedrooms": {
        "type": "QuantitativeValue",
        "minValue": 0,
        "maxValue": 4,
        "unitCode": "BD",
        "unitText": "Bedrooms"
      },
      "bathrooms": {
        "type": "QuantitativeValue",
        "minValue": 2,
        "unitCode": "BA",
        "unitText": "Bathrooms"
      },
      "livingArea": {
        "type": "QuantitativeValue",
        "minValue": 1500,
        "unitCode": "SqFt",
        "unitText": "Square Feet"
      },
      "lotSize": {
        "type": "QuantitativeValue",
        "minValue": 0.5,
        "unitCode": "AC",
        "unitText": "Acres"
      }
    },
    "result": {
      "type": "FindAction",
      "object": [
        {
          "type": "PropertyListing",
          "url": "http://example.com/listing/123"
        },
        {
          "type": "PropertyListing",
          "url": "http://example.com/listing/234"
        }
      ]
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#shareproperty`

*agent shared object with recipient*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#shareproperty",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://{listing-agent}.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "ShareAction",
    "agent": {
      "type": "Contact",
      "name": "Miles Davis",
      "givenName": "Miles",
      "familyName": "Davis",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "identifier": {
        "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
      },
      "additionalProperty": {
        "userPath": "xxx",
        "workingWithAgent": true
      }
    },
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertyListing",
      "originatingSystemName": "GOTHAM-MLS",
      "originatingSystemKey": "12345",
      "url": "https://{company-website-url}/{path-to-listing}",
      "streetAddress": "1007 Mountain Gate Rd",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      }
    },
    "recipient": {
      "type": "Person",
      "email": "user@example.com"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#sharepropertyvaluereport`

*agent shared object with recipient*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#sharepropertyvaluereport",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "ShareAction",
    "agent": {
      "type": "Contact",
      "name": "Miles Davis",
      "givenName": "Miles",
      "familyName": "Davis",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "identifier": {
        "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
      },
      "additionalProperty": {
        "userPath": "xxx",
        "workingWithAgent": true
      }
    },
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertyValueReport",
      "name": "LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...",
      "dateCreated": "2019-08-24T14:15:22Z",
      "result": {
        "type": "MonetaryAmount",
        "minValue": 2400000,
        "maxValue": 3200000,
        "value": 2700000,
        "currency": "USD"
      },
      "about": {
        "type": "RealEstateProperty",
        "propertyType": "RESI",
        "addressCountry": "US",
        "addressLocality": "Gotham City",
        "addressRegion": "New Jersey",
        "apn": "ABC-12345-XX-XXXX",
        "image": [
          {
            "type": "ImageObject",
            "id": "http://user.example.com/public/logo/image.jpg",
            "name": "image.jpg",
            "encodingFormat": "image/jpeg",
            "about": "http://user.example.com/profile/card#me",
            "url": "http://user.example.com/public/profile/image.jpg"
          }
        ],
        "latitude": 40.75,
        "listingId": "string",
        "livingArea": {
          "type": "QuantitativeValue",
          "unitCode": "SqFt",
          "unitText": "Square Feet",
          "value": 1500
        },
        "longitude": 73.98,
        "lotSize": {
          "type": "QuantitativeValue",
          "unitCode": "AC",
          "unitText": "Acres",
          "value": 0.5
        },
        "numberOfBathrooms": "2",
        "numberOfBedrooms": "3",
        "numberOfRooms": 7,
        "postalCode": "10010",
        "propertySubType": "ApartmentPropertyType",
        "stories": 2,
        "streetAddress": "1007 Mountain Gate Rd",
        "yearBuilt": 1988,
        "additionalProperty": {
          "heating": null,
          "cooling": null,
          "isForeclosure": null,
          "isShortsale": null,
          "score": 7,
          "parcelId": null,
          "averageSalePrice": {
            "type": "PriceSpecification",
            "price": 7500000,
            "priceCurrency": "USD"
          },
          "nonDisclosureProperty": false,
          "taxAssessedValue": {
            "@type": "MonetaryAmount",
            "amount": "100000",
            "currency": "USD"
          },
          "taxAssessedYear": 2021,
          "inHouseCompanyListingUrl": null,
          "inHouseCompanyListingEvent": null,
          "neighborhoodMetrics": null,
          "neighborhoodName": "DEER CREEK WOODS",
          "neighborhoodKey": null,
          "useNeighborhoodDataForCharts": false,
          "ownerName": "Bob Jones",
          "ownerOccupied": "Y",
          "ownersEstimatedEquity": {
            "@type": "MonetaryAmount",
            "amount": "100000",
            "currency": "USD"
          },
          "firstLoanPrice": {
            "@type": "MonetaryAmount",
            "amount": "100000",
            "currency": "USD"
          },
          "firstLoanLenderName": "",
          "secondLoanPrice": {
            "@type": "MonetaryAmount",
            "amount": null,
            "currency": null
          },
          "secondLoanLenderName": "N/A",
          "lastRefinanceLoanVal1": {
            "@type": "MonetaryAmount",
            "amount": "100000",
            "currency": "USD"
          },
          "lastRefinanceLenderName1": "N/A",
          "lastRefinanceLoanVal2": {
            "@type": "MonetaryAmount",
            "amount": null,
            "currency": null
          },
          "lastRefinanceLenderName2": "N/A",
          "Title_Company": ""
        }
      }
    },
    "recipient": {
      "type": "Person",
      "email": "user@example.com"
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#viewproperty`

*website user (data.agent) has viewed a listing (data.object) on a webiste or mobile app (data.instrument)*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#viewproperty",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "ViewAction",
    "agent": {
      "type": "Contact",
      "name": "Miles Davis",
      "givenName": "Miles",
      "familyName": "Davis",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "identifier": {
        "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
      },
      "additionalProperty": {
        "userPath": "xxx",
        "workingWithAgent": true
      }
    },
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertyListing",
      "originatingSystemName": "GOTHAM-MLS",
      "originatingSystemKey": "12345",
      "url": "https://{company-website-url}/{path-to-listing}",
      "streetAddress": "1007 Mountain Gate Rd",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "listingPrice": {
        "type": "PriceSpecification",
        "price": 7500000,
        "priceCurrency": "USD"
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|

#### Message `website#viewpropertyvaluereort`

*website user (data.agent) has viewed a propvery value report (data.object) on a webiste or mobile app (data.instrument)*

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | allOf | - | - | - | **additional properties are allowed** |

> Examples of payload _(generated)_

```json
{
  "topic": "realestate/website#viewpropertyvaluereport",
  "time": "2019-08-24T14:15:22Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "ViewAction",
    "agent": {
      "type": "Contact",
      "name": "Miles Davis",
      "givenName": "Miles",
      "familyName": "Davis",
      "telephone": "067-419-1230",
      "email": "user@example.com",
      "identifier": {
        "hsfconsumerid": "216bf670-0777-43db-9d73-c3377d280fe4"
      },
      "additionalProperty": {
        "userPath": "xxx",
        "workingWithAgent": true
      }
    },
    "participant": [
      {
        "type": "Contact",
        "name": "Bruce Wayne",
        "email": "bruce@example.com",
        "identifier": {
          "redContact_GUID": "92d0a096-457e-4643-ace8-fa95b6bdb1c5"
        }
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertyValueReport",
      "name": "LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...",
      "dateCreated": "2019-08-24T14:15:22Z",
      "result": {
        "type": "MonetaryAmount",
        "minValue": 2400000,
        "maxValue": 3200000,
        "value": 2700000,
        "currency": "USD"
      },
      "about": {
        "type": "RealEstateProperty",
        "propertyType": "RESI",
        "addressCountry": "US",
        "addressLocality": "Gotham City",
        "addressRegion": "New Jersey",
        "apn": "ABC-12345-XX-XXXX",
        "image": [
          {
            "type": "ImageObject",
            "id": "http://user.example.com/public/logo/image.jpg",
            "name": "image.jpg",
            "encodingFormat": "image/jpeg",
            "about": "http://user.example.com/profile/card#me",
            "url": "http://user.example.com/public/profile/image.jpg"
          }
        ],
        "latitude": 40.75,
        "listingId": "string",
        "livingArea": {
          "type": "QuantitativeValue",
          "unitCode": "SqFt",
          "unitText": "Square Feet",
          "value": 1500
        },
        "longitude": 73.98,
        "lotSize": {
          "type": "QuantitativeValue",
          "unitCode": "AC",
          "unitText": "Acres",
          "value": 0.5
        },
        "numberOfBathrooms": "2",
        "numberOfBedrooms": "3",
        "numberOfRooms": 7,
        "postalCode": "10010",
        "propertySubType": "ApartmentPropertyType",
        "stories": 2,
        "streetAddress": "1007 Mountain Gate Rd",
        "yearBuilt": 1988,
        "additionalProperty": {
          "heating": null,
          "cooling": null,
          "isForeclosure": null,
          "isShortsale": null,
          "score": 7,
          "parcelId": null,
          "averageSalePrice": {
            "type": "PriceSpecification",
            "price": 7500000,
            "priceCurrency": "USD"
          },
          "nonDisclosureProperty": false,
          "taxAssessedValue": {
            "@type": "MonetaryAmount",
            "amount": "100000",
            "currency": "USD"
          },
          "taxAssessedYear": 2021,
          "inHouseCompanyListingUrl": null,
          "inHouseCompanyListingEvent": null,
          "neighborhoodMetrics": null,
          "neighborhoodName": "DEER CREEK WOODS",
          "neighborhoodKey": null,
          "useNeighborhoodDataForCharts": false,
          "ownerName": "Bob Jones",
          "ownerOccupied": "Y",
          "ownersEstimatedEquity": {
            "@type": "MonetaryAmount",
            "amount": "100000",
            "currency": "USD"
          },
          "firstLoanPrice": {
            "@type": "MonetaryAmount",
            "amount": "100000",
            "currency": "USD"
          },
          "firstLoanLenderName": "",
          "secondLoanPrice": {
            "@type": "MonetaryAmount",
            "amount": null,
            "currency": null
          },
          "secondLoanLenderName": "N/A",
          "lastRefinanceLoanVal1": {
            "@type": "MonetaryAmount",
            "amount": "100000",
            "currency": "USD"
          },
          "lastRefinanceLenderName1": "N/A",
          "lastRefinanceLoanVal2": {
            "@type": "MonetaryAmount",
            "amount": null,
            "currency": null
          },
          "lastRefinanceLenderName2": "N/A",
          "Title_Company": ""
        }
      }
    }
  }
}
```


#### Message extensions

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|




