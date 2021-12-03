<!-- 
this file components/AppBar.vue is the main header main Navbar used in all the components 
-->

<template>
  <div>
    <v-app-bar class="blue lighten-3 text-white mb-16" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Shopify </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-badge left :content="getCurrentUserCartData.length" overlap>
        <v-icon
          style="cursor: pointer"
          v-on:click="goToCart"
          color="grey darken-3"
          size="40"
          >mdi-cart
        </v-icon>
      </v-badge>

      <v-icon size="40" color="grey darken-3" @click="logout" right
        >mdi-exit-to-app</v-icon
      >
    </v-app-bar>

    <v-navigation-drawer
      class="blue lighten-4"
      v-model="drawer"
      fixed
      temporary
    >
      <v-list flat>
        <v-toolbar-title class="px-5 font-weight-medium"
          >Shopify Navigation</v-toolbar-title
        >
        <p class="px-5">Shop your favourite item.</p>
        <v-divider></v-divider>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="route(item.routeName)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "appbar",
  props: ["appbarId"],
  data() {
    return {
      drawer: null,
      selectedItem: Number(this.appbarId),
      appBarStatus: true,
      items: [
        { text: "Home", icon: "mdi-home", routeName: "Home" },
        { text: "Profile", icon: "mdi-account-box", routeName: "UserProfile" },
        {
          text: "Products Store",
          icon: "mdi-bag-checked",
          routeName: "ProductsView",
        },
        {
          text: "View Cart",
          icon: "mdi-cart",
          routeName: "viewcart",
        },
        { text: "About us", icon: "mdi-information", routeName: "" },
        { text: "Contact us", icon: "mdi-card-account-phone", routeName: "" },
      ],
    };
  },
  methods: {
    route(routeName) {
      this.$router.push({ name: routeName });
    },
    goToCart() {
      this.$router.push({ name: "viewcart" });
    },
    logout() {
      this.$router.push({ name: "SignIn" });
      localStorage.setItem("currentUser", "");
    },
  },

  computed: {
    ...mapGetters(["getCurrentUserCartData"]),
  },
  mounted() {
    // if (localStorage.getItem("currentUser") === "") {
    //   this.appBarStatus = false;
    // }
    // alert(typeof );
  },
};
</script>
