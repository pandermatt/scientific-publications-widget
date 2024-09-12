<script setup>
import { ref } from 'vue';

const zoteroId = ref('');

const currentHost = window.location.origin;
</script>

<template>
    <div class="widget-form">
        <input v-model="zoteroId" placeholder="Enter Zotero ID" />

        <div v-if="zoteroId">
            <strong>Your Widget URL</strong>

            <div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span
                    class="lang"></span>
                <pre class="shiki shiki-themes github-light github-dark vp-code"
                    tabindex="0"><code><span class="line"><span>{{ `${currentHost}/iframe?zoteroId=${zoteroId}` }}</span></span></code></pre>
            </div>

            <p>
                The iframe height is set to <b>500px</b>. In the future, we will add the ability to customize the height.
                <br>
                <a :href="`${currentHost}/iframe?zoteroId=${zoteroId}`" target="_blank">Preview Your Widget</a>
            </p>
        </div>
    </div>
</template>

<style scoped>
.widget-form {
    display: flex;
    flex-direction: column;
}

input {
    padding: 8px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>
