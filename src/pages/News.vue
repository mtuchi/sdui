<template>
    <div class="container w-full md:max-w-5xl mx-auto">
        <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">
            <div class="font-sans">
                <div class="flex justify-between">
                    <div>
                        <router-link to="/" class="flex text-base md:text-sm font-bold no-underline hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                            Back to NewsFeed
                        </router-link>
                    </div>
                    <div>
                        <router-link :to="'/edit-articles/' + getArticle.id"
                            class="flex text-base md:text-sm font-bold no-underline hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                            Edit this news
                        </router-link>
                    </div>
                </div>
                <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
                    {{ getArticle.title }}
                </h1>
                <p class="text-sm md:text-base font-normal text-gray-600">Published {{ this.$moment(getArticle.createdAt).fromNow() }}</p>
            </div>
            <div class="py-2">
                <img class="w-full" :src="getArticle.cover ? getArticle.cover : 'https://picsum.photos/200/300'"
                    :alt="getArticle.title" />
            </div>

            <p class="py-6">
                {{ getArticle.body }}
            </p>

        </div>

        <div class="flex w-full items-center font-sans px-4 py-12">
            <img class="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author">
            <div class="flex-1 px-2">
                <p class="text-gray-600 text-xs md:text-base">
                    Author
                </p>
                <p class="text-base font-bold text-base md:text-xl leading-none mb-2">{{ getArticle.author }}</p>

            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'News',
    computed: {
        ...mapGetters(["getArticle"])
    },
    created() {
        this.$store.dispatch("fetchArticle", this.$route.params.id)
    }
}
</script>