import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

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

                    console.log(data);

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
            console.log("fetching cart");
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
        addProductToCart({ commit }, payload) {
            commit('SET_CURRENTUSERCART', payload)
        },

        // ********************Need to ask **********************************
        // cartTotalPrice({ commit }) {
        //     // alert("cart total price")
        //     console.log(commit);

        //     // console.log(this.state.currentUserCart);
        //     // console.log("comming from cart price");
        //     let price = this.state.currentUserCart;
        //     // console.log(price);
        //     // console.log(price);
        //     // for (let data in price) {
        //     //     console.log(data);
        //     // }

        //     // let keys = Object.keys(price);

        //     price.forEach(key => {
        //             // let item = price[key];
        //             console.log(key);
        //             //...work with item
        //         })
        //         // console.log(price);
        //         // console.log(commit);
        // }


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