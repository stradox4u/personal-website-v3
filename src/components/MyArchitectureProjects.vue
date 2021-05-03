<template>
    <div class="w-full flex flex-col gap-8 mx-auto">
        <h1 class="font-montserrat text-2xl font-bold text-center">Architecture Projects</h1>
        <div>
            <p class="font-roboto text-base text-center">I am a licensed architect, practicing in Nigeria.</p>
            <p class="font-roboto text-sm italic text-center">Please find below, a few of my previous projects.</p>
        </div>
        <ul class="w-full grid grid-cols-3 gap-2 bg-gray-200 p-4 rounded-md shadow-md">
            <archi-project-card
                @imgClicked="openCarousel"
                v-for="project in projects"
                :key="project.title"
                :project="project">
            </archi-project-card>
        </ul>
        <dialog :open="showDialog" class="max-w-6xl bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-md">
            <p @click="closeModal" class="cursor-pointer transform hover:scale-110 text-sm float-left">Close</p>
            <div class="w-full grid grid-cols-2 gap-4 mt-2 clear-both">
                <img v-for="(image, index) in dialogImages" :key="index" :src="image" alt="" class="col-span-1 w-full h-auto object-cover">
            </div>
        </dialog>
    </div>
</template>


<script>
import architectureProjects from '../architectureProjects.js'
import ArchiProjectCard from './Ui/MyArchitectureProjectCard.vue'
import { ref } from 'vue'


export default {
    components: {
        ArchiProjectCard,
    },
    setup() {
        const projects = architectureProjects

        const showDialog = ref(false)
        const dialogImages = ref(null)

        const openCarousel = function(name) {
            showDialog.value = true
            const relevantProject = projects.find(e => e.title === name)
            dialogImages.value = relevantProject.images
        }

        const closeModal = function() {
            showDialog.value = false
            dialogImages.value = null
        }

        return {
            projects,
            openCarousel,
            showDialog,
            closeModal,
            dialogImages
        }
    },
}
</script>
