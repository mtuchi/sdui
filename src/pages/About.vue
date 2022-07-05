<template>
    <div class="container w-full md:max-w-5xl mx-auto">
        <div class="font-sans">

            <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
                About this newsfeed app
            </h1>
        </div>
        <p class="py-3">
            Hello 👋, Welcome to Sdui NewsFeed web app. It's miminal personal blog like web app that was born from a
            sample task during an interview with <a href="https://sdui.de/" target="_blank">Sdui</a>
        </p>

        <p class="pb-3">
            Building this was truly fun and exciting as i got to learn and update my skills in vuejs ecosystem. Here is
            the a rough sketch of the architecture for the sdui app
        </p>

        <div>
            <h2 class="font-bold font-sans break-normal text-gray-900 pb-2">
                Sdui News Feed Architecture
            </h2>

            <img src="../assets/sdui-arch.jpg" alt="Architecture" />
            <p class="text-center">Copyright <a href="https://github.com/mtuchi">mtuchi</a></p>
        </div>

        <div class="mt-8">
            <h2 class="font-bold font-sans break-normal text-gray-900 pb-2">
                Project Structure
            </h2>
        </div>
        <div class="flex justify-between">
            <div>
                <p class="font-bold">Frontend</p>
                <img src="../assets/app.png" alt="Frontend" />
            </div>
            <div>
                <p class="font-bold">Backend API</p>
                <img src="../assets/api.png" alt="APi" />
            </div>
        </div>
        <blockquote class="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
            Just a random fact, I tried to use deepai to summarize the body content so that i can have a news summary on
            the card.
            Sadly i couldn't use due to heavy network load on
            <a href="https://deepai.org/" class="underline">deepai.org</a>
        </blockquote>

        <div class="container mt-4">
            <div class="font-sans bg-gradient-to-b from-green-100 to-gray-100 rounded-lg shadow-xl p-4 text-center">
                <h2 class="font-bold break-normal text-xl md:text-3xl">Do you wish to learn more?</h2>
                <h3 class="font-bold break-normal text-gray-600 text-sm md:text-base">
                    You can learn more about the technology stack used in this web app from the
                </h3>
                <div class="w-full text-center pt-4">
                    <router-link to="/os"
                        class="flex-1 mt-4 block md:inline-block appearance-none bg-green-500 text-white text-base font-semibold tracking-wider uppercase py-4 w-full shadow hover:bg-green-400">
                        Open Source page
                    </router-link>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

export default {
    name: 'About',
}
</script>