/*
System: E-commerce App using Dummy Api
Developer: Muhammad Ali
Date: Dec 3, 2021
Organization: Programmer Force
Purpose:  All the routers usesd in this system are defined here in this router/index.js file*/



import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import ProductsView from '../views/ProductsView.vue'
import UserProfile from '../views/UserProfile.vue'
import singleProduct from '../views/SingleProduct.vue'
import viewcart from '../views/ViewCart'

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
        path: '/singleProduct',
        name: 'singleProduct',
        component: singleProduct
    },

    {
        path: '/viewcart',
        name: 'viewcart',
        component: viewcart
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