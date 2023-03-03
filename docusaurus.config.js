// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WPPConnect",
  tagline: "Automatize o seu WhatsApp",
  url: "https://wppconnect-team.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "wppconnect-team", // Usually your GitHub org/user name.
  projectName: "wppconnect", // Usually your repo name.

  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-BR"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/wppconnect-team/wppconnect-team.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/wppconnect-team/wppconnect-team.github.io/tree/main/",
        },
        gtag: {
          trackingID: "G-X2JJJ2ZZG8",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
    // [
    //   "redocusaurus",
    //   {
    //     // Plugin Options for loading OpenAPI files
    //     specs: [
    //       {
    //         spec: "https://raw.githubusercontent.com/wppconnect-team/wppconnect-server/main/src/swagger.json",
    //         route: "/swagger/wppconnect-server",
    //       },
    //     ],
    //     // Theme Options for modifying how redoc renders them
    //     theme: {
    //       // Change with your site colors
    //       primaryColor: "#2e8555",
    //     },
    //   },
    // ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "pt"],
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo192.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#fff",
          },
        ],
      },
    ],
    "docusaurus-plugin-sass",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "support_us", // Increment on change
        content:
          '⭐️ If you like WPPConnect, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/wppconnect-team/wppconnect">GitHub</a>',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
      },
      navbar: {
        title: "WPPConnect",
        logo: {
          alt: "WPPconnect Logo",
          src: "img/logo192.png",
        },
        items: [
          {
            to: "/docs/",
            position: "left",
            label: "Docs",
            activeBaseRegex: "docs/?$"
          },
          {
            to: "/docs/tutorial/intro",
            position: "left",
            label: "Tutorial",
            activeBaseRegex: "docs/?$"
          },
          {
            to: "/docs/projects",
            position: "left",
            label: "Projects",
          },
          {
            label: "API",
            position: "left",
            items: [
              {
                label: "WA-JS",
                href: "https://wppconnect.io/wa-js",
              },
              {
                label: "WPPConnect",
                href: "https://wppconnect.io/wppconnect",
              },
            ],
          },
          {
            label: "Swagger",
            position: "left",
            to: "/swagger/wppconnect-server",
          },
          {
            to: "/whatsapp-versions",
            label: "WhatsApp Versions",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "localeDropdown",
            position: "right",
            dropdownItemsAfter: [
              {
                type: "html",
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: "https://crowdin.com/project/wppconnect-site",
                label: "Help Us Translate",
              },
            ],
          },
          {
            href: "https://discord.gg/JU5JGGKGNG",
            position: "right",
            className: "header-discord-link",
            "aria-label": "Discord channel",
            title: "Discord channel",
          },
          {
            href: "https://github.com/wppconnect-team",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
            title: "GitHub repository",
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
                to: "/docs/tutorial/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Apoia.se",
                href: "https://apoia.se/wppconnect",
              },
              {
                label: "Discord",
                href: "https://discord.gg/JU5JGGKGNG",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/c/wppconnect",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/wppconnect-team",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WPPConnect Team. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ["javascript", "json"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
