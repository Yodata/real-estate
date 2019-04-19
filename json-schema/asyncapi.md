# Let&#x27;s Integrate Real Estate 0.0.1 documentation


Reflex is intended to normalize the process of integrating applications and services
in the real estate domain in a user-centric, vendor agnostic and developer friendly
way.

The API is very simple, the only interactions are publish a message (HTTP POST) and get messages either pushed to your 
application or with HTTP GET.

The project is 100% open source and contributors are welcomed with open arms.

To get started you'll need to get yourself a POD that will provide your application's private message bus.

If you don't already have a pod, contact us and we'll get you setup.


## Table of Contents

* [Topics](#topics)
* [Messages](#messages)
* [Schemas](#schemas)




## Topics

<a name="topic-profile"></a>

### `subscribe` profile


#### Message

You can receive one of the following messages:
##### Message #1a profile (agent, affiliate or office) was created



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AddAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>the profile object</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example

```json
{
  "topic": [
    "profile:read"
  ],
  "type": "AddAction",
  "object": {
    "id": "https://user.example.com/profile/card#me",
    "type": "RealEstateAgent"
  }
}
```

##### Message #2a profile (agent, affiliate or office) was updated



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>UpdateAction</p>
      </td>
        <td><code>UpdateAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>the updated profile object</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example

```json
{
  "topic": [
    "profile:read"
  ],
  "type": "UpdateAction",
  "object": {
    "id": "https://user.example.com/profile/card#me",
    "type": "RealEstateAgent"
  }
}
```

<a name="topic-contact"></a>

### `subscribe` contact


#### Message

You can receive one of the following messages:
##### Message #1a contact was created



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AddAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a contact</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Person</p>
      </td>
        <td><code>Person</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.name </td>
        <td>
          string
        </td>
        <td><p>Full name of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.givenName </td>
        <td>
          string
        </td>
        <td><p>First Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.familyName </td>
        <td>
          string
        </td>
        <td><p>Last Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.jobTitle </td>
        <td>
          string
        </td>
        <td><p>The Job Title of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Named and grouped contacts points.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address </td>
        <td>
          array(object)
        </td>
        <td><p>mailing addresses.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>object.address.streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressRegion </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressLocality </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postalCode </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.birthDate </td>
        <td>
          string
        </td>
        <td><p>date of birth.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Linked-Data (@type)</p>
      </td>
        <td><code>Organization</code></td>
      </tr>
      <tr>
        <td>object.leadSource.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.name </td>
        <td>
          string
        </td>
        <td><p>Name or DBA.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.url </td>
        <td>
          string
        </td>
        <td><p>primary website/url for the entity.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage </td>
        <td>
          array(object)
        </td>
        <td><p>A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>Language</code></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.additionalName </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.branchCode </td>
        <td>
          string
        </td>
        <td><p>A short textual code (also called &quot;store code&quot;) that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Additional contact points. Can be organized by role, location, etc...</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.logo </td>
        <td>
          array(object)
        </td>
        <td><p>a logo associated with the organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.image </td>
        <td>
          array
        </td>
        <td><p>an ImageObject or URI reference to an image of the entity on the web.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.parentOrganization </td>
        <td>
          array(string)
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "AddAction",
  "agent": "http://user.example.com/profile/card",
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
    "birthDate": "2019-04-19",
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
  },
  "topic": [
    "contact"
  ]
}
```

##### Message #2a crm contact was updated



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>UpdateAction</p>
      </td>
        <td><code>UpdateAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a contact</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Person</p>
      </td>
        <td><code>Person</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.name </td>
        <td>
          string
        </td>
        <td><p>Full name of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.givenName </td>
        <td>
          string
        </td>
        <td><p>First Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.familyName </td>
        <td>
          string
        </td>
        <td><p>Last Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.jobTitle </td>
        <td>
          string
        </td>
        <td><p>The Job Title of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Named and grouped contacts points.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address </td>
        <td>
          array(object)
        </td>
        <td><p>mailing addresses.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>object.address.streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressRegion </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressLocality </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postalCode </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.birthDate </td>
        <td>
          string
        </td>
        <td><p>date of birth.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Linked-Data (@type)</p>
      </td>
        <td><code>Organization</code></td>
      </tr>
      <tr>
        <td>object.leadSource.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.name </td>
        <td>
          string
        </td>
        <td><p>Name or DBA.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.url </td>
        <td>
          string
        </td>
        <td><p>primary website/url for the entity.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage </td>
        <td>
          array(object)
        </td>
        <td><p>A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>Language</code></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.additionalName </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.branchCode </td>
        <td>
          string
        </td>
        <td><p>A short textual code (also called &quot;store code&quot;) that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Additional contact points. Can be organized by role, location, etc...</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.logo </td>
        <td>
          array(object)
        </td>
        <td><p>a logo associated with the organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.image </td>
        <td>
          array
        </td>
        <td><p>an ImageObject or URI reference to an image of the entity on the web.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.parentOrganization </td>
        <td>
          array(string)
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "UpdateAction",
  "agent": "http://user.example.com/profile/card",
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
    "birthDate": "2019-04-19",
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
  },
  "topic": "contact"
}
```

##### Message #3a crm contact was removed



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>RemoveAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a contact</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Person</p>
      </td>
        <td><code>Person</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.name </td>
        <td>
          string
        </td>
        <td><p>Full name of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.givenName </td>
        <td>
          string
        </td>
        <td><p>First Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.familyName </td>
        <td>
          string
        </td>
        <td><p>Last Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.jobTitle </td>
        <td>
          string
        </td>
        <td><p>The Job Title of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Named and grouped contacts points.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address </td>
        <td>
          array(object)
        </td>
        <td><p>mailing addresses.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>object.address.streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressRegion </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressLocality </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postalCode </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.birthDate </td>
        <td>
          string
        </td>
        <td><p>date of birth.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Linked-Data (@type)</p>
      </td>
        <td><code>Organization</code></td>
      </tr>
      <tr>
        <td>object.leadSource.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.name </td>
        <td>
          string
        </td>
        <td><p>Name or DBA.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.url </td>
        <td>
          string
        </td>
        <td><p>primary website/url for the entity.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage </td>
        <td>
          array(object)
        </td>
        <td><p>A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>Language</code></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.additionalName </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.branchCode </td>
        <td>
          string
        </td>
        <td><p>A short textual code (also called &quot;store code&quot;) that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Additional contact points. Can be organized by role, location, etc...</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.logo </td>
        <td>
          array(object)
        </td>
        <td><p>a logo associated with the organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.image </td>
        <td>
          array
        </td>
        <td><p>an ImageObject or URI reference to an image of the entity on the web.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.parentOrganization </td>
        <td>
          array(string)
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "RemoveAction",
  "agent": "http://user.example.com/profile/card",
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
    "birthDate": "2019-04-19",
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
  },
  "topic": "contact"
}
```

##### Message #4a comment was created by the agent about a subject `about`



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>CommentAction</p>
      </td>
        <td><code>CommentAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          objectoneOf
        </td>
        <td><p>the commentor</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>A comment on an item.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Comment</p>
      </td>
        <td><code>Comment</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.about </td>
        <td>
          oneOf
        </td>
        <td><p>the subject of the item</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>object.about.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>object.about.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object.text </td>
        <td>
          string
        </td>
        <td><p>the comment content</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "CommentAction",
  "agent": {
    "type": "Person",
    "name": "Charlie Commentor"
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

<a name="topic-lead"></a>

### `subscribe` lead


#### Message

You can receive one of the following messages:
##### Message #1a crm lead was created



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AddAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a lead offered or assigned by the agent to one or more recipients</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AssignAction</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>the action URI</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.agent </td>
        <td>
          string
        </td>
        <td><p>the lead assignor's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.recipient </td>
        <td>
          string
        </td>
        <td><p>the assignee's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.object </td>
        <td>
          object
        </td>
        <td><p>the Lead</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "AddAction",
  "agent": "http://user.example.com/profile/card",
  "object": {
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
      "birthDate": "2019-04-19",
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
  },
  "topic": "lead"
}
```

##### Message #2a crm lead was updated



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>UpdateAction</p>
      </td>
        <td><code>UpdateAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a lead offered or assigned by the agent to one or more recipients</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AssignAction</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>the action URI</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.agent </td>
        <td>
          string
        </td>
        <td><p>the lead assignor's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.recipient </td>
        <td>
          string
        </td>
        <td><p>the assignee's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.object </td>
        <td>
          object
        </td>
        <td><p>the Lead</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "UpdateAction",
  "agent": "http://user.example.com/profile/card",
  "object": {
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
      "birthDate": "2019-04-19",
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
  },
  "topic": "lead"
}
```

##### Message #3a lead was assigned



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AssignAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "AssignAction",
  "agent": "http://user.example.com/profile/card",
  "object": {},
  "topic": "lead"
}
```

##### Message #4a crm lead was accepted



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AcceptAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a lead offered or assigned by the agent to one or more recipients</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AssignAction</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>the action URI</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.agent </td>
        <td>
          string
        </td>
        <td><p>the lead assignor's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.recipient </td>
        <td>
          string
        </td>
        <td><p>the assignee's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.object </td>
        <td>
          object
        </td>
        <td><p>the Lead</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "AcceptAction",
  "agent": "http://user.example.com/profile/card",
  "object": {
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
      "birthDate": "2019-04-19",
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
  },
  "topic": "lead"
}
```

##### Message #5a crm lead was returned



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ReturnAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a lead offered or assigned by the agent to one or more recipients</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AssignAction</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>the action URI</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.agent </td>
        <td>
          string
        </td>
        <td><p>the lead assignor's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.recipient </td>
        <td>
          string
        </td>
        <td><p>the assignee's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.object </td>
        <td>
          object
        </td>
        <td><p>the Lead</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "ReturnAction",
  "agent": "http://user.example.com/profile/card",
  "object": {
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
      "birthDate": "2019-04-19",
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
  },
  "topic": "lead"
}
```

<a name="topic-website"></a>

### `subscribe` website


#### Message

You can receive one of the following messages:
##### Message #1a website vistor has registered



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>Notification</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>the notification uri</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          array(string)
        </td>
        <td><p>subscription scopes that will recieve the notification</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>timestamp </td>
        <td>
          string
        </td>
        <td><p>the time the notification was created</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          string
        </td>
        <td><p>the user/source that generated the notification</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>instrument </td>
        <td>
          string
        </td>
        <td><p>application or service that delivereted the notification</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>the event payload</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>object.agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>object.agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object.object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "Notification",
  "id": "https://you.example.com/inbox/12345",
  "topic": "website",
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

##### Message #2a website visitor has asked a question



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "string",
  "agent": "http://user.example.com/profile/card",
  "object": {},
  "topic": "website"
}
```

##### Message #3a website vistor has requested an appointment



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>object.agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>object.agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object.object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "string",
  "agent": "http://user.example.com/profile/card",
  "object": {
    "type": "string",
    "agent": "http://user.example.com/profile/card",
    "object": {}
  },
  "topic": "website"
}
```

##### Message #4an offer to buy/bid on a property is made



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>OfferAction</p>
      </td>
        <td><code>OfferAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          objectoneOf
        </td>
        <td><p>the agent making the offer</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>reference to the item on which the offer is being made</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>additionalProperty </td>
        <td>
          object
        </td>
        <td><p>Property names and values are only valid in the provided <code>@context</code>.  For example if <code>@context http://example.com/context#</code>. the property with key <code>ID</code> should be represented locally as <code>http;//example.com/context#ID</code></p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>identifier </td>
        <td>
          object
        </td>
        <td><p>a key value map of <strong>namespaced</strong> unique identifiers.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>recipient </td>
        <td>
          object
        </td>
        <td><p>the offer recipient</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>offerPrice </td>
        <td>
          object
        </td>
        <td><p>describes the price offered</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>offerPrice.type </td>
        <td>
          string
        </td>
        <td><p>PriceSpecification</p>
      </td>
        <td><code>PriceSpecification</code></td>
      </tr>
      <tr>
        <td>offerPrice.minPrice </td>
        <td>
          number
        </td>
        <td><p>the lowest value if the price is a range</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>offerPrice.maxPrice </td>
        <td>
          number
        </td>
        <td><p>the high price offered if the price is a range</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>offerPrice.price </td>
        <td>
          number
        </td>
        <td><p>the price</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>offerPrice.priceCurrency </td>
        <td>
          string
        </td>
        <td><p>use ISO4217</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "OfferAction",
  "agent": {
    "type": "Person",
    "name": "Bob",
    "email": "bob@example.com"
  },
  "object": {
    "type": "RealEstateListing",
    "id": "http://example.com/12345"
  },
  "additionalProperty": {
    "@context": "https://application.example.com/context#",
    "customProp": "custom-prop-value"
  },
  "identifier": {
    "@context": "http://example.com/context#",
    "ID": "value"
  },
  "recipient": {
    "id": "http://user.example.com/profile/card#me"
  },
  "offerPrice": {
    "type": "PriceSpecification",
    "minPrice": 0,
    "maxPrice": 0,
    "price": 0,
    "priceCurrency": "USD"
  }
}
```

<a name="topic-marketing"></a>

### `subscribe` marketing


#### Message

You can receive one of the following messages:
##### Message #1a program member was added by the agent (Work In Progress)



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>MarketingProgramMemberAdd</p>
      </td>
        <td><code>MarketingProgramMemberAdd</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Person</p>
      </td>
        <td><code>Person</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.name </td>
        <td>
          string
        </td>
        <td><p>Full name of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.givenName </td>
        <td>
          string
        </td>
        <td><p>First Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.familyName </td>
        <td>
          string
        </td>
        <td><p>Last Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.jobTitle </td>
        <td>
          string
        </td>
        <td><p>The Job Title of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Named and grouped contacts points.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address </td>
        <td>
          array(object)
        </td>
        <td><p>mailing addresses.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>object.address.streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressRegion </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressLocality </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postalCode </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.birthDate </td>
        <td>
          string
        </td>
        <td><p>date of birth.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>targetCollection </td>
        <td>
          string
        </td>
        <td><p>ref to the marketing program receiving the new member</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "MarketingProgramMemberAdd",
  "agent": "http://user.example.com/profile/card",
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
    "birthDate": "2019-04-19"
  },
  "topic": [
    "marketing"
  ],
  "targetCollection": "http://example.com"
}
```

##### Message #2a member was removed by the agent (Work In Progress)



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>MarketingProgramMemberRemove</p>
      </td>
        <td><code>MarketingProgramMemberRemove</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Person</p>
      </td>
        <td><code>Person</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.name </td>
        <td>
          string
        </td>
        <td><p>Full name of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.givenName </td>
        <td>
          string
        </td>
        <td><p>First Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.familyName </td>
        <td>
          string
        </td>
        <td><p>Last Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.jobTitle </td>
        <td>
          string
        </td>
        <td><p>The Job Title of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Named and grouped contacts points.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address </td>
        <td>
          array(object)
        </td>
        <td><p>mailing addresses.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>object.address.streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressRegion </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressLocality </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postalCode </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.birthDate </td>
        <td>
          string
        </td>
        <td><p>date of birth.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>targetCollection </td>
        <td>
          string
        </td>
        <td><p>ref to the marketing program receiving the new member</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "MarketingProgramMemberRemove",
  "agent": "http://user.example.com/profile/card",
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
    "birthDate": "2019-04-19"
  },
  "topic": [
    "marketing"
  ],
  "targetCollection": "http://example.com"
}
```

##### Message #3a MarketingProgram was created



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>CreateAction</p>
      </td>
        <td><code>CreateAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>MarketingProgram</p>
      </td>
        <td><code>MarketingProgram</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.name </td>
        <td>
          string
        </td>
        <td><p>name of the work.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.description </td>
        <td>
          string
        </td>
        <td><p>description of the item</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.creator </td>
        <td>
          string
        </td>
        <td><p>creator / author of the work</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.dateCreated </td>
        <td>
          string
        </td>
        <td><p>The date on which the CreativeWork was created or the item was added to a DataFeed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.dateModified </td>
        <td>
          string
        </td>
        <td><p>The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.member </td>
        <td>
          array(string)
        </td>
        <td><p>member relationship objects</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "CreateAction",
  "agent": "http://user.example.com/profile/card",
  "object": {
    "type": "MarketingProgram",
    "id": "https://example.com/collection/1",
    "name": "Market Report 1008 Mountain Gate Road",
    "description": "Dolor accusamus rerum nemo non omnis. Nam labore pariatur eius omnis sit.",
    "creator": "http://user.example.com/profile/card",
    "dateCreated": "2019-04-19T01:51:21Z",
    "dateModified": "2019-04-19T01:51:21Z",
    "member": [
      "https://user.example.com/profile/card"
    ]
  }
}
```

##### Message #4an EmailMessage was sent



##### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>EmailAction</p>
      </td>
        <td><code>EmailAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>EmailMessage</p>
      </td>
        <td><code>EmailMessage</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.name </td>
        <td>
          string
        </td>
        <td><p>name of the work.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.description </td>
        <td>
          string
        </td>
        <td><p>description of the item</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.creator </td>
        <td>
          string
        </td>
        <td><p>creator / author of the work</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.dateCreated </td>
        <td>
          string
        </td>
        <td><p>The date on which the CreativeWork was created or the item was added to a DataFeed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.dateModified </td>
        <td>
          string
        </td>
        <td><p>The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.toRecipient </td>
        <td>
          array(string)
        </td>
        <td><p>direct recipient of the message</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.ccRecipient </td>
        <td>
          array(string)
        </td>
        <td><p>direct recipient of the message</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.bccRecipient </td>
        <td>
          array(string)
        </td>
        <td><p>direct recipient of the message</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.dateSent </td>
        <td>
          string
        </td>
        <td><p>The date/time at which the message was sent.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.dateRead </td>
        <td>
          string
        </td>
        <td><p>The date/time at which the message was first viewed</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.sender </td>
        <td>
          string
        </td>
        <td><p>ref to the sender</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.messageAttachment </td>
        <td>
          array(object)
        </td>
        <td><p>message attachments</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


###### Example of payload _(generated)_

```json
{
  "type": "EmailAction",
  "agent": "http://user.example.com/profile/card",
  "object": {
    "type": "EmailMessage",
    "id": "https://example.com/collection/1",
    "name": "Market Report 1008 Mountain Gate Road",
    "description": "Dolor accusamus rerum nemo non omnis. Nam labore pariatur eius omnis sit.",
    "creator": "http://user.example.com/profile/card",
    "dateCreated": "2019-04-19T01:51:21Z",
    "dateModified": "2019-04-19T01:51:21Z",
    "toRecipient": [
      "user@example.com"
    ],
    "ccRecipient": [
      "user@example.com"
    ],
    "bccRecipient": [
      "user@example.com"
    ],
    "dateSent": "2019-04-19T01:51:21Z",
    "dateRead": "2019-04-19T01:51:21Z",
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
}
```



## Messages

### OfferAction 
an offer to buy/bid on a property is made




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>OfferAction</p>
      </td>
        <td><code>OfferAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          objectoneOf
        </td>
        <td><p>the agent making the offer</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>reference to the item on which the offer is being made</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>additionalProperty </td>
        <td>
          object
        </td>
        <td><p>Property names and values are only valid in the provided <code>@context</code>.  For example if <code>@context http://example.com/context#</code>. the property with key <code>ID</code> should be represented locally as <code>http;//example.com/context#ID</code></p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>identifier </td>
        <td>
          object
        </td>
        <td><p>a key value map of <strong>namespaced</strong> unique identifiers.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>recipient </td>
        <td>
          object
        </td>
        <td><p>the offer recipient</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>offerPrice </td>
        <td>
          object
        </td>
        <td><p>describes the price offered</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>offerPrice.type </td>
        <td>
          string
        </td>
        <td><p>PriceSpecification</p>
      </td>
        <td><code>PriceSpecification</code></td>
      </tr>
      <tr>
        <td>offerPrice.minPrice </td>
        <td>
          number
        </td>
        <td><p>the lowest value if the price is a range</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>offerPrice.maxPrice </td>
        <td>
          number
        </td>
        <td><p>the high price offered if the price is a range</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>offerPrice.price </td>
        <td>
          number
        </td>
        <td><p>the price</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>offerPrice.priceCurrency </td>
        <td>
          string
        </td>
        <td><p>use ISO4217</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "OfferAction",
  "agent": {
    "type": "Person",
    "name": "Bob",
    "email": "bob@example.com"
  },
  "object": {
    "type": "RealEstateListing",
    "id": "http://example.com/12345"
  },
  "additionalProperty": {
    "@context": "https://application.example.com/context#",
    "customProp": "custom-prop-value"
  },
  "identifier": {
    "@context": "http://example.com/context#",
    "ID": "value"
  },
  "recipient": {
    "id": "http://user.example.com/profile/card#me"
  },
  "offerPrice": {
    "type": "PriceSpecification",
    "minPrice": 0,
    "maxPrice": 0,
    "price": 0,
    "priceCurrency": "USD"
  }
}
```

### MarketingProgramCreate 
a MarketingProgram was created




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>CreateAction</p>
      </td>
        <td><code>CreateAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>MarketingProgram</p>
      </td>
        <td><code>MarketingProgram</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.name </td>
        <td>
          string
        </td>
        <td><p>name of the work.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.description </td>
        <td>
          string
        </td>
        <td><p>description of the item</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.creator </td>
        <td>
          string
        </td>
        <td><p>creator / author of the work</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.dateCreated </td>
        <td>
          string
        </td>
        <td><p>The date on which the CreativeWork was created or the item was added to a DataFeed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.dateModified </td>
        <td>
          string
        </td>
        <td><p>The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.member </td>
        <td>
          array(string)
        </td>
        <td><p>member relationship objects</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "CreateAction",
  "agent": "http://user.example.com/profile/card",
  "object": {
    "type": "MarketingProgram",
    "id": "https://example.com/collection/1",
    "name": "Market Report 1008 Mountain Gate Road",
    "description": "Dolor accusamus rerum nemo non omnis. Nam labore pariatur eius omnis sit.",
    "creator": "http://user.example.com/profile/card",
    "dateCreated": "2019-04-19T01:51:21Z",
    "dateModified": "2019-04-19T01:51:21Z",
    "member": [
      "https://user.example.com/profile/card"
    ]
  }
}
```

### EmailAction 
an EmailMessage was sent




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>EmailAction</p>
      </td>
        <td><code>EmailAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>EmailMessage</p>
      </td>
        <td><code>EmailMessage</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.name </td>
        <td>
          string
        </td>
        <td><p>name of the work.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.description </td>
        <td>
          string
        </td>
        <td><p>description of the item</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.creator </td>
        <td>
          string
        </td>
        <td><p>creator / author of the work</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.dateCreated </td>
        <td>
          string
        </td>
        <td><p>The date on which the CreativeWork was created or the item was added to a DataFeed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.dateModified </td>
        <td>
          string
        </td>
        <td><p>The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.toRecipient </td>
        <td>
          array(string)
        </td>
        <td><p>direct recipient of the message</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.ccRecipient </td>
        <td>
          array(string)
        </td>
        <td><p>direct recipient of the message</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.bccRecipient </td>
        <td>
          array(string)
        </td>
        <td><p>direct recipient of the message</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.dateSent </td>
        <td>
          string
        </td>
        <td><p>The date/time at which the message was sent.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.dateRead </td>
        <td>
          string
        </td>
        <td><p>The date/time at which the message was first viewed</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.sender </td>
        <td>
          string
        </td>
        <td><p>ref to the sender</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.messageAttachment </td>
        <td>
          array(object)
        </td>
        <td><p>message attachments</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "EmailAction",
  "agent": "http://user.example.com/profile/card",
  "object": {
    "type": "EmailMessage",
    "id": "https://example.com/collection/1",
    "name": "Market Report 1008 Mountain Gate Road",
    "description": "Dolor accusamus rerum nemo non omnis. Nam labore pariatur eius omnis sit.",
    "creator": "http://user.example.com/profile/card",
    "dateCreated": "2019-04-19T01:51:21Z",
    "dateModified": "2019-04-19T01:51:21Z",
    "toRecipient": [
      "user@example.com"
    ],
    "ccRecipient": [
      "user@example.com"
    ],
    "bccRecipient": [
      "user@example.com"
    ],
    "dateSent": "2019-04-19T01:51:21Z",
    "dateRead": "2019-04-19T01:51:21Z",
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
}
```

### MarketingProgramMemberAdd 
a program member was added by the agent (Work In Progress)




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>MarketingProgramMemberAdd</p>
      </td>
        <td><code>MarketingProgramMemberAdd</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Person</p>
      </td>
        <td><code>Person</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.name </td>
        <td>
          string
        </td>
        <td><p>Full name of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.givenName </td>
        <td>
          string
        </td>
        <td><p>First Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.familyName </td>
        <td>
          string
        </td>
        <td><p>Last Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.jobTitle </td>
        <td>
          string
        </td>
        <td><p>The Job Title of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Named and grouped contacts points.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address </td>
        <td>
          array(object)
        </td>
        <td><p>mailing addresses.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>object.address.streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressRegion </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressLocality </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postalCode </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.birthDate </td>
        <td>
          string
        </td>
        <td><p>date of birth.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>targetCollection </td>
        <td>
          string
        </td>
        <td><p>ref to the marketing program receiving the new member</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "MarketingProgramMemberAdd",
  "agent": "http://user.example.com/profile/card",
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
    "birthDate": "2019-04-19"
  },
  "topic": [
    "marketing"
  ],
  "targetCollection": "http://example.com"
}
```

### MarketingProgramMemberRemove 
a member was removed by the agent (Work In Progress)




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>MarketingProgramMemberRemove</p>
      </td>
        <td><code>MarketingProgramMemberRemove</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Person</p>
      </td>
        <td><code>Person</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.name </td>
        <td>
          string
        </td>
        <td><p>Full name of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.givenName </td>
        <td>
          string
        </td>
        <td><p>First Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.familyName </td>
        <td>
          string
        </td>
        <td><p>Last Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.jobTitle </td>
        <td>
          string
        </td>
        <td><p>The Job Title of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Named and grouped contacts points.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address </td>
        <td>
          array(object)
        </td>
        <td><p>mailing addresses.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>object.address.streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressRegion </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressLocality </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postalCode </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.birthDate </td>
        <td>
          string
        </td>
        <td><p>date of birth.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>targetCollection </td>
        <td>
          string
        </td>
        <td><p>ref to the marketing program receiving the new member</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "MarketingProgramMemberRemove",
  "agent": "http://user.example.com/profile/card",
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
    "birthDate": "2019-04-19"
  },
  "topic": [
    "marketing"
  ],
  "targetCollection": "http://example.com"
}
```

### profile_added 
a profile (agent, affiliate or office) was created




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AddAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>the profile object</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example

```json
{
  "topic": [
    "profile:read"
  ],
  "type": "AddAction",
  "object": {
    "id": "https://user.example.com/profile/card#me",
    "type": "RealEstateAgent"
  }
}
```

### profile_updated 
a profile (agent, affiliate or office) was updated




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>UpdateAction</p>
      </td>
        <td><code>UpdateAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>the updated profile object</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example

```json
{
  "topic": [
    "profile:read"
  ],
  "type": "UpdateAction",
  "object": {
    "id": "https://user.example.com/profile/card#me",
    "type": "RealEstateAgent"
  }
}
```

### contact_added 
a contact was created




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AddAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a contact</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Person</p>
      </td>
        <td><code>Person</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.name </td>
        <td>
          string
        </td>
        <td><p>Full name of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.givenName </td>
        <td>
          string
        </td>
        <td><p>First Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.familyName </td>
        <td>
          string
        </td>
        <td><p>Last Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.jobTitle </td>
        <td>
          string
        </td>
        <td><p>The Job Title of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Named and grouped contacts points.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address </td>
        <td>
          array(object)
        </td>
        <td><p>mailing addresses.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>object.address.streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressRegion </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressLocality </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postalCode </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.birthDate </td>
        <td>
          string
        </td>
        <td><p>date of birth.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Linked-Data (@type)</p>
      </td>
        <td><code>Organization</code></td>
      </tr>
      <tr>
        <td>object.leadSource.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.name </td>
        <td>
          string
        </td>
        <td><p>Name or DBA.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.url </td>
        <td>
          string
        </td>
        <td><p>primary website/url for the entity.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage </td>
        <td>
          array(object)
        </td>
        <td><p>A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>Language</code></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.additionalName </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.branchCode </td>
        <td>
          string
        </td>
        <td><p>A short textual code (also called &quot;store code&quot;) that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Additional contact points. Can be organized by role, location, etc...</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.logo </td>
        <td>
          array(object)
        </td>
        <td><p>a logo associated with the organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.image </td>
        <td>
          array
        </td>
        <td><p>an ImageObject or URI reference to an image of the entity on the web.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.parentOrganization </td>
        <td>
          array(string)
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "AddAction",
  "agent": "http://user.example.com/profile/card",
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
    "birthDate": "2019-04-19",
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
  },
  "topic": [
    "contact"
  ]
}
```

### contact_updated 
a crm contact was updated




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>UpdateAction</p>
      </td>
        <td><code>UpdateAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a contact</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Person</p>
      </td>
        <td><code>Person</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.name </td>
        <td>
          string
        </td>
        <td><p>Full name of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.givenName </td>
        <td>
          string
        </td>
        <td><p>First Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.familyName </td>
        <td>
          string
        </td>
        <td><p>Last Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.jobTitle </td>
        <td>
          string
        </td>
        <td><p>The Job Title of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Named and grouped contacts points.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address </td>
        <td>
          array(object)
        </td>
        <td><p>mailing addresses.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>object.address.streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressRegion </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressLocality </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postalCode </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.birthDate </td>
        <td>
          string
        </td>
        <td><p>date of birth.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Linked-Data (@type)</p>
      </td>
        <td><code>Organization</code></td>
      </tr>
      <tr>
        <td>object.leadSource.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.name </td>
        <td>
          string
        </td>
        <td><p>Name or DBA.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.url </td>
        <td>
          string
        </td>
        <td><p>primary website/url for the entity.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage </td>
        <td>
          array(object)
        </td>
        <td><p>A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>Language</code></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.additionalName </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.branchCode </td>
        <td>
          string
        </td>
        <td><p>A short textual code (also called &quot;store code&quot;) that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Additional contact points. Can be organized by role, location, etc...</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.logo </td>
        <td>
          array(object)
        </td>
        <td><p>a logo associated with the organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.image </td>
        <td>
          array
        </td>
        <td><p>an ImageObject or URI reference to an image of the entity on the web.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.parentOrganization </td>
        <td>
          array(string)
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "UpdateAction",
  "agent": "http://user.example.com/profile/card",
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
    "birthDate": "2019-04-19",
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
  },
  "topic": "contact"
}
```

### contact_removed 
a crm contact was removed




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>RemoveAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a contact</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Person</p>
      </td>
        <td><code>Person</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.name </td>
        <td>
          string
        </td>
        <td><p>Full name of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.givenName </td>
        <td>
          string
        </td>
        <td><p>First Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.familyName </td>
        <td>
          string
        </td>
        <td><p>Last Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.jobTitle </td>
        <td>
          string
        </td>
        <td><p>The Job Title of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Named and grouped contacts points.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address </td>
        <td>
          array(object)
        </td>
        <td><p>mailing addresses.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>object.address.streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressRegion </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressLocality </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postalCode </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.birthDate </td>
        <td>
          string
        </td>
        <td><p>date of birth.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Linked-Data (@type)</p>
      </td>
        <td><code>Organization</code></td>
      </tr>
      <tr>
        <td>object.leadSource.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.name </td>
        <td>
          string
        </td>
        <td><p>Name or DBA.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.url </td>
        <td>
          string
        </td>
        <td><p>primary website/url for the entity.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage </td>
        <td>
          array(object)
        </td>
        <td><p>A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>Language</code></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.additionalName </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.branchCode </td>
        <td>
          string
        </td>
        <td><p>A short textual code (also called &quot;store code&quot;) that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Additional contact points. Can be organized by role, location, etc...</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.logo </td>
        <td>
          array(object)
        </td>
        <td><p>a logo associated with the organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.image </td>
        <td>
          array
        </td>
        <td><p>an ImageObject or URI reference to an image of the entity on the web.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.parentOrganization </td>
        <td>
          array(string)
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "RemoveAction",
  "agent": "http://user.example.com/profile/card",
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
    "birthDate": "2019-04-19",
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
  },
  "topic": "contact"
}
```

### CommentAction 
a comment was created by the agent about a subject `about`




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>CommentAction</p>
      </td>
        <td><code>CommentAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          objectoneOf
        </td>
        <td><p>the commentor</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>A comment on an item.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Comment</p>
      </td>
        <td><code>Comment</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.about </td>
        <td>
          oneOf
        </td>
        <td><p>the subject of the item</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>object.about.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>object.about.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object.text </td>
        <td>
          string
        </td>
        <td><p>the comment content</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "CommentAction",
  "agent": {
    "type": "Person",
    "name": "Charlie Commentor"
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

### lead_added 
a crm lead was created




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AddAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a lead offered or assigned by the agent to one or more recipients</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AssignAction</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>the action URI</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.agent </td>
        <td>
          string
        </td>
        <td><p>the lead assignor's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.recipient </td>
        <td>
          string
        </td>
        <td><p>the assignee's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.object </td>
        <td>
          object
        </td>
        <td><p>the Lead</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "AddAction",
  "agent": "http://user.example.com/profile/card",
  "object": {
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
      "birthDate": "2019-04-19",
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
  },
  "topic": "lead"
}
```

### lead_updated 
a crm lead was updated




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>UpdateAction</p>
      </td>
        <td><code>UpdateAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a lead offered or assigned by the agent to one or more recipients</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AssignAction</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>the action URI</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.agent </td>
        <td>
          string
        </td>
        <td><p>the lead assignor's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.recipient </td>
        <td>
          string
        </td>
        <td><p>the assignee's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.object </td>
        <td>
          object
        </td>
        <td><p>the Lead</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "UpdateAction",
  "agent": "http://user.example.com/profile/card",
  "object": {
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
      "birthDate": "2019-04-19",
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
  },
  "topic": "lead"
}
```

### lead_removed 
a lead was removed




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>RemoveAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a lead offered or assigned by the agent to one or more recipients</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AssignAction</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>the action URI</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.agent </td>
        <td>
          string
        </td>
        <td><p>the lead assignor's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.recipient </td>
        <td>
          string
        </td>
        <td><p>the assignee's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.object </td>
        <td>
          object
        </td>
        <td><p>the Lead</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "RemoveAction",
  "agent": "http://user.example.com/profile/card",
  "object": {
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
      "birthDate": "2019-04-19",
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
  },
  "topic": "lead"
}
```

### lead_assigned 
a lead was assigned




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AssignAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "AssignAction",
  "agent": "http://user.example.com/profile/card",
  "object": {},
  "topic": "lead"
}
```

### lead_accepted 
a crm lead was accepted




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AcceptAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a lead offered or assigned by the agent to one or more recipients</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AssignAction</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>the action URI</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.agent </td>
        <td>
          string
        </td>
        <td><p>the lead assignor's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.recipient </td>
        <td>
          string
        </td>
        <td><p>the assignee's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.object </td>
        <td>
          object
        </td>
        <td><p>the Lead</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "AcceptAction",
  "agent": "http://user.example.com/profile/card",
  "object": {
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
      "birthDate": "2019-04-19",
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
  },
  "topic": "lead"
}
```

### lead_rejected 
a crm lead was rejected




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>RejectAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a lead offered or assigned by the agent to one or more recipients</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AssignAction</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>the action URI</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.agent </td>
        <td>
          string
        </td>
        <td><p>the lead assignor's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.recipient </td>
        <td>
          string
        </td>
        <td><p>the assignee's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.object </td>
        <td>
          object
        </td>
        <td><p>the Lead</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "RejectAction",
  "agent": "http://user.example.com/profile/card",
  "object": {
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
      "birthDate": "2019-04-19",
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
  },
  "topic": "lead"
}
```

### lead_returned 
a crm lead was returned




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ReturnAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a lead offered or assigned by the agent to one or more recipients</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AssignAction</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>the action URI</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.agent </td>
        <td>
          string
        </td>
        <td><p>the lead assignor's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.recipient </td>
        <td>
          string
        </td>
        <td><p>the assignee's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.object </td>
        <td>
          object
        </td>
        <td><p>the Lead</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "ReturnAction",
  "agent": "http://user.example.com/profile/card",
  "object": {
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
      "birthDate": "2019-04-19",
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
  },
  "topic": "lead"
}
```

### website_registration 
a website vistor has registered




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>Notification</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>the notification uri</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          array(string)
        </td>
        <td><p>subscription scopes that will recieve the notification</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>timestamp </td>
        <td>
          string
        </td>
        <td><p>the time the notification was created</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          string
        </td>
        <td><p>the user/source that generated the notification</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>instrument </td>
        <td>
          string
        </td>
        <td><p>application or service that delivereted the notification</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>the event payload</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>object.agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>object.agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object.object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "Notification",
  "id": "https://you.example.com/inbox/12345",
  "topic": "website",
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

### website_appointment_requested 
a website vistor has requested an appointment




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>object.agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>object.agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object.object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "string",
  "agent": "http://user.example.com/profile/card",
  "object": {
    "type": "string",
    "agent": "http://user.example.com/profile/card",
    "object": {}
  },
  "topic": "website"
}
```

### website_showing_requested 
a website visitor has requested a showing appointment




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "string",
  "agent": "http://user.example.com/profile/card",
  "object": {},
  "topic": "website"
}
```

### website_question 
a website visitor has asked a question




#### Payload


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>


##### Example of payload _(generated)_

```json
{
  "type": "string",
  "agent": "http://user.example.com/profile/card",
  "object": {},
  "topic": "website"
}
```


## Schemas

#### Action

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

```json
{
  "type": "string",
  "agent": "http://user.example.com/profile/card",
  "object": {}
}
```
#### ApplicationProfile

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Linked-Data (@type)</p>
      </td>
        <td><code>PersonalProfileDocument</code></td>
      </tr>
      <tr>
        <td>id <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>primaryTopic </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>#me </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>#me.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>#me.inbox </td>
        <td>
          string
        </td>
        <td><p>URI to your Linked-Data-Notifications Inbox</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>#me.outbox </td>
        <td>
          string
        </td>
        <td><p>URI to your Linked-Data-Notifications Outbox</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>#me.storage </td>
        <td>
          string
        </td>
        <td><p>URI to your storage root.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>#me.preferencesFile </td>
        <td>
          string
        </td>
        <td><p>URI to shared application prefs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>#me.account </td>
        <td>
          string
        </td>
        <td><p>discoverable solid:account root</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>#me.privateTypeIndex </td>
        <td>
          string
        </td>
        <td><p>type index for your private use</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>#me.publicTypeIndex </td>
        <td>
          string
        </td>
        <td><p>shared, discoverable type index</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>#me.permissions </td>
        <td>
          array(object)
        </td>
        <td><p>Permissions required by an linked-data application or service.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>inbox <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>discoverable uri to your LDN inbox</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>outbox <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>discoverable uri to your LDN outbox</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>storage </td>
        <td>
          string
        </td>
        <td><p>uri to your linked-data storage root</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>preferencesFile </td>
        <td>
          string
        </td>
        <td><p>discoverable uri for shared application preferences</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>account </td>
        <td>
          string
        </td>
        <td><p>discoverable solid:account root</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>privateTypeIndex </td>
        <td>
          string
        </td>
        <td><p>type index for your private use</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>publicTypeIndex </td>
        <td>
          string
        </td>
        <td><p>shared, discoverable type index</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permissions </td>
        <td>
          array(string)
        </td>
        <td><p>the subscription types required by your service.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
#### Contact

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Person</p>
      </td>
        <td><code>Person</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>name </td>
        <td>
          string
        </td>
        <td><p>Full name of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>givenName </td>
        <td>
          string
        </td>
        <td><p>First Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>familyName </td>
        <td>
          string
        </td>
        <td><p>Last Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>jobTitle </td>
        <td>
          string
        </td>
        <td><p>The Job Title of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Named and grouped contacts points.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address </td>
        <td>
          array(object)
        </td>
        <td><p>mailing addresses.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>address.streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.addressRegion </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.addressLocality </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.postalCode </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>birthDate </td>
        <td>
          string
        </td>
        <td><p>date of birth.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Linked-Data (@type)</p>
      </td>
        <td><code>Organization</code></td>
      </tr>
      <tr>
        <td>leadSource.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.name </td>
        <td>
          string
        </td>
        <td><p>Name or DBA.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.url </td>
        <td>
          string
        </td>
        <td><p>primary website/url for the entity.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.availableLanguage </td>
        <td>
          array(object)
        </td>
        <td><p>A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.availableLanguage.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>Language</code></td>
      </tr>
      <tr>
        <td>leadSource.availableLanguage.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.availableLanguage.additionalName </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.branchCode </td>
        <td>
          string
        </td>
        <td><p>A short textual code (also called &quot;store code&quot;) that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Additional contact points. Can be organized by role, location, etc...</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>leadSource.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.logo </td>
        <td>
          array(object)
        </td>
        <td><p>a logo associated with the organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.image </td>
        <td>
          array
        </td>
        <td><p>an ImageObject or URI reference to an image of the entity on the web.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>leadSource.parentOrganization </td>
        <td>
          array(string)
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
  "birthDate": "2019-04-19",
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
#### Comment

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Comment</p>
      </td>
        <td><code>Comment</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>about </td>
        <td>
          oneOf
        </td>
        <td><p>the subject of the item</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>about.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>about.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>text </td>
        <td>
          string
        </td>
        <td><p>the comment content</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

```json
{
  "type": "Comment",
  "id": "https://example.com/collection/1",
  "about": "http://user.example.com/profile/card#me",
  "text": "Commodi ratione vel qui ullam ea ut."
}
```
#### CommentAction

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>CommentAction</p>
      </td>
        <td><code>CommentAction</code></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          oneOf
        </td>
        <td><p>the commentor</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>A comment on an item.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Comment</p>
      </td>
        <td><code>Comment</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.about </td>
        <td>
          oneOf
        </td>
        <td><p>the subject of the item</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>object.about.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>object.about.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object.text </td>
        <td>
          string
        </td>
        <td><p>the comment content</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
#### ContactPoint

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type </td>
        <td>
          string
        </td>
        <td><p>ContactPoint</p>
      </td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>name </td>
        <td>
          string
        </td>
        <td><p>a label for the contactPoint, i.e. 'Work', or 'Home'</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>telephone </td>
        <td>
          string
        </td>
        <td><p>a telephone number</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>faxNumber </td>
        <td>
          string
        </td>
        <td><p>a fax number</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>email </td>
        <td>
          string
        </td>
        <td><p>an email address for the item.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>url </td>
        <td>
          string
        </td>
        <td><p>primary URL for the item.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
#### DigitalDocument

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Linked-Data (@type)</p>
      </td>
        <td><code>DigitalDocument</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>name </td>
        <td>
          string
        </td>
        <td><p>the FileName</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>encodingFormat </td>
        <td>
          string
        </td>
        <td><p>the MIME type</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>identifier </td>
        <td>
          object
        </td>
        <td><p>namespaced identifier</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>about </td>
        <td>
          string
        </td>
        <td><p>URI to the subject of the image or logo</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
#### EmailMessage

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>EmailMessage</p>
      </td>
        <td><code>EmailMessage</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>name </td>
        <td>
          string
        </td>
        <td><p>name of the work.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>description </td>
        <td>
          string
        </td>
        <td><p>description of the item</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>creator </td>
        <td>
          string
        </td>
        <td><p>creator / author of the work</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>dateCreated </td>
        <td>
          string
        </td>
        <td><p>The date on which the CreativeWork was created or the item was added to a DataFeed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>dateModified </td>
        <td>
          string
        </td>
        <td><p>The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>toRecipient </td>
        <td>
          array(string)
        </td>
        <td><p>direct recipient of the message</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>ccRecipient </td>
        <td>
          array(string)
        </td>
        <td><p>direct recipient of the message</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>bccRecipient </td>
        <td>
          array(string)
        </td>
        <td><p>direct recipient of the message</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>dateSent </td>
        <td>
          string
        </td>
        <td><p>The date/time at which the message was sent.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>dateRead </td>
        <td>
          string
        </td>
        <td><p>The date/time at which the message was first viewed</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>sender </td>
        <td>
          string
        </td>
        <td><p>ref to the sender</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>messageAttachment </td>
        <td>
          array(object)
        </td>
        <td><p>message attachments</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

```json
{
  "type": "EmailMessage",
  "id": "https://example.com/collection/1",
  "name": "Market Report 1008 Mountain Gate Road",
  "description": "Dolor accusamus rerum nemo non omnis. Nam labore pariatur eius omnis sit.",
  "creator": "http://user.example.com/profile/card",
  "dateCreated": "2019-04-19T01:51:21Z",
  "dateModified": "2019-04-19T01:51:21Z",
  "toRecipient": [
    "user@example.com"
  ],
  "ccRecipient": [
    "user@example.com"
  ],
  "bccRecipient": [
    "user@example.com"
  ],
  "dateSent": "2019-04-19T01:51:21Z",
  "dateRead": "2019-04-19T01:51:21Z",
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
#### ImageObject

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Linked-Data (@type)</p>
      </td>
        <td><code>MediaObject</code>, <code>ImageObject</code>, <code>DigitalDocument</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>the URL to access the item.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>name </td>
        <td>
          string
        </td>
        <td><p>the file name of the object.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>encodingFormat </td>
        <td>
          string
        </td>
        <td><p>MIME type</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>content </td>
        <td>
          string
        </td>
        <td><p>base64 encoded content</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>about </td>
        <td>
          string
        </td>
        <td><p>URI to the subject of the image or logo</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>url </td>
        <td>
          string
        </td>
        <td><p>URL of the image content</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
#### Lead

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>AssignAction</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>the action URI</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          string
        </td>
        <td><p>the lead assignor's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>recipient </td>
        <td>
          string
        </td>
        <td><p>the assignee's webid</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>a contact</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Person</p>
      </td>
        <td><code>Person</code></td>
      </tr>
      <tr>
        <td>object.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.name </td>
        <td>
          string
        </td>
        <td><p>Full name of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.givenName </td>
        <td>
          string
        </td>
        <td><p>First Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.familyName </td>
        <td>
          string
        </td>
        <td><p>Last Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.jobTitle </td>
        <td>
          string
        </td>
        <td><p>The Job Title of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Named and grouped contacts points.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address </td>
        <td>
          array(object)
        </td>
        <td><p>mailing addresses.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>object.address.streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressRegion </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.addressLocality </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.address.postalCode </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.birthDate </td>
        <td>
          string
        </td>
        <td><p>date of birth.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Linked-Data (@type)</p>
      </td>
        <td><code>Organization</code></td>
      </tr>
      <tr>
        <td>object.leadSource.id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.name </td>
        <td>
          string
        </td>
        <td><p>Name or DBA.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.url </td>
        <td>
          string
        </td>
        <td><p>primary website/url for the entity.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage </td>
        <td>
          array(object)
        </td>
        <td><p>A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>Language</code></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.availableLanguage.additionalName </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.branchCode </td>
        <td>
          string
        </td>
        <td><p>A short textual code (also called &quot;store code&quot;) that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Additional contact points. Can be organized by role, location, etc...</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.logo </td>
        <td>
          array(object)
        </td>
        <td><p>a logo associated with the organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.image </td>
        <td>
          array
        </td>
        <td><p>an ImageObject or URI reference to an image of the entity on the web.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.leadSource.parentOrganization </td>
        <td>
          array(string)
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
    "birthDate": "2019-04-19",
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
#### Notification

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>Notification</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>the notification uri</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>topic </td>
        <td>
          array(string)
        </td>
        <td><p>subscription scopes that will recieve the notification</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>timestamp </td>
        <td>
          string
        </td>
        <td><p>the time the notification was created</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>agent </td>
        <td>
          string
        </td>
        <td><p>the user/source that generated the notification</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>instrument </td>
        <td>
          string
        </td>
        <td><p>application or service that delivereted the notification</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object </td>
        <td>
          object
        </td>
        <td><p>the event payload</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>object.agent </td>
        <td>
          oneOf
        </td>
        <td><p>the direct performer or driver of the action.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>object.agent.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>object.agent.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>object.object </td>
        <td>
          object
        </td>
        <td><p>The object upon the action is carried out, whose state is kept intact or changed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
#### MediaObject

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Linked-Data (@type)</p>
      </td>
        <td><code>MediaObject</code>, <code>ImageObject</code>, <code>DigitalDocument</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>the URL to access the item.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>name </td>
        <td>
          string
        </td>
        <td><p>the file name of the object.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>encodingFormat </td>
        <td>
          string
        </td>
        <td><p>MIME type</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>content </td>
        <td>
          string
        </td>
        <td><p>base64 encoded content</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>about </td>
        <td>
          string
        </td>
        <td><p>URI to the subject of the image or logo</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>url </td>
        <td>
          string
        </td>
        <td><p>URL of the image content</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
#### MLSMembership

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type </td>
        <td>
          string
        </td>
        <td><p>an MLS member relationship</p>
      </td>
        <td><code>MLSMembership</code></td>
      </tr>
      <tr>
        <td>roleName </td>
        <td>
          string
        </td>
        <td><p>A role played, performed or filled by a person or organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>memberOf </td>
        <td>
          object
        </td>
        <td><p>relationship roles</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>memberId </td>
        <td>
          string
        </td>
        <td><p>the user's MLSID</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
#### MarketingProgram

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>MarketingProgram</p>
      </td>
        <td><code>MarketingProgram</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>name </td>
        <td>
          string
        </td>
        <td><p>name of the work.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>description </td>
        <td>
          string
        </td>
        <td><p>description of the item</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>creator </td>
        <td>
          string
        </td>
        <td><p>creator / author of the work</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>dateCreated </td>
        <td>
          string
        </td>
        <td><p>The date on which the CreativeWork was created or the item was added to a DataFeed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>dateModified </td>
        <td>
          string
        </td>
        <td><p>The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>member </td>
        <td>
          array(string)
        </td>
        <td><p>member relationship objects</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

```json
{
  "type": "MarketingProgram",
  "id": "https://example.com/collection/1",
  "name": "Market Report 1008 Mountain Gate Road",
  "description": "Dolor accusamus rerum nemo non omnis. Nam labore pariatur eius omnis sit.",
  "creator": "http://user.example.com/profile/card",
  "dateCreated": "2019-04-19T01:51:21Z",
  "dateModified": "2019-04-19T01:51:21Z",
  "member": [
    "https://user.example.com/profile/card"
  ]
}
```
#### MultipleListingService

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>MultipleListingService</p>
      </td>
        <td><code>MultipleListingService</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>name </td>
        <td>
          string
        </td>
        <td><p>Name or DBA.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>url </td>
        <td>
          string
        </td>
        <td><p>primary website/url for the entity.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>availableLanguage </td>
        <td>
          array(object)
        </td>
        <td><p>A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>availableLanguage.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>Language</code></td>
      </tr>
      <tr>
        <td>availableLanguage.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>availableLanguage.additionalName </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>branchCode </td>
        <td>
          string
        </td>
        <td><p>A short textual code (also called &quot;store code&quot;) that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Additional contact points. Can be organized by role, location, etc...</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>logo </td>
        <td>
          array(object)
        </td>
        <td><p>a logo associated with the organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>image </td>
        <td>
          array
        </td>
        <td><p>an ImageObject or URI reference to an image of the entity on the web.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>parentOrganization </td>
        <td>
          array(string)
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example

```json
{
  "type": "MultipleListingService",
  "name": "GreatScott MLS"
}
```
#### Organization

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Linked-Data (@type)</p>
      </td>
        <td><code>Organization</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>name </td>
        <td>
          string
        </td>
        <td><p>Name or DBA.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>url </td>
        <td>
          string
        </td>
        <td><p>primary website/url for the entity.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>availableLanguage </td>
        <td>
          array(object)
        </td>
        <td><p>A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>availableLanguage.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>Language</code></td>
      </tr>
      <tr>
        <td>availableLanguage.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>availableLanguage.additionalName </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>branchCode </td>
        <td>
          string
        </td>
        <td><p>A short textual code (also called &quot;store code&quot;) that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Additional contact points. Can be organized by role, location, etc...</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>logo </td>
        <td>
          array(object)
        </td>
        <td><p>a logo associated with the organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>image </td>
        <td>
          array
        </td>
        <td><p>an ImageObject or URI reference to an image of the entity on the web.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>parentOrganization </td>
        <td>
          array(string)
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
#### OrganizationRole

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type </td>
        <td>
          string
        </td>
        <td><p>OrganizationRole</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>roleName </td>
        <td>
          string
        </td>
        <td><p>A role played, performed or filled by a person or organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>memberOf </td>
        <td>
          
        </td>
        <td><p>relationship roles</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

```json
{
  "type": "OrganizationRole",
  "roleName": "E-Team Certified",
  "memberOf": null
}
```
#### Person

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Person</p>
      </td>
        <td><code>Person</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>name </td>
        <td>
          string
        </td>
        <td><p>Full name of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>givenName </td>
        <td>
          string
        </td>
        <td><p>First Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>familyName </td>
        <td>
          string
        </td>
        <td><p>Last Name</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>jobTitle </td>
        <td>
          string
        </td>
        <td><p>The Job Title of the person.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Named and grouped contacts points.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address </td>
        <td>
          array(object)
        </td>
        <td><p>mailing addresses.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>address.streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.addressRegion </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.addressLocality </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.postalCode </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>birthDate </td>
        <td>
          string
        </td>
        <td><p>date of birth.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
  "birthDate": "2019-04-19"
}
```
#### Place

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>Linked-Data (@type)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address </td>
        <td>
          object
        </td>
        <td><p>PostalAddress</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>aggregateRating </td>
        <td>
          object
        </td>
        <td><p>AggregateRating -- The overall rating, based on a collection of reviews or ratings, of the item.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>branchCode </td>
        <td>
          string
        </td>
        <td><p>A short textual code (also called &quot;store code&quot;) that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>containedInPlace </td>
        <td>
          array(string)
        </td>
        <td><p>Place</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>containsPlace </td>
        <td>
          array(string)
        </td>
        <td><p>Place</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>geo </td>
        <td>
          oneOf
        </td>
        <td><p>The geo coordinates of the place.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>geo.0 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>geo.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>hasMap </td>
        <td>
          oneOf
        </td>
        <td><p>A URL to a map of the place. Supersedes map, maps.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
        <tr>
          <td>hasMap.0 </td>
          <td>
            string
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
        <tr>
          <td>hasMap.1 </td>
          <td>
            object
          </td>
          <td></td>
          <td><em>Any</em></td>
        </tr>
      <tr>
        <td>openingHoursSpecification </td>
        <td>
          object
        </td>
        <td><p>OpeningHoursSpecification</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>photo </td>
        <td>
          array
        </td>
        <td><p>A photograph of this place. Supersedes photos.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>review </td>
        <td>
          array(object)
        </td>
        <td><p>A review of the item. Supersedes reviews.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>specialOpeningHoursSpecification </td>
        <td>
          array(object)
        </td>
        <td><p>The special opening hours of a certain place. Use this to explicitly override general opening hours brought in scope by openingHoursSpecification or openingHours.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
#### PostalAddress

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>addressRegion </td>
        <td>
          string
        </td>
        <td><p>State or Province.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>addressLocality </td>
        <td>
          string
        </td>
        <td><p>City, Township.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>postalCode </td>
        <td>
          string
        </td>
        <td><p>Zip/Post Code</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
#### ProgramMembership

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type </td>
        <td>
          string
        </td>
        <td><p>ProgramMembership</p>
      </td>
        <td><code>ProgramMembership</code></td>
      </tr>
      <tr>
        <td>roleName </td>
        <td>
          string
        </td>
        <td><p>not used</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>memberOf </td>
        <td>
          string
        </td>
        <td><p>reference to the MarketingProgram</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>id for the specific instance of the relationship between the member and the Program</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>member </td>
        <td>
          string
        </td>
        <td><p>reference to the member</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>memberId </td>
        <td>
          string
        </td>
        <td><p>the member identifier for the program</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>startDate </td>
        <td>
          string
        </td>
        <td><p>the date the member started the program</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>endDate </td>
        <td>
          string
        </td>
        <td><p>the date the program membership ended</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

```json
{
  "type": "ProgramMembership",
  "roleName": null,
  "memberOf": "http://example.com",
  "id": "http://example.com",
  "member": "http://user.example.com/profile/card",
  "memberId": "string",
  "startDate": "2019-04-19T01:51:21Z",
  "endDate": "2019-04-19T01:51:21Z"
}
```
#### PropertyValue

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PropertyValue</code></td>
      </tr>
      <tr>
        <td>propertyID <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>value <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

```json
{
  "type": "PropertyValue",
  "propertyID": "UserID",
  "value": "<userid-string>"
}
```
#### RealEstateAgent

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>RealEstateAgent</p>
      </td>
        <td><code>RealEstateAgent</code>, <code>RealEstateOffice</code>, <code>RealEstateAgent</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>name </td>
        <td>
          string
        </td>
        <td><p>Name or DBA.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>url </td>
        <td>
          string
        </td>
        <td><p>primary website/url for the entity.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>availableLanguage </td>
        <td>
          array(object)
        </td>
        <td><p>A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>availableLanguage.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>Language</code></td>
      </tr>
      <tr>
        <td>availableLanguage.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>availableLanguage.additionalName </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>branchCode </td>
        <td>
          string
        </td>
        <td><p>A short textual code (also called &quot;store code&quot;) that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Additional contact points. Can be organized by role, location, etc...</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>logo </td>
        <td>
          array(object)
        </td>
        <td><p>a logo associated with the organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>image </td>
        <td>
          array
        </td>
        <td><p>an ImageObject or URI reference to an image of the entity on the web.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>parentOrganization </td>
        <td>
          array(string)
        </td>
        <td><p>URI reference to the agent's office. For teams, this can be a reference to the team leader/primary profile.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address </td>
        <td>
          object
        </td>
        <td><p>primary address</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>address.streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.addressRegion </td>
        <td>
          string
        </td>
        <td><p>State or Province.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.addressLocality </td>
        <td>
          string
        </td>
        <td><p>City, Township.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.postalCode </td>
        <td>
          string
        </td>
        <td><p>Zip/Post Code</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>subOrganization </td>
        <td>
          array(string)
        </td>
        <td><p>for teams: URI reference to a team member</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>member </td>
        <td>
          array
        </td>
        <td><p>describes members and roles for this organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>memberOf </td>
        <td>
          array(object)
        </td>
        <td><p>An Organization (or ProgramMembership) to which this Person or Organization belongs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit </td>
        <td>
          array(object)
        </td>
        <td><p>permits issued to the person or organization</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>RealEstateLicense</code></td>
      </tr>
      <tr>
        <td>permit.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.issuedBy </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.issuedThrough </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.issuedThrough.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.issuedThrough.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.validIn </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.validFrom </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.validUntil </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
      "validFrom": "2019-04-19T01:51:21Z",
      "validUntil": "2019-04-19T01:51:21Z"
    }
  ]
}
```
#### RealEstateLicense

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type </td>
        <td>
          string
        </td>
        <td><p>RealEstateLicense</p>
      </td>
        <td><code>RealEstateLicense</code></td>
      </tr>
      <tr>
        <td>name </td>
        <td>
          string
        </td>
        <td><p>display value, i.e. 'CA-DRE# 02068375'</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>issuedBy </td>
        <td>
          object
        </td>
        <td><p>the issuing organization or service</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>issuedThrough </td>
        <td>
          object
        </td>
        <td><p>The service through with the permit was granted.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>issuedThrough.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>issuedThrough.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>validIn </td>
        <td>
          object
        </td>
        <td><p>The geographic area where the permit is valid.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>validFrom </td>
        <td>
          string
        </td>
        <td><p>start date</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>validUntil </td>
        <td>
          string
        </td>
        <td><p>end date</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
  "validFrom": "2019-04-19T01:51:21Z",
  "validUntil": "2019-04-19T01:51:21Z"
}
```
#### RealEstateOffice

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>RealEstateOffice</p>
      </td>
        <td><code>RealEstateOffice</code>, <code>RealEstateOffice</code>, <code>RealEstateAgent</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>name </td>
        <td>
          string
        </td>
        <td><p>Name or DBA.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>url </td>
        <td>
          string
        </td>
        <td><p>primary website/url for the entity.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>availableLanguage </td>
        <td>
          array(object)
        </td>
        <td><p>A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>availableLanguage.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>Language</code></td>
      </tr>
      <tr>
        <td>availableLanguage.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>availableLanguage.additionalName </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>branchCode </td>
        <td>
          string
        </td>
        <td><p>A short textual code (also called &quot;store code&quot;) that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>department or role specific contact points, i.e. relocation.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>logo </td>
        <td>
          array(object)
        </td>
        <td><p>a logo associated with the organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>image </td>
        <td>
          array
        </td>
        <td><p>an ImageObject or URI reference to an image of the entity on the web.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>parentOrganization </td>
        <td>
          array(string)
        </td>
        <td><p>Office broker or franchisor.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address </td>
        <td>
          object
        </td>
        <td><p>primary address</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>address.streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.addressRegion </td>
        <td>
          string
        </td>
        <td><p>State or Province.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.addressLocality </td>
        <td>
          string
        </td>
        <td><p>City, Township.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.postalCode </td>
        <td>
          string
        </td>
        <td><p>Zip/Post Code</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>subOrganization </td>
        <td>
          array(string)
        </td>
        <td><p>Agents and teams associated with the office.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>member </td>
        <td>
          array
        </td>
        <td><p>describes members and roles for this organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>memberOf </td>
        <td>
          array(object)
        </td>
        <td><p>An Organization (or ProgramMembership) to which this Person or Organization belongs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit </td>
        <td>
          array(object)
        </td>
        <td><p>permits issued to the person or organization</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>RealEstateLicense</code></td>
      </tr>
      <tr>
        <td>permit.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.issuedBy </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.issuedThrough </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.issuedThrough.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.issuedThrough.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.validIn </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.validFrom </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.validUntil </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
      "validFrom": "2019-04-19T01:51:21Z",
      "validUntil": "2019-04-19T01:51:21Z"
    }
  ]
}
```
#### RealEstateOrganization

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>type <strong>(required)</strong></td>
        <td>
          string
        </td>
        <td><p>RealEstateOrganzation</p>
      </td>
        <td><code>RealEstateOrganization</code>, <code>RealEstateOffice</code>, <code>RealEstateAgent</code></td>
      </tr>
      <tr>
        <td>id </td>
        <td>
          string
        </td>
        <td><p>Linked-Data URI (@id)</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>name </td>
        <td>
          string
        </td>
        <td><p>Name or DBA.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>telephone </td>
        <td>
          string
        </td>
        <td><p>Primary phone number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>faxNumber </td>
        <td>
          string
        </td>
        <td><p>Primary fax number.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>email </td>
        <td>
          string
        </td>
        <td><p>Primary email address.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>url </td>
        <td>
          string
        </td>
        <td><p>primary website/url for the entity.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>availableLanguage </td>
        <td>
          array(object)
        </td>
        <td><p>A language someone may use with or at the item, service or place. Please use one of the language codes from the IETF BCP 47 standard.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>availableLanguage.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>Language</code></td>
      </tr>
      <tr>
        <td>availableLanguage.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>availableLanguage.additionalName </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>branchCode </td>
        <td>
          string
        </td>
        <td><p>A short textual code (also called &quot;store code&quot;) that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint </td>
        <td>
          array(object)
        </td>
        <td><p>Additional contact points. Can be organized by role, location, etc...</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>ContactPoint</code></td>
      </tr>
      <tr>
        <td>contactPoint.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.telephone </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.faxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.email </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>contactPoint.url </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>logo </td>
        <td>
          array(object)
        </td>
        <td><p>a logo associated with the organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>image </td>
        <td>
          array
        </td>
        <td><p>an ImageObject or URI reference to an image of the entity on the web.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>parentOrganization </td>
        <td>
          array(string)
        </td>
        <td><p>A franchisor or affiliate network of which this organization plays a membership role.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address </td>
        <td>
          object
        </td>
        <td><p>primary address</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>PostalAddress</code></td>
      </tr>
      <tr>
        <td>address.streetAddress </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.postOfficeBoxNumber </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.addressRegion </td>
        <td>
          string
        </td>
        <td><p>State or Province.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.addressLocality </td>
        <td>
          string
        </td>
        <td><p>City, Township.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>address.postalCode </td>
        <td>
          string
        </td>
        <td><p>Zip/Post Code</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>subOrganization </td>
        <td>
          array(string)
        </td>
        <td><p>an organization member</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>member </td>
        <td>
          array
        </td>
        <td><p>describes members and roles for this organization.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>memberOf </td>
        <td>
          array(object)
        </td>
        <td><p>An Organization (or ProgramMembership) to which this Person or Organization belongs.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit </td>
        <td>
          array(object)
        </td>
        <td><p>permits issued to the person or organization</p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><code>RealEstateLicense</code></td>
      </tr>
      <tr>
        <td>permit.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.issuedBy </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.issuedThrough </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.issuedThrough.type </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.issuedThrough.name </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.validIn </td>
        <td>
          object
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.validFrom </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>permit.validUntil </td>
        <td>
          string
        </td>
        <td></td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
      "validFrom": "2019-04-19T01:51:21Z",
      "validUntil": "2019-04-19T01:51:21Z"
    }
  ]
}
```
#### CustomProperties

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Accepted values</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>additionalProperty </td>
        <td>
          object
        </td>
        <td><p>Property names and values are only valid in the provided <code>@context</code>.  For example if <code>@context http://example.com/context#</code>. the property with key <code>ID</code> should be represented locally as <code>http;//example.com/context#ID</code></p>
      </td>
        <td><em>Any</em></td>
      </tr>
      <tr>
        <td>identifier </td>
        <td>
          object
        </td>
        <td><p>a key value map of <strong>namespaced</strong> unique identifiers.</p>
      </td>
        <td><em>Any</em></td>
      </tr>
  </tbody>
</table>

##### Example _(generated)_

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
