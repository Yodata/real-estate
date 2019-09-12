# fetch-json-value example

demonstrates the use of `$fetchjsonvalue` plugin for `@yodata/transform`.

## example

```yaml
# file: fetch-json-value.cdef.yaml
# will look for the key parentOrganization and lookup the first item in the array.
'@view': |
  {
    "type": type,
    "source": "$fetchjsonvalue(" & parentOrganization[0] & ",name,myDefaultValue)"
  }
```

```json
// example/input.json
{
  "type": "RealEstateOffice",
  "id": "https://ca322-001.bhhs.dev.yodata.io/profile/card#me",
  "parentOrganization": [
  	"https://ca322.bhhs.dev.yodata.io/profile/card#me"
  ]
}
```

```json
// example/output.json
{
  "type": "RealEstateOrganization",
  "source": "California Properties"
}
```

## api

In a transformation manifest (cdef.yaml) file a value of `$fetchjsonvalue(url,key,defaultValue)`, the plugin will http get `url`, and if a json reponse is returned, the value will be replaced with the value at `key`.  In there is no value at key or an error occurs, `defaultValue` will be returned.

## Testing

```javascript
$ npm test

or

$ npx jest --env node
```

## Deploy

```sh
$ npx deploy
```

This command will http.put your context to the default location (stage)

### deploy options

### --production

```sh
npx deploy
# deploys to https://dave.dev.yodata.io/public/context/dev/fetch-ctx-test.cdef.yaml

npx deploy --production
# deploys to https://dave.dev.yodata.io/public/context/fetch-ctx-test.cdef.yaml

```

## Transform

```sh
npx transform <datapath> [filepath]
# @param {string} datapath - path to the file to be transformed
# @param {string} [filepath] - path to the context file (fetch-ctx-test.cdef.yaml)
# @default filepath = fetch-ctx-test.cdef.yaml
```

This command will

1. Fetch and parse the context from filepath
2. Fetch and parse the JSON or YAML data from datapath
3. Transform data with the context provided
4. Print the result and/or any errors to console

