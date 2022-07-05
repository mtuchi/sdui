<template>
    <div class="flex items-start justify-between w-full">
        <div class="content">
            <h1 class="text:xl lg:text-3xl relative">Articles</h1>
            <div class="rounded-sm block relative mt-2 mb-6 bg-slate-400" include="true"
                style="height: 5px; width: 75px;">
            </div>
        </div>
        <div class="flex">
            <div class="flex">
                <div class="flex rounded-md shadow-sm">
                    <select name="sortBy" id="select" v-model="sortBy"
                        class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300">
                        <option value="title">Title</option>
                        <option value="body">Body</option>
                        <option value="author">Author</option>
                    </select>
                    <button v-on:click="ascending = !ascending"
                        class="inline-flex items-center px-3 border border-l-0 border-slate-300 bg-slate-50 text-slate-500 text-sm">
                        <span v-if="ascending">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                            </svg>
                        </span>
                        <span v-else class="fa fa-sort-down">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="relative inline-flex">
                    <input type="search" v-model="searchValue" placeholder="Search News" id="search-input"
                        class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300" />
                    <span class="absolute top-3 right-3" v-if="!searchValue">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="relative inline-block text-left" v-if="false">
                <div class="origin-top-right absolute right-0 mt-2 w-96 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"
                    v-if="searchValue">
                    <div class="py-1" role="none">
                        <router-link v-for="article in filteredArticles" :key="article.id"
                            :to="'/articles/' + article.id" class="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem" tabindex="-1" @click="loadArticle(article.id)">
                            {{ article.title }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex items-start justify-between w-full">
        <NewsCard :articles="filteredArticles" />
    </div>
</template>

<script>
import NewsCard from '../components/NewsCard.vue'
import { mapGetters } from 'vuex';
export default {
    name: 'Home',
    components: {
        NewsCard,
    },
    data() {
        return {
            articles: [],
            ascending: true,
            sortBy: 'title',
            searchValue: "",
        }
    },
    computed: {
        ...mapGetters(["getArticles"]),
        filteredArticles() {
            let tempArticles = this.articles

            // Process search input
            if (this.searchValue != '' && this.searchValue) {
                tempArticles = tempArticles.filter((item) => {
                    return item.title
                        .toUpperCase()
                        .includes(this.searchValue.toUpperCase())
                })
            }

            // Sort by title order
            tempArticles = tempArticles.sort((a, b) => {
                if (this.sortBy == 'title') {
                    let fa = a.title.toLowerCase(), fb = b.title.toLowerCase()

                    if (fa < fb) {
                        return -1
                    }
                    if (fa > fb) {
                        return 1
                    }
                    return 0

                    // Sort by news body
                } else if (this.sortBy == 'body') {
                    return a.body - b.body
                }
            })

            // Show sorted array in descending or ascending order
            if (!this.ascending) {
                tempArticles.reverse()
            }

            return tempArticles
        }

    },
    created() {
        this.$store.dispatch("loadArticles").then(() => {
            this.loadArticles();
        });
    },
    methods: {
        loadArticles() {
            this.articles = this.getArticles
        },
        loadArticle(id) {
            this.searchValue = "";
            this.$store.dispatch("fetchArticle", id);
        }
    }
}
</script>