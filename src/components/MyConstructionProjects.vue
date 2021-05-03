<template>
    <div class="w-full flex flex-col gap-8 mx-auto">
        <h1 class="font-montserrat text-2xl font-bold text-center">Building Construction</h1>
        <div>
            <p class="font-roboto text-sm italic text-center">I construct buildings for my clients. Being an architect places me in a unique position. As the creator in chief of the designs, I understand all of the intricacies like no one else can. Further, my eye for detail means that I can reproduce the building drawings faithfully. Find below, a few of my construction works. </p>
        </div>
        <ul class="w-full grid sm:grid-cols-3 grid-cols-1 gap-2 bg-gray-200 p-4 rounded-md shadow-md">
            <img v-for="(image, index) in images" :key="index" :src="image" alt="" class="col-span-1 w-full h-auto object-cover">
        </ul>
    </div>
</template>


<script>
import constructionImages from '../constructionProjects.js'


export default {
    setup() {
        const images = constructionImages

        return {
            images
        }
        
    },
}
</script>