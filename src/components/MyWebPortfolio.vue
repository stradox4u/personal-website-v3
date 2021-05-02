<template>
    <div class="w-full flex flex-col gap-8 mx-auto">
        <h1 class="font-montserrat text-2xl font-bold text-center">Web Projects</h1>
        <div class="w-full flex flex-col gap-8 bg-gray-200 p-4 rounded-md shadow-md">
            <ul>
                <li v-for="item in portfolioItems" :key="item.name">
                    <router-link :to="item.route">{{ item.name }}</router-link>
                </li>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import projects from '../devProjects.js'
import {  } from 'vue'


export default {
    setup() {
        const portfolioItems = projects

        return {
            portfolioItems,
        }
    },
}
</script>