# Smarter-Agent (Ignite) Event Contexts

smarter agent raw data events for project ignite

## Work Status

[x] Source examples for all `log_payload_activity` values contained in the sample dataset (~70k events) are in the [examples](https://github.com/Yodata/real-estate/tree/master/context/smarter-agent/examples) directory
[ x ] Example values for all properties represented in the sample dataset ~100 properties in examples/[ALL_PROPS.json](https://github.com/Yodata/real-estate/blob/master/context/smarter-agent/examples/APPLICATION_LAUNCH.in.json)
[ ] All properties with a clear map to a schema.org property mapped.

## Issues

1. 

---

## Development

Setup your prototype [input](example/input.json) and [output](example/output.json) data in the examples directory.

```javascript
// file: example/input.json
{
  "mytype": "Thing"
}
```

```javascript
// file: example/output.json
{
  "type": "Thing"
}
```

Edit your context [smarter-agent-ignite](smarter-agent-ignite.cdef.yaml)

```yaml
## file: smarter-agent-ignite.cdef.yaml

$schema: 'https://realestate.yodata.me/context/v1/schema.yaml'
$id: 'https://sa.bhhs.hsfaffiliates.com/public/context/smarter-agent-ignite.yaml'
```

## Testing

```javascript
> npx jest
```

## Deploy

```sh
> npx deploy
```

This command will http.put your context to the default location (stage)

### deploy options

### --production

```sh
npx deploy
# deploys to https://sa.bhhs.hsfaffiliates.com/public/context/dev/smarter-agent-ignite.cdef.yaml

npx deploy --production
# deploys to https://sa.bhhs.hsfaffiliates.com/public/context/smarter-agent-ignite.cdef.yaml

```

## Transform

```sh
npx transform <datapath> [filepath]
# @param {string} datapath - path to the file to be transformed
# @param {string} [filepath] - path to the context file (smarter-agent-ignite.cdef.yaml)
# @default filepath = smarter-agent-ignite.cdef.yaml
```

This command will

1. Fetch and parse the context from filepath
2. Fetch and parse the JSON or YAML data from datapath
3. Transform data with the context provided
4. Print the result and/or any errors to console

