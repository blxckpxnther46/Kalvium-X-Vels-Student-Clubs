// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kalvium × Vels Student Clubs',
  tagline: 'Framework & Operations Guide',
  favicon: 'img/icon.png',

  // Production URL and base path for self-hosting
  url: 'http://localhost:3000',
  baseUrl: '/',

  organizationName: 'blxckpxnther46',
  projectName: 'Kalvium-X-Vels-Student-Clubs',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve docs at site root
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['en'],
        docsRouteBasePath: '/',
        docsDir: 'docs',
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        highlightSearchTermsOnTargetPage: true,
        searchBarPosition: 'right',
        searchBarShortcut: true,
        searchBarShortcutHint: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: 'img/banner.png',
      navbar: {
        logo: {
          alt: 'Kalvium × Vels Student Clubs',
          src: 'img/logo.png',
          srcDark: 'img/logo.png',
        },
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'docSidebar',
            sidebarId: 'handbookSidebar',
            position: 'right',
            label: 'Overview',
          },
        ],
      },
      prism: {
        theme: require('prism-react-renderer').themes.dracula,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;
