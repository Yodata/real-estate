
const schemas = {
  CloudEvent: {
    title: 'CloudEvent',
    type: 'object',
    required: ['topic', 'agent', 'instrument', 'time'],
    properties: {
      topic: {
        type: 'string',
        description: 'the event topic which determines the event.data schema',
        'x-parser-schema-id': '<anonymous-schema-82>',
      },
      time: {
        type: 'string',
        format: 'date-time',
        description: 'date & time the event was produced',
        'x-parser-schema-id': '<anonymous-schema-83>',
      },
      agent: {
        type: 'string',
        format: 'uri',
        description: 'the user,tema or organization who sent the event',
        example: 'https://agentid.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-84>',
      },
      instrument: {
        type: 'string',
        format: 'uri',
        description: 'the service which created the event',
        example: 'https://vendorid.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-85>',
      },
      source: {
        type: 'string',
        format: 'uri',
        description:
          'an agent, team or organization who received a copy of the event',
        example: 'https://companyid.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-86>',
      },
      originalRecipient: {
        type: 'string',
        format: 'uri',
        description: 'the original recipient of the event with this id',
        example: 'https://agentid.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-87>',
      },
      id: {
        type: 'string',
        format: 'uri',
        description: 'the shared identifier of the event, akd the event id',
        example: 'https://instrumentid.example.com/publish/xxxxxxxxxxxxx',
        'x-parser-schema-id': '<anonymous-schema-88>',
      },
      '@id': {
        type: 'string',
        format: 'uri',
        description: 'the url of your instance of the event in your inbox',
        example: 'https://yourpod.example.com/inbox/xxxxxxxxxxxxx',
        'x-parser-schema-id': '<anonymous-schema-89>',
      },
      data: {
        type: 'object',
        description: 'event payload, typically an Action',
        'x-parser-schema-id': '<anonymous-schema-90>',
      },
    },
    'x-parser-schema-id': 'CloudEvent',
  },
  Action: {
    title: 'Action',
    type: 'object',
    description:
      'An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.',
    required: ['type'],
    properties: {
      type: {
        description: 'the action type',
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-113>',
      },
      object: {
        description: 'item on which the action is carried out',
        'x-parser-schema-id': '<anonymous-schema-114>',
      },
    },
    externalDocs: {
      description: 'schema.org/Action',
      url: 'https://schema.org/Action',
    },
    'x-parser-schema-id': 'Action',
  },
  Award: {
    title: 'Award',
    type: 'object',
    description:
      'An honor bestowed on one or mote _recipients_ by the message _agent_',
    properties: {
      type: {
        type: 'string',
        enum: ['Award'],
        description: '"AwardAction"',
        'x-parser-schema-id': '<anonymous-schema-115>',
      },
      name: {
        example: 'Top 1%',
        description: 'name of the award',
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-116>',
      },
      dateAwarded: {
        type: 'string',
        description: 'date the award was presented or announced.',
        'x-range': 'DateTime',
        example: '2019-11-25T04:23:32.000Z',
        'x-parser-schema-id': '<anonymous-schema-117>',
      },
      agent: {
        title: 'creator',
        description: 'the item creator',
        'x-range': ['Person', 'Organization'],
        example: 'http://agent.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-118>',
      },
      recipient: {
        type: 'array',
        items: {
          title: 'recipient',
          description: 'the recipient',
          type: 'object',
          'x-range': ['Person', 'Organization'],
          example: {
            type: 'RealEstateAgent',
            name: 'Randy RealEstateAgent',
            id: 'https://{userid}.example.com/profile/card#me',
          },
          'x-parser-schema-id': '<anonymous-schema-120>',
        },
        'x-parser-schema-id': '<anonymous-schema-119>',
      },
      identifier: {
        example: {
          hsfAwardId: 'xxxx',
        },
        type: 'object',
        description:
          'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.',
        'x-parser-schema-id': '<anonymous-schema-121>',
      },
    },
    'x-parser-schema-id': 'Award',
  },
  AwardSeries: {
    title: 'AwardSeries',
    type: 'object',
    'x-range': ['AwardSeries'],
    description: 'an award bestowed at regular intervals',
    properties: {
      type: {
        enum: ['AwardSeries'],
        description: '"AwardSeries"',
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-122>',
      },
      name: {
        example: 'Top 1% Club',
        description: 'name of the series',
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-123>',
      },
      description: {
        example: 'Annual',
        type: 'string',
        description: 'description of the item.',
        'x-parser-schema-id': '<anonymous-schema-124>',
      },
      duration: {
        title: 'duration',
        type: 'string',
        description: 'The duration of the item in ISO 8601 date format.',
        example: 'R/P1Y',
        'x-parser-schema-id': '<anonymous-schema-125>',
      },
      startDate: {
        description: 'the start date-time (ISO 8601 formated)',
        type: 'string',
        format: 'date-time',
        'x-parser-schema-id': '<anonymous-schema-126>',
      },
      endDate: {
        type: 'string',
        description: 'the end date-time (ISO 8601 formated)',
        format: 'date-time',
        'x-parser-schema-id': '<anonymous-schema-127>',
      },
      id: {
        example: 'https://example/com',
        type: 'string',
        format: 'uri',
        description: 'Linked-Data URI (@id)',
        'x-parser-schema-id': '<anonymous-schema-128>',
      },
      identifier: {
        example: {
          hsfAwardSeriesID: 'xxxx',
        },
        type: 'object',
        description:
          'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.',
        'x-parser-schema-id': '<anonymous-schema-129>',
      },
    },
    'x-parser-schema-id': 'AwardSeries',
  },
  AwardTeam: {
    title: 'AwardTeam',
    type: 'object',
    'x-range': 'AwardTeam',
    description: 'a Collection',
    required: ['type'],
    properties: {
      type: {
        description: 'AwardTeam',
        type: 'string',
        enum: ['AwardTeam'],
        'x-parser-schema-id': '<anonymous-schema-130>',
      },
      name: {
        type: 'string',
        description: 'name of the AwardTeam',
        example: 'Clients',
        'x-parser-schema-id': '<anonymous-schema-131>',
      },
      identifier: {
        example: {
          hsfTeamId: 'xxxxx',
        },
        type: 'object',
        description:
          'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.',
        'x-parser-schema-id': '<anonymous-schema-132>',
      },
      member: {
        description: 'members of the AwardTeam',
        type: 'array',
        'x-range': [
          'RealEstateAgent',
          'RealEstateOffice',
          'RealEstateOrganization',
        ],
        items: {
          type: 'string',
          'x-parser-schema-id': '<anonymous-schema-134>',
        },
        example: [
          'https://user.example.com/profile/card#me',
          'https://office.example.com/profile/card#me',
          'https://company.example.com/profile/card#me',
        ],
        'x-parser-schema-id': '<anonymous-schema-133>',
      },
    },
    'x-parser-schema-id': 'AwardTeam',
  },
  ApplicationProfile: {
    allOf: [
      {
        allOf: [
          {
            type: 'object',
            required: ['type'],
            properties: {
              type: {
                type: 'string',
                description: 'The item type (Linked-Data @type)',
                'x-parser-schema-id': '<anonymous-schema-136>',
              },
            },
            'x-parser-schema-id': 'Thing',
          },
          {
            type: 'object',
            description: 'a solid profile document',
            required: ['id', 'type', 'primaryTopic'],
            properties: {
              id: {
                type: 'string',
                format: 'uri',
                example: 'https://user.example.com/profile/card#me',
                'x-parser-schema-id': '<anonymous-schema-138>',
              },
              type: {
                type: 'string',
                enum: ['PersonalProfileDocument'],
                'x-parser-schema-id': '<anonymous-schema-139>',
              },
              primaryTopic: {
                type: 'string',
                default: '#me',
                'x-parser-schema-id': '<anonymous-schema-140>',
              },
              '#me': {
                type: 'object',
                required: ['type'],
                properties: {
                  type: {
                    type: 'string',
                    example: 'SoftwareApplication',
                    'x-parser-schema-id': '<anonymous-schema-142>',
                  },
                  inbox: {
                    description: 'URI to your Linked-Data-Notifications Inbox',
                    type: 'string',
                    example: '/inbox/',
                    default: '/inbox/',
                    'x-parser-schema-id': '<anonymous-schema-143>',
                  },
                  outbox: {
                    description: 'URI to your Linked-Data-Notifications Outbox',
                    type: 'string',
                    example: '/outbox/',
                    default: '/outbox/',
                    'x-parser-schema-id': '<anonymous-schema-144>',
                  },
                  storage: {
                    description: 'URI to your storage root.',
                    type: 'string',
                    example: '/',
                    default: '/',
                    'x-parser-schema-id': '<anonymous-schema-145>',
                  },
                  preferencesFile: {
                    description: 'URI to shared application prefs.',
                    type: 'string',
                    example: '/settings/prefs',
                    'x-parser-schema-id': '<anonymous-schema-146>',
                  },
                  account: {
                    description: 'discoverable solid:account root',
                    type: 'string',
                    example: '/',
                    'x-parser-schema-id': '<anonymous-schema-147>',
                  },
                  privateTypeIndex: {
                    description: 'type index for your private use',
                    type: 'string',
                    example: '/settings/privateTypeIndex',
                    'x-parser-schema-id': '<anonymous-schema-148>',
                  },
                  publicTypeIndex: {
                    description: 'shared, discoverable type index',
                    type: 'string',
                    example: '/settings/publicTypeIndex',
                    'x-parser-schema-id': '<anonymous-schema-149>',
                  },
                  permissions: {
                    description:
                      'Permissions required by an linked-data application or service.',
                    'x-enumeration': [
                      {
                        name: 'profile:read',
                        description:
                          "grantee can read the owner's profile data.",
                      },
                      {
                        name: 'profile:write',
                        description:
                          "grantee can modify the owner's profile data.",
                      },
                      {
                        name: 'lead',
                        description:
                          'grantee can read, write and modify leads.',
                      },
                      {
                        name: 'contact',
                        description:
                          'grantee can read, write and modify contacts.',
                      },
                      {
                        name: 'website:events',
                        description:
                          'grantee can read, write and modify website events.',
                      },
                    ],
                    type: 'array',
                    items: {
                      type: 'object',
                      enum: [
                        'profile:read',
                        'profile:write',
                        'lead',
                        'contact',
                        'website:events',
                      ],
                      'x-parser-schema-id': '<anonymous-schema-151>',
                    },
                    'x-parser-schema-id': '<anonymous-schema-150>',
                  },
                },
                'x-parser-schema-id': '<anonymous-schema-141>',
              },
            },
            'x-parser-schema-id': '<anonymous-schema-137>',
          },
        ],
        'x-parser-schema-id': '<anonymous-schema-135>',
      },
      {
        type: 'object',
        required: ['id', 'type', 'inbox', 'outbox'],
        properties: {
          id: {
            type: 'string',
            format: 'uri',
            example: 'https://user.example.com/profile/card#me',
            'x-parser-schema-id': '<anonymous-schema-153>',
          },
          type: {
            type: 'string',
            example: 'SoftwareApplication',
            'x-parser-schema-id': '<anonymous-schema-154>',
          },
          inbox: {
            description: 'discoverable uri to your LDN inbox',
            type: 'string',
            example: '/inbox/',
            'x-parser-schema-id': '<anonymous-schema-155>',
          },
          outbox: {
            description: 'discoverable uri to your LDN outbox',
            type: 'string',
            example: '/outbox/',
            'x-parser-schema-id': '<anonymous-schema-156>',
          },
          storage: {
            description: 'uri to your linked-data storage root',
            type: 'string',
            example: '/',
            'x-parser-schema-id': '<anonymous-schema-157>',
          },
          preferencesFile: {
            description: 'discoverable uri for shared application preferences',
            type: 'string',
            example: '/settings/prefs',
            'x-parser-schema-id': '<anonymous-schema-158>',
          },
          account: {
            description: 'discoverable solid:account root',
            type: 'string',
            example: '/',
            'x-parser-schema-id': '<anonymous-schema-159>',
          },
          privateTypeIndex: {
            description: 'type index for your private use',
            type: 'string',
            example: '/settings/privateTypeIndex',
            'x-parser-schema-id': '<anonymous-schema-160>',
          },
          publicTypeIndex: {
            description: 'shared, discoverable type index',
            type: 'string',
            example: '/settings/publicTypeIndex',
            'x-parser-schema-id': '<anonymous-schema-161>',
          },
          permissions: {
            description: 'the subscription types required by your service.',
            type: 'array',
            items: {
              type: 'string',
              enum: ['profile:read', 'contact', 'lead', 'listing'],
              'x-parser-schema-id': '<anonymous-schema-163>',
            },
            'x-parser-schema-id': '<anonymous-schema-162>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-152>',
      },
    ],
    'x-parser-schema-id': 'ApplicationProfile',
  },
  BlogPosting: {
    title: 'BlogPosting',
    type: 'object',
    'x-range': 'BlogPosting',
    description: 'A blog post.',
    properties: {
      type: {
        enum: ['BlogPosting'],
        'x-parser-schema-id': '<anonymous-schema-164>',
      },
      identifier: {
        example: {
          aempostid: 'xxxx',
        },
        type: 'object',
        description:
          'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.',
        'x-parser-schema-id': '<anonymous-schema-165>',
      },
      headline: {
        type: 'string',
        description: 'headline of the post.',
        example: 'Top 10 Spring Cleeaning Tips',
        'x-parser-schema-id': '<anonymous-schema-166>',
      },
      articleBody: {
        type: 'string',
        description: 'the actual body of the post in HTML format.',
        example:
          '<HTML><body>lorem ipsum dolor sit amet, consectetur adipiscing</body></HTML>',
        'x-parser-schema-id': '<anonymous-schema-167>',
      },
      image: {
        description:
          'by convention the first image item is the article hero image.  note: image tags can also be embeded in the articleBody.',
        title: 'image',
        type: 'array',
        'x-range': ['ImageObject'],
        items: [
          {
            type: 'object',
            allOf: [
              {
                title: 'MediaObject',
                description:
                  'an image, video or document availble for download',
                'x-subclass': ['ImageObject', 'DigitalDocument'],
                allOf: [
                  {
                    type: 'object',
                    required: ['type'],
                    properties: {
                      type: {
                        type: 'string',
                        description: 'The item type (Linked-Data @type)',
                        'x-parser-schema-id': '<anonymous-schema-136>',
                      },
                    },
                    'x-parser-schema-id': 'Thing',
                  },
                  {
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['MediaObject', 'ImageObject', 'DigitalDocument'],
                      },
                      id: {
                        description: 'the URL to access the item.',
                        example:
                          'http://user.example.com/public/logo/fileName.zip',
                        type: 'string',
                        format: 'uri',
                      },
                      name: {
                        type: 'string',
                        description: 'the file name of the object.',
                        example: 'fileName.zip',
                      },
                      encodingFormat: {
                        type: 'string',
                        description: 'MIME type',
                        example: 'application/zip',
                      },
                      about: {
                        type: 'string',
                        format: 'uri',
                        description: 'URI to the subject of the image or logo',
                        example: 'http://user.example.com/profile/card#me',
                      },
                      url: {
                        type: 'string',
                        format: 'uri',
                        description: 'URL of the image content',
                        example:
                          'http://user.example.com/public/profile/image.jpg',
                      },
                    },
                    'x-parser-schema-id': '<anonymous-schema-170>',
                  },
                ],
                'x-parser-schema-id': 'MediaObject',
              },
              {
                title: 'ImageObject',
                'x-range': 'ImageObject',
                properties: {
                  type: {
                    enum: ['ImageObject'],
                    example: 'ImageObject',
                  },
                  id: {
                    example: 'http://user.example.com/public/logo/image.jpg',
                  },
                  name: {
                    example: 'image.jpg',
                  },
                  encodingFormat: {
                    example: 'image/jpeg',
                  },
                },
                'x-parser-schema-id': '<anonymous-schema-171>',
              },
            ],
            'x-parser-schema-id': '<anonymous-schema-169>',
          },
        ],
        'x-parser-schema-id': '<anonymous-schema-168>',
      },
      author: {
        description: 'author of the work',
        type: 'object',
        properties: {
          type: {
            type: 'string',
            enum: [
              'RealEstateAgent',
              'RealEstateOffice',
              'RealEstateTeam',
              'RealEstateOrganization',
            ],
            'x-parser-schema-id': '<anonymous-schema-173>',
          },
          id: {
            type: 'string',
            format: 'uri',
            description: 'the profile URI of the author',
            example: 'https://agent123.example.com/profile/card#me',
            'x-parser-schema-id': '<anonymous-schema-174>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-172>',
      },
      provider: {
        description:
          'if the article is provided as a template or stock content to be shared by mutliple authors, the provider should be included.',
        type: 'object',
        properties: {
          type: {
            type: 'string',
            enum: [
              'RealEstateOrganization',
              'RealEstateTeam',
              'RealEstateOffice',
              'RealEstateAgent',
            ],
            'x-parser-schema-id': '<anonymous-schema-176>',
          },
          id: {
            type: 'string',
            format: 'uri',
            description: 'the profile URI of the provider',
            example: 'https://example.com/profile/card#me',
            'x-parser-schema-id': '<anonymous-schema-177>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-175>',
      },
      dateCreated: {
        description:
          'The date on which the BlogPosting was created or the item was added to a DataFeed.',
        type: 'string',
        format: 'date-time',
        'x-parser-schema-id': '<anonymous-schema-178>',
      },
      dateModified: {
        description:
          "The date on which the BlogPosting was most recently modified or when the item's entry was modified within a DataFeed.",
        type: 'string',
        format: 'date-time',
        'x-parser-schema-id': '<anonymous-schema-179>',
      },
      url: {
        title: 'url',
        type: 'string',
        format: 'uri',
        description: 'URL of the item.',
        'x-parser-schema-id': '<anonymous-schema-180>',
      },
      urlTemplate: {
        type: 'string',
        description:
          'urlTemplate in [IETF rfc6570 format](https://datatracker.ietf.org/doc/html/rfc6570)',
        example: 'https://example.com/{author/name}/blog/post?{slug}',
        'x-parser-schema-id': '<anonymous-schema-181>',
      },
    },
    'x-parser-schema-id': 'BlogPosting',
  },
  Certification: {
    type: 'object',
    title: 'Certification',
    description:
      'A certification issued by an organization to an individual or business.',
    'x-range': 'Certification',
    properties: {
      type: {
        description: 'Certification',
        type: 'string',
        enum: ['Certification'],
        'x-parser-schema-id': '<anonymous-schema-182>',
      },
      name: {
        type: 'string',
        description: 'the name of the Certification',
        example: 'e-Agent Certified',
        'x-parser-schema-id': '<anonymous-schema-183>',
      },
      issuedBy: {
        type: 'object',
        'x-range': 'RealEstateOrganization',
        description: 'the issuing authority',
        properties: {
          type: {
            enum: ['RealEstateOrganization'],
            type: 'string',
            description: 'The item type (Linked-Data @type)',
            'x-parser-schema-id': '<anonymous-schema-185>',
          },
          id: {
            example: 'https://example.com/profile/card#me',
            type: 'string',
            format: 'uri',
            description: 'Linked-Data URI (@id)',
            'x-parser-schema-id': '<anonymous-schema-186>',
          },
          name: {
            type: 'string',
            description: 'name of the issuing organization',
            example: 'Gotham City Real Estate',
            'x-parser-schema-id': '<anonymous-schema-187>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-184>',
      },
      issuedTo: {
        'x-range': 'RealEstateAgent',
        type: 'object',
        description: 'the subject',
        properties: {
          type: {
            enum: ['RealEstateAgent'],
            type: 'string',
            description: 'The item type (Linked-Data @type)',
            'x-parser-schema-id': '<anonymous-schema-189>',
          },
          id: {
            type: 'string',
            format: 'uri',
            description: 'Linked-Data URI (@id)',
            'x-parser-schema-id': '<anonymous-schema-190>',
          },
          name: {
            type: 'string',
            description: 'the name of the item',
            'x-parser-schema-id': '<anonymous-schema-191>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-188>',
      },
    },
    'x-parser-schema-id': 'Certification',
  },
  City: {
    title: 'City',
    type: 'object',
    description: 'A city or town.',
    properties: {
      type: {
        type: 'string',
        enum: ['City', 'PostalCodeArea'],
        'x-parser-schema-id': '<anonymous-schema-192>',
      },
      name: {
        type: 'string',
        description: 'city name (same as addressLocality)',
        'x-parser-schema-id': '<anonymous-schema-193>',
      },
      addressRegion: {
        type: 'string',
        description: 'State or Province.',
        example: 'New Jersey',
        'x-parser-schema-id': '<anonymous-schema-194>',
      },
      addressLocality: {
        type: 'string',
        description: 'City, Township.',
        example: 'Gotham City',
        'x-parser-schema-id': '<anonymous-schema-195>',
      },
      postalCode: {
        type: 'string',
        description: 'Zip/Post Code',
        example: '10010',
        'x-parser-schema-id': '<anonymous-schema-196>',
      },
      addressCountry: {
        type: 'string',
        description:
          'The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.',
        example: 'USA',
        'x-parser-schema-id': '<anonymous-schema-197>',
      },
      addressCounty: {
        type: 'string',
        description: 'the county (us real estate extension)',
        example: 'Gotham County',
        'x-parser-schema-id': '<anonymous-schema-198>',
      },
    },
    'x-parser-schema-id': 'City',
  },
  Collection: {
    title: 'Collection',
    type: 'object',
    'x-range': 'Collection',
    description: 'a set of items.',
    required: ['type'],
    properties: {
      type: {
        description: 'Collection',
        type: 'string',
        enum: ['Collection'],
        'x-parser-schema-id': '<anonymous-schema-199>',
      },
      name: {
        type: 'string',
        description: 'name of the collection',
        example: 'Clients',
        'x-parser-schema-id': '<anonymous-schema-200>',
      },
      identifier: {
        type: 'object',
        description:
          'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.',
        example: {
          salesforceContactID: 'c28834ca-db69-4da8-90ad-75cdc9907298',
        },
        'x-parser-schema-id': '<anonymous-schema-201>',
      },
      creator: {
        description: 'creator of the collection',
        type: 'string',
        example: 'https://{agentid}.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-202>',
      },
      dateCreated: {
        description: 'The date on which the item was created.',
        type: 'string',
        format: 'date-time',
        'x-parser-schema-id': '<anonymous-schema-203>',
      },
      dateModified: {
        description:
          "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
        type: 'string',
        format: 'date-time',
        'x-parser-schema-id': '<anonymous-schema-204>',
      },
      member: {
        description: 'members of the collection',
        type: 'array',
        items: {
          type: 'object',
          'x-parser-schema-id': '<anonymous-schema-206>',
        },
        'x-parser-schema-id': '<anonymous-schema-205>',
      },
    },
    'x-parser-schema-id': 'Collection',
  },
  Comment: {
    title: 'Comment',
    type: 'object',
    'x-range': 'Comment',
    description: 'A comment on an item.',
    required: ['type', 'text'],
    properties: {
      type: {
        description: 'Comment',
        type: 'string',
        enum: ['Comment'],
        'x-parser-schema-id': '<anonymous-schema-207>',
      },
      dateCreated: {
        description: 'The date on which the item was created.',
        type: 'string',
        format: 'date-time',
        'x-parser-schema-id': '<anonymous-schema-203>',
      },
      dateModified: {
        description:
          "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
        type: 'string',
        format: 'date-time',
        'x-parser-schema-id': '<anonymous-schema-204>',
      },
      text: {
        description: 'the comment body',
        type: 'string',
        example: "That's a negative attitude, Robin.",
        'x-parser-schema-id': '<anonymous-schema-208>',
      },
      author: {
        type: 'object',
        description: 'the content author',
        example: {
          type: 'RealEstateAgent',
          name: 'Batman',
        },
        'x-parser-schema-id': '<anonymous-schema-209>',
      },
      about: {
        example: {
          type: 'Contact',
          name: 'Robin',
          identifier: {
            redContact_GUID: '6bf62a1b-225e-4fca-87b3-54cc09446a66',
          },
        },
        sameAs: 'https://schema.org/about',
        title: 'about',
        type: 'object',
        description: 'The subject matter of the content',
        'x-parser-schema-id': '<anonymous-schema-210>',
      },
      identifier: {
        type: 'object',
        description:
          'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.',
        example: {
          salesforceContactID: 'c28834ca-db69-4da8-90ad-75cdc9907298',
        },
        'x-parser-schema-id': '<anonymous-schema-211>',
      },
    },
    'x-parser-schema-id': 'Comment',
  },
  Contact: {
    allOf: [
      {
        allOf: [
          {
            title: 'Person',
            type: 'object',
            properties: {
              type: {
                type: 'string',
                description: 'Person',
                enum: ['Person'],
                'x-parser-schema-id': '<anonymous-schema-213>',
              },
              affiliation: {
                type: 'array',
                description:
                  'An organization that this person is affiliated with',
                items: {
                  type: 'string',
                  format: 'uri',
                  example: 'https://example.com/profile/card#me',
                  'x-parser-schema-id': '<anonymous-schema-215>',
                },
                'x-parser-schema-id': '<anonymous-schema-214>',
              },
              address: {
                type: 'array',
                'x-range': 'PostalAddress',
                description: 'addresses for the item',
                items: {
                  type: 'object',
                  'x-range': 'PostalAddress',
                  description: 'A physical address.',
                  example: {
                    type: 'PostalAddress',
                    name: 'Home',
                    streetAddress: '1007 Mountain Gate Rd',
                    postOfficeBoxNumber: 'Box 1234',
                    addressRegion: 'New Jersey',
                    addressLocality: 'Gotham City',
                    postalCode: '10010',
                    addressCountry: 'USA',
                    addressCounty: 'Gotham County',
                    addressSubdivision: 'Gotham Heights',
                  },
                  'x-parser-schema-id': '<anonymous-schema-217>',
                },
                'x-parser-schema-id': '<anonymous-schema-216>',
              },
              birthDate: {
                type: 'string',
                format: 'date',
                description: 'date of birth.',
                'x-parser-schema-id': '<anonymous-schema-218>',
              },
              contactPoint: {
                type: 'array',
                'x-range': 'ContactPoint',
                description:
                  'a named point of contact - telephone, email, faxNumber, and/or url for the entity',
                items: {
                  type: 'object',
                  description:
                    'a named point of contact - telephone, email, faxNumber, and/or url for the entity',
                  'x-range': 'ContactPoint',
                  example: {
                    type: 'ContactPoint',
                    name: 'Work',
                    telephone: '800-555-5555',
                    faxNumber: '888-4BA-TMAN',
                    email: 'bruce@example.com',
                    url: 'https://example.com',
                  },
                  'x-parser-schema-id': '<anonymous-schema-220>',
                },
                'x-parser-schema-id': '<anonymous-schema-219>',
              },
              email: {
                type: 'string',
                description: 'Primary email address.',
                example: 'user@example.com',
                'x-parser-schema-id': '<anonymous-schema-221>',
              },
              additionalName: {
                type: 'string',
                description:
                  'any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.',
                example: 'ambassador satch,pops,satchmo',
                'x-parser-schema-id': '<anonymous-schema-222>',
              },
              familyName: {
                type: 'string',
                description: 'Last Name of a person',
                example: 'Wayne',
                'x-parser-schema-id': '<anonymous-schema-223>',
              },
              faxNumber: {
                type: 'string',
                description: 'Primary fax number.',
                example: '(873) 271-4802',
                'x-parser-schema-id': '<anonymous-schema-224>',
              },
              givenName: {
                type: 'string',
                description: 'First Name of a person',
                example: 'Glenn',
                'x-parser-schema-id': '<anonymous-schema-225>',
              },
              honorificPrefix: {
                title: 'honorificPrefix',
                description:
                  "An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.",
                type: 'string',
                example: 'Dr',
                'x-parser-schema-id': '<anonymous-schema-226>',
              },
              honorifixSuffix: {
                title: 'honorificSuffix',
                description:
                  "An honorific title following a person's name like M.D.",
                type: 'string',
                example: 'Esq',
                'x-parser-schema-id': '<anonymous-schema-227>',
              },
              jobTitle: {
                title: 'jobTitle',
                description: 'job tiles associated with the item',
                type: 'array',
                items: {
                  type: 'string',
                  'x-parser-schema-id': '<anonymous-schema-229>',
                },
                example: ['Chief Data Officer', 'Sanitation Engineer'],
                'x-parser-schema-id': '<anonymous-schema-228>',
              },
              knowsLanguage: {
                type: 'array',
                description: 'languages spoken by the person',
                'x-range': 'Language',
                items: {
                  type: 'object',
                  'x-parser-schema-id': '<anonymous-schema-231>',
                },
                example: [
                  {
                    type: 'Language',
                    name: 'English',
                    additionalName: 'en-us',
                  },
                ],
                'x-parser-schema-id': '<anonymous-schema-230>',
              },
              name: {
                type: 'string',
                description: 'Full name of the person.',
                example: 'Bruce Wayne',
                'x-parser-schema-id': '<anonymous-schema-232>',
              },
              telephone: {
                description: 'Primary phone number.',
                type: 'string',
                example: '1-339-041-0306 x2866',
                'x-parser-schema-id': '<anonymous-schema-233>',
              },
              worksFor: {
                type: 'string',
                description: 'Organizations the person works for.',
                example: 'Gotham City Police Department',
                'x-parser-schema-id': '<anonymous-schema-234>',
              },
            },
            'x-parser-schema-id': '<anonymous-schema-212>',
          },
        ],
        'x-parser-schema-id': 'Person',
      },
      {
        properties: {
          type: {
            example: 'Contact',
          },
          identifier: {
            type: 'object',
            description:
              'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.',
            example: {
              salesforceContactID: 'c28834ca-db69-4da8-90ad-75cdc9907298',
            },
          },
          additionalProperty: {
            title: 'additionalProperty',
            type: 'object',
            description: 'additionalProperty are',
            example: {
              supercrmuserid: 1234,
              doNotSell: true,
            },
          },
        },
        'x-parser-schema-id': '<anonymous-schema-235>',
      },
      {
        title: 'Contact',
        description: 'a CRM contact.',
        'x-range': 'Contact',
        properties: {
          type: {
            enum: ['Contact'],
          },
          comment: {
            title: 'comment',
            type: 'array',
            description: 'comments by, for or about the item',
            'x-range': 'Comment',
            items: {
              type: 'object',
            },
            example: [
              {
                type: 'Comment',
                text: 'this is my comment.',
                author: {
                  type: 'Contact',
                  name: 'Bruce Wayne',
                },
                about: {
                  type: 'PropertyListing',
                  id: 'https://example.com/listingid',
                },
                dateCreated: '2019-07-15T05:24:05Z',
                dateModified: '2019-07-15T05:24:05Z',
              },
            ],
          },
          jobTitle: {
            type: 'string',
            example: 'Superhero',
          },
          contactGroup: {
            $id: '#contactGroup',
            title: 'contactGroup',
            description: 'groups the contact is a member of.',
            'x-range': 'Collection',
            type: 'array',
            items: {
              type: 'object',
            },
            example: [
              {
                type: 'Collection',
                name: 'Superheros',
                identifier: {
                  vendoraid: 'xxx',
                },
              },
            ],
          },
          keywords: {
            title: 'keywords',
            description:
              'keywords/tags for grouping and organizing the item in collections',
            type: 'array',
            example: ['Sphere of Influence', 'Past Customer'],
            items: {
              type: 'string',
              'x-parser-schema-id': '<anonymous-schema-354>',
            },
            'x-parser-schema-id': '<anonymous-schema-353>',
          },
          leadOwner: {
            type: 'object',
            description: 'lead owner',
            'x-range': [
              'RealEstateAgent',
              'RealEstateOrganization',
              'RealEstateTeam',
            ],
            example: {
              type: 'RealEstateOrganization',
              name: 'Gotham City Real Estate',
              id: 'https://example.com/profile.card#me',
            },
          },
          leadSource: {
            type: 'object',
            description: 'origin of the lead',
            'x-range': [
              'MobileApplication',
              'RealEstateOffice',
              'RealEstateWebsite',
              'Thing',
            ],
            example: {
              id: 'https://www.zillow.com/homedetails/1044-Siler-Pl-Berkeley-CA-94705/24820985_zpid/',
              type: 'RealEstateWebsite',
              name: 'Zillow',
              url: 'https://zillow.com',
            },
          },
          originatingSystem: {
            type: 'object',
            'x-range': ['Thing'],
            description:
              'the original system where this item was created.  Can be of type Thing or any sub-type.',
            example: {
              type: 'SoftwareApplication',
              name: 'RDesk',
              description: 'User Created.',
              url: 'http://www.rdeskwebsite.com/',
            },
          },
          dateCreated: {
            description: 'The date on which the item was created.',
            type: 'string',
            format: 'date-time',
            'x-parser-schema-id': '<anonymous-schema-203>',
          },
          dateModified: {
            description:
              "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            type: 'string',
            format: 'date-time',
            'x-parser-schema-id': '<anonymous-schema-204>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-236>',
      },
    ],
    'x-parser-schema-id': 'Contact',
  },
  ContactPoint: {
    title: 'ContactPoint',
    description:
      'A point of contact for the entity. By convention in the real estate domain, ContactPoints \nare preferred over telephone, email, and faxNumber so the ContactPoint.name property can be used to label values \nfor example, Work Telephone, Home, as named contactPoint values.\n',
    type: 'object',
    properties: {
      type: {
        description: 'ContactPoint',
        type: 'string',
        enum: ['ContactPoint'],
        'x-parser-schema-id': '<anonymous-schema-237>',
      },
      name: {
        type: 'string',
        description: "a label for the contactPoint, i.e. 'Work', or 'Home'",
        example: 'Work',
        'x-parser-schema-id': '<anonymous-schema-238>',
      },
      telephone: {
        description: 'a telephone number',
        type: 'string',
        example: '1-364-127-9618 x20418',
        'x-parser-schema-id': '<anonymous-schema-239>',
      },
      faxNumber: {
        description: 'a fax number',
        type: 'string',
        example: '834.320.1602',
        'x-parser-schema-id': '<anonymous-schema-240>',
      },
      email: {
        description: 'an email address for the item.',
        type: 'string',
        format: 'email',
        example: 'user@example.com',
        'x-parser-schema-id': '<anonymous-schema-241>',
      },
      url: {
        description: 'primary URL for the item.',
        type: 'string',
        format: 'uri',
        example: 'https://www.facebook.com/hallandoates',
        'x-parser-schema-id': '<anonymous-schema-242>',
      },
    },
    'x-parser-schema-id': 'ContactPoint',
  },
  ContactSummary: {
    title: 'ContactSummary',
    'x-range': 'ContactSummary',
    description: 'minimal schema of a customer for report messages',
    type: 'object',
    properties: {
      type: {
        type: 'string',
        description: '"ContactSummary"',
        enum: ['ContactSummaryReport'],
        'x-parser-schema-id': '<anonymous-schema-243>',
      },
      batchId: {
        type: 'string',
        description: 'BATCH-ID',
        example: '0001',
        'x-parser-schema-id': '<anonymous-schema-244>',
      },
      author: {
        type: 'string',
        format: 'uri',
        description: 'OFFICE-ID',
        example: 'https://{officeid}.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-245>',
      },
      transactionType: {
        type: 'string',
        description: 'TRANS-TYPE',
        'x-range': 'TransactionType',
        example: 'SalesTransactionType',
        'x-parser-schema-id': '<anonymous-schema-246>',
      },
      transactionId: {
        type: 'string',
        description: 'TRANS-NO',
        example: '0000097123',
        'x-parser-schema-id': '<anonymous-schema-247>',
      },
      transactionRole: {
        type: 'string',
        'x-range': ['Buyer', 'Seller', 'BuyerAgent', 'ListingAgent'],
        enum: ['Buyer', 'Seller'],
        'x-parser-schema-id': '<anonymous-schema-248>',
      },
      position: {
        type: 'number',
        description: 'ADJUSTMENT-SEQUENCE',
        example: 1,
        'x-parser-schema-id': '<anonymous-schema-249>',
      },
      assoicatedAgent: {
        type: 'string',
        format: 'uri',
        description: 'ASSOC-ID',
        example: 'https://{userid}.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-250>',
      },
      object: {
        type: 'object',
        description: 'the Customer',
        'x-range': ['Person', 'Organization'],
        properties: {
          type: {
            type: 'string',
            description: 'The item type (Linked-Data @type)',
            'x-parser-schema-id': '<anonymous-schema-252>',
          },
          givenName: {
            type: 'string',
            description: 'First Name of a person',
            example: 'Glenn',
            'x-parser-schema-id': '<anonymous-schema-225>',
          },
          additionalName: {
            type: 'string',
            description: 'CUSTOMER-MIDDLE-INITIAL',
            example: 'M',
            'x-parser-schema-id': '<anonymous-schema-253>',
          },
          familyName: {
            type: 'string',
            description: 'Last Name of a person',
            example: 'Miller',
            maxLength: 50,
            'x-parser-schema-id': '<anonymous-schema-254>',
          },
          gender: {
            type: 'string',
            description: 'gender of the Customer (why?)',
            example: 'M',
            'x-parser-schema-id': '<anonymous-schema-255>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-251>',
      },
    },
    'x-parser-schema-id': 'ContactSummary',
  },
  DigitalDocument: {
    type: 'object',
    title: 'DigitalDocument',
    'x-range': 'DigitalDocument',
    description: 'an electronic file.',
    properties: {
      type: {
        type: 'string',
        enum: ['DigitalDocument'],
        'x-parser-schema-id': '<anonymous-schema-256>',
      },
      id: {
        type: 'string',
        example: 'http://user.example.com/public/logo/archive.zip',
        'x-parser-schema-id': '<anonymous-schema-257>',
      },
      name: {
        type: 'string',
        description: 'document name or title',
        example: 'archive.zip',
        'x-parser-schema-id': '<anonymous-schema-258>',
      },
      encodingFormat: {
        type: 'string',
        description:
          '[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)',
        example: 'application/zip',
        'x-parser-schema-id': '<anonymous-schema-259>',
      },
      about: {
        type: 'object',
        description: 'subject of the Document',
        'x-range': 'Thing',
        example: {
          type: 'RealEstateTransaction',
          identifier: {
            bmsTransactionId: 'xxxx',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-260>',
      },
      url: {
        type: 'string',
        description: 'public URL of the object',
        example: 'https://example.com',
        'x-parser-schema-id': '<anonymous-schema-261>',
      },
    },
    'x-parser-schema-id': 'DigitalDocument',
  },
  EmailMessage: {
    allOf: [
      {
        allOf: [
          {
            type: 'object',
            required: ['type'],
            properties: {
              type: {
                type: 'string',
                description: 'The item type (Linked-Data @type)',
                'x-parser-schema-id': '<anonymous-schema-136>',
              },
            },
            'x-parser-schema-id': 'Thing',
          },
          {
            title: 'CreativeWork',
            description:
              'A creative work, including books, movies, photographs, software programs, etc.',
            properties: {
              type: {
                enum: ['CreativeWork'],
              },
              name: {
                type: 'string',
                description: 'name of the work.',
                example: 'Market Report 1008 Mountain Gate Road',
              },
              description: {
                type: 'string',
                description: 'description of the item',
                example:
                  'Dolor accusamus rerum nemo non omnis. Nam labore pariatur eius omnis sit.',
              },
              creator: {
                description: 'creator / author of the work',
                type: 'string',
                format: 'uri',
                example: 'http://user.example.com/profile/card',
              },
              dateCreated: {
                description:
                  'The date on which the CreativeWork was created or the item was added to a DataFeed.',
                type: 'string',
                format: 'date-time',
              },
              dateModified: {
                description:
                  "The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.",
                type: 'string',
                format: 'date-time',
              },
            },
            'x-parser-schema-id': '<anonymous-schema-263>',
          },
        ],
        'x-parser-schema-id': '<anonymous-schema-262>',
      },
      {
        title: 'EmailMessage',
        'x-range': 'EamilMessage',
        description: 'an email message',
        properties: {
          type: {
            type: 'string',
            description: 'EmailMessage',
            enum: ['EmailMessage'],
            example: 'EmailMessage',
          },
          sender: {
            type: 'string',
            format: 'uri',
            description: 'ref to the sender',
            example: 'http://user.example.com/profile/card',
          },
          messageAttachment: {
            description: 'message attachments',
            'x-range': 'DigitalDocument',
            type: 'array',
            items: {
              type: 'object',
              title: 'DigitalDocument',
              'x-range': 'DigitalDocument',
              description: 'an electronic file.',
              properties: {
                type: {
                  type: 'string',
                  enum: ['DigitalDocument'],
                  'x-parser-schema-id': '<anonymous-schema-256>',
                },
                id: {
                  type: 'string',
                  example: 'http://user.example.com/public/logo/archive.zip',
                  'x-parser-schema-id': '<anonymous-schema-257>',
                },
                name: {
                  type: 'string',
                  description: 'document name or title',
                  example: 'archive.zip',
                  'x-parser-schema-id': '<anonymous-schema-258>',
                },
                encodingFormat: {
                  type: 'string',
                  description:
                    '[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)',
                  example: 'application/zip',
                  'x-parser-schema-id': '<anonymous-schema-259>',
                },
                about: {
                  type: 'object',
                  description: 'subject of the Document',
                  'x-range': 'Thing',
                  example: {
                    type: 'RealEstateTransaction',
                    identifier: {
                      bmsTransactionId: 'xxxx',
                    },
                  },
                  'x-parser-schema-id': '<anonymous-schema-260>',
                },
                url: {
                  type: 'string',
                  description: 'public URL of the object',
                  example: 'https://example.com',
                  'x-parser-schema-id': '<anonymous-schema-261>',
                },
              },
              'x-parser-schema-id': 'DigitalDocument',
            },
          },
          dateSent: {
            type: 'string',
            format: 'date-time',
            description: 'The date/time at which the message was sent',
          },
          dateReceived: {
            type: 'string',
            format: 'date-time',
            description: 'The date/time at which the message was received',
          },
          dateRead: {
            type: 'string',
            format: 'date-time',
            description: 'The date/time at which the message was first viewed',
          },
          toRecipient: {
            type: 'array',
            description: 'direct recipient of the message',
            items: {
              type: 'string',
              example: 'user@example.com',
            },
          },
          ccRecipient: {
            type: 'array',
            description: 'direct recipient of the message',
            items: {
              type: 'string',
              example: 'user@example.com',
            },
          },
          bccRecipient: {
            type: 'array',
            description: 'direct recipient of the message',
            items: {
              type: 'string',
              example: 'user@example.com',
            },
          },
        },
        'x-parser-schema-id': '<anonymous-schema-264>',
      },
    ],
    'x-parser-schema-id': 'EmailMessage',
  },
  Event: {
    type: 'object',
    title: 'Event',
    description: 'An event happening at a certain time and location',
    'x-range': 'Event',
    properties: {
      type: {
        type: 'string',
        description: 'The item type (Linked-Data @type)',
        example: 'Event',
        'x-parser-schema-id': '<anonymous-schema-265>',
      },
      name: {
        type: 'string',
        description: 'name of the event',
        example: 'Property Showing 1007 Mountain Gate Rd',
        'x-parser-schema-id': '<anonymous-schema-266>',
      },
      description: {
        type: 'string',
        description: 'event message content',
        example: 'an example meeting request for 4:00PM to 4:30PM.',
        'x-parser-schema-id': '<anonymous-schema-267>',
      },
      about: {
        type: 'object',
        description: 'a subject of the meeting or event',
        example: {
          type: 'PropertyListing',
          originatingSystemName: 'GOTHAM-MLS',
          originatingSystemKey: '12345',
          url: 'https://{company-website-url}/{path-to-listing}',
          streetAddress: '1007 Mountain Gate Rd',
          addressRegion: 'New Jersey',
          addressLocality: 'Gotham City',
          postalCode: '10010',
          addressCountry: 'USA',
          listingPrice: {
            type: 'PriceSpecification',
            price: 7500000,
            priceCurrency: 'USD',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-268>',
      },
      startDate: {
        description: 'the start date-time (ISO 8601 formated)',
        type: 'string',
        format: 'date-time',
        example: '2019-08-01T16:00Z',
        'x-parser-schema-id': '<anonymous-schema-269>',
      },
      endDate: {
        type: 'string',
        description: 'the end date-time (ISO 8601 formated)',
        format: 'date-time',
        example: '2019-08-01T16:30Z',
        'x-parser-schema-id': '<anonymous-schema-270>',
      },
      organizer: {
        title: 'organizer',
        description: 'the event organizer',
        type: 'object',
        example: {
          type: 'RealEstateAgent',
          name: 'Bruce Wayne',
          id: 'https://batman.example.com/profile/card#me',
        },
        'x-parser-schema-id': '<anonymous-schema-271>',
      },
    },
    'x-parser-schema-id': 'Event',
  },
  GeoCircle: {
    'x-range': 'GeoCircle',
    type: 'object',
    title: 'GeoCircle',
    description: 'a circle with a mid point and radius',
    properties: {
      type: {
        type: 'string',
        enum: ['GeoCircle'],
        'x-parser-schema-id': '<anonymous-schema-272>',
      },
      geoMidpoint: {
        title: 'GeoCoordinates',
        type: 'object',
        description: 'a lat/long point.',
        'x-range': 'GeoCoordinates',
        properties: {
          type: {
            type: 'string',
            description: 'GeoCordinates',
            enum: ['GeoCoordinates'],
            'x-parser-schema-id': '<anonymous-schema-273>',
          },
          longitude: {
            type: 'number',
            description: 'The longitude of a location.',
            'x-title': 'longitude',
            example: 73.98,
            'x-parser-schema-id': '<anonymous-schema-274>',
          },
          latitude: {
            type: 'number',
            description: 'The latitude of a location.',
            'x-title': 'latitude',
            example: 40.75,
            'x-parser-schema-id': '<anonymous-schema-275>',
          },
        },
        'x-parser-schema-id': 'GeoCoordinates',
      },
      geoRadius: {
        title: 'geoRadius',
        type: 'object',
        'x-range': 'QuantitativeValue',
        description:
          'the radius of a geo-shape in meters if unitCode is not indicated',
        example: {
          type: 'QuantitativeValue',
          value: '10',
          unitCode: 'mi',
          unitText: 'miles',
        },
        'x-parser-schema-id': '<anonymous-schema-276>',
      },
    },
    'x-parser-schema-id': 'GeoCircle',
  },
  GeoCoordinates: {
    title: 'GeoCoordinates',
    type: 'object',
    description: 'a lat/long point.',
    'x-range': 'GeoCoordinates',
    properties: {
      type: {
        type: 'string',
        description: 'GeoCordinates',
        enum: ['GeoCoordinates'],
        'x-parser-schema-id': '<anonymous-schema-273>',
      },
      longitude: {
        type: 'number',
        description: 'The longitude of a location.',
        'x-title': 'longitude',
        example: 73.98,
        'x-parser-schema-id': '<anonymous-schema-274>',
      },
      latitude: {
        type: 'number',
        description: 'The latitude of a location.',
        'x-title': 'latitude',
        example: 40.75,
        'x-parser-schema-id': '<anonymous-schema-275>',
      },
    },
    'x-parser-schema-id': 'GeoCoordinates',
  },
  GeoShape: {
    title: 'GeoShape',
    type: 'object',
    'x-range': ['GeoShape', 'GeoCircle'],
    description: 'a geo shape',
    properties: {
      type: {
        type: 'string',
        enum: ['GeoShape', 'GeoCircle'],
        'x-parser-schema-id': '<anonymous-schema-277>',
      },
      geoMidpoint: {
        title: 'GeoCoordinates',
        type: 'object',
        description: 'a lat/long point.',
        'x-range': 'GeoCoordinates',
        properties: {
          type: {
            type: 'string',
            description: 'GeoCordinates',
            enum: ['GeoCoordinates'],
            'x-parser-schema-id': '<anonymous-schema-273>',
          },
          longitude: {
            type: 'number',
            description: 'The longitude of a location.',
            'x-title': 'longitude',
            example: 73.98,
            'x-parser-schema-id': '<anonymous-schema-274>',
          },
          latitude: {
            type: 'number',
            description: 'The latitude of a location.',
            'x-title': 'latitude',
            example: 40.75,
            'x-parser-schema-id': '<anonymous-schema-275>',
          },
        },
        'x-parser-schema-id': 'GeoCoordinates',
      },
      geoRadius: {
        title: 'geoRadius',
        type: 'object',
        'x-range': 'QuantitativeValue',
        description:
          'the radius of a geo-shape in meters if unitCode is not indicated',
        example: {
          type: 'QuantitativeValue',
          value: '10',
          unitCode: 'mi',
          unitText: 'miles',
        },
        'x-parser-schema-id': '<anonymous-schema-276>',
      },
      box: {
        type: 'string',
        title: 'box',
        description:
          'A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character.',
        example: '(33.5697,-117.775),(33.6018,-117.707)',
        'x-parser-schema-id': '<anonymous-schema-278>',
      },
    },
    'x-parser-schema-id': 'GeoShape',
  },
  ImageObject: {
    allOf: [
      {
        title: 'MediaObject',
        description: 'an image, video or document availble for download',
        'x-subclass': ['ImageObject', 'DigitalDocument'],
        allOf: [
          {
            type: 'object',
            required: ['type'],
            properties: {
              type: {
                type: 'string',
                description: 'The item type (Linked-Data @type)',
                'x-parser-schema-id': '<anonymous-schema-136>',
              },
            },
            'x-parser-schema-id': 'Thing',
          },
          {
            properties: {
              type: {
                type: 'string',
                enum: ['MediaObject', 'ImageObject', 'DigitalDocument'],
              },
              id: {
                description: 'the URL to access the item.',
                example: 'http://user.example.com/public/logo/fileName.zip',
                type: 'string',
                format: 'uri',
              },
              name: {
                type: 'string',
                description: 'the file name of the object.',
                example: 'fileName.zip',
              },
              encodingFormat: {
                type: 'string',
                description: 'MIME type',
                example: 'application/zip',
              },
              about: {
                type: 'string',
                format: 'uri',
                description: 'URI to the subject of the image or logo',
                example: 'http://user.example.com/profile/card#me',
              },
              url: {
                type: 'string',
                format: 'uri',
                description: 'URL of the image content',
                example: 'http://user.example.com/public/profile/image.jpg',
              },
            },
            'x-parser-schema-id': '<anonymous-schema-170>',
          },
        ],
        'x-parser-schema-id': 'MediaObject',
      },
      {
        title: 'ImageObject',
        'x-range': 'ImageObject',
        properties: {
          type: {
            enum: ['ImageObject'],
            example: 'ImageObject',
          },
          id: {
            example: 'http://user.example.com/public/logo/image.jpg',
          },
          name: {
            example: 'image.jpg',
          },
          encodingFormat: {
            example: 'image/jpeg',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-171>',
      },
    ],
    'x-parser-schema-id': 'ImageObject',
  },
  Language: {
    title: 'Language',
    type: 'object',
    description: 'a written or spoken Language',
    'x-range': 'Language',
    properties: {
      type: {
        type: 'string',
        description: 'Language',
        enum: ['Language'],
        'x-parser-schema-id': '<anonymous-schema-279>',
      },
      name: {
        type: 'string',
        description: 'the display name of the language',
        example: 'English',
        'x-parser-schema-id': '<anonymous-schema-280>',
      },
      additionalName: {
        type: 'string',
        description: 'BCP 47 language code',
        example: 'en-US',
        'x-parser-schema-id': '<anonymous-schema-281>',
      },
    },
    'x-parser-schema-id': 'Language',
  },
  Lead: {
    title: 'Lead',
    type: 'object',
    'x-range': 'Lead',
    description:
      'a sales opportunity (object) offered by a sender to a recipient.',
    properties: {
      type: {
        type: 'string',
        enum: ['Lead'],
        description: 'Lead',
        'x-parser-schema-id': '<anonymous-schema-282>',
      },
      identifier: {
        type: 'object',
        description:
          'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.',
        example: {
          salesforceContactID: 'c28834ca-db69-4da8-90ad-75cdc9907298',
        },
        'x-parser-schema-id': '<anonymous-schema-201>',
      },
      object: {
        description: 'the lead (Contact)',
        'x-range': ['Contact'],
        type: 'object',
        example: {
          type: 'Contact',
          name: 'Joe Smith',
          telephone: '731-620-9877 x6155',
          email: 'Giuseppe.Lang62@hotmail.com',
        },
        'x-parser-schema-id': '<anonymous-schema-283>',
      },
      recipient: {
        description: 'the lead recipient',
        type: 'string',
        format: 'uri',
        example: 'http://{lead-recipient}.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-284>',
      },
      sender: {
        description: 'the lead provider',
        type: 'string',
        format: 'uri',
        example: 'http://{lead-sender}.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-285>',
      },
      owner: {
        description: 'the original owner of the lead',
        'x-range': ['RealEstateOrganization', 'RealEstateAgent', 'Person'],
        type: 'string',
        format: 'uri',
        example: 'http://{lead-owner}.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-286>',
      },
      dateAccepted: {
        type: 'string',
        description: 'The date/time the item was accepted by the recipient',
        'x-range': 'DateTime',
        example: '2019-11-25T04:23:32.000Z',
        'x-parser-schema-id': '<anonymous-schema-287>',
      },
      dateRejected: {
        type: 'string',
        format: 'date-time',
        description: 'The date/time the item was rejected by the recipient',
        'x-parser-schema-id': '<anonymous-schema-288>',
      },
      dateSent: {
        description: 'the date the lead was sent',
        type: 'string',
        format: 'date-time',
        'x-parser-schema-id': '<anonymous-schema-289>',
      },
      dateReceived: {
        type: 'string',
        description: "The date/time the item was received by it's recipient",
        'x-range': 'DateTime',
        example: '2019-11-25T04:23:32.000Z',
        'x-parser-schema-id': '<anonymous-schema-290>',
      },
      leadSource: {
        description:
          'lead origin, may be a website event or a thing such as a website, zillow, mobile applicaton.',
        'x-range': ['Action', 'RealEstateWebSite', 'MobileApplication'],
        type: 'array',
        items: {
          type: 'object',
          example: {
            type: 'AskAction',
            object: {
              type: 'Question',
              text: "Help me I'm trapped inside documentation.",
            },
          },
          'x-parser-schema-id': '<anonymous-schema-292>',
        },
        'x-parser-schema-id': '<anonymous-schema-291>',
      },
    },
    'x-parser-schema-id': 'Lead',
  },
  LogAction: {
    title: 'LogAction',
    type: 'object',
    description:
      'a LogAction should be produced at the end of service execution',
    required: ['type', 'actionStatus'],
    properties: {
      type: {
        type: 'string',
        description: 'the action type (LogAction)',
        'x-parser-schema-id': '<anonymous-schema-293>',
      },
      actionStatus: {
        type: 'string',
        description: 'CompletedActionStatus | FailedActionStatus',
        enum: ['CompletedActionStatus', 'FailedActionStatus'],
        'x-parser-schema-id': '<anonymous-schema-294>',
      },
      object: {
        type: 'object',
        description: 'the data input',
        example: {
          topic: 'realestate/contact#add',
          data: {
            type: 'AddAction',
            object: {
              name: 'Bob Smith',
              email: 'bob@example.com',
            },
          },
        },
        'x-parser-schema-id': '<anonymous-schema-295>',
      },
      result: {
        type: 'object',
        description: 'the output of a sucessful execution',
        'x-parser-schema-id': '<anonymous-schema-296>',
      },
      error: {
        type: 'object',
        description: 'details the error of an unsucessful execution',
        properties: {
          message: {
            description: 'the error message',
            type: 'string',
            example: 'sorry dave',
            'x-parser-schema-id': '<anonymous-schema-298>',
          },
          stack: {
            description: 'the error stack',
            type: 'string',
            'x-parser-schema-id': '<anonymous-schema-299>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-297>',
      },
    },
    'x-parser-schema-id': 'LogAction',
  },
  ListingOffer: {
    allOf: [
      {
        type: 'object',
        required: ['type'],
        properties: {
          type: {
            type: 'string',
            description: 'The item type (Linked-Data @type)',
            'x-parser-schema-id': '<anonymous-schema-136>',
          },
        },
        'x-parser-schema-id': 'Thing',
      },
      {
        description: 'an offer is made to buy a PropertyListing',
        'x-range': 'ListingOffer',
        required: ['type', 'agent', 'object', 'recipient', 'offerPrice'],
        properties: {
          type: {
            enum: ['ListingOffer'],
          },
          agent: {
            description: 'the Person or Contact who makes the offer',
          },
          offerPrice: {
            description: 'the offer price or range',
            type: 'object',
            title: 'PriceSpecification',
            'x-range': 'PriceSpecification',
            properties: {
              type: {
                type: 'string',
                description: 'PriceSpecification',
                enum: ['PriceSpecification'],
                'x-parser-schema-id': '<anonymous-schema-368>',
              },
              minPrice: {
                type: 'number',
                description: 'the low price offered if price is a range.',
                example: 75000,
                'x-parser-schema-id': '<anonymous-schema-369>',
              },
              maxPrice: {
                type: 'number',
                description: 'the high price offered if price is a range.',
                example: 100000,
                'x-parser-schema-id': '<anonymous-schema-370>',
              },
              price: {
                type: 'number',
                description: 'the offer price.',
                example: 75000,
                'x-parser-schema-id': '<anonymous-schema-371>',
              },
              priceCurrency: {
                type: 'string',
                description: 'use ISO4217',
                example: 'USD',
                'x-parser-schema-id': '<anonymous-schema-372>',
              },
            },
          },
          object: {
            type: 'object',
            'x-range': ['Comment', 'Question'],
            example: {
              type: 'Comment',
              text: 'take it or leave it.',
            },
          },
          propertyListing: {
            type: 'object',
            description: 'the listing on which the offer is made.',
            example: {
              type: 'PropertyListing',
              originatingSystemName: 'GOTHAM-MLS',
              originatingSystemKey: '12345',
              url: 'https://{company-website-url}/{path-to-listing}',
              streetAddress: '1007 Mountain Gate Rd',
              addressRegion: 'New Jersey',
              addressLocality: 'Gotham City',
              postalCode: '10010',
              addressCountry: 'USA',
              listingPrice: {
                type: 'PriceSpecification',
                price: 7500000,
                priceCurrency: 'USD',
              },
            },
          },
          recipient: {
            description: 'listing agent or offer recipient',
            type: 'object',
            'x-range': ['RealEstateAgent', 'RealEstateOrganization'],
            example: {
              type: 'RealEstateAgent',
              name: 'Randy RealEstateAgent',
              id: 'https://{agentid}.example.com/profile/card#me',
            },
          },
        },
        'x-parser-schema-id': '<anonymous-schema-300>',
      },
    ],
    'x-parser-schema-id': 'ListingOffer',
  },
  ListingReport: {
    title: 'ListingReport',
    description: 'summary report of listing inventory count',
    'x-range': 'ListingReport',
    type: 'object',
    properties: {
      type: {
        type: 'string',
        description: 'RECORD-TYPE',
        example: 'ListingReport',
        'x-parser-schema-id': '<anonymous-schema-301>',
      },
      batchId: {
        type: 'string',
        description: 'BATCH-ID',
        'x-parser-schema-id': '<anonymous-schema-302>',
      },
      reportingOfficeId: {
        type: 'string',
        format: 'uri',
        description: 'OFFICE-ID',
        example: 'https://{officeid}.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-303>',
      },
      dateCreated: {
        type: 'string',
        format: 'date-time',
        description: 'YEAR-MONTH',
        'x-parser-schema-id': '<anonymous-schema-304>',
      },
      listingsAddedCount: {
        type: 'number',
        description: 'LISTINGS-TAKEN',
        'x-parser-schema-id': '<anonymous-schema-305>',
      },
      totalListingsCount: {
        type: 'number',
        description: 'LISTINGS-INVENTORY',
        'x-parser-schema-id': '<anonymous-schema-306>',
      },
    },
    'x-parser-schema-id': 'ListingReport',
  },
  MarketingProgram: {
    allOf: [
      {
        type: 'object',
        required: ['type'],
        properties: {
          type: {
            type: 'string',
            description: 'The item type (Linked-Data @type)',
            'x-parser-schema-id': '<anonymous-schema-136>',
          },
        },
        'x-parser-schema-id': 'Thing',
      },
      {
        title: 'MarketingProgram',
        description:
          'A collection of pre-defined activities which take place over a period of time or in a regular, ongoing schedule.',
        'x-subClassOf': 'Organization',
        properties: {
          type: {
            enum: ['MarketingProgram'],
          },
          name: {
            type: 'string',
            description: 'name of the item',
            example: 'Market Activity Report 508 Homewood Ave',
          },
          identifier: {
            type: 'object',
            description:
              'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.',
            example: {
              salesforceContactID: 'c28834ca-db69-4da8-90ad-75cdc9907298',
            },
            'x-parser-schema-id': '<anonymous-schema-201>',
          },
          member: {
            description: 'array of program memberships',
            'x-range': 'ProgramMembership',
            type: 'array',
            items: {
              allOf: [
                {
                  title: 'OrganizationRole',
                  type: 'object',
                  description:
                    'describes a role played by a member and a group or organization.',
                  properties: {
                    type: {
                      type: 'string',
                      description:
                        'a role played by the member in the memberOf group',
                      enum: ['OrganizationRole'],
                      'x-parser-schema-id': '<anonymous-schema-308>',
                    },
                    roleName: {
                      type: 'string',
                      description: 'the role name',
                      example: 'Owner',
                      'x-parser-schema-id': '<anonymous-schema-309>',
                    },
                    memberOf: {
                      description:
                        'the org or group where the role is performed',
                      type: 'object',
                      example: {
                        type: 'RealEstateOrganization',
                        id: 'http://orgid.example.com/profile/card#me',
                      },
                      'x-parser-schema-id': '<anonymous-schema-310>',
                    },
                    member: {
                      description: 'member object or id',
                      type: 'string',
                      format: 'uri',
                      example: 'https://memberid.example.com/profile/card#me',
                      'x-parser-schema-id': '<anonymous-schema-311>',
                    },
                    startDate: {
                      type: 'string',
                      format: 'date-time',
                      description: 'date the member began performing this role',
                      'x-parser-schema-id': '<anonymous-schema-312>',
                    },
                    endDate: {
                      type: 'string',
                      format: 'date-time',
                      description:
                        'date the member stopped performing the role',
                      'x-parser-schema-id': '<anonymous-schema-313>',
                    },
                  },
                  'x-parser-schema-id': 'OrganizationRole',
                },
                {
                  title: 'ProgramMembership',
                  description:
                    'describes membership relation between a member (Person) and a MarketingProgram',
                  properties: {
                    type: {
                      enum: ['ProgramMembership'],
                    },
                    member: {
                      type: 'object',
                      'x-range': 'Contact',
                      description: 'a contact',
                      example: {
                        type: 'Contact',
                        name: 'Bruce Wayne',
                        givenName: 'Bruce',
                        familyName: 'Wayne',
                        jobTitle: 'Batman',
                        contactPoint: [
                          {
                            type: 'ContactPoint',
                            name: 'Mobile Phone',
                            telephone: '888.GET-BATMAN',
                          },
                          {
                            type: 'ContactPoint',
                            name: 'Email',
                            email: 'batman@example.com',
                          },
                        ],
                        address: [
                          {
                            type: 'PostalAddress',
                            name: 'Home',
                            streetAddress: '1007 Mountain Gate Rd',
                            postOfficeBoxNumber: 'Box 1234',
                            addressRegion: 'New Jersey',
                            addressLocality: 'Gotham City',
                            postalCode: '10010',
                            addressCountry: 'USA',
                          },
                        ],
                        birthDate: '2019-07-09',
                        leadOwner: {
                          type: 'RealEstateOrganization',
                          id: 'https://{lead-owner}.example.com/profile/card#me',
                        },
                        leadSource: {
                          type: 'RealEstateWebsite',
                          url: 'https://agentwebsite.example.com',
                        },
                      },
                    },
                    memberOf: {
                      'x-range': 'MarketingProgram',
                    },
                  },
                  'x-parser-schema-id': '<anonymous-schema-385>',
                },
              ],
              'x-parser-schema-id': 'ProgramMembership',
            },
          },
          creator: {
            description: 'creator / author of the item',
            type: 'string',
            format: 'uri',
            example: 'http://{user}.example.com/profile/card#me',
          },
          dateCreated: {
            description: 'The date on which the item was created.',
            type: 'string',
            format: 'date-time',
            'x-parser-schema-id': '<anonymous-schema-203>',
          },
          dateModified: {
            description:
              "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
            type: 'string',
            format: 'date-time',
            'x-parser-schema-id': '<anonymous-schema-204>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-307>',
      },
    ],
    'x-parser-schema-id': 'MarketingProgram',
  },
  MediaObject: {
    title: 'MediaObject',
    description: 'an image, video or document availble for download',
    'x-subclass': ['ImageObject', 'DigitalDocument'],
    allOf: [
      {
        type: 'object',
        required: ['type'],
        properties: {
          type: {
            type: 'string',
            description: 'The item type (Linked-Data @type)',
            'x-parser-schema-id': '<anonymous-schema-136>',
          },
        },
        'x-parser-schema-id': 'Thing',
      },
      {
        properties: {
          type: {
            type: 'string',
            enum: ['MediaObject', 'ImageObject', 'DigitalDocument'],
          },
          id: {
            description: 'the URL to access the item.',
            example: 'http://user.example.com/public/logo/fileName.zip',
            type: 'string',
            format: 'uri',
          },
          name: {
            type: 'string',
            description: 'the file name of the object.',
            example: 'fileName.zip',
          },
          encodingFormat: {
            type: 'string',
            description: 'MIME type',
            example: 'application/zip',
          },
          about: {
            type: 'string',
            format: 'uri',
            description: 'URI to the subject of the image or logo',
            example: 'http://user.example.com/profile/card#me',
          },
          url: {
            type: 'string',
            format: 'uri',
            description: 'URL of the image content',
            example: 'http://user.example.com/public/profile/image.jpg',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-170>',
      },
    ],
    'x-parser-schema-id': 'MediaObject',
  },
  MLSMembership: {
    allOf: [
      {
        title: 'OrganizationRole',
        type: 'object',
        description:
          'describes a role played by a member and a group or organization.',
        properties: {
          type: {
            type: 'string',
            description: 'a role played by the member in the memberOf group',
            enum: ['OrganizationRole'],
            'x-parser-schema-id': '<anonymous-schema-308>',
          },
          roleName: {
            type: 'string',
            description: 'the role name',
            example: 'Owner',
            'x-parser-schema-id': '<anonymous-schema-309>',
          },
          memberOf: {
            description: 'the org or group where the role is performed',
            type: 'object',
            example: {
              type: 'RealEstateOrganization',
              id: 'http://orgid.example.com/profile/card#me',
            },
            'x-parser-schema-id': '<anonymous-schema-310>',
          },
          member: {
            description: 'member object or id',
            type: 'string',
            format: 'uri',
            example: 'https://memberid.example.com/profile/card#me',
            'x-parser-schema-id': '<anonymous-schema-311>',
          },
          startDate: {
            type: 'string',
            format: 'date-time',
            description: 'date the member began performing this role',
            'x-parser-schema-id': '<anonymous-schema-312>',
          },
          endDate: {
            type: 'string',
            format: 'date-time',
            description: 'date the member stopped performing the role',
            'x-parser-schema-id': '<anonymous-schema-313>',
          },
        },
        'x-parser-schema-id': 'OrganizationRole',
      },
      {
        type: 'object',
        title: 'MLSMembership',
        description: 'a membership relationship',
        properties: {
          type: {
            type: 'string',
            description: 'an MLS member relationship',
            enum: ['MLSMembership'],
            example: 'MLSMembership',
            'x-parser-schema-id': '<anonymous-schema-315>',
          },
          roleName: {
            type: 'string',
            example: 'MLSMember',
            'x-parser-schema-id': '<anonymous-schema-316>',
          },
          memberOf: {
            type: 'object',
            'x-range': 'MultipleListingService',
            example: {
              type: 'MultipleListingService',
              name: 'GreatScottMLS',
            },
            'x-parser-schema-id': '<anonymous-schema-317>',
          },
          member: {
            type: 'string',
            format: 'uri',
            example: 'https://{agent}.example.com/profile/card#me',
            'x-parser-schema-id': '<anonymous-schema-318>',
          },
          memberId: {
            type: 'string',
            description: "the user's MLSID",
            example: 'memberid123',
            'x-parser-schema-id': '<anonymous-schema-319>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-314>',
      },
    ],
    'x-parser-schema-id': 'MLSMembership',
  },
  MonetaryAmount: {
    type: 'object',
    title: 'MonetaryAmount',
    'x-range': 'MonetaryAmount',
    required: ['type', 'value', 'currency'],
    properties: {
      type: {
        type: 'string',
        description: 'MonetaryAmount',
        enum: ['MonetaryAmount'],
        'x-parser-schema-id': '<anonymous-schema-320>',
      },
      minValue: {
        type: 'number',
        description: 'the lower limit of the range',
        example: 2400000,
        'x-parser-schema-id': '<anonymous-schema-321>',
      },
      maxValue: {
        type: 'number',
        description: 'the upper limit of the range',
        example: 3200000,
        'x-parser-schema-id': '<anonymous-schema-322>',
      },
      value: {
        type: 'number',
        description: 'the actual or expected value',
        example: 2700000,
        'x-parser-schema-id': '<anonymous-schema-323>',
      },
      currency: {
        type: 'string',
        description: 'use ISO4217 country codes',
        maxLength: 3,
        example: 'USD',
        'x-parser-schema-id': '<anonymous-schema-324>',
      },
    },
    'x-parser-schema-id': 'MonetaryAmount',
  },
  MultipleListingService: {
    allOf: [
      {
        allOf: [
          {
            type: 'object',
            required: ['type'],
            properties: {
              type: {
                type: 'string',
                description: 'The item type (Linked-Data @type)',
                'x-parser-schema-id': '<anonymous-schema-136>',
              },
            },
            'x-parser-schema-id': 'Thing',
          },
          {
            'x-kind': 'Organization',
            'x-parser-schema-id': '<anonymous-schema-325>',
          },
          {
            'x-hasSubclass': [
              'RealEstateOrganization',
              'RealEstateOffice',
              'RealEstateAgent',
            ],
            'x-parser-schema-id': '<anonymous-schema-326>',
          },
          {
            'x-subClassOf': ['https://schema.org/Organization'],
            properties: {
              address: {
                type: 'object',
                'x-range': 'PostalAddress',
                description: 'A physical address.',
                example: {
                  type: 'PostalAddress',
                  name: 'Home',
                  streetAddress: '1007 Mountain Gate Rd',
                  postOfficeBoxNumber: 'Box 1234',
                  addressRegion: 'New Jersey',
                  addressLocality: 'Gotham City',
                  postalCode: '10010',
                  addressCountry: 'USA',
                  addressCounty: 'Gotham County',
                  addressSubdivision: 'Gotham Heights',
                },
                'x-parser-schema-id': '<anonymous-schema-217>',
              },
              availableLanguage: {
                title: 'availableLanguage',
                type: 'array',
                description:
                  'Please use one of the language codes from the IETF BCP 47 standard.',
                'x-range': 'Language',
                items: {
                  title: 'Language',
                  type: 'object',
                  description: 'a written or spoken Language',
                  'x-range': 'Language',
                  properties: {
                    type: {
                      type: 'string',
                      description: 'Language',
                      enum: ['Language'],
                      'x-parser-schema-id': '<anonymous-schema-279>',
                    },
                    name: {
                      type: 'string',
                      description: 'the display name of the language',
                      example: 'English',
                      'x-parser-schema-id': '<anonymous-schema-280>',
                    },
                    additionalName: {
                      type: 'string',
                      description: 'BCP 47 language code',
                      example: 'en-US',
                      'x-parser-schema-id': '<anonymous-schema-281>',
                    },
                  },
                  'x-parser-schema-id': 'Language',
                },
              },
              branchCode: {
                description:
                  'A short textual code that uniquely identifies a place of business.',
                example:
                  'for BHHS profile events, see additionalProperty.OfficeId',
                type: 'string',
              },
              certification: {
                'x-range': 'Certification',
                description:
                  'certifications granted to a person or organization',
                type: 'array',
                items: {
                  type: 'object',
                  example: {
                    type: 'Certification',
                    name: 'E-Agent Certified',
                    validFrom: '2019-06-13T07:00:00.000Z',
                    additionalProperty: {
                      ceritificationTypeId:
                        '86afafd3-ac25-4a89-9a6e-bebb3753c4b2',
                    },
                  },
                },
              },
              contactPoint: {
                type: 'object',
                description:
                  'a named point of contact - telephone, email, faxNumber, and/or url for the entity',
                'x-range': 'ContactPoint',
                example: {
                  type: 'ContactPoint',
                  name: 'Work',
                  telephone: '800-555-5555',
                  faxNumber: '888-4BA-TMAN',
                  email: 'bruce@example.com',
                  url: 'https://example.com',
                },
                'x-parser-schema-id': '<anonymous-schema-220>',
              },
              email: {
                type: 'string',
                format: 'email',
                description: 'Primary email address.',
                example: 'user@example.com',
                'x-parser-schema-id': '<anonymous-schema-553>',
              },
              faxNumber: {
                type: 'string',
                description: 'Primary fax number.',
                example: '(873) 271-4802',
                'x-parser-schema-id': '<anonymous-schema-224>',
              },
              image: {
                description:
                  'an ImageObject or URI reference to an image of the entity on the web.',
                title: 'image',
                type: 'array',
                'x-range': ['ImageObject'],
                items: [
                  {
                    type: 'object',
                    allOf: [
                      {
                        title: 'MediaObject',
                        description:
                          'an image, video or document availble for download',
                        'x-subclass': ['ImageObject', 'DigitalDocument'],
                        allOf: [
                          {
                            type: 'object',
                            required: ['type'],
                            properties: {
                              type: {
                                type: 'string',
                                description:
                                  'The item type (Linked-Data @type)',
                                'x-parser-schema-id': '<anonymous-schema-136>',
                              },
                            },
                            'x-parser-schema-id': 'Thing',
                          },
                          {
                            properties: {
                              type: {
                                type: 'string',
                                enum: [
                                  'MediaObject',
                                  'ImageObject',
                                  'DigitalDocument',
                                ],
                              },
                              id: {
                                description: 'the URL to access the item.',
                                example:
                                  'http://user.example.com/public/logo/fileName.zip',
                                type: 'string',
                                format: 'uri',
                              },
                              name: {
                                type: 'string',
                                description: 'the file name of the object.',
                                example: 'fileName.zip',
                              },
                              encodingFormat: {
                                type: 'string',
                                description: 'MIME type',
                                example: 'application/zip',
                              },
                              about: {
                                type: 'string',
                                format: 'uri',
                                description:
                                  'URI to the subject of the image or logo',
                                example:
                                  'http://user.example.com/profile/card#me',
                              },
                              url: {
                                type: 'string',
                                format: 'uri',
                                description: 'URL of the image content',
                                example:
                                  'http://user.example.com/public/profile/image.jpg',
                              },
                            },
                            'x-parser-schema-id': '<anonymous-schema-170>',
                          },
                        ],
                        'x-parser-schema-id': 'MediaObject',
                      },
                      {
                        title: 'ImageObject',
                        'x-range': 'ImageObject',
                        properties: {
                          type: {
                            enum: ['ImageObject'],
                            example: 'ImageObject',
                          },
                          id: {
                            example:
                              'http://user.example.com/public/logo/image.jpg',
                          },
                          name: {
                            example: 'image.jpg',
                          },
                          encodingFormat: {
                            example: 'image/jpeg',
                          },
                        },
                        'x-parser-schema-id': '<anonymous-schema-171>',
                      },
                    ],
                    'x-parser-schema-id': '<anonymous-schema-169>',
                  },
                ],
              },
              logo: {
                description: 'a logo associated with the organization.',
                items: {
                  allOf: [
                    {
                      type: 'object',
                      title: 'DigitalDocument',
                      'x-range': 'DigitalDocument',
                      description: 'an electronic file.',
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['DigitalDocument'],
                          'x-parser-schema-id': '<anonymous-schema-256>',
                        },
                        id: {
                          type: 'string',
                          example:
                            'http://user.example.com/public/logo/archive.zip',
                          'x-parser-schema-id': '<anonymous-schema-257>',
                        },
                        name: {
                          type: 'string',
                          description: 'document name or title',
                          example: 'archive.zip',
                          'x-parser-schema-id': '<anonymous-schema-258>',
                        },
                        encodingFormat: {
                          type: 'string',
                          description:
                            '[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)',
                          example: 'application/zip',
                          'x-parser-schema-id': '<anonymous-schema-259>',
                        },
                        about: {
                          type: 'object',
                          description: 'subject of the Document',
                          'x-range': 'Thing',
                          example: {
                            type: 'RealEstateTransaction',
                            identifier: {
                              bmsTransactionId: 'xxxx',
                            },
                          },
                          'x-parser-schema-id': '<anonymous-schema-260>',
                        },
                        url: {
                          type: 'string',
                          description: 'public URL of the object',
                          example: 'https://example.com',
                          'x-parser-schema-id': '<anonymous-schema-261>',
                        },
                      },
                      'x-parser-schema-id': 'DigitalDocument',
                    },
                    {
                      description: 'an associated logo',
                      type: 'object',
                    },
                  ],
                  type: 'object',
                },
                type: 'array',
                'x-range': ['ImageObject', 'DigitalDocument'],
              },
              name: {
                description: 'Name or DBA.',
                type: 'string',
              },
              parentOrganization: {
                items: {
                  format: 'uri',
                  type: 'string',
                },
                type: 'array',
              },
              subOrganization: {
                description: 'a child organization',
                'x-range': ['RealEstateOrganization'],
                type: 'array',
                items: {
                  type: 'string',
                  format: 'uri',
                  example: 'http://org.example.com/profile/card#me',
                },
              },
              telephone: {
                type: 'string',
                description: 'Primary phone number.',
                example: '+15558675309',
                'x-parser-schema-id': '<anonymous-schema-554>',
              },
              type: {
                enum: ['Organization'],
                type: 'string',
              },
              url: {
                description: 'primary website/url for the entity.',
                format: 'uri',
                type: 'string',
              },
            },
            'x-parser-schema-id': '<anonymous-schema-327>',
          },
        ],
        'x-parser-schema-id': 'Organization',
      },
      {
        title: 'MultipleListingService',
        'x-hideProps': true,
        'x-subClassOf': 'Organization',
        type: 'object',
        description:
          "A multiple listing service (MLS, also multiple listing system or multiple listings service) is a suite of services that real estate brokers use to establish contractual offers of compensation (among brokers) and accumulate and disseminate information to enable appraisals. A multiple listing service's database and software is used by real estate brokers in real estate (or aircraft broker[1] in other industries for example), representing sellers under a listing contract to widely share information about properties with other brokers who may represent potential buyers or wish to work with a seller's broker in finding a buyer for the property or asset. The listing data stored in a multiple listing service's database is the proprietary information of the broker who has obtained a listing agreement with a property's seller.\n",
        properties: {
          type: {
            enum: ['MultipleListingService'],
            'x-parser-schema-id': '<anonymous-schema-329>',
          },
          identifier: {
            type: 'object',
            description:
              'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.',
            example: {
              salesforceContactID: 'c28834ca-db69-4da8-90ad-75cdc9907298',
            },
            'x-parser-schema-id': '<anonymous-schema-201>',
          },
        },
        example: {
          type: 'MultipleListingService',
          name: 'MLSListings',
          identifier: {
            resoouid: 'M00000101',
            bhhsmlsid: 'xxxxxx',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-328>',
      },
    ],
    'x-parser-schema-id': 'MultipleListingService',
  },
  Organization: {
    allOf: [
      {
        type: 'object',
        required: ['type'],
        properties: {
          type: {
            type: 'string',
            description: 'The item type (Linked-Data @type)',
            'x-parser-schema-id': '<anonymous-schema-136>',
          },
        },
        'x-parser-schema-id': 'Thing',
      },
      {
        'x-kind': 'Organization',
        'x-parser-schema-id': '<anonymous-schema-325>',
      },
      {
        'x-hasSubclass': [
          'RealEstateOrganization',
          'RealEstateOffice',
          'RealEstateAgent',
        ],
        'x-parser-schema-id': '<anonymous-schema-326>',
      },
      {
        'x-subClassOf': ['https://schema.org/Organization'],
        properties: {
          address: {
            type: 'object',
            'x-range': 'PostalAddress',
            description: 'A physical address.',
            example: {
              type: 'PostalAddress',
              name: 'Home',
              streetAddress: '1007 Mountain Gate Rd',
              postOfficeBoxNumber: 'Box 1234',
              addressRegion: 'New Jersey',
              addressLocality: 'Gotham City',
              postalCode: '10010',
              addressCountry: 'USA',
              addressCounty: 'Gotham County',
              addressSubdivision: 'Gotham Heights',
            },
            'x-parser-schema-id': '<anonymous-schema-217>',
          },
          availableLanguage: {
            title: 'availableLanguage',
            type: 'array',
            description:
              'Please use one of the language codes from the IETF BCP 47 standard.',
            'x-range': 'Language',
            items: {
              title: 'Language',
              type: 'object',
              description: 'a written or spoken Language',
              'x-range': 'Language',
              properties: {
                type: {
                  type: 'string',
                  description: 'Language',
                  enum: ['Language'],
                  'x-parser-schema-id': '<anonymous-schema-279>',
                },
                name: {
                  type: 'string',
                  description: 'the display name of the language',
                  example: 'English',
                  'x-parser-schema-id': '<anonymous-schema-280>',
                },
                additionalName: {
                  type: 'string',
                  description: 'BCP 47 language code',
                  example: 'en-US',
                  'x-parser-schema-id': '<anonymous-schema-281>',
                },
              },
              'x-parser-schema-id': 'Language',
            },
          },
          branchCode: {
            description:
              'A short textual code that uniquely identifies a place of business.',
            example: 'for BHHS profile events, see additionalProperty.OfficeId',
            type: 'string',
          },
          certification: {
            'x-range': 'Certification',
            description: 'certifications granted to a person or organization',
            type: 'array',
            items: {
              type: 'object',
              example: {
                type: 'Certification',
                name: 'E-Agent Certified',
                validFrom: '2019-06-13T07:00:00.000Z',
                additionalProperty: {
                  ceritificationTypeId: '86afafd3-ac25-4a89-9a6e-bebb3753c4b2',
                },
              },
            },
          },
          contactPoint: {
            type: 'object',
            description:
              'a named point of contact - telephone, email, faxNumber, and/or url for the entity',
            'x-range': 'ContactPoint',
            example: {
              type: 'ContactPoint',
              name: 'Work',
              telephone: '800-555-5555',
              faxNumber: '888-4BA-TMAN',
              email: 'bruce@example.com',
              url: 'https://example.com',
            },
            'x-parser-schema-id': '<anonymous-schema-220>',
          },
          email: {
            type: 'string',
            format: 'email',
            description: 'Primary email address.',
            example: 'user@example.com',
            'x-parser-schema-id': '<anonymous-schema-553>',
          },
          faxNumber: {
            type: 'string',
            description: 'Primary fax number.',
            example: '(873) 271-4802',
            'x-parser-schema-id': '<anonymous-schema-224>',
          },
          image: {
            description:
              'an ImageObject or URI reference to an image of the entity on the web.',
            title: 'image',
            type: 'array',
            'x-range': ['ImageObject'],
            items: [
              {
                type: 'object',
                allOf: [
                  {
                    title: 'MediaObject',
                    description:
                      'an image, video or document availble for download',
                    'x-subclass': ['ImageObject', 'DigitalDocument'],
                    allOf: [
                      {
                        type: 'object',
                        required: ['type'],
                        properties: {
                          type: {
                            type: 'string',
                            description: 'The item type (Linked-Data @type)',
                            'x-parser-schema-id': '<anonymous-schema-136>',
                          },
                        },
                        'x-parser-schema-id': 'Thing',
                      },
                      {
                        properties: {
                          type: {
                            type: 'string',
                            enum: [
                              'MediaObject',
                              'ImageObject',
                              'DigitalDocument',
                            ],
                          },
                          id: {
                            description: 'the URL to access the item.',
                            example:
                              'http://user.example.com/public/logo/fileName.zip',
                            type: 'string',
                            format: 'uri',
                          },
                          name: {
                            type: 'string',
                            description: 'the file name of the object.',
                            example: 'fileName.zip',
                          },
                          encodingFormat: {
                            type: 'string',
                            description: 'MIME type',
                            example: 'application/zip',
                          },
                          about: {
                            type: 'string',
                            format: 'uri',
                            description:
                              'URI to the subject of the image or logo',
                            example: 'http://user.example.com/profile/card#me',
                          },
                          url: {
                            type: 'string',
                            format: 'uri',
                            description: 'URL of the image content',
                            example:
                              'http://user.example.com/public/profile/image.jpg',
                          },
                        },
                        'x-parser-schema-id': '<anonymous-schema-170>',
                      },
                    ],
                    'x-parser-schema-id': 'MediaObject',
                  },
                  {
                    title: 'ImageObject',
                    'x-range': 'ImageObject',
                    properties: {
                      type: {
                        enum: ['ImageObject'],
                        example: 'ImageObject',
                      },
                      id: {
                        example:
                          'http://user.example.com/public/logo/image.jpg',
                      },
                      name: {
                        example: 'image.jpg',
                      },
                      encodingFormat: {
                        example: 'image/jpeg',
                      },
                    },
                    'x-parser-schema-id': '<anonymous-schema-171>',
                  },
                ],
                'x-parser-schema-id': '<anonymous-schema-169>',
              },
            ],
          },
          logo: {
            description: 'a logo associated with the organization.',
            items: {
              allOf: [
                {
                  type: 'object',
                  title: 'DigitalDocument',
                  'x-range': 'DigitalDocument',
                  description: 'an electronic file.',
                  properties: {
                    type: {
                      type: 'string',
                      enum: ['DigitalDocument'],
                      'x-parser-schema-id': '<anonymous-schema-256>',
                    },
                    id: {
                      type: 'string',
                      example:
                        'http://user.example.com/public/logo/archive.zip',
                      'x-parser-schema-id': '<anonymous-schema-257>',
                    },
                    name: {
                      type: 'string',
                      description: 'document name or title',
                      example: 'archive.zip',
                      'x-parser-schema-id': '<anonymous-schema-258>',
                    },
                    encodingFormat: {
                      type: 'string',
                      description:
                        '[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)',
                      example: 'application/zip',
                      'x-parser-schema-id': '<anonymous-schema-259>',
                    },
                    about: {
                      type: 'object',
                      description: 'subject of the Document',
                      'x-range': 'Thing',
                      example: {
                        type: 'RealEstateTransaction',
                        identifier: {
                          bmsTransactionId: 'xxxx',
                        },
                      },
                      'x-parser-schema-id': '<anonymous-schema-260>',
                    },
                    url: {
                      type: 'string',
                      description: 'public URL of the object',
                      example: 'https://example.com',
                      'x-parser-schema-id': '<anonymous-schema-261>',
                    },
                  },
                  'x-parser-schema-id': 'DigitalDocument',
                },
                {
                  description: 'an associated logo',
                  type: 'object',
                },
              ],
              type: 'object',
            },
            type: 'array',
            'x-range': ['ImageObject', 'DigitalDocument'],
          },
          name: {
            description: 'Name or DBA.',
            type: 'string',
          },
          parentOrganization: {
            items: {
              format: 'uri',
              type: 'string',
            },
            type: 'array',
          },
          subOrganization: {
            description: 'a child organization',
            'x-range': ['RealEstateOrganization'],
            type: 'array',
            items: {
              type: 'string',
              format: 'uri',
              example: 'http://org.example.com/profile/card#me',
            },
          },
          telephone: {
            type: 'string',
            description: 'Primary phone number.',
            example: '+15558675309',
            'x-parser-schema-id': '<anonymous-schema-554>',
          },
          type: {
            enum: ['Organization'],
            type: 'string',
          },
          url: {
            description: 'primary website/url for the entity.',
            format: 'uri',
            type: 'string',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-327>',
      },
    ],
    'x-parser-schema-id': 'Organization',
  },
  OrganizationRole: {
    title: 'OrganizationRole',
    type: 'object',
    description:
      'describes a role played by a member and a group or organization.',
    properties: {
      type: {
        type: 'string',
        description: 'a role played by the member in the memberOf group',
        enum: ['OrganizationRole'],
        'x-parser-schema-id': '<anonymous-schema-308>',
      },
      roleName: {
        type: 'string',
        description: 'the role name',
        example: 'Owner',
        'x-parser-schema-id': '<anonymous-schema-309>',
      },
      memberOf: {
        description: 'the org or group where the role is performed',
        type: 'object',
        example: {
          type: 'RealEstateOrganization',
          id: 'http://orgid.example.com/profile/card#me',
        },
        'x-parser-schema-id': '<anonymous-schema-310>',
      },
      member: {
        description: 'member object or id',
        type: 'string',
        format: 'uri',
        example: 'https://memberid.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-311>',
      },
      startDate: {
        type: 'string',
        format: 'date-time',
        description: 'date the member began performing this role',
        'x-parser-schema-id': '<anonymous-schema-312>',
      },
      endDate: {
        type: 'string',
        format: 'date-time',
        description: 'date the member stopped performing the role',
        'x-parser-schema-id': '<anonymous-schema-313>',
      },
    },
    'x-parser-schema-id': 'OrganizationRole',
  },
  Permit: {
    title: 'Permit',
    description:
      'A permit issued by an organization to an individual or business.',
    type: 'object',
    'x-hasSubclass': ['RealEstateLicense'],
    properties: {
      type: {
        type: 'string',
        description: 'Permit type.',
        enum: ['Permit'],
        'x-parser-schema-id': '<anonymous-schema-330>',
      },
      name: {
        type: 'string',
        description: 'Common or display value of the Permit.',
        example: 'DRE Number',
        'x-parser-schema-id': '<anonymous-schema-331>',
      },
      issuedBy: {
        type: 'object',
        'x-range': 'Organization',
        description: 'The issuing authority',
        example: {
          type: 'State',
          name: 'California',
        },
        'x-parser-schema-id': '<anonymous-schema-332>',
      },
      issuedThrough: {
        type: 'object',
        description: 'the service through which the permit was granted',
        example: {
          type: 'Service',
          name: 'Department of Real Estate',
        },
        'x-parser-schema-id': '<anonymous-schema-333>',
      },
      validIn: {
        type: 'object',
        'x-range': 'Place',
        'x-parser-schema-id': '<anonymous-schema-334>',
      },
      validFrom: {
        type: 'string',
        format: 'date-time',
        description: 'start date',
        'x-parser-schema-id': '<anonymous-schema-335>',
      },
      validUntil: {
        type: 'string',
        format: 'date-time',
        description: 'end date',
        'x-parser-schema-id': '<anonymous-schema-336>',
      },
    },
    'x-parser-schema-id': 'Permit',
  },
  Person: {
    allOf: [
      {
        title: 'Person',
        type: 'object',
        properties: {
          type: {
            type: 'string',
            description: 'Person',
            enum: ['Person'],
            'x-parser-schema-id': '<anonymous-schema-213>',
          },
          affiliation: {
            type: 'array',
            description: 'An organization that this person is affiliated with',
            items: {
              type: 'string',
              format: 'uri',
              example: 'https://example.com/profile/card#me',
              'x-parser-schema-id': '<anonymous-schema-215>',
            },
            'x-parser-schema-id': '<anonymous-schema-214>',
          },
          address: {
            type: 'array',
            'x-range': 'PostalAddress',
            description: 'addresses for the item',
            items: {
              type: 'object',
              'x-range': 'PostalAddress',
              description: 'A physical address.',
              example: {
                type: 'PostalAddress',
                name: 'Home',
                streetAddress: '1007 Mountain Gate Rd',
                postOfficeBoxNumber: 'Box 1234',
                addressRegion: 'New Jersey',
                addressLocality: 'Gotham City',
                postalCode: '10010',
                addressCountry: 'USA',
                addressCounty: 'Gotham County',
                addressSubdivision: 'Gotham Heights',
              },
              'x-parser-schema-id': '<anonymous-schema-217>',
            },
            'x-parser-schema-id': '<anonymous-schema-216>',
          },
          birthDate: {
            type: 'string',
            format: 'date',
            description: 'date of birth.',
            'x-parser-schema-id': '<anonymous-schema-218>',
          },
          contactPoint: {
            type: 'array',
            'x-range': 'ContactPoint',
            description:
              'a named point of contact - telephone, email, faxNumber, and/or url for the entity',
            items: {
              type: 'object',
              description:
                'a named point of contact - telephone, email, faxNumber, and/or url for the entity',
              'x-range': 'ContactPoint',
              example: {
                type: 'ContactPoint',
                name: 'Work',
                telephone: '800-555-5555',
                faxNumber: '888-4BA-TMAN',
                email: 'bruce@example.com',
                url: 'https://example.com',
              },
              'x-parser-schema-id': '<anonymous-schema-220>',
            },
            'x-parser-schema-id': '<anonymous-schema-219>',
          },
          email: {
            type: 'string',
            description: 'Primary email address.',
            example: 'user@example.com',
            'x-parser-schema-id': '<anonymous-schema-221>',
          },
          additionalName: {
            type: 'string',
            description:
              'any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.',
            example: 'ambassador satch,pops,satchmo',
            'x-parser-schema-id': '<anonymous-schema-222>',
          },
          familyName: {
            type: 'string',
            description: 'Last Name of a person',
            example: 'Wayne',
            'x-parser-schema-id': '<anonymous-schema-223>',
          },
          faxNumber: {
            type: 'string',
            description: 'Primary fax number.',
            example: '(873) 271-4802',
            'x-parser-schema-id': '<anonymous-schema-224>',
          },
          givenName: {
            type: 'string',
            description: 'First Name of a person',
            example: 'Glenn',
            'x-parser-schema-id': '<anonymous-schema-225>',
          },
          honorificPrefix: {
            title: 'honorificPrefix',
            description:
              "An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.",
            type: 'string',
            example: 'Dr',
            'x-parser-schema-id': '<anonymous-schema-226>',
          },
          honorifixSuffix: {
            title: 'honorificSuffix',
            description:
              "An honorific title following a person's name like M.D.",
            type: 'string',
            example: 'Esq',
            'x-parser-schema-id': '<anonymous-schema-227>',
          },
          jobTitle: {
            title: 'jobTitle',
            description: 'job tiles associated with the item',
            type: 'array',
            items: {
              type: 'string',
              'x-parser-schema-id': '<anonymous-schema-229>',
            },
            example: ['Chief Data Officer', 'Sanitation Engineer'],
            'x-parser-schema-id': '<anonymous-schema-228>',
          },
          knowsLanguage: {
            type: 'array',
            description: 'languages spoken by the person',
            'x-range': 'Language',
            items: {
              type: 'object',
              'x-parser-schema-id': '<anonymous-schema-231>',
            },
            example: [
              {
                type: 'Language',
                name: 'English',
                additionalName: 'en-us',
              },
            ],
            'x-parser-schema-id': '<anonymous-schema-230>',
          },
          name: {
            type: 'string',
            description: 'Full name of the person.',
            example: 'Bruce Wayne',
            'x-parser-schema-id': '<anonymous-schema-232>',
          },
          telephone: {
            description: 'Primary phone number.',
            type: 'string',
            example: '1-339-041-0306 x2866',
            'x-parser-schema-id': '<anonymous-schema-233>',
          },
          worksFor: {
            type: 'string',
            description: 'Organizations the person works for.',
            example: 'Gotham City Police Department',
            'x-parser-schema-id': '<anonymous-schema-234>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-212>',
      },
    ],
    'x-parser-schema-id': 'Person',
  },
  Place: {
    type: 'object',
    description: 'a physical location',
    title: 'Place',
    'x-range': [
      'Place',
      'City',
      'State',
      'PostalCode',
      'GeoCircle',
      'GeoShape',
    ],
    properties: {
      type: {
        type: 'string',
        description: 'The item type (Linked-Data @type)',
        enum: ['Place'],
        'x-parser-schema-id': '<anonymous-schema-337>',
      },
      address: {
        type: 'object',
        'x-range': 'PostalAddress',
        description: 'A physical address.',
        example: {
          type: 'PostalAddress',
          name: 'Home',
          streetAddress: '1007 Mountain Gate Rd',
          postOfficeBoxNumber: 'Box 1234',
          addressRegion: 'New Jersey',
          addressLocality: 'Gotham City',
          postalCode: '10010',
          addressCountry: 'USA',
          addressCounty: 'Gotham County',
          addressSubdivision: 'Gotham Heights',
        },
        'x-parser-schema-id': '<anonymous-schema-338>',
      },
      geo: {
        type: 'object',
        description: 'a geo shape (circle or box)',
        'x-range': ['GeoCircle', 'GeoShape'],
        example: {
          type: 'GeoShape',
          geoMidpoint: {
            type: 'GeoCoordinates,',
            longitude: '73.98',
            latitude: '40.75',
          },
          geoRadius: {
            type: 'QuantitativeValue,',
            value: '10,',
            unitCode: 'mi,',
            unitText: 'miles',
          },
          box: '(33.5697,-117.775),(33.6018,-117.707)',
        },
        'x-parser-schema-id': '<anonymous-schema-339>',
      },
    },
    'x-parser-schema-id': 'Place',
  },
  Plan: {
    title: 'Plan',
    type: 'object',
    description: 'a collection of related tasks',
    required: ['type'],
    'x-range': 'Plan',
    properties: {
      type: {
        description: 'Plan',
        type: 'string',
        enum: ['Plan'],
        'x-parser-schema-id': '<anonymous-schema-340>',
      },
      name: {
        type: 'string',
        description: 'name of the plan',
        example: 'Ricky Follow Up Plan',
        'x-parser-schema-id': '<anonymous-schema-341>',
      },
      description: {
        type: 'string',
        description: 'description of the item',
        example: 'this is the description of my awesome plan',
        'x-parser-schema-id': '<anonymous-schema-342>',
      },
      member: {
        type: 'array',
        description: 'tasks which make up the plan',
        items: {
          title: 'Task',
          type: 'object',
          description:
            'an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan',
          'x-range': 'Task',
          properties: {
            type: {
              type: 'string',
              description: 'The item type (Linked-Data @type)',
              enum: ['Task'],
              'x-parser-schema-id': '<anonymous-schema-344>',
            },
            identifier: {
              type: 'object',
              description:
                'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.',
              example: {
                salesforceContactID: 'c28834ca-db69-4da8-90ad-75cdc9907298',
              },
              'x-parser-schema-id': '<anonymous-schema-345>',
            },
            actionStatus: {
              example: 'PotentialActionStatus',
              type: 'string',
              description:
                'disposition of the Action at the time of this action message.',
              'x-range': [
                'CompletedActionStatus',
                'FailedActionStatus',
                'ActiveActionStatus',
                'PotentialActionStatus',
              ],
              enum: [
                'CompletedActionStatus',
                'FailedActionStatus',
                'ActiveActionStatus',
                'PotentialActionStatus',
              ],
              'x-parser-schema-id': '<anonymous-schema-346>',
            },
            memberOf: {
              type: 'object',
              'x-range': 'Plan',
              description: 'a plan the task is associated with',
              example: {
                type: 'Plan',
                identifier: {
                  redPlan_ID: 'xxxx',
                },
              },
              'x-parser-schema-id': '<anonymous-schema-347>',
            },
            agent: {
              type: 'object',
              description: 'the party who completed, or will complete the task',
              'x-range': [
                'Person',
                'Organization',
                'RealEstateAgent',
                'Contact',
              ],
              example: {
                type: 'RealEstateAgent',
                id: 'http://user.example.com/profile/card#me',
              },
              'x-parser-schema-id': '<anonymous-schema-348>',
            },
            participant: {
              'x-title': 'participant',
              'x-range': [
                'Person',
                'RealEstateAgent',
                'RealEstateTeam',
                'RealEstateOrganization',
              ],
              description:
                'Other co-agents with a direct or indirect interest in the action.',
              type: 'array',
              items: {
                type: 'object',
                'x-parser-schema-id': '<anonymous-schema-350>',
              },
              example: [
                {
                  type: 'Contact',
                  name: 'Bruce Wayne',
                  email: 'bruce@example.com',
                  identifier: {
                    redContact_GUID: '92d0a096-457e-4643-ace8-fa95b6bdb1c5',
                  },
                },
              ],
              'x-parser-schema-id': '<anonymous-schema-349>',
            },
            name: {
              type: 'string',
              description: 'name or title',
              example: 'Call Ricky',
              'x-parser-schema-id': '<anonymous-schema-351>',
            },
            description: {
              type: 'string',
              description: 'task detailed description',
              example: 'Agenda 1. Something 2. Something Else ...',
              'x-parser-schema-id': '<anonymous-schema-352>',
            },
            keywords: {
              title: 'keywords',
              description:
                'keywords/tags for grouping and organizing the item in collections',
              type: 'array',
              example: ['Sphere of Influence', 'Past Customer'],
              items: {
                type: 'string',
                'x-parser-schema-id': '<anonymous-schema-354>',
              },
              'x-parser-schema-id': '<anonymous-schema-353>',
            },
            dateDue: {
              description: 'the due date-time (ISO 8601 formated)',
              type: 'string',
              format: 'date-time',
              'x-parser-schema-id': '<anonymous-schema-355>',
            },
            dateCompleted: {
              type: 'string',
              format: 'date-time',
              description: 'date the task was completed',
              'x-parser-schema-id': '<anonymous-schema-356>',
            },
            location: {
              type: 'object',
              description: 'the physical location where an event takes place',
              'x-range': ['Place'],
              example: {
                type: 'Place',
                address: {
                  streetAddress: '1007 Mountain Gate Rd',
                  addressLocality: 'Gotham City',
                  addressRegion: 'NJ',
                  postalCode: '10007',
                  addressCounty: 'Gotham addressCounty',
                  addressSubdivision: 'Gotham Heights',
                },
              },
              'x-parser-schema-id': '<anonymous-schema-357>',
            },
          },
          'x-parser-schema-id': 'Task',
        },
        'x-parser-schema-id': '<anonymous-schema-343>',
      },
      creator: {
        title: 'creator',
        description: 'the item creator',
        'x-range': ['Person', 'Organization'],
        example: 'http://agent.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-118>',
      },
      dateCreated: {
        description: 'The date on which the item was created.',
        type: 'string',
        format: 'date-time',
        'x-parser-schema-id': '<anonymous-schema-203>',
      },
      dateModified: {
        description:
          "The date on which the item was most recently modified or when the item's entry was modified within a DataFeed.",
        type: 'string',
        format: 'date-time',
        'x-parser-schema-id': '<anonymous-schema-204>',
      },
      dateCompleted: {
        description: 'The date on which the item was created.',
        type: 'string',
        format: 'date-time',
        'x-parser-schema-id': '<anonymous-schema-358>',
      },
    },
    'x-parser-schema-id': 'Plan',
  },
  PostalAddress: {
    title: 'PostalAddress',
    type: 'object',
    'x-range': 'PostalAddress',
    description: 'A physical address.',
    properties: {
      type: {
        type: 'string',
        enum: ['PostalAddress'],
        'x-parser-schema-id': '<anonymous-schema-359>',
      },
      streetAddress: {
        type: 'string',
        description: 'the street number and name.',
        example: '1007 Mountain Gate Rd',
        'x-parser-schema-id': '<anonymous-schema-360>',
      },
      postOfficeBoxNumber: {
        type: 'string',
        description: 'The post office box number for PO box addresses.',
        example: 'Box 1234',
        'x-parser-schema-id': '<anonymous-schema-361>',
      },
      addressRegion: {
        type: 'string',
        description: 'State or Province.',
        example: 'New Jersey',
        'x-parser-schema-id': '<anonymous-schema-362>',
      },
      addressLocality: {
        type: 'string',
        description: 'City, Township.',
        example: 'Gotham City',
        'x-parser-schema-id': '<anonymous-schema-363>',
      },
      postalCode: {
        type: 'string',
        description: 'Zip/Post Code',
        example: '10010',
        'x-parser-schema-id': '<anonymous-schema-364>',
      },
      addressCountry: {
        type: 'string',
        description:
          'The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.',
        example: 'USA',
        'x-parser-schema-id': '<anonymous-schema-365>',
      },
      addressCounty: {
        type: 'string',
        description: 'the county (us real estate extension)',
        example: 'Gotham County',
        'x-parser-schema-id': '<anonymous-schema-366>',
      },
      addressSubdivision: {
        type: 'string',
        description:
          'the subdivision or neighborhood (us real estate extension)',
        example: 'Gotham Heights',
        'x-parser-schema-id': '<anonymous-schema-367>',
      },
    },
    'x-parser-schema-id': 'PostalAddress',
  },
  PotentialActionStatus: {
    type: 'string',
    description:
      'A description of an action that is allowed and might happen in the future.',
    example: 'PotentialActionStatus',
    'x-parser-schema-id': 'PotentialActionStatus',
  },
  PriceSpecification: {
    type: 'object',
    title: 'PriceSpecification',
    'x-range': 'PriceSpecification',
    description: 'a price offered for transfer of ownership of an item',
    properties: {
      type: {
        type: 'string',
        description: 'PriceSpecification',
        enum: ['PriceSpecification'],
        'x-parser-schema-id': '<anonymous-schema-368>',
      },
      minPrice: {
        type: 'number',
        description: 'the low price offered if price is a range.',
        example: 75000,
        'x-parser-schema-id': '<anonymous-schema-369>',
      },
      maxPrice: {
        type: 'number',
        description: 'the high price offered if price is a range.',
        example: 100000,
        'x-parser-schema-id': '<anonymous-schema-370>',
      },
      price: {
        type: 'number',
        description: 'the offer price.',
        example: 75000,
        'x-parser-schema-id': '<anonymous-schema-371>',
      },
      priceCurrency: {
        type: 'string',
        description: 'use ISO4217',
        example: 'USD',
        'x-parser-schema-id': '<anonymous-schema-372>',
      },
    },
    'x-parser-schema-id': 'PriceSpecification',
  },
  Profile: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        format: 'uri',
        description: 'document uri',
        example: 'https://user.example.com/profile/card',
        'x-parser-schema-id': '<anonymous-schema-373>',
      },
      type: {
        type: 'string',
        enum: ['ProfileDocument'],
        'x-parser-schema-id': '<anonymous-schema-374>',
      },
      '#me': {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            format: 'uri',
            example: 'https://user.example.com/profile/card#me',
            'x-parser-schema-id': '<anonymous-schema-376>',
          },
          type: {
            type: 'string',
            example: 'SoftwareApplication',
            'x-parser-schema-id': '<anonymous-schema-377>',
          },
          inbox: {
            description: 'discoverable uri to your LDN inbox',
            type: 'string',
            example: '/inbox/',
            'x-parser-schema-id': '<anonymous-schema-378>',
          },
          outbox: {
            description: 'discoverable uri to your LDN outbox',
            type: 'string',
            example: '/outbox/',
            'x-parser-schema-id': '<anonymous-schema-379>',
          },
          storage: {
            description: 'uri to your linked-data storage root',
            type: 'string',
            example: '/',
            'x-parser-schema-id': '<anonymous-schema-380>',
          },
          preferencesFile: {
            description: 'discoverable uri for shared application preferences',
            type: 'string',
            example: '/settings/prefs',
            'x-parser-schema-id': '<anonymous-schema-381>',
          },
          account: {
            description: 'discoverable solid:account root',
            type: 'string',
            example: '/',
            'x-parser-schema-id': '<anonymous-schema-382>',
          },
          privateTypeIndex: {
            description: 'type index for your private use',
            type: 'string',
            example: '/settings/privateTypeIndex',
            'x-parser-schema-id': '<anonymous-schema-383>',
          },
          publicTypeIndex: {
            description: 'shared, discoverable type index',
            type: 'string',
            example: '/settings/publicTypeIndex',
            'x-parser-schema-id': '<anonymous-schema-384>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-375>',
      },
    },
    'x-parser-schema-id': 'Profile',
  },
  ProgramMembership: {
    allOf: [
      {
        title: 'OrganizationRole',
        type: 'object',
        description:
          'describes a role played by a member and a group or organization.',
        properties: {
          type: {
            type: 'string',
            description: 'a role played by the member in the memberOf group',
            enum: ['OrganizationRole'],
            'x-parser-schema-id': '<anonymous-schema-308>',
          },
          roleName: {
            type: 'string',
            description: 'the role name',
            example: 'Owner',
            'x-parser-schema-id': '<anonymous-schema-309>',
          },
          memberOf: {
            description: 'the org or group where the role is performed',
            type: 'object',
            example: {
              type: 'RealEstateOrganization',
              id: 'http://orgid.example.com/profile/card#me',
            },
            'x-parser-schema-id': '<anonymous-schema-310>',
          },
          member: {
            description: 'member object or id',
            type: 'string',
            format: 'uri',
            example: 'https://memberid.example.com/profile/card#me',
            'x-parser-schema-id': '<anonymous-schema-311>',
          },
          startDate: {
            type: 'string',
            format: 'date-time',
            description: 'date the member began performing this role',
            'x-parser-schema-id': '<anonymous-schema-312>',
          },
          endDate: {
            type: 'string',
            format: 'date-time',
            description: 'date the member stopped performing the role',
            'x-parser-schema-id': '<anonymous-schema-313>',
          },
        },
        'x-parser-schema-id': 'OrganizationRole',
      },
      {
        title: 'ProgramMembership',
        description:
          'describes membership relation between a member (Person) and a MarketingProgram',
        properties: {
          type: {
            enum: ['ProgramMembership'],
          },
          member: {
            type: 'object',
            'x-range': 'Contact',
            description: 'a contact',
            example: {
              type: 'Contact',
              name: 'Bruce Wayne',
              givenName: 'Bruce',
              familyName: 'Wayne',
              jobTitle: 'Batman',
              contactPoint: [
                {
                  type: 'ContactPoint',
                  name: 'Mobile Phone',
                  telephone: '888.GET-BATMAN',
                },
                {
                  type: 'ContactPoint',
                  name: 'Email',
                  email: 'batman@example.com',
                },
              ],
              address: [
                {
                  type: 'PostalAddress',
                  name: 'Home',
                  streetAddress: '1007 Mountain Gate Rd',
                  postOfficeBoxNumber: 'Box 1234',
                  addressRegion: 'New Jersey',
                  addressLocality: 'Gotham City',
                  postalCode: '10010',
                  addressCountry: 'USA',
                },
              ],
              birthDate: '2019-07-09',
              leadOwner: {
                type: 'RealEstateOrganization',
                id: 'https://{lead-owner}.example.com/profile/card#me',
              },
              leadSource: {
                type: 'RealEstateWebsite',
                url: 'https://agentwebsite.example.com',
              },
            },
          },
          memberOf: {
            'x-range': 'MarketingProgram',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-385>',
      },
    ],
    'x-parser-schema-id': 'ProgramMembership',
  },
  PropertyListing: {
    title: 'PropertyListing',
    type: 'object',
    'x-range': 'PropertyListing',
    description: 'a real estate property listed for sale',
    properties: {
      type: {
        enum: ['PropertyListing'],
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-386>',
      },
      addressCountry: {
        type: 'string',
        description: 'two-letter ISO 3166-1 alpha-2 country code',
        example: 'US',
        enum: [
          'CA',
          'DE',
          'GR',
          'IN',
          'IT',
          'MX',
          'PE',
          'PT',
          'ES',
          'AE',
          'GB',
          'US',
        ],
        'x-parser-schema-id': '<anonymous-schema-387>',
      },
      addressLocality: {
        type: 'string',
        description: 'City, Township.',
        example: 'Gotham City',
        maxLength: 50,
        'x-parser-schema-id': '<anonymous-schema-388>',
      },
      addressRegion: {
        type: 'string',
        description: 'State or Province.',
        example: 'New Jersey',
        maxLength: 3,
        'x-parser-schema-id': '<anonymous-schema-389>',
      },
      buyerAgent: {
        description: "the buyer's RealEstateAgent",
        example: {
          email: 'butch.byers@example.com',
          identifier: {
            agentKey: 'xxxx',
          },
          name: 'Butch Byers',
          type: 'RealEstateAgent',
        },
        type: 'object',
        'x-range': 'RealEstateAgent',
        'x-parser-schema-id': '<anonymous-schema-390>',
      },
      buyerOffice: {
        description: "the buyer's RealEstateOffice",
        example: {
          email: 'gcr@example.com',
          identifier: {
            officeKey: 'grc1',
          },
          name: 'Gotham City Real Estate',
          type: 'RealEstateOffice',
        },
        type: 'object',
        'x-range': 'RealEstateOffice',
        'x-parser-schema-id': '<anonymous-schema-391>',
      },
      closeDate: {
        title: 'closeDate',
        type: 'string',
        format: 'date-time',
        description:
          'With for-sale listings, the date the purchase agreement was fulfilled. With lease listings, the date the requirements were fulfilled, such as contract and/or deposit.',
        'x-range': 'DateTime',
        'x-parser-schema-id': '<anonymous-schema-392>',
      },
      image: {
        title: 'image',
        description: 'an ImageObject or URI reference to an image on the web.',
        type: 'array',
        'x-range': ['ImageObject'],
        items: [
          {
            type: 'object',
            allOf: [
              {
                title: 'MediaObject',
                description:
                  'an image, video or document availble for download',
                'x-subclass': ['ImageObject', 'DigitalDocument'],
                allOf: [
                  {
                    type: 'object',
                    required: ['type'],
                    properties: {
                      type: {
                        type: 'string',
                        description: 'The item type (Linked-Data @type)',
                        'x-parser-schema-id': '<anonymous-schema-136>',
                      },
                    },
                    'x-parser-schema-id': 'Thing',
                  },
                  {
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['MediaObject', 'ImageObject', 'DigitalDocument'],
                      },
                      id: {
                        description: 'the URL to access the item.',
                        example:
                          'http://user.example.com/public/logo/fileName.zip',
                        type: 'string',
                        format: 'uri',
                      },
                      name: {
                        type: 'string',
                        description: 'the file name of the object.',
                        example: 'fileName.zip',
                      },
                      encodingFormat: {
                        type: 'string',
                        description: 'MIME type',
                        example: 'application/zip',
                      },
                      about: {
                        type: 'string',
                        format: 'uri',
                        description: 'URI to the subject of the image or logo',
                        example: 'http://user.example.com/profile/card#me',
                      },
                      url: {
                        type: 'string',
                        format: 'uri',
                        description: 'URL of the image content',
                        example:
                          'http://user.example.com/public/profile/image.jpg',
                      },
                    },
                    'x-parser-schema-id': '<anonymous-schema-170>',
                  },
                ],
                'x-parser-schema-id': 'MediaObject',
              },
              {
                title: 'ImageObject',
                'x-range': 'ImageObject',
                properties: {
                  type: {
                    enum: ['ImageObject'],
                    example: 'ImageObject',
                  },
                  id: {
                    example: 'http://user.example.com/public/logo/image.jpg',
                  },
                  name: {
                    example: 'image.jpg',
                  },
                  encodingFormat: {
                    example: 'image/jpeg',
                  },
                },
                'x-parser-schema-id': '<anonymous-schema-171>',
              },
            ],
            'x-parser-schema-id': '<anonymous-schema-169>',
          },
        ],
        'x-parser-schema-id': '<anonymous-schema-393>',
      },
      internetAddressDisplayYN: {
        enum: ['Y', 'N'],
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-394>',
      },
      latitude: {
        type: 'number',
        description: 'The latitude of a location.',
        'x-title': 'latitude',
        example: 40.75,
        'x-parser-schema-id': '<anonymous-schema-275>',
      },
      listingAgent: {
        type: 'object',
        description:
          'the agent/broker representing the seller in a real estate transaction',
        'x-range': ['RealEstateAgent', 'RealEstateOrganization'],
        example: {
          type: 'RealEstateAgent',
          name: 'Lori Listagent',
          telephone: '1-252-574-0160',
          email: 'lorilistagent@example.com',
        },
        'x-parser-schema-id': '<anonymous-schema-395>',
      },
      listingContractDate: {
        description:
          "The effective date of the agreement between the seller and the seller's broker.",
        format: 'date-time',
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-396>',
      },
      listingId: {
        description: 'the local identifier for the listing',
        example: 'GOTHAM-MLS+12345',
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-397>',
      },
      listingOffice: {
        description: 'the listing office',
        example: {
          name: 'Gotham City Real Estate',
          type: 'RealEstateOffice',
        },
        type: 'object',
        'x-range': 'RealEstateOrganization',
        'x-parser-schema-id': '<anonymous-schema-398>',
      },
      listingOriginatingSystem: {
        description:
          'The place where the item is originally input by the user.',
        example: {
          identifier: {
            bhhsmlsid: 'xxxx',
            resoouid: 'not-yet-available',
          },
          name: 'MLSListings',
          type: 'MultipleListingService',
        },
        type: 'object',
        'x-range': 'MultipleListingService',
        'x-subPropertyOf': 'instrument',
        'x-parser-schema-id': '<anonymous-schema-399>',
      },
      listingPrice: {
        type: 'object',
        'x-range': 'PriceSpecification',
        example: {
          type: 'PriceSpecification',
          price: 75000,
          priceCurrency: 'USD',
        },
        'x-parser-schema-id': '<anonymous-schema-400>',
      },
      listingStatus: {
        enum: [
          'Active',
          'Pending',
          'Sold',
          'Canceled',
          'Prelisted',
          'OffMarket',
          'Private',
        ],
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-401>',
      },
      livingArea: {
        description: 'property indoor space',
        example: {
          type: 'QuantitativeValue',
          unitCode: 'SqFt',
          unitText: 'Square Feet',
          value: 1500,
        },
        type: 'object',
        'x-range': 'QuantitativeValue',
        'x-parser-schema-id': '<anonymous-schema-402>',
      },
      longitude: {
        type: 'number',
        description: 'The longitude of a location.',
        'x-title': 'longitude',
        example: 73.98,
        'x-parser-schema-id': '<anonymous-schema-274>',
      },
      lotSize: {
        description: 'outdoor space minValue, maxValue',
        example: {
          type: 'QuantitativeValue',
          unitCode: 'AC',
          unitText: 'Acres',
          value: 0.5,
        },
        type: 'object',
        'x-range': 'QuantitativeValue',
        'x-parser-schema-id': '<anonymous-schema-403>',
      },
      numberOfBathrooms: {
        description: 'the number of bathrooms',
        example: '2',
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-404>',
      },
      numberOfBedrooms: {
        description: 'the number of bedrooms',
        example: '3',
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-405>',
      },
      numberOfRooms: {
        description: 'the total number of rooms in the building',
        example: '7',
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-406>',
      },
      originatingSystemKey: {
        description: 'the listing identifier from the original MLS, aka MLSID.',
        example: 12345,
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-407>',
      },
      originatingSystemName: {
        description:
          'the name of the MLS where the listing was originally input',
        example: 'GOTHAM-MLS',
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-408>',
      },
      postalCode: {
        type: 'string',
        description: 'Zip/Post Code',
        example: '10010',
        maxLength: 12,
        'x-parser-schema-id': '<anonymous-schema-409>',
      },
      propertySubType: {
        title: 'propertySubType',
        type: 'string',
        'x-range': 'PropertySubType',
        description: 'RESO property sub-type (see range for allowed values)',
        enum: [
          'ApartmentPropertyType',
          'BoatSlipPropertyType',
          'CabinPropertyType',
          'CondominiumPropertyType',
          'DeededParkingPropertyType',
          'DuplexPropertyType',
          'FarmPropertyType',
          'ManufacturedHomePropertyType',
          'ManufacturedOnLandPropertyType',
          'MobileHomePropertyType',
          'OwnYourOwnPropertyType',
          'QuadruplexPropertyType',
          'RanchPropertyType',
          'SingleFamilyPropertyType',
          'StockCooperativePropertyType',
          'TimesharePropertyType',
          'TownhousePropertyType',
          'TriplexPropertyType',
          'AgriculturePropertyType',
          'BusinessPropertyType',
          'HotelMotelPropertyType',
          'IndustrialPropertyType',
          'MixedUsePropertyType',
          'MultiFamilyPropertyType',
          'OfficePropertyType',
          'RetailPropertyType',
          'UnimprovedLandPropertyType',
          'WarehousePropertyType',
        ],
        'x-parser-schema-id': '<anonymous-schema-410>',
      },
      propertyType: {
        type: 'string',
        description: 'RESO property type (see range for allowed values)',
        'x-range': 'PropertyType',
        minLength: 4,
        maxLength: 4,
        enum: [
          'RESI',
          'RLSE',
          'RINC',
          'LAND',
          'MOBI',
          'FARM',
          'COMS',
          'COML',
          'BUSO',
        ],
        'x-parser-schema-id': '<anonymous-schema-411>',
      },
      purchaseContractDate: {
        description:
          'With for-sale listings, the date an offer was accepted and the listing was no longer on market. With lease listings this may represent a meeting of the minds to lease, but some contractual requirements are yet to be fulfilled, such as contract signing or receipt of the deposit.',
        format: 'date-time',
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-412>',
      },
      stories: {
        type: 'number',
        description: 'he number of floors in the property',
        example: 2,
        'x-parser-schema-id': '<anonymous-schema-413>',
      },
      streetAddress: {
        type: 'string',
        description: 'the street address',
        example: '1007 Mountain Gate Rd',
        maxLength: 75,
        'x-parser-schema-id': '<anonymous-schema-414>',
      },
      universalPropertyId: {
        type: 'string',
        title: 'universalPropertyId',
        description:
          'The Universal Property Identifier is a unique identifier for all real property in the US and Canada.  It is based on country and local identification methods and is limited to real property.  For cases such as shares of real property, units, and other more granular cases, please utilize the UniversalPropertySubId.',
        example: 'US-04015-N-R-11022331-N',
        'x-parser-schema-id': '<anonymous-schema-415>',
      },
      url: {
        title: 'url',
        type: 'string',
        format: 'uri',
        description: 'URL of the item.',
        example:
          'https://www.example.com/homedetails/1007-Mountain-Gate-Rd-Gotham-City-Gotham/10007',
        'x-parser-schema-id': '<anonymous-schema-416>',
      },
      yearBuilt: {
        type: 'number',
        description: 'the year the structure was created',
        example: 1988,
        'x-parser-schema-id': '<anonymous-schema-417>',
      },
    },
    'x-parser-schema-id': 'PropertyListing',
  },
  PropertySearch: {
    title: 'PropertySearch',
    'x-range': 'PropertySearch',
    type: 'object',
    description: 'property search parameters',
    properties: {
      type: {
        type: 'string',
        enum: ['PropertySearch'],
        'x-parser-schema-id': '<anonymous-schema-418>',
      },
      name: {
        type: 'string',
        description:
          'name of the search, input by the user or generated automatically',
        example: '3+ beds in Gotham City',
        'x-parser-schema-id': '<anonymous-schema-419>',
      },
      description: {
        type: 'string',
        description:
          'optional search description input by the user or generated automatically',
        example: '((city=Gotham),(Bedrooms=3+))',
        'x-parser-schema-id': '<anonymous-schema-420>',
      },
      propertyType: {
        type: 'string',
        description: 'RESO property type (see range for allowed values)',
        'x-range': 'PropertyType',
        minLength: 4,
        maxLength: 4,
        enum: [
          'RESI',
          'RLSE',
          'RINC',
          'LAND',
          'MOBI',
          'FARM',
          'COMS',
          'COML',
          'BUSO',
        ],
        'x-parser-schema-id': '<anonymous-schema-411>',
      },
      propertySubType: {
        title: 'PropertySubType',
        type: 'object',
        description:
          'Property sub-type enumeration values derived from RESO data dictionary.',
        example: {
          propertySubType: 'ApartmentPropertyType',
        },
        properties: {
          ApartmentPropertyType: {
            type: 'string',
            description: 'Apartment',
            'x-parser-schema-id': '<anonymous-schema-421>',
          },
          BoatSlipPropertyType: {
            type: 'string',
            description: 'Boat Slip',
            'x-parser-schema-id': '<anonymous-schema-422>',
          },
          CabinPropertyType: {
            type: 'string',
            description: 'Cabin',
            'x-parser-schema-id': '<anonymous-schema-423>',
          },
          CondominiumPropertyType: {
            type: 'string',
            description: 'Condominium',
            'x-parser-schema-id': '<anonymous-schema-424>',
          },
          DeededParkingPropertyType: {
            type: 'string',
            description: 'Deeded Parking',
            'x-parser-schema-id': '<anonymous-schema-425>',
          },
          DuplexPropertyType: {
            type: 'string',
            description: 'Residential Duplex',
            'x-parser-schema-id': '<anonymous-schema-426>',
          },
          FarmPropertyType: {
            type: 'string',
            description: 'Farm Property Type',
            'x-parser-schema-id': '<anonymous-schema-427>',
          },
          ManufacturedHomePropertyType: {
            type: 'string',
            description: 'Manufactured Home',
            'x-parser-schema-id': '<anonymous-schema-428>',
          },
          ManufacturedOnLandPropertyType: {
            type: 'string',
            description: 'Manufactured Home + Land',
            'x-parser-schema-id': '<anonymous-schema-429>',
          },
          MobileHomePropertyType: {
            type: 'string',
            description: 'Mobile Home',
            'x-parser-schema-id': '<anonymous-schema-430>',
          },
          OwnYourOwnPropertyType: {
            type: 'string',
            description: 'RESO Own Your Own Property',
            'x-parser-schema-id': '<anonymous-schema-431>',
          },
          QuadruplexPropertyType: {
            type: 'string',
            description: 'A residential property with four units',
            'x-parser-schema-id': '<anonymous-schema-432>',
          },
          RanchPropertyType: {
            type: 'string',
            description: 'A Ranch',
            'x-parser-schema-id': '<anonymous-schema-433>',
          },
          SingleFamilyPropertyType: {
            type: 'string',
            description: 'Single Family Residence',
            'x-parser-schema-id': '<anonymous-schema-434>',
          },
          StockCooperativePropertyType: {
            type: 'string',
            description: 'Stock Co-op.',
            'x-parser-schema-id': '<anonymous-schema-435>',
          },
          TimesharePropertyType: {
            type: 'string',
            description: 'Timeshare',
            'x-parser-schema-id': '<anonymous-schema-436>',
          },
          TownhousePropertyType: {
            type: 'string',
            description: 'Townhouse',
            'x-parser-schema-id': '<anonymous-schema-437>',
          },
          TriplexPropertyType: {
            type: 'string',
            description: 'A residential property with 3 separate units',
            'x-parser-schema-id': '<anonymous-schema-438>',
          },
          AgriculturePropertyType: {
            type: 'string',
            description: 'An agriculture property.',
            'x-parser-schema-id': '<anonymous-schema-439>',
          },
          BusinessPropertyType: {
            type: 'string',
            description: 'a residential property zoned for business operation',
            'x-parser-schema-id': '<anonymous-schema-440>',
          },
          HotelMotelPropertyType: {
            type: 'string',
            description: 'Hotel property for sale.',
            'x-parser-schema-id': '<anonymous-schema-441>',
          },
          IndustrialPropertyType: {
            type: 'string',
            description: 'Industrial property',
            'x-parser-schema-id': '<anonymous-schema-442>',
          },
          MixedUsePropertyType: {
            type: 'string',
            description: 'Residential/Commercial property',
            'x-parser-schema-id': '<anonymous-schema-443>',
          },
          MultiFamilyPropertyType: {
            type: 'string',
            description: 'A single building with multiple units',
            'x-parser-schema-id': '<anonymous-schema-444>',
          },
          OfficePropertyType: {
            type: 'string',
            description: 'An office.',
            'x-parser-schema-id': '<anonymous-schema-445>',
          },
          RetailPropertyType: {
            type: 'string',
            description: 'Retail property',
            'x-parser-schema-id': '<anonymous-schema-446>',
          },
          UnimprovedLandPropertyType: {
            type: 'string',
            description: 'Land for sale',
            'x-parser-schema-id': '<anonymous-schema-447>',
          },
          WarehousePropertyType: {
            type: 'string',
            description: 'A Warehouse property type.',
            'x-parser-schema-id': '<anonymous-schema-448>',
          },
        },
        'x-parser-schema-id': 'PropertySubType',
      },
      listingStatus: {
        type: 'string',
        description: 'RESO Listing Status Code',
        'x-range': [
          'ActiveListingStatus',
          'PendingListingStatus',
          'SoldListingStatus',
          'ContingentListingStatus',
        ],
        example: 'ActiveListingStatus,ContingentListingStatus',
        'x-parser-schema-id': '<anonymous-schema-449>',
      },
      location: {
        type: 'object',
        description: 'a physical location',
        title: 'Place',
        'x-range': [
          'Place',
          'City',
          'State',
          'PostalCode',
          'GeoCircle',
          'GeoShape',
        ],
        properties: {
          type: {
            type: 'string',
            description: 'The item type (Linked-Data @type)',
            enum: ['Place'],
            'x-parser-schema-id': '<anonymous-schema-337>',
          },
          address: {
            type: 'object',
            'x-range': 'PostalAddress',
            description: 'A physical address.',
            example: {
              type: 'PostalAddress',
              name: 'Home',
              streetAddress: '1007 Mountain Gate Rd',
              postOfficeBoxNumber: 'Box 1234',
              addressRegion: 'New Jersey',
              addressLocality: 'Gotham City',
              postalCode: '10010',
              addressCountry: 'USA',
              addressCounty: 'Gotham County',
              addressSubdivision: 'Gotham Heights',
            },
            'x-parser-schema-id': '<anonymous-schema-338>',
          },
          geo: {
            type: 'object',
            description: 'a geo shape (circle or box)',
            'x-range': ['GeoCircle', 'GeoShape'],
            example: {
              type: 'GeoShape',
              geoMidpoint: {
                type: 'GeoCoordinates,',
                longitude: '73.98',
                latitude: '40.75',
              },
              geoRadius: {
                type: 'QuantitativeValue,',
                value: '10,',
                unitCode: 'mi,',
                unitText: 'miles',
              },
              box: '(33.5697,-117.775),(33.6018,-117.707)',
            },
            'x-parser-schema-id': '<anonymous-schema-339>',
          },
        },
        'x-parser-schema-id': 'Place',
      },
      price: {
        type: 'object',
        title: 'PriceSpecification',
        'x-range': 'PriceSpecification',
        description: 'a price offered for transfer of ownership of an item',
        properties: {
          type: {
            type: 'string',
            description: 'PriceSpecification',
            enum: ['PriceSpecification'],
            'x-parser-schema-id': '<anonymous-schema-368>',
          },
          minPrice: {
            type: 'number',
            description: 'the low price offered if price is a range.',
            example: 75000,
            'x-parser-schema-id': '<anonymous-schema-369>',
          },
          maxPrice: {
            type: 'number',
            description: 'the high price offered if price is a range.',
            example: 100000,
            'x-parser-schema-id': '<anonymous-schema-370>',
          },
          price: {
            type: 'number',
            description: 'the offer price.',
            example: 75000,
            'x-parser-schema-id': '<anonymous-schema-371>',
          },
          priceCurrency: {
            type: 'string',
            description: 'use ISO4217',
            example: 'USD',
            'x-parser-schema-id': '<anonymous-schema-372>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-450>',
      },
      bedrooms: {
        description: 'number of bedrooms (range)',
        type: 'object',
        'x-range': 'QuantitativeValue',
        example: {
          type: 'QuantitativeValue',
          minValue: 0,
          maxValue: 4,
          unitCode: 'BD',
          unitText: 'Bedrooms',
        },
        'x-parser-schema-id': '<anonymous-schema-451>',
      },
      bathrooms: {
        description: 'number of bathrooms (range)',
        type: 'object',
        'x-range': 'QuantitativeValue',
        example: {
          type: 'QuantitativeValue',
          minValue: 2,
          unitCode: 'BA',
          unitText: 'Bathrooms',
        },
        'x-parser-schema-id': '<anonymous-schema-452>',
      },
      livingArea: {
        description: 'property indoor space',
        type: 'object',
        'x-range': 'QuantitativeValue',
        example: {
          type: 'QuantitativeValue',
          minValue: 1500,
          unitCode: 'SqFt',
          unitText: 'Square Feet',
        },
        'x-parser-schema-id': '<anonymous-schema-453>',
      },
      lotSize: {
        description: 'outdoor space minValue, maxValue',
        type: 'object',
        'x-range': 'QuantitativeValue',
        example: {
          type: 'QuantitativeValue',
          minValue: 0.5,
          unitCode: 'AC',
          unitText: 'Acres',
        },
        'x-parser-schema-id': '<anonymous-schema-454>',
      },
    },
    'x-parser-schema-id': 'PropertySearch',
  },
  PropertyType: {
    title: 'PropertyType',
    'x-range': 'PropertyType',
    description: 'RESO property type enumeration values',
    type: 'object',
    properties: {
      RESI: {
        type: 'string',
        description: 'Residential',
        'x-parser-schema-id': '<anonymous-schema-455>',
      },
      RLSE: {
        type: 'string',
        description: 'Residential Property Lease',
        'x-parser-schema-id': '<anonymous-schema-456>',
      },
      RINC: {
        type: 'string',
        description: 'Residential Income',
        'x-parser-schema-id': '<anonymous-schema-457>',
      },
      LAND: {
        type: 'string',
        description: 'Land',
        'x-parser-schema-id': '<anonymous-schema-458>',
      },
      MOBI: {
        type: 'string',
        description: 'Mobile home',
        'x-parser-schema-id': '<anonymous-schema-459>',
      },
      FARM: {
        type: 'string',
        description: 'Farm Residential',
        'x-parser-schema-id': '<anonymous-schema-460>',
      },
      COMS: {
        type: 'string',
        description: 'commercial standard applies',
        'x-parser-schema-id': '<anonymous-schema-461>',
      },
      BUSO: {
        type: 'string',
        description: 'Business Opportunity',
        'x-parser-schema-id': '<anonymous-schema-462>',
      },
    },
    example: {
      propertyType: 'RESI',
    },
    'x-parser-schema-id': 'PropertyType',
  },
  PropertySubType: {
    title: 'PropertySubType',
    type: 'object',
    description:
      'Property sub-type enumeration values derived from RESO data dictionary.',
    example: {
      propertySubType: 'ApartmentPropertyType',
    },
    properties: {
      ApartmentPropertyType: {
        type: 'string',
        description: 'Apartment',
        'x-parser-schema-id': '<anonymous-schema-421>',
      },
      BoatSlipPropertyType: {
        type: 'string',
        description: 'Boat Slip',
        'x-parser-schema-id': '<anonymous-schema-422>',
      },
      CabinPropertyType: {
        type: 'string',
        description: 'Cabin',
        'x-parser-schema-id': '<anonymous-schema-423>',
      },
      CondominiumPropertyType: {
        type: 'string',
        description: 'Condominium',
        'x-parser-schema-id': '<anonymous-schema-424>',
      },
      DeededParkingPropertyType: {
        type: 'string',
        description: 'Deeded Parking',
        'x-parser-schema-id': '<anonymous-schema-425>',
      },
      DuplexPropertyType: {
        type: 'string',
        description: 'Residential Duplex',
        'x-parser-schema-id': '<anonymous-schema-426>',
      },
      FarmPropertyType: {
        type: 'string',
        description: 'Farm Property Type',
        'x-parser-schema-id': '<anonymous-schema-427>',
      },
      ManufacturedHomePropertyType: {
        type: 'string',
        description: 'Manufactured Home',
        'x-parser-schema-id': '<anonymous-schema-428>',
      },
      ManufacturedOnLandPropertyType: {
        type: 'string',
        description: 'Manufactured Home + Land',
        'x-parser-schema-id': '<anonymous-schema-429>',
      },
      MobileHomePropertyType: {
        type: 'string',
        description: 'Mobile Home',
        'x-parser-schema-id': '<anonymous-schema-430>',
      },
      OwnYourOwnPropertyType: {
        type: 'string',
        description: 'RESO Own Your Own Property',
        'x-parser-schema-id': '<anonymous-schema-431>',
      },
      QuadruplexPropertyType: {
        type: 'string',
        description: 'A residential property with four units',
        'x-parser-schema-id': '<anonymous-schema-432>',
      },
      RanchPropertyType: {
        type: 'string',
        description: 'A Ranch',
        'x-parser-schema-id': '<anonymous-schema-433>',
      },
      SingleFamilyPropertyType: {
        type: 'string',
        description: 'Single Family Residence',
        'x-parser-schema-id': '<anonymous-schema-434>',
      },
      StockCooperativePropertyType: {
        type: 'string',
        description: 'Stock Co-op.',
        'x-parser-schema-id': '<anonymous-schema-435>',
      },
      TimesharePropertyType: {
        type: 'string',
        description: 'Timeshare',
        'x-parser-schema-id': '<anonymous-schema-436>',
      },
      TownhousePropertyType: {
        type: 'string',
        description: 'Townhouse',
        'x-parser-schema-id': '<anonymous-schema-437>',
      },
      TriplexPropertyType: {
        type: 'string',
        description: 'A residential property with 3 separate units',
        'x-parser-schema-id': '<anonymous-schema-438>',
      },
      AgriculturePropertyType: {
        type: 'string',
        description: 'An agriculture property.',
        'x-parser-schema-id': '<anonymous-schema-439>',
      },
      BusinessPropertyType: {
        type: 'string',
        description: 'a residential property zoned for business operation',
        'x-parser-schema-id': '<anonymous-schema-440>',
      },
      HotelMotelPropertyType: {
        type: 'string',
        description: 'Hotel property for sale.',
        'x-parser-schema-id': '<anonymous-schema-441>',
      },
      IndustrialPropertyType: {
        type: 'string',
        description: 'Industrial property',
        'x-parser-schema-id': '<anonymous-schema-442>',
      },
      MixedUsePropertyType: {
        type: 'string',
        description: 'Residential/Commercial property',
        'x-parser-schema-id': '<anonymous-schema-443>',
      },
      MultiFamilyPropertyType: {
        type: 'string',
        description: 'A single building with multiple units',
        'x-parser-schema-id': '<anonymous-schema-444>',
      },
      OfficePropertyType: {
        type: 'string',
        description: 'An office.',
        'x-parser-schema-id': '<anonymous-schema-445>',
      },
      RetailPropertyType: {
        type: 'string',
        description: 'Retail property',
        'x-parser-schema-id': '<anonymous-schema-446>',
      },
      UnimprovedLandPropertyType: {
        type: 'string',
        description: 'Land for sale',
        'x-parser-schema-id': '<anonymous-schema-447>',
      },
      WarehousePropertyType: {
        type: 'string',
        description: 'A Warehouse property type.',
        'x-parser-schema-id': '<anonymous-schema-448>',
      },
    },
    'x-parser-schema-id': 'PropertySubType',
  },
  PropertyValue: {
    type: 'object',
    title: 'PropertyValue',
    description:
      'a key/value pair, used for maintaining state outside of the current context',
    required: ['type', 'propertyID', 'value'],
    properties: {
      type: {
        type: 'string',
        enum: ['PropertyValue'],
        'x-parser-schema-id': '<anonymous-schema-463>',
      },
      propertyID: {
        type: 'string',
        example: 'UserID',
        'x-parser-schema-id': '<anonymous-schema-464>',
      },
      value: {
        type: 'string',
        example: '@bobjones',
        'x-parser-schema-id': '<anonymous-schema-465>',
      },
    },
    'x-parser-schema-id': 'PropertyValue',
  },
  PropertyValueReport: {
    type: 'object',
    title: 'PropertyValueReport',
    'x-range': 'PropertyValueReport',
    description: 'an automated property value esmation',
    properties: {
      type: {
        type: 'string',
        description: 'PropertyValueReport',
        enum: ['PropertyValueReport'],
        'x-parser-schema-id': '<anonymous-schema-466>',
      },
      name: {
        type: 'string',
        description: 'document name or title',
        example: 'LOT:45 DIST:33 CITY/MUNI/TWP:LADUE LINDWORTH...',
        'x-parser-schema-id': '<anonymous-schema-467>',
      },
      dateCreated: {
        description: 'The date on which the item was created.',
        type: 'string',
        format: 'date-time',
        'x-parser-schema-id': '<anonymous-schema-203>',
      },
      result: {
        type: 'object',
        title: 'MonetaryAmount',
        'x-range': 'MonetaryAmount',
        required: ['type', 'value', 'currency'],
        properties: {
          type: {
            type: 'string',
            description: 'MonetaryAmount',
            enum: ['MonetaryAmount'],
            'x-parser-schema-id': '<anonymous-schema-320>',
          },
          minValue: {
            type: 'number',
            description: 'the lower limit of the range',
            example: 2400000,
            'x-parser-schema-id': '<anonymous-schema-321>',
          },
          maxValue: {
            type: 'number',
            description: 'the upper limit of the range',
            example: 3200000,
            'x-parser-schema-id': '<anonymous-schema-322>',
          },
          value: {
            type: 'number',
            description: 'the actual or expected value',
            example: 2700000,
            'x-parser-schema-id': '<anonymous-schema-323>',
          },
          currency: {
            type: 'string',
            description: 'use ISO4217 country codes',
            maxLength: 3,
            example: 'USD',
            'x-parser-schema-id': '<anonymous-schema-324>',
          },
        },
        description: 'the estimated value of the property',
        'x-parser-schema-id': '<anonymous-schema-468>',
      },
      about: {
        allOf: [
          {
            title: 'RealEstateProperty',
            'x-range': 'RealEstateProperty',
            description: 'a property in the real estate transaction context',
            type: 'object',
            required: ['type', 'propertyType'],
            properties: {
              type: {
                description: '"RealEstateProperty"',
                enum: ['RealEstateProperty'],
                type: 'string',
                'x-parser-schema-id': '<anonymous-schema-470>',
              },
              propertyType: {
                type: 'string',
                description:
                  'RESO property type (see range for allowed values)',
                'x-range': 'PropertyType',
                minLength: 4,
                maxLength: 4,
                enum: [
                  'RESI',
                  'RLSE',
                  'RINC',
                  'LAND',
                  'MOBI',
                  'FARM',
                  'COMS',
                  'COML',
                  'BUSO',
                ],
                'x-parser-schema-id': '<anonymous-schema-411>',
              },
              addressCountry: {
                type: 'string',
                description: 'two-letter ISO 3166-1 alpha-2 country code',
                example: 'US',
                enum: [
                  'CA',
                  'DE',
                  'GR',
                  'IN',
                  'IT',
                  'MX',
                  'PE',
                  'PT',
                  'ES',
                  'AE',
                  'GB',
                  'US',
                ],
                'x-parser-schema-id': '<anonymous-schema-387>',
              },
              addressLocality: {
                type: 'string',
                description: 'City, Township.',
                example: 'Gotham City',
                maxLength: 50,
                'x-parser-schema-id': '<anonymous-schema-388>',
              },
              addressRegion: {
                type: 'string',
                description: 'State or Province.',
                example: 'New Jersey',
                maxLength: 3,
                'x-parser-schema-id': '<anonymous-schema-389>',
              },
              apn: {
                type: 'string',
                description: 'Assessors Parcel Number',
                example: 'ABC-12345-XX-XXXX',
                'x-parser-schema-id': '<anonymous-schema-471>',
              },
              image: {
                title: 'image',
                description:
                  'an ImageObject or URI reference to an image on the web.',
                type: 'array',
                'x-range': ['ImageObject'],
                items: [
                  {
                    type: 'object',
                    allOf: [
                      {
                        title: 'MediaObject',
                        description:
                          'an image, video or document availble for download',
                        'x-subclass': ['ImageObject', 'DigitalDocument'],
                        allOf: [
                          {
                            type: 'object',
                            required: ['type'],
                            properties: {
                              type: {
                                type: 'string',
                                description:
                                  'The item type (Linked-Data @type)',
                                'x-parser-schema-id': '<anonymous-schema-136>',
                              },
                            },
                            'x-parser-schema-id': 'Thing',
                          },
                          {
                            properties: {
                              type: {
                                type: 'string',
                                enum: [
                                  'MediaObject',
                                  'ImageObject',
                                  'DigitalDocument',
                                ],
                              },
                              id: {
                                description: 'the URL to access the item.',
                                example:
                                  'http://user.example.com/public/logo/fileName.zip',
                                type: 'string',
                                format: 'uri',
                              },
                              name: {
                                type: 'string',
                                description: 'the file name of the object.',
                                example: 'fileName.zip',
                              },
                              encodingFormat: {
                                type: 'string',
                                description: 'MIME type',
                                example: 'application/zip',
                              },
                              about: {
                                type: 'string',
                                format: 'uri',
                                description:
                                  'URI to the subject of the image or logo',
                                example:
                                  'http://user.example.com/profile/card#me',
                              },
                              url: {
                                type: 'string',
                                format: 'uri',
                                description: 'URL of the image content',
                                example:
                                  'http://user.example.com/public/profile/image.jpg',
                              },
                            },
                            'x-parser-schema-id': '<anonymous-schema-170>',
                          },
                        ],
                        'x-parser-schema-id': 'MediaObject',
                      },
                      {
                        title: 'ImageObject',
                        'x-range': 'ImageObject',
                        properties: {
                          type: {
                            enum: ['ImageObject'],
                            example: 'ImageObject',
                          },
                          id: {
                            example:
                              'http://user.example.com/public/logo/image.jpg',
                          },
                          name: {
                            example: 'image.jpg',
                          },
                          encodingFormat: {
                            example: 'image/jpeg',
                          },
                        },
                        'x-parser-schema-id': '<anonymous-schema-171>',
                      },
                    ],
                    'x-parser-schema-id': '<anonymous-schema-169>',
                  },
                ],
                'x-parser-schema-id': '<anonymous-schema-393>',
              },
              latitude: {
                type: 'number',
                description: 'The latitude of a location.',
                'x-title': 'latitude',
                example: 40.75,
                'x-parser-schema-id': '<anonymous-schema-275>',
              },
              listingId: {
                description: 'the local identifier for the listing (MLS #)',
                type: 'string',
                'x-parser-schema-id': '<anonymous-schema-472>',
              },
              livingArea: {
                description: 'property indoor space',
                example: {
                  type: 'QuantitativeValue',
                  unitCode: 'SqFt',
                  unitText: 'Square Feet',
                  value: 1500,
                },
                type: 'object',
                'x-range': 'QuantitativeValue',
                'x-parser-schema-id': '<anonymous-schema-473>',
              },
              longitude: {
                type: 'number',
                description: 'The longitude of a location.',
                'x-title': 'longitude',
                example: 73.98,
                'x-parser-schema-id': '<anonymous-schema-274>',
              },
              lotSize: {
                description: 'outdoor space minValue, maxValue',
                example: {
                  type: 'QuantitativeValue',
                  unitCode: 'AC',
                  unitText: 'Acres',
                  value: 0.5,
                },
                type: 'object',
                'x-range': 'QuantitativeValue',
                'x-parser-schema-id': '<anonymous-schema-474>',
              },
              numberOfBathrooms: {
                description: 'the number of bathrooms',
                example: '2',
                type: 'string',
                'x-parser-schema-id': '<anonymous-schema-475>',
              },
              numberOfBedrooms: {
                description: 'the number of bedrooms',
                example: '3',
                type: 'string',
                'x-parser-schema-id': '<anonymous-schema-476>',
              },
              numberOfRooms: {
                description: 'the total number of rooms in the building',
                type: 'string',
                example: 7,
                'x-parser-schema-id': '<anonymous-schema-477>',
              },
              postalCode: {
                type: 'string',
                description: 'Zip/Post Code',
                example: '10010',
                maxLength: 12,
                'x-parser-schema-id': '<anonymous-schema-409>',
              },
              propertySubType: {
                title: 'propertySubType',
                type: 'string',
                'x-range': 'PropertySubType',
                description:
                  'RESO property sub-type (see range for allowed values)',
                enum: [
                  'ApartmentPropertyType',
                  'BoatSlipPropertyType',
                  'CabinPropertyType',
                  'CondominiumPropertyType',
                  'DeededParkingPropertyType',
                  'DuplexPropertyType',
                  'FarmPropertyType',
                  'ManufacturedHomePropertyType',
                  'ManufacturedOnLandPropertyType',
                  'MobileHomePropertyType',
                  'OwnYourOwnPropertyType',
                  'QuadruplexPropertyType',
                  'RanchPropertyType',
                  'SingleFamilyPropertyType',
                  'StockCooperativePropertyType',
                  'TimesharePropertyType',
                  'TownhousePropertyType',
                  'TriplexPropertyType',
                  'AgriculturePropertyType',
                  'BusinessPropertyType',
                  'HotelMotelPropertyType',
                  'IndustrialPropertyType',
                  'MixedUsePropertyType',
                  'MultiFamilyPropertyType',
                  'OfficePropertyType',
                  'RetailPropertyType',
                  'UnimprovedLandPropertyType',
                  'WarehousePropertyType',
                ],
                'x-parser-schema-id': '<anonymous-schema-410>',
              },
              stories: {
                type: 'number',
                description: 'he number of floors in the property',
                example: 2,
                'x-parser-schema-id': '<anonymous-schema-413>',
              },
              streetAddress: {
                type: 'string',
                description: 'the street address',
                example: '1007 Mountain Gate Rd',
                maxLength: 75,
                'x-parser-schema-id': '<anonymous-schema-414>',
              },
              yearBuilt: {
                type: 'number',
                description: 'the year the structure was created',
                example: 1988,
                'x-parser-schema-id': '<anonymous-schema-417>',
              },
            },
            'x-parser-schema-id': 'RealEstateProperty',
          },
          {
            description: 'the subject property',
            'x-parser-schema-id': '<anonymous-schema-478>',
          },
          {
            properties: {
              additionalProperty: {
                example: {
                  heating: null,
                  cooling: null,
                  isForeclosure: null,
                  isShortsale: null,
                  score: 7,
                  parcelId: null,
                  averageSalePrice: {
                    type: 'PriceSpecification',
                    price: 7500000,
                    priceCurrency: 'USD',
                  },
                  nonDisclosureProperty: false,
                  taxAssessedValue: {
                    '@type': 'MonetaryAmount',
                    amount: '100000',
                    currency: 'USD',
                  },
                  taxAssessedYear: 2021,
                  inHouseCompanyListingUrl: null,
                  inHouseCompanyListingEvent: null,
                  neighborhoodMetrics: null,
                  neighborhoodName: 'DEER CREEK WOODS',
                  neighborhoodKey: null,
                  useNeighborhoodDataForCharts: false,
                  ownerName: 'Bob Jones',
                  ownerOccupied: 'Y',
                  ownersEstimatedEquity: {
                    '@type': 'MonetaryAmount',
                    amount: '100000',
                    currency: 'USD',
                  },
                  firstLoanPrice: {
                    '@type': 'MonetaryAmount',
                    amount: '100000',
                    currency: 'USD',
                  },
                  firstLoanLenderName: '',
                  secondLoanPrice: {
                    '@type': 'MonetaryAmount',
                    amount: null,
                    currency: null,
                  },
                  secondLoanLenderName: 'N/A',
                  lastRefinanceLoanVal1: {
                    '@type': 'MonetaryAmount',
                    amount: '100000',
                    currency: 'USD',
                  },
                  lastRefinanceLenderName1: 'N/A',
                  lastRefinanceLoanVal2: {
                    '@type': 'MonetaryAmount',
                    amount: null,
                    currency: null,
                  },
                  lastRefinanceLenderName2: 'N/A',
                  Title_Company: '',
                },
              },
            },
            'x-parser-schema-id': '<anonymous-schema-479>',
          },
        ],
        'x-parser-schema-id': '<anonymous-schema-469>',
      },
    },
    'x-parser-schema-id': 'PropertyValueReport',
  },
  QuantitativeValue: {
    title: 'QuantitativeValue',
    type: 'object',
    description: 'A point value or interval.',
    'x-range': 'QuantitativeValue',
    properties: {
      type: {
        type: 'string',
        description: 'QuantitativeValue',
        enum: ['QuantitativeValue'],
        'x-parser-schema-id': '<anonymous-schema-480>',
      },
      value: {
        type: 'number',
        description: 'the value (if a static value)',
        'x-parser-schema-id': '<anonymous-schema-481>',
      },
      minValue: {
        type: 'number',
        description: 'the lower value of a range',
        'x-parser-schema-id': '<anonymous-schema-482>',
      },
      maxValue: {
        type: 'number',
        description: 'the upper value of a range',
        'x-parser-schema-id': '<anonymous-schema-483>',
      },
      unitCode: {
        type: 'string',
        description: 'unit code (RESO or UN/CEFACT)',
        example: 'AC',
        'x-parser-schema-id': '<anonymous-schema-484>',
      },
      unitText: {
        type: 'string',
        description: 'unit code in common text',
        example: 'acres',
        'x-parser-schema-id': '<anonymous-schema-485>',
      },
    },
    'x-parser-schema-id': 'QuantitativeValue',
  },
  Question: {
    type: 'object',
    description:
      'A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.',
    title: 'Question',
    'x-range': 'Question',
    properties: {
      type: {
        type: 'string',
        description: 'The item type (Linked-Data @type)',
        enum: ['Question'],
        'x-parser-schema-id': '<anonymous-schema-486>',
      },
      text: {
        type: 'string',
        description: 'the question content',
        example: 'I would like to view 123 Main Street.',
        'x-parser-schema-id': '<anonymous-schema-487>',
      },
    },
    'x-parser-schema-id': 'Question',
  },
  RealEstateAgent: {
    allOf: [
      {
        properties: {
          type: {
            type: 'string',
            enum: ['RealEstateAgent'],
            description: 'RealEstateAgent',
          },
          id: {
            type: 'string',
            format: 'uri',
            description: 'Linked-Data URI (@id)',
            'x-parser-schema-id': '<anonymous-schema-190>',
          },
          name: {
            type: 'string',
          },
          givenName: {
            type: 'string',
            description: 'First Name of a person',
            example: 'Glenn',
            'x-parser-schema-id': '<anonymous-schema-225>',
          },
          familyName: {
            type: 'string',
            description: 'Last Name of a person',
            example: 'Miller',
            maxLength: 50,
            'x-parser-schema-id': '<anonymous-schema-254>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-488>',
      },
      {
        allOf: [
          {
            allOf: [
              {
                type: 'object',
                required: ['type'],
                properties: {
                  type: {
                    type: 'string',
                    description: 'The item type (Linked-Data @type)',
                    'x-parser-schema-id': '<anonymous-schema-136>',
                  },
                },
                'x-parser-schema-id': 'Thing',
              },
              {
                'x-kind': 'Organization',
                'x-parser-schema-id': '<anonymous-schema-325>',
              },
              {
                'x-hasSubclass': [
                  'RealEstateOrganization',
                  'RealEstateOffice',
                  'RealEstateAgent',
                ],
                'x-parser-schema-id': '<anonymous-schema-326>',
              },
              {
                'x-subClassOf': ['https://schema.org/Organization'],
                properties: {
                  address: {
                    type: 'object',
                    'x-range': 'PostalAddress',
                    description: 'A physical address.',
                    example: {
                      type: 'PostalAddress',
                      name: 'Home',
                      streetAddress: '1007 Mountain Gate Rd',
                      postOfficeBoxNumber: 'Box 1234',
                      addressRegion: 'New Jersey',
                      addressLocality: 'Gotham City',
                      postalCode: '10010',
                      addressCountry: 'USA',
                      addressCounty: 'Gotham County',
                      addressSubdivision: 'Gotham Heights',
                    },
                    'x-parser-schema-id': '<anonymous-schema-217>',
                  },
                  availableLanguage: {
                    title: 'availableLanguage',
                    type: 'array',
                    description:
                      'Please use one of the language codes from the IETF BCP 47 standard.',
                    'x-range': 'Language',
                    items: {
                      title: 'Language',
                      type: 'object',
                      description: 'a written or spoken Language',
                      'x-range': 'Language',
                      properties: {
                        type: {
                          type: 'string',
                          description: 'Language',
                          enum: ['Language'],
                          'x-parser-schema-id': '<anonymous-schema-279>',
                        },
                        name: {
                          type: 'string',
                          description: 'the display name of the language',
                          example: 'English',
                          'x-parser-schema-id': '<anonymous-schema-280>',
                        },
                        additionalName: {
                          type: 'string',
                          description: 'BCP 47 language code',
                          example: 'en-US',
                          'x-parser-schema-id': '<anonymous-schema-281>',
                        },
                      },
                      'x-parser-schema-id': 'Language',
                    },
                  },
                  branchCode: {
                    description:
                      'A short textual code that uniquely identifies a place of business.',
                    example:
                      'for BHHS profile events, see additionalProperty.OfficeId',
                    type: 'string',
                  },
                  certification: {
                    'x-range': 'Certification',
                    description:
                      'certifications granted to a person or organization',
                    type: 'array',
                    items: {
                      type: 'object',
                      example: {
                        type: 'Certification',
                        name: 'E-Agent Certified',
                        validFrom: '2019-06-13T07:00:00.000Z',
                        additionalProperty: {
                          ceritificationTypeId:
                            '86afafd3-ac25-4a89-9a6e-bebb3753c4b2',
                        },
                      },
                    },
                  },
                  contactPoint: {
                    type: 'object',
                    description:
                      'a named point of contact - telephone, email, faxNumber, and/or url for the entity',
                    'x-range': 'ContactPoint',
                    example: {
                      type: 'ContactPoint',
                      name: 'Work',
                      telephone: '800-555-5555',
                      faxNumber: '888-4BA-TMAN',
                      email: 'bruce@example.com',
                      url: 'https://example.com',
                    },
                    'x-parser-schema-id': '<anonymous-schema-220>',
                  },
                  email: {
                    type: 'string',
                    format: 'email',
                    description: 'Primary email address.',
                    example: 'user@example.com',
                    'x-parser-schema-id': '<anonymous-schema-553>',
                  },
                  faxNumber: {
                    type: 'string',
                    description: 'Primary fax number.',
                    example: '(873) 271-4802',
                    'x-parser-schema-id': '<anonymous-schema-224>',
                  },
                  image: {
                    description:
                      'an ImageObject or URI reference to an image of the entity on the web.',
                    title: 'image',
                    type: 'array',
                    'x-range': ['ImageObject'],
                    items: [
                      {
                        type: 'object',
                        allOf: [
                          {
                            title: 'MediaObject',
                            description:
                              'an image, video or document availble for download',
                            'x-subclass': ['ImageObject', 'DigitalDocument'],
                            allOf: [
                              {
                                type: 'object',
                                required: ['type'],
                                properties: {
                                  type: {
                                    type: 'string',
                                    description:
                                      'The item type (Linked-Data @type)',
                                    'x-parser-schema-id':
                                      '<anonymous-schema-136>',
                                  },
                                },
                                'x-parser-schema-id': 'Thing',
                              },
                              {
                                properties: {
                                  type: {
                                    type: 'string',
                                    enum: [
                                      'MediaObject',
                                      'ImageObject',
                                      'DigitalDocument',
                                    ],
                                  },
                                  id: {
                                    description: 'the URL to access the item.',
                                    example:
                                      'http://user.example.com/public/logo/fileName.zip',
                                    type: 'string',
                                    format: 'uri',
                                  },
                                  name: {
                                    type: 'string',
                                    description: 'the file name of the object.',
                                    example: 'fileName.zip',
                                  },
                                  encodingFormat: {
                                    type: 'string',
                                    description: 'MIME type',
                                    example: 'application/zip',
                                  },
                                  about: {
                                    type: 'string',
                                    format: 'uri',
                                    description:
                                      'URI to the subject of the image or logo',
                                    example:
                                      'http://user.example.com/profile/card#me',
                                  },
                                  url: {
                                    type: 'string',
                                    format: 'uri',
                                    description: 'URL of the image content',
                                    example:
                                      'http://user.example.com/public/profile/image.jpg',
                                  },
                                },
                                'x-parser-schema-id': '<anonymous-schema-170>',
                              },
                            ],
                            'x-parser-schema-id': 'MediaObject',
                          },
                          {
                            title: 'ImageObject',
                            'x-range': 'ImageObject',
                            properties: {
                              type: {
                                enum: ['ImageObject'],
                                example: 'ImageObject',
                              },
                              id: {
                                example:
                                  'http://user.example.com/public/logo/image.jpg',
                              },
                              name: {
                                example: 'image.jpg',
                              },
                              encodingFormat: {
                                example: 'image/jpeg',
                              },
                            },
                            'x-parser-schema-id': '<anonymous-schema-171>',
                          },
                        ],
                        'x-parser-schema-id': '<anonymous-schema-169>',
                      },
                    ],
                  },
                  logo: {
                    description: 'a logo associated with the organization.',
                    items: {
                      allOf: [
                        {
                          type: 'object',
                          title: 'DigitalDocument',
                          'x-range': 'DigitalDocument',
                          description: 'an electronic file.',
                          properties: {
                            type: {
                              type: 'string',
                              enum: ['DigitalDocument'],
                              'x-parser-schema-id': '<anonymous-schema-256>',
                            },
                            id: {
                              type: 'string',
                              example:
                                'http://user.example.com/public/logo/archive.zip',
                              'x-parser-schema-id': '<anonymous-schema-257>',
                            },
                            name: {
                              type: 'string',
                              description: 'document name or title',
                              example: 'archive.zip',
                              'x-parser-schema-id': '<anonymous-schema-258>',
                            },
                            encodingFormat: {
                              type: 'string',
                              description:
                                '[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)',
                              example: 'application/zip',
                              'x-parser-schema-id': '<anonymous-schema-259>',
                            },
                            about: {
                              type: 'object',
                              description: 'subject of the Document',
                              'x-range': 'Thing',
                              example: {
                                type: 'RealEstateTransaction',
                                identifier: {
                                  bmsTransactionId: 'xxxx',
                                },
                              },
                              'x-parser-schema-id': '<anonymous-schema-260>',
                            },
                            url: {
                              type: 'string',
                              description: 'public URL of the object',
                              example: 'https://example.com',
                              'x-parser-schema-id': '<anonymous-schema-261>',
                            },
                          },
                          'x-parser-schema-id': 'DigitalDocument',
                        },
                        {
                          description: 'an associated logo',
                          type: 'object',
                        },
                      ],
                      type: 'object',
                    },
                    type: 'array',
                    'x-range': ['ImageObject', 'DigitalDocument'],
                  },
                  name: {
                    description: 'Name or DBA.',
                    type: 'string',
                  },
                  parentOrganization: {
                    items: {
                      format: 'uri',
                      type: 'string',
                    },
                    type: 'array',
                  },
                  subOrganization: {
                    description: 'a child organization',
                    'x-range': ['RealEstateOrganization'],
                    type: 'array',
                    items: {
                      type: 'string',
                      format: 'uri',
                      example: 'http://org.example.com/profile/card#me',
                    },
                  },
                  telephone: {
                    type: 'string',
                    description: 'Primary phone number.',
                    example: '+15558675309',
                    'x-parser-schema-id': '<anonymous-schema-554>',
                  },
                  type: {
                    enum: ['Organization'],
                    type: 'string',
                  },
                  url: {
                    description: 'primary website/url for the entity.',
                    format: 'uri',
                    type: 'string',
                  },
                },
                'x-parser-schema-id': '<anonymous-schema-327>',
              },
            ],
            'x-parser-schema-id': 'Organization',
          },
          {
            title: 'RealEstateOrganization',
            description: 'A real estate franchisor, broker or business',
            'x-range': 'RealEstateOrganization',
            properties: {
              type: {
                description: 'RealEstateOrganzation',
                enum: [
                  'RealEstateOrganization',
                  'RealEstateOffice',
                  'RealEstateAgent',
                ],
                example: 'RealEstateOrganization',
              },
              areaServed: {
                type: 'object',
                description: 'the physical areas that make up the ServiceArea',
                'x-range': ['City', 'PostalCodeArea'],
                example: {
                  type: 'PostalCode',
                  postalCode: '91371',
                  addressLocality: 'Woodland Hills',
                  addressCounty: 'Los Angeles',
                  addressRegion: 'CA',
                  addressCountry: 'US',
                },
              },
              description: {
                example:
                  'The number on Gotham City Real Estate Company since 1940',
                type: 'string',
                description: 'description of the item.',
              },
              parentOrganization: {
                type: 'array',
                'x-range': 'RealEstateOrganization',
                description:
                  'A franchisor or affiliate network of which this organization plays a membership role.',
                items: {
                  type: 'string',
                  format: 'uri',
                },
              },
              numberOfSubOrganizations: {
                type: 'number',
                description: 'the number of offices for an affiliate.',
              },
              member: {
                title: 'member',
                description:
                  'A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.',
                type: 'array',
                'x-range': ['OrganizationRole', 'URI'],
                items: {
                  anyOf: [
                    {
                      title: 'OrganizationRole',
                      type: 'object',
                      description:
                        'describes a role played by a member and a group or organization.',
                      properties: {
                        type: {
                          type: 'string',
                          description:
                            'a role played by the member in the memberOf group',
                          enum: ['OrganizationRole'],
                          'x-parser-schema-id': '<anonymous-schema-308>',
                        },
                        roleName: {
                          type: 'string',
                          description: 'the role name',
                          example: 'Owner',
                          'x-parser-schema-id': '<anonymous-schema-309>',
                        },
                        memberOf: {
                          description:
                            'the org or group where the role is performed',
                          type: 'object',
                          example: {
                            type: 'RealEstateOrganization',
                            id: 'http://orgid.example.com/profile/card#me',
                          },
                          'x-parser-schema-id': '<anonymous-schema-310>',
                        },
                        member: {
                          description: 'member object or id',
                          type: 'string',
                          format: 'uri',
                          example:
                            'https://memberid.example.com/profile/card#me',
                          'x-parser-schema-id': '<anonymous-schema-311>',
                        },
                        startDate: {
                          type: 'string',
                          format: 'date-time',
                          description:
                            'date the member began performing this role',
                          'x-parser-schema-id': '<anonymous-schema-312>',
                        },
                        endDate: {
                          type: 'string',
                          format: 'date-time',
                          description:
                            'date the member stopped performing the role',
                          'x-parser-schema-id': '<anonymous-schema-313>',
                        },
                      },
                      'x-parser-schema-id': 'OrganizationRole',
                    },
                    {
                      type: 'string',
                      format: 'uri',
                    },
                  ],
                },
              },
              memberOf: {
                'x-range': ['OrganizationRole', 'MLSMembership'],
                description:
                  'An Organization (or ProgramMembership) to which this Person or Organization belongs.',
                type: 'array',
                items: {
                  allOf: [
                    {
                      title: 'OrganizationRole',
                      type: 'object',
                      description:
                        'describes a role played by a member and a group or organization.',
                      properties: {
                        type: {
                          type: 'string',
                          description:
                            'a role played by the member in the memberOf group',
                          enum: ['OrganizationRole'],
                          'x-parser-schema-id': '<anonymous-schema-308>',
                        },
                        roleName: {
                          type: 'string',
                          description: 'the role name',
                          example: 'Owner',
                          'x-parser-schema-id': '<anonymous-schema-309>',
                        },
                        memberOf: {
                          description:
                            'the org or group where the role is performed',
                          type: 'object',
                          example: {
                            type: 'RealEstateOrganization',
                            id: 'http://orgid.example.com/profile/card#me',
                          },
                          'x-parser-schema-id': '<anonymous-schema-310>',
                        },
                        member: {
                          description: 'member object or id',
                          type: 'string',
                          format: 'uri',
                          example:
                            'https://memberid.example.com/profile/card#me',
                          'x-parser-schema-id': '<anonymous-schema-311>',
                        },
                        startDate: {
                          type: 'string',
                          format: 'date-time',
                          description:
                            'date the member began performing this role',
                          'x-parser-schema-id': '<anonymous-schema-312>',
                        },
                        endDate: {
                          type: 'string',
                          format: 'date-time',
                          description:
                            'date the member stopped performing the role',
                          'x-parser-schema-id': '<anonymous-schema-313>',
                        },
                      },
                      'x-parser-schema-id': 'OrganizationRole',
                    },
                    {
                      type: 'object',
                      title: 'MLSMembership',
                      description: 'a membership relationship',
                      properties: {
                        type: {
                          type: 'string',
                          description: 'an MLS member relationship',
                          enum: ['MLSMembership'],
                          example: 'MLSMembership',
                          'x-parser-schema-id': '<anonymous-schema-315>',
                        },
                        roleName: {
                          type: 'string',
                          example: 'MLSMember',
                          'x-parser-schema-id': '<anonymous-schema-316>',
                        },
                        memberOf: {
                          type: 'object',
                          'x-range': 'MultipleListingService',
                          example: {
                            type: 'MultipleListingService',
                            name: 'GreatScottMLS',
                          },
                          'x-parser-schema-id': '<anonymous-schema-317>',
                        },
                        member: {
                          type: 'string',
                          format: 'uri',
                          example:
                            'https://{agent}.example.com/profile/card#me',
                          'x-parser-schema-id': '<anonymous-schema-318>',
                        },
                        memberId: {
                          type: 'string',
                          description: "the user's MLSID",
                          example: 'memberid123',
                          'x-parser-schema-id': '<anonymous-schema-319>',
                        },
                      },
                      'x-parser-schema-id': '<anonymous-schema-314>',
                    },
                  ],
                  'x-parser-schema-id': 'MLSMembership',
                },
              },
              permit: {
                type: 'array',
                'x-range': 'RealEstateLicense',
                items: {
                  type: 'object',
                  example: {
                    type: 'RealEstateLicense',
                    name: 'CA-DRE# 02068375',
                    identifier: {
                      type: 'PropertyValue',
                      name: 'CA-DRE',
                      value: '02068375',
                    },
                    issuedBy: {
                      type: 'State',
                      name: 'California',
                    },
                    issuedThrough: {
                      type: 'Service',
                      name: 'California Department of Real Estate',
                    },
                    validIn: {
                      type: 'State',
                      name: 'California',
                    },
                    validFrom: '2019-07-07T10:55:02Z',
                    validUntil: '2019-07-07T10:55:02Z',
                  },
                },
              },
            },
            'x-parser-schema-id': '<anonymous-schema-489>',
          },
        ],
        'x-parser-schema-id': 'RealEstateOrganization',
      },
      {
        description: 'A real estate agent',
        'x-parser-schema-id': '<anonymous-schema-490>',
      },
      {
        properties: {
          description: {
            example: 'The leading Gotham City Real Estate Agent.',
            type: 'string',
            'x-parser-schema-id': '<anonymous-schema-492>',
          },
          identifier: {
            description:
              'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.',
            example: {
              ContactID: '1234567',
            },
            type: 'object',
            'x-parser-schema-id': '<anonymous-schema-493>',
          },
          jobTitle: {
            description: "agent's job titles",
            items: {
              example: ['Accounting Department', 'Awards Coordinator'],
              type: 'string',
              'x-parser-schema-id': '<anonymous-schema-495>',
            },
            type: 'array',
            'x-parser-schema-id': '<anonymous-schema-494>',
          },
          name: {
            example: 'Louis Armstrong',
            type: 'string',
            'x-parser-schema-id': '<anonymous-schema-496>',
          },
          givenName: {
            type: 'string',
            description: 'First Name of a person',
            example: 'Glenn',
            'x-parser-schema-id': '<anonymous-schema-497>',
          },
          familyName: {
            type: 'string',
            description: 'Last Name of a person',
            example: 'Miller',
            maxLength: 50,
            'x-parser-schema-id': '<anonymous-schema-498>',
          },
          additionalName: {
            type: 'string',
            description:
              'any other name(s) associated with the entity, i.e. nickname, middle name, maiden name, etc. For multiple names, use a comma without space as a separator.',
            example: 'ambassador satch,pops,satchmo',
            'x-parser-schema-id': '<anonymous-schema-222>',
          },
          parentOrganization: {
            description:
              "URI reference to the agent's office. For teams, this can be a reference to the team leader/primary profile.",
            example: [
              'http://office-real-estate.example.com/',
              'http://batmanandrobinteam.example.com/',
            ],
            items: {
              format: 'uri',
              type: 'string',
              'x-parser-schema-id': '<anonymous-schema-500>',
            },
            type: 'array',
            'x-range': ['RealEstateOffice', 'RealEstateAgent'],
            'x-parser-schema-id': '<anonymous-schema-499>',
          },
          sameAs: {
            description: 'key/value id assigned to the record',
            example: {
              bmsID: '1234',
            },
            type: 'object',
            'x-parser-schema-id': '<anonymous-schema-501>',
          },
          subOrganization: {
            description: 'for teams: URI reference to a team member',
            items: {
              format: 'uri',
              type: 'string',
              'x-parser-schema-id': '<anonymous-schema-503>',
            },
            type: 'array',
            'x-range': 'RealEstateAgent',
            'x-parser-schema-id': '<anonymous-schema-502>',
          },
          type: {
            description: 'RealEstateAgent',
            enum: ['RealEstateAgent'],
            example: 'RealEstateAgent',
            type: 'string',
            'x-parser-schema-id': '<anonymous-schema-504>',
          },
        },
        title: 'RealEstateAgent',
        type: 'object',
        'x-parser-schema-id': '<anonymous-schema-491>',
      },
    ],
    description: 'a real estate agent or team.',
    type: 'object',
    'x-parser-schema-id': 'RealEstateAgent',
  },
  RealEstateLicense: {
    title: 'RealEstateLicense',
    type: 'object',
    description:
      'Real estate licenses, authorizations issued by state governments, give agents and brokers the legal ability to represent a home seller or buyer in the process of buying or selling real estate.',
    properties: {
      type: {
        type: 'string',
        enum: ['RealEstateLicense'],
        description: 'RealEstateLicense',
        'x-parser-schema-id': '<anonymous-schema-505>',
      },
      name: {
        type: 'string',
        description: "display value, i.e. 'CA-DRE# 02068375'",
        example: 'CA-DRE# 02068375',
        'x-parser-schema-id': '<anonymous-schema-506>',
      },
      issuedTo: {
        type: 'object',
        description: 'the license recipient',
        'x-range': ['RealEstateAgent', 'RealEstateOrganization'],
        example: {
          type: 'RealEstateAgent',
          id: 'http://{agentid}.example.com/profile/card#me',
        },
        'x-parser-schema-id': '<anonymous-schema-507>',
      },
      issuedBy: {
        type: 'object',
        description: 'the issuing organization or service',
        'x-range': ['State', 'Organization', 'AdministrativeArea'],
        example: {
          type: 'State',
          name: 'California',
        },
        'x-parser-schema-id': '<anonymous-schema-508>',
      },
      issuedThrough: {
        'x-range': ['Organization'],
        description: 'The service through with the permit was granted.',
        type: 'object',
        properties: {
          type: {
            type: 'string',
            example: 'Service',
            'x-parser-schema-id': '<anonymous-schema-510>',
          },
          name: {
            type: 'string',
            example: 'California Department of Real Estate',
            'x-parser-schema-id': '<anonymous-schema-511>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-509>',
      },
      validIn: {
        type: 'object',
        description: 'the state where the RealEstateLicense is valid',
        'x-range': ['State', 'City', 'GeographicArea', 'PostalCode'],
        example: {
          type: 'State',
          name: 'California',
        },
        'x-parser-schema-id': '<anonymous-schema-512>',
      },
      validFrom: {
        type: 'string',
        format: 'date-time',
        description: 'the first date and time on which the license is valid.',
        'x-parser-schema-id': '<anonymous-schema-513>',
      },
      validUntil: {
        type: 'string',
        format: 'date-time',
        description: 'the last date and time on which the license is valid.',
        'x-parser-schema-id': '<anonymous-schema-514>',
      },
    },
    'x-parser-schema-id': 'RealEstateLicense',
  },
  RealEstateOffice: {
    type: 'object',
    description: 'A real estate office / place of business.',
    allOf: [
      {
        allOf: [
          {
            allOf: [
              {
                type: 'object',
                required: ['type'],
                properties: {
                  type: {
                    type: 'string',
                    description: 'The item type (Linked-Data @type)',
                    'x-parser-schema-id': '<anonymous-schema-136>',
                  },
                },
                'x-parser-schema-id': 'Thing',
              },
              {
                'x-kind': 'Organization',
                'x-parser-schema-id': '<anonymous-schema-325>',
              },
              {
                'x-hasSubclass': [
                  'RealEstateOrganization',
                  'RealEstateOffice',
                  'RealEstateAgent',
                ],
                'x-parser-schema-id': '<anonymous-schema-326>',
              },
              {
                'x-subClassOf': ['https://schema.org/Organization'],
                properties: {
                  address: {
                    type: 'object',
                    'x-range': 'PostalAddress',
                    description: 'A physical address.',
                    example: {
                      type: 'PostalAddress',
                      name: 'Home',
                      streetAddress: '1007 Mountain Gate Rd',
                      postOfficeBoxNumber: 'Box 1234',
                      addressRegion: 'New Jersey',
                      addressLocality: 'Gotham City',
                      postalCode: '10010',
                      addressCountry: 'USA',
                      addressCounty: 'Gotham County',
                      addressSubdivision: 'Gotham Heights',
                    },
                    'x-parser-schema-id': '<anonymous-schema-217>',
                  },
                  availableLanguage: {
                    title: 'availableLanguage',
                    type: 'array',
                    description:
                      'Please use one of the language codes from the IETF BCP 47 standard.',
                    'x-range': 'Language',
                    items: {
                      title: 'Language',
                      type: 'object',
                      description: 'a written or spoken Language',
                      'x-range': 'Language',
                      properties: {
                        type: {
                          type: 'string',
                          description: 'Language',
                          enum: ['Language'],
                          'x-parser-schema-id': '<anonymous-schema-279>',
                        },
                        name: {
                          type: 'string',
                          description: 'the display name of the language',
                          example: 'English',
                          'x-parser-schema-id': '<anonymous-schema-280>',
                        },
                        additionalName: {
                          type: 'string',
                          description: 'BCP 47 language code',
                          example: 'en-US',
                          'x-parser-schema-id': '<anonymous-schema-281>',
                        },
                      },
                      'x-parser-schema-id': 'Language',
                    },
                  },
                  branchCode: {
                    description:
                      'A short textual code that uniquely identifies a place of business.',
                    example:
                      'for BHHS profile events, see additionalProperty.OfficeId',
                    type: 'string',
                  },
                  certification: {
                    'x-range': 'Certification',
                    description:
                      'certifications granted to a person or organization',
                    type: 'array',
                    items: {
                      type: 'object',
                      example: {
                        type: 'Certification',
                        name: 'E-Agent Certified',
                        validFrom: '2019-06-13T07:00:00.000Z',
                        additionalProperty: {
                          ceritificationTypeId:
                            '86afafd3-ac25-4a89-9a6e-bebb3753c4b2',
                        },
                      },
                    },
                  },
                  contactPoint: {
                    type: 'object',
                    description:
                      'a named point of contact - telephone, email, faxNumber, and/or url for the entity',
                    'x-range': 'ContactPoint',
                    example: {
                      type: 'ContactPoint',
                      name: 'Work',
                      telephone: '800-555-5555',
                      faxNumber: '888-4BA-TMAN',
                      email: 'bruce@example.com',
                      url: 'https://example.com',
                    },
                    'x-parser-schema-id': '<anonymous-schema-220>',
                  },
                  email: {
                    type: 'string',
                    format: 'email',
                    description: 'Primary email address.',
                    example: 'user@example.com',
                    'x-parser-schema-id': '<anonymous-schema-553>',
                  },
                  faxNumber: {
                    type: 'string',
                    description: 'Primary fax number.',
                    example: '(873) 271-4802',
                    'x-parser-schema-id': '<anonymous-schema-224>',
                  },
                  image: {
                    description:
                      'an ImageObject or URI reference to an image of the entity on the web.',
                    title: 'image',
                    type: 'array',
                    'x-range': ['ImageObject'],
                    items: [
                      {
                        type: 'object',
                        allOf: [
                          {
                            title: 'MediaObject',
                            description:
                              'an image, video or document availble for download',
                            'x-subclass': ['ImageObject', 'DigitalDocument'],
                            allOf: [
                              {
                                type: 'object',
                                required: ['type'],
                                properties: {
                                  type: {
                                    type: 'string',
                                    description:
                                      'The item type (Linked-Data @type)',
                                    'x-parser-schema-id':
                                      '<anonymous-schema-136>',
                                  },
                                },
                                'x-parser-schema-id': 'Thing',
                              },
                              {
                                properties: {
                                  type: {
                                    type: 'string',
                                    enum: [
                                      'MediaObject',
                                      'ImageObject',
                                      'DigitalDocument',
                                    ],
                                  },
                                  id: {
                                    description: 'the URL to access the item.',
                                    example:
                                      'http://user.example.com/public/logo/fileName.zip',
                                    type: 'string',
                                    format: 'uri',
                                  },
                                  name: {
                                    type: 'string',
                                    description: 'the file name of the object.',
                                    example: 'fileName.zip',
                                  },
                                  encodingFormat: {
                                    type: 'string',
                                    description: 'MIME type',
                                    example: 'application/zip',
                                  },
                                  about: {
                                    type: 'string',
                                    format: 'uri',
                                    description:
                                      'URI to the subject of the image or logo',
                                    example:
                                      'http://user.example.com/profile/card#me',
                                  },
                                  url: {
                                    type: 'string',
                                    format: 'uri',
                                    description: 'URL of the image content',
                                    example:
                                      'http://user.example.com/public/profile/image.jpg',
                                  },
                                },
                                'x-parser-schema-id': '<anonymous-schema-170>',
                              },
                            ],
                            'x-parser-schema-id': 'MediaObject',
                          },
                          {
                            title: 'ImageObject',
                            'x-range': 'ImageObject',
                            properties: {
                              type: {
                                enum: ['ImageObject'],
                                example: 'ImageObject',
                              },
                              id: {
                                example:
                                  'http://user.example.com/public/logo/image.jpg',
                              },
                              name: {
                                example: 'image.jpg',
                              },
                              encodingFormat: {
                                example: 'image/jpeg',
                              },
                            },
                            'x-parser-schema-id': '<anonymous-schema-171>',
                          },
                        ],
                        'x-parser-schema-id': '<anonymous-schema-169>',
                      },
                    ],
                  },
                  logo: {
                    description: 'a logo associated with the organization.',
                    items: {
                      allOf: [
                        {
                          type: 'object',
                          title: 'DigitalDocument',
                          'x-range': 'DigitalDocument',
                          description: 'an electronic file.',
                          properties: {
                            type: {
                              type: 'string',
                              enum: ['DigitalDocument'],
                              'x-parser-schema-id': '<anonymous-schema-256>',
                            },
                            id: {
                              type: 'string',
                              example:
                                'http://user.example.com/public/logo/archive.zip',
                              'x-parser-schema-id': '<anonymous-schema-257>',
                            },
                            name: {
                              type: 'string',
                              description: 'document name or title',
                              example: 'archive.zip',
                              'x-parser-schema-id': '<anonymous-schema-258>',
                            },
                            encodingFormat: {
                              type: 'string',
                              description:
                                '[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)',
                              example: 'application/zip',
                              'x-parser-schema-id': '<anonymous-schema-259>',
                            },
                            about: {
                              type: 'object',
                              description: 'subject of the Document',
                              'x-range': 'Thing',
                              example: {
                                type: 'RealEstateTransaction',
                                identifier: {
                                  bmsTransactionId: 'xxxx',
                                },
                              },
                              'x-parser-schema-id': '<anonymous-schema-260>',
                            },
                            url: {
                              type: 'string',
                              description: 'public URL of the object',
                              example: 'https://example.com',
                              'x-parser-schema-id': '<anonymous-schema-261>',
                            },
                          },
                          'x-parser-schema-id': 'DigitalDocument',
                        },
                        {
                          description: 'an associated logo',
                          type: 'object',
                        },
                      ],
                      type: 'object',
                    },
                    type: 'array',
                    'x-range': ['ImageObject', 'DigitalDocument'],
                  },
                  name: {
                    description: 'Name or DBA.',
                    type: 'string',
                  },
                  parentOrganization: {
                    items: {
                      format: 'uri',
                      type: 'string',
                    },
                    type: 'array',
                  },
                  subOrganization: {
                    description: 'a child organization',
                    'x-range': ['RealEstateOrganization'],
                    type: 'array',
                    items: {
                      type: 'string',
                      format: 'uri',
                      example: 'http://org.example.com/profile/card#me',
                    },
                  },
                  telephone: {
                    type: 'string',
                    description: 'Primary phone number.',
                    example: '+15558675309',
                    'x-parser-schema-id': '<anonymous-schema-554>',
                  },
                  type: {
                    enum: ['Organization'],
                    type: 'string',
                  },
                  url: {
                    description: 'primary website/url for the entity.',
                    format: 'uri',
                    type: 'string',
                  },
                },
                'x-parser-schema-id': '<anonymous-schema-327>',
              },
            ],
            'x-parser-schema-id': 'Organization',
          },
          {
            title: 'RealEstateOrganization',
            description: 'A real estate franchisor, broker or business',
            'x-range': 'RealEstateOrganization',
            properties: {
              type: {
                description: 'RealEstateOrganzation',
                enum: [
                  'RealEstateOrganization',
                  'RealEstateOffice',
                  'RealEstateAgent',
                ],
                example: 'RealEstateOrganization',
              },
              areaServed: {
                type: 'object',
                description: 'the physical areas that make up the ServiceArea',
                'x-range': ['City', 'PostalCodeArea'],
                example: {
                  type: 'PostalCode',
                  postalCode: '91371',
                  addressLocality: 'Woodland Hills',
                  addressCounty: 'Los Angeles',
                  addressRegion: 'CA',
                  addressCountry: 'US',
                },
              },
              description: {
                example:
                  'The number on Gotham City Real Estate Company since 1940',
                type: 'string',
                description: 'description of the item.',
              },
              parentOrganization: {
                type: 'array',
                'x-range': 'RealEstateOrganization',
                description:
                  'A franchisor or affiliate network of which this organization plays a membership role.',
                items: {
                  type: 'string',
                  format: 'uri',
                },
              },
              numberOfSubOrganizations: {
                type: 'number',
                description: 'the number of offices for an affiliate.',
              },
              member: {
                title: 'member',
                description:
                  'A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.',
                type: 'array',
                'x-range': ['OrganizationRole', 'URI'],
                items: {
                  anyOf: [
                    {
                      title: 'OrganizationRole',
                      type: 'object',
                      description:
                        'describes a role played by a member and a group or organization.',
                      properties: {
                        type: {
                          type: 'string',
                          description:
                            'a role played by the member in the memberOf group',
                          enum: ['OrganizationRole'],
                          'x-parser-schema-id': '<anonymous-schema-308>',
                        },
                        roleName: {
                          type: 'string',
                          description: 'the role name',
                          example: 'Owner',
                          'x-parser-schema-id': '<anonymous-schema-309>',
                        },
                        memberOf: {
                          description:
                            'the org or group where the role is performed',
                          type: 'object',
                          example: {
                            type: 'RealEstateOrganization',
                            id: 'http://orgid.example.com/profile/card#me',
                          },
                          'x-parser-schema-id': '<anonymous-schema-310>',
                        },
                        member: {
                          description: 'member object or id',
                          type: 'string',
                          format: 'uri',
                          example:
                            'https://memberid.example.com/profile/card#me',
                          'x-parser-schema-id': '<anonymous-schema-311>',
                        },
                        startDate: {
                          type: 'string',
                          format: 'date-time',
                          description:
                            'date the member began performing this role',
                          'x-parser-schema-id': '<anonymous-schema-312>',
                        },
                        endDate: {
                          type: 'string',
                          format: 'date-time',
                          description:
                            'date the member stopped performing the role',
                          'x-parser-schema-id': '<anonymous-schema-313>',
                        },
                      },
                      'x-parser-schema-id': 'OrganizationRole',
                    },
                    {
                      type: 'string',
                      format: 'uri',
                    },
                  ],
                },
              },
              memberOf: {
                'x-range': ['OrganizationRole', 'MLSMembership'],
                description:
                  'An Organization (or ProgramMembership) to which this Person or Organization belongs.',
                type: 'array',
                items: {
                  allOf: [
                    {
                      title: 'OrganizationRole',
                      type: 'object',
                      description:
                        'describes a role played by a member and a group or organization.',
                      properties: {
                        type: {
                          type: 'string',
                          description:
                            'a role played by the member in the memberOf group',
                          enum: ['OrganizationRole'],
                          'x-parser-schema-id': '<anonymous-schema-308>',
                        },
                        roleName: {
                          type: 'string',
                          description: 'the role name',
                          example: 'Owner',
                          'x-parser-schema-id': '<anonymous-schema-309>',
                        },
                        memberOf: {
                          description:
                            'the org or group where the role is performed',
                          type: 'object',
                          example: {
                            type: 'RealEstateOrganization',
                            id: 'http://orgid.example.com/profile/card#me',
                          },
                          'x-parser-schema-id': '<anonymous-schema-310>',
                        },
                        member: {
                          description: 'member object or id',
                          type: 'string',
                          format: 'uri',
                          example:
                            'https://memberid.example.com/profile/card#me',
                          'x-parser-schema-id': '<anonymous-schema-311>',
                        },
                        startDate: {
                          type: 'string',
                          format: 'date-time',
                          description:
                            'date the member began performing this role',
                          'x-parser-schema-id': '<anonymous-schema-312>',
                        },
                        endDate: {
                          type: 'string',
                          format: 'date-time',
                          description:
                            'date the member stopped performing the role',
                          'x-parser-schema-id': '<anonymous-schema-313>',
                        },
                      },
                      'x-parser-schema-id': 'OrganizationRole',
                    },
                    {
                      type: 'object',
                      title: 'MLSMembership',
                      description: 'a membership relationship',
                      properties: {
                        type: {
                          type: 'string',
                          description: 'an MLS member relationship',
                          enum: ['MLSMembership'],
                          example: 'MLSMembership',
                          'x-parser-schema-id': '<anonymous-schema-315>',
                        },
                        roleName: {
                          type: 'string',
                          example: 'MLSMember',
                          'x-parser-schema-id': '<anonymous-schema-316>',
                        },
                        memberOf: {
                          type: 'object',
                          'x-range': 'MultipleListingService',
                          example: {
                            type: 'MultipleListingService',
                            name: 'GreatScottMLS',
                          },
                          'x-parser-schema-id': '<anonymous-schema-317>',
                        },
                        member: {
                          type: 'string',
                          format: 'uri',
                          example:
                            'https://{agent}.example.com/profile/card#me',
                          'x-parser-schema-id': '<anonymous-schema-318>',
                        },
                        memberId: {
                          type: 'string',
                          description: "the user's MLSID",
                          example: 'memberid123',
                          'x-parser-schema-id': '<anonymous-schema-319>',
                        },
                      },
                      'x-parser-schema-id': '<anonymous-schema-314>',
                    },
                  ],
                  'x-parser-schema-id': 'MLSMembership',
                },
              },
              permit: {
                type: 'array',
                'x-range': 'RealEstateLicense',
                items: {
                  type: 'object',
                  example: {
                    type: 'RealEstateLicense',
                    name: 'CA-DRE# 02068375',
                    identifier: {
                      type: 'PropertyValue',
                      name: 'CA-DRE',
                      value: '02068375',
                    },
                    issuedBy: {
                      type: 'State',
                      name: 'California',
                    },
                    issuedThrough: {
                      type: 'Service',
                      name: 'California Department of Real Estate',
                    },
                    validIn: {
                      type: 'State',
                      name: 'California',
                    },
                    validFrom: '2019-07-07T10:55:02Z',
                    validUntil: '2019-07-07T10:55:02Z',
                  },
                },
              },
            },
            'x-parser-schema-id': '<anonymous-schema-489>',
          },
        ],
        'x-parser-schema-id': 'RealEstateOrganization',
      },
      {
        title: 'RealEstateOffice',
        properties: {
          type: {
            type: 'string',
            description: 'RealEstateOffice',
            enum: ['RealEstateOffice'],
          },
          contactPoint: {
            description:
              'department or role specific contact points, i.e. relocation.',
            example: [
              {
                type: 'ContactPoint',
                name: 'Relocation',
                telephone: '1-245-880-8222',
                faxNumber: '958-530-3473',
                email: 'relocation@example.com',
              },
            ],
          },
          description: {
            example: 'The number on Gotham City Real Estate Company since 1940',
          },
          parentOrganization: {
            description: 'Office broker or franchisor.',
            'x-range': 'RealEstateOrganization',
          },
          subOrganization: {
            type: 'array',
            'x-range': 'RealEstateAgent',
            description: 'Agents and teams associated with the office.',
            items: {
              type: 'string',
              format: 'uri',
            },
          },
          geoCoordinates: {
            title: 'GeoCoordinates',
            type: 'object',
            description: 'a lat/long point.',
            'x-range': 'GeoCoordinates',
            properties: {
              type: {
                type: 'string',
                description: 'GeoCordinates',
                enum: ['GeoCoordinates'],
                'x-parser-schema-id': '<anonymous-schema-273>',
              },
              longitude: {
                type: 'number',
                description: 'The longitude of a location.',
                'x-title': 'longitude',
                example: 73.98,
                'x-parser-schema-id': '<anonymous-schema-274>',
              },
              latitude: {
                type: 'number',
                description: 'The latitude of a location.',
                'x-title': 'latitude',
                example: 40.75,
                'x-parser-schema-id': '<anonymous-schema-275>',
              },
            },
          },
        },
        'x-parser-schema-id': '<anonymous-schema-515>',
      },
    ],
    'x-parser-schema-id': 'RealEstateOffice',
  },
  RealEstateOrganization: {
    allOf: [
      {
        allOf: [
          {
            type: 'object',
            required: ['type'],
            properties: {
              type: {
                type: 'string',
                description: 'The item type (Linked-Data @type)',
                'x-parser-schema-id': '<anonymous-schema-136>',
              },
            },
            'x-parser-schema-id': 'Thing',
          },
          {
            'x-kind': 'Organization',
            'x-parser-schema-id': '<anonymous-schema-325>',
          },
          {
            'x-hasSubclass': [
              'RealEstateOrganization',
              'RealEstateOffice',
              'RealEstateAgent',
            ],
            'x-parser-schema-id': '<anonymous-schema-326>',
          },
          {
            'x-subClassOf': ['https://schema.org/Organization'],
            properties: {
              address: {
                type: 'object',
                'x-range': 'PostalAddress',
                description: 'A physical address.',
                example: {
                  type: 'PostalAddress',
                  name: 'Home',
                  streetAddress: '1007 Mountain Gate Rd',
                  postOfficeBoxNumber: 'Box 1234',
                  addressRegion: 'New Jersey',
                  addressLocality: 'Gotham City',
                  postalCode: '10010',
                  addressCountry: 'USA',
                  addressCounty: 'Gotham County',
                  addressSubdivision: 'Gotham Heights',
                },
                'x-parser-schema-id': '<anonymous-schema-217>',
              },
              availableLanguage: {
                title: 'availableLanguage',
                type: 'array',
                description:
                  'Please use one of the language codes from the IETF BCP 47 standard.',
                'x-range': 'Language',
                items: {
                  title: 'Language',
                  type: 'object',
                  description: 'a written or spoken Language',
                  'x-range': 'Language',
                  properties: {
                    type: {
                      type: 'string',
                      description: 'Language',
                      enum: ['Language'],
                      'x-parser-schema-id': '<anonymous-schema-279>',
                    },
                    name: {
                      type: 'string',
                      description: 'the display name of the language',
                      example: 'English',
                      'x-parser-schema-id': '<anonymous-schema-280>',
                    },
                    additionalName: {
                      type: 'string',
                      description: 'BCP 47 language code',
                      example: 'en-US',
                      'x-parser-schema-id': '<anonymous-schema-281>',
                    },
                  },
                  'x-parser-schema-id': 'Language',
                },
              },
              branchCode: {
                description:
                  'A short textual code that uniquely identifies a place of business.',
                example:
                  'for BHHS profile events, see additionalProperty.OfficeId',
                type: 'string',
              },
              certification: {
                'x-range': 'Certification',
                description:
                  'certifications granted to a person or organization',
                type: 'array',
                items: {
                  type: 'object',
                  example: {
                    type: 'Certification',
                    name: 'E-Agent Certified',
                    validFrom: '2019-06-13T07:00:00.000Z',
                    additionalProperty: {
                      ceritificationTypeId:
                        '86afafd3-ac25-4a89-9a6e-bebb3753c4b2',
                    },
                  },
                },
              },
              contactPoint: {
                type: 'object',
                description:
                  'a named point of contact - telephone, email, faxNumber, and/or url for the entity',
                'x-range': 'ContactPoint',
                example: {
                  type: 'ContactPoint',
                  name: 'Work',
                  telephone: '800-555-5555',
                  faxNumber: '888-4BA-TMAN',
                  email: 'bruce@example.com',
                  url: 'https://example.com',
                },
                'x-parser-schema-id': '<anonymous-schema-220>',
              },
              email: {
                type: 'string',
                format: 'email',
                description: 'Primary email address.',
                example: 'user@example.com',
                'x-parser-schema-id': '<anonymous-schema-553>',
              },
              faxNumber: {
                type: 'string',
                description: 'Primary fax number.',
                example: '(873) 271-4802',
                'x-parser-schema-id': '<anonymous-schema-224>',
              },
              image: {
                description:
                  'an ImageObject or URI reference to an image of the entity on the web.',
                title: 'image',
                type: 'array',
                'x-range': ['ImageObject'],
                items: [
                  {
                    type: 'object',
                    allOf: [
                      {
                        title: 'MediaObject',
                        description:
                          'an image, video or document availble for download',
                        'x-subclass': ['ImageObject', 'DigitalDocument'],
                        allOf: [
                          {
                            type: 'object',
                            required: ['type'],
                            properties: {
                              type: {
                                type: 'string',
                                description:
                                  'The item type (Linked-Data @type)',
                                'x-parser-schema-id': '<anonymous-schema-136>',
                              },
                            },
                            'x-parser-schema-id': 'Thing',
                          },
                          {
                            properties: {
                              type: {
                                type: 'string',
                                enum: [
                                  'MediaObject',
                                  'ImageObject',
                                  'DigitalDocument',
                                ],
                              },
                              id: {
                                description: 'the URL to access the item.',
                                example:
                                  'http://user.example.com/public/logo/fileName.zip',
                                type: 'string',
                                format: 'uri',
                              },
                              name: {
                                type: 'string',
                                description: 'the file name of the object.',
                                example: 'fileName.zip',
                              },
                              encodingFormat: {
                                type: 'string',
                                description: 'MIME type',
                                example: 'application/zip',
                              },
                              about: {
                                type: 'string',
                                format: 'uri',
                                description:
                                  'URI to the subject of the image or logo',
                                example:
                                  'http://user.example.com/profile/card#me',
                              },
                              url: {
                                type: 'string',
                                format: 'uri',
                                description: 'URL of the image content',
                                example:
                                  'http://user.example.com/public/profile/image.jpg',
                              },
                            },
                            'x-parser-schema-id': '<anonymous-schema-170>',
                          },
                        ],
                        'x-parser-schema-id': 'MediaObject',
                      },
                      {
                        title: 'ImageObject',
                        'x-range': 'ImageObject',
                        properties: {
                          type: {
                            enum: ['ImageObject'],
                            example: 'ImageObject',
                          },
                          id: {
                            example:
                              'http://user.example.com/public/logo/image.jpg',
                          },
                          name: {
                            example: 'image.jpg',
                          },
                          encodingFormat: {
                            example: 'image/jpeg',
                          },
                        },
                        'x-parser-schema-id': '<anonymous-schema-171>',
                      },
                    ],
                    'x-parser-schema-id': '<anonymous-schema-169>',
                  },
                ],
              },
              logo: {
                description: 'a logo associated with the organization.',
                items: {
                  allOf: [
                    {
                      type: 'object',
                      title: 'DigitalDocument',
                      'x-range': 'DigitalDocument',
                      description: 'an electronic file.',
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['DigitalDocument'],
                          'x-parser-schema-id': '<anonymous-schema-256>',
                        },
                        id: {
                          type: 'string',
                          example:
                            'http://user.example.com/public/logo/archive.zip',
                          'x-parser-schema-id': '<anonymous-schema-257>',
                        },
                        name: {
                          type: 'string',
                          description: 'document name or title',
                          example: 'archive.zip',
                          'x-parser-schema-id': '<anonymous-schema-258>',
                        },
                        encodingFormat: {
                          type: 'string',
                          description:
                            '[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)',
                          example: 'application/zip',
                          'x-parser-schema-id': '<anonymous-schema-259>',
                        },
                        about: {
                          type: 'object',
                          description: 'subject of the Document',
                          'x-range': 'Thing',
                          example: {
                            type: 'RealEstateTransaction',
                            identifier: {
                              bmsTransactionId: 'xxxx',
                            },
                          },
                          'x-parser-schema-id': '<anonymous-schema-260>',
                        },
                        url: {
                          type: 'string',
                          description: 'public URL of the object',
                          example: 'https://example.com',
                          'x-parser-schema-id': '<anonymous-schema-261>',
                        },
                      },
                      'x-parser-schema-id': 'DigitalDocument',
                    },
                    {
                      description: 'an associated logo',
                      type: 'object',
                    },
                  ],
                  type: 'object',
                },
                type: 'array',
                'x-range': ['ImageObject', 'DigitalDocument'],
              },
              name: {
                description: 'Name or DBA.',
                type: 'string',
              },
              parentOrganization: {
                items: {
                  format: 'uri',
                  type: 'string',
                },
                type: 'array',
              },
              subOrganization: {
                description: 'a child organization',
                'x-range': ['RealEstateOrganization'],
                type: 'array',
                items: {
                  type: 'string',
                  format: 'uri',
                  example: 'http://org.example.com/profile/card#me',
                },
              },
              telephone: {
                type: 'string',
                description: 'Primary phone number.',
                example: '+15558675309',
                'x-parser-schema-id': '<anonymous-schema-554>',
              },
              type: {
                enum: ['Organization'],
                type: 'string',
              },
              url: {
                description: 'primary website/url for the entity.',
                format: 'uri',
                type: 'string',
              },
            },
            'x-parser-schema-id': '<anonymous-schema-327>',
          },
        ],
        'x-parser-schema-id': 'Organization',
      },
      {
        title: 'RealEstateOrganization',
        description: 'A real estate franchisor, broker or business',
        'x-range': 'RealEstateOrganization',
        properties: {
          type: {
            description: 'RealEstateOrganzation',
            enum: [
              'RealEstateOrganization',
              'RealEstateOffice',
              'RealEstateAgent',
            ],
            example: 'RealEstateOrganization',
          },
          areaServed: {
            type: 'object',
            description: 'the physical areas that make up the ServiceArea',
            'x-range': ['City', 'PostalCodeArea'],
            example: {
              type: 'PostalCode',
              postalCode: '91371',
              addressLocality: 'Woodland Hills',
              addressCounty: 'Los Angeles',
              addressRegion: 'CA',
              addressCountry: 'US',
            },
          },
          description: {
            example: 'The number on Gotham City Real Estate Company since 1940',
            type: 'string',
            description: 'description of the item.',
          },
          parentOrganization: {
            type: 'array',
            'x-range': 'RealEstateOrganization',
            description:
              'A franchisor or affiliate network of which this organization plays a membership role.',
            items: {
              type: 'string',
              format: 'uri',
            },
          },
          numberOfSubOrganizations: {
            type: 'number',
            description: 'the number of offices for an affiliate.',
          },
          member: {
            title: 'member',
            description:
              'A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.',
            type: 'array',
            'x-range': ['OrganizationRole', 'URI'],
            items: {
              anyOf: [
                {
                  title: 'OrganizationRole',
                  type: 'object',
                  description:
                    'describes a role played by a member and a group or organization.',
                  properties: {
                    type: {
                      type: 'string',
                      description:
                        'a role played by the member in the memberOf group',
                      enum: ['OrganizationRole'],
                      'x-parser-schema-id': '<anonymous-schema-308>',
                    },
                    roleName: {
                      type: 'string',
                      description: 'the role name',
                      example: 'Owner',
                      'x-parser-schema-id': '<anonymous-schema-309>',
                    },
                    memberOf: {
                      description:
                        'the org or group where the role is performed',
                      type: 'object',
                      example: {
                        type: 'RealEstateOrganization',
                        id: 'http://orgid.example.com/profile/card#me',
                      },
                      'x-parser-schema-id': '<anonymous-schema-310>',
                    },
                    member: {
                      description: 'member object or id',
                      type: 'string',
                      format: 'uri',
                      example: 'https://memberid.example.com/profile/card#me',
                      'x-parser-schema-id': '<anonymous-schema-311>',
                    },
                    startDate: {
                      type: 'string',
                      format: 'date-time',
                      description: 'date the member began performing this role',
                      'x-parser-schema-id': '<anonymous-schema-312>',
                    },
                    endDate: {
                      type: 'string',
                      format: 'date-time',
                      description:
                        'date the member stopped performing the role',
                      'x-parser-schema-id': '<anonymous-schema-313>',
                    },
                  },
                  'x-parser-schema-id': 'OrganizationRole',
                },
                {
                  type: 'string',
                  format: 'uri',
                },
              ],
            },
          },
          memberOf: {
            'x-range': ['OrganizationRole', 'MLSMembership'],
            description:
              'An Organization (or ProgramMembership) to which this Person or Organization belongs.',
            type: 'array',
            items: {
              allOf: [
                {
                  title: 'OrganizationRole',
                  type: 'object',
                  description:
                    'describes a role played by a member and a group or organization.',
                  properties: {
                    type: {
                      type: 'string',
                      description:
                        'a role played by the member in the memberOf group',
                      enum: ['OrganizationRole'],
                      'x-parser-schema-id': '<anonymous-schema-308>',
                    },
                    roleName: {
                      type: 'string',
                      description: 'the role name',
                      example: 'Owner',
                      'x-parser-schema-id': '<anonymous-schema-309>',
                    },
                    memberOf: {
                      description:
                        'the org or group where the role is performed',
                      type: 'object',
                      example: {
                        type: 'RealEstateOrganization',
                        id: 'http://orgid.example.com/profile/card#me',
                      },
                      'x-parser-schema-id': '<anonymous-schema-310>',
                    },
                    member: {
                      description: 'member object or id',
                      type: 'string',
                      format: 'uri',
                      example: 'https://memberid.example.com/profile/card#me',
                      'x-parser-schema-id': '<anonymous-schema-311>',
                    },
                    startDate: {
                      type: 'string',
                      format: 'date-time',
                      description: 'date the member began performing this role',
                      'x-parser-schema-id': '<anonymous-schema-312>',
                    },
                    endDate: {
                      type: 'string',
                      format: 'date-time',
                      description:
                        'date the member stopped performing the role',
                      'x-parser-schema-id': '<anonymous-schema-313>',
                    },
                  },
                  'x-parser-schema-id': 'OrganizationRole',
                },
                {
                  type: 'object',
                  title: 'MLSMembership',
                  description: 'a membership relationship',
                  properties: {
                    type: {
                      type: 'string',
                      description: 'an MLS member relationship',
                      enum: ['MLSMembership'],
                      example: 'MLSMembership',
                      'x-parser-schema-id': '<anonymous-schema-315>',
                    },
                    roleName: {
                      type: 'string',
                      example: 'MLSMember',
                      'x-parser-schema-id': '<anonymous-schema-316>',
                    },
                    memberOf: {
                      type: 'object',
                      'x-range': 'MultipleListingService',
                      example: {
                        type: 'MultipleListingService',
                        name: 'GreatScottMLS',
                      },
                      'x-parser-schema-id': '<anonymous-schema-317>',
                    },
                    member: {
                      type: 'string',
                      format: 'uri',
                      example: 'https://{agent}.example.com/profile/card#me',
                      'x-parser-schema-id': '<anonymous-schema-318>',
                    },
                    memberId: {
                      type: 'string',
                      description: "the user's MLSID",
                      example: 'memberid123',
                      'x-parser-schema-id': '<anonymous-schema-319>',
                    },
                  },
                  'x-parser-schema-id': '<anonymous-schema-314>',
                },
              ],
              'x-parser-schema-id': 'MLSMembership',
            },
          },
          permit: {
            type: 'array',
            'x-range': 'RealEstateLicense',
            items: {
              type: 'object',
              example: {
                type: 'RealEstateLicense',
                name: 'CA-DRE# 02068375',
                identifier: {
                  type: 'PropertyValue',
                  name: 'CA-DRE',
                  value: '02068375',
                },
                issuedBy: {
                  type: 'State',
                  name: 'California',
                },
                issuedThrough: {
                  type: 'Service',
                  name: 'California Department of Real Estate',
                },
                validIn: {
                  type: 'State',
                  name: 'California',
                },
                validFrom: '2019-07-07T10:55:02Z',
                validUntil: '2019-07-07T10:55:02Z',
              },
            },
          },
        },
        'x-parser-schema-id': '<anonymous-schema-489>',
      },
    ],
    'x-parser-schema-id': 'RealEstateOrganization',
  },
  RealEstateProperty: {
    title: 'RealEstateProperty',
    'x-range': 'RealEstateProperty',
    description: 'a property in the real estate transaction context',
    type: 'object',
    required: ['type', 'propertyType'],
    properties: {
      type: {
        description: '"RealEstateProperty"',
        enum: ['RealEstateProperty'],
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-470>',
      },
      propertyType: {
        type: 'string',
        description: 'RESO property type (see range for allowed values)',
        'x-range': 'PropertyType',
        minLength: 4,
        maxLength: 4,
        enum: [
          'RESI',
          'RLSE',
          'RINC',
          'LAND',
          'MOBI',
          'FARM',
          'COMS',
          'COML',
          'BUSO',
        ],
        'x-parser-schema-id': '<anonymous-schema-411>',
      },
      addressCountry: {
        type: 'string',
        description: 'two-letter ISO 3166-1 alpha-2 country code',
        example: 'US',
        enum: [
          'CA',
          'DE',
          'GR',
          'IN',
          'IT',
          'MX',
          'PE',
          'PT',
          'ES',
          'AE',
          'GB',
          'US',
        ],
        'x-parser-schema-id': '<anonymous-schema-387>',
      },
      addressLocality: {
        type: 'string',
        description: 'City, Township.',
        example: 'Gotham City',
        maxLength: 50,
        'x-parser-schema-id': '<anonymous-schema-388>',
      },
      addressRegion: {
        type: 'string',
        description: 'State or Province.',
        example: 'New Jersey',
        maxLength: 3,
        'x-parser-schema-id': '<anonymous-schema-389>',
      },
      apn: {
        type: 'string',
        description: 'Assessors Parcel Number',
        example: 'ABC-12345-XX-XXXX',
        'x-parser-schema-id': '<anonymous-schema-471>',
      },
      image: {
        title: 'image',
        description: 'an ImageObject or URI reference to an image on the web.',
        type: 'array',
        'x-range': ['ImageObject'],
        items: [
          {
            type: 'object',
            allOf: [
              {
                title: 'MediaObject',
                description:
                  'an image, video or document availble for download',
                'x-subclass': ['ImageObject', 'DigitalDocument'],
                allOf: [
                  {
                    type: 'object',
                    required: ['type'],
                    properties: {
                      type: {
                        type: 'string',
                        description: 'The item type (Linked-Data @type)',
                        'x-parser-schema-id': '<anonymous-schema-136>',
                      },
                    },
                    'x-parser-schema-id': 'Thing',
                  },
                  {
                    properties: {
                      type: {
                        type: 'string',
                        enum: ['MediaObject', 'ImageObject', 'DigitalDocument'],
                      },
                      id: {
                        description: 'the URL to access the item.',
                        example:
                          'http://user.example.com/public/logo/fileName.zip',
                        type: 'string',
                        format: 'uri',
                      },
                      name: {
                        type: 'string',
                        description: 'the file name of the object.',
                        example: 'fileName.zip',
                      },
                      encodingFormat: {
                        type: 'string',
                        description: 'MIME type',
                        example: 'application/zip',
                      },
                      about: {
                        type: 'string',
                        format: 'uri',
                        description: 'URI to the subject of the image or logo',
                        example: 'http://user.example.com/profile/card#me',
                      },
                      url: {
                        type: 'string',
                        format: 'uri',
                        description: 'URL of the image content',
                        example:
                          'http://user.example.com/public/profile/image.jpg',
                      },
                    },
                    'x-parser-schema-id': '<anonymous-schema-170>',
                  },
                ],
                'x-parser-schema-id': 'MediaObject',
              },
              {
                title: 'ImageObject',
                'x-range': 'ImageObject',
                properties: {
                  type: {
                    enum: ['ImageObject'],
                    example: 'ImageObject',
                  },
                  id: {
                    example: 'http://user.example.com/public/logo/image.jpg',
                  },
                  name: {
                    example: 'image.jpg',
                  },
                  encodingFormat: {
                    example: 'image/jpeg',
                  },
                },
                'x-parser-schema-id': '<anonymous-schema-171>',
              },
            ],
            'x-parser-schema-id': '<anonymous-schema-169>',
          },
        ],
        'x-parser-schema-id': '<anonymous-schema-393>',
      },
      latitude: {
        type: 'number',
        description: 'The latitude of a location.',
        'x-title': 'latitude',
        example: 40.75,
        'x-parser-schema-id': '<anonymous-schema-275>',
      },
      listingId: {
        description: 'the local identifier for the listing (MLS #)',
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-472>',
      },
      livingArea: {
        description: 'property indoor space',
        example: {
          type: 'QuantitativeValue',
          unitCode: 'SqFt',
          unitText: 'Square Feet',
          value: 1500,
        },
        type: 'object',
        'x-range': 'QuantitativeValue',
        'x-parser-schema-id': '<anonymous-schema-473>',
      },
      longitude: {
        type: 'number',
        description: 'The longitude of a location.',
        'x-title': 'longitude',
        example: 73.98,
        'x-parser-schema-id': '<anonymous-schema-274>',
      },
      lotSize: {
        description: 'outdoor space minValue, maxValue',
        example: {
          type: 'QuantitativeValue',
          unitCode: 'AC',
          unitText: 'Acres',
          value: 0.5,
        },
        type: 'object',
        'x-range': 'QuantitativeValue',
        'x-parser-schema-id': '<anonymous-schema-474>',
      },
      numberOfBathrooms: {
        description: 'the number of bathrooms',
        example: '2',
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-475>',
      },
      numberOfBedrooms: {
        description: 'the number of bedrooms',
        example: '3',
        type: 'string',
        'x-parser-schema-id': '<anonymous-schema-476>',
      },
      numberOfRooms: {
        description: 'the total number of rooms in the building',
        type: 'string',
        example: 7,
        'x-parser-schema-id': '<anonymous-schema-477>',
      },
      postalCode: {
        type: 'string',
        description: 'Zip/Post Code',
        example: '10010',
        maxLength: 12,
        'x-parser-schema-id': '<anonymous-schema-409>',
      },
      propertySubType: {
        title: 'propertySubType',
        type: 'string',
        'x-range': 'PropertySubType',
        description: 'RESO property sub-type (see range for allowed values)',
        enum: [
          'ApartmentPropertyType',
          'BoatSlipPropertyType',
          'CabinPropertyType',
          'CondominiumPropertyType',
          'DeededParkingPropertyType',
          'DuplexPropertyType',
          'FarmPropertyType',
          'ManufacturedHomePropertyType',
          'ManufacturedOnLandPropertyType',
          'MobileHomePropertyType',
          'OwnYourOwnPropertyType',
          'QuadruplexPropertyType',
          'RanchPropertyType',
          'SingleFamilyPropertyType',
          'StockCooperativePropertyType',
          'TimesharePropertyType',
          'TownhousePropertyType',
          'TriplexPropertyType',
          'AgriculturePropertyType',
          'BusinessPropertyType',
          'HotelMotelPropertyType',
          'IndustrialPropertyType',
          'MixedUsePropertyType',
          'MultiFamilyPropertyType',
          'OfficePropertyType',
          'RetailPropertyType',
          'UnimprovedLandPropertyType',
          'WarehousePropertyType',
        ],
        'x-parser-schema-id': '<anonymous-schema-410>',
      },
      stories: {
        type: 'number',
        description: 'he number of floors in the property',
        example: 2,
        'x-parser-schema-id': '<anonymous-schema-413>',
      },
      streetAddress: {
        type: 'string',
        description: 'the street address',
        example: '1007 Mountain Gate Rd',
        maxLength: 75,
        'x-parser-schema-id': '<anonymous-schema-414>',
      },
      yearBuilt: {
        type: 'number',
        description: 'the year the structure was created',
        example: 1988,
        'x-parser-schema-id': '<anonymous-schema-417>',
      },
    },
    'x-parser-schema-id': 'RealEstateProperty',
  },
  RealEstateTeam: {
    allOf: [
      {
        properties: {
          id: {
            type: 'string',
            example: 'https://org.example.com/profile/card#me',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-516>',
      },
      {
        allOf: [
          {
            type: 'object',
            required: ['type'],
            properties: {
              type: {
                type: 'string',
                description: 'The item type (Linked-Data @type)',
                'x-parser-schema-id': '<anonymous-schema-136>',
              },
            },
            'x-parser-schema-id': 'Thing',
          },
          {
            'x-kind': 'Organization',
            'x-parser-schema-id': '<anonymous-schema-325>',
          },
          {
            'x-hasSubclass': [
              'RealEstateOrganization',
              'RealEstateOffice',
              'RealEstateAgent',
            ],
            'x-parser-schema-id': '<anonymous-schema-326>',
          },
          {
            'x-subClassOf': ['https://schema.org/Organization'],
            properties: {
              address: {
                type: 'object',
                'x-range': 'PostalAddress',
                description: 'A physical address.',
                example: {
                  type: 'PostalAddress',
                  name: 'Home',
                  streetAddress: '1007 Mountain Gate Rd',
                  postOfficeBoxNumber: 'Box 1234',
                  addressRegion: 'New Jersey',
                  addressLocality: 'Gotham City',
                  postalCode: '10010',
                  addressCountry: 'USA',
                  addressCounty: 'Gotham County',
                  addressSubdivision: 'Gotham Heights',
                },
                'x-parser-schema-id': '<anonymous-schema-217>',
              },
              availableLanguage: {
                title: 'availableLanguage',
                type: 'array',
                description:
                  'Please use one of the language codes from the IETF BCP 47 standard.',
                'x-range': 'Language',
                items: {
                  title: 'Language',
                  type: 'object',
                  description: 'a written or spoken Language',
                  'x-range': 'Language',
                  properties: {
                    type: {
                      type: 'string',
                      description: 'Language',
                      enum: ['Language'],
                      'x-parser-schema-id': '<anonymous-schema-279>',
                    },
                    name: {
                      type: 'string',
                      description: 'the display name of the language',
                      example: 'English',
                      'x-parser-schema-id': '<anonymous-schema-280>',
                    },
                    additionalName: {
                      type: 'string',
                      description: 'BCP 47 language code',
                      example: 'en-US',
                      'x-parser-schema-id': '<anonymous-schema-281>',
                    },
                  },
                  'x-parser-schema-id': 'Language',
                },
              },
              branchCode: {
                description:
                  'A short textual code that uniquely identifies a place of business.',
                example:
                  'for BHHS profile events, see additionalProperty.OfficeId',
                type: 'string',
              },
              certification: {
                'x-range': 'Certification',
                description:
                  'certifications granted to a person or organization',
                type: 'array',
                items: {
                  type: 'object',
                  example: {
                    type: 'Certification',
                    name: 'E-Agent Certified',
                    validFrom: '2019-06-13T07:00:00.000Z',
                    additionalProperty: {
                      ceritificationTypeId:
                        '86afafd3-ac25-4a89-9a6e-bebb3753c4b2',
                    },
                  },
                },
              },
              contactPoint: {
                type: 'object',
                description:
                  'a named point of contact - telephone, email, faxNumber, and/or url for the entity',
                'x-range': 'ContactPoint',
                example: {
                  type: 'ContactPoint',
                  name: 'Work',
                  telephone: '800-555-5555',
                  faxNumber: '888-4BA-TMAN',
                  email: 'bruce@example.com',
                  url: 'https://example.com',
                },
                'x-parser-schema-id': '<anonymous-schema-220>',
              },
              email: {
                type: 'string',
                format: 'email',
                description: 'Primary email address.',
                example: 'user@example.com',
                'x-parser-schema-id': '<anonymous-schema-553>',
              },
              faxNumber: {
                type: 'string',
                description: 'Primary fax number.',
                example: '(873) 271-4802',
                'x-parser-schema-id': '<anonymous-schema-224>',
              },
              image: {
                description:
                  'an ImageObject or URI reference to an image of the entity on the web.',
                title: 'image',
                type: 'array',
                'x-range': ['ImageObject'],
                items: [
                  {
                    type: 'object',
                    allOf: [
                      {
                        title: 'MediaObject',
                        description:
                          'an image, video or document availble for download',
                        'x-subclass': ['ImageObject', 'DigitalDocument'],
                        allOf: [
                          {
                            type: 'object',
                            required: ['type'],
                            properties: {
                              type: {
                                type: 'string',
                                description:
                                  'The item type (Linked-Data @type)',
                                'x-parser-schema-id': '<anonymous-schema-136>',
                              },
                            },
                            'x-parser-schema-id': 'Thing',
                          },
                          {
                            properties: {
                              type: {
                                type: 'string',
                                enum: [
                                  'MediaObject',
                                  'ImageObject',
                                  'DigitalDocument',
                                ],
                              },
                              id: {
                                description: 'the URL to access the item.',
                                example:
                                  'http://user.example.com/public/logo/fileName.zip',
                                type: 'string',
                                format: 'uri',
                              },
                              name: {
                                type: 'string',
                                description: 'the file name of the object.',
                                example: 'fileName.zip',
                              },
                              encodingFormat: {
                                type: 'string',
                                description: 'MIME type',
                                example: 'application/zip',
                              },
                              about: {
                                type: 'string',
                                format: 'uri',
                                description:
                                  'URI to the subject of the image or logo',
                                example:
                                  'http://user.example.com/profile/card#me',
                              },
                              url: {
                                type: 'string',
                                format: 'uri',
                                description: 'URL of the image content',
                                example:
                                  'http://user.example.com/public/profile/image.jpg',
                              },
                            },
                            'x-parser-schema-id': '<anonymous-schema-170>',
                          },
                        ],
                        'x-parser-schema-id': 'MediaObject',
                      },
                      {
                        title: 'ImageObject',
                        'x-range': 'ImageObject',
                        properties: {
                          type: {
                            enum: ['ImageObject'],
                            example: 'ImageObject',
                          },
                          id: {
                            example:
                              'http://user.example.com/public/logo/image.jpg',
                          },
                          name: {
                            example: 'image.jpg',
                          },
                          encodingFormat: {
                            example: 'image/jpeg',
                          },
                        },
                        'x-parser-schema-id': '<anonymous-schema-171>',
                      },
                    ],
                    'x-parser-schema-id': '<anonymous-schema-169>',
                  },
                ],
              },
              logo: {
                description: 'a logo associated with the organization.',
                items: {
                  allOf: [
                    {
                      type: 'object',
                      title: 'DigitalDocument',
                      'x-range': 'DigitalDocument',
                      description: 'an electronic file.',
                      properties: {
                        type: {
                          type: 'string',
                          enum: ['DigitalDocument'],
                          'x-parser-schema-id': '<anonymous-schema-256>',
                        },
                        id: {
                          type: 'string',
                          example:
                            'http://user.example.com/public/logo/archive.zip',
                          'x-parser-schema-id': '<anonymous-schema-257>',
                        },
                        name: {
                          type: 'string',
                          description: 'document name or title',
                          example: 'archive.zip',
                          'x-parser-schema-id': '<anonymous-schema-258>',
                        },
                        encodingFormat: {
                          type: 'string',
                          description:
                            '[ISO Media Type](https://www.iana.org/assignments/media-types/media-types.xhtml)',
                          example: 'application/zip',
                          'x-parser-schema-id': '<anonymous-schema-259>',
                        },
                        about: {
                          type: 'object',
                          description: 'subject of the Document',
                          'x-range': 'Thing',
                          example: {
                            type: 'RealEstateTransaction',
                            identifier: {
                              bmsTransactionId: 'xxxx',
                            },
                          },
                          'x-parser-schema-id': '<anonymous-schema-260>',
                        },
                        url: {
                          type: 'string',
                          description: 'public URL of the object',
                          example: 'https://example.com',
                          'x-parser-schema-id': '<anonymous-schema-261>',
                        },
                      },
                      'x-parser-schema-id': 'DigitalDocument',
                    },
                    {
                      description: 'an associated logo',
                      type: 'object',
                    },
                  ],
                  type: 'object',
                },
                type: 'array',
                'x-range': ['ImageObject', 'DigitalDocument'],
              },
              name: {
                description: 'Name or DBA.',
                type: 'string',
              },
              parentOrganization: {
                items: {
                  format: 'uri',
                  type: 'string',
                },
                type: 'array',
              },
              subOrganization: {
                description: 'a child organization',
                'x-range': ['RealEstateOrganization'],
                type: 'array',
                items: {
                  type: 'string',
                  format: 'uri',
                  example: 'http://org.example.com/profile/card#me',
                },
              },
              telephone: {
                type: 'string',
                description: 'Primary phone number.',
                example: '+15558675309',
                'x-parser-schema-id': '<anonymous-schema-554>',
              },
              type: {
                enum: ['Organization'],
                type: 'string',
              },
              url: {
                description: 'primary website/url for the entity.',
                format: 'uri',
                type: 'string',
              },
            },
            'x-parser-schema-id': '<anonymous-schema-327>',
          },
        ],
        'x-parser-schema-id': 'Organization',
      },
      {
        title: 'RealEstateTeam',
        description: 'A real estate team.',
        properties: {
          type: {
            type: 'string',
            description: 'RealEstateTeam',
            enum: ['RealEstateTeam'],
          },
          areaServed: {
            type: 'object',
            description: 'the physical areas that make up the ServiceArea',
            'x-range': ['City', 'PostalCodeArea'],
            example: {
              type: 'PostalCode',
              postalCode: '91371',
              addressLocality: 'Woodland Hills',
              addressCounty: 'Los Angeles',
              addressRegion: 'CA',
              addressCountry: 'US',
            },
          },
          description: {
            example: 'The number on Gotham City Real Estate Company since 1940',
            type: 'string',
            description: 'description of the item.',
          },
          parentOrganization: {
            'x-range': 'RealEstateOrganization',
            description:
              'A franchisor or affiliate network of which this organization plays a membership role.',
            type: 'array',
            items: {
              type: 'string',
              format: 'uri',
            },
          },
          member: {
            type: 'array',
            items: {
              allOf: [
                {
                  title: 'OrganizationRole',
                  type: 'object',
                  description:
                    'describes a role played by a member and a group or organization.',
                  properties: {
                    type: {
                      type: 'string',
                      description:
                        'a role played by the member in the memberOf group',
                      enum: ['OrganizationRole'],
                      'x-parser-schema-id': '<anonymous-schema-308>',
                    },
                    roleName: {
                      type: 'string',
                      description: 'the role name',
                      example: 'Owner',
                      'x-parser-schema-id': '<anonymous-schema-309>',
                    },
                    memberOf: {
                      description:
                        'the org or group where the role is performed',
                      type: 'object',
                      example: {
                        type: 'RealEstateOrganization',
                        id: 'http://orgid.example.com/profile/card#me',
                      },
                      'x-parser-schema-id': '<anonymous-schema-310>',
                    },
                    member: {
                      description: 'member object or id',
                      type: 'string',
                      format: 'uri',
                      example: 'https://memberid.example.com/profile/card#me',
                      'x-parser-schema-id': '<anonymous-schema-311>',
                    },
                    startDate: {
                      type: 'string',
                      format: 'date-time',
                      description: 'date the member began performing this role',
                      'x-parser-schema-id': '<anonymous-schema-312>',
                    },
                    endDate: {
                      type: 'string',
                      format: 'date-time',
                      description:
                        'date the member stopped performing the role',
                      'x-parser-schema-id': '<anonymous-schema-313>',
                    },
                  },
                  'x-parser-schema-id': 'OrganizationRole',
                },
                {
                  type: 'object',
                  title: 'RealEstateTeamMembership',
                  description:
                    'a membership relationship.  Subclass of OrganizationRole',
                  properties: {
                    type: {
                      type: 'string',
                      description: 'a member of a real estate team',
                      enum: ['RealEstateTeamMembership'],
                      example: 'RealEstateTeamMembership',
                      'x-parser-schema-id': '<anonymous-schema-519>',
                    },
                    roleName: {
                      type: 'string',
                      enum: ['TeamMember', 'TeamAdmin', 'TeamOwner'],
                      'x-parser-schema-id': '<anonymous-schema-520>',
                    },
                    memberOf: {
                      type: 'string',
                      format: 'uri',
                      example: 'https://{team-id}.example.com/profile/card#me',
                      'x-parser-schema-id': '<anonymous-schema-521>',
                    },
                    member: {
                      type: 'string',
                      format: 'uri',
                      example: 'https://{agent}.example.com/profile/card#me',
                      'x-parser-schema-id': '<anonymous-schema-522>',
                    },
                  },
                  'x-parser-schema-id': '<anonymous-schema-518>',
                },
              ],
              'x-parser-schema-id': 'RealEstateTeamMembership',
            },
          },
        },
        'x-parser-schema-id': '<anonymous-schema-517>',
      },
    ],
    'x-parser-schema-id': 'RealEstateTeam',
  },
  RealEstateTeamMembership: {
    allOf: [
      {
        title: 'OrganizationRole',
        type: 'object',
        description:
          'describes a role played by a member and a group or organization.',
        properties: {
          type: {
            type: 'string',
            description: 'a role played by the member in the memberOf group',
            enum: ['OrganizationRole'],
            'x-parser-schema-id': '<anonymous-schema-308>',
          },
          roleName: {
            type: 'string',
            description: 'the role name',
            example: 'Owner',
            'x-parser-schema-id': '<anonymous-schema-309>',
          },
          memberOf: {
            description: 'the org or group where the role is performed',
            type: 'object',
            example: {
              type: 'RealEstateOrganization',
              id: 'http://orgid.example.com/profile/card#me',
            },
            'x-parser-schema-id': '<anonymous-schema-310>',
          },
          member: {
            description: 'member object or id',
            type: 'string',
            format: 'uri',
            example: 'https://memberid.example.com/profile/card#me',
            'x-parser-schema-id': '<anonymous-schema-311>',
          },
          startDate: {
            type: 'string',
            format: 'date-time',
            description: 'date the member began performing this role',
            'x-parser-schema-id': '<anonymous-schema-312>',
          },
          endDate: {
            type: 'string',
            format: 'date-time',
            description: 'date the member stopped performing the role',
            'x-parser-schema-id': '<anonymous-schema-313>',
          },
        },
        'x-parser-schema-id': 'OrganizationRole',
      },
      {
        type: 'object',
        title: 'RealEstateTeamMembership',
        description: 'a membership relationship.  Subclass of OrganizationRole',
        properties: {
          type: {
            type: 'string',
            description: 'a member of a real estate team',
            enum: ['RealEstateTeamMembership'],
            example: 'RealEstateTeamMembership',
            'x-parser-schema-id': '<anonymous-schema-519>',
          },
          roleName: {
            type: 'string',
            enum: ['TeamMember', 'TeamAdmin', 'TeamOwner'],
            'x-parser-schema-id': '<anonymous-schema-520>',
          },
          memberOf: {
            type: 'string',
            format: 'uri',
            example: 'https://{team-id}.example.com/profile/card#me',
            'x-parser-schema-id': '<anonymous-schema-521>',
          },
          member: {
            type: 'string',
            format: 'uri',
            example: 'https://{agent}.example.com/profile/card#me',
            'x-parser-schema-id': '<anonymous-schema-522>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-518>',
      },
    ],
    'x-parser-schema-id': 'RealEstateTeamMembership',
  },
  RealEstateTransaction: {
    type: 'object',
    title: 'RealEstateTransaction',
    'x-range': 'RealEstateTransaction',
    description:
      'describes a sale, purchase and transfer of a real estate property.',
    required: [
      'type',
      'identifier',
      'additionalProperty',
      'transactionType',
      'reportingOffice',
      'totalSalesProductionGCI',
      'totalSalesProductionGCIDeduction',
      'object',
    ],
    properties: {
      type: {
        type: 'string',
        description: '"RealEstateTransaction"',
        enum: ['RealEstateTransaction'],
        'x-parser-schema-id': '<anonymous-schema-523>',
      },
      identifier: {
        type: 'object',
        description: "the data producer's id for the transaction.",
        required: ['bmsTransactionId'],
        properties: {
          bmsTransactionId: {
            type: 'string',
            maxLength: 12,
            example: '0000074792',
            'x-parser-schema-id': '<anonymous-schema-525>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-524>',
      },
      additionalProperty: {
        type: 'object',
        description: 'vendor/context specific custom properties',
        required: ['batchId', 'transactionSequence', 'unimprovedLandFlag'],
        properties: {
          batchId: {
            type: 'integer',
            description: 'identifies the batch for the current transaction',
            example: 4136,
            'x-parser-schema-id': '<anonymous-schema-527>',
          },
          transactionSequence: {
            type: 'integer',
            description:
              'the sequentail order of this transaction report relative to previous reports of the the same RealEstateTransaction',
            minimum: 0,
            example: 1,
            'x-parser-schema-id': '<anonymous-schema-528>',
          },
          unimprovedLandFlag: {
            type: 'boolean',
            description:
              'true if the transaction subject property is an unimproved lot.',
            'x-parser-schema-id': '<anonymous-schema-529>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-526>',
      },
      transactionStatus: {
        type: 'string',
        description: 'transaction status',
        'x-range': 'TransactionStatus',
        example: 'ClosedTransactionStatus',
        enum: [
          'PendingTransactionStatus',
          'ClosedTransactionStatus',
          'CanceledTransactionStatus',
        ],
        'x-parser-schema-id': '<anonymous-schema-530>',
      },
      transactionType: {
        type: 'string',
        description: 'transaction type',
        'x-range': 'TransactionType',
        example: 'ST',
        enum: ['ST', 'LS', 'OI', 'PM', 'RF'],
        'x-parser-schema-id': '<anonymous-schema-531>',
      },
      reportingOffice: {
        type: 'string',
        format: 'uri',
        description: 'the reporting office',
        example: 'https://{officeid}.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-532>',
      },
      listingOffice: {
        type: 'string',
        format: 'uri',
        description: 'the office representing the seller',
        example: 'https://{officeid}.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-533>',
      },
      buyerOffice: {
        type: 'string',
        format: 'uri',
        description: 'the office representing the buyer',
        example: 'https://{officeid}.example.com/profile/card#me',
        'x-parser-schema-id': '<anonymous-schema-534>',
      },
      commissionDate: {
        type: 'string',
        format: 'date-time',
        'x-range': 'DateTime',
        description: 'date the purchase offer was presented',
        'x-parser-schema-id': '<anonymous-schema-535>',
      },
      closeDate: {
        type: 'string',
        format: 'date-time',
        'x-range': 'DateTime',
        description:
          'With purchase the date the purchase agreement was fulfilled. With lease, the date the requirements were fulfilled, such as contract and/or deposit.',
        'x-parser-schema-id': '<anonymous-schema-536>',
      },
      purchaseContractDate: {
        type: 'string',
        format: 'date-time',
        description: 'date of purchase agreement execution (aka sale date)',
        'x-range': 'DateTime',
        'x-parser-schema-id': '<anonymous-schema-537>',
      },
      closePrice: {
        type: 'object',
        title: 'MonetaryAmount',
        'x-range': 'MonetaryAmount',
        required: ['type', 'value', 'currency'],
        properties: {
          type: {
            type: 'string',
            description: 'MonetaryAmount',
            enum: ['MonetaryAmount'],
            'x-parser-schema-id': '<anonymous-schema-320>',
          },
          minValue: {
            type: 'number',
            description: 'the lower limit of the range',
            example: 2400000,
            'x-parser-schema-id': '<anonymous-schema-321>',
          },
          maxValue: {
            type: 'number',
            description: 'the upper limit of the range',
            example: 3200000,
            'x-parser-schema-id': '<anonymous-schema-322>',
          },
          value: {
            type: 'number',
            description: 'the actual or expected value',
            example: 2700000,
            'x-parser-schema-id': '<anonymous-schema-323>',
          },
          currency: {
            type: 'string',
            description: 'use ISO4217 country codes',
            maxLength: 3,
            example: 'USD',
            'x-parser-schema-id': '<anonymous-schema-324>',
          },
        },
        description: 'the final sale price of the subject',
        example: {
          type: 'MonetaryAmount',
          value: 123456.78,
          currency: 'USD',
        },
        'x-parser-schema-id': '<anonymous-schema-538>',
      },
      totalSalesProductionGCI: {
        type: 'object',
        title: 'MonetaryAmount',
        'x-range': 'MonetaryAmount',
        required: ['type', 'value', 'currency'],
        properties: {
          type: {
            type: 'string',
            description: 'MonetaryAmount',
            enum: ['MonetaryAmount'],
            'x-parser-schema-id': '<anonymous-schema-320>',
          },
          minValue: {
            type: 'number',
            description: 'the lower limit of the range',
            example: 2400000,
            'x-parser-schema-id': '<anonymous-schema-321>',
          },
          maxValue: {
            type: 'number',
            description: 'the upper limit of the range',
            example: 3200000,
            'x-parser-schema-id': '<anonymous-schema-322>',
          },
          value: {
            type: 'number',
            description: 'the actual or expected value',
            example: 2700000,
            'x-parser-schema-id': '<anonymous-schema-323>',
          },
          currency: {
            type: 'string',
            description: 'use ISO4217 country codes',
            maxLength: 3,
            example: 'USD',
            'x-parser-schema-id': '<anonymous-schema-324>',
          },
        },
        description: 'the total gci of the transaction',
        example: {
          type: 'MonetaryAmount',
          value: 123456.78,
          currency: 'USD',
        },
        'x-parser-schema-id': '<anonymous-schema-539>',
      },
      totalSalesProductionGCIDeduction: {
        type: 'object',
        title: 'MonetaryAmount',
        'x-range': 'MonetaryAmount',
        required: ['type', 'value', 'currency'],
        properties: {
          type: {
            type: 'string',
            description: 'MonetaryAmount',
            enum: ['MonetaryAmount'],
            'x-parser-schema-id': '<anonymous-schema-320>',
          },
          minValue: {
            type: 'number',
            description: 'the lower limit of the range',
            example: 2400000,
            'x-parser-schema-id': '<anonymous-schema-321>',
          },
          maxValue: {
            type: 'number',
            description: 'the upper limit of the range',
            example: 3200000,
            'x-parser-schema-id': '<anonymous-schema-322>',
          },
          value: {
            type: 'number',
            description: 'the actual or expected value',
            example: 2700000,
            'x-parser-schema-id': '<anonymous-schema-323>',
          },
          currency: {
            type: 'string',
            description: 'use ISO4217 country codes',
            maxLength: 3,
            example: 'USD',
            'x-parser-schema-id': '<anonymous-schema-324>',
          },
        },
        description: 'total gci deductions for the transaction',
        example: {
          type: 'MonetaryAmount',
          value: 1234.56,
          currency: 'USD',
        },
        'x-parser-schema-id': '<anonymous-schema-540>',
      },
      object: {
        title: 'RealEstateProperty',
        'x-range': 'RealEstateProperty',
        description: 'a property in the real estate transaction context',
        type: 'object',
        required: ['type', 'propertyType'],
        properties: {
          type: {
            description: '"RealEstateProperty"',
            enum: ['RealEstateProperty'],
            type: 'string',
            'x-parser-schema-id': '<anonymous-schema-470>',
          },
          propertyType: {
            type: 'string',
            description: 'RESO property type (see range for allowed values)',
            'x-range': 'PropertyType',
            minLength: 4,
            maxLength: 4,
            enum: [
              'RESI',
              'RLSE',
              'RINC',
              'LAND',
              'MOBI',
              'FARM',
              'COMS',
              'COML',
              'BUSO',
            ],
            'x-parser-schema-id': '<anonymous-schema-411>',
          },
          addressCountry: {
            type: 'string',
            description: 'two-letter ISO 3166-1 alpha-2 country code',
            example: 'US',
            enum: [
              'CA',
              'DE',
              'GR',
              'IN',
              'IT',
              'MX',
              'PE',
              'PT',
              'ES',
              'AE',
              'GB',
              'US',
            ],
            'x-parser-schema-id': '<anonymous-schema-387>',
          },
          addressLocality: {
            type: 'string',
            description: 'City, Township.',
            example: 'Gotham City',
            maxLength: 50,
            'x-parser-schema-id': '<anonymous-schema-388>',
          },
          addressRegion: {
            type: 'string',
            description: 'State or Province.',
            example: 'New Jersey',
            maxLength: 3,
            'x-parser-schema-id': '<anonymous-schema-389>',
          },
          apn: {
            type: 'string',
            description: 'Assessors Parcel Number',
            example: 'ABC-12345-XX-XXXX',
            'x-parser-schema-id': '<anonymous-schema-471>',
          },
          image: {
            title: 'image',
            description:
              'an ImageObject or URI reference to an image on the web.',
            type: 'array',
            'x-range': ['ImageObject'],
            items: [
              {
                type: 'object',
                allOf: [
                  {
                    title: 'MediaObject',
                    description:
                      'an image, video or document availble for download',
                    'x-subclass': ['ImageObject', 'DigitalDocument'],
                    allOf: [
                      {
                        type: 'object',
                        required: ['type'],
                        properties: {
                          type: {
                            type: 'string',
                            description: 'The item type (Linked-Data @type)',
                            'x-parser-schema-id': '<anonymous-schema-136>',
                          },
                        },
                        'x-parser-schema-id': 'Thing',
                      },
                      {
                        properties: {
                          type: {
                            type: 'string',
                            enum: [
                              'MediaObject',
                              'ImageObject',
                              'DigitalDocument',
                            ],
                          },
                          id: {
                            description: 'the URL to access the item.',
                            example:
                              'http://user.example.com/public/logo/fileName.zip',
                            type: 'string',
                            format: 'uri',
                          },
                          name: {
                            type: 'string',
                            description: 'the file name of the object.',
                            example: 'fileName.zip',
                          },
                          encodingFormat: {
                            type: 'string',
                            description: 'MIME type',
                            example: 'application/zip',
                          },
                          about: {
                            type: 'string',
                            format: 'uri',
                            description:
                              'URI to the subject of the image or logo',
                            example: 'http://user.example.com/profile/card#me',
                          },
                          url: {
                            type: 'string',
                            format: 'uri',
                            description: 'URL of the image content',
                            example:
                              'http://user.example.com/public/profile/image.jpg',
                          },
                        },
                        'x-parser-schema-id': '<anonymous-schema-170>',
                      },
                    ],
                    'x-parser-schema-id': 'MediaObject',
                  },
                  {
                    title: 'ImageObject',
                    'x-range': 'ImageObject',
                    properties: {
                      type: {
                        enum: ['ImageObject'],
                        example: 'ImageObject',
                      },
                      id: {
                        example:
                          'http://user.example.com/public/logo/image.jpg',
                      },
                      name: {
                        example: 'image.jpg',
                      },
                      encodingFormat: {
                        example: 'image/jpeg',
                      },
                    },
                    'x-parser-schema-id': '<anonymous-schema-171>',
                  },
                ],
                'x-parser-schema-id': '<anonymous-schema-169>',
              },
            ],
            'x-parser-schema-id': '<anonymous-schema-393>',
          },
          latitude: {
            type: 'number',
            description: 'The latitude of a location.',
            'x-title': 'latitude',
            example: 40.75,
            'x-parser-schema-id': '<anonymous-schema-275>',
          },
          listingId: {
            description: 'the local identifier for the listing (MLS #)',
            type: 'string',
            'x-parser-schema-id': '<anonymous-schema-472>',
          },
          livingArea: {
            description: 'property indoor space',
            example: {
              type: 'QuantitativeValue',
              unitCode: 'SqFt',
              unitText: 'Square Feet',
              value: 1500,
            },
            type: 'object',
            'x-range': 'QuantitativeValue',
            'x-parser-schema-id': '<anonymous-schema-473>',
          },
          longitude: {
            type: 'number',
            description: 'The longitude of a location.',
            'x-title': 'longitude',
            example: 73.98,
            'x-parser-schema-id': '<anonymous-schema-274>',
          },
          lotSize: {
            description: 'outdoor space minValue, maxValue',
            example: {
              type: 'QuantitativeValue',
              unitCode: 'AC',
              unitText: 'Acres',
              value: 0.5,
            },
            type: 'object',
            'x-range': 'QuantitativeValue',
            'x-parser-schema-id': '<anonymous-schema-474>',
          },
          numberOfBathrooms: {
            description: 'the number of bathrooms',
            example: '2',
            type: 'string',
            'x-parser-schema-id': '<anonymous-schema-475>',
          },
          numberOfBedrooms: {
            description: 'the number of bedrooms',
            example: '3',
            type: 'string',
            'x-parser-schema-id': '<anonymous-schema-476>',
          },
          numberOfRooms: {
            description: 'the total number of rooms in the building',
            type: 'string',
            example: 7,
            'x-parser-schema-id': '<anonymous-schema-477>',
          },
          postalCode: {
            type: 'string',
            description: 'Zip/Post Code',
            example: '10010',
            maxLength: 12,
            'x-parser-schema-id': '<anonymous-schema-409>',
          },
          propertySubType: {
            title: 'propertySubType',
            type: 'string',
            'x-range': 'PropertySubType',
            description:
              'RESO property sub-type (see range for allowed values)',
            enum: [
              'ApartmentPropertyType',
              'BoatSlipPropertyType',
              'CabinPropertyType',
              'CondominiumPropertyType',
              'DeededParkingPropertyType',
              'DuplexPropertyType',
              'FarmPropertyType',
              'ManufacturedHomePropertyType',
              'ManufacturedOnLandPropertyType',
              'MobileHomePropertyType',
              'OwnYourOwnPropertyType',
              'QuadruplexPropertyType',
              'RanchPropertyType',
              'SingleFamilyPropertyType',
              'StockCooperativePropertyType',
              'TimesharePropertyType',
              'TownhousePropertyType',
              'TriplexPropertyType',
              'AgriculturePropertyType',
              'BusinessPropertyType',
              'HotelMotelPropertyType',
              'IndustrialPropertyType',
              'MixedUsePropertyType',
              'MultiFamilyPropertyType',
              'OfficePropertyType',
              'RetailPropertyType',
              'UnimprovedLandPropertyType',
              'WarehousePropertyType',
            ],
            'x-parser-schema-id': '<anonymous-schema-410>',
          },
          stories: {
            type: 'number',
            description: 'he number of floors in the property',
            example: 2,
            'x-parser-schema-id': '<anonymous-schema-413>',
          },
          streetAddress: {
            type: 'string',
            description: 'the street address',
            example: '1007 Mountain Gate Rd',
            maxLength: 75,
            'x-parser-schema-id': '<anonymous-schema-414>',
          },
          yearBuilt: {
            type: 'number',
            description: 'the year the structure was created',
            example: 1988,
            'x-parser-schema-id': '<anonymous-schema-417>',
          },
        },
        'x-parser-schema-id': 'RealEstateProperty',
      },
      referral: {
        description: 'referring agent details',
        title: 'Referral',
        type: 'object',
        'x-range': 'Referral',
        properties: {
          type: {
            type: 'string',
            description: 'The item type (Linked-Data @type)',
            enum: ['Referral'],
            'x-parser-schema-id': '<anonymous-schema-542>',
          },
          additionalProperty: {
            type: 'object',
            description: 'context specific custom properties',
            properties: {
              isReferralYN: {
                type: 'string',
                description: 'Y if transaction was a referral',
                enum: ['Y', 'N'],
                'x-parser-schema-id': '<anonymous-schema-544>',
              },
              inNetworkReferralYN: {
                type: 'string',
                description:
                  'Y if transaction was referred by an in network agent',
                enum: ['Y', 'N'],
                'x-parser-schema-id': '<anonymous-schema-545>',
              },
            },
            'x-parser-schema-id': '<anonymous-schema-543>',
          },
          referredBy: {
            type: 'object',
            description: 'the referring entity',
            properties: {
              type: {
                type: 'string',
                description:
                  'the referring entity type i.e RealEstateOrganization, RealEstateAgent',
                enum: [
                  'RealEstateOrganization',
                  'RealEstateAgent',
                  'RealEstateOffice',
                  'Organization',
                  'Person',
                ],
                'x-parser-schema-id': '<anonymous-schema-547>',
              },
              id: {
                type: 'string',
                format: 'uri',
                description: 'Linked-Data URI (@id)',
                'x-parser-schema-id': '<anonymous-schema-190>',
              },
            },
            'x-parser-schema-id': '<anonymous-schema-546>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-541>',
      },
      participant: {
        type: 'array',
        description:
          'parties with a direct or indirect interest or role in the transaction',
        'x-range': 'TransactionParticipant',
        items: {
          type: 'object',
          title: 'TransactionParticipant',
          'x-range': 'TransactionParticipant',
          properties: {
            type: {
              type: 'string',
              description: 'The item type (Linked-Data @type)',
              enum: ['TransactionParticipant'],
              'x-parser-schema-id': '<anonymous-schema-549>',
            },
            roleName: {
              type: 'string',
              description: 'enum: Buyer,Seller',
              enum: ['Buyer', 'Seller'],
              'x-parser-schema-id': '<anonymous-schema-550>',
            },
            position: {
              type: 'number',
              description: 'numeric position for the participant/roleName.',
              example: 1,
              'x-parser-schema-id': '<anonymous-schema-551>',
            },
            givenName: {
              type: 'string',
              description: 'First Name of a person',
              example: 'Glenn',
              'x-parser-schema-id': '<anonymous-schema-225>',
            },
            familyName: {
              type: 'string',
              description: 'Last Name of a person',
              example: 'Miller',
              maxLength: 50,
              'x-parser-schema-id': '<anonymous-schema-254>',
            },
            additionalName: {
              type: 'string',
              description: 'middleName or alternate name of the Person',
              example: 'Big',
              'x-parser-schema-id': '<anonymous-schema-552>',
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'Primary email address.',
              example: 'user@example.com',
              'x-parser-schema-id': '<anonymous-schema-553>',
            },
            telephone: {
              type: 'string',
              description: 'Primary phone number.',
              example: '+15558675309',
              'x-parser-schema-id': '<anonymous-schema-554>',
            },
            affiliation: {
              type: 'array',
              description:
                'person or organization associated with the participant',
              items: {
                type: 'string',
                format: 'uri',
                example: 'https://{agentid}.example.com/profile/card#me',
                'x-parser-schema-id': '<anonymous-schema-556>',
              },
              'x-parser-schema-id': '<anonymous-schema-555>',
            },
          },
          'x-parser-schema-id': 'TransactionParticipant',
        },
        'x-parser-schema-id': '<anonymous-schema-548>',
      },
      transactionEntry: {
        type: 'array',
        description: 'commissions and unit entries',
        'x-range': 'TransactionEntry',
        items: {
          type: 'object',
          title: 'TransactionEntry',
          description:
            'describes a unit of sales credit in unit or commission value relative to a parent transaction',
          'x-range': 'TransactionEntry',
          properties: {
            type: {
              type: 'string',
              description: 'TransactionEntry',
              enum: ['TransactionEntry'],
              'x-parser-schema-id': '<anonymous-schema-558>',
            },
            salesProductionUnit: {
              type: 'number',
              minimum: 0.0001,
              maximum: 1,
              description:
                'the sales production units credited to the recipient',
              example: 0.5,
              'x-parser-schema-id': '<anonymous-schema-559>',
            },
            salesProductionGCI: {
              type: 'object',
              title: 'MonetaryAmount',
              'x-range': 'MonetaryAmount',
              required: ['type', 'value', 'currency'],
              properties: {
                type: {
                  type: 'string',
                  description: 'MonetaryAmount',
                  enum: ['MonetaryAmount'],
                  'x-parser-schema-id': '<anonymous-schema-320>',
                },
                minValue: {
                  type: 'number',
                  description: 'the lower limit of the range',
                  example: 2400000,
                  'x-parser-schema-id': '<anonymous-schema-321>',
                },
                maxValue: {
                  type: 'number',
                  description: 'the upper limit of the range',
                  example: 3200000,
                  'x-parser-schema-id': '<anonymous-schema-322>',
                },
                value: {
                  type: 'number',
                  description: 'the actual or expected value',
                  example: 2700000,
                  'x-parser-schema-id': '<anonymous-schema-323>',
                },
                currency: {
                  type: 'string',
                  description: 'use ISO4217 country codes',
                  maxLength: 3,
                  example: 'USD',
                  'x-parser-schema-id': '<anonymous-schema-324>',
                },
              },
              description: 'gross commission income credited to the recipient',
              example: {
                type: 'MonetaryAmount',
                value: 1234.56,
                currency: 'USD',
              },
              'x-parser-schema-id': '<anonymous-schema-560>',
            },
            recipient: {
              description:
                'the agent credited with the sales production and who receives the value',
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  description: 'typically a RealEstateAgent',
                  example: 'RealEstateAgent',
                  'x-parser-schema-id': '<anonymous-schema-562>',
                },
                roleName: {
                  type: 'string',
                  description: 'enum: ListingAgent,BuyerAgent',
                  enum: ['ListingAgent', 'BuyerAgent'],
                  'x-parser-schema-id': '<anonymous-schema-563>',
                },
                id: {
                  type: 'string',
                  format: 'uri',
                  description: 'Linked-Data URI (@id)',
                  example: 'https://{entityid}.example.com/profile/card#me',
                  'x-parser-schema-id': '<anonymous-schema-564>',
                },
                identifier: {
                  type: 'object',
                  description:
                    'unique identifier of the recipient from the data producer',
                  properties: {
                    bmsAgentId: {
                      type: 'string',
                      maxLength: 12,
                      example: '1657897',
                      'x-parser-schema-id': '<anonymous-schema-566>',
                    },
                  },
                  'x-parser-schema-id': '<anonymous-schema-565>',
                },
              },
              'x-parser-schema-id': '<anonymous-schema-561>',
            },
          },
          'x-parser-schema-id': 'TransactionEntry',
        },
        'x-parser-schema-id': '<anonymous-schema-557>',
      },
      document: {
        type: 'array',
        description:
          'any documents, images, etc... related to the transaction.',
        'x-range': 'DigitalDocument',
        items: {
          type: 'object',
          example: {
            type: 'DigitalDocument',
            name: 'Sales Contract',
            encodingFormat: 'application/zip',
            about: {
              type: 'Transaction',
              identifier: {
                guruTransactionId: '0000074792',
              },
            },
            url: 'https://example.com/path/to/document.pdf',
          },
          'x-parser-schema-id': '<anonymous-schema-568>',
        },
        'x-parser-schema-id': '<anonymous-schema-567>',
      },
    },
    'x-parser-schema-id': 'RealEstateTransaction',
  },
  RealEstateWebsite: {
    title: 'RealEstateWebsite',
    type: 'object',
    'x-range': 'RealEstateWebsite',
    properties: {
      type: {
        type: 'string',
        enum: ['RealEstateWebsite'],
        description: 'RealEstateWebsite',
        'x-parser-schema-id': '<anonymous-schema-569>',
      },
      about: {
        type: 'object',
        description: 'subject of the website',
        'x-range': [
          'RealEstateAgent',
          'RealEstateOffice',
          'RealEstateOrganization',
        ],
        example: {
          type: 'RealEstateAgent',
          id: 'http://agent.example.com/profile/card#me',
        },
        'x-parser-schema-id': '<anonymous-schema-570>',
      },
      url: {
        title: 'url',
        type: 'string',
        format: 'uri',
        description: 'URL of the item.',
        'x-parser-schema-id': '<anonymous-schema-180>',
      },
    },
    'x-parser-schema-id': 'RealEstateWebsite',
  },
  Referral: {
    title: 'Referral',
    type: 'object',
    description:
      'describes a real estate referral from the referredBy (subProperty of agent) to the recipient',
    'x-range': 'Referral',
    properties: {
      type: {
        type: 'string',
        description: 'The item type (Linked-Data @type)',
        enum: ['Referral'],
        'x-parser-schema-id': '<anonymous-schema-542>',
      },
      additionalProperty: {
        type: 'object',
        description: 'context specific custom properties',
        properties: {
          isReferralYN: {
            type: 'string',
            description: 'Y if transaction was a referral',
            enum: ['Y', 'N'],
            'x-parser-schema-id': '<anonymous-schema-544>',
          },
          inNetworkReferralYN: {
            type: 'string',
            description: 'Y if transaction was referred by an in network agent',
            enum: ['Y', 'N'],
            'x-parser-schema-id': '<anonymous-schema-545>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-543>',
      },
      referredBy: {
        type: 'object',
        description: 'the referring entity',
        properties: {
          type: {
            type: 'string',
            description:
              'the referring entity type i.e RealEstateOrganization, RealEstateAgent',
            enum: [
              'RealEstateOrganization',
              'RealEstateAgent',
              'RealEstateOffice',
              'Organization',
              'Person',
            ],
            'x-parser-schema-id': '<anonymous-schema-547>',
          },
          id: {
            type: 'string',
            format: 'uri',
            description: 'Linked-Data URI (@id)',
            'x-parser-schema-id': '<anonymous-schema-190>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-546>',
      },
    },
    'x-parser-schema-id': 'Referral',
  },
  Schedule: {
    title: 'Schedule',
    type: 'object',
    description:
      'A schedule defines a repeating time period used to describe a regularly occurring Event. At a minimum a schedule will specify repeatFrequency which describes the interval between occurences of the event. Additional information can be provided to specify the schedule more precisely. This includes identifying the day(s) of the week or month when the recurring event will take place, in addition to its start and end time. Schedules may also have start and end dates to indicate when they are active, e.g. to define a limited calendar of events.\n',
    properties: {
      type: {
        type: 'string',
        description: 'The item type (Linked-Data @type)',
        'x-parser-schema-id': '<anonymous-schema-252>',
      },
      byDay: {
        description:
          'Defines the day(s) of the week on which a recurring Event takes place',
        type: 'array',
        items: {
          type: 'string',
          enum: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
          ],
          'x-parser-schema-id': '<anonymous-schema-572>',
        },
        example: ['Monday', 'Wednesday', 'Friday'],
        'x-parser-schema-id': '<anonymous-schema-571>',
      },
      byMonth: {
        description:
          'Defines the month(s) of the year on which a recurring Event takes place. Specified as an Integer between 1-12. January is 1.',
        type: 'array',
        items: {
          type: 'number',
          enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          'x-parser-schema-id': '<anonymous-schema-574>',
        },
        example: [1],
        'x-parser-schema-id': '<anonymous-schema-573>',
      },
      byMonthDay: {
        type: 'array',
        description:
          'Defines the day(s) of the month on which a recurring Event takes place. Specified as an Integer between 1-31.',
        items: {
          type: 'number',
          'x-parser-schema-id': '<anonymous-schema-576>',
        },
        'x-parser-schema-id': '<anonymous-schema-575>',
      },
    },
    'x-parser-schema-id': 'Schedule',
  },
  Service: {
    title: 'Service',
    description: 'A service provided by an organization.',
    'x-kind': 'Service',
    type: 'object',
    properties: {
      type: {
        type: 'string',
        enum: ['Service'],
        'x-parser-schema-id': '<anonymous-schema-577>',
      },
      name: {
        type: 'string',
        description: 'name of the service.',
        'x-parser-schema-id': '<anonymous-schema-578>',
      },
      areaServed: {
        type: 'object',
        description: 'a physical location',
        title: 'Place',
        'x-range': [
          'Place',
          'City',
          'State',
          'PostalCode',
          'GeoCircle',
          'GeoShape',
        ],
        properties: {
          type: {
            type: 'string',
            description: 'The item type (Linked-Data @type)',
            enum: ['Place'],
            'x-parser-schema-id': '<anonymous-schema-337>',
          },
          address: {
            type: 'object',
            'x-range': 'PostalAddress',
            description: 'A physical address.',
            example: {
              type: 'PostalAddress',
              name: 'Home',
              streetAddress: '1007 Mountain Gate Rd',
              postOfficeBoxNumber: 'Box 1234',
              addressRegion: 'New Jersey',
              addressLocality: 'Gotham City',
              postalCode: '10010',
              addressCountry: 'USA',
              addressCounty: 'Gotham County',
              addressSubdivision: 'Gotham Heights',
            },
            'x-parser-schema-id': '<anonymous-schema-338>',
          },
          geo: {
            type: 'object',
            description: 'a geo shape (circle or box)',
            'x-range': ['GeoCircle', 'GeoShape'],
            example: {
              type: 'GeoShape',
              geoMidpoint: {
                type: 'GeoCoordinates,',
                longitude: '73.98',
                latitude: '40.75',
              },
              geoRadius: {
                type: 'QuantitativeValue,',
                value: '10,',
                unitCode: 'mi,',
                unitText: 'miles',
              },
              box: '(33.5697,-117.775),(33.6018,-117.707)',
            },
            'x-parser-schema-id': '<anonymous-schema-339>',
          },
        },
        'x-parser-schema-id': 'Place',
      },
    },
    'x-parser-schema-id': 'Service',
  },
  ServiceArea: {
    title: 'ServiceArea',
    type: 'object',
    description:
      'an area when a provider provides a service. additional information available; see [Using Service Areas](/reference-using-service-area)',
    'x-kind': 'ServiceArea',
    properties: {
      type: {
        type: 'string',
        description: '"ServiceArea"',
        enum: ['ServiceArea'],
        'x-parser-schema-id': '<anonymous-schema-579>',
      },
      kind: {
        type: 'string',
        description: 'ServiceArea sub-type.  City or PostalCode',
        enum: ['City', 'PostalCode'],
        example: 'PostalCode',
        'x-parser-schema-id': '<anonymous-schema-580>',
      },
      identifier: {
        type: 'object',
        description:
          'vendor namespaced item identifiers, value should be stored and included in any future events that reference the same item.',
        properties: {
          bhhsESAId: {
            type: 'string',
            description: 'BHHS internal ESA ID',
            'x-parser-schema-id': '<anonymous-schema-582>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-581>',
      },
      addressLocality: {
        type: 'string',
        description: 'City, Township.',
        example: 'Woodland Hills',
        'x-parser-schema-id': '<anonymous-schema-583>',
      },
      postalCode: {
        type: 'string',
        description: 'Zip/Post Code',
        example: '91371',
        'x-parser-schema-id': '<anonymous-schema-584>',
      },
      addressRegion: {
        type: 'string',
        description: 'State or Province.',
        example: 'CA',
        'x-parser-schema-id': '<anonymous-schema-585>',
      },
      addressCountry: {
        type: 'string',
        description:
          'The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.',
        example: 'US',
        'x-parser-schema-id': '<anonymous-schema-586>',
      },
      addressCounty: {
        type: 'string',
        description: 'the county (us real estate extension)',
        example: 'Los Angeles',
        'x-parser-schema-id': '<anonymous-schema-587>',
      },
      provider: {
        type: 'object',
        description:
          'a broker or company who provides service in the ServiceArea',
        'x-range': ['RealEstateOrganization'],
        properties: {
          type: {
            type: 'string',
            description: '"RealEstateOrganization"',
            enum: ['RealEstateOrganization'],
            'x-parser-schema-id': '<anonymous-schema-589>',
          },
          id: {
            type: 'string',
            description: 'profile URI',
            example: 'https://org.example.com/profile/card#me',
            'x-parser-schema-id': '<anonymous-schema-590>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-588>',
      },
      additionalProperty: {
        type: 'object',
        description: 'BHHS specific ServiceArea properties',
        properties: {
          relocationOffice: {
            type: 'object',
            description: 'relocation office',
            properties: {
              type: {
                type: 'string',
                description: 'The item type (Linked-Data @type)',
                enum: ['RealEstateOffice'],
                'x-parser-schema-id': '<anonymous-schema-593>',
              },
              id: {
                type: 'string',
                'x-subPropertyOf': 'identifier',
                example: 'https://org.example.com/profile/card#me',
                'x-parser-schema-id': '<anonymous-schema-594>',
              },
            },
            'x-parser-schema-id': '<anonymous-schema-592>',
          },
          weight: {
            type: 'integer',
            description: 'weight',
            'x-parser-schema-id': '<anonymous-schema-595>',
          },
          officeInPostalCode: {
            type: 'boolean',
            description:
              'true if the service area provider is physically located in the ServiceArea.',
            'x-parser-schema-id': '<anonymous-schema-596>',
          },
          sortOrder: {
            type: 'integer',
            description: 'sort order',
            'x-parser-schema-id': '<anonymous-schema-597>',
          },
          sentToConsumerSite: {
            type: 'boolean',
            description: 'sent to consumer site',
            'x-parser-schema-id': '<anonymous-schema-598>',
          },
          sentToCompanyLocator: {
            type: 'boolean',
            description: 'sent to company locator',
            'x-parser-schema-id': '<anonymous-schema-599>',
          },
          sentToReferralSolutions: {
            type: 'boolean',
            description: 'sent to referral solutions',
            'x-parser-schema-id': '<anonymous-schema-600>',
          },
          luxuryPriceMinimum: {
            description:
              'minimum price for a property listing in the area to be considered a luxury property',
            type: 'object',
            'x-range': 'PriceSpecification',
            example: {
              type: 'PriceSpecification',
              price: 1000000,
              priceCurrency: 'USD',
            },
            'x-parser-schema-id': '<anonymous-schema-601>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-591>',
      },
    },
    'x-parser-schema-id': 'ServiceArea',
  },
  State: {
    title: 'State',
    'x-range': 'State',
    description: 'a State or Region',
    type: 'object',
    properties: {
      type: {
        type: 'string',
        description: 'The item type (Linked-Data @type)',
        enum: ['State'],
        'x-parser-schema-id': '<anonymous-schema-602>',
      },
      name: {
        type: 'string',
        description: 'the name of the item',
        'x-parser-schema-id': '<anonymous-schema-191>',
      },
    },
    example: {
      type: 'State',
      name: 'New Jersey',
    },
    'x-parser-schema-id': 'State',
  },
  SubscribeAction: {
    allOf: [
      {
        title: 'Action',
        type: 'object',
        description:
          'An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.',
        required: ['type'],
        properties: {
          type: {
            description: 'the action type',
            type: 'string',
            'x-parser-schema-id': '<anonymous-schema-113>',
          },
          object: {
            description: 'item on which the action is carried out',
            'x-parser-schema-id': '<anonymous-schema-114>',
          },
        },
        externalDocs: {
          description: 'schema.org/Action',
          url: 'https://schema.org/Action',
        },
        'x-parser-schema-id': 'Action',
      },
      {
        'x-range': 'SubscribeAction',
        description:
          'the consumer (agent) has subscribed to content from the participant with roleName SubscriptionProvider.',
        properties: {
          type: {
            enum: ['SubscribeAction'],
          },
          agent: {
            type: 'object',
            description: 'the subscriber',
            'x-range': 'Contact',
            example: {
              type: 'Contact',
              email: 'bob@example.com',
              identifier: {
                hsfconsumerid: 'D9AB8127-7D19-4C67-A514-9209F22F4511',
              },
            },
          },
          participant: {
            description:
              'the subscription provider, an Agent, Team, Office or Organization',
            'x-range': [
              'RealEstateAgent',
              'RealEstateTeam',
              'RealEstateOffice',
              'RealEstateOrganization',
            ],
            type: 'array',
            items: {
              type: 'object',
              properties: {
                roleName: {
                  type: 'string',
                  enum: ['SubscriptionProvider'],
                },
                id: {
                  type: 'string',
                  format: 'uri',
                  example: 'https://12345.example.com/profile/card#me',
                },
                additionalProperty: {
                  type: 'object',
                  properties: {
                    isCompanyQueue: {
                      type: 'boolean',
                    },
                  },
                },
              },
            },
          },
        },
        'x-parser-schema-id': '<anonymous-schema-603>',
      },
    ],
    'x-parser-schema-id': 'SubscribeAction',
  },
  Task: {
    title: 'Task',
    type: 'object',
    description:
      'an action assigned to an agent, typically as part of a set of interdependent tasks in a Plan',
    'x-range': 'Task',
    properties: {
      type: {
        type: 'string',
        description: 'The item type (Linked-Data @type)',
        enum: ['Task'],
        'x-parser-schema-id': '<anonymous-schema-344>',
      },
      identifier: {
        type: 'object',
        description:
          'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.',
        example: {
          salesforceContactID: 'c28834ca-db69-4da8-90ad-75cdc9907298',
        },
        'x-parser-schema-id': '<anonymous-schema-345>',
      },
      actionStatus: {
        example: 'PotentialActionStatus',
        type: 'string',
        description:
          'disposition of the Action at the time of this action message.',
        'x-range': [
          'CompletedActionStatus',
          'FailedActionStatus',
          'ActiveActionStatus',
          'PotentialActionStatus',
        ],
        enum: [
          'CompletedActionStatus',
          'FailedActionStatus',
          'ActiveActionStatus',
          'PotentialActionStatus',
        ],
        'x-parser-schema-id': '<anonymous-schema-346>',
      },
      memberOf: {
        type: 'object',
        'x-range': 'Plan',
        description: 'a plan the task is associated with',
        example: {
          type: 'Plan',
          identifier: {
            redPlan_ID: 'xxxx',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-347>',
      },
      agent: {
        type: 'object',
        description: 'the party who completed, or will complete the task',
        'x-range': ['Person', 'Organization', 'RealEstateAgent', 'Contact'],
        example: {
          type: 'RealEstateAgent',
          id: 'http://user.example.com/profile/card#me',
        },
        'x-parser-schema-id': '<anonymous-schema-348>',
      },
      participant: {
        'x-title': 'participant',
        'x-range': [
          'Person',
          'RealEstateAgent',
          'RealEstateTeam',
          'RealEstateOrganization',
        ],
        description:
          'Other co-agents with a direct or indirect interest in the action.',
        type: 'array',
        items: {
          type: 'object',
          'x-parser-schema-id': '<anonymous-schema-350>',
        },
        example: [
          {
            type: 'Contact',
            name: 'Bruce Wayne',
            email: 'bruce@example.com',
            identifier: {
              redContact_GUID: '92d0a096-457e-4643-ace8-fa95b6bdb1c5',
            },
          },
        ],
        'x-parser-schema-id': '<anonymous-schema-349>',
      },
      name: {
        type: 'string',
        description: 'name or title',
        example: 'Call Ricky',
        'x-parser-schema-id': '<anonymous-schema-351>',
      },
      description: {
        type: 'string',
        description: 'task detailed description',
        example: 'Agenda 1. Something 2. Something Else ...',
        'x-parser-schema-id': '<anonymous-schema-352>',
      },
      keywords: {
        title: 'keywords',
        description:
          'keywords/tags for grouping and organizing the item in collections',
        type: 'array',
        example: ['Sphere of Influence', 'Past Customer'],
        items: {
          type: 'string',
          'x-parser-schema-id': '<anonymous-schema-354>',
        },
        'x-parser-schema-id': '<anonymous-schema-353>',
      },
      dateDue: {
        description: 'the due date-time (ISO 8601 formated)',
        type: 'string',
        format: 'date-time',
        'x-parser-schema-id': '<anonymous-schema-355>',
      },
      dateCompleted: {
        type: 'string',
        format: 'date-time',
        description: 'date the task was completed',
        'x-parser-schema-id': '<anonymous-schema-356>',
      },
      location: {
        type: 'object',
        description: 'the physical location where an event takes place',
        'x-range': ['Place'],
        example: {
          type: 'Place',
          address: {
            streetAddress: '1007 Mountain Gate Rd',
            addressLocality: 'Gotham City',
            addressRegion: 'NJ',
            postalCode: '10007',
            addressCounty: 'Gotham addressCounty',
            addressSubdivision: 'Gotham Heights',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-357>',
      },
    },
    'x-parser-schema-id': 'Task',
  },
  Thing: {
    type: 'object',
    required: ['type'],
    properties: {
      type: {
        type: 'string',
        description: 'The item type (Linked-Data @type)',
        'x-parser-schema-id': '<anonymous-schema-136>',
      },
    },
    'x-parser-schema-id': 'Thing',
  },
  TransactionEntry: {
    type: 'object',
    title: 'TransactionEntry',
    description:
      'describes a unit of sales credit in unit or commission value relative to a parent transaction',
    'x-range': 'TransactionEntry',
    properties: {
      type: {
        type: 'string',
        description: 'TransactionEntry',
        enum: ['TransactionEntry'],
        'x-parser-schema-id': '<anonymous-schema-558>',
      },
      salesProductionUnit: {
        type: 'number',
        minimum: 0.0001,
        maximum: 1,
        description: 'the sales production units credited to the recipient',
        example: 0.5,
        'x-parser-schema-id': '<anonymous-schema-559>',
      },
      salesProductionGCI: {
        type: 'object',
        title: 'MonetaryAmount',
        'x-range': 'MonetaryAmount',
        required: ['type', 'value', 'currency'],
        properties: {
          type: {
            type: 'string',
            description: 'MonetaryAmount',
            enum: ['MonetaryAmount'],
            'x-parser-schema-id': '<anonymous-schema-320>',
          },
          minValue: {
            type: 'number',
            description: 'the lower limit of the range',
            example: 2400000,
            'x-parser-schema-id': '<anonymous-schema-321>',
          },
          maxValue: {
            type: 'number',
            description: 'the upper limit of the range',
            example: 3200000,
            'x-parser-schema-id': '<anonymous-schema-322>',
          },
          value: {
            type: 'number',
            description: 'the actual or expected value',
            example: 2700000,
            'x-parser-schema-id': '<anonymous-schema-323>',
          },
          currency: {
            type: 'string',
            description: 'use ISO4217 country codes',
            maxLength: 3,
            example: 'USD',
            'x-parser-schema-id': '<anonymous-schema-324>',
          },
        },
        description: 'gross commission income credited to the recipient',
        example: {
          type: 'MonetaryAmount',
          value: 1234.56,
          currency: 'USD',
        },
        'x-parser-schema-id': '<anonymous-schema-560>',
      },
      recipient: {
        description:
          'the agent credited with the sales production and who receives the value',
        type: 'object',
        properties: {
          type: {
            type: 'string',
            description: 'typically a RealEstateAgent',
            example: 'RealEstateAgent',
            'x-parser-schema-id': '<anonymous-schema-562>',
          },
          roleName: {
            type: 'string',
            description: 'enum: ListingAgent,BuyerAgent',
            enum: ['ListingAgent', 'BuyerAgent'],
            'x-parser-schema-id': '<anonymous-schema-563>',
          },
          id: {
            type: 'string',
            format: 'uri',
            description: 'Linked-Data URI (@id)',
            example: 'https://{entityid}.example.com/profile/card#me',
            'x-parser-schema-id': '<anonymous-schema-564>',
          },
          identifier: {
            type: 'object',
            description:
              'unique identifier of the recipient from the data producer',
            properties: {
              bmsAgentId: {
                type: 'string',
                maxLength: 12,
                example: '1657897',
                'x-parser-schema-id': '<anonymous-schema-566>',
              },
            },
            'x-parser-schema-id': '<anonymous-schema-565>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-561>',
      },
    },
    'x-parser-schema-id': 'TransactionEntry',
  },
  TransactionParticipant: {
    type: 'object',
    title: 'TransactionParticipant',
    'x-range': 'TransactionParticipant',
    properties: {
      type: {
        type: 'string',
        description: 'The item type (Linked-Data @type)',
        enum: ['TransactionParticipant'],
        'x-parser-schema-id': '<anonymous-schema-549>',
      },
      roleName: {
        type: 'string',
        description: 'enum: Buyer,Seller',
        enum: ['Buyer', 'Seller'],
        'x-parser-schema-id': '<anonymous-schema-550>',
      },
      position: {
        type: 'number',
        description: 'numeric position for the participant/roleName.',
        example: 1,
        'x-parser-schema-id': '<anonymous-schema-551>',
      },
      givenName: {
        type: 'string',
        description: 'First Name of a person',
        example: 'Glenn',
        'x-parser-schema-id': '<anonymous-schema-225>',
      },
      familyName: {
        type: 'string',
        description: 'Last Name of a person',
        example: 'Miller',
        maxLength: 50,
        'x-parser-schema-id': '<anonymous-schema-254>',
      },
      additionalName: {
        type: 'string',
        description: 'middleName or alternate name of the Person',
        example: 'Big',
        'x-parser-schema-id': '<anonymous-schema-552>',
      },
      email: {
        type: 'string',
        format: 'email',
        description: 'Primary email address.',
        example: 'user@example.com',
        'x-parser-schema-id': '<anonymous-schema-553>',
      },
      telephone: {
        type: 'string',
        description: 'Primary phone number.',
        example: '+15558675309',
        'x-parser-schema-id': '<anonymous-schema-554>',
      },
      affiliation: {
        type: 'array',
        description: 'person or organization associated with the participant',
        items: {
          type: 'string',
          format: 'uri',
          example: 'https://{agentid}.example.com/profile/card#me',
          'x-parser-schema-id': '<anonymous-schema-556>',
        },
        'x-parser-schema-id': '<anonymous-schema-555>',
      },
    },
    'x-parser-schema-id': 'TransactionParticipant',
  },
  TransactionStatus: {
    title: 'TransactionStatus',
    description: 'Transaction Status Enumeration Values',
    type: 'object',
    properties: {
      PendingTransactionStatus: {
        type: 'string',
        description: 'Pending Status',
        'x-parser-schema-id': '<anonymous-schema-604>',
      },
      ClosedTransactionStatus: {
        type: 'string',
        description: 'Closed Status',
        'x-parser-schema-id': '<anonymous-schema-605>',
      },
      CanceledTransactionStatus: {
        type: 'string',
        description: 'Canceled Status',
        'x-parser-schema-id': '<anonymous-schema-606>',
      },
    },
    example: {
      transactionStatus: 'ClosedTransactionStatus',
    },
    'x-parser-schema-id': 'TransactionStatus',
  },
  UnsubscribeAction: {
    allOf: [
      {
        title: 'Action',
        type: 'object',
        description:
          'An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.',
        required: ['type'],
        properties: {
          type: {
            description: 'the action type',
            type: 'string',
            'x-parser-schema-id': '<anonymous-schema-113>',
          },
          object: {
            description: 'item on which the action is carried out',
            'x-parser-schema-id': '<anonymous-schema-114>',
          },
        },
        externalDocs: {
          description: 'schema.org/Action',
          url: 'https://schema.org/Action',
        },
        'x-parser-schema-id': 'Action',
      },
      {
        'x-range': 'UnsubscribeAction',
        description:
          'the consumer (agent) has unsubscribed to content from the participant with roleName SubscriptionProvider.',
        properties: {
          type: {
            enum: ['UnsubscribeAction'],
          },
          agent: {
            type: 'object',
            description: 'the subscriber',
            'x-range': 'Contact',
            example: {
              type: 'Contact',
              email: 'bob@example.com',
              identifier: {
                hsfconsumerid: 'xxxxxxxxxxxxx',
              },
            },
          },
          participant: {
            description:
              'the subscription provider, an Agent, Team, Office or Organization',
            'x-range': [
              'RealEstateAgent',
              'RealEstateTeam',
              'RealEstateOffice',
              'RealEstateOrganization',
            ],
            type: 'array',
            items: {
              type: 'object',
              properties: {
                roleName: {
                  type: 'string',
                  enum: ['SubscriptionProvider'],
                },
                id: {
                  type: 'string',
                  format: 'uri',
                  example: 'https://12345.example.com/profile/card#me',
                },
                additionalProperty: {
                  type: 'object',
                  properties: {
                    isCompanyQueue: {
                      type: 'boolean',
                    },
                  },
                },
              },
            },
          },
        },
        'x-parser-schema-id': '<anonymous-schema-607>',
      },
    ],
    'x-parser-schema-id': 'UnsubscribeAction',
  },
  BHHSTerms: {
    title: 'BHHSTerms',
    type: 'object',
    description: 'additional properties for BHHS.',
    properties: {
      'contactPoint.name': {
        type: 'string',
        enum: ['BHHSWebsiteURL', 'BHHSWebsiteVanityURL'],
        'x-parser-schema-id': '<anonymous-schema-608>',
      },
      additionalProperty: {
        type: 'object',
        properties: {
          Status: {
            type: 'string',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': [
              'RealEstateOrganization',
              'RealEstateOffice',
              'RealEstateAgent',
            ],
            enum: ['Active', 'Inactive', 'Pre-Active'],
            'x-parser-schema-id': '<anonymous-schema-610>',
          },
          UserType: {
            type: 'string',
            description: 'employee type. For backward compatibility',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateAgent'],
            'x-parser-schema-id': '<anonymous-schema-611>',
          },
          AffiliateID: {
            type: 'string',
            description: 'BHHS affiliate identifier',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateAgent', 'RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-612>',
          },
          BrokerID: {
            type: 'string',
            description:
              'BHHS affiliate identifier. For backward compatibility',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateAgent', 'RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-613>',
          },
          OfficeID: {
            type: 'string',
            description: 'BHHS office identifier. For backward compatibility',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateAgent'],
            'x-parser-schema-id': '<anonymous-schema-614>',
          },
          OfficeDBA: {
            type: 'string',
            description: 'name of office. For backward compatibility',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateAgent'],
            'x-parser-schema-id': '<anonymous-schema-615>',
          },
          AffiliateStatus: {
            type: 'string',
            description: 'status of affiliate. For backward compatibility',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateOrganization'],
            'x-parser-schema-id': '<anonymous-schema-616>',
          },
          OfficeStatus: {
            type: 'string',
            description: 'status of office. For backward compatibility',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateAgent', 'RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-617>',
          },
          EmployeeType: {
            type: 'string',
            description: 'type of employee',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateAgent'],
            enum: [
              'Full Time Sales Professional',
              'Part Time Sales Professional',
              'Non-Agent',
              'Marketing Team',
              'In-House Admin. Profile',
            ],
            'x-parser-schema-id': '<anonymous-schema-618>',
          },
          IsCompanyQueue: {
            type: 'boolean',
            description: "if the real estate agent accepts company's lead",
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateAgent'],
            'x-parser-schema-id': '<anonymous-schema-619>',
          },
          agentWebsiteType: {
            type: 'string',
            description: "agent's website type",
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateAgent'],
            enum: ['Agent Profile', 'Agent Page with IDX Search'],
            'x-parser-schema-id': '<anonymous-schema-620>',
          },
          RoqLogicTCVersion: {
            type: 'string',
            description:
              'version of RoqLogic terms and conditions agent accepted.',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateAgent'],
            example: 'TC-00035',
            'x-parser-schema-id': '<anonymous-schema-621>',
          },
          bhhsLeadNotificationPreference: {
            type: 'object',
            description: 'lead notification preference',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateAgent'],
            properties: {
              timeZone: {
                type: 'string',
                example: ['GMT+12:00 Fiji Time (Pacific/Fiji)'],
                'x-parser-schema-id': '<anonymous-schema-623>',
              },
              emailNotification: {
                type: 'boolean',
                description:
                  'if notification will be sent to sepcified email address',
                'x-parser-schema-id': '<anonymous-schema-624>',
              },
              textNotification: {
                type: 'boolean',
                description:
                  'if notification will be sent to sepcified phone number',
                'x-parser-schema-id': '<anonymous-schema-625>',
              },
              email: {
                type: 'string',
                description: 'email address that notification will be sent to',
                'x-parser-schema-id': '<anonymous-schema-626>',
              },
              telephone: {
                type: 'string',
                description: 'phone number that notification will be sent to',
                'x-parser-schema-id': '<anonymous-schema-627>',
              },
              leadNotificationSchedule: {
                type: 'array',
                items: {
                  title: 'Schedule',
                  type: 'object',
                  description:
                    'A schedule defines a repeating time period used to describe a regularly occurring Event. At a minimum a schedule will specify repeatFrequency which describes the interval between occurences of the event. Additional information can be provided to specify the schedule more precisely. This includes identifying the day(s) of the week or month when the recurring event will take place, in addition to its start and end time. Schedules may also have start and end dates to indicate when they are active, e.g. to define a limited calendar of events.\n',
                  properties: {
                    type: {
                      type: 'string',
                      description: 'The item type (Linked-Data @type)',
                      'x-parser-schema-id': '<anonymous-schema-252>',
                    },
                    byDay: {
                      description:
                        'Defines the day(s) of the week on which a recurring Event takes place',
                      type: 'array',
                      items: {
                        type: 'string',
                        enum: [
                          'Sunday',
                          'Monday',
                          'Tuesday',
                          'Wednesday',
                          'Thursday',
                          'Friday',
                        ],
                        'x-parser-schema-id': '<anonymous-schema-572>',
                      },
                      example: ['Monday', 'Wednesday', 'Friday'],
                      'x-parser-schema-id': '<anonymous-schema-571>',
                    },
                    byMonth: {
                      description:
                        'Defines the month(s) of the year on which a recurring Event takes place. Specified as an Integer between 1-12. January is 1.',
                      type: 'array',
                      items: {
                        type: 'number',
                        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                        'x-parser-schema-id': '<anonymous-schema-574>',
                      },
                      example: [1],
                      'x-parser-schema-id': '<anonymous-schema-573>',
                    },
                    byMonthDay: {
                      type: 'array',
                      description:
                        'Defines the day(s) of the month on which a recurring Event takes place. Specified as an Integer between 1-31.',
                      items: {
                        type: 'number',
                        'x-parser-schema-id': '<anonymous-schema-576>',
                      },
                      'x-parser-schema-id': '<anonymous-schema-575>',
                    },
                  },
                  'x-parser-schema-id': '<anonymous-schema-629>',
                },
                'x-parser-schema-id': '<anonymous-schema-628>',
              },
            },
            'x-parser-schema-id': '<anonymous-schema-622>',
          },
          IsDisplayed: {
            type: 'boolean',
            description:
              'if an affiliate/office/agent is listed in company/office/agent finder.',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': [
              'RealEstateOrganization',
              'RealEstateOffice',
              'RealEstateAgent',
            ],
            'x-parser-schema-id': '<anonymous-schema-630>',
          },
          OfficeType: {
            type: 'string',
            description: 'type of office',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateOffice'],
            enum: [
              'Administrative Office',
              'Branch Office',
              'Kiosk',
              'Primary Office',
              'Srvice Center',
              'Subdivision Sales Office',
            ],
            'x-parser-schema-id': '<anonymous-schema-631>',
          },
          FullTimeCount: {
            type: 'integer',
            description: 'the number of full time sales professional',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateOffice', 'RealEstateCompany'],
            'x-parser-schema-id': '<anonymous-schema-632>',
          },
          PartTimeCount: {
            type: 'integer',
            description: 'the number of part time sales professional',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateOffice', 'RealEstateCompany'],
            'x-parser-schema-id': '<anonymous-schema-633>',
          },
          franchiseCommitmentNotes: {
            type: 'string',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateOrganization'],
            'x-parser-schema-id': '<anonymous-schema-634>',
          },
          franchiseCommitment: {
            type: 'string',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateOrganization'],
            'x-parser-schema-id': '<anonymous-schema-635>',
          },
          listingLeadsToListingAgent: {
            type: 'boolean',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateOrganization'],
            'x-parser-schema-id': '<anonymous-schema-636>',
          },
          HSoACompany: {
            type: 'boolean',
            description: 'if company is owned by HSoA',
            'x-subPropertyOf': 'additionalProperty',
            'x-domain': ['RealEstateOrganization'],
            'x-parser-schema-id': '<anonymous-schema-637>',
          },
          unassignedLeadOwner: {
            description: 'agent whom affiliate leads are assigned to',
            'x-subPropertyOf': 'identifier',
            'x-domain': ['RealEstateOrganization'],
            'x-parser-schema-id': '<anonymous-schema-638>',
          },
          companyContactLastName: {
            type: 'string',
            description: 'last name of company contact',
            'x-domain': ['RealEstateOrganization'],
            'x-parser-schema-id': '<anonymous-schema-639>',
          },
          companyContactFirstName: {
            type: 'string',
            description: 'first name of company contact',
            'x-domain': ['RealEstateOrganization'],
            'x-parser-schema-id': '<anonymous-schema-640>',
          },
          companyCFO: {
            type: 'string',
            description: 'full name of company CFO',
            'x-domain': ['RealEstateOrganization'],
            'x-parser-schema-id': '<anonymous-schema-641>',
          },
          primaryOffice: {
            description: 'primay office of company',
            'x-subPropertyOf': 'identifier',
            'x-domain': ['RealEstateOrganization'],
            'x-parser-schema-id': '<anonymous-schema-642>',
          },
          transactionReportingMethod: {
            description: 'method of reporting transaction',
            type: 'string',
            'x-domain': ['RealEstateOrganization'],
            enum: [
              'Batch File Upload',
              'Direct Data Entry',
              'Summary Reporting',
            ],
            'x-parser-schema-id': '<anonymous-schema-643>',
          },
          databridgeVersion: {
            description: 'version of data bridge',
            type: 'string',
            'x-domain': ['RealEstateOrganization'],
            enum: ['DB4.0', 'DB3.0'],
            'x-parser-schema-id': '<anonymous-schema-644>',
          },
          systemDeactivationDate: {
            type: 'string',
            format: 'date-time',
            'x-domain': ['RealEstateOrganization', 'RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-645>',
          },
          inactiveDate: {
            type: 'string',
            format: 'date-time',
            'x-domain': ['RealEstateOrganization', 'RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-646>',
          },
          goLiveDate: {
            type: 'string',
            format: 'date-time',
            'x-domain': ['RealEstateOrganization', 'RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-647>',
          },
          originalAffiliationDate: {
            type: 'string',
            format: 'date-time',
            'x-domain': ['RealEstateOrganization'],
            'x-parser-schema-id': '<anonymous-schema-648>',
          },
          numberOfSubOrganizations: {
            type: 'integer',
            'x-domain': ['RealEstateOrganization'],
            'x-parser-schema-id': '<anonymous-schema-649>',
          },
          PublicOffice: {
            type: 'string',
            description: "office's public name",
            'x-domain': ['RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-650>',
          },
          OfficeContact: {
            description: 'office contact',
            'x-subPropertyOf': 'identifier',
            'x-domain': ['RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-651>',
          },
          IsRelocationOffice: {
            description: 'if office is relocation office',
            type: 'boolean',
            'x-domain': ['RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-652>',
          },
          PrimaryHomeStoryContact: {
            description: 'office primary Home Story contact',
            'x-subPropertyOf': 'identifier',
            'x-domain': ['RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-653>',
          },
          PrimaryHomeStoryContactEmail: {
            description: 'primary Home Story contact email',
            type: 'string',
            'x-domain': ['RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-654>',
          },
          PrimaryRelocationContact: {
            description: 'office primary relocation contact',
            'x-subPropertyOf': 'identifier',
            'x-domain': ['RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-655>',
          },
          PrimaryRelocationContactEmail: {
            description: 'primary relocation contact email',
            type: 'string',
            'x-domain': ['RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-656>',
          },
          PrimaryReferralContact: {
            description: 'office primary referral contact',
            'x-subPropertyOf': 'identifier',
            'x-domain': ['RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-657>',
          },
          PrimaryReferralContactEmail: {
            description: 'primary referral contact email',
            type: 'string',
            'x-domain': ['RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-658>',
          },
          PrimaryREOContact: {
            description: 'office primary REO contact',
            'x-subPropertyOf': 'identifier',
            'x-domain': ['RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-659>',
          },
          PrimaryREOContactEmail: {
            description: 'primary REO contact email',
            type: 'string',
            'x-domain': ['RealEstateOffice'],
            'x-parser-schema-id': '<anonymous-schema-660>',
          },
          transactionSequence: {
            description:
              'The adjustment sequence number. Must be zeros if STR is closed but not an adjustment or if STR is open or canceled. If adjusting a closed transaction, the first adjustment must have 001 in the adjustment sequence, the second must have 002, the third, 003, etc. Sequence number cannot be equal or less than the last adjustment sequence number reported for the transaction if the Status has not changed.',
            type: 'string',
            'x-parser-schema-id': '<anonymous-schema-661>',
          },
          unimprovedLandFlag: {
            description:
              'A Yes/No flag identifying where or not the property involved in the transaction is considered unimproved land. Valid codes are Y = unimproved land  N= not an unimproved land',
            type: 'string',
            'x-parser-schema-id': '<anonymous-schema-662>',
          },
          workingWithAgent: {
            description: 'is consumer already working with an Agent?',
            type: 'boolean',
            'x-parser-schema-id': '<anonymous-schema-663>',
          },
        },
        'x-parser-schema-id': '<anonymous-schema-609>',
      },
    },
    'x-parser-schema-id': 'BHHSTerms',
  },
}

export async function getSchema(schema) {
  if (typeof schema === 'string' && schema.startsWith('http')) {
    schema = await $RefParser.dereference(schema)
  } else {
    schema = schemas[schema]
  }
  return schema
}
