---
title: {{channelName}}
---

# {{channelName}}
{{~#if channel.deprecated}} (**deprecated**){{~/if}}

{{#if channel.parameters}}
{{~> parameters params=channel.parameters channelName=channelName ~}}
{{/if}}

{{#if channel.publish}}

### publishing {{channelName}} events
{{~#if channel.publish.oneOf}}

| Topic | Description |
| :---- | :---------- |
{{#each channel.publish.oneOf as |op index| }}
{{~> operationSummary operation=op ~}}
{{/each}}
{{else}}
{{> operation operation=channel.publish}}
{{/if}}

{{/if}}
{{#if channel.subscribe}}

### receiving {{topicName}} events
{{#if channel.subscribe.oneOf}}

| Event | Description |
| :---- | :---------- |
{{#each channel.subscribe.oneOf as |op index|}}
{{~> operationSummary operation=op ~}}
{{/each}}

{{#each channel.subscribe.oneOf}}

---
{{>message message=. messageName=@key options=../asyncapi.info.x-messages}}

[back to top](#)
{{/each}}
{{else}}{{> operation operation=channel.subscribe}}{{/if}}
{{/if}}
