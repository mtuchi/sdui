<template>
    <body class="font-sans leading-normal tracking-normal">
        <div class="flex flex-col min-h-screen">
            <Header />
            <main class="flex-1 lg:container px-4 py-6 mx-auto md:px-6 md:py-12">
                <div class="flex flex-col items-center justify-center space-y-12">
                    <router-view></router-view>
                </div>
            </main>
            <Footer />
        </div>
    </body>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
    name: 'Layout',
    components: {
        Header,
        Footer
    },

}
</script>

