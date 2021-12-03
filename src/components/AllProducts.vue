<!--
in this file all the products data is fetched from api and it will be rendered here in this file.
 -->


<template>
  <div>
    <v-row>
      <v-col cols="12" class="mt-7 py-2 px-13">
        <h3 class="ms-2 mb-5">Filter Results:</h3>
        <v-btn-toggle v-model="text" tile color="blue darken-2" group>
          <v-btn value="left" @click="sort('asc')"> Ascending Sort </v-btn>

          <v-btn value="center" @click="sort('desc')"> Decending Sort </v-btn>

          <v-menu offset-y>
            <template value="right" v-slot:activator="{ on, attrs }">
              <v-btn fdark v-bind="attrs" v-on="on">
                Dropdown
                <v-icon right>mdi-chevron-down </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title
                  @click="show(item.id)"
                  style="cursor: pointer"
                  >{{ item.title }}</v-list-item-title
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <!-- ************************************************************************* -->

    <v-row>
      <v-col
        v-for="data in getAllProducts"
        :key="data.id"
        cols="12"
        xs="6"
        sm="4"
        md="4"
        lg="3"
        xl="3"
      >
        <v-card class="mx-auto my-12" max-width="374">
          <v-responsive height="250">
            <v-img contain :src="data.image" alt=""></v-img>
          </v-responsive>
          <v-card-title style="height: 10rem"
            >{{ data.title }} - {{ data.id }}</v-card-title
          >

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="data.rating.rate"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">
                {{ data.rating.rate }} ({{ data.rating.count }})
              </div>
            </v-row>

            <div class="my-4 text-h6">${{ data.price }}</div>
          </v-card-text>
          <v-divider></v-divider>

          <v-card-actions>
            <v-btn
              color="blue lighten-2"
              text
              @click="fetchSingleProductData(data.id)"
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "allProducts",
  data() {
    return {
      // this object is used to apply filter in 
      items: [
        { title: "fetch 5", id: 5 },
        { title: "fetch 10", id: 10 },
        { title: "fetch 15", id: 15 },
        { title: "fetch 20", id: 20 },
      ],
      text: "left",
      icon: "justify",
      toggle_none: null,
      toggle_one: 0,
      toggle_exclusive: 2,
      toggle_multiple: [0, 1, 2],
    };
  },
  methods: {
    show(data) {
      this.$store.dispatch("fetchAllProducts", data);
    },
    sort(data) {
      this.$store.dispatch("fetchAllProducts", data);
    },
    fetchAllProducts() {
      this.allProductsStatus = true;
      this.$store.dispatch("fetchAllProducts");
    },
    fetchSingleProductData(apiId) {
      this.$store.dispatch("fetchSingleProductData", apiId);
      this.$router.push({ name: "singleProduct" });
    },
  },
  computed: {
    ...mapGetters(["getCat"]),
    ...mapGetters(["getSingleProduct"]),
    ...mapGetters(["getLoaderState"]),
    ...mapGetters(["getAllProducts"]),
  },
};
</script>