import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const About = () => import('@/components/About.vue')
const My = () => import('@/components/My.vue')
const Home = () => import('@/components/Home.vue')

export default new Router({
    routes:[
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/my',
            component: My
        },
        {
            path: '/about',
            component: About
        }
    ]
})