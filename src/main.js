import { createApp } from 'vue'
import App from './App.vue'
import "./styles/css/index.css"
import router from "./router.js"

import AppHeader from './components/Ui/MyAppHeader.vue'
import BaseButton from './components/Ui/MyBaseButton.vue'

const app = createApp(App)

app.component('app-header', AppHeader)
app.component('base-button', BaseButton)

app.use(router)

app.mount('#app')
