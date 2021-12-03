/*
System: E-commerce App using Dummy Api
Developer: Muhammad Ali
Date: Dec 3, 2021
Organization: Programmer Force
Purpose: This file store/index.js is the global state management file for this system all the api calling, mutation and state handling is performed in this files.*/


import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ProductsDataByCategoryName: "",
        allUsers: [],
        currentUserCart: [],
        singleProductData: [],
        allProductsData: [],
        showLoader: false,
        totalCartPrice: undefined,
    },
    mutations: {
        SET_CAT(state, ProductsDataByCategoryName) {
            state.ProductsDataByCategoryName = ProductsDataByCategoryName;

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
        },
        SET_CART_TOTAL_PRICE(state, sum) {
            state.totalCartPrice = sum;
        }
    },
    actions: {

        //this function will fetch all the products of specific category on which uesr clicked
        fetchProductsByCategoryName({ commit }, payload) {
            commit('SET_LOADER', true)
            Vue.axios.get(`https://fakestoreapi.com/products/category/${payload}`).then((response) => {
                let data = response.data;
                commit('SET_CAT', data)
                commit('SET_LOADER', false)

            })

        },
        //this function will fetch all the products availabe in fakeApi 
        fetchAllProducts({ commit }, payload) {

            //this condition will fetch prodcts in desc order
            if (payload == "desc") {
                commit("SET_LOADER", true)

                Vue.axios.get(`https://fakestoreapi.com/products?sort=${payload}`).then((response) => {
                    let data = response.data;

                    commit('SET_ALL_PRODUCTS', data);
                    commit("SET_LOADER", false)


                })
            } else if (payload == "asc") { //this condition will fetch prodcts in ascending order

                commit("SET_LOADER", true) //this commit will enable the loader until the api respose came
                Vue.axios.get(`https://fakestoreapi.com/products?sort=${payload}`).then((response) => {
                    let data = response.data;
                    commit('SET_ALL_PRODUCTS', data);
                    commit("SET_LOADER", false)


                })
            } else if (!isNaN(payload)) { //this condition will fetch products according to limit that user select
                commit("SET_LOADER", true)
                Vue.axios.get(`https://fakestoreapi.com/products?limit=${payload}`).then((response) => {
                    let data = response.data;
                    commit('SET_ALL_PRODUCTS', data);
                    commit("SET_LOADER", false)

                })
            } else { //this function will fetch all the products availabe in fakeApi 
                commit("SET_LOADER", true)
                Vue.axios.get("https://fakestoreapi.com/products?limit=20").then((response) => {
                    let data = response.data;

                    commit('SET_ALL_PRODUCTS', data);
                    commit("SET_LOADER", false)
                })
            }
        },

        //this function will fetch single product on which user clicks 
        fetchSingleProductData({ commit }, payload) {
            commit('SET_LOADER', true);
            Vue.axios.get(`https://fakestoreapi.com/products/${payload}`).then((response) => {
                let data = response.data;
                commit('SET_SINGLEPRODUCT', data)
                commit('SET_LOADER', false);
            })
        },
        //this function will fetch all the users from api and store them in local storage 
        fetchAllUsers({ commit }) {
            console.log("fetching all users from api is running");
            Vue.axios.get(`https://fakestoreapi.com/users`).then((response) => {
                let data = response.data;
                commit('SET_ALLUSERS', data)
                for (let da of data) {
                    localStorage.setItem(da.email, JSON.stringify(da));
                }
            })
        },
        //This function will fetch the cart details of user. if the logged in user is from api
        fetchCurrentUserCart({ commit }) {

            let currentUserId = localStorage.getItem('currentUser');
            currentUserId = JSON.parse(localStorage.getItem(currentUserId)).id;

            if (currentUserId != "") {

                Vue.axios.get(`https://fakestoreapi.com/carts/${currentUserId}`).then((response) => {
                    let data = response.data;
                    if ((data != null)) {
                        commit("SET_LOADER", true)
                        for (let product of data.products) {

                            Vue.axios.get(`https://fakestoreapi.com/products/${product.productId}`).then((response) => {
                                commit("SET_LOADER", false)
                                commit('SET_CURRENTUSERCART', response.data)
                            })

                        }

                    }
                })

            }

        },
        //When user click on add to cart button this action will be fired and product will be pushed into the array
        addProductToCart({ commit, state }, payload) {
            let sum = 0;
            commit('SET_CURRENTUSERCART', payload)
            setTimeout(() => {

                const propertyNames = Object.keys(state.currentUserCart);
                propertyNames.forEach(function(x) {
                    sum += state.currentUserCart[x].price;
                    commit("SET_CART_TOTAL_PRICE", sum);
                })
            }, 2000);
            commit("SET_CART_TOTAL_PRICE", sum);
        },

        // ********************I this action will calculte the total price of  **********************************
        cartTotalPrice({ commit, state }) {
            let sum = 0;
            setTimeout(() => {

                const propertyNames = Object.keys(state.currentUserCart);
                propertyNames.forEach(function(x) {
                    sum += state.currentUserCart[x].price;
                    commit("SET_CART_TOTAL_PRICE", sum);
                })
            }, 2000);

        }


    },
    getters: {
        getCat(state) {
            return state.ProductsDataByCategoryName;
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
        },
        getTotalCartPrice(state) {
            return state.totalCartPrice;
        }
    },
    modules: {}
})