<template>
    <nav id="header" class="fixed w-full z-10 top-0 bg-white">

        <div id="progress" class="h-1 z-20 top-0"
            style="background:linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0);"></div>

        <div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">

            <div class="pl-4">
                <div class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl">
                    <router-link to="/">
                        <img src="../assets/logo.svg" alt="Logo">
                        NewsFeed
                    </router-link>
                </div>
            </div>

            <div class="block lg:hidden pr-4">
                <button id="nav-toggle"
                    class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
                id="nav-content">
                <div class="relative inline-block text-left">
                    <div id="sort-bar">
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
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                                        </svg>
                                    </span>
                                    <span v-else class="fa fa-sort-down">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div>
                                <input type="search" v-model="searchValue" placeholder="Search News" id="search-input"
                                    class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300" />
                                <span class="absolute -mt-7 right-3" v-if="!searchValue">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div class="origin-top-right absolute right-0 mt-2 w-96 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"
                        v-if="searchValue">
                        <div class="py-1" role="none">
                            <router-link v-for="article in filteredArticles" :key="article.id"
                                :to="'/articles/' + article.id" class="text-gray-700 block px-4 py-2 text-sm"
                                role="menuitem" tabindex="-1">
                                {{ article.title }}
                            </router-link>
                        </div>
                    </div>
                </div>
                <ul class="list-reset lg:flex justify-end flex-1 items-center">
                    <li class="mr-3">
                        <div class="inline-block py-2 px-4 text-gray-900 font-bold no-underline">
                            <router-link to="/about">
                                About
                            </router-link>
                        </div>
                    </li>
                    <li class="mr-3">
                        <div
                            class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4">
                            <router-link to="/os">
                                Open Source
                            </router-link>
                        </div>
                    </li>
                    <li class="mr-3">
                        <div
                            class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4">
                            <router-link to="/gdpr">
                                Privacy Policy
                            </router-link>
                        </div>
                    </li>
                    <li class="mr-3">
                        <div
                            class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4">
                            <router-link to="/add-news">
                                Submit News
                            </router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Header',
    data() {
        return {
            ascending: true,
            sortBy: 'title',
            searchValue: "",
            articles: []
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

            // Filter out by cooking time
            // if (this.maxCookingTime)
            //     tempArticles = tempArticles.filter((item) => {
            //         return (item.cookingTime <= this.maxCookingTime)
            //     })

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
        }
    }
}
</script>