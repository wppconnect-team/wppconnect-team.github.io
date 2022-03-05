// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const fs = require("fs");

const typeDocOptions = {
  excludeExternals: true,
  excludePrivate: true,
  excludeProtected: true,
  excludeInternal: true,
  gitRevision: "main",
  plugin: ["typedoc-plugin-mdn-links"],
  // validation: {
  //   invalidLink: true,
  // },
};

/** @type {import('@docusaurus/types').PluginConfig[]} */
const allTypeDocPlugins = [
  [
    "docusaurus-plugin-typedoc",

    // Plugin / TypeDoc options
    /** @type {Partial<import('docusaurus-plugin-typedoc/dist/types').PluginOptions>} */
    ({
      ...typeDocOptions,
      id: "api-wa-version",
      out: "api/wa-version",
      name: "@wppconnect/wa-version",
      entryPoints: ["./packages/wa-version/src"],
      tsconfig: "./packages/wa-version/tsconfig.json",
      readme: "../packages/wa-version/README.md",
      sidebar: {
        categoryLabel: "@wppconnect/wa-version",
        position: null,
      },
    }),
  ],
];

const typeDocPlugins = allTypeDocPlugins.filter((p) =>
  fs.existsSync(p[1].tsconfig)
);

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
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
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
    ...typeDocPlugins,
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "support_us", // Increment on change
        content:
          '⭐️ If you like WPPConnect, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/wppconnect-team/wppconnect">GitHub</a>',
      },
      navbar: {
        title: "WPPConnect",
        logo: {
          alt: "WPPconnect Logo",
          src: "img/logo192.png",
        },
        items: [
          {
            type: "doc",
            docId: "tutorial/intro",
            position: "left",
            label: "Tutorial",
          },
          {
            type: "doc",
            docId: "api/index",
            position: "left",
            label: "API",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/wppconnect-team",
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
                to: "/docs/intro",
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
