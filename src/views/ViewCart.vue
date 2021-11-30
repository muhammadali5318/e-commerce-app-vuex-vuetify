<template>
  <div class="blue darken-2">
    <skeletonLader v-if="getLoaderState" />
    <v-container class="py-16">
      <v-row>
        <v-col
          class="my-1"
          v-for="data in getCurrentUserCartData"
          :key="data.id"
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
              <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                <div class="pe-16 d-flex align-center justify-end">
                  <div>
                    <h1 class="px-5">$ {{ data.price }}</h1>
                  </div>
                  <v-icon color="red" style="cursor: pointer" size="35"
                    >mdi-delete</v-icon
                  >
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
                      <v-card-title
                        >Total Price (To be calculated)
                      </v-card-title>
                      <!-- <v-card-subtitle></v-card-subtitle> -->
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                  <div class="pe-16 d-flex align-center justify-end">
                    <div>
                      <h1 class="px-5">$1200</h1>
                    </div>
                    <v-icon color="red" style="cursor: pointer" size="35"
                      >mdi-delete</v-icon
                    >
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
import { mapGetters } from "vuex";
export default {
  name: "viewcart",
  components: {
    skeletonLader,
    Footer,
    HomeCard,
  },
  data() {
    return {
      price: 0,
    };
  },
  methods: {
    updateCart() {
      this.$store.dispatch("fetchCurrentUserCart");
    },
    //needs to be done
    totalPrice() {
      for (let data of this.getCurrentUserCartData) {
        console.log(data.price);
        console.log(typeof data.price);
        this.price += data.price;
      }
      console.log(this.price);
      // console.log(this.getCurrentUserCartData);
    },
  },

  computed: {
    ...mapGetters(["getCurrentUserCartData"]),
    ...mapGetters(["getLoaderState"]),
  },
  mounted() {
    if (localStorage.getItem("currentUser") === "") {
      this.$router.push({ name: "SignIn" });
    }
    // this.$store.dispatch("fetchCurrentUserCart");
    console.log(this.getCurrentUserCartData);

    for (let data of this.getCurrentUserCartData) {
      this.price += data.price;
    }
  },
};
</script>