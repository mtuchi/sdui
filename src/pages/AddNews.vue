<template>
    <div class="container w-full max-w-md mx-auto">
        <h2 class="text-2xl font-bold">Submit your article </h2>
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
        <ul>
            <li v-for="(error, index) in errors" :key="index">
                <div class="flex bg-red-100 p-4 mb-4 text-sm text-red-700" role="alert">
                    <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <div>
                        <span class="font-medium">Error!</span> {{ error }}
                    </div>
                </div>
            </li>
        </ul>
        </p>
        <p class="mt-2 text-lg text-gray-600">Don't forget * means it's required</p>
        <form>
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
            <div class="mt-4">
                <button @click.prevent="addNewArticle"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full">
                    Submit New
                    Article
                </button>
            </div>
        </form>
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
                title: "",
                body: "",
                author: "",
                cover: "",
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

                this.$store.dispatch("addArticle", this.article).then(() => {
                    var _data = { type: "success", msg: "News was added successful" };
                    this.$emit('triggerAlert', _data);

                    this.article = {};
                    this.$router.push("/");
                }).catch((err) => {
                    // console.log(err)

                    this.errors.push(err)
                });
            }

        }
    }
}
</script>