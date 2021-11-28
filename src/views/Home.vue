<template>
  <!-- <hello-world /> -->
  <div class="blue-grey">
    <!-- <test /> -->
    <appbar />
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto blue lighten-5"
      max-height="auto"
    >
      <v-container class="mt-16 blue lighten-5">
        <v-row gutters>
          <v-col cols="12" xs="12" sm="12" md="12" lg="5" xl="5">
            <v-card class="pa-2 fill-height blue lighten-5" flat tile>
              <!-- <v-responsive>
                <v-img src="../assets/back.jpg"></v-img>
              </v-responsive>
               -->
              <div
                class="
                  blue--text
                  text--darken-4
                  font-weight-bold
                  text-h4 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h3
                "
              >
                The platform commerce is built on
              </div>

              <p
                class="
                  blue--text
                  text--darken-2
                  headline
                  font-weight-light
                  mt-5
                "
              >
                More than a million of the world's most successful brands trust
                Shopify to sell, ship and process payments anywhere. Email
                address
              </p>

              <v-text-field
                outlined
                label="Enter you email"
                append-icon="mdi-email"
              ></v-text-field>
              <v-btn
                width="100%"
                class="white--text blue darken-4 py-8"
                elevation="2"
                small
                x-large
                @click="snackbar = true"
                >Start free trial</v-btn
              >

              <v-snackbar
                top
                right
                color="success"
                v-model="snackbar"
                timeout="2000"
              >
                <span class="group">
                  {{ text }}

                  <v-icon dark>mdi-check-decagram-outline </v-icon>
                </span>
              </v-snackbar>

              <div class="text-body-1 mt-8">
                Try Shopify free for 14 days, no credit card required.By
                entering your email, you agree to receive marketing emails from
                Shopify.
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" xs="12" md="12" lg="7" xl="7">
            <v-card
              class="pa-2 fill-height blue lighten-5"
              flat
              tile
              max-width="100%"
            >
              <v-responsive>
                <v-img src="../assets/herosection.png"></v-img>
              </v-responsive>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <!-- **************************************************************** -->
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto blue darken-2"
      max-height="auto"
    >
      <v-container class="mt-16 blue darken-2">
        <v-row gutters>
          <v-col cols="12" xs="12" sm="12" md="12" lg="8" xl="8">
            <v-card
              class="white--text pa-2 fill-height blue darken-2"
              flat
              tile
            >
              <div
                class="
                  font-weight-bold
                  text-h4 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h3
                "
              >
                Bring your business online
              </div>

              <p class="headline font-weight-light mt-5">
                More than a million of the world's most successful brands trust
                Shopify to sell, ship and process payments anywhere. Email
                address
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" xs="12" md="12" lg="4" xl="4">
            <v-card
              class="pa-2 white--text fill-height blue darken-2"
              flat
              tile
              max-width="100%"
            >
              <div class="text-h5 text-lg-right text-xs-left font-weight-bold">
                Bring your business online

                <v-icon class="white--text">mdi-arrow-right-thick</v-icon>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <v-row gutters>
          <v-col
            v-for="data in categoryData"
            :key="data.categoryName"
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
          >
            <v-card class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <!-- <v-img height="250" src="../assets/cat/men.jpg"></v-img> -->
              <img height="250" src="../assets/cat/men.jpg" alt="" />
              <v-card-title>{{ data.categoryName }}</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">4.5 (413)</div>
                </v-row>

                <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

                <div>
                  Small plates, salads & sandwiches - an intimate setting with
                  12 indoor seats plus patio seating.
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="route">
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- ************************************************************************ -->
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto blue darken-2"
      max-height="auto"
    >
      <v-container class="mt-16 blue darken-2">
        <v-row gutters>
          <v-col cols="12">
            <v-card
              class="white--text pa-2 fill-height blue darken-2"
              flat
              tile
            >
              <div class="text-h4 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h3">
                Take a best path forword
              </div>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mb-16" gutters>
          <v-col
            v-for="n in 4"
            :key="n"
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
          >
            <div>
              <v-icon x-large color="blue lighten-5">mdi-magnify</v-icon>
              <h2 class="white--text mt-6 mb-3">we are here</h2>
              <p class="white--text font-weight-regular">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                dolorem illum, incidunt odit corrupti perspiciatis deleniti aut
                tenetur quia repellat inventore quasi error culpa quis velit
                quas. Sint, maiores optio!
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- 888888888888888888888888888888888888 testing 8888888888888888888888888888888888888888888 -->

    <v-container class="d-flex">
      <v-row>
        <v-col
          v-for="data in d"
          :key="data.id"
          class="mt-9"
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              class="mx-auto fill-height"
              color="grey lighten-4"
              max-height="1000"
              max-width="600"
            >
              <v-img height="500" width="100%" :src="data.image">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="
                      d-flex
                      transition-fast-in-fast-out
                      blue
                      darken-2
                      v-card--reveal
                      text-h2
                      white--text
                    "
                    style="height: 100%"
                  >
                    ${{ data.price }}
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6" style="position: relative">
                <v-btn
                  absolute
                  color="blue"
                  class="white--text"
                  fab
                  large
                  right
                  top
                >
                  <v-icon>mdi-cart</v-icon>
                </v-btn>
                <div class="font-weight-light grey--text text-h6 mb-2">
                  {{ data.category }}
                </div>
                <h3 class="text-h4 font-weight-light blue--text mb-2">
                  {{ data.title }}
                </h3>
                <div class="font-weight-light text-h6 mb-2">
                  {{ data.description }}
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <!-- 888888888888888888888888888888888888 testing 8888888888888888888888888888888888888888888 -->
    <Footer />
    <!-- <About /> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
// import test from "../components/test.vue";
import appbar from "../components/AppBar.vue";
// import HelloWorld from "../components/HelloWorld";
// import HelloWorld from "../components/HelloWorld.vue";
import Footer from "./Footer.vue";
// import About from "./About.vue";

export default {
  name: "Home",

  data() {
    return {
      snackbar: false,
      text: "Subscribed",
      categoryData: [
        {
          image: "../assets/cat/elec.jpg",
          categoryName: "electronics",
        },
        {
          image: "../assets/cat/jewe.jpg",
          categoryName: "jewelery",
        },
        {
          image: "../assets/cat/men.jpg",
          categoryName: "men's clothing",
        },
        {
          image: "../assets/cat/wommen.jpg",
          categoryName: "women's clothing",
        },
      ],
      pa: "../assets/cat/wommen.jpg",
    };
  },
  components: {
    // about,
    // About,
    // test,/
    // HelloWorld,
    Footer,
    appbar,
  },
  computed: {
    ...mapState(["post"]),
    ...mapGetters({ d: "getCat" }),
  },
  methods: {
    route() {
      this.$router.push({ name: "ProductsView" });
    },
    fetchdata(apiId) {
      this.$store.dispatch("apiCall", apiId);
    },
  },
  mounted() {
    if (localStorage.getItem("currentUser") === "") {
      this.$router.push({ name: "SignIn" });
    }
  },
};
</script>



<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.group {
  display: flex;
  flex: 1;
  justify-content: space-between;
}
</style>
