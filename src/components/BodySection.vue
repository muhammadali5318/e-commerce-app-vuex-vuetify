<!-- 
this file components/BodySection.vue is just a design component used hi home.vue 
-->


<template>
  <v-sheet
    id="scrolling-techniques-7"
    class="overflow-y-auto blue lighten-5"
    max-height="auto"
  >
    <v-container class="mt-16 blue lighten-5">
      <v-row gutters>
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
            <div
              class="
                mb-7
                blue--text
                text--darken-4
                font-weight-bold
                text-h4 text-sm-h4 text-md-h4 text-lg-h3 text-xl-h3
              "
            >
              Buy From anywhare
            </div>

            <p
              class="blue--text text--darken-2 headline font-weight-light mt-5"
            >
              More than a million of the world's most successful brands trust
              Shopify to sell, ship and process payments anywhere. Email address
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" xs="12" md="12" lg="6" xl="6">
          <v-card
            class="pa-2 fill-height blue lighten-5"
            flat
            tile
            max-width="100%"
          >
            <v-responsive>
              <v-img class="rounded-lg" src="../assets/clothes.jpg"></v-img>
            </v-responsive>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>