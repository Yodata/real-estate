---
 blog
menu: Topics
route: /topic/blog
---

# blog



### publishing blog events
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


### receiving blog events

| Event | Description |
| :---- | :---------- |
| [realestate/blog#postingcreate](#postingcreate) | a blog post was created |
| [realestate/blog#postingupdate](#postingupdate) | a blog post was updated |
| [realestate/blog#postingdelete](#postingdelete) | a blog post was deleted |


---
## postingcreate
```
realestate/blog#postingcreate
```

a blog post was created



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | event payload, typically an Action <br/>RANGE: [CreateAction](/types/CreateAction) |
| data.type | * |   |
| data.object | object | A blog post. <br/>RANGE: [BlogPosting](/types/BlogPosting) |

### Example
```json
{
  "topic": "realestate/blog#postingcreate",
  "time": "2022-10-12T01:13:42Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "CreateAction",
    "object": {
      "type": "BlogPosting",
      "identifier": {
        "aempostid": "xxxx"
      },
      "headline": "Top 10 Spring Cleeaning Tips",
      "articleBody": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
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
      "author": {
        "type": "RealEstateAgent",
        "id": "https://agent123.example.com/profile/card#me"
      },
      "provider": {
        "type": "RealEstateOrganization",
        "id": "https://example.com/profile/card#me"
      },
      "dateCreated": "2022-10-12T01:13:42Z",
      "dateModified": "2022-10-12T01:13:42Z",
      "url": "http://example.com",
      "urlTemplate": "https://example.com/{author/name}/blog/post?{slug}"
    }
  }
}
```


[back to top](#)

---
## postingupdate
```
realestate/blog#postingupdate
```

a blog post was updated



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | event payload, typically an Action <br/>RANGE: [UpdateAction](/types/UpdateAction) |
| data.type | * |   |
| data.object | object | A blog post. <br/>RANGE: [BlogPosting](/types/BlogPosting) |

### Example
```json
{
  "topic": "realestate/blog#postingupdate",
  "time": "2022-10-12T01:13:42Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "UpdateAction",
    "object": {
      "type": "BlogPosting",
      "identifier": {
        "aempostid": "xxxx"
      },
      "headline": "Top 10 Spring Cleeaning Tips",
      "articleBody": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
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
      "author": {
        "type": "RealEstateAgent",
        "id": "https://agent123.example.com/profile/card#me"
      },
      "provider": {
        "type": "RealEstateOrganization",
        "id": "https://example.com/profile/card#me"
      },
      "dateCreated": "2022-10-12T01:13:42Z",
      "dateModified": "2022-10-12T01:13:42Z",
      "url": "http://example.com",
      "urlTemplate": "https://example.com/{author/name}/blog/post?{slug}"
    }
  }
}
```


[back to top](#)

---
## postingdelete
```
realestate/blog#postingdelete
```

a blog post was deleted



### Schema
| Name | Type | Description |
|:-----| :--- | :---------- |
| topic | string! | the event topic which determines the schema of event.data  |
| time | string&lt;date-time&gt;  | date & time the event was produced  |
| agent | string&lt;uri&gt;  | the user,tema or organization who sent the event  |
| instrument | string&lt;uri&gt;  | the service which created the event  |
| source | string&lt;uri&gt;  | an agent, team or organization who received a copy of the event  |
| originalRecipient | string&lt;uri&gt;  | the original recipient of the event with this id  |
| id | string&lt;uri&gt;  | the shared identifier of the event, akd the event id  |
| @id | string&lt;uri&gt;  | the url of your instance of the event in your inbox  |
| data | object! | event payload, typically an Action <br/>RANGE: [DeleteAction](/types/DeleteAction) |
| data.type | * |   |
| data.object | object | A blog post. <br/>RANGE: [BlogPosting](/types/BlogPosting) |

### Example
```json
{
  "topic": "realestate/blog#postingdelete",
  "time": "2022-10-12T01:13:42Z",
  "agent": "https://agentid.example.com/profile/card#me",
  "instrument": "https://vendorid.example.com/profile/card#me",
  "source": "https://companyid.example.com/profile/card#me",
  "originalRecipient": "https://agentid.example.com/profile/card#me",
  "id": "https://instrumentid.example.com/publish/xxxxxxxxxxxxx",
  "@id": "https://yourpod.example.com/inbox/xxxxxxxxxxxxx",
  "data": {
    "type": "DeleteAction",
    "object": {
      "type": "BlogPosting",
      "identifier": {
        "aempostid": "xxxx"
      },
      "headline": "Top 10 Spring Cleeaning Tips",
      "articleBody": "<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>",
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
      "author": {
        "type": "RealEstateAgent",
        "id": "https://agent123.example.com/profile/card#me"
      },
      "provider": {
        "type": "RealEstateOrganization",
        "id": "https://example.com/profile/card#me"
      },
      "dateCreated": "2022-10-12T01:13:42Z",
      "dateModified": "2022-10-12T01:13:42Z",
      "url": "http://example.com",
      "urlTemplate": "https://example.com/{author/name}/blog/post?{slug}"
    }
  }
}
```


[back to top](#)
