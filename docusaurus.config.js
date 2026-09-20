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

  // GitHub pages deployment config (if deploying to gh-pages subpath)
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
          routeBasePath: '/', // Serve the docs at the site's root
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
          {
            href: 'https://github.com/blxckpxnther46/Kalvium-X-Vels-Student-Clubs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Handbook',
            items: [
              {
                label: 'Welcome & Overview',
                to: '/',
              },
              {
                label: 'Club Ecosystem',
                to: '/club-ecosystem/',
              },
              {
                label: 'Operations Framework',
                to: '/operations/',
              },
            ],
          },
          {
            title: 'Active Clubs',
            items: [
              {
                label: '2D & 3D Club',
                to: '/club-ecosystem/2d-3d-club',
              },
              {
                label: 'Social Media Club',
                to: '/club-ecosystem/social-media-club',
              },
              {
                label: 'Abstract Strategies Club',
                to: '/club-ecosystem/abstract-strategies-club',
              },
              {
                label: 'Debate & Public Speaking Club',
                to: '/club-ecosystem/debate-public-speaking-club',
              },
            ],
          },
          {
            title: 'Governance & Life',
            items: [
              {
                label: 'Leadership Structure',
                to: '/club-leadership/',
              },
              {
                label: 'Membership Rules',
                to: '/membership/',
              },
              {
                label: 'Guidelines & Conduct',
                to: '/guidelines/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kalvium × Vels Student Clubs Ecosystem. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;
