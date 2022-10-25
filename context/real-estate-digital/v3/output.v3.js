module.exports = {
  type: 'UpdateAction',
  object: {
    type: 'Contact',
    additionalProperty: {
      originatingSystemName: 'contact:originatingSystemName',
      originatingSystemContactKey: 'contact:originatingSystemContactKey'
    },
    identifier: ['contactKey'],
    honorificPrefix: 'namePrefix',
    givenName: 'firstName',
    additionalName: ['middleName', 'nickname'],
    familyName: 'lastName',
    honorificSuffix: 'nameSuffix',
    name: 'fullName',
    jobTitle: 'jobTitle',
    worksFor: 'company',
    preferredContactMethod: 'preferredContactMethod',
    preferredPhoneType: 'preferredPhoneType',
    preferredTime: 'preferredTime',
    address: [
      {
        type: 'PostalAddress',
        additionalProperty: {
          addressKey: 'addressKey'
        },
        name: 'addressType',
        streetAddress: 'address1 address2',
        addressLocality: 'city',
        addressRegion: 'stateOrProvince',
        postalCode: 'postalCode',
        addressCountry: 'country',
        dateCreated: 'timestampEntered',
        dateModified: 'timestampModified'
      }
    ],
    contactPoint: [
      {
        type: 'ContactPoint',
        additionalProperty: {
          emailAddressKey: 'emailAddressKey'
        },
        email: 'emailAddress',
        name: 'emailType',
        usedForApm: true,
        dateCreated: 'timestampEntered',
        dateModified: 'timestampModified'
      },
      {
        type: 'ContactPoint',
        additionalProperty: {
          phoneNumberKey: 'phoneNumberKey'
        },
        name: 'phoneNumberType',
        telephone: 'phoneNumber',
        dateCreated: 'timestampEntered',
        dateModified: 'timestampModified'
      }
    ],
    comment: [{
      type: 'Comment',
      additionalProperty: {
        noteKey: 'noteKey'
      },
      author: 'addedByMember',
      text: 'note',
      dateCreated: 'timestampEntered'
    }]
  },
  dateCreated: 'timestampEntered',
  dateModified: 'timestampModified',
  acceptedByMember: true,
  recipient: ['https://originatingSystemOwnerKey.rl.hsfaffiliates.com/profile/card#me'],
  instrument: [{
    leadSource: 'leadSource',
    subLeadSource: 'subLeadSource',
    originalReferrerUrl: 'originalReferrerUrl',
    isLead: true,
    dateCreated: 'timestampEntered'
  }],
  includes: [{
    listingKey: 'listingKey',
    listingId: 'listingId',
    listAor: 'listAor',
    mlsStatus: 'mlsStatus',
    listingContractDate: 'listingContractDate',
    daysOnMarket: 1,
    listPrice: 169900,
    streetNumber: 'streetNumber',
    streetNumberNumeric: 1,
    streetDirPrefix: 'streetDirPrefix',
    streetName: 'streetName',
    streetSuffix: 'streetSuffix',
    unitNumber: 'unitNumber',
    city: 'city',
    stateOrProvince: 'stateOrProvince',
    postalCode: 'postalCode',
    country: 'country',
    countyOrParish: 'countyOrParish',
    subdivisionName: 'subdivisionName',
    directions: 'directions',
    listAgentFirstName: 'listAgentFirstName',
    listAgentLastName: 'listAgentLastName',
    listAgentFullName: 'listAgentFullName',
    listAgentEmail: 'listAgentEmail',
    listAgentMlsId: 'listAgentMlsId',
    listOfficeMlsId: 'listOfficeMlsId',
    listingTypeName: 'listingTypeName',
    propertyType: 'propertyType',
    propertySubType: 'propertySubType',
    lotSizeArea: 0.01,
    lotSizeDimensions: 'lotSizeDimensions',
    poolFeatures: 'poolFeatures',
    bathroomsTotal: '3',
    bedroomsTotal: '3',
    garageSpaces: 0,
    stories: 2,
    yearBuilt: 2002,
    heating: 'heating',
    cooling: 'cooling',
    interiorFeatures: 'interiorFeatures',
    exteriorFeatures: 'exteriorFeatures',
    roof: 'roof',
    contactNote: 'contactNote',
    listBrokerName: 'listBrokerName',
    listBrokerPhone: 'listBrokerPhone',
    propertyUrl: 'propertyUrl',
    timestampEntered: '2017-05-21T14:03:57.8796905-05:00',
    timestampModified: '2017-05-21T14:03:57.8796905-05:00'
  }]
}
