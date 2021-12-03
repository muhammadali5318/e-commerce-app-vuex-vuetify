<!--
This is the loading skeleton. it is used when data is fetched from api
-->

<template>
  <div>
    <v-container>
      <v-sheet
        :color="`blue ${theme.isDark ? 'lighten-5' : 'lighten-5'}`"
        class="pa-3"
      >
        <v-row>
          <v-col
            v-for="data in 4"
            :key="data"
            cols="12"
            xs="6"
            sm="4"
            md="4"
            lg="3"
            xl="3"
          >
            <div>
              <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                type="card"
              ></v-skeleton-loader>
              <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                type="article, actions"
              ></v-skeleton-loader>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "skeletonLader",
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
};
</script>