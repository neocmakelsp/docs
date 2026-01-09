import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: "/docs/",

  title: "Neocmakelsp",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Editors', link: '/editors' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Config', link: '/config' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/neocmakelsp/neocmakelsp' }
    ],
  },
})
