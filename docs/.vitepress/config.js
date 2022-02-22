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
    editLinkText: "พบข้อมูลผิดพลาดในหน้านี้ ขอแก้ไขข้อมูล",

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
            text: "เครื่องมืออื่นๆ ของ Vite",
            link: "https://github.com/vitejs/awesome-vite",
          },
          {
            text: "ชุมชนนักพัฒนา",
            link: "https://dev.to/t/vite",
          },
          {
            text: "Rollup ปลั๊กอินที่ใช้ได้กับ Vite",
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
          text: "คู่มือ",
          children: [
            {
              text: "ทำไมต้องใช้ Vite",
              link: "/guide/why",
            },
            {
              text: "เริ่มต้นใช้งาน",
              link: "/guide/",
            },
            {
              text: "ฟีเจอร์ต่างๆ",
              link: "/guide/features",
            },
            {
              text: "การใช้ปลั๊กอิน",
              link: "/guide/using-plugins",
            },
            {
              text: "Bundle dependency ครั้งแรก",
              link: "/guide/dep-pre-bundling",
            },
            {
              text: "จัดการ Static Asset",
              link: "/guide/assets",
            },
            {
              text: "Build ขึ้น Production",
              link: "/guide/build",
            },
            {
              text: "Deploy แบบ Static Site",
              link: "/guide/static-deploy",
            },
            {
              text: "ตัวแปร Environment",
              link: "/guide/env-and-mode",
            },
            {
              text: "เรนเดอร์ฝั่งเซิฟเวอร์ (SSR)",
              link: "/guide/ssr",
            },
            {
              text: "ใช้งานร่วมกับ Backend",
              link: "/guide/backend-integration",
            },
            {
              text: "เทียบกับเครื่องมืออื่นๆ",
              link: "/guide/comparisons",
            },
            {
              text: "ย้ายมาจาก v1",
              link: "/guide/migration",
            },
          ],
        },
        {
          text: "APIs",
          children: [
            {
              text: "API สำหรับปลั๊กอิน",
              link: "/guide/api-plugin",
            },
            {
              text: "API สำหรับ Hot Reload",
              link: "/guide/api-hmr",
            },
            {
              text: "จาวาสคริปต์ API",
              link: "/guide/api-javascript",
            },
            {
              text: "คู่มือ config แบบละเอียด",
              link: "/config/",
            },
          ],
        },
      ],
    },
  },
};
