<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "App",
  components: {},

  data: () => ({}),

  mounted() {
    // console.log(typeof localStorage.getItem("currentUser"));
    this.$store.dispatch("fetchAllUsers");
    // Vue.axios
    //   .get("https://fakestoreapi.com/products/category/men's clothing")
    //   .then((response) => {
    //     console.log(response.data);
    //   });
    // Vue.axios.get("https://fakestoreapi.com/products/1").then((response) => {
    //   console.log(response.data);
    // });
    this.$store.dispatch("fetchCurrentUserCart");
  },
};
</script>
