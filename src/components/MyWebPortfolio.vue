<template>
    <div class="w-full flex flex-col gap-8 mx-auto">
        <h1 class="font-montserrat text-2xl font-bold text-center">Web Projects</h1>
        <div class="w-full flex flex-col gap-8 bg-gray-200 p-4 rounded-md shadow-md">
            <ul class="grid sm:grid-cols-3 grid-cols-1 gap-4 mb-4">
                <project-card v-for="item in portfolioItems"
                    :key="item.name"
                    :item="item" >
                </project-card>
            </ul>
        </div>
    </div>
</template>

<script>
import projects from '../devProjects.js'
import ProjectCard from './Ui/MyProjectCard.vue'


export default {
    components: {
        ProjectCard,
    },
    setup() {
        const portfolioItems = projects

        return {
            portfolioItems,
        }
    },
}
</script>