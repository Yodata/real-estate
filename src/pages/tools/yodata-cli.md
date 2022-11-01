---
title: Yodata CLI
---

# yodata cli


* [Usage](#usage)
* [Commands](#commands)

## Usage

```sh-session
$ npm install -g @yodata/cli
$ yodata COMMAND
running command...
$ yodata (-v|--version|version)
@yodata/cli/4.0.4 darwin-x64 node-v16.15.1
$ yodata --help [COMMAND]
USAGE
  $ yodata COMMAND
...
```

# Commands

* [`yodata autocomplete [SHELL]`](#yodata-autocomplete-shell)
* [`yodata check TARGET`](#yodata-check-target)
* [`yodata check-parent TARGET`](#yodata-check-parent-target)
* [`yodata delete TARGET`](#yodata-delete-target)
* [`yodata get TARGET [KEY]`](#yodata-get-target-key)
* [`yodata help [COMMAND]`](#yodata-help-command)
* [`yodata list [SEARCH]`](#yodata-list-search)
* [`yodata plugins`](#yodata-plugins)
* [`yodata plugins:inspect PLUGIN...`](#yodata-pluginsinspect-plugin)
* [`yodata plugins:install PLUGIN...`](#yodata-pluginsinstall-plugin)
* [`yodata plugins:link PLUGIN`](#yodata-pluginslink-plugin)
* [`yodata plugins:uninstall PLUGIN...`](#yodata-pluginsuninstall-plugin)
* [`yodata plugins:update`](#yodata-pluginsupdate)
* [`yodata register`](#yodata-register)
* [`yodata remove NAME`](#yodata-remove-name)
* [`yodata repost SOURCE DEST`](#yodata-repost-source-dest)
* [`yodata set TARGET KEY [VALUE]`](#yodata-set-target-key-value)
* [`yodata touch TARGET`](#yodata-touch-target)
* [`yodata use PROFILE`](#yodata-use-profile)
* [`yodata whoami`](#yodata-whoami)

## `yodata autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ yodata autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ yodata autocomplete
  $ yodata autocomplete bash
  $ yodata autocomplete zsh
  $ yodata autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.3.0/src/commands/autocomplete/index.ts)_

## `yodata check TARGET`

Checks validity of a profile resource

```
USAGE
  $ yodata check TARGET

OPTIONS
  -o, --output=yaml|json|table|text  [default: yaml] format output
  --profile=profile                  [default: solid-dev-bhhs] command context
```

## `yodata check-parent TARGET`

Checks that target.parentOrganization contains target and optionally fixes it.

```
USAGE
  $ yodata check-parent TARGET

OPTIONS
  -o, --output=yaml|json|table|text  [default: yaml] format output

  --domain=domain                    [default: .bhhs.hsfaffiliates.com/profile/card#me] use the domain to construct the
                                     profile id

  --fix                              fix add child to parent if missing

  --profile=profile                  [default: solid-dev-bhhs] command context
```

## `yodata delete TARGET`

HTTP DELETE pod resource

```
USAGE
  $ yodata delete TARGET

OPTIONS
  -o, --output=yaml|json|table|text  [default: yaml] format output
  -v, --verbose                      show verbose output i.e HTTP DELETE https://id.example.com/resource 204
  --profile=profile                  [default: solid-dev-bhhs] command context
```

## `yodata get TARGET [KEY]`

HTTP GET pod resource

```
USAGE
  $ yodata get TARGET [KEY]

OPTIONS
  -o, --output=yaml|json|table|text  [default: yaml] format output
  --each=each                        if response is an array, return this key for each value
  --path=path                        overwrides the default path to target
  --profile=profile                  [default: solid-dev-bhhs] command context
```

## `yodata help [COMMAND]`

display help for yodata

```
USAGE
  $ yodata help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.3.1/src/commands/help.ts)_

## `yodata list [SEARCH]`

List registered profiles.

```
USAGE
  $ yodata list [SEARCH]

ARGUMENTS
  SEARCH  only list pods that match search.

OPTIONS
  -o, --output=yaml|json|table|text  [default: yaml] format output
  --profile=profile                  [default: solid-dev-bhhs] command context

ALIASES
  $ yodata ls
```

## `yodata plugins`

list installed plugins

```
USAGE
  $ yodata plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ yodata plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.11/src/commands/plugins/index.ts)_

## `yodata plugins:inspect PLUGIN...`

displays installation properties of a plugin

```
USAGE
  $ yodata plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] plugin to inspect

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

EXAMPLE
  $ yodata plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.11/src/commands/plugins/inspect.ts)_

## `yodata plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ yodata plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ yodata plugins:add

EXAMPLES
  $ yodata plugins:install myplugin
  $ yodata plugins:install https://github.com/someuser/someplugin
  $ yodata plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.11/src/commands/plugins/install.ts)_

## `yodata plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ yodata plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
   command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ yodata plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.11/src/commands/plugins/link.ts)_

## `yodata plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ yodata plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ yodata plugins:unlink
  $ yodata plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.11/src/commands/plugins/uninstall.ts)_

## `yodata plugins:update`

update installed plugins

```
USAGE
  $ yodata plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.11/src/commands/plugins/update.ts)_

## `yodata register`

Add a new profile.

```
USAGE
  $ yodata register
```

## `yodata remove NAME`

Remove a profile

```
USAGE
  $ yodata remove NAME

ARGUMENTS
  NAME  profile to be removed
```

## `yodata repost SOURCE DEST`

Gets source and POST to dest, optionally delete the source after

```
USAGE
  $ yodata repost SOURCE DEST

OPTIONS
  -o, --output=yaml|json|table|text  [default: yaml] format output
  --profile=profile                  [default: solid-dev-bhhs] command context
```

## `yodata set TARGET KEY [VALUE]`

Update a key value in an online JSON document

```
USAGE
  $ yodata set TARGET KEY [VALUE]

OPTIONS
  -C, --cleararray                   remove all values from an array
  -f, --force                        force create resource if it does not already exist.
  -o, --output=yaml|json|table|text  [default: yaml] format output
  --path=path                        overwrides the default path to target
  --profile=profile                  [default: solid-dev-bhhs] command context
```

## `yodata touch TARGET`

HTTP GET/PUT a resource.

```
USAGE
  $ yodata touch TARGET

OPTIONS
  -o, --output=yaml|json|table|text  [default: yaml] format output
  --path=path                        overwrides the default path to target
  --profile=profile                  [default: solid-dev-bhhs] command context
```

## `yodata use PROFILE`

Switch the active pod.

```
USAGE
  $ yodata use PROFILE

ARGUMENTS
  PROFILE  registered pod name

OPTIONS
  -o, --output=yaml|json|table|text  [default: yaml] format output
  --profile=profile                  [default: solid-dev-bhhs] command context
```

## `yodata whoami`

Get the current profile name

```
USAGE
  $ yodata whoami

OPTIONS
  -o, --output=yaml|json|table|text  [default: yaml] format output
  --profile=profile                  [default: solid-dev-bhhs] command context

ALIASES
  $ yodata who
```
