import { createRouter, createWebHistory } from 'vue-router'

import MyLandingPage from './components/MyLandingPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MyLandingPage },
    ]
})

export default router