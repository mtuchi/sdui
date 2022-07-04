<template>
    <div>
        <div class="py-12">
            <h2 class="text-2xl font-bold">Submit your article </h2>
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
            </p>
            <p class="mt-2 text-lg text-gray-600">Don't forget * means it's required</p>
            <form method="post" @submit.prevent="addNewArticle">
                <div class="mt-8 max-w-md">
                    <div class="grid grid-cols-1 gap-6">
                        <label class="block">
                            <span class="text-gray-700">Title*</span>
                            <input type="text" class="mt-1 block w-full" placeholder="Eg: A bug in the JavaScript"
                                v-model="article.title" />
                        </label>
                        <label class="block">
                            <span class="text-gray-700">Body*</span>
                            <textarea class="mt-1 block w-full" rows="3" v-model="article.body"
                                placeholder="Eg: South Africa, officially the Republic of South Africa, is the southernmost country in Africa."></textarea>

                        </label>
                        <label class="block">
                            <span class="text-gray-700">Author*</span>
                            <input type="text" class="mt-1 block w-full" placeholder="Mtuchi" v-model="article.author">
                        </label>
                        <label class="block">
                            <span class="text-gray-700">Additional details (Cover Url)</span>
                            <input type="text" class="mt-1 block w-full"
                                placeholder="Eg: https://www.digitalocean.com/_next/static/media/intro-to-cloud.d49bc5f7.jpeg"
                                v-model="article.cover" />
                        </label>
                    </div>
                </div>
                <div>
                    <button type="submit">Submit New Article</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AddNews',
    data() {
        return {
            errors: [],
            article: {
                id: null,
                title: "Bug in the JavaAcript",
                body: "",
                author: "Dylan Beattie",
                cover: "https://dylanbeattie.net/images/parodies/javascript.jpg",
            },
            loading: false
        };
    },
    methods: {
        addNewArticle() {

            this.errors = [];
            this.loading = true;
            if (!this.article.title) {
                this.errors.push('Title is required.');
                this.loading = false;

            }
            if (!this.article.body) {
                this.errors.push('Article body is required.');
                this.loading = false;

            }
            if (!this.article.author) {
                this.errors.push('Author required.');
                this.loading = false;

            }

            if (this.errors.length == 0) {
                this.$store.dispatch("addArticle", this.article);
            }

        }
    }
}
</script>