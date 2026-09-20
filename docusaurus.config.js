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
        title: '',
        logo: {
          alt: 'Kalvium x Vels Student Clubs Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'handbookSidebar',
            position: 'left',
            label: 'Handbook',
          },
          {
            to: '/club-ecosystem/2d-3d-club',
            label: '2D & 3D Club',
            position: 'left',
          },
          {
            to: '/club-ecosystem/social-media-club',
            label: 'Social Media',
            position: 'left',
          },
          {
            to: '/club-ecosystem/abstract-strategies-club',
            label: 'Abstract Strategies',
            position: 'left',
          },
          {
            to: '/club-ecosystem/debate-public-speaking-club',
            label: 'Debate & Public Speaking',
            position: 'left',
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
