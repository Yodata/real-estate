---
title: website
menu: Topics
route: /topic/website
---

## website



### publishing website events
Publish events by HTTP POST to your own pods `/publish/` endpoint including the topic, recipient and message body.]



### Example
```http
POST /publish/ HTTP/1.1
Host: # { your pod host url }
x-api-key: # { your api key }
Content-Type: application/json

{
  "topic": "https://realestate/{topic}#{event}",
  "recipient": # the publishing pod,
  "@context": # optional transformation context,
  "data": {
    "type": "{Action}
  }

}
```


### receiving website events

| Event | Description |
| :---- | :---------- |
| [realestate/website#askquestion](#askquestion) | website user asks a question |
| [realestate/website#listingoffer](#listingoffer) | website user makes a listing offer |
| [realestate/website#register](#register) | website user has registered on the website. |
| [realestate/website#requestappointment](#requestappointment) | website user has requested an appointment |
| [realestate/website#requestshowing](#requestshowing) | a website visitor has requested a property showing |
| [realestate/website#saveproperty](#saveproperty) | website user (agent) saved a property |
| [realestate/website#propertysearchsave](#propertysearchsave) | website user (agent) saves a property search (object), on a website or mobile app (instrument) |
| [realestate/website#searchproperties](#searchproperties) | a website user has performed a property search |
| [realestate/website#shareproperty](#shareproperty) | agent shared object with recipient |
| [realestate/website#sharepropertyvaluereport](#sharepropertyvaluereport) | agent shared object with recipient |
| [realestate/website#viewproperty](#viewproperty) | website user (data.agent) has viewed a listing (data.object) on a webiste or mobile app (data.instrument) |
| [realestate/website#viewpropertyvaluereort](#viewpropertyvaluereort) | website user (data.agent) has viewed a propvery value report (data.object) on a webiste or mobile app (data.instrument) |


---
## askquestion
```
realestate/website#askquestion
```

website user asks a question



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | realestate/website#askquestion  |
| time | string&lt;date-time&gt; ! | date & time the event was produced  |
| agent | string&lt;uri&gt; ! | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt; ! | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object | a schema.org/AskAction  |
| data.type | string! | The item type (Linked-Data @type)  |
| data.agent | object! | the website user <br/>RANGE: [Contact](/types/Contact), [Person](/types/Person) |
| data.participant | [object] | a RealEstateAgent,RealEstateTeam,RealEstateOrganization to be notified about the event <br/>RANGE: [Person](/types/Person), [RealEstateAgent](/types/RealEstateAgent), [RealEstateTeam](/types/RealEstateTeam), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.instrument | object | website or mobile application <br/>RANGE: [RealEstateWebsite](/types/RealEstateWebsite), [MobileApplication](/types/MobileApplication), [Thing](/types/Thing) |
| data.object | object! | the question. <br/>RANGE: [Question](/types/Question) |
| data.recipient | object! | the agent being asked <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateOffice](/types/RealEstateOffice), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.about | object | subject of the question <br/>RANGE: [PropertyListing](/types/PropertyListing), [Thing](/types/Thing) |

### Example
```json
{
  "topic": "realestate/website#askquestion",
  "time": "2022-10-12T01:13:43Z",
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
        "type": "RealEstateAgent",
        "id": "https://robin.example.com/profile/card#me",
        "name": "Robin"
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


[back to top](#)

---
## listingoffer
```
realestate/website#listingoffer
```

website user makes a listing offer



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | realestate/website#listingoffer  |
| time | string&lt;date-time&gt; ! | date & time the event was produced  |
| agent | string&lt;uri&gt; ! | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt; ! | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object | an offer is made to buy a PropertyListing <br/>RANGE: [ListingOffer](/types/ListingOffer) |
| data.type | string! | The item type (Linked-Data @type)  |
| data.agent | object! | the Person or Contact who makes the offer <br/>RANGE: [Contact](/types/Contact), [Person](/types/Person) |
| data.participant | [object] | a RealEstateAgent,RealEstateTeam,RealEstateOrganization to be notified about the event <br/>RANGE: [Person](/types/Person), [RealEstateAgent](/types/RealEstateAgent), [RealEstateTeam](/types/RealEstateTeam), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.instrument | object | website or mobile application <br/>RANGE: [RealEstateWebsite](/types/RealEstateWebsite), [MobileApplication](/types/MobileApplication), [Thing](/types/Thing) |
| data.object | object! |  <br/>RANGE: [Comment](/types/Comment), [Question](/types/Question) |
| data.offerPrice | object! | the offer price or range <br/>RANGE: [PriceSpecification](/types/PriceSpecification) |
| data.propertyListing | object | the listing on which the offer is made.  |
| data.recipient | object! | listing agent or offer recipient <br/>RANGE: [RealEstateAgent](/types/RealEstateAgent), [RealEstateOrganization](/types/RealEstateOrganization) |

### Example
```json
{
  "topic": "realestate/website#listingoffer",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "ListingOffer",
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
        "type": "RealEstateAgent",
        "id": "https://robin.example.com/profile/card#me",
        "name": "Robin"
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


[back to top](#)

---
## register
```
realestate/website#register
```

website user has registered on the website.



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | "realestate/website#register"  |
| time | string&lt;date-time&gt; ! | date & time the event was produced  |
| agent | string&lt;uri&gt; ! | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt; ! | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object | the user (agent) has created a website account. <br/>RANGE: [RegisterAction](/types/RegisterAction) |
| data.type | string! | the action type  |
| data.agent | object! | the registering user <br/>RANGE: [Contact](/types/Contact), [Person](/types/Person) |
| data.participant | [object] | a RealEstateAgent,RealEstateTeam,RealEstateOrganization to be notified about the event <br/>RANGE: [Person](/types/Person), [RealEstateAgent](/types/RealEstateAgent), [RealEstateTeam](/types/RealEstateTeam), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.instrument | object | website or mobile application <br/>RANGE: [RealEstateWebsite](/types/RealEstateWebsite), [MobileApplication](/types/MobileApplication), [Thing](/types/Thing) |
| data.object | object! | the site, app or service being on which the user is registered <br/>RANGE: [RealEstateWebsite](/types/RealEstateWebsite), [MobileApplication](/types/MobileApplication) |

### Example
```json
{
  "topic": "realestate/website#register",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RegisterAction",
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
        "type": "RealEstateAgent",
        "id": "https://robin.example.com/profile/card#me",
        "name": "Robin"
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


[back to top](#)

---
## requestappointment
```
realestate/website#requestappointment
```

website user has requested an appointment



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | "realestate/website#requestappointment"  |
| time | string&lt;date-time&gt; ! | date & time the event was produced  |
| agent | string&lt;uri&gt; ! | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt; ! | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object | the event payload, typeically a schema.org/Action  |
| data.type | string! | "RequestAppointmentAction"  |
| data.agent | object! | the website user requesting the appointment <br/>RANGE: [Contact](/types/Contact), [Person](/types/Person) |
| data.participant | [object] | a RealEstateAgent,RealEstateTeam,RealEstateOrganization to be notified about the event <br/>RANGE: [Person](/types/Person), [RealEstateAgent](/types/RealEstateAgent), [RealEstateTeam](/types/RealEstateTeam), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.instrument | object | website or mobile application <br/>RANGE: [RealEstateWebsite](/types/RealEstateWebsite), [MobileApplication](/types/MobileApplication), [Thing](/types/Thing) |
| data.object | object! | webform content submitted by the agent <br/>RANGE: [Question](/types/Question) |
| data.recipient | object | the recipient <br/>RANGE: [Person](/types/Person), [Organization](/types/Organization) |

### Example
```json
{
  "topic": "realestate/website#requestappointment",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RequestAppointmentAction",
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
        "type": "RealEstateAgent",
        "id": "https://robin.example.com/profile/card#me",
        "name": "Robin"
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


[back to top](#)

---
## requestshowing
```
realestate/website#requestshowing
```

a website visitor has requested a property showing



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | "realestate/website#requestshowing"  |
| time | string&lt;date-time&gt; ! | date & time the event was produced  |
| agent | string&lt;uri&gt; ! | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt; ! | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object | the event payload, typeically a schema.org/Action  |
| data.type | string! | "RequestShowingAction"  |
| data.agent | object! | website user requesting the showing <br/>RANGE: [Contact](/types/Contact), [Person](/types/Person) |
| data.participant | [object] | a RealEstateAgent,RealEstateTeam,RealEstateOrganization to be notified about the event <br/>RANGE: [Person](/types/Person), [RealEstateAgent](/types/RealEstateAgent), [RealEstateTeam](/types/RealEstateTeam), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.instrument | object | website or mobile application <br/>RANGE: [RealEstateWebsite](/types/RealEstateWebsite), [MobileApplication](/types/MobileApplication), [Thing](/types/Thing) |
| data.object | object! | A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document. <br/>RANGE: [Question](/types/Question) |
| data.about | object | the PropertyListing <br/>RANGE: [PropertyListing](/types/PropertyListing) |
| data.event | object | An event happening at a certain time and location <br/>RANGE: [Event](/types/Event) |
| data.recipient | object | the assigned agent <br/>RANGE: [Person](/types/Person), [Organization](/types/Organization) |

### Example
```json
{
  "topic": "realestate/website#requestshowing",
  "time": "2022-10-12T01:13:43Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "RequestShowingAction",
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
        "type": "RealEstateAgent",
        "id": "https://robin.example.com/profile/card#me",
        "name": "Robin"
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


[back to top](#)

---
## saveproperty
```
realestate/website#saveproperty
```

website user (agent) saved a property



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | "realestate/website#saveproperty"  |
| time | string&lt;date-time&gt; ! | date & time the event was produced  |
| agent | string&lt;uri&gt; ! | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt; ! | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object | An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role. <br/>RANGE: [SaveAction](/types/SaveAction) |
| data.type | string! | the action type  |
| data.agent | object! | the website user who performed the action <br/>RANGE: [Contact](/types/Contact), [Person](/types/Person) |
| data.participant | [object] | a RealEstateAgent,RealEstateTeam,RealEstateOrganization to be notified about the event <br/>RANGE: [Person](/types/Person), [RealEstateAgent](/types/RealEstateAgent), [RealEstateTeam](/types/RealEstateTeam), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.instrument | object | website or mobile application <br/>RANGE: [RealEstateWebsite](/types/RealEstateWebsite), [MobileApplication](/types/MobileApplication), [Thing](/types/Thing) |
| data.object | object! | the properting that was saved <br/>RANGE: [PropertyListing](/types/PropertyListing) |

### Example
```json
{
  "topic": "realestate/website#saveproperty",
  "time": "2022-10-12T01:13:43Z",
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
        "type": "RealEstateAgent",
        "id": "https://robin.example.com/profile/card#me",
        "name": "Robin"
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


[back to top](#)

---
## propertysearchsave
```
realestate/website#propertysearchsave
```

website user (agent) saves a property search (object), on a website or mobile app (instrument)



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | realestate/website#propertysearchsave  |
| time | string&lt;date-time&gt; ! | date & time the event was produced  |
| agent | string&lt;uri&gt; ! | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt; ! | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object | the event payload, typeically a schema.org/Action  |
| data.type | string! | The item type (Linked-Data @type)  |
| data.agent | object! | the website user who performed the action <br/>RANGE: [Contact](/types/Contact), [Person](/types/Person) |
| data.participant | [object] | a RealEstateAgent,RealEstateTeam,RealEstateOrganization to be notified about the event <br/>RANGE: [Person](/types/Person), [RealEstateAgent](/types/RealEstateAgent), [RealEstateTeam](/types/RealEstateTeam), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.instrument | object | website or mobile application <br/>RANGE: [RealEstateWebsite](/types/RealEstateWebsite), [MobileApplication](/types/MobileApplication), [Thing](/types/Thing) |
| data.object | object! | property search parameters <br/>RANGE: [PropertySearch](/types/PropertySearch) |

### Example
```json
{
  "topic": "realestate/website#propertysearchsave",
  "time": "2022-10-12T01:13:43Z",
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
        "type": "RealEstateAgent",
        "id": "https://robin.example.com/profile/card#me",
        "name": "Robin"
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
          "streetAddress": "1007 Mountain Gate Rd",
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


[back to top](#)

---
## searchproperties
```
realestate/website#searchproperties
```

a website user has performed a property search



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | realestate/website#searchproperties  |
| time | string&lt;date-time&gt; ! | date & time the event was produced  |
| agent | string&lt;uri&gt; ! | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt; ! | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object | the event payload, typeically a schema.org/Action <br/>RANGE: [SearchAction](/types/SearchAction) |
| data.type | string! | SearchAction  |
| data.agent | object! | the user who performed the search <br/>RANGE: [Contact](/types/Contact), [Person](/types/Person) |
| data.participant | [object] | a RealEstateAgent,RealEstateTeam,RealEstateOrganization to be notified about the event <br/>RANGE: [Person](/types/Person), [RealEstateAgent](/types/RealEstateAgent), [RealEstateTeam](/types/RealEstateTeam), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.instrument | object | website or mobile application <br/>RANGE: [RealEstateWebsite](/types/RealEstateWebsite), [MobileApplication](/types/MobileApplication), [Thing](/types/Thing) |
| data.object | object! | property search parameters <br/>RANGE: [PropertySearch](/types/PropertySearch) |
| data.result | object | the result of a search action <br/>RANGE: [FindAction](/types/FindAction) |

### Example
```json
{
  "topic": "realestate/website#searchproperties",
  "time": "2022-10-12T01:13:43Z",
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
        "type": "RealEstateAgent",
        "id": "https://robin.example.com/profile/card#me",
        "name": "Robin"
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
          "streetAddress": "1007 Mountain Gate Rd",
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


[back to top](#)

---
## shareproperty
```
realestate/website#shareproperty
```

agent shared object with recipient



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | realestate/website#shareproperty  |
| time | string&lt;date-time&gt; ! | date & time the event was produced  |
| agent | string&lt;uri&gt; ! | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt; ! | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object | the event payload, typeically a schema.org/Action  |
| data.type | string! | The item type (Linked-Data @type)  |
| data.agent | object! | the website user who performed the action <br/>RANGE: [Contact](/types/Contact), [Person](/types/Person) |
| data.participant | [object] | a RealEstateAgent,RealEstateTeam,RealEstateOrganization to be notified about the event <br/>RANGE: [Person](/types/Person), [RealEstateAgent](/types/RealEstateAgent), [RealEstateTeam](/types/RealEstateTeam), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.instrument | object | website or mobile application <br/>RANGE: [RealEstateWebsite](/types/RealEstateWebsite), [MobileApplication](/types/MobileApplication), [Thing](/types/Thing) |
| data.object | object! |  <br/>RANGE: [PropertyListing](/types/PropertyListing) |
| data.recipient | object | the recipient of the share  |

### Example
```json
{
  "topic": "realestate/website#shareproperty",
  "time": "2022-10-12T01:13:43Z",
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
        "type": "RealEstateAgent",
        "id": "https://robin.example.com/profile/card#me",
        "name": "Robin"
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


[back to top](#)

---
## sharepropertyvaluereport
```
realestate/website#sharepropertyvaluereport
```

agent shared object with recipient



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | realestate/website#sharepropertyvaluereport  |
| time | string&lt;date-time&gt; ! | date & time the event was produced  |
| agent | string&lt;uri&gt; ! | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt; ! | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object | the event payload, typeically a schema.org/Action  |
| data.type | string! | The item type (Linked-Data @type)  |
| data.agent | object! | the website user who performed the action <br/>RANGE: [Contact](/types/Contact), [Person](/types/Person) |
| data.participant | [object] | a RealEstateAgent,RealEstateTeam,RealEstateOrganization to be notified about the event <br/>RANGE: [Person](/types/Person), [RealEstateAgent](/types/RealEstateAgent), [RealEstateTeam](/types/RealEstateTeam), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.instrument | object | website or mobile application <br/>RANGE: [RealEstateWebsite](/types/RealEstateWebsite), [MobileApplication](/types/MobileApplication), [Thing](/types/Thing) |
| data.object | object! | an automated property value esmation <br/>RANGE: [PropertyValueReport](/types/PropertyValueReport) |
| data.recipient | object | the recipient of the share  |

### Example
```json
{
  "topic": "realestate/website#sharepropertyvaluereport",
  "time": "2022-10-12T01:13:43Z",
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
        "type": "RealEstateAgent",
        "id": "https://robin.example.com/profile/card#me",
        "name": "Robin"
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertyValueReport",
      "name": "LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...",
      "dateCreated": "2022-10-12T01:13:43Z",
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


[back to top](#)

---
## viewproperty
```
realestate/website#viewproperty
```

website user (data.agent) has viewed a listing (data.object) on a webiste or mobile app (data.instrument)



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | realestate/website#viewproperty  |
| time | string&lt;date-time&gt; ! | date & time the event was produced  |
| agent | string&lt;uri&gt; ! | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt; ! | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object | the event payload, typeically a schema.org/Action <br/>RANGE: [AddAction](/types/AddAction) |
| data.type | string! | The item type (Linked-Data @type)  |
| data.agent | object! | the website user who performed the action <br/>RANGE: [Contact](/types/Contact), [Person](/types/Person) |
| data.participant | [object] | a RealEstateAgent,RealEstateTeam,RealEstateOrganization to be notified about the event <br/>RANGE: [Person](/types/Person), [RealEstateAgent](/types/RealEstateAgent), [RealEstateTeam](/types/RealEstateTeam), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.instrument | object | website or mobile application <br/>RANGE: [RealEstateWebsite](/types/RealEstateWebsite), [MobileApplication](/types/MobileApplication), [Thing](/types/Thing) |
| data.object | object! | the viewed property <br/>RANGE: [PropertyListing](/types/PropertyListing) |

### Example
```json
{
  "topic": "realestate/website#viewproperty",
  "time": "2022-10-12T01:13:43Z",
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
        "type": "RealEstateAgent",
        "id": "https://robin.example.com/profile/card#me",
        "name": "Robin"
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


[back to top](#)

---
## viewpropertyvaluereort
```
realestate/website#viewpropertyvaluereort
```

website user (data.agent) has viewed a propvery value report (data.object) on a webiste or mobile app (data.instrument)



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | realestate/website#viewpropertyvaluereport  |
| time | string&lt;date-time&gt; ! | date & time the event was produced  |
| agent | string&lt;uri&gt; ! | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt; ! | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object | the event payload, typeically a schema.org/Action <br/>RANGE: [ViewAction](/types/ViewAction) |
| data.type | string! | (required, constant) ViewAction  |
| data.agent | object! | the website user who viewed the property value reportt <br/>RANGE: [Contact](/types/Contact), [Person](/types/Person) |
| data.participant | [object] | a RealEstateAgent,RealEstateTeam,RealEstateOrganization to be notified about the event <br/>RANGE: [Person](/types/Person), [RealEstateAgent](/types/RealEstateAgent), [RealEstateTeam](/types/RealEstateTeam), [RealEstateOrganization](/types/RealEstateOrganization) |
| data.instrument | object | website or mobile application <br/>RANGE: [RealEstateWebsite](/types/RealEstateWebsite), [MobileApplication](/types/MobileApplication), [Thing](/types/Thing) |
| data.object | object! | an automated property value esmation <br/>RANGE: [PropertyValueReport](/types/PropertyValueReport) |

### Example
```json
{
  "topic": "realestate/website#viewpropertyvaluereport",
  "time": "2022-10-12T01:13:43Z",
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
        "type": "RealEstateAgent",
        "id": "https://robin.example.com/profile/card#me",
        "name": "Robin"
      }
    ],
    "instrument": {
      "type": "RealEstateWebsite",
      "url": "http://gotham-city-realestate.example.com"
    },
    "object": {
      "type": "PropertyValueReport",
      "name": "LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...",
      "dateCreated": "2022-10-12T01:13:43Z",
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


[back to top](#)
