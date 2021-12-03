

<template>
  <v-app-bar
    app
    color="white"
    elevate-on-scroll
    height="100%"
    class="blue-grey darken-2"
    scroll-target="#scrolling-techniques-7"
  >
    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "header",
};
</script>