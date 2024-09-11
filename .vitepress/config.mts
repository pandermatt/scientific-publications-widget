import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Publications Widget",
  description: "A widget to display your publications",
  appearance: false,
  srcExclude: ['README.md'],
  cleanUrls: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pandermatt/scientific-publications-widget' }
    ]
  }
})
