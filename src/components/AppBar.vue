<template>
  <div>
    <v-app-bar class="blue lighten-3 text-white mb-16" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Shopify</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn @click="logout" outlined color="grey darken-4" class="ma-0">
        <span> Log out</span> <v-icon right>mdi-exit-to-app</v-icon></v-btn
      >
      <v-btn @click="route" outlined color="grey darken-4" class="ma-0">
        <span> View Cart</span> <v-icon right>mdi-exit-to-app</v-icon></v-btn
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
            @click="show(item.routeName)"
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
export default {
  name: "appbar",
  data() {
    return {
      drawer: null,
      selectedItem: 0,
      items: [
        { text: "Home", icon: "mdi-home", routeName: "Home" },
        { text: "Profile", icon: "mdi-account-box", routeName: "UserProfile" },
        {
          text: "Products Store",
          icon: "mdi-bag-checked",
          routeName: "ProductsView",
        },
        { text: "About us", icon: "mdi-information", routeName: "" },
        { text: "Contact us", icon: "mdi-card-account-phone", routeName: "" },
      ],
    };
  },
  methods: {
    show(data) {
      this.$router.push({ name: data });
    },
    route() {
      this.$router.push({ name: "viewcart" });
    },
    logout() {
      this.$router.push({ name: "SignIn" });
      localStorage.setItem("currentUser", "");
    },
  },
};
</script>
