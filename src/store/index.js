import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        jwe: "",
        msg: "helle vuex",
        post: [],
        allUsers: []
    },
    mutations: {
        SET_CAT(state, allusers) {
            state.allUsers = allusers;

        },
        SET_ALLUSERS(state, post) {
            state.post = post;

        },
    },
    actions: {
        apiCall({ commit }, payload) {
            console.log(typeof payload);
            Vue.axios.get(`https://fakestoreapi.com/products/category/${payload}`).then((response) => {
                    console.log(response.data)
                    let data = response.data;
                    commit('SET_CAT', data)
                })
                // console.log(commit);
        },
        fetchAllUsers({ commit }) {
            console.log("fetch is running");
            Vue.axios.get(`https://fakestoreapi.com/users`).then((response) => {
                    console.log(response.data)
                    let data = response.data;
                    commit('SET_CAT', data)
                    for (let da of data) {
                        localStorage.setItem(da.email, JSON.stringify(da));
                        // console.log(da.email);
                    }
                })
                // console.log(commit);
        }

    },
    getters: {
        getCat(state) {
            return state.post
        }
    },
    modules: {}
})