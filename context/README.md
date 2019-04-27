# Contexts

Contexts make integration easier by automatically translating messages between systems.

Developers are invited to create and share their context here and submit a PR.

## creating a new context

```bash
> npx create-yodata-context

? project name **supercrm**
? project description **my awesome new context**
? validationSchema: https://realestate.yodata.me/context/v1/schema.yaml
? service pod URL https://supercrm.yodata.io
? pod secret (x-api-key) secret

```

Install project dependencies

```bash
> cd {contextname}

> npm install

```

Visit your context README.md for context development docs
