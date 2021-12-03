
    <!-- 
System: E-commerce App using Dummy Api
Developer: Muhammad Ali
Date: Dec 3, 2021
Organization: Programmer Force
Purpose: This file signUp.vue is responsible to handle all user data filled in Sign up form.
 -->
<template>
  <div class="wrapper">
    <section class="main">
      <v-container>
        <v-row class="mt-8">
          <v-col cols="12" lg="4" xl="4" xs="12" sm="12">
            <v-form class="form pa-5 rounded" ref="form">
              <div class="img-container mb-12">
                <img src="../assets/shopify.png" alt="" />
              </div>
              <h1>Create a Shopify ID</h1>
              <v-spacer></v-spacer>
              <p class="grey--text lighten-1 font-weight-light">
                The ecommerce platform made for you
              </p>

              <v-text-field
                append-icon="mdi-pencil-outline"
                v-model="userData.name.firstname"
                hint="minimum 3 characters"
                :rules="nameRules"
                placeholder="First Name"
              ></v-text-field>

              <v-text-field
                v-model="userData.name.lastname"
                append-icon="mdi-pencil-outline"
                hint="minimum 3 characters"
                :rules="nameRules"
                placeholder="Last Name"
              ></v-text-field>

              <v-text-field
                v-model="userData.username"
                append-icon="mdi-account"
                placeholder="User Name"
                :rules="usernameRule"
                :hint="usernameHint"
                ref="username"
              ></v-text-field>

              <v-text-field
                v-model="userData.email"
                placeholder="Email"
                append-icon="mdi-email"
                :rules="emailRule"
                :hint="emailHint"
                ref="email"
              ></v-text-field>

              <v-text-field
                v-model="userData.phone"
                placeholder="Phone No"
                append-icon="mdi-phone-plus-outline"
                :rules="phoneNoRule"
                ref="phoneNo"
              ></v-text-field>

              <v-text-field
                v-model="userData.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                placeholder="Password"
                counter="8"
                :rules="passwordRules"
                @click:append="show1 = !show1"
                hint="Must contain 1 Small and Capital letter, 1 digit (Special Characters not allowed)"
              ></v-text-field>

              <!-- ************************ Need to ask ******************************** -->
              <v-file-input
                accept="image/*"
                label="Upload Profile Picture"
                v-on:change="storeImg"
                required
              ></v-file-input>

              <p class="mt-5 font-weight-light">
                By proceeding, you agree to the
                <a href="#">Terms and conditions</a>
              </p>

              <v-btn
                class="white--text blue darken-4 pa-7 px-12"
                elevation="2"
                @click="submit"
                >Create Shopify Id</v-btn
              >

              <p class="mt-5 font-weight-light">
                Already have a shopify id?
                <router-link to="/SignIn"> Login </router-link>
              </p>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import {
  emailRule,
  nameRules,
  passwordRules,
  phoneNoRule,
  usernameRule,
} from "../validation/validation.js";
import { mapState } from "vuex";

export default {
  name: "Home",

  data() {
    return {
      userData: {
        address: {
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
          city: "Lahore",
          street: "12-A, Johar Town",
          number: "619",
          zipcode: "12926-3874",
        },
        id: "",
        email: "",
        username: "",
        password: "",
        profilePicture: "",
        name: {
          firstname: "",
          lastname: "",
        },
        phone: "",
      },
      nameRules: nameRules,
      passwordRules: passwordRules,
      emailRule: emailRule,
      phoneNoRule: phoneNoRule,
      usernameRule: usernameRule,
      emailHint: null,
      usernameHint: null,
      show1: false,
    };
  },
  methods: {
    // need to ask
    storeImg(event) {
      let vm = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          vm.userData.profilePicture = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },

    submit() {
      let validate = true;
      if (this.$refs.form.validate()) {
        const keys = Object.keys(localStorage);
        for (let key of keys) {
          if (this.userData.email === key) {
            this.$refs.email.focus();
            this.emailHint = "Email already Exists";
            validate = false;
            if (
              this.userData.username ===
              JSON.parse(localStorage.getItem(key)).username
            ) {
              this.usernameHint = "User name already Exists";
              this.$refs.username.focus();
              validate = false;
            }
          }
        }
        if (validate) {
          localStorage.setItem(
            this.userData.email,
            JSON.stringify(this.userData)
          );
          localStorage.setItem("currentUser", this.userData.email);
          validate = true;
          this.$router.push({ name: "Home" });
        }
      }
    },
  },
  computed: {
    ...mapState({ msg: (state) => state.SignUp.message }),
  },
  mounted() {
    document.title = "Sign Up";
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
.img-container {
  width: 25%;
}
.img-container img {
  width: 100%;
}
</style>
