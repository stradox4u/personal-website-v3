<template>
    <div class="w-full flex flex-col gap-8 mx-auto">
        <h1 class="font-montserrat text-2xl font-bold text-center">Web Projects</h1>
        <div class="w-full flex flex-col gap-8 bg-gray-200 p-4 rounded-md shadow-md">
            <ul class="grid sm:grid-cols-4 grid-cols-1 gap-4">
                <project-card v-for="item in portfolioItems" :key="item.name"
                    :item="item" :class="{ 'transform scale-110 shadow-lg': item.name.includes(activeApp)}">
                </project-card>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import projects from '../devProjects.js'
import ProjectCard from './Ui/MyProjectCard.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'


export default {
    components: {
        ProjectCard,
    },
    setup() {
        const portfolioItems = projects
    

        const currentPath = computed(() => {
            return useRoute().path
        })

        const activeApp = computed(() => {
            if(currentPath.value === '/web-portfolio/todo-list') {
                return 'Todo'
            } else if(currentPath.value === '/web-portfolio/weather-app') {
                return 'Weather'
            } else {
                return null
            }
        })

        return {
            portfolioItems,
            activeApp,
        }
    },
}
</script>