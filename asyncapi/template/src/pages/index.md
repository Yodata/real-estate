{% set info = asyncapi.info().json() %}
---
{% if info.title %}
title: {{ info.title }}
{% endif %}
---

# {{asyncapi.info().title()}}
{% if info.version %}
**Version: {{ info.version }} **
{% endif %}

{% if info.description %}
{{info.description}}
{% endif %}
{% include "partials/contact.njk" ignore missing %}
{% include 'partials/license.njk' ignore missing %}
{%- if info.termsOfService %}
## Terms of service

{{info.termsOfService}}
{% endif %}
