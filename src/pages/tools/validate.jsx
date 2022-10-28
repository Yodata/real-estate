import { React, useState } from 'react';
import { Button } from '@/components/Button';
import { CodeEditor } from '@/components/CodeEditor';
import axios from 'axios';

const defaultObject = {
  "type": "Contact",
  "affiliation": [
    "https://example.com/profile/card#me"
  ],
  "address": [
    {
      "type": "PostalAddress",
      "name": "Home",
      "streetAddress": "1007 Mountain Gate Rd",
      "postOfficeBoxNumber": "Box 1234",
      "addressRegion": "New Jersey",
      "addressLocality": "Gotham City",
      "postalCode": "10010",
      "addressCountry": "USA",
      "addressCounty": "Gotham County",
      "addressSubdivision": "Gotham Heights"
    }
  ],
  "birthDate": "2022-10-12",
  "contactPoint": [
    {
      "type": "ContactPoint",
      "name": "Work",
      "telephone": "800-555-5555",
      "faxNumber": "888-4BA-TMAN",
      "email": "bruce@example.com",
      "url": "https://example.com"
    }
  ],
  "email": "user@example.com",
  "additionalName": "ambassador satch,pops,satchmo",
  "familyName": "Wayne",
  "faxNumber": "(873) 271-4802",
  "givenName": "Glenn",
  "honorificPrefix": "Dr",
  "honorifixSuffix": "Esq",
  "jobTitle": "Superhero",
  "knowsLanguage": [
    {
      "type": "Language",
      "name": "English",
      "additionalName": "en-us"
    }
  ],
  "name": "Bruce Wayne",
  "telephone": "1-339-041-0306 x2866",
  "worksFor": "Gotham City Police Department",
  "identifier": {
    "redContact_Guid": "55BC6EB4-5C3D-4603-B5AB-154117E1269F"
  },
  "additionalProperty": {
    "supercrmuserid": 1234,
    "doNotSell": true
  },
  "comment": [
    {
      "type": "Comment",
      "text": "this is my comment.",
      "author": {
        "type": "Contact",
        "name": "Bruce Wayne"
      },
      "about": {
        "type": "PropertyListing",
        "id": "https://example.com/listingid"
      },
      "dateCreated": "2019-07-15T05:24:05Z",
      "dateModified": "2019-07-15T05:24:05Z"
    }
  ],
  "contactGroup": [
    {
      "type": "Collection",
      "name": "Superheros",
      "identifier": {
        "vendoraid": "xxx"
      }
    }
  ],
  "keywords": [
    "Sphere of Influence",
    "Past Customer"
  ],
  "leadOwner": {
    "type": "RealEstateOrganization",
    "name": "Gotham City Real Estate",
    "id": "https://example.com/profile.card#me"
  },
  "leadSource": {
    "id": "https://www.zillow.com/homedetails/1044-Siler-Pl-Berkeley-CA-94705/24820985_zpid/",
    "type": "RealEstateWebsite",
    "name": "Zillow",
    "url": "https://zillow.com"
  },
  "originatingSystem": {
    "type": "SoftwareApplication",
    "name": "RDesk",
    "description": "User Created.",
    "url": "http://www.rdeskwebsite.com/"
  },
  "dateCreated": "2022-10-12T01:13:43Z",
  "dateModified": "2022-10-12T01:13:43Z"
}

export default function ValidateSchemaObject(props) {
  const [ schemaObject, setSchemaObject ] = useState(defaultObject);
  const schemaType = schemaObject?.topic || schemaObject?.type || undefined
  const schemaId = (typeof schemaType === 'string')
    ? `https://realestate.yodata.me/schema/${schemaType}`.toLowerCase()
    : 'Unrecognized'


  const onSubmit = () => {
    axios.post('/api/validate', json).then((res) => {
      setApiResponse(`${res?.data?.actionStatus}: ${res?.data?.result}`)
    })
  }

  return (
    <div>
      <h2>Schema Validation</h2>
      <div className='mb-5'>validate any event message (with a topic) or schema object (with a type)</div>
      <div id='schema-type'>{`schema: ${schemaId}`}</div>
      <CodeEditor content={JSON.stringify(defaultObject,null,2)} />
    </div>
  )
}
