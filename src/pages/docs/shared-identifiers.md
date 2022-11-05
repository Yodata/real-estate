---
title: Identifiers
---

## Identifier

## sameAs

  Additional identifiers for the object, in the form of namespaced key value pairs.
  Unlike the identifier, vendors are not required to store or share their sameAs identifiers
  in this way, but it can be useful for interoperability between vendors.  For example, should
  a consumer request to have their data deleted, we can notifier the vendor that have shared
  their sameAs identifiers with us, so that they can delete the data from their systems as well.

  The sameAs property is a map of key value pairs, where the key concatenates the vendor and
  the key name for the identifier.  For example, if a vendor has a consumer identifier called:
  amcecrmid, and the value is 1234567, the sameAs property would be: { amcecrmid: 1234567 }

  DO NOT:
  1. use the sameAs property to store identifiers that are already stored in the identifier
  2. put well known identifiers in the sameAs property, such as email, telephone, etc, unless the keys are values are encrypted.