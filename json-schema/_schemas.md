---
name: Object Types


---
# Object Types



## Action



#### Action properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! |   |
| agent | string&lt;uri&gt;&#124;object | the direct performer or driver of the action. <br/>RANGE: [Person](/schemas#person),[Organization](/schemas#organization),[URI](/schemas#uri) |
| object | object | The object upon the action is carried out, whose state is kept intact or changed.  |

#### Action example
```json
{
  "type": "string",
  "agent": "http://user.example.com/profile/card",
  "object": {}
}
```


## ApplicationProfile

a solid profile document

#### ApplicationProfile properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! | Linked-Data (@type)  |
| id | string&lt;uri&gt;! | Linked-Data URI (@id)  |
| primaryTopic | string |   |
| #me | object |   |
| inbox | string! | discoverable uri to your LDN inbox  |
| outbox | string! | discoverable uri to your LDN outbox  |
| storage | string | uri to your linked-data storage root  |
| preferencesFile | string | discoverable uri for shared application preferences  |
| account | string | discoverable solid:account root  |
| privateTypeIndex | string | type index for your private use  |
| publicTypeIndex | string | shared, discoverable type index  |
| permissions | [string] | the subscription types required by your service.  |

#### ApplicationProfile example
```json
{
  "type": "SoftwareApplication",
  "id": "https://user.example.com/profile/card#me",
  "primaryTopic": "#me",
  "#me": {
    "type": "SoftwareApplication",
    "inbox": "/inbox/",
    "outbox": "/outbox/",
    "storage": "/",
    "preferencesFile": "/settings/prefs",
    "account": "/",
    "privateTypeIndex": "/settings/privateTypeIndex",
    "publicTypeIndex": "/settings/publicTypeIndex",
    "permissions": [
      "profile:read"
    ]
  },
  "inbox": "/inbox/",
  "outbox": "/outbox/",
  "storage": "/",
  "preferencesFile": "/settings/prefs",
  "account": "/",
  "privateTypeIndex": "/settings/privateTypeIndex",
  "publicTypeIndex": "/settings/publicTypeIndex",
  "permissions": [
    "profile:read"
  ]
}
```


## Contact

a contact

#### Contact properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! | Person  |
| id | string&lt;uri&gt; | Linked-Data URI (@id)  |
| name | string | Full name of the person.  |
| givenName | string | First Name  |
| familyName | string | Last Name  |
| jobTitle | string | The Job Title of the person.  |
| email | string | Primary email address.  |
| faxNumber | string | Primary fax number.  |
| telephone | string | Primary phone number.  |
| contactPoint | [object] | Named and grouped contacts points. <br/>RANGE: [ContactPoint](/schemas#contactpoint) |
| address | [object] | mailing addresses. <br/>RANGE: [PostalAddress](/schemas#postaladdress) |
| birthDate | string&lt;date&gt; | date of birth.  |
| leadSource | [Organization](/schemas#organization) |   |

#### Contact example
```json
{
  "type": "Person",
  "id": "https://example.com/collection/1",
  "name": "string",
  "givenName": "Bruce",
  "familyName": "Wayne",
  "jobTitle": "Jefe",
  "email": "user@example.com",
  "faxNumber": "(498) 625-6456",
  "telephone": "1-339-041-0306 x2866",
  "contactPoint": [
    {
      "type": "ContactPoint",
      "name": "Work",
      "telephone": "1-364-127-9618 x20418",
      "faxNumber": "834.320.1602",
      "email": "user@example.com",
      "url": "https://www.facebook.com/hallandoates"
    }
  ],
  "address": [
    {
      "type": "PostalAddress",
      "streetAddress": "1007 Mountain Gate Rd",
      "postOfficeBoxNumber": "Box 1234",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010"
    }
  ],
  "birthDate": "2019-04-14",
  "leadSource": {
    "type": "Organization",
    "id": "https://example.com/collection/1",
    "name": "string",
    "telephone": "079.706.7065 x6341",
    "faxNumber": "(873) 271-4802",
    "email": "user@example.com",
    "url": "http://example.com",
    "availableLanguage": [
      {
        "type": "Language",
        "name": "English",
        "additionalName": "en"
      }
    ],
    "branchCode": "CA301-001",
    "contactPoint": [
      {
        "type": "ContactPoint",
        "name": "Work",
        "telephone": "1-364-127-9618 x20418",
        "faxNumber": "834.320.1602",
        "email": "user@example.com",
        "url": "https://www.facebook.com/hallandoates"
      }
    ],
    "logo": [
      {
        "type": "DigitalDocument",
        "id": "http://user.example.com/public/logo/fileName.zip",
        "name": "fileName.zip",
        "encodingFormat": "application/zip",
        "identifier": {},
        "about": "http://user.example.com/profile/card#me"
      }
    ],
    "image": [
      {
        "type": "ImageObject",
        "id": "http://user.example.com/public/logo/image.jpg",
        "name": "image.jpg",
        "encodingFormat": "image/jpeg",
        "content": "string",
        "about": "http://user.example.com/profile/card#me",
        "url": "http://user.example.com/public/profile/image.jpg"
      }
    ],
    "parentOrganization": [
      "http://example.com"
    ]
  }
}
```


## Comment

A comment on an item.

#### Comment properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! | Comment  |
| id | string&lt;uri&gt; | Linked-Data URI (@id)  |
| about | string&lt;uri&gt;&#124;object | the subject of the item  |
| text | string | the comment content  |

#### Comment example
```json
{
  "type": "Comment",
  "id": "https://example.com/collection/1",
  "about": "http://user.example.com/profile/card#me",
  "text": "Commodi ratione vel qui ullam ea ut."
}
```


## CommentAction



#### CommentAction properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! | CommentAction  |
| agent | string&lt;uri&gt;&#124;object | the commentor <br/>RANGE: [Person](/schemas#person),[Organization](/schemas#organization),[URI](/schemas#uri) |
| object | object | A comment on an item.  |
| topic | * |   |

#### CommentAction example
```json
{
  "type": "CommentAction",
  "agent": {
    "type": "RealEstateAgent",
    "name": "Casey Commentor"
  },
  "object": {
    "type": "Comment",
    "id": "https://example.com/collection/1",
    "about": "http://user.example.com/profile/card#me",
    "text": "Commodi ratione vel qui ullam ea ut."
  },
  "topic": [
    "contact"
  ]
}
```


## ContactPoint

A contact point—for example, a Customer Complaints department.

#### ContactPoint properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string | ContactPoint  |
| name | string | a label for the contactPoint, i.e. 'Work', or 'Home'  |
| telephone | string | a telephone number  |
| faxNumber | string | a fax number  |
| email | string&lt;email&gt; | an email address for the item.  |
| url | string&lt;uri&gt; | primary URL for the item.  |

#### ContactPoint example
```json
{
  "type": "ContactPoint",
  "name": "Work",
  "telephone": "1-364-127-9618 x20418",
  "faxNumber": "834.320.1602",
  "email": "user@example.com",
  "url": "https://www.facebook.com/hallandoates"
}
```


## DigitalDocument

an electronic file.

#### DigitalDocument properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! | Linked-Data (@type)  |
| id | string&lt;uri&gt; | Linked-Data URI (@id)  |
| name | string | the FileName  |
| encodingFormat | string | the MIME type  |
| identifier | object | namespaced identifier  |
| about | string&lt;uri&gt; | URI to the subject of the image or logo  |

#### DigitalDocument example
```json
{
  "type": "DigitalDocument",
  "id": "http://user.example.com/public/logo/fileName.zip",
  "name": "fileName.zip",
  "encodingFormat": "application/zip",
  "identifier": {},
  "about": "http://user.example.com/profile/card#me"
}
```


## EmailMessage



#### EmailMessage properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! | EmailMessage  |
| id | string&lt;uri&gt; | Linked-Data URI (@id)  |
| name | string | name of the work.  |
| description | string | description of the item  |
| creator | string&lt;uri&gt; | creator / author of the work  |
| dateCreated | string&lt;date-time&gt; | The date on which the CreativeWork was created or the item was added to a DataFeed.  |
| dateModified | string&lt;date-time&gt; | The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.  |
| toRecipient | [string] | direct recipient of the message  |
| ccRecipient | [string] | direct recipient of the message  |
| bccRecipient | [string] | direct recipient of the message  |
| dateSent | string&lt;date-time&gt; | The date/time at which the message was sent.  |
| dateRead | string&lt;date-time&gt; | The date/time at which the message was first viewed  |
| sender | string&lt;uri&gt; | ref to the sender  |
| messageAttachment | [[DigitalDocument](/schemas#digitaldocument)] | message attachments <br/>RANGE: [DigitalDocument](/schemas#digitaldocument) |

#### EmailMessage example
```json
{
  "type": "EmailMessage",
  "id": "https://example.com/collection/1",
  "name": "Market Report 1008 Mountain Gate Road",
  "description": "Dolor accusamus rerum nemo non omnis. Nam labore pariatur eius omnis sit.",
  "creator": "http://user.example.com/profile/card",
  "dateCreated": "2019-04-14T10:08:56Z",
  "dateModified": "2019-04-14T10:08:56Z",
  "toRecipient": [
    "user@example.com"
  ],
  "ccRecipient": [
    "user@example.com"
  ],
  "bccRecipient": [
    "user@example.com"
  ],
  "dateSent": "2019-04-14T10:08:56Z",
  "dateRead": "2019-04-14T10:08:56Z",
  "sender": "http://user.example.com/profile/card",
  "messageAttachment": [
    {
      "type": "DigitalDocument",
      "id": "http://user.example.com/public/logo/fileName.zip",
      "name": "fileName.zip",
      "encodingFormat": "application/zip",
      "identifier": {},
      "about": "http://user.example.com/profile/card#me"
    }
  ]
}
```


## ImageObject



#### ImageObject properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! | Linked-Data (@type)  |
| id | string&lt;uri&gt; | the URL to access the item.  |
| name | string | the file name of the object.  |
| encodingFormat | string | MIME type  |
| content | string | base64 encoded content  |
| about | string&lt;uri&gt; | URI to the subject of the image or logo  |
| url | string&lt;uri&gt; | URL of the image content  |

#### ImageObject example
```json
{
  "type": "ImageObject",
  "id": "http://user.example.com/public/logo/image.jpg",
  "name": "image.jpg",
  "encodingFormat": "image/jpeg",
  "content": "string",
  "about": "http://user.example.com/profile/card#me",
  "url": "http://user.example.com/public/profile/image.jpg"
}
```


## Lead

a lead offered or assigned by the agent to one or more recipients

#### Lead properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string |   |
| id | string&lt;uri&gt; | the action URI  |
| agent | string&lt;uri&gt; | the lead assignor's webid <br/>RANGE: [Organization](/schemas#organization),[Person](/schemas#person) |
| recipient | string&lt;uri&gt; | the assignee's webid <br/>RANGE: [Person](/schemas#person),[Organization](/schemas#organization) |
| object | object | a contact  |

#### Lead example
```json
{
  "type": "AssignAction",
  "id": "http://example.com",
  "agent": "http://organization.example.com/profile/card#me",
  "recipient": "http://user.example.com/profile/card#me",
  "object": {
    "type": "Person",
    "id": "https://example.com/collection/1",
    "name": "string",
    "givenName": "Bruce",
    "familyName": "Wayne",
    "jobTitle": "Jefe",
    "email": "user@example.com",
    "faxNumber": "(498) 625-6456",
    "telephone": "1-339-041-0306 x2866",
    "contactPoint": [
      {
        "type": "ContactPoint",
        "name": "Work",
        "telephone": "1-364-127-9618 x20418",
        "faxNumber": "834.320.1602",
        "email": "user@example.com",
        "url": "https://www.facebook.com/hallandoates"
      }
    ],
    "address": [
      {
        "type": "PostalAddress",
        "streetAddress": "1007 Mountain Gate Rd",
        "postOfficeBoxNumber": "Box 1234",
        "addressRegion": "New Jersey",
        "addressLocality": "Gotham City",
        "postalCode": "10010"
      }
    ],
    "birthDate": "2019-04-14",
    "leadSource": {
      "type": "Organization",
      "id": "https://example.com/collection/1",
      "name": "string",
      "telephone": "079.706.7065 x6341",
      "faxNumber": "(873) 271-4802",
      "email": "user@example.com",
      "url": "http://example.com",
      "availableLanguage": [
        {
          "type": "Language",
          "name": "English",
          "additionalName": "en"
        }
      ],
      "branchCode": "CA301-001",
      "contactPoint": [
        {
          "type": "ContactPoint",
          "name": "Work",
          "telephone": "1-364-127-9618 x20418",
          "faxNumber": "834.320.1602",
          "email": "user@example.com",
          "url": "https://www.facebook.com/hallandoates"
        }
      ],
      "logo": [
        {
          "type": "DigitalDocument",
          "id": "http://user.example.com/public/logo/fileName.zip",
          "name": "fileName.zip",
          "encodingFormat": "application/zip",
          "identifier": {},
          "about": "http://user.example.com/profile/card#me"
        }
      ],
      "image": [
        {
          "type": "ImageObject",
          "id": "http://user.example.com/public/logo/image.jpg",
          "name": "image.jpg",
          "encodingFormat": "image/jpeg",
          "content": "string",
          "about": "http://user.example.com/profile/card#me",
          "url": "http://user.example.com/public/profile/image.jpg"
        }
      ],
      "parentOrganization": [
        "http://example.com"
      ]
    }
  }
}
```


## Notification



#### Notification properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string |   |
| id | string&lt;uri&gt; | the notification uri  |
| topic | [string] | subscription scopes that will recieve the notification  |
| timestamp | string | the time the notification was created  |
| agent | string&lt;uri&gt; | the user/source that generated the notification  |
| instrument | string&lt;uri&gt; | application or service that delivereted the notification  |
| object | object | the event payload <br/>RANGE: [Action](/schemas#action) |

#### Notification example
```json
{
  "type": "Notification",
  "id": "https://you.example.com/inbox/12345",
  "topic": [
    "lead"
  ],
  "timestamp": 1550503972767,
  "agent": "https://user.example.com/profile/card#me",
  "instrument": "https://application.example.com/profile/card#me",
  "object": {
    "type": "string",
    "agent": "http://user.example.com/profile/card",
    "object": {}
  }
}
```


## MediaObject



#### MediaObject properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! | Linked-Data (@type)  |
| id | string&lt;uri&gt; | the URL to access the item.  |
| name | string | the file name of the object.  |
| encodingFormat | string | MIME type  |
| content | string | base64 encoded content  |
| about | string&lt;uri&gt; | URI to the subject of the image or logo  |
| url | string&lt;uri&gt; | URL of the image content  |

#### MediaObject example
```json
{
  "type": "MediaObject",
  "id": "http://user.example.com/public/logo/fileName.zip",
  "name": "fileName.zip",
  "encodingFormat": "application/zip",
  "content": "string",
  "about": "http://user.example.com/profile/card#me",
  "url": "http://user.example.com/public/profile/image.jpg"
}
```


## MLSMembership

Provides additional information in member/memberOf relationships.

#### MLSMembership properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string | an MLS member relationship  |
| roleName | string | A role played, performed or filled by a person or organization.  |
| memberOf | object | relationship roles <br/>RANGE: [MultipleListingService](/schemas#multiplelistingservice) |
| memberId | string | the user's MLSID  |

#### MLSMembership example
```json
{
  "type": "MLSMembership",
  "roleName": "MLSMember",
  "memberOf": {
    "type": "MultipleListingService",
    "name": "GreatScottMLS"
  },
  "memberId": "memberid123"
}
```


## MarketingProgram



#### MarketingProgram properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! | MarketingProgram  |
| id | string&lt;uri&gt; | Linked-Data URI (@id)  |
| name | string | name of the work.  |
| description | string | description of the item  |
| creator | string&lt;uri&gt; | creator / author of the work  |
| dateCreated | string&lt;date-time&gt; | The date on which the CreativeWork was created or the item was added to a DataFeed.  |
| dateModified | string&lt;date-time&gt; | The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.  |
| member | [string&lt;uri&gt;] | member relationship objects <br/>RANGE: [ProgramMembership](/schemas#programmembership) |

#### MarketingProgram example
```json
{
  "type": "MarketingProgram",
  "id": "https://example.com/collection/1",
  "name": "Market Report 1008 Mountain Gate Road",
  "description": "Dolor accusamus rerum nemo non omnis. Nam labore pariatur eius omnis sit.",
  "creator": "http://user.example.com/profile/card",
  "dateCreated": "2019-04-14T10:08:56Z",
  "dateModified": "2019-04-14T10:08:56Z",
  "member": [
    "https://user.example.com/profile/card"
  ]
}
```


## MultipleListingService

an MLS

#### MultipleListingService properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! | MultipleListingService  |
| id | string&lt;uri&gt; | Linked-Data URI (@id)  |
| name | string | Name or DBA.  |
| telephone | string | Primary phone number.  |
| faxNumber | string | Primary fax number.  |
| email | string&lt;email&gt; | Primary email address.  |
| url | string&lt;uri&gt; | primary website/url for the entity.  |
| availableLanguage | [object] | A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard. <br/>RANGE: [Language](/schemas#language) |
| branchCode | string | A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.  |
| contactPoint | [object] | Additional contact points. Can be organized by role, location, etc...  |
| logo | [object] | a logo associated with the organization. <br/>RANGE: [ImageObject](/schemas#imageobject),[DigitalDocument](/schemas#digitaldocument) |
| image | [object&#124;string&lt;uri&gt;] | an ImageObject or URI reference to an image of the entity on the web. <br/>RANGE: [ImageObject](/schemas#imageobject),[URI](/schemas#uri) |
| parentOrganization | [string&lt;uri&gt;] |   |

#### MultipleListingService example
```json
{
  "type": "MultipleListingService",
  "name": "GreatScott MLS"
}
```


## Organization



#### Organization properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! | Linked-Data (@type)  |
| id | string&lt;uri&gt; | Linked-Data URI (@id)  |
| name | string | Name or DBA.  |
| telephone | string | Primary phone number.  |
| faxNumber | string | Primary fax number.  |
| email | string&lt;email&gt; | Primary email address.  |
| url | string&lt;uri&gt; | primary website/url for the entity.  |
| availableLanguage | [object] | A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard. <br/>RANGE: [Language](/schemas#language) |
| branchCode | string | A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.  |
| contactPoint | [object] | Additional contact points. Can be organized by role, location, etc...  |
| logo | [object] | a logo associated with the organization. <br/>RANGE: [ImageObject](/schemas#imageobject),[DigitalDocument](/schemas#digitaldocument) |
| image | [object&#124;string&lt;uri&gt;] | an ImageObject or URI reference to an image of the entity on the web. <br/>RANGE: [ImageObject](/schemas#imageobject),[URI](/schemas#uri) |
| parentOrganization | [string&lt;uri&gt;] |   |

#### Organization example
```json
{
  "type": "Organization",
  "id": "https://example.com/collection/1",
  "name": "string",
  "telephone": "079.706.7065 x6341",
  "faxNumber": "(873) 271-4802",
  "email": "user@example.com",
  "url": "http://example.com",
  "availableLanguage": [
    {
      "type": "Language",
      "name": "English",
      "additionalName": "en"
    }
  ],
  "branchCode": "CA301-001",
  "contactPoint": [
    {
      "type": "ContactPoint",
      "name": "Work",
      "telephone": "1-364-127-9618 x20418",
      "faxNumber": "834.320.1602",
      "email": "user@example.com",
      "url": "https://www.facebook.com/hallandoates"
    }
  ],
  "logo": [
    {
      "type": "DigitalDocument",
      "id": "http://user.example.com/public/logo/fileName.zip",
      "name": "fileName.zip",
      "encodingFormat": "application/zip",
      "identifier": {},
      "about": "http://user.example.com/profile/card#me"
    }
  ],
  "image": [
    {
      "type": "ImageObject",
      "id": "http://user.example.com/public/logo/image.jpg",
      "name": "image.jpg",
      "encodingFormat": "image/jpeg",
      "content": "string",
      "about": "http://user.example.com/profile/card#me",
      "url": "http://user.example.com/public/profile/image.jpg"
    }
  ],
  "parentOrganization": [
    "http://example.com"
  ]
}
```


## OrganizationRole

Provides additional information in member/memberOf relationships.

#### OrganizationRole properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string | OrganizationRole  |
| roleName | string | A role played, performed or filled by a person or organization.  |
| memberOf | * | relationship roles  |

#### OrganizationRole example
```json
{
  "type": "OrganizationRole",
  "roleName": "E-Team Certified",
  "memberOf": null
}
```


## Person



#### Person properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! | Person  |
| id | string&lt;uri&gt; | Linked-Data URI (@id)  |
| name | string | Full name of the person.  |
| givenName | string | First Name  |
| familyName | string | Last Name  |
| jobTitle | string | The Job Title of the person.  |
| email | string | Primary email address.  |
| faxNumber | string | Primary fax number.  |
| telephone | string | Primary phone number.  |
| contactPoint | [object] | Named and grouped contacts points. <br/>RANGE: [ContactPoint](/schemas#contactpoint) |
| address | [object] | mailing addresses. <br/>RANGE: [PostalAddress](/schemas#postaladdress) |
| birthDate | string&lt;date&gt; | date of birth.  |

#### Person example
```json
{
  "type": "Person",
  "id": "https://example.com/collection/1",
  "name": "string",
  "givenName": "Bruce",
  "familyName": "Wayne",
  "jobTitle": "Jefe",
  "email": "user@example.com",
  "faxNumber": "(498) 625-6456",
  "telephone": "1-339-041-0306 x2866",
  "contactPoint": [
    {
      "type": "ContactPoint",
      "name": "Work",
      "telephone": "1-364-127-9618 x20418",
      "faxNumber": "834.320.1602",
      "email": "user@example.com",
      "url": "https://www.facebook.com/hallandoates"
    }
  ],
  "address": [
    {
      "type": "PostalAddress",
      "streetAddress": "1007 Mountain Gate Rd",
      "postOfficeBoxNumber": "Box 1234",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010"
    }
  ],
  "birthDate": "2019-04-14"
}
```


## Place



#### Place properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! | Linked-Data (@type)  |
| id | string&lt;uri&gt; | Linked-Data URI (@id)  |
| address | object | PostalAddress <br/>RANGE: [PostalAddress](/schemas#postaladdress) |
| aggregateRating | object | AggregateRating -- The overall rating, based on a collection of reviews or ratings, of the item.  |
| branchCode | string | A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.  |
| containedInPlace | [string&lt;uri&gt;] | Place  |
| containsPlace | [string&lt;uri&gt;] | Place  |
| geo | object&#124;object | The geo coordinates of the place.  |
| hasMap | string&lt;uri&gt;&#124;[Map](/schemas#map) | A URL to a map of the place. Supersedes map, maps.  |
| openingHoursSpecification | object | OpeningHoursSpecification  |
| photo | [string&lt;uri&gt;&#124;object] | A photograph of this place. Supersedes photos. <br/>RANGE: [ImageObject](/schemas#imageobject) |
| review | [object] | A review of the item. Supersedes reviews.  |
| specialOpeningHoursSpecification | [object] | The special opening hours of a certain place. Use this to explicitly override general opening hours brought in scope by openingHoursSpecification or openingHours.  |

#### Place example
```json
{
  "type": "string",
  "id": "https://example.com/collection/1",
  "address": {},
  "aggregateRating": {},
  "branchCode": "string",
  "containedInPlace": [
    "http://example.com"
  ],
  "containsPlace": [
    "http://example.com"
  ],
  "geo": {},
  "hasMap": "http://example.com",
  "openingHoursSpecification": {},
  "photo": [
    "http://example.com"
  ],
  "review": [
    {}
  ],
  "specialOpeningHoursSpecification": [
    {}
  ]
}
```


## PostalAddress

A physical address.

#### PostalAddress properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string |   |
| streetAddress | string |   |
| postOfficeBoxNumber | string |   |
| addressRegion | string | State or Province.  |
| addressLocality | string | City, Township.  |
| postalCode | string | Zip/Post Code  |

#### PostalAddress example
```json
{
  "type": "PostalAddress",
  "streetAddress": "1007 Mountain Gate Rd",
  "postOfficeBoxNumber": "Box 1234",
  "addressRegion": "New Jersey",
  "addressLocality": "Gotham City",
  "postalCode": "10010"
}
```


## ProgramMembership

Provides additional information in member/memberOf relationships.

#### ProgramMembership properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string | ProgramMembership  |
| roleName | string | not used  |
| memberOf | string&lt;uri&gt; | reference to the MarketingProgram <br/>RANGE: [MarketingProgram](/schemas#marketingprogram) |
| id | string&lt;uri&gt; | id for the specific instance of the relationship between the member and the Program  |
| member | string&lt;uri&gt; | reference to the member <br/>RANGE: [Person](/schemas#person),[Organization](/schemas#organization) |
| memberId | string | the member identifier for the program  |
| startDate | string&lt;date-time&gt; | the date the member started the program  |
| endDate | string&lt;date-time&gt; | the date the program membership ended  |

#### ProgramMembership example
```json
{
  "type": "ProgramMembership",
  "roleName": null,
  "memberOf": "http://example.com",
  "id": "http://example.com",
  "member": "http://user.example.com/profile/card",
  "memberId": "string",
  "startDate": "2019-04-14T10:08:56Z",
  "endDate": "2019-04-14T10:08:56Z"
}
```


## PropertyValue

a key/value pair, used for maintaining state outside of the current context

#### PropertyValue properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! |   |
| propertyID | string! |   |
| value | string! |   |

#### PropertyValue example
```json
{
  "type": "PropertyValue",
  "propertyID": "UserID",
  "value": "<userid-string>"
}
```


## RealEstateAgent

A real estate agent or team.

#### RealEstateAgent properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! | RealEstateAgent  |
| id | string&lt;uri&gt; | Linked-Data URI (@id)  |
| name | string | Name or DBA.  |
| telephone | string | Primary phone number.  |
| faxNumber | string | Primary fax number.  |
| email | string&lt;email&gt; | Primary email address.  |
| url | string&lt;uri&gt; | primary website/url for the entity.  |
| availableLanguage | [object] | A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard. <br/>RANGE: [Language](/schemas#language) |
| branchCode | string | A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.  |
| contactPoint | [object] | Additional contact points. Can be organized by role, location, etc...  |
| logo | [object] | a logo associated with the organization. <br/>RANGE: [ImageObject](/schemas#imageobject),[DigitalDocument](/schemas#digitaldocument) |
| image | [object&#124;string&lt;uri&gt;] | an ImageObject or URI reference to an image of the entity on the web. <br/>RANGE: [ImageObject](/schemas#imageobject),[URI](/schemas#uri) |
| parentOrganization | [string&lt;uri&gt;] | URI reference to the agent's office. For teams, this can be a reference to the team leader/primary profile. <br/>RANGE: [RealEstateOffice](/schemas#realestateoffice),[RealEstateAgent](/schemas#realestateagent) |
| address | object | primary address <br/>RANGE: [PostalAddress](/schemas#postaladdress) |
| subOrganization | [string&lt;uri&gt;] | for teams: URI reference to a team member <br/>RANGE: [RealEstateAgent](/schemas#realestateagent) |
| member | [object&#124;string&lt;uri&gt;] | describes members and roles for this organization. <br/>RANGE: [OrganizationRole](/schemas#organizationrole),[URI](/schemas#uri) |
| memberOf | [object] | An Organization (or ProgramMembership) to which this Person or Organization belongs. <br/>RANGE: [OrganizationRole](/schemas#organizationrole),[MLSMembership](/schemas#mlsmembership) |
| permit | [object] | permits issued to the person or organization <br/>RANGE: [RealEstateLicense](/schemas#realestatelicense) |

#### RealEstateAgent example
```json
{
  "type": "RealEstateAgent",
  "id": "https://example.com/collection/1",
  "name": "Batman & Robin",
  "telephone": "079.706.7065 x6341",
  "faxNumber": "(873) 271-4802",
  "email": "user@example.com",
  "url": "http://example.com",
  "availableLanguage": [
    {
      "type": "Language",
      "name": "English",
      "additionalName": "en"
    }
  ],
  "branchCode": "CA301-001",
  "contactPoint": [
    {
      "type": "ContactPoint",
      "name": "Work",
      "telephone": "1-364-127-9618 x20418",
      "faxNumber": "834.320.1602",
      "email": "user@example.com",
      "url": "https://www.facebook.com/hallandoates"
    }
  ],
  "logo": [
    {
      "type": "DigitalDocument",
      "id": "http://user.example.com/public/logo/fileName.zip",
      "name": "fileName.zip",
      "encodingFormat": "application/zip",
      "identifier": {},
      "about": "http://user.example.com/profile/card#me"
    }
  ],
  "image": [
    {
      "type": "ImageObject",
      "id": "http://user.example.com/public/logo/image.jpg",
      "name": "image.jpg",
      "encodingFormat": "image/jpeg",
      "content": "string",
      "about": "http://user.example.com/profile/card#me",
      "url": "http://user.example.com/public/profile/image.jpg"
    }
  ],
  "parentOrganization": [
    "http://office-real-estate.example.com/",
    "http://batmanandrobinteam.example.com/"
  ],
  "address": {
    "type": "PostalAddress",
    "streetAddress": "1007 Mountain Gate Rd",
    "postOfficeBoxNumber": "Box 1234",
    "addressRegion": "New Jersey",
    "addressLocality": "Gotham City",
    "postalCode": "10010"
  },
  "subOrganization": [
    "http://org.example.com/profile/card#me"
  ],
  "member": [
    {
      "type": "OrganizationRole",
      "roleName": "E-Team Certified",
      "memberOf": null
    }
  ],
  "memberOf": [
    {
      "type": "MLSMembership",
      "roleName": "MLSMember",
      "memberOf": {
        "type": "MultipleListingService",
        "name": "GreatScottMLS"
      },
      "memberId": "memberid123"
    }
  ],
  "permit": [
    {
      "type": "RealEstateLicense",
      "name": "CA-DRE# 02068375",
      "issuedBy": {
        "type": "Organization",
        "name": "California"
      },
      "issuedThrough": {
        "type": "Service",
        "name": "California Department of Real Estate"
      },
      "validIn": {
        "type": "AdministrativeArea",
        "name": "New York"
      },
      "validFrom": "2019-04-14T10:08:56Z",
      "validUntil": "2019-04-14T10:08:56Z"
    }
  ]
}
```


## RealEstateLicense

Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.

#### RealEstateLicense properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string | RealEstateLicense  |
| name | string | display value, i.e. 'CA-DRE# 02068375'  |
| issuedBy | object | the issuing organization or service <br/>RANGE: [Organization](/schemas#organization) |
| issuedThrough | object | The service through with the permit was granted. <br/>RANGE: [Service](/schemas#service) |
| validIn | object | The geographic area where the permit is valid. <br/>RANGE: [Place](/schemas#place),[AdministrativeArea](/schemas#administrativearea) |
| validFrom | string&lt;date-time&gt; | start date  |
| validUntil | string&lt;date-time&gt; | end date  |

#### RealEstateLicense example
```json
{
  "type": "RealEstateLicense",
  "name": "CA-DRE# 02068375",
  "issuedBy": {
    "type": "Organization",
    "name": "California"
  },
  "issuedThrough": {
    "type": "Service",
    "name": "California Department of Real Estate"
  },
  "validIn": {
    "type": "AdministrativeArea",
    "name": "New York"
  },
  "validFrom": "2019-04-14T10:08:56Z",
  "validUntil": "2019-04-14T10:08:56Z"
}
```


## RealEstateOffice

A real estate franchisor, broker or business.

#### RealEstateOffice properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! | RealEstateOffice  |
| id | string&lt;uri&gt; | Linked-Data URI (@id)  |
| name | string | Name or DBA.  |
| telephone | string | Primary phone number.  |
| faxNumber | string | Primary fax number.  |
| email | string&lt;email&gt; | Primary email address.  |
| url | string&lt;uri&gt; | primary website/url for the entity.  |
| availableLanguage | [object] | A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard. <br/>RANGE: [Language](/schemas#language) |
| branchCode | string | A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.  |
| contactPoint | [object] | department or role specific contact points, i.e. relocation.  |
| logo | [object] | a logo associated with the organization. <br/>RANGE: [ImageObject](/schemas#imageobject),[DigitalDocument](/schemas#digitaldocument) |
| image | [object&#124;string&lt;uri&gt;] | an ImageObject or URI reference to an image of the entity on the web. <br/>RANGE: [ImageObject](/schemas#imageobject),[URI](/schemas#uri) |
| parentOrganization | [string&lt;uri&gt;] | Office broker or franchisor. <br/>RANGE: [RealEstateOrganization](/schemas#realestateorganization) |
| address | object | primary address <br/>RANGE: [PostalAddress](/schemas#postaladdress) |
| subOrganization | [string&lt;uri&gt;] | Agents and teams associated with the office. <br/>RANGE: [RealEstateAgent](/schemas#realestateagent) |
| member | [object&#124;string&lt;uri&gt;] | describes members and roles for this organization. <br/>RANGE: [OrganizationRole](/schemas#organizationrole),[URI](/schemas#uri) |
| memberOf | [object] | An Organization (or ProgramMembership) to which this Person or Organization belongs. <br/>RANGE: [OrganizationRole](/schemas#organizationrole),[MLSMembership](/schemas#mlsmembership) |
| permit | [object] | permits issued to the person or organization <br/>RANGE: [RealEstateLicense](/schemas#realestatelicense) |

#### RealEstateOffice example
```json
{
  "type": "RealEstateOrganization",
  "id": "https://example.com/collection/1",
  "name": "string",
  "telephone": "079.706.7065 x6341",
  "faxNumber": "(873) 271-4802",
  "email": "user@example.com",
  "url": "http://example.com",
  "availableLanguage": [
    {
      "type": "Language",
      "name": "English",
      "additionalName": "en"
    }
  ],
  "branchCode": "CA301-001",
  "contactPoint": [
    {
      "type": "ContactPoint",
      "name": "Relocation",
      "telephone": "1-245-880-8222",
      "faxNumber": "958-530-3473",
      "email": "relocation@example.com"
    }
  ],
  "logo": [
    {
      "type": "DigitalDocument",
      "id": "http://user.example.com/public/logo/fileName.zip",
      "name": "fileName.zip",
      "encodingFormat": "application/zip",
      "identifier": {},
      "about": "http://user.example.com/profile/card#me"
    }
  ],
  "image": [
    {
      "type": "ImageObject",
      "id": "http://user.example.com/public/logo/image.jpg",
      "name": "image.jpg",
      "encodingFormat": "image/jpeg",
      "content": "string",
      "about": "http://user.example.com/profile/card#me",
      "url": "http://user.example.com/public/profile/image.jpg"
    }
  ],
  "parentOrganization": [
    "http://example.com"
  ],
  "address": {
    "type": "PostalAddress",
    "streetAddress": "1007 Mountain Gate Rd",
    "postOfficeBoxNumber": "Box 1234",
    "addressRegion": "New Jersey",
    "addressLocality": "Gotham City",
    "postalCode": "10010"
  },
  "subOrganization": [
    "http://org.example.com/profile/card#me"
  ],
  "member": [
    {
      "type": "OrganizationRole",
      "roleName": "E-Team Certified",
      "memberOf": null
    }
  ],
  "memberOf": [
    {
      "type": "MLSMembership",
      "roleName": "MLSMember",
      "memberOf": {
        "type": "MultipleListingService",
        "name": "GreatScottMLS"
      },
      "memberId": "memberid123"
    }
  ],
  "permit": [
    {
      "type": "RealEstateLicense",
      "name": "CA-DRE# 02068375",
      "issuedBy": {
        "type": "Organization",
        "name": "California"
      },
      "issuedThrough": {
        "type": "Service",
        "name": "California Department of Real Estate"
      },
      "validIn": {
        "type": "AdministrativeArea",
        "name": "New York"
      },
      "validFrom": "2019-04-14T10:08:56Z",
      "validUntil": "2019-04-14T10:08:56Z"
    }
  ]
}
```


## RealEstateOrganization

A real estate franchisor, broker or business.

#### RealEstateOrganization properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| type | string! | RealEstateOrganzation  |
| id | string&lt;uri&gt; | Linked-Data URI (@id)  |
| name | string | Name or DBA.  |
| telephone | string | Primary phone number.  |
| faxNumber | string | Primary fax number.  |
| email | string&lt;email&gt; | Primary email address.  |
| url | string&lt;uri&gt; | primary website/url for the entity.  |
| availableLanguage | [object] | A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard. <br/>RANGE: [Language](/schemas#language) |
| branchCode | string | A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.  |
| contactPoint | [object] | Additional contact points. Can be organized by role, location, etc...  |
| logo | [object] | a logo associated with the organization. <br/>RANGE: [ImageObject](/schemas#imageobject),[DigitalDocument](/schemas#digitaldocument) |
| image | [object&#124;string&lt;uri&gt;] | an ImageObject or URI reference to an image of the entity on the web. <br/>RANGE: [ImageObject](/schemas#imageobject),[URI](/schemas#uri) |
| parentOrganization | [string&lt;uri&gt;] | A franchisor or affiliate network of which this organization plays a membership role. <br/>RANGE: [RealEstateOrganization](/schemas#realestateorganization) |
| address | object | primary address <br/>RANGE: [PostalAddress](/schemas#postaladdress) |
| subOrganization | [string&lt;uri&gt;] | an organization member <br/>RANGE: [RealEstateOrganization](/schemas#realestateorganization) |
| member | [object&#124;string&lt;uri&gt;] | describes members and roles for this organization. <br/>RANGE: [OrganizationRole](/schemas#organizationrole),[URI](/schemas#uri) |
| memberOf | [object] | An Organization (or ProgramMembership) to which this Person or Organization belongs. <br/>RANGE: [OrganizationRole](/schemas#organizationrole),[MLSMembership](/schemas#mlsmembership) |
| permit | [object] | permits issued to the person or organization <br/>RANGE: [RealEstateLicense](/schemas#realestatelicense) |

#### RealEstateOrganization example
```json
{
  "type": "RealEstateOrganization",
  "id": "https://example.com/collection/1",
  "name": "string",
  "telephone": "079.706.7065 x6341",
  "faxNumber": "(873) 271-4802",
  "email": "user@example.com",
  "url": "http://example.com",
  "availableLanguage": [
    {
      "type": "Language",
      "name": "English",
      "additionalName": "en"
    }
  ],
  "branchCode": "CA301-001",
  "contactPoint": [
    {
      "type": "ContactPoint",
      "name": "Work",
      "telephone": "1-364-127-9618 x20418",
      "faxNumber": "834.320.1602",
      "email": "user@example.com",
      "url": "https://www.facebook.com/hallandoates"
    }
  ],
  "logo": [
    {
      "type": "DigitalDocument",
      "id": "http://user.example.com/public/logo/fileName.zip",
      "name": "fileName.zip",
      "encodingFormat": "application/zip",
      "identifier": {},
      "about": "http://user.example.com/profile/card#me"
    }
  ],
  "image": [
    {
      "type": "ImageObject",
      "id": "http://user.example.com/public/logo/image.jpg",
      "name": "image.jpg",
      "encodingFormat": "image/jpeg",
      "content": "string",
      "about": "http://user.example.com/profile/card#me",
      "url": "http://user.example.com/public/profile/image.jpg"
    }
  ],
  "parentOrganization": [
    "http://example.com"
  ],
  "address": {
    "type": "PostalAddress",
    "streetAddress": "1007 Mountain Gate Rd",
    "postOfficeBoxNumber": "Box 1234",
    "addressRegion": "New Jersey",
    "addressLocality": "Gotham City",
    "postalCode": "10010"
  },
  "subOrganization": [
    "http://org.example.com/profile/card#me"
  ],
  "member": [
    {
      "type": "OrganizationRole",
      "roleName": "E-Team Certified",
      "memberOf": null
    }
  ],
  "memberOf": [
    {
      "type": "MLSMembership",
      "roleName": "MLSMember",
      "memberOf": {
        "type": "MultipleListingService",
        "name": "GreatScottMLS"
      },
      "memberId": "memberid123"
    }
  ],
  "permit": [
    {
      "type": "RealEstateLicense",
      "name": "CA-DRE# 02068375",
      "issuedBy": {
        "type": "Organization",
        "name": "California"
      },
      "issuedThrough": {
        "type": "Service",
        "name": "California Department of Real Estate"
      },
      "validIn": {
        "type": "AdministrativeArea",
        "name": "New York"
      },
      "validFrom": "2019-04-14T10:08:56Z",
      "validUntil": "2019-04-14T10:08:56Z"
    }
  ]
}
```


## CustomProperties

`additionalProperty` and `identifier` provide a standard way to share non-standard 
information as a namespaced key/value map.

Producers MUST 
- add a '@context' reference when passing values in `additionalProperty` or `identifier`

Consumers MUST
- consider values in either of these maps as **unstable**.
- treat keys and values in these maps as namespaced key/values.


#### CustomProperties properties

| Name/Type | Type | Description |
|:--------- | :--- | :---------- |
| additionalProperty | object | Property names and values are only valid in the provided `@context`.  For example if `@context http://example.com/context#`. the property with key `ID` should be represented locally as `http;//example.com/context#ID`  |
| identifier | object | a key value map of **namespaced** unique identifiers.  |

#### CustomProperties example
```json
{
  "additionalProperty": {
    "@context": "http://example.com/context#",
    "customProp": "value"
  },
  "identifier": {
    "@context": "http://example.com/context#",
    "ID": "value"
  }
}
```


