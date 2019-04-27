# {{sourceContext}}

{{sourceDescription}}

## development

{{sourceContext}}.cdef.yaml defines a 

```javascript
// file: {{sourceContext}}.yaml

$schema: 'https://realestate.yodata.me/ns/v1/schema.yaml'
$id: '{{podURL}}/public/context/{{sourceContext}}.yaml'
$view:
  TYPE: (type)
```

## test

First, set `__testdata__/input.js` and `__testdata__/output.js` to an example 
of your source data and the expected result of transforming the input.

Test you transformation result:

```javascript
$ npx jest

```