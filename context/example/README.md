# example

an example yodata transformation context

## development

example.yaml defines a transformation from a JSON input to a JSON output

```javascript
// file: example.yaml

$schema: 'https://realestate.yodata.me/ns/v1/schema.yaml'
$id: 'https://dave.dev.yodata.io/public/context/v1/example.yaml'
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