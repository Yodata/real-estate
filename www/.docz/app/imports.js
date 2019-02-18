export const imports = {
  'build/events.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "build-events" */ 'build/events.mdx'),
  'build/messages.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "build-messages" */ 'build/messages.mdx'),
  'build/schemas.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "build-schemas" */ 'build/schemas.mdx'),
  'build/topics.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "build-topics" */ 'build/topics.mdx'),
  'src-content/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-content-index" */ 'src-content/index.mdx'),
  'src-content/Developers/developer-resources.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-content-developers-developer-resources" */ 'src-content/Developers/developer-resources.mdx'),
  'src-content/Start Here/data-model.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-content-start-here-data-model" */ 'src-content/Start Here/data-model.mdx'),
  'src-content/todo/api-introduction.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-content-todo-api-introduction" */ 'src-content/todo/api-introduction.mdx'),
  'src-content/todo/developer-quick-start.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-content-todo-developer-quick-start" */ 'src-content/todo/developer-quick-start.mdx'),
  'src-content/todo/authorization.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-content-todo-authorization" */ 'src-content/todo/authorization.mdx'),
  'src-content/todo/rest-api.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-content-todo-rest-api" */ 'src-content/todo/rest-api.mdx'),
}
