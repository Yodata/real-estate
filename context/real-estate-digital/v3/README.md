# RED Context Notes

```text
.
├── input.v3.js                   - (complete?) example red event
├── output.v3.js                  - transformation result
├── red-cdef-v3.yaml              - transformation definition
├── red-context-v3.js             - provides some additional transformation sugar
└── red-v3.test.js                - test!

```
## context 

```yaml
# red-cdef-v3.yaml

'@default':
  object.type: Contact

contactEvent:
  id: type
  value: ($lookup(primaryEvent))
  '@context':
    Accepted: AcceptAction
    ExternalCreate: AddAction
    ExternalUpdate: UpdateAction
    Created: AddAction
    Assigned: AssignAction
    Associated: AssignAction
    AutoAccepted: AssignAction
    AutoAssigned: AssignAction
    AssignedToSelf: AssignAction
    Deleted: RemoveAction
    Registered: RegisterAction
    Declined: RejectAction
    LeadActivity: UpdateAction
    DuplicateCreated: UpdateAction
    AdminUpdate: UpdateAction
    CRMSync: UpdateAction
    NoteAdded: UpdateAction
    Updated: UpdateAction
    Retracted: UnAssignAction
    Unassigned: UnAssignAction

addresses:
  id: object.address
  type: PostalAddress
  '@context':
    addressKey: additionalProperty.addressKey
    addressType: name
    address1:
      id: streetAddress
      value: ($join([address1,address2],' ').$trim())
    address2: null
    city: addressLocality
    stateOrProvince: addressRegion
    postalCode: postalCode
    country: addressCountry

assignments:
  id: recipient
  value: ($join(['https://',originatingSystemOwnerKey,'.rl.hsfaffiliates.com/profile/card#me']))

contactKey: object.identifier
originatingSystemContactKey: object.additionalProperty.originatingSystemContactKey
originatingSystemName: object.additionalProperty.originatingSystemName
fullName: object.name
firstName: object.givenName
lastName: object.familyName
namePrefix: object.honorificPrefix
nameSuffix: object.honorificSuffix
middleName: object.additionalName
nickname: object.additionalName
jobTitle: object.jobTitle
company: object.worksFor
emailAddresses:
  id: object.contactPoint
  type: ContactPoint
  '@context':
    emailAddressKey: additionalProperty.emailAddressKey
    emailAddress: email
    emailType: name
phoneNumbers:
  id: object.contactPoint
  type: ContactPoint
  '@context':
    phoneNumberKey: additionalProperty.phoneNumberKey
    phoneNumberType: name
    phoneNumber: telephone
preferredContactMethod: object.preferredContactMethod
preferredPhoneType: object.preferredPhoneType
preferredTime: object.preferredTime
notes:
  id: object.comment
  type: Comment
  '@context':
    noteKey: additionalProperty.noteKey
    note: text
    addedByMember: author
leadSources: instrument
properties:
  id: includes
  type: RealEstateListing
timestampEntered: dateCreated
timestampModified: dateModified

```

## Input

```javascript
{
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

```

## output

```js
{
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

```


## test

` $ jest red-v3 `

