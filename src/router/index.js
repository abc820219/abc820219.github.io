import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import Life from '../views/Life/index.vue'
import Skill from '../views/Skill/index.vue'
import Info from '../views/Info/index.vue'
import Project from '../views/Project/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/life',
        name: 'Life',
        component: Life,
    },
    {
        path: '/info',
        name: 'Info',
        component: Info,
    },
    {
        path: '/project',
        name: 'Project',
        component: Project,
    },
    {
        path: '/skill',
        name: 'Skill',
        component: Skill,
    },
]

const router = new VueRouter({
    routes,
})

export default router
