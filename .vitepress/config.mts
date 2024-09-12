import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Publications Widget",
  description: "A widget to display your publications",
  appearance: false,
  srcExclude: ['README.md'],
  cleanUrls: true,
  head: [
    ['meta', { property: 'og:title', content: 'Publications Widget' }],
    ['meta', { property: 'og:description', content: 'A widget to display your publications' }],
    ['meta', { property: 'og:image', content: 'http://pub-get.ch/og-image.jpg' }]
  ],
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pandermatt/scientific-publications-widget' }
    ],
    nav: [
      { text: 'Get Your Zotero ID', link: 'https://www.zotero.org/groups' },
    ],
    footer: {
      message: "Made with ❤️ in Switzerland - by <a href='https://pandermatt.ch'>Pascal Andermatt</a>",
      copyright: '<a href="/privacy-policy">Privacy Policy</a>',
    },
  }
})
