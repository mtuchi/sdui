<template>
    <header>
        <nav id="header"
            class="flex flex-wrap items-center justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
            <div id="progress" class="h-1 z-20 top-0"
                style="background:linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0);"></div>

            <div class="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-3">

                <div class="px-4">
                    <div class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl">
                        <router-link to="/">
                            <img src="../assets/logo.svg" alt="Logo">
                            NewsFeed
                        </router-link>
                    </div>
                </div>

                <div class="block lg:hidden pr-4">
                    <button id="nav-toggle"
                        class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>

                <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20 ml-4"
                    id="nav-content">
                    
                    <ul class="list-reset lg:flex justify-end flex-1 items-center">
                        <li class="mr-3">
                            <div class="inline-block py-2 px-4 text-gray-900 no-underline">
                                <router-link to="/about" v-slot="{ isActive, isExactActive }">
                                    <span :class="[isActive && 'font-bold', isExactActive && 'font-bold']">
                                        About
                                    </span>
                                </router-link>
                            </div>
                        </li>
                        <li class=" mr-3">
                            <div
                                class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4">
                                <router-link to="/os" v-slot="{ isActive, isExactActive }">
                                    <span :class="[isActive && 'font-bold', isExactActive && 'font-bold']">
                                        Open Source
                                    </span>
                                </router-link>
                            </div>
                        </li>
                        <li class="mr-3">
                            <div
                                class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4">
                                <router-link to="/gdpr" v-slot="{ isActive, isExactActive }">
                                    <span :class="[isActive && 'font-bold', isExactActive && 'font-bold']">
                                        Privacy Policy
                                    </span>
                                </router-link>
                            </div>
                        </li>
                        <li class="mr-3">
                            <div
                                class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4">
                                <router-link to="/add-news" v-slot="{ isActive, isExactActive }">
                                    <span :class="[isActive && 'font-bold', isExactActive && 'font-bold']">
                                        Submit News
                                    </span>
                                </router-link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

</template>

<script>
export default {
    name: 'Header',
}
</script>