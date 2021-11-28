<template>
  <!-- <div>
    <div v-for="data in currentUserData" :key="data.email">
      <input type="text" :value="data.email" />
    </div>
  </div> -->
  <section style="height: 100%" class="d-flex align-center blue darken-3">
    <v-container v-for="data in currentUserData" :key="data.email">
      <v-sheet elevation="10" class="rounded pa-5 py-16" color="white">
        <v-form v-on:submit.prevent="show" ref="test">
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
              <v-img
                width="50%"
                position="center center"
                class="rounded-xl mb-12"
                src="../assets/dummy.png"
              ></v-img>

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
              <h2>Profile settings</h2>
              <v-row justify="center">
                <v-col cols="12">
                  <v-card ref="form" flat>
                    <v-card-text>
                      <v-text-field
                        ref="fName"
                        v-on:change="show"
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
export default {
  name: "UserProfile",
  data() {
    return {
      currentUserData: [],

      currentUser: "",
      snackbar: false,
      text: "Profile Updated Successfully",
      userData: {
        address: {
          geolocation: {
            lat: "",
            long: "",
          },
          city: "",
          street: "",
          number: "",
          zipcode: "",
        },
        id: 1,
        email: "",
        username: "",
        password: "",
        name: {
          firstname: "",
          lastname: "",
        },
        phone: "",
        __v: 0,
      },
      test: "",
      updatedUser: {
        address: {
          geolocation: {
            lat: "",
            long: "",
          },
          city: "",
          street: "",
          number: "",
          zipcode: "",
        },
        id: 1,
        email: "",
        username: "",
        password: "",
        name: {
          firstname: "",
          lastname: "",
        },
        phone: "",
        __v: 0,
      },
    };
  },
  methods: {
    show() {
      // console.log(this.$refs.emailref[0].value);
      console.log(this.$refs.fName[0].value);
      console.log(this.$refs.lName[0].value);
      console.log(this.currentUserData[0]);
      localStorage.setItem(
        this.currentUserData[0].email,
        JSON.stringify(this.currentUserData[0])
      );
    },
  },
  mounted() {
    console.log("user profile is running");
    if (localStorage.getItem("currentUser") === "") {
      this.$router.push({ name: "SignIn" });
    }
    const keys = Object.keys(localStorage);
    this.currentUser = localStorage.getItem("currentUser");
    for (let key of keys) {
      if (this.currentUser === key) {
        this.currentUserData.push(JSON.parse(localStorage.getItem(key)));
        console.log(this.currentUserData);
      }
    }
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