module.exports = {
  contactEvent: { primaryEvent: 'Updated' },
  contactKey: 'contactKey',
  originatingSystemContactKey: 'contact:originatingSystemContactKey',
  originatingSystemName: 'contact:originatingSystemName',
  namePrefix: 'namePrefix',
  firstName: 'firstName',
  middleName: 'middleName',
  lastName: 'lastName',
  nameSuffix: 'nameSuffix',
  fullName: 'fullName',
  nickname: 'nickname',
  jobTitle: 'jobTitle',
  company: 'company',
  preferredContactMethod: 'preferredContactMethod',
  preferredPhoneType: 'preferredPhoneType',
  preferredTime: 'preferredTime',
  timestampEntered: 'timestampEntered',
  timestampModified: 'timestampModified',
  addresses:
		[{
		  addressKey: 'addressKey',
		  addressType: 'addressType',
		  address1: 'address1',
		  address2: 'address2',
		  city: 'city',
		  stateOrProvince: 'stateOrProvince',
		  postalCode: 'postalCode',
		  country: 'country',
		  timestampEntered: 'timestampEntered',
		  timestampModified: 'timestampModified'
		}],
  emailAddresses:
		[{
		  emailAddressKey: 'emailAddressKey',
		  emailAddress: 'emailAddress',
		  emailType: 'emailType',
		  usedForApm: true,
		  timestampEntered: 'timestampEntered',
		  timestampModified: 'timestampModified'
		}],
  phoneNumbers:
		[{
		  phoneNumberKey: 'phoneNumberKey',
		  phoneNumberType: 'phoneNumberType',
		  phoneNumber: 'phoneNumber',
		  timestampEntered: 'timestampEntered',
		  timestampModified: 'timestampModified'
		}],
  acceptedByMember: true,
  assignments:
		[
		  {
		    ownerType: 'Member',
		    ownerKey: 'ownerKey',
		    autoAccept: true,
		    assignmentType: 'Lead',
		    timestampEntered: 'timestampEntered',
		    originatingSystemOwnerKey: 'originatingSystemOwnerKey',
		    originatingSystemOwnerName: 'originatingSystemOwnerName'
		  }
		],
  notes:
		[{
		  noteKey: 'noteKey',
		  addedByMember: 'addedByMember',
		  note: 'note',
		  timestampEntered: 'timestampEntered'
		}],
  leadSources:
		[{
		  leadSource: 'leadSource',
		  subLeadSource: 'subLeadSource',
		  originalReferrerUrl: 'originalReferrerUrl',
		  isLead: true,
		  timestampEntered: 'timestampEntered'
		}],
  properties:
		[{
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
		  timestampEntered: 'timestampEntered',
		  timestampModified: 'timestampEntered'
		}]
}
