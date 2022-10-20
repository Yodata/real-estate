{% from 'partials/schema-prop.njk' import schemaProp %}
{% from 'partials/schema-prop-deep.njk' import schemaPropDeep %}
---
title: {{schemaName}}
---

{{ schema.properties() | dump(2) | safe }}

{% if not hideTitle %}
# {{schemaName}}
{% endif %}
{{ schema.description() }}

{% if not hideProps %}

### Schema

| Name | Type | Description |
|:-----| :--- | :---------- |
{% for propName, prop in schema.properties() -%}
{{ schemaPropDeep(prop, propName, required=(prop | isRequired(propName)), path='') }}
{%- else -%}
{{ schemaPropDeep(schema, schemaName, required=(prop | isRequired(propName)), path='') }}
{%- endfor %}
{% endif %}

{% if not hideExample %}

### Example

```json
{{  schema.json() | generateExample | safe }}
```
{% endif %}
