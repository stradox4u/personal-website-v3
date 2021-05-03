<template>
    <nav class="w-24 mt-7 h-auto self-stretch bg-gray-800 p-4 rounded-md shadow-md">
        <ul class="space-y-8 text-gray-50 list-none">
            <li class="text-center">
                <router-link :to="{ name: 'home' }">
                    <i class="fas fa-home fa-2x transform hover:scale-110"></i>
                    <p class="text-xs transform hover:scale-110">Home</p>
                </router-link>
                <hr class="border border-gray-400 w-full shadow-lg mt-2">
            </li>
            <li class="text-center">
                <router-link :to="{ name: 'devPortfolio' }">
                    <i class="fas fa-laptop-code fa-2x transform hover:scale-110"></i>
                    <p class="text-xs transform hover:scale-110">Web Development</p>
                </router-link>
                <hr class="border border-gray-400 w-full shadow-lg mt-2">
            </li>
            <li class="text-center">
                <router-link :to="{ name: 'architecture' }">
                    <i class="fas fa-drafting-compass fa-2x transform hover:scale-110"></i>
                    <p class="text-xs transform hover:scale-110">Architecture & 3d Visualisation</p>
                </router-link>
                <hr class="border border-gray-400 w-full shadow-lg mt-2">
            </li>
            <li class="text-center">
                <router-link :to="{ name: 'construction' }">
                    <i class="fas fa-cubes fa-2x transform hover:scale-110"></i>
                    <p class="text-xs transform hover:scale-110">Building Construction</p>
                </router-link>
                <hr class="border border-gray-400 w-full shadow-lg mt-2">
            </li>
            <li class="text-center">
                <router-link :to="{ name: 'photography' }">
                    <i class="fas fa-camera-retro fa-2x transform hover:scale-110"></i>
                    <p class="text-xs transform hover:scale-110">Photography</p>
                </router-link>
                <hr class="border border-gray-400 w-full shadow-lg mt-2">
            </li>
            <li class="text-center">
                <a href="mailto:admin@arcodeh.pro">
                    <i class="far fa-id-card fa-2x transform hover:scale-110"></i>
                    <p class="text-xs transform hover:scale-110">Contact Me</p>
                </a>
                <hr class="border border-gray-400 w-full shadow-lg mt-2">
            </li>
        </ul>

    </nav>
</template>


<script>
export default {
    setup() {
        
    },
}
</script>