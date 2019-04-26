# create-yodata-context

scaffold and manage a data context for yodata/realestate (reflex)

## usage

### create a new context

```bash
$ npx create-yodata-context

? validationSchema: https://realestate.yodata.me/ns/v1/schema.yaml
? context name: my-context
? URL of the pod to host your context https://user.example.com
? pod secret or api-key abc123

```

### context development

A main context yaml file describes a transformation that takes a JSON input and returns the transformed JSON output.

The transformation is both semantic (maps keys to JSON-LD contexts) and data shape that supports
moving, renaming, processing and removing/redacting keys from the input.

The transform is non-destructive.

Create your context by editing the .yaml file in your context root directory.

```javascript
// file: {projectroot}/{contextname}.yaml

$schema: 'https://realestate.yodata.me/ns/v1/schema.yaml'
$id: 'https://{yourpod}/public/{version}/{contextname}.yaml'
$view:
  TYPE: (type)
```