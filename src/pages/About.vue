<template>
    <div>
        <div class="font-sans">

            <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
                About this newsfeed app
            </h1>
            <!-- <p class="text-sm md:text-base font-normal text-gray-600">Published 19 February 2019</p> -->
        </div>


        <!--Lead Para-->
        <p class="py-6">
            Hello 👋, Welcome to Sdui NewsFeed web app. It's miminal personal blog like web app that was born from a
            sample task during an interview with <a href="https://sdui.de/" target="_blank">Sdui</a>

        </p>

        <p class="py-6">
            Building this was truly fun and exciting as i got to learn and update my skills in vuejs ecosystem.
        </p>
        <p>
            Here is the a rough sketch of the architecture for the sdui app
            <img src="../assets/sdui-arch.jpg" alt="Architecture" />
        </p>
        <div>
            <h4>
                Project Structure
            </h4>
        </div>
        <div class="flex">
            <div>
                Frontend
                <img src="../assets/app.png" alt="Frontend" />
            </div>
            <div>
                Backend API
                <img src="../assets/api.png" alt="APi" />
            </div>
        </div>
        <p>
            You can learn more about the technology stack used in this web app from the <router-link to="/os" class="underline">
                Open Source
            </router-link> page
        </p>

    </div>
</template>

<script>

export default {
    name: 'About',
}
</script>