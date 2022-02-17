<template>
  <v-app id="inspire">
    <v-main>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
              <v-flex xs12 sm8 md4>
                <v-card class="elevation-12 mr-auto ml-auto" v-on:keyup.enter="signIn">
                    <v-toolbar dark color="primary">
                      <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <v-form>
                          <v-text-field
                            v-model="credentials.inputEmail"
                            prepend-icon="mdi-account"
                            name="email"
                            label="Email"
                            type="email"
                          ></v-text-field>
                          <v-text-field
                            v-model="credentials.inputPassword"
                            id="password"
                            prepend-icon="mdi-lock"
                            name="password"
                            label="Password"
                            type="password"
                          ></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" @click="signIn">Login</v-btn>
                    </v-card-actions>
                </v-card>
              </v-flex>
          </v-layout>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: 'Login',
  data() {
    return {
      credentials: {
        inputEmail: null,
        inputPassword: null,
      }
    }
  },
  methods: {
    async signIn() {
      await axios.post("http://localhost:8000/users/signIn", {...this.credentials})
      .then((res) => res.data);

      await this.$router.push('/home')
    }
  }
};
</script>

<style></style>
