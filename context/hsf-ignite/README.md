# hsf-ignite

hsf-ignite event contexts

## Events

ADDRESS_SEARCH
APPLICATION_LAUNCH
FIRST_APP_LOGIN
FIRST_BRAND_LOGIN
GPS_ADVANCED_SEARCH
GPS_BASIC_SEARCH
LISTING_NUMBER_SEARCH
MAP_SEARCH
NOTIFICATION_EMAIL_SENT
NOTIFICATION_SUBSCRIBE
PROPERTY
PROPERTY_BASIC_VIEW
SAVE_PROPERTY
SAVE_SEARCH
SHARE_PROPERTY
SS0_LOGOUT
SSO_FORGOT_PWD
SSO_LOGIN
SSO_PRO_LOGIN
SSO_RESET_PWD
SSO_TGT_VALIDATION
SUBSCRIPTION_SAVE
USER_BRAND_HISTORY
USER_LOGIN

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

Edit your context [hsf-ignite](hsf-ignite.cdef.yaml)

```yaml
## file: hsf-ignite.cdef.yaml

$schema: 'https://realestate.yodata.me/context/v1/schema.yaml'
$id: 'https://ignite.bhhs.hsfaffiliates.com/public/context/hsf-ignite.yaml'
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
# deploys to https://ignite.bhhs.hsfaffiliates.com/public/context/dev/hsf-ignite.cdef.yaml

npx deploy --production
# deploys to https://ignite.bhhs.hsfaffiliates.com/public/context/hsf-ignite.cdef.yaml

```

## Transform

```sh
npx transform <datapath> [filepath]
# @param {string} datapath - path to the file to be transformed
# @param {string} [filepath] - path to the context file (hsf-ignite.cdef.yaml)
# @default filepath = hsf-ignite.cdef.yaml
```

This command will

1. Fetch and parse the context from filepath
2. Fetch and parse the JSON or YAML data from datapath
3. Transform data with the context provided
4. Print the result and/or any errors to console

