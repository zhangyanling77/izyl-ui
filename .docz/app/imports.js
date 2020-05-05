export const imports = {
  'src/foo/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-foo-index" */ 'src/foo/index.mdx'
    ),
}
