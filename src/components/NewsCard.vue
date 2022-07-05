<template>
    <div class="flex flex-col justify-between w-full">
        <div class="content">
            <h1 class="text:xl lg:text-3xl relative">Articles</h1>
            <div class="rounded-sm block relative mt-2 mb-6 bg-slate-400" include="true"
                style="height: 5px; width: 75px;">
            </div>
        </div>
        <section class="news-component flex flex-col relative border-t relative z-1 flex-grow">
            <div class="flex flex-col md:flex-row flex-grow flex-no-wrap md:h-full md:overflow-x-scroll">
                <router-link v-for="article in articles" :key="article.id"
                    class="min-h-fit flex flex-col justify-between overflow-hidden text-sm relative responsive-columns flex-grow-0 flex-shrink-0 text-grey-700 cursor-pointer block z-50 p-4 border-b md:border-b-0 md:border-r"
                    :to="'/articles/' + article.id" routesenddate="2019-09-23">
                    <div class="flex flex-col justify-between h-full z-10">
                        <!-- <div class="text-rule text-5xl text-center z-10 flex-grow">
                            {{ index++ }}
                        </div> -->
                        <img :src="article.cover ? article.cover : 'https://picsum.photos/200/300'" :alt="article.title"
                            class="h-full w-auto" />

                        <div class="flex flex-col justify-end z-10">
                            <div class="uppercase font-thin text-sm tracking-wide text-grey-600">{{ article.createdAt }}
                            </div>
                            <div class="font-sans text-base font-bold mt-2 uppercase inline-flex text-grey-700">
                                {{ article.title }}
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </section>
    </div>


</template>
<script>
export default {
    name: 'NewsCard',
    props: {
        articles: {
            type: Array,
            default: () => []
        }
    }
}
</script>
<style>
.news-component {
    max-height: calc(100vh - 90px);
}
</style>