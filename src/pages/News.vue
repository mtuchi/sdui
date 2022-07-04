<template>
    <!--Container-->
    <div class="container w-full md:max-w-3xl mx-auto pt-20">

        <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">
            <div class="font-sans">
                <p class="text-base md:text-sm text-green-500 font-bold">&lt;
                    <router-link to="/"
                        class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">
                        BACK TO
                        NEWSFEED
                    </router-link>
                </p>
                <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
                    {{ getArticle.title }}
                </h1>
                <p class="text-sm md:text-base font-normal text-gray-600">Published {{ getArticle.createdAt }}</p>
            </div>
            <div class="py-2">
                <img class="rounded-t-lg" :src="getArticle.cover ? getArticle.cover : 'https://picsum.photos/200/300'"
                    :alt="getArticle.title" />
            </div>

            <!--Lead Para-->
            <p class="py-6">
                {{ getArticle.body }}
            </p>

        </div>

        <!--Author-->
        <div class="flex w-full items-center font-sans px-4 py-12">
            <img class="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author">
            <div class="flex-1 px-2">
                <p class="text-base font-bold text-base md:text-xl leading-none mb-2">{{ getArticle.author }}</p>
                <p class="text-gray-600 text-xs md:text-base">Minimal Blog Tailwind CSS template by
                    <a class="text-green-500 no-underline hover:underline"
                        href="https://www.tailwindtoolbox.com">TailwindToolbox.com</a>
                </p>
            </div>
        </div>
        <!--/Author-->

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