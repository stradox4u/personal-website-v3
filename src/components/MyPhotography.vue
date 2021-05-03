<template>
    <div class="w-full flex flex-col gap-8 mx-auto">
        <h1 class="font-montserrat text-2xl font-bold text-center">Photography</h1>
        <div>
            <p class="font-roboto text-sm italic text-center">I hold a longstanding love for photography, and so dabble from time to time. Here a few shots by me. </p>
        </div>
        <ul class="w-full grid sm:grid-cols-3 grid-cols-1 gap-2 bg-gray-200 p-4 rounded-md shadow-md">
            <img v-for="(image, index) in images" :key="index" :src="image" alt="" class="col-span-1 w-full h-auto object-cover">
        </ul>
    </div>
</template>


<script>
import photos from '../photographyImages.js'


export default {
    setup() {
        const images = photos

        return {
            images
        }
        
    },
}
</script>