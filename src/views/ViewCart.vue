<template>
  <div>
    <h1>hello from view cart</h1>
    <!-- <v-btn @click="showCart">Check user cart</v-btn> -->

    <h2 v-for="data in getCurrentUserCartData" :key="data.id">
      {{ data.title }}
    </h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "viewcart",
  methods: {},
  mounted() {
    this.$store.dispatch("fetchCurrentUserCart");
  },

  computed: {
    ...mapGetters(["getCurrentUserCartData"]),
  },
};
</script>