import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import ProductsView from '../views/ProductsView.vue'
import UserProfile from '../views/UserProfile'

Vue.use(VueRouter)

const routes = [{
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/ProductsView',
        name: 'ProductsView',
        component: ProductsView
    },
    {
        path: '/UserProfile',
        name: 'UserProfile',
        component: UserProfile
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router