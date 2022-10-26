---
title: Technology Background
---

# Background

REflex is a user-centric pub/sub system that uses [Linked Data Notifications (LDN)](https://www.w3.org/TR/ldn/)
to enable sharing and reuse of notifications across applications, regardless of how they were generated.

Instead of treating notifications as ephemeral or non-persistent entities, this specification enables the notion of a
notification as an individual entity with its own URI. As such, notifications can be retrieved and reused.

The API is very simple, the only interactions are publish a message (HTTP POST) and get messages either pushed to your
application or with HTTP GET.
