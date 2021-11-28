<template>
  <div>hello</div>
</template>

<script>
export default {
  name: "ProductsView",
  mounted() {
    if (localStorage.getItem("currentUser") === "") {
      this.$router.push({ name: "SignIn" });
    }
  },
};
</script>