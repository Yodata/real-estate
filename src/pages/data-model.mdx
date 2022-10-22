---
title: Data Model
---

# Data Model

The data model is derived from https://schema.org/, whch is  derived from [RDF Schema](https://en.wikipedia.org/wiki/RDF_Schema) (which in turn was derived from [CycL](https://en.wikipedia.org/wiki/CycL), which in turn ...).

## Types

We have a set of types ([rdfs:Class](https://en.wikipedia.org/wiki/RDF_Schema#Classes)) arranged in a multiple inheritance hierarcy where each type may be a sub-class of multiple types.

## Properties

Each property may have one or more types as its ranges. The value(s) of the property should be instances of at least one of these types. Unless explicitly declared, properties are semantically equavalent to their schema.org namesakes.

## Serialization

RDF data has many available serializations.  Our focus here will be restricted to the most common serializations accessed via the API.  JSON-LD, and turtle.

##  JSON-LD

**JSON**-**LD** (JavaScript Object Notation for Linked Data), is a method of encoding Linked Data using **JSON**. It was a goal to require as little effort as possible from developers to transform their existing **JSON** to **JSON**-**LD**. This allows data to be serialized in a way that is similar to traditional **JSON**.

## JSON-LD Context

You may have noticed the JSON values in our example don't look exactly like JSON-LD.  Here's why.

1. No @context.  Since all the data in REflex should be using the same JSON-LD @context, we use the HTTP response header to set the context for all messages automatically.
2. No @type or @id.  JSON-LD allows for aliasing @type and @id, so you can use @type and 'type' and @id and 'id' interchangably.

**standard JSON-LD example**

```json
{
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": "http://dbpedia.org/resource/John_Lennon",
  "name": "John Lennon",
  "born": "1940-10-09",
  "spouse": "http://dbpedia.org/resource/Cynthia_Lennon"
}
```

**example with default context applied**

```json
{
    "type": "Person",
	"id": "http://dbpedia.org/resource/John_Lennon",
	"name": "John Lennon",
	"born": "1940-10-09",
	"spouse": "http://dbpedia.org/resource/Cynthia_Lennon"
}
```

## Data Conventions

### Null and Blank values

Null, Nil and Empty Strings

If no data is available for a property, the property should be left out.  For example:

```js

let givenName = 'bob'
let familyName = undefined
// preferred representation
{
  "givenName": "bob"
}
// not preferred
{
  "givenName": "bob",
  "familyName": ""
}

```

If a value is actually an empty string or a null, then it should be included

```js

let givenName = 'bob'
let familyName = ''
// preferred representation
{
  "givenName": "bob"
}
// not preferred
{
  "givenName": "bob",
  "familyName": ""
}

```
