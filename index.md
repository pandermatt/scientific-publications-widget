---
layout: home

hero:
  name: "Publications Widget"
  text: "Display Your Publications with Ease"
  tagline: "Easily embed a publications widget powered by Zotero on your website."

  image: 
    src: "/logo.webp"
    alt: "Publications Widget Logo"

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


<div class="home-content">

## Get Your Widget

Enter your Zotero ID below to generate the widget code for your website.

<GetWidgetForm />

## How to Get Your Zotero ID

To display your publications using the **Publications Widget**, you'll need to provide your Zotero ID. 

Follow these simple steps to find it:

1. Visit [Zotero Groups](https://www.zotero.org/groups).
2. Select or create your group. This group needs to be public.
3. Look at the URL of your group page. The Group ID will be the number at the end of the URL:
   ```
   https://www.zotero.org/groups/1234567/groupname
   ```
   In this case, the Group ID is `1234567`.
4. Start adding publications to your group library.

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
