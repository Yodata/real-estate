# Smarter-Agent (Ignite) Event Contexts

smarter agent raw data events for project ignite

## Website Events

- [ ]

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

