// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { github as lightCodeTheme, darcula as darkCodeTheme } from "prism-react-renderer"

/** @type {import('@generated/docusaurus.config').config} */
export default {
  title: 'ICSSC Fellowship',
  tagline: 'A crash course on web development. 💻',
  url: 'https://fellowship.icssc.club',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'icssc',
  projectName: 'fellowship',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "course",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/icssc/fellowship/tree/main/',
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
        links: [
          { label: "Discord", href: "https://discord.gg/GzF76D7UhY" },
          { label: "GitHub", href: 'https://github.com/icssc' }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ICS Student Council | Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark'
      }
    }),
};
