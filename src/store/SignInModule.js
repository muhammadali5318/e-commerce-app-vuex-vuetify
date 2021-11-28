import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
    state: {
        message: "hello im sign IN",
        posts: []
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts
        }
    },
    actions: {
        getPosts({ commit }) {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    commit('SET_POSTS', response.data)
                })
        }


    },
    modules: {}
}