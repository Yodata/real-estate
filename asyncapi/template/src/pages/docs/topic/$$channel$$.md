{% from 'partials/message-view.njk' import messageView %}
{% from 'partials/message-list-table.njk' import MessageListTable %}
---
title: {{channelName}}
---
# {{channelName}}
{% if channel and channel.deprecated %} (**deprecated**) {% endif %}

{% if (channel.json() | hasValue('publish.message.oneOf')) %}
{{
  MessageListTable (
  messages = channel.json() | getValue('publish.message.oneOf'),
  title='publishing ' + channelName + ' events'
  )
}}
{% endif %}

{% if (channel.json() | hasValue('subscribe.message.oneOf')) %}
{{
  MessageListTable (
  messages = channel.json() | getValue('subscribe.message.oneOf'),
  title='receiving ' + channelName + ' events'
  )
}}
{% endif %}
