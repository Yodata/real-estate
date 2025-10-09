---
title: profile#update
---
## Message

*an agent, office or organization profile was updated*

### Payload Example(s) (generated)

```json
{
  "topic": "realestate/profile#update",
  "data": {
    "type": "UpdateAction",
    "object": {
      "type": "RealEstateAgent",
      "additionalName": "Johnny,John",
      "address": {
        "type": "PostalAddress",
        "name": "Home",
        "addressCountry": "USA",
        "addressCounty": "Gotham County",
        "addressLocality": "Gotham City",
        "addressRegion": "New Jersey",
        "addressSubdivision": "Gotham Heights",
        "postalCode": "10010",
        "postOfficeBoxNumber": "Box 1234",
        "streetAddress": "1007 Mountain Gate Rd"
      },
      "additionalProperty":{
        "primaryBusinessType":"Residential",
        "displayZillowReviews": false,
        "displayRateMyAgentReviews": false,
        "UserType": "Full Time Sales Professional",
        "OfficeDBA": "Fox & Roach, REALTORS",
        "TeamName": "",
        "AffiliateID": "PA301",
        "EmployeeType": "Full Time Sales Professional",
        "IsTeamQueue": false,
        "TeamQueueTeamId": "https://null.bhhs.hsfaffiliates.com/profile/card#me",
        "appointmentAppURL": "",
        "OfficeStatus": "Active",
        "vendorEmailOptout": false,
        "agentWebsiteType": "Agent Showcase",
        "Status": "Active",
        "bhhsLeadNotificationPreference": {
            "timeZone": "America/New_York",
            "emailNotification": true,
            "textNotification": false,
            "email": "edward.szumski@foxroach.com",
            "leadNotificationSchedule": [
                {
                    "type": "Schedule",
                    "name": "Weekday",
                    "byDay": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                    ]
                },
                {
                    "type": "Schedule",
                    "name": "Saturday",
                    "byDay": [
                        "Saturday"
                    ]
                },
                {
                    "type": "Schedule",
                    "name": "Sunday",
                    "byDay": [
                        "Sunday"
                    ]
                }
            ]
        },
        "wpFooter": [],
        "BrokerID": "PA301",
        "excludeFromBHHSConnect": false,
        "displayTestimonials": true,
        "OfficeID": "PA301-151",
        "corporateEmail": "edward.szumski@foxroach.com",
        "IsDisplayed": true,
        "TeamID": "",
        "preferredLanguage": {
            "type": "Language",
            "name": "en_US"
        },
        "IsCompanyQueue": false
      },
      "certification": {
        "type": "Certification",
        "name": "e-Agent Certified",
        "issuedBy": {
          "type": "RealEstateOrganization",
          "id": "https://example.com/profile/card#me",
          "name": "Gotham City Real Estate"
        },
        "issuedTo": {
          "type": "RealEstateAgent",
          "id": "http://example.com",
          "name": "string"
        }
      },
      "contactPoint": {
        "type": "ContactPoint",
        "name": "Work",
        "telephone": "555-555-5555",
        "faxNumber": "555-555-5555",
        "email": "bob@example.com",
        "url": "https://www.facebook.com/hallandoates"
      },
      "email": "user@example.com",
      "familyName": "Smith",
      "givenName": "John",
      "id": "http://example.com",
      "identifier": {
        "bhhsconsumerid": "12345"
      },
      "image": [
        {
          "type": "ImageObject",
          "@id": "http://example.com",
          "id": "http://user.example.com/public/logo/image.jpg",
          "name": "image.jpg",
          "encodingFormat": "image/jpeg",
          "about": "http://user.example.com/profile/card#me",
          "url": "http://user.example.com/public/profile/image.jpg"
        }
      ],
      "jobTitle": [
        "CEO"
      ],
      "memberOf": [
        {
          "type": "OrganizationRole",
          "roleName": "Owner",
          "memberOf": {
            "type": "RealEstateOrganization",
            "id": "http://orgid.example.com/profile/card#me"
          },
          "member": "https://memberid.example.com/profile/card#me",
          "startDate": "2019-08-24T14:15:22Z",
          "endDate": "2019-08-24T14:15:22Z"
        }
      ],
      "name": "string",
      "parentOrganization": [
        "http://example.com"
      ],
      "permit": {
        "type": "Permit",
        "name": "DRE Number",
        "issuedBy": {
          "type": "State",
          "name": "California"
        },
        "issuedThrough": {
          "type": "Service",
          "name": "Department of Real Estate"
        },
        "validIn": {},
        "validFrom": "2019-08-24T14:15:22Z",
        "validUntil": "2019-08-24T14:15:22Z"
      },
      "subOrganization": [
        "http://example.com"
      ],
      "url": "http://example.com"
    }
  }
}
```



### Payload

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| topic | string | const (`"realestate/profile#update"`)  |
| data | object | - |
| data.type | string | const (`"UpdateAction"`)  |
| data.object | oneOf | - |
| data.object.0 (oneOf item) | object | A real estate agent who represents buyers and sellers |
| data.object.0.type | string | const (`"RealEstateAgent"`)  |
| data.object.0.additionalName | string | any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator. |
| data.object.0.address | object | A physical address. |
| data.object.additionalProperty.primaryBusinessType | string |  allowed (`"Commerical"`, `"Residential"`) |
| data.object.additionalProperty.displayZillowReviews | boolean | displayZillowReviews status  |
| data.object.additionalProperty.displayRateMyAgentReviews | boolean | displayRateMyAgentReviews status  |
| data.object.additionalProperty.UserType | string | User Type  |
| data.object.additionalProperty.OfficeDBA | string | Office DBA  |
| data.object.additionalProperty.TeamName | string | Team Name  |
| data.object.additionalProperty.AffiliateID | string | AffiliateID |
| data.object.additionalProperty.EmployeeType | string | Employee Type  |
| data.object.additionalProperty.IsTeamQueue | boolean | Team Queue status  |
| data.object.additionalProperty.TeamQueueTeamId | string | URL of the team queue teamid (`uri`)  |
| data.object.additionalProperty.appointmentAppURL | string |  URL of the appointmentAppURL (`uri`)  |
| data.object.additionalProperty.OfficeStatus | string |  status of office. For backward compatibility  |
| data.object.additionalProperty.vendorEmailOptout | boolean | vendorEmailOptout status  |
| data.object.additionalProperty.agentWebsiteType | string | agent WebsiteType  |
| data.object.additionalProperty.Status | string | allowed Status  |
| data.object.additionalProperty.wpFooter | array |list of wpFooter  |
| data.object.additionalProperty.BrokerID | string | broker id  |
| data.object.additionalProperty.excludeFromBHHSConnect | boolean | excludeFromBHHSConnect (`"true"`, `"false"`) |
| data.object.additionalProperty.displayTestimonials | boolean | displayTestimonials (`"true"`, `"false"`)  |
| data.object.additionalProperty.OfficeID | string | office Id  |
| data.object.additionalProperty.corporateEmail | email | corporateEmail  |
| data.object.additionalProperty.IsDisplayed | boolean | IsDisplayed (`"true"`, `"false"`)  |
| data.object.additionalProperty.TeamID | string | team Id  |
| data.object.additionalProperty.IsCompanyQueue | boolean | IsCompanyQueue (`"true"`, `"false"`)  |
| data.object.additionalProperty.preferredLanguage.type | string | type of preferredLanguage  |
| data.object.additionalProperty.preferredLanguage.name | string | name of preferredLanguage  |
| data.object.additionalProperty.bhhsLeadNotificationPreference.timeZone | timezone |  timezone |
| data.object.additionalProperty.bhhsLeadNotificationPreference.emailNotification | boolean | emailNotification (`"true"`, `"false"`)  |
| data.object.additionalProperty.bhhsLeadNotificationPreference.textNotification | boolean |  textNotification  (`"true"`, `"false"`) |
| data.object.additionalProperty.bhhsLeadNotificationPreference.email | email | email of bhhsLeadNotificationPreference  |
| data.object.additionalProperty.bhhsLeadNotificationPreference.leadNotificationSchedule | string | type , name, byDay (`"Monday"`, `"Tuesday"`,`"Wednesday"`, `"Thursday"`,`"Friday"`, `"Saturday"`, `"Sunday"`)   |
| data.object.0.certification | object | A certification issued by an organization to an individual or business. |
| data.object.0.certification.type | string | allowed (`"Certification"`) Certification |
| data.object.0.certification.name | string | the name of the Certification |
| data.object.0.certification.issuedBy | object | the issuing authority |
| data.object.0.certification.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| data.object.0.certification.issuedBy.id | string | Linked-Data URI (@id) format (`uri`) |
| data.object.0.certification.issuedBy.name | string | name of the issuing organization |
| data.object.0.certification.issuedTo | object | the subject |
| data.object.0.certification.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| data.object.0.certification.issuedTo.id | string | Linked-Data URI (@id) format (`uri`) |
| data.object.0.certification.issuedTo.name | string | - |
| data.object.0.contactPoint | object | A point of contact for the entity. By convention in the real estate domain, ContactPoints are preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values for example, Work Telephone, Home, as named contactPoint values. >= 3 properties |
| data.object.0.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.object.0.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.object.0.contactPoint.telephone | string | - |
| data.object.0.contactPoint.faxNumber | string | - |
| data.object.0.contactPoint.email | string | an email address for the item. format (`email`) |
| data.object.0.contactPoint.url | string | primary URL for the item. format (`uri`) |
| data.object.0.email | string | a valid email address format (`email`) |
| data.object.0.familyName | string | Last Name of a person. [Family Name](https://schema.org/familyName) <= 50 characters |
| data.object.0.givenName | string | First Name of a person |
| data.object.0.id | string | Linked-Data URI (@id) format (`uri`) |
| data.object.0.identifier | object |  1 properties |
| data.object.0.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.0.image.0 (index) | object allOf | - |
| data.object.0.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.0.image.0.0.0 (allOf item) | object | - |
| data.object.0.image.0.0.0.type | string | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`) |
| data.object.0.image.0.0.0.@id | string | the liked data uri for the Thing format (`uri`) |
| data.object.0.image.0.0.0 (property names) | - |  pattern (`^[a-z@$][a-zA-Z0-9-_]+$`) |
| data.object.0.image.0.0.1 (allOf item) | - | - |
| data.object.0.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.0.image.0.0.1.id | string | the URL to access the item. format (`uri`) |
| data.object.0.image.0.0.1.name | string | the file name of the object. |
| data.object.0.image.0.0.1.encodingFormat | string | MIME type |
| data.object.0.image.0.0.1.about | string | URI to the subject of the image or logo format (`uri`) |
| data.object.0.image.0.0.1.url | string | URL of the image content format (`uri`) |
| data.object.0.image.0.1 (allOf item) | - | - |
| data.object.0.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.object.0.image.0.1.id | any | - |
| data.object.0.image.0.1.name | any | - |
| data.object.0.image.0.1.encodingFormat | any | - |
| data.object.0.jobTitle | array<string> | - |
| data.object.0.jobTitle (single item) | string | The job title of the person (for example, Financial Manager). |
| data.object.0.memberOf | array<anyOf> | an Organization (or ProgramMembership) to which this Person or Organization belongs. |
| data.object.0.memberOf (single item) | anyOf | - |
| data.object.0.memberOf.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| data.object.0.memberOf.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.0.memberOf.0.roleName | string | the role name |
| data.object.0.memberOf.0.memberOf | object | the org or group where the role is performed |
| data.object.0.memberOf.0.member | string | member object or id format (`uri`) |
| data.object.0.memberOf.0.startDate | string | date the member began performing this role format (`date-time`) |
| data.object.0.memberOf.0.endDate | string | date the member stopped performing the role format (`date-time`) |
| data.object.0.memberOf.1 (anyOf item) | string |  format (`uri`) |
| data.object.0.name | string | - |
| data.object.0.parentOrganization | array<string> | organizations of which this org is a part. |
| data.object.0.parentOrganization (single item) | string |  format (`uri`) |
| data.object.0.permit | object | A permit issued by an organization to an individual or business. |
| data.object.0.permit.type | string | allowed (`"Permit"`) Permit type. |
| data.object.0.permit.name | string | Common or display value of the Permit. |
| data.object.0.permit.issuedBy | object | The issuing authority |
| data.object.0.permit.issuedThrough | object | the service through which the permit was granted |
| data.object.0.permit.validIn | object | - |
| data.object.0.permit.validFrom | string | start date format (`date-time`) |
| data.object.0.permit.validUntil | string | end date format (`date-time`) |
| data.object.0.subOrganization | array<string> | child organizations of the organization |
| data.object.0.subOrganization (single item) | string |  format (`uri`) |
| data.object.0.url | string | URL of the item. format (`uri`) |
| data.object.1 (oneOf item) | allOf | - |
| data.object.1.0 (allOf item) | - | - |
| data.object.1.0.id | string | - |
| data.object.1.1 (allOf item) | object | - |
| data.object.1.1.type | string | - |
| data.object.1.1.address | object | A physical address. |
| data.object.1.1.address.type | string | const (`"PostalAddress"`)  |
| data.object.1.1.address.streetAddress | string | the street address <= 75 characters |
| data.object.1.1.address.postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| data.object.1.1.address.addressRegion | string | abbreviated state or province |
| data.object.1.1.address.addressLocality | string | City, Township. <= 50 characters |
| data.object.1.1.address.postalCode | string | Zip/Post Code <= 12 characters |
| data.object.1.1.address.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| data.object.1.1.address.addressCounty | string | County |
| data.object.1.1.address.addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |
| data.object.1.1.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| data.object.1.1.availableLanguage.type | string | const (`"Language"`)  |
| data.object.1.1.availableLanguage.name | string | the display name of the language |
| data.object.1.1.availableLanguage.additionalName | string | BCP 47 language code |
| data.object.1.1.branchCode | string | A short textual code that uniquely identifies a place of business. |
| data.object.1.1.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| data.object.1.1.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| data.object.1.1.certification.0.type | string | allowed (`"Certification"`) Certification |
| data.object.1.1.certification.0.name | string | the name of the Certification |
| data.object.1.1.certification.0.issuedBy | object | the issuing authority |
| data.object.1.1.certification.0.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| data.object.1.1.certification.0.issuedBy.id | string | Linked-Data URI (@id) format (`uri`) |
| data.object.1.1.certification.0.issuedBy.name | string | name of the issuing organization |
| data.object.1.1.certification.0.issuedTo | object | the subject |
| data.object.1.1.certification.0.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| data.object.1.1.certification.0.issuedTo.id | string | Linked-Data URI (@id) format (`uri`) |
| data.object.1.1.certification.0.issuedTo.name | string | - |
| data.object.1.1.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| data.object.1.1.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.object.1.1.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.object.1.1.contactPoint.telephone | string | - |
| data.object.1.1.contactPoint.faxNumber | string | - |
| data.object.1.1.contactPoint.email | string | an email address for the item. format (`email`) |
| data.object.1.1.contactPoint.url | string | primary URL for the item. format (`uri`) |
| data.object.1.1.email | string | a valid email address format (`email`) |
| data.object.1.1.faxNumber | string | Do people still use fax machines? |
| data.object.1.1.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.1.1.image.0 (index) | object allOf | - |
| data.object.1.1.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.1.1.image.0.0.0 (allOf item) | object | - |
| data.object.1.1.image.0.0.0.type | string | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`) |
| data.object.1.1.image.0.0.0.@id | string | the liked data uri for the Thing format (`uri`) |
| data.object.1.1.image.0.0.0 (property names) | - |  pattern (`^[a-z@$][a-zA-Z0-9-_]+$`) |
| data.object.1.1.image.0.0.1 (allOf item) | - | - |
| data.object.1.1.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.1.1.image.0.0.1.id | string | the URL to access the item. format (`uri`) |
| data.object.1.1.image.0.0.1.name | string | the file name of the object. |
| data.object.1.1.image.0.0.1.encodingFormat | string | MIME type |
| data.object.1.1.image.0.0.1.about | string | URI to the subject of the image or logo format (`uri`) |
| data.object.1.1.image.0.0.1.url | string | URL of the image content format (`uri`) |
| data.object.1.1.image.0.1 (allOf item) | - | - |
| data.object.1.1.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.object.1.1.image.0.1.id | any | - |
| data.object.1.1.image.0.1.name | any | - |
| data.object.1.1.image.0.1.encodingFormat | any | - |
| data.object.1.1.logo | array<object> | - |
| data.object.1.1.logo.type | string | allowed (`"DigitalDocument"`)  |
| data.object.1.1.logo.id | string | - |
| data.object.1.1.logo.name | string | document name or title |
| data.object.1.1.logo.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| data.object.1.1.logo.about | object | subject of the Document |
| data.object.1.1.logo.url | string | public URL of the object |
| data.object.1.1.name | string | - |
| data.object.1.1.parentOrganization | array<string> | organizations of which this org is a part. |
| data.object.1.1.parentOrganization (single item) | string |  format (`uri`) |
| data.object.1.1.subOrganization | array<string> | child organizations of the organization |
| data.object.1.1.subOrganization (single item) | string |  format (`uri`) |
| data.object.1.1.telephone | string | Primary phone number. |
| data.object.1.1.url | string | URL of the item. format (`uri`) |
| data.object.1.2 (allOf item) | - | A real estate team. |
| data.object.1.2.type | string | allowed (`"RealEstateTeam"`) RealEstateTeam |
| data.object.1.2.areaServed | object | the physical areas that make up the ServiceArea |
| data.object.1.2.description | string | description of the item. |
| data.object.1.2.parentOrganization | array<string> | A franchisor or affiliate network of which this organization plays a membership role. |
| data.object.1.2.parentOrganization (single item) | string |  format (`uri`) |
| data.object.1.2.member | array<allOf> | - |
| data.object.1.2.member (single item) | allOf | - |
| data.object.1.2.member.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| data.object.1.2.member.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.1.2.member.0.roleName | string | the role name |
| data.object.1.2.member.0.memberOf | object | the org or group where the role is performed |
| data.object.1.2.member.0.member | string | member object or id format (`uri`) |
| data.object.1.2.member.0.startDate | string | date the member began performing this role format (`date-time`) |
| data.object.1.2.member.0.endDate | string | date the member stopped performing the role format (`date-time`) |
| data.object.1.2.member.1 (allOf item) | object | a membership relationship.  Subclass of OrganizationRole |
| data.object.1.2.member.1.type | string | allowed (`"RealEstateTeamMembership"`) a member of a real estate team |
| data.object.1.2.member.1.roleName | string | allowed (`"TeamMember"`, `"TeamAdmin"`, `"TeamOwner"`)  |
| data.object.1.2.member.1.memberOf | string |  format (`uri`) |
| data.object.1.2.member.1.member | string |  format (`uri`) |
| data.object.2 (oneOf item) | allOf | - |
| data.object.2.0 (allOf item) | object | - |
| data.object.2.0.type | string | - |
| data.object.2.0.address | object | A physical address. |
| data.object.2.0.address.type | string | const (`"PostalAddress"`)  |
| data.object.2.0.address.streetAddress | string | the street address <= 75 characters |
| data.object.2.0.address.postOfficeBoxNumber | string | The post office box number for PO box addresses. |
| data.object.2.0.address.addressRegion | string | abbreviated state or province |
| data.object.2.0.address.addressLocality | string | City, Township. <= 50 characters |
| data.object.2.0.address.postalCode | string | Zip/Post Code <= 12 characters |
| data.object.2.0.address.addressCountry | string | allowed (`"CA"`, `"DE"`, `"GR"`, `"IN"`, `"IT"`, `"MX"`, `"PE"`, `"PT"`, `"ES"`, `"AE"`, `"GB"`, `"US"`) two-letter ISO 3166-1 alpha-2 country code |
| data.object.2.0.address.addressCounty | string | County |
| data.object.2.0.address.addressSubdivision | string | the subdivision or neighborhood (us real estate extension) |
| data.object.2.0.availableLanguage | array<object> | Please use one of the language codes from the IETF BCP 47 standard. |
| data.object.2.0.availableLanguage.type | string | const (`"Language"`)  |
| data.object.2.0.availableLanguage.name | string | the display name of the language |
| data.object.2.0.availableLanguage.additionalName | string | BCP 47 language code |
| data.object.2.0.branchCode | string | A short textual code that uniquely identifies a place of business. |
| data.object.2.0.certification | tuple<object, ...optional<any>> | certifications granted to a person or organization |
| data.object.2.0.certification.0 (index) | object | A certification issued by an organization to an individual or business. |
| data.object.2.0.certification.0.type | string | allowed (`"Certification"`) Certification |
| data.object.2.0.certification.0.name | string | the name of the Certification |
| data.object.2.0.certification.0.issuedBy | object | the issuing authority |
| data.object.2.0.certification.0.issuedBy.type | string | allowed (`"RealEstateOrganization"`) The item type (Linked-Data @type) |
| data.object.2.0.certification.0.issuedBy.id | string | Linked-Data URI (@id) format (`uri`) |
| data.object.2.0.certification.0.issuedBy.name | string | name of the issuing organization |
| data.object.2.0.certification.0.issuedTo | object | the subject |
| data.object.2.0.certification.0.issuedTo.type | string | allowed (`"RealEstateAgent"`) The item type (Linked-Data @type) |
| data.object.2.0.certification.0.issuedTo.id | string | Linked-Data URI (@id) format (`uri`) |
| data.object.2.0.certification.0.issuedTo.name | string | - |
| data.object.2.0.contactPoint | array<object> | a named point of contact - telephone, email, faxNumber, and/or url for the entity |
| data.object.2.0.contactPoint.type | string | const (`"ContactPoint"`)  |
| data.object.2.0.contactPoint.name | string | a label for the contactPoint, i.e. 'Work', or 'Home' |
| data.object.2.0.contactPoint.telephone | string | - |
| data.object.2.0.contactPoint.faxNumber | string | - |
| data.object.2.0.contactPoint.email | string | an email address for the item. format (`email`) |
| data.object.2.0.contactPoint.url | string | primary URL for the item. format (`uri`) |
| data.object.2.0.email | string | a valid email address format (`email`) |
| data.object.2.0.faxNumber | string | Do people still use fax machines? |
| data.object.2.0.image | tuple<object allOf, ...optional<any>> | an ImageObject or URI reference to an image on the web. |
| data.object.2.0.image.0 (index) | object allOf | - |
| data.object.2.0.image.0.0 (allOf item) | allOf | an image, video or document availble for download |
| data.object.2.0.image.0.0.0 (allOf item) | object | - |
| data.object.2.0.image.0.0.0.type | string | The item type (Linked-Data @type) pattern (`^[A-Z][a-zA-Z0-9]+$`) |
| data.object.2.0.image.0.0.0.@id | string | the liked data uri for the Thing format (`uri`) |
| data.object.2.0.image.0.0.0 (property names) | - |  pattern (`^[a-z@$][a-zA-Z0-9-_]+$`) |
| data.object.2.0.image.0.0.1 (allOf item) | - | - |
| data.object.2.0.image.0.0.1.type | string | allowed (`"MediaObject"`, `"ImageObject"`, `"DigitalDocument"`)  |
| data.object.2.0.image.0.0.1.id | string | the URL to access the item. format (`uri`) |
| data.object.2.0.image.0.0.1.name | string | the file name of the object. |
| data.object.2.0.image.0.0.1.encodingFormat | string | MIME type |
| data.object.2.0.image.0.0.1.about | string | URI to the subject of the image or logo format (`uri`) |
| data.object.2.0.image.0.0.1.url | string | URL of the image content format (`uri`) |
| data.object.2.0.image.0.1 (allOf item) | - | - |
| data.object.2.0.image.0.1.type | string | allowed (`"ImageObject"`)  |
| data.object.2.0.image.0.1.id | any | - |
| data.object.2.0.image.0.1.name | any | - |
| data.object.2.0.image.0.1.encodingFormat | any | - |
| data.object.2.0.logo | array<object> | - |
| data.object.2.0.logo.type | string | allowed (`"DigitalDocument"`)  |
| data.object.2.0.logo.id | string | - |
| data.object.2.0.logo.name | string | document name or title |
| data.object.2.0.logo.encodingFormat | string | [ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml) |
| data.object.2.0.logo.about | object | subject of the Document |
| data.object.2.0.logo.url | string | public URL of the object |
| data.object.2.0.name | string | - |
| data.object.2.0.parentOrganization | array<string> | organizations of which this org is a part. |
| data.object.2.0.parentOrganization (single item) | string |  format (`uri`) |
| data.object.2.0.subOrganization | array<string> | child organizations of the organization |
| data.object.2.0.subOrganization (single item) | string |  format (`uri`) |
| data.object.2.0.telephone | string | Primary phone number. |
| data.object.2.0.url | string | URL of the item. format (`uri`) |
| data.object.2.1 (allOf item) | - | A real estate franchisor, broker or business |
| data.object.2.1.type | string | allowed (`"RealEstateOrganization"`, `"RealEstateOffice"`)  |
| data.object.2.1.areaServed | object | the physical areas that make up the ServiceArea |
| data.object.2.1.description | string | description of the item. |
| data.object.2.1.parentOrganization | array<string> | organizations of which this org is a part. |
| data.object.2.1.parentOrganization (single item) | string |  format (`uri`) |
| data.object.2.1.numberOfSubOrganizations | number | the number of offices for an affiliate. |
| data.object.2.1.member | array<anyOf> | A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals. |
| data.object.2.1.member (single item) | anyOf | - |
| data.object.2.1.member.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| data.object.2.1.member.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.2.1.member.0.roleName | string | the role name |
| data.object.2.1.member.0.memberOf | object | the org or group where the role is performed |
| data.object.2.1.member.0.member | string | member object or id format (`uri`) |
| data.object.2.1.member.0.startDate | string | date the member began performing this role format (`date-time`) |
| data.object.2.1.member.0.endDate | string | date the member stopped performing the role format (`date-time`) |
| data.object.2.1.member.1 (anyOf item) | string |  format (`uri`) |
| data.object.2.1.memberOf | array<anyOf> | - |
| data.object.2.1.memberOf (single item) | anyOf | - |
| data.object.2.1.memberOf.0 (anyOf item) | object | describes a role played by a member and a group or organization. |
| data.object.2.1.memberOf.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.2.1.memberOf.0.roleName | string | the role name |
| data.object.2.1.memberOf.0.memberOf | object | the org or group where the role is performed |
| data.object.2.1.memberOf.0.member | string | member object or id format (`uri`) |
| data.object.2.1.memberOf.0.startDate | string | date the member began performing this role format (`date-time`) |
| data.object.2.1.memberOf.0.endDate | string | date the member stopped performing the role format (`date-time`) |
| data.object.2.1.memberOf.1 (anyOf item) | allOf | - |
| data.object.2.1.memberOf.1.0 (allOf item) | object | describes a role played by a member and a group or organization. |
| data.object.2.1.memberOf.1.0.type | string | allowed (`"OrganizationRole"`) a role played by the member in the memberOf group |
| data.object.2.1.memberOf.1.0.roleName | string | the role name |
| data.object.2.1.memberOf.1.0.memberOf | object | the org or group where the role is performed |
| data.object.2.1.memberOf.1.0.member | string | member object or id format (`uri`) |
| data.object.2.1.memberOf.1.0.startDate | string | date the member began performing this role format (`date-time`) |
| data.object.2.1.memberOf.1.0.endDate | string | date the member stopped performing the role format (`date-time`) |
| data.object.2.1.memberOf.1.1 (allOf item) | object | a membership relationship |
| data.object.2.1.memberOf.1.1.type | string | allowed (`"MLSMembership"`) an MLS member relationship |
| data.object.2.1.memberOf.1.1.roleName | string | - |
| data.object.2.1.memberOf.1.1.memberOf | object | - |
| data.object.2.1.memberOf.1.1.member | string |  format (`uri`) |
| data.object.2.1.memberOf.1.1.memberId | string | the user's MLSID |
| data.object.2.1.permit | array<object> | - |
| data.object.2.1.permit (single item) | object | - |

### Headers

| Name | Type | Description |
|---|---|---|
| (root) | object | - |
| time | string | date & time the event was produced format (`date-time`) |
| agent | string | if you are a multi-tenant app, then the agent is the user associated with the event data. any future events related to this message will be sent to the same agent/recipient format (`uri`) |
| instrument | string | the app or service that produced the event on behalf of the agent/user format (`uri`) |
| source | string | a copy of the event was sent to the source(s). format (`uri`) |
| originalRecipient | string | the originalRecipient helps you determine the subscription that delivered the event to you. if the originalRecipient is the same as the agent, then the you are subscribed to the agent. if the originalRecipient is different from the agent, then you are subscribed to the event source format (`uri`) |
| id | string | the Event ID (aka "Publish ID") is the immutable canonical identifier for the event. it is a URI that is unique to the event and will not change. all subscribers will receive the same id for the same event. format (`uri`) |
| @id | string |  format (`uri`) |

### Tools

* [Mock Data Generator](/tools/mock-data-generator)
* [Schema Validator](/tools/validate)


