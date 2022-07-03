<template>

    <body class="font-sans leading-normal tracking-normal">
        <Header />
        <div class="container w-full md:max-w-3xl mx-auto pt-20">
            <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">
                <router-view></router-view>
            </div>
        </div>
        <Footer />
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
    }
}
</script>

