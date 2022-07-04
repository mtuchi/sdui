<template>
    <div class="flex justify-center">
        <div v-for="article in articles" :key="article.id" class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
                <img class="rounded-t-lg" :src="article.cover ? article.cover : 'https://picsum.photos/200/300'"
                    :alt="article.title" />
            </a>'
            <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                    {{ article.title }}
                </h5>
                <p class="text-gray-700 text-base mb-4">
                    {{ article.summary }}
                </p>
                <span
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    <router-link :to="'/articles/' + article.id">
                        Read more
                    </router-link>

                </span>
                <span class="ml-2">
                    <router-link :to="'/edit-articles/' + article.id">
                        Edit
                    </router-link>
                </span>
            </div>
        </div>
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