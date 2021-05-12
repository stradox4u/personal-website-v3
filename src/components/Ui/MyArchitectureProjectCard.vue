<template>
    <div class="w-full bg-white rounded-md col-span-1 flex flex-col space-y-4 p-2">
        <h2 class="font-montserrat text-sm">{{ project.title }}</h2>
        <img @click="openCarousel(project.title)" :src="project.images[0]" alt="first project image" class="w-full h-auto object-cover transform hover:scale-105 hover:opacity-50 cursor-pointer">
        <p class="font-roboto text-xs italic">{{ project.description }}</p>
    </div>
</template>

<script>
export default {
    props: ['project'],
    setup(props, { emit }) {
        const openCarousel = function(name) {
            emit('imgClicked', name)
        }

        return {
            openCarousel,
        }
    },
    emits: ['imgClicked'],
}
</script>