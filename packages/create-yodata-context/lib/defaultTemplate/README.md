# {{sourceContext}}

{{sourceDescription}}

## development

{{sourceContext}}.yaml defines a transformation from a JSON input to a JSON output

```javascript
// file: {{sourceContext}}.yaml

$schema: 'https://realestate.yodata.me/ns/v1/schema.yaml'
$id: '{{podURL}}/public/context/v1/{{sourceContext}}.yaml'
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