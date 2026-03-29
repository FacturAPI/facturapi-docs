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
    favicon: "img/favicon.ico",
    organizationName: "facturapi", // Usually your GitHub org/user name.
    projectName: "facturapi-docs", // Usually your repo name.
    trailingSlash: true,
    future: {
      v4: true,
      experimental_faster: true
    },
    markdown: {
      hooks: {
        onBrokenMarkdownLinks: "warn",
      },
    },

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
              noAutoAuth: true,
            },
          },
        },
      ],
    ],

    plugins: [
      [
        "@docusaurus/plugin-content-docs",
        {
          id: "stripe-docs",
          path: "docs-stripe",
          routeBasePath: "stripe-app",
          sidebarPath: require.resolve("./sidebarsStripe.js"),
          editUrl: "https://github.com/facturapi/facturapi-docs/edit/main/website/"
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
            src: "img/facturapilogo.svg",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              label: "Tutoriales",
            },
            {
              type: "doc",
              docId: "intro",
              label: "Stripe app",
              docsPluginId: "stripe-docs"
            },
            {
              to: '/api',
              label: 'Referencia API',
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
              title: "Facturapi",
              items: [
                {
                  label: "Main site",
                  href: "https://www.facturapi.io",
                },
                {
                  label: "Dashboard",
                  href: "https://dashboard.facturapi.io",
                },
                {
                  label: "Contact",
                  href: "https://www.facturapi.io/contact",
                },
              ],
            },
            {
              title: "Developers",
              items: [
                {
                  label: "API reference",
                  to: "/api",
                },
                {
                  label: "Tutorials",
                  to: "/docs/intro",
                },
                {
                  label: "Stripe app",
                  to: "/stripe-app",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/facturapi",
                },
              ],
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Pricing",
                  href: "https://www.facturapi.io/pricing",
                },
                {
                  label: "Blog",
                  href: "https://www.facturapi.io/blog",
                },
                {
                  label: "Service status",
                  href: "https://status.facturapi.io",
                },
              ],
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Terms",
                  href: "https://www.facturapi.io/terms",
                },
                {
                  label: "Privacy",
                  href: "https://www.facturapi.io/privacy",
                },
              ],
            },
          ],
          copyright: `© ${new Date().getFullYear()} Facturapi. All rights reserved.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ["powershell", "php", "csharp"],
        },
      }),
  }
);
