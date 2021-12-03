<!--
System: E-commerce App using Dummy Api
Developer: Muhammad Ali
Date: Dec 3, 2021
Organization: Programmer Force
Purpose:  this file View/SignIn.vue is responsible for user authentication and login into the system -->


<template>
  <div class="wrapper">
    <section class="main">
      <v-container>
        <v-row class="mt-16 pt-16">
          <v-col cols="12" lg="4" xl="4" xs="12" sm="12">
            <v-form ref="form" class="pa-5 rounded form">
              <div class="img-container mb-12">
                <img src="../assets/shopify.png" alt="" />
              </div>
              <h1>Login to Shopify</h1>
              <v-spacer></v-spacer>
              <p class="grey--text lighten-1 font-weight-light">
                The ecommerce platform made for you
              </p>

              <v-text-field
                v-model="user.email"
                placeholder="Email"
                append-icon="mdi-email"
                :rules="emailRule"
                :hint="emailHint"
                ref="email"
              ></v-text-field>

              <v-text-field
                v-model="user.pass"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                placeholder="Password"
                @click:append="show1 = !show1"
              ></v-text-field>

              <v-btn
                class="white--text blue darken-4 px-4"
                elevation="2"
                @click="submit"
                >Login</v-btn
              >

              <v-snackbar
                top
                centered
                color="red"
                v-model="snackbar"
                timeout="2000"
              >
                <span class="group">
                  {{ text }}

                  <v-icon dark>mdi-check-decagram-outline </v-icon>
                </span>
              </v-snackbar>

              <p class="mt-5 font-weight-light">
                Already have a shopify id?
                <router-link to="/"> Sign Up </router-link>
              </p>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import { emailRule, passwordRules } from "../validation/validation.js";
import { mapState } from "vuex";

export default {
  name: "Home",

  data() {
    return {
      user: {
        email: "",
        pass: "",
      },
      snackbar: false,
      text: "Invalid Credentials",
      emailRule: emailRule,
      passwordRules: passwordRules,
      emailHint: null,
      show1: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const keys = Object.keys(localStorage);
        console.log();

        for (let key of keys) {
          if (this.user.email === key) {
            if (
              this.user.pass === JSON.parse(localStorage.getItem(key)).password
            ) {
              localStorage.setItem("currentUser", this.user.email);
              this.$router.push({ name: "Home" });
            }
          }
        }
        this.snackbar = true;
      } else {
        alert("else");
      }
    },
  },
  computed: {
    ...mapState({ msg: (state) => state.SignUp.message }),
  },
  mounted() {
    document.title = "Login";
  },
};
</script>


<style scoped>
.wrapper {
  background: url("../assets/back.jpg");
  background-repeat: no-repeat;
  background-position: center;
  overflow-y: auto;
}
.main {
  width: 100vw;
  height: 100vh;
}

.form {
  background-color: rgba(255, 255, 255, 0.9);
}
.group {
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.img-container {
  width: 25%;
}
.img-container img {
  width: 100%;
}
</style>