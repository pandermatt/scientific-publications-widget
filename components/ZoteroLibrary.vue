<template>
    <div class="publications">
        <div v-if="isLoading">
            <div class="year-title">{{ new Date().getFullYear() }}</div>
            <div class="loading-skeleton custom-block">
                <div class="loading-skeleton-title">
                    Loading Publications...
                </div>
            </div>
            <div class="danger custom-block" v-if="error">
                <p class="custom-block-title">Error</p>
                <p>{{ error }}</p>
            </div>
        </div>

        <div v-else>
            <div v-for="({ year, papers }) in groupedPublications" :key="year">
                <div class="year-title">{{ year }}</div>
                <div v-for="publication in papers" :key="publication.key">
                    <details class="publication custom-block">
                        <summary>
                            <div class="title">{{ publication.data.title }}</div>
                            <div class="authors">
                                <span v-for="(author, index) in publication.data.myAuthors" :key="author.key">
                                    <span :class="{ strong: author.lastName === 'Andermatt' }">{{ author.firstName }} {{
                                        author.lastName }}</span>
                                    <span v-if="index !== publication.data.myAuthors.length - 1">, </span>
                                </span>
                            </div>
                        </summary>
                        <p v-if="publication.data.proceedingsTitle || publication.data.repository">
                            <strong>Published in:</strong> {{ publication.data.proceedingsTitle ||
                            publication.data.repository }}
                        </p>
                        <p v-if="publication.data.publisher">
                            <strong>Publisher:</strong> {{ publication.data.publisher }}
                        </p>
                        <p v-if="publication.data.volume">
                            <strong>Volume:</strong> {{ publication.data.volume }}
                        </p>
                        <p v-if="publication.data.pages">
                            <strong>Pages:</strong> {{ publication.data.pages }}
                        </p>
                        <a v-if="publication.data.url" :href="publication.data.url" target="_blank">Read More</a>
                    </details>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const isLoading = ref(true);
const publications = ref([]);
const error = ref(null);

const zoteroId = window.location.search.split('zoteroId=')[1];

const fetchPublications = async () => {
    try {
        const response = await axios.get(`https://api.zotero.org/groups/${zoteroId}/items`);
        publications.value = response.data;
        isLoading.value = false;
    } catch (error) {
        console.error('Error fetching publications:', error);
        error.value = 'Error fetching publications. Please try again later.';
    }
};

const getAuthors = (creators) => {
    return creators.filter((creator) => creator.creatorType === 'author');
};

const groupedPublications = computed(() => {
    const groups = {};
    publications.value.forEach((publication) => {
        const date = new Date(publication.data.date);
        const year = date.getFullYear();

        if (!groups[year]) {
            groups[year] = [];
        }
        console.log(publication.data);
        publication.data.myAuthors = getAuthors(publication.data.creators);
        publication.data.myDate = date;
        groups[year].push(publication);
    });

    const sortedGroups = Object.keys(groups).map((year) => ({
        year,
        papers: groups[year]
    })).sort((a, b) => b.year - a.year);

    sortedGroups.forEach((group) => {
        group.papers.sort((a, b) => b.data.myDate - a.data.myDate);
    });

    return sortedGroups;
});

onMounted(fetchPublications);
</script>

<style scoped lang="scss">
.publications {
    .year-title {
        font-weight: bold;
        margin-bottom: -10px
    }

    .title {
        font-weight: bold;
        display: inline;
    }

    .authors {
        font-style: italic;
        color: #666;

        .dark & {
            color: #999;
        }

        .strong {
            font-weight: bold;
        }
    }

    p {
        margin: 5px 0;
    }

    .publication {
        summary {
            cursor: pointer;
            margin: 0;
        }

        padding: 16px;

        border-color: var(--vp-custom-block-details-border);
        color: var(--vp-custom-block-details-text);
        background-color: var(--vp-custom-block-details-bg);
    }
}

.loading-skeleton {
    @keyframes pulse {
        0% {
            background-color: #fafafa;
        }

        50% {
            background-color: #f5f5f5;
        }

        100% {
            background-color: #fafafa;
        }
    }

    @keyframes pulseDark {
        0% {
            background-color: #333;
        }

        50% {
            background-color: #444;
        }

        100% {
            background-color: #333;
        }
    }

    animation: pulse 1.5s infinite;

    .dark & {
        animation: pulseDark 1.5s infinite;
    }

    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    .loading-skeleton-title {
        font-weight: bold;
    }
}
</style>
