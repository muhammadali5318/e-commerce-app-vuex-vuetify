<!--
System: E-commerce App using Dummy Api
Developer: Muhammad Ali
Date: Dec 3, 2021
Organization: Programmer Force
Purpose: This file View/ViewCart.vue is responsile for viewing the single product details -->


<template>
  <div>
    <appbar appbarId="2" />
    <SkeletonLoader v-if="getLoaderState" />
    <v-sheet
      v-else
      id="scrolling-techniques-7"
      class="overflow-y-auto blue darken-2"
      max-height="auto"
    >
      <v-container class="my-16 rounded-lg blue lighten-5">
        <v-row class="d-flex justify-center" gutters>
          <v-col align-self="center" cols="12" xs="12" md="12" lg="6" xl="6">
            <v-card class="pa-2 fill-height blue lighten-5" flat tile>
              <v-responsive>
                <v-img
                  class="rounded-lg"
                  contain
                  :src="getSingleProduct.image"
                ></v-img>
              </v-responsive>
            </v-card>
          </v-col>

          <v-col
            align-self="center"
            cols="12"
            xs="12"
            sm="12"
            md="12"
            lg="6"
            xl="6"
          >
            <v-card class="pa-2 fill-height blue lighten-5" flat tile>
              <v-card-title
                class="
                  mb-7
                  Grey--text
                  text--darken-4
                  font-weight-bold
                  pa-0
                  text-h4 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h3
                "
              >
                {{ getSingleProduct.title }}
              </v-card-title>
              <!-- 8888888888888888888888888888888888888888888 -->

              <v-card-text class="pa-0">
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="getSingleProduct.rating.rate"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">
                    {{ getSingleProduct.rating.rate }} ({{
                      getSingleProduct.rating.count
                    }})
                  </div>
                </v-row>

                <div class="my-4">
                  Category: &nbsp;
                  <strong> {{ getSingleProduct.category }}</strong>
                </div>
              </v-card-text>

              <div
                class="
                  blue--text
                  text--darken-4
                  font-weight-bold
                  mt-8
                  text-h4 text-sm-h4 text-md-h4 text-lg-h2 text-xl-h2
                "
              >
                ${{ getSingleProduct.price }}
              </div>

              <p class="grey--text text--darken-2 headline font-weight-light">
                <span class="text-decoration-line-through"> 15% Off.</span>
              </p>
              <!-- 8888888888888888888888888888888888888888888 -->

              <p
                class="
                  grey--text
                  text--darken-2
                  headline
                  font-weight-light
                  my-16
                "
              >
                <span class=""><strong> Description:</strong> <br /></span>
                {{ getSingleProduct.description }}
              </p>

              <v-btn
                color="blue darken-1"
                x-large
                outlined
                text
                @click="addProductToCart"
              >
                <span> Add to cart </span> <v-icon right>mdi-cart</v-icon>
              </v-btn>
              <v-snackbar
                top
                center
                color="success"
                v-model="snackbar"
                timeout="2000"
              >
                <span class="group">
                  {{ text }}

                  <v-icon dark>mdi-check-decagram-outline </v-icon>
                </span>
              </v-snackbar>
              <v-card-actions> </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <HomeCard />
    <Footer />
  </div>
</template>
<script>
import appbar from "../components/AppBar.vue";
import HomeCard from "../components/homeCard.vue";
import SkeletonLoader from "../components/SkeletonLoader.vue";
import { mapGetters } from "vuex";
import Footer from "./Footer.vue";

export default {
  name: "singleProduct",
  components: {
    Footer,
    appbar,
    HomeCard,
    SkeletonLoader,
  },
  data() {
    return {
      snackbar: false,
      text: "Added to cart",
    };
  },

  computed: {
    ...mapGetters(["getSingleProduct"]),
    ...mapGetters(["getLoaderState"]),
  },
  methods: {
    addProductToCart() {
      this.snackbar = true;
      this.$store.dispatch("addProductToCart", this.getSingleProduct);
    },
    route() {
      this.$router.push({ name: "cart" });
    },
  },
  mounted() {
    document.title = "Product page";
  },
};
</script>

<style scoped>
.group {
  display: flex;
  flex: 1;
  justify-content: space-between;
}
</style>