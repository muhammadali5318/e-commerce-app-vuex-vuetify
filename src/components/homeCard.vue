<!-- 
this file components/homeCard.vue is just a design component used hi home.vue 
-->

<template>
  <v-sheet
    id="scrolling-techniques-7"
    class="overflow-y-auto blue lighten-5 py-16"
    max-height="auto"
  >
    <v-container class="mt-16 blue lighten-5">
      <v-row gutters>
        <v-col cols="12" class="text-center">
          <v-card class="pa-2 fill-height blue lighten-5" flat tile>
            <div
              class="
                blue--text
                text--darken-4
                font-weight-bold
                text-h4 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h3
              "
            >
              Start your online shopping journey with Shopify
            </div>

            <p
              class="blue--text text--darken-2 headline font-weight-light mt-5"
            >
              Try Shopify for free, and explore all the tools and services you
              need to start, run, and grow your business.
            </p>
            <v-btn
              width="18%"
              class="white--text blue darken-4 py-8"
              elevation="2"
              x-large
              @click="route"
              >Shop More</v-btn
            >

            <div class="text-body-1 mt-8">
              Try Shopify free for 14 days, no credit card required.By entering
              your email, you agree to receive marketing emails from Shopify.
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  methods: {
    route() {
      this.$router.push({ name: "ProductsView" });
    },
  },
};
</script>