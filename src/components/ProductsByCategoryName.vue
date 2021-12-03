<!--
in this file all the categories data fetched from api will be rendered here in this file.
 -->

<template>
  <div>
    <v-row>
      <v-col
        v-for="data in getCat"
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
            <v-img height="100%" :src="data.image" alt=""></v-img>
          </v-responsive>
          <v-card-title style="height: 10rem">{{ data.title }}</v-card-title>

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
  name: "productsByCategoryName",
  methods: {
    fetchSingleProductData(apiId) {
      this.$store.dispatch("fetchSingleProductData", apiId);
      this.$router.push({ name: "singleProduct" });
    },
  },
  computed: {
    ...mapGetters(["getCat"]),
    ...mapGetters(["getSingleProduct"]),
    ...mapGetters(["getLoaderState"]),
  },
};
</script>