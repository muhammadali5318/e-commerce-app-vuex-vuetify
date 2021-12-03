<!--
System: E-commerce App using Dummy Api
Developer: Muhammad Ali
Date: Dec 3, 2021
Organization: Programmer Force
Purpose: In this file Views/UserProfile.vue all User details will be shown in this componenet -->


<template>
  <section style="height: 100%" class="d-flex align-center blue darken-3">
    <appbar appbarId="1" />

    <v-container v-for="data in currentUserData" :key="data.email">
      <v-sheet elevation="10" class="rounded pa-5 py-16" color="white">
        <v-form v-on:submit.prevent="updateProfileInfo" ref="test">
          <v-row justify="center">
            <v-col
              align-self="center"
              class="d-flex flex-column align-center"
              cols="12"
              xs="12"
              sm="12"
              lg="4"
              md="12"
              xl="4"
            >
              <v-avatar size="150" class="mb-10">
                <img :src="imagePath" alt="upload" />
              </v-avatar>

              <div class="d-flex align-center mb-3">
                <v-file-input
                  accept="image/*"
                  label="Upload Profile Picture"
                  v-on:change="storeImg"
                ></v-file-input>
                <v-btn
                  color="blue darken-4"
                  class="white--text px-10 ms-5"
                  large
                  v-on:click="updateProfileInfo"
                  >Upload</v-btn
                >
              </div>

              <h2>{{ data.name.firstname }} {{ data.name.lastname }}</h2>
              <p>{{ data.email }}</p>
            </v-col>
            <v-col
              style="border-left: 2px solid #999; border-right: 2px solid #999"
              class="text-center"
              cols="12"
              xs="12"
              sm="12"
              md="12"
              lg="4"
              xl="4"
            >
              <h2>User Information</h2>
              <v-row justify="center">
                <v-col cols="12">
                  <v-card ref="form" flat>
                    <v-card-text>
                      <v-text-field
                        ref="fName"
                        v-on:change="updateProfileInfo"
                        :value="data.name.firstname"
                        v-model="currentUserData[0].name.firstname"
                        label="First Name"
                        placeholder="John Doe"
                        required
                      ></v-text-field>

                      <v-text-field
                        ref="lName"
                        v-model="currentUserData[0].name.lastname"
                        :value="data.name.lastname"
                        label="last Name"
                        placeholder="John Doe"
                        required
                      ></v-text-field>
                      <v-text-field
                        ref="city"
                        v-model="currentUserData[0].address.city"
                        :value="data.address.city"
                        label="City"
                        placeholder="Snowy Rock Pl"
                        counter="25"
                        required
                      ></v-text-field>
                      <v-text-field
                        ref="street"
                        v-model="currentUserData[0].address.street"
                        :value="data.address.street"
                        label="Street"
                        placeholder="El Paso"
                        required
                      ></v-text-field>
                      <v-text-field
                        ref="Number"
                        label="Street Number"
                        required
                        v-model="currentUserData[0].address.number"
                        :value="data.address.number"
                        placeholder="123"
                      ></v-text-field>
                      <v-text-field
                        ref="zip"
                        v-model="currentUserData[0].address.zipcode"
                        :value="data.address.zipcode"
                        label="ZIP / Postal Code"
                        required
                        placeholder="79938"
                      ></v-text-field>
                      <v-text-field
                        ref="phone"
                        v-model="currentUserData[0].phone"
                        :value="data.phone"
                        label="Phone"
                        required
                        placeholder="79938"
                      ></v-text-field>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
            <v-col
              class="text-center"
              cols="12"
              xs="12"
              sm="12"
              md="12"
              lg="4"
              xl="4"
            >
              <h2>User Credentials</h2>
              <v-row justify="center">
                <v-col cols="12">
                  <v-card ref="form" flat>
                    <v-card-text>
                      <v-text-field
                        ref="UserName"
                        v-model="currentUserData[0].username"
                        :value="data.username"
                        label="User Name"
                        placeholder="Ali"
                        disabled
                      ></v-text-field>

                      <v-text-field
                        label="Email"
                        v-model="currentUserData[0].email"
                        :value="data.email"
                        disabled
                        placeholder="user@gmail.com"
                      ></v-text-field>
                      <v-text-field
                        ref="password"
                        v-model="currentUserData[0].password"
                        :value="data.password"
                        label="Password"
                        required
                        placeholder="Password"
                      ></v-text-field>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <div class="d-flex justify-center">
            <v-btn
              type="submit"
              width="200"
              class="white--text blue darken-4 py-6 mt-12"
              elevation="2"
              x-large
              v-on:click="snackbar = true"
              >Update Profile</v-btn
            >
            <v-snackbar
              success
              top
              centered
              color="success"
              v-model="snackbar"
              timeout="2000"
            >
              <span class="group">
                {{ text }}

                <v-icon dark>mdi-check-decagram-outline </v-icon>
              </span>
            </v-snackbar>
          </div>
        </v-form>
      </v-sheet>
    </v-container>
  </section>
</template>

<script>
import appbar from "../components/AppBar.vue";
export default {
  name: "UserProfile",
  components: {
    appbar,
  },
  data() {
    return {
      imagePath: "",
      currentUserData: [],

      currentUser: "",
      snackbar: false,
      text: "Profile Updated Successfully",
    };
  },
  methods: {
    storeImg(event) {
      const reader = new FileReader();
      const vm = this;
      reader.addEventListener(
        "load",
        function () {
          this.imagePath = reader.result;
          vm.currentUserData[0].profilePicture = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },

    updateProfileInfo() {
      this.imagePath = this.currentUserData[0].profilePicture;
      localStorage.setItem(
        this.currentUserData[0].email,
        JSON.stringify(this.currentUserData[0])
      );
    },
  },
  mounted() {
    //this condition is used for redirection to sign in page if user is not logged in
    if (localStorage.getItem("currentUser") === "") {
      this.$router.push({ name: "SignIn" });
    }

    const keys = Object.keys(localStorage);
    this.currentUser = localStorage.getItem("currentUser");

    for (let key of keys) {
      if (this.currentUser === key) {
        this.currentUserData.push(JSON.parse(localStorage.getItem(key)));
      }
    }
    this.imagePath = this.currentUserData[0].profilePicture;
    document.title = "User Profle";
  },
};
</script>

<style scoped>
.group {
  display: flex;
  flex: 1;
  justify-content: space-between;
}
</style>