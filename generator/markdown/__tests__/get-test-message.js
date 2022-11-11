import Message from '@asyncapi/parser/lib/models/message'

const baseEvent = {
  type: 'object',
  required: [
    'topic',
    'data'
  ],
  properties: {
    topic: {
      type: 'string',
      description: 'the event topic which determines the schema of event.data',
      'x-parser-schema-id': '<anonymous-schema-3>'
    },
    data: {
      type: 'object',
      description: 'event payload, typically an Action',
      'x-parser-schema-id': '<anonymous-schema-11>'
    }
  },
  'x-parser-schema-id': '<anonymous-schema-2>'
}
const headers = {
  name: 'award#delete',
  title: 'award#delete',
  summary: 'award deleted',
  contentType: 'application/json'
}

const testMessage = {
  messageId: 'award#delete',
  headers,
  tags: [
    {
      name: 'action|delete'
    },
    {
      name: 'topic|award'
    },
    {
      name: 'domain|realestate'
    }
  ],
  payload: {
    allOf: [
      baseEvent,
      // specific events override the topic enum and the data action.
      {
        properties: {
          topic: {
            enum: [
              'realestate/award#delete'
            ]
          },
          data: {
            properties: {
              type: {
                enum: [
                  'DeleteAction'
                ]
              },
              identifier: {
                example: {
                  bhhsAwardId: 'xxxx'
                },
                type: 'object',
                description: 'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.'
              },
              'x-range': [
                'DeleteAction'
              ],
              agent: {
                description: 'the award presentor',
                title: 'agent',
                'x-range': [
                  'Person',
                  'Organization',
                  'URI'
                ],
                oneOf: [
                  {
                    type: 'string',
                    format: 'uri',
                    example: 'http://{user}.example.com/profile/card#me'
                  },
                  {
                    type: 'object'
                  }
                ]
              },
              object: {
                description: 'the award being bestowed',
                example: {
                  type: 'AwardSeries',
                  name: 'Agent of The Year',
                  identifier: {
                    hsfAwardSeriesId: 'xxxx'
                  }
                },
                title: 'AwardSeries',
                type: 'object',
                'x-range': [
                  'AwardSeries'
                ],
                properties: {
                  type: {
                    enum: [
                      'AwardSeries'
                    ],
                    description: '"AwardSeries"',
                    type: 'string',
                    'x-parser-schema-id': '<anonymous-schema-130>'
                  },
                  name: {
                    example: 'Top 1% Club',
                    description: 'name of the series',
                    type: 'string',
                    'x-parser-schema-id': '<anonymous-schema-131>'
                  },
                  description: {
                    example: 'Annual',
                    type: 'string',
                    description: 'description of the item.',
                    'x-parser-schema-id': '<anonymous-schema-132>'
                  },
                  duration: {
                    title: 'duration',
                    type: 'string',
                    description: 'The duration of the item in ISO 8601 date format.',
                    example: 'R/P1Y',
                    'x-parser-schema-id': '<anonymous-schema-133>'
                  },
                  startDate: {
                    description: 'the start date-time (ISO 8601 formated)',
                    type: 'string',
                    format: 'date-time',
                    'x-parser-schema-id': '<anonymous-schema-134>'
                  },
                  endDate: {
                    type: 'string',
                    description: 'the end date-time (ISO 8601 formated)',
                    format: 'date-time',
                    'x-parser-schema-id': '<anonymous-schema-135>'
                  },
                  id: {
                    example: 'https://example/com',
                    type: 'string',
                    format: 'uri',
                    description: 'Linked-Data URI (@id)',
                    'x-parser-schema-id': '<anonymous-schema-136>'
                  },
                  identifier: {
                    example: {
                      hsfAwardSeriesID: 'xxxx'
                    },
                    type: 'object',
                    description: 'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.',
                    'x-parser-schema-id': '<anonymous-schema-137>'
                  }
                }
              },
              recipient: {
                type: 'object',
                'x-range': [
                  'RealEstateAgent',
                  'RealEstateOffice',
                  'RealEstateOrganiation'
                ],
                description: 'profile URI of the award recipient',
                example: {
                  type: 'RealEstateAgent',
                  id: 'https://user.example.com/profile/card#me',
                  name: 'Joann Agent'
                }
              }
            }
          }
        },
        'x-parser-schema-id': '<anonymous-schema-12>'
      }
    ],
    'x-parser-schema-id': '<anonymous-schema-1>'
  },
  'x-parser-original-schema-format': 'application/vnd.aai.asyncapi;version=2.4.0',
  'x-parser-original-payload': {
    type: 'object',
    allOf: [
      {
        type: 'object',
        required: [
          'topic',
          'data'
        ],
        properties: {
          topic: {
            type: 'string',
            description: 'the event topic which determines the schema of event.data'
          },
          time: {
            type: 'string',
            format: 'date-time',
            description: 'date & time the event was produced'
          },
          agent: {
            type: 'string',
            format: 'uri',
            description: 'the user,tema or organization who sent the event',
            example: 'https://agentid.example.com/profile/card#me'
          },
          instrument: {
            type: 'string',
            format: 'uri',
            description: 'the service which created the event',
            example: 'https://vendorid.example.com/profile/card#me'
          },
          source: {
            type: 'string',
            format: 'uri',
            description: 'an agent, team or organization who received a copy of the event',
            example: 'https://companyid.example.com/profile/card#me'
          },
          originalRecipient: {
            type: 'string',
            format: 'uri',
            description: 'the original recipient of the event with this id',
            example: 'https://agentid.example.com/profile/card#me'
          },
          id: {
            type: 'string',
            format: 'uri',
            description: 'the shared identifier of the event, akd the event id',
            example: 'https://instrumentid.example.com/publish/xxxxxxxxxxxxx'
          },
          '@id': {
            type: 'string',
            format: 'uri',
            description: 'the url of your instance of the event in your inbox',
            example: 'https://yourpod.example.com/inbox/xxxxxxxxxxxxx'
          },
          data: {
            type: 'object',
            description: 'event payload, typically an Action'
          }
        }
      },
      {
        properties: {
          topic: {
            enum: [
              'realestate/award#delete'
            ]
          },
          data: {
            'x-range': [
              'DeleteAction'
            ],
            properties: {
              type: {
                enum: [
                  'DeleteAction'
                ]
              },
              identifier: {
                example: {
                  bhhsAwardId: 'xxxx'
                },
                type: 'object',
                description: 'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.'
              },
              agent: {
                description: 'the award presentor',
                title: 'agent',
                'x-range': [
                  'Person',
                  'Organization',
                  'URI'
                ],
                oneOf: [
                  {
                    type: 'string',
                    format: 'uri',
                    example: 'http://{user}.example.com/profile/card#me'
                  },
                  {
                    type: 'object'
                  }
                ]
              },
              object: {
                description: 'the award being bestowed',
                example: {
                  type: 'AwardSeries',
                  name: 'Agent of The Year',
                  identifier: {
                    hsfAwardSeriesId: 'xxxx'
                  }
                },
                title: 'AwardSeries',
                type: 'object',
                'x-range': [
                  'AwardSeries'
                ],
                properties: {
                  type: {
                    enum: [
                      'AwardSeries'
                    ],
                    description: '"AwardSeries"',
                    type: 'string'
                  },
                  name: {
                    example: 'Top 1% Club',
                    description: 'name of the series',
                    type: 'string'
                  },
                  description: {
                    example: 'Annual',
                    type: 'string',
                    description: 'description of the item.'
                  },
                  duration: {
                    title: 'duration',
                    type: 'string',
                    description: 'The duration of the item in ISO 8601 date format.',
                    example: 'R/P1Y'
                  },
                  startDate: {
                    description: 'the start date-time (ISO 8601 formated)',
                    type: 'string',
                    format: 'date-time'
                  },
                  endDate: {
                    type: 'string',
                    description: 'the end date-time (ISO 8601 formated)',
                    format: 'date-time'
                  },
                  id: {
                    example: 'https://example/com',
                    type: 'string',
                    format: 'uri',
                    description: 'Linked-Data URI (@id)'
                  },
                  identifier: {
                    example: {
                      hsfAwardSeriesID: 'xxxx'
                    },
                    type: 'object',
                    description: 'key/value id assigned to the record in the system where the data was originally created. The identifier should be included along with any statements on the record, or the entity associated to the record.'
                  }
                }
              },
              recipient: {
                type: 'object',
                'x-range': [
                  'RealEstateAgent',
                  'RealEstateOffice',
                  'RealEstateOrganiation'
                ],
                description: 'profile URI of the award recipient',
                example: {
                  type: 'RealEstateAgent',
                  id: 'https://user.example.com/profile/card#me',
                  name: 'Joann Agent'
                }
              }
            }
          }
        }
      }
    ]
  },
  schemaFormat: 'application/vnd.aai.asyncapi;version=2.4.0',
  'x-parser-message-parsed': true
}

/**
 *
 * @param {*} overrides
 * @returns Message object
 */
export function getTestMessage (overrides = {}) {
  const props = Object.assign({}, testMessage, overrides)
  return new Message(props)
}
