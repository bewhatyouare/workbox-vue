import Vue from 'vue'
// import Router from 'vue-router'

// Vue.use(Router)

import Qrouter from '@/qrouter/index.js'

const About = () => import('@/components/About.vue')
const My = () => import('@/components/My.vue')
const Home = () => import('@/components/Home.vue')

Vue.use(Qrouter)
export default new Qrouter({
    routes:[
        // {
        //     path: '/',
        //     redirect: '/home'
        // },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/my',
            component: My,
            beforeEach:((to, from, next) => {
                console.info(to);
                console.info(from);
            })
        },
        {
            path: '/about',
            component: About
        }
    ]
})