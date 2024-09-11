<script setup>
import { ref } from 'vue';

const zoteroId = ref('');
</script>

<template>
    <div class="widget-form">
        <input v-model="zoteroId" placeholder="Enter Zotero ID" />

        <div v-if="zoteroId">
            <strong>Your Widget URL</strong>

            <div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span
                    class="lang"></span>
                <pre class="shiki shiki-themes github-light github-dark vp-code"
                    tabindex="0"><code><span class="line"><span>{{ `https://pub-get.ch/iframe?zoteroId=${zoteroId}` }}</span></span></code></pre>
            </div>
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

button {
    padding: 10px;
    font-size: 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #389d73;
}
</style>
