

---
title: MediaObject
---

{}


# MediaObject

an image, video or document availble for download



### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |

{
  "_json": {
    "title": "MediaObject",
    "description": "an image, video or document availble for download",
    "x-subclass": [
      "ImageObject",
      "DigitalDocument"
    ],
    "allOf": [
      {
        "type": "object",
        "required": [
          "type"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "The item type (Linked-Data @type)",
            "x-parser-schema-id": "<anonymous-schema-144>"
          }
        },
        "x-parser-schema-id": "Thing"
      },
      {
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "MediaObject",
              "ImageObject",
              "DigitalDocument"
            ]
          },
          "id": {
            "description": "the URL to access the item.",
            "example": "http://user.example.com/public/logo/fileName.zip",
            "type": "string",
            "format": "uri"
          },
          "name": {
            "type": "string",
            "description": "the file name of the object.",
            "example": "fileName.zip"
          },
          "encodingFormat": {
            "type": "string",
            "description": "MIME type",
            "example": "application/zip"
          },
          "about": {
            "type": "string",
            "format": "uri",
            "description": "URI to the subject of the image or logo",
            "example": "http://user.example.com/profile/card#me"
          },
          "url": {
            "type": "string",
            "format": "uri",
            "description": "URL of the image content",
            "example": "http://user.example.com/public/profile/image.jpg"
          }
        },
        "x-parser-schema-id": "<anonymous-schema-178>"
      }
    ],
    "x-parser-schema-id": "MediaObject"
  },
  "options": {}
}



prop = {
  &quot;_json&quot;: {
    &quot;type&quot;: &quot;object&quot;,
    &quot;required&quot;: [
      &quot;type&quot;
    ],
    &quot;properties&quot;: {
      &quot;type&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
        &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;MediaObject&quot;,
        &quot;description&quot;: &quot;an image, video or document availble for download&quot;,
        &quot;x-subclass&quot;: [
          &quot;ImageObject&quot;,
          &quot;DigitalDocument&quot;
        ],
        &quot;allOf&quot;: [
          {
            &quot;type&quot;: &quot;object&quot;,
            &quot;required&quot;: [
              &quot;type&quot;
            ],
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
          },
          {
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;MediaObject&quot;,
                  &quot;ImageObject&quot;,
                  &quot;DigitalDocument&quot;
                ]
              },
              &quot;id&quot;: {
                &quot;description&quot;: &quot;the URL to access the item.&quot;,
                &quot;example&quot;: &quot;http://user.example.com/public/logo/fileName.zip&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the file name of the object.&quot;,
                &quot;example&quot;: &quot;fileName.zip&quot;
              },
              &quot;encodingFormat&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;MIME type&quot;,
                &quot;example&quot;: &quot;application/zip&quot;
              },
              &quot;about&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;URI to the subject of the image or logo&quot;,
                &quot;example&quot;: &quot;http://user.example.com/profile/card#me&quot;
              },
              &quot;url&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;URL of the image content&quot;,
                &quot;example&quot;: &quot;http://user.example.com/public/profile/image.jpg&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-178&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;MediaObject&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;1&gt;
required = 
path = MediaObject




prop = {
  &quot;_json&quot;: {
    &quot;properties&quot;: {
      &quot;type&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;enum&quot;: [
          &quot;MediaObject&quot;,
          &quot;ImageObject&quot;,
          &quot;DigitalDocument&quot;
        ]
      },
      &quot;id&quot;: {
        &quot;description&quot;: &quot;the URL to access the item.&quot;,
        &quot;example&quot;: &quot;http://user.example.com/public/logo/fileName.zip&quot;,
        &quot;type&quot;: &quot;string&quot;,
        &quot;format&quot;: &quot;uri&quot;
      },
      &quot;name&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;the file name of the object.&quot;,
        &quot;example&quot;: &quot;fileName.zip&quot;
      },
      &quot;encodingFormat&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;description&quot;: &quot;MIME type&quot;,
        &quot;example&quot;: &quot;application/zip&quot;
      },
      &quot;about&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;format&quot;: &quot;uri&quot;,
        &quot;description&quot;: &quot;URI to the subject of the image or logo&quot;,
        &quot;example&quot;: &quot;http://user.example.com/profile/card#me&quot;
      },
      &quot;url&quot;: {
        &quot;type&quot;: &quot;string&quot;,
        &quot;format&quot;: &quot;uri&quot;,
        &quot;description&quot;: &quot;URL of the image content&quot;,
        &quot;example&quot;: &quot;http://user.example.com/public/profile/image.jpg&quot;
      }
    },
    &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-178&gt;&quot;
  },
  &quot;options&quot;: {
    &quot;parent&quot;: {
      &quot;_json&quot;: {
        &quot;title&quot;: &quot;MediaObject&quot;,
        &quot;description&quot;: &quot;an image, video or document availble for download&quot;,
        &quot;x-subclass&quot;: [
          &quot;ImageObject&quot;,
          &quot;DigitalDocument&quot;
        ],
        &quot;allOf&quot;: [
          {
            &quot;type&quot;: &quot;object&quot;,
            &quot;required&quot;: [
              &quot;type&quot;
            ],
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;The item type (Linked-Data @type)&quot;,
                &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-144&gt;&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;Thing&quot;
          },
          {
            &quot;properties&quot;: {
              &quot;type&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;enum&quot;: [
                  &quot;MediaObject&quot;,
                  &quot;ImageObject&quot;,
                  &quot;DigitalDocument&quot;
                ]
              },
              &quot;id&quot;: {
                &quot;description&quot;: &quot;the URL to access the item.&quot;,
                &quot;example&quot;: &quot;http://user.example.com/public/logo/fileName.zip&quot;,
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;
              },
              &quot;name&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;the file name of the object.&quot;,
                &quot;example&quot;: &quot;fileName.zip&quot;
              },
              &quot;encodingFormat&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;description&quot;: &quot;MIME type&quot;,
                &quot;example&quot;: &quot;application/zip&quot;
              },
              &quot;about&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;URI to the subject of the image or logo&quot;,
                &quot;example&quot;: &quot;http://user.example.com/profile/card#me&quot;
              },
              &quot;url&quot;: {
                &quot;type&quot;: &quot;string&quot;,
                &quot;format&quot;: &quot;uri&quot;,
                &quot;description&quot;: &quot;URL of the image content&quot;,
                &quot;example&quot;: &quot;http://user.example.com/public/profile/image.jpg&quot;
              }
            },
            &quot;x-parser-schema-id&quot;: &quot;&lt;anonymous-schema-178&gt;&quot;
          }
        ],
        &quot;x-parser-schema-id&quot;: &quot;MediaObject&quot;
      },
      &quot;options&quot;: {}
    }
  }
}
pname = &lt;2&gt;
required = 
path = MediaObject











### Example

```json
{
  "type": "MediaObject",
  "id": "http://user.example.com/public/logo/fileName.zip",
  "name": "fileName.zip",
  "encodingFormat": "application/zip",
  "about": "http://user.example.com/profile/card#me",
  "url": "http://user.example.com/public/profile/image.jpg"
}
```

