// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ICSSC Fellowship',
  tagline: '🚧 This site is currently under construction 🚧',
  url: 'https://fellowship.icssc.club',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'icssc-projects',
  projectName: 'fellowship',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "course",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/icssc-projects/fellowship/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ICSSC Fellowship',
        logo: {
          alt: 'ICSSC Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'syllabus',
            position: 'left',
            label: 'Course',
          },
          {
            href: 'https://discord.gg/GzF76D7UhY',
            position: 'right',
            label: 'Discord'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
            {label: "Discord", href:"https://discord.gg/GzF76D7UhY"},
            {label: "GitHub", href: 'https://github.com/icssc-projects'}
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ICS Student Council | Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
