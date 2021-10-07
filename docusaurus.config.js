const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Facturapi. Documentación.',
  tagline: 'Rest API de Facturación Electrónica',
  url: 'https://facturapi.github.io',
  // baseUrl: '/facturapi-docs/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facturapi', // Usually your GitHub org/user name.
  projectName: 'facturapi-docs', // Usually your repo name.
  trailingSlash: true,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facturapi/facturapi-docs/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facturapi/facturapi-docs/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            routePath: "/api",
            spec: 'openapi.yaml',
          },
        ],
        theme: {
          primaryColor: '#4786FF',
          redocOptions: {
            disableSearch: true,
            requiredPropsFirst: true,
            theme: {
              spacing: {
                unuit: 2
              }
            }
          }
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Facturapi Docs',
        logo: {
          alt: 'Facturapi',
          src: 'https://www.facturapi.io/img/icon.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          { to: '/api', label: 'API' },
          {
            href: 'https://github.com/facturapi/facturapi-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/facturapi',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/facturapi',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/facturapi',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facturapi/facturapi-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Facturación Espacial, SAPI de CV`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'php', 'csharp']
      },
    }),
});
