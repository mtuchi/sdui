<template>
    <section class="news-component flex flex-col relative border-t relative z-1 flex-grow">
        <div class="flex flex-col md:flex-row flex-grow flex-no-wrap md:h-full" v-if="articles">
            <router-link v-for="article in articles" :key="article.id"
                class="min-h-fit w-96 flex flex-col justify-between overflow-hidden text-sm relative responsive-columns flex-grow-0 flex-shrink-0 text-grey-700 cursor-pointer block z-50 p-4 border-b md:border-b-0 md:border-r"
                :to="'/articles/' + article.id" routesenddate="2019-09-23">
                <div class="flex flex-col justify-between h-full z-10">
                    <div class="h-96 w-full bg-center bg-cover bg-no-repeat relative"
                        :style="`background-image: url(${article.cover ? article.cover : 'https://picsum.photos/200/300?random=' + article.id});`">
                        <div class="absolute inset-0 bg-black opacity-40 h-full flex flex-col z-0"></div>
                        <div class="absolute z-10">
                            <h2 class="text-2xl p-3 text-white font-bold">{{ article.title }}</h2>
                        </div>
                    </div>

                    <div class="flex flex-col justify-end z-10">
                        <div class="uppercase font-thin text-sm tracking-wide text-grey-600">published
                            {{ this.$moment(article.createdAt).fromNow() }}
                        </div>
                        <div class="font-sans text-base font-bold mt-2 uppercase inline-flex text-grey-700">
                            <span class="font-thin">By</span>&nbsp; {{ article.author }}
                        </div>
                    </div>
                </div>
            </router-link>
            <content-loader></content-loader>
        </div>
    </section>
</template>
<script>
import { ContentLoader } from 'vue-content-loader'
export default {
    name: 'NewsCard',
    props: {
        articles: {
            type: Array,
            default: () => []
        }
    },
    components: {
        ContentLoader
    }
}
</script>
<style>
.news-component {
    max-height: calc(100vh - 90px);
}
</style>