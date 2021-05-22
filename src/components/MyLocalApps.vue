<template>
    <div class="w-full flex flex-col gap-8 mx-auto">
        <h1 class="font-montserrat text-2xl font-bold text-center">{{ activeApp }}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'


export default {
    setup() {
        const currentPath = computed(() => {
            return useRoute().path
        })

        const activeApp = computed(() => {
            if(currentPath.value === '/local-apps/todo-list') {
                return 'Todos'
            } else if(currentPath.value === '/local-apps/weather-app') {
                return 'Weather'
            } else if(currentPath.value === '/local-apps/tarot') {
                return 'Tarot'
            } else {
                return null
            }
        })

        return {
            activeApp
        }
    },
}
</script>