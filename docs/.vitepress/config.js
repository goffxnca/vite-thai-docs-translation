// @ts-check

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: "Vite (วีท)",
  description: "เครื่องมือยุคใหม่สำหรับพัฒนา Frontend",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  vue: {
    reactivityTransform: true,
  },
  themeConfig: {
    repo: "vitejs/vite",
    logo: "/logo.svg",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "Suggest changes to this page",

    algolia: {
      apiKey: "b573aa848fd57fb47d693b531297403c",
      indexName: "vitejs",
      searchParameters: {
        facetFilters: ["tags:en"],
      },
    },

    carbonAds: {
      carbon: "CEBIEK3N",
      placement: "vitejsdev",
    },

    nav: [
      { text: "คู่มือ", link: "/guide/" },
      { text: "ปรับแต่ง", link: "/config/" },
      { text: "ปลั๊กอิน", link: "/plugins/" },
      {
        text: "ลิ้งค์อื่นๆ",
        items: [
          {
            text: "ทวิตเตอร์",
            link: "https://twitter.com/vite_js",
          },
          {
            text: "ดิสคอร์ด",
            link: "https://chat.vitejs.dev",
          },
          {
            text: "Awesome Vite",
            link: "https://github.com/vitejs/awesome-vite",
          },
          {
            text: "ชุมชนนักพัฒนา",
            link: "https://dev.to/t/vite",
          },
          {
            text: "Rollup Plugins Compat",
            link: "https://vite-rollup-plugins.patak.dev/",
          },
          {
            text: "ประวัติเวอร์ชั่น",
            link: "https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md",
          },
        ],
      },
      {
        text: "ภาษา",
        items: [
          {
            text: "อังกฤษ",
            link: "https://vitejs.dev",
          },
          {
            text: "จีน",
            link: "https://cn.vitejs.dev",
          },
          {
            text: "ญี่ปุ่น",
            link: "https://ja.vitejs.dev",
          },
          {
            text: "ไทย",
            link: "https://th.vitejs.dev",
          },
        ],
      },
    ],

    sidebar: {
      "/config/": "auto",
      "/plugins": "auto",
      // catch-all fallback
      "/": [
        {
          text: "Guide",
          children: [
            {
              text: "Why Vite",
              link: "/guide/why",
            },
            {
              text: "Getting Started",
              link: "/guide/",
            },
            {
              text: "Features",
              link: "/guide/features",
            },
            {
              text: "Using Plugins",
              link: "/guide/using-plugins",
            },
            {
              text: "Dependency Pre-Bundling",
              link: "/guide/dep-pre-bundling",
            },
            {
              text: "Static Asset Handling",
              link: "/guide/assets",
            },
            {
              text: "Building for Production",
              link: "/guide/build",
            },
            {
              text: "Deploying a Static Site",
              link: "/guide/static-deploy",
            },
            {
              text: "Env Variables and Modes",
              link: "/guide/env-and-mode",
            },
            {
              text: "Server-Side Rendering (SSR)",
              link: "/guide/ssr",
            },
            {
              text: "Backend Integration",
              link: "/guide/backend-integration",
            },
            {
              text: "Comparisons",
              link: "/guide/comparisons",
            },
            {
              text: "Migration from v1",
              link: "/guide/migration",
            },
          ],
        },
        {
          text: "APIs",
          children: [
            {
              text: "Plugin API",
              link: "/guide/api-plugin",
            },
            {
              text: "HMR API",
              link: "/guide/api-hmr",
            },
            {
              text: "JavaScript API",
              link: "/guide/api-javascript",
            },
            {
              text: "Config Reference",
              link: "/config/",
            },
          ],
        },
      ],
    },
  },
};
