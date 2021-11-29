import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import { all } from 'core-js/library/es6/promise'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        post: "",
        allUsers: [],
        currentUserCart: [],
        singleProductData: [],
        allProductsData: [],
        showLoader: false,
    },
    mutations: {
        SET_CAT(state, post) {
            state.post = post;

        },
        SET_ALLUSERS(state, allUsers) {
            state.allUsers = allUsers;

        },
        SET_CURRENTUSERCART(state, currentUser) {
            state.currentUserCart.push(currentUser);
        },
        SET_SINGLEPRODUCT(state, singleProductData) {
            state.singleProductData = singleProductData;
        },
        SET_LOADER(state, loaderState) {
            state.showLoader = loaderState;
        },
        SET_ALL_PRODUCTS(state, allProducts) {
            state.allProductsData = allProducts;
        }
    },
    actions: {

        fetchProductsByCategoryName({ commit }, payload) {
            // console.log(typeof payload);
            commit('SET_LOADER', true)
            Vue.axios.get(`https://fakestoreapi.com/products/category/${payload}`).then((response) => {
                    let data = response.data;
                    commit('SET_CAT', data)
                    commit('SET_LOADER', false)

                })
                // console.log(commit);
        },
        fetchAllProducts({ commit }) {
            commit("SET_LOADER", true)

            Vue.axios.get("https://fakestoreapi.com/products?limit=20").then((response) => {
                let data = response.data;
                // console.log(data);

                commit('SET_ALL_PRODUCTS', data);
                // console.log(commit);
                commit("SET_LOADER", false)


            })
        },

        fetchSingleProductData({ commit }, payload) {
            commit('SET_LOADER', true);
            Vue.axios.get(`https://fakestoreapi.com/products/${payload}`).then((response) => {
                    let data = response.data;
                    commit('SET_SINGLEPRODUCT', data)
                    commit('SET_LOADER', false);
                })
                // console.log(commit);
        },
        fetchAllUsers({ commit }) {
            console.log("fetching all users from api is running");
            Vue.axios.get(`https://fakestoreapi.com/users`).then((response) => {
                    console.log(response.data)
                    let data = response.data;
                    commit('SET_ALLUSERS', data)
                    for (let da of data) {
                        localStorage.setItem(da.email, JSON.stringify(da));
                    }
                })
                // console.log(commit);
        },
        fetchCurrentUserCart({ commit }) {
            commit("SET_LOADER", true)
            commit('SET_CURRENTUSERCART', localStorage.getItem('currentUser'));
            let currentUserId = localStorage.getItem('currentUser');
            currentUserId = JSON.parse(localStorage.getItem(currentUserId)).id;
            Vue.axios.get(`https://fakestoreapi.com/carts/${currentUserId}`).then((response) => {

                let data = response.data;
                console.log(data.products);

                for (let data of data.products) {
                    console.log(data);

                    Vue.axios.get(`https://fakestoreapi.com/products/${data.productId}`).then((response) => {
                        commit("SET_LOADER", false)
                        console.log(response.data)
                        commit('SET_CURRENTUSERCART', response.data)

                    })

                }

            })

        },
        //When user click on add to cart button this action will be fired and product will be pushed into the array
        addProductToCart({ commit }, payload) {

            commit('SET_CURRENTUSERCART', payload)
        },


    },
    getters: {
        getCat(state) {
            return state.post;
        },
        getSingleProduct(state) {
            return state.singleProductData;
        },
        getCurrentUserCartData(state) {
            return state.currentUserCart;
        },
        getLoaderState(state) {
            return state.showLoader;
        },
        getAllProducts(state) {
            return state.allProductsData;
        }
    },
    modules: {}
})