<!--
System: E-commerce App using Dummy Api
Developer: Muhammad Ali
Date: Dec 3, 2021
Organization: Programmer Force
Purpose:  this file the main functional file of our project View/ProducstsView.vue. 
All the category will be shown here. 
when user click on some specific category all the products will be rendered in this component -->



<template>
  <div class="blue darken-2">
    <Appbar appbarId="2" />
    <v-container class="mb-10">
      <v-row>
        <v-col cols="12" lg="2">
          <v-card class="fill-height" color="blue lighten-5">
            <v-card-title>Categories</v-card-title>
            <v-card-text color="inherit">
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="
                    item.Categorystatus
                      ? fetchProductsByCategoryName(item.text)
                      : fetchAllProducts()
                  "
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" lg="10">
          <v-card class="rounded-lg" color="white">
            <v-window v-model="onboarding">
              <v-window-item>
                <v-card color="transparent" height="400">
                  <v-row class="fill-height" align="center" justify="center">
                    <v-responsive>
                      <v-img src="../assets/Banner/banner.jpg"></v-img>
                    </v-responsive>
                  </v-row>
                </v-card>
              </v-window-item>
              <v-window-item>
                <v-card color="transparent" height="400">
                  <v-row class="fill-height" align="center" justify="center">
                    <v-responsive>
                      <v-img src="../assets/Banner/banner1.jpg"></v-img>
                    </v-responsive>
                  </v-row>
                </v-card>
              </v-window-item>
              <v-window-item>
                <v-card color="transparent" height="400">
                  <v-row class="fill-height" align="center" justify="center">
                    <v-responsive>
                      <v-img src="../assets/Banner/banner2.jpg"></v-img>
                    </v-responsive>
                  </v-row>
                </v-card>
              </v-window-item>
            </v-window>

            <v-card-actions class="justify-space-between">
              <v-btn text @click="prev">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-item-group v-model="onboarding" class="text-center" mandatory>
                <v-item
                  v-for="n in length"
                  :key="`btn-${n}`"
                  v-slot="{ active, toggle }"
                >
                  <v-btn :input-value="active" icon @click="toggle">
                    <v-icon>mdi-record</v-icon>
                  </v-btn>
                </v-item>
              </v-item-group>
              <v-btn text @click="next">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="blue lighten-5 my-16 rounded-lg">
      <div
        class="
          grey--text
          text--darken-3
          font-weight-bold
          text-h4 text-sm-h4 text-md-h4 text-lg-h4 text-xl-h4
          px-7
          pt-7
          mt-7
          mx-4
        "
      >
        Products:
      </div>
      <skeletonLader v-if="getLoaderState" />
      <allProducts v-if="allProductsStatus" />
      <productsByCategoryName v-if="productsByCategoryNameStatue" />
    </v-container>
    <HomeCard />
    <Footer />
  </div>
</template>

<script>
import HomeCard from "../components/homeCard.vue";
import allProducts from "../components/AllProducts.vue";
import productsByCategoryName from "../components/ProductsByCategoryName.vue";
import skeletonLader from "../components/SkeletonLoader.vue";
import Appbar from "../components/AppBar.vue";
import { mapGetters } from "vuex";
import Footer from "./Footer.vue";
export default {
  name: "ProductsView",
  components: {
    Footer,
    HomeCard,
    skeletonLader,
    allProducts,
    productsByCategoryName,
    Appbar,
  },
  data() {
    return {
      allProductsStatus: false,
      productsByCategoryNameStatue: true,
      selectedItem: 0,
      items: [
        { text: "jewelery", icon: "mdi-diamond-stone", Categorystatus: true },
        { text: "electronics", icon: "mdi-boombox", Categorystatus: true },
        { text: "men's clothing", icon: "mdi-face-man", Categorystatus: true },
        {
          text: "women's clothing",
          icon: "mdi-face-woman",
          Categorystatus: true,
        },
        { text: "View All", icon: "mdi-gift-open", Categorystatus: false },
      ],
      length: 3,
      onboarding: 0,
    };
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    },
    fetchProductsByCategoryName(apiId) {
      this.allProductsStatus = false;
      this.productsByCategoryNameStatue = true;
      this.$store.dispatch("fetchProductsByCategoryName", apiId);
    },
    fetchAllProducts() {
      this.allProductsStatus = true;
      this.productsByCategoryNameStatue = false;
      this.$store.dispatch("fetchAllProducts");
    },
    fetchSingleProductData(apiId) {
      this.$store.dispatch("fetchSingleProductData", apiId);
      this.$router.push({ name: "singleProduct" });
    },
  },
  computed: {
    ...mapGetters(["getLoaderState"]),
  },
  mounted() {
    if (localStorage.getItem("currentUser") === "") {
      this.$router.push({ name: "SignIn" });
    }
    this.$store.dispatch("fetchProductsByCategoryName", "jewelery");
    document.title = "Products View";
  },
};
</script>