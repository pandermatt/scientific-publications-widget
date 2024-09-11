---
layout: false
---

<div class="vp-doc scroll-shadows">
<ZoteroLibrary />
</div>

<script setup>
  import ZoteroLibrary from './components/ZoteroLibrary.vue'
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

.scroll-shadows {
  font-family: 'Open Sans', sans-serif;

  max-height: 500px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;

  background:
    /* Shadow Cover TOP */
    linear-gradient(
      white 30%,
      rgba(255, 255, 255, 0)
    ) center top,
    
    /* Shadow Cover BOTTOM */
    linear-gradient(
      rgba(255, 255, 255, 0), 
      white 70%
    ) center bottom,
    
    /* Shadow TOP */
    radial-gradient(
      farthest-side at 50% 0,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ) center top,
    
    /* Shadow BOTTOM */
    radial-gradient(
      farthest-side at 50% 100%,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0)
    ) center bottom;
  
  background-repeat: no-repeat;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  background-attachment: local, local, scroll, scroll;
}
</style>
