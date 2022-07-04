<template>
    <NewsCard :articles="getArticles" />
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
            articles: []
        }
    },
    computed: {
        ...mapGetters(["getArticles"]),


    },
    created() {
        this.$store.dispatch("loadArticles");
    },
    methods: {

    }
}
</script>