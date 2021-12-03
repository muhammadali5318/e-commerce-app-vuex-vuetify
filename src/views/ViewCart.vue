<!--
System: E-commerce App using Dummy Api
Developer: Muhammad Ali
Date: Dec 3, 2021
Organization: Programmer Force
Purpose: In this file View/ViewCart.vue all the products that user added into the cart will be shown here -->


<template>
  <div class="blue darken-2">
    <Appbar appbarId="3" />
    <skeletonLader v-if="getLoaderState" />
    <v-container class="py-16">
      <v-row>
        <v-col
          class="my-1"
          v-for="(data, index) in getCurrentUserCartData"
          :key="index"
          cols="12"
          lg="12"
        >
          <v-card>
            <v-row>
              <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                <div class="ps-16 d-flex">
                  <v-avatar size="80">
                    <img :src="data.image" alt="John" />
                  </v-avatar>
                  <div>
                    <v-card-title>{{ data.title }}</v-card-title>
                    <v-card-subtitle>{{ data.category }}</v-card-subtitle>
                  </div>
                </div>
              </v-col>
              <v-col
                class="d-flex justify-end"
                cols="12"
                xs="12"
                sm="12"
                md="12"
                lg="6"
                xl="6"
              >
                <div class="pe-16 d-flex align-center justify-between">
                  <div>
                    <h1 class="px-5">$ {{ data.price }}</h1>
                  </div>
                  <v-row style="display: inline" justify="center">
                    <v-dialog v-model="dialog" persistent max-width="290">
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          color="red"
                          size="35"
                          dark
                          v-bind="attrs"
                          v-on="on"
                        >
                          mdi-delete
                        </v-icon>
                      </template>
                      <v-card>
                        <v-card-title class="text-h5">
                          Delete Cart Item
                        </v-card-title>
                        <v-card-text
                          >Are you sure you want to delete this item from
                          cart.</v-card-text
                        >
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                          >
                            Disagree
                          </v-btn>
                          <v-btn
                            color="blue darken-1"
                            text
                            @click="deleteCartItem(index)"
                          >
                            Agree
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-row class="mt-4">
        <v-col cols="12" lg="12">
          <v-card>
            <v-row>
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                  <div class="ps-16 d-flex">
                    <div>
                      <v-card-title>Total Price </v-card-title>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                  <div class="pe-16 d-flex align-center justify-end">
                    <div>
                      <h1 class="px-5">${{ getTotalCartPrice }}</h1>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <HomeCard />
    <Footer />
  </div>
</template>

<script>
import skeletonLader from "../components/SkeletonLoader.vue";
import HomeCard from "../components/homeCard.vue";
import Footer from "./Footer.vue";
import Appbar from "../components/AppBar.vue";
import { mapGetters } from "vuex";

export default {
  name: "viewcart",
  components: {
    skeletonLader,
    Footer,
    HomeCard,
    Appbar,
  },
  data() {
    return {
      price: 0,
      dialog: false,
    };
  },
  methods: {
    deleteCartItem(deleteIndex) {
      this.getCurrentUserCartData.splice(deleteIndex, 1);
      this.dialog = false;
    },
  },

  computed: {
    ...mapGetters(["getCurrentUserCartData"]),
    ...mapGetters(["getLoaderState"]),
    ...mapGetters(["getTotalCartPrice"]),
  },
  mounted() {
    if (localStorage.getItem("currentUser") === "") {
      this.$router.push({ name: "SignIn" });
    }
    setTimeout(() => {
      this.$store.dispatch("cartTotalPrice");
    }, 3000);
    document.title = "View Cart";
  },
};
</script>