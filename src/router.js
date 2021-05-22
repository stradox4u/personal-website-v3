import { createRouter, createWebHistory } from 'vue-router'

const MyLandingPage = () => import('./components/MyLandingPage.vue')
const MyWebPortfolio = () => import('./components/MyWebPortfolio.vue')
const MyLocalApps = () => import('./components/MyLocalApps.vue')
const MyTodoList = () => import('./components/MyTodoList.vue')
const MyWeatherApp = () => import('./components/MyWeatherApp.vue')
const MyArchitectureProjects = () => import('./components/MyArchitectureProjects.vue')
const MyConstructionProjects = () => import('./components/MyConstructionProjects.vue')
const MyPhotography = () => import('./components/MyPhotography.vue')
const MyTarotCardReader = () => import('./components/TarotReader.vue')
const NotFoundComponent = () => import('./components/NotFound.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MyLandingPage, name: 'home' },
        { path: '/web-portfolio', component: MyWebPortfolio, name: 'devPortfolio' },
        {
            path: '/local-apps',
            component: MyLocalApps,
            name: 'localApps',
            children: [
                { path: 'todo-list', component: MyTodoList, name: 'todo-list' },
                { path: 'weather-app', component: MyWeatherApp, name: 'weather-app' },
                { path: 'tarot', component: MyTarotCardReader, name: 'tarot-reader' },
            ]
        },
        { path: '/architecture', component: MyArchitectureProjects, name: 'architecture' },
        { path: '/construction', component: MyConstructionProjects, name: 'construction' },
        { path: '/photography', component: MyPhotography, name: 'photography' },
        { path: '/:pathMatch(.*)', component: NotFoundComponent },
        { path: '/*', redirect: '/' },
    ]
})

export default router