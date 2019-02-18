export const imports = {
  'contact.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "contact" */ 'contact.mdx'),
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'events.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "events" */ 'events.mdx'),
  'lead.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "lead" */ 'lead.mdx'),
  'listing.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "listing" */ 'listing.mdx'),
  'profile.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "profile" */ 'profile.mdx'),
  'schemas.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "schemas" */ 'schemas.mdx'),
}
