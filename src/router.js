import { createRouter, createWebHistory } from 'vue-router'

import MyLandingPage from './components/MyLandingPage.vue'
import MyWebPortfolio from './components/MyWebPortfolio.vue'
import MyTodoList from './components/MyTodoList.vue'
import MyWeatherApp from './components/MyWeatherApp.vue'
import MyArchitectureProjects from './components/MyArchitectureProjects.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MyLandingPage, name: 'home' },
        {
            path: '/web-portfolio',
            component: MyWebPortfolio,
            name: 'devPortfolio',
            children: [
                { path: 'todo-list', component: MyTodoList, name: 'todo-list' },
                { path: 'weather-app', component: MyWeatherApp, name: 'weather-app' },
            ]
        },
        { path: '/architecture', component: MyArchitectureProjects, name: 'architecture' },
    ]
})

export default router