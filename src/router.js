import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'
import SixCharacters from './components/SixCharacters.vue';
import EightCharacters from './components/EightCharacters.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/six',
        name: 'SixCharacters',
        component: SixCharacters
    },
    {
        path: '/eight',
        name: 'EightCharacters',
        component: EightCharacters
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
