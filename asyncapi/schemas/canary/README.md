# Canary Events Topic

A place to share and develop new events together.

Models in the documentation site follow the [asyncapi 1.2 specification](https://www.asyncapi.com/docs/specifications/1.2.0/)

## Create a new event

Create a new file in the canary directory

```yaml
# x-title and x-scope are REQUIRED custom properties used by the documentation generator
x-title: example
x-scope: realestate/canary#
summary: an example canary event
payload:
  allOf:
    # adds the message wrapper (topic, data, etc..)
    - $ref: ../base.event.yaml

    # adds a topic to the base event
    - properties:
        topic:
          type: string
          description: an example event
          enum:
            - realestate/canary#example

    # add event payload (Action)
    - properties:
        data:
          allOf:
            # import a base action model
            - $ref: ../Action.yaml

            # customize your action
            - description: an example action
              properties:
                type:
                  enum:
                  - ExampleAction
```

Next, add your event to the topic.yaml file.

```yaml
# schemas/canary/topic.yaml
x-summary: Events under development can be shared here for feedback and testing
subscribe:
  oneOf:
    - $ref: example.event.yaml
    - $ref: rickroll.yaml
    ## add your event here
```

Submit a PR to have your event published to the website.