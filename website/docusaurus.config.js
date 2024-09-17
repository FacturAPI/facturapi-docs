const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Facturapi. Documentación.",
    tagline: "Rest API de Facturación Electrónica",
    url: "https://docs.facturapi.io",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "facturapi", // Usually your GitHub org/user name.
    projectName: "facturapi-docs", // Usually your repo name.
    trailingSlash: true,

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            editUrl:
              "https://github.com/facturapi/facturapi-docs/edit/main/website/",
          },
          blog: false,
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
      [
        "redocusaurus",
        {
          specs: [
            {
              id: "api-es",
              route: "/api-es",
              spec: 'openapi_v2.yaml',
            },
            {
              id: "api-en",
              route: "/api-en",
              spec: 'openapi_v2.en.yaml',
            },
          ],
          theme: {
            primaryColor: "#4786FF",
            options: {
              disableSearch: true,
              requiredPropsFirst: true,
              noAutoAuth: true
            },
          },
        },
      ],
    ],

    i18n: {
      defaultLocale: "es",
      locales: ["es", "en"],
      localeConfigs: {
        es: {
          label: "Español",
          htmlLang: "es-MX"
        },
        en: {
          label: "English",
          htmlLang: "en-US"
        },
      },
    },

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "Facturapi",
          logo: {
            alt: "Facturapi",
            src: "https://www.facturapi.io/img/logo.svg",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              label: "Tutoriales",
            },
            {
              href: '/api', 
              label: 'Referencia API'
            },
            {
              href: "https://dashboard.facturapi.io",
              label: "Dashboard",
            },
            {
              type: "localeDropdown",
              position: "right",
              queryString: '?persistLocale=true',
            },
            {
              href: "https://github.com/facturapi",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Tutorial",
                  to: "/docs/quickstart",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Stack Overflow",
                  href: "https://stackoverflow.com/questions/tagged/facturapi",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/facturapi",
                },
                {
                  label: "Facebook",
                  href: "https://facebook.com/facturapi",
                },
                {
                  label: "Instagram",
                  href: "https://instagram.com/facturapi",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "GitHub",
                  href: "https://github.com/facturapi",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Facturación Espacial, SAPI de CV`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ["powershell", "php", "csharp"],
        },
      }),
  }
);
