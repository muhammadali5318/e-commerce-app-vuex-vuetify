<!--
System: E-commerce App using Dummy Api
Developer: Muhammad Ali
Date: Dec 3, 2021
Organization: Programmer Force
Purpose:  This file View/Home.vue is the landing page of our app. -->



<template>
  <div class="blue-grey">
    <appbar appbarId="0" />
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto blue lighten-5"
      max-height="auto"
    >
      <v-container class="mt-16 blue lighten-5">
        <v-row gutters>
          <v-col cols="12" xs="12" sm="12" md="12" lg="5" xl="5">
            <v-card class="pa-2 fill-height blue lighten-5" flat tile>
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
                Start your online shopping journy now.
              </div>

              <p class="headline font-weight-light mt-5">
                More than a million of the world's most successful brands trust
                Shopify to sell, ship and process payments anywhere.
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

              <v-img height="250" :src="data.image"></v-img>
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

                <div class="my-4">
                  Clothing, jewelery & Electronics - You can find every thing
                  under one roof.
                </div>
              </v-card-text>

              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue lighten-1" text @click="route">
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
            v-for="n in infoSection"
            :key="n.title"
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
          >
            <div>
              <v-icon x-large color="blue lighten-5">{{ n.icon }}</v-icon>
              <h2 class="white--text mt-6 mb-3">{{ n.title }}</h2>
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
    <BodySection />
    <HomeCard />
    <Footer />
  </div>
</template>

<script>
import BodySection from "../components/BodySection.vue";
import appbar from "../components/AppBar.vue";
import HomeCard from "../components/homeCard.vue";
import Footer from "./Footer.vue";

export default {
  name: "Home",

  data() {
    return {
      snackbar: false,
      text: "Subscribed",
      categoryData: [
        {
          image:
            "https://www.techprevue.com/wp-content/uploads/2017/06/electronic-devices-1.jpg",
          categoryName: "electronics",
        },
        {
          image:
            "https://media.istockphoto.com/photos/fancy-designer-antique-golden-bracelets-for-woman-fashion-picture-id1277517088?b=1&k=20&m=1277517088&s=170667a&w=0&h=PXTQvh19pESR7mIekh3mJQHWcw2FDRrYcHdxsv9XY-Q=",
          categoryName: "jewelery",
        },
        {
          image:
            "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8&w=1000&q=80",
          categoryName: "men's clothing",
        },
        {
          image:
            "https://www.andindia.com/media/homepage_content/2/0/20211108-and-m-women-clothing-offers.jpg",
          categoryName: "women's clothing",
        },
      ],
      infoSection: [
        {
          title: "Start online Shopping now",
          icon: "mdi-cursor-default-click",
        },
        {
          title: "Move your business online",
          icon: "mdi-arrow-expand-horizontal",
        },
        {
          title: "Hire a Shopify expert",
          icon: "mdi-account-multiple",
        },
        {
          title: "Switch to Shopify",
          icon: "mdi-home-switch",
        },
      ],
    };
  },
  components: {
    BodySection,
    Footer,
    HomeCard,
    appbar,
  },
  methods: {
    route() {
      this.$router.push({ name: "ProductsView" });
    },
  },
  mounted() {
    if (localStorage.getItem("currentUser") === "") {
      this.$router.push({ name: "SignIn" });
    }
    document.title = "Home";
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
