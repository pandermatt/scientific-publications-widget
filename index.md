---
layout: home

hero:
  name: "Publications Widget"
  text: "Display Your Publications with Ease"
  tagline: "Easily embed a publications widget powered by Zotero on your website."

  image: 
    src: "/logo.svg"
    alt: "Publications Widget Logo"

markdownStyles: false

features:
  - title: ⚡ Easy Setup
    details: With just a Zotero ID, you can integrate your publications into any website with minimal effort.
  - title: 🔄 Real-Time Updates
    details: The widget updates automatically whenever you add new publications to Zotero.
  - title: 💻 Responsive Design
    details: The widget is mobile-friendly and adapts seamlessly to different screen sizes.
  - title: 🔐 Privacy-Focused
    details: Your data is only displayed based on your Zotero settings, ensuring privacy.
---


<div class="home-content vp-doc">

## Publications Widget <Badge text="Beta" type="warning" />

📚 Easily embed your [Zotero](https://www.zotero.org/) publications on your website with our simple widget! Perfect for academic websites, portfolios, or research group pages.

::: warning
The **Publications Widget** is currently in beta. **Do not use it in production environments**.
Check out the [Why is the Widget in Beta?](#🧪-why-is-the-widget-in-beta) section for more information and self-hosting suggestions.
:::

## 🛠️ Get Your Widget

Enter your Zotero ID below to generate the widget code for your website.

<GetWidgetForm />

## 🔍 How to Get Your Zotero ID

To display your publications using the **Publications Widget**, you'll need to provide your Zotero ID. Follow these simple steps to find it:

1. Visit [Zotero Groups](https://www.zotero.org/groups).
2. Select or create your group. This group needs to be public.
3. Look at the URL of your group page. The Group ID will be the number at the end of the URL:
   `https://www.zotero.org/groups/1234567/groupname`. In this case, the Group ID is `1234567`.
4. Start adding publications to your group library.

## 🧪 Why is the Widget in Beta?

The **Publications Widget** is currently in beta, which means it is still under active development and might have some bugs. We are continuously improving it, but in the meantime, there could be some limitations, including:

- ❓ Unknown performance under heavy traffic.
- 🚫 Potential limitations on the number of requests, or even temporary shutdowns, in worst-case scenarios.

If you're looking for a more stable solution, you can self-host the widget. The source code is available on [GitHub](https://github.com/pandermatt/scientific-publications-widget). If you enjoy using the widget, please consider starring the repository.

Since it's built with VitePress, you can follow the [VitePress documentation on deployment](https://vitepress.dev/guide/deploy.html#platform-guides).

## 🚀 Upcoming Features

We are actively working on new features for the widget, and you are welcome to contribute to the project on [GitHub](https://github.com/pandermatt/scientific-publications-widget).

- 📄 Pagination for publications
- 🔎 Search functionality
- 🖼️ Ability to pass iframe height via URL parameters
- ✨ Highlight your name in **bold** (currently, only 'Pascal Andermatt' is hardcoded as highlighted)

---

Feel free to report any issues or suggestions on GitHub. We appreciate your feedback! 📝

</div>

<script setup>
  import GetWidgetForm from './components/GetWidgetForm.vue'
</script>

<style scoped>
.home-content {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 640px) {
    padding: 0 48px;
  }
  padding: 0 24px;
}
</style>
