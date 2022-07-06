<template>

    <body class="font-sans leading-normal tracking-normal">
        <div class="flex flex-col min-h-screen">
            <Header />
            <main class="flex-1 lg:container px-4 py-6 mx-auto md:px-6 md:py-12">
                <div class="flex flex-col items-center justify-center space-y-12">
                    <router-view></router-view>
                </div>
            </main>
            <Alert @trigger-alert="showAlert" v-show="showing" />
            <Footer />
        </div>
    </body>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Alert from './Alert.vue'

export default {
    name: 'Layout',
    components: {
        Header,
        Footer,
        Alert
    },
    data() {
        return {
            alertData: {},
            showing: false
        }
    },
    methods: {
        showAlert(data) {
            console.log("nime", data)
            this.alertData = data;
            this.showing = true;

            setTimeout(() => this.showing = false, 5000);
        }
    }

}
</script>

